(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ZZ3V:function(e,i,t){"use strict";t.d(i,"a",(function(){return x}));var n=t("zLVn"),a=t("q1tI"),s=t.n(a),r=t("qKvR"),o=t("VbIy"),c=t("v6zw"),d=(t("SOE8"),t("fIMd")),m=t("VggG");var l={2:0,3:0,4:0},b=["margin-left: 0;","margin-right: 0;"],g=function(e){var i=e.icons,t=e.isCentered;return i?s.a.cloneElement(i,{css:Object(r.b)("list-style:none;padding:0;margin-bottom:var(--spectrum-global-dimension-size-400) !important;display:flex;justify-content:",t?"center":"left",";& li{display:flex;border-right:1px solid var(--spectrum-global-color-gray-300);}& img{height:var(--spectrum-global-dimension-size-600);}& li:last-of-type{padding-right:0;border-right:none;}")}):null},p=function(e){var i=e.texts;return Object.keys(i).filter((function(e){return e.startsWith("text")})).map((function(e){return i[e]}))},u=function(e){var i=e.links,t=e.isCentered;return i?s.a.cloneElement(i,{css:Object(r.b)("list-style:none;padding:0;display:flex;justify-content:",t?"center":"left",";margin-top:",t?"var(--spectrum-global-dimension-size-200) !important;":"var(--spectrum-global-dimension-size-600) !important;",";@media screen and (max-width:",m.a,"){flex-direction:column;align-items:",t?"center":"left",";li{margin-top:var(--spectrum-global-dimension-size-100);}}& li{display:flex;align-items:center;}& li a{white-space:nowrap;margin-right:var(--spectrum-global-dimension-size-600);}& li:last-of-type a{margin-right:0;}& img{max-height:var(--spectrum-global-dimension-size-400);margin-right:var(--spectrum-global-dimension-size-150);border-radius:0;}")}):null},h=function(e){var i=e.video,t=null;if(i){var n=Object(m.i)(i),a=new URL(n.props.href);if(a.hostname.startsWith("youtube.com")||a.hostname.startsWith("www.youtube.com"))t=new URLSearchParams(a.search).get("v");else a.hostname.startsWith("youtu.be")&&(t=a.pathname.slice(1))}return t?Object(r.c)("div",{css:Object(r.b)("&{display:inline;width:",Object(m.m)(6),";box-sizing:border-box;padding:0 var(--spectrum-global-dimension-size-400);margin:auto;@media screen and (max-width:",m.a,"){display:block;width:100%;}}")},Object(r.c)(d.YouTube,{youTubeId:t})):null},v={name:"o42vvz",styles:"height:var(--spectrum-global-dimension-size-1000);margin-top:0;margin-bottom:var(--spectrum-global-dimension-size-300);& img{height:100%;border-radius:0;object-fit:contain;}"},f={name:"ohml2a",styles:"margin-bottom:var(--spectrum-global-dimension-size-200) !important;& ~ p{margin-top:0;margin-bottom:0 !important;}"},j={name:"1pbap2k",styles:"width:100%;background:var(--spectrum-global-color-gray-100);"},w={name:"1kehwt5",styles:"margin-top:0 !important;margin-bottom:var(--spectrum-global-dimension-size-200) !important;& + p{margin-top:0 !important;}"},x=function(e){var i=e.heading,t=e.links,d=e.buttons,x=e.icons,O=e.image,z=e.video,y=e.theme,k=void 0===y?"lightest":y,C=e.width,E=void 0===C?"100%":C,W=e.isCentered,T=void 0!==W&&W,I=Object(n.a)(e,["heading","links","buttons","icons","image","video","theme","width","isCentered"]),N=100/parseFloat(E);if("33%"===E&&(E=(100/3).toFixed(2)+"%",N=3),Object(a.useEffect)((function(){return function(){void 0!==l[N]&&l[N]--}})),T){var V="",F="";return void 0!==l[N]&&l[N]++,1===N?V="max-width: "+Object(m.m)(6)+";":N>3?V="max-width: var(--spectrum-global-dimension-size-3600);":(V="max-width: var(--spectrum-global-dimension-size-4600);",F=b[l[N]%N]),Object(r.c)(s.a.Fragment,null,Object(r.c)("section",{className:"spectrum--"+k,css:Object(r.b)("display:table-cell;width:",E.replace("%","vw"),";background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-1000) 0;@media screen and (max-width:",m.a,"){display:block;width:100%;}")},Object(r.c)("div",{css:Object(r.b)(V," padding:0 var(--spectrum-global-dimension-size-400);margin:auto;",F," @media screen and (max-width:",m.a,"){max-width:none;margin:auto;}")},Object(r.c)(g,{icons:x,isCentered:T}),O&&s.a.cloneElement(O,{css:v}),i&&Object(r.c)("h3",{className:"spectrum-Heading--M",css:f},i.props.children),Object(r.c)(p,{texts:I}),Object(r.c)(o.b,{buttons:d,marginTop:"size-150",marginBottom:"size-150",justifyContent:"center"}),Object(r.c)(u,{links:t,isCentered:T}),z&&Object(r.c)(c.t,{marginTop:"size-400"},Object(r.c)(h,{video:z})))),void 0!==l[N]&&l[N]%N==0?Object(r.c)("div",{"aria-hidden":"true"}):null)}var L=I.slots.endsWith("image")||I.slots.endsWith("video");return Object(r.c)("section",{className:"spectrum--"+k,css:j},Object(r.c)("div",{css:Object(r.b)("width:var(--spectrum-global-dimension-static-grid-fixed-max-width);box-sizing:border-box;margin:auto;padding:var(--spectrum-global-dimension-size-1000) 0;@media screen and (max-width:",m.a,"){width:100%;& > div{flex-direction:column !important;}}")},Object(r.c)("div",{css:Object(r.b)("display:flex;align-items:center;flex-direction:",L?"row-reverse":"row",";@media screen and (max-width:",m.a,"){flex-direction:column;}")},O&&s.a.cloneElement(O,{css:Object(r.b)("display:flex;align-items:center;justify-content:center;width:50%;height:calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-225));box-sizing:border-box;padding:0 var(--spectrum-global-dimension-size-100);margin-top:0;@media screen and (max-width:",m.a,"){width:100%;}& img{height:100%;border-radius:0;object-fit:contain;}")}),Object(r.c)(h,{video:z}),Object(r.c)("div",{css:Object(r.b)("width:50%;display:flex;flex-direction:column;justify-content:center;text-align:left;box-sizing:border-box;padding:0 var(--spectrum-global-dimension-size-400);@media screen and (max-width:",m.a,"){width:100%;margin:var(--spectrum-global-dimension-size-400) 0;}")},Object(r.c)(g,{icons:x,isCentered:T}),i&&Object(r.c)("h3",{className:"spectrum-Heading--M",css:w},i.props.children),Object(r.c)(p,{texts:I}),Object(r.c)(o.b,{buttons:d,marginTop:"size-400"}),Object(r.c)(u,{links:t,isCentered:T})))))}}}]);
//# sourceMappingURL=8b61fb39-d7e0631839ea3081dd8a.js.map