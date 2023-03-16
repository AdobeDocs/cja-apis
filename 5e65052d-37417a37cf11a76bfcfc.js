"use strict";(self.webpackChunksubstance_3d_automation=self.webpackChunksubstance_3d_automation||[]).push([[305],{247:function(i,e,t){t.d(e,{F5:function(){return z},VM:function(){return T},ZG:function(){return Z}});var a=t(4942),n=t(63366),s=t(15007),r=t(71082),o=t(86029),d=t(63184),m=t(158),l=t(26777),c=t(24149),p=t(75900),u=t.n(p),g=t(36042),v=t.n(g),h=["className","background","theme","heading","image","icon","buttons","assetsImg","variant","containerHeight","width","customLayout","primaryOutline","isPrimaryBtn","variantsTypePrimary","variantsTypeSecondary","animationVideo"];function b(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.push.apply(t,a)}return t}function x(i){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,a.Z)(i,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(t,e))}))}return i}var f=function(i){var e;return"img"===(null==i||null===(e=i.props)||void 0===e?void 0:e.mdxType)?(0,s.cloneElement)(i,{loading:"eager"}):i},y=function(i,e){return void 0===e&&(e=""),"Learn more"===i&&""!==e?i+" about "+e:""+i},w={name:"2fzaxi",styles:"display:flex;flex-wrap:wrap;gap:var(--spectrum-global-dimension-size-200)"},z=function(i){var e=i.buttons,t=i.styles,a=void 0===t?["fill","outline"]:t,n=i.variants,r=void 0===n?["accent","secondary"]:n,l=i.heading,c=void 0===l?"":l,p=i.className;return e?(0,o.tZ)("div",null,(0,o.tZ)("div",{className:p,css:w},s.Children.map(e.props.children,(function(i,e){var t=a[0],n=r[0];e>0&&(t=a[1],n=r[1]);var s=(0,m.QK)(i);return(0,o.tZ)("div",{key:e},(0,o.tZ)(d.A,{"aria-label":y(s.props.children,c),href:s.props.href,variant:n,style:t},(0,o.tZ)("span",{class:"spectrum-Button-label"},s.props.children)))})))):null},Z=function(i){var e=i.image,t=i.styles;return e?(0,s.cloneElement)(e,{children:(0,m.ve)(e.props.children,f),css:(0,o.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:0;",t," .gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{object-fit:cover;}","")}):null},L=function(i){var e=i.texts,t=(i.customLayout,i.isTextWhite),a=void 0===t||t;return Object.keys(e).filter((function(i){return i.startsWith("text")})).map((function(i){return(0,s.cloneElement)(e[i],{className:"spectrum-Body spectrum-Body--sizeL",css:(0,o.iv)("&.spectrum-Body--sizeL{margin-top:0!important;",!0===a&&"\n            color: #fff!important;\n          "," &:last-of-type{margin-bottom:0!important;}}@media screen and (max-width: ",m.q9,"){padding:0 var(--spectrum-global-dimension-size-115);}","")})}))},j={name:"1vnctkn",styles:"margin-top:0;margin-bottom:var(--spectrum-global-dimension-size-200);&+p{margin-bottom:var(--spectrum-global-dimension-size-200);}"},k=function(i){var e=i.heading,t=i.variant,a=i.customLayout;return e?(0,s.cloneElement)(e,{mdxType:"h1",originalType:"h1",className:"default"===t||a?a?"spectrum-Heading--sizeXL spectrum-Heading--serif":"spectrum-Heading--sizeXL":"spectrum-Heading--sizeXXL spectrum-Heading--serif",css:j}):null},O={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},N={name:"m6iwhx",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-300)!important;.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{height:100%;object-fit:contain;}"},q={name:"1dtx8xj",styles:"display:flex;height:100%;justify-content:center"},U={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},P={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},A={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},E={name:"1p8rch3",styles:"margin-top:var(--spectrum-global-dimension-size-200)"},H={name:"yypzb5",styles:"margin-top:var(--spectrum-global-dimension-size-200);margin-bottom:var(--spectrum-global-dimension-size-200)"},T=function(i){var e=i.className,t=i.background,a=i.theme,d=void 0===a?"dark":a,p=i.heading,g=i.image,b=i.icon,y=i.buttons,w=i.assetsImg,j=i.variant,T=void 0===j?"default":j,X=(i.containerHeight,i.width),B=void 0===X?m.Av:X,C=i.customLayout,D=void 0!==C&&C,S=(i.primaryOutline,i.isPrimaryBtn,i.variantsTypePrimary),V=void 0===S?"accent":S,W=i.variantsTypeSecondary,_=void 0===W?"secondary":W,F=i.animationVideo,G=void 0===F?"":F,I=(0,n.Z)(i,h),K=(0,s.useContext)(l.Z),M=K.siteMetadata,J=K.location;if((0,s.useEffect)((function(){if(G){var i=v().loadAnimation({container:document.querySelector("#svgContainer"),renderer:"svg",loop:!1,autoplay:!0,animationData:G});i.addEventListener("enterFrame",(function(e){e.currentTime>i.totalFrames-25&&i.pause()}))}}),[]),!T||"default"===T){var Q=M.home,Y=M.pages,R=(0,m.A6)(J.pathname),$=(0,m.Gh)(Y),ii=(0,m.Yx)(R,$),ei=(0,m.xH)(R,ii);return(0,o.tZ)("section",{className:u()(e,"spectrum--"+d),css:(0,o.iv)("position:relative;height:var(--spectrum-global-dimension-size-3400);margin-bottom:var(--spectrum-global-dimension-size-400);background-color:",null!=t?t:"rgb( 29, 125, 238)",";width:100%;display:flex;@media screen and (max-width: ",m.Av,"){overflow:auto;}@media screen and (max-width: ",m.q9,"){height:calc(100vh - var(--spectrum-global-dimension-size-1200));}","")},(0,o.tZ)(Z,{image:g,styles:"position: absolute;"}),(0,o.tZ)("div",{css:(0,o.iv)("margin:auto;display:flex;position:relative;height:100%;max-width:",B,";flex-direction:row;width:100%;align-items:center;&>p{margin-top:0!important;}","")},(0,o.tZ)("div",{css:(0,o.iv)("width:calc(5 * 100% / 12);position:absolute;display:flex;flex-direction:column;&>p{margin-top:var(--spectrum-global-dimension-size-225)!important;margin-bottom:0!important;}@media screen and (max-width: ",m.Av,"){width:auto;padding:0 var(--spectrum-global-dimension-size-400);}","")},!0!==(null==Q?void 0:Q.hidden)&&(null==Q?void 0:Q.title)&&(null==Q?void 0:Q.href)&&ii&&(0,o.tZ)(c.O,{pages:[m.JK,Q,x(x({},ii),{},{href:(0,r.dq)(ii.href)}),ei&&x(x({},ei),{},{href:(0,r.dq)(ei.href)})]}),(0,o.tZ)(k,{heading:p,variant:T}),(0,o.tZ)(L,{texts:I}))))}var ti,ai,ni,si,ri="calc(var(--spectrum-global-dimension-size-6000) + var(--spectrum-global-dimension-size-1800))";return"fullwidth"===T&&D?(0,o.tZ)("section",{className:u()(e,"spectrum--"+d),css:(0,o.iv)("width:100%;background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";@media screen and (max-width: ",m.LU,"){overflow:auto;}@media screen and (max-width: ",m.q9,"){.spectrum-Heading--sizeXL{font-size:var(--spectrum-alias-heading-l-text-size);}}","")},(0,o.tZ)(Z,{image:g}),(0,o.tZ)("div",{css:(0,o.iv)("height:100%;top:0;bottom:0;width:100%;box-sizing:border-box;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;text-align:center;h1{padding:var(--spectrum-global-dimension-size-500) var(--spectrum-global-dimension-size-300) var(--spectrum-global-dimension-size-0)!important;}@media screen and (max-width: ",m.q9,"){padding:0!important;}@media screen and (max-width: ",m.LU,"){padding:0 var(--spectrum-global-dimension-size-250);h1{padding:var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-200) var(--spectrum-global-dimension-size-0)!important;}}","")},p&&(0,o.tZ)(k,{heading:p,variant:T,customLayout:D}),(0,o.tZ)(L,{texts:I}),y?(0,o.tZ)(z,{buttons:y,styles:["fill","outline"],variants:[V,_],css:H}):(0,o.tZ)("div",{css:E}),(0,o.tZ)("div",{className:null==w||null===(ti=w.props)||void 0===ti?void 0:ti.children}))):"video"===T&&G?(0,o.tZ)("section",{className:u()(e,"spectrum--"+d),css:(0,o.iv)("background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";width:100%;overflow:hidden;height:auto;@media screen and (max-width: ",m.LU,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}@media screen and (max-width: ",m.q9,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}","")},(0,o.tZ)("div",{css:(0,o.iv)("@media screen and (min-width: ",m.Av,"){position:relative;max-width:",m.Av," margin:auto;}","")},(0,o.tZ)("div",{css:(0,o.iv)("@media screen and (max-width: ",m.LU,"){display:none;}","")},(0,o.tZ)("div",{id:"svgContainer"})),(0,o.tZ)("div",{css:(0,o.iv)("display:flex;height:100%;max-width:",B,";margin:auto;@media screen and (max-width: ",m.q9,"){display:inline;}","")},(0,o.tZ)("div",{css:(0,o.iv)("display:flex;flex-direction:column;justify-content:center!important;position:absolute;padding:0;top:0;text-align:left;width:30%;align-item:center;bottom:0;box-sizing:border-box;@media screen and (max-width: ",m.q9,"){padding:0!important;width:100%!important;position:initial!important;}@media screen and (max-width: ",m.LU,"){padding:0 var(--spectrum-global-dimension-size-100);width:100%!important;top:20px!important;position:initial!important;h1{padding:0 var(--spectrum-global-dimension-size-200) 0 var(--spectrum-global-dimension-size-0)!important;font-size:var(--spectrum-heading-l-text-size, var(--spectrum-alias-heading-l-text-size));}}","")},p&&(0,o.tZ)(k,{heading:p,variant:T,customLayout:D}),(0,o.tZ)(L,{texts:I}),(0,o.tZ)(z,{buttons:y,styles:["outline"],variants:["staticWhite"],css:A})),(0,o.tZ)("div",{css:(0,o.iv)("max-width:",B,";margin:auto;display:none;@media screen and (max-width: ",m.LU,"){display:block;}@media screen and (max-width: ",m.q9,"){display:inline;}","")},(0,o.tZ)("div",{className:null==w||null===(ai=w.props)||void 0===ai?void 0:ai.children}))))):"halfwidth"===T&&D?(0,o.tZ)("section",{className:u()(e,"spectrum--"+d),css:(0,o.iv)("background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";width:100%;overflow:hidden;height:auto;@media screen and (max-width: ",m.LU,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}@media screen and (max-width: ",m.q9,"){height:auto;padding:var(--spectrum-global-dimension-size-225);box-sizing:border-box;}","")},(0,o.tZ)("div",{css:(0,o.iv)("@media screen and (min-width: ",m.Av,"){display:flex;justify-content:space-between;position:relative;max-width:",m.Av,";margin:auto;}","")},(0,o.tZ)("div",{css:(0,o.iv)("display:flex;flex-direction:column;justify-content:center!important;padding:0;top:0;text-align:left;width:36%;align-item:center;bottom:0;box-sizing:border-box;@media screen and (max-width: ",m.q9,"){padding:0!important;width:100%!important;position:initial!important;}@media screen and (max-width: ",m.LU,"){padding:0 var(--spectrum-global-dimension-size-100);width:100%!important;top:20px!important;position:initial!important;h1{padding:0 var(--spectrum-global-dimension-size-200) 0 var(--spectrum-global-dimension-size-0)!important;font-size:var(--spectrum-heading-l-text-size, var(--spectrum-alias-heading-l-text-size));}}","")},b&&(0,s.cloneElement)(b,{children:(0,m.ve)(b.props.children,f),css:(0,o.iv)("height:var(--spectrum-global-dimension-size-400);width:var(--spectrum-global-dimension-size-3600);margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-300)!important;@media screen and (max-width: ",m.q9,"){width:var(--spectrum-global-dimension-size-3000)!important;}.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{height:100%;object-fit:contain;}","")}),p&&(0,o.tZ)(k,{heading:p,variant:T,customLayout:D}),(0,o.tZ)(L,{texts:I}),(0,o.tZ)(z,{buttons:y,css:P,variants:[V,_],style:["outine"]})),(0,o.tZ)("div",null,(0,o.tZ)("div",{className:null==w||null===(ni=w.props)||void 0===ni?void 0:ni.children})))):"fullwidth"===T?(0,o.tZ)("section",{className:u()(e,"spectrum--"+d),css:(0,o.iv)("position:relative;width:100%;height:",ri,";background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";@media screen and (max-width: ",m.LU,"){overflow:auto;}@media screen and (max-width: ",m.q9,"){height:100vh;.spectrum-Heading--sizeXXL{font-size:var(--spectrum-alias-heading-xl-text-size);}}","")},(0,o.tZ)(Z,{image:g}),(0,o.tZ)("div",{css:(0,o.iv)("height:100%;position:absolute;top:0;width:100%;box-sizing:border-box;padding:0 calc(var(--spectrum-global-dimension-size-3600) + var(--spectrum-global-dimension-size-125));display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;@media screen and (max-width: ",m.LU,"){padding:0 var(--spectrum-global-dimension-size-400);}","")},(0,o.tZ)(k,{heading:p,variant:T}),(0,o.tZ)(L,{texts:I}),(0,o.tZ)(z,{buttons:y,variants:["accent","secondary"],css:U}),(0,o.tZ)("div",{className:null==w||null===(si=w.props)||void 0===si?void 0:si.children}))):"halfwidth"===T?(0,o.tZ)("section",{className:u()(e,"spectrum--lightest"),css:(0,o.iv)("background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";width:100%;height:",ri,";overflow:hidden;@media screen and (max-width: ",m.LU,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}","")},(0,o.tZ)("div",{css:q},(0,o.tZ)("div",{css:(0,o.iv)("display:flex;flex-direction:column;justify-content:center;width:calc(5 * 100% / 12);margin-left:var(--spectrum-global-dimension-size-800);margin-right:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",m.LU,"){width:100%;margin:0;}","")},b&&(0,s.cloneElement)(b,{children:(0,m.ve)(b.props.children,f),css:N}),(0,o.tZ)(k,{heading:p,isVariant:!0}),(0,o.tZ)(L,{texts:I,isTextWhite:!1}),(0,o.tZ)(z,{buttons:y,css:O})),(0,o.tZ)("div",{css:(0,o.iv)("flex:1;@media screen and (max-width: ",m.LU,"){display:none;}","")},(0,o.tZ)(Z,{image:g})))):void 0}}}]);
//# sourceMappingURL=5e65052d-37417a37cf11a76bfcfc.js.map