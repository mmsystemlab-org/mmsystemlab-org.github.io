(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{716:(e,t,r)=>{"use strict";r.d(t,{Providers:()=>h});var n=r(9234),i=r(6714);function a(e){let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function o(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(){return!1}let u=(0,i.createContext)(!1);function s({children:e}){let t=(0,i.useSyncExternalStore)(a,o,l);return(0,n.jsx)(u.Provider,{value:t,children:e})}var c=r(7205);let d={duration:1.6,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2};function f({children:e}){return(0,i.useEffect)(()=>{if(0,window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=new c.A(d),t=requestAnimationFrame(function t(r){e.raf(r),requestAnimationFrame(t)});function r(t){let r=t.target.closest('a[href^="#"]');if(!r)return;let n=r.getAttribute("href");if(!n||"#"===n)return;let i=document.querySelector(n);i&&(t.preventDefault(),e.scrollTo(i,{offset:-100}))}return document.addEventListener("click",r),()=>{document.removeEventListener("click",r),cancelAnimationFrame(t),e.destroy()}},[]),(0,n.jsx)(n.Fragment,{children:e})}var m=r(1401);function h({children:e}){return(0,n.jsx)(m.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:(0,n.jsx)(s,{children:(0,n.jsx)(f,{children:e})})})}},1159:(e,t,r)=>{"use strict";r.d(t,{Nav:()=>h});var n=r(9234),i=r(7481),a=r(7772),o=r(3143),l=r(1401),u=r(7705),s=r.n(u),c=r(8938),d=r(6714);let f=[{label:"In\xedcio",href:"/"},{label:"Projetos",href:"/projects"},{label:"Sobre",href:"/about"}];function m(){let e=(0,d.useSyncExternalStore)(()=>()=>{},()=>!0,()=>!1),{setTheme:t,resolvedTheme:r}=(0,l.D)(),o=e&&"dark"===r;return(0,n.jsx)("button",{type:"button",onClick:e=>{let r=o?"light":"dark",n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if("undefined"==typeof document||"function"!=typeof document.startViewTransition||n)return void t(r);let i=e.currentTarget.getBoundingClientRect(),a=i.left+i.width/2,l=i.top+i.height/2,u=Math.hypot(Math.max(a,window.innerWidth-a),Math.max(l,window.innerHeight-l)),s=document.documentElement;s.style.setProperty("--theme-cx",`${a}px`),s.style.setProperty("--theme-cy",`${l}px`),s.style.setProperty("--theme-r",`${u}px`),s.dataset.themeAnim="1",document.startViewTransition(()=>{t(r)}).finished.finally(()=>{delete s.dataset.themeAnim})},"aria-label":e?o?"Ativar tema claro":"Ativar tema escuro":"Alternar tema","aria-pressed":e?o:void 0,className:"focus-ring bg-background ring-foreground/8 relative inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ring-1 transition-colors",children:(0,n.jsxs)("span",{"aria-hidden":"true",className:"relative h-4 w-4",children:[(0,n.jsx)(i.A,{className:`text-foreground absolute inset-0 h-4 w-4 transition-all duration-300 ${e&&o?"scale-100 rotate-0 opacity-100":"scale-0 -rotate-90 opacity-0"}`}),(0,n.jsx)(a.A,{className:`text-foreground absolute inset-0 h-4 w-4 transition-all duration-300 ${e&&!o?"scale-100 rotate-0 opacity-100":"scale-0 rotate-90 opacity-0"}`})]})})}function h(){let e=(0,c.usePathname)(),t=(0,d.useRef)(null),r=(0,d.useRef)([]),[i,a]=(0,d.useState)(null),[l,u]=(0,d.useState)(!1),h=f.findIndex(t=>"/"===t.href?"/"===e:e===t.href||e.startsWith(`${t.href}/`));return(0,d.useLayoutEffect)(()=>{let e=t.current,n=h>=0?r.current[h]:null;if(!e||!n)return;let i=()=>{let t=e.getBoundingClientRect(),r=n.getBoundingClientRect();a(e=>{let n={x:r.left-t.left,width:r.width};return e?.x===n.x&&e.width===n.width?e:n})},o=requestAnimationFrame(i),l=new ResizeObserver(i);return l.observe(e),l.observe(n),()=>{cancelAnimationFrame(o),l.disconnect()}},[h,e]),(0,d.useEffect)(()=>{if(!i)return;let e=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(e)},[i]),(0,n.jsx)("nav",{"aria-label":"Navega\xe7\xe3o principal",className:"fixed top-6 left-1/2 z-50 -translate-x-1/2",children:(0,n.jsxs)("div",{className:"bg-background border-foreground/8 flex items-center gap-1 rounded-full border p-1.5 shadow-sm",children:[(0,n.jsxs)("ul",{ref:t,className:"relative flex items-center gap-1",children:[i&&h>=0&&(0,n.jsx)(o.P.span,{"aria-hidden":"true",initial:!1,animate:{x:i.x,width:i.width},transition:l?{type:"spring",stiffness:380,damping:32}:{duration:0},style:{left:0,top:0,bottom:0},className:"bg-foreground/5 ring-foreground/8 absolute rounded-full ring-1"}),f.map((e,t)=>{let i=t===h;return(0,n.jsx)("li",{ref:e=>{r.current[t]=e},className:"relative",children:(0,n.jsx)(s(),{href:e.href,"aria-current":i?"page":void 0,className:"focus-ring relative inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",children:(0,n.jsx)("span",{className:i?"text-foreground relative z-10":"text-foreground/60 hover:text-foreground relative z-10",children:e.label})})},e.href)})]}),(0,n.jsx)(m,{})]})})}},1245:(e,t,r)=>{Promise.resolve().then(r.bind(r,1159)),Promise.resolve().then(r.bind(r,716)),Promise.resolve().then(r.bind(r,4222)),Promise.resolve().then(r.t.bind(r,8616,23)),Promise.resolve().then(r.t.bind(r,3370,23)),Promise.resolve().then(r.t.bind(r,4980,23)),Promise.resolve().then(r.t.bind(r,9044,23))},4222:(e,t,r)=>{"use strict";r.d(t,{ShaderFlow:()=>g});var n=r(9234),i=r(951),a=r(9042),o=r(5448),l=r(4013),u=r(1903),s=r(6714);let c=`precision highp float;
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
}`,d=[.1,.2],f=[.18,.2,.3],m=[.55,.38,.32];function h(e){let t=e.trim();if(t.startsWith("#")){let e=t.slice(1);if(3===e.length&&(e=e.split("").map(e=>e+e).join("")),6!==e.length)return null;let r=parseInt(e,16);return Number.isNaN(r)?null:[(r>>16&255)/255,(r>>8&255)/255,(255&r)/255]}let r=t.match(/(\d+(?:\.\d+)?)/g);return!r||r.length<3?null:[Number(r[0])/255,Number(r[1])/255,Number(r[2])/255]}function v(e){let t=getComputedStyle(e).getPropertyValue("--background").trim(),r=t?h(t):null;if(r)return r;let n=document.createElement("div");n.style.cssText="position:absolute;width:0;height:0;background:var(--background);",e.appendChild(n);let i=getComputedStyle(n).backgroundColor;return e.removeChild(n),h(i)??[1,1,1]}function g(e){let t=(0,s.useRef)(null),r=(0,s.useRef)(e);return(0,s.useEffect)(()=>{r.current=e}),(0,s.useEffect)(()=>{let e=t.current;if(!e)return;let n=new i.A({dpr:Math.min(window.devicePixelRatio||1,1),alpha:!1,antialias:!1,powerPreference:"high-performance"}),s=n.gl;s.canvas.style.width="100%",s.canvas.style.height="100%",s.canvas.style.display="block",e.appendChild(s.canvas);let h=new a.l(s),g=new o.B(s,{vertex:"attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}",fragment:c,uniforms:{uT:{value:0},uR:{value:[1,1]},uV:{value:[...d]},uS:{value:6},uTw:{value:50},uDe:{value:200},uMs:{value:2.5},uB:{value:1},uIt:{value:14},uColorLow:{value:[...f]},uColorHigh:{value:[...m]},uBgColor:{value:v(document.documentElement)},uFadeShape:{value:[.5,0,1.4,.6]}}});if(!g.uniformLocations)return void console.error("Shader link failed",{v:s.getShaderInfoLog(g.vertexShader),f:s.getShaderInfoLog(g.fragmentShader)});let p=new l.e(s,{geometry:h,program:g}),x=new u.d;p.setParent(x);let b=()=>{let t=e.clientWidth,r=e.clientHeight;n.setSize(t,r),g.uniforms.uR.value=[s.drawingBufferWidth,s.drawingBufferHeight]};b();let w=new ResizeObserver(b);w.observe(e);let y=0,C=!0,S=!0,N=performance.now(),A=()=>{C="visible"===document.visibilityState};document.addEventListener("visibilitychange",A);let E=new IntersectionObserver(e=>{for(let t of e)S=t.isIntersecting},{rootMargin:"100px"});E.observe(e);let j=()=>{g.uniforms.uBgColor.value=v(document.documentElement)},k=new MutationObserver(j);k.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),j();let F=()=>{if(C&&S){let e;g.uniforms.uT.value=(performance.now()-N)/1e3,e=r.current,g.uniforms.uV.value=[...e.flowSpeed??d],g.uniforms.uS.value=e.scale??6,g.uniforms.uB.value=e.brightness??1,g.uniforms.uIt.value=e.iterations??14,g.uniforms.uColorLow.value=[...e.colorLowA??f],g.uniforms.uColorHigh.value=[...e.colorHighA??m],g.uniforms.uFadeShape.value=[e.fadeCx??.5,e.fadeCy??0,e.fadeRx??1.4,e.fadeRy??.6],n.render({scene:x})}y=requestAnimationFrame(F)};return y=requestAnimationFrame(F),()=>{cancelAnimationFrame(y),w.disconnect(),E.disconnect(),k.disconnect(),document.removeEventListener("visibilitychange",A),s.canvas.parentElement===e&&e.removeChild(s.canvas),s.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,n.jsx)("div",{ref:t,"aria-hidden":"true",className:e.className??"absolute inset-0 h-full w-full grayscale"})}},9044:()=>{}},e=>{e.O(0,[759,61,191,354,660,358],()=>e(e.s=1245)),_N_E=e.O()}]);