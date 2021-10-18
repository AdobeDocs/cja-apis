(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[525],{37146:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return d}});var s=a(22122),t=a(19756),r=(a(15007),a(64983)),o=a(99536),m=["components"],p={},l={_frontmatter:p},i=o.Z;function d(e){var n=e.components,a=(0,t.Z)(e,m);return(0,r.mdx)(i,(0,s.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"shares-apis"},"Shares APIs"),(0,r.mdx)("p",null,"The CJA Shares APIs allow you to retrieve, update, or create shares and their association with components programmatically through Adobe I/O. The APIs use the same data and methods that are used when working with shares in the UI."),(0,r.mdx)("h2",{id:"componentmetadatashares-endpoint-description"},(0,r.mdx)("inlineCode",{parentName:"h2"},"/componentmetadata/shares")," endpoint description"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"/componentmetadata/shares")," endpoint description is shown in our ",(0,r.mdx)("a",{parentName:"p",href:"../../api.md"},"Swagger UI"),". Use the Swagger UI to see endpoint summaries, available methods, parameters, example values, models, and status codes, and to try out the API."),(0,r.mdx)("h2",{id:"example-creating-shares"},"Example creating shares"),(0,r.mdx)("p",null,"The following request example includes both a JSON message request body and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," request to share a component with a group."),(0,r.mdx)("h3",{id:"json-request-message"},"JSON Request Message"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n  "componentId": "{COMPONENTID}",\n  "componentType": "{COMPONENTTYPE}",\n  "shareToId": "{groupId}",\n  "shareToType": "group"\n}\n')),(0,r.mdx)("h4",{id:"curl-request"},(0,r.mdx)("inlineCode",{parentName:"h4"},"curl")," Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \\\n  https://cja.adobe.io/componentmetadata/shares \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {API_KEY}' \\\n  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n  -d '{REQUESTJSON}'\n")),(0,r.mdx)("h3",{id:"example-response"},"Example Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shareId": 12345,\n  "componentId": "{COMPONENTID}",\n  "componentType": "{COMPONENTTYPE}",\n  "shareToImsId": "{groupId}",\n  "shareToType": "group"\n}\n')),(0,r.mdx)("h2",{id:"example-deleting-a-share"},"Example deleting a share"),(0,r.mdx)("p",null,"The following request example includes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," request to delete a share."),(0,r.mdx)("h3",{id:"curl-request-1"},(0,r.mdx)("inlineCode",{parentName:"h3"},"curl")," Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \\\n  https://cja.adobe.io/componentmetadata/shares/{SHARE_ID} \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {API_KEY}' \\\n  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n")),(0,r.mdx)("p",null,"The above curl command requests the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Delete share with id ",(0,r.mdx)("inlineCode",{parentName:"li"},"SHARE_ID")," and its association with other users/groups")),(0,r.mdx)("h3",{id:"example-response-1"},"Example Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shareId": {SHARE_ID},\n  "status": {\n    "success": true\n  }\n}\n')),(0,r.mdx)("h2",{id:"example-retrieving-list-of-shares-for-a-company"},"Example retrieving list of shares for a company"),(0,r.mdx)("p",null,"The following request example includes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," request to retrieve shares for current company."),(0,r.mdx)("h3",{id:"curl-request-2"},(0,r.mdx)("inlineCode",{parentName:"h3"},"curl")," Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\\n  https://cja.adobe.io/componentmetadata/shares?page=0&limit=3 \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {API_KEY}' \\\n  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n")),(0,r.mdx)("p",null,"The above curl command requests the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Retrieve specific page with query param ",(0,r.mdx)("inlineCode",{parentName:"li"},"page")),(0,r.mdx)("li",{parentName:"ul"},"Retrieve specific number of shares in a page with query param ",(0,r.mdx)("inlineCode",{parentName:"li"},"limit"))),(0,r.mdx)("h3",{id:"example-response-2"},"Example Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "shareId": 2085535,\n      "shareToImsId": "{ims_user_id}",\n      "shareToType": "user",\n      "componentType": "segment",\n      "componentId": "s300006186_590cb8b9e4b0ca84fe8152b9",\n      "shareToDisplayName": null\n    },\n    {\n      "shareId": 11684455,\n      "shareToImsId": "{ims_group_id}",\n      "shareToType": "group",\n      "componentType": "segment",\n      "componentId": "s300006186_5f4eb5bc3f56a12f743e1405",\n      "shareToDisplayName": null\n    },\n    {\n      "shareId": 11684456,\n      "shareToType": "all",\n      "componentType": "segment",\n      "componentId": "s300006186_5f4eb5bb8aca3c5a990878e8",\n      "shareToDisplayName": null\n    }\n  ],\n  "totalPages": 38,\n  "totalElements": 113,\n  "number": 0,\n  "numberOfElements": 3,\n  "firstPage": true,\n  "lastPage": false,\n  "sort": null,\n  "size": 3\n}\n')),(0,r.mdx)("h2",{id:"example-retrieve-shares-for-multiple-components"},"Example retrieve shares for multiple components"),(0,r.mdx)("p",null,"The following request example includes both a JSON message request body and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," request to retrieve shares for multiple components of the same type."),(0,r.mdx)("h3",{id:"json-request-message-1"},"JSON Request Message"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n  "componentType": "segment",\n  "componentIds": [\n    "s300006186_5f4eb5bb8aca3c5a990878e8"\n  ]\n}\n')),(0,r.mdx)("h3",{id:"curl-request-3"},(0,r.mdx)("inlineCode",{parentName:"h3"},"curl")," Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \\\n  https://cja.adobe.io/componentmetadata/shares/component/search?page=0&limit=3 \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {API_KEY}' \\\n  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n  -d '{REQUESTJSON}'\n")),(0,r.mdx)("p",null,"The JSON message requests the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Retrieves all shares for component id ",(0,r.mdx)("inlineCode",{parentName:"li"},"s300006186_5f4eb5bb8aca3c5a990878e8")," of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"segment")),(0,r.mdx)("li",{parentName:"ul"},"Retrieve specific page with query param ",(0,r.mdx)("inlineCode",{parentName:"li"},"page")),(0,r.mdx)("li",{parentName:"ul"},"Retrieve specific number of shares in a page with query param ",(0,r.mdx)("inlineCode",{parentName:"li"},"limit"))),(0,r.mdx)("h3",{id:"example-response-3"},"Example Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "componentType": "segment",\n      "componentId": "s300006186_5f4eb5bb8aca3c5a990878e8",\n      "shares": [\n        {\n          "shareId": 11684456,\n          "shareToImsId": "{ims_user_id}",\n          "shareToType": "user",\n          "componentType": "segment",\n          "componentId": "s300006186_5f4eb5bb8aca3c5a990878e8",\n          "shareToDisplayName": null\n        }\n      ]\n    }\n  ],\n  "totalPages": 1,\n  "totalElements": 1,\n  "number": 0,\n  "numberOfElements": 1,\n  "firstPage": true,\n  "lastPage": true,\n  "sort": null,\n  "size": 10\n}\n')),(0,r.mdx)("h2",{id:"example-retrieving-components-using-shared-to-the-user"},"Example retrieving components using shared to the user"),(0,r.mdx)("p",null,"The following request example includes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," request to retrieve a components of specific type associated with the user."),(0,r.mdx)("h4",{id:"curl-request-4"},(0,r.mdx)("inlineCode",{parentName:"h4"},"curl")," Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\\n  https://cja.adobe.io/componentmetadata/shares/sharedto/me \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {API_KEY}' \\\n  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n")),(0,r.mdx)("h3",{id:"example-response-4"},"Example Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  "s300006186_5f4eb5bb8aca3c5a990878e8"\n]\n')),(0,r.mdx)("h2",{id:"example-retrieving-shares-using-id"},"Example retrieving shares using id"),(0,r.mdx)("p",null,"The following request example includes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," request to retrieve a share with id."),(0,r.mdx)("h4",{id:"curl-request-5"},(0,r.mdx)("inlineCode",{parentName:"h4"},"curl")," Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\\n   https://cja.adobe.io/componentmetadata/shares/{SHARE_ID} \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {API_KEY}' \\\n  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n")),(0,r.mdx)("h3",{id:"example-response-5"},"Example Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shareId": 11684455,\n  "shareToImsId": "{ims_group_id}",\n  "shareToType": "group",\n  "componentType": "segment",\n  "componentId": "s300006186_5f4eb5bc3f56a12f743e1405",\n  "shareToDisplayName": null\n}\n')),(0,r.mdx)("h2",{id:"update-shares-for-components"},"Update shares for components"),(0,r.mdx)("p",null,"The following request example includes both a JSON message request body and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," request to create and delete multiple shares associated with components."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Warning, this call is authoritative!  Any shares not included in the request body will be deleted permanently!")),(0,r.mdx)("h3",{id:"json-request-message-2"},"JSON Request Message"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'[\n  {\n    "componentType": "segment",\n    "componentId": "s300006186_5f4eb5bb8aca3c5a990878e8",\n    "shares": [\n      {\n        "shareId": 11684456,\n        "shareToId": 622291,\n        "shareToType": "user",\n        "componentType": "segment",\n        "componentId": "s300006186_5f4eb5bb8aca3c5a990878e8",\n        "shareToDisplayName": null\n      }\n    ]\n  }\n]\n')),(0,r.mdx)("p",null,"The JSON message requests the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"create a share to segment ",(0,r.mdx)("inlineCode",{parentName:"li"},"s300006186_5f4eb5bb8aca3c5a990878e8")," for user ",(0,r.mdx)("inlineCode",{parentName:"li"},"622291")),(0,r.mdx)("li",{parentName:"ul"},"if there are any preexisting shares associated with ",(0,r.mdx)("inlineCode",{parentName:"li"},"s300006186_5f4eb5bb8aca3c5a990878e8")," then remove these associations.")),(0,r.mdx)("h4",{id:"curl-request-6"},(0,r.mdx)("inlineCode",{parentName:"h4"},"curl")," Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X PUT \\\n  https://cja.adobe.io/componentmetadata/shares \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {API_KEY}' \\\n  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \\\n  -d '{REQUESTJSON}'\n")),(0,r.mdx)("h3",{id:"example-response-6"},"Example Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "segment",\n    "componentId": "s300006186_5f4eb5bb8aca3c5a990878e8",\n    "shares": [\n      {\n        "shareToId": 622291,\n        "shareToType": "user",\n        "accessLevel": null\n      }\n    ],\n    "status": {\n      "success": true\n    }\n  }\n]\n')))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-shares-index-md-72f5e1935f1e08cec60d.js.map