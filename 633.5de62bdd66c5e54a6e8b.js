(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([[633],{5633:(e,t,i)=>{"use strict";i.d(t,{H:()=>P});var s=i(4762),o=i(8512),n=i(7701),l=i(4689),d=i(9996),a=i(7727),r=i(8303),c=i(3530),g=i(205),u=i(8125),h=i(4441),f=i(2547),p=i(3206),m=i(8908),v=i(9294),k=i(1950),_=i(4608),b=i(3080),Z=i(2619),w=i(5980),x=i(1548),A=i(1511),q=i(2319),y=i(9236),T=i(6073),C=i(7789),U=i(7806);function M(e,t){if(1&e&&(Z.TgZ(0,"div",22),Z.TgZ(1,"div",14),Z._uU(2),Z.qZA(),Z.TgZ(3,"div",15),Z._uU(4),Z.qZA(),Z.TgZ(5,"div",16),Z.TgZ(6,"mat-checkbox",23),Z.NdJ("ngModelChange",function(e){return t.$implicit.bookable=e}),Z.qZA(),Z.qZA(),Z.TgZ(7,"div",24),Z.TgZ(8,"item-list-field",25),Z.NdJ("ngModelChange",function(e){return t.$implicit.groups=e}),Z.qZA(),Z.qZA(),Z.qZA()),2&e){const e=t.$implicit;Z.xp6(2),Z.hij(" ",e.id," "),Z.xp6(2),Z.Oqu(e.name),Z.xp6(2),Z.Q6J("ngModel",e.bookable),Z.xp6(2),Z.Q6J("ngModel",e.groups)}}function $(e,t){if(1&e){const e=Z.EpF();Z.ynx(0),Z.TgZ(1,"main",5),Z.TgZ(2,"div",6),Z.TgZ(3,"searchbar",7),Z.NdJ("modelChange",function(t){return Z.CHM(e),Z.oxw().filter$.next(t)}),Z.ALo(4,"async"),Z.qZA(),Z._UZ(5,"div",8),Z.TgZ(6,"button",9),Z._uU(7," Upload List "),Z.TgZ(8,"input",10),Z.NdJ("change",function(t){return Z.CHM(e),Z.oxw().upload(t)}),Z.qZA(),Z.qZA(),Z.TgZ(9,"button",11),Z.NdJ("click",function(){return Z.CHM(e),Z.oxw().download()}),Z._uU(10," Download List "),Z.qZA(),Z.qZA(),Z.TgZ(11,"div",12),Z.TgZ(12,"div",13),Z.TgZ(13,"div",14),Z._uU(14,"ID"),Z.qZA(),Z.TgZ(15,"div",15),Z._uU(16,"Name"),Z.qZA(),Z.TgZ(17,"div",16),Z._uU(18,"Bookable"),Z.qZA(),Z.TgZ(19,"div",17),Z._uU(20,"Groups"),Z.qZA(),Z.qZA(),Z.TgZ(21,"div",18),Z.YNc(22,M,9,4,"div",19),Z.ALo(23,"async"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(24,"footer",20),Z.TgZ(25,"button",21),Z.NdJ("click",function(){return Z.CHM(e),Z.oxw().save()}),Z._uU(26,"Save"),Z.qZA(),Z.qZA(),Z.BQk()}if(2&e){const e=Z.oxw();Z.xp6(3),Z.Q6J("model",Z.lcZ(4,2,e.filter$)),Z.xp6(19),Z.Q6J("ngForOf",Z.lcZ(23,4,e.desk_list))}}function j(e,t){if(1&e&&(Z.TgZ(0,"main",26),Z._UZ(1,"mat-spinner",27),Z.TgZ(2,"p"),Z._uU(3),Z.qZA(),Z.qZA()),2&e){const e=Z.oxw();Z.xp6(1),Z.Q6J("diameter",48),Z.xp6(2),Z.Oqu(e.loading)}}let O=(()=>{class e{constructor(e,t){this._data=e,this._dialog_ref=t,this.building=this._data.building,this.level=this._data.level,this.desks$=new o.X(this._data.desks),this.filter$=new o.X(""),this.desk_list=(0,b.aj)([this.filter$,this.desks$]).pipe((0,d.U)(e=>{const[t,i]=e;return i.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())||e.id.toLowerCase().includes(t.toLowerCase()))}))}download(){const e=this.desks$.getValue().map(e=>e.format()),t=(0,p.o3)(e),i=this.level.display_name.split(" ").join("-").toLowerCase();(0,p.Sv)(`desks_${i}.csv`,t)}upload(e){if(e.target){const t=e.target.files[0];if(t){this.loading="Uploading...";const e=new FileReader;e.readAsText(t,"UTF-8"),e.onload=()=>{this.processCSV(e.result),this.loading=""},e.onerror=e=>{this.loading="",(0,p.cB)("Error reading file.")}}}}save(){return(0,s.mG)(this,void 0,void 0,function*(){this.loading="Saving changes to desks...",yield(0,m.Ymr)(this.level.id,{name:"desks",description:"desks",details:this.desks$.getValue()}).toPromise().catch(e=>{throw this.loading="",(0,p.cB)(`Error saving desk data. Error: ${e.message||e}`),e}),(0,p.t5)("Successfully updated desks"),this.loading="",this._dialog_ref.close()})}processCSV(e){const t=(0,p.n5)(e);this.desks$.next(t.map(e=>new v.nk(e))),(0,p.t5)("Upload was sucessful. Click Save Button to save the changes")}}return e.\u0275fac=function(t){return new(t||e)(Z.Y36(_.WI),Z.Y36(_.so))},e.\u0275cmp=Z.Xpm({type:e,selectors:[["desk-list-modal"]],decls:11,vars:4,consts:[[1,"flex","items-center"],[2,"margin-right","1rem"],["mat-icon-button","","mat-dialog-close",""],[4,"ngIf","ngIfElse"],["load_state",""],[1,"flex","flex-col"],[1,"flex","items-center","p-2","space-x-2","w-full","border-b","border-gray-300"],[3,"model","modelChange"],[1,"flex-1","w-0"],["mat-button","",1,"relative"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"],["mat-button","",3,"click"],[1,"flex","flex-col","flex-1","w-full"],[1,"flex","items-center","p-2","border-b","border-gray-300","font-medium"],["flex","",1,"w-40","p-1","flex-1"],[1,"w-32","p-1"],[1,"w-24","p-1"],[1,"w-52","p-1"],["table","",1,"flex-1","overflow-auto"],["class","flex item-center p-2 border-b border-gray-200",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-center","space-x-2","p-2","border-t","border-gray-300"],["mat-button","",1,"w-32",3,"click"],[1,"flex","item-center","p-2","border-b","border-gray-200"],[3,"ngModel","ngModelChange"],[1,"w-52"],["hide-outline","","no-wrapper","",3,"ngModel","ngModelChange"],[1,"w-64","h-48","mx-auto","flex","flex-col","items-center","justify-center"],[1,"m-4",3,"diameter"]],template:function(e,t){if(1&e&&(Z.TgZ(0,"header",0),Z.TgZ(1,"h2",1),Z.TgZ(2,"strong"),Z._uU(3,"List of Desks"),Z.qZA(),Z._uU(4),Z.qZA(),Z.TgZ(5,"button",2),Z.TgZ(6,"app-icon"),Z._uU(7,"close"),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(8,$,27,6,"ng-container",3),Z.YNc(9,j,4,2,"ng-template",null,4,Z.W1O)),2&e){const e=Z.MAs(10);Z.xp6(4),Z.AsE(" - ",t.building.display_name||t.building.name,", ",t.level.display_name||t.level.name," "),Z.xp6(4),Z.Q6J("ngIf",!t.loading)("ngIfElse",e)}},directives:[w.lW,_.ZT,x.o,A.O5,q.U,A.sg,y.oG,T.JJ,T.On,C.q9,U.$g],pipes:[A.Ov],styles:["main[_ngcontent-%COMP%]{max-height:65vh}[table][_ngcontent-%COMP%]{height:1px;max-height:50vh}"]}),e})(),P=(()=>{class e extends p.KG{constructor(e,t){super(),this._org=e,this._dialog=t,this._filters=new o.X({}),this._desk_bookings=[],this._desks=[],this._loading=new o.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,n.b)(500),(0,l.w)(e=>{var t;const i=e.zones||[];return i.includes("All")?(0,m.BW_)(null===(t=this._org.building)||void 0===t?void 0:t.id,{name:"desks"}).pipe((0,d.U)(e=>e.map(e=>e.metadata.desks.details).reduce((e,t)=>[...e,...t],[]))):(0,m.rlq)(i[0],{name:"desks"}).pipe((0,d.U)(e=>e.details))}),(0,a.K)(e=>[]),(0,d.U)(e=>(e instanceof Array||(e=[]),e.sort((e,t)=>e.name.localeCompare(t.name)),this._desks=e.map(e=>new v.nk(e)),this._desks)),(0,r.d)()),this.bookings=this._filters.pipe((0,n.b)(500),(0,l.w)(e=>{this._loading.next(!0);const t=e.date?new Date(e.date):new Date;let i=(e.zones||[]).filter(e=>-1!==e&&"-1"!==e&&"All"!==e);return(null==i?void 0:i.length)||(i=this._org.levelsForBuilding(this._org.building).map(e=>e.id)),(0,f.F2)({period_start:Math.floor((0,g.Z)(t).valueOf()/1e3),period_end:Math.floor((0,u.Z)(t).valueOf()/1e3),type:"desk",zones:(i||[]).join(",")})}),(0,d.U)(e=>(e.sort((e,t)=>e.date-t.date),this._desk_bookings=e,this._loading.next(!1),e)),(0,r.d)())}setFilters(e){var t,i,s;(null===(t=e.zones)||void 0===t?void 0:t.includes("All"))?e.zones=["All",...this._org.levelsForBuilding(this._org.building).map(e=>e.id)]:e.zones&&(null===(s=null===(i=this._filters.getValue())||void 0===i?void 0:i.zones)||void 0===s?void 0:s.includes("All"))&&(e.zones=[]),console.warn("Zones:",e.zones),this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkinDesk(e){return(0,s.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,f.FD)(e.id,!0).toPromise().catch(e=>"failed"))?(0,p.cB)("Error checking in desk booking"):(0,p.t5)(`Checked in ${e.user_name}.`)})}approveDesk(e){return(0,s.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,f.jT)(e.id).toPromise().catch(e=>"failed"))?(0,p.cB)("Error approving in desk booking"):(0,p.t5)(`Approved desk booking for ${e.user_name} on ${(0,h.Z)(e.date,"MMM Do")}.`)})}rejectDesk(e){return(0,s.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,f.FP)(e.id).toPromise().catch(e=>"failed"))?(0,p.cB)("Error rejecting in desk booking"):(0,p.t5)(`Rejected desk booking for ${e.user_name} on ${(0,h.Z)(e.date,"MMM Do")}.`)})}giveAccess(e){return(0,s.mG)(this,void 0,void 0,function*(){const t=yield(0,f.km)(new f.$N(Object.assign(Object.assign({},e),{access:!0}))).toPromise().catch(e=>"failed");if("failed"===t)return(0,p.cB)("Error giving building access booking host");(0,p.t5)(`Successfully gave building access to ${e.user_name} for desk booking.`),this._desk_bookings=[...this._desk_bookings,t]})}rejectAllDesks(){return(0,s.mG)(this,void 0,void 0,function*(){const e=this._desk_bookings||[];if(e.length>0){const t=this._dialog.open(k.z5,{data:{title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}}});return new Promise((i,o)=>(0,s.mG)(this,void 0,void 0,function*(){let n=!1;t.componentInstance.event.pipe((0,c.P)(e=>"done"===e.reason)).subscribe(()=>(0,s.mG)(this,void 0,void 0,function*(){t.componentInstance.loading="Rejecting all desks for selected date...",n=!0,yield Promise.all(e.map(e=>(0,f.FP)(e.id).toPromise())),i(""),(0,p.t5)("Successfull rejected all desk bookings for selected date."),t.close()})),yield t.afterClosed().toPromise(),n||o()}))}(0,p.QD)("No desks to reject for the selected date")})}updateDesks(){return(0,s.mG)(this,void 0,void 0,function*(){const e=this._dialog.open(O,{data:{level:this._org.levelWithID(this._filters.getValue().zones)||this._org.level_list[0],building:this._org.building,desks:this._desks}});yield e.afterClosed().toPromise(),this._desks=e.componentInstance.desks$.getValue()})}}return e.\u0275fac=function(t){return new(t||e)(Z.LFG(v.w7),Z.LFG(_.uw))},e.\u0275prov=Z.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);