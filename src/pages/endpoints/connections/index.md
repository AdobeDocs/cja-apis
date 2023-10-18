---
title: Connections APIs
description: Manage CJA connections through APIs
---

# Connections

This guide includes instructions for using the following endpoints:

* GET connection by ID: Retrieve a specific connection by connection ID
* GET all connections: Retrieve all connections for an organization

## GET connection by ID

Use this endpoint to retrieve the data for a specific connection by using the connection ID.

`GET https://cja.adobe.io/data/connections/{CONNECTION_ID}`

### Request and Response Examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl 'https://cja.adobe.io/data/connections/dg_b008fd39-2437-4d00-88fd-3924XXXXXXXX?expansion=name%2Cdescription%2Cowner%2CdataSets%2CexternalData%2CschemaInfo' \
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
            "dataSetId": "5f24c4f6ecffd1XXXXXXXXXX",
            "domain": "catalog",
            "type": "event",
            "timestampId": "timestamp",
            "visitorId": "_exampleorg.team.id",
            "identityNamespace": "teamid",
            "usePrimaryIdNamespace": false,
            "identityMap": false,
            "name": "Test Dataset",
            "schemaInfo": {
                "schemaId": "https://ns.adobe.com/exampleorg/schemas/105f3200745a921d8bee745227760b0cd8c305XXXXXXXXXX",
                "schemaName": "Example Schema"
            },
            "streaming": true
        }
    ],
    "externalData": {
        "externalId": "b008fd39-2437-4d00-88fd-3924XXXXXXXX"
    },
    "idWithoutPrefix": "b008fd39-2437-4d00-88fd-3924XXXXXXXX",
    "id": "dg_b008fd39-2437-4d00-88fd-3924XXXXXXXX"
}
```

#### Request Example Details

The example above requests the following:

* The information about the connection with the ID `dg_b008fd39-2437-4d00-88fd-3924XXXXXXXX`.
* The `dataSets` associated with the connection.
* The `schemaInfo` associated with the data set.

#### Response Example Details

The example response above shows the following:

* The `dataSetId` used by the connection is `5f24c4f6ecffd1XXXXXXXXXX`.
* The `type` of data set used is `event`.
* The name of the schema used by the data set is `Example Schema`.
* The connection `id` is `dg_b008fd39-2437-4d00-88fd-3924XXXXXXXX`.

### Request Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `connectionId` | required | string | The connection ID to lookup |
| `expansion` |  | string | Comma-delimited list of additional fields to include in the response. Includes the enums: `name`, `description`, `owner`, `isDeleted`, `isDisabled`, `dataSets`, `createdDate`, `modified`, `caseSensitive`, `organization`, `components`, `numDailyEvents`, `externalData`, `backfillEnabled`, `granularBackfills`, `granularStreaming`, `backfillsSummaryConnection`, `backfillsSummaryDataSets`, `dataSetLastIngested`, `sandboxName`, `sandboxId`, `fieldsId`, `floatPrecision`, `dataRetentionMonths`, `validationErrors`, `resolveIdentityNamespace`, `stitchedDataSets`, `ownerFullName`, `schemaInfo`, `tags`. |
| `locale` |  | string | A specified locale |

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
| `dataSets` | container | The information related to the data sets. Contains the `dataSetId`, `domain`, `type`, `timestampId`, `visitorId`, `lookupKeyField`, `lookupParentFields`, `lookupParentDataSetId`, `lookupParentDataSetType`, `identityNamespace`, `usePrimaryIdNamespace`, `identityMap`, `name`, `schemaInfo`, `streaming`, `backfillSummary`, `lastIngestedTime`, `streamingEnabledAt`, `identityNamespaceCol`, and `dataSourceType` parameters. |
| `dataSetId` | string | The data set ID |
| `domain` | string | The domain of the data set |
| `type` | string | The type of data set |
| `timestampId` | string | The ID used for the timestamp |
| `visitorId` | string | The visitor ID |
| `lookupKeyField` | string | The key field used by a lookup data set. This field only applies to a lookup data set. |
| `lookupParentFields` | string | The parent fields used by a lookup data set. This field only applies to a lookup data set. |
| `lookupParentDataSetId` | string | The parent data set ID used by a lookup data set. This field only applies to a lookup data set. |
| `lookupParentDataSetType` | string | The type of parent data set used by a lookup data set. This field only applies to a lookup data set. |
| `identityNamespace` | string | The namespace used by the connection. Please reference the [Create a Connection](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-connections/create-connection.html) documentation for more information regarding Namespaces and Identity Map. |
| `usePrimaryIdNamespace` | boolean | Whether the primary ID namespace is used |
| `identityMap` | boolean | Whether the identity map is used |
| `name` | string | The name of the data set |
| `schemaInfo` | container | The information of the given schema. Contains the `schemaId`, `schemaName`, and `schemaRef` parameters. |
| `schemaId` | string | The schema ID |
| `schemaName` | string | The schema name |
| `schemaRef` | container | Contains the `id`, and `contentType` parameters. |
| `id` | string | The ID |
| `contentType` | string | The type of content |
| `backfills` | container | Backfills that have been performed with the data. Contains the `id`, `dataSetId`, `status`, `startDate`, `endDate`, `createdDate`, and `allData` parameters. |
| `id` | string | The ID of the backfill |
| `dataSetId` | string | The data set ID |
| `status` | string | The status of the backfill |
| `startDate` | string | The starting date of the backfilled data |
| `endDate` | string | The ending date of the backfilled data |
| `createdDate` | string | The date the backfill was created |
| `allData` | boolean | Whether all data is displayed |
| `streaming` | boolean | Whether streaming is enabled |
| `backfillSummary` | container | A summary of all attempted backfills. Contains the `total`, `failed`, `inProgress`, `completed`, and `invalid` parameters. |
| `total` | integer | The number of backfills attempted |
| `failed` | integer | The number of backfills that failed |
| `inProgress` | integer | The number of backfills in progress |
| `completed` | integer | The number of backfills completed |
| `invalid` | boolean | The number of invalid backfills |
| `lastIngestedTime` | string |  |
| `streamingEnabledAt` | string |  |
| `identityNamespaceCol` | string |  |
| `dataSourceType` | container | Information about the data source type. Contains the `id`, `type`, and `description` parameters. |
| `id` | string | The ID of the data source |
| `type` | string | The type of the data source |
| `description` | string | The description of the data source |
| `identityNamespaceData` | container | Contains the `dataSetId`, `domain`, `identityNamespace`, `usePrimaryIdNamespace`, `identityMap`, and `identityNamespaceCol` parameters. |
| `dataSetId` | string | The data set ID |
| `domain` | string |  |
| `identityNamespaceCol` | string |  |
| `modifiedDate` | string | The date when the connection was last modified |
| `createdDate` | string | The date the connection was created |
| `organization` | string | The org ID the connection belongs to |
| `modifiedBy` | string | The user ID of the person who last modified the connection |
| `modifiedByFullName` | string | The name of the person who last modified the connection |
| `caseSensitive` | boolean | Whether the connection is case sensitive |
| `numDailyEvents` | integer | The number of daily events associated with the connection |
| `externalData` | container | External data associated with the connection. Contains the `externalId`, and `externalParentId` parameters. |
| `externalId` | string | The external ID of the connection |
| `externalParentId` | string | The external ID of the connection |
| `backfillEnabled` | boolean | Whether backfill is enabled |
| `sandboxId` | string | The sandbox ID |
| `sandboxName` | string | The sandbox name |
| `fieldsId` | string | The fields ID |
| `floatPrecision` | integer | The float precision |
| `dataRetentionMonths` | integer | For how many months data is retained prior to being removed |
| `connectionValidationErrors` | container | Any errors associated with the connection validation. Contains the `errorCode`, `dataSetId`, `dataSetName`, `disallowedField`, and `missingField` parameters. |
| `errorCode` | string | A given error code |
| `dataSetId` | string | The data set ID |
| `dataSetName` | string | The data set name |
| `disallowedField` | string | A field that is not allowed |
| `missingField` | string | A field that is missing |
| `backfillSummary` | container | A summary of all attempted backfills. Contains the `total`, `failed`, `inProgress`, `completed`, and `invalid` parameters. |
| `total` | integer | The number of backfills attempted |
| `failed` | integer | The number of backfills that failed |
| `inProgress` | integer | The number of backfills in progress |
| `completed` | integer | The number of backfills completed |
| `invalid` | boolean | The number of invalid backfills |
| `idWithoutPrefix` | string | The ID of the connection without the `dg_` prefix |
| `id` | string | The connection ID |

## GET all connections

Use this endpoint to retrieve all of the connections associated with an organization.

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
                    "dataSetId": "5f24c4f6ecffd1XXXXXXXXXX",
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
            "idWithoutPrefix": "b008fd39-2437-4d00-88fd-3924XXXXXXXX",
            "id": "dg_b008fd39-2437-4d00-88fd-3924XXXXXXXX"
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
                    "dataSetId": "5f1873caa73caaXXXXXXXXXX",
                    "domain": "catalog",
                    "type": "event",
                    "timestampId": "timestamp",
                    "visitorId": "_id",
                    "identityNamespace": "Email",
                    "usePrimaryIdNamespace": false,
                    "identityMap": false,
                    "name": "analytics_services_functional_testing_object_event",
                    "streaming": true
                }
            ],
            "idWithoutPrefix": "7110bb3e-76ce-4201-90bb-3e76XXXXXXXX",
            "id": "dg_7110bb3e-76ce-4201-90bb-3e76XXXXXXXX"
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

* The `dataSets` associated with the connection to be displayed.
* The `limit` of connections per page is `2`.
* The `sortDirection` to be `DESC`, or descending.

#### Response Example Details

The example response above shows the following:

* The `dataSetId` used by the connections are `5f24c4f6ecffd1XXXXXXXXXX` and `5f1873caa73caaXXXXXXXXXX`.
* The `type` of data set used by both connections is `event`.
* The names of the data sets are `Test Dataset` and `analytics_services_functional_testing_object_event`.
* The `id` of the connections are `dg_b008fd39-2437-4d00-88fd-3924XXXXXXXX` and `dg_7110bb3e-76ce-4201-90bb-3e76XXXXXXXX`.
* The total number of connections for the org, shown as `totalElements`, are `573`.

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
| `locale` |  | string | A specified locale |
| `limit` |  | integer | Number of results returned per page |
| `page` |  | integer | The page returned. The first page is `0`. |
| `sortDirection` |  | string | Sorting direction. Includes the enums: `ASC`, `DESC`. |
| `sortProperty` |  | string | The property to sort by. Included the enums: `modifiedDate`, and `id`. |

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
| `dataSets` | container | The information related to the data sets. Contains the `dataSetId`, `domain`, `type`, `timestampId`, `visitorId`, `lookupKeyField`, `lookupParentFields`, `lookupParentDataSetId`, `lookupParentDataSetType`, `identityNamespace`, `usePrimaryIdNamespace`, `identityMap`, `name`, `schemaInfo`, `streaming`, `backfillSummary`, `lastIngestedTime`, `streamingEnabledAt`, `identityNamespaceCol`, and `dataSourceType` parameters. |
| `dataSetId` | string | The data set ID |
| `domain` | string | The domain of the data set |
| `type` | string | The type of data set |
| `timestampId` | string | The ID used for the timestamp |
| `visitorId` | string | The visitor ID |
| `lookupKeyField` | string | The key field used by a lookup data set. This field only applies to a lookup data set. |
| `lookupParentFields` | string | The parent fields used by a lookup data set. This field only applies to a lookup data set. |
| `lookupParentDataSetId` | string | The parent data set ID used by a lookup data set. This field only applies to a lookup data set. |
| `lookupParentDataSetType` | string | The type of parent data set used by a lookup data set. This field only applies to a lookup data set. |
| `identityNamespace` | string | The namespace used by the connection. Please reference the [Create a Connection](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-connections/create-connection.html) documentation for more information regarding Namespaces and Identity Map. |
| `usePrimaryIdNamespace` | boolean | Whether the primary ID namespace is used |
| `identityMap` | boolean | Whether the identity map is used |
| `name` | string | The name of the data set |
| `schemaInfo` | container | The information of the given schema. Contains the `schemaId`, `schemaName`, and `schemaRef` parameters. |
| `schemaId` | string | The schema ID |
| `schemaName` | string | The schema name |
| `schemaRef` | container | Contains the `id`, and `contentType` parameters. |
| `id` | string | The ID |
| `contentType` | string | The type of content |
| `backfills` | container | Backfills that have been performed with the data. Contains the `id`, `dataSetId`, `status`, `startDate`, `endDate`, `createdDate`, and `allData` parameters. |
| `id` | string | The ID of the backfill |
| `dataSetId` | string | The data set ID |
| `status` | string | The status of the backfill |
| `startDate` | string | The starting date of the backfilled data |
| `endDate` | string | The ending date of the backfilled data |
| `createdDate` | string | The date the backfill was created |
| `allData` | boolean | Whether all data is displayed |
| `streaming` | boolean | Whether streaming is enabled |
| `backfillSummary` | container | A summary of all attempted backfills. Contains the `total`, `failed`, `inProgress`, `completed`, and `invalid` parameters. |
| `total` | integer | The number of backfills attempted |
| `failed` | integer | The number of backfills that failed |
| `inProgress` | integer | The number of backfills in progress |
| `completed` | integer | The number of backfills completed |
| `invalid` | boolean | The number of invalid backfills |
| `lastIngestedTime` | string |  |
| `streamingEnabledAt` | string |  |
| `identityNamespaceCol` | string |  |
| `dataSourceType` | container | Information about the data source type. Contains the `id`, `type`, and `description` parameters. |
| `id` | string | The ID of the data source |
| `type` | string | The type of the data source |
| `description` | string | The description of the data source |
| `identityNamespaceData` | container | Contains the `dataSetId`, `domain`, `identityNamespace`, `usePrimaryIdNamespace`, `identityMap`, and `identityNamespaceCol` parameters. |
| `dataSetId` | string | The data set ID |
| `domain` | string |  |
| `identityNamespaceCol` | string |  |
| `modifiedDate` | string | The date when the connection was last modified |
| `createdDate` | string | The date the connection was created |
| `organization` | string | The org ID the connection belongs to |
| `modifiedBy` | string | The user ID of the person who last modified the connection |
| `modifiedByFullName` | string | The name of the person who last modified the connection |
| `caseSensitive` | boolean | Whether the connection is case sensitive |
| `numDailyEvents` | integer | The number of daily events associated with the connection |
| `externalData` | container | External data associated with the connection. Contains the `externalId`, and `externalParentId` parameters. |
| `externalId` | string | The external ID of the connection |
| `externalParentId` | string | The external ID of the connection |
| `backfillEnabled` | boolean | Whether backfill is enabled |
| `sandboxId` | string | The sandbox ID |
| `sandboxName` | string | The sandbox name |
| `fieldsId` | string | The fields ID |
| `floatPrecision` | integer | The float precision |
| `dataRetentionMonths` | integer | For how many months data is retained prior to being removed |
| `connectionValidationErrors` | container | Any errors associated with the connection validation. Contains the `errorCode`, `dataSetId`, `dataSetName`, `disallowedField`, and `missingField` parameters. |
| `errorCode` | string | A given error code |
| `dataSetId` | string | The data set ID |
| `dataSetName` | string | The data set name |
| `disallowedField` | string | A field that is not allowed |
| `missingField` | string | A field that is missing |
| `backfillSummary` | container | A summary of all attempted backfills. Contains the `total`, `failed`, `inProgress`, `completed`, and `invalid` parameters. |
| `total` | integer | The number of backfills attempted |
| `failed` | integer | The number of backfills that failed |
| `inProgress` | integer | The number of backfills in progress |
| `completed` | integer | The number of backfills completed |
| `invalid` | boolean | The number of invalid backfills |
| `idWithoutPrefix` | string | The ID of the connection without the `dg_` prefix |
| `id` | string | The connection ID |
| `number` | integer | The page number returned |
| `totalElements` | integer | The number of connections |
| `totalPages` | integer | The number of pages to be displayed with the current settings |
| `numberOfElements` | integer | The number of connections displayed per page |
| `firstPage` | boolean | Whether the first page is displayed |
| `lastPage` | boolean | Whether the last page is displayed |
| `sort` |  | Whether a sort is applied |
| `size` | integer | The number of connections displayed on the current page |
