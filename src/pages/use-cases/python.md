---
title: Use CJA API with Python
description: Get started making CJA API calls using Python.
---

## Use Cases for CJA API in Python

[python](https://www.python.org/) is a programming language that is often referred as easy to learn and quite powerful. It has several libraries that enable you to create API call. In the following example, we will be using the [`requests`](https://pypi.org/project/requests/) library in order to demonstrate the Customer Journey Analytics API capabilities.

## Prerequisites

Make sure that you meet all requirements on the [Getting started](../getting-started/index.md) page, including:

* Your user account belonging to the correct product profile in the [Adobe Admin Console](https://adminconsole.adobe.com)
* An API client created in the [Adobe I/O Console](https://console.adobe.io)
* You have generated a JWT (JSON Web Token), via the Service Account Integration or by your own script.[See documentation](https://www.adobe.io/cja-apis/docs/getting-started/)

## 1. Preparing your header and the requests module

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
    "authorization" : "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LTEuY2VyIn0.eyJpZCI6IjE2MTcwOTc1MDI3ODNfNTZmYzdjY2EtNzZhMi0OTcyLWI1MmUtMWQ4ZGZhNGYzMzg4X3VlMSIsImNsaWVudF9pZCI6IjgyOTI4ZDhhNzI5YTRkMTY5MTNhOGRhODQ5NjU2ODRmIiwidXNlcl9pZCI6IjNFM0MxREFGNjA2MkJCN0UwQTQ5NUNGRUB0ZWNoYWNjdC5hZG9iZS5jb20iLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiIzRTNDMURBRjYwNjJCQjdFMEE0OTVDRkVAdGVjaGFjY3QuYWRvYmUuY29tIiwiZmciOiJWSjdLU1EyW0ZMRzVOSDRHRzRKTFJHUUFVND09PT09PSIsIm1vaSI6Ijg2Y2VkMThkIiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwiY3JlYXRlZF9hdCI6IjE2MTcwOTc1MDI3ODMiLCJzY29wZSI6InJlYWRfcGMuZG1hX3RhcnRhbixyZWFkX3BjLmFjcCxhZGRpdG9uYWxfaW5mbyxvcGVuaWQsQWRvYmVJRCxyZWFkX3BjIn0.KY6uzV0UrZq0Jbw3Rx60AeAXRalkjStHPdGyzSmyKiPoqpiBXqfTwZdItIAeAUojMLlpfi0vfX3PZShyLbDPR38qh8ltRfC4cgqSdhcWuXlwYaDGT-2MZ3EquBECuzKL0fYlOVoV_BrRqEoUQeMRtt52Uej5LboXxE0iRgA5u0AanambOqM7rQcEfaaavw3xdtPElEoK786qoKHMrJ_Kr9QwB-a5B7s5fuY10tecVSW29PXv48mxLyaSv3Bs0QJlj-PqV4GK7ki0F8-UzKtS5RHyuyuVTvXT_OMwOr4j6Z-x396evBQYShtb5DyXsiLALIKlzHzAA6e0-EnSvDLTMA"
}
```

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

```
```
