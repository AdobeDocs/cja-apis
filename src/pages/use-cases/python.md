---
title: Use CJA API with Python
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
description: Get started making CJA API calls using Python.
---

# Use CJA API with Python

[Python](https://www.python.org/) is a powerful and easy to learn programming language. It has several libraries that allow you to create API calls. This page uses the [`requests`](https://pypi.org/project/requests/) library to make API calls to Customer Journey Analytics.

## Prerequisites

Make sure that you meet all requirements on the [Getting started](../getting-started/index.md) page, including:

* Your user account belongs to the correct product profile in the [Adobe Admin Console](https://adminconsole.adobe.com)
* An API client created in the [Adobe I/O Console](https://console.adobe.io)
* You have generated a JWT (JSON Web Token), via the Service Account Integration or by your own script.

## 1. Preparing your header

Once you possess your token, you can prepare a header to realize the requests with the `requests` module. In `requests`, the header is a dictionary, consisting of key value pairs. The CJA API requires 3 components on your header:

* Your Token with the `authorization` key and `"Bearer "` as a start.
* Your Organization ID with the `x-gw-ims-org-id` key
* Your client ID with the `x-api-key` key.

For example, your dictionary would look similar to the following example:

```python
myHeader = {
    "x-gw-ims-org-id" : "EXAMPLE@AdobeOrg",
    "x-api-key" : "example-client-id",
    "authorization" : "Bearer example-authorization-value"
}
```

## 2. Sending the request

Once you have your header ready, you can start loading and using the `requests` module. For example you can send a request to the `/aresconfig/users/me` endpoint:

```python
import requests
res = requests.get("https://cja.adobe.io/aresconfig/users/me", headers=myHeader)
```

## 3. Using responses from the CJA API

Once you receive a response from Adobe, you can use the `.json()` method on it to return the data returned by the CJA API. In the above example, the response is captured in the `res` variable. The below example uses this `res` variable to parse the response into a new variable.

```python
myData = res.json()
```

The `myData` variable would contain a value similar to the following:

```python
{
 'id': 'EXAMPLE@techacct.adobe.com',
 'email': 'example@techacct.adobe.com',
 'fullName': ''
}
```

<InlineAlert variant="help" slots="text"/>

Your user is the JWT application itself if you use JWT to authenticate.

## Other use-cases

### Sending data with query parameters

Query parameters are elements following the question mark in a URL. For example, `?param=value`.

When requesting the [data views for a company](https://www.adobe.io/cja-apis/docs/api/#operation/getDataViewsForCompany), you use the following path: `/datagroups/dataviews`. However, a normal request (`requests.get("https://cja.adobe.io/datagroups/dataviews",headers=myHeader)`) only returns the following response:

```python
{
  'content': [
    {'id': 'dv_exampleid1'},
    {'id': 'dv_exampleid2'},
    {'id': 'dv_exampleid3'}
   ],
  'totalPages': 1,
  'totalElements': 3,
  'numberOfElements': 3,
  'number': 0,
  'firstPage': True,
  'lastPage': True,
  'sort': None,
  'size': 10
}
```

This is not typically useful as you miss some elements that easily identify the data view. If you use the `name` and `owner` query parameters, you can retrieve more interesting information. For example:

```python
parameters = {'expansion':'name,owner'}
requests.get("https://cja.adobe.io/datagroups/dataviews", headers=myHeader, params=parameters)
```

Now the response contains additional information:

```python
{
  'content': [{
      'name': 'Web Call Example Data View',
      'owner': {'imsUserId': 'EXAMPLE1@AdobeID', 'name': None},
      'id': 'dv_exampleid1'
    }, {
      'name': 'All Datasets Example',
      'owner': {'imsUserId': 'EXAMPLE2@AdobeID', 'name': None},
      'id': 'dv_exampleid2'
    }, {
      'name': 'Example (default)',
      'owner': {'imsUserId': 'EXAMPLE3@AdobeID', 'name': None},
      'id': 'dv_exampleid3'
    }
  ],
  'totalElements': 3,
  'totalPages': 1,
  'numberOfElements': 3,
  'number': 0,
  'firstPage': True,
  'lastPage': True,
  'sort': None,
  'size': 10
}
```

### Sending data in the body of the request

You can update or create a component by sending data in the body of a request. That type of API call is typically either a `POST` or `PUT` request.

<InlineAlert variant="help" slots="text"/>

`PUT` request completely overwrites the previous data held in the component. Excercise caution when editing components.

Data sent to the Customer Journey Analytics API is typically through a python dictionary. The easiest method to send data is to stringify the JSON element via the `json` module. You can use the following example to help format the body of your API call.

```python
creationDataView = {
  "name": "string",
  "description": "string",
  "owner": {
    "imsUserId": "string",
    "name": "string"
  },
  "isDeleted": true,
  "parentDataGroupId": "string",
  "segmentList": [
    "string"
  ],
  "currentTimezoneOffset": 0,
  "timezoneDesignator": "string",
  "modifiedDate": "YYYY-08-24T14:15:22Z",
  "createdDate": "YYYY-08-24T14:15:22Z",
  "organization": "string",
  "modifiedBy": "string",
  "curationEnabled": true,
  "recentRecordedAccess": "YYYY-08-24",
  "sessionDefinition": [{}],
  "curatedComponents": [{}],
  "externalData": {
    "externalId": "string",
    "externalParentId": "string"
  },
  "containerNames": {
    "event": "string",
    "session": "string",
    "people": "string"
  },
  "id": "string"
}
```

Once you have this definition established (`creationDataView` in the above example), you can use it in an API call. The following example uses the [Data view creation API](https://www.adobe.io/cja-apis/docs/api/#operation/getDataViewsForCompany) and includes the above JSON object in its body:

```python
import json
resCreation = requests.post("https://cja.adobe.io/datagroups/dataviews", headers=myHeader, data=json.dumps(creationDataView))
```

The response from Adobe would looks similar to the following:

```python
resCreation.json()

## Response from Adobe
{
  "name": "string",
  "description": "string",
  "owner": {
    "imsUserId": "string",
    "name": "string"
    },
  "isDeleted": true,
  "parentDataGroupId": "string",
  "segmentList": [
    "string"
  ],
  "currentTimezoneOffset": 0,
  "timezoneDesignator": "string",
  "modifiedDate": "YYYY-08-24T14:15:22Z",
  "createdDate": "YYYY-08-24T14:15:22Z",
  "organization": "string",
  "modifiedBy": "string",
  "curationEnabled": true,
  "recentRecordedAccess": "YYYY-08-24",
  "sessionDefinition": [{}],
  "curatedComponents": [{}],
  "externalData": {
    "externalId": "string",
    "externalParentId": "string"
    },
  "containerNames": {
    "event": "string",
    "session": "string",
    "people": "string"
  },
  "id": "string"
}
```
