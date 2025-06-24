---
title: Reporting API
description: Create and retrieve reports programmatically
---

# Reports

The Customer Journay Analytics Reporting API allows you to create and retrieve reports programmatically. These APIs use the same data and methods that Adobe uses inside the product UI. See [Reports](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-workspace/reports/reports-menu.html?) for more information.

## Retrieve top items report

You can retrieve a list of available reports using the `GET /reports` endpoint to discover all available reports for your organization.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## Retrieve multiple reports

Use this endpoint to retrieve a list of reports. The response includes report metadata such as report ID, name, type, and other properties.

`GET https://cja.adobe.io/reports`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X GET "https://cja.adobe.io/reports?limit=10&page=0" \
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
  "content": [
    {
      "id": "report1",
      "name": "Traffic Report",
      "type": "ranked",
      "description": "Shows traffic data by dimension",
      "tags": ["traffic", "basic"],
      "owner": {
        "id": "user123",
        "name": "John Doe"
      },
      "created": "2023-01-15T10:30:00Z",
      "modified": "2023-01-16T15:45:00Z"
    },
    {
      "id": "report2", 
      "name": "Conversion Report",
      "type": "trended",
      "description": "Shows conversion metrics over time",
      "tags": ["conversion", "metrics"],
      "owner": {
        "id": "user456",
        "name": "Jane Smith"
      },
      "created": "2023-01-10T08:15:00Z",
      "modified": "2023-01-17T12:20:00Z"
    }
  ],
  "totalElements": 25,
  "totalPages": 3,
  "numberOfElements": 10,
  "number": 0,
  "size": 10,
  "first": true,
  "last": false
}
```

### Request parameters

The following table describes the request parameters for the `GET /reports` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `limit` | Optional | Integer | Number of results per page. Default is 10. Maximum is 1000. |
| `page` | Optional | Integer | Page number (0-based). Default is 0. |
| `expansion` | Optional | String | Comma-delimited list of additional report metadata fields to include in response. |
| `includeType` | Optional | String | Filter by report type. Options: `ranked`, `trended`, `overtime`, `fallout`, `flow`, `cohort`, `histogram` |
| `locale` | Optional | String | Language and country code. Default is `en_US`. |

### Response parameters

The following table describes the response parameters for the `GET /reports` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | Array | Array of report objects |
| `id` | String | Unique identifier for the report |
| `name` | String | Report name |
| `type` | String | Report type (ranked, trended, etc.) |
| `description` | String | Report description |
| `tags` | Array | Array of tags associated with the report |
| `owner` | Object | Report owner information |
| `created` | String | Report creation timestamp |
| `modified` | String | Report last modified timestamp |
| `totalElements` | Integer | Total number of reports available |
| `totalPages` | Integer | Total number of pages |
| `numberOfElements` | Integer | Number of elements in current page |
| `number` | Integer | Current page number |
| `size` | Integer | Page size |
| `first` | Boolean | Whether this is the first page |
| `last` | Boolean | Whether this is the last page |

## Retrieve a single report

Use this endpoint to retrieve details for a specific report by its ID.

`GET https://cja.adobe.io/reports/{REPORT_ID}`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X GET "https://cja.adobe.io/reports/report1?expansion=definition%2Cmetrics%2Cdimensions" \
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
  "id": "report1",
  "name": "Traffic Report",
  "type": "ranked",
  "description": "Shows traffic data by dimension",
  "tags": ["traffic", "basic"],
  "owner": {
    "id": "user123",
    "name": "John Doe"
  },
  "created": "2023-01-15T10:30:00Z",
  "modified": "2023-01-16T15:45:00Z",
  "definition": {
    "reportSuite": "prod-rsid",
    "dimension": "page",
    "metrics": [
      {
        "id": "visits",
        "name": "Visits"
      },
      {
        "id": "pageviews", 
        "name": "Page Views"
      }
    ],
    "dateRange": {
      "type": "lastMonth"
    },
    "segments": []
  },
  "dataView": {
    "id": "dv_123456789",
    "name": "Production Data View"
  }
}
```

### Request parameters

The following table describes the request parameters for the `GET /reports/{reportId}` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `reportId` | Required | String | The report ID |
| `expansion` | Optional | String | Comma-delimited list of additional report metadata fields to include in response |
| `locale` | Optional | String | Language and country code. Default is `en_US` |

### Response parameters

The following table describes the response parameters for the `GET /reports/{reportId}` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | String | Unique identifier for the report |
| `name` | String | Report name |
| `type` | String | Report type |
| `description` | String | Report description |
| `tags` | Array | Array of tags associated with the report |
| `owner` | Object | Report owner information |
| `created` | String | Report creation timestamp |
| `modified` | String | Report last modified timestamp |
| `definition` | Object | Report definition including metrics, dimensions, and filters |
| `dataView` | Object | Associated data view information |

## Execute a report

Use this endpoint to execute a report and retrieve data.

`POST https://cja.adobe.io/reports/{REPORT_ID}/execute`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X POST "https://cja.adobe.io/reports/report1/execute" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -d '{
    "dateRange": {
      "type": "lastMonth"
    },
    "limit": 50,
    "page": 0,
    "filters": []
  }'
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "reportId": "report1",
  "data": {
    "columns": [
      {
        "id": "dimension",
        "name": "Page",
        "type": "dimension"
      },
      {
        "id": "visits",
        "name": "Visits", 
        "type": "metric"
      },
      {
        "id": "pageviews",
        "name": "Page Views",
        "type": "metric"
      }
    ],
    "rows": [
      {
        "dimension": "Homepage",
        "visits": 12543,
        "pageviews": 18765
      },
      {
        "dimension": "Product Page",
        "visits": 8932,
        "pageviews": 15432
      },
      {
        "dimension": "About Us",
        "visits": 3421,
        "pageviews": 4567
      }
    ]
  },
  "totalElements": 156,
  "totalPages": 4,
  "numberOfElements": 50,
  "number": 0,
  "size": 50,
  "executionTime": "2023-01-18T14:30:25Z"
}
```

### Request parameters

The following table describes the request parameters for the `POST /reports/{reportId}/execute` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `reportId` | Required | String | The report ID |
| `dateRange` | Optional | Object | Date range for the report. Defaults to report's configured date range |
| `limit` | Optional | Integer | Number of results per page. Default is 50. Maximum is 1000 |
| `page` | Optional | Integer | Page number (0-based). Default is 0 |
| `filters` | Optional | Array | Additional filters to apply to the report |
| `sort` | Optional | Array | Sort configuration for the report data |

### Response parameters

The following table describes the response parameters for the `POST /reports/{reportId}/execute` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `reportId` | String | The executed report ID |
| `data` | Object | Report data including columns and rows |
| `columns` | Array | Column definitions |
| `rows` | Array | Data rows |
| `totalElements` | Integer | Total number of data elements |
| `totalPages` | Integer | Total number of pages |
| `numberOfElements` | Integer | Number of elements in current page |
| `number` | Integer | Current page number |
| `size` | Integer | Page size |
| `executionTime` | String | Report execution timestamp |

## Get report top items

Use this endpoint to retrieve the top items for a specific dimension in a report.

`GET https://cja.adobe.io/reports/topItems`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X GET "https://cja.adobe.io/reports/topItems?dataViewId=dv_123456789&dimension=page&metric=visits&limit=10" \
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
  "dimension": "page",
  "metric": "visits",
  "dateRange": {
    "start": "2023-01-01T00:00:00Z",
    "end": "2023-01-31T23:59:59Z"
  },
  "items": [
    {
      "itemId": "homepage",
      "value": "Homepage",
      "data": 12543
    },
    {
      "itemId": "product-page",
      "value": "Product Page", 
      "data": 8932
    },
    {
      "itemId": "about-us",
      "value": "About Us",
      "data": 3421
    },
    {
      "itemId": "contact",
      "value": "Contact",
      "data": 2876
    },
    {
      "itemId": "blog",
      "value": "Blog",
      "data": 2543
    }
  ],
  "totalElements": 156,
  "limit": 10
}
```

### Request parameters

The following table describes the request parameters for the `GET /reports/topItems` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `dataViewId` | Required | String | The data view ID |
| `dimension` | Required | String | The dimension to get top items for |
| `metric` | Required | String | The metric to sort by |
| `limit` | Optional | Integer | Number of top items to return. Default is 10. Maximum is 1000 |
| `dateRange` | Optional | String | Date range for the data. Format: YYYY-MM-DD/YYYY-MM-DD |
| `locale` | Optional | String | Language and country code. Default is `en_US` |

### Response parameters

The following table describes the response parameters for the `GET /reports/topItems` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `dimension` | String | The dimension name |
| `metric` | String | The metric used for sorting |
| `dateRange` | Object | Date range used for the data |
| `items` | Array | Array of top items |
| `itemId` | String | Unique identifier for the item |
| `value` | String | Display value for the item |
| `data` | Number | Metric value for the item |
| `totalElements` | Integer | Total number of items available |
| `limit` | Integer | Number of items returned |

## Create a custom report

Use this endpoint to create a new custom report definition.

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
    "name": "Custom Traffic Report",
    "description": "Custom report for tracking page traffic",
    "type": "ranked",
    "dataViewId": "dv_123456789",
    "definition": {
      "dimension": "page",
      "metrics": [
        {
          "id": "visits"
        },
        {
          "id": "pageviews"
        }
      ],
      "dateRange": {
        "type": "lastMonth"
      },
      "segments": []
    },
    "tags": ["custom", "traffic"]
  }'
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "id": "custom_report_123",
  "name": "Custom Traffic Report",
  "description": "Custom report for tracking page traffic",
  "type": "ranked",
  "dataViewId": "dv_123456789",
  "definition": {
    "dimension": "page",
    "metrics": [
      {
        "id": "visits",
        "name": "Visits"
      },
      {
        "id": "pageviews",
        "name": "Page Views"
      }
    ],
    "dateRange": {
      "type": "lastMonth"
    },
    "segments": []
  },
  "tags": ["custom", "traffic"],
  "owner": {
    "id": "current_user",
    "name": "Current User"
  },
  "created": "2023-01-18T14:35:00Z",
  "modified": "2023-01-18T14:35:00Z"
}
```

### Request parameters

The following table describes the request parameters for the `POST /reports` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `name` | Required | String | Report name |
| `description` | Optional | String | Report description |
| `type` | Required | String | Report type (ranked, trended, etc.) |
| `dataViewId` | Required | String | Associated data view ID |
| `definition` | Required | Object | Report definition including metrics and dimensions |
| `tags` | Optional | Array | Array of tags for the report |

### Response parameters

The response includes all the report properties along with system-generated fields like `id`, `owner`, `created`, and `modified`.

## Update a report

Use this endpoint to update an existing report definition.

`PUT https://cja.adobe.io/reports/{REPORT_ID}`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X PUT "https://cja.adobe.io/reports/custom_report_123" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -d '{
    "name": "Updated Custom Traffic Report",
    "description": "Updated description for custom traffic report",
    "type": "ranked",
    "dataViewId": "dv_123456789",
    "definition": {
      "dimension": "page",
      "metrics": [
        {
          "id": "visits"
        },
        {
          "id": "pageviews"
        },
        {
          "id": "uniquevisitors"
        }
      ],
      "dateRange": {
        "type": "lastMonth"
      },
      "segments": []
    },
    "tags": ["custom", "traffic", "updated"]
  }'
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "id": "custom_report_123",
  "name": "Updated Custom Traffic Report",
  "description": "Updated description for custom traffic report",
  "type": "ranked",
  "dataViewId": "dv_123456789",
  "definition": {
    "dimension": "page",
    "metrics": [
      {
        "id": "visits",
        "name": "Visits"
      },
      {
        "id": "pageviews",
        "name": "Page Views"
      },
      {
        "id": "uniquevisitors",
        "name": "Unique Visitors"
      }
    ],
    "dateRange": {
      "type": "lastMonth"
    },
    "segments": []
  },
  "tags": ["custom", "traffic", "updated"],
  "owner": {
    "id": "current_user",
    "name": "Current User"
  },
  "created": "2023-01-18T14:35:00Z",
  "modified": "2023-01-18T16:20:00Z"
}
```

### Request parameters

The request parameters are the same as creating a report, with the addition of:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `reportId` | Required | String | The report ID to update |

## Delete a report

Use this endpoint to delete a report.

`DELETE https://cja.adobe.io/reports/{REPORT_ID}`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X DELETE "https://cja.adobe.io/reports/custom_report_123" \
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
  "message": "Report deleted successfully",
  "reportId": "custom_report_123"
}
```

### Request parameters

The following table describes the request parameters for the `DELETE /reports/{reportId}` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `reportId` | Required | String | The report ID to delete |

### Response parameters

The following table describes the response parameters for the `DELETE /reports/{reportId}` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | String | Confirmation message |
| `reportId` | String | The deleted report ID |

## Usage notes and limitations

Consider the following when working with the Reports API:

### Rate limiting

The Reports API enforces rate limits to ensure optimal performance:

* **Requests per minute**: 60 requests per minute per organization
* **Concurrent requests**: Maximum 6 concurrent requests per organization
* **Report execution**: Maximum 10 report executions per minute

### Report execution limits

* **Data range**: Maximum 18 months of data per request
* **Dimension items**: Maximum 1000 dimension items per request
* **Metrics**: Maximum 20 metrics per report
* **Execution time**: Report execution timeout is 300 seconds

### Best practices

* Cache report results when possible to reduce API calls
* Use pagination for large result sets
* Implement retry logic with exponential backoff for rate-limited requests
* Use the `topItems` endpoint for quick dimension analysis
* Regularly clean up unused custom reports

### Error handling

Common error responses include:

* **400 Bad Request**: Invalid request parameters
* **401 Unauthorized**: Invalid or missing authentication
* **403 Forbidden**: Insufficient permissions
* **404 Not Found**: Report not found
* **429 Too Many Requests**: Rate limit exceeded
* **500 Internal Server Error**: Server error

The limits of reports per organization are:

* **Custom reports**: 500 per organization
* **Report executions**: 10,000 per day per organization
* **Data retention**: Report data is retained for 90 days

For more information on CJA Reports APIs, see the [CJA API reference](https://developer.adobe.com/cja-apis/docs/api/).
