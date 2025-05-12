---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Segments
description: Add, edit, or delete filters using the API.
---

# Segments

The Segments APIs allow you to retrieve, update, or create filters programmatically through Adobe Developer. The APIs use the same data and methods that are used when working with filters in the UI. See [Segments overview](https://experienceleague.adobe.com/en/docs/customer-journey-analytics-learn/tutorials/components/filters/introduction-to-filters-in-cja) in the CJA documentation for more information.

You can call the `/filters` endpoint to add, edit or delete filters.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## Retrieve a list of filters

In CJA, you can navigate to **Components** > **Segments** and see a list of segments that you created or others have shared. This call is helpful to identify the ID's of desired segments.

`GET https://cja.adobe.io/filters`

## Retrieve a single segment

Once you have the desired ID, you can append the ID to the call to retrieve details on a single segment:

`GET https://cja.adobe.io/filters/{id}`

## Create a segment

Create a new segment with the desired definition.

`POST https://cja.adobe.io/filters`

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
