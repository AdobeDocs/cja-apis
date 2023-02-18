"use strict";(self.webpackChunksubstance_3d_automation=self.webpackChunksubstance_3d_automation||[]).push([[818],{1573:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return r},default:function(){return l}});var a=t(87462),i=t(63366),c=(t(15007),t(64983)),s=t(91515),d=["components"],r={},o={_frontmatter:r},m=s.Z;function l(n){var e=n.components,t=(0,i.Z)(n,d);return(0,c.mdx)(m,(0,a.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"validate-calculated-metrics"},"Validate calculated metrics"),(0,c.mdx)("p",null,"Data views have different dimensions and metrics available. A calculated metric that's valid in one data view might not be valid in another. You can use the ",(0,c.mdx)("inlineCode",{parentName:"p"},"calculatedmetrics/validate")," endpoint to check and see if a given calculated metric is valid."),(0,c.mdx)("p",null,(0,c.mdx)("inlineCode",{parentName:"p"},"POST https://cja.adobe.io/calculatedmetrics/validate")),(0,c.mdx)("p",null,"An example POST body:"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Integration Test 1",\n    "description": "Integration Test 1 Description",\n    "dataId": "{DATAID}",\n    "type": "percent",\n    "definition": {\n        "func": "calc-metric",\n        "formula": {\n            "func": "divide",\n            "col1": {\n                "func": "metric",\n                "name": "metrics\\/visits"\n            },\n            "col2": {\n                "func": "metric",\n                "name": "metrics\\/visitors"\n            }\n        },\n        "version": [\n            1,\n            0,\n            0\n        ]\n    }\n}\n')),(0,c.mdx)("p",null,"An example response:"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "valid": true,\n  "identityMetrics": [ { "identity": "metrics/visits" }, { "identity": "metrics/visitors" } ],\n  "functions": [ "divide" ],\n  "validator_version": "1.0.0",\n  "supported_products": [ "oberon", "frag" ],\n  "supported_schema": [ "schema_oberon", "schema_frag" ]\n}\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-calculatedmetrics-validate-md-8063ded6860f1be05640.js.map