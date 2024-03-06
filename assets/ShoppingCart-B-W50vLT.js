import{j as c,r as u}from"./index-DOwTlaWh.js";import{P as w,u as z,a as L}from"./useCartStore-DTPmFa76.js";const R=({item:e,handleQuantityChange:t})=>{const{removeFromCart:r}=z(),o=()=>{r(e.id)};return c.jsxs("li",{className:" bg-white border border-gray-200 rounded-lg shadow p-5 my-5 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out ",children:[c.jsx("h3",{className:"text-xl font-semibold",children:e.name}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("img",{src:e.image,alt:"medicine item",className:"w-[250px]  mx-auto mt-2"}),c.jsxs("div",{className:"mx-8",children:[c.jsxs("p",{className:"text-gray-600",children:["Price: ",e.price]}),c.jsxs("p",{className:"text-gray-600",children:["Quantity: ",e.quantity]})]}),c.jsxs("div",{className:"flex flex-col justify-center items-center",children:[c.jsx("input",{type:"number",min:"1",value:e.quantity,onChange:s=>t(e.id,s.target.value),className:"border p-2 text-center w-16 my-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"}),c.jsx("button",{onClick:o,className:"ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 ease-in-out",children:"Remove"})]})]})]},e.id)};R.propTypes={item:w.object.isRequired,handleQuantityChange:w.func.isRequired};const M=({formData:e,handleInputChange:t,handleFormSubmit:r})=>c.jsxs("form",{onSubmit:r,className:"mt-4",children:[c.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Order Form"}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-600",children:"Name:"}),c.jsx("input",{type:"text",name:"name",value:e.name,onChange:t,className:"border p-2 w-full rounded-lg",required:!0})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-600",children:"Email:"}),c.jsx("input",{type:"email",name:"email",value:e.email,onChange:t,className:"border p-2 w-full rounded-lg",required:!0})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-600",children:"Phone:"}),c.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:t,className:"border p-2 w-full rounded-lg",required:!0})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-600",children:"Address:"}),c.jsx("input",{type:"text",name:"address",value:e.address,onChange:t,className:"border p-2 w-full rounded-lg",required:!0})]}),c.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded font-semibold text-xl hover:bg-blue-700 transition duration-300 ease-in-out",children:"Submit Order"})]});M.propTypes={formData:w.object.isRequired,handleInputChange:w.func.isRequired,handleFormSubmit:w.func.isRequired};let U={data:""},Y=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||U,Z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,B=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,y=(e,t)=>{let r="",o="",s="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":o+=a[1]=="f"?y(l,a):a+"{"+y(l,a[1]=="k"?"":t)+"}":typeof l=="object"?o+=y(l,t?t.replace(/([^,])+/g,i=>a.replace(/(^:.*)|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,i):i?i+" "+n:n)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=y.p?y.p(a,l):a+":"+l+";")}return r+(t&&s?t+"{"+s+"}":s)+o},b={},H=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+H(e[r]);return t}return e},G=(e,t,r,o,s)=>{let a=H(e),l=b[a]||(b[a]=(n=>{let d=0,p=11;for(;d<n.length;)p=101*p+n.charCodeAt(d++)>>>0;return"go"+p})(a));if(!b[l]){let n=a!==e?e:(d=>{let p,h,f=[{}];for(;p=Z.exec(d.replace(B,""));)p[4]?f.shift():p[3]?(h=p[3].replace(A," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][p[1]]=p[2].replace(A," ").trim();return f[0]})(e);b[l]=y(s?{["@keyframes "+l]:n}:n,r?"":"."+l)}let i=r&&b.g?b.g:null;return r&&(b.g=b[l]),((n,d,p,h)=>{h?d.data=d.data.replace(h,n):d.data.indexOf(n)===-1&&(d.data=p?n+d.data:d.data+n)})(b[l],t,o,i),l},J=(e,t,r)=>e.reduce((o,s,a)=>{let l=t[a];if(l&&l.call){let i=l(r),n=i&&i.props&&i.props.className||/^go/.test(i)&&i;l=n?"."+n:i&&typeof i=="object"?i.props?"":y(i,""):i===!1?"":i}return o+s+(l??"")},"");function P(e){let t=this||{},r=e.call?e(t.p):e;return G(r.unshift?r.raw?J(r,[].slice.call(arguments,1),t.p):r.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):r,Y(t.target),t.g,t.o,t.k)}let Q,T,q;P.bind({g:1});let x=P.bind({k:1});function V(e,t,r,o){y.p=t,Q=e,T=r,q=o}function v(e,t){let r=this||{};return function(){let o=arguments;function s(a,l){let i=Object.assign({},a),n=i.className||s.className;r.p=Object.assign({theme:T&&T()},i),r.o=/ *go\d+/.test(n),i.className=P.apply(r,o)+(n?" "+n:""),t&&(i.ref=l);let d=e;return e[0]&&(d=i.as||e,delete i.as),q&&d[0]&&q(i),Q(d,i)}return t?t(s):s}}var W=e=>typeof e=="function",O=(e,t)=>W(e)?e(t):e,X=(()=>{let e=0;return()=>(++e).toString()})(),_=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),K=20,C=new Map,ee=1e3,D=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),j({type:4,toastId:e})},ee);C.set(e,t)},te=e=>{let t=C.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,K)};case 1:return t.toast.id&&te(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?S(e,{type:1,toast:r}):S(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?D(o):e.toasts.forEach(a=>{D(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},$=[],k={toasts:[],pausedAt:void 0},j=e=>{k=S(k,e),$.forEach(t=>{t(k)})},re={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ae=(e={})=>{let[t,r]=u.useState(k);u.useEffect(()=>($.push(r),()=>{let s=$.indexOf(r);s>-1&&$.splice(s,1)}),[t]);let o=t.toasts.map(s=>{var a,l;return{...e,...e[s.type],...s,duration:s.duration||((a=e[s.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||re[s.type],style:{...e.style,...(l=e[s.type])==null?void 0:l.style,...s.style}}});return{...t,toasts:o}},se=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||X()}),N=e=>(t,r)=>{let o=se(t,e,r);return j({type:2,toast:o}),o.id},m=(e,t)=>N("blank")(e,t);m.error=N("error");m.success=N("success");m.loading=N("loading");m.custom=N("custom");m.dismiss=e=>{j({type:3,toastId:e})};m.remove=e=>j({type:4,toastId:e});m.promise=(e,t,r)=>{let o=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(s=>(m.success(O(t.success,s),{id:o,...r,...r==null?void 0:r.success}),s)).catch(s=>{m.error(O(t.error,s),{id:o,...r,...r==null?void 0:r.error})}),e};var oe=(e,t)=>{j({type:1,toast:{id:e,height:t}})},ie=()=>{j({type:5,time:Date.now()})},ne=e=>{let{toasts:t,pausedAt:r}=ae(e);u.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(i=>{if(i.duration===1/0)return;let n=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(n<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),n)});return()=>{l.forEach(i=>i&&clearTimeout(i))}},[t,r]);let o=u.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),s=u.useCallback((a,l)=>{let{reverseOrder:i=!1,gutter:n=8,defaultPosition:d}=l||{},p=t.filter(g=>(g.position||d)===(a.position||d)&&g.height),h=p.findIndex(g=>g.id===a.id),f=p.filter((g,F)=>F<h&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,F)=>g+(F.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:oe,startPause:ie,endPause:o,calculateOffset:s}}},le=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ue=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,fe=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ge=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,be=v("div")`
  position: absolute;
`,xe=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ye=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ve=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ye} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,je=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(ve,null,t):t:r==="blank"?null:u.createElement(xe,null,u.createElement(me,{...o}),r!=="loading"&&u.createElement(be,null,r==="error"?u.createElement(ue,{...o}):u.createElement(ge,{...o})))},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ne=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",Ce="0%{opacity:1;} 100%{opacity:0;}",$e=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ke=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Oe=(e,t)=>{let r=e.includes("top")?1:-1,[o,s]=_()?[Ee,Ce]:[we(r),Ne(r)];return{animation:t?`${x(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Pe=u.memo(({toast:e,position:t,style:r,children:o})=>{let s=e.height?Oe(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(je,{toast:e}),l=u.createElement(ke,{...e.ariaProps},O(e.message,e));return u.createElement($e,{className:e.className,style:{...s,...r,...e.style}},typeof o=="function"?o({icon:a,message:l}):u.createElement(u.Fragment,null,a,l))});V(u.createElement);var Fe=({id:e,className:t,style:r,onHeightUpdate:o,children:s})=>{let a=u.useCallback(l=>{if(l){let i=()=>{let n=l.getBoundingClientRect().height;o(e,n)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:a,className:t,style:r},s)},Te=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...s}},qe=P`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Se=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:s,containerStyle:a,containerClassName:l})=>{let{toasts:i,handlers:n}=ne(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:l,onMouseEnter:n.startPause,onMouseLeave:n.endPause},i.map(d=>{let p=d.position||t,h=n.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),f=Te(p,h);return u.createElement(Fe,{id:d.id,key:d.id,onHeightUpdate:n.updateHeight,className:d.visible?qe:"",style:f},d.type==="custom"?O(d.message,d):s?s(d):u.createElement(Pe,{toast:d,position:p}))}))},I=m;const Ie=()=>{const{cartItems:e,updateCartItemQuantity:t}=z(),[r,o]=u.useState({name:"",email:"",phone:"",address:""}),s=(n,d)=>{t(n,d)},a=n=>{o({...r,[n.target.name]:n.target.value})},l=e.reduce((n,d)=>n+d.price*d.quantity,0),i=async n=>{n.preventDefault();const d={items:e,user:r,totalPrice:l};try{await L.post("https://medicine-backend-node.onrender.com/api/order",d),I.success("Your order has been submitted!")}catch{I.error("There was an error submitting your order")}};return c.jsxs("div",{className:"container mx-auto p-6 grid grid-cols-2 gap-4",children:[c.jsx(Se,{}),c.jsxs("div",{className:"border p-4 rounded-xl  border-slate-300",children:[e.length>0&&c.jsx("ul",{children:e.map(n=>c.jsx(R,{item:n,handleQuantityChange:s},n.id))}),e.length>0&&c.jsxs("div",{className:"mt-4",children:[c.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Total Price"}),c.jsxs("p",{className:"text-gray-600",children:["Total Price: ",l.toFixed(2)," ₴"]})]})]}),c.jsx(M,{formData:r,handleInputChange:a,handleFormSubmit:i})]})};export{Ie as default};
