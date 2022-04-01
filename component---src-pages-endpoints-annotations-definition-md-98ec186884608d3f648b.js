(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3419],{57630:function(n,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return m},default:function(){return p}});var a=t(22122),i=t(19756),o=(t(15007),t(64983)),r=t(99536),d=["components"],m={},s={_frontmatter:m},l=r.Z;function p(n){var e=n.components,t=(0,i.Z)(n,d);return(0,o.mdx)(l,(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"annotation-definition-data-structure"},"Annotation definition data structure"),(0,o.mdx)("p",null,"The annotation definition data structure is used to communicate an annotation's structure to the API."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"id")),": The annotation's unique ID."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"name")),": The name of the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"description")),": The annotation's description."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"dateRange")),": The date range of the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"color")),": An enum representing the annotation's color. Supported values include ",(0,o.mdx)("inlineCode",{parentName:"li"},"STANDARD1")," through ",(0,o.mdx)("inlineCode",{parentName:"li"},"STANDARD9"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"applyToAllReports")),": A boolean that determines if the annotation applies to all report suites."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"scope")),": An object including the ",(0,o.mdx)("inlineCode",{parentName:"li"},"metrics")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"filters")," that the annotation uses."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"createdDate")),": The ISO 8601 date that the annotation was created."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"modifiedDate")),": The ISO 8601 date that the annotation was last modified."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"modifiedById")),": The ID of the user who last modified the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"tags")),": The tags applied to the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"shares")),": The shares applied to the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"approved")),": A boolean that determines if the annotation is approved by an admin."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"favorite")),": A boolean that determines if the user has this annotation favorited (starred)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"usageSummary")),": An object that shows where this annotation is used."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"owner")),": An object showing information of the user that created the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"imsOrgId")),": The IMS org of the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"dataName")),": The Data View name."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"rsid")),": The Data View ID.")),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "string",\n  "name": "string",\n  "description": "string",\n  "dateRange": "string",\n  "color": "STANDARD1",\n  "applyToAllReports": true,\n  "scope": {\n    "metrics": [\n      {\n        "id": "string",\n        "componentType": "string"\n      }\n    ],\n    "filters": [\n      {\n        "id": "string",\n        "operator": "string",\n        "dimensionType": "string",\n        "terms": [\n          "string"\n        ],\n        "componentType": "string"\n      }\n    ]\n  },\n  "createdDate": "YYYY-04-01T00:18:13.651Z",\n  "modifiedDate": "YYYY-04-01T00:18:13.651Z",\n  "modifiedById": "string",\n  "tags": [\n    {\n      "additionalProp1": {},\n      "additionalProp2": {},\n      "additionalProp3": {}\n    }\n  ],\n  "shares": [\n    {\n      "additionalProp1": {},\n      "additionalProp2": {},\n      "additionalProp3": {}\n    }\n  ],\n  "approved": true,\n  "favorite": true,\n  "usageSummary": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  },\n  "owner": {\n    "imsUserId": "string",\n    "ownerId": "string",\n    "name": "string",\n    "type": "imsUser"\n  },\n  "imsOrgId": "string",\n  "dataName": "string",\n  "dataId": "string"\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-annotations-definition-md-98ec186884608d3f648b.js.map