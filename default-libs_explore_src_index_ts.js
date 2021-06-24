(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["default-libs_explore_src_index_ts"],{6393:(t,s,e)=>{"use strict";e.d(s,{Xp:()=>S,ck:()=>g.c,P2:()=>F});var i=e(1511),n=e(6073),o=e(1950),a=e(7521),r=e(2522),l=e(6899),c=e(9604),u=e(4762),h=e(8223),d=e(3530),_=e(2619),p=e(9294),g=e(8284);e(6898),e(6283),e(4786),e(1522);var b=e(4554),m=(e(4587),e(9996));e(3234),e(4608),e(3743),e(5980),e(1548),e(6756),e(9980),e(7806);const f={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","not-bookable":"#757575",unknown:"#757575"};var v=e(8512),k=e(3080),x=e(4689),Z=e(7727),y=e(4914),w=e(205),O=e(8125),U=e(8142),A=e(5087),T=e(3779);const q=["dot"],P=["explore-device-info",""];function I(t,s){if(1&t&&(_.TgZ(0,"p",12),_.TgZ(1,"label"),_._uU(2,"Manufacturer:"),_.qZA(),_._uU(3),_.qZA()),2&t){const t=_.oxw(2);_.xp6(3),_.hij(" ",t.manufacturer," ")}}function j(t,s){if(1&t&&(_.TgZ(0,"p",13),_.TgZ(1,"label"),_._uU(2,"OS:"),_.qZA(),_._uU(3),_.qZA()),2&t){const t=_.oxw(2);_.xp6(3),_.hij(" ",t.os,"")}}function C(t,s){if(1&t&&(_.TgZ(0,"p",14),_.TgZ(1,"label"),_._uU(2,"SSID:"),_.qZA(),_._uU(3),_.qZA()),2&t){const t=_.oxw(2);_.xp6(3),_.hij(" ",t.ssid,"")}}function M(t,s){if(1&t&&(_.TgZ(0,"p",15),_.TgZ(1,"label"),_._uU(2,"Username:"),_.qZA(),_._uU(3),_.qZA()),2&t){const t=_.oxw(2);_.xp6(3),_.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function z(t,s){if(1&t&&(_.TgZ(0,"p",16),_.TgZ(1,"label"),_._uU(2,"Type:"),_.qZA(),_._uU(3),_.qZA()),2&t){const t=_.oxw(2);_.xp6(3),_.hij(" ",t.user.type," ")}}function X(t,s){if(1&t){const t=_.EpF();_.TgZ(0,"div",4),_.NdJ("mouseleave",function(){return _.CHM(t),_.oxw().close()}),_._UZ(1,"div",5),_.TgZ(2,"div",6),_.TgZ(3,"p"),_.TgZ(4,"label"),_._uU(5,"MAC:"),_.qZA(),_._uU(6),_.qZA(),_.TgZ(7,"p"),_.TgZ(8,"label"),_._uU(9,"Accuracy:"),_.qZA(),_._uU(10),_.qZA(),_.TgZ(11,"p"),_.TgZ(12,"label"),_._uU(13,"Last Seen:"),_.qZA(),_._uU(14),_.qZA(),_.YNc(15,I,4,1,"p",7),_.YNc(16,j,4,1,"p",8),_.YNc(17,C,4,1,"p",9),_.YNc(18,M,4,1,"p",10),_.YNc(19,z,4,1,"p",11),_.qZA(),_.qZA()}if(2&t){const t=_.oxw();_.xp6(6),_.hij(" ",t.mac,""),_.xp6(4),_.hij(" ",t.variance,"m"),_.xp6(4),_.hij(" ",t.last_seen,""),_.xp6(1),_.Q6J("ngIf",t.manufacturer),_.xp6(1),_.Q6J("ngIf",t.os),_.xp6(1),_.Q6J("ngIf",t.ssid),_.xp6(1),_.Q6J("ngIf",t.username),_.xp6(1),_.Q6J("ngIf",t.user)}}let L=(()=>{class t{constructor(t,s,e){var i;this._details=t,this._element=s,this._overlay=e,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=null===(i=this._details.variance)||void 0===i?void 0:i.toFixed(2),this.diameter=100*this._details.variance,this.bg_color=this._details.bg_color||this.distance_color,this.overlay_ref=null,this.onEnter=()=>this.loadUser(),this.onLeave=()=>this.close(),this.onClick=()=>this.loadUser(),this.onTouch=()=>this.loadUser()}get last_seen(){return(0,A.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get distance(){return Math.abs((0,T.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{var s;const e=null===(s=this._element.nativeElement.parentElement)||void 0===s?void 0:s.parentElement;if(!e)return this.ngOnInit(++t);const i=parseInt(e.style.top,10)/100,n=parseInt(e.style.left,10)/100;this.y_pos=i>=.5?"bottom":"top",this.x_pos=n>=.5?"end":"start"},200)}loadUser(){return(0,u.mG)(this,void 0,void 0,function*(){if(this.open(),this.username)return;const t=(0,b.rTZ)(this._details.system,"LocationServices");if(t){this.username="Loading...";const s=yield t.execute("check_ownership_of",[this.mac]).catch(t=>null);this.username=s&&s.assigned_to?s.assigned_to:""}})}open(){this.overlay_ref&&this.close(),this._portal&&(this.overlay_ref=this._overlay.create({positionStrategy:this._overlay.position().flexibleConnectedTo(this._dot).withPositions([{originX:"start"===this.x_pos?"end":"start",originY:"top"===this.y_pos?"bottom":"top",overlayX:this.x_pos||"end",overlayY:this.y_pos||"bottom"}])}),this.overlay_ref.attach(this._portal))}close(){this.overlay_ref&&(this.overlay_ref.dispose(),this.overlay_ref=null)}}return t.\u0275fac=function(s){return new(s||t)(_.Y36(o.ui),_.Y36(_.SBq),_.Y36(r.aV))},t.\u0275cmp=_.Xpm({type:t,selectors:[["","explore-device-info",""]],viewQuery:function(t,s){if(1&t&&(_.Gf(l.ig,5),_.Gf(q,5)),2&t){let t;_.iGM(t=_.CRH())&&(s._portal=t.first),_.iGM(t=_.CRH())&&(s._dot=t.first)}},hostBindings:function(t,s){1&t&&_.NdJ("mouseenter",function(){return s.onEnter()})("mouseleave",function(){return s.onLeave()})("click",function(){return s.onClick()})("touchend",function(){return s.onTouch()})},attrs:P,decls:4,vars:4,consts:[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-4","border-dashed","border-blue-600","rounded-full",3,"mouseenter"],["name","dot",1,"h-2","w-2","absolute","center","rounded-full","pointer-events-auto","shadow"],["dot",""],["cdk-portal",""],["name","device-info",1,"w-64","rounded","bg-white","p-4","top-0","left-0","shadow","pointer-events-none",3,"mouseleave"],[1,"arrow"],[1,"details"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(t,s){1&t&&(_.TgZ(0,"div",0),_.NdJ("mouseenter",function(){return s.loadUser()}),_.qZA(),_._UZ(1,"div",1,2),_.YNc(3,X,20,8,"ng-template",3)),2&t&&(_.Akn("height: "+s.diameter+"%; width: "+s.diameter+"%;"),_.xp6(1),_.Udp("background-color",s.bg_color))},directives:[l.bH,i.O5],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}"]}),t})();function Y(t,s){if(1&t&&(_.TgZ(0,"p",6),_._uU(1),_.qZA()),2&t){const t=_.oxw();_.xp6(1),_.Oqu(t.user)}}function G(t,s){if(1&t&&(_.TgZ(0,"p",7),_._uU(1),_.ALo(2,"date"),_.ALo(3,"date"),_.qZA()),2&t){const t=_.oxw();_.xp6(1),_.AsE(" ",_.xi3(2,2,t.start,"shortTime")," \u2013 ",_.xi3(3,5,t.end,"shortTime")," ")}}let J=(()=>{class t{constructor(t,s){this._details=t,this._element=s,this.map_id=this._details.map_id,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{var s;const e=null===(s=this._element.nativeElement.parentElement)||void 0===s?void 0:s.parentElement;if(!e)return this.ngOnInit(++t);const i=parseInt(e.style.top,10)/100,n=parseInt(e.style.left,10)/100;this.y_pos=i>=.5?"bottom":"top",this.x_pos=n>=.5?"right":"left"},200)}get available_until(){return""}}return t.\u0275fac=function(s){return new(s||t)(_.Y36(o.ui),_.Y36(_.SBq))},t.\u0275cmp=_.Xpm({type:t,selectors:[["explore-desk-info"]],decls:7,vars:6,consts:[["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,s){1&t&&(_.TgZ(0,"div",0),_._UZ(1,"div",1),_.TgZ(2,"div",2),_.TgZ(3,"h4",3),_._uU(4),_.qZA(),_.YNc(5,Y,2,1,"p",4),_.YNc(6,G,4,8,"p",5),_.qZA(),_.qZA()),2&t&&(_.Tol("absolute rounded bg-white p-4 top-0 left-0 shadow "+s.x_pos+" "+s.y_pos),_.Q6J("id",s.map_id),_.xp6(4),_.Oqu(s.map_id),_.xp6(1),_.Q6J("ngIf",s.user),_.xp6(1),_.Q6J("ngIf",s.start))},directives:[i.O5],pipes:[i.uU],styles:["[_nghost-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:1}[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}"]}),t})(),S=(()=>{class t extends h.KG{constructor(t,s,e,i){super(),this._state=t,this._org=s,this._settings=e,this._desks_service=i,this._in_use=new v.X([]),this._options=new v.X({}),this._desks=new v.X([]),this._reserved=new v.X([]),this._statuses={},this._poll=new v.X(0),this._desk_bookings=(0,k.aj)([this._state.level,this._poll]).pipe((0,x.w)(([t])=>(0,U.F2)({period_start:(0,y.Z)((0,w.Z)(new Date)),period_end:(0,y.Z)((0,O.Z)(new Date)),type:"desk",zones:t.id}))),this.desk_list=this._state.level.pipe((0,x.w)(t=>(0,b.rlq)(t.id,{name:"desks"}).pipe((0,m.U)(s=>(s.details instanceof Array?s.details:[]).map(s=>new p.nk(Object.assign(Object.assign({},s),{zone:t})))))),(0,Z.K)(t=>[])),this._bind=this._state.level.pipe((0,m.U)(t=>{var s,e;if(this._statuses={},this.unsubWith("lvl"),!t)return;const i=this._org.buildings.find(s=>s.id===t.parent_id);if(!i)return;const n=(null===(s=i.bindings)||void 0===s?void 0:s.area_management)||(null===(e=this._org.organisation.bindings)||void 0===e?void 0:e.area_management);if(!n)return;let o=(0,b.rTZ)(n,"AreaManagement").binding(t.id);this.subscription("lvl-in_use",o.listen().subscribe(t=>this.processBindingChange(t||{},n))),this.subscription("lvl-in_use_bind",o.bind()),o=(0,b.rTZ)(n,"AreaManagement").binding(`${t.id}:desk_ids`),this.subscription("lvl-desks_list",o.listen().subscribe(t=>this._desks.next(t||[]))),this.subscription("lvl-desk_list_bind",o.bind())})),this._state_change=(0,k.aj)([this.desk_list,this._in_use,this._reserved,this._options]).pipe((0,m.U)(([t,s,e])=>{this._statuses={};for(const{id:i,bookable:n}of t){const t=s.some(t=>i===t),o=e.some(t=>i===t);this._statuses[i]=n?t?o?"reserved":"busy":"free":"not-bookable"}this.processDesks(t)})),this.init()}init(){return(0,u.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,d.P)(t=>t)).toPromise(),this.setOptions({enable_booking:!1!==this._settings.get("app.desks.enabled")}),this.subscription("bind",this._bind.subscribe()),this.subscription("changes",this._state_change.subscribe()),this.subscription("desks",this.desk_list.subscribe(t=>this.processDesks(t)))})}startPolling(t=3e4){this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(t=>this._in_use.next(t.map(t=>t.asset_id)))),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t)}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}processBindingChange({value:t},s){const e=(t||[]).filter(t=>!["desk","booking"].includes(t.location)),i=(t||[]).filter(t=>"desk"===t.location||"booking"===t.location&&"desk"===t.type);this._in_use.next(i.map(t=>t.map_id||t.asset_id)),this._reserved.next(i.filter(t=>!t.at_location).map(t=>t.map_id||t.asset_id)),this.processDevices(e,s),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},s=this._settings.get("app.explore.colors")||{};for(const e in this._statuses)this._statuses[e]&&(t[`#${e}`]={fill:s[`desk-${this._statuses[e]}`]||s[`${this._statuses[e]}`]||f[`${this._statuses[e]}`],opacity:.6});this._state.setStyles("desks",t)}processDevices(t,s){var e,i;const n=[];for(const o of t){const t=o.x/o.map_width,a=o.y/o.map_height;n.push({location:{x:(null===(e=o.coordinates_from)||void 0===e?void 0:e.includes("right"))?1-t:t,y:(null===(i=o.coordinates_from)||void 0===i?void 0:i.includes("bottom"))?1-a:a},content:L,data:Object.assign(Object.assign({},o),{system:s})})}this._state.setFeatures("devices",n)}processDesks(t){const s=[],e=[],i=this._options.getValue();for(const n of t){s.push({location:n.id,content:J,hover:!0,data:{map_id:n.name,status:this._statuses[n.map_id]}});const t=()=>this._desks_service.bookDesk({desks:[n],host:i.host,date:i.date});e.push({id:n.id,action:"click",callback:t}),e.push({id:n.id,action:"touchend",callback:t})}this._state.setActions("desks",this._options.getValue().enable_booking?e:[]),this._state.setFeatures("desks",s),this.timeout("update",()=>this.updateStatus(),100)}}return t.\u0275fac=function(s){return new(s||t)(_.LFG(g.c),_.LFG(p.w7),_.LFG(h.gb),_.LFG(U.HA))},t.\u0275prov=_.Yz7({token:t,factory:t.\u0275fac}),t})();e(7209),e(7256),e(2571),e(878),e(7701),e(4019),e(8303),e(84);let F=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[[i.ez,o.Kk,n.u5,n.UX,a.rP,r.U8,l.eL,c.W9]]}),t})()},8284:(t,s,e)=>{"use strict";e.d(s,{c:()=>p});var i=e(4762),n=e(8512),o=e(3080),a=e(9996),r=e(7701),l=e(3530),c=e(3835),u=e(8223),h=e(2619),d=e(9294),_=e(7209);let p=(()=>{class t extends u.KG{constructor(t,s,e){super(),this._org=t,this._spaces=s,this._settings=e,this._level=new n.X(null),this._positions=new n.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new n.X({}),this._features=new n.X({}),this._actions=new n.X({}),this._labels=new n.X({}),this._options=new n.X({}),this._message=new n.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=(0,o.aj)([this._level,this._spaces.list]).pipe((0,a.U)(([t,s])=>(console.log("Level:",t,s),s.filter(s=>s.zones.includes(t.id))))),this.map_url=this._level.pipe((0,a.U)(t=>(t?t.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,o.aj)([this._features,this._options]).pipe((0,r.b)(200),(0,a.U)(([t,s])=>{let e=[];for(const i in t)switch(i){case"devices":s.show_zones&&s.show_devices&&(e=e.concat(t[i]));break;case"contacts":s.show_contacts&&(e=e.concat(t[i]));break;default:e=e.concat(t[i])}return e})),this.map_actions=this._actions.pipe((0,r.b)(200),(0,a.U)(t=>Object.values(t).reduce((t,s)=>t.concat(s),[]))),this.map_labels=(0,o.aj)([this._labels,this._options]).pipe((0,r.b)(200),(0,a.U)(([t,s])=>{let e=[];for(const i in t)("zones"!==i||s.show_zones)&&(e=e.concat(t[i]));return e})),this.map_styles=(0,o.aj)([this._styles,this._options]).pipe((0,r.b)(200),(0,a.U)(([t,s])=>{const e=Object.keys(t).reduce((s,e)=>Object.assign(Object.assign({},s),t[e]),{});return s.show_zones||(e["#zones"]={display:"none"},e["#Zones"]={display:"none"}),e.text={display:"none"},e})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){return(0,i.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,l.P)(t=>t)).toPromise(),this._org.active_building.pipe((0,c.h)(t=>!!t)).subscribe(t=>{const s=this._level.getValue(),e=this._org.levelsForBuilding(t);!e.find(t=>(null==s?void 0:s.id)===t.id)&&e.length&&this.setLevel(e[0].id),this.setOptions({show_devices:!1!==this._settings.get("app.explore.display_devices")})})})}setOptions(t){this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}setLevel(t){const s=this._org.levelWithID([t]);s&&this._level.next(s)}setStyles(t,s){const e=this._styles.getValue();e[t]=s,this._styles.next(e)}setFeatures(t,s){const e=this._features.getValue();e[t]=s,this._features.next(e)}setActions(t,s){const e=this._actions.getValue();e[t]=s,this._actions.next(e)}setLabels(t,s){const e=this._labels.getValue();e[t]=s,this._labels.next(e)}setPositions(t,s){this._positions.next({zoom:t,center:s})}}return t.\u0275fac=function(s){return new(s||t)(h.LFG(d.w7),h.LFG(_.sK),h.LFG(u.gb))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2571:(t,s,e)=>{"use strict";e.d(s,{s:()=>r});var i=e(2619),n=e(8284),o=e(5980),a=e(1548);let r=(()=>{class t{constructor(t){this._state=t,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return t.\u0275fac=function(s){return new(s||t)(i.Y36(n.c))},t.\u0275cmp=i.Xpm({type:t,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:[["z-in","","mat-icon-button","",1,"bg-white",3,"click"],["z-out","","mat-icon-button","",1,"bg-white",3,"click"],["reset","","mat-icon-button","",1,"bg-white",3,"click"]],template:function(t,s){1&t&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return s.zoomIn()}),i.TgZ(1,"app-icon"),i._uU(2,"add"),i.qZA(),i.qZA(),i.TgZ(3,"button",1),i.NdJ("click",function(){return s.zoomOut()}),i.TgZ(4,"app-icon"),i._uU(5,"remove"),i.qZA(),i.qZA(),i.TgZ(6,"button",2),i.NdJ("click",function(){return s.reset()}),i.TgZ(7,"app-icon"),i._uU(8,"autorenew"),i.qZA(),i.qZA())},directives:[o.lW,a.o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:.5rem}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}"]}),t})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map