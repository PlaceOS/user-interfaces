import {m as m$1,cq as ze,ed as cr,ee as K,ef as WP,V,eg as S,A as Ae}from'./main.js';function U(n){n||(n=m$1(ze));let e=new K(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(cr(e))}function T(n){let e=WP(n);return new K(t=>{let s=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return ()=>{i.unsubscribe(),s?.();}})}function F(n,e){let s=!e?.manualCleanup?e?.injector?.get(ze)??m$1(ze):null,i=m(e?.equal),r;e?.requireSync?r=V({kind:0},{equal:i}):r=V({kind:1,value:e?.initialValue},{equal:i});let c,v=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{r.set({kind:2,error:o}),c?.();},complete:()=>{c?.();}});if(e?.requireSync&&r().kind===0)throw new S(601,false);return c=s?.onDestroy(v.unsubscribe.bind(v)),Ae(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new S(601,false)}},{equal:e?.equal})}function m(n=Object.is){return (e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v22.0.1
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/export{F,T,U};//# sourceMappingURL=chunk-CiXtLZiT.js.map
