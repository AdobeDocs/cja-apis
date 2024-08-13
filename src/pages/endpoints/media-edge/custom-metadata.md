---
solution: Analytics and CJA
title: Media Edge APIs
description: Create custom metadata with Media Edge APIs
---

# Create custom metadata for Media Edge APIs

Custom metadata in [Media Edge APIs](index.md) allows for the inclusion of additional, user-defined metadata that can be customized for specific needs or contexts. This flexibility is useful in scenarios where existing schemas do not cover desired data points. For example, by using custom metadata, you can create new dimensions and metrics with API requests. 

Custom metadata keys can be added to an XDM schema with the `sessionStart`, `chapterStart`, and `adStart` endpoint requests. To structure requests with these endpoints, see the [Media Edge API getting started guide](getting-started.md).

Creating custom metadata does not correlate the data to any behavior of the endpoint request itself. The custom metadata is created as if it were a separate function within the request. It can then be used for subsequent data tracking or processing.

To create custom metadata, follow these steps:

1. [Add a custom field group](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/ui/resources/field-groups#create) to your defined media schema. 

2. To the custom field group, add a [custom field](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/ui/resources/field-groups#add-fields) that you want to track.

3. [Use the path generated](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/ui/fields/overview#type-specific-properties) for the custom field in your request payload.

4. Include a `customMetadata` array with the `name` and `value` keys in your API request as shown in the example below. Make sure that the first part of the custom `name` includes the path generated in the previous step.

## Example custom metadata

In the following example, the `customMetadata` fields are used to create `customUserID` and its associated `value`. This can be used subsequently for more data analysis in Customer Journey Analytics or other clients:

```curl
curl --location 'https://edge.adobedc.net/ee-pre-prd/va/v1/sessionStart?configId=599ca3ec-4a21-4659-8dff-xxxxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data '{
    "events": [
        {
            "xdm": {
                "mediaCollection": {
                    "sessionDetails": {
                        "channel": "sample-broadcastChannel",
                        "friendlyName": "Sample 1",
                        "contentType": "VOD",
                        "playerName": "Native player ios",
                        "streamType": "video",
                        "length": 100,
                        "name": "b43b093ff987e8744444"
                    },
                    "playhead": 0,
                    "customMetadata": [
                        {
                            "name": "_expath.customUserID",
                            "value": "5791626"
                        }
                    ]
                },
                "timestamp": "YYYY-10-19T10:23:57Z",
                "eventType": "media.sessionStart"
            }
        }
    ]
}'
```

## Request example details

The request example shows the following details:

* The custom metadata is included in the payload of a `sessionStart` endpoint request.

* Location in the JSON: the `customMetadata` array is nested within the `mediaCollection` object, which is within the `xdm` object of an event. 

* The `name` key is specified as `_expath.customUserID`. This can possibly be used as either a metric or a dimension. The `_expath` portion of this name is the path generated in step three above.

* The `value` key for the custom metadata is `5791626`.

## Successful Media Edge API status codes

Each successful API request returns an HTTP 200-level status code that reflects the result, as follows:

| HTTP code | Meaning | Description |
| --- | --- | --- |
| 200 | Success | A successful `sessionStart` request returns a `200 OK` code with some data in the response, including a Session ID. |
| 204 | Success | A `204 No Content` code is returned for all successful requests other than the `sessionStart`. |
| 207 | Success | A 207 status is a multi-status response code, returned in scenarios where a client requests multiple operations and at least one is successful and least one other is not successful. In the context of Media Edge APIs, a datastream may have multiple upstreams enabled in Adobe Analytics, Media Analytics, or Customer Journey Analytics. If the request is successful in any one of those upstreams, but not in another, the status code 207 is returned.  The response will also include individual status codes for each part of the request, indicating which operations were successful and which were not. |

<InlineAlert variant="info" slots="text" />

If you do not correctly create a custom field group or add a custom field to that group before creating custom metadata in your API request, you will not receive an error in response. The API service has no way of currently verifying that these customizations have been previously created. Make sure you carefully follow the steps as described in [Create schema field groups](https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/schemas/create-schema-field-groups) or your custom metadata will not work and you will not be notified by an error response.

For information on handling 400-level and 500-level errors status errors, see the [Media Edge API trouble-shooting guide](https://developer.adobe.com/cja-apis/docs/endpoints/media-edge/troubleshooting/#handling-400-level-and-500-level-errors).



