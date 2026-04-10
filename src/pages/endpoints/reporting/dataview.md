---
title: Dataview Report API
description: Create an API dataview report
---

# Create dataview reports

Use dataview reports API return the data associated with an existing dataview. 

To create a dataview report, use the following endpoint:

`POST https://cja.adobe.io/reports`

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

## Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

### Response

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

## Request parameters

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

## Response parameters

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

For more information on the Customer Journey Analytics Reporting API, see the [Overview](index.md).
