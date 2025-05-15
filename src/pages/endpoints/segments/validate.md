---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Validate segments
description: Check to see if a segment API call is valid.
---

# Validate segments

Data views have different dimensions and metrics available. A segment that's valid in one data view might not be valid in another. You can use the `segments/validate` endpoint to check and see if a given segment is valid.

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

`POST https://cja.adobe.io/segments/validate`

An example POST body:

```json
{
    "dataId": "{DATAID}",
    "compatibility": null,
    "definition": {
        "container": {
            "func": "container",
            "pred": {
                "evt": {
                    "func": "event",
                    "name": "metrics/visits"
                },
                "func": "event-exists",
                "description": "purchase id"
            },
            "context": "hits"
        },
        "func": "segment",
        "version": [
            1,
            0,
            0
        ]
    },
    "name": "Integration Test Seg 1",
    "description": "For Integration Test Only"
}
```

An example response:

```json
{
  "valid": true,
  "validator_version": "1.1.11",
  "supported_products": [
    "data_warehouse",
    "oberon",
    "discover"
  ],
  "supported_schema": [
    "schema_data_warehouse",
    "schema_oberon"
  ],
  "supported_features": [
    "function_attr",
    "function_container",
    "function_streq"
  ]
}
```
