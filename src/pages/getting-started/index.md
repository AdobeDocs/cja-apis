---
title: Getting started with the CJA API
description: Learn the first steps that you can take to start using the CJA API.
---

# Getting started with the CJA API

There are several steps to take before using the CJA APIs.

* **Permissions**: Configure permissions for the developer in the Adobe Admin Console.
* **API Client**: Create a client configuration in the Adobe I/O Console.
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
2. Check the organization name in the top right to make sure you are logged in to the correct company.
3. Click **Create new project**.
4. Click **Add API**.
5. Click **Customer Journey Analytics**, then click **Next**.

At this point, you decide how you want to authenticate with the API.

## Authentication

<!-- Adobe offers two primary methods to authenticate: -->
Adobe currently only offers OAuth to authenticate with the API. Support for JWT authentication is planned.

* **OAuth**: See [OAuth connection](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/OAuthIntegration.md) in the Adobe I/O Authentication user guide. This method is typically easier to set up, but tokens expire after 24 hours.
<!-- * **JWT**: See [JSON web token](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWTCertificate.md) in the Adobe I/O Authentication user guide. This method requires more complex setup, but allows a workflow to generate your own access tokens to authenticate with Adobe. -->

Choose your desired authentication method, and complete the remaining steps to complete the API client wizard.
