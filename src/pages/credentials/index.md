---
title: Tips for calling endpoints on the CJA API Reference 
description: Manage CJA connections through APIs
---

# Tips for calling endpoints on the CJA API Reference
Make interactive calls on the CJA API Reference by obtaining a credential and using the **Try it** feature.

Use the **Try it** feature to make calls with endpoints on the [CJA API Reference](https://developer.adobe.com/cja-apis/docs/api/) and view actual responses. The easiest way to use the **Try it** feature is to first get authenticated using the **Get credentials** option at the top of the API Reference page.

## Get credentials
To obtain your credentials for the **Try it** feature, follow these steps:

1. Click the **Sign in** button under the **Get credentials** heading at the top of the API reference page and then sign into your organizaion.
1. Type the name of the credential you want to create in the appropriate field.
1. If you agree to the terms of use, check the box. To get your credential, you must agree to the terms.

![return image](./images/get-start.png)

4. Click **Create credential**. Once your credential is created, click **Generate and copy token**. Once the token is generated, click the **Copy** button next to the token value. 

![return image](./images/get-name2.png)

## Use the Try it feature
Once the credential is ready, you can use it for calling CJA APIs, as described below:

1. Select the API service and endpoint you want to use from the left-side navigation.
1. Click the **Try it** button on the right side of the screen, next to the name of the endpoint. 
1. For the Authorization header, type the word `Bearer` and leave a space after the word. Paste the token value into the field after the space.
1. For the `x-api-key` header, copy the **Client ID (x-api-key)** value under **Credential details** at the top of the page. Paste the value into the header field. 
1. For the `x-gw-ims-org-id` header, copy the **Organization ID** value under **Credential details** at the top of the page. Paste the value into the header field.
1. Supply any other parameters required for interacting with the endpoint.  
1. Click **Send** and view the response.

![return image](./images/get-header.png)

### Return visits to the CJA API Reference
After you have created a credential, it will be available to use when you return to the CJA API Reference page for subsequent visits, as shown below:

![return image](./images/get-return.png)

## Troubleshooting
The following information provides troubleshooting tips for common status code errors:

* **400**: Bad request. The request is missing key information or has incorrect syntax. Make sure the required paramters are specified for the endpoint.
* **401**: Authentication failed. Make sure that you have included the word `Bearer` in the **Authorization** field with a space between the word and your pasted value. 
* **403**: Forbidden. Check that you have proper permissions to access the data for your organization. If an error indicates that your region is missing, make sure that your admin has added the **Adobe Experience Platform** product profile to your account. Also, check that you have correctly entered the value for the `x-gw-ims-org-id` header.
  
For other possible errors, see the [Platform FAQ and troubleshooting guide](https://experienceleague.adobe.com/en/docs/experience-platform/landing/troubleshooting).
