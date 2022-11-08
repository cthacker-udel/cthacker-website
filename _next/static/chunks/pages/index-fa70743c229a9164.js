(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6677)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return u.ImageLoaderProps}}),t.default=function(e){let t,n;var o,{src:i,sizes:p,unoptimized:x=!1,priority:w=!1,loading:b,className:j,quality:y,width:_,height:N,fill:E,style:S,onLoad:k,onLoadingComplete:C,placeholder:M="empty",blurDataURL:z,layout:P,objectFit:L,objectPosition:I,lazyBoundary:O,lazyRoot:R}=e,A=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=r.useContext(d.ImageConfigContext),T=r.useMemo(()=>{let e=m||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:n})},[D]),B=A,F=B.loader||f.default;if(delete B.loader,"__next_img_default"in F){if("custom"===T.loader)throw Error('Image with src "'.concat(i,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=F;F=e=>{let{config:t}=e,n=s(e,["config"]);return W(n)}}if(P){"fill"===P&&(E=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];q&&(S=a({},S,q));let G={responsive:"100vw",fill:"100vw"}[P];G&&!p&&(p=G)}let V="",Z=h(_),U=h(N);if("object"==typeof(o=i)&&(g(o)||void 0!==o.src)){let H=g(i)?i.default:i;if(!H.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(!H.height||!H.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)));if(t=H.blurWidth,n=H.blurHeight,z=z||H.blurDataURL,V=H.src,!E){if(Z||U){if(Z&&!U){let J=Z/H.width;U=Math.round(H.height*J)}else if(!Z&&U){let X=U/H.height;Z=Math.round(H.width*X)}}else Z=H.width,U=H.height}}let Y=!w&&("lazy"===b||void 0===b);((i="string"==typeof i?i:V).startsWith("data:")||i.startsWith("blob:"))&&(x=!0,Y=!1),T.unoptimized&&(x=!0);let[$,K]=r.useState(!1),[Q,ee]=r.useState(!1),et=h(y),en=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:I}:{},Q?{}:{color:"transparent"},S),ea="blur"===M&&z&&!$?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:U,blurWidth:t,blurHeight:n,blurDataURL:z}),'")')}:{},eo=function(e){let{config:t,src:n,unoptimized:a,width:o,quality:i,sizes:s,loader:r}=e;if(a)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:a,allSizes:o}=e;if(n){let i=/(^|\s)(1?\d?\d)vw/g,s=[];for(let r;r=i.exec(n);r)s.push(parseInt(r[2]));if(s.length){let l=.01*Math.min(...s);return{widths:o.filter(e=>e>=a[0]*l),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let c=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:c,kind:"x"}}(t,o,s),u=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,a)=>"".concat(r({config:t,src:n,quality:i,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:r({config:t,src:n,quality:i,width:l[u]})}}({config:T,src:i,unoptimized:x,width:Z,quality:et,sizes:p,loader:F}),ei=i,es={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:B.crossOrigin},er=r.useRef(k);r.useEffect(()=>{er.current=k},[k]);let el=r.useRef(C);r.useEffect(()=>{el.current=C},[C]);let ec=a({isLazy:Y,imgAttributes:eo,heightInt:U,widthInt:Z,qualityInt:et,className:j,imgStyle:en,blurStyle:ea,loading:b,config:T,fill:E,unoptimized:x,placeholder:M,loader:F,srcString:ei,onLoadRef:er,onLoadingCompleteRef:el,setBlurComplete:K,setShowAltText:ee},B);return r.default.createElement(r.default.Fragment,null,r.default.createElement(v,Object.assign({},ec)),w?r.default.createElement(l.default,null,r.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},es))):null)};var a=n(6495).Z,o=n(2648).Z,i=n(1598).Z,s=n(7273).Z,r=i(n(7294)),l=o(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=o(n(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,o,i,s,r){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&s(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;o.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist(){},preventDefault(){r=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:n,widthInt:o,qualityInt:i,className:l,imgStyle:c,blurStyle:u,isLazy:d,fill:f,placeholder:m,loading:g,srcString:h,config:v,unoptimized:x,loader:w,onLoadRef:b,onLoadingCompleteRef:j,setBlurComplete:y,setShowAltText:_,onLoad:N,onError:E}=e,S=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,r.default.createElement(r.default.Fragment,null,r.default.createElement("img",Object.assign({},S,t,{width:o,height:n,decoding:"async","data-nimg":f?"fill":"1",className:l,loading:g,style:a({},c,u),ref:r.useCallback(e=>{e&&(E&&(e.src=e.src),e.complete&&p(e,h,m,b,j,y,x))},[h,m,b,j,y,E,x]),onLoad(e){let t=e.currentTarget;p(t,h,m,b,j,y,x)},onError(e){_(!0),"blur"===m&&y(!0),E&&E(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:a,blurHeight:o,blurDataURL:i}=e,s=a||t,r=o||n,l=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&r?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(r,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&o?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:a,quality:o}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},6677:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(5893),o=n(7294),i=n(1664),s=n.n(i);let r=()=>{let[e,t]=o.useState(!1),n=()=>{t(!e)};return(0,a.jsxs)("div",{className:"w-75 mx-auto d-flex flex-row justify-content-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-user my-auto fa-xl ".concat(e&&"fa-bounce")}),(0,a.jsx)(s(),{className:"text-decoration-none",href:"aboutme",children:(0,a.jsx)("div",{className:"fs-4 ms-3 section_link",onMouseEnter:n,onMouseLeave:n,children:"About Me"})})]})},l=()=>{let[e,t]=o.useState(!1),n=()=>{t(!e)};return(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-center w-100",children:[(0,a.jsx)("i",{className:"fa-solid fa-xl fa-phone my-auto ".concat(e&&"fa-shake")}),(0,a.jsx)("div",{className:"fs-4 ms-3 section_link",onMouseEnter:n,onMouseLeave:n,children:"Contact Info"})]})};var c=n(600),u=n.n(c);let d=()=>{let[e,t]=o.useState(!1),n=()=>{t(!e)};return(0,a.jsxs)("div",{className:"d-flex flex-row w-100 justify-content-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-computer fa-xl my-auto ".concat(e&&"fa-bounce")}),(0,a.jsx)("div",{className:"fs-4 ms-3 section_link",onMouseEnter:n,onMouseLeave:n,children:"Languages"})]})};var f=n(5675),m=n.n(f),g=n(5450),h=n.n(g);let p=()=>(0,a.jsxs)("div",{className:"d-flex flex-row w-75 mx-auto justify-content-center",children:[(0,a.jsx)("div",{className:"text-start fs-2 fw-bold my-auto me-4",children:"Cameron M.C. Thacker"}),(0,a.jsx)("div",{className:"position-relative ".concat(h().img_container," d-none d-lg-block"),children:(0,a.jsx)(m(),{alt:"Profile image",className:"border border-dark rounded-circle img-thumbnail",fill:!0,src:"https://avatars.githubusercontent.com/u/70614147?v=4"})}),(0,a.jsx)("div",{className:"fs-2 my-auto ms-4 ".concat(h().occupation),children:"Full Stack Developer"})]}),v=()=>{let[e,t]=o.useState(!1),n=()=>{t(!e)};return(0,a.jsxs)("div",{className:"w-75 mx-auto d-flex flex-row justify-content-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-briefcase my-auto fa-xl ".concat(e&&"fa-bounce")}),(0,a.jsx)("div",{className:"fs-4 ms-3 section_link",onMouseEnter:n,onMouseLeave:n,children:"Projects"})]})},x=()=>{let[e,t]=o.useState(!1),n=()=>{t(!e)};return(0,a.jsxs)("div",{className:"d-flex flex-row w-100 justify-content-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-school fa-xl my-auto ".concat(e&&"fa-bounce")}),(0,a.jsx)("div",{className:"fs-4 ms-3 section_link",onMouseEnter:n,onMouseLeave:n,children:"School"})]})},w=()=>{let[e,t]=o.useState(!1),n=()=>{t(!e)};return(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-center w-100",children:[(0,a.jsx)("i",{className:"fa-solid fa-building my-auto fa-xl ".concat(e&&"fa-bounce")}),(0,a.jsx)("div",{className:"fs-4 ms-3 section_link",onMouseEnter:n,onMouseLeave:n,children:"Work History"})]})},b=()=>(0,a.jsxs)("div",{className:"d-flex flex-column w-100 h-100 justify-content-around align-items-center ".concat(u().landing_page),children:[(0,a.jsx)(p,{}),(0,a.jsx)("div",{className:"border border-dark w-100"}),(0,a.jsx)(v,{}),(0,a.jsx)(w,{}),(0,a.jsx)(x,{}),(0,a.jsx)(d,{}),(0,a.jsx)(r,{}),(0,a.jsx)(l,{})]}),j=()=>(0,a.jsx)(b,{});var y=j},600:function(e){e.exports={landing_page:"LandingPage_landing_page__myFA_"}},5450:function(e){e.exports={img_container:"NameSection_img_container__Vlt6I",occupation:"NameSection_occupation__Da9Y4"}},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);