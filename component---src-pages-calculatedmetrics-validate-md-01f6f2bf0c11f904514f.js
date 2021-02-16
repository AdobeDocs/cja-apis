(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{PCwR:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return m}));var a=t("wx14"),i=t("zLVn"),c=(t("q1tI"),t("7ljp")),d=t("ndZU"),r=(t("qKvR"),{}),o={_frontmatter:r},s=d.a;function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.mdx)(s,Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"validate-calculated-metrics"},"Validate calculated metrics"),Object(c.mdx)("p",null,"Data views have different dimensions and metrics available. A calculated metric that's valid in one data view might not be valid in another. You can use the ",Object(c.mdx)("inlineCode",{parentName:"p"},"calculatedmetrics/validate")," endpoint to check and see if a given calculated metric is valid."),Object(c.mdx)("p",null,Object(c.mdx)("inlineCode",{parentName:"p"},"POST https://cja.adobe.io/calculatedmetrics/validate")),Object(c.mdx)("p",null,"An example POST body:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Integration Test 1",\n    "description": "Integration Test 1 Description",\n    "dataId": "{DATAID}",\n    "type": "percent",\n    "definition": {\n        "func": "calc-metric",\n        "formula": {\n            "func": "divide",\n            "col1": {\n                "func": "metric",\n                "name": "metrics\\/visits"\n            },\n            "col2": {\n                "func": "metric",\n                "name": "metrics\\/visitors"\n            }\n        },\n        "version": [\n            1,\n            0,\n            0\n        ]\n    }\n}\n')),Object(c.mdx)("p",null,"An example response:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "valid": true,\n  "identityMetrics": [ { "identity": "metrics/visits" }, { "identity": "metrics/visitors" } ],\n  "functions": [ "divide" ],\n  "validator_version": "1.0.0",\n  "supported_products": [ "oberon", "frag" ],\n  "supported_schema": [ "schema_oberon", "schema_frag" ]\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-calculatedmetrics-validate-md-01f6f2bf0c11f904514f.js.map