"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[396],{396:(st,v,s)=>{s.r(v),s.d(v,{EventsModule:()=>k});var t=s(9212),_=s(3005),A=s(9842),c=s(6980);const C=["app-events",""];let U=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["","app-events",""]],attrs:C,decls:5,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"relative","flex","flex-col","flex-1","w-1/2","h-full"]],template:function(o,a){1&o&&(t._UZ(0,"app-topbar"),t.TgZ(1,"div",0),t._UZ(2,"app-sidebar"),t.TgZ(3,"main",1),t._UZ(4,"router-outlet"),t.qZA()())},dependencies:[_.O,A.u,c.lC],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}"]})}return n})();var p=s(6814),r=s(6223),y=s(7910),E=s(2798),h=s(9916),M=s(5091),d=s(7988),g=s(3680),Z=s(4888),L=s(7442),O=s(6612),b=s(3085),w=s(942);function j(n,l){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16)(2,"div",17),t._uU(3),t.ALo(4,"date"),t.qZA(),t.TgZ(5,"div",18),t._uU(6),t.ALo(7,"date"),t.qZA()(),t._UZ(8,"div",19),t.TgZ(9,"div",20)(10,"div",21),t._uU(11),t.qZA(),t.TgZ(12,"div",22),t._uU(13),t.ALo(14,"date"),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"div",23),t._uU(17),t.ALo(18,"building"),t.ALo(19,"async"),t.ALo(20,"space"),t.qZA()()()),2&n){const e=l.row,o=t.oxw();let a;t.xp6(3),t.hij(" ",t.xi3(4,6,e.date,"MMM")," "),t.xp6(3),t.hij(" ",t.xi3(7,9,e.date,"d")," "),t.xp6(5),t.Oqu(e.title),t.xp6(2),t.AsE(" ",t.xi3(14,12,e.date,"EEEE, "+o.time_format)," \u2013 ",t.xi3(15,15,e.date+60*e.duration*1e3,o.time_format+" z")," "),t.xp6(4),t.hij(" ",e.location||(null==(a=t.lcZ(18,18,null==(a=t.lcZ(19,20,t.lcZ(20,22,null==e.resources[0]?null:e.resources[0].email)))?null:a.zones))?null:a.address)," ")}}function F(n,l){if(1&n&&(t._uU(0),t.ALo(1,"level"),t.ALo(2,"async"),t.ALo(3,"space")),2&n){const e=l.row;let o;t.hij(" ",null==(o=t.lcZ(1,1,null==(o=t.lcZ(2,3,t.lcZ(3,5,null==e.resources[0]?null:e.resources[0].email)))?null:o.zones))?null:o.display_name," ")}}function J(n,l){if(1&n&&(t._uU(0),t.ALo(1,"async"),t.ALo(2,"space")),2&n){const e=l.row;let o;t.hij(" ",null==(o=t.lcZ(1,1,t.lcZ(2,3,null==e.resources[0]?null:e.resources[0].email)))?null:o.display_name," ")}}function N(n,l){if(1&n&&t._uU(0),2&n){const e=l.row;t.hij(" ",(null==e.attendees?null:e.attendees.length)||1," ")}}function R(n,l){if(1&n&&(t.TgZ(0,"div",24),t._uU(1),t.qZA()),2&n){const e=l.row;t.ekj("text-white","done"!==e.state&&"in_progress"!==e.state)("bg-success","done"!==e.state&&"in_progress"!==e.state)("bg-warning","in_progress"===e.state)("bg-base-200","done"===e.state),t.xp6(),t.hij(" ","done"===e.state?"Done":"in_progress"===e.state?"In Progress":"Active"," ")}}function I(n,l){if(1&n&&(t.TgZ(0,"div",25)(1,"button",26)(2,"app-icon"),t._uU(3,"more_vert"),t.qZA()()(),t.TgZ(4,"mat-menu",null,27)(6,"button",28),t._uU(7,"Promote Event"),t.qZA(),t.TgZ(8,"button",28),t._uU(9,"View"),t.qZA(),t.TgZ(10,"button",28),t._uU(11,"Edit"),t.qZA(),t.TgZ(12,"button",28),t._uU(13,"Copy URL"),t.qZA(),t.TgZ(14,"button",28),t._uU(15,"Delete"),t.qZA()()),2&n){const e=t.MAs(5);t.xp6(),t.Q6J("matMenuTriggerFor",e)}}const D=()=>["/entertainment","events","manage"],z=()=>["events","level","room","attending","status","actions"],P=()=>["Event","Level","Room","Attending","Status"," "],Q=()=>["20r","10r","10r","8r","8r","flex"],H=(n,l,e,o,a,i)=>({events:n,level:l,room:e,attending:o,status:a,actions:i});let S=(()=>{class n{get time_format(){return this._settings.time_format}constructor(e){this._settings=e,this.event_list=[new h.ym({title:"Test Event",date:(0,M.Z)(new Date,-15).valueOf(),resources:[{email:"testroom1@0cbfs.onmicrosoft.com"}]})]}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(E.gb))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-event-list"]],decls:24,vars:17,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"flex","items-center","justify-between","p-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"routerLink"],[1,"ml-2"],[1,"text-2xl"],["filters","",1,""],[1,"h-1/2","flex-1","w-full","px-8","overflow-auto"],[1,"min-w-[64rem]","block",3,"dataSource","columns","display_column","column_size","template"],["event_template",""],["level_template",""],["room_template",""],["attending_template",""],["status_template",""],["actions_template",""],[1,"flex","items-center","space-x-2"],["date","",1,"flex","flex-col","items-center","leading-tight"],["month","",1,"text-sm","font-medium","relative","top-0.5"],["day","",1,"text-2xl","font-light","relative","-top-0.5"],[1,"h-12","w-12","rounded","overflow-hidden","bg-base-200"],["details","",1,"flex","flex-col"],[1,"text-sm"],[1,"text-xs","opacity-40"],[1,"text-xs"],[1,"px-4","py-1","rounded-full"],[1,"w-full","flex","items-center","justify-end","space-x-2"],["icon","","matRipple","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Events"),t.qZA(),t.TgZ(4,"a",3)(5,"div",4),t._uU(6,"Create Event"),t.qZA(),t.TgZ(7,"app-icon",5),t._uU(8,"chevron_right"),t.qZA()()(),t._UZ(9,"div",6),t.TgZ(10,"div",7),t._UZ(11,"custom-table",8),t.qZA()(),t.YNc(12,j,21,24,"ng-template",null,9,t.W1O)(14,F,4,7,"ng-template",null,10,t.W1O)(16,J,3,5,"ng-template",null,11,t.W1O)(18,N,1,1,"ng-template",null,12,t.W1O)(20,R,2,9,"ng-template",null,13,t.W1O)(22,I,16,1,"ng-template",null,14,t.W1O)),2&o){const i=t.MAs(13),m=t.MAs(15),tt=t.MAs(17),et=t.MAs(19),nt=t.MAs(21),ot=t.MAs(23);t.xp6(4),t.Q6J("routerLink",t.DdM(6,D)),t.xp6(7),t.Q6J("dataSource",a.event_list)("columns",t.DdM(7,z))("display_column",t.DdM(8,P))("column_size",t.DdM(9,Q))("template",t.HTZ(10,H,i,m,tt,et,nt,ot))}},dependencies:[d.VK,d.OP,d.p6,g.wG,Z.o,L.C,c.rH,p.Ov,p.uU,O.M,b.a,w.X],styles:["[_nghost-%COMP%]{flex:1}"]})}return n})();var f=s(6028),x=s(4170),Y=s(8582),K=s(8525),W=s(576),u=s(2557),q=s(1365);function G(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"mat-chip-row",22),t.NdJ("removed",function(){const i=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.removeTag(i))}),t._uU(1),t.TgZ(2,"app-icon",23),t._uU(3,"close"),t.qZA()()}if(2&n){const e=l.$implicit;t.Q6J("selectable",!0)("removable",!0),t.xp6(),t.hij(" ",e," ")}}const X=()=>["/entertainment","events"],B=[];let T=(()=>{class n{get tag_list(){return this.form.controls.tags.value||B}constructor(e){this._event_form=e,this.form=this._event_form.form,this.separators=[f.K5,f.OC,f.L_]}addTag(e){if(!this.form||!this.form.controls.tags)return;const o=e.input,a=e.value,i=this.tag_list;(a||"").trim()&&(i.push(a),this.form.controls.tags.setValue(i)),o&&(o.value="")}removeTag(e){if(!this.form||!this.form.controls.tags)return;const o=this.tag_list,a=o.indexOf(e);a>=0&&(o.splice(a,1),this.form.controls.tags.setValue(o))}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(h.MH))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-event-manage"]],decls:48,vars:10,consts:[[1,"absolute","inset-0","bg-base-100","overflow-auto"],["icon","","matRipple","",1,"absolute","top-2","right-2",3,"routerLink"],[1,"flex","flex-col","w-[40rem]","max-w-full","mx-auto","px-4",3,"formGroup"],[1,"py-4","text-2xl","font-medium"],[1,"flex","flex-col","space-y-2"],["for","title"],["appearance","outline",1,"w-full"],["matInput","","name","title","formControlName","title","placeholder","e.g. Team Meeting"],["for","organiser"],["name","organiser","formControlName","organiser",1,"block"],[1,"flex","space-x-4"],[1,"space-y-2","flex-1"],["for","type"],["name","type","placeholder","Please select","formControlName","event_type"],["for","category"],["name","category","placeholder","Please select","formControlName","category"],["for","tags"],["appearance","outline"],["aria-label","Event Tags"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","New feature...",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],[3,"selectable","removable","removed"],["matChipRemove",""]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0)(1,"a",1)(2,"app-icon"),t._uU(3,"close"),t.qZA()(),t.TgZ(4,"form",2)(5,"h3",3),t._uU(6,"New Event"),t.qZA(),t.TgZ(7,"section",4)(8,"label",5),t._uU(9,"Event Title"),t.TgZ(10,"span"),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"mat-form-field",6),t._UZ(13,"input",7),t.TgZ(14,"mat-error"),t._uU(15),t.ALo(16,"translate"),t.qZA()(),t.TgZ(17,"label",8),t._uU(18,"Organiser"),t.TgZ(19,"span"),t._uU(20,"*"),t.qZA()(),t._UZ(21,"a-user-search-field",9),t.TgZ(22,"div",10)(23,"div",11)(24,"label",12),t._uU(25,"Type"),t.TgZ(26,"span"),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"mat-form-field",6)(29,"mat-select",13)(30,"mat-option"),t._uU(31,"None"),t.qZA()()()(),t.TgZ(32,"div",11)(33,"label",14),t._uU(34,"Category"),t.TgZ(35,"span"),t._uU(36,"*"),t.qZA()(),t.TgZ(37,"mat-form-field",6)(38,"mat-select",15)(39,"mat-option"),t._uU(40,"None"),t.qZA()()()()(),t.TgZ(41,"label",16),t._uU(42,"Tags"),t.qZA(),t.TgZ(43,"mat-form-field",17)(44,"mat-chip-grid",18,19),t.YNc(46,G,4,3,"mat-chip-row",20),t.TgZ(47,"input",21),t.NdJ("matChipInputTokenEnd",function(m){return a.addTag(m)}),t.qZA()()()()()()),2&o){const i=t.MAs(45);t.xp6(),t.Q6J("routerLink",t.DdM(9,X)),t.xp6(3),t.Q6J("formGroup",a.form),t.xp6(11),t.hij(" ",t.lcZ(16,7,"FORM.TITLE_ERROR")," "),t.xp6(31),t.Q6J("ngForOf",a.tag_list),t.xp6(),t.Q6J("matChipInputFor",i)("matChipInputSeparatorKeyCodes",a.separators)("matChipInputAddOnBlur",!0)}},dependencies:[p.sg,r._Y,r.Fj,r.JJ,r.JL,x.KE,x.TO,Y.Nt,K.gD,g.ey,g.wG,r.sg,r.u,W.d,Z.o,u.RA,u.oH,u.qH,u.z3,c.rH,q.X$]})}return n})();var V=s(7049);const $=[{path:"",component:U,children:[{path:"",component:S}]},{path:"manage",component:T},{path:"manage/:id",component:T},{path:"**",redirectTo:""}];let k=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[p.ez,r.u5,y.v,V.YR,c.Bz.forChild($)]})}return n})()}}]);