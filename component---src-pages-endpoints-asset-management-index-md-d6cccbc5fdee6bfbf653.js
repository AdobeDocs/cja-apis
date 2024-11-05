"use strict";(self.webpackChunkcja_apis=self.webpackChunkcja_apis||[]).push([[3210],{21740:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return h}});var a=n(87462),r=n(63366),s=(n(15007),n(64983)),d=n(91515),m=["components"],o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",t)}},i=l("InlineAlert"),p=l("CodeBlock"),u={_frontmatter:o},x=d.Z;function h(e){var t=e.components,n=(0,r.Z)(e,m);return(0,s.mdx)(x,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"cja-asset-management-api-guide"},"CJA Asset Management API Guide"),(0,s.mdx)("p",null,"The CJA Asset Transfer endpoints provide methods for transferring ownership of CJA assets."),(0,s.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The user of these endpoints must be an Admin in the Adobe Admin Console. For more information regarding Adobe Admin Console user roles, see the ",(0,s.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/enterprise/using/users.html"},"Adobe Admin Console")," documentation."),(0,s.mdx)("p",null,"The endpoints described in this guide are routed through ",(0,s.mdx)("inlineCode",{parentName:"p"},"analytics.adobe.io"),". To use them, you must first create a client with access to the Adobe Developer Console. For more information, see ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/cja-apis/docs/getting-started/"},"Getting started with the CJA API"),"."),(0,s.mdx)("p",null,"This guide includes instructions the following endpoints:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:""},"GET user asset count"),": Counts the number of assets owned by a user"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:""},"PUT user asset transfer"),": Transfers the ownership of assets to a specified user")),(0,s.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes."),(0,s.mdx)("h2",{id:"get-user-asset-count"},"GET user asset count"),(0,s.mdx)("p",null,"Use this endpoint to retrieve a count of assets owned by a user."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{ImsUserId}/counts")),(0,s.mdx)("h3",{id:"request-and-response-examples"},"Request and Response Examples"),(0,s.mdx)("p",null,"Click the ",(0,s.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,s.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,s.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET 'https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/exampleId/counts' \\\n     -H \"x-api-key: {CLIENT_ID}\" \\\n     -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n     -H 'Authorization: Bearer {ACCESS_TOKEN}'\n")),(0,s.mdx)("h4",{id:"response"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "string",\n    "count": 5\n  }\n]\n')),(0,s.mdx)("h3",{id:"request-example-details"},"Request example details"),(0,s.mdx)("p",null,"The example above shows a request for the number of assets owned by user with IMS user ID of ",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleId"),"."),(0,s.mdx)("h3",{id:"response-example-details"},"Response example details"),(0,s.mdx)("p",null,"The response above shows the user with the Id of ",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleId")," to have five total assets."),(0,s.mdx)("h3",{id:"request-parameters"},"Request Parameters"),(0,s.mdx)("p",null,"The following table describes the GET user asset count request parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Required"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"imsUserId")),(0,s.mdx)("td",{parentName:"tr",align:null},"required"),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The IMS user ID that will have total assets counted")))),(0,s.mdx)("h3",{id:"response-parameters"},"Response Parameters"),(0,s.mdx)("p",null,"The following table describes the GET user asset count response parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentType")),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The type of components counted by the request")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"count")),(0,s.mdx)("td",{parentName:"tr",align:null},"integer"),(0,s.mdx)("td",{parentName:"tr",align:null},"The number of components counted by the request")))),(0,s.mdx)("h2",{id:"put-user-asset-transfer"},"PUT user asset transfer"),(0,s.mdx)("p",null,"Use this endpoint to transfer assets to a specified user.\nIf an ",(0,s.mdx)("inlineCode",{parentName:"p"},"ownerImsUserId")," is specified all assets belonging to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"ownerImsUserId")," are considered the assets to be transferred. Any body included in a request alongside an ",(0,s.mdx)("inlineCode",{parentName:"p"},"ownerImsUserId")," will be ignored.\nNote that the number of assets in a single request cannot exceed the limit of 100 components."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"PUT https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{recipientImsUserId}/transfer")),(0,s.mdx)("h3",{id:"request-and-response-examples-1"},"Request and Response Examples"),(0,s.mdx)("p",null,"Click the ",(0,s.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,s.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,s.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-1"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X PUT 'https://cja.adobe.io/data/componentmetadata/1.0/ares/users/assets/{recipientImsUserId}/transfer' \\\n     -H 'x-api-key: {CLIENT_ID}' \\\n     -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n     -H 'Content-Type: application/json' \\\n     -H 'Authorization: Bearer {ACCESS_TOKEN}' \\\n     -d '{\n        [\n          {\n            \"componentType\": \"string\",\n            \"componentIds\": [\n              \"string\"\n            ]\n          }\n        ]\n     }'\n")),(0,s.mdx)("h4",{id:"response-1"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "string",\n    "componentIds": [\n      "string"\n    ]\n  }\n]\n')),(0,s.mdx)("h3",{id:"request-example-details-1"},"Request example details"),(0,s.mdx)("p",null,"The request above shows a request to transfer the assets of the user to the recipient."),(0,s.mdx)("h3",{id:"response-example-details-1"},"Response example details"),(0,s.mdx)("p",null,"The response above shows the component IDs of the assets transfered."),(0,s.mdx)("h3",{id:"request-parameters-1"},"Request Parameters"),(0,s.mdx)("p",null,"The following table describes the {TITLE} request parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Required"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"recipientImsUserId")),(0,s.mdx)("td",{parentName:"tr",align:null},"required"),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The IMS user ID to receive assets from the transfer")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentType")),(0,s.mdx)("td",{parentName:"tr",align:null}),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The type of component")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentIds")),(0,s.mdx)("td",{parentName:"tr",align:null}),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"An array of the IDs intended to be transferred")))),(0,s.mdx)("h3",{id:"response-parameters-1"},"Response Parameters"),(0,s.mdx)("p",null,"The following table describes the response parameters:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentType")),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The type of component transferred")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"componentIds")),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"The IDs of transferred components")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-asset-management-index-md-d6cccbc5fdee6bfbf653.js.map