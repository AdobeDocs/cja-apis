"use strict";(self.webpackChunkcja_apis=self.webpackChunkcja_apis||[]).push([[3210],{21740:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return h}});var a=n(87462),r=n(63366),s=(n(15007),n(64983)),o=n(91515),d=["components"],m={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",t)}},l=p("InlineAlert"),i=p("CodeBlock"),u={_frontmatter:m},x=o.Z;function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,s.mdx)(x,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"asset-management"},"Asset Management"),(0,s.mdx)("p",null,"The Customer Journay Analysis (CJA) asset management API provides methods for transferring ownership of CJA assets."),(0,s.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The user of these endpoints must be an Admin in the Adobe Admin Console. For more information regarding Adobe Admin Console user roles, see the ",(0,s.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/enterprise/using/users.html"},"Adobe Admin Console")," documentation."),(0,s.mdx)("p",null,"The endpoints described in this guide are routed through ",(0,s.mdx)("inlineCode",{parentName:"p"},"analytics.adobe.io"),". To use them, you must first create a client with access to the Adobe Developer Console. For more information, see ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/cja-apis/docs/getting-started/"},"Getting started with the CJA API"),"."),(0,s.mdx)("p",null,"This guide includes instructions for the following:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Retrieving the type and number of CJA assets assigned to a user in a specified organization with the ",(0,s.mdx)("strong",{parentName:"li"},"GET user asset count")," endpoint."),(0,s.mdx)("li",{parentName:"ul"},"Transfering the ownership of those CJA assets to another user with the ",(0,s.mdx)("strong",{parentName:"li"},"PUT user asset transfer")," endpoint, in combination with other API services. ")),(0,s.mdx)("p",null,"Before using the above endpoints, you can use the Configuration API to find users in your organization and the assets assigned to them. "),(0,s.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes."),(0,s.mdx)("h2",{id:"get-user-asset-count"},"GET user asset count"),(0,s.mdx)("p",null,"Use this endpoint to retrieve both a count of assets owned by a user, and the ",(0,s.mdx)("inlineCode",{parentName:"p"},"componentType"),"for each asset. Note that the user is not the admin requesting the counts but the user who owns the CJA asset."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{ImsUserId}/counts")),(0,s.mdx)("h3",{id:"request-and-response-examples"},"Request and Response Examples"),(0,s.mdx)("p",null,"Click the ",(0,s.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,s.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/exampleImsUserId.e/counts" \\\n     -H "x-api-key: {CLIENT_ID}" \\\n     -H "x-gw-ims-org-id: {IMS_ORG_ID}" \\\n     -H "Authorization: Bearer {ACCESS_TOKEN}"\n')),(0,s.mdx)("h4",{id:"response"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "scheduledJob",\n    "count": 0\n  },\n  {\n    "componentType": "alert",\n    "count": 0\n  },\n  {\n    "componentType": "segment",\n    "count": 2\n  },\n  {\n    "componentType": "calculatedMetric",\n    "count": 1\n  },\n  {\n    "componentType": "annotation",\n    "count": 0\n  },\n  {\n    "componentType": "dateRange",\n    "count": 0\n  },\n  {\n    "componentType": "project",\n    "count": 2\n  }\n]\n')),(0,s.mdx)("h3",{id:"request-example-details"},"Request example details"),(0,s.mdx)("p",null,"The example above shows a request for the types and numbers of assets owned by user",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleImsUserId.e"),"."),(0,s.mdx)("h3",{id:"response-example-details"},"Response example details"),(0,s.mdx)("p",null,"The response above shows the number of assets owned by user ",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleId"),", classified by ",(0,s.mdx)("inlineCode",{parentName:"p"},"componentType"),". This user owns ",(0,s.mdx)("inlineCode",{parentName:"p"},"2")," assets of type ",(0,s.mdx)("inlineCode",{parentName:"p"},"project"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"1")," of type ",(0,s.mdx)("inlineCode",{parentName:"p"},"calculatedMetric"),", and ",(0,s.mdx)("inlineCode",{parentName:"p"},"2")," of type ",(0,s.mdx)("inlineCode",{parentName:"p"},"segment"),"."),(0,s.mdx)("h3",{id:"request-parameters"},"Request Parameters"),(0,s.mdx)("p",null,"The following table describes the GET user asset count request parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Required"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"imsUserId")),(0,s.mdx)("td",{parentName:"tr",align:null},"required"),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The ID of the IMS user whose assets are counted")))),(0,s.mdx)("h3",{id:"response-parameters"},"Response Parameters"),(0,s.mdx)("p",null,"The following table describes the GET user asset count response parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentType")),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The type of components counted by the request. This includes ",(0,s.mdx)("inlineCode",{parentName:"td"},"project"),", ",(0,s.mdx)("inlineCode",{parentName:"td"},"dateRange"),", ",(0,s.mdx)("inlineCode",{parentName:"td"},"annotation"),", ",(0,s.mdx)("inlineCode",{parentName:"td"},"calculatedMetric"),", ",(0,s.mdx)("inlineCode",{parentName:"td"},"segment"),", ",(0,s.mdx)("inlineCode",{parentName:"td"},"alert"),", and ",(0,s.mdx)("inlineCode",{parentName:"td"},"ScheduledJob"),".")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"count")),(0,s.mdx)("td",{parentName:"tr",align:null},"integer"),(0,s.mdx)("td",{parentName:"tr",align:null},"The number of components owned by the user")))),(0,s.mdx)("h2",{id:"put-user-asset-transfer"},"PUT user asset transfer"),(0,s.mdx)("p",null,"Use the ",(0,s.mdx)("strong",{parentName:"p"},"PUT user asset transfer")," endpoint to transfer assets to a specified user. "),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"PUT https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{RECIPIENT_USER_IMS_ID}/transfer")),(0,s.mdx)("p",null,"To complete an asset transfer, you will need the following:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"reciepientImsUserId"),": the IMS user ID of the recipieht of the assets, found with the ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/cja-apis/docs/api/#tag/Configuration-API"},"Configuration API"),"."),(0,s.mdx)("li",{parentName:"ul"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"componentType"),": the type of component as listed in response to the ",(0,s.mdx)("strong",{parentName:"li"},"Get user asset count")," endpoint. "),(0,s.mdx)("li",{parentName:"ul"},"The asset ID: The ID of the asset, as shown in response to the API service that corresponds to the type of asset. For example, if the ",(0,s.mdx)("strong",{parentName:"li"},"GET user asset count")," endpoint shows that ",(0,s.mdx)("inlineCode",{parentName:"li"},"exampleUserId")," owns two ",(0,s.mdx)("inlineCode",{parentName:"li"},"project")," assets, use the ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/cja-apis/docs/endpoints/projects/"},"Project API")," to return the asset ID.")),(0,s.mdx)("p",null,"Note: The asset owner user ID is already retrieved with the previous call and will be applied automatically to the ",(0,s.mdx)("strong",{parentName:"p"},"PUT user asset transfer")," request. "),(0,s.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The transfer process does not copy the assets. It removes them from the owner and assigns them to the recipient. The number of assets in a single request cannot exceed the limit of 100 components."),(0,s.mdx)("h3",{id:"project-asset-transfer-example"},"Project asset transfer example"),(0,s.mdx)("p",null,"The steps below show an example for transfering a ",(0,s.mdx)("inlineCode",{parentName:"p"},"project")," asset to another user (using the steps described above), as follows:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"The admin retrieves the asset owner user ID and the recipient user ID by using the ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/cja-apis/docs/api/#tag/Configuration-API"},"Configuration API"),". This shows that the user ID of the owner is ",(0,s.mdx)("inlineCode",{parentName:"li"},"OwnerExample111.e")," and the recipient is ",(0,s.mdx)("inlineCode",{parentName:"li"},"RecipientExample222.e"),"."),(0,s.mdx)("li",{parentName:"ol"},"The admin retrieves the number and type of assets for the owner with the ",(0,s.mdx)("strong",{parentName:"li"},"GET user asset count")," endpoint. This shows two ",(0,s.mdx)("inlineCode",{parentName:"li"},"project")," type assets owned by ",(0,s.mdx)("inlineCode",{parentName:"li"},"OwnerImsUserIdExample"),"."),(0,s.mdx)("li",{parentName:"ol"},"The admin uses the ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/cja-apis/docs/api/#operation/projects_getProjects"},"GET projects by user")," endpoint within the ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/cja-apis/docs/api/#tag/Projects-APIs"},"Project API")," to retrievethe asset ID of the projects to be transferred, as shown in the example request and response below:")),(0,s.mdx)("h3",{id:"example-requests-and-responses-for-a-project-api-call"},"Example requests and responses for a project API call"),(0,s.mdx)("p",null,"Click the ",(0,s.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,s.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"example-project-api-request"},"Example project API request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X PUT "https://cja.adobe.io/data/componentmetadata/1.0/ares/users/projects?locale=en_US&limit=10&page=0&pagination=true&ownerId=OwnerExample111.e\\"\n     -H "x-api-key: {CLIENT_ID}" \\\n     -H "x-gw-ims-org-id: {IMS_ORG_ID}" \\\n     -H "Content-Type: application/json" \\\n     -H "Authorization: Bearer {ACCESS_TOKEN}" \\\n')),(0,s.mdx)("h4",{id:"example-project-api-response"},"Example project API response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},' {\n  "content": [\n    {\n      "id": "ExampleProjectId1",\n      "name": "New project testing users",\n      "description": "",\n      "type": "project",\n      "dataId": "dv_5555555fa5ea5555bfdb5bea",\n      "owner": {\n        "imsUserId": "OwnerExample111.e",\n        "ownerId": "OwnerExample111.e",\n        "name": null,\n        "type": "imsUser"\n      },\n      "created": "YYYY-MM-DDT17:19:41Z"\n    },\n    {\n      "id": "ExampleProjectId2",\n      "name": "Testing definitions",\n      "description": "",\n      "type": "project",\n      "dataId": "dv_66c6d6ada6666666a6666666",\n      "owner": {\n        "imsUserId": "OwnerExample111.e",\n        "ownerId": "OwnerExample111.e",\n        "name": null,\n        "type": "imsUser"\n      },\n      "created": "YYYY-MM-DDT23:56:41Z"\n    }\n  ],\n  "totalPages": 1,\n  "totalElements": 2,\n  "numberOfElements": 2,\n  "number": 0,\n  "firstPage": true,\n  "lastPage": true,\n  "sort": null,\n  "size": 10\n}\n')),(0,s.mdx)("h3",{id:"request-example-details-for-project-api-call"},"Request example details for project API call"),(0,s.mdx)("p",null,"The Projects API example above requests a list of projects under the ownership of ",(0,s.mdx)("inlineCode",{parentName:"p"},"OwnerExample111.e")),(0,s.mdx)("h3",{id:"response-example-details-for-project-api-call"},"Response example details for project API call"),(0,s.mdx)("p",null,"The example Projects API response above shows that the asset IDs for the projects are ",(0,s.mdx)("inlineCode",{parentName:"p"},"ExampleProjectId1")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"ExampleProjectId2"),". These project IDs will be used to transfer the assets to",(0,s.mdx)("inlineCode",{parentName:"p"},"RecipientExample222.e")," with the the ",(0,s.mdx)("strong",{parentName:"p"},"PUT user asset transfer"),"."),(0,s.mdx)("h3",{id:"put-user-assets-transfer-request-and-response-examples"},"PUT user assets transfer request and response examples"),(0,s.mdx)("p",null,"Click the ",(0,s.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,s.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-1"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X PUT 'https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/RecipientExample222.e/transfer' \\\n     -H 'x-api-key: {CLIENT_ID}' \\\n     -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n     -H 'Content-Type: application/json' \\\n     -H 'Authorization: Bearer {ACCESS_TOKEN}' \\\n     -d '{\n        [\n          {\n            \"componentType\": \"project\",\n            \"componentIds\": [\n              \"ExampleProjectId1\"\n            ]\n          }\n        ]\n     }'\n")),(0,s.mdx)("h4",{id:"response-1"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "string",\n    "componentIds": [\n      "string"\n    ]\n  }\n]\n')),(0,s.mdx)("h3",{id:"request-example-details-1"},"Request example details"),(0,s.mdx)("p",null,"The request above shows a request to transfer the project asset ",(0,s.mdx)("inlineCode",{parentName:"p"},"ExampleProjectId1")," to the recipient ",(0,s.mdx)("inlineCode",{parentName:"p"},"RecipientExample222.e"),"."),(0,s.mdx)("h3",{id:"response-example-details-1"},"Response example details"),(0,s.mdx)("p",null,"The response above shows the component IDs of the assets transfered."),(0,s.mdx)("h3",{id:"request-parameters-1"},"Request Parameters"),(0,s.mdx)("p",null,"The following table describes the {TITLE} request parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Required"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"recipientImsUserId")),(0,s.mdx)("td",{parentName:"tr",align:null},"required"),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The IMS user ID to receive assets from the transfer")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentType")),(0,s.mdx)("td",{parentName:"tr",align:null}),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The type of component")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentIds")),(0,s.mdx)("td",{parentName:"tr",align:null}),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"An array of the IDs intended to be transferred")))),(0,s.mdx)("h3",{id:"response-parameters-1"},"Response Parameters"),(0,s.mdx)("p",null,"The following table describes the response parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentType")),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The type of component transferred")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentIds")),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The IDs of transferred components")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-asset-management-index-md-2b28d53370ebaca52aef.js.map