import{Tt as Re,V as H_,Wn as ht,ci as yD,pr as m$1,ri as x,si as y,zn as ge}from"./chunk-2_Cm-MgT.js";function U(n){n||(n=y(ge));let e=new x(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(yD(e))}function T(n){let e=H_(n);return new x(t=>{let s=e?.onDestroy(()=>t.complete()),i=n.subscribe(r=>t.next(r));return()=>{i.unsubscribe(),s?.()}})}function F(n,e){let s=!e?.manualCleanup?e?.injector?.get(ge)??y(ge):null,i=m(e?.equal),r;e?.requireSync?r=ht({kind:0},{equal:i}):r=ht({kind:1,value:e?.initialValue},{equal:i});let c,v=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{r.set({kind:2,error:o}),c?.()},complete:()=>{c?.()}});if(e?.requireSync&&r().kind===0)throw new m$1(601,!1);return c=s?.onDestroy(v.unsubscribe.bind(v)),Re(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new m$1(601,!1)}},{equal:e?.equal})}function m(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{T as n,U as r,F as t};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b3a71527-c40e-5170-8d2d-63dffc04e620")}catch(e){}}();
//# debugId=b3a71527-c40e-5170-8d2d-63dffc04e620
//# sourceMappingURL=chunk-B6Sz8m5o2.js.map