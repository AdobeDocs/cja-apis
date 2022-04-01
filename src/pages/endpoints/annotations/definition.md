---
title: Annotation definition data structure
description: See an example of how an annotation's data structure looks.
---

# Annotation definition data structure

The annotation definition data structure is used to communicate an annotation's structure to the API.

* **`id`**: The annotation's unique ID.
* **`name`**: The name of the annotation.
* **`description`**: The annotation's description.
* **`dateRange`**: The date range of the annotation.
* **`color`**: An enum representing the annotation's color. Supported values include `STANDARD1` through `STANDARD9`.
* **`applyToAllReports`**: A boolean that determines if the annotation applies to all report suites.
* **`scope`**: An object including the `metrics` and `filters` that the annotation uses.
* **`createdDate`**: The ISO 8601 date that the annotation was created.
* **`modifiedDate`**: The ISO 8601 date that the annotation was last modified.
* **`modifiedById`**: The ID of the user who last modified the annotation.
* **`tags`**: The tags applied to the annotation.
* **`shares`**: The shares applied to the annotation.
* **`approved`**: A boolean that determines if the annotation is approved by an admin.
* **`favorite`**: A boolean that determines if the user has this annotation favorited (starred).
* **`usageSummary`**: An object that shows where this annotation is used.
* **`owner`**: An object showing information of the user that created the annotation.
* **`imsOrgId`**: The IMS org of the annotation.
* **`dataName`**: The Data View name.
* **`rsid`**: The Data View ID.

## Example

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "dateRange": "string",
  "color": "STANDARD1",
  "applyToAllReports": true,
  "scope": {
    "metrics": [
      {
        "id": "string",
        "componentType": "string"
      }
    ],
    "filters": [
      {
        "id": "string",
        "operator": "string",
        "dimensionType": "string",
        "terms": [
          "string"
        ],
        "componentType": "string"
      }
    ]
  },
  "createdDate": "YYYY-04-01T00:18:13.651Z",
  "modifiedDate": "YYYY-04-01T00:18:13.651Z",
  "modifiedById": "string",
  "tags": [
    {
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    }
  ],
  "shares": [
    {
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    }
  ],
  "approved": true,
  "favorite": true,
  "usageSummary": {
    "additionalProp1": {},
    "additionalProp2": {},
    "additionalProp3": {}
  },
  "owner": {
    "imsUserId": "string",
    "ownerId": "string",
    "name": "string",
    "type": "imsUser"
  },
  "imsOrgId": "string",
  "dataName": "string",
  "dataId": "string"
}
```
