(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6912],{76912:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var i=r(85893),n=r(10990),c=r(67294),s=r(42708),l=r(79222),a=r.n(l),o=r(25675),u=r.n(o);function h(e){let{items:t}=e,r=(0,c.useRef)(),l=(0,c.useRef)(null),[o,h]=(0,s.YD)({triggerOnce:!0}),m=(0,c.useCallback)(e=>{r.current=e,o(e)},[o]);return((0,c.useEffect)(()=>{if(!h)return;let e=0,t=0,i=(e,t)=>(e%2==0?-1:1)*t,c=()=>{if(!l.current)return;let e=l.current.querySelectorAll("img"),t=0;e.length&&e.forEach((r,i)=>{t+=i+1==e.length?r.height:r.height/2}),l.current.style.minHeight="".concat(t,"px")},s=n.p8.context(()=>{n.p8.set(".".concat(a().item,":first-child"),{y:(e,r)=>(t=.5*r.querySelector("img").height,0)}),n.p8.fromTo(".".concat(a().item,":not(:first-child)"),{y:e=>1.2*window.innerHeight,rotate:e=>i(e,n.p8.utils.random(30,45,1))},{y:(r,i)=>{0==r&&(e=t);let n=e;return e+=.5*i.querySelector("img").height,n},x:e=>"".concat(i(e,n.p8.utils.random(10,20,5)),"%"),stagger:.5,rotate:e=>i(e,n.p8.utils.random(3,10,1)),scrollTrigger:{pin:".".concat(a().items),scrub:!0,start:"top 20%",end:"bottom top",invalidateOnRefresh:!0}})},r);return c(),window.addEventListener("resize",c),()=>{s.revert(),window.removeEventListener("resize",c)}},[h]),t.length)?(0,i.jsx)("section",{ref:m,className:a().block,children:(0,i.jsx)("div",{ref:l,className:a().items,children:t.map((e,t)=>{let{image:r}=e;return(0,i.jsx)("div",{className:a().item,children:(0,i.jsx)(u(),{src:r.url,alt:r.alt,width:800,height:800*r.height/r.width})},t)})})}):(0,i.jsx)(i.Fragment,{})}},79222:function(e){e.exports={"lg-up":"min-width: 1024px","md-up":"min-width: 960px",block:"StackImages_block__ZNqCZ",items:"StackImages_items__ezkKL",item:"StackImages_item__3_Gjf"}}}]);