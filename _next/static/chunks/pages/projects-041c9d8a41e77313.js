(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4184:function(e,a){var t; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var i=n.apply(null,t);i&&e.push(i)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0!==(t=(function(){return n}).apply(a,[]))&&(e.exports=t)}()},7132:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return t(9065)}])},2134:function(e,a,t){"use strict";t.d(a,{i:function(){return r.i}});var r=t(5617);t(7816)},5617:function(e,a,t){"use strict";t.d(a,{i:function(){return l}});var r=t(5893);t(7294);var n=t(7816),s=t(6977),i=t.n(s);let l=e=>{let{children:a}=e;return(0,r.jsxs)("div",{className:"".concat(i().basic_layout),children:[(0,r.jsx)(n.w,{}),a]})}},7816:function(e,a,t){"use strict";t.d(a,{w:function(){return _}});var r=t(5893),n=t(1664),s=t.n(n);t(7294);var i=t(1163),l=t(1372),o=t.n(l);let c=e=>{let{exact:a,...t}=e,{children:n,className:l,href:c}=t,{pathname:d}=(0,i.useRouter)(),u=a?d===c:d.startsWith("/".concat(c));return u?t.className+=" ".concat(o().active):t.className=null==l?void 0:l.replaceAll(" active",""),(0,r.jsx)(s(),{...t,href:c,children:n})};var d=t(2689),u=t.n(d);let _=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(u().navbar," d-flex flex-row justify-content-between d-none d-md-flex"),children:[(0,r.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"aboutme",children:(0,r.jsx)("div",{children:"About Me"})}),(0,r.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"contactinfo",children:(0,r.jsx)("div",{children:"Contact Info"})}),(0,r.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"languages",children:(0,r.jsx)("div",{children:"Languages"})}),(0,r.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"projects",children:(0,r.jsx)("div",{children:"Projects"})}),(0,r.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"school",children:(0,r.jsx)("div",{children:"School"})}),(0,r.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"workhistory",children:(0,r.jsx)("div",{children:"Work History"})})]}),(0,r.jsxs)("div",{className:"d-md-none d-flex flex-row justify-content-around ".concat(u().navbar," "),children:[(0,r.jsx)(s(),{className:"p-1 rounded-circle mx-1 text-dark ".concat(u().navbar_link_icon),href:"aboutme",children:(0,r.jsx)("i",{className:"fa-solid fa-user fa-sm"})}),(0,r.jsx)(s(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"contactinfo",children:(0,r.jsx)("i",{className:"fa-solid fa-phone fa-sm"})}),(0,r.jsx)(s(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"languages",children:(0,r.jsx)("i",{className:"fa-solid fa-computer fa-sm"})}),(0,r.jsx)(s(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"projects",children:(0,r.jsx)("i",{className:"fa-solid fa-briefcase fa-sm"})}),(0,r.jsx)(s(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"school",children:(0,r.jsx)("i",{className:"fa-solid fa-school fa-sm"})}),(0,r.jsx)(s(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"workhistory",children:(0,r.jsx)("i",{className:"fa-solid fa-building fa-sm"})})]})]})},9065:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return $}});var r,n,s,i,l=t(5893),o=t(2134),c=t(7294),d=t(4184),u=t.n(d),_=t(6792);let N=c.forwardRef(({bsPrefix:e,className:a,...t},r)=>{let n=(0,_.vE)(e,"btn-toolbar");return(0,l.jsx)("div",{...t,ref:r,className:u()(a,n)})});N.displayName="ButtonToolbar",N.defaultProps={role:"toolbar"};let T=c.forwardRef(({bsPrefix:e,size:a,vertical:t,className:r,as:n="div",...s},i)=>{let o=(0,_.vE)(e,"btn-group"),c=o;return t&&(c=`${o}-vertical`),(0,l.jsx)(n,{...s,ref:i,className:u()(r,c,a&&`${o}-${a}`)})});T.displayName="ButtonGroup",T.defaultProps={vertical:!1,role:"group"};let f=["as","disabled"];function x({tagName:e,disabled:a,href:t,target:r,rel:n,role:s,onClick:i,tabIndex:l=0,type:o}){e||(e=null!=t||null!=r||null!=n?"a":"button");let c={tagName:e};if("button"===e)return[{type:o||"button",disabled:a},c];let d=r=>{var n;if(!a&&("a"!==e||(n=t)&&"#"!==n.trim())||r.preventDefault(),a){r.stopPropagation();return}null==i||i(r)},u=e=>{" "===e.key&&(e.preventDefault(),d(e))};return"a"===e&&(t||(t="#"),a&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:a?void 0:l,href:t,target:"a"===e?r:void 0,"aria-disabled":a||void 0,rel:"a"===e?n:void 0,onClick:d,onKeyDown:u},c]}let p=c.forwardRef((e,a)=>{let{as:t,disabled:r}=e,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,f),[s,{tagName:i}]=x(Object.assign({tagName:t,disabled:r},n));return(0,l.jsx)(i,Object.assign({},n,s,{ref:a}))});p.displayName="Button";let m=c.forwardRef(({as:e,bsPrefix:a,variant:t,size:r,active:n,className:s,...i},o)=>{let c=(0,_.vE)(a,"btn"),[d,{tagName:N}]=x({tagName:e,...i});return(0,l.jsx)(N,{...d,...i,ref:o,className:u()(s,c,n&&"active",t&&`${c}-${t}`,r&&`${c}-${r}`,i.href&&i.disabled&&"disabled")})});m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var v=/-(.)/g;let h=e=>e[0].toUpperCase()+e.replace(v,function(e,a){return a.toUpperCase()}).slice(1);function j(e,{displayName:a=h(e),Component:t,defaultProps:r}={}){let n=c.forwardRef(({className:a,bsPrefix:r,as:n=t||"div",...s},i)=>{let o=(0,_.vE)(r,e);return(0,l.jsx)(n,{ref:i,className:u()(a,o),...s})});return n.defaultProps=r,n.displayName=a,n}var b=e=>c.forwardRef((a,t)=>(0,l.jsx)("div",{...a,ref:t,className:u()(a.className,e)}));let E=c.forwardRef(({bsPrefix:e,className:a,variant:t,as:r="img",...n},s)=>{let i=(0,_.vE)(e,"card-img");return(0,l.jsx)(r,{ref:s,className:u()(t?`${i}-${t}`:i,a),...n})});E.displayName="CardImg";let k=c.createContext(null);k.displayName="CardHeaderContext";let O=c.forwardRef(({bsPrefix:e,className:a,as:t="div",...r},n)=>{let s=(0,_.vE)(e,"card-header"),i=(0,c.useMemo)(()=>({cardHeaderBsPrefix:s}),[s]);return(0,l.jsx)(k.Provider,{value:i,children:(0,l.jsx)(t,{ref:n,...r,className:u()(a,s)})})});O.displayName="CardHeader";let g=b("h5"),A=b("h6"),y=j("card-body"),R=j("card-title",{Component:g}),w=j("card-subtitle",{Component:A}),W=j("card-link",{Component:"a"}),G=j("card-text",{Component:"p"}),L=j("card-footer"),C=j("card-img-overlay"),I=c.forwardRef(({bsPrefix:e,className:a,bg:t,text:r,border:n,body:s,children:i,as:o="div",...c},d)=>{let N=(0,_.vE)(e,"card");return(0,l.jsx)(o,{ref:d,...c,className:u()(a,N,t&&`bg-${t}`,r&&`text-${r}`,n&&`border-${n}`),children:s?(0,l.jsx)(y,{children:i}):i})});I.displayName="Card",I.defaultProps={body:!1};var Y=Object.assign(I,{Img:E,Title:R,Subtitle:w,Body:y,Link:W,Text:G,Header:O,Footer:L,ImgOverlay:C}),B=t(9158),S=t.n(B);let U=e=>{let{description:a,language:t,name:r}=e;return(0,l.jsxs)(Y,{className:"p-3 mx-2 shadow ".concat(S().project_card),children:[(0,l.jsx)(Y.Title,{className:"".concat(S().project_card_title),children:"".concat(r)}),(0,l.jsx)("div",{className:"border border-success my-2"}),(0,l.jsx)(Y.Text,{children:a}),(0,l.jsx)(Y.Footer,{className:"".concat(S().project_card_footer),children:t})]})},P=[[],[],[[(0,l.jsx)(U,{description:"Practice your stock market skills in this application that allows you to sign up, and get trading right away! Compete to reach the top of the leader boards!",language:"NodeJS & AngularJS",name:"Stock Application"},"stockApplication"),(0,l.jsx)(U,{description:"App to schedule your school's courses, with fully functional backend.",language:"NestJS & React",name:"CourseScheduler"},"courseScheduler"),(0,l.jsx)(U,{description:"LeetCode problem solutions, attempted in all languages present in the Languages section of this website.",language:"All",name:"LeetCodeProblems"},"leetCodeProblems")],[],[],[]]],D=e=>{let{year:a,season:t}=e;return(0,l.jsx)("div",{className:"d-flex flex-row w-75 mt-5",children:P[a][t]})};(r=s||(s={}))[r.WINTER=0]="WINTER",r[r.SPRING=1]="SPRING",r[r.SUMMER=2]="SUMMER",r[r.FALL=3]="FALL",(n=i||(i={}))[n.TWENTY_TWENTY=0]="TWENTY_TWENTY",n[n.TWENTY_TWENTY_ONE=1]="TWENTY_TWENTY_ONE",n[n.TWENTY_TWENTY_TWO=2]="TWENTY_TWENTY_TWO";let V={BUTTON_NOT_TOGGLED_VARIANT:"outline-success",BUTTON_TOGGLED_VARIANT:"success"},$=()=>{let[e,a]=c.useState(i.TWENTY_TWENTY),[t,r]=c.useState(s.WINTER);return(0,l.jsx)(o.i,{children:(0,l.jsxs)("div",{className:"h-100 w-100 d-flex flex-column justify-content-center align-items-center",children:[(0,l.jsx)(N,{children:(0,l.jsxs)(T,{children:[(0,l.jsx)(m,{onClick(){a(i.TWENTY_TWENTY)},variant:e===i.TWENTY_TWENTY?V.BUTTON_TOGGLED_VARIANT:V.BUTTON_NOT_TOGGLED_VARIANT,children:"2020"}),(0,l.jsx)(m,{onClick(){a(i.TWENTY_TWENTY_ONE)},variant:e===i.TWENTY_TWENTY_ONE?V.BUTTON_TOGGLED_VARIANT:V.BUTTON_NOT_TOGGLED_VARIANT,children:"2021"}),(0,l.jsx)(m,{onClick(){a(i.TWENTY_TWENTY_TWO)},variant:e===i.TWENTY_TWENTY_TWO?V.BUTTON_TOGGLED_VARIANT:V.BUTTON_NOT_TOGGLED_VARIANT,children:"2022"})]})}),(0,l.jsx)(N,{className:"mt-1",children:(0,l.jsxs)(T,{children:[(0,l.jsx)(m,{onClick(){r(s.WINTER)},variant:t===s.WINTER?V.BUTTON_TOGGLED_VARIANT:V.BUTTON_NOT_TOGGLED_VARIANT,children:"Winter"}),(0,l.jsx)(m,{onClick(){r(s.SPRING)},variant:t===s.SPRING?V.BUTTON_TOGGLED_VARIANT:V.BUTTON_NOT_TOGGLED_VARIANT,children:"Spring"}),(0,l.jsx)(m,{onClick(){r(s.SUMMER)},variant:t===s.SUMMER?V.BUTTON_TOGGLED_VARIANT:V.BUTTON_NOT_TOGGLED_VARIANT,children:"Summer"}),(0,l.jsx)(m,{onClick(){r(s.FALL)},variant:t===s.FALL?V.BUTTON_TOGGLED_VARIANT:V.BUTTON_NOT_TOGGLED_VARIANT,children:"Fall"})]})}),(0,l.jsx)(D,{season:t,year:e})]})})}},9158:function(e){e.exports={project_card:"ProjectCard_project_card__M6L7S",project_card_title:"ProjectCard_project_card_title___gY59",project_card_footer:"ProjectCard_project_card_footer__BV6tD"}},6977:function(e){e.exports={basic_layout:"BasicLayout_basic_layout__zNI5L"}},1372:function(e){e.exports={active:"NavLink_active__4DUYr"}},2689:function(e){e.exports={navbar:"Navbar_navbar__T3Bcs",navbar_link:"Navbar_navbar_link__LTCHA",navbar_link_anim:"Navbar_navbar_link_anim__72uhw",navbar_link_icon:"Navbar_navbar_link_icon___xzRu",navbar_link_icon_anim:"Navbar_navbar_link_icon_anim__JfL39"}},1163:function(e,a,t){e.exports=t(880)},6792:function(e,a,t){"use strict";t.d(a,{vE:function(){return l}});var r=t(7294);t(5893);let n=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:i}=n;function l(e,a){let{prefixes:t}=(0,r.useContext)(n);return e||t[a]||a}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=7132)}),_N_E=e.O()}]);