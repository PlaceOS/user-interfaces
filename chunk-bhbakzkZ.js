import{D as C,In as N,Lr as St,Uc as oa,Uo as g,Vt as Ie,Wi as Y,ai as Un,cl as q,jo as f6,sc as lt,t as $}from"./chunk-BmSSpL8s.js";function U(n){n||(n=g(lt));let e=new q(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(Un(e))}function T(n){let e=f6(n);return new q(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??g(Y),o=new oa(1),i=St(()=>{let r;try{r=n()}catch(u){$(()=>o.error(u));return}$(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(lt).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(lt)??g(lt):null,i=x(e?.equal),r;e?.requireSync?r=N({kind:0},{equal:i}):r=N({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new C(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),Ie(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new C(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=28ac9a4c-2246-5929-a280-d48ecc87aec7
//# sourceMappingURL=chunk-bhbakzkZ.js.map