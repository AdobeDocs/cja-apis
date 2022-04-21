---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Use CJA with cURL
description: Get started making API calls within the command line tool.
---

# Use CJA with cURL

[cURL](https://curl.se/) is a command line tool that allows you to transfer data across various network protocols. You can use cURL to submit API calls to Adobe.

## Prerequisites

Make sure that you meet all requirements on the [Getting started](../getting-started/index.md) page, including:

* Your user account belonging to the correct product profile in the [Adobe Admin Console](https://adminconsole.adobe.com)
* An API client created in the [Adobe Developer Console](https://console.adobe.io)

## Send a simple API call using cURL

1. Open your operating system's command prompt or terminal.
1. Type `curl -V` then press enter. Make sure that `-V` is capitalized.
1. If you get cURL's version number and list of supported features, you have the tool installed. If you get an unrecognized command, [install cURL](https://curl.se/download.html).
1. Adobe requires three headers for API calls. You can use the `-H` option to include them.
   * **x-api-key**: The Client ID found in the Adobe Developer Console.
   * **x-gw-ims-org-id**: The Organization ID found in the Adobe Developer Console.
   * **access_token**: The access token generated from the JWT.
1. Formulate the API call to Adobe with the required headers and an API call retrieving basic user information:

   ```sh
   curl -X GET -H "x-api-key: {CLIENT_ID}" -H "x-gw-ims-org-id: {ORGANIZTION_ID}" -H "authorization: Bearer {ACCESS_TOKEN}" "https://cja.adobe.io/aresconfig/users/me" 
   ```

1. Adobe's servers return a JSON object containing information around the technical account.

You can now use the [API Reference](../api.md) to send API calls to the CJA API.
