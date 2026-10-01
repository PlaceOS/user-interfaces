import{Cn as Le,Fa as cr,Go as k,Gs as p,Q as Ee,Tn as Lr,Vr as T$1,fi as Ve,hl as vt,hs as mx,qt as J,t as $}from"./chunk-1SEeSsJg.js";function U(n){n||(n=p(Ve));let e=new k(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(cr(e))}function T(n){let e=mx(n);return new k(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??p($),o=new Lr(1),i=vt(()=>{let r;try{r=n()}catch(u){J(()=>o.error(u));return}J(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(Ve).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(Ve)??p(Ve):null,i=x(e?.equal),r;e?.requireSync?r=Ee({kind:0},{equal:i}):r=Ee({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new T$1(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),Le(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new T$1(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=80bf9062-b4c4-55c2-b05c-0a8896a0e4aa
//# sourceMappingURL=chunk-QqgHv3QN.js.map