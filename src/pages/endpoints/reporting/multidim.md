---
title: Multiple dimension enhanced reporting
description: Use the CJA Reporting API with multiple dimensions and multi-column sorting
---

# Multiple dimension enahnced reporting

This guide describes key report features available with the Customer Journey Analytics Report API, including:

- Multiple dimensions in a single request
- Dimension-level search
- Multi-column sorting


## Multiple dimensions in a single request

With the Custonmer Journey Analtyics Report API, you can request data across multiple dimensions simultaneously in a single report request. This enhancement changes how reports are structured and queried. Rather than retrieving one dimension at a time and nesting [breakdowns](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/breakdowns/) vertically to analyze combinations, you can specify up to **five** dimensions in a single request and receive results as an array of horizontally-concatenated dimension objects. Multiple dimension reporting is designed to solve a common reporting challenge: understanding which *combinations* of dimension values drive outcomes, without requiring multiple API calls, post-processing, or manual joins. For more information on this capability and how each array of dimension items behaves as a concatenated list of dimensions, see [Multiple Dimension Columns](https://experienceleague.adobe.com/en/docs/analytics-platform/using/cja-workspace/visualizations/freeform-table/freeform-table-multidimensions) feature the UI, and

### Multiple dimensions array


The POST Report endpoint accepts a `dimensions` array that includes both the name of a dimension and a user-defined identifier called `dimensionColumnId`. The array structure provides the foundation for multi-dimension reporting, dimension-level search, and advanced sorting.


#### Dimension column IDs

Every dimension (and metric) can be assigned a column ID. These IDs can have the following characteristics:

- Be specified by the user 
- Be any unique value (UUID, number, string)
- Be used to map both sorting rules and search rules

If the user does not provide column IDs, the system will auto‑assign positional IDs. Explicit IDs are recommended as a best practice.

## Dimension-level search

With dimension-level search, you can search within specific dimensions instead of globally across an entire report. This works with the following conditions:

- Each dimension includes a search object
- Search objects contain a `clause` parameter
- The `clause` parameter is provided a text match with the word `CONTAINS`.



