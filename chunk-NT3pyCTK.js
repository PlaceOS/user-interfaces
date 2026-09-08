import{Fn as m$1,Jn as p,Nt as Z,Sr as vM,Tr as ve,ht as Te,jr as x,jt as Yo}from"./chunk-DtKoY7OQ.js";function U(n){n||(n=p(ve));let e=new x(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(Yo(e))}function T(n){let e=vM(n);return new x(t=>{let s=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),s?.()}})}function F(n,e){let s=!e?.manualCleanup?e?.injector?.get(ve)??p(ve):null,i=m(e?.equal),r;e?.requireSync?r=Z({kind:0},{equal:i}):r=Z({kind:1,value:e?.initialValue},{equal:i});let c,v=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{r.set({kind:2,error:o}),c?.()},complete:()=>{c?.()}});if(e?.requireSync&&r().kind===0)throw new m$1(601,!1);return c=s?.onDestroy(v.unsubscribe.bind(v)),Te(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new m$1(601,!1)}},{equal:e?.equal})}function m(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{T as n,U as r,F as t};
//# debugId=063562a9-35df-5590-8d46-30250c0cbac0
//# sourceMappingURL=chunk-NT3pyCTK.js.map