---
title: Dimensions APIs
description: Retrieve dimensions information using the API.
---

# Dimensions API

The CJA Dimensions APIs allow you to retrieve dimensions programmatically through Adobe Developer. These APIs use the same data and methods that Adobe uses inside the product UI.

## Retrieve multiple dimensions

Retrieve a list of dimensions that the user can access. See [Dimensions parameters](parameters.md) for query strings that you can attach to this API call.

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

`GET https://cja.adobe.io/annotations/{ID}`

For example, find details around the dimensions with an ID of `62437d`, including the name, description, date range, and color:

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

