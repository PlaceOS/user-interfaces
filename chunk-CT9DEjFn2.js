import{Ln as dt,O as E_,T as E,Vt as Te,dt as N,g as Ce,i as $r,kr as oe,nr as hs,p as Bv,qn as fe,yr as m}from"./chunk-D-EVA6UN.js";function U(n){n||(n=E(Ce));let e=new N(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(Bv(e))}function T(n){let e=E_(n);return new N(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??E(fe),o=new $r(1),i=hs(()=>{let r;try{r=n()}catch(u){oe(()=>o.error(u));return}oe(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(Ce).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(Ce)??E(Ce):null,i=x(e?.equal),r;e?.requireSync?r=dt({kind:0},{equal:i}):r=dt({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new m(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),Te(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new m(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=920cf5eb-a9fe-50a8-a44a-d9132d4ae130
//# sourceMappingURL=chunk-CT9DEjFn2.js.map