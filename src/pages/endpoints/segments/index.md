---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Segments
description: Add, edit, or delete segments using the API.
---

# Segments API

The Segments APIs allow you to retrieve or create segments programmatically through Adobe Developer. The APIs use the same data and methods that are used when working with segments in the UI. See [Segments overview](https://experienceleague.adobe.com/en/docs/customer-journey-analytics-learn/tutorials/components/filters/introduction-to-filters-in-cja) in the CJA documentation for more information.

Use the `/segments` endpoint to retrieve or create segments.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## Retrieve multiple segments

To retrieve a list of segments that you have created or that have been shared with you, use the following URL:

`GET https://cja.adobe.io/segments`

Each segment in the response also includes a segment ID that can be used to retrieve information individually. 

## Retrieve a single segment

Once you have the desired ID, you can append the ID to the call to retrieve details on a single segment:

`GET https://cja.adobe.io/segments/{id}`

### Find projects that use a specified segment

To retrieve a list of projects that contain a specified segment, include the `usedIn` expansion parameter in your multiple segments request.

The following response shows projects that include the "Example Channel" segment:

```json
{
    "content": [
        {
            "name": "Example Channel",
            "description": "Example channel segment",
            "organization": "77717@ExampleOrg",
            "recentRecordedAccess": "YYYY-06-05T13:40:31Z",
            "performanceScore": "2.14",
            "id": "s44444444@ExampleOrg_44444444",
            "usedIn": [
                {
                    "componentId": "44444444444",
                    "componentType": "project",
                    "subType": "project",
                    "internal": false,
                    "name": "Example Customer Analysis",
                    "lastRecordedAccess": 7777775200236
                },
                {
                    "componentId": "55555555",
                    "componentType": "project",
                    "subType": "project",
                    "internal": false,
                    "name": "Example Customer List",
                    "lastRecordedAccess": 7777776824296
                },
               
            ],
            "usageSummary": {
                "count": 0,
                "mostRecentTimestamp": null,
                "itemId": null
            },
            "owner": {
                "imsUserId": "7777777777.e",
                "ownerId": "777777777@7777777777.e",
                "name": null,
                "type": "imsUser"
            },
            "dataId": null
        }
    ],
    "totalElements": 2,
    "totalPages": 1,
    "numberOfElements": 1,
    "number": 0,
    "firstPage": true,
    "lastPage": true,
    "sort": null,
}
```

## Create a segment

Create a new segment with the desired definition.

`POST https://cja.adobe.io/segments`

An example POST body:

```json
{
    "dataId": "{DATAID}",
    "compatibility": null,
    "definition": {
        "container": {
            "func": "container",
            "pred": {
                "evt": {
                    "func": "event",
                    "name": "metrics/visits"
                },
                "func": "event-exists",
                "description": "purchase id"
            },
            "context": "hits"
        },
        "func": "segment",
        "version": [
            1,
            0,
            0
        ]
    },
    "name": "Integration Test Seg 1",
    "description": "For Integration Test Only"
}
```

To validate a segment, see [Validate segments](/validate.md).
