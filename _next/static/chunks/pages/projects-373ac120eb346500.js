(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7132:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a(3221)}])},338:function(e,t,a){"use strict";a.d(t,{i:function(){return j}});var r=a(5893);a(7294);var n=a(1664),c=a.n(n),s=a(1163),l=a(1372),o=a.n(l);let i=e=>{let{exact:t,...a}=e,{children:n,className:l,href:i}=a,{pathname:d}=(0,s.useRouter)(),u=t?d===i:d.startsWith("/".concat(i));return u?a.className+=" ".concat(o().active):a.className=null==l?void 0:l.replaceAll(" active",""),(0,r.jsx)(c(),{...a,href:i,children:n})};var d=a(2689),u=a.n(d);let x=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(u().navbar," d-flex flex-row justify-content-between d-none d-md-flex"),children:[(0,r.jsx)(i,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"aboutme",children:(0,r.jsx)("div",{children:"About Me"})}),(0,r.jsx)(i,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"contactinfo",children:(0,r.jsx)("div",{children:"Contact Info"})}),(0,r.jsx)(i,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"languages",children:(0,r.jsx)("div",{children:"Languages"})}),(0,r.jsx)(i,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"projects",children:(0,r.jsx)("div",{children:"Projects"})}),(0,r.jsx)(i,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"school",children:(0,r.jsx)("div",{children:"School"})}),(0,r.jsx)(i,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"workhistory",children:(0,r.jsx)("div",{children:"Work History"})})]}),(0,r.jsxs)("div",{className:"d-md-none d-flex flex-row justify-content-around ".concat(u().navbar," "),children:[(0,r.jsx)(c(),{className:"p-1 rounded-circle mx-1 text-dark ".concat(u().navbar_link_icon),href:"aboutme",children:(0,r.jsx)("i",{className:"fa-solid fa-user fa-sm"})}),(0,r.jsx)(c(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"contactinfo",children:(0,r.jsx)("i",{className:"fa-solid fa-phone fa-sm"})}),(0,r.jsx)(c(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"languages",children:(0,r.jsx)("i",{className:"fa-solid fa-computer fa-sm"})}),(0,r.jsx)(c(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"projects",children:(0,r.jsx)("i",{className:"fa-solid fa-briefcase fa-sm"})}),(0,r.jsx)(c(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"school",children:(0,r.jsx)("i",{className:"fa-solid fa-school fa-sm"})}),(0,r.jsx)(c(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"workhistory",children:(0,r.jsx)("i",{className:"fa-solid fa-building fa-sm"})})]})]});var _=a(6977),h=a.n(_);let j=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"".concat(h().basic_layout),children:[(0,r.jsx)(x,{}),t]})}},3221:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var r,n,c,s=a(5893),l=a(338),o=a(4183),i=a(7294),d=a(6968);let u=async e=>{let t=e.length,a=[],r=0,n=0,c=new o.vd({auth:""}),s=[];for(let l of e){var i,d;r+=null!==(i=l.stargazers_count)&&void 0!==i?i:0,n+=null!==(d=l.watchers_count)&&void 0!==d?d:0;let{languages_url:u}=l;s.push(c.request("GET ".concat(u.replace("https://api.github.com",""))))}let x=await Promise.all(s);for(let _ of x){let{data:h}=_;for(let j of Object.keys(h))a.includes(j)||a.push(j)}return a.sort((e,t)=>e.localeCompare(t)),{languages:a,languagesCount:a.length,totalCount:t,totalStars:r,totalWatch:n}};(r=n||(n={}))[r.WINTER=0]="WINTER",r[r.SPRING=1]="SPRING",r[r.SUMMER=2]="SUMMER",r[r.FALL=3]="FALL";let x=[n.WINTER,n.WINTER,n.SPRING,n.SPRING,n.SPRING,n.SUMMER,n.SUMMER,n.SUMMER,n.FALL,n.FALL,n.FALL,n.WINTER],_=[n.WINTER,n.SPRING,n.SUMMER,n.FALL],h=e=>x[e],j=e=>{let t={};for(let a of e)if(void 0!==a.createdDay&&void 0!==a.createdMonth&&void 0!==a.createdYear){if(Object.keys(t).includes(a.createdYear.toString())){let r=h(a.createdMonth),n=t[a.createdYear];Object.keys(n).includes(r.toString())?n[r]=[...n[r],a]:n[r]=[a]}else{let c=h(a.createdMonth);t[a.createdYear]={},t[a.createdYear][c]=[a]}}for(let s of Object.keys(t))for(let l of _)void 0===t[Number(s)][l]&&(t[Number(s)][l]=[]);return t},m=e=>{var t,a,r;let n=e.filter(e=>"cthacker-udel"===e.owner.login).map(e=>({createdDay:new Date(null!==(t=e.created_at)&&void 0!==t?t:new Date().toUTCString()).getUTCDay(),createdMonth:new Date(null!==(a=e.created_at)&&void 0!==a?a:new Date().toUTCString()).getUTCMonth(),createdYear:new Date(null!==(r=e.created_at)&&void 0!==r?r:new Date().toUTCString()).getUTCFullYear(),isPrivate:"private"===e.visibility,link:e.html_url,title:e.name})).sort((e,t)=>e.title.localeCompare(t.title)),c=[];for(let s of n)c.some(e=>e.title.toLocaleLowerCase().trim()===s.title.toLocaleLowerCase().trim())||c.push(s);return c},f={assembly:"git",batchfile:"firefox",brainfuck:"eslint","c#":"csharp","c++":"cplusplus",css:"css3",dockerfile:"docker",html:"html5","jupyter notebook":"jupyter",makefile:"jquery",powershell:"dotnetcore",pug:"linux",shell:"bash"},p=["bootstrap","github","gitlab","gradle","heroku","intellij","jira","markdown","mongodb","mysql","nestjs","nextjs","nodejs","postgresql","pycharm","react","redis","socketio","spring","subversion","trello","ubuntu","webpack"],g=e=>{let{languages:t}=e;return(0,s.jsx)(s.Fragment,{children:[...t,...p].map(e=>(0,s.jsx)("i",{className:"p-1 devicon-".concat(null!==(c=f[e.toLowerCase()])&&void 0!==c?c:e.toLowerCase(),"-plain")},e))})};var v=a(3489),b=a(1340),N=a(1905),k=a.n(N);let w=(e,t,a)=>(0,s.jsx)(v.Z,{id:t,...e,children:a}),y=e=>{let{languages:t,languagesCount:a,totalCount:r,totalStars:n,totalWatch:c}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"".concat(k().aggregate_header," fs-5"),children:"Overall Project Stats"}),(0,s.jsxs)("div",{className:"d-flex flex-column",children:[(0,s.jsxs)("div",{className:"d-flex flex-row",children:[(0,s.jsx)("i",{className:"fa-solid fa-language me-1 my-auto fa-xs"}),t.length>0?(0,s.jsx)("div",{className:"".concat(k().language_list),children:t.map(e=>(0,s.jsx)("div",{children:e},e))}):(0,s.jsx)("div",{className:"".concat(k().aggregate_header),children:"No Languages"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(b.Z,{delay:{hide:50,show:100},overlay:e=>w(e,"numLanguageTooltip","Number of languages"),placement:"right",children:(0,s.jsxs)("div",{className:"badge bg-dark align-items-center me-1 ".concat(k().project_badge),children:[(0,s.jsx)("i",{className:"fa-solid fa-hashtag fa-xs me-1"}),(0,s.jsx)("i",{className:"fa-solid fa-language fa-xs"})]})}),a]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(b.Z,{delay:{hide:50,show:100},overlay:e=>w(e,"numRepositoryTooltip","Number of projects"),placement:"right",children:(0,s.jsx)("div",{className:"badge bg-dark align-items-center me-1 ".concat(k().project_badge),children:(0,s.jsx)("i",{className:"fa-solid fa-folder fa-xs"})})}),r]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(b.Z,{delay:{hide:50,show:100},overlay:e=>w(e,"numRepositoryFavoritedCount","Number of projects favorited"),placement:"right",children:(0,s.jsx)("div",{className:"badge bg-dark align-items-center me-1 ".concat(k().project_badge),children:(0,s.jsx)("i",{className:"fa-solid fa-star fa-xs me-1"})})}),n]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(b.Z,{delay:{hide:50,show:100},overlay:e=>w(e,"numRepositoryWatched","Number of projects followed"),placement:"right",children:(0,s.jsx)("div",{className:"badge bg-dark align-items-center me-1 ".concat(k().project_badge),children:(0,s.jsx)("i",{className:"fa-solid fa-eye"})})}),c]})]})]})};var S=a(5469),P=a.n(S);let L=e=>{let{link:t,title:a}=e;return(0,s.jsx)("div",{className:"d-flex flex-row",children:(0,s.jsxs)("a",{className:"".concat(P().description," text-decoration-none"),href:t,children:[a.trim()," "]})})};var R=a(9300),E=a.n(R);let C=e=>{let{projects:t}=e;return(0,s.jsx)("div",{className:"".concat(E().project_container," d-flex flex-column p-3"),children:t.length>0?t.map((e,t)=>(0,s.jsx)(L,{isPrivate:e.isPrivate,link:e.link,title:e.title},e.title)):(0,s.jsx)("div",{children:"No Projects to Display"})})};var T=a(3495),M=a.n(T);let I=[2017,2018,2019,2020,2021,2022],F=["Winter","Spring","Summer","Fall"],U=[n.WINTER,n.SPRING,n.SUMMER,n.FALL],A=()=>{let[e,t]=i.useState(0),[a,r]=i.useState(0),[n,c]=i.useState(void 0),[x,_]=i.useState([]),[h,f]=i.useState(!1),[p,v]=i.useState(1),[b,N]=i.useState(void 0),[k,w]=i.useState([]);return i.useEffect(()=>{if(h){let e=j(x);c(e),u(k).then(e=>{N(e)}).catch(e=>{console.error("Unable to set repo aggregate data ".concat(e.stack))})}},[h,x,k]),i.useEffect(()=>{let e=new o.vd({auth:""});e.request("GET /user/repos",{page:p,per_page:100}).then(e=>{var t;let{data:a,headers:r}=e;if(0===a.length)throw f(!0),Error("Finished");let n=Number(null===(t=r.link)||void 0===t?void 0:t.split('rel="next"')[0].split("?")[1].split("&")[0].split("=")[1]);if(void 0===n)throw f(!0),Error("Finished");let c=m(a);_(e=>e.length>0?[...e,...c]:c),w(e=>e.length>0?[...e,...a]:[...a]),v(e=>e>=n?(f(!0),e):n)}).catch(e=>{f(!0),"Finished"===e.message?console.log("Finished collecting repos"):console.error("Failed to fetch github repos ".concat(e.stack))})},[p]),(0,s.jsx)(l.i,{children:(0,s.jsx)("div",{className:"d-flex flex-column w-100 justify-content-center align-items-center ".concat(M().layout_container),children:(0,s.jsx)("div",{className:"".concat(M().project_container," rounded w-75 h-75 position-relative d-flex flex-row align-items-center"),children:(0,s.jsxs)("div",{className:"d-flex flex-row position-relative h-100 w-100 justify-content-around",children:[(0,s.jsxs)("div",{className:"d-flex flex-column h-100",children:[(0,s.jsx)("div",{className:"".concat(M().project_year," position-absolute"),children:(0,s.jsxs)("div",{className:"d-flex flex-row justify-content-between ".concat(M().project_scrollable_section),children:[(0,s.jsx)("div",{className:"".concat(M().project_scroll," d-flex flex-column"),children:I.map((a,r)=>(0,s.jsx)("div",{className:r===e?"".concat(M().project_selected," text-center"):"".concat(M().project_unselected," text-center rounded"),id:"year-".concat(a),onClick(){var e;null===(e=document.querySelector("#year-".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"}),t(r)},children:a},a))}),(0,s.jsx)("div",{className:"".concat(M().project_scroll," d-flex flex-column fs-5"),children:U.map((e,t)=>(0,s.jsx)("div",{className:t===a?"".concat(M().project_selected," text-center"):"".concat(M().project_unselected," text-center rounded"),id:"season-".concat(e),onClick(){var a;null===(a=document.querySelector("#season-".concat(e)))||void 0===a||a.scrollIntoView({behavior:"smooth"}),r(t)},children:F[e]},e))})]})}),(0,s.jsx)("div",{className:"d-flex flex-row justify-content-start h-50 mt-auto",children:(0,s.jsx)("div",{className:"d-flex flex-column p-2",children:void 0===b?(0,s.jsx)(d.Z,{animation:"border"}):(0,s.jsx)(y,{...b})})})]}),(0,s.jsx)("div",{className:"d-flex flex-column h-75 my-auto",children:n?(0,s.jsx)(C,{projects:void 0===n[I[e]]?[]:n[I[e]][U[a]]}):(0,s.jsx)(d.Z,{animation:"border"})}),(0,s.jsx)("div",{className:"d-flex flex-row w-100 position-absolute ".concat(M().project_languages," justify-content-center mt-1 text-wrap"),children:b?(0,s.jsx)(g,{languages:b.languages}):(0,s.jsx)("span",{})})]})})})})}},5469:function(e){e.exports={description:"Project_description__b2H7f"}},1905:function(e){e.exports={language_list:"ProjectAggregateStats_language_list__NSZm4",stat_text:"ProjectAggregateStats_stat_text__59JMw",aggregate_header:"ProjectAggregateStats_aggregate_header__93hXL",project_badge:"ProjectAggregateStats_project_badge__bAw_B"}},9300:function(e){e.exports={project_container:"ProjectContainer_project_container__4DgIJ"}},3495:function(e){e.exports={project_container:"Projects_project_container__eN1gS",project_year:"Projects_project_year__UqKzC",project_scroll:"Projects_project_scroll__sfGrs",project_selected:"Projects_project_selected__jtFqH",project_unselected:"Projects_project_unselected___H59b",project_languages:"Projects_project_languages__y9euj",layout_container:"Projects_layout_container__B4yTy",project_language_anim:"Projects_project_language_anim__tbI8C"}},6977:function(e){e.exports={basic_layout:"BasicLayout_basic_layout__zNI5L"}},1372:function(e){e.exports={active:"NavLink_active__4DUYr"}},2689:function(e){e.exports={navbar:"Navbar_navbar__T3Bcs",navbar_link:"Navbar_navbar_link__LTCHA",navbar_link_anim:"Navbar_navbar_link_anim__72uhw",navbar_link_icon:"Navbar_navbar_link_icon___xzRu",navbar_link_icon_anim:"Navbar_navbar_link_icon_anim__JfL39"}},5696:function(){}},function(e){e.O(0,[664,156,82,774,888,179],function(){return e(e.s=7132)}),_N_E=e.O()}]);