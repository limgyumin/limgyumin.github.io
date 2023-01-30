(self.webpackChunkblog_v2=self.webpackChunkblog_v2||[]).push([[989],{1285:(n,e,t)=>{var r={"./2022-retrospection.md":1781,"./new-blog.md":8246,"./ts-infer.md":3455,"./ts-interface.md":9152,"./ts-type-guard.md":3301};function i(n){var e=o(n);return t(e)}function o(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=o,n.exports=i,i.id=1285},4395:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r,i,o=t(168),a=t(7294),c=t(9163),u=c.default.div(r||(r=(0,o.Z)(["\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n"]))),l=c.default.main(i||(i=(0,o.Z)(["\n  max-width: ",";\n  width: inherit;\n  padding: 8rem 1rem 4rem;\n\n  "," {\n    padding: 6rem 1rem 4rem;\n  }\n"])),(function(n){return n.$width}),(function(n){return n.theme.medias.tablet}));const s=function(n){var e=n.as,t=void 0===e?"main":e,r=n.width,i=void 0===r?"700px":r,o=n.children;return a.createElement(u,null,a.createElement(l,{as:t,$width:i},o))}},3288:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r,i,o=t(885),a=t(4942),c=t(7294);!function(n){n.Min="min",n.Max="max"}(i||(i={}));var u=(r={},(0,a.Z)(r,i.Max,(function(n,e){return n>e})),(0,a.Z)(r,i.Min,(function(n,e){return n<e})),r);const l=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"max",t=u[e],r=(0,c.useState)(t(n,window.innerWidth)),i=(0,o.Z)(r,2),a=i[0],l=i[1],s=function(){return l(t(n,window.innerWidth))};return(0,c.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),a}},699:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r=t(5861),i=t(5671),o=t(3144),a=t(7757),c=t.n(a);const u=function(){function n(){(0,i.Z)(this,n)}return(0,o.Z)(n,[{key:"extract",value:function(n){return n.replace(/^\.\/([a-zA-Z_/]+\/)?|\.[a-z]+$/gm,"")}}]),n}(),l=new(function(){function n(e){(0,i.Z)(this,n),this.context=e}var e,t,a;return(0,o.Z)(n,[{key:"getData",value:(a=(0,r.Z)(c().mark((function n(e){var t,r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.context(e),r=(new u).extract(e),n.next=4,fetch(t).then((function(n){return n.text()}));case 4:return i=n.sent,n.abrupt("return",{fileName:r,data:i});case 6:case"end":return n.stop()}}),n,this)}))),function(n){return a.apply(this,arguments)})},{key:"import",value:(t=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=new u,r=this.context.keys().find((function(n){return t.extract(n)===e}))){n.next=4;break}throw new Error("File ".concat(e," not found."));case 4:return n.abrupt("return",this.getData(r));case 5:case"end":return n.stop()}}),n,this)}))),function(n){return t.apply(this,arguments)})},{key:"importAll",value:(e=(0,r.Z)(c().mark((function n(){var e,t=this;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(this.context.keys().map((function(n){return t.getData(n)})));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})}]),n}())(t(1285))},9040:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r=t(885),i=t(2982),o=t(5671),a=t(3144);const c=function(){function n(){(0,o.Z)(this,n)}return(0,a.Z)(n,[{key:"extract",value:function(n){var e=n.match(/(\x2D\x2D\x2D\n)([\s\S]*?)(\n\x2D\x2D\x2D)/m);if(!e)throw new Error("".concat(n," has no matching result."));return(0,r.Z)(e,3)[2]}}]),n}();var u={title:"",description:"",category:"",createdAt:""};const l=function(){function n(){(0,o.Z)(this,n)}return(0,a.Z)(n,[{key:"transform",value:function(n){var e=(new c).extract(n);return(0,i.Z)(e.matchAll(/(\w+):\s?(.+)/gm)).reduce((function(n,e){var t=(0,r.Z)(e,3),i=t[1],o=t[2];return Object.prototype.hasOwnProperty.call(u,i)&&null!=o&&(n[i]=o),n}),u)}}]),n}()},7694:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r,C:()=>a});var r,i=t(5671),o=t(3144);!function(n){n.Success="success",n.Failure="failure"}(r||(r={}));const a=function(){function n(e){(0,i.Z)(this,n),this.validations=e}return(0,o.Z)(n,[{key:"validate",value:function(n){var e=this;return Object.keys(this.validations).forEach((function(t){e.validations[t].forEach((function(e){var i=e(n[t]);if(i.state===r.Failure)throw new Error(i.reason)}))})),n}}]),n}()},4666:(n,e,t)=>{"use strict";t.d(e,{U:()=>i});var r=t(7694),i=function(n){return""!==n.replace(/\s/gm,"")?{state:r.Z.Success}:{state:r.Z.Failure,reason:"Value is empty."}}},8510:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(5671),i=t(3144);const o=function(){function n(e){(0,r.Z)(this,n),this.id=e.id,this.title=e.title,this.description=e.description,this.category=e.category,this.createdAt=e.createdAt}return(0,i.Z)(n,null,[{key:"makeInstance",value:function(e){return new n(e)}}]),n}()},2989:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>Xn});var r=t(885),i=t(7294),o=t(1647),a=t(4395),c=t(7038),u=t(168),l=t(9163),s=t(1279),f=t(5861),d=t(5671),m=t(3144),h=t(4942),p=t(7757),v=t.n(p),g=t(8949),b=t(699),w=t(7694),y=t(4666);const x=new w.C({id:[y.U],title:[y.U],description:[],category:[],createdAt:[y.U],article:[y.U]});var Z=t(9040);const k=function(){function n(){(0,d.Z)(this,n)}return(0,m.Z)(n,[{key:"extract",value:function(n){return n.replace(/\x2D\x2D\x2D\n[\s\S]*?\n\x2D\x2D\x2D\n?/m,"")}}]),n}();function E(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function D(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?E(Object(t),!0).forEach((function(e){(0,h.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}const O=function(){function n(){(0,d.Z)(this,n)}var e;return(0,m.Z)(n,[{key:"load",value:(e=(0,f.Z)(v().mark((function n(e){var t,r,i;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.Z.import(e);case 2:return t=n.sent,r=(new Z.Z).transform(t.data),i=(new k).extract(t.data),n.abrupt("return",x.validate(D(D({id:t.fileName},r),{},{article:i})));case 6:case"end":return n.stop()}}),n)}))),function(n){return e.apply(this,arguments)})}]),n}(),z=function(){function n(){(0,d.Z)(this,n)}var e;return(0,m.Z)(n,[{key:"find",value:(e=(0,f.Z)(v().mark((function n(e){return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(new O).load(e));case 1:case"end":return n.stop()}}),n)}))),function(n){return e.apply(this,arguments)})}]),n}();var S=t(9340),j=t(4575),P=t(1120);const G=function(n){(0,S.Z)(i,n);var e,t,r=(e=i,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,P.Z)(e);if(t){var i=(0,P.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,j.Z)(this,n)});function i(n){var e;return(0,d.Z)(this,i),(e=r.call(this,n)).article=n.article,e}return(0,m.Z)(i,null,[{key:"makeInstance",value:function(n){return new i(n)}}]),i}(t(8510).Z),A=new(function(){function n(){(0,d.Z)(this,n),(0,h.Z)(this,"postDetail",null),(0,g.rC)(this,{postDetail:g.LO,fetch:g.aD.bound})}var e;return(0,m.Z)(n,[{key:"fetch",value:(e=(0,f.Z)(v().mark((function n(e){var t,r=this;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.postDetail=null,n.next=3,(new z).find(e);case 3:t=n.sent,(0,g.z)((function(){r.postDetail=G.makeInstance(t)}));case 5:case"end":return n.stop()}}),n,this)}))),function(n){return e.apply(this,arguments)})}]),n}());var M,R,C,L,N=t(4574),B=(0,i.forwardRef)((function(n,e){var t=A.postDetail;if(null===t)return null;var r=t.title,o=t.category,a=t.createdAt,c=new N.Z(a).format();return i.createElement(U,{ref:e},o&&i.createElement($,{"data-testid":"post-header-category"},o.toUpperCase()),i.createElement(H,{"data-testid":"post-header-title"},r),i.createElement(F,{"data-testid":"post-header-created-at"},i.createElement(s.HaR,null),c))})),U=l.default.div(M||(M=(0,u.Z)(["\n  width: 100%;\n  padding-bottom: 3.5rem;\n  text-align: center;\n\n  "," {\n    padding-bottom: 2.5rem;\n  }\n"])),(function(n){return n.theme.medias.tablet})),$=l.default.span(R||(R=(0,u.Z)(["\n  display: inline-block;\n  margin-bottom: 1.375rem;\n  padding: 0.4rem 0.75rem;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  border-radius: 6px;\n  letter-spacing: 1px;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.bgGray}),(function(n){return n.theme.colors.ftBlack})),H=l.default.h1(C||(C=(0,u.Z)(["\n  margin-bottom: 1.375rem;\n  font-weight: 700;\n  font-size: 3.125rem;\n  line-height: 1.2;\n  color: ",";\n  word-break: keep-all;\n\n  "," {\n    font-size: 2.25rem;\n  }\n"])),(function(n){return n.theme.colors.ftBlack}),(function(n){return n.theme.medias.tablet})),F=l.default.p(L||(L=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: ",";\n\n  & > svg {\n    margin-right: 0.375rem;\n  }\n"])),(function(n){return n.theme.colors.ftGrayDark}));const _=(0,o.Pi)(B);var I,W,T=function(){var n=document.documentElement,e=n.scrollTop,t=n.scrollHeight,r=n.clientHeight;return Math.floor(e/(t-r)*100)},q=l.default.div(I||(I=(0,u.Z)(["\n  margin-left: 3rem;\n  width: 3px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.bdGrayDark})),J=l.default.div(W||(W=(0,u.Z)(["\n  width: inherit;\n  height: ","%;\n  background-color: ",";\n"])),(function(n){return n.$height}),(function(n){return n.theme.colors.bgBlack}));const V=function(){var n=(0,i.useState)(T()),e=(0,r.Z)(n,2),t=e[0],o=e[1],a=function(){return o(T())};return(0,i.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}})),i.createElement(q,null,i.createElement(J,{$height:t}))};var K=t(2582);const Q=function(){function n(e){(0,d.Z)(this,n),this.value=e}return(0,m.Z)(n,[{key:"space2Hyphen",value:function(){return this.value=this.value.replace(/\s/g,"-"),this}},{key:"removeSpecialSymbols",value:function(){return this.value=this.value.replace(/[^ㄱ-힣a-zA-Z0-9-\s]+/g,""),this}},{key:"get",value:function(){return this.value}}]),n}();var X,Y,nn,en=function(n){var e=n.heading,t=n.active,r=e.content,o=e.scale,a=(0,i.useMemo)((function(){return new Q(r).space2Hyphen().removeSpecialSymbols().get()}),[r]);return i.createElement(tn,null,i.createElement(rn,{"data-testid":"heading-item",smooth:!0,to:"#".concat(a),$active:t,$scale:o},r))},tn=l.default.li(X||(X=(0,u.Z)([""]))),rn=(0,l.default)(K.fO)(Y||(Y=(0,u.Z)(["\n  display: inline-block;\n  margin-left: ",";\n  font-size: 1rem;\n  font-weight: 300;\n  color: ",";\n  text-decoration: none;\n  transition: transform ease 0.2s;\n\n  ","\n"])),(function(n){return"".concat(5*n.$scale,"px")}),(function(n){return n.theme.colors.ftGrayDark}),(function(n){return n.$active&&(0,l.css)(nn||(nn=(0,u.Z)(["\n      transform: scale(1.025, 1.025);\n      color: ",";\n    "])),(function(n){return n.theme.colors.ftGrayDark3}))}));const on=(0,i.memo)(en);var an,cn,un,ln,sn,fn=l.default.div(an||(an=(0,u.Z)(["\n  position: relative;\n  width: 100%;\n"]))),dn=l.default.div(cn||(cn=(0,u.Z)(["\n  position: absolute;\n  left: 100%;\n"]))),mn=l.default.div(un||(un=(0,u.Z)(["\n  display: flex;\n\n  ","\n"])),(function(n){return n.fixed&&(0,l.css)(ln||(ln=(0,u.Z)(["\n      position: fixed;\n      top: 8rem;\n    "])))})),hn=l.default.ul(sn||(sn=(0,u.Z)(["\n  width: 15rem;\n  padding: 0.25rem 0 0.25rem 0.75rem;\n\n  & > * + * {\n    margin-top: 0.25rem;\n  }\n"])));const pn=function(n){var e=n.article,t=n.fixed,o=(0,i.useState)([]),a=(0,r.Z)(o,2),c=a[0],u=a[1],l=(0,i.useState)(-1),s=(0,r.Z)(l,2),f=s[0],d=s[1],m=new IntersectionObserver((function(n){n.forEach((function(n){var e=n.target,t=n.isIntersecting,r=Number(e.dataset.id);t&&d(r)}))}),{rootMargin:"0px 0px -70% 0px",threshold:1});return(0,i.useEffect)((function(){var n=Array.from(e.querySelectorAll("h1, h2, h3")),t=n.map((function(n,e){var t;return{index:e,content:null!==(t=n.textContent)&&void 0!==t?t:"",scale:Number(n.tagName.charAt(1))-1}}));return u(t),n.forEach((function(n,e){n.setAttribute("data-id",e.toString()),m.observe(n)})),function(){return m.disconnect()}}),[e]),(0,i.useEffect)((function(){t||d(-1)}),[t]),0===c.length?null:i.createElement(fn,{"data-testid":"table-of-contents"},i.createElement(dn,null,i.createElement(mn,{fixed:t},i.createElement(V,null),i.createElement(hn,null,c.map((function(n){return i.createElement(on,{key:n.index,heading:n,active:n.index===f})}))))))};var vn,gn,bn,wn=l.default.div(vn||(vn=(0,u.Z)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 4.5rem;\n  padding: 1.2rem 1.2rem 1.2rem 0.575rem;\n  background-color: ",";\n  box-shadow: 0px 8px 16px 0px ",";\n  border-radius: 8px;\n  text-align: left;\n\n  "," {\n    margin-bottom: 3rem;\n  }\n"])),(function(n){return n.theme.colors.bgBlack}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.medias.tablet})),yn=l.default.p(gn||(gn=(0,u.Z)(["\n  font-size: 1rem;\n  font-weight: 400;\n  color: ",";\n  word-break: keep-all;\n"])),(function(n){return n.theme.colors.ftWhite})),xn=l.default.div(bn||(bn=(0,u.Z)(["\n  margin-right: 0.275rem;\n  color: ",";\n  background-color: transparent;\n  line-height: 0;\n\n  & > svg {\n    font-size: 1.3rem;\n  }\n"])),(function(n){return n.theme.colors.ftWhite}));const Zn=(0,o.Pi)((function(){var n=A.postDetail;if(null===n)return null;var e=n.description;return e?i.createElement(wn,{"data-testid":"post-description"},i.createElement(xn,null,i.createElement(s.jZo,null)),i.createElement(yn,null,e)):null}));var kn,En=t(7462),Dn=t(4925),On=t(6243),zn=t(455),Sn=t(4283),jn=["children"],Pn=["children","className"],Gn=function(n){return new Q(n).space2Hyphen().removeSpecialSymbols().get()},An=function(n){var e=n.children;return i.createElement("h1",{id:Gn(e.toString())},e)},Mn=function(n){var e=n.children;return i.createElement("h2",{id:Gn(e.toString())},e)},Rn=function(n){var e=n.children;return i.createElement("h3",{id:Gn(e.toString())},e)},Cn=function(n){var e=n.children;return i.createElement("h4",{id:Gn(e.toString())},e)},Ln=function(n){var e=n.children;return i.createElement("h5",{id:Gn(e.toString())},e)},Nn=function(n){var e=n.children;return i.createElement("h6",{id:Gn(e.toString())},e)},Bn=function(n){var e=n.children,t=(0,Dn.Z)(n,jn);return i.createElement("a",(0,En.Z)({},t,{target:"_blank"}),e)},Un=function(n){var e=n.children,t=n.className,r=(0,Dn.Z)(n,Pn),o=/lang-(\w+)/.exec(t||"");return o?i.createElement(zn.Z,(0,En.Z)({language:o[1],PreTag:"div",style:Sn.MS},r),e):i.createElement("code",r,e)},$n=(0,i.forwardRef)((function(n,e){var t=n.as,r=n.children;return i.createElement(Hn,{as:t,ref:e,"data-testid":"markdown"},i.createElement(On.Z,{options:{overrides:{h1:An,h2:Mn,h3:Rn,h4:Cn,h5:Ln,h6:Nn,a:Bn,code:Un},forceBlock:!0}},r))})),Hn=l.default.div(kn||(kn=(0,u.Z)(["\n  font-size: 1.125rem;\n  font-weight: 400;\n  font-family: inherit;\n  color: ",";\n  word-break: keep-all;\n  overflow-wrap: break-word;\n\n  "," {\n    font-size: 1rem;\n  }\n\n  p {\n    color: ",";\n    padding: 0.75rem 0;\n    line-height: 1.5;\n    white-space: pre-wrap;\n\n    & + & {\n      padding: 1rem 0;\n    }\n\n    & > img {\n      display: block;\n      max-width: 100%;\n      margin: 2rem auto;\n    }\n\n    & > a {\n      text-decoration: none;\n      color: ",";\n      font-weight: 400;\n    }\n\n    & > code {\n      background: ",";\n      padding: 0.2em 0.4em;\n      border-radius: 8px;\n      font-size: 85%;\n      font-family: inherit;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4 {\n    font-weight: 600;\n    margin-bottom: 1.25rem;\n    line-height: 1.5;\n  }\n\n  h1,\n  h2 {\n    padding-left: 1rem;\n    border-left: 4px solid ",";\n  }\n\n  h1 {\n    font-size: 2.25rem;\n\n    "," {\n      font-size: 2rem;\n    }\n  }\n\n  h2 {\n    font-size: 2rem;\n\n    "," {\n      font-size: 1.5rem;\n    }\n  }\n\n  h3 {\n    font-size: 1.5rem;\n\n    "," {\n      font-size: 1.25rem;\n    }\n  }\n\n  h4 {\n    font-size: 1.125rem;\n\n    "," {\n      font-size: 1rem;\n    }\n  }\n\n  * + h1,\n  * + h2,\n  * + h3,\n  * + h4 {\n    margin-top: 2rem;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n    margin: 1.5rem 0;\n  }\n\n  hr {\n    width: 100%;\n    height: 1px;\n    margin: 1rem 0;\n    border-width: initial;\n    border-style: none;\n    border-color: initial;\n    border-image: initial;\n    background: ",";\n  }\n\n  blockquote {\n    margin: 1.25rem 0;\n    padding: 0.25rem 1rem;\n    border-left: 3px solid ",";\n\n    & > p {\n      padding: 0;\n      color: ",';\n      font-size: 1rem;\n      font-style: italic;\n    }\n\n    &:first-child {\n      margin-top: 0px;\n    }\n\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n\n  pre,\n  code {\n    font-family: "Fira Mono", source-code-pro, Menlo, Monaco, Consolas,\n      "Courier New", monospace !important;\n  }\n\n  pre {\n    margin: 1.5rem 0;\n    overflow-x: auto;\n    font-size: 0.875rem;\n    letter-spacing: 0px;\n\n    '," {\n      font-size: 0.625rem;\n    }\n\n    & > div {\n      border-radius: 8px !important;\n      background: "," !important;\n    }\n  }\n\n  table {\n    display: block;\n    width: 100%;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    max-width: 100%;\n    padding: 1.5rem 0;\n    overflow: auto;\n    border-collapse: collapse;\n\n    tr {\n      background-color: ",";\n      border-top: 1px solid ",";\n\n      &:nth-child(2n) {\n        background-color: ",";\n      }\n    }\n\n    td,\n    th {\n      padding: 0.5rem 0.8rem;\n      border: 1px solid ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.ftBlack}),(function(n){return n.theme.medias.tablet}),(function(n){return n.theme.colors.ftGrayDark2}),(function(n){return n.theme.colors.ftBlue}),(function(n){return n.theme.colors.bgGray}),(function(n){return n.theme.colors.bdGrayDark}),(function(n){return n.theme.medias.tablet}),(function(n){return n.theme.medias.tablet}),(function(n){return n.theme.medias.tablet}),(function(n){return n.theme.medias.tablet}),(function(n){return n.theme.colors.bdGrayDark}),(function(n){return n.theme.colors.bgGrayDark}),(function(n){return n.theme.colors.ftGrayDark3}),(function(n){return n.theme.medias.tablet}),(function(n){return n.theme.colors.bgGray1}),(function(n){return n.theme.colors.bgWhite}),(function(n){return n.theme.colors.bdGray}),(function(n){return n.theme.colors.bgGray1}),(function(n){return n.theme.colors.bdGray}));const Fn=$n;var _n=(0,i.forwardRef)((function(n,e){var t=A.postDetail;if(null===t)return null;var r=t.article;return i.createElement(Fn,{as:"article",ref:e},r)}));const In=(0,o.Pi)(_n);var Wn,Tn={src:"https://utteranc.es/client.js",repo:"limgyumin/limgyumin.github.io","issue-term":"pathname",label:"utterances",theme:"github-light",crossorigin:"anonymous",async:"true"},qn=l.default.section(Wn||(Wn=(0,u.Z)(["\n  margin-top: 3rem;\n"])));const Jn=function(){var n=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(null!=n.current){var e=document.createElement("script");Object.entries(Tn).forEach((function(n){var t=(0,r.Z)(n,2),i=t[0],o=t[1];e.setAttribute(i,o)})),n.current.appendChild(e)}}),[]),i.createElement(qn,{ref:n,"data-testid":"comments"})};var Vn=t(3288),Kn=t(6974);var Qn=t(314);const Xn=(0,o.Pi)((function(){!function(){var n=(0,Kn.UO)().id,e=A.fetch;(0,i.useEffect)((function(){n&&e(n)}),[n])}();var n=(0,Vn.Z)(Qn.J.desktop,"min"),e=function(){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),t=e[0],o=e[1],a=(0,i.useRef)(null),c=function(){if(null!==a.current){var n=a.current.clientHeight,e=document.documentElement.scrollTop;o(n<e)}};return(0,i.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),[a,t]}(),t=(0,r.Z)(e,2),o=t[0],u=t[1],l=(0,i.useState)(null),s=(0,r.Z)(l,2),f=s[0],d=s[1],m=(0,i.useRef)(null),h=A.postDetail;return(0,i.useEffect)((function(){m.current&&d(m.current)}),[h]),null===h?i.createElement(c.Z,null):i.createElement(a.Z,null,i.createElement(_,{ref:o}),f&&n&&i.createElement(pn,{article:f,fixed:u}),i.createElement(Zn,null),i.createElement(In,{ref:m}),i.createElement(Jn,null))}))},4574:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r=t(5671),i=t(3144),o=t(7484),a=t.n(o),c=t(6176),u=t.n(c);t(9132),a().extend(u());const l=function(){function n(e){(0,r.Z)(this,n),this.date=e}return(0,i.Z)(n,[{key:"format",value:function(){return a()(this.date).locale("ko").format("LL")}}]),n}()},1781:(n,e,t)=>{"use strict";n.exports=t.p+"static/ed4acea8ccb350512c81.md"},8246:(n,e,t)=>{"use strict";n.exports=t.p+"static/a274de29aed64464d86f.md"},3455:(n,e,t)=>{"use strict";n.exports=t.p+"static/b158bb1916decffe5e50.md"},9152:(n,e,t)=>{"use strict";n.exports=t.p+"static/924833d5877cdcd44bd6.md"},3301:(n,e,t)=>{"use strict";n.exports=t.p+"static/7ae1bf26cb28775c3c15.md"}}]);