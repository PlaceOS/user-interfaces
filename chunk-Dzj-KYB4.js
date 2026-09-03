import{Da as Xe,Hc as m,Mu as w,Ti as T$1,Zr as Q,hr as N,pa as We,rd as y7,tr as M,wr as Na,y as At,zt as H}from"./chunk-DBgMDvFV.js";function U(n){n||(n=m(At));let e=new Q(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(We(e))}function T(n){let e=y7(n);return new Q(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),o?.()}})}function F(n,e){let t=e?.injector??m(H),o=new Na(1),i=Xe(()=>{let r;try{r=n()}catch(u){M(()=>o.error(u));return}M(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(At).onDestroy(()=>{i.destroy(),o.complete()}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(At)??m(At):null,i=x(e?.equal),r;e?.requireSync?r=N({kind:0},{equal:i}):r=N({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.()},complete:()=>{u?.()}});if(e?.requireSync&&r().kind===0)throw new T$1(601,!1);return u=o?.onDestroy(f.unsubscribe.bind(f)),w(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new T$1(601,!1)}},{equal:e?.equal})}function x(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{U as i,L as n,T as r,F as t};
//# debugId=04a56f83-cae0-5317-8417-8195f83c9b40
//# sourceMappingURL=chunk-Dzj-KYB4.js.map