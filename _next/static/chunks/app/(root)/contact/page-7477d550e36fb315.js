(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{9893:function(e,t,n){Promise.resolve().then(n.bind(n,6277))},6277:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var a=n(7437),o=n(2265),s=function(){for(var e,t,n=0,a="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,a,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(n=0;n<s;n++)t[n]&&(a=e(t[n]))&&(o&&(o+=" "),o+=a)}else for(a in t)t[a]&&(o&&(o+=" "),o+=a)}return o}(e))&&(a&&(a+=" "),a+=t);return a};let r=e=>"number"==typeof e&&!isNaN(e),l=e=>"string"==typeof e,i=e=>"function"==typeof e,c=e=>l(e)||i(e)?e:null,d=e=>(0,o.isValidElement)(e)||l(e)||i(e)||r(e);function u(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:l,position:i,preventExitTransition:c,done:d,nodeRef:u,isIn:m,playToast:p}=e,f=a?"".concat(t,"--").concat(i):t,g=a?"".concat(n,"--").concat(i):n,y=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=u.current,t=f.split(" "),n=a=>{a.target===u.current&&(p(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===y.current&&"animationcancel"!==a.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:a,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=a+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}(e,d,r):d()};m||(c?t():(y.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",t)))},[m]),o.createElement(o.Fragment,null,l)}}function m(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let p=new Map,f=[],g=new Set,y=e=>g.forEach(t=>t(e)),h=()=>p.size>0;function v(e,t){var n;if(t)return!(null==(n=p.get(t))||!n.isToastActive(e));let a=!1;return p.forEach(t=>{t.isToastActive(e)&&(a=!0)}),a}function b(e,t){d(e)&&(h()||f.push({content:e,options:t}),p.forEach(n=>{n.buildToast(e,t)}))}function E(e,t){p.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function x(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:l,className:c,style:d,controlledProgress:u,progress:m,rtl:p,isIn:f,theme:g}=e,y=l||u&&0===m,h={...d,animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused"};u&&(h.transform="scaleX(".concat(m,")"));let v=s("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":p}),b=i(c)?c({rtl:p,type:r,defaultClassName:v}):s(v,c);return o.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},o.createElement("div",{className:"Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(g," Toastify__progress-bar--").concat(r)}),o.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:b,style:h,[u&&m>=1?"onTransitionEnd":"onAnimationEnd"]:u&&m<1?null:()=>{f&&a()}}))}let T=1,w=()=>""+T++;function C(e,t){return b(e,t),t.toastId}function N(e,t){return{...t,type:t&&t.type||e,toastId:t&&(l(t.toastId)||r(t.toastId))?t.toastId:w()}}function _(e){return(t,n)=>C(t,N(e,n))}function I(e,t){return C(e,N("default",t))}I.loading=(e,t)=>C(e,N("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),I.promise=function(e,t,n){let a,{pending:o,error:s,success:r}=t;o&&(a=l(o)?I.loading(o,n):I.loading(o.render,{...n,...o}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,o)=>{if(null==t)return void I.dismiss(a);let s={type:e,...c,...n,data:o},r=l(t)?{render:t}:t;return a?I.update(a,{...s,...r}):I(r.render,{...s,...r}),o},u=i(e)?e():e;return u.then(e=>d("success",r,e)).catch(e=>d("error",s,e)),u},I.success=_("success"),I.info=_("info"),I.error=_("error"),I.warning=_("warning"),I.warn=I.warning,I.dark=(e,t)=>C(e,N("default",{theme:"dark",...t})),I.dismiss=function(e){!function(e){var t;if(h()){if(null==e||l(t=e)||r(t))p.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=p.get(e.containerId);t?t.removeToast(e.id):p.forEach(t=>{t.removeToast(e.id)})}}else f=f.filter(t=>null!=e&&t.options.toastId!==e)}(e)},I.clearWaitingQueue=function(e){void 0===e&&(e={}),p.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},I.isActive=v,I.update=function(e,t){void 0===t&&(t={});let n=((e,t)=>{var n;let{containerId:a}=t;return null==(n=p.get(a||1))?void 0:n.toasts.get(e)})(e,t);if(n){let{props:a,content:o}=n,s={delay:100,...a,...t,toastId:t.toastId||e,updateId:w()};s.toastId!==e&&(s.staleId=e);let r=s.render||o;delete s.render,C(r,s)}},I.done=e=>{I.update(e,{progress:1})},I.onChange=function(e){return g.add(e),()=>{g.delete(e)}},I.play=e=>E(!0,e),I.pause=e=>E(!1,e);let L="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,k=e=>{let{theme:t,type:n,isLoading:a,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")"),...s})},j={info:function(e){return o.createElement(k,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(k,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(k,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(k,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}},P=e=>{let{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r,playToast:l}=function(e){var t,n;let[a,s]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),i=(0,o.useRef)(null),c=(0,o.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:m,onClick:f,closeOnClick:g}=e;function y(){s(!0)}function h(){s(!1)}function v(t){let n=i.current;c.canDrag&&n&&(c.didMove=!0,a&&h(),c.delta="x"===e.draggableDirection?t.clientX-c.start:t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1),n.style.transform="translate3d(".concat("x"===e.draggableDirection?"".concat(c.delta,"px, var(--y)"):"0, calc(".concat(c.delta,"px + var(--y))"),",0)"),n.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function b(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",b);let t=i.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return l(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=p.get((t={id:e.toastId,containerId:e.containerId,fn:s}).containerId||1))||n.setToggle(t.id,t.fn),(0,o.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||h(),window.addEventListener("focus",y),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",h)}},[e.pauseOnFocusLoss]);let E={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",b);let n=i.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:a,left:o,right:s}=i.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=o&&t.clientX<=s&&t.clientY>=n&&t.clientY<=a?h():y()}};return d&&u&&(E.onMouseEnter=h,e.stacked||(E.onMouseLeave=y)),g&&(E.onClick=e=>{f&&f(e),c.canCloseOnClick&&m()}),{playToast:y,pauseToast:h,isRunning:a,preventExitTransition:r,toastRef:i,eventHandlers:E}}(e),{closeButton:c,children:d,autoClose:u,onClick:m,type:f,hideProgressBar:g,closeToast:y,transition:h,position:v,className:b,style:E,bodyClassName:T,bodyStyle:w,progressClassName:C,progressStyle:N,updateId:_,role:I,progress:L,rtl:k,toastId:P,deleteToast:S,isIn:M,isLoading:O,closeOnClick:A,theme:B}=e,D=s("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":A}),R=i(b)?b({rtl:k,position:v,type:f,defaultClassName:D}):s(D,b),z=function(e){let{theme:t,type:n,isLoading:a,icon:s}=e,r=null,l={theme:t,type:n};return!1===s||(i(s)?r=s({...l,isLoading:a}):(0,o.isValidElement)(s)?r=(0,o.cloneElement)(s,l):a?r=j.spinner():n in j&&(r=j[n](l))),r}(e),F=!!L||!u,H={closeToast:y,type:f,theme:B},q=null;return!1===c||(q=i(c)?c(H):(0,o.isValidElement)(c)?(0,o.cloneElement)(c,H):function(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(H)),o.createElement(h,{isIn:M,done:S,position:v,preventExitTransition:n,nodeRef:a,playToast:l},o.createElement("div",{id:P,onClick:m,"data-in":M,className:R,...r,style:E,ref:a},o.createElement("div",{...M&&{role:I},className:i(T)?T({type:f}):s("Toastify__toast-body",T),style:w},null!=z&&o.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},z),o.createElement("div",null,d)),q,o.createElement(x,{..._&&!F?{key:"pb-".concat(_)}:{},rtl:k,theme:B,delay:u,isRunning:t,isIn:M,closeToast:y,hide:g,type:f,style:N,className:C,controlledProgress:F,progress:L||0})))},S=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},M=u(S("bounce",!0)),O=(u(S("slide",!0)),u(S("zoom")),u(S("flip")),{position:"top-right",transition:M,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function A(e){let t={...O,...e},n=e.stacked,[a,u]=(0,o.useState)(!0),g=(0,o.useRef)(null),{getToastToRender:h,isToastActive:E,count:x}=function(e){let{subscribe:t,getSnapshot:n,setProps:a}=(0,o.useRef)(function(e){let t=e.containerId||1;return{subscribe(n){let a=function(e,t,n){let a=1,s=0,u=[],p=[],f=[],g=t,y=new Map,h=new Set,v=()=>{f=Array.from(y.values()),h.forEach(e=>e())},b=e=>{p=null==e?[]:p.filter(t=>t!==e),v()},E=e=>{let{toastId:t,onOpen:a,updateId:s,children:r}=e.props,l=null==s;e.staleId&&y.delete(e.staleId),y.set(t,e),p=[...p,e.props.toastId].filter(t=>t!==e.staleId),v(),n(m(e,l?"added":"updated")),l&&i(a)&&a((0,o.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{y.forEach(n=>{null!=t&&t!==n.props.toastId||i(n.toggle)&&n.toggle(e)})},removeToast:b,toasts:y,clearQueue:()=>{s-=u.length,u=[]},buildToast:(t,p)=>{var f,h;if((t=>{let{containerId:n,toastId:a,updateId:o}=t,s=y.has(a)&&null==o;return(n?n!==e:1!==e)||s})(p))return;let{toastId:x,updateId:T,data:w,staleId:C,delay:N}=p,_=()=>{b(x)},I=null==T;I&&s++;let L={...g,style:g.toastStyle,key:a++,...Object.fromEntries(Object.entries(p).filter(e=>{let[t,n]=e;return null!=n})),toastId:x,updateId:T,data:w,closeToast:_,isIn:!1,className:c(p.className||g.toastClassName),bodyClassName:c(p.bodyClassName||g.bodyClassName),progressClassName:c(p.progressClassName||g.progressClassName),autoClose:!p.isLoading&&(f=p.autoClose,h=g.autoClose,!1===f||r(f)&&f>0?f:h),deleteToast(){let e=y.get(x),{onClose:t,children:a}=e.props;i(t)&&t((0,o.isValidElement)(a)&&a.props),n(m(e,"removed")),y.delete(x),--s<0&&(s=0),u.length>0?E(u.shift()):v()}};L.closeButton=g.closeButton,!1===p.closeButton||d(p.closeButton)?L.closeButton=p.closeButton:!0===p.closeButton&&(L.closeButton=!d(g.closeButton)||g.closeButton);let k=t;(0,o.isValidElement)(t)&&!l(t.type)?k=(0,o.cloneElement)(t,{closeToast:_,toastProps:L,data:w}):i(t)&&(k=t({closeToast:_,toastProps:L,data:w}));let j={content:k,props:L,staleId:C};g.limit&&g.limit>0&&s>g.limit&&I?u.push(j):r(N)?setTimeout(()=>{E(j)},N):E(j)},setProps(e){g=e},setToggle:(e,t)=>{y.get(e).toggle=t},isToastActive:e=>p.some(t=>t===e),getSnapshot:()=>g.newestOnTop?f.reverse():f}}(t,e,y);p.set(t,a);let s=a.observe(n);return f.forEach(e=>b(e.content,e.options)),f=[],()=>{s(),p.delete(t)}},setProps(e){var n;null==(n=p.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=p.get(t))?void 0:e.getSnapshot()}}}(e)).current;a(e);let s=(0,o.useSyncExternalStore)(t,n,n);return{getToastToRender:function(e){if(!s)return[];let t=new Map;return s.forEach(e=>{let{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:v,count:null==s?void 0:s.length}}(t),{className:T,style:w,rtl:C,containerId:N}=t;function _(){n&&(u(!0),I.play())}return L(()=>{if(n){var e;let n=g.current.querySelectorAll('[data-in="true"]'),o=null==(e=t.position)?void 0:e.includes("top"),s=0,r=0;Array.from(n).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed="".concat(a)),e.dataset.pos||(e.dataset.pos=o?"top":"bot");let n=s*(a?.2:1)+(a?0:12*t);e.style.setProperty("--y","".concat(o?n:-1*n,"px")),e.style.setProperty("--g","".concat(12)),e.style.setProperty("--s",""+(1-(a?r:0))),s+=e.offsetHeight,r+=.025})}},[a,x,n]),o.createElement("div",{ref:g,className:"Toastify",id:N,onMouseEnter:()=>{n&&(u(!1),I.pause())},onMouseLeave:_},h((e,t)=>{let a=t.length?{...w}:{...w,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=s("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":C});return i(T)?T({position:e,rtl:C,defaultClassName:t}):s(t,c(T))}(e),style:a,key:"container-".concat(e)},t.map(e=>{let{content:t,props:a}=e;return o.createElement(P,{...a,stacked:n,collapseAll:_,isIn:E(a.toastId,a.containerId),style:a.style,key:"toast-".concat(a.key)},t)}))}))}function B(){let[e,t]=(0,o.useState)({name:"",email:"",mobile:"",biodata:null}),[n,s]=(0,o.useState)({}),[r,l]=(0,o.useState)(!1),i=n=>{let{id:a,value:o,files:s}=n.target;t({...e,[a]:s?s[0]:o})},c=()=>{let t={};return e.name||(t.name="Name is required"),e.email||(t.email="Email is required"),e.mobile||(t.mobile="Mobile number is required"),e.biodata||(t.biodata="Biodata is required"),s(t),0===Object.keys(t).length},d=async t=>{if(t.preventDefault(),c())try{let t={sender:{name:e.name,email:e.email},recipient:[{name:"Recipient Name",email:"recipient@example.com"}],subject:"New Application Submission",body:"\n                        Name: ".concat(e.name,"\n\n                        Email: ").concat(e.email,"\n\n                        Mobile: ").concat(e.mobile,"\n\n                        Biodata: ").concat(e.biodata?e.biodata.name:"No biodata provided.","\n                    ")},n=await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(n.ok)l(!0),I.success("Form submitted successfully!");else{let e=await n.json();s({biodata:e.error}),I.error("Error sending email")}}catch(e){console.error("Error submitting form",e),s({biodata:"Error submitting form"}),I.error("Error submitting form")}};return(0,a.jsxs)("div",{className:"min-h-screen flex justify-center pt-32 mt-20 bg-pink-100 relative pattern",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-pink-50 to-pink-100 opacity-75"}),(0,a.jsxs)("div",{className:"w-full flex flex-col gap-4 z-10",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-6 text-center text-gray-600 px-10",children:"We've been waiting for you."}),(0,a.jsx)("p",{className:"text-center mb-6 text-gray-600 px-10",children:"We want to hear from you. Let us know how we can help."}),(0,a.jsxs)("div",{className:"w-full flex flex-col items-center gap-5 relative rounded",children:[(0,a.jsx)("div",{className:"absolute -top-20 opacity-70 -z-10",children:(0,a.jsx)("svg",{width:"600",height:"600",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("g",{transform:"translate(300,300)",children:(0,a.jsx)("path",{d:"M150,-180C194.6,-154.5,226.6,-97.7,224.8,-46.8C223,-4.1,187.4,39.6,160.2,79.2C133,118.9,114.2,154.5,86.1,179.7C58,204.9,29,219.7,-3.1,226.8C-35.3,234,-70.6,233.5,-102.5,219.3C-134.4,205.1,-163,177.2,-187.1,142.1C-211.3,107,-231,-43.7,-208.2,-85.4C-185.5,-127.2,-120.3,-160,-64.2,-185.6C-8.1,-211.2,40.8,-229.6,89.6,-224.6C138.4,-219.6,191.1,-191.5,150,-180Z",fill:"#d6d7d1"})})})}),(0,a.jsx)("h2",{className:"font-bold mb-3 text-xl text-gray-700",children:"Send us a message"}),(0,a.jsxs)("form",{className:"w-full flex flex-col items-center gap-4 max-w-[500px]",onSubmit:d,children:[(0,a.jsx)("input",{type:"text",id:"name",placeholder:"Enter your name",className:"text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-5/6",value:e.name,onChange:i}),n.name&&(0,a.jsx)("span",{className:"text-red-500 text-sm",children:n.name}),(0,a.jsx)("input",{type:"email",id:"email",placeholder:"Enter your email",className:"text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-5/6",value:e.email,onChange:i}),n.email&&(0,a.jsx)("span",{className:"text-red-500 text-sm",children:n.email}),(0,a.jsx)("input",{type:"tel",id:"mobile",placeholder:"Enter your mobile number",className:"text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-5/6",value:e.mobile,onChange:i}),n.mobile&&(0,a.jsx)("span",{className:"text-red-500 text-sm",children:n.mobile}),(0,a.jsxs)("div",{className:"pl-10 w-5/6",children:[(0,a.jsx)("label",{htmlFor:"biodata",className:"text-gray-700 text-left",children:"Upload your biodata (PDF only)"}),(0,a.jsx)("input",{type:"file",id:"biodata",accept:"application/pdf",className:"text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-full",onChange:i}),n.biodata&&(0,a.jsx)("span",{className:"text-red-500 text-sm",children:n.biodata})]}),(0,a.jsx)("button",{type:"submit",className:"bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600",children:"Submit"})]}),(0,a.jsx)(A,{position:"bottom-center"}),r&&(0,a.jsx)("div",{className:"text-green-500 mt-4",children:"Form submitted successfully!"})]})]})]})}n(4193)},4193:function(){}},function(e){e.O(0,[143,971,23,744],function(){return e(e.s=9893)}),_N_E=e.O()}]);