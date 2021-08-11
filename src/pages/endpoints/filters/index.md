---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Filters
description: Add, edit, or delete filters using the API.
---

# Filters

The Filters APIs allow you to retrieve, update, or create filters programmatically through Adobe I/O. The APIs use the same data and methods that are used when working with filters in the UI. See [Filters overview](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-components/cja-filters/filters-overview.html) in the CJA documentation for more information.

You can call the `/filters` endpoint to add, edit or delete filters.

## Retrieve a list of filters

In CJA, you can navigate to **Components** > **Filters** and see a list of filters that you created or others have shared. This call is helpful to identify the ID's of desired filters.

`GET https://cja.adobe.io/filters`

See [GET List of filters](#) in the API reference for supported query string parameters and example responses.

## Retrieve a single filter

Once you have the desired ID, you can append the ID to the call to retrieve details on a single filter:

`GET https://cja.adobe.io/filters/{id}`

## Create a filter

<InlineAlert variant="info" slots="text"/>

Adobe does not yet support the creation of filters through the API. Support for this feature is planned for the near future.

<!--
Create a new filter with the desired definition.

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
-->
