"use strict";(self.webpackChunksubstance_3d_automation=self.webpackChunksubstance_3d_automation||[]).push([[8556],{95877:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return p}});var t=a(87462),i=a(63366),o=(a(15007),a(64983)),r=a(91515),d=["components"],m={},l={_frontmatter:m},s=r.Z;function p(e){var n=e.components,a=(0,i.Z)(e,d);return(0,o.mdx)(s,(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"annotation-parameters"},"Annotation parameters"),(0,o.mdx)("p",null,"Parameters that you can include in ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," annotation API calls to refine results. You can include multiple query strings using an ampersand (",(0,o.mdx)("inlineCode",{parentName:"p"},"&"),")."),(0,o.mdx)("h2",{id:"expansion"},"Expansion"),(0,o.mdx)("p",null,"A query string that allows you to obtain additional information around an annotation. You can include multiple expansions, separated by a comma."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/annotations?expansion=name,description,dateRange,color")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"name")),": The name of the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"description")),": The annotation's description."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"dateRange")),": The date range of the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"color")),": An enum representing the annotation's color. Supported values include ",(0,o.mdx)("inlineCode",{parentName:"li"},"STANDARD1")," through ",(0,o.mdx)("inlineCode",{parentName:"li"},"STANDARD9"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"applyToAllReports")),": A boolean that determines if the annotation applies to all report suites."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"scope")),": An object including the ",(0,o.mdx)("inlineCode",{parentName:"li"},"metrics")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"filters")," that the annotation uses."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"createdDate")),": The date that the annotation was created."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"modifiedDate")),": The date that the annotation was last modified."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"modifiedById")),": The ID of the user who last modified the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"tags")),": The tags applied to the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"shares")),": The shares applied to the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"approved")),": A boolean that determines if the annotation is approved by an admin."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"favorite")),": A boolean that determines if the user has this annotation favorited (starred)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"usageSummary")),": An object that shows where this annotation is used."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"owner")),": An object showing the ID, name, and login of the user that created the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"imsOrgId")),": The IMS org of the annotation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"dataName")),": The Data View name."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"dataId")),": The Data View ID.")),(0,o.mdx)("h2",{id:"includetype"},"IncludeType"),(0,o.mdx)("p",null,"By default, results only include annotations that the user owns. You can add this query string which allows results to include additional annotations not owned by the user."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/annotations?includeType=all,shared")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"all")),": Returns all annotations that the user can access. Typically used by product admins."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"shared")),": Returns all annotations shared with the user.")),(0,o.mdx)("h2",{id:"locale"},"Locale"),(0,o.mdx)("p",null,"A query string that returns strings localized by Adobe into the desired language. Localization does not apply to user-defined fields, such as annotation names."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/annotations?locale=en_US")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"en_US")),": English"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"fr_FR")),": French"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"ja_JP")),": Japanese"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"de_DE")),": German"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"es_ES")),": Spanish"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"ko_KR")),": Korean"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"pt_PR")),": Brazilian Portuguese"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"zh_CN")),": Simplified Chinese"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"zh_TW")),": Traditional Chinese")),(0,o.mdx)("h2",{id:"filter"},"Filter"),(0,o.mdx)("p",null,"You can filter annotations by modification date or annotations in a specific date range."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/annotations?filterByModifiedAfter=YYYY-MM-DDTHH:MM:SSZ&filterByDateRange=YYYY-MM-DDTHH:MM:SSZ/YYYY-MM-DDTHH:MM:SSZ")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"filterByModifiedAfter")),": An ISO 8601 date that returns only annotations that were modified after the desired date."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"filterByDateRange")),": Two ISO 8601 dates separated by a forward slash (",(0,o.mdx)("inlineCode",{parentName:"li"},"/"),") that returns only annotations that fully reside within the desired date range.")),(0,o.mdx)("h2",{id:"pagination"},"Pagination"),(0,o.mdx)("p",null,"You can paginate annotation API calls so that the result is not too large to use."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/annotations?limit=10&page=2")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"limit")),": An integer that represents the number of results per page."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"strong"},"page")),": An integer that represents which page to return results. The first page is ",(0,o.mdx)("inlineCode",{parentName:"li"},"0"),". The API supports up to 1000 pages.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-annotations-parameters-md-b9c272c1ef2d1f9a613d.js.map