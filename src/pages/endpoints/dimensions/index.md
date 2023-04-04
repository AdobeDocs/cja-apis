---
title: CJA Dimensions APIs
description: Retrieve CJA dimensions information using the API.
---

# Dimensions API

The CJA Dimensions APIs allow you to retrieve dimensions programmatically through Adobe Developer. These APIs use the same data and methods that Adobe uses inside the product UI.

## Retrieve multiple dimensions

Retrieve a list of dimensions for a specified dataview ID. that the user can access. See [Dimensions parameters](parameters.md) for query strings that you can attach to this API call.

`GET https://cja.adobe.io/dimensions`

For example, get a response of all dimensions shared with the user.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://cja.adobe.io/dimensions?includeType=shared" \
    -H "x-api-key: {CLIENTID}" \
    -H "x-gw-ims-org-id: {IMSORG}" \
    -H "Authorization: Bearer {ACCESSTOKEN}"
```

#### Response

```json
{
    "content": [
        {
            "id": "62437d"
        }
    ],
    "totalElements": 1,
    "totalPages": 1,
    "numberOfElements": 1,
    "number": 0,
    "firstPage": true,
    "lastPage": true,
    "sort": null,
    "size": 10
}
```

## Retrieve a single dimension

You can retrieve details around a single dimension if you know the dimension ID. You can find the dimension ID by using the multiple dimensions endpoint. See [Dimensions parameters](parameters.md) for query strings that you can attach to this API call.

`GET https://cja.adobe.io/dimensions`

For example, find dimensions with an ID of `62437d`, including the name, description, date range, and color:

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://cja.adobe.io/dimensions/62437d?expansion=name,description,dateRange,color" \
    -H "x-api-key: {CLIENTID}" \
    -H "x-gw-ims-org-id: {IMSORG}" \
    -H "Authorization: Bearer {ACCESSTOKEN}"
```

#### Response

```json
{
    "id": "62437d",
    "name": "Example dimension",
    "description": "This is an example dimension description.",
    "dateRange": "YYYY-03-29T00:00:00/YYYY-03-29T23:59:59",
    "color": "STANDARD6"
}
```

### Response parameters

The **Retrieve multiple dimensions** endpoint includes the following response parameters:

| Parameter | Type | Description |
| --- | --- | -- |
| `id` | string | Dimension ID |
| `name` | string | Dimension name |
| `description` | string | Contents of dimension description field in report|
| `sourceFieldId` | string | ID of source field |
| `sourceFieldName` | string | Name of source field |
| `storageId` | string | ID of storage |
| `dataSetIds` | array of strings | Lists the ID for each dataset returned |
| `dataSetType` | array of strings | One of three `enum` dataset types: `EVENT`, `LOOKUP`, or `PROFILE` |
| `schemaType` | string | Type of schema |
| `sourceFieldType` | string | Type of source field |
| `tableName` | string | Name of table |
| `type` | string | Dimension data type that is listed as an `enum` of one of the following: `string`, `boolean`, `int`, `decimal`, `currency`, `percent`, `time`, `enum`, and `ordered_enum`.
| `required` | boolean | Whether it is required  |
| `hideFromReporting` | boolean | Whether the dimension is hidden in reports  |
| `schemaPath` | string | Path of schema  |
| `hasData` | boolean | Whether the dimension contains data  |
| `segmentable` | boolean | Whether the dimension is segmentable |
| `favorite` | boolean | Whether the dimension is tagged as a favorite |
| `approved` | boolean | Whether the dimension is approved |
| `tags` | array of objects | Contains `property` objects that contain data associated with the dimension. For example, `property1`, `property2`, etc. each contain data in key-value pairs for the dimension. |
| `shares` | array of objects | Contains `property` objects that contain data associated with the dimension. For example, `property1`, `property2`, etc. each contain data in key-value pairs for the dimension. |
| `usageSummary` | array of objects | Contains `property` objects that contain data associated with the dimension. For example, `property1`, `property2`, etc. each contain data in key-value pairs for the dimension. |
| `notFound` | boolean | Whether the dimension is found |
| `fromGlobalLookup` | boolean | Whether the dimension is sourced from global lookup |
| `multiValued` | boolean | Whether the dimension has mutliple values |
| `includeExcludeSetting` | object | Shows settings specified for dimension retrieval. This includes the following: `caseSensitive`, `match`, `type`, `rules` and `enabled`. These settings are described in the following rows. |
| `caseSensitive` | boolean | Whether the dimension is queried as case sensitive. This is contained in the `includeExcludeSetting` response object. |
| `match` | string | The logical operator specified: `and`, or `or` (both type `enum`). This is contained in the `includeExcludeSetting` response object. |
| `type` | string | The type specified: `string`, `numeric` or `date` (all type `enum`). This is contained in the `includeExcludeSetting` response object. |
| `rules` | array of objects | Contains the rules specified for the query: This includes `string` and `value` (both type `string`). This is contained in the `includeExcludeSetting` response object. |
| `enabled` | boolean | Whether the query specifies that the dimension is enabled. This is contained in the `includeExcludeSetting` response object. |
| `fieldDefinition` | array of objects | Shows field definitions for `func`, `id`, `field`, `label`, `branches`, `oberon-storage-type`, `oberon-table`, `oberon-field`, `oberon-storage-id`, `case-sensitive`, and `mapped-type`. These definitions are described in the following rows. |
| `func` | string | The function of the field, including options: `raw_field`, `match` or `floor` (all type `enum`). This is contained in the `fieldDefinition` response object. |
| `id` | string | The ID of the field. This is contained in the `fieldDefinition` response object. |
| `field` | string | The field associated with the `fieldDefinition`. This is contained in the `fieldDefinition` response object. |
| `label` | string | The label. This is contained in the `fieldDefinition` response object. |
| `branches` | array of objects | Shows branches for `pred` and `map-to`.  This is contained in the `fieldDefinition` response object. For the complete data model on  `pred` objects and parameters, see the [CJA Dimensions API reference](https://developer.adobe.com/cja-apis/docs/api/#tag/Dimensions-API/operation/getDimensionsForDataview_1). |
| `oberon-storage-type` | string | The type used in oberon storage. This is contained in the `fieldDefinition` response object. |
| `oberon-table` | string | The table used in oberon. This is contained in the `fieldDefinition` response object. |
| `oberon-field` | string | The field in oberon. This is contained in the `fieldDefinition` response object. |
| `oberon-storage-id` | string | The ID associated with oberon storage. This is contained in the `fieldDefinition` response object. |
| `case-sensitive` | boolean | Whether the `fieldDefinition` is case-sensitive. This is contained in the `fieldDefinition` response object. |
| `mapped-type` | string | The type used for mapping. This is contained in the `fieldDefinition` response object. |
| `bucketingSetting` | object | The setting used for bucketing, including options `bucketSetting` and `enabled`. For the complete data model on these settings, see the [CJA Dimensions API reference](https://developer.adobe.com/cja-apis/docs/api/#tag/Dimensions-API/operation/getDimensionsForDataview_1). |
| `noValueOptionsSetting` | object | The options setting used for dimensions with no value, including `option` and `value`. |
| `defaultDimensionSort` | boolean | Whether sorting of dimensions is set for default. |
| `persistenceSetting` | object | The settings for persistence, including `enabled`, `allocationModel`, and `lookback`. For the complete data model on these settings, see the [CJA Dimensions API reference](https://developer.adobe.com/cja-apis/docs/api/#tag/Dimensions-API/operation/getDimensionsForDataview_1). |
| `isDeleted` | boolean | Whether the dimension is deleted. |
