---
title: Reporting API first calls
description: Make your first calls to the Customer Journey Analytics Reporting API
---

# Reporting API first calls

This guide walks you through your first calls to the Customer Journey Analytics Reporting API.

The Customer Journey Analytics (CJA) Reporting API lets you create and retrieve report data programmatically, using the same data and methods available in Analysis Workspace. This guide covers what you need before you start, the base URL and required headers, and a single minimal `POST /reports` request so you can confirm your setup end to end. For the concepts behind CJA reporting—dataviews, cross-dataset journeys, and multi-column sorting—see the [Reporting API overview](index.md).

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## Before you begin

To make a request, you need credentials from a project with access to the Customer Journey Analytics API. For instructions on creating a project and generating credentials, see [Getting started with the CJA APIs](https://developer.adobe.com/cja-apis/docs/getting-started/).

Have the following values ready before you build your first request:

- **API key (Client ID)** — supplied in the `x-api-key` header.
- **Access token** — a bearer token supplied in the `Authorization` header.
- **IMS Organization ID** — supplied in the `x-gw-ims-org-id` header.
- **Dataview ID** — the dataview you want to report on (for example, `dv_example_dataview_id`).

## Base URL

The Reporting API is routed through `cja.adobe.io`. To create a report, send a POST request to the following endpoint:

`POST https://cja.adobe.io/reports`

## Required headers

Every request to the Reporting API includes the following headers:

| Header | Description |
| --- | --- |
| `accept` | The response format. Use `application/json`. |
| `Content-Type` | The request body format for POST requests. Use `application/json`. |
| `x-api-key` | Your API key (Client ID). |
| `x-gw-ims-org-id` | Your IMS Organization ID. |
| `Authorization` | Your access token, in the form `Bearer {ACCESS_TOKEN}`. |

<InlineAlert variant="info" slots="text" />

In the request body, the dataview you want to report on is supplied in the `rsid` field. This field is named `rsid` for legacy reasons; in Customer Journey Analytics, set its value to your **dataview ID** (for example, `dv_example_dataview_id`). Send the value in `rsid` exactly as shown—renaming it will cause the request to fail.

## Make your first report request

The following example is a minimal report request: it returns the `visits` metric broken down by the `page` dimension for a single month, limited to the top five pages. Start here to confirm that your credentials, headers, and dataview ID work together before building larger requests.

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://cja.adobe.io/reports" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -d '{
    "rsid": "dv_example_dataview_id",
    "globalFilters": [
      {
        "type": "DATE_RANGE",
        "dateRange": "2026-07-01T00:00:00.000/2026-08-01T00:00:00.000"
      }
    ],
    "metricContainer": {
      "metrics": [
        {
          "columnId": "0",
          "id": "metrics/visits"
        }
      ]
    },
    "dimension": "variables/page",
    "settings": {
      "limit": 5,
      "page": 0
    }
  }'
```

#### Response

```json
{
  "totalPages": 175,
  "firstPage": true,
  "lastPage": false,
  "numberOfElements": 5,
  "number": 0,
  "totalElements": 874,
  "columns": {
    "dimension": {
      "id": "variables/page",
      "type": "STRING"
    },
    "columnIds": [
      "0"
    ]
  },
  "rows": [
    {
      "itemId": "3306266643",
      "value": "home",
      "data": [
        151478
      ]
    },
    {
      "itemId": "2796092754",
      "value": "category 5",
      "data": [
        71248
      ]
    },
    {
      "itemId": "1738577623",
      "value": "category 2",
      "data": [
        69067
      ]
    },
    {
      "itemId": "3553521723",
      "value": "category 4",
      "data": [
        67272
      ]
    },
    {
      "itemId": "3455114909",
      "value": "category 3",
      "data": [
        66950
      ]
    }
  ],
  "summaryData": {
    "totals": [
      424407
    ]
  }
}
```

#### Request example details

The example request asks for the following:

- The `visits` metric, assigned to column `0`.
- Results broken down by the `page` dimension.
- Data for the period July 1, 2026 00:00:00.000 – August 1, 2026 00:00:00.000, interpreted in the dataview time zone.
- A `limit` of five items on the first page (`page` `0`).

#### Response example details

The response shows the top five pages by `visits`:

- Each object in `rows` is one page. The `value` property holds the dimension value, and `data` holds the metric values for that row, in column order.
- `totalElements` reports how many items match the request (`874`), while `numberOfElements` (`5`) reflects the `limit` applied.
- `summaryData.totals` holds the report total for each metric column across all matching items.

### Request parameters

The example request includes the following parameters in the payload:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `rsid` | required | string | The dataview to report on. This field is named `rsid` for legacy reasons; supply your dataview ID (for example, `dv_example_dataview_id`) as the value. |
| `globalFilters` | optional | array | Filters applied to the entire report. Contains `type` and `dateRange`. |
| `type` | optional | string | The filter type. One of `DATE_RANGE`, `BREAKDOWN`, `SEGMENT`, or `EXCLUDE_ITEM_IDS`. |
| `dateRange` | optional | string | The date range of the report data, as an ISO 8601 start/end range. |
| `metricContainer` | optional | object | Contains the `metrics` array. |
| `metrics` | optional | array | The metrics to return. Each object contains `columnId` and `id`. |
| `columnId` | optional | string | The column position in the results, left to right, starting from `0`. |
| `id` | optional | string | The metric ID for the column; for example, `metrics/visits`. |
| `dimension` | optional | string | The dimension to break the report down by; for example, `variables/page`. If omitted, the report returns totals only. |
| `settings` | optional | object | The settings requested for the report response. |
| `limit` | optional | integer | The maximum number of items to return per page. |
| `page` | optional | integer | The page number to return, starting from `0`. |

### Response parameters

The example response includes the following parameters:

| Name | Type | Description |
| --- | --- | --- |
| `totalPages` | integer | The total number of pages of data available for the request. |
| `firstPage` | boolean | Whether this is the first page of results. |
| `lastPage` | boolean | Whether this is the last page of results. |
| `numberOfElements` | integer | The number of item elements returned on this page. |
| `number` | integer | The current page number, starting from `0`. |
| `totalElements` | integer | The total number of elements that match the request. |
| `columns` | object | Contains the `dimension` and `columnIds` for the report. |
| `dimension` | object | Contains the dimension `id` and `type`. |
| `id` | string | The dimension ID. |
| `type` | string | The dimension data type. |
| `columnIds` | array | The column identifiers returned, in order. |
| `rows` | array | The report rows. Each row contains `itemId`, `value`, and `data`. |
| `itemId` | string | The item ID for the row. |
| `value` | string | The dimension value for the row. |
| `data` | array | The metric values for the row, in column order. |
| `summaryData` | object | Contains the report totals. |
| `totals` | array | The total for each metric column across all matching items. |

## Status codes

Each request returns an HTTP status code that reflects the result, as follows:

| HTTP code | Meaning | Description |
| --- | --- | --- |
| 200 | Success | The request succeeded and the report was returned. |
| 400 | Bad Request | The request was improperly constructed, was missing required information, or contained invalid syntax. |
| 401 | Authentication failed | The request did not pass an authentication check. Your access token may be missing or invalid. |
| 403 | Forbidden | Your credentials do not have access to the organization, sandbox, or dataview requested. |
| 404 | Not found | The requested resource could not be found; for example, the dataview does not exist. |
| 429 | Too Many Requests | Rate limits or reporting capacity were exceeded. Back off and retry. |
| 500 | Internal server error | A server-side error occurred while processing the request. |

## Next steps

Now that you have made your first call, see the following guides for fuller report requests:

- [Create dataview reports](dataview.md) — a complete `POST /reports` request with global filters, multiple metrics, sorting, and statistics.
- [Reporting multiple dimensions in a single request](multidim.md) — request up to five dimensions, dimension-level search, and multi-column sorting.
- [Top Items Report](topitems.md) — retrieve the top-ranked items for a dimension with a single GET request.
- [View API calls in the Analysis Workspace Debugger](debugger.md) — copy ready-made request payloads from Analysis Workspace.
- [CJA API reference](https://developer.adobe.com/cja-apis/docs/api/) — complete data models for the CJA APIs.
