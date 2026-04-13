---
title: Top Items API Report
description: Retrieve top items API report
---

# Top Items Report

Use a Customer Journey Analytics API Top Items Report to see the top-performing items for a specified dimension. 

The CJA API Top Items Report is used as a specialized helper to identify top-performing items (ranked by a specified metric) for a specified dimension over a specified date range. The Top Items Report uses a GET method to retrieve data, instead of a POST method used in all other report requests.

 To retrieve a Top Items Report, use the following endpoint:

`GET https://cja.adobe.io/reports/topItems`

## Path segments

The following path segments are usually included in a Top Items Report GET request:

- dataview ID (required)
- dimension ID (required)
- metric ID
- date range
- limit

If no metric or date range is supplied in the path, the report will default to values for those items as set in the dataview configuration. If no limit is supplied, the default value is determined by an fixed internal default on the backend of the reporting service. The path segments above are included in an example URL path below:

```
GET /reports/topItems
  ?dataViewId=dv_12345
  &dimensionId=variables/country
  &metricId=metrics/visits
  &startDate=2026-03-01
  &endDate=2026-03-31
  &limit=50
```

## Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

### Request

```sh
curl -X GET "https://cja.adobe.io/reports/topItems?limit=5&page=0&lookupNoneValues=true&dataId=dv_554445545&dimension=pages" \
  -H "accept: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}"
```

## Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

### Response

```json
{
  "totalPages": 1,
  "firstPage": true,
  "lastPage": true,
  "numberOfElements": 3,
  "number": 0,
  "totalElements": 3,
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

## Example request details

The example above requests a Top Items Report with the following:

* The top items within the dataview `dv_554445545`.
* The top metrics associated with the dimension `pages`.

## Example response details

The example above returns the top items (those with the highest of any metric counts) in descending order:

* The page `home` with a count of `219567`.
* The page `category 5` with a count of `90943`.
* The page `category 2` with a count of `84192`.

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

For general information on the Customer Journey Analytics API Report endpoint, see the [Reporting API Overview](index.md). See the [CJA API reference](https://developer.adobe.com/cja-apis/docs/api/) for complete data models of the CJA APIs.


