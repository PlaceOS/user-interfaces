import{H as KC,N as Ht,P as Hw,fr as sm,mt as QC,qn as or}from"./chunk-Dc2TpAe8.js";var p=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),i=e().touched();return t&&i}static ɵfac=function(t){return new(t||n)};static ɵprov=Ht({token:n,factory:n.ɵfac})}return n})();var m=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(r,e,t,i,u){this._defaultMatcher=r,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=u,e?or(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let r=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==r&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(r){if(this.formField&&r?.isSignalErrorState)return r.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return r?.isErrorState(t,e)??!1}};var g=[`*`];var v=(()=>{class n{labelPosition=`after`;static ɵfac=function(t){return new(t||n)};static ɵcmp=Hw({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(t,i){t&2&&sm(`mdc-form-field--align-end`,i.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:g,decls:1,vars:0,template:function(t,i){t&1&&(QC(),KC(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();export{p as n,v as r,m as t};
//# debugId=223f1368-a750-5e2f-a3cd-98e79be22323
