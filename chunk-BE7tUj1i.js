import {L as Lt,m,w,hm as I,R,bf as V,hn as Ca,g as ot,M,ho as R9,f$ as ne,gX as We}from'./main.js';function U(n){n||(n=m(Lt));let e=new ne(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(We(e))}function T(n){let e=R9(n);return new ne(t=>{let o=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return ()=>{i.unsubscribe(),o?.();}})}function F(n,e){let t=m(V),o=new Ca(1),i=ot(()=>{let r;try{r=n();}catch(u){M(()=>o.error(u));return}M(()=>o.next(r));},{injector:t,manualCleanup:true});return t.get(Lt).onDestroy(()=>{i.destroy(),o.complete();}),o.asObservable()}function L(n,e){let o=!e?.manualCleanup?e?.injector?.get(Lt)??m(Lt):null,i=x(e?.equal),r;e?.requireSync?r=w({kind:0},{equal:i}):r=w({kind:1,value:e?.initialValue},{equal:i});let u,f=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),u?.();},complete:()=>{u?.();}});if(e?.requireSync&&r().kind===0)throw new I(601,false);return u=o?.onDestroy(f.unsubscribe.bind(f)),R(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new I(601,false)}},{equal:e?.equal})}function x(n=Object.is){return (e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v22.0.1
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/export{F,L,T,U};//# sourceMappingURL=chunk-BE7tUj1i.js.map
