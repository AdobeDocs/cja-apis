---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Validate filters
description: Check to see if a filter API call is valid.
---

# Validate filters

Data views have different dimensions and metrics available. A filter that's valid in one data view might not be valid in another. You can use the `filters/validate` endpoint to check and see if a given filter is valid.

`POST https://cja.adobe.io/filters/validate`

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
