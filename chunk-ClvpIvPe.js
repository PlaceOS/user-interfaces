import{Ai as xS,Ir as oe,O as Fe,Oi as x,Pi as y,S as De,Sr as m,U as It,_i as ve,mr as ks,sr as io}from"./chunk-BF3rhqXc.js";function E(r){let e=xS(r);return new x(n=>{let o=e?.onDestroy(()=>n.complete()),i=r.subscribe(t=>n.next(t));return()=>{i.unsubscribe(),o?.()}})}function N(r,e){let n=e?.injector??y(ve),o=new io(1),i=ks(()=>{let t;try{t=r()}catch(u){oe(()=>o.error(u));return}oe(()=>o.next(t))},{injector:n,manualCleanup:!0});return n.get(De).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function U(r,e){let o=!e?.manualCleanup?e?.injector?.get(De)??y(De):null,i=h(e?.equal),t;e?.requireSync?t=It({kind:0},{equal:i}):t=It({kind:1,value:e?.initialValue},{equal:i});let u,v=r.subscribe({next:s=>t.set({kind:1,value:s}),error:s=>{t.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&t().kind===0)throw new m(601,!1);return u=o?.onDestroy(v.unsubscribe.bind(v)),Fe(()=>{let s=t();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new m(601,!1)}},{equal:e?.equal})}function h(r=Object.is){return(e,n)=>e.kind===1&&n.kind===1&&r(e.value,n.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{N as n,U as r,E as t};
//# debugId=fa6b6bcb-d20c-5767-a3de-8b8114cc90b2
//# sourceMappingURL=chunk-ClvpIvPe.js.map