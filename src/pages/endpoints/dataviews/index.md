---
title: Dataviews APIs
description: Manage CJA data views through APIs
---

# Dataviews

The CJA Dataviews APIs allow you to retrieve, create, or update dataviews programmatically through Adobe Developer. These APIs use the same data and methods that Adobe uses inside the product UI. See [Dataviews](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/data-views.html?) in the Customer Journey Analytics guide for more information.

The endpoints described in this guide are routed through analytics.adobe.io. To use them, you will need to first create a client with access to Customer Journey Analytics APIs. For more information, refer to [Getting started with the Customer Journey Analytics API](https://developer.adobe.com/cja-apis/docs/getting-started).

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

This guide includes instructions for using the following endpoints:
* [GET multiple data views](#get-multiple-data-views): Retrieves a list of data views for a specified company
* [GET a single data view](#get-a-single-data-view): Retrieves information for a single data view
* [POST validate a data view](#post-validate-a-data-view): Checks a data view for correct fields before creating
* [POST create a data view](#post-create-a-data-view): Creates a data view with a JSON payload for a specified company
* [PUT copy a data view](#put-copy-a-data-view): Copies a data view
* [PUT modify a data view](#put-modify-a-data-view): Modifies or updates a data view with new data
* [DELETE a data view](#delete-a-data-view): Removes a data view

## GET multiple data views

Use this endpoint to retrieve multiple data views associated with a company.

`GET https://cja.adobe.io/data/dataviews`

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://cja.adobe.io/data/dataviews?expansion=name%2Cowner%2Corganization%2Cdescription&limit=3&page=0" \
-H "x-api-key: {API_KEY}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "Authorization: Bearer {AUTHORIZATION_TOKEN}"
```

#### Response

```JSON
{
    "content": [
        {
            "name": "Example 1 Data View",
            "description": "Campaign list 1",
            "owner": {
                "imsUserId": "{IMS_USER_ID}",
                "ownerId": "{OWNER_ID}",
                "name": "Example name 1",
                "type": "imsUser"
            },
            "organization": "{IMS_ORG_ID}",
            "systemUserOwned": false,
            "id": "dv_1de9ac146e674b139222222"
        },
        {
            "name": "Example 2 Data View",
            "description": "Campaign list 2",
            "owner": {
                "imsUserId": "{IMS_USER_ID}",
                "ownerId": "{OWNER_ID}",
                "name": "Example name 2",
                "type": "imsUser"
            },
            "organization": "{IMS_ORG_ID}",
            "systemUserOwned": false,
            "id": "dv_2de9ac146e674b139222223"
        },
        {
            "name": "Example 3 Data View",
            "description": "Campaign list 3",
            "owner": {
                "imsUserId": "{IMS_USER_ID}",
                "ownerId": "{OWNER_ID}",
                "name": "Example name 3",
                "type": "imsUser"
            },
            "organization": "{IMS_ORG_ID}",
            "systemUserOwned": false,
            "id": "dv_3de9ac146e674b139222224"
        }
    ],
    "number": 0,
    "totalElements": 1170,
    "totalPages": 390,
    "numberOfElements": 3,
    "firstPage": true,
    "lastPage": false,
    "sort": null,
    "size": 3
}
```

### Request example details

The example above requests the following:

* The `expansion` parameter values for name, owner, organization, and description of the data views to be included in the response.
* The `limit` of results per page to be `3`.
* The first `page` to be shown is `0`.

### Response example details

The example response above shows the following:

* The first result, `Example 1 Data View` is the data view `name`; `Example name 1` is the `name` of the `owner`; and `Campaign list 1` is the `description`. These values are returned as requested expansion parameters.
* The IDs for the data views are `dv_1de9ac146e674b139222222`, `dv_2de9ac146e674b139222223`, and `dv_3de9ac146e674b139222224`.
* The `"number": 0` refers to the displayed page, or the first page.
* The `numberOfElements` confirms our request that the results displayed per page is `3`.
* The `totalElements` of all the data views for the specified organization is `1170`.
* The `totalPages` of data views is `390` where the `numberOfElements` per page is `3`.

### Request parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `expansion` | optional | string | Comma-delimited list of additional fields to include on response. Includes the enums `name`, `description`, `owner`, `isDeleted`, `parentDataGroupId`, `segmentList`, `currentTimezoneOffset`, `timezoneDesignator`, `modified`, `createdDate`, `organization`, `curationEnabled`, `recentRecordedAccess`, `sessionDefinition`, `externalData`, and `containerNames`. |
| `parentDataGroupId` | optional | string | Filters data views by a single parent data group ID |
| `externalIds` | optional | string | Comma-delimited list of external IDs that limit the response |
| `externalParentIds` | optional | string | Comma-delimited list of external parent IDs that limit the response |
| `dataViewIds` | optional | string | Comma-delimited list of data view IDs that limit the response |
| `includeType` | optional | string | Include additional data views not owned by user |
| `cached` | optional | boolean | Whether it returns cached results. The default value is `true`. |
| `limit` | optional | integer | Number of results per page |
| `page` | optional | integer | The page number to be displayed. The first page is `0`. |
| `sortDirection` | optional | string | Sort direction (`ASC` or `DESC`) |
| `sortProperty` | optional | string | Property to sort by. Only `modifiedDate` and `id` are currently allowed. The default value is `id`. |

### Response parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | container | The data views requested. Contains the `name`, `description`, `isDeleted`, `parentDataGroupId`, `segmentList`, `currentTimezoneOffset`, `timezoneDesignator`, `modifiedDate`, `createdDate`, `organization`, `modifiedBy`, `curationEnabled`, `recentRecordedAccess`, `sessionDefinition`, `externalData`, `containerNames`, and `id` parameters. |
| `name` | string | The name of a data view |
| `description` | string | The description of a data view |
| `owner` | container | The owner of a data view. Contains the `imsUserId` and `name` parameters. Note that the owner in the body is overridden by the user making the request. |
| `imsUserId` | string | The IMS user ID of the owner of a data view |
| `name` | string | The name of the owner of a data view |
| `isDeleted` | boolean | Whether the data view is deleted |
| `parentDataGroupId` | string | Filters data views by a single parent data group ID |
| `currentTimezoneOffset` | integer | The UTC time offset, expressed as the number of hours and minutes less than or more than zero |
| `timezoneDesignator` | string | The time zone used by the data view |
| `modifiedDate` | string | The date the data view was last modified |
| `createdDate` | string | The date the data view was created |
| `organization` | string | The organization the data view belongs to |
| `modifiedBy` | string | Who modified the data view |
| `curationEnabled` | boolean | Whether the data view is enabled for curation  |
| `recentRecordedAccess` | string | The most recent recorded access of the data view |
| `sessionDefinition` | conatiner | The parameters that define a session. Contains the `numPeriods`, `granularity`, `func`, and `events` parameters. |
| `numPeriods` | integer | The number of time periods |
| `granularity` | string | A defined period of time. Includes the following enums: `MINUTE`, `HOUR`, `DAY`, and `WEEK`. |
| `func` | string | Includes the enums: `INACTIVITY`, and `BEFORE_EVENTS` |
| `externalData` | container | The IDs of external entities linked to the data view. Contains the `externalParentId`, and `externalId` parameters.|
| `externalId` | string | The external ID |
| `externalParentId` | string | The ID of the parent data group used by the data view |
| `containerNames` | container | Optional names to replace the default container names. Contains the `event`, `session`, and `people` parameters. |
| `event` | string | The name of the event container |
| `session` | string | The name of the session container |
| `people` | string | The name of the people container |
| `id` | string | The ID of the given data view |
| `pageable` | container | Contains the `sort`, `paged`, `unpaged`, `pageNumber`, `pageSize`, and `offset` parameters |
| `sort` | container | Contains the `sorted`, `unsorted`, and `empty` parameters |
| `sorted` | boolean | Whether the data is sorted |
| `unsorted` | boolean | Whether the data is unsorted |
| `empty` | boolean | Whether the container is empty |
| `paged` | boolean | Whether the results are paged |
| `unpaged` | boolean | Whether the results are unpaged |
| `pageNumber` | integer | The page number for the result |
| `pageSize` | integer | The size of the page |
| `offset` | integer | Excludes from the response the specified number of items |
| `totalElements` | integer | The number of data sets belonging to the organization |
| `totalPages` | integer | The number of pages able to be displayed with the chosen filters |
| `lastPage` | boolean | Whether the shown page is the last page of data sets |
| `firstPage` | boolean | Whether the shown page is the first page of data sets |
| `numberOfElements` | integer | The number of data sets displayed per page |
| `size` | integer | The number of data sets displayed per page |
| `number` | integer | The page number being displayed. The first page is `0`. |

## GET a single data view

Use this endpoint to retrieve data associated with a specific data view.

`GET https://cja.adobe.io/data/dataviews/{DATA_VIEW_ID}`

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://cja.adobe.io/data/dataviews/dv_150a049f5d02785bacxxxxxx?expansion=name%2Cowner%2Cdescription%2CparentDataGroupId%2CtimezoneDesignator%2CexternalData" \
-H "x-api-key: {API_KEY}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "Authorization: Bearer {AUTHORIZATION_TOKEN}"
```

#### Response

```JSON
{
    "name": "Example Data View 1",
    "description": "Example Data View",
    "owner": {
        "imsUserId": "{IMS_USER_ID}",
        "ownerId": "{OWNER_ID}",
        "name": "Example name 1",
        "type": "imsUser"
    },
    "parentDataGroupId": "dg_c590c1e0-0cb0-11ea-a9a5-19370exxxxxx",
    "timezoneDesignator": "US/Mountain",
    "externalData": {
        "externalParentId": "c590c1e0-0cb0-11ea-a9a5-19370exxxxxx"
    },
    "id": "dv_150a049f5d02785bacxxxxxx"
}
```

### Request example details

The example above requests the `expansion` parameter values for `name`, `owner`, `description`, `parentDataGroupId`, `timezoneDesignator`, and `externalData` for data view `dv_150a049f5d02785bacxxxxxx`.

### Response example details

The example response above shows the following for data view `dv_150a049f5d02785bacxxxxxx`:

* `Example Data View 1` as the `name`.
* `Example Data View` as the `description`.
* `Example name 1` as the `name` for the `owner`.
* `dg_c590c1e0-0cb0-11ea-a9a5-19370exxxxxx` as the `parentDataGroupId`.
* `US/Mountain` as the `timezoneDesignator`.
* `c590c1e0-0cb0-11ea-a9a5-19370exxxxxx` as the`externalData`.

### Request parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `dataViewId` | required | string | The Data View ID to lookup |
| `expansion` |  | array of strings | Comma-delimited list of additional fields to include on response. Includes the enums `name`, `description`, `owner`, `isDeleted`, `parentDataGroupId`, `segmentList`, `currentTimezoneOffset`, `timezoneDesignator`, `modified`, `createdDate`, `organization`, `curationEnabled`, `recentRecordedAccess`, `sessionDefinition`, `externalData`, and `containerNames`. |

### Response parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | The name of the data view |
| `description` | string | The description of a data view |
| `owner` | container | The owner of a data view. Contains the `imsUserId`, and `name` parameters. Note that the owner in the body is overridden by the user making the request.|
| `imsUserId` | string | The IMS user ID of the owner of a data view |
| `name` | string | The name of the owner of a data view |
| `isDeleted` | boolean | If the data view is deleted |
| `parentDataGroupId` | string | The data group ID associated with the data view |
| `currentTimezoneOffset` | integer | The UTC time offset, expressed as the number of hours and minutes less than or more than zero |
| `timezoneDesignator` | string | The time zone used by the data view |
| `modifiedDate` | string | The date the data view was last modified |
| `createdDate` | string | The date the data view was created |
| `organization` | string | The organization the data view belongs to |
| `modifiedBy` | string | Who last modified the data view |
| `curationEnabled` | boolean | Whether the data view is enabled for curation |
| `recentRecordedAccess` | string | The most recent recorded access of the data view |
| `sessionDefinition` | container | Contains the `numPeriods`, `granularity`, `func`, and `events` parameters |
| `numPeriods` | integer | The number of time periods |
| `granularity` | string | A defined period of time. Includes the following enums: `MINUTE`, `HOUR`, `DAY`, and `WEEK`. |
| `func` | string | Includes the enums: `INACTIVITY`, and `BEFORE_EVENTS`. |
| `externalData` | container | Contains the `externalId`, and `externalParentId` parameters |
| `externalId` | string | The external ID |
| `externalParentId` | string | The ID of the parent data group used by the data view |
| `containerNames` | container | Contains the `event`, `session`, and `people` parameters |
| `event` | string | The name of the event container |
| `session` | string | The name of the session container |
| `people` | string | The name of the people container |
| `id` | string | The ID of the data view |

## POST Validate a data view

Use this endpoint to validate a data view structure before using other POST or PUT methods. You can use this as a check to make sure your current data structure is valid before it is final.   

`POST https://cja.adobe.io/data/dataviews/validate`

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://cja.adobe.io/data/dataviews/validate" \
-H "x-api-key: {API_KEY}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "Authorization: Bearer {AUTHORIZATION_TOKEN}"\
-H "Content-Type: application/json" \
--data-raw '{
    "name": "testView",
    "description": "A Test Data View",
    "owner": {
        "imsUserId": "{IMS_USER_ID}",
        "ownerId": "{OWNER_ID}",
        "name": "null null",
        "type": "imsUser"
    },
    "isDeleted": false,
    "parentDataGroupId": "{PARENT_DATA_GROUP_ID}",
    "organization": "{IMS_ORG_ID}",
    "modifiedBy": "{IMS_USER_ID}",
    "sessionDefinition": [
        {
            "numPeriods": 15,
            "granularity": "minute",
            "func": "inactivity",
            "events": [
                "string"
            ]
        }
    ],
    "externalData": {
        "externalParentId": "{EXTERNAL_PARENT_ID}"
    }
}'
```

#### Response

```JSON
{
    "valid": false,
    "message": "The following fields are required: [timezoneDesignator] "
}
```

### Request example details

The example above requests a validation for the data structure shown in the body of the request. No data view ID is supplied.

### Response example details

The example above shows a `false` response for an invalid data structure. The message includes the missing field `timeZoneDesignator` required for a valid structure. If a structure is valid, it returns the following: 
```
{
    "valid": true,
}
```
### Request parameters

The request parameters are dependent upon the structure supplied for validation. The following table shows the parameters shown in the example data structure.

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `name` | optional | string | The name of the data view |
| `description` | optional | string | The description of a data view |
| `owner` | optional | container | The owner of a data view. Contains the `imsUserId`, and `name` parameters. Note that the owner in the body is overridden by the user making the request. |
| `imsUserId` | optional | string | The IMS user ID of the owner of a data view |
| `name` | optional | string | The name of the owner of a data view |
| `isDeleted` | optional | boolean | If the data view is deleted |
| `parentDataGroupId` | optional | string | The data group ID associated with the data view |
| `currentTimezoneOffset` | optional | integer | The UTC time offset, expressed as the number of hours and minutes less than or more than zero |
| `timezoneDesignator` | optional | string | The time zone used by the data view |
| `modifiedDate` | optional | string | The date the data view was last modified |
| `createdDate` | optional | string | The date the data view was created |
| `organization` | optional | string | The organization the data view belongs to |
| `modifiedBy` |optional | string | Who last modified the data view |
| `curationEnabled` | optional | boolean | Whether curation is enabled for the data view  |
| `recentRecordedAccess` | optional | string | The most recent recorded access of the data view |
| `sessionDefinition` | optional | container | Contains the `numPeriods`, `granularity`, `func`, and `events` parameters |
| `numPeriods` | optional | integer | The number of time periods |
| `granularity` | optional | string | A defined period of time. Includes the following enums: `MINUTE`, `HOUR`, `DAY`, and `WEEK`. |
| `func` | optional | string | Includes the enums: `INACTIVITY`, and `BEFORE_EVENTS`. |
| `externalData` | optional | container | Contains the `externalId`, and `externalParentId` parameters |
| `externalId` | optional | string | The external ID |
| `externalParentId` | optional | string | The ID of the parent data group used by the data view |
| `containerNames` | optional | container | Contains the `event`, `session`, and `people` parameters |
| `event` | optional | string | The name of the event container |
| `session` | optional | string | The name of the session container |
| `people` | optional | string | The name of the people container |
| `id` | optional | string | The ID of the data view |


### Response parameters

| Name | Type | Description |
| --- | --- | --- |
| `valid` | boolean | If the data view is valid |
| `message` | string | Any issues with the provided data view |
| `validator_version` | string | The validator version |

## POST create a data view

Use this endpoint to create a data view using a JSON payload.

`POST https://cja.adobe.io/data/dataviews`

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://cja.adobe.io/data/dataviews?expansion=name%2Cdescription%2CparentDataGroupId%2CcurrentTimezoneOffset%2CtimezoneDesignator%2Corganization%2CsessionDefinition%2CexternalData" \
-H "x-api-key: {API_KEY}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "Authorization: Bearer {AUTHORIZATION_TOKEN}"\
-H "Content-Type: application/json" \
--data-raw '{
  "name": "testView",
  "description": "Test Data View",
  "parentDataGroupId": "dg_xxxxxxx-0cb0-11ea-a9a5-xxxxxxxxxxx",
  "timezoneDesignator": "US/Mountain",
  "sessionDefinition": [
    {
      "numPeriods": 15,
      "granularity": "MINUTE",
      "func": "INACTIVITY",
      "events": [
        "string"
      ]
    }
  ],
  "organization": "{IMS_ORG_ID}",
  "externalData": {
    "externalParentId": "xxxxxxx-0cb0-11ea-a9a5-xxxxxxxxxxx"
  }
}'
```

#### Response

```JSON
{
    "name": "testView",
    "description": "Test Data View",
    "parentDataGroupId": "dg_xxxxxxx-0cb0-11ea-a9a5-xxxxxxxxxxx",
    "currentTimezoneOffset": -6.0,
    "timezoneDesignator": "US/Mountain",
    "organization": "{IMS_ORG_ID}",
    "sessionDefinition": [
        {
            "numPeriods": 15,
            "granularity": "minute",
            "func": "inactivity",
            "events": [
                "string"
            ]
        }
    ],
    "externalData": {
        "externalParentId": "{EXTERNAL_PARENT_ID}"
    },
    "id": "dv_650a049f5d02785bacxxxxxx"
}
```

### Request example details

The example above requests the following:

* Specifies the `name` of the data view as `testView`.
* The `parentDataGroupId` is specified as `dg_xxxxxxx-0cb0-11ea-a9a5-xxxxxxxxxxx`.
* Specifies the `sessionDefinition` to consist of `15` one-minute periods of `inactivity` before ending.

### Response example details

The response example above shows the following:

* The `id` of the created data view is `dv_650a049f5d02785bacxxxxxx`.
* A confirmation of the `sessionDefinition` parameter values, as described in the request details.

### Request parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `expansion` | optional | string | Comma-delimited list of additional fields to include on response. Includes the enums `name`, `description`, `owner`, `isDeleted`, `parentDataGroupId`, `segmentList`, `currentTimezoneOffset`, `timezoneDesignator`, `modified`, `createdDate`, `organization`, `curationEnabled`, `recentRecordedAccess`, `sessionDefinition`, `externalData`, and `containerNames`. |

#### Request body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `name` | optional | string | The name of the data view |
| `description` | optional | string | The description of a data view |
| `owner` | optional | container | The owner of a data view. Contains the `imsUserId`, and `name` parameters. Note that the owner in the body is overridden by the user making the request. |
| `imsUserId` | optional | string | The IMS user ID of the owner of a data view |
| `name` | optional | string | The name of the owner of a data view |
| `isDeleted` | optional | boolean | If the data view is deleted |
| `parentDataGroupId` | optional | string | The data group ID associated with the data view |
| `currentTimezoneOffset` | optional | integer | The UTC time offset, expressed as the number of hours and minutes less than or more than zero |
| `timezoneDesignator` | optional | string | The timezone used by the data view |
| `modifiedDate` | optional | string | The date the data view was last modified |
| `createdDate` | optional | string | The date the data view was created |
| `organization` | optional | string | The organization the data view belongs to |
| `modifiedBy` | optional | string | Who last modified the data view |
| `curationEnabled` | optional | boolean | Whether the curation is enabled for the data view |
| `recentRecordedAccess` | optional | string | The most recent recorded access of the data view |
| `sessionDefinition` | optional | container | Contains the `numPeriods`, `granularity`, `func`, and `events` parameters |
| `numPeriods` | optional | integer | The number of time periods |
| `granularity` | optional | string | A defined period of time. Includes the following enums: `MINUTE`, `HOUR`, `DAY`, and `WEEK`. |
| `func` | optional | string | Includes the enums: `INACTIVITY`, and `BEFORE_EVENTS`. |
| `externalData` | optional | container | Contains the `externalId`, and `externalParentId` parameters |
| `externalId` | optional | string | The external ID |
| `externalParentId` | optional | string | The ID of the parent data group used by the data view |
| `containerNames` | optional | container | Contains the `event`, `session`, and `people` parameters |
| `event` | optional | string | The name of the event container |
| `session` | optional | string | The name of the session container |
| `people` | optional | string | The name of the people container |
| `id` | optional | string | The ID of the data view |

### Response parameters

The response parameters are the same as the request parameters. See the preceding table for descriptions.

## PUT Copy a data view

Use this endpoint to copy a data view.

`PUT https://cja.adobe.io/data/dataviews/copy/{DATA_VIEW_ID}`

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X PUT "https://cja.adobe.io/data/dataviews/copy/dv_650a049f5d02785bacxxxxxx?expansion=name%2Cdescription%2Cowner%2CcreatedDate" \
-H "x-api-key: {API_KEY}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "Authorization: Bearer {AUTHORIZATION_TOKEN}"\
```

#### Response

```JSON
{
    "name": "testView (Copy)",
    "description": "A test data view",
    "owner": {
        "imsUserId": "Copy_requester@example.com",
        "ownerId": "Copy_requester@example.com",
        "name": "null null",
        "type": "imsUser"
    },
    "createdDate": "20XX-09-19T20:20:11Z",
    "componentType": "dataView",
    "id": "dv_111b123g4e63481redxxxxxx"
}
```

### Request example details

The example above shows the following information:

* A request to copy the data view `dv_650a049f5d02785bacxxxxxx`.
* A request to return the `name`, `description`, `owner`, and `createdDate` of the successful copy.

### Response example details

The example response above shows the following information:

* The name of the new copy is the same as the original with `(Copy)` added to it.
* The `description` is the same as the original.
* The `imsUserId` and `ownerId` reflect the information of the user requesting the copy. The original `owner` information does not persist to the copy.
* The new data view ID `dv_111b123g4e63481redxxxxxx` is provided for the copy. 

### Request parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `dataViewId` | required | string | The Data View ID to copy |
| `expansion` |  | array of strings | Comma-delimited list of additional fields to include on response. Includes the enums `name`, `description`, `owner`, `isDeleted`, `parentDataGroupId`, `segmentList`, `currentTimezoneOffset`, `timezoneDesignator`, `modified`, `createdDate`, `organization`, `curationEnabled`, `recentRecordedAccess`, `sessionDefinition`, `externalData`, and `containerNames`. |

### Response parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | The name of the data view |
| `description` | string | The description of a data view |
| `owner` | container | The owner of a data view. Contains the `imsUserId`, and `name` parameters. Note that the owner in the body is overridden by the user making the request. |
| `imsUserId` | string | The IMS user ID of the owner of a data view |
| `name` | string | The name of the owner of a data view |
| `isDeleted` | boolean | If the data view is deleted |
| `parentDataGroupId` | string | The data group ID associated with the data view |
| `currentTimezoneOffset` | integer | The UTC time offset, expressed as the number of hours and minutes less than or more than zero |
| `timezoneDesignator` | string | The time zone used by the data view |
| `modifiedDate` | string | The date the data view was last modified |
| `createdDate` | string | The date the data view was created |
| `organization` | string | The organization the data view belongs to |
| `modifiedBy` | string | Who last modified the data view |
| `curationEnabled` |  boolean | Whether curation is enabled for the data view |
| `recentRecordedAccess` | string | The most recent recorded access for the data view |
| `sessionDefinition` | container | Contains the `numPeriods`, `granularity`, `func`, and `events` parameters |
| `numPeriods` | integer | The number of time periods |
| `granularity` | string | A defined period of time. Includes the following enums: `MINUTE`, `HOUR`, `DAY`, and `WEEK`. |
| `func` | string | Includes the enums: `INACTIVITY`, and `BEFORE_EVENTS`. |
| `externalData` | container | Contains the `externalId`, and `externalParentId` parameters |
| `externalId` | string | The external ID |
| `externalParentId` | string | The ID of the parent data group used by the data view |
| `containerNames` | container | Contains the `event`, `session`, and `people` parameters |
| `event` | string | The name of the event container |
| `session` | string | The name of the session container |
| `people` | string | The name of the people container |
| `id` | string | The ID of the data view |

## PUT Modify a data view

Use this endpoint to modify a data view by sending a JSON structure containing the values to be changed.

`PUT https://cja.adobe.io/data/dataviews/{DATA_VIEW_ID}`

### Request and response examples

In the following examples, the `dv_650a049f5d02785bacxxxxxx` data view created above is modified so that the `numPeriods` in `sessionDefinition` is set to `30` instead of `15`.

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X PUT "https://cja.adobe.io/data/dataviews/dv_650a049f5d02785bacxxxxxx?expansion=name%2Cmodified" \
-H "x-api-key: {API_KEY}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "Authorization: Bearer {AUTHORIZATION_TOKEN}"\
-H "Content-Type: application/json" \
-d '{
  "sessionDefinition": [
    {
      "numPeriods": 30,
      "granularity": "MINUTE",
      "func": "INACTIVITY",
      "events": [
        "string"
      ]
    }
  ]
}'
```

#### Response

```JSON
{
    "name": "testView",
    "sessionDefinition": [
        {
            "numPeriods": 30,
            "granularity": "minute",
            "func": "inactivity",
            "events": [
                "string"
            ]
        }
    ],
    "id": "dv_650a049f5d02785bacxxxxxx",
    "modifiedDate": "2023-09-19T20:32:20Z",
    "modifiedBy": "{IMS_USER_ID}"
}
```

### Request example details

The example request above modifies the `numPerioPeriods` in the data view `dv_650a049f5d02785bacxxxxxx` to `30` minute periods of `inactivity` before ending.

### Response example details

The example response above shows the following:

* The updated `numPeriods` value of `30` in the `sessionDefintion` for the data view.
* The `name` of the data view and the modification details, as specified in the request.

### Request parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `dataViewId` | required | string | The Data View ID to update |
| `expansion` | optional | string | Comma-delimited list of additional fields to include on response. Includes the enums `name`, `description`, `owner`, `isDeleted`, `parentDataGroupId`, `segmentList`, `currentTimezoneOffset`, `timezoneDesignator`, `modified`, `createdDate`, `organization`, `curationEnabled`, `recentRecordedAccess`, `sessionDefinition`, `externalData`, and `containerNames`. |
| `name` | optional | string | The name of the data view |
| `description` | optional | string | The description of a data view |
| `owner` | optional | container | The owner of a data view. Contains the `imsUserId`, and `name` parameters. Note that the owner in the body is overridden by the user making the request. |
| `imsUserId` | optional | string | The IMS user ID of the owner of a data view |
| `name` | optional | string | The name of the owner of a data view |
| `isDeleted` | optional | boolean | If the data view is deleted |
| `parentDataGroupId` | optional | string | The data group ID associated with the data view |
| `currentTimezoneOffset` | optional | integer | The UTC time offset, expressed as the number of hours and minutes less than or more than zero |
| `timezoneDesignator` | optional | string | The time zone used by the data view |
| `modifiedDate` | optional | string | The date the data view was last modified |
| `createdDate` | optional | string | The date the data view was created |
| `organization` | optional | string | The organization the data view belongs to |
| `modifiedBy` | optional | string | Who last modified the data view |
| `curationEnabled` | optional | boolean | Whether curation is enabled for the data view |
| `recentRecordedAccess` | optional | string | The most recent recorded access for the data view |
| `sessionDefinition` | optional | container | Contains the `numPeriods`, `granularity`, `func`, and `events` parameters |
| `numPeriods` | optional | integer | The number of time periods |
| `granularity` | optional | string | A defined period of time. Includes the following enums: `MINUTE`, `HOUR`, `DAY`, and `WEEK`. |
| `func` | optional | string | Includes the enums: `INACTIVITY`, and `BEFORE_EVENTS`. |
| `events` | optional | array of strings |  |
| `externalData` | optional | container | Contains the `externalId`, and `externalParentId` parameters |
| `externalId` | optional | string | The external ID |
| `externalParentId` | optional | string | The ID of the parent data group used by the data view |
| `containerNames` | optional | container | Contains the `event`, `session`, and `people` parameters |
| `event` | optional | string | The name of the event container |
| `session` | optional | string | The name of the session container |
| `people` | optional | string | The name of the people container |
| `id` | optional | string | The ID of the data view |

### Response parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | The name of the data view |
| `description` | string | The description of a data view |
| `owner` | container | The owner of a data view. Contains the `imsUserId`, and `name` parameters. Note that the owner in the body is overridden by the user making the request. |
| `imsUserId` | string | The IMS user ID of the owner of a data view |
| `name` | string | The name of the owner of a data view |
| `isDeleted` | boolean | If the data view is deleted |
| `parentDataGroupId` | string | The data group ID associated with the data view |
| `currentTimezoneOffset` | integer | The UTC time offset, expressed as the number of hours and minutes less than or more than zero |
| `timezoneDesignator` | string | The time zone used by the data view |
| `modifiedDate` | string | The date the data view was last modified |
| `createdDate` | string | The date the data view was created |
| `organization` | string | The organization the data view belongs to |
| `modifiedBy` | string | Who last modified the data view |
| `curationEnabled` | boolean | Whether curation is enabled for the data view |
| `recentRecordedAccess` | string | The most recent recorded access for the data view |
| `sessionDefinition` | container | Contains the `numPeriods`, `granularity`, `func`, and `events` parameters |
| `numPeriods` | integer | The number of time periods |
| `granularity` | string | A defined period of time. Includes the following enums: `MINUTE`, `HOUR`, `DAY`, and `WEEK`. |
| `func` | string | Includes the enums: `INACTIVITY`, and `BEFORE_EVENTS`. |
| `events` | array of strings |  |
| `externalData` | container | Contains the `externalId`, and `externalParentId` parameters |
| `externalId` | string | The external ID |
| `externalParentId` | string | The ID of the parent data group used by the data view |
| `containerNames` | container | Contains the `event`, `session`, and `people` parameters |
| `event` | string | The name of the event container |
| `session` | string | The name of the session container |
| `people` | string | The name of the people container |
| `id` | string | The ID of the data view |

## DELETE a data view

Use this endpoint to remove a data view.

`DELETE https://cja.adobe.io/data/dataviews/{DATA_VIEW_ID}`

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X DELETE "https://cja.adobe.io/data/dataviews/dv_650a049f5d02785bacxxxxxx" \
-H "x-api-key: {API_KEY}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "Authorization: Bearer {AUTHORIZATION_TOKEN}"\
```

#### Response

```JSON
{
    "result": "success"
}
```

### Request example details

The example request above uses the DELETE method to remove the data view `dv_650a049f5d02785bacxxxxxx`.

### Response example details

The example response above shows the DELETE was a `success`.

### Request parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `dataViewId` | required | string | The data view ID to delete |

### Response parameters

| Name | Type | Description |
| --- | --- | --- |
| `result` | sting | The result of the delete request |
| `message` | string | A message associated with the result |

## Connection Limits

The limits of dataviews per connection for the following products are:

* ARES_Only - 5
* Customery Journey Analytics Foundation Standalone - 500
* Customer Journey Analytics Select Standalone - 600
* Customer Journey Analytics Prime Standalone - 750
* Customer Journey Analytics Ultimate Standalone - 1000
* Customer Journey Analytics for Adobe Analtyics S/P/U - 600

## API status codes

For a description of API status codes and tips for troubleshooting, see the [Platform FAQ and troubleshooting guide](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html#api-status-codes).
