---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Segments
description: Add, edit, or delete segments using the API.
---

# Segments API

The Customer Journey Analytics Segments APIs allow you to retrieve, update, or create segments programmatically through Adobe Developer. The APIs use the same data and methods that are used when working with segments in the UI. See [Segments](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-components/cja-segments/seg-overview.html) in the Customer Journey Analytics Components user guide for more information.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## GET multiple segments

Use this endpoint to retrieve all segments owned by the user or accessible to the user based on the specified filters and permissions.

`GET https://cja.adobe.io/segments`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X GET "https://cja.adobe.io/segments?rsids=example_dataview_id&expansion=definition,tags,compatibility&limit=10&page=0" \
  -H "accept: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}"
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
[
  {
    "id": "s300000022_5bb7c94e80f0073611afb35c",
    "name": "Mobile Device Users",
    "description": "Segment for users accessing via mobile devices",
    "rsid": "example_dataview_id",
    "reportSuiteName": "Example Data View",
    "owner": {
      "id": 596983,
      "name": "John Doe",
      "login": "john.doe@company.com"
    },
    "definition": {
      "container": {
        "func": "segment",
        "context": "hits",
        "pred": {
          "func": "exists",
          "description": "Mobile Device Type exists",
          "val": {
            "func": "attr",
            "name": "variables/mobiledevicetype"
          }
        }
      },
      "func": "segment-def",
      "version": [1, 0, 0]
    },
    "compatibility": {
      "valid": true,
      "message": "Segment is valid for all products",
      "supported_products": ["oberon", "frag"]
    },
    "tags": [
      {
        "id": 1234,
        "name": "Mobile",
        "description": "Mobile-related segments"
      }
    ],
    "modified": "2023-07-15T10:30:00.000Z",
    "created": "2023-06-01T14:20:00.000Z"
  }
]
```

### Request parameters

The following table describes the request parameters for the `GET /segments` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `segmentFilter` | Optional | String | Filter list to only include segments in the specified list (comma-delimited list of IDs) |
| `locale` | Optional | String | Locale. Default is `en_US` |
| `name` | Optional | String | Filter list to only include segments that contain the Name |
| `tagNames` | Optional | String | Filter list to only include segments that contain one of the tags |
| `filterByPublishedSegments` | Optional | String | Filter list to only include segments where the published field is set to one of the allowable values. Valid values: `all`, `true`, `false`. Default is `all` |
| `limit` | Optional | Integer | Number of results per page. Default is `10` |
| `page` | Optional | Integer | Page number (base 0 - first page is `0`). Default is `0` |
| `sortDirection` | Optional | String | Sort direction. Valid values: `ASC`, `DESC`. Default is `ASC` |
| `sortProperty` | Optional | String | Property to sort by. Valid values: `name`, `modified_date`, `id`. Default is `id` |
| `expansion` | Optional | Array | Comma-delimited list of additional segment metadata fields to include on response. Valid values: `ownerFullName`, `modified`, `tags`, `compatibility`, `definition`, `publishingStatus`, `definitionLastModified`, `categories` |
| `includeType` | Optional | Array | Include additional segments not owned by user. Valid values: `shared`, `all`, `templates`. The `all` option takes precedence over `shared` |

### Response parameters

The response is an array of segment objects, each containing the following parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | String | Id of the segment |
| `name` | String | A name for the segment |
| `description` | String | A description of the segment |
| `rsid` | String | The data view id |
| `reportSuiteName` | String | The friendly name for the data view id |
| `owner` | Object | The owner of the segment as an Owner object |
| `definition` | Object | The segment definition as a JSON object |
| `compatibility` | Object | CJA products that the segment is compatible with |
| `tags` | Array | All existing tags associated with the segment |
| `modified` | String | Date that the segment was last modified (ISO 8601) |
| `created` | String | Date that the segment was created (ISO 8601) |

## Retrieve a single segment

Use this endpoint to retrieve a specific segment by its ID.

`GET https://cja.adobe.io/segments/{ID}`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X GET "https://cja.adobe.io/segments/s300000022_5bb7c94e80f0073611afb35c?expansion=definition,tags,compatibility" \
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
  "id": "s300000022_5bb7c94e80f0073611afb35c",
  "name": "Mobile Device Users", 
  "description": "Segment for users accessing via mobile devices",
  "rsid": "example_dataview_id",
  "reportSuiteName": "Example Data View",
  "owner": {
    "id": 596983,
    "name": "John Doe",
    "login": "john.doe@company.com"
  },
  "definition": {
    "container": {
      "func": "segment",
      "context": "hits",
      "pred": {
        "func": "exists",
        "description": "Mobile Device Type exists",
        "val": {
          "func": "attr",
          "name": "variables/mobiledevicetype"
        }
      }
    },
    "func": "segment-def",
    "version": [1, 0, 0]
  },
  "compatibility": {
    "valid": true,
    "message": "Segment is valid for all products",
    "supported_products": ["oberon", "frag"]
  },
  "tags": [
    {
      "id": 1234,
      "name": "Mobile",
      "description": "Mobile-related segments"
    }
  ],
  "modified": "2023-07-15T10:30:00.000Z",
  "created": "2023-06-01T14:20:00.000Z"
}
```

### Request parameters

The following table describes the request parameters for the `GET /segments/{ID}` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `id` | Required | String | The segment ID to retrieve |
| `locale` | Optional | String | Locale. Valid values include `en_US`, `fr_FR`, `ja_JP`, `de_DE`, `es_ES`, `ko_KR`, `pt_BR`, `zh_CN`, and `zh_TW`. Default is `en_US` |
| `expansion` | Optional | Array | Comma-delimited list of additional segment metadata fields to include on response. Valid values: `reportSuiteName`, `ownerFullName`, `modified`, `tags`, `compatibility`, `definition`, `publishingStatus`, `definitionLastModified`, `categories` |

### Response parameters

The response contains the same segment object structure as described in the retrieve multiple segments section.

## Create a segment

Use this endpoint to create a new segment. Adobe recommends using the product UI to create segments when possible, as it provides validation and a user-friendly interface.

`POST https://cja.adobe.io/segments`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X POST "https://cja.adobe.io/segments" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -d '{
    "name": "High Value Customers",
    "description": "Customers with orders over $500",
    "rsid": "example_dataview_id",
    "definition": {
      "container": {
        "func": "segment",
        "context": "visits",
        "pred": {
          "func": "range",
          "description": "Revenue greater than 500",
          "val": {
            "func": "attr",
            "name": "metrics/revenue"
          },
          "low": 500,
          "high": null
        }
      },
      "func": "segment-def",
      "version": [1, 0, 0]
    }
  }'
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "id": "s300000022_5cc8d94e80f0073611afb45d",
  "name": "High Value Customers",
  "description": "Customers with orders over $500",
  "rsid": "example_dataview_id",
  "reportSuiteName": "Example Data View",
  "owner": {
    "id": 596983,
    "name": "John Doe", 
    "login": "john.doe@company.com"
  },
  "definition": {
    "container": {
      "func": "segment",
      "context": "visits",
      "pred": {
        "func": "range",
        "description": "Revenue greater than 500",
        "val": {
          "func": "attr",
          "name": "metrics/revenue"
        },
        "low": 500,
        "high": null
      }
    },
    "func": "segment-def",
    "version": [1, 0, 0]
  },
  "compatibility": {
    "valid": true,
    "message": "Segment is valid for all products",
    "supported_products": ["oberon", "frag"]
  },
  "modified": "2023-07-20T09:15:00.000Z",
  "created": "2023-07-20T09:15:00.000Z"
}
```

### Request parameters

The following table describes the request parameters for the `POST /segments` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `name` | Required | String | A name for the segment |
| `description` | Optional | String | A description of the segment |
| `rsid` | Required | String | The data view id |
| `definition` | Required | Object | The segment definition as a JSON object |
| `locale` | Optional | String | Locale. Valid values include `en_US`, `fr_FR`, `ja_JP`, `de_DE`, `es_ES`, `ko_KR`, `pt_BR`, `zh_CN`, and `zh_TW`. Default is `en_US` |
| `expansion` | Optional | Array | Comma-delimited list of additional segment metadata fields to include on response. Valid values: `reportSuiteName`, `ownerFullName`, `modified`, `tags`, `compatibility`, `definition`, `publishingStatus`, `definitionLastModified`, `categories` |

### Response parameters

The response contains the same segment object structure as described in the retrieve single segment section, including the newly assigned segment ID.

## Update a segment

Use this endpoint to update an existing segment. The API supports partial updates, so you can send only the fields you want to change.

`PUT https://cja.adobe.io/segments/{ID}`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X PUT "https://cja.adobe.io/segments/s300000022_5bb7c94e80f0073611afb35c" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -d '{
    "name": "Updated Mobile Device Users",
    "description": "Updated description for mobile device segment"
  }'
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "id": "s300000022_5bb7c94e80f0073611afb35c",
  "name": "Updated Mobile Device Users",
  "description": "Updated description for mobile device segment",
  "rsid": "example_dataview_id",
  "reportSuiteName": "Example Data View",
  "owner": {
    "id": 596983,
    "name": "John Doe",
    "login": "john.doe@company.com"
  },
  "definition": {
    "container": {
      "func": "segment",
      "context": "hits",
      "pred": {
        "func": "exists",
        "description": "Mobile Device Type exists",
        "val": {
          "func": "attr",
          "name": "variables/mobiledevicetype"
        }
      }
    },
    "func": "segment-def",
    "version": [1, 0, 0]
  },
  "modified": "2023-07-21T11:45:00.000Z",
  "created": "2023-06-01T14:20:00.000Z"
}
```

### Request parameters

The following table describes the request parameters for the `PUT /segments/{ID}` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `id` | Required | String | Segment ID to be updated |
| `name` | Optional | String | A name for the segment |
| `description` | Optional | String | A description of the segment |
| `definition` | Optional | Object | The segment definition as a JSON object |
| `locale` | Optional | String | Locale. Valid values include `en_US`, `fr_FR`, `ja_JP`, `de_DE`, `es_ES`, `ko_KR`, `pt_BR`, `zh_CN`, and `zh_TW`. Default is `en_US` |
| `expansion` | Optional | Array | Comma-delimited list of additional segment metadata fields to include on response. Valid values: `reportSuiteName`, `ownerFullName`, `modified`, `tags`, `compatibility`, `definition`, `publishingStatus`, `definitionLastModified`, `categories` |

### Response parameters

The response contains the updated segment object with the same structure as described in the retrieve single segment section.

## Validate a segment

Use this endpoint to validate a segment definition before creating or updating a segment. This helps ensure the segment definition is syntactically correct and compatible with the specified data view.

`POST https://cja.adobe.io/segments/validate`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X POST "https://cja.adobe.io/segments/validate?rsid=example_dataview_id" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -d '{
    "container": {
      "func": "segment",
      "context": "visits",
      "pred": {
        "func": "range",
        "val": {
          "func": "attr",
          "name": "metrics/revenue"
        },
        "low": 100,
        "high": null
      }
    },
    "func": "segment-def",
    "version": [1, 0, 0]
  }'
```

### Example response

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### Response

```json
{
  "valid": true,
  "message": "Segment definition is valid",
  "supported_products": ["oberon", "frag"],
  "validator_version": "1.0.0"
}
```

### Request parameters

The following table describes the request parameters for the `POST /segments/validate` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `rsid` | Required | String | Data view ID to run the validation against |
| `body` | Required | Object | Segment definition to validate |

### Response parameters

The following table describes the response parameters for the `POST /segments/validate` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `valid` | Boolean | Whether the segment definition is valid |
| `message` | String | Validation message or error description |
| `supported_products` | Array | List of CJA products that support this segment |
| `validator_version` | String | Version of the validation engine used |

## Delete a segment

Use this endpoint to delete an existing segment. When you delete a segment, it is hidden from all users in all menus and is no longer returned when retrieving multiple segments. However, reports and other sources that reference the deleted segment can still use it, and you can continue to request it from the single segment API endpoint.

`DELETE https://cja.adobe.io/segments/{ID}`

### Example request

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Request

```sh
curl -X DELETE "https://cja.adobe.io/segments/s300000022_5bb7c94e80f0073611afb35c" \
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
  "status": "ok",
  "message": "Segment deleted successfully"
}
```

### Request parameters

The following table describes the request parameters for the `DELETE /segments/{ID}` endpoint:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `id` | Required | String | The segment ID to be deleted |
| `locale` | Optional | String | Locale. Valid values include `en_US`, `fr_FR`, `ja_JP`, `de_DE`, `es_ES`, `ko_KR`, `pt_BR`, `zh_CN`, and `zh_TW`. Default is `en_US` |

### Response parameters

The following table describes the response parameters for the `DELETE /segments/{ID}` endpoint:

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | String | Status of the delete operation |
| `message` | String | Confirmation message or error description |

## Usage notes and limitations

Consider the following when working with the Segments API:

### Rate limiting

The Segments API enforces rate limits to ensure optimal performance:

* **Requests per minute**: 60 requests per minute per organization
* **Concurrent requests**: Maximum 6 concurrent requests per organization

### Segment definition limits

* **Complexity**: Segments with very complex definitions may have performance implications
* **Nesting**: Deep nesting of containers should be avoided for optimal performance
* **Compatibility**: Not all segment definitions are compatible with all CJA products

### Best practices

* Use the validation endpoint before creating segments to ensure compatibility
* Cache segment results when possible to reduce API calls
* Use appropriate segment names and descriptions for maintainability
* Consider using the UI for complex segment creation and the API for programmatic management
* Implement retry logic with exponential backoff for rate-limited requests
* Test segments in a development environment before deploying to production

### Error handling

Common error responses include:

* **400 Bad Request**: Invalid segment definition or missing required parameters
* **401 Unauthorized**: Invalid or missing authentication
* **403 Forbidden**: Insufficient permissions to access or modify segments
* **404 Not Found**: Segment not found
* **429 Too Many Requests**: Rate limit exceeded
* **500 Internal Server Error**: Server error during segment processing

### Tags and sharing

Note that some fields are managed separately from the main segments endpoints:

* **Tags**: Use the [Tags endpoint](../componentmetadata/tags.md) to set or modify a segment's tags
* **Sharing**: Use the [Shares endpoint](../componentmetadata/shares.md) to manage segment sharing permissions

For more information on CJA Segments APIs, see the [CJA API reference](https://developer.adobe.com/cja-apis/docs/api/).
