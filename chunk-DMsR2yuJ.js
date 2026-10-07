import{Qs as p,Tn as Le,Ur as T$1,Yo as k,Yt as J,cr as Pr,gl as vt,nt as Ee,oi as Ue,t as $,us as lr,xs as mx}from"./chunk-BH6grKpX.js";function U(n){n||(n=p(Ue));let e=new k(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(lr(e))}function T(n){let e=mx(n);return new k(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??p($),o=new Pr(1),i=vt(()=>{let r;try{r=n()}catch(u){J(()=>o.error(u));return}J(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(Ue).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(Ue)??p(Ue):null,i=x(e?.equal),r;e?.requireSync?r=Ee({kind:0},{equal:i}):r=Ee({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new T$1(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),Le(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new T$1(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=58a2b0b7-18be-527f-9670-562a9d86a47b
//# sourceMappingURL=chunk-DMsR2yuJ.js.map