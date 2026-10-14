import{Er as oe,Mt as Te,dr as m,f as Bv,hr as m_,jr as ps,kn as de,m as Ce,ot as N,r as $r,ur as lt,y as E}from"./chunk-B8-jNDcS.js";function U(n){n||(n=E(Ce));let e=new N(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(Bv(e))}function T(n){let e=m_(n);return new N(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??E(de),o=new $r(1),i=ps(()=>{let r;try{r=n()}catch(u){oe(()=>o.error(u));return}oe(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(Ce).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(Ce)??E(Ce):null,i=x(e?.equal),r;e?.requireSync?r=lt({kind:0},{equal:i}):r=lt({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new m(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),Te(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new m(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=06450534-e4f4-532a-86ee-8afc16598f60
//# sourceMappingURL=chunk-m0Eq5NcE2.js.map