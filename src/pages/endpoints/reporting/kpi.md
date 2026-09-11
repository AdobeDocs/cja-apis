---
title: Basic Date-Trended Report API
description: Create a basic date-trended KPI report with the CJA Reporting API
---

# Basic Date-Trended Report

The Customer Journey Analytics Reporting API enables creation and retrieval of basic and advanced date-trended KPI reports. This guide demonstrates a programmatically-recurring report using the same data and methods employed in the Customer Journey Analytics UI.

This guide provides instructions for a basic KPI report of *Visits*, *Orders*, and *Revenue* metrics for the *Day* dimension.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning.

The report endpoint is routed through `cja.adobe.io`. To use it, you must first have a client with access to the Customer Journey Analytics Reporting API and a data view that exposes the metrics and dimension you want to report on. For more information, see [Getting started](../../getting-started/index.md).

## Report features

This guide shows an example for reporting key metrics over the past 30 days. You can use the requests and responses to produce similar reports for the following purposes:

- Populating dashboards
- Exporting data to CSV files
- Feeding business-intelligence tools
- Connecting to cloud data warehouses
- Scheduling automated KPI updates

### Example visualization

In Customer Journey Analytics Workspace, this example KPI report might include a free-form table of the *Day* dimension trended against the *Visits*, *Orders*, and *Revenue* metrics, along with a line graph and number-summary visualizations of the same data.

<InlineAlert variant="info" slots="text" />

The visual examples for this report match those shown in the equivalent Adobe Analytics 2.0 API guide. For screenshots of the free-form table and the line graph and number-summary visualizations, see [Basic Date-Trended API Report Guide](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/kpi) in the Adobe Analytics 2.0 API documentation.

### Report APIs provide data, not visualizations

When you design reports with the Reporting API, you interact with the data foundation used by Customer Journey Analytics Workspace or another intelligence tool. API structures do not specify the presentation layers built on top of the data. You will not see a visualization parameter type in the JSON request or response.

## Request the date-trended data

To request the data:

1. Use the following URI for your POST HTTP call: `POST https://cja.adobe.io/reports`.
2. Set the `rsid` parameter to the ID of the data view you want to report on (for example, `dv_5f4df2...`). To find a data view ID, use the [Data Views API](../dataviews/index.md) or copy it from the Customer Journey Analytics UI.
3. Use the example request JSON below as a template for requesting the data. Provide your desired date range along with any other modifications to the dimension or example key metrics.

<InlineAlert variant="info" slots="text" />

Unlike the Adobe Analytics 2.0 API, the CJA report endpoint does not include a Global Company ID in the URL. Instead, the organization is identified with the `x-gw-ims-org-id` header, and the target data view is supplied in the `rsid` request-body parameter. For a full comparison, see [CJA vs. 2.0 API](../../getting-started/differences.md).

## Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

### Request

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
        "type": "dateRange",
        "dateRange": "2025-11-01T00:00:00.000/2025-12-01T00:00:00.000",
        "dateRangeId": "thisMonth"
      }
    ],
    "metricContainer": {
      "metrics": [
        {
          "columnId": "0",
          "id": "metrics/visits"
        },
        {
          "columnId": "1",
          "id": "metrics/orders"
        },
        {
          "columnId": "2",
          "id": "metrics/revenue",
          "sort": "desc"
        }
      ]
    },
    "dimension": "variables/daterangeday",
    "settings": {
      "countRepeatInstances": true,
      "includeAnnotations": true,
      "nonesBehavior": "return-nones",
      "limit": 10,
      "page": 0
    },
    "statistics": {
      "functions": [
        "col-max",
        "col-min"
      ]
    }
  }'
```

## Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

### Response

```json
{
  "totalPages": 3,
  "firstPage": true,
  "lastPage": false,
  "numberOfElements": 10,
  "number": 0,
  "totalElements": 30,
  "columns": {
    "dimension": {
      "id": "variables/daterangeday",
      "type": "time"
    },
    "columnIds": [
      "0",
      "1",
      "2"
    ]
  },
  "rows": [
    {
      "itemId": "1251028",
      "value": "Nov 28, 2025",
      "data": [
        1401842,
        73535,
        7643632.88
      ]
    },
    {
      "itemId": "1251029",
      "value": "Nov 29, 2025",
      "data": [
        917334,
        40395,
        4180090.28
      ]
    },
    {
      "itemId": "1251030",
      "value": "Nov 30, 2025",
      "data": [
        976312,
        38887,
        4030894.64
      ]
    },
    {
      "itemId": "1251027",
      "value": "Nov 27, 2025",
      "data": [
        743753,
        25640,
        2626938.60
      ]
    },
    {
      "itemId": "1251026",
      "value": "Nov 26, 2025",
      "data": [
        639525,
        21653,
        2459653.53
      ]
    }
  ],
  "summaryData": {
    "filteredTotals": [
      18832278,
      538135,
      65657124.02
    ],
    "totals": [
      18832278,
      538135,
      65657124.02
    ],
    "col-max": [
      1401842,
      73535,
      7643632.88
    ],
    "col-min": [
      385434,
      7788,
      1058036.96
    ]
  }
}
```

## Example request details

The JSON example requests data for the top ten days of November 2025 in descending order, according to revenue. Note the following details:

- The `rsid` parameter holds the data view ID `dv_example_dataview_id`. In Customer Journey Analytics, this parameter carries a data view ID rather than a report suite ID.
- The `dateRange` is specified as November 1, 2025 to December 1, 2025.
- The metrics are specified as `visits`, `orders`, and `revenue` for columns `0`, `1`, and `2`, respectively. These metric IDs must exist in the target data view.
- A `sort` in descending order is specified for the values in column `2` (revenue). This enables the ranking feature for the top days according to revenue.
- The `dimension` is specified as `daterangeday`.
- A `limit` of `10` days is specified for the response.
- `nonesBehavior` is set to `return-nones` so that days with no data are still returned in the trend.

### Request parameters

The example request includes the following parameters in the payload:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `rsid` | required | string | The data view ID (the report suite ID equivalent for Customer Journey Analytics) |
| `globalFilters` | optional | array | Contains `type`, `dateRange`, and `dateRangeId` |
| `type` | optional | string | The type of filter applied |
| `dateRange` | optional | string | The date range of the data |
| `dateRangeId` | optional | string | The label for the date range; e.g., `thisMonth` |
| `metricContainer` | optional | object | Contains the `metrics` array |
| `metrics` | optional | array | Contains `columnId`, `id`, and `sort` |
| `columnId` | optional | string | The column number in the table visualization, left to right, starting from `0` |
| `id` | optional | string | The name of the element for the column; e.g., the name of the `metric` |
| `sort` | optional | string | The sorting applied to the column data--`asc` or `desc` |
| `dimension` | required | string | The dimension associated with the report data |
| `settings` | optional | object | The settings requested for the reporting response, as specified by the parameters in the following rows |
| `countRepeatInstances` | optional | boolean | Whether to count repeat instances of a returned metric |
| `includeAnnotations` | optional | boolean | Whether to include annotations in the response |
| `nonesBehavior` | optional | string | Excludes instances with values of `0` if set to `exclude-nones`; use `return-nones` to include them |
| `limit` | optional | integer | The maximum number of items to return in the response |
| `page` | optional | integer | The page number to return in the response |
| `statistics` | optional | object | Contains the `functions` array |
| `functions` | optional | array | Contains `col-max` and `col-min` |
| `col-max` | optional | string | The column maximum |
| `col-min` | optional | string | The column minimum |

## Example response details

The response shows the data for the top ranked days according to revenue. Note the following for the first three days returned:

1. November 28, 2025 (occurring on "Black Friday") had `1401842` Visits, `73535` Orders, and `7643632.88` dollars for `Revenue`.
2. November 29, 2025 (occurring during "Black Friday" weekend) had `917334` Visits, `40395` Orders, and `4180090.28` dollars for `Revenue`.
3. November 30, 2025 (occurring during "Black Friday" weekend) had `976312` Visits, `38887` Orders, and `4030894.64` dollars for `Revenue`.

Although the metrics data is rounded in the visualizations, it matches the data in the examples above.

### Response parameters

The example response includes the following parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `totalPages` | integer | The total number of pages with data |
| `firstPage` | boolean | Whether this is the first page of results |
| `lastPage` | boolean | Whether this is the last page of results |
| `numberOfElements` | integer | The number of item elements in the report |
| `number` | integer | The page number, starting with `0` |
| `totalElements` | integer | Total number of elements in the report |
| `columns` | object | Contains column and `dimension` data |
| `dimension` | object | Contains `id` and `type` |
| `id` | string | Name of the dimension |
| `type` | string | The `dimension` ID data type; `time` for date-trended dimensions such as `daterangeday` |
| `columnIds` | array | The column numbers in the table visualization, left to right, starting from `0` |
| `rows` | array | Contains `itemId`, `value`, and `data` |
| `itemId` | string | The dimension item identifier. For time dimensions (such as `daterangeday`), the `itemId` deterministically encodes the calendar date and is independent of the data view calendar configuration. For more information, see [How the itemId encodes the date](#how-the-itemid-encodes-the-date). |
| `value` | string | The human-readable display label for the dimension `itemId`. This is a localized, calendar-aware label intended for display, not for date parsing. For a data view that uses a custom calendar (for example, Modified Gregorian/fiscal), `value` can read as **2022 (Jun 1-May 31)**. |
| `data` | array | The numerical values returned for the requested items |
| `summaryData` | object | Contains the summary data information described in the following rows |
| `filteredTotals` | array | The data totals after the specified filters are applied |
| `totals` | array | The data totals |
| `col-max` | array | The column maximum values |
| `col-min` | array | The column minimum values |

#### How the itemId encodes the date

For time dimensions such as `variables/daterangeday`, the `itemId` is not an arbitrary key. It deterministically encodes the underlying Gregorian date, regardless of whether the data view uses a standard or a custom (fiscal) calendar. Because of this, `itemId` is the reliable field to read when you need the actual date: the `value` field is a display label whose format changes with the data view calendar, while the `itemId` for a given date does not.

The `itemId` is built by concatenating the following segments, left to right:

| Segment | Rule | Width |
|---------|------|-------|
| Year | year − 1900 | 2–3 digits |
| Month | month number − 1 (that is, zero-indexed: January = `00`, December = `11`) | 2 digits |
| Day | day of month | 2 digits |
| Hour | hour, 24-hour clock — `daterangehour` and `daterangeminute` only | 2 digits |
| Minute | minute — `daterangeminute` only | 2 digits |

The hour segment is appended for `daterangehour` and `daterangeminute`; the minute segment is appended only for `daterangeminute`. Date-only dimensions such as `daterangeday` end after the day segment.

**Examples**

| Date | Year (yr − 1900) | Month (mo − 1) | Day | Time | itemId |
|------|-----------------|----------------|-----|------|--------|
| Nov 28, 2025 (`daterangeday`) | `125` | `10` | `28` | — | `1251028` |
| Jan 1, 2012 (`daterangeday`) | `112` | `00` | `01` | — | `1120001` |
| Jan 1, 2012 19:00 (`daterangehour`) | `112` | `00` | `01` | `19` | `112000119` |
| Jan 1, 2012 19:02 (`daterangeminute`) | `112` | `00` | `01` | `1902` | `11200011902` |
| Jun 1, 2022 _(`daterangeday`; custom fiscal calendar, `value` = `2022 (Jun 1-May 31)`)_ | `122` | `05` | `01` | — | `1220501` |

To decode an `itemId` back to a date, read the segments from the right: the last two digits are the day and the two before that are the zero-indexed month; the remaining leading digits are the year offset, so add `1900`. For time dimensions, the rightmost four digits are the hour and minute, with the day and month shifted left accordingly.

## Partial responses (206 status code)

A 206 status code indicates a partial response. This status code means that some columns in the reporting response have errors. These errors can include any of the following:

- **Unauthorized Metric**: The user does not have access to the requested metric
- **Metric Not Enabled**: The requested metric is not enabled in this data view
- **Unauthorized Dimension**: The user does not have access to the requested dimension
- **Dimension Not Enabled**: The requested dimension is not enabled in this data view
- **Unauthorized Global Dimension**: The user does not have access to the global dimension for this request
- **Global Dimension Not Enabled**: The global dimension for this request is not enabled in this data view

## More information

- For an API report example that uses a page dimension and page metrics instead of date-trended data, see [Create dataview reports](dataview.md).
- For reporting across up to five dimensions in a single request, see [Multiple dimension reporting](multidim.md).
- For general information on the Customer Journey Analytics Reporting API, see the [Reporting API overview](index.md).
- For complete data models of the CJA APIs, see the [CJA API reference](https://developer.adobe.com/cja-apis/docs/api/).
