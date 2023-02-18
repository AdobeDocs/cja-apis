"use strict";(self.webpackChunksubstance_3d_automation=self.webpackChunksubstance_3d_automation||[]).push([[3823],{65612:function(e,t,a){a.r(t),a.d(t,{getQueryString:function(){return O}});var n=a(15861),o=a(64687),r=a.n(o),f=a(15007),i=a(35414),c=a(86029),d=a(40156),s=a(36440),l=a.n(s),b=a(1597),p=a(96633),u=a.n(p),m=a(158),h=(a(78248),a(26777)),v=a(88466),y=a(34899),g=a(1110),w=a(78269),S=a(73181),k=a(77158);var A=!(!{}.GATSBY_ALGOLIA_APPLICATION_ID||!{}.GATSBY_ALGOLIA_SEARCH_API_KEY),I={}.GATSBY_ALGOLIA_INDEX_ENV_PREFIX,x=null;A?x=l()({}.GATSBY_ALGOLIA_APPLICATION_ID,{}.GATSBY_ALGOLIA_SEARCH_API_KEY):console.warn("AIO: Algolia config missing.");var P=!(!{}.GATSBY_IMS_SRC||!{}.GATSBY_IMS_CONFIG),Z={openAPI:{src:null,block:null,frontMatter:"openAPISpec"},frame:{src:null,block:null,frontMatter:"frameSrc"}},_=function(e){e((function(e){return!e}))},L=function(e){return new Promise((function(t,a){var n=document.createElement("script");n.src=e,n.onload=function(e){return t(e)},n.onerror=function(e){return a(e)},n.onabort=function(e){return a(e)},document.head.appendChild(n)}))},E=function(e,t,n){var o=Z[e];o.has=null==t?void 0:t[o.frontMatter],void 0!==o.has&&o.src!==o.has&&(o.src=o.has),o.src&&!o.block&&(n(!0),"openAPI"===e?o.block=(0,d.ZP)((function(){return Promise.all([a.e(3490),a.e(5356),a.e(461),a.e(9351),a.e(8724)]).then(a.bind(a,37831))})):"frame"===e&&(o.block=(0,d.ZP)((function(){return Promise.all([a.e(3490),a.e(9351),a.e(6008)]).then(a.bind(a,96008))}))),o.block.load().then((function(){n(!1)})))},G=function(e,t){var a=new URLSearchParams(window.location.search);a.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+a)},O=function(){return new URLSearchParams(window.location.search).toString()},M=function(){var e=function(e,a){return void 0===a&&(a=""),t(e)?"http://localhost:8000":function(e){return e.indexOf("developer-stage")>=0}(e)?"https://developer-stage.adobe.com"+a:"https://developer.adobe.com"+a};function t(e){return e.indexOf("localhost")>=0}var a=t(window.location.host)?e(window.location.host):""+e(window.location.host,"/search-frame"),n=new URLSearchParams(window.location.search);return n&&n.toString().length>0?a+"?"+n.toString():a},C={name:"hr37al",styles:"grid-area:main"},N={name:"boasoc",styles:"min-height:100vh;background-color:var(--spectrum-global-color-gray-50)"},z={name:"1wwehzg",styles:"min-height:100vh;background-color:transparent"};t.default=function(e){var t=e.children,a=e.pageContext,o=e.location,d=(0,f.useState)(null),s=d[0],l=d[1],p=(0,f.useState)(!0),B=p[0],T=p[1],R=(0,f.useState)(!1),Y=R[0],F=R[1];(0,f.useEffect)((function(){var e={}.GATSBY_IMS_SRC,t={}.GATSBY_IMS_CONFIG;e&&t?(0,n.Z)(r().mark((function a(){var n;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L(""+e);case 3:(n=JSON.parse(t)).onReady=function(){l(window.adobeIMS),T(!1)},window.adobeImsFactory.createIMSLib(n),window.adobeIMS.initialize(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error("AIO: IMS error.");case 12:return a.prev=12,T(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})))():(console.warn("AIO: IMS config missing."),T(!1))}),[]);var q=(0,b.K2)("915530536"),D=q.allMdx,Q=q.allSitePage,U=q.site,j=q.allGithub,H=q.allGithubContributors,J=U.siteMetadata,K=U.pathPrefix,X=J.home,V=J.versions,W=J.pages,$=J.subPages,ee=J.docs,te=(0,f.useState)(!1),ae=te[0],ne=te[1],oe=(0,f.useState)(!1),re=oe[0],fe=oe[1],ie=(0,f.useState)(!1),ce=ie[0],de=ie[1],se=(0,f.useState)(!1),le=se[0],be=se[1];(0,f.useEffect)((function(){new URL(window.location).searchParams.get(m.AQ.query)&&ne(!0)}),[ne]),(0,f.useEffect)((function(){window.onpopstate=function(){new URL(window.location).searchParams.get(m.AQ.query)?ne(!0):ne(!1)}}),[]),o.pathname=(0,m.Dm)(decodeURIComponent(o.pathname)),W.forEach((function(e){(0,m.y)(e),e.menu&&e.menu.forEach((function(e){(0,m.y)(e)}))})),V&&V.forEach((function(e){(0,m.y)(e)})),(0,m.y)(X),(0,m.y)(ee);var pe=function e(t){(0,m.y)(t),t.pages&&t.pages.forEach((function(t){e(t)}))};$&&$.forEach((function(e){pe(e)}));var ue=(0,m.A6)(o.pathname),me=(0,m.Gh)(W),he=(0,m.Lh)(ue,$),ve=(0,m.mL)(ue,me,$),ye=ve.length>0,ge=null==a?void 0:a.frontmatter,we=(0,k.ZP)(),Se=(0,k.ZP)(),ke="aio-Search-close";if(E("openAPI",ge,de),E("frame",ge,de),(0,f.useEffect)((function(){A&&u().get("https://raw.githubusercontent.com/AdobeDocs/search-indices/main/product-index-map.json").then((function(e){var t=e.data;"string"==typeof t?F(JSON.parse(t)):"[object Array]"==Object.prototype.toString.call(t)&&F(t)})).catch((function(e){console.error("AIO: Failed fetching search index.\n"+e)}))}),[]),"/search-frame"===K)return(0,c.tZ)(f.default.Fragment,null,(0,c.tZ)(i.q,null,(0,c.tZ)("noscript",null,"\n          <style>\n            #"+we+" {\n              grid-template-columns: 0 auto;\n            }\n            \n            #"+Se+" {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        ")),(0,c.tZ)(c.xB,{styles:(0,c.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:transparent;",ae&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,c.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:z},A&&Y&&(0,c.tZ)(v.o,{algolia:x,indexAll:Y,indexPrefix:I||"",showSearch:!0,setShowSearch:ne,searchButtonId:ke,isIFramed:!0})));var Ae="",Ie=function e(t,a){void 0===t&&(t=0);var n=document.getElementById("searchIframe");if(n.contentWindow.postMessage(JSON.stringify({localPathName:window.location.pathname}),"*"),"/"!==window.location.pathname&&Ae!==window.location.pathname){if(t>30)return void console.warn("Loading Search iFrame timed out");window.setTimeout((function(){e(n,t+1)}),100)}a||O()&&ne(!0);a=!0},xe=function e(){var t=document.getElementById("searchIframe");try{if("complete"===t.contentDocument.readyState)return void(t.onload=function(){Ie()})}catch(a){window.setTimeout(e,100)}},Pe=function(e){try{var t="string"==typeof e.data?JSON.parse(e.data):e.data;t.query?(G(m.AQ.query,t.query),G(m.AQ.keywords,t.keywords),G(m.AQ.index,t.index)):t.received&&(Ae=t.received)}catch(a){console.error(a)}};return(0,f.useEffect)((function(){window.addEventListener("message",Pe),A&&be(!0)}),[]),(0,f.useEffect)((function(){xe()}),[le]),(0,c.tZ)(f.default.Fragment,null,(0,c.tZ)(i.q,null,(0,c.tZ)("noscript",null,"\n          <style>\n            #"+we+" {\n              grid-template-columns: 0 auto;\n            }\n            \n            #"+Se+" {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        ")),(0,c.tZ)(c.xB,{styles:(0,c.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;",ae&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,c.tZ)(h.z,{value:{ims:s,isLoadingIms:B,location:o,pageContext:a,hasSideNav:ye,siteMetadata:J,pathPrefix:K,allSitePage:Q,allMdx:D,allGithub:j,allGithubContributors:H}},(0,c.tZ)(w.H,{title:null==ge?void 0:ge.title,description:null==ge?void 0:ge.description,keywords:null==ge?void 0:ge.keywords}),(0,c.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:N},(0,c.tZ)(f.default.Fragment,null,(0,c.tZ)("div",{id:we,css:(0,c.iv)("display:grid;grid-template-areas:'header header' 'sidenav main';grid-template-rows:var(--spectrum-global-dimension-size-800);grid-template-columns:",ye?m.dP+" auto":"0 auto",";@media screen and (max-width: ",m.Av,"){grid-template-columns:0 auto;}@media screen and (max-width: ",m.q9,"){grid-template-rows:var(--spectrum-global-dimension-size-1200);}")},(0,c.tZ)("div",{css:(0,c.iv)("grid-area:header;position:fixed;height:var(--spectrum-global-dimension-size-800);left:0;right:0;background-color:var(--spectrum-global-color-gray-50);z-index:2;@media screen and (max-width: ",m.q9,"){height:var(--spectrum-global-dimension-size-600);}")},(0,c.tZ)(g.e,{hasIMS:P,ims:s,isLoadingIms:B,home:X,versions:V,pages:W,docs:ee,location:o,hasSideNav:ye,toggleSideNav:function(){_(fe)},hasSearch:A&&null!==Y,showSearch:ae,setShowSearch:ne,searchButtonId:ke})),A&&le&&(0,c.tZ)("iframe",{id:"searchIframe",src:M(),tabIndex:"0",css:(0,c.iv)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0px;right:0px;bottom:0px;background-color:transparent;z-index:10;width:100%;height:100%;opacity:",ae?1:0,";visibility:",ae?"visible":"hidden",";")}),(0,c.tZ)("div",{id:Se,hidden:!ye,css:(0,c.iv)("grid-area:sidenav;position:fixed;z-index:1;width:",m.dP,";height:100%;background-color:var(--spectrum-global-color-gray-75);@media screen and (max-width: ",m.Av,"){transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(",re?"0":"-100%",");}")},ye&&(0,c.tZ)(y.k,{selectedPages:he,selectedSubPages:ve,setShowSideNav:fe})),(0,c.tZ)("div",{css:C},(0,c.tZ)("main",{hidden:!Z.openAPI.has},Z.openAPI.src&&Z.openAPI.block&&(0,f.createElement)(Z.openAPI.block,{src:Z.openAPI.src})),(0,c.tZ)("main",{hidden:!Z.frame.has},Z.frame.src&&Z.frame.block&&(0,f.createElement)(Z.frame.block,{src:Z.frame.src,height:null==ge?void 0:ge.frameHeight,location:o})),!Z.openAPI.has&&!Z.frame.has&&t)),(0,c.tZ)("div",{css:(0,c.iv)("position:fixed;top:0;left:0;right:0;bottom:0;display:",ce?"grid":"none",";place-items:center center;")},(0,c.tZ)(S._,{size:"L"})),ye&&(0,c.tZ)("div",{role:"presentation",css:(0,c.iv)("display:none;@media screen and (max-width: ",m.Av,"){display:block;transition:opacity 160ms ease-in;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;opacity:0;position:fixed;top:0;left:0;height:100%;width:100%;",re&&"\n                    pointer-events: auto;\n                    opacity: 1;\n                  ",";}"),onClick:function(){_(fe)}})))))}}}]);
//# sourceMappingURL=ff106bf9-50199f8b520bad5798db.js.map