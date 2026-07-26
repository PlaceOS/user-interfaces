import {m as m$1,cp as qe,ea as ur,eb as q,ec as j0,B,ed as y,a as Te}from'./main.js';function U(n){n||(n=m$1(qe));let e=new q(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(ur(e))}function T(n){let e=j0(n);return new q(t=>{let s=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return ()=>{i.unsubscribe(),s?.();}})}function F(n,e){let s=!e?.manualCleanup?e?.injector?.get(qe)??m$1(qe):null,i=m(e?.equal),r;e?.requireSync?r=B({kind:0},{equal:i}):r=B({kind:1,value:e?.initialValue},{equal:i});let c,v=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{r.set({kind:2,error:o}),c?.();},complete:()=>{c?.();}});if(e?.requireSync&&r().kind===0)throw new y(601,false);return c=s?.onDestroy(v.unsubscribe.bind(v)),Te(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new y(601,false)}},{equal:e?.equal})}function m(n=Object.is){return (e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v22.0.1
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/export{F,T,U};//# sourceMappingURL=chunk-Bkm2BEMj.js.map
