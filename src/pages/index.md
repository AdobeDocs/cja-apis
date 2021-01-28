---
title: Customer Journey Analytics APIs
description: The CJA API overview page.
---

<Hero slots="image, heading, text" background="rgb(64, 34, 138)"/>

![Hero image](./analytics-hero.png) 


# Customer Journey Analytics APIs

The Customer Journey Analytics APIs offer limitless ways to integrate your most important customer data into key business processes.

<Resources slots="heading, links"/>

#### Resources

* [Quick start guide](getting-started/index.md)
* [Github repository](https://github.com/AdobeDocs/cja-apis)

## Overview

The Customer Journey Analytics APIs allow you to directly call Adobe's servers to perform almost any action that you can perform in the user interface. Examples include the creation of connections and data views, retrieval of reports, and the creation of filters or calculated metrics. This documentation provides instructions on how to call Adobe's endpoints to return the desired data. 

This user guide assumes that you have an understanding of Customer Journey Analytics and Adobe Experience Platform. See the respective documentation repositories for more information on [Customer Journey Analytics](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-landing.html) or [Adobe Experience Platform](https://experienceleague.adobe.com/docs/experience-platform/landing/home.html).

If you are looking for the API around traditional Adobe Analytics, see the [Analytics 2.0 API documentation](https://www.adobe.io/apis/experiencecloud/analytics/docs.html).

This user guide adheres to Adobe's [Code of Conduct](/CODE_OF_CONDUCT.md). [Contributions](/.github/CONTRIBUTING.md) are encouraged and appreciated.

## Endpoints

Once you have successfully authenticated, you can send requests to any of the following endpoints:

<DiscoverBlock width="100%" slots="heading, link, text"/>

### Get Started

[Getting started](getting-started/index.md)
    
Get started with the Adobe Analytics APIs.

<DiscoverBlock slots="heading, link, text"/> 

### Guides

[Calculated metrics API](calculatedmetrics/index.md) 
     
Retrieve, update, or create calculated metrics.

<DiscoverBlock slots="link, text"/>

[Filters API](filters/index.md) 

Retrieve, update, or create filters.

<DiscoverBlock slots="link, text"/>

[Reporting API](reporting/index.md)

Retrieve data from a data view.

<DiscoverBlock slots="link, text"/>

[Migrating from 1.4 to 2.0](guides/migrating/)

For help migrating from the 1.4 versions of the Analytics API to the newer and more capable /reports API.   

<DiscoverBlock width="100%" slots="heading, link, text"/>

### API References

[Try the API](api/) 

Try the Analytics API with Swagger UI. Explore, make calls, with full endpoint descriptions.

## Contributing 

We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions 
or deletions for this documentation, check out the source from [this github repo](https://github.com/adobe/gatsby-theme-spectrum-example), and submit a pull 
request with your contribution. For more information, refer to the [contributing page](support/contribute/).

## API Requests & Rate Limits

The timeout for API requests through adobe.io is currently *60 seconds*.

The default rate limit for an Adobe Analytics Company is *120 requests per minute*. (The limit is enforced as *12 requests every 6 seconds*).
When rate limiting is being enforced you will get `429` HTTP response codes with the following response body: `{"error_code":"429050","message":"Too many requests"}`    