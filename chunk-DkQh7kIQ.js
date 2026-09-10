import{Ca as je,Fi as dr,Ha as m$1,M as Ce,rs as ux,ur as V,ut as H,vt as I}from"./chunk-DiRZz73h.js";function U(n){n||(n=m$1(je));let e=new V(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(dr(e))}function T(n){let e=ux(n);return new V(t=>{let s=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),s?.()}})}function F(n,e){let s=!e?.manualCleanup?e?.injector?.get(je)??m$1(je):null,i=m(e?.equal),r;e?.requireSync?r=H({kind:0},{equal:i}):r=H({kind:1,value:e?.initialValue},{equal:i});let c,v=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{r.set({kind:2,error:o}),c?.()},complete:()=>{c?.()}});if(e?.requireSync&&r().kind===0)throw new I(601,!1);return c=s?.onDestroy(v.unsubscribe.bind(v)),Ce(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new I(601,!1)}},{equal:e?.equal})}function m(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{T as n,U as r,F as t};
//# debugId=768e65ce-58c1-53ed-95e4-85df3b514cad
//# sourceMappingURL=chunk-DkQh7kIQ.js.map