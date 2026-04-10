---
title: Reporting API
description: Create and retrieve reporting data programmatically
---

# Reporting API

Use the Customer Journey Analytics Reporting API to create and retrieve reporting data programmatically.

The Customer Journey Analytics Reporting API operates on Adobe Experience Platform datasets combined through CJA connections and dataviews. Because CJA reporting uses the Experience Data Model (XDM), you can report on any XDM field as a metric or dimension (strings, numbers, arrays, objects, etc.). The Reporting API uses the same data and methods that Adobe uses inside the product UI. See [Reports](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-workspace/reports/reports-menu.html?) for more information.This provides the following advantages:

- Unlimited variables, events, dimensions, and metrics
- Unlimited unique values
- Alterable historical data
- Cross‑report‑suite/cross‑dataset analysis

## Responses with dataview-level logic

Your report request is bound to a dataview over AEP datasets, so the same API surface can query web events, call‑center events, CRM records, in‑store purchases, etc., all stitched together. Also, this allows the inclusion of session definitions, attribution rules, and inclusion or exclusion of datasets with a report request. Transformation logic, such as derived fields, can be defined in the dataview and applied dynamically to reports. Changing derived fields, filters, or session rules in the same API request returns updated data by using a different dataview--all without re-ingesting data.

## Cross‑Channel, cross‑dataset journeys in a single query

Because CJA connects multiple datasets in a single connection and exposes them through a dataview, the CJA Reporting API can return metrics that are:

- Joined across channels (e.g., email to web to call‑center to in‑store)
- Stitched at the person level via AEP Identity Service
- Enriched with lookup and profile datasets (e.g., CRM attributes, account data)

## Multi-column sorting

Reporting API requests allow you to sort multiple columns of both dimensions and metrics. You can also mix dimensions and metrics in the same sort definition, or sort array. Each sort object is referenced by `componentType` and `columnId`. For the `ascending` parameter, specify a boolean `true` to sort by ascending values and `false` to sort by descending values. The example request fragment below shows two dimensions--one to be sorted in ascending order and another to be sorted in descending order.

```json

"settings": {
    "countRepeatInstances": true,
    "includeAnnotations": true,
    "limit": 50,
    "page": 0,
    "sort": [
        {
            "componentType": "dimension",
            "columnId": "a111ef1",
            "ascending": true
        },
        {
            "componentType": "dimension",
            "columnId": "a222kl2",
            "ascending": false
        }
    ]
}

```

## Reporting API best practices

- Cache report results when possible to reduce API calls
- Use pagination for large result sets
- Implement retry logic with exponential backoff for rate-limited requests
- Use appropriate date ranges to avoid large data requests

For more information on CJA Reports APIs, see the [CJA API reference](https://developer.adobe.com/cja-apis/docs/api/).

## Rate limiting

The Reporting API enforces rate limits to ensure optimal performance:

- **Requests per minute**: 60 requests per minute per organization
- **Concurrent requests**: Maximum 6 concurrent requests per organization

## Report execution limits

- **Data range**: Maximum 18 months of data per request
- **Dimension items**: Maximum 1000 dimension items per request
- **Metrics**: Maximum 20 metrics per report
- **Execution time**: Report execution timeout is 300 seconds

Refer to the following Reporting API guides for additional instruction:

- [Top Items Report](topitems.md)
- [Create dataview reports](dataview.md)
- [Multiple dimension reporting](multidim.md)
