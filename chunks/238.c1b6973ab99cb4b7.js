(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{50238:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(85893),i=t(1642),s=t(63003),c=t(59706),a=t(10990),u=t(67294),o=t(60541),l=t(13404),d=t.n(l);function p(e){let{title:r,items:t}=e,{onCursor:l}=(0,u.useContext)(o.uG),p=(0,u.useRef)(null);return((0,u.useEffect)(()=>{let e=a.p8.context(()=>{a.p8.fromTo(".".concat(d().item),{y:"100%",opacity:0},{y:"0%",opacity:1,stagger:.1,scrollTrigger:{trigger:p.current,scrub:!0,end:"bottom 80%"}})},p);return()=>{e.revert()}},[]),t.length)?(0,n.jsxs)("section",{className:d().block,children:[r&&(0,n.jsx)(s.v,{className:d().ticker,text:r}),(0,n.jsx)(c.Z,{nodeRef:p,className:d().wrapper,children:t.map(e=>{let{id:r,type:t,label:s,project:c,link:a}=e;return(0,n.jsxs)("div",{className:d().item,onMouseEnter:()=>a&&l("pointer"),onMouseLeave:()=>a&&l(),children:[(0,n.jsxs)("div",{className:d().label,children:["Awwwards"==t&&(0,n.jsx)(i.W,{}),"CSS Design Awards"==t&&(0,n.jsx)(i.CssAwards,{}),s]}),(0,n.jsx)("div",{className:d().desc,children:"".concat(c," — ").concat(t)}),a&&(0,n.jsx)("a",{href:a,target:"_blank"})]},r)})})]}):(0,n.jsx)(n.Fragment,{})}},63003:function(e,r,t){"use strict";t.d(r,{v:function(){return p}});var n=t(85893),i=t(67294),s=t(14501),c=t.n(s),a=t(10990),u=t(42708),o=t(1642),l=t(59632),d=t.n(l);let p=e=>{let{text:r,reverse:t=!1,className:s="",speed:l=200}=e,p=(0,i.useRef)(null),f=(0,i.useRef)(),[x,h]=(0,u.YD)({}),g=(0,i.useCallback)(e=>{p.current=e,x(e)},[x]),w=e=>{a.p8.set(e,{position:"absolute",left:t?-e.offsetWidth:e.offsetWidth})};return(0,i.useEffect)(()=>{if(!h||!p.current)return;let e=p.current.querySelector("div"),r=(null==e?void 0:e.offsetWidth)/l;if(!e)return;let n=e.cloneNode(!0);p.current.appendChild(n),w(n);let i=a.p8.context(()=>{f.current=a.p8.timeline({repeat:-1}).to([n,e],{x:t?"100%":"-100%",duration:r,ease:"linear"})},p),s=()=>{w(n)};return window.addEventListener("resize",s),()=>{i.revert(),window.removeEventListener("resize",s),p.current&&p.current.removeChild(n)}},[h]),(0,n.jsx)("div",{className:c().ticker+" "+s,ref:g,children:(0,n.jsx)("div",{children:d()(r,"*",(e,r)=>(0,n.jsx)(o.Subtract,{},r))})})}},13404:function(e){e.exports={"xs-up":"min-width: 480px","lg-up":"min-width: 1024px","xl-up":"min-width: 1230px","xxl-up":"min-width: 1450px",block:"Awards_block__T1fOA",ticker:"Awards_ticker__whD6Y",wrapper:"Awards_wrapper__OCDhr",item:"Awards_item__pJO4l",label:"Awards_label__M_uoA",desc:"Awards_desc__V5Sip"}},14501:function(e){e.exports={"lg-up":"min-width: 1024px",ticker:"Ticker_ticker__ouUx5"}},59632:function(e){var r=function(e){var r=/[\\^$.*+?()[\]{}|]/g,t=RegExp(r.source);return e&&t.test(e)?e.replace(r,"\\$&"):e},t=function(e){return"string"==typeof e},n=function(e){var r=[];return e.forEach(function(e){Array.isArray(e)?r=r.concat(e):r.push(e)}),r};e.exports=function(e,i,s){return Array.isArray(e)||(e=[e]),n(e.map(function(e){return t(e)?function(e,n,i){var s=0,c=0;if(""===e)return e;if(!e||!t(e))throw TypeError("First argument to react-string-replace#replaceString must be a string");var a=n;a instanceof RegExp||(a=RegExp("("+r(a)+")","gi"));for(var u=e.split(a),o=1,l=u.length;o<l;o+=2){if(void 0===u[o]||void 0===u[o-1]){console.warn("reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.");continue}c=u[o].length,s+=u[o-1].length,u[o]=i(u[o],o,s),s+=c}return u}(e,i,s):e}))}}}]);