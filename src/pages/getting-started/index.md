---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Getting started with the CJA API
description: Learn the first steps that you can take to start using the CJA API.
---

# Getting started with the CJA API

Before using the CJA APIs, follow these steps:

* **Permissions**: Configure permissions for the developer in the Adobe Admin Console.
* **API Client**: Create a client configuration in the Adobe Developer Console.
* **Authentication**: Obtain the necessary credentials to send data to Adobe.

## Permissions

Before starting to use the CJA API, you must make sure that your account has the correct permissions to send requests. Even if you successfully authenticate with an Adobe ID, you cannot make requests to Adobe unless your account contains the correct organization permissions.

Give a developer correct API permissions as a product profile admin:

1. Navigate to [adminconsole.adobe.com](https://adminconsole.adobe.com).
2. Check the organization name in the top right to make sure that you are logged in to the correct company.
3. Click **Products**, then click **Customer Journey Analytics**.
4. Select the desired product profile, or create a new product profile.
5. Under the Permissions tab, assign the desired permissions to the product profile.
6. Once the desired permissions are set, click the Developers tab.
7. Click **Add Developer**, and enter the desired user's name or email address.
8. Click **Save**.

See [Managing developers](https://helpx.adobe.com/enterprise/using/manage-developers.html) in the Enterprise Admin user guide for more information.

## API Client

Once you are a developer for a CJA product profile, you can create an API client in the Adobe Developer Console.

1. Navigate to [console.adobe.io](https://console.adobe.io).
1. Check the organization name in the top right to make sure that you are logged in to the correct company.
1. Click **Create new project**.
1. Click **Add API**.
1. Click **Customer Journey Analytics**, then click **Next**.
1. Click **Generate Keypair**.
   
   A `config.zip` file is automatically downloaded to your local machine. Keep this config folder in a secure location, as it contains your only copy of your private key. See [JSON web token](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWTCertificate.md) in the Adobe Developer Authentication user guide for more information.

1. Click **Next**.
1. Select the desired product profiles for the service account. Make sure that it contains the right permissions to access the API. Click **Save configured API**.
1. Back on the project's home page, click **Add to project** > **API**.
1. Click **Adobe Experience Platform**, then click **Next**.
1. You already generated a keypair when creating the Adobe Analytics API, so you do not need to create another. Click **Next**.
1. Select the desired product profiles for the service account. Make sure that it contains the right permissions to access the API. Click **Save configured API**.

## Authentication

Adobe offers two primary methods to authenticate:

* **OAuth User**: Use your own account to authenticate with the API. See [OAuth User Authentication](https://developer.adobe.com/developer-console/docs/guides/authentication/UserAuthentication/) in the Adobe Developer Authentication user guide.
  
* **OAuth Server to Server**: Use a server-to-server account to authenticate with the API. See [OAuth Server to Server Authentication](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/) in the Adobe Developer Authentication user guide.

JWT authentication is deprecated and will only be supported until January 1, 2025. Current integrations using JWT will need to [migrate](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/) to OAuth Server to Server prior to January 1, 2025. 

Choose your desired authentication method, and complete any remaining steps to finish the API client wizard, as described in the previous section.

To refresh authentication tokens, see the [Authentication Guide](https://developer.adobe.com/developer-console/docs/guides/authentication/UserAuthentication/IMS/#refreshing-access-tokens).



