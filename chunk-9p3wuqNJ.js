import{Ba as Z,Ko as d7,O as B,Or as O,R as C,Tr as Na,Vc as m,bn as Je,bo as b,jl as qe,li as R,ot as Dt}from"./chunk-CBNakCD-.js";function U(n){n||(n=m(Dt));let e=new Z(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(qe(e))}function T(n){let e=d7(n);return new Z(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??m(B),o=new Na(1),i=Je(()=>{let r;try{r=n()}catch(u){O(()=>o.error(u));return}O(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(Dt).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(Dt)??m(Dt):null,i=x(e?.equal),r;e?.requireSync?r=C({kind:0},{equal:i}):r=C({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new b(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),R(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new b(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=521632ea-3615-5f58-ac0f-de41bba0cc1e
//# sourceMappingURL=chunk-9p3wuqNJ.js.map