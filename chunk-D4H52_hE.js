import{Ar as v,Lr as x,Mn as g,in as Y,kr as ui,r as $N,st as Me,x as De}from"./chunk-B5hGj_t1.js";function U(n){n||(n=g(De));let e=new x(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(ui(e))}function T(n){let e=$N(n);return new x(t=>{let s=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),s?.()}})}function F(n,e){let s=!e?.manualCleanup?e?.injector?.get(De)??g(De):null,i=m(e?.equal),r;e?.requireSync?r=Y({kind:0},{equal:i}):r=Y({kind:1,value:e?.initialValue},{equal:i});let c,v$1=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{r.set({kind:2,error:o}),c?.()},complete:()=>{c?.()}});if(e?.requireSync&&r().kind===0)throw new v(601,!1);return c=s?.onDestroy(v$1.unsubscribe.bind(v$1)),Me(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new v(601,!1)}},{equal:e?.equal})}function m(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{T as n,U as r,F as t};
//# debugId=1688e821-88f5-59d8-bd18-390f4537a734
//# sourceMappingURL=chunk-D4H52_hE.js.map