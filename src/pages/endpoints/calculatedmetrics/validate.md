---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Validate calculated metrics
description: Check to see if a calculated metric API call is valid.
---

# Validate calculated metrics

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

Data views have different dimensions and metrics available. A calculated metric that's valid in one data view might not be valid in another. You can use the `calculatedmetrics/validate` endpoint to check and see if a given calculated metric is valid.

`POST https://cja.adobe.io/calculatedmetrics/validate`

An example POST body:

```json
{
    "name": "Integration Test 1",
    "description": "Integration Test 1 Description",
    "dataId": "{DATAID}",
    "type": "percent",
    "definition": {
        "func": "calc-metric",
        "formula": {
            "func": "divide",
            "col1": {
                "func": "metric",
                "name": "metrics\/visits"
            },
            "col2": {
                "func": "metric",
                "name": "metrics\/visitors"
            }
        },
        "version": [
            1,
            0,
            0
        ]
    }
}
```

An example response:

```json
{
  "valid": true,
  "identityMetrics": [ { "identity": "metrics/visits" }, { "identity": "metrics/visitors" } ],
  "functions": [ "divide" ],
  "validator_version": "1.0.0",
  "supported_products": [ "oberon", "frag" ],
  "supported_schema": [ "schema_oberon", "schema_frag" ]
}
```
