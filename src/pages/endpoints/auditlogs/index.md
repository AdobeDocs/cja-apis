---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Audit Logs
description: Get a list of audit logs using the API.
---

# CJA Audit Logs

The Audit Log API allows you to retrieve a list of audit log records using a `GET` or `POST` method through Adobe I/O. The `GET` endpoint provides a way to add filters through query string parameters. The `POST` endpoint offers greater flexibility to your search criteria.

## Get Audit Logs

The `GET` endpoint is designed for use when few or no filters are needed. If filters are included by adding query string parameters, each query string parameter filters the list of audit logs using an 'AND' condition.

`GET https://cja.adobe.io/auditlogs/api/v1/auditlogs`

Submitting a request to this endpoint with no query string parameters returns the last 1000 audit log records in descending order. Reference the following list of available query string parameters to filter the audit log records.


### Query String Parameters

| Query String | Type | Description | Possible Values |
| --- | --- | ---------- | ----- |
| `startDate` | String | Begin date range. If this query string is set, `endDate` is required. | YYYY-01-01T00:00:00-07 |
| `endDate` | String | End date range. If this query string is set, `startDate` is required. | YYYY-02-01T00:00:00-07 |
| `action` | Enum | The type of action a user or system can make. | CREATE, EDIT, DELETE, LOGIN_FAILED, LOGIN_SUCCESSFUL, API_REQUEST |
| `component` | Enum | The type of component. | CALCULATED_METRIC, CONNECTION, DATA_GROUP, DATA_VIEW, DATE_RANGE, FILTER, MOBILE, PROJECT, REPORT, SCHEDULED_PROJECT |
| `componentId` | String | The id of the component. | -- |
| `userType` | Enum | The type of user. | IMS, OKTA |
| `userId` | String | The ID of the user. | -- |
| `userEmail` | String | The email address of the user. | User defined |
| `description` | String | The description of the audit log. | User defined |
| `pageSize` | Integer | Number of results per page. If left `null`, the default size is 100. | 10 |
| `pageNumber` | Integer | Page number. The first page is indexed at 0. | 0 |

### Example : Get audit logs with no filters

Request:

`GET https://cja.adobe.io/auditlogs/api/v1/auditlogs`

Response:

```
{
  "content": [
    {
      "id": "61573795d9409a491f1a9604",
      "dateCreated": "2021-10-01T16:30:13.377+00:00",
      "action": "CREATE",
      "description": "Creating scheduled job: e1efbf6c-d483-408e-b033-3045e594b656",
      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",
      "user": {
        "id": "EXAMPLEUSER@AdobeID",
        "idType": "IMS",
        "name": null,
        "email": null
      },
      "component": {
        "id": "e1efbf6c-d483-408e-b033-3045e594b656",
        "idType": "SCHEDULED_PROJECT",
        "name": ""
      }
    },
    {
      "id": "615735e8d9409a491f1a9603",
      "dateCreated": "2021-10-01T16:23:04.821+00:00",
      "action": "DELETE",
      "description": "Deleting scheduled job: 7baaf2f8-209a-4886-9619-30f3054884ce",
      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",
      "user": {
        "id": "EXAMPLEUSER@AdobeID",
        "idType": "IMS",
        "name": null,
        "email": null
      },
      "component": {
        "id": "7baaf2f8-209a-4886-9619-30f3054884ce",
        "idType": "SCHEDULED_PROJECT",
        "name": "EOW reporting"
      }
    }
  ],
  "pageable": {
    "sort": {
      "sorted": false,
      "unsorted": true,
      "empty": true
    },
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 2,
    "paged": true,
    "unpaged": false
  },
  "last": false,
  "totalElements": 1946,
  "totalPages": 973,
  "size": 2,
  "number": 0,
  "sort": {
    "sorted": false,
    "unsorted": true,
    "empty": true
  },
  "numberOfElements": 2,
  "first": true,
  "empty": false
}
```

### Example : Get audit logs with filters applied

Request:

```
https://cja.adobe.io/auditlogs/api/v1/auditlogs?startDate=2021-08-01T00%3A00%3A00-07&endDate=2021-09-30T00%3A00%3A00-07&action=CREATE&action=EDIT&action=DELETE&component=SCHEDULED_PROJECT&userType=IMS&description=job&pageSize=2
```

Response:

```
{
  "content": [
    {
      "id": "615559925e0e8a7da2152d86",
      "dateCreated": "2021-09-30T06:30:42.968+00:00",
      "action": "CREATE",
      "description": "Creating scheduled job: ce4e1239-ab7b-471c-9d6a-14934c9d5ea4",
      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",
      "user": {
        "id": "EXAMPLEUSER@AdobeID",
        "idType": "IMS",
        "name": null,
        "email": null
      },
      "component": {
        "id": "ce4e1239-ab7b-471c-9d6a-14934c9d5ea4",
        "idType": "SCHEDULED_PROJECT",
        "name": ""
      }
    },
    {
      "id": "615556df5e0e8a7da2152d85",
      "dateCreated": "2021-09-30T06:19:11.145+00:00",
      "action": "EDIT",
      "description": "Updating scheduled job: 2dab1331-4844-4f82-94ff-9721ec47830c",
      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",
      "user": {
        "id": "EXAMPLEUSER@AdobeID",
        "idType": "IMS",
        "name": null,
        "email": null
      },
      "component": {
        "id": "2dab1331-4844-4f82-94ff-9721ec47830c",
        "idType": "SCHEDULED_PROJECT",
        "name": ""
      }
    }
  ],
  "pageable": {
    "sort": {
      "sorted": false,
      "unsorted": true,
      "empty": true
    },
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 2,
    "paged": true,
    "unpaged": false
  },
  "last": false,
  "totalElements": 1246,
  "totalPages": 623,
  "size": 2,
  "number": 0,
  "sort": {
    "sorted": false,
    "unsorted": true,
    "empty": true
  },
  "numberOfElements": 2,
  "first": true,
  "empty": false
}
```

## Search Audit Logs

If you need to retrieve a list of audit logs using 'OR' criteria, you can use the `POST /auditlogs/search` endpoint. Use the following lists for available Enum values for the associated key.

`POST https://cja.adobe.io/auditlogs/api/v1/auditlogs/search`


### fieldType

  * COMPONENT
  * COMPONENT_ID
  * USER
  * USER_ID
  * USER_EMAIL
  * BEGIN_DATE_RANGE
  * END_DATE_RANGE
  * ACTION
  * DESCRIPTION

#### Notes

_If 'BEGIN_DATE_RANGE' is set as a fieldType, 'END_DATE_RANGE' must also be set. These fieldTypes must use 'EQUALS' as their 'operator'._

### operator

* EQUALS
* NOT_EQUALS
* CONTAINS
* IN

### fieldOperator

* AND
* OR


## POST Request Body Example 1

Show me audit logs where the component is 'FILTER' or 'CALCULATED_METRIC', the 'DESCRIPTION' contains the string 'created', AND the 'USER_EMAIL' contains EITHER 'jane' or 'john'.

```
{
  "criteria": {
    "fieldOperator": "AND",
    "fields": [
      {
        "fieldType": "COMPONENT",
        "value": [
          "FILTER",
          "CALCULATED_METRIC"
        ],
        "operator": "IN"
      },
      {
        "fieldType": "DESCRIPTION",
        "value": [
          "created"
        ],
        "operator": "CONTAINS"
      }
    ],
    "subCriteriaOperator": "AND",
    "subCriteria": {
      "fieldOperator": "OR",
      "fields": [
        {
          "fieldType": "USER_EMAIL",
          "value": [
            "jane"
          ],
          "operator": "CONTAINS"
        },
        {
          "fieldType": "USER_EMAIL",
          "value": [
            "john"
          ],
          "operator": "CONTAINS"
        }
      ],
      "subCriteriaOperator": null,
      "subCriteria": null
    }
  },
  "pageSize": 100,
  "pageNumber": 0
}
```

## POST Request Body Example 2

Show me audit logs between June 1st and October 1st where the 'ACTION' was either 'CREATE' OR 'EDIT' OR the 'DESCRIPTION' contained the string 'job' or 'test'. The response only includes logs between those dates but the other criteria is filtered using 'OR' logic.

```
{
  "criteria": {
    "fieldOperator": "AND",
    "fields": [
      {
        "fieldType": "BEGIN_DATE_RANGE",
        "value": [
          "2021-06-01T00:00:00-07"
        ],
        "operator": "EQUALS"
      },
      {
        "fieldType": "END_DATE_RANGE",
        "value": [
          "2021-10-01T00:00:00-07"
        ],
        "operator": "EQUALS"
      }
    ],
    "subCriteriaOperator": "AND",
    "subCriteria": {
      "fieldOperator": "OR",
      "fields": [
        {
          "fieldType": "ACTION",
          "value": [
            "CREATE",
            "EDIT"
          ],
          "operator": "IN"
        },
          {
          "fieldType": "DESCRIPTION",
          "value": [
            "job",
            "test"
          ],
          "operator": "CONTAINS"
        }
      ],
      "subCriteriaOperator": null,
      "subCriteria": null
    }
  },
  "pageSize": 10,
  "pageNumber": 0
}
```
