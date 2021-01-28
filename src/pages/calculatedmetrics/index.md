---
title: Calculated metrics
description: Add, edit, or delete calculated metrics using the API.
---

# Calculated metrics

The Calculated metrics APIs allow you to retrieve, update, or create calculated metrics programmatically through Adobe I/O. The APIs use the same data and methods that are used when working with calculated metrics in the UI. See [Calculated metrics overview](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-components/cja-calcmetrics/calc-metr-overview.html) in the CJA documentation for more information.

You can call the `/calculatedmetrics/` endpoint to add, edit or delete calculated metrics.

## Retrieve a list of calculated metrics

In CJA, you can navigate to **Components** > **Calculated metrics** and see a list of calculated metrics that you created or others have shared. This call is helpful to identify the ID's of desired calculated metrics.

`GET https://cja.adobe.io/calculatedmetrics`

See [GET List of calculated metrics](#) in the API reference for supported query string parameters and example responses.

## Retrieve a single calculated metric

Once you have the desired ID, you can append the ID to the call to retrieve details on a single calculated metric:

`GET https://cja.adobe.io/calculatedmetrics/{id}`

## Create a calculated metric

Create a new calculated metric with the desired formula.

`POST https://cja.adobe.io/calculatedmetrics`

An example POST body:

```json
{
    "name": "Integration Test 1",
    "description": "Integration Test 1 Description",
    "dataId": "{DATAID}",
    "type": "percent",
    "definition": {
        "func": "calc-metric",
        "formula": {
            "func": "divide",
            "col1": {
                "func": "metric",
                "name": "metrics\/visits"
            },
            "col2": {
                "func": "metric",
                "name": "metrics\/visitors"
            }
        },
        "version": [
            1,
            0,
            0
        ]
    }
}
```

