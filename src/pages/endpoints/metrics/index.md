---
title: CJA Metrics APIs
description: Retrieve CJA metrics information using the API.
---

# Metrics API

The CJA Metrics APIs allow you to retrieve metrics programmatically through Adobe Developer. These APIs use the same data and methods that Adobe uses inside the product UI. See [Metrics](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-components/apply-create-metrics.html) in the Customer Journey Analytics guide for more information.

The endpoints described in this guide are routed through analytics.adobe.io. To use them, you will need to first create a client with access to Customer Journey Analytics APIs. For more information, refer to [Getting started with the Customer Journey Analytics API](https://developer.adobe.com/cja-apis/docs/getting-started/).

This guide includes instructions for using the following endpoints:

* GET multiple metrics: Retrieves a list of metrics for a specified dataview ID
* GET metric by ID: Retrieves information for a single metric from a dataview

## Retrieve multiple metrics

Use this endpoint to retrieve a list of metrics for a specified dataview ID.

`GET https://cja.adobe.io/data/dataviews/{dataviewId}/metrics`

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://cja.adobe.io/data/dataviews/{dataviewId}/metrics" \
    -H "x-api-key: {CLIENTID}" \
    -H "x-gw-ims-org-id: {IMSORG}" \
    -H "Authorization: Bearer {ACCESSTOKEN}"
```

#### Response

```json
{
    "content": [
        {
            "id": "metrics/adobe_firsttimesessions",
            "name": "First-time Sessions",
            "dataSetType": "event",
            "sourceFieldType": "integer",
            "hasData": true,
            "derivedFieldCompatible": true
        },
        {
            "id": "metrics/adobe_returnsessions",
            "name": "Return Sessions",
            "dataSetType": "event",
            "sourceFieldType": "integer",
            "hasData": true,
            "derivedFieldCompatible": true
        },
        {
            "id": "metrics/visitors",
            "name": "People",
            "dataSetType": "event",
            "hasData": true,
            "derivedFieldCompatible": false
        },
        {
            "id": "metrics/visits",
            "name": "Sessions",
            "dataSetType": "event",
            "hasData": true,
            "derivedFieldCompatible": false
        },
           ],
    "totalElements": 4,
    "totalPages": 1,
    "number": 0,
    "numberOfElements": 4,
    "firstPage": true,
    "lastPage": true,
    "sort": null,
    "size": 4
}
```

### Request example details

The above example shows a request for all metrics of the required `dataviewId` parameter, as specified in the path.

#### Response example details

The above example shows the following names of the four metrics returned for the specified dataview:

* First-time Sessions
* Return Sessions
* People
* Sessions

 It also includes the following information:

* The [`dataSetType`](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-connections/create-connection.html#dataset-types) for all four parameters is `event.`

* The metric IDs, the value for the [`derivedFieldCompatible`](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/derived-fields.html?lang=en#:~:text=Derived%20fields%20are%20an%20important,through%20a%20customizable%20rule%20builder.) parameter, and the `hasData` value--indicating whether the metric has data associated with it.

### Request parameters

The GET multiple metrics endpoints includes one request path parameter (`dataviewId`) and three optional query parameters, as shown below:

| Parameter | Req/Opt | Type | Description |
| --- | --- | -- | --|
| `dataviewId` | required | string | The ID of the dataview containing the metric |
| `includeType` | optional | array of strings | A comma-delimited list of include types |
| `locale` | optional | string | The language to use in the response |
| `expansion` | optional | array of strings | A comma-delimited list of additional fields to include in the response. For a complete list of these fields see the [reference.](https://developer.adobe.com/cja-apis/docs/api/#tag/Metrics-API/operation/getMetricsForDataview_1) |

### Response parameters

The **Retrieve multiple metrics** endpoint includes the following response parameters:

| Parameter | Type | Description |
| --- | --- | -- |
| `id` | string | Metric ID |
| `name` | string | Metric name |
| `description` | string | Contents of metric description field in report|
| `sourceFieldId` | string | ID of source field |
| `sourceFieldName` | string | Name of source field |
| `storageId` | string | ID of storage |
| `dataSetIds` | array of strings | Lists the ID for each dataset returned |
| `dataSetType` | array of strings | One of three `enum` dataset types: `EVENT`, `LOOKUP`, or `PROFILE` |
| `schemaType` | string | Type of schema |
| `sourceFieldType` | string | Type of source field |
| `tableName` | string | Name of table |
| `type` | string | Metric data type that is listed as an `enum` of one of the following: `string`, `boolean`, `int`, `decimal`, `currency`, `percent`, `time`, `enum`, and `ordered_enum`.
| `required` | boolean | Whether it is required  |
| `hideFromReporting` | boolean | Whether the metric is hidden in reports  |
| `schemaPath` | string | Path of schema  |
| `hasData` | boolean | Whether the metric contains data  |
| `segmentable` | boolean | Whether the metric is segmentable |
| `favorite` | boolean | Whether the metric is tagged as a favorite |
| `approved` | boolean | Whether the metric is approved |
| `tags` | array of objects | Contains `property` objects that contain data associated with the metric. For example, `property1`, `property2`, etc. each contain data in key-value pairs for the metric. |
| `shares` | array of objects | Contains `property` objects that contain data associated with the metric. For example, `property1`, `property2`, etc. each contain data in key-value pairs for the metric. |
| `usageSummary` | array of objects | Contains `property` objects that contain data associated with the metric. For example, `property1`, `property2`, etc. each contain data in key-value pairs for the metric. |
| `notFound` | boolean | Whether the metric is found |
| `hidden` | boolean | Whether the metric is hidden |
| `fromGlobalLookup` | boolean | Whether the metric is sourced from global lookup |
| `multiValued` | boolean | Whether the metric has mutliple values |
| `includeExcludeSetting` | object | Shows settings specified for metric retrieval. This includes the following: `caseSensitive`, `match`, `type`, `rules` and `enabled`. These settings are described in the following rows. |
| `caseSensitive` | boolean | Whether the metric is queried as case sensitive. This is contained in the `includeExcludeSetting` response object. |
| `match` | string | The logical operator specified: `and`, or `or` (both type `enum`). This is contained in the `includeExcludeSetting` response object. |
| `type` | string | The type specified: `string`, `numeric` or `date` (all type `enum`). This is contained in the `includeExcludeSetting` response object. |
| `rules` | array of objects | Contains the rules specified for the query: This includes `string` and `value` (both type `string`). This is contained in the `includeExcludeSetting` response object. |
| `enabled` | boolean | Whether the query specifies that the metric is enabled. This is contained in the `includeExcludeSetting` response object. |
| `fieldDefinition` | array of objects | Shows field definitions for `func`, `id`, `field`, `label`, `branches`, `oberon-storage-type`, `oberon-table`, `oberon-field`, `oberon-storage-id`, `case-sensitive`, and `mapped-type`. These definitions are described in the following rows. |
| `func` | string | The function of the field, including options: `raw_field`, `match` or `floor` (all type `enum`). This is contained in the `fieldDefinition` response object. |
| `id` | string | The ID of the field. This is contained in the `fieldDefinition` response object. |
| `field` | string | The field associated with the `fieldDefinition`. This is contained in the `fieldDefinition` response object. |
| `label` | string | The label. This is contained in the `fieldDefinition` response object. |
| `branches` | array of objects | Shows branches for `pred` and `map-to`.  This is contained in the `fieldDefinition` response object. For the complete data model on  `pred` objects and parameters, see the [CJA Metrics API reference](https://developer.adobe.com/cja-apis/docs/api/#tag/Metrics-API/operation/getMetricsForDataview_1). |
| `oberon-storage-type` | string | The type used in oberon storage. This is contained in the `fieldDefinition` response object. |
| `oberon-table` | string | The table used in oberon. This is contained in the `fieldDefinition` response object. |
| `oberon-field` | string | The field in oberon. This is contained in the `fieldDefinition` response object. |
| `oberon-storage-id` | string | The ID associated with oberon storage. This is contained in the `fieldDefinition` response object. |
| `case-sensitive` | boolean | Whether the `fieldDefinition` is case-sensitive. This is contained in the `fieldDefinition` response object. |
| `mapped-type` | string | The type used for mapping. This is contained in the `fieldDefinition` response object. |
| `countType` | string | Contains the enums `instances` and `values`. |
| `formatSetting` | object | The options for formatting some metrics. Includes `polarity`, `formatType`, `decimalPlaces`, and `currency`. For the complete data model on these settings, see the [CJA Metrics API reference](https://developer.adobe.com/cja-apis/docs/api/#tag/Metrics-API/operation/getMetricsForDataview_1). |
| `attributionSetting` | object | The options for setting attribution. Includes `enabled`, `attributionModel`, and `lookback`. For the complete data model on these settings, see the [CJA Metrics API reference](https://developer.adobe.com/cja-apis/docs/api/#tag/Metrics-API/operation/getMetricsForDataview_1). |
| `precision` | int32 | The number of digits allowed for numeric parameters |
| `isDeleted` | boolean | Whether the metric is deleted |

## Retrieve a single metric

You can retrieve details of a single metric if you know the metric ID. You can find the metric ID by using the multiple metric endpoint, as described above.

`GET https://cja.adobe.io/data/dataviews/{dataviewId}/metrics/{metricId}`

### Request parameters

The required request parameters for retrieving a single metric should be specified in the path. The optional parameters should be specified as query parameters.

| Parameter | Req/Opt | Type | Description |
| --- | --- | -- | --|
| `dataviewId` | required | string | The ID of the dataview containing the dimension |
| `metricId` | required | string | The ID of the metric. When specifying, do not include the `metrics/` prefix. For example, instead of `metrics/visitors`, ues only `visitors` for the ID |
| `locale` | optional | string | The language to use in the response |
| `expansion` | optional | array of strings | A comma-delimited list of additional fields to include in the response. For a complete list of these fields see the [reference.](https://developer.adobe.com/cja-apis/docs/api/#tag/Metrics-API/operation/getMetricById_1) |

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

### Example request

```sh
curl -X GET "https://cja.adobe.io/data/dataviews/62437d/metrics/variables/daterangeyear" \
    -H "x-api-key: {CLIENTID}" \
    -H "x-gw-ims-org-id: {IMSORG}" \
    -H "Authorization: Bearer {ACCESSTOKEN}"
```

The above example shows a request for information associated with the `visitors` metric in the `62437d` data view.

### Example response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "sourceFieldId": "string",
  "sourceFieldName": "string",
  "storageId": "string",
  "dataSetIds": [
    "string"
  ],
  "dataSetType": "EVENT",
  "schemaType": "string",
  "sourceFieldType": "string",
  "tableName": "string",
  "type": "STRING",
  "required": true,
  "hideFromReporting": true,
  "schemaPath": "string",
  "hasData": true,
  "segmentable": true,
  "favorite": true,
  "approved": true,
  "tags": [
    {
      "property1": {},
      "property2": {}
    }
  ],
  "shares": [
    {
      "property1": {},
      "property2": {}
    }
  ],
  "usageSummary": {
    "property1": {},
    "property2": {}
  },
  "notFound": true,
  "hidden": true,
  "fromGlobalLookup": true,
  "multiValued": true,
  "includeExcludeSetting": {
    "caseSensitive": true,
    "match": "and",
    "type": "string",
    "rules": [
      {
        "clause": "string",
        "value": "string"
      }
    ],
    "enabled": true
  },
  "fieldDefinition": [
    {
      "func": "RAW_FIELD",
      "id": "string",
      "field": "string",
      "label": "string",
      "branches": [
        {
          "pred": {
            "func": "AND",
            "preds": [
              {}
            ],
            "pred": {},
            "val": {}
          },
          "map-to": {}
        }
      ],
      "oberon-storage-type": "string",
      "oberon-table": "string",
      "oberon-field": "string",
      "oberon-storage-id": "string",
      "case-sensitive": true,
      "mapped-type": "string"
    }
  ],
  "bucketingSetting": {
    "bucketSettings": [
      {
        "from": 0,
        "to": 0
      }
    ],
    "enabled": true
  },
  "noValueOptionsSetting": {
    "option": "string",
    "value": "string"
  },
  "defaultDimensionSort": true,
  "persistenceSetting": {
    "enabled": true,
    "allocationModel": {
      "func": "ALLOCATION_FIRST_TOUCH",
      "expiration": {
        "func": "afterEvents",
        "events": [
          "string"
        ],
        "granularity": "string",
        "numPeriods": 0,
        "context": "string"
      },
      "lookbackExpiration": {
        "func": "string",
        "granularity": "string",
        "numPeriods": 0
      },
      "merchandising": {
        "func": "nonMerchandising",
        "bindingCriteria": {
          "func": "always",
          "bindingEvents": [
            "string"
          ]
        }
      },
      "context": "string",
      "firstWeight": 0,
      "middleWeight": 0,
      "lastWeight": 0,
      "halfLifeNumPeriods": 0,
      "halfLifeGranularity": "string"
    },
    "lookback": {
      "func": "string",
      "granularity": "string",
      "numPeriods": 0
    }
  },
  "isDeleted": true
}
```

### Response parameters

The response parameters for retrieving a single metric are the same as for retrieving multiple metrics. See the table above for a description of each parameter.
