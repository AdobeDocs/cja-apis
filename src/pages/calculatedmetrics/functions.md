---
title: Calculated metric functions
description: Call or reference calculated metric functions in API requests.
---

# Calculated metric functions

Calculated metrics can use mathematic functions in combination with metrics available in a data view. You can call the `/calculatedmetrics/functions` endpoint to view data on available functions.


## Retrieve a list of available functions

You can retrieve all functions by making a call to the following endpoint:

`GET https://cja.adobe.io/calculatedmetrics/functions`

## Retrieve details on a specific function:

If you want information on a single function, append the ID to the endpoint URL:

`GET https://cja.adobe.io/calculatedmetrics/functions/{id}`
