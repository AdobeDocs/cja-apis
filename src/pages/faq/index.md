---
title: CJA API FAQ
description: Frequently asked questions for the CJA APIs.
---

# CJA API FAQ

Frequently asked questions for the CJA APIs.

## What is the timeout for API requests?

Requests submitted through adobe.io currently time out at **60 seconds**.

## What is the rate limit for API calls?

The enforced rate limit for API calls is **12 requests every 6 seconds** per user (or approximately 120 requests per minute). When you exceed this rate limit, API calls return a `429` HTTP response code with the following response body:

```json
{"error_code":"429050","message":"Too many requests"}
```
