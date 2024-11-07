---
title: CJA Asset Transfer
description: Use CJA Asset Management API to transfer ownership of CJA assets
---

# Asset Management

The Customer Journay Analysis (CJA) asset management API provides methods for transferring ownership of CJA assets.

<InlineAlert variant="info" slots="text" />

The user of these endpoints must be an Admin in the Adobe Admin Console. For more information regarding Adobe Admin Console user roles, see the [Adobe Admin Console](https://helpx.adobe.com/enterprise/using/users.html) documentation.

The endpoints described in this guide are routed through `analytics.adobe.io`. To use them, you must first create a client with access to the Adobe Developer Console. For more information, see [Getting started with the CJA API](https://developer.adobe.com/cja-apis/docs/getting-started/).

This guide includes instructions for the following:

* Retrieving the type and number of CJA assets assigned to a user in a specified organization with the **GET user asset count** endpoint.
* Transfering the ownership of those CJA assets to another user with the **PUT user asset transfer** endpoint, in combination with other API services. 

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
curl -X GET "https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/exampleImsUserId.e/counts" \
     -H "x-api-key: {CLIENT_ID}" \
     -H "x-gw-ims-org-id: {IMS_ORG_ID}" \
     -H "Authorization: Bearer {ACCESS_TOKEN}"
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

The example above shows a request for the types and numbers of assets owned by user`exampleImsUserId.e`.

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

Use the **PUT user asset transfer** endpoint to transfer assets to a specified user. 

`PUT https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{RECIPIENT_USER_IMS_ID}/transfer`

To complete an asset transfer, you will need the following:

* The `reciepientImsUserId`: the IMS user ID of the recipieht of the assets, found with the [Configuration API](https://developer.adobe.com/cja-apis/docs/api/#tag/Configuration-API).
* The `componentType`: the type of component as listed in response to the **Get user asset count** endpoint. 
* The asset ID: The ID of the asset, as shown in response to the API service that corresponds to the type of asset. For example, if the **GET user asset count** endpoint shows that `exampleUserId` owns two `project` assets, use the [Project API](https://developer.adobe.com/cja-apis/docs/endpoints/projects/) to return the asset ID.

Note: The asset owner user ID is already retrieved with the previous call and will be applied automatically to the **PUT user asset transfer** request. 

<InlineAlert variant="info" slots="text" />

The transfer process does not copy the assets. It removes them from the owner and assigns them to the recipient. The number of assets in a single request cannot exceed the limit of 100 components.

### Project asset transfer example

The steps below show an example for transfering a `project` asset to another user (using the steps described above), as follows:

1. The admin retrieves the asset owner user ID and the recipient user ID by using the [Configuration API](https://developer.adobe.com/cja-apis/docs/api/#tag/Configuration-API). This shows that the user ID of the owner is `OwnerExample111.e` and the recipient is `RecipientExample222.e`.
2. The admin retrieves the number and type of assets for the owner with the **GET user asset count** endpoint. This shows two `project` type assets owned by `OwnerImsUserIdExample`.
3. The admin uses the [GET projects by user](https://developer.adobe.com/cja-apis/docs/api/#operation/projects_getProjects) endpoint within the [Project API](https://developer.adobe.com/cja-apis/docs/api/#tag/Projects-APIs) to retrievethe asset ID of the projects to be transferred, as shown in the example request and response below:

### Example requests and responses for a project API call

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Example project API request

```sh
curl -X PUT "https://cja.adobe.io/data/componentmetadata/1.0/ares/users/projects?locale=en_US&limit=10&page=0&pagination=true&ownerId=OwnerExample111.e\"
     -H "x-api-key: {CLIENT_ID}" \
     -H "x-gw-ims-org-id: {IMS_ORG_ID}" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer {ACCESS_TOKEN}" \
```

#### Example project API response

```json
 {
  "content": [
    {
      "id": "ExampleProjectId1",
      "name": "New project testing users",
      "description": "",
      "type": "project",
      "dataId": "dv_5555555fa5ea5555bfdb5bea",
      "owner": {
        "imsUserId": "OwnerExample111.e",
        "ownerId": "OwnerExample111.e",
        "name": null,
        "type": "imsUser"
      },
      "created": "YYYY-MM-DDT17:19:41Z"
    },
    {
      "id": "ExampleProjectId2",
      "name": "Testing definitions",
      "description": "",
      "type": "project",
      "dataId": "dv_66c6d6ada6666666a6666666",
      "owner": {
        "imsUserId": "OwnerExample111.e",
        "ownerId": "OwnerExample111.e",
        "name": null,
        "type": "imsUser"
      },
      "created": "YYYY-MM-DDT23:56:41Z"
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

### Request example details for project API call

The Projects API example above requests a list of projects under the ownership of `OwnerExample111.e`

### Response example details for project API call

The example Projects API response above shows that the asset IDs for the projects are `ExampleProjectId1` and `ExampleProjectId2`. These project IDs will be used to transfer the assets to`RecipientExample222.e` with the the **PUT user asset transfer**.

### PUT user assets transfer request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X PUT 'https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/RecipientExample222.e/transfer' \
     -H 'x-api-key: {CLIENT_ID}' \
     -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
     -H 'Content-Type: application/json' \
     -H 'Authorization: Bearer {ACCESS_TOKEN}' \
     -d '{
        [
          {
            "componentType": "project",
            "componentIds": [
              "ExampleProjectId1"
            ]
          }
        ]
     }'
```

#### Response

```json
  {
    "errors": [ ],
    "status": "status_success"
  }
```

### Request example details

The request above shows a request to transfer the project asset `ExampleProjectId1` to the recipient `RecipientExample222.e`.

### Response example details

The response above shows a successful response for the asset transfer. You can use the **GET user asset count** endpoint again to verify the number of assets transferred.

### Request Parameters

The following table describes the **PUT user asset transfer** request parameters:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `recipientImsUserId` | required | string | The IMS user ID to receive assets from the transfer |
| `componentType` |  | string | The type of component |
| `componentIds` |  | string | An array of the IDs intended to be transferred |

## API status codes

For a description of API status codes and tips for troubleshooting, see the [Platform FAQ and troubleshooting guide](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html#api-status-codes).
