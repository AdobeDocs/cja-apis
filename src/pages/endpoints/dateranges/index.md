---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Date Ranges
description: Get a list of date ranges using the API.
---

# CJA Date Ranges

The Date Range API allows you to retrieve a list of ranges, get a single date range, update a date range, or create a date range through Adobe Developer.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## Get Date Ranges

The following `GET` returns dateranges the user has access to.

`GET https://cja.adobe.io/dateranges`

Additional details may be requested by using the query parameters below.

### Query String Parameters

| Query String | Type | Description | Possible Values |
| --- | --- | ---------- | ----- |
| `filterByIds` | String | Comma separated list of date range ids. Returns only date ranges with these ids | id1,id2 |
| `expansion` | String | Allows requests for some response fields to be populated that would otherwise not be included. | ownerFullName,modified,definition,tags,shares |
| `includeType` | String | Alters the set of date ranges that are included in API responses. | all,shared,templates |
| `limit` | Integer | Number of results per page. If left `null`, the default size is 100. | 10 |
| `page` | Integer | Page number. The first page is indexed at 0. | 0 |

### Example : Get date ranges

Request:

`GET https://cja.adobe.io/dateranges`

Response:

```
{
  "content": [
    {
      "id": "5a5e294452faff002119a986",
      "name": "Curated Data Range Test",
      "description": "Curated Data Range Test",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "591f2edabef0d37113bbcbf5",
      "name": "Sample Date Range (Don't delete it)",
      "description": "Sample Date Range",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e79255b4201ce1b3cfd7b2b",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e793112e58055470d34589a",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e7a1334e58055470d34592f",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e8b80ca1d77104488659d9a",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e8b80d7c50fbf606ac3843b",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e8b80df7f17335cfa66680a",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e8b80e90d087502cdf43b67",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    },
    {
      "id": "5e8b80f18191bc0e83c22b1a",
      "name": "Integration Test 1",
      "description": "Integration Test 1 Description",
      "owner": {
        "id": 622291
      },
      "createDate": null,
      "disabledDate": null
    }
  ],
  "totalElements": 34,
  "totalPages": 4,
  "numberOfElements": 10,
  "number": 0,
  "firstPage": true,
  "lastPage": false,
  "sort": null,
  "size": 10
}
```

## Retrieving a single Date Range

To retrieve a single date range, include its `id` in the request.

### Example request

`GET https://cja.adobe.io/dateranges/5a5e294452faff002119a986`

### Example response

```
{
  "id": "5a5e294452faff002119a986",
  "name": "Curated Data Range Test",
  "description": "Curated Data Range Test",
  "owner": {
    "id": 622291
  },
  "definition": "tm/tm+1m",
  "createDate": null,
  "disabledDate": null
}
```

## Deleting a Date Range

The `DELETE` single date range can be used to remove a date range that is no longer needed.

### Example `DELETE` request

The request is the same as retrieving a single date range except to change the HTTP method to `DELETE`.

`DELETE https://cja.adobe.io/dateranges/5a5e294452faff002119a986`

## Updating or Changing a Date Range

Existing date ranges can be edited via the `PUT` /dateranges/[date range id] endpoint. Most date range fields can be updated, not including those that are derived or provided by the API.

The `PUT` endpoint also supports partial updates. This means that instead of sending the entire JSON object to the API, the request may include only the fields that need to be updated.

### Example `PUT` request

The following example shows JSON fields to be updated with a `PUT` request:

`PUT https://cja.adobe.io/dateranges/5a5e294452faff002119a986`

with payload

```
{
    "name": "new name",
    "description": "new description",
    "definition": "tm/tm+1m"
}
```

## Creating a Date Range

Date Range names are allowed to include utf-8 character combinations that are not empty strings or null. However, if the name is too long, it does not display properly in the UI, so provide only useful and understandable names to improve readability.

To create a date range with the CJA APIs:

1. Define/Specify/Configure/Build a definition.
1. Specify a name. The name should be descriptive of what the date range does. The description field can provide additional context about the date range.
1. `POST` to the `/dateranges` endpoint.

## API status codes

For a description of API status codes and tips for troubleshooting, see the [Platform FAQ and troubleshooting guide](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html#api-status-codes).
