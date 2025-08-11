---
title: Reporting API
description: Create and retrieve reporting data programmatically
---

# Reporting API

The Customer Journey Analytics Reporting API allows you to create and retrieve reports programmatically. These APIs use the same data and methods that Adobe uses inside the product UI. See [Reports](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-workspace/reports/reports-menu.html?) in the Customer Journey Analytics guide for more information.

This guide includes instructions for using the following endpoints:
* [GET top items report](#get-top-items-report): Retrieves top items for a specified dimension
* [POST create dataview reports](#post-create-dataview-reports): Creates a report for an existing dataview

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## Get top items report

Use this endpoint to retrieve the top items for a specific dimension. This returns only the top items from the report, according to the maximum number of items you want returned, ranked by the specified metric.

`GET https://cja.adobe.io/reports/topItems`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X GET "https://cja.adobe.io/reports/topItems?limit=5&page=0&lookupNoneValues=true&dataId=dv_554445545&dimension=pages" \
  -H "accept: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}"
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "totalPages": 1,
  "firstPage": true,
  "lastPage": true,
  "numberOfElements": 5,
  "number": 0,
  "totalElements": 5,
  "columns": {
    "dimension": {
      "id": "variables/page",
      "type": "string"
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
        219567
      ]
    },
    {
      "itemId": "2796092754",
      "value": "category 5", 
      "data": [
        90943
      ]
    },
    {
      "itemId": "1738577623",
      "value": "category 2",
      "data": [
        84192
      ]
    }
  ],
  "summaryData": {
    "filteredTotals": [
      3080619
    ],
    "totals": [
      3080619
    ]
  }
}
```

### Request parameters

The following table describes the request parameters for the `GET /reports/topItems` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `dataId` | Required | String | Data view ID. That data view in the example above is `dv_554445545`. |
| `dimension` | Required | String | The dimension to retreive top items for. The dimension in the example above is `pages`. |
| `locale` | Optional | String | Language and country code. The language in the example above is `en_US`. |
| `lookupNoneValues` | Optional | Boolean | Whether to include None values in the report. Default is `false` |
| `limit` | Optional | Integer | Number of top items to return. Default is 10. Maximum is 1000 |
| `page` | Optional | Integer | Page number (0-based). Default is 0 |

### Response parameters

The following table describes the response parameters for the `GET /reports/topItems` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `totalPages` | Integer | The total number of pages with data |
| `firstPage` | Boolean | Whether this is the first page of results |
| `lastPage` | Boolean | Whether this is the last page of results |
| `numberOfElements` | Integer | The number of item elements in the report |
| `number` | Integer | The page number, starting with `0` |
| `totalElements` | Integer | Total number of elements in the report |
| `columns` | Object | Contains column and `dimension` data |
| `dimension` | Object | Contains `id` and `type` |
| `rows` | Array | Contains `itemId`, `value` and `data` |
| `itemId` | String | The item ID |
| `value` | String | The name specified for the `itemId` in the report |
| `data` | Array | The numerical values returned for the requested items |
| `summaryData` | Object | Contains the summary data totals |

## Usage notes and limitations

Consider the following when working with the Reports API:

### Rate limiting

The Reports API enforces rate limits to ensure optimal performance:

* **Requests per minute**: 60 requests per minute per organization
* **Concurrent requests**: Maximum 6 concurrent requests per organization

### Report execution limits

* **Data range**: Maximum 18 months of data per request
* **Dimension items**: Maximum 1000 dimension items per request
* **Metrics**: Maximum 20 metrics per report
* **Execution time**: Report execution timeout is 300 seconds

### Best practices

* Cache report results when possible to reduce API calls
* Use pagination for large result sets
* Implement retry logic with exponential backoff for rate-limited requests
* Use the `topItems` endpoint for quick dimension analysis without metrics
* Use appropriate date ranges to avoid large data requests

For more information on CJA Reports APIs, see the [CJA API reference](https://developer.adobe.com/cja-apis/docs/api/).

## Post create dataview reports

Use this endpoint to create report requests and return data for an existing data view. This corresponds to creating a visualization in the CJA Analysis Workspace UI.

`POST https://cja.adobe.io/reports`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

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
        "type": "dateRange",
        "dateRange": "2023-07-01T00:00:00.000/2023-08-01T00:00:00.000",
        "dateRangeId": "thisMonth"
      }
    ],
    "metricContainer": {
      "metrics": [
        {
          "columnId": "0",
          "id": "metrics/pageviews"
        },
        {
          "columnId": "1", 
          "id": "metrics/visits",
          "sort": "desc"
        },
        {
          "columnId": "2",
          "id": "metrics/visitors"
        }
      ]
    },
    "dimension": "variables/page",
    "settings": {
      "countRepeatInstances": true,
      "includeAnnotations": true,
      "limit": 10,
      "page": 0,
      "nonesBehavior": "exclude-nones"
    },
    "statistics": {
      "functions": [
        "col-max",
        "col-min"
      ]
    }
  }'
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "totalPages": 877,
  "firstPage": true,
  "lastPage": false,
  "numberOfElements": 10,
  "number": 0,
  "totalElements": 8768,
  "columns": {
    "dimension": {
      "id": "variables/page",
      "type": "string"
    },
    "columnIds": [
      "0",
      "1", 
      "2"
    ]
  },
  "rows": [
    {
      "itemId": "3306266643",
      "value": "home",
      "data": [
        219567,
        151478,
        151478
      ]
    },
    {
      "itemId": "2796092754", 
      "value": "category 5",
      "data": [
        90943,
        71248,
        71248
      ]
    },
    {
      "itemId": "1738577623",
      "value": "category 2", 
      "data": [
        84192,
        69067,
        69067
      ]
    }
  ],
  "summaryData": {
    "filteredTotals": [
      3080619,
      357996,
      357996
    ],
    "totals": [
      3080619,
      424407,
      424407
    ],
    "col-max": [
      219567,
      151478,
      151478
    ],
    "col-min": [
      1,
      1,
      1
    ]
  }
}
```

### Request parameters

The following table describes the request parameters for the `POST /reports` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `rsid` | Required | String | Data view ID (report suite ID for CJA) |
| `globalFilters` | Optional | Array | Contains `type`, `dateRange`, and `dateRangeId` |
| `type` | Optional | String | The type of filter applied |
| `dateRange` | Optional | String | The date range of the data |
| `dateRangeId` | Optional | String | The label for the date range; e.g., `thisMonth` |
| `metricContainer` | Optional | Object | Contains `metrics` array |
| `metrics` | Optional | Array | Contains `columnId`, `id`, and `sort` |
| `columnId` | Optional | String | The column number in the table visualization, left to right, starting from `0` |
| `id` | Optional | String | The name of the element for the column; e.g., the name of the `metric` |
| `sort` | Optional | String | The sorting applied to the column data--`asc` or `desc` |
| `dimension` | Required | String | The dimension used for the report |
| `settings` | Optional | Object | The settings requested for the reporting response |
| `countRepeatInstances` | Optional | Boolean | Whether to count repeat instances of a returned metric |
| `includeAnnotations` | Optional | Boolean | Whether to include annotations in the response |
| `limit` | Optional | Integer | The maximum number of items to return in the response |
| `page` | Optional | Integer | The page number to return in the response |
| `nonesBehavior` | Optional | String | Excludes instances with values of `0` if set to `exclude-nones` |
| `statistics` | Optional | Object | Contains the `functions` array |
| `functions` | Optional | Array | Contains `col-max` and `col-min` |

### Response parameters

The following table describes the response parameters for the `POST /reports` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `totalPages` | Integer | The total number of pages with data |
| `firstPage` | Boolean | Whether this is the first page of results |
| `lastPage` | Boolean | Whether this is the last page of results |
| `numberOfElements` | Integer | The number of item elements in the report |
| `number` | Integer | The page number, starting with `0` |
| `totalElements` | Integer | Total number of elements in the report |
| `columns` | Object | Contains column and `dimension` data |
| `dimension` | Object | Contains `id` and `type` |
| `id` | String | Name of the dimension |
| `type` | String | The `dimension` ID data type |
| `columnIds` | Array | The column numbers in the table visualization |
| `rows` | Array | Contains `itemId`, `value` and `data` |
| `itemId` | String | The item ID |
| `value` | String | The name specified for the `itemId` in the report |
| `data` | Array | The numerical values returned for the requested items |
| `summaryData` | Object | Contains the summary data information |
| `filteredTotals` | Array | The data totals after the specified filters are applied |
| `totals` | Array | The data totals |
| `col-max` | Array | The column maximum values |
| `col-min` | Array | The column minimum values |

