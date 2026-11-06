"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{2246:(e,t,a)=>{var i;a.d(t,{M:()=>n});let n={name:"Marco Ant\xf4nio Monteiro de Brito",shortName:"Marco Ant\xf4nio",role:"Engenheiro de Software S\xeanior",location:"Belo Horizonte, MG \xb7 Brasil",email:"marco.monteirobrito@gmail.com",linkedin:"https://www.linkedin.com/in/marco-ant%C3%B4nio-monteiro-de-brito-541ba0144/",resume:(i="/curriculo-marco-antonio.pdf").startsWith("/")&&!i.startsWith("//")?"/portfolio-marco"+i:i,project:{name:"BarberMap",url:"https://barbermap.com.br"}}},3213:(e,t,a)=>{a.d(t,{b:()=>f});var i=a(9234),n=a(3143),r=a(9589),o=a(8823),l=a(3916),s=a(7058),u=a(6714),c=a(2246);let d=c.M.email,m=[.22,1,.36,1];function f(){let[e,t]=(0,u.useState)(!1),[a,f]=(0,u.useState)(!1),p=async()=>{try{await navigator.clipboard.writeText(d),f(!0),window.setTimeout(()=>f(!1),1600)}catch{let e=document.createElement("textarea");e.value=d,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();try{document.execCommand("copy")?(f(!0),window.setTimeout(()=>f(!1),1600)):window.location.href=`mailto:${d}`}catch{window.location.href=`mailto:${d}`}document.body.removeChild(e)}};return(0,i.jsxs)(n.P.button,{type:"button",layout:!0,onClick:p,onHoverStart:()=>t(!0),onHoverEnd:()=>t(!1),onFocus:()=>t(!0),onBlur:()=>t(!1),"aria-label":a?"E-mail copiado":`Copiar e-mail de ${c.M.shortName}`,transition:{layout:{duration:.55,ease:m}},style:{borderRadius:12},className:"focus-ring bg-foreground text-background relative inline-flex h-11 max-w-full cursor-pointer items-center justify-center px-4 text-sm font-medium",children:[(0,i.jsx)(n.P.span,{layout:"position",className:"relative inline-flex min-w-0 items-center",children:(0,i.jsx)(r.N,{initial:!1,mode:"popLayout",children:e?(0,i.jsxs)(n.P.span,{layout:"position",initial:{opacity:0,filter:"blur(8px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(8px)"},transition:{duration:.35,ease:m},className:"inline-flex min-w-0 items-center gap-2 whitespace-nowrap",children:[(0,i.jsx)("span",{className:"relative inline-flex h-4 w-4 shrink-0 items-center justify-center",children:(0,i.jsx)(r.N,{initial:!1,mode:"wait",children:a?(0,i.jsx)(n.P.span,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{duration:.2,ease:m},className:"inline-flex",children:(0,i.jsx)(o.A,{className:"h-4 w-4","aria-hidden":"true"})},"check"):(0,i.jsx)(n.P.span,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{duration:.2,ease:m},className:"inline-flex",children:(0,i.jsx)(l.A,{className:"h-4 w-4","aria-hidden":"true"})},"copy")})}),(0,i.jsx)("span",{className:"truncate",children:d})]},"email"):(0,i.jsxs)(n.P.span,{layout:"position",initial:{opacity:0,filter:"blur(8px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(8px)"},transition:{duration:.35,ease:m},className:"inline-flex items-center gap-2 whitespace-nowrap",children:[(0,i.jsx)(s.A,{className:"h-4 w-4 shrink-0","aria-hidden":"true"}),(0,i.jsx)("span",{children:"Copiar e-mail"})]},"contact")})}),(0,i.jsx)("span",{className:"sr-only",role:"status",children:a?"E-mail copiado para a \xe1rea de transfer\xeancia":""})]})}},3333:(e,t,a)=>{a.r(t),a.d(t,{FadeIn:()=>o,ScaleUnblur:()=>l});var i=a(9234),n=a(3143);let r=[.22,1,.36,1];function o({children:e,delay:t=0,duration:a=.8,className:o}){return(0,i.jsx)(n.P.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:a,delay:t,ease:r},className:o,children:e})}function l({children:e,delay:t=0,duration:a=1,className:o}){return(0,i.jsx)(n.P.div,{initial:{opacity:0,scale:.7,filter:"blur(20px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:a,delay:t,ease:r},style:{transformOrigin:"center"},className:o,children:e})}},4222:(e,t,a)=>{a.d(t,{ShaderFlow:()=>v});var i=a(9234),n=a(951),r=a(9042),o=a(5448),l=a(4013),s=a(1903),u=a(6714);let c=`precision highp float;
uniform vec2 uR;
uniform float uT;
uniform vec2 uV;
uniform float uS;
uniform float uTw;
uniform float uDe;
uniform float uMs;
uniform float uB;
uniform int uIt;
uniform vec3 uColorLow;
uniform vec3 uColorHigh;
uniform vec3 uBgColor;
uniform vec4 uFadeShape;

float h(vec2 p){
  return sin(p.x+sin(p.y+uT*uV.x))*sin(p.y*p.x*0.1+uT*uV.y);
}

float fadeAlpha(float d){
  float t=clamp(1.0-d,0.0,1.0);
  return t*t*(3.0-2.0*t);
}

void main(){
  vec2 frag=gl_FragCoord.xy/uR;
  vec2 p=frag-0.5;
  p.x*=uR.x/uR.y;
  p*=uS;

  float ms=uT*uMs*0.1;
  vec2 d=vec2(sin(ms),cos(ms))*0.1;
  float kt=uTw*0.01;
  float kd=1.0/uDe;

  vec2 e=vec2(0.05,0.);
  vec2 r=vec2(0.);
  for(int i=0;i<24;i++){
    if(i>=uIt)break;
    float a=h(p);
    float b=h(p+e.xy);
    float c=h(p+e.yx);
    vec2 q=vec2(b-a,c-a)*20.;
    p+=vec2(-q.y,q.x)*kt+q*kd+d;
    r=q;
  }

  float t=clamp(length(r)*0.5,0.0,1.0);
  vec3 col=mix(uColorLow,uColorHigh,t)*uB;

  vec2 ndc=vec2(frag.x,1.0-frag.y);
  float aspect=uR.x/uR.y;
  float dx=((ndc.x-uFadeShape.x)*aspect)/uFadeShape.z;
  float dy=(ndc.y-uFadeShape.y)/uFadeShape.w;
  float fa=fadeAlpha(sqrt(dx*dx+dy*dy));

  vec3 outColor=mix(uBgColor,col,fa);
  gl_FragColor=vec4(outColor,1.0);
}`,d=[.1,.2],m=[.18,.2,.3],f=[.55,.38,.32];function p(e){let t=e.trim();if(t.startsWith("#")){let e=t.slice(1);if(3===e.length&&(e=e.split("").map(e=>e+e).join("")),6!==e.length)return null;let a=parseInt(e,16);return Number.isNaN(a)?null:[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]}let a=t.match(/(\d+(?:\.\d+)?)/g);return!a||a.length<3?null:[Number(a[0])/255,Number(a[1])/255,Number(a[2])/255]}function h(e){let t=getComputedStyle(e).getPropertyValue("--background").trim(),a=t?p(t):null;if(a)return a;let i=document.createElement("div");i.style.cssText="position:absolute;width:0;height:0;background:var(--background);",e.appendChild(i);let n=getComputedStyle(i).backgroundColor;return e.removeChild(i),p(n)??[1,1,1]}function v(e){let t=(0,u.useRef)(null),a=(0,u.useRef)(e);return(0,u.useEffect)(()=>{a.current=e}),(0,u.useEffect)(()=>{let e=t.current;if(!e)return;let i=new n.A({dpr:Math.min(window.devicePixelRatio||1,1),alpha:!1,antialias:!1,powerPreference:"high-performance"}),u=i.gl;u.canvas.style.width="100%",u.canvas.style.height="100%",u.canvas.style.display="block",e.appendChild(u.canvas);let p=new r.l(u),v=new o.B(u,{vertex:"attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}",fragment:c,uniforms:{uT:{value:0},uR:{value:[1,1]},uV:{value:[...d]},uS:{value:6},uTw:{value:50},uDe:{value:200},uMs:{value:2.5},uB:{value:1},uIt:{value:14},uColorLow:{value:[...m]},uColorHigh:{value:[...f]},uBgColor:{value:h(document.documentElement)},uFadeShape:{value:[.5,0,1.4,.6]}}});if(!v.uniformLocations)return void console.error("Shader link failed",{v:u.getShaderInfoLog(v.vertexShader),f:u.getShaderInfoLog(v.fragmentShader)});let x=new l.e(u,{geometry:p,program:v}),y=new s.d;x.setParent(y);let g=()=>{let t=e.clientWidth,a=e.clientHeight;i.setSize(t,a),v.uniforms.uR.value=[u.drawingBufferWidth,u.drawingBufferHeight]};g();let b=new ResizeObserver(g);b.observe(e);let w=0,C=!0,N=!0,j=performance.now(),S=()=>{C="visible"===document.visibilityState};document.addEventListener("visibilitychange",S);let k=new IntersectionObserver(e=>{for(let t of e)N=t.isIntersecting},{rootMargin:"100px"});k.observe(e);let B=()=>{v.uniforms.uBgColor.value=h(document.documentElement)},E=new MutationObserver(B);E.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),B();let F=()=>{if(C&&N){let e;v.uniforms.uT.value=(performance.now()-j)/1e3,e=a.current,v.uniforms.uV.value=[...e.flowSpeed??d],v.uniforms.uS.value=e.scale??6,v.uniforms.uB.value=e.brightness??1,v.uniforms.uIt.value=e.iterations??14,v.uniforms.uColorLow.value=[...e.colorLowA??m],v.uniforms.uColorHigh.value=[...e.colorHighA??f],v.uniforms.uFadeShape.value=[e.fadeCx??.5,e.fadeCy??0,e.fadeRx??1.4,e.fadeRy??.6],i.render({scene:y})}w=requestAnimationFrame(F)};return w=requestAnimationFrame(F),()=>{cancelAnimationFrame(w),b.disconnect(),k.disconnect(),E.disconnect(),document.removeEventListener("visibilitychange",S),u.canvas.parentElement===e&&e.removeChild(u.canvas),u.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,i.jsx)("div",{ref:t,"aria-hidden":"true",className:e.className??"absolute inset-0 h-full w-full grayscale"})}},8405:(e,t,a)=>{a.d(t,{ContactCardCtas:()=>d});var i=a(9234),n=a(7281),r=a(5061),o=a(3143),l=a(7705),s=a.n(l),u=a(3213);let c=[.22,1,.36,1];function d(){return(0,i.jsx)(r.o,{children:(0,i.jsxs)(o.P.div,{layout:!0,transition:{layout:{duration:.55,ease:c}},className:"mt-2 flex flex-wrap items-center gap-3",children:[(0,i.jsx)(u.b,{}),(0,i.jsx)(o.P.div,{layout:!0,transition:{layout:{duration:.55,ease:c}},children:(0,i.jsxs)(s(),{href:"/projects",className:"border-foreground/5 focus-ring group bg-background text-foreground inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium shadow-md/2 transition-colors",children:["Ver projeto",(0,i.jsx)(n.A,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5","aria-hidden":"true"})]})})]})})}}}]);