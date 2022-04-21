---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Calculated metrics API FAQ
description: Frequently asked questions for the Calculated metrics APIs.
---

# Calculated metrics API FAQ

Frequently asked questions for the Calculated metrics APIs.

## What are some best practices that I can follow when querying the calculatedmetrics endpoint?

Adobe recommends following these guidelines when querying the calculated metrics APIs:

* Avoid making a large, single request for all possible calculated metrics. Instead, make multiple requests limited to 1000 calculated metrics or less.
* Avoid making the same request repeatedly. Instead, make one request and cache it.
* Avoid creating duplicate calculated metrics with the same definition. Creating many calculated metrics can adversely affect product performance for your organization.
* If you're having trouble formulating the correct calculated metric API calls, consider creating one in the product UI and use the in-product debugging tools to inspect the API calls sent to Adobe servers. You can then use the body of that call to create the desired calculated metric programmatically.

## What are predefined calculated metrics, and how can I identify them?

Adobe provides several predefined calculated metric templates. Although original templates cannot be modified or deleted, copies of them can be made and then the copies can be modified. You can identify templates by the additional attribute `template: true`.
