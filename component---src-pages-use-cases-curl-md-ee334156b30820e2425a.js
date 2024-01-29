"use strict";(self.webpackChunkcja_apis=self.webpackChunkcja_apis||[]).push([[2810],{98335:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return p}});var n=t(87462),r=t(63366),o=(t(15007),t(64983)),l=t(91515),i=["components"],m={},d={_frontmatter:m},s=l.Z;function p(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)(s,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"use-cja-with-curl"},"Use CJA with cURL"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://curl.se/"},"cURL")," is a command line tool that allows you to transfer data across various network protocols. You can use cURL to submit API calls to Adobe."),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"Make sure that you meet all requirements on the ",(0,o.mdx)("a",{parentName:"p",href:"../getting-started/index.md"},"Getting started")," page, including:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Your user account belonging to the correct product profile in the ",(0,o.mdx)("a",{parentName:"li",href:"https://adminconsole.adobe.com"},"Adobe Admin Console")),(0,o.mdx)("li",{parentName:"ul"},"An API client created in the ",(0,o.mdx)("a",{parentName:"li",href:"https://console.adobe.io"},"Adobe Developer Console"))),(0,o.mdx)("h2",{id:"send-a-simple-api-call-using-curl"},"Send a simple API call using cURL"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Open your operating system's command prompt or terminal.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Type ",(0,o.mdx)("inlineCode",{parentName:"p"},"curl -V")," then press enter. Make sure that ",(0,o.mdx)("inlineCode",{parentName:"p"},"-V")," is capitalized.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If you get cURL's version number and list of supported features, you have the tool installed. If you get an unrecognized command, ",(0,o.mdx)("a",{parentName:"p",href:"https://curl.se/download.html"},"install cURL"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Adobe requires three headers for API calls. You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"-H")," option to include them."),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"x-api-key"),": The Client ID found in the Adobe Developer Console."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"x-gw-ims-org-id"),": The Organization ID found in the Adobe Developer Console."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"access_token"),": The access token generated from the JWT."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Formulate the API call to Adobe with the required headers and an API call retrieving basic user information:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET -H "x-api-key: {CLIENT_ID}" -H "x-gw-ims-org-id: {ORGANIZTION_ID}" -H "authorization: Bearer {ACCESS_TOKEN}" "https://cja.adobe.io/aresconfig/users/me" \n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Adobe's servers return a JSON object containing information around the technical account."))),(0,o.mdx)("p",null,"You can now use the ",(0,o.mdx)("a",{parentName:"p",href:"../api.md"},"API Reference")," to send API calls to the CJA API."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-curl-md-ee334156b30820e2425a.js.map