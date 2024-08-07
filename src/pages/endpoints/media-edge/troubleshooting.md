---
solution: Analytics and CJA
title: Getting started with Media Edge APIs
description: Media Edge APIs Trouble-shooting guide
---
# Media Edge API trouble-shooting guide

This guide provides trouble-shooting instructions for handling errors and for obtaining successful responses.

## Using error response aids

To help troubleshoot unsuccessful responses, errors are accompanied by a response body containing an error object. In this case, the response body contains problem details, as defined by [RFC 7807 Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc7807). To improve the API user experience, the problem details are descriptive (the details of the array keys are displayed using JsonPath to the missing or invalid field). They are also cumulative (all invalid fields will be reported in the same request).

## Validating session starts

Most problems with Session start requests result in a 207 Multi-Status response.
The payload is similar to a [Server API](https://experienceleague.adobe.com/docs/experience-platform/edge-network-server-api/error-handling.html) non-fatal error. All
Media Analytics errors have the following type:  `https://ns.adobe.com/aep/errors/va-edge-0XXX-XXX`. The numbers displayed in the response correspond to the error status.

The following example shows a response body for a Session start request that both lacks a mandatory field and has an invalid one.

```json
{
    "requestId": "d4be4f91-a535-41e7-80c6-bdd031d3a365",
    "handle": [
        ...
    ],
    "errors": [
        {
            "type": "https://ns.adobe.com/aep/errors/va-edge-0400-400",
            "status": 400,
            "title": "Invalid request",
            "report": {
                "eventIndex": 0,
                "details": [
                    {
                        "name": "$.xdm.mediaCollection.sessionDetails.name",
                        "reason": "Missing required field"
                    },
                    {
                        "name": "$.xdm.timestamp",
                        "reason": "Field should respect ISO 8601 standard for presenting date and time with offset to UTC (e.g. 2022-05-19T19:31:02Z, 2022-05-19T21:31:02+02:00, 2022-05-19T21:31:02.234+02:00)"
                    }
                ]
            }
        }
    ]
}
```

In the example above, both problems are noted by `name` and `reason` under `details`: the first reason displays `missing required field` and the second describes non-compliance to the ISO 8601 standard. 


>[!NOTE]
>
> For errors that are caused upstream from Media Analytics, Adobe recommends that you continue to  process the generated media session.

## Validating events 

Most invalid event requests result in a 400 Bad Request response. In these cases, the payload is similar to Server API fatal errors. 

For event requests, the Media Edge API service includes additional checks that are not captured in the XDM model itself. This includes a check that the path `eventType` matches the request payload `eventType`.


The following example shows an `eventType` mismatch with an `adBreakStart` payload sent to `ee/va/v1/chapterStart`:

```json
{
    "type": "https://ns.adobe.com/aep/errors/va-edge-0400-400",
    "status": 400,
    "title": "Bad Request",
    "detail": "Invalid request. Please check your input and try again.",
    "report": {
        "details": "The payload eventType adBreakStart was different from the path eventType chapterStart"
    }
}
```

The following example shows an additonal Media Edge API check finding a `chapterStart` call missing `chapterDetails` info:

```json
{
    "type": "https://ns.adobe.com/aep/errors/va-edge-0400-400",
    "status": 400,
    "title": "Bad Request",
    "detail": "Invalid request. Please check your input and try again.",
    "report": {
        "details": [
            {
                "name": "$.events[0].xdm.mediaCollection.chapterDetails",
                "reason": "Missing required field"
            }
        ]
    }
}
```

## Handling 400-level and 500-level errors

The following table provides instruction for handling status response errors:


| Error Code | Description |
| ---------- | --------- |
|  4xx Bad request | Most 4xx errors (e.g. `400`, `403`, `404`) should not be retried by the user. Retrying the request will not result in a succesful response. The user should address the error before retrying the request. Events resulting in 4xx status codes are not tracked, which could potentially affect the accuracy of data in sessions that received 4xx responses. |
| 410 Gone| Indicates that the session intended for tracking is no longer being computed on the server-side. The most common reason for this is that the session is longer than 24 hours. After receiving a `410`, try to start a new session and track it. |
| 429 Too many requests | This response code indicates that the server is rate limiting the requests. Follow the **Retry-After** instructions in the response header carefully. Any responses flowing back must carry the HTTP response code with a domain specific error code. |
| 500 Internal server error | `500` errors are generic, catch-all errors. `500` errors should not be retried, except for `502`, `503` and `504`. |
| 502 Bad gateway | This error code Indicates that the server, while acting as a gateway, received an invalid response from upstream servers. This can happen due to network issues between servers. The temporary network issue can resolve itself, so retrying the request may resolve the issue. |
| 503 Service unavailable | This error code indicates that the service is temporarily unavailable. This can happen during maintenance periods. Recipients of `503` errors can retry the request, but should also follow the **Retry-After** header instructions. |

## Queueing events when session responses are slow

After starting a media tracking session, the media player may fire before the Session Start response returns (with the Session ID parameter) from the backend. If this occurs, your app must queue any tracking events that arrive between the Session start request and its response. When the Sessions response arrives, you should first process any queued events, then you can start processing live events.

For best results, check the Reference Player in your distribution for instructions on how to process events prior to receiving a Session ID. 

The following example shows a method for processing events prior to receiving a Session ID:

```js
// For event payload format, see "Request body" sections of "Session start request", "Event requests" respectively.  *
 
VideoPlayer.prototype._collectEvent = function(event) {
    var sessionID = event.events[0].xdm.mediaCollection.sessionID
    var eventType = event.events[0].xdm.eventType.substring("media.".length);
    // If we don't have a Session ID yet,
    // queue the event and return...
    if (sessionId === undefined) {
        console.log("[Player] Queueing event")
        _pendingEvents.push(event)
        return;
    }
 
    // If we DO have a Session ID, process the
    // tracking event...
    apiClient.request({
        "baseUrl": `${endpoint}`,
        "path": `ee/va/v1/${eventType}`,
        "method": `POST`,
        "data": `${event}`
    }).then((response) => {
        if (eventType === "sessionStart") {
            var newSessionID = response.json().handle.filter((h) => h.type === "media-analytics:new-session")[0].payload[0].sessionId;
            _processPendingEvents(newSessionID);
        }
        […]
    }
}
 
VideoPlayer.prototype._processPendingEvents function(sessionID) {
    _pendingEvents.forEach((event) => {
        event.events[0].xdm.mediaCollection.sessionID = sessionID;
        _collectEvent(event);
    });
    _pendingEvents = [];
}
```

## Custom metadata issues

When using the custom metadata feature with Media Edge APIs, note the following: 

<InlineAlert variant="info" slots="text" />

If you do not correctly create a custom field group or add a custom field to that group before creating custom metadata in your API request, you will not receive an error in response. The API service has no way of currently verifying that these customizations have been previously created. Make sure you carefully follow the steps as described in [Create schema field groups](https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/schemas/create-schema-field-groups) or your custom metadata will not work and you will not be notified by an error response.
