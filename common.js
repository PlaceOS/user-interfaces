(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["common"],{9534:(e,n,t)=>{"use strict";t.d(n,{ym:()=>r.y,rq:()=>l,r7:()=>_,ry:()=>d,Vh:()=>u}),t(8223),t(9720);var r=t(648),a=t(6817),s=t(9996),i=t(2775),o=t(7271);const c="/api/staff/v1/events";function u(e,n={}){const t=(0,i.U)(n);return(0,a.U2M)(`${c}/${encodeURIComponent(e)}${t?"?"+t:""}`).pipe((0,s.U)(e=>new r.y(e)))}const d=(e,n)=>{var t;return null===(t=e)||void 0===t||delete t.status,e.id?function(e,n,t={},o="patch"){const u=(0,i.U)(t);return("patch"===o?a.r$K:a.gzd)(`${c}/${encodeURIComponent(e)}${u?"?"+u:""}`,"patch"===o?n:new r.y(n).toJSON()).pipe((0,s.U)(e=>new r.y(e)))}(e.id,e,n):function(e){return(0,a.v_Q)(`${c}`,new r.y(e).toJSON()).pipe((0,s.U)(e=>new r.y(e)))}(e)};function l(e,n,t,r={}){const u=(0,i.U)(Object.assign(Object.assign({},r),{state:t}));return(0,a.v_Q)(`${c}/${encodeURIComponent(e)}/guests/${n}/checkin${u?"?"+u:""}`,"").pipe((0,s.U)(e=>new o.OO(e)))}var w=t(6073),I=t(6925),p=t(1948),g=t(5090),N=t(6280),v=t(847),y=t(8774),h=t(804);const m=e=>{var n;return(null===(n=e.parent)||void 0===n?void 0:n.get("date"))&&(0,y.Z)(new Date,(0,h.Z)(e.parent.get("date").value,e.value))?{duration:!0}:null};function _(e){const n=new w.cw({id:new w.NI(e.id),host:new w.NI(e.host||"",[w.kI.required]),organiser:new w.NI(e.organiser||{},[w.kI.required]),creator:new w.NI(e.creator,[w.kI.required]),calendar:new w.NI(e.calendar),attendees:new w.NI(e.attendees||[]),resources:new w.NI(e.resources||[]),title:new w.NI(e.title,[w.kI.required]),body:new w.NI(e.body),private:new w.NI(e.private),date:new w.NI(e.date,[w.kI.required]),duration:new w.NI(e.duration,[m]),all_day:new w.NI(e.all_day),recurring:new w.NI(e.recurring),recurrence:new w.NI(e.recurrence),recurring_master_id:new w.NI(e.recurring_master_id),master:new w.NI(e.master),attachments:new w.NI(e.attachments),catering:new w.NI(e.extension_data.catering||[]),visitor_type:new w.NI(e.ext("visitor_type")),location:new w.NI(e.location),needs_space:new w.NI(!0),needs_parking:new w.NI(e.ext("needs_parking")||!1),system:new w.NI(e.system)});return n.get("organiser").valueChanges.subscribe(e=>n.controls.host.setValue(null==e?void 0:e.email)),n.get("resources").valueChanges.subscribe(e=>n.controls.system.setValue(e.length?e[0]:null)),e.id&&(n.get("host").disable(),n.get("organiser").disable()),"started"===e.state&&n.get("date").disable(),n}t(391),(0,I.Z)(function(e,n){(0,N.Z)(2,arguments);var t=(0,g.Z)(e),r=(0,p.Z)(n);return t.setMinutes(r),t}((0,v.Z)(new Date,6),0),{days:-1}),t(1496)}}]);
//# sourceMappingURL=common.js.map