---
title: Use CJA API with Python
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
description: Get started making CJA API calls using Python.
---

## Use Cases for CJA API in Python

[python](https://www.python.org/) is a programming language that is often referred as easy to learn and quite powerful. It has several libraries that enable you to create API call. In the following example, we will be using the [`requests`](https://pypi.org/project/requests/) library in order to demonstrate the Customer Journey Analytics API capabilities.

## Prerequisites

Make sure that you meet all requirements on the [Getting started](../getting-started/index.md) page, including:

* Your user account belonging to the correct product profile in the [Adobe Admin Console](https://adminconsole.adobe.com)
* An API client created in the [Adobe I/O Console](https://console.adobe.io)
* You have generated a JWT (JSON Web Token), via the Service Account Integration or by your own script.[See documentation](https://www.adobe.io/cja-apis/docs/getting-started/)

## 1. Preparing your header

Once you possess your token, you will need to prepare a header to realize the requests with the `requests` module.\
In `requests`, the header is a dictionary, consisting of key value pairs.\
CJA API requires 3 information on your header:

* Your Token with the `authorization` key and `"Bearer "` as a start.
* Your Organization ID with the `x-gw-ims-org-id` key
* client ID with the `x-api-key` key.

Therefore your dictionary should look like the following:

```python
myHeader = {
    "x-gw-ims-org-id" : "TA510B1B5D783C290A495E68@AdobeOrg",
    "x-api-key" : "16528a8a729a4d16913j8da87835984e",
    "authorization" : "Bearer eyJhbGciOiJSUzI1NiIsIng1dyIn0.eyJpZCI6IjE2MTcwOTc1MDI3ODNfNTZmYzdjY2EtNzZhMi0OTcyLWI1MmUtMWQ4ZGZhNGYzMzg4X3VlMSIsImNsaWVudF9p.KY6uzV0UrZq0Jbw3Rx60AeAXRalkjStHPdGyzSmyKiPoqpi"
}
```

## 2. Sending the request

Once you have your header ready, you can start (loading and) using the `requests` module.\
Here is a demonstration with the `/aresconfig/users/me` endpoint:

```python
import requests
res = requests.get("https://cja.adobe.io/aresconfig/users/me",headers=myHeader)
```

## 2. Using response from the CJA API

Once you have received your response, captured in `res` in our previous example, you can usually use the `.json()` method on it to return the data returned by the CJA API.

```python
myData = res.json()
```

This should return something like:

```python
{'id': '3E3C1DAF6062BB7@techacct.adobe.com',
 'email': '41a70023-7b84-493268002c@techacct.adobe.com',
 'fullName': ''}
```

**Note** that because you are using the JWT integration, your user is the JWT application.

## Other use-cases

### Sending data with query parameters

It may be interesting to use query parameters on some requests.\
Query parameters being the elements following the question-mark in the url: `?param=value`.

When requesting the [data views for a company](https://www.adobe.io/cja-apis/docs/api/#operation/getDataViewsForCompany).\
You will use the following path : `/datagroups/dataviews`

However, the normal requests (`requests.get("https://cja.adobe.io/datagroups/dataviews",headers=myHeader)`) will only returns you the following response:

```python
{'content': [{'id': 'dv_5ee372e1b6dc700e662189c3'},
  {'id': 'dv_5f32652e4fbd280e66562fe6'},
  {'id': 'dv_60617dfab4f8593a127b53e3'}],
 'totalPages': 1,
 'totalElements': 3,
 'numberOfElements': 3,
 'number': 0,
 'firstPage': True,
 'lastPage': True,
 'sort': None,
 'size': 10}
```

This may not be very useful as you are missing some elements to recognize the data view itself.\
In the documentation, it refers to the `expansion` query parameters.\
By using `name` and `owner` in the expansion query parameter, you will be able to retrieve more interesting information.\
You can add parameters like this:

```python
parameters = {'expansion':'name,owner'}
requests.get("https://cja.adobe.io/datagroups/dataviews",headers=myHeader,params=parameters)
```

Now the response will contain additional information:

```python
{'content': [{'name': 'Web Call Data View',
   'owner': {'imsUserId': '029300AA4FB501480A0550B9@AdobeID', 'name': None},
   'id': 'dv_5ee372e1b6dc700e662189c3'},
  {'name': 'SME:CJA: All Datasets TESTING',
   'owner': {'imsUserId': '29C9247747B7EFC9992016E5@AdobeID', 'name': None},
   'id': 'dv_5f32652e4fbd280e66562fe6'},
  {'name': 'datanalyst (default)',
   'owner': {'imsUserId': 'B6400C515B6978B40A495E75@AdobeID', 'name': None},
   'id': 'dv_60617dfab4f8593a127b53e3'}],
 'totalElements': 3,
 'totalPages': 1,
 'numberOfElements': 3,
 'number': 0,
 'firstPage': True,
 'lastPage': True,
 'sort': None,
 'size': 10}
```

### Sending data in the body of the request

At some point, you may also want to update or create a component.\
In order to realize that, you will need to send data in the body of the request.\
That type of request is usually either a `POST` or `PUT` request.

**NOTE** : Usually `PUT` request completely overwrite the previous data held in the component. The new data will replace the old data.

The data send to the Customer Journey API is usually a python dictionary.\
In order to send data, it is better to transform the data sent into a stringify JSON element via the `json` module.

The type of dictionary to create a dataview is the following:

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
    "modifiedDate": "2019-08-24T14:15:22Z",
    "createdDate": "2019-08-24T14:15:22Z",
    "organization": "string",
    "modifiedBy": "string",
    "curationEnabled": true,
    "recentRecordedAccess": "2019-08-24",
    "sessionDefinition": [
    {}
    ],
    "curatedComponents": [
    {}
    ],
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

Once you have this definition established (`creationDataView` in our case), you can use it in the request.\
In the case of the [data view creation](https://www.adobe.io/cja-apis/docs/api/#operation/getDataViewsForCompany), you will use the following path: `/datagroups/daaviews`

```python
import json
resCreation = requests.post("https://cja.adobe.io/datagroups/dataviews",headers=myHeader,data=json.dumps(creationDataView))
```

The response will be looking like the following:

```python
resCreation.json()

## returns
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
    "modifiedDate": "2019-08-24T14:15:22Z",
    "createdDate": "2019-08-24T14:15:22Z",
    "organization": "string",
    "modifiedBy": "string",
    "curationEnabled": true,
    "recentRecordedAccess": "2019-08-24",
    "sessionDefinition": [
    {}
    ],
    "curatedComponents": [
    {}
    ],
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
