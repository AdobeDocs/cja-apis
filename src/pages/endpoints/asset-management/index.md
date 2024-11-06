---
title: CJA Asset Transfer
description: Use CJA Asset Management API to transfer ownership of CJA assets
---

# Asset Management

The Customer Journay Analysis (CJA) asset management endpoints provide methods for transferring ownership of CJA assets.

<InlineAlert variant="info" slots="text" />

The user of these endpoints must be an Admin in the Adobe Admin Console. For more information regarding Adobe Admin Console user roles, see the [Adobe Admin Console](https://helpx.adobe.com/enterprise/using/users.html) documentation.

The endpoints described in this guide are routed through `analytics.adobe.io`. To use them, you must first create a client with access to the Adobe Developer Console. For more information, see [Getting started with the CJA API](https://developer.adobe.com/cja-apis/docs/getting-started/).

This guide includes instructions for the following:

* Identifying the type and number of CJA assets assigned to a user in a specified organization with the [GET user asset count]() endpoint.
* Transfering the ownership of those CJA assets to another user with the [PUT user asset transfer]() endpoint, in combination with other API services. 

Before using the above endpoints, you can use the Configuration API to find users in your organization and the assets assigned to them. 

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.


## GET user asset count

Use this endpoint to retrieve both a count of assets owned by a user, and the `componentType`for each asset. Note that the user is not the admin requesting the counts but the user who owns the CJA asset.

`GET https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{ImsUserId}/counts`

### Request and Response Examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET 'https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/exampleId/counts' \
     -H "x-api-key: {CLIENT_ID}" \
     -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
     -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

#### Response

```json
[
  {
    "componentType": "scheduledJob",
    "count": 0
  },
  {
    "componentType": "alert",
    "count": 0
  },
  {
    "componentType": "segment",
    "count": 2
  },
  {
    "componentType": "calculatedMetric",
    "count": 1
  },
  {
    "componentType": "annotation",
    "count": 0
  },
  {
    "componentType": "dateRange",
    "count": 0
  },
  {
    "componentType": "project",
    "count": 2
  }
]
```

### Request example details

The example above shows a request for the types and numbers of assets owned by user`exampleId`.

### Response example details

The response above shows the number of assets owned by user `exampleId`, classified by `componentType`. This user owns `2` assets of type `project`, `1` of type `calculatedMetric`, and `2` of type `segment`.

### Request Parameters

The following table describes the GET user asset count request parameters:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `imsUserId` | required | string | The ID of the IMS user whose assets are counted |

### Response Parameters

The following table describes the GET user asset count response parameters:

| Name | Type | Description |
| --- | --- | --- |
| `componentType` | string | The type of components counted by the request. This includes `project`, `dateRange`, `annotation`, `calculatedMetric`, `segment`, `alert`, and `ScheduledJob`. |
| `count` | integer | The number of components owned by the user |

## PUT user asset transfer

Use this endpoint to transfer assets to a specified user. To complete an asset transfer, you will need the following:

* The `ownerImsUserId`
* The `reciepientImsUserId`
* The `componentType` of the asset
* The asset ID

To retrieve this information, follow these steps:

1. Use the [Configuration API](https://developer.adobe.com/cja-apis/docs/api/#tag/Configuration-API) to retrieve the user IDs in your organization.
2. Use the **GET user asset count** endpoint above to find which types of assets belong to the specified user.
3. Depending on the `componentType` of the asset, use the relevant API service to find the ID of the asset. For example, if the **GET user asset count** endpoint shows that `exampleUserId` owns two `project` assets, use the [Project API](https://developer.adobe.com/cja-apis/docs/endpoints/projects/) to return the asset ID.
4. Copy the `id` from the response and use it as the `ownerImsUserId` parameter in the PUT user asset transfer call described below. 

<InlineAlert variant="info" slots="text" />

All assets belonging to the `ownerImsUserId` are transferred. The process does not copy the assets. It removes them from the owner and assigns them to the recipient. Any body included in a request alongside an `ownerImsUserId` will be ignored. The number of assets in a single request cannot exceed the limit of 100 components.

### Example transfer case

Using the information and steps shown above, the example below shows how to transfer a `project` asset to another user, as follows:

The [Configuration API](https://developer.adobe.com/cja-apis/docs/api/#tag/Configuration-API) shows the user ID of the owner as `userExample1` and the recipient as `userExample2`.
The GET user asset count endpoint shows two `project` type assets owned by `userExample1`.
Using the [Project API](https://developer.adobe.com/cja-apis/docs/api/#tag/Projects-APIs), the [GET projects by user](https://developer.adobe.com/cja-apis/docs/api/#operation/projects_getProjects) endpoint lists the asset ID of the projects to be transferred, as shown below:


```json
{
  "content": [
    {
      "id": "634848ad448e1f02a28335c7",
      "name": "New project testing users",
      "description": "",
      "type": "project",
      "dataId": "dv_6348465fa3ea1120bfdb8bea",
      "owner": {
        "imsUserId": "B0617A0162DCEABA0A495CD2@ae0501bf62dcba86495c75.e",
        "ownerId": "B0617A0162DCEABA0A495CD2@ae0501bf62dcba86495c75.e",
        "name": null,
        "type": "imsUser"
      },
      "created": "2022-10-13T17:19:41Z"
    },
    {
      "id": "63c9d8b9e862c5405dc921b4",
      "name": "Testing definitions",
      "description": "",
      "type": "project",
      "dataId": "dv_63c2d9ada3200730a4992185",
      "owner": {
        "imsUserId": "B0617A0162DCEABA0A495CD2@ae0501bf62dcba86495c75.e",
        "ownerId": "B0617A0162DCEABA0A495CD2@ae0501bf62dcba86495c75.e",
        "name": null,
        "type": "imsUser"
      },
      "created": "2023-01-19T23:56:41Z"
    }
  ],
  "totalPages": 1,
  "totalElements": 2,
  "numberOfElements": 2,
  "number": 0,
  "firstPage": true,
  "lastPage": true,
  "sort": null,
  "size": 10
}
```



`ownerImsUserId`  `exampleOwnerId` to `exampleRecipientId` previous calls referenced above


`PUT https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{recipientImsUserId}/transfer`

### PUT user asset transfer request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X PUT 'https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{recipientImsUserId}/transfer' \
     -H 'x-api-key: {CLIENT_ID}' \
     -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
     -H 'Content-Type: application/json' \
     -H 'Authorization: Bearer {ACCESS_TOKEN}' \
     -d '{
        [
          {
            "componentType": "string",
            "componentIds": [
              "string"
            ]
          }
        ]
     }'
```

#### Response

```json
[
  {
    "componentType": "string",
    "componentIds": [
      "string"
    ]
  }
]
```

### Request example details

The request above shows a request to transfer the assets of the user to the recipient.

### Response example details

The response above shows the component IDs of the assets transfered.

### Request Parameters

The following table describes the {TITLE} request parameters:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `recipientImsUserId` | required | string | The IMS user ID to receive assets from the transfer |
| `componentType` |  | string | The type of component |
| `componentIds` |  | string | An array of the IDs intended to be transferred |

### Response Parameters

The following table describes the response parameters:

| Name | Type | Description |
| --- | --- | --- |
| `componentType` | string | The type of component transferred |
| `componentIds` | string | The IDs of transferred components |
