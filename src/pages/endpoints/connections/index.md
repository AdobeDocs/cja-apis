---
title: Connections APIs
description: Manage CJA connections through APIs
---

# Connections

The CJA Connections APIs allow you to retrieve connections programmatically through Adobe Developer. These APIs use the same data and methods that Adobe uses inside the product UI. See [Connections](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-connections/overview.html) in the Customer Journey Analytics guide for more information.

The endpoints described in this guide are routed through analytics.adobe.io. To use them, you will need to first create a client with access to Customer Journey Analytics APIs. For more information, refer to [Getting started with the Customer Journey Analytics API](https://developer.adobe.com/cja-apis/docs/getting-started).

<InlineAlert variant="info" slots="text" />

In order to view all connections, you must have product administration privileges associated with your account, as well as any other permissions required to retrieve CJA APIs.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

This guide includes instructions for using the following endpoints:

* GET connection by ID: Retrieve a specific connection by connection ID
* GET all connections: Retrieve all connections for an organization
* GET backfills: Retrieve all backfills for a dataset and connection pair.
* GET data source types: Retrieve all data source types for an organization

## GET connection by ID

Use this endpoint to retrieve the data for a specific connection by using the connection ID.

`GET https://cja.adobe.io/data/connections/{CONNECTION_ID}`

### Request and Response Examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl 'https://cja.adobe.io/data/connections/dg_b008fd39-2437-4d00-88fd-392437XXXXXX?expansion=name%2Cdescription%2Cowner%2CdataSets%2CexternalData%2CschemaInfo' \
-H 'x-api-key: {API_KEY}' \
-H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
-H 'Authorization: Bearer {AUTHORIZATION_TOKEN}'
```

#### Response

```JSON
{
    "name": "Test Connection",
    "description": "A test connection.",
    "owner": {
        "imsUserId": "{IMS_USER_ID}",
        "ownerId": "{OWNER_ID}",
        "name": null,
        "type": "imsUser"
    },
    "dataSets": [
        {
            "dataSetId": "5f24c4f6ecffd11638XXXXXX",
            "domain": "catalog",
            "type": "event",
            "timestampId": "timestamp",
            "visitorId": "_exampleorg.team.id",
            "identityNamespace": "teamid",
            "usePrimaryIdNamespace": false,
            "identityMap": false,
            "name": "Test Dataset",
            "schemaInfo": {
                "schemaId": "https://ns.adobe.com/exampleorg/schemas/105f3200745a921d8bee745227760b0cd8c3055273XXXXXX",
                "schemaName": "Example Schema"
            },
            "streaming": true
        }
    ],
    "externalData": {
        "externalId": "b008fd39-2437-4d00-88fd-392437XXXXXX"
    },
    "idWithoutPrefix": "b008fd39-2437-4d00-88fd-392437XXXXXX",
    "id": "dg_b008fd39-2437-4d00-88fd-392437XXXXXX"
}
```

#### Request Example Details

The example above requests the following:

* The information associated with the connection ID `dg_b008fd39-2437-4d00-88fd-392437XXXXXX`.
* The `dataSets` associated with the connection.
* The `schemaInfo` associated with the dataset.

#### Response Example Details

The example response above shows the following:

* The only `dataSetId` used by the connection is `5f24c4f6ecffd116XXXXXX`.
* The `type` of dataset used is `event`.
* The name of the schema used by the dataset is `Example Schema`.
* The connection ID is `dg_b008fd39-2437-4d00-88fd-392437XXXXXX`.

### Request Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `connectionId` | required | string | The connection ID to lookup |
| `expansion` |  | string | Comma-delimited list of additional fields to include in the response. Includes the enums: `name`, `description`, `owner`, `isDeleted`, `isDisabled`, `dataSets`, `createdDate`, `modified`, `caseSensitive`, `organization`, `components`, `numDailyEvents`, `externalData`, `backfillEnabled`, `granularBackfills`, `granularStreaming`, `backfillsSummaryConnection`, `backfillsSummaryDataSets`, `dataSetLastIngested`, `sandboxName`, `sandboxId`, `fieldsId`, `floatPrecision`, `dataRetentionMonths`, `validationErrors`, `resolveIdentityNamespace`, `stitchedDataSets`, `ownerFullName`, `schemaInfo`, and `tags`. |
| `locale` |  | string | The language to use in the response |

### Response Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | The connection name |
| `description` | string | The description of the connection |
| `owner` | container | The details of the owner of the connection. Contains the `imsUserId`, `ownerId`, `name`, and `type` parameters. |
| `imsUserId` | string | The IMS user ID of the owner |
| `ownerId` | string | The ID of the owner |
| `name` | string | The name of the owner |
| `type` | string | The type of user that owns the connection |
| `dataSets` | container | The information related to the datasets. Contains the `dataSetId`, `domain`, `type`, `timestampId`, `visitorId`, `lookupKeyField`, `lookupParentFields`, `lookupParentDataSetId`, `lookupParentDataSetType`, `identityNamespace`, `usePrimaryIdNamespace`, `identityMap`, `name`, `schemaInfo`, `streaming`, `backfillSummary`, `lastIngestedTime`, `streamingEnabledAt`, `identityNamespaceCol`, and `dataSourceType` parameters. |
| `dataSetId` | string | The dataset ID |
| `domain` | string | The domain of the dataset |
| `type` | string | The type of dataset |
| `timestampId` | string | The ID used for the timestamp |
| `visitorId` | string | The visitor ID |
| `lookupKeyField` | string | The key field specified for a lookup dataset |
| `lookupParentFields` | string | The parent fields specified for a lookup dataset |
| `lookupParentDataSetId` | string | The parent data set ID specified for a lookup dataset |
| `lookupParentDataSetType` | string | The parent data set type specified for a lookup dataset |
| `identityNamespace` | string | The namespace used by the connection. For more information, see Namespace and Identity Map in [Create a Connection](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-connections/create-connection.html). |
| `usePrimaryIdNamespace` | boolean | Whether the primary ID namespace is used |
| `identityMap` | boolean | Whether the Identity Map is used |
| `name` | string | The name of the dataset |
| `schemaInfo` | container | The schema information. Contains the `schemaId`, `schemaName`, and `schemaRef` parameters. |
| `schemaId` | string | The schema ID |
| `schemaName` | string | The schema name |
| `schemaRef` | container | Contains the `id` and `contentType` parameters. |
| `id` | string | The ID |
| `contentType` | string | The type of content |
| `backfills` | container | Backfills that have been performed with the data. Contains the `id`, `dataSetId`, `status`, `startDate`, `endDate`, `createdDate`, and `allData` parameters. |
| `id` | string | The ID of the backfill |
| `dataSetId` | string | The dataset ID |
| `status` | string | The status of the backfill |
| `startDate` | string | The starting date of the data to be backfilled |
| `endDate` | string | The ending date of the data to be backfilled  |
| `createdDate` | string | The date the backfill was created |
| `allData` | boolean | Whether all data is displayed |
| `streaming` | boolean | Whether streaming is enabled |
| `backfillSummary` | container | A summary of all attempted backfills. Contains the `total`, `failed`, `inProgress`, `completed`, and `invalid` parameters. |
| `total` | integer | The number of backfills attempted |
| `failed` | integer | The number of backfills that failed |
| `inProgress` | integer | The number of backfills in progress |
| `completed` | integer | The number of backfills completed |
| `invalid` | boolean | The number of invalid backfills |
| `lastIngestedTime` | string | The time of the last data ingestion |
| `streamingEnabledAt` | string | Source of streaming enablement |
| `identityNamespaceCol` | string | Identity Namespace reference |
| `dataSourceType` | container | Information for the data source type. Contains the `id`, `type`, and `description` parameters. |
| `id` | string | The ID of the data source |
| `type` | string | The type of the data source |
| `description` | string | The description of the data source |
| `identityNamespaceData` | container | Contains the `dataSetId`, `domain`, `identityNamespace`, `usePrimaryIdNamespace`, `identityMap`, and `identityNamespaceCol` parameters. |
| `dataSetId` | string | The dataset ID |
| `domain` | string | The domain |
| `identityNamespaceCol` | string | Identity Namespace reference |
| `modifiedDate` | string | The date when the connection was last modified |
| `createdDate` | string | The date the connection was created |
| `organization` | string | The organization associated with the connection |
| `modifiedBy` | string | The user ID of the person who last modified the connection |
| `modifiedByFullName` | string | The name of the person who last modified the connection |
| `caseSensitive` | boolean | Whether the connection is case sensitive |
| `numDailyEvents` | integer | The number of daily events associated with the connection |
| `externalData` | container | External data associated with the connection. Contains the `externalId` and `externalParentId` parameters. |
| `externalId` | string | The external ID of the connection |
| `externalParentId` | string | The external parent ID of the connection |
| `backfillEnabled` | boolean | Whether backfill is enabled |
| `sandboxId` | string | The sandbox ID |
| `sandboxName` | string | The sandbox name |
| `fieldsId` | string | The fields ID |
| `floatPrecision` | integer | he float associated with the precision of including relevant data points |
| `dataRetentionMonths` | integer | The number of months data is retained prior to being removed |
| `connectionValidationErrors` | container | Any errors associated with the connection validation. Contains the `errorCode`, `dataSetId`, `dataSetName`, `disallowedField`, and `missingField` parameters. |
| `errorCode` | string | A given error code |
| `dataSetId` | string | The dataset ID |
| `dataSetName` | string | The dataset name |
| `disallowedField` | string | A field that is not allowed |
| `missingField` | string | A field that is missing |
| `idWithoutPrefix` | string | The ID of the connection without the `dg_` prefix |
| `id` | string | The connection ID |

## GET all connections

Use this endpoint to retrieve all connections associated with an organization.

`GET https://cja.adobe.io/data/connections`

### Request and Response Examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl 'https://cja.adobe.io/data/connections?expansion=name%2Cdescription%2Cowner%2CdataSets&limit=2&sortDirection=DESC' \
-H 'x-api-key: {API_KEY}' \
-H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
-H 'Authorization: Bearer {AUTHORIZATION_TOKEN}'
```

#### Response

```JSON
{
    "content": [
        {
            "name": "Test Connection",
            "description": "A test connection.",
            "owner": {
                "imsUserId": "{IMS_USER_ID}",
                "ownerId": "{OWNER_ID}",
                "name": null,
                "type": "imsUser"
            },
            "dataSets": [
                {
                    "dataSetId": "5f24c4f6ecffd13h6dXXXXXX",
                    "domain": "catalog",
                    "type": "event",
                    "timestampId": "timestamp",
                    "visitorId": "_exampleorg.team.id",
                    "identityNamespace": "teamid",
                    "usePrimaryIdNamespace": false,
                    "identityMap": false,
                    "name": "Test Dataset",
                    "streaming": true
                }
            ],
            "idWithoutPrefix": "b008fd39-2437-4d00-88fd-392434XXXXXX",
            "id": "dg_b008fd39-2437-4d00-88fd-392434XXXXXX"
        },
        {
            "name": "test123",
            "description": "",
            "owner": {
                "imsUserId": "{IMS_USER_ID}",
                "ownerId": "{OWNER_ID}",
                "name": null,
                "type": "imsUser"
            },
            "dataSets": [
                {
                    "dataSetId": "5f1873caa73caa4hf6XXXXXX",
                    "domain": "catalog",
                    "type": "event",
                    "timestampId": "timestamp",
                    "visitorId": "_id",
                    "identityNamespace": "Email",
                    "usePrimaryIdNamespace": false,
                    "identityMap": false,
                    "name": "example_object_event",
                    "streaming": true
                }
            ],
            "idWithoutPrefix": "7110bb3e-76ce-4201-90bb-3e7656XXXXXX",
            "id": "dg_7110bb3e-76ce-4201-90bb-3e7656XXXXXX"
        }
    ],
    "number": 0,
    "totalElements": 573,
    "totalPages": 287,
    "numberOfElements": 2,
    "firstPage": true,
    "lastPage": false,
    "sort": null,
    "size": 2
}
```

#### Request Example Details

The example above requests the following:

* The `dataSets` associated with the connection.
* The `limit` of connections per page to be `2`.
* The `sortDirection` to be `DESC`, or descending.

#### Response Example Details

The example response above shows the following:

* The `dataSetId` values used by the connections are `5f24c4f6ecffd13h6dXXXXXX` and `5f1873caa73caa4hf6XXXXXX`.
* The `type` of dataset used by both connections is `event`.
* The names of the datasets are `Test Dataset` and `example_object_event`.
* The ID of the connections are `dg_b008fd39-2437-4d00-88fd-392434XXXXXX` and `dg_7110bb3e-76ce-4201-90bb-3e7656XXXXXX"`.
* The total number of connections for the organization--shown as `totalElements`--are `573`.

### Request Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `dataSetIds` |  | string | Comma-delimited list of dataSet IDs to limit the response with |
| `connectionIds` |  | string | Comma-delimited list of connection IDs to limit the response with |
| `sandboxId` |  | string | Filter by sandbox ID |
| `sandboxName` |  | string | Filter by sandbox name |
| `expansion` |  | string | Comma-delimited list of additional fields to include on response. Includes the enums: `name`, `description`, `owner`, `isDeleted`, `isDisabled`, `dataSets`, `createdDate`, `modified`, `caseSensitive`, `organization`, `components`, `numDailyEvents`, `externalData`, `backfillEnabled`, `granularBackfills`, `granularStreaming`, `backfillsSummaryConnection`, `backfillsSummaryDataSets`, `dataSetLastIngested`, `sandboxName`, `sandboxId`, `fieldsId`, `floatPrecision`, `dataRetentionMonths`, `validationErrors`, `resolveIdentityNamespace`, and `stitchedDataSets`. |
| `includeType` |  | string | Additional connections to include |
| `cached` |  | boolean | Whether cached results are returned |
| `locale` |  | string | The language to use in the response |
| `limit` |  | integer | Number of results returned per page |
| `page` |  | integer | The page returned. The first page is `0`. |
| `sortDirection` |  | string | Sorting direction. Includes the enums: `ASC` and `DESC`. |
| `sortProperty` |  | string | The property to sort by. Included the enums: `modifiedDate` and `id`. |

### Response Parameters

The GET all connections endpoint response parameters include all of the response parameters shown above for the GET a connection by ID, in addition to the following:

| Name | Type | Description |
| --- | --- | --- |
| `number` | integer | The page number returned |
| `totalElements` | integer | The number of connections |
| `totalPages` | integer | The number of pages to be displayed with the current settings |
| `numberOfElements` | integer | The number of connections displayed per page |
| `firstPage` | boolean | Whether the first page is displayed |
| `lastPage` | boolean | Whether the last page is displayed |
| `sort` | boolean | Whether a sort is applied |
| `size` | integer | The number of connections displayed on the current page |

## GET backfills

Use this endpoint to retrieve the backfills for a specified connection and dataset.

`GET https://cja.adobe.io/data/connections/{CONNECTION_ID}/datasets/{DATASET_ID}/backfills`

### Request and Response Examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl 'https://cja.adobe.io/data/connections/dg_47b7fb18-676b-4f04-8fa3-25XXXXXXXXXX/datasets/6526664c54d56dXXXXXXXXXX/backfills' \
-H 'x-api-key: {API_KEY}' \
-H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
-H 'Authorization: Bearer {AUTHORIZATION_TOKEN}'
```

#### Response

```JSON
{
    "content": [
        {
            "id": "76ce8f4f-c19b-4e4a-a524-753827XXXXXX",
            "dataSetId": "6526664c54d56d4d6tXXXXXX",
            "status": "COMPLETED",
            "startDate": null,
            "endDate": null,
            "createdDate": "20XX-10-16T14:06:04.816Z",
            "allData": true
        },
        {
            "id": "31821999-d1f8-4526-b754-663562XXXXXX",
            "dataSetId": "6526664c54d56d4d6tXXXXXX",
            "status": "IN_PROGRESS",
            "startDate": null,
            "endDate": null,
            "createdDate": "20XX-10-16T14:42:34.264Z",
            "allData": true
        }
    ],
    "number": 0,
    "totalElements": 2,
    "totalPages": 1,
    "numberOfElements": 2,
    "firstPage": true,
    "lastPage": true,
    "sort": null,
    "size": 10
}
```

#### Request Example Details

The example above requests the backfills associated with the `dg_47b7fb18-676b-4f04-8fa3-25XXXXXXXXXX` connection and the `6526664c54d56d4d6tXXXXXX` dataset.

#### Response Example Details

The example response above returns the following:

* The dataset `6526664c54d56d4d6tXXXXXX` is associated with both backfills.
* The status of the `76ce8f4f-c19b-4e4a-a524-753827XXXXXX` backfill is `COMPLETED`.
* The status of the `31821999-d1f8-4526-b754-66XXXXXXXXXX` backfill is `IN_PROGRESS`.

### Request Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `connectionId` | required | string | The connection ID |
| `datasetId` | required | string | The dataset ID |
| `includeStatus` |  | string | The statuses to include in the response. Includes the enums: `inProgress`, `completed`, and `failed`. |
| `limit` |  | integer | The number of results shown per page |
| `page` |  | integer | The page returned. The first page is `0`. |
| `sortDirection` |  | string | Sorting direction. Includes the enums: `ASC` and `DESC`. |
| `sortProperty` |  | string | The property to sort by. Default value is `createdDate`. |

### Response Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | container | The backfill information. Contains the `id`, `dataSetId`, `status`, `startDate`, `endDate`, `createdDate`, and `allData` parameters. |
| `id` | string | The backfill ID |
| `dataSetId` | string | The ID of the dataset being backfilled |
| `status` | string | The status of the backfill |
| `startDate` | string | The start date |
| `endDate` | string | The end date |
| `createdDate` | string | The date the backfill was created |
| `allData` | boolean | Whether all data is used |
| `number` | integer | The page returned. The first page is `0`. |
| `totalElements` | string | The total number of backfills |
| `totalPages` | string | The total number of pages |
| `numberOfElements` | string | The number of backfills displayed on the page |
| `firstPage` | boolean | Whether the first page is displayed |
| `lastPage` | boolean | Whether the last page is displayed |
| `sort` | string | The sort direction |
| `size` | integer | The number of elements to be displayed per page |

## GET data source types

Use this endpoint to retrive the data source types used by an organization.

`GET https://cja.adobe.io/data/connections/configurationSettings`

### Request and Response Examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl 'https://cja.adobe.io/data/connections/configurationSettings' \
-H 'x-api-key: {API_KEY}' \
-H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
-H 'Authorization: Bearer {AUTHORIZATION_TOKEN}
```

#### Response

```JSON
{
    "dataSourceTypes": [
        {
            "id": "webData",
            "type": "Web Data"
        },
        {
            "id": "mobileAppData",
            "type": "Mobile App Data"
        },
        {
            "id": "posData",
            "type": "POS Data"
        },
        {
            "id": "crmData",
            "type": "CRM Data"
        },
        {
            "id": "surveyData",
            "type": "Survey Data"
        },
        {
            "id": "productData",
            "type": "Product Data"
        },
        {
            "id": "callCenterData",
            "type": "Call Center Data"
        },
        {
            "id": "accountsData",
            "type": "Accounts Data"
        },
        {
            "id": "transactionData",
            "type": "Transaction Data"
        },
        {
            "id": "customerFeedbackData",
            "type": "Customer Feedback Data"
        },
        {
            "id": "other",
            "type": "Other"
        }
    ]
}
```

#### Request Example Details

The example above requests the data source types associated with the organization.

#### Response Example Details

The example response above shows the data source types for the organization.

### Request Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `locale` |  | string | The language to use in the response. The default value is `en_US`. |

### Response Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataSourceTypes` | container | The data source types used by the organization. Contains the `id`, `type`, and `description` parameters. |
| `id` | string | The ID of the data source |
| `type` | string | The type of data source |
| `description` | string | A description of the data source type |
