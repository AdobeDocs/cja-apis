---
title: CJA Asset Transfer
description: Use CJA Asset Management API to transfer ownership of CJA assets
---

# CJA Asset Management API Guide

The CJA Asset Transfer endpoints provide methods for transferring ownership of CJA assets.

The user of these endpoints must be an Admin in the Adobe Admin Console. For more information regarding Adobe Admin Console user roles, see the [Adobe Admin Console](https://helpx.adobe.com/enterprise/using/users.html) documentation.

The endpoints described in this guide are routed through `analytics.adobe.io`. To use them, you must first create a client with access to the Adobe Developer Console. For more information, see [Getting started with the CJA API](https://developer.adobe.com/cja-apis/docs/getting-started/).

This guide includes instructions the following endpoints:

* [GET user asset count](): Counts the number of assets owned by a user
* [PUT user asset transfer](): Transfers the ownership of assets to a specified user

## GET user asset count

Use this endpoint to retrieve a count of assets owned by a user.

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
    "componentType": "string",
    "count": 5
  }
]
```

### Request example details

The example above shows a request for the number of assets owned by user with IMS user ID of `exampleId`.

### Response example details

The response above shows the user with the Id of `exampleId` to have five total assets.

### Request Parameters

The following table describes the GET user asset count request parameters:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `imsUserId` | required | string | The IMS user ID that will have total assets counted |

### Response Parameters

The following table describes the GET user asset count response parameters:

| Name | Type | Description |
| --- | --- | --- |
| `componentType` | string | The type of components counted by the request |
| `count` | integer | The number of components counted by the request |

## PUT user asset transfer

Use this endpoint to transfer assets to a specified user.
If an `ownerImsUserId` is specified all assets belonging to the `ownerImsUserId` are considered the assets to be transferred. Any body included in a request alongside an `ownerImsUserId` will be ignored.
Note that the number of assets in a single request cannot exceed the limit of 100 components.

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
