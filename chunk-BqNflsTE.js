import{$r as R,E as At,Ei as Te,Gt as H4,Rs as ia,Vr as Q,da as Y,is as g,ks as ht,p as $r,sr as N,t as $}from"./chunk-DboBcCJt.js";function U(n){n||(n=g(ht));let e=new Q(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe($r(e))}function T(n){let e=H4(n);return new Q(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??g(Y),o=new ia(1),i=At(()=>{let r;try{r=n()}catch(u){$(()=>o.error(u));return}$(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(ht).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(ht)??g(ht):null,i=x(e?.equal),r;e?.requireSync?r=N({kind:0},{equal:i}):r=N({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new R(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),Te(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new R(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=910420a3-5ff4-5f7a-b851-17c6c17308dc
//# sourceMappingURL=chunk-BqNflsTE.js.map