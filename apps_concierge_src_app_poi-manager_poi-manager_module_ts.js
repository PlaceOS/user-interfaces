"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_poi-manager_poi-manager_module_ts"],{2455:(U,C,l)=>{l.r(C),l.d(C,{POIManagerModule:()=>Je});var f=l(60316),_=l(34456),A=l(26842),R=l(40363),E=l(22168),O=l(68390),M=l(89204),v=l(12185),h=l(90521),P=l(42175),d=l(71536),k=l(71963),z=l(29314),S=l(35443),D=l(7841),I=l(12587),m=l(77375),F=l(3998),y=l(33602),J=l(19803),Q=l(66e3),H=l(46815),e=l(7404);let L=(()=>{class i{constructor(t){this._data=t}get hover(){return!!this._data?.hover}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(H.Nw))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["map-show-element"]],decls:2,vars:8,consts:[[1,"relative","w-full","h-full","border-4"],[1,"opacity-40","absolute","inset-0"]],template:function(n,o){1&n&&(e.j41(0,"div",0),e.nrm(1,"div",1),e.k0s()),2&n&&(e.AVh("border-warning",o.hover)("border-success",!o.hover),e.R7$(),e.AVh("bg-warning",o.hover)("bg-success",!o.hover))}})}return i})();var T=l(24950),w=l(87984),j=l(25175),b=l(85060),$=l(69434),K=l(24918);const Z=()=>({controls:!0});function W(i,c){if(1&i&&(e.j41(0,"mat-option",20),e.EFF(1),e.k0s()),2&i){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.display_name||t.name," ")}}function q(i,c){if(1&i&&(e.j41(0,"span"),e.EFF(1),e.nI1(2,"async"),e.nI1(3,"async"),e.k0s()),2&i){let t;const n=e.XpG();e.R7$(),e.Lme(" ",100*n.page+1," - ",(null==(t=e.bMT(2,2,n.search_results))?null:t.length)>100*n.page+100?100*n.page+100:null==(t=e.bMT(3,4,n.search_results))?null:t.length," ")}}function ee(i,c){if(1&i&&(e.j41(0,"div",26),e.EFF(1),e.k0s()),2&i){const t=e.XpG().$implicit;e.R7$(),e.SpI(" ",t.location," ")}}function te(i,c){if(1&i){const t=e.RV6();e.j41(0,"button",22),e.bIt("click",function(){const o=e.eBV(t).$implicit,a=e.XpG(2);return e.Njj(a.selected.next(o.id))})("mouseover",function(){const o=e.eBV(t).$implicit,a=e.XpG(2);return e.Njj(a.hovered.next(o.id))}),e.j41(1,"div",23)(2,"div",24),e.EFF(3),e.k0s(),e.DNE(4,ee,2,1,"div",25),e.k0s()()}if(2&i){const t=c.$implicit,n=e.XpG(2);e.AVh("!bg-primary",t.id===n.selected.value)("!text-primary-content",t.id===n.selected.value),e.R7$(3),e.JRh(t.name||t.id),e.R7$(),e.Y8G("ngIf",t.location)}}function ne(i,c){if(1&i&&(e.qex(0),e.DNE(1,te,5,6,"button",21),e.nI1(2,"async"),e.nI1(3,"slice"),e.bVm()),2&i){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",e.brH(3,3,e.bMT(2,1,t.search_results),100*t.page,100*t.page+100))}}function oe(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",27)(1,"button",28),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.page=o.page-1)}),e.j41(2,"app-icon"),e.EFF(3,"chevron_left"),e.k0s()(),e.j41(4,"button",29),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.page=0)}),e.EFF(5," 1 "),e.k0s(),e.j41(6,"button",30)(7,"app-icon"),e.EFF(8,"more_horiz"),e.k0s()(),e.j41(9,"button",31),e.EFF(10),e.k0s(),e.j41(11,"button",30)(12,"app-icon"),e.EFF(13,"more_horiz"),e.k0s()(),e.j41(14,"button",32),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.page=o.last_page)}),e.EFF(15),e.k0s(),e.j41(16,"button",28),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.page=o.page+1)}),e.j41(17,"app-icon"),e.EFF(18,"chevron_right"),e.k0s()()()}if(2&i){const t=e.XpG();e.R7$(),e.Y8G("disabled",0===t.page),e.R7$(3),e.AVh("!bg-secondary",0===t.page)("text-secondary-content",0===t.page)("!rounded-full",0===t.page),e.R7$(2),e.AVh("opacity-0",t.page<2),e.R7$(3),e.AVh("opacity-0",0==t.page||t.page==t.last_page),e.R7$(),e.SpI(" ",t.page+1," "),e.R7$(),e.AVh("opacity-0",t.page>t.last_page-2),e.R7$(3),e.AVh("!bg-secondary",t.page===t.last_page)("text-secondary-content",t.page===t.last_page)("!rounded-full",t.page===t.last_page),e.R7$(),e.SpI(" ",t.last_page+1," "),e.R7$(),e.Y8G("disabled",t.page===t.last_page)}}function ie(i,c){1&i&&(e.j41(0,"div",33),e.nrm(1,"img",34),e.j41(2,"div",35),e.EFF(3," No results found "),e.k0s()())}let ae=(()=>{class i extends m.Tv{poiItemFromMapsIndoorsItem(t){return{id:t.properties.externalId||t.properties.roomId||t.id,name:t.properties.name,location:t.properties.building?`${t.properties.building}, Level ${t.properties.floorName}`:"",area:Math.abs(t.geometry.bbox[0]-t.geometry.bbox[2])*Math.abs(t.geometry.bbox[1]-t.geometry.bbox[3])}}constructor(t,n,o){super(),this._data=t,this._org=n,this._maps_people=o,this.level=new v.PD,this.map_info={},this.page=0,this.last_page=0,this.selected=new h.t(""),this.hovered=new h.t(""),this.search=new h.t(""),this.changed=new h.t(0),this.level_list=this._org.active_levels,this.actions=[{id:"*",action:"click",callback:(a,r)=>this.selectID(r||a)}],this.features=(0,P.zV)([this.selected,this.hovered]).pipe((0,S.T)(([a,r])=>(0,m.Am)([{location:a,content:L,full_size:!0,no_scale:!0},{location:r,content:L,data:{hover:!0},full_size:!0,no_scale:!0}].filter(s=>s.location),"location"))),this.search_results=(0,P.zV)([this.search,this._maps_people.available$,this.changed]).pipe((0,J.B)(300),(0,k.n)(([a,r])=>r?a.length>2?mapsindoors?.services.LocationsService.getLocations({q:a}).then(s=>{const p=s.map(u=>this.poiItemFromMapsIndoorsItem(u));return this.selected_item&&p.unshift(this.poiItemFromMapsIndoorsItem(this.selected_item)),p}):(0,d.of)(this.selected_item?[this.poiItemFromMapsIndoorsItem(this.selected_item)]:[]):(0,d.of)(Object.entries(this.map_info).map(([s,p])=>({id:s,area:p.w*p.h})).filter(({id:s,area:p})=>s.toLowerCase().includes(a.toLowerCase())&&p<.5).sort((s,p)=>p.area-s.area))),(0,Q.M)(a=>{this.page=0,this.last_page=Math.floor(a.length/100)}),(0,D.t)(1)),this.setMapInfo=a=>this.map_info=a}ngOnInit(){var t=this;return(0,M.A)(function*(){t._data?.location&&"string"==typeof t._data.location&&t.selected.next(t._data.location);const n=yield t.level_list.pipe((0,y.s)(1)).toPromise();if(n.length){let o=n[0];t._data?.level_id&&(o=n.find(a=>a.id===t._data.level_id)||o),t.level=o}})()}onChange(){this.changed.next(Date.now())}selectID(t){var n=this;this.timeout("select_id",(0,M.A)(function*(){if(yield n._maps_people.available$.pipe((0,y.s)(1)).toPromise()){const a=t.properties?.externalId||t.properties?.roomId||t.id;n.selected_item=t,a&&n.selected.next(a),n.changed.next(Date.now())}else{const a=t,r=[];for(const[s,p]of Object.entries(n.map_info))p.x<=a.x&&a.x<=p.x+p.w&&p.y<=a.y&&a.y<=p.y+p.h&&r.push([s,p.h*p.w]);r.sort((s,p)=>s[1]-p[1]),r.filter(([s,p])=>p<=.5),r.length&&n.selected.next(r[0][0])}}))}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(I.Vh),e.rXU(v.yb),e.rXU(m._e))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["select-poi-map-modal"]],features:[e.Vt3],decls:34,vars:26,consts:()=>{let t;return t=$localize`:@@searchPlaceholder␟7e892ba15f2c6c17e83510e273b3e10fc32ea016␟4580988005648117665:Search`,[["empty_state",""],["icon","","matRipple","","mat-dialog-close",""],[1,"flex","min-w-[80vw]","max-w-[calc(100vw-2rem)]","sm:max-w-[64rem]","max-h-[75vh]","h-[75vh]","overflow-hidden"],["map","",1,"relative","h-full","flex-1","w-1/2","bg-base-200"],[3,"mapInfo","src","actions","features","options","focus"],["poi-list","",1,"relative","flex","flex-col","h-full","w-[20rem]","border-l","border-base-300","shadow"],["search","",1,"flex","flex-col","border-b","border-base-200","p-2"],["appearance","outline",1,"w-full","no-subscript","mb-2"],["name","level",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"w-full","no-subscript"],["matInput","","name","search","placeholder",t,3,"ngModelChange","ngModel"],["matPrefix","",1,"text-2xl"],["list","",1,"flex","flex-col","flex-1","h-1/2","overflow-auto","space-y-2","px-2"],[1,"sticky","top-0","w-full","bg-base-100","px-1","py-3","z-10"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["pagination","","class","sticky flex items-center justify-center bottom-0 w-full bg-base-100 p-2 z-10 space-x-1",4,"ngIf"],["actions","",1,"p-2","border-t","border-base-200"],["btn","","matRipple","",1,"w-full",3,"disabled","mat-dialog-close"],[3,"value"],["btn","","matRipple","","class","clear flex items-center text-left w-full hover:bg-base-200 rounded",3,"!bg-primary","!text-primary-content","click","mouseover",4,"ngFor","ngForOf"],["btn","","matRipple","",1,"clear","flex","items-center","text-left","w-full","hover:bg-base-200","rounded",3,"click","mouseover"],[1,"flex","flex-col","w-full"],[1,""],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],["pagination","",1,"sticky","flex","items-center","justify-center","bottom-0","w-full","bg-base-100","p-2","z-10","space-x-1"],["icon","","matRipple","",1,"border","border-base-200","rounded",3,"click","disabled"],["icon","","matRipple","",3,"click"],["icon",""],["icon","","matRipple","",1,"!bg-secondary","text-secondary-content"],["icon","","matRipple","",1,"border","border-base-200","rounded",3,"click"],[1,"flex","flex-col","items-center","justify-center","h-full","flex-1","space-y-4"],["src","assets/icons/no-results.svg",1,"w-36"],[1,"text-center","opacity-30"]]},template:function(n,o){if(1&n){const a=e.RV6();e.j41(0,"header")(1,"h2"),e.EFF(2,"Select Point of Interest from Map"),e.k0s(),e.j41(3,"button",1)(4,"app-icon"),e.EFF(5,"close"),e.k0s()()(),e.j41(6,"main",2)(7,"div",3)(8,"interactive-map",4),e.nI1(9,"async"),e.bIt("mapInfo",function(s){return e.eBV(a),e.Njj(o.setMapInfo(s))}),e.k0s()(),e.j41(10,"div",5)(11,"div",6)(12,"mat-form-field",7)(13,"mat-select",8),e.mxI("ngModelChange",function(s){return e.eBV(a),e.DH7(o.level,s)||(o.level=s),e.Njj(s)}),e.bIt("ngModelChange",function(){return e.eBV(a),e.Njj(o.onChange())}),e.DNE(14,W,2,2,"mat-option",9),e.nI1(15,"async"),e.k0s()(),e.j41(16,"mat-form-field",10)(17,"input",11),e.nI1(18,"async"),e.bIt("ngModelChange",function(s){return e.eBV(a),e.Njj(o.search.next(s))}),e.k0s(),e.j41(19,"app-icon",12),e.EFF(20,"search"),e.k0s()()(),e.j41(21,"div",13)(22,"div",14),e.EFF(23),e.nI1(24,"async"),e.DNE(25,q,4,6,"span",15),e.k0s(),e.DNE(26,ne,4,7,"ng-container",16),e.nI1(27,"async"),e.DNE(28,oe,19,22,"div",17)(29,ie,4,0,"ng-template",null,0,e.C5r),e.k0s(),e.j41(31,"div",18)(32,"button",19),e.EFF(33," Save "),e.k0s()()()()}if(2&n){let a,r;const s=e.sdS(30);e.R7$(8),e.Y8G("src",null==o.level?null:o.level.map_id)("actions",o.actions)("features",e.bMT(9,15,o.features))("options",e.lJ4(25,Z))("focus",o.selected.value),e.R7$(5),e.R50("ngModel",o.level),e.R7$(),e.Y8G("ngForOf",e.bMT(15,17,o.level_list)),e.R7$(3),e.Y8G("ngModel",e.bMT(18,19,o.search)),e.R7$(6),e.SpI(" Results (",(null==(a=e.bMT(24,21,o.search_results))?null:a.length)||0,") "),e.R7$(2),e.Y8G("ngIf",o.last_page),e.R7$(),e.Y8G("ngIf",null==(r=e.bMT(27,23,o.search_results))?null:r.length)("ngIfElse",s),e.R7$(2),e.Y8G("ngIf",o.last_page>0),e.R7$(4),e.Y8G("disabled",!o.selected.value)("mat-dialog-close",o.selected.value)}},dependencies:[f.Sq,f.bT,_.me,_.BC,_.vS,T.rl,T.JW,w.fg,j.VO,b.wT,I.tx,b.r6,$.R,K.S,f.Jj,f.P9]})}return i})();var le=l(97024),se=l(41134);const x=()=>({standalone:!0});function re(i,c){1&i&&(e.j41(0,"button",8)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function ce(i,c){1&i&&(e.j41(0,"div",13)(1,"label",14),e.PLo(2,2),e.nrm(3,"span"),e.YFu(),e.k0s(),e.j41(4,"mat-form-field",15),e.nrm(5,"input",23),e.k0s()())}function pe(i,c){if(1&i&&(e.j41(0,"mat-option",26),e.EFF(1),e.k0s()),2&i){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.display_name," ")}}function _e(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",13)(1,"label",14),e.PLo(2,3),e.nrm(3,"span"),e.YFu(),e.k0s(),e.j41(4,"mat-form-field",15)(5,"mat-select",24),e.mxI("ngModelChange",function(o){e.eBV(t);const a=e.XpG(3);return e.DH7(a.building,o)||(a.building=o),e.Njj(o)}),e.DNE(6,pe,2,2,"mat-option",25),e.nI1(7,"async"),e.k0s()()()}if(2&i){const t=e.XpG(3);e.R7$(5),e.R50("ngModel",t.building),e.Y8G("ngModelOptions",e.lJ4(5,x)),e.R7$(),e.Y8G("ngForOf",e.bMT(7,3,t.building_list))}}function de(i,c){if(1&i&&(e.j41(0,"mat-option",26),e.EFF(1),e.k0s()),2&i){const t=c.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.display_name," ")}}function me(i,c){if(1&i&&(e.j41(0,"div",13)(1,"label",14),e.PLo(2,4),e.nrm(3,"span"),e.YFu(),e.k0s(),e.j41(4,"mat-form-field",15)(5,"mat-select",27),e.DNE(6,de,2,2,"mat-option",25),e.nI1(7,"async"),e.k0s()()()),2&i){const t=e.XpG(3);e.R7$(6),e.Y8G("ngForOf",e.bMT(7,1,t.level_list))}}function fe(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",28)(1,"mat-form-field",29),e.nrm(2,"input",30),e.k0s(),e.j41(3,"button",31),e.bIt("click",function(){e.eBV(t);const o=e.XpG(3);return e.Njj(o.selectPOIfromMap())}),e.j41(4,"app-icon"),e.EFF(5,"place"),e.k0s()()()}}function ue(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",32)(1,"mat-form-field",33)(2,"input",34),e.bIt("ngModelChange",function(o){e.eBV(t);const a=e.XpG(3);return e.Njj(a.form.patchValue({location:[o,a.form.value.location[1]]}))}),e.k0s()(),e.j41(3,"mat-form-field",33)(4,"input",35),e.bIt("ngModelChange",function(o){e.eBV(t);const a=e.XpG(3);return e.Njj(a.form.patchValue({location:[a.form.value.location[0],o]}))}),e.k0s()()()}if(2&i){const t=e.XpG(3);e.R7$(2),e.Y8G("ngModel",t.form.value.location[0])("ngModelOptions",e.lJ4(4,x)),e.R7$(2),e.Y8G("ngModel",t.form.value.location[1])("ngModelOptions",e.lJ4(5,x))}}function ge(i,c){if(1&i){const t=e.RV6();e.j41(0,"form",11),e.DNE(1,ce,6,0,"div",12)(2,_e,8,6,"div",12),e.nI1(3,"async"),e.DNE(4,me,8,3,"div",12),e.j41(5,"div",13)(6,"label",14),e.PLo(7,1),e.nrm(8,"span"),e.YFu(),e.k0s(),e.j41(9,"mat-form-field",15)(10,"mat-select",16),e.mxI("ngModelChange",function(o){e.eBV(t);const a=e.XpG(2);return e.DH7(a.location_type,o)||(a.location_type=o),e.Njj(o)}),e.j41(11,"mat-option",17),e.EFF(12,"Map ID"),e.k0s(),e.j41(13,"mat-option",18),e.EFF(14,"Coordinates"),e.k0s()()(),e.DNE(15,fe,6,0,"div",19)(16,ue,5,6,"div",20),e.j41(17,"div",21)(18,"mat-checkbox",22),e.EFF(19," Is Searchable? "),e.k0s()()()()}if(2&i){let t;const n=e.XpG(2);e.Y8G("formGroup",n.form),e.R7$(),e.Y8G("ngIf",n.form.controls.name),e.R7$(),e.Y8G("ngIf",(null==(t=e.bMT(3,8,n.building_list))?null:t.length)>1),e.R7$(2),e.Y8G("ngIf",n.form.controls.level_id),e.R7$(6),e.R50("ngModel",n.location_type),e.Y8G("ngModelOptions",e.lJ4(10,x)),e.R7$(5),e.Y8G("ngIf","map_id"===n.location_type),e.R7$(),e.Y8G("ngIf","coordinates"===n.location_type)}}function he(i,c){if(1&i&&(e.j41(0,"main",9),e.DNE(1,ge,20,11,"form",10),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.Y8G("ngIf",t.form)}}function ve(i,c){if(1&i){const t=e.RV6();e.j41(0,"footer",36)(1,"button",37),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.save())}),e.EFF(2,"Save"),e.k0s()()}}function Ie(i,c){1&i&&(e.j41(0,"div",38),e.nrm(1,"mat-spinner",39),e.j41(2,"p",40),e.EFF(3,"Saving Point Of Interest..."),e.k0s()())}let be=(()=>{class i extends m.Tv{get building(){return this._org.building}set building(t){this._org.building=t}constructor(t,n,o,a,r){super(),this._org=t,this._data=n,this._dialog_ref=o,this._settings=a,this._dialog=r,this.loading=!1,this.location_type=this._data?.location instanceof Array?"coordinates":"map_id",this.building_list=this._org.building_list,this.level_list=this._org.active_levels,this.form=new _.gE({id:new _.MJ(this._data?.id||""),name:new _.MJ(this._data?.name||"",[_.k0.required]),level_id:new _.MJ(this._data?.level_id||"",[_.k0.required]),location:new _.MJ(this._data?.location||"",[_.k0.required]),can_search:new _.MJ(this._data?.can_search??!1)})}ngOnInit(){var t=this;return(0,M.A)(function*(){if(!t.form.value.level_id){const n=yield t.level_list.pipe((0,y.s)(1)).toPromise();n.length&&t.form.patchValue({level_id:n[0].id})}})()}selectPOIfromMap(){const t=this._dialog.open(ae,{data:{...this._data,...this.form.getRawValue()}});t.afterClosed().subscribe(n=>{n&&this.form.patchValue({location:n,level_id:t.componentInstance.level?.id})})}save(){var t=this;return(0,M.A)(function*(){if(!t.form.valid)return(0,m.UG)(`Some form fields are invalid. [${(0,m.F7)(t.form).join(", ")}]`);const n=t.form.getRawValue();n.id||(n.id=`POI-${(0,m.DU)(8)}`),n.short_link_id=t._data?.short_link_id;const o=t._settings.get("app.kiosk_url_path")||"/map-kiosk",a=t._settings.get("app.short_url_public_key"),r="string"==typeof n.location?n.location:n.location.join(",");let s=`${o}/#/explore?level=${n.level_id}&locate=${r}&public=true`;if(a&&(s+=`&x-api-key=${a}`),n.short_link_id)yield(0,m.$8)(n.short_link_id,{id:n.short_link_id,name:n.name,description:`Point of Interest: ${n.name}`,uri:`${window.location.origin}/auth/login?continue=${encodeURIComponent(s)}`}).toPromise();else{const{id:g}=yield(0,m.e1)({name:n.name,description:`Point of Interest: ${n.name}`,uri:`${window.location.origin}/auth/login?continue=${encodeURIComponent(s)}`}).toPromise();n.short_link_id=g}t.loading=!0;const u=(yield(0,F.bpY)(t._org.organisation.id,"points-of-interest",{}).toPromise()).details||{};if(u[n.level_id]||(u[n.level_id]=[]),t._data?.id)for(const g in u)u[g]&&(u[g]=u[g].filter(G=>G.id!==n.id));u[n.level_id]=[...u[n.level_id].filter(g=>g.id!==n.id),n].sort((g,G)=>g.name.localeCompare(G.name));const B=yield(0,F.D58)(t._org.organisation.id,{name:"points-of-interest",details:u,description:"Point of Interests for maps"}).toPromise().catch(g=>(0,m.UG)(g));B.id&&t._dialog_ref.close(B),t.loading=!1})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(v.yb),e.rXU(I.Vh),e.rXU(I.CP),e.rXU(m.h$),e.rXU(I.bZ))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["poi-modal"]],features:[e.Vt3],decls:8,vars:5,consts:()=>{let t,n,o,a,r,s;return t=$localize`:@@nameLabel␟5db92d8696af8c0f3aa9ce5bf1e1305c8c5aa456␟8054963382343596237: Location${"\ufffd#8\ufffd"}:START_TAG_SPAN:*${"\ufffd/#8\ufffd"}:CLOSE_TAG_SPAN:: `,n=$localize`:@@namePlaceholder␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,o=$localize`:@@nameLabel␟5813c0ce49afffe90191cb912c58fa68674457d8␟1912970594501107766: Name${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,a=$localize`:@@nameLabel␟5e09041a10f5eb39aadfaa1a8dd77f4dc8d77314␟711878476466678637: Building${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,r=$localize`:@@nameLabel␟805d5ab24c829f98df246a63541ee827ce04a4c4␟6308222021008136210: Level${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,s=$localize`:@@locationPlaceholder␟ed31c09fd77c36238c13d83635f3fe5294c733d2␟471816275243265264:Location`,[["load_state",""],t,o,a,r,["btn","","icon","","mat-dialog-close","",4,"ngIf"],["class","max-h-[65vh] overflow-y-auto overflow-x-hidden p-4",4,"ngIf","ngIfElse"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],["system","","class","flex flex-col w-[28rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["system","",1,"flex","flex-col","w-[28rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["placeholder","Location Type",3,"ngModelChange","ngModel","ngModelOptions"],["value","map_id"],["value","coordinates"],["class","flex items-center space-x-2 pb-2",4,"ngIf"],["class","flex items-center space-x-2",4,"ngIf"],[1,"pt-2"],["formControlName","can_search"],["matInput","","name","name","placeholder",n,"formControlName","name"],["placeholder","Select Building",3,"ngModelChange","ngModel","ngModelOptions"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["formControlName","level_id","placeholder","Select Level"],[1,"flex","items-center","space-x-2","pb-2"],["appearance","outline",1,"no-subscript"],["matInput","","name","location","placeholder",s,"formControlName","location"],["icon","","matRipple","",1,"rounded","border","border-base-300","h-12","w-12",3,"click"],[1,"flex","items-center","space-x-2"],["appearance","outline",1,"flex-1"],["matInput","","name","latitude",3,"ngModelChange","ngModel","ngModelOptions"],["matInput","","name","longitude",3,"ngModelChange","ngModel","ngModelOptions"],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(n,o){if(1&n&&(e.j41(0,"header")(1,"h2"),e.EFF(2),e.k0s(),e.DNE(3,re,3,0,"button",5),e.k0s(),e.DNE(4,he,2,1,"main",6)(5,ve,3,0,"footer",7)(6,Ie,4,0,"ng-template",null,0,e.C5r)),2&n){const a=e.sdS(7);e.R7$(2),e.SpI("",o.form.value.id?"Edit":"Add"," Point Of Interest"),e.R7$(),e.Y8G("ngIf",!o.loading),e.R7$(),e.Y8G("ngIf",!o.loading)("ngIfElse",a),e.R7$(),e.Y8G("ngIf",!o.loading)}},dependencies:[f.Sq,f.bT,_.qT,_.me,_.BC,_.cb,_.vS,T.rl,w.fg,j.VO,b.wT,le.So,se.LG,I.tx,b.r6,_.j4,_.JD,$.R,f.Jj]})}return i})(),V=(()=>{class i{constructor(t,n){this._org=t,this._dialog=n,this._options=new h.t({}),this._change=new h.t(0),this.options=this._options.asObservable(),this._features=(0,P.zV)([this._org.active_building,this._change]).pipe((0,k.n)(()=>(0,F.bpY)(this._org.organisation.id,"points-of-interest").pipe((0,z.W)(o=>(0,d.of)({details:{}})))),(0,S.T)(o=>{const a=o.details||{},r=this._org.levelsForBuilding(this._org.building);return(0,m.Bq)(r.map(p=>a[p.id]||[]))}),(0,D.t)(1)),this.filtered_features=(0,P.zV)([this._features,this._options]).pipe((0,S.T)(([o,a])=>(a.search&&(o=o.filter(r=>r.name.toLowerCase().includes(a.search.toLowerCase()))),o)))}setFilters(t){this._options.next({...this._options.getValue(),...t})}setSearchString(t){this._options.next({...this._options.getValue(),search:t})}editPointOfInterest(t){this._dialog.open(be,{data:t}).afterClosed().subscribe(()=>this._change.next(Date.now()))}removePointOfInterest(t){var n=this;return(0,M.A)(function*(){const o=yield(0,m.GE)({title:"Remove Point of Interest",content:`Are you sure you want to remove the point of interest "${t.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},n._dialog);if("done"!==o.reason)return o.close();o.loading("Removing point of interest...");const r=(yield(0,F.bpY)(n._org.organisation.id,"points-of-interest").toPromise()).details||{};for(const s in r)r[s]&&(r[s]=r[s].filter(p=>p.id!==t.id));yield(0,F.D58)(n._org.organisation.id,{name:"points-of-interest",details:r,description:""}).toPromise().catch(s=>{throw(0,m.UG)(s),o.close(),s}),(0,m.VX)("Successfully removed point of interest."),o.close(),n._change.next(Date.now())})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.KVO(v.yb),e.KVO(I.bZ))};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Me=l(45189),Pe=l(96843),X=l(83259),N=l(31034),Fe=l(80640),Ce=l(22238),Oe=l(88328),Te=l(74846),xe=l(26781),Re=l(23666);const Ee=()=>({key:"name",name:"Name"}),Se=i=>({key:"level_id",name:"Level",content:i,size:"12rem",sortable:!1}),ye=()=>({key:"location",name:"Location",size:"10rem"}),je=i=>({key:"can_search",name:"Searchable",size:"7rem",content:i}),$e=i=>({key:"actions",name:" ",content:i,size:"9.5rem",sortable:!1}),Ne=(i,c,t,n,o)=>[i,c,t,n,o];function Ge(i,c){if(1&i&&(e.j41(0,"div",8),e.EFF(1),e.nI1(2,"level"),e.k0s()),2&i){let t;const n=c.row;e.R7$(),e.SpI(" ",(null==(t=e.bMT(2,1,n.level_id))?null:t.display_name)||"Unknown"," ")}}function Ae(i,c){1&i&&(e.j41(0,"div",10)(1,"app-icon"),e.EFF(2,"done"),e.k0s()())}function ke(i,c){1&i&&e.DNE(0,Ae,3,0,"div",9),2&i&&e.Y8G("ngIf",c.data)}function De(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",21)(1,"div",22)(2,"a",23),e.nI1(3,"safe"),e.nrm(4,"img",24),e.k0s(),e.j41(5,"div",25),e.EFF(6),e.k0s()(),e.j41(7,"button",26),e.bIt("click",function(){e.eBV(t);const o=e.XpG(2);return e.Njj(o.print())}),e.EFF(8," Print QR Code "),e.k0s()()}if(2&i){const t=e.XpG().row;e.R7$(2),e.Y8G("href",e.i5U(3,3,t.qr_link,"url"),e.B4B),e.R7$(2),e.Y8G("src",t.qr_code,e.B4B),e.R7$(2),e.SpI(" ",t.name||t.id," ")}}function Le(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",11)(1,"div",12)(2,"button",13),e.bIt("click",function(){const o=e.eBV(t).row,a=e.XpG();return e.Njj(a.loadQrCode(o))}),e.j41(3,"app-icon"),e.EFF(4,"qr_code"),e.k0s()()(),e.j41(5,"div",14)(6,"button",15),e.bIt("click",function(){const o=e.eBV(t).row,a=e.XpG();return e.Njj(a.loadPublicQrCode(o))}),e.j41(7,"app-icon"),e.EFF(8,"qr_code"),e.k0s()()(),e.DNE(9,De,9,6,"ng-template",null,3,e.C5r),e.j41(11,"button",16)(12,"app-icon"),e.EFF(13,"more_vert"),e.k0s()(),e.j41(14,"mat-menu",null,4)(16,"button",17),e.bIt("click",function(){const o=e.eBV(t).row,a=e.XpG();return e.Njj(a.edit(o))}),e.j41(17,"div",18)(18,"app-icon"),e.EFF(19,"edit"),e.k0s(),e.j41(20,"span"),e.EFF(21,"Edit Point of Interest"),e.k0s()()(),e.j41(22,"button",17),e.bIt("click",function(){const o=e.eBV(t).row,a=e.XpG();return e.Njj(a.remove(o))}),e.j41(23,"div",19)(24,"app-icon",20),e.EFF(25,"delete"),e.k0s(),e.j41(26,"span"),e.EFF(27,"Delete Point of Interest"),e.k0s()()()()()}if(2&i){const t=c.row,n=e.sdS(10),o=e.sdS(15);e.R7$(2),e.Y8G("content",n),e.R7$(4),e.Y8G("disabled",!t.short_link_id)("content",n),e.R7$(5),e.Y8G("matMenuTriggerFor",o)}}let we=(()=>{class i{get kiosk_url(){const t=this._settings.get("app.kiosk_url_path")||"/map-kiosk";return`${window.location.origin}${t}`}constructor(t,n){this._manager=t,this._settings=n,this.features=this._manager.filtered_features,this.edit=o=>this._manager.editPointOfInterest(o),this.remove=o=>this._manager.removePointOfInterest(o)}loadQrCode(t){const n="string"==typeof t.location?t.location:t.location.join(","),o=`${this.kiosk_url}/#/explore?level=${encodeURIComponent(t.level_id)}&locate=${encodeURIComponent(n)}`;t.qr_link=o,t.qr_code=(0,X.C)(o)}loadPublicQrCode(t){const n=`${location.origin}/r/${t.short_link_id.split("-")[1]}`;t.qr_link=n,t.qr_code=(0,X.C)(n)}print(){window.print()}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(V),e.rXU(m.h$))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["poi-list"]],decls:9,vars:17,consts:[["level_template",""],["bool_template",""],["action_template",""],["qr_menu",""],["menu","matMenu"],[1,"absolute","inset-0","overflow-auto","px-8"],["empty_message","No Points of Interest found.",1,"min-w-[48rem]","block","text-sm",3,"data","columns","sortable"],[1,"w-full","h-12"],[1,"p-4"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"w-full","flex","justify-end","space-x-2","px-4","py-2","mx-auto"],["matTooltip","Private QR Code"],["icon","","matRipple","","customTooltip","",3,"click","content"],["matTooltip","Public QR Code"],["icon","","matRipple","","customTooltip","",3,"click","disabled","content"],["btn","","icon","","matRipple","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"flex","items-center","space-x-2","text-red-500"],[1,"text-error"],[1,"bg-base-100","py-2","shadow","rounded"],["printable","",1,""],["target","_blank","ref","noopener noreferrer",1,"block","p-2","mx-4","my-2","rounded-lg","border","border-base-200","bg-base-100",3,"href"],[1,"w-48",3,"src"],[1,"w-[calc(100%-2rem)]","text-center","mt-2","font-mono","text-sm","bg-base-200","rounded","p-2","mx-4"],["btn","","matRipple","",1,"w-[calc(100%-2rem)]","mx-4","my-2",3,"click"]],template:function(n,o){if(1&n&&(e.j41(0,"div",5),e.nrm(1,"simple-table",6)(2,"div",7),e.k0s(),e.DNE(3,Ge,3,3,"ng-template",null,0,e.C5r)(5,ke,1,1,"ng-template",null,1,e.C5r)(7,Le,28,4,"ng-template",null,2,e.C5r)),2&n){const a=e.sdS(4),r=e.sdS(6),s=e.sdS(8);e.R7$(),e.Y8G("data",o.features)("columns",e.s1E(11,Ne,e.lJ4(3,Ee),e.eq3(4,Se,a),e.lJ4(6,ye),e.eq3(7,je,r),e.eq3(9,$e,s)))("sortable",!0)}},dependencies:[f.bT,N.kk,N.fb,N.Cp,Fe.oV,b.r6,$.R,Ce.I,Oe.O,Te.L,xe.m,Re.D]})}return i})();const Ve=["app-poi-manager",""],Xe=()=>({standalone:!0});function Ye(i,c){if(1&i&&(e.j41(0,"mat-option",11),e.EFF(1),e.k0s()),2&i){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.display_name||t.name," ")}}function Be(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",7)(1,"mat-form-field",8)(2,"mat-select",9),e.bIt("ngModelChange",function(o){e.eBV(t);const a=e.XpG();return e.Njj(a.building=o)}),e.DNE(3,Ye,2,2,"mat-option",10),e.nI1(4,"async"),e.k0s()()()}if(2&i){const t=e.XpG();e.R7$(2),e.Y8G("ngModel",t.building)("ngModelOptions",e.lJ4(6,Xe))("placeholder",(null==t.building?null:t.building.display_name)||(null==t.building?null:t.building.name)),e.R7$(),e.Y8G("ngForOf",e.bMT(4,4,t.buildings))}}let Y=(()=>{class i{get building(){return this._org.building}set building(t){this._org.building=t}get use_region(){return!!this._settings.get("app.use_region")}constructor(t,n,o){this._org=t,this._state=n,this._settings=o,this.new=()=>this._state.editPointOfInterest(),this.buildings=this._org.active_buildings}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(v.yb),e.rXU(V),e.rXU(m.h$))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["","app-poi-manager",""]],attrs:Ve,decls:13,vars:7,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","px-8","py-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"click"],["class","flex items-center justify-between mb-2 px-8",4,"ngIf"],[1,"block","w-full","relative","flex-1","h-1/2"],[1,"flex","items-center","justify-between","mb-2","px-8"],["appearance","outline",1,"w-64"],["name","building",3,"ngModelChange","ngModel","ngModelOptions","placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,o){if(1&n&&(e.nrm(0,"app-topbar"),e.j41(1,"div",0),e.nrm(2,"app-sidebar"),e.j41(3,"main",1)(4,"header",2),e.nI1(5,"async"),e.j41(6,"h2",3),e.EFF(7," Point of Interest Management "),e.k0s(),e.j41(8,"button",4),e.bIt("click",function(){return o.new()}),e.EFF(9," Add Point of Interest "),e.k0s()(),e.DNE(10,Be,5,7,"div",5),e.nI1(11,"async"),e.nrm(12,"poi-list",6),e.k0s()()),2&n){let a,r;e.R7$(4),e.AVh("mb-2",!o.use_region||(null==(a=e.bMT(5,3,o.buildings))?null:a.length)<=1),e.R7$(6),e.Y8G("ngIf",o.use_region&&(null==(r=e.bMT(11,5,o.buildings))?null:r.length)>1)}},dependencies:[f.Sq,f.bT,_.BC,_.vS,Me.S,Pe.c,T.rl,j.VO,b.wT,b.r6,we,f.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=poi-manager.component.ts-angular-inline--188.css.map*/"]})}return i})();var Ue=l(12772);const ze=[{path:"",component:Y},{path:"new",component:Y}];let Je=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[f.MD,_.YN,R.r,E.lx,O.kR,Ue.YN,A.iI.forChild(ze)]})}return i})()},68390:(U,C,l)=>{l.d(C,{g8:()=>E,kR:()=>f.k,Gp:()=>O.Gp,KJ:()=>O.KJ,N8:()=>h.N8,SZ:()=>h.SZ,is:()=>v.is});var f=l(73850),R=(l(11543),l(44621),l(99908));class E{constructor(d={}){this.type=d.type||d.location||"other",this.position=d.position||d.map_id||d.asset_id||{x:d.x/d.map_width||0,y:d.y/d.map_height||0},this.variance=d.variance||0,this.last_seen=d.last_seen||(0,R._)(new Date),this.level=d.level,this.building=d.building,this.at_location=!!d.at_location,this.coordinates_from=d.coordinates_from||"top-left"}}var O=l(93693),v=(l(24129),l(86039)),h=l(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_poi-manager_poi-manager_module_ts.js.map