"use strict";(self.webpackChunkcja_apis=self.webpackChunkcja_apis||[]).push([[1206],{91515:function(e,t,n){var r=n(42982),i=n(4942),l=(n(38559),n(15007)),o=n(1597),a=n(64983),s=n(95223),d=n(26777),u=n(44264),v=n(42075),p=n(23576),c=n(69679),m=n(56013),h=n(24149),f=n(48261),g=n(31160),b=n(21183),y=n(45553),x=n(47029),Z=n(60325),w=n(1931),P=n(9732);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){for(var t=e.childrenArray,n=e.query,r=e.hasSideNav,i=[],o=null,a=null,s=function(){var e=t[0],s=0;Object.keys(P.a).forEach((function(d){var v;if((null==e||null===(v=e.props)||void 0===v?void 0:v.mdxType)===d){s++;var p=[];if(e.props.slots||e.props.repeat)for(var c=Math.max(parseInt(e.props.repeat)||1,1),m=function(n){p=p.concat((e.props.slots||"element").split(",").map((function(e,r){return[""+e.trim()+(1===c?"":n),t[p.length+r+1]]})))},h=0;h<c;h++)m(h);if(p.length){s+=p.length;var f=Object.fromEntries(p);"Variant"===e.props.mdxType&&(f.query=n),"Hero"===e.props.mdxType&&r&&(f.width="calc("+u.Av+" - "+u.dP+");");var g=(0,l.cloneElement)(e,j({},f));"Hero"===e.props.mdxType?o=o||g:"Resources"===e.props.mdxType?a=a||g:i.push(g)}else i.push(e)}})),0===s&&(s++,i.push(e)),t=t.splice(s)};t.length;)s();return{filteredChildren:i,heroChild:o,resourcesChild:a}},k={name:"donbax",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200);position:sticky;bottom:3px;background:white;border:1px solid;border-color:lightgray;border-radius:4px;padding:.75rem"},q={name:"4zleql",styles:"display:block"},A={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},z={name:"zjik7",styles:"display:flex"},D={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=function(e){var t,n=e.children,i=e.pageContext,O=e.query,M=(0,l.useContext)(d.ZP),N=M.hasSideNav,S=M.siteMetadata,E=M.location,T=M.allSitePage,B=M.allMdx,L=M.allGithub,_=M.allGithubContributors,I=void 0===i,X=l.Children.toArray(n);if(I||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){var G=C({childrenArray:(0,Z.L)(X),query:O,hasSideNav:N}).filteredChildren;return I?(0,s.tZ)(a.MDXProvider,null,G):(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},G,(0,s.tZ)(v.$,{hasSideNav:N}))}var H,Y,J,K,R,$,V,F,Q,U,W,ee,te,ne,re,ie,le,oe,ae,se,de=(0,u.kR)(null==E?void 0:E.pathname,null==S?void 0:S.subPages),ue=(0,u.P4)(null==E?void 0:E.pathname,null==S?void 0:S.subPages),ve=(0,u.sl)(null==E?void 0:E.pathname,null==S?void 0:S.subPages),pe=ve.nextPage,ce=ve.previousPage,me=null==i||null===(H=i.frontmatter)||void 0===H?void 0:H.contributor_name,he=null==i||null===(Y=i.frontmatter)||void 0===Y?void 0:Y.contributor_link,fe=null==i||null===(J=i.frontmatter)||void 0===J?void 0:J.edition,ge=null==T?void 0:T.nodes.find((function(e){var t=e.path;return(0,o.dq)(t)===(null==E?void 0:E.pathname)})),be=null!==(K=null==ge?void 0:ge.component)&&void 0!==K?K:"",ye=null==B?void 0:B.nodes.find((function(e){return e.fileAbsolutePath===be})),xe=null!==(R=null==ye?void 0:ye.tableOfContents)&&void 0!==R?R:{},Ze=null==L?void 0:L.nodes[0],we=Ze.repository,Pe=Ze.default_branch,Oe=Ze.root,je=null==_?void 0:_.nodes.find((function(e){return e.path===be})),Ce=null!==($=null==je?void 0:je.contributors)&&void 0!==$?$:[],ke=be.replace(/.*\/src\/pages\//g,""),qe=void 0!==(null==i||null===(V=i.frontmatter)||void 0===V?void 0:V.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof qe)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");var Ae=S.home,ze=(0,u.A6)(E.pathname),De=(0,u.Gh)(null==S?void 0:S.pages),Me=(0,u.Yx)(ze,De),Ne=(0,u.xH)(ze,Me),Se=(0,u.Lh)(null==E?void 0:E.pathname,null==S?void 0:S.subPages),Ee=[];if(Se.length)for(var Te=Se[Se.length-1].level+1,Be=function(e){var t=Se.filter((function(t){return t.level===e}));t.length&&Ee.push(t.pop())},Le=0;Le<Te;Le++)Be(Le);var _e=!1;null!=i&&null!==(F=i.frontmatter)&&void 0!==F&&F.jsDoc&&(_e=!0,X=(0,Z.L)(X));var Ie=C({childrenArray:X,hasSideNav:N}),Xe=Ie.filteredChildren,Ge=Ie.heroChild,He=Ie.resourcesChild,Ye=null===Ge,Je=null!==Ge&&(!Ge.props.variant||"default"===Ge.props.variant),Ke=null!==Ge&&Ge.props.variant&&"default"!==Ge.props.variant,Re=null==xe||null===(Q=xe.items)||void 0===Q||null===(U=Q[0])||void 0===U?void 0:U.items,$e=!Ge&&(N||_e)&&Re&&(Re.length>1||1===Re.length&&(null===(W=Re[0])||void 0===W||null===(ee=W.items)||void 0===ee?void 0:ee.length)>1||(null===(te=Re[0])||void 0===te?void 0:te.title)),Ve=Boolean(He),Fe=(null==de?void 0:de.pathname)===(null==ue||null===(ne=ue[0])||void 0===ne?void 0:ne.pathname),Qe=[],Ue=0;if(N&&++Ue,$e&&++Ue,Ve&&++Ue,Ue>0){var We=(0,u.MY)(Ue+1);Qe.push(We+" - var(--spectrum-global-dimension-size-400)")}return N&&Qe.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},(0,s.tZ)("main",{css:D},Ge&&Ge,(0,s.tZ)("div",{css:(0,s.iv)(Ke?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",Je&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:z},(0,s.tZ)("div",{css:(0,s.iv)("width:",Ke?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(12,Qe),";@media screen and (max-width: ",u.Av,"){width:100%;}")},Ye&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!qe&&Me&&(0,s.tZ)("div",{css:A},!0!==(null==Ae?void 0:Ae.hidden)&&null!=Ae&&Ae.title&&null!=Ae&&Ae.href?(0,s.tZ)(h.O,{pages:[u.JK,Ae,j(j({},Me),{},{href:(0,o.dq)(Me.href)}),Ne&&j(j({},Ne),{},{href:(0,o.dq)(Ne.href)})].concat((0,r.Z)(Ee.map((function(e){return j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))}):(0,s.tZ)(h.O,{pages:[u.JK,(null==S||null===(re=S.pages)||void 0===re?void 0:re.length)>1?j(j({},null==S||null===(ie=S.pages)||void 0===ie?void 0:ie[0]),{},{href:(0,o.dq)(null==S||null===(le=S.pages)||void 0===le||null===(oe=le[0])||void 0===oe?void 0:oe.href)}):null,j(j({},Me),{},{href:(0,o.dq)(Me.href)}),Ne&&j(j({},Ne),{},{href:(0,o.dq)(Ne.href)})].concat((0,r.Z)(Ee.map((function(e){return e.title===(null==Me?void 0:Me.title)&&e.href===(null==Me?void 0:Me.href)?null:j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},S&&S.githubIssue&&S.githubIssue.removeLogIssue?null:(0,s.tZ)(m.X,{repository:we,branch:Pe,root:Oe,pagePath:ke}))),(0,s.tZ)("div",{css:q},fe&&(0,s.tZ)(g.c,{name:fe}),he&&(0,s.tZ)(f.x,{name:me,link:he})),Xe,Ye&&Fe&&(0,s.tZ)(y.x,{pages:ue}),Ye&&(0,s.tZ)(x.m,{nextPage:pe,previousPage:ce}),!Ke&&(0,s.tZ)("div",{css:k},(0,s.tZ)("div",null,(0,s.tZ)(p.T,{repository:we,branch:Pe,root:Oe,pagePath:ke,contributors:Ce,externalContributors:null==i||null===(ae=i.frontmatter)||void 0===ae?void 0:ae.contributors,date:null!==(se=Ce[0])&&void 0!==se&&se.date?new Date(Ce[0].date).toLocaleDateString():""})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(c.x,null)))),$e&&(0,s.tZ)(b.m,{tableOfContents:xe}),Ve&&He)),(0,s.tZ)(v.$,{hasSideNav:N})))}}}]);
//# sourceMappingURL=2dee68d8-06b0cdd7b3c454fff41c.js.map