---
title: CJA Asset Transfer
description: Use CJA Asset Management API to transfer ownership of CJA assets
---

# Asset Management

The CJA Asset Transfer endpoints provide methods for transferring ownership of CJA assets.
<InlineAlert variant="info" slots="text" />

The user of these endpoints must be an Admin in the Adobe Admin Console. For more information regarding Adobe Admin Console user roles, see the [Adobe Admin Console](https://helpx.adobe.com/enterprise/using/users.html) documentation.

The endpoints described in this guide are routed through `analytics.adobe.io`. To use them, you must first create a client with access to the Adobe Developer Console. For more information, see [Getting started with the CJA API](https://developer.adobe.com/cja-apis/docs/getting-started/).

This guide includes instructions for the following:

* Identifying the number of CJA assets assigned to a user in a specified organization with the [GET user asset count]() endpoint.
* Transfering the ownership of those CJA assets to another user with the [PUT user asset transfer]() endpoint. 

Before using the above endpoints, you can use the Configuration API to find users in your organization and the assets assigned to them. 

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.


## GET user asset count

Use this endpoint to retrieve a count of assets owned by a user. Note that the user is not the admin requesting the counts but the user who owns the CJA asset.

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

The example above shows a request for the number of assets owned by user`exampleId`.

### Response example details

The response above shows the number of assets owned by user `exampleId`, classified by `componentType`. This user owns two projects, one calculated metric, and two segments.

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

Use this endpoint to transfer assets to a specified user. All assets belonging to the `ownerImsUserId` are transferred. The process does not copy the assets. It removes them from the owner and assigns them to the recipient. Any body included in a request alongside an `ownerImsUserId` will be ignored. The number of assets in a single request cannot exceed the limit of 100 components.

`PUT https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{recipientImsUserId}/transfer`

### Request and Response Examples

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
