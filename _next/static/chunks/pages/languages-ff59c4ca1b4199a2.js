(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[422],{72:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/languages",function(){return n(3838)}])},338:function(e,a,n){"use strict";n.d(a,{i:function(){return f}});var t=n(5893);n(7294);var s=n(1664),i=n.n(s),l=n(1163),o=n(1372),r=n.n(o);let c=e=>{let{exact:a,...n}=e,{children:s,className:o,href:c}=n,{pathname:d}=(0,l.useRouter)(),u=a?d===c:d.startsWith("/".concat(c));return u?n.className+=" ".concat(r().active):n.className=null==o?void 0:o.replaceAll(" active",""),(0,t.jsx)(i(),{...n,href:c,children:s})};var d=n(2689),u=n.n(d);let h=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"".concat(u().navbar," d-flex flex-row justify-content-between d-none d-md-flex"),children:[(0,t.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"aboutme",children:(0,t.jsx)("div",{children:"About Me"})}),(0,t.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"contactinfo",children:(0,t.jsx)("div",{children:"Contact Info"})}),(0,t.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"languages",children:(0,t.jsx)("div",{children:"Languages"})}),(0,t.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"projects",children:(0,t.jsx)("div",{children:"Projects"})}),(0,t.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"school",children:(0,t.jsx)("div",{children:"School"})}),(0,t.jsx)(c,{className:"p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ".concat(u().navbar_link),href:"workhistory",children:(0,t.jsx)("div",{children:"Work History"})})]}),(0,t.jsxs)("div",{className:"d-md-none d-flex flex-row justify-content-around ".concat(u().navbar," "),children:[(0,t.jsx)(i(),{className:"p-1 rounded-circle mx-1 text-dark ".concat(u().navbar_link_icon),href:"aboutme",children:(0,t.jsx)("i",{className:"fa-solid fa-user fa-sm"})}),(0,t.jsx)(i(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"contactinfo",children:(0,t.jsx)("i",{className:"fa-solid fa-phone fa-sm"})}),(0,t.jsx)(i(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"languages",children:(0,t.jsx)("i",{className:"fa-solid fa-computer fa-sm"})}),(0,t.jsx)(i(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"projects",children:(0,t.jsx)("i",{className:"fa-solid fa-briefcase fa-sm"})}),(0,t.jsx)(i(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"school",children:(0,t.jsx)("i",{className:"fa-solid fa-school fa-sm"})}),(0,t.jsx)(i(),{className:"p-1 rounded-pill mx-1 text-dark ".concat(u().navbar_link_icon),href:"workhistory",children:(0,t.jsx)("i",{className:"fa-solid fa-building fa-sm"})})]})]});var m=n(6977),g=n.n(m);let f=e=>{let{children:a}=e;return(0,t.jsxs)("div",{className:"".concat(g().basic_layout),children:[(0,t.jsx)(h,{}),a]})}},3838:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return A}});var t=n(5893),s=n(338),i=n(7294),l=n(4184),o=n.n(l),r=n(5446),c=n(6792),d=n(1505),u=n(4527),h=n(2646),m=function(...e){return e.filter(e=>null!=e).reduce((e,a)=>{if("function"!=typeof a)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(...n){e.apply(this,n),a.apply(this,n)}},null)},g=n(4509),f=n(9337);let y={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function x(e,a){let n=`offset${e[0].toUpperCase()}${e.slice(1)}`,t=a[n],s=y[e];return t+parseInt((0,d.Z)(a,s[0]),10)+parseInt((0,d.Z)(a,s[1]),10)}let p={[u.Wj]:"collapse",[u.Ix]:"collapsing",[u.d0]:"collapsing",[u.cn]:"collapse show"},v=i.forwardRef(({onEnter:e,onEntering:a,onEntered:n,onExit:s,onExiting:l,className:r,children:c,dimension:d="height",getDimensionValue:u=x,...y},v)=>{let _="function"==typeof d?d():d,w=(0,i.useMemo)(()=>m(e=>{e.style[_]="0"},e),[_,e]),b=(0,i.useMemo)(()=>m(e=>{let a=`scroll${_[0].toUpperCase()}${_.slice(1)}`;e.style[_]=`${e[a]}px`},a),[_,a]),j=(0,i.useMemo)(()=>m(e=>{e.style[_]=null},n),[_,n]),N=(0,i.useMemo)(()=>m(e=>{e.style[_]=`${u(_,e)}px`,(0,g.Z)(e)},s),[s,u,_]),k=(0,i.useMemo)(()=>m(e=>{e.style[_]=null},l),[_,l]);return(0,t.jsx)(f.Z,{ref:v,addEndListener:h.Z,...y,"aria-expanded":y.role?y.in:null,onEnter:w,onEntering:b,onEntered:j,onExit:N,onExiting:k,childRef:c.ref,children:(e,a)=>i.cloneElement(c,{...a,className:o()(r,c.props.className,p[e],"width"===_&&"collapse-horizontal")})})});function _(e,a){return Array.isArray(e)?e.includes(a):e===a}v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:x};let w=i.createContext({});w.displayName="AccordionContext";let b=i.forwardRef(({as:e="div",bsPrefix:a,className:n,children:s,eventKey:l,...r},d)=>{let{activeEventKey:u}=(0,i.useContext)(w);return a=(0,c.vE)(a,"accordion-collapse"),(0,t.jsx)(v,{ref:d,in:_(u,l),...r,className:o()(n,a),children:(0,t.jsx)(e,{children:i.Children.only(s)})})});b.displayName="AccordionCollapse";let j=i.createContext({eventKey:""});j.displayName="AccordionItemContext";let N=i.forwardRef(({as:e="div",bsPrefix:a,className:n,...s},l)=>{a=(0,c.vE)(a,"accordion-body");let{eventKey:r}=(0,i.useContext)(j);return(0,t.jsx)(b,{eventKey:r,children:(0,t.jsx)(e,{ref:l,...s,className:o()(n,a)})})});N.displayName="AccordionBody";let k=i.forwardRef(({as:e="button",bsPrefix:a,className:n,onClick:s,...l},r)=>{a=(0,c.vE)(a,"accordion-button");let{eventKey:d}=(0,i.useContext)(j),u=function(e,a){let{activeEventKey:n,onSelect:t,alwaysOpen:s}=(0,i.useContext)(w);return i=>{let l=e===n?null:e;s&&(l=Array.isArray(n)?n.includes(e)?n.filter(a=>a!==e):[...n,e]:[e]),null==t||t(l,i),null==a||a(i)}}(d,s),{activeEventKey:h}=(0,i.useContext)(w);return"button"===e&&(l.type="button"),(0,t.jsx)(e,{ref:r,onClick:u,...l,"aria-expanded":d===h,className:o()(n,a,!_(h,d)&&"collapsed")})});k.displayName="AccordionButton";let I=i.forwardRef(({as:e="h2",bsPrefix:a,className:n,children:s,onClick:i,...l},r)=>(a=(0,c.vE)(a,"accordion-header"),(0,t.jsx)(e,{ref:r,...l,className:o()(n,a),children:(0,t.jsx)(k,{onClick:i,children:s})})));I.displayName="AccordionHeader";let C=i.forwardRef(({as:e="div",bsPrefix:a,className:n,eventKey:s,...l},r)=>{a=(0,c.vE)(a,"accordion-item");let d=(0,i.useMemo)(()=>({eventKey:s}),[s]);return(0,t.jsx)(j.Provider,{value:d,children:(0,t.jsx)(e,{ref:r,...l,className:o()(n,a)})})});C.displayName="AccordionItem";let T=i.forwardRef((e,a)=>{let{as:n="div",activeKey:s,bsPrefix:l,className:d,onSelect:u,flush:h,alwaysOpen:m,...g}=(0,r.Ch)(e,{activeKey:"onSelect"}),f=(0,c.vE)(l,"accordion"),y=(0,i.useMemo)(()=>({activeEventKey:s,onSelect:u,alwaysOpen:m}),[s,u,m]);return(0,t.jsx)(w.Provider,{value:y,children:(0,t.jsx)(n,{ref:a,...g,className:o()(d,f,h&&`${f}-flush`)})})});T.displayName="Accordion";var E=Object.assign(T,{Button:k,Collapse:b,Item:C,Header:I,Body:N}),L=n(2437),B=n.n(L);let A=()=>(0,t.jsx)(s.i,{children:(0,t.jsxs)("div",{className:"w-100 d-flex flex-column justify-content-center align-items-center ".concat(B().languages_page),children:[(0,t.jsx)("div",{className:"fs-2 text-decoration-underline mb-3",children:"Languages"}),(0,t.jsxs)(E,{className:"w-75 ".concat(B().languages_accordion),flush:!0,children:[(0,t.jsxs)(E.Item,{eventKey:"0",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-brands fa-python"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"Python"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"Python was one of my first languages I've learned, and one of the last of my undergrad I would be teaching to fellow students. I've learned Python from the bottom up, and done some amazing things in python, I built my first api wrapper in python, I built my first visual program in python with the python turtle. I work with Python time and time again, even when it's not required, just because writing in it has proven to be very satisfactory for me due to the lax structure of the language, and the amazing feats you can achieve with this language."})]}),(0,t.jsxs)(E.Item,{eventKey:"1",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-brands fa-java"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"Java"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"Java was my second language learned, and is one of my favorites, due to it's heavy OOP design and it's incredible tight structure to types. I was immediately hooked on Java when I learnt it sophomore year of college, taking aim at practicing it everyday to become an excellent Java programmer. That's what landed me my first internship, it was an unpaid job building an Android application for a startup company, and I had to integrate apis into the application to communicate with various crypto markets and link user's accounts. This was my first foray into api interaction, and it would prove to become highly beneficial, as I would go on to land an co-op which involved heavy usage of api calls in .NET. I am forever grateful for my first opportunity being the most beneficial."})]}),(0,t.jsxs)(E.Item,{eventKey:"2",children:[(0,t.jsx)(E.Header,{children:(0,t.jsx)("i",{className:"fa-solid fa-c"})}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"One of my first intimidating languages, the class that taught it required that we code it in the terminal. First time dealing with the notorious segfault. Figuring out how to fix those, and how to work with memory directly, would prove to become an inmeasurable benefit for my future career as an programmer, in Python and Java, you have the heap managed for you, you rarely if any directly modify the memory. This taught me the intro to pointers, and I still code in C sometimes just for kicks of a challenge, because working with strings is extremely difficult, but for good reason, they are truly just arrays of characters with a null terminating character at the end, the other languages provide help working with them for us, but at a cost as well."})]}),(0,t.jsxs)(E.Item,{eventKey:"3",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-solid fa-c"}),(0,t.jsx)("i",{className:"fa-solid fa-plus fa-xs"}),(0,t.jsx)("i",{className:"fa-solid fa-plus fa-xs"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"Learnt this after experiencing C, and it was a breath of fresh air, the ability to use pointers with the luxury of having classes and finally a string type. Working in this language was nothing short of a miracle after having to work with C for a whole semester. This language would prove to become a very useful one as well, as it's used in the competitive programming scene quite often due to it's inclination to support algorithmic problems well having a robust standard library, and also it's ability to run very fast due to it being relatively low-level, having similar properties to C while having properties of an OOP language."})]}),(0,t.jsxs)(E.Item,{eventKey:"4",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-solid fa-c"}),(0,t.jsx)("i",{className:"fa-solid fa-hashtag ms-1"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"This was first introduced to me in January of 2022, when I landed my first co-op with a relatively large company. I was super nervous, and we immediately hopped into code I was unfamiliar with, and I picked it up very quickly, and began integrating features left and right, and having a blast using this language. I eventually actually took a class as well that integrated this language into a SQL database, and showed the ease of using this language to manage database operations, and it was stunning how well it worked and seamlessly plugged into the database."})]}),(0,t.jsxs)(E.Item,{eventKey:"5",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-brands fa-js"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"Javascript"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"Can't say enough about this language, this is what is running in this website right now! One of my top 3 languages, and by far, my most familiar due to the nature of how well I gravitated towards this language. This was one of my favorite classes of my entire undergrad career, was CISC275, intro to software engineering, and we used React and JS(mainly TS) to create web applications, and this was intimidating to learn at first, but now that I've been developing in JS for close to almost 2 years, I can say without certainty that it is turning into a very robust, scalable, magnificent language. The hacks you can perform in JS are quite amusing as well. I created an entire frogger game in my CISC474 class using just javascript, it's extremely powerful."})]}),(0,t.jsxs)(E.Item,{eventKey:"6",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-solid fa-t"}),(0,t.jsx)("i",{className:"fa-solid fa-s"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"Typescript"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"This is the language that is website is literally built in, the latter is the one this website is compiled into. This language has so much power, so much structure, it is easily one of my favorite languages of all time, from building discord bots in it, to building web servers, this language has endless potential, and has an insanely robust infrastructure. I am addicted to linting code, and maintaining the most efficient code possible, and having the ability to import all these rules, that use typescript to enforce specifics, is nothing short of amazing. This language landed me my first real job, as a Junior Dev at a small company in Pennsylvania."})]}),(0,t.jsxs)(E.Item,{eventKey:"7",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-solid fa-s"}),(0,t.jsx)("i",{className:"fa-solid fa-q"}),(0,t.jsx)("i",{className:"fa-solid fa-l"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"This language I still use today, and the principles I still carry on to all my interactions with databases. This language was taught to me late in my scholarly career when I took CISC475, and this language is extremely easy to learn if you are a computer scientist. The language almost reads out like English and the syntax is incredibly easy to comprehend. The principles of this language are the most important, however, is learning how to maintain an efficient and strong foundational database, how to structure data within that database so it can be queried efficiently and stored efficiently."})]}),(0,t.jsxs)(E.Item,{eventKey:"8",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-solid fa-terminal"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"Linux Terminal"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"I learnt the linux terminal in my early undergrad classes, and I still use the same syntax today, and learning how to use a terminal is absolutely necessary if you are to use any framework, or develop on your own, because it usually involves calling the terminal, or even when fixing issues, involves using the terminal. The teachings of generally what a terminal is, and how to use simple commands, can stretch very far in terms of your capabilities in solving problems without a programming language."})]}),(0,t.jsxs)(E.Item,{eventKey:"9",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-brands fa-node"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"NodeJS"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"I still use this today, even the day I am writing this, I am actively using nodejs to build efficient server-side code, and manage my projects that require it, is is a very essential tool to have in any full-stack developer's tool-belt. I recently built an entire api framework in Express, and it runs insanely smooth and exactly as I intended, due to the nodejs framework being so scale-able and easy to write in."})]}),(0,t.jsxs)(E.Item,{eventKey:"10",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-brands fa-html5"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"HTML"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"This website is literally html, and mostly every website is. Learning this was only essential to becoming a full-stack developer, because without it, you can't really structure websites at all properly. Being extremely knowledgeable about this language has only improved my ability in other aspects, such as styling, and adding functionality through JS."})]}),(0,t.jsxs)(E.Item,{eventKey:"11",children:[(0,t.jsxs)(E.Header,{children:[(0,t.jsx)("i",{className:"fa-brands fa-css3-alt"}),(0,t.jsx)("div",{className:"ms-2 ".concat(B().languages_accordion_title),children:"CSS"})]}),(0,t.jsx)(E.Body,{className:"".concat(B().language_text),children:"Learning CSS is still an uphill battle, no one knows every css property, but mastering little by little, has made me an incredible developer, so much in-fact that this website was built entirely by me with nothing but React, html, and css! Without css, you can't properly use html, and without html, you can't properly use css. Css is the skin, and the html is skeletal structure, while js is the nerves and muscles that enable the person to perform actions."})]}),(0,t.jsx)(E.Item,{className:"text-center ".concat(B().languages_page_and_many_more),eventKey:"12",children:(0,t.jsxs)("div",{children:["... and many more!",(0,t.jsx)("i",{className:"ms-1 fa-solid fa-dragon fa-flip"})]})})]})]})})},2437:function(e){e.exports={languages_accordion:"Languages_languages_accordion__iqTEk",languages_accordion_title:"Languages_languages_accordion_title__PDaV7",language_text:"Languages_language_text__hvp9T",languages_page:"Languages_languages_page__G80Na",languages_page_anim:"Languages_languages_page_anim__MouWM",languages_page_and_many_more:"Languages_languages_page_and_many_more__9JVRk",languages_page_and_many_more_anim:"Languages_languages_page_and_many_more_anim__5j41i"}},6977:function(e){e.exports={basic_layout:"BasicLayout_basic_layout__zNI5L"}},1372:function(e){e.exports={active:"NavLink_active__4DUYr"}},2689:function(e){e.exports={navbar:"Navbar_navbar__T3Bcs",navbar_link:"Navbar_navbar_link__LTCHA",navbar_link_anim:"Navbar_navbar_link_anim__72uhw",navbar_link_icon:"Navbar_navbar_link_icon___xzRu",navbar_link_icon_anim:"Navbar_navbar_link_icon_anim__JfL39"}}},function(e){e.O(0,[664,156,774,888,179],function(){return e(e.s=72)}),_N_E=e.O()}]);