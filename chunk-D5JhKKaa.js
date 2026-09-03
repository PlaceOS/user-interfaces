import{Ln as Re,ds as ur,hr as V,hs as v,ia as fx,it as He,po as p,y as B}from"./chunk-EuE8pMiM.js";function U(n){n||(n=p(He));let e=new V(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(ur(e))}function T(n){let e=fx(n);return new V(t=>{let s=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),s?.()}})}function F(n,e){let s=!e?.manualCleanup?e?.injector?.get(He)??p(He):null,i=m(e?.equal),r;e?.requireSync?r=B({kind:0},{equal:i}):r=B({kind:1,value:e?.initialValue},{equal:i});let c,v$1=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{r.set({kind:2,error:o}),c?.()},complete:()=>{c?.()}});if(e?.requireSync&&r().kind===0)throw new v(601,!1);return c=s?.onDestroy(v$1.unsubscribe.bind(v$1)),Re(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new v(601,!1)}},{equal:e?.equal})}function m(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{T as n,U as r,F as t};
//# debugId=1bdc583b-958c-582d-aa36-9a1baabbd097
//# sourceMappingURL=chunk-D5JhKKaa.js.map