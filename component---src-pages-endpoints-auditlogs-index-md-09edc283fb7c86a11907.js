"use strict";(self.webpackChunksubstance_3d_automation=self.webpackChunksubstance_3d_automation||[]).push([[17],{44794:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a=t(87462),d=t(63366),r=(t(15007),t(64983)),l=t(91515),i=["components"],m={},o={_frontmatter:m},p=l.Z;function u(e){var n=e.components,t=(0,d.Z)(e,i);return(0,r.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cja-audit-logs"},"CJA Audit Logs"),(0,r.mdx)("p",null,"The Audit Log API allows you to retrieve a list of audit log records using a ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST")," method through Adobe Developer. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET")," endpoint provides a way to add filters through query string parameters. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST")," endpoint offers greater flexibility to your search criteria."),(0,r.mdx)("h2",{id:"get-audit-logs"},"Get Audit Logs"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET")," endpoint is designed for use when few or no filters are needed. If filters are included by adding query string parameters, each query string parameter filters the list of audit logs using an 'AND' condition."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/auditlogs/api/v1/auditlogs")),(0,r.mdx)("p",null,"Submitting a request to this endpoint with no query string parameters returns the last 1000 audit log records in descending order. Reference the following list of available query string parameters to filter the audit log records."),(0,r.mdx)("h3",{id:"query-string-parameters"},"Query String Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Query String"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"startDate")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"Begin date range. If this query string is set, ",(0,r.mdx)("inlineCode",{parentName:"td"},"endDate")," is required."),(0,r.mdx)("td",{parentName:"tr",align:null},"YYYY-01-01T00:00:00-07")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"endDate")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"End date range. If this query string is set, ",(0,r.mdx)("inlineCode",{parentName:"td"},"startDate")," is required."),(0,r.mdx)("td",{parentName:"tr",align:null},"YYYY-02-01T00:00:00-07")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"action")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enum"),(0,r.mdx)("td",{parentName:"tr",align:null},"The type of action a user or system can make."),(0,r.mdx)("td",{parentName:"tr",align:null},"CREATE, EDIT, DELETE, LOGIN_FAILED, LOGIN_SUCCESSFUL, API_REQUEST, LOGOUT, APPROVE, UNAPPROVE, SHARE, UNSHARE, TRANSFER;")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"component")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enum"),(0,r.mdx)("td",{parentName:"tr",align:null},"The type of component."),(0,r.mdx)("td",{parentName:"tr",align:null},"CALCULATED_METRIC, CONNECTION, DATA_GROUP, DATA_VIEW, DATE_RANGE, FILTER, MOBILE, PROJECT, REPORT, SCHEDULED_PROJECT")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"componentId")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The id of the component."),(0,r.mdx)("td",{parentName:"tr",align:null},"--")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"userType")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enum"),(0,r.mdx)("td",{parentName:"tr",align:null},"The type of user."),(0,r.mdx)("td",{parentName:"tr",align:null},"IMS, OKTA")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"userId")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The ID of the user."),(0,r.mdx)("td",{parentName:"tr",align:null},"--")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"userEmail")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The email address of the user."),(0,r.mdx)("td",{parentName:"tr",align:null},"User defined")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"description")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The description of the audit log."),(0,r.mdx)("td",{parentName:"tr",align:null},"User defined")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageSize")),(0,r.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,r.mdx)("td",{parentName:"tr",align:null},"Number of results per page. If left ",(0,r.mdx)("inlineCode",{parentName:"td"},"null"),", the default size is 100."),(0,r.mdx)("td",{parentName:"tr",align:null},"10")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageNumber")),(0,r.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,r.mdx)("td",{parentName:"tr",align:null},"Page number. The first page is indexed at 0."),(0,r.mdx)("td",{parentName:"tr",align:null},"0")))),(0,r.mdx)("h3",{id:"example--get-audit-logs-with-no-filters"},"Example : Get audit logs with no filters"),(0,r.mdx)("p",null,"Request:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/auditlogs/api/v1/auditlogs")),(0,r.mdx)("p",null,"Response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "id": "61573795d9409a491f1a9604",\n      "dateCreated": "2021-10-01T16:30:13.377+00:00",\n      "action": "CREATE",\n      "description": "Creating scheduled job: e1efbf6c-d483-408e-b033-3045e594b656",\n      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",\n      "user": {\n        "id": "EXAMPLEUSER@AdobeID",\n        "idType": "IMS",\n        "name": null,\n        "email": null\n      },\n      "component": {\n        "id": "e1efbf6c-d483-408e-b033-3045e594b656",\n        "idType": "SCHEDULED_PROJECT",\n        "name": ""\n      }\n    },\n    {\n      "id": "615735e8d9409a491f1a9603",\n      "dateCreated": "2021-10-01T16:23:04.821+00:00",\n      "action": "DELETE",\n      "description": "Deleting scheduled job: 7baaf2f8-209a-4886-9619-30f3054884ce",\n      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",\n      "user": {\n        "id": "EXAMPLEUSER@AdobeID",\n        "idType": "IMS",\n        "name": null,\n        "email": null\n      },\n      "component": {\n        "id": "7baaf2f8-209a-4886-9619-30f3054884ce",\n        "idType": "SCHEDULED_PROJECT",\n        "name": "EOW reporting"\n      }\n    }\n  ],\n  "pageable": {\n    "sort": {\n      "sorted": false,\n      "unsorted": true,\n      "empty": true\n    },\n    "offset": 0,\n    "pageNumber": 0,\n    "pageSize": 2,\n    "paged": true,\n    "unpaged": false\n  },\n  "last": false,\n  "totalElements": 1946,\n  "totalPages": 973,\n  "size": 2,\n  "number": 0,\n  "sort": {\n    "sorted": false,\n    "unsorted": true,\n    "empty": true\n  },\n  "numberOfElements": 2,\n  "first": true,\n  "empty": false\n}\n')),(0,r.mdx)("h3",{id:"example--get-audit-logs-with-filters-applied"},"Example : Get audit logs with filters applied"),(0,r.mdx)("p",null,"Request:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"https://cja.adobe.io/auditlogs/api/v1/auditlogs?startDate=2021-08-01T00%3A00%3A00-07&endDate=2021-09-30T00%3A00%3A00-07&action=CREATE&action=EDIT&action=DELETE&component=SCHEDULED_PROJECT&userType=IMS&description=job&pageSize=2\n")),(0,r.mdx)("p",null,"Response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n  "content": [\n    {\n      "id": "615559925e0e8a7da2152d86",\n      "dateCreated": "2021-09-30T06:30:42.968+00:00",\n      "action": "CREATE",\n      "description": "Creating scheduled job: ce4e1239-ab7b-471c-9d6a-14934c9d5ea4",\n      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",\n      "user": {\n        "id": "EXAMPLEUSER@AdobeID",\n        "idType": "IMS",\n        "name": null,\n        "email": null\n      },\n      "component": {\n        "id": "ce4e1239-ab7b-471c-9d6a-14934c9d5ea4",\n        "idType": "SCHEDULED_PROJECT",\n        "name": ""\n      }\n    },\n    {\n      "id": "615556df5e0e8a7da2152d85",\n      "dateCreated": "2021-09-30T06:19:11.145+00:00",\n      "action": "EDIT",\n      "description": "Updating scheduled job: 2dab1331-4844-4f82-94ff-9721ec47830c",\n      "imsOrgId": "EXAMPLEIMSORG@AdobeOrg",\n      "user": {\n        "id": "EXAMPLEUSER@AdobeID",\n        "idType": "IMS",\n        "name": null,\n        "email": null\n      },\n      "component": {\n        "id": "2dab1331-4844-4f82-94ff-9721ec47830c",\n        "idType": "SCHEDULED_PROJECT",\n        "name": ""\n      }\n    }\n  ],\n  "pageable": {\n    "sort": {\n      "sorted": false,\n      "unsorted": true,\n      "empty": true\n    },\n    "offset": 0,\n    "pageNumber": 0,\n    "pageSize": 2,\n    "paged": true,\n    "unpaged": false\n  },\n  "last": false,\n  "totalElements": 1246,\n  "totalPages": 623,\n  "size": 2,\n  "number": 0,\n  "sort": {\n    "sorted": false,\n    "unsorted": true,\n    "empty": true\n  },\n  "numberOfElements": 2,\n  "first": true,\n  "empty": false\n}\n')),(0,r.mdx)("h2",{id:"search-audit-logs"},"Search Audit Logs"),(0,r.mdx)("p",null,"If you need to retrieve a list of audit logs using 'OR' criteria, you can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST /auditlogs/search")," endpoint. Use the following lists for available Enum values for the associated key."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST https://cja.adobe.io/auditlogs/api/v1/auditlogs/search")),(0,r.mdx)("h3",{id:"fieldtype"},"fieldType"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"COMPONENT"),(0,r.mdx)("li",{parentName:"ul"},"COMPONENT_ID"),(0,r.mdx)("li",{parentName:"ul"},"USER"),(0,r.mdx)("li",{parentName:"ul"},"USER_ID"),(0,r.mdx)("li",{parentName:"ul"},"USER_EMAIL"),(0,r.mdx)("li",{parentName:"ul"},"BEGIN_DATE_RANGE"),(0,r.mdx)("li",{parentName:"ul"},"END_DATE_RANGE"),(0,r.mdx)("li",{parentName:"ul"},"ACTION"),(0,r.mdx)("li",{parentName:"ul"},"DESCRIPTION")),(0,r.mdx)("h4",{id:"notes"},"Notes"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"If 'BEGIN_DATE_RANGE' is set as a fieldType, 'END_DATE_RANGE' must also be set. These fieldTypes must use 'EQUALS' as their 'operator'.")),(0,r.mdx)("h3",{id:"operator"},"operator"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"EQUALS"),(0,r.mdx)("li",{parentName:"ul"},"NOT_EQUALS"),(0,r.mdx)("li",{parentName:"ul"},"CONTAINS"),(0,r.mdx)("li",{parentName:"ul"},"IN")),(0,r.mdx)("h3",{id:"fieldoperator"},"fieldOperator"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"AND"),(0,r.mdx)("li",{parentName:"ul"},"OR")),(0,r.mdx)("h2",{id:"post-request-body-example-1"},"POST Request Body Example 1"),(0,r.mdx)("p",null,"Show me audit logs where the component is 'FILTER' or 'CALCULATED_METRIC', the 'DESCRIPTION' contains the string 'created', AND the 'USER_EMAIL' contains EITHER 'jane' or 'john'."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "criteria": {\n    "fieldOperator": "AND",\n    "fields": [\n      {\n        "fieldType": "COMPONENT",\n        "value": [\n          "FILTER",\n          "CALCULATED_METRIC"\n        ],\n        "operator": "IN"\n      },\n      {\n        "fieldType": "DESCRIPTION",\n        "value": [\n          "created"\n        ],\n        "operator": "CONTAINS"\n      }\n    ],\n    "subCriteriaOperator": "AND",\n    "subCriteria": {\n      "fieldOperator": "OR",\n      "fields": [\n        {\n          "fieldType": "USER_EMAIL",\n          "value": [\n            "jane"\n          ],\n          "operator": "CONTAINS"\n        },\n        {\n          "fieldType": "USER_EMAIL",\n          "value": [\n            "john"\n          ],\n          "operator": "CONTAINS"\n        }\n      ],\n      "subCriteriaOperator": null,\n      "subCriteria": null\n    }\n  },\n  "pageSize": 100,\n  "pageNumber": 0\n}\n')),(0,r.mdx)("h2",{id:"post-request-body-example-2"},"POST Request Body Example 2"),(0,r.mdx)("p",null,"Show me audit logs between June 1st and October 1st where the 'ACTION' was either 'CREATE' OR 'EDIT' OR the 'DESCRIPTION' contained the string 'job' or 'test'. The response only includes logs between those dates but the other criteria is filtered using 'OR' logic."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "criteria": {\n    "fieldOperator": "AND",\n    "fields": [\n      {\n        "fieldType": "BEGIN_DATE_RANGE",\n        "value": [\n          "2021-06-01T00:00:00-07"\n        ],\n        "operator": "EQUALS"\n      },\n      {\n        "fieldType": "END_DATE_RANGE",\n        "value": [\n          "2021-10-01T00:00:00-07"\n        ],\n        "operator": "EQUALS"\n      }\n    ],\n    "subCriteriaOperator": "AND",\n    "subCriteria": {\n      "fieldOperator": "OR",\n      "fields": [\n        {\n          "fieldType": "ACTION",\n          "value": [\n            "CREATE",\n            "EDIT"\n          ],\n          "operator": "IN"\n        },\n          {\n          "fieldType": "DESCRIPTION",\n          "value": [\n            "job",\n            "test"\n          ],\n          "operator": "CONTAINS"\n        }\n      ],\n      "subCriteriaOperator": null,\n      "subCriteria": null\n    }\n  },\n  "pageSize": 10,\n  "pageNumber": 0\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-auditlogs-index-md-09edc283fb7c86a11907.js.map