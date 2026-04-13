---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: CJA Debugger
description: Use the Analysis Workspace debugger to view API calls
---

# View API calls in the Analysis Workspace Debugger

Analysis Workspace makes calls to the reporting API endpoint to retrieve data. Adobe offers an in-product debugger (Oberon) that lets you see the API calls while in any Workspace project. You can use these call structures as a template for making similar calls with CJA API endpoints programmatically.

## Enable the debugger

Before using the debugger, you must enable it in the UI.

1. Log in to your Customer Journey Analtyics organization.
2. Create a new project, or open an existing project.
3. Navigate to **Help** > **Enable debugger**.
4. Click **OK** in the popup modal.

## Use the debugger

To view API calls in the UI:

1. Click on the [Bug] icon that appears in the top right of each visualization. Select the visualization option in the pop up, such as **Freeform Table** or **Sparkline**.
2. Select the timestamp option relevant to the call you would like to view. The Oberon UI will then appear. 
3. To view call details, such as server processing time, note the summary table at the top of the UI.
4. To view the JSON request and response for the visualization, scroll down to the **JSON** section of the screen.
5. To copy the request or response, hover over the relevant JSON section and click the **Copy to clipboard** button.

## More information

For general information on the Customer Journey Analytics API Report endpoint, see the [Reporting API Overview](index.md). See the [CJA API reference](https://developer.adobe.com/cja-apis/docs/api) for complete data models of the CJA APIs.

