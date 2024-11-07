---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Calculated metrics
description: Add, edit, or delete calculated metrics using the API.
---

# Calculated metrics

The Calculated metrics APIs allow you to retrieve, update, or create calculated metrics programmatically through Adobe Developer. The APIs use the same data and methods that are used when working with calculated metrics in the UI. See [Calculated metrics overview](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-components/cja-calcmetrics/calc-metr-overview.html) in the CJA documentation for more information.

You can call the `/calculatedmetrics/` endpoint to add, edit or delete calculated metrics.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## Retrieve a list of calculated metrics

In CJA, you can navigate to **Components** > **Calculated metrics** and see a list of calculated metrics that you created or others have shared. This call is helpful to identify the ID's of desired calculated metrics.

`GET https://cja.adobe.io/calculatedmetrics`

For example, get a response of all calculated metrics shared with the user.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://cja.adobe.io/calculatedmetrics?includeType=shared" \
    -H "x-api-key: {CLIENTID}" \
    -H "x-gw-ims-org-id: {IMSORG}" \
    -H "Authorization: Bearer {ACCESSTOKEN}"
```

#### Response

```json
{
    "content": [
        {
            "dataId": "vrs_exampledataid",
            "id": "a5066209",
            "name": "POS Orders Participation",
            "description": "",
            "owner": {
                "imsUserId": "EXAMPLE@AdobeID",
                "ownerId": "EXAMPLE@AdobeID",
                "name": null,
                "type": "imsUser"
            },
            "polarity": "positive",
            "precision": 0,
            "type": "decimal"
        },
        {
            "dataId": "vrs_exampledataid",
            "id": "16458967",
            "name": "Online Orders",
            "description": "",
            "owner": {
                "imsUserId": "EXAMPLE@AdobeID",
                "ownerId": "EXAMPLE@AdobeID",
                "name": null,
                "type": "imsUser"
            },
            "polarity": "positive",
            "precision": 0,
            "type": "decimal"
        }
    ],
    "totalPages": 1,
    "totalElements": 2,
    "number": 0,
    "numberOfElements": 2,
    "firstPage": true,
    "lastPage": true,
    "sort": null,
    "size": 2
}
```

## Retrieve a single calculated metric

Once you have the desired ID, you can append the ID to the call to retrieve details on a single calculated metric:

`GET https://cja.adobe.io/calculatedmetrics/{id}`

For example, get details around the calculated metric with an ID of `a5066209`:

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://cja.adobe.io/calculatedmetrics/a5066209" \
    -H "x-api-key: {CLIENTID}" \
    -H "x-gw-ims-org-id: {IMSORG}" \
    -H "Authorization: Bearer {ACCESSTOKEN}"
```

#### Response

```json
{
    "dataId": "vrs_exampledataid",
    "id": "a5066209",
    "name": "POS Orders Participation",
    "description": "",
    "owner": {
        "imsUserId": "EXAMPLE@AdobeID",
        "ownerId": "EXAMPLE@AdobeID",
        "name": null,
        "type": "imsUser"
    },
    "polarity": "positive",
    "precision": 0,
    "type": "decimal"
}
```

## Create a calculated metric

Create a calculated metric with the desired definition for use in reporting.

`POST https://cja.adobe.io/calculatedmetrics`

For example, create a basic calculated metric that divides visits by visitors:

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

## API status codes

For a description of API status codes and tips for troubleshooting, see the [Platform FAQ and troubleshooting guide](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html#api-status-codes).
