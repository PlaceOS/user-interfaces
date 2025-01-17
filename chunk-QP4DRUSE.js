import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-BQF6TPOV.js";
import {
  AsyncHandler,
  AsyncPipe,
  AttachedResourceConfigModalComponent,
  BehaviorSubject,
  COMMA,
  CalendarEvent,
  CateringItem,
  CateringOrder,
  CommonModule,
  ComponentsModule,
  CounterComponent,
  CurrencyPipe,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  EventEmitter,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageListFieldComponent,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NumberValueAccessor,
  OrganisationService,
  ReactiveFormsModule,
  SPACE,
  SettingsService,
  SimpleTableComponent,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  cateringItemAvailable,
  combineLatest,
  csvToJson,
  currentUser,
  debounceTime,
  downloadFile,
  endOfDay,
  filter,
  first,
  flatten,
  format,
  getUnixTime,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryEvents,
  randomInt,
  shareReplay,
  showMetadata,
  startOfDay,
  switchMap,
  take,
  tap,
  unique,
  updateEventMetadata,
  updateMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LCTDH2CE.js";

// libs/catering/src/lib/catering-item-modal.component.ts
var _c0 = () => ({ standalone: true });
function CateringItemModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 23);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
  }
}
function CateringItemModalComponent_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 24);
    \u0275\u0275text(2, " Category");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 25);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Category is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const auto_r3 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.category.invalid && ctx_r1.form.controls.category.touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", auto_r3);
  }
}
function CateringItemModalComponent_form_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 26);
    \u0275\u0275text(2, " Caterer");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 27);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Caterer is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const caterer_auto_r4 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.caterer.invalid && ctx_r1.form.controls.caterer.touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", caterer_auto_r4);
  }
}
function CateringItemModalComponent_form_4_div_6_mat_chip_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 33);
    \u0275\u0275listener("removed", function CateringItemModalComponent_form_4_div_6_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeTag(item_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 34)(3, "app-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r7);
  }
}
function CateringItemModalComponent_form_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 29);
    \u0275\u0275text(2, " Tags: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 22)(4, "mat-chip-grid", 30, 3);
    \u0275\u0275template(6, CateringItemModalComponent_form_4_div_6_mat_chip_row_6_Template, 5, 2, "mat-chip-row", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 32);
    \u0275\u0275listener("matChipInputTokenEnd", function CateringItemModalComponent_form_4_div_6_Template_input_matChipInputTokenEnd_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.tags.invalid && ctx_r1.form.controls.tags.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tag_list);
    \u0275\u0275advance();
    \u0275\u0275property("matChipInputFor", chipList_r8)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function CateringItemModalComponent_form_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 35);
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 22);
    \u0275\u0275element(4, "textarea", 36);
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_form_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 21);
    \u0275\u0275text(2, " Unit Price");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 37);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Unit Price is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.unit_price.invalid && ctx_r1.form.controls.unit_price.touched);
  }
}
function CateringItemModalComponent_form_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 38);
    \u0275\u0275text(2, "Images:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "image-list-field", 39);
    \u0275\u0275elementEnd();
  }
}
function CateringItemModalComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9)(1, "div", 10);
    \u0275\u0275template(2, CateringItemModalComponent_form_4_div_2_Template, 10, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275template(4, CateringItemModalComponent_form_4_div_4_Template, 10, 3, "div", 11)(5, CateringItemModalComponent_form_4_div_5_Template, 10, 3, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CateringItemModalComponent_form_4_div_6_Template, 8, 6, "div", 12)(7, CateringItemModalComponent_form_4_div_7_Template, 5, 0, "div", 12)(8, CateringItemModalComponent_form_4_div_8_Template, 10, 2, "div", 12);
    \u0275\u0275elementStart(9, "div", 13)(10, "label", 14);
    \u0275\u0275text(11, "Accept Points?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-checkbox", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16)(15, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Gluten Free" }) : ctx_r1.removeTag("Gluten Free"));
    });
    \u0275\u0275text(16, " Gluten Free (GF) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegan" }) : ctx_r1.removeTag("Vegan"));
    });
    \u0275\u0275text(18, " Vegan (VG) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegetarian" }) : ctx_r1.removeTag("Vegetarian"));
    });
    \u0275\u0275text(20, " Vegetarian (V) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Dairy" }) : ctx_r1.removeTag("Contains Dairy"));
    });
    \u0275\u0275text(22, " Contains Dairy (D) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Nuts" }) : ctx_r1.removeTag("Contains Nuts"));
    });
    \u0275\u0275text(24, " Contains Nuts (N) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 13)(26, "label", 18);
    \u0275\u0275text(27, "Discount Cap");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "a-counter", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, CateringItemModalComponent_form_4_div_29_Template, 4, 0, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.caterer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.tags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.unit_price);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_11_0 = ctx_r1.form.get("accept_points")) == null ? null : tmp_11_0.value) ? "No" : "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Gluten Free"))("ngModelOptions", \u0275\u0275pureFunction0(23, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Vegan"))("ngModelOptions", \u0275\u0275pureFunction0(24, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Vegetarian"))("ngModelOptions", \u0275\u0275pureFunction0(25, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Contains Dairy"))("ngModelOptions", \u0275\u0275pureFunction0(26, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Contains Nuts"))("ngModelOptions", \u0275\u0275pureFunction0(27, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 0)("max", 100)("step", 5)("render_fn", ctx_r1.renderPercent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.images);
  }
}
function CateringItemModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 40)(1, "button", 41);
    \u0275\u0275listener("click", function CateringItemModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveChanges());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.form.dirty);
  }
}
function CateringItemModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "mat-spinner", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving catering item...");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    \u0275\u0275property("value", option_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r10, " ");
  }
}
function CateringItemModalComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r11, " ");
  }
}
var _CateringItemModalComponent = class _CateringItemModalComponent {
  /** Current item details */
  get item() {
    return this._data.item || new CateringItem();
  }
  /** List of available categories */
  get categories() {
    return this._data.categories || [];
  }
  /** List of available caterers */
  get caterers() {
    return this._data.caterers || [];
  }
  get tag_list() {
    return this.form.controls.tags.value;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  hasTag(tag) {
    return this.tag_list.includes(tag);
  }
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.item.name || "", [Validators.required]),
      description: new FormControl(this.item.description || ""),
      category: new FormControl(this.item.category || "", [
        Validators.required
      ]),
      caterer: new FormControl(this.item.caterer || "", [
        Validators.required
      ]),
      unit_price: new FormControl(this.item.unit_price, [
        Validators.required
      ]),
      tags: new FormControl(this.item.tags || []),
      accept_points: new FormControl(this.item.accept_points || false),
      discount_cap: new FormControl(this.item.discount_cap || 0),
      images: new FormControl(this.item.images || [])
    });
    this.loading = false;
    this.separators = [ENTER, COMMA, SPACE];
  }
  /**
   * Add a tag to the list of tags for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags)
      return;
    this.form.controls.tags.markAsDirty();
    const input = event.input;
    const value = event.value;
    const tag_list = this.tag_list;
    if ((value || "").trim()) {
      tag_list.push(value);
      this.form.controls.tags.setValue(tag_list);
    }
    if (input)
      input.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Tag to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags)
      return;
    const tag_list = this.tag_list;
    this.form.controls.tags.markAsDirty();
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  saveChanges() {
    this.loading = true;
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadValues(__spreadProps(__spreadValues({}, this.item), {
          id: this.item.id || `item-${randomInt(99999999)}`
        }), this.form.value))
      }
    });
  }
};
_CateringItemModalComponent.\u0275fac = function CateringItemModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringItemModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemModalComponent, selectors: [["catering-item-modal"]], outputs: { event: "event" }, decls: 14, vars: 7, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_0 = goog.getMsg("Item tags e.g. Gluten Free, Vegan etc.");
    i18n_0 = MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:@@zoneTagsPlaceholder␟c133beffffe3288bbdbf8572a32910c33ce14991␟2194594490376201833:Item tags e.g. Gluten Free, Vegan etc.`;
  }
  return [["load_state", ""], ["auto", "matAutocomplete"], ["caterer_auto", "matAutocomplete"], ["chipList", ""], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], [1, "flex", "items-center", "space-x-2", "w-full"], ["class", "flex flex-col flex-1", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "items-center"], [1, "flex-none", "w-28", "min-w-0"], ["formControlName", "accept_points"], ["list", "", 1, "flex", "items-center", "flex-wrap", "max-w-lg"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex-1", "w-24", "min-w-0"], ["formControlName", "discount_cap", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], [1, "flex", "flex-col", "flex-1"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "category"], ["matInput", "", "name", "category", "placeholder", "Category", "formControlName", "category", 3, "matAutocomplete"], ["for", "caterer"], ["matInput", "", "name", "caterer", "placeholder", "Caterer", "formControlName", "caterer", 3, "matAutocomplete"], [1, "flex", "flex-col"], ["for", "tags"], ["aria-label", "Item Tags"], [3, "removed", 4, "ngFor", "ngForOf"], ["name", "tags", "placeholder", i18n_0, 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", ""], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Item Description", "formControlName", "description"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["for", "images"], ["name", "images", "formControlName", "images"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]];
}, template: function CateringItemModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CateringItemModalComponent_button_3_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemModalComponent_form_4_Template, 30, 28, "form", 5)(5, CateringItemModalComponent_footer_5_Template, 3, 1, "footer", 6)(6, CateringItemModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(8, "mat-autocomplete", null, 1);
    \u0275\u0275template(10, CateringItemModalComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-autocomplete", null, 2);
    \u0275\u0275template(13, CateringItemModalComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const load_state_r12 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.item.id ? "Edit" : "Add", " Item");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.categories);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.caterers);
  }
}, dependencies: [NgForOf, NgIf, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatDialogClose, MatCheckbox, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, IconComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, CounterComponent, ImageListFieldComponent], styles: ["\n\n[list][_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=catering-item-modal.component.css.map */"] });
var CateringItemModalComponent = _CateringItemModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemModalComponent, { className: "CateringItemModalComponent", filePath: "libs/catering/src/lib/catering-item-modal.component.ts", lineNumber: 283 });
})();

// libs/catering/src/lib/catering-option-modal.component.ts
function CateringItemOptionModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_form_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 11);
    \u0275\u0275element(7, "input", 12);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
  }
}
function CateringItemOptionModalComponent_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 13);
    \u0275\u0275text(2, " Type");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 11);
    \u0275\u0275element(7, "input", 14);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Type is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const auto_r2 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.group.invalid && ctx_r0.form.controls.group.touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", auto_r2);
  }
}
function CateringItemOptionModalComponent_form_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2, "Unit Price:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11);
    \u0275\u0275element(4, "input", 15);
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-checkbox", 16);
    \u0275\u0275text(2, " Can select multiple of type ");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275template(1, CateringItemOptionModalComponent_form_4_div_1_Template, 10, 2, "div", 8)(2, CateringItemOptionModalComponent_form_4_div_2_Template, 10, 3, "div", 8)(3, CateringItemOptionModalComponent_form_4_div_3_Template, 5, 0, "div", 8)(4, CateringItemOptionModalComponent_form_4_div_4_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.group);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.unit_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.multiple);
  }
}
function CateringItemOptionModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 17)(1, "button", 18);
    \u0275\u0275listener("click", function CateringItemOptionModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.form.dirty);
  }
}
function CateringItemOptionModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving catering item option...");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4, " ");
  }
}
var _CateringItemOptionModalComponent = class _CateringItemOptionModalComponent {
  /** Current item details */
  get option() {
    return this._data.option;
  }
  /** List of available categories */
  get types() {
    return this._data.types || [];
  }
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.option.name || "", [Validators.required]),
      group: new FormControl(this.option.group || "", [Validators.required]),
      unit_price: new FormControl(this.option.unit_price),
      multiple: new FormControl(!!this.option.multiple, [])
    });
    this.loading = false;
  }
  saveChanges() {
    this.loading = true;
    const new_option = __spreadValues(__spreadProps(__spreadValues({}, this.option), {
      id: this.option.id || `option-${randomInt(99999999)}`
    }), this.form.value);
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadProps(__spreadValues({}, this._data.parent), {
          options: this._data.parent.options.filter((i) => i.id !== new_option.id).concat([new_option])
        }))
      }
    });
  }
};
_CateringItemOptionModalComponent.\u0275fac = function CateringItemOptionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemOptionModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringItemOptionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemOptionModalComponent, selectors: [["catering-option-modal"]], outputs: { event: "event" }, decls: 11, vars: 6, consts: [["load_state", ""], ["auto", "matAutocomplete"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "group"], ["matInput", "", "name", "group", "placeholder", "Type of option e.g. Number of sugars", "formControlName", "group", 3, "matAutocomplete"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["name", "multiple", "formControlName", "multiple"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "click", "disabled"], ["loading", "", 1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]], template: function CateringItemOptionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CateringItemOptionModalComponent_button_3_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemOptionModalComponent_form_4_Template, 5, 5, "form", 3)(5, CateringItemOptionModalComponent_footer_5_Template, 3, 1, "footer", 4)(6, CateringItemOptionModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(8, "mat-autocomplete", null, 1);
    \u0275\u0275template(10, CateringItemOptionModalComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const load_state_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.option.id ? "Edit" : "Add", " Item Option");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.types);
  }
}, dependencies: [NgForOf, NgIf, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatDialogClose, MatCheckbox, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, IconComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner] });
var CateringItemOptionModalComponent = _CateringItemOptionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemOptionModalComponent, { className: "CateringItemOptionModalComponent", filePath: "libs/catering/src/lib/catering-option-modal.component.ts", lineNumber: 116 });
})();

// libs/catering/src/lib/catering-order-modal.component.ts
var _c02 = () => ({});
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " Options Available ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-counter", 19);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template_a_counter_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", item_r2.quantity);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "button", 22)(3, "app-icon");
    \u0275\u0275text(4, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.addItem(item_r2));
    });
    \u0275\u0275elementStart(8, "app-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", item_r2.quantity ? "Items with options must be removed from order confirmation page" : "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.quantity, " ");
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template, 1, 1, "a-counter", 16)(9, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template, 10, 3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, item_r2.unit_price / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r2.options.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.options.length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 9)(1, "div", 10);
    \u0275\u0275template(2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template, 10, 8, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", cat_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (ctx_r2.menu_items || \u0275\u0275pureFunction0(2, _c02))[cat_r5]);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template, 3, 3, "mat-tab", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.menu_items || \u0275\u0275pureFunction0(1, _c02))[cat_r5].length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-tab-group");
    \u0275\u0275template(2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function CateringOrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, CateringOrderModalComponent_div_0_ng_container_1_Template, 3, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const order_details_r6 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_details_r6);
  }
}
function CateringOrderModalComponent_footer_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = true);
    });
    \u0275\u0275text(4, " Confirm ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.order.item_count)("matBadge", ctx_r2.order.item_count)("matBadgeHidden", !ctx_r2.order.item_count);
  }
}
function CateringOrderModalComponent_footer_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = false);
    });
    \u0275\u0275text(1, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveOrder());
    });
    \u0275\u0275text(3, " Save Order ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderModalComponent_footer_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 25);
    \u0275\u0275template(1, CateringOrderModalComponent_footer_1_ng_container_1_Template, 5, 3, "ng-container", 6)(2, CateringOrderModalComponent_footer_1_ng_template_2_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_actions_r9 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_actions_r9);
  }
}
function CateringOrderModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.loading);
  }
}
function CateringOrderModalComponent_ng_template_4_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r2.optionsFor(item_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r11.options.length, " option", item_r11.options.length === 1 ? "" : "s", " selected ");
  }
}
function CateringOrderModalComponent_ng_template_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderModalComponent_ng_template_4_div_4_div_4_Template, 2, 3, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-counter", 34);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_ng_template_4_div_4_Template_a_counter_ngModelChange_8_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r11, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, item_r11.total_cost / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", item_r11.quantity);
  }
}
function CateringOrderModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 32)(1, "h3");
    \u0275\u0275text(2, "Confirm Order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275template(4, CateringOrderModalComponent_ng_template_4_div_4_Template, 9, 7, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.order.items);
  }
}
var _CateringOrderModalComponent = class _CateringOrderModalComponent extends AsyncHandler {
  get code() {
    return this._org.currency_code;
  }
  constructor(_org, _data) {
    super();
    this._org = _org;
    this._data = _data;
    this.event = new EventEmitter();
    this.loading = "";
    this.menu_items = {};
    this.categories = [];
    this.loading = "Loading menu...";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading = "Loading menu...";
      this.order = new CateringOrder(this._data.order);
      this.rules = yield this._data.getCateringConfig(this.order.event?.space?.level?.parent_id);
      this._data.menu.subscribe((list) => {
        this.loading = "Loading menu...";
        const categories = unique(list.map((item) => item.category));
        const map2 = {};
        for (const cat of categories) {
          map2[cat] = list.filter((item) => {
            return item.category === cat && cateringItemAvailable(item, this.rules, this.order.event);
          });
        }
        this.categories = categories;
        this.menu_items = map2;
        this.updateMenuQuantities();
        this.timeout("clear_loading", () => this.loading = "", 1e3);
      });
    });
  }
  addItem(item, choose_options = true) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options.length === itm.options.reduce((c, o) => c + (item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    if (choose_options && item.options?.length) {
      this._data.selectOptions(item.options).then((options) => {
        const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), { options }));
        this.addItem(new_item, false);
      });
    } else if (old_item) {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), {
            quantity: old_item.quantity + 1
          }))
        ])
      }));
    } else {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: 1 }))
        ])
      }));
    }
    this.updateMenuQuantities();
  }
  removeItem(item) {
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items: this.order.items.filter((_) => _.id !== item.id && _.options_string === item.options_string)
    }));
    this.updateMenuQuantities();
  }
  updateItemQuantity(item, amount) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options_string === item.options_string);
    let items = [...this.order.items];
    if (old_item) {
      items = this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))]);
    } else {
      items = this.order.items.concat([
        new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))
      ]);
    }
    items.sort((a, b) => a.name.localeCompare(b.name));
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items
    }));
    this.updateMenuQuantities();
  }
  updateMenuQuantities() {
    for (const cat in this.menu_items) {
      for (const item of this.menu_items[cat]) {
        item.quantity = this.order.items.reduce((c, i) => i.id === item.id ? c + i.quantity : c, 0);
      }
    }
  }
  optionsFor(item) {
    return item.options.map((i) => i.name).join("\n");
  }
  saveOrder() {
    this.event.emit({
      reason: "done",
      metadata: { order: this.order }
    });
  }
  confirmOrder() {
    this.show_order_details = true;
  }
};
_CateringOrderModalComponent.\u0275fac = function CateringOrderModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringOrderModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderModalComponent, selectors: [["app-catering-order-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [["load_state", ""], ["order_details", ""], ["order_actions", ""], ["class", "main min-w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-center space-x-2 p-2 border-t border-base-200", 4, "ngIf"], [1, "main", "min-w-[20rem]"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [3, "label"], [1, "list"], ["item", "", "class", "flex items-center p-2 border-b border-base-200", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "items-center", "p-2", "border-b", "border-base-200"], [1, "flex-1", "w-1/2"], ["class", "text-xs no-underline", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], ["ngDefaultControl", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "text-xs", "no-underline"], ["ngDefaultControl", "", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], [3, "matTooltip"], ["icon", "", "matRipple", "", 3, "disabled"], [1, "count", "h-12", "w-12", "flex", "items-center", "justify-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["confirm", "", "btn", "", "matRipple", "", "matBadgeColor", "warn", 3, "click", "disabled", "matBadge", "matBadgeHidden"], ["matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"], [1, "flex", "flex-col", "w-64", "p-8", "items-center", "space-y-2"], ["diameter", "32"], [1, "h-[3.25rem]"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [1, "text-xs", "underline", 3, "matTooltip"]], template: function CateringOrderModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderModalComponent_div_0_Template, 2, 2, "div", 3)(1, CateringOrderModalComponent_footer_1_Template, 4, 2, "footer", 4)(2, CateringOrderModalComponent_ng_template_2_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, CateringOrderModalComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r12 = \u0275\u0275reference(3);
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, MatTab, MatTabGroup, MatDialogClose, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatRipple, MatProgressSpinner, CounterComponent, CurrencyPipe], styles: ["\n\n.list[_ngcontent-%COMP%] {\n  height: 24em;\n  min-width: 32em;\n  max-width: calc(100vw - 1em);\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 12em;\n}\ninput[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  border: none;\n  border-radius: 0 !important;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  outline: none;\n  font-size: 1em;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border: none;\n  border-top: 2px solid var(--s);\n  border-bottom: 2px solid var(--s);\n  box-shadow: none;\n}\ninput.error[_ngcontent-%COMP%]::placeholder {\n  color: rgba(var(--error), 0.45);\n}\n/*# sourceMappingURL=catering-order-modal.component.css.map */"] });
var CateringOrderModalComponent = _CateringOrderModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderModalComponent, { className: "CateringOrderModalComponent", filePath: "libs/catering/src/lib/catering-order-modal.component.ts", lineNumber: 221 });
})();

// libs/catering/src/lib/catering-order-options-modal.component.ts
function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r4.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template, 3, 4, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r4.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-radio-group", 10);
    \u0275\u0275listener("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const group_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGroupOption(group_r2, $event));
    });
    \u0275\u0275elementStart(2, "mat-radio-button", 11)(3, "span", 12);
    \u0275\u0275text(4, "None");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template, 5, 3, "mat-radio-button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.option_state[opt_r6.id], $event) || (ctx_r2.option_state[opt_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.option_state[opt_r6.id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r6.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template, 5, 3, "mat-checkbox", 19);
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngForOf", group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_container_4_Template, 6, 1, "ng-container", 9)(5, CateringOrderOptionsModalComponent_div_7_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const multi_options_r7 = \u0275\u0275reference(6);
    \u0275\u0275attribute("group", group_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !group_r2.multiple)("ngIfElse", multi_options_r7);
  }
}
var _CateringOrderOptionsModalComponent = class _CateringOrderOptionsModalComponent {
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.option_state = {};
    this.code = this._data.code;
    const groups = unique(this._data.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = this._data.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups = group_list;
  }
  updateGroupOption(group, id) {
    for (const option of group.options) {
      this.option_state[option.id] = option.id === id;
    }
  }
  saveOptions() {
    const options = this._data.options.filter((opt) => this.option_state[opt.id]);
    this.event.emit({ reason: "done", metadata: { options } });
  }
};
_CateringOrderOptionsModalComponent.\u0275fac = function CateringOrderOptionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderOptionsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringOrderOptionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderOptionsModalComponent, selectors: [["app-catering-options-modal"]], outputs: { event: "event" }, decls: 11, vars: 1, consts: [["multi_options", ""], ["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], ["class", "pt-1 pb-2 border-b border-base-200", 4, "ngFor", "ngForOf"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "pt-1", "pb-2", "border-b", "border-base-200"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-6"], [4, "ngIf", "ngIfElse"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "my-1", "mx-0"], [1, "font-medium", "p-2"], ["class", "my-1 mx-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "my-1", "mx-0", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"]], template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h3");
    \u0275\u0275text(2, "Select options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 2);
    \u0275\u0275template(7, CateringOrderOptionsModalComponent_div_7_Template, 7, 4, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "footer", 4)(9, "button", 5);
    \u0275\u0275listener("click", function CateringOrderOptionsModalComponent_Template_button_click_9_listener() {
      return ctx.saveOptions();
    });
    \u0275\u0275text(10, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.groups);
  }
}, dependencies: [NgForOf, NgIf, MatDialogClose, MatCheckbox, MatRadioGroup, MatRadioButton, NgControlStatus, NgModel, IconComponent, MatRipple, CurrencyPipe], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: 24em;\n  width: 24rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=catering-order-options-modal.component.css.map */"] });
var CateringOrderOptionsModalComponent = _CateringOrderOptionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderOptionsModalComponent, { className: "CateringOrderOptionsModalComponent", filePath: "libs/catering/src/lib/catering-order-options-modal.component.ts", lineNumber: 100 });
})();

// libs/catering/src/lib/catering-import-menu-modal.component.ts
function CateringImportMenuModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringImportMenuModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main")(1, "div", 6)(2, "app-icon", 7);
    \u0275\u0275text(3, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Click to select file or Drag and drop files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 8);
    \u0275\u0275listener("change", function CateringImportMenuModalComponent_main_4_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFileEvent($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "button", 10);
    \u0275\u0275listener("click", function CateringImportMenuModalComponent_main_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275text(9, " Download Template ");
    \u0275\u0275elementEnd()()();
  }
}
function CateringImportMenuModalComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var _CateringImportMenuModalComponent = class _CateringImportMenuModalComponent {
  constructor() {
    this.event = new EventEmitter();
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    this.loading = "Processing menu data...";
    const element = event.target;
    if (!element?.files)
      return this.loading = "";
    const files = element.files;
    if (!files.length)
      return this.loading = "";
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", (e) => {
      const contents = e.target.result;
      const data = csvToJson(contents);
      this.loading = "";
      this.event.emit({
        reason: "done",
        metadata: data.filter((_) => (_.type || "").toLowerCase() === "item").map((i) => new CateringItem(__spreadProps(__spreadValues({}, i), {
          options: data.filter((_) => (_.type || "").toLowerCase() === "option" && _.tags === i.id).map((_) => ({
            id: _.id,
            name: _.name,
            group: _.category,
            multiple: _.multiple,
            unit_price: _.unit_price
          }))
        })))
      });
    });
    fileReader.readAsText(file);
  }
  downloadTemplate() {
    const template = `ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up Cafe,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,item-1,false`;
    downloadFile("import-menu-template.csv", template);
  }
};
_CateringImportMenuModalComponent.\u0275fac = function CateringImportMenuModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringImportMenuModalComponent)();
};
_CateringImportMenuModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringImportMenuModalComponent, selectors: [["catering-import-menu-modal"]], outputs: { event: "event" }, decls: 7, vars: 3, consts: [["load_state", ""], [1, "h-16", "flex", "items-center", "justify-between", "px-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "h-[24rem]", "w-[24rem]", "border-4", "border-base-200", "border-dashed", "rounded-xl", "hover:bg-base-200", "m-4", "p-4", "cursor-pointer"], [1, "text-4xl"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "px-4", "pb-4"], ["matRipple", "", 1, "clear", "underline", "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "h-[24rem]", "w-[24rem]"], ["diameter", "32"]], template: function CateringImportMenuModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2, "Import Catering Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CateringImportMenuModalComponent_button_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringImportMenuModalComponent_main_4_Template, 10, 0, "main", 4)(5, CateringImportMenuModalComponent_ng_template_5_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
  }
}, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, MatProgressSpinner] });
var CateringImportMenuModalComponent = _CateringImportMenuModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringImportMenuModalComponent, { className: "CateringImportMenuModalComponent", filePath: "libs/catering/src/lib/catering-import-menu-modal.component.ts", lineNumber: 47 });
})();

// libs/catering/src/lib/catering-orders.service.ts
function checkOrder(order, filters) {
  const s = (filters.search || "").toLowerCase();
  return !!order.items.find((item) => (!filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer) && (item.name.toLowerCase().includes(s) || !!item.options.find((option) => option.name.toLowerCase().includes(s))));
}
var _CateringOrdersService = class _CateringOrdersService extends AsyncHandler {
  /** Order filters */
  get filters() {
    return this._filters.getValue();
  }
  /** Order filters */
  set filters(filters) {
    this._filters.next(filters);
  }
  constructor(_settings, _org) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._poll = new BehaviorSubject(0);
    this._loading = new BehaviorSubject(false);
    this._filters = new BehaviorSubject({
      caterer: ""
    });
    this.orders = combineLatest([
      this._filters,
      this._poll
    ]).pipe(debounceTime(300), switchMap(([{ date, zones }]) => {
      this._loading.next(true);
      const start = getUnixTime(startOfDay(date || Date.now()));
      const end = getUnixTime(endOfDay(date || Date.now()));
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      return queryEvents({
        zone_ids: (zones || []).join(","),
        period_start: start,
        period_end: end
      }).pipe(catchError(() => of([])), map((events) => flatten(events.map((event) => event.valid_catering.map((o) => new CateringOrder(__spreadProps(__spreadValues({}, o), { event })))))), map((orders) => orders.filter((o) => format(o.deliver_at, "yyyy-MM-dd") === format(start * 1e3, "yyyy-MM-dd"))));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.order_filters = this._filters.asObservable();
    this.caterers = this.orders.pipe(map((_) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      const is_admin = currentUser().groups.includes("placeos_admin") || currentUser().groups.includes("placeos_support");
      if (!provider_list.length || is_admin)
        return unique(_.map((i) => i.caterer));
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
      if (provider_list.length <= 1 && this._filters.getValue()?.caterer !== provider_list[0]) {
        this._filters.next(__spreadProps(__spreadValues({}, this._filters.getValue()), {
          caterer: provider_list[0]
        }));
      }
      return unique(provider_list);
    }), shareReplay(1));
    this.filtered = this.orders.pipe(map((list) => list.filter((order) => checkOrder(order, this._filters.getValue())).sort((a, b) => a.deliver_at - b.deliver_at)));
    this.subscription("changes", this.orders.subscribe());
  }
  /** Start polling for catering orders */
  startPolling(delay = 15 * 1e3) {
    this.interval("polling", () => this._poll.next((/* @__PURE__ */ new Date()).valueOf()), delay);
  }
  /** Stop polling for new catering orders */
  stopPolling() {
    this.clearInterval("polling");
  }
  /**
   * Update the status of the order
   * @param order Order to update
   * @param status New order status
   */
  updateStatus(order, status) {
    return __async(this, null, function* () {
      order.status = status;
      const updated_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
        status,
        event: null
      }));
      const catering = [
        ...(order.event.extension_data.catering || []).filter((o) => o.id !== order.id),
        updated_order
      ].map((i) => new CateringOrder(__spreadValues({}, i)));
      const event = new CalendarEvent(__spreadProps(__spreadValues({}, order.event), {
        catering
      }));
      const system_id = event?.resources[0]?.id || event?.system?.id;
      const booking = yield updateEventMetadata(event.id, system_id, event.extension_data).toPromise();
      this.timeout("refresh-list", () => this._poll.next(Date.now()), 1e3);
      order.status = status;
      return booking;
    });
  }
};
_CateringOrdersService.\u0275fac = function CateringOrdersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrdersService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService));
};
_CateringOrdersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrdersService, factory: _CateringOrdersService.\u0275fac, providedIn: "root" });
var CateringOrdersService = _CateringOrdersService;

// libs/catering/src/lib/catering-state.service.ts
var _CateringStateService = class _CateringStateService extends AsyncHandler {
  get is_editable() {
    return !this.zone || this.zone === this._org.building?.id;
  }
  get categories() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.category));
  }
  get caterer_list() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.caterer));
  }
  constructor(_org, _dialog, _settings, _orders) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._orders = _orders;
    this._updated = new BehaviorSubject(0);
    this._menu = new BehaviorSubject([]);
    this._loading = new BehaviorSubject(false);
    this._currency = new BehaviorSubject("USD");
    this._change = new BehaviorSubject(0);
    this.menu = this._menu.asObservable();
    this.loading = this._loading.asObservable();
    this.currency = this._currency.asObservable();
    this.settings = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_), switchMap(([_]) => showMetadata(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details || {}), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
    this.charge_codes = this.settings.pipe(map((_) => _.charge_codes || []));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
    this.caterers = combineLatest([
      this._menu,
      this._orders.caterers
    ]).pipe(map(([menu_items]) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      if (!provider_list.length) {
        return unique(menu_items.map((i) => i.caterer));
      }
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
      return unique(provider_list);
    }), shareReplay(1));
    this.zone = "";
    this.subscription("building", this._org.active_building.subscribe((bld) => __async(this, null, function* () {
      if (bld) {
        this._loading.next(true);
        this._menu.next([]);
        const menu = (yield this.getCateringForZone(bld.id).catch((_) => [])).map((i) => new CateringItem(i));
        this._currency.next(this._settings.get("app.currency") || bld.currency || "USD");
        this._loading.next(false);
        this.timeout("loaded", () => this._menu.next(menu), 1e3);
      }
    })));
  }
  /**
   * Create/Edit catering order
   * @param order Order to manipulate
   */
  manageCateringOrder(order) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringOrderModalComponent, {
        data: {
          code: this._currency.getValue(),
          order,
          menu: this.menu,
          loading: this.loading,
          getCateringConfig: (_) => this.getCateringConfig(_),
          selectOptions: (_) => this.selectOptions(_)
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      ref.close();
      return details?.metadata?.order || order;
    });
  }
  addItem() {
    return __async(this, arguments, function* (item = new CateringItem()) {
      const ref = this._dialog.open(CateringItemModalComponent, {
        data: {
          item,
          categories: this.categories,
          caterers: this.caterer_list
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      const menu = this._menu.getValue();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    });
  }
  updateItem(item) {
    const menu = this._menu.getValue();
    const index = menu.findIndex((itm) => itm.id === item.id);
    if (index >= 0)
      menu.splice(index, 1, item);
    else
      menu.push(item);
    this.updateMenu(this._org.building.id, menu).then(() => this._menu.next([...menu]));
  }
  addOption(_0) {
    return __async(this, arguments, function* (item, option = {}) {
      const types = unique(item.options.map((i) => i.group));
      const ref = this._dialog.open(CateringItemOptionModalComponent, {
        data: {
          parent: item,
          option,
          types
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      const menu = this._menu.getValue();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    });
  }
  selectOptions(options) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringOrderOptionsModalComponent, {
        data: {
          code: this._currency.getValue(),
          options
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return [];
      ref.close();
      return details.metadata.options;
    });
  }
  deleteItem(item) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Delete Catering Item",
        content: `Are you sure you wish to remove the catering item ${item.name} from the menu?`,
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading("Removing catering item...");
      const menu = this._menu.getValue().filter((itm) => item.id !== itm.id);
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        details.close();
      }, () => details.loading(""));
    });
  }
  deleteOption(item, option) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Delete Catering Item Option",
        content: `Are you sure you wish to remove the catering option "${option.name}" from "${item.name}"?`,
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading("Removing catering item option...");
      const menu = this._menu.getValue();
      menu.splice(menu.findIndex((itm) => itm.id === item.id), 1, new CateringItem(__spreadProps(__spreadValues({}, item), {
        options: item.options.filter((opt) => opt.id !== option.id)
      })));
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        details.close();
      }, () => details.loading(""));
    });
  }
  editConfig() {
    return __async(this, null, function* () {
      const config = yield this.getCateringConfig(this._org.building.id);
      const { require_notes } = yield this.settings.pipe(take(1)).toPromise();
      const menu = this._menu.getValue();
      const types = unique(flatten(menu.map((i) => [i.category, ...i.tags])));
      const ref = this._dialog.open(AttachedResourceConfigModalComponent, {
        data: {
          config,
          types,
          require_notes,
          saveNotes: (b) => this.saveSettings({ require_notes: b })
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      this.updateConfig(this._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading = false);
    });
  }
  importMenu() {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringImportMenuModalComponent);
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      ref.componentInstance.loading = "Updating menu...";
      const menu = this._menu.getValue();
      const bld = this._org.building;
      const updated_menu = unique(details.metadata.concat(menu), "id");
      yield this.updateMenu(bld.id, updated_menu).catch((_) => {
        notifyError("Error importing catering menu");
        ref.close();
        throw _;
      });
      notifySuccess(`Successfully imported catering menu. ${details.metadata.length} item(s) added.`);
      ref.close();
    });
  }
  updateMenu(zone_id, menu) {
    return updateMetadata(zone_id, {
      id: zone_id,
      name: "catering",
      details: menu,
      description: `Catering menu for ${zone_id}`
    }).toPromise();
  }
  saveSettings(settings) {
    return __async(this, null, function* () {
      const old_settings = yield this.settings.pipe(take(1)).toPromise();
      const result = yield updateMetadata(this._org.building.id, {
        id: this._org.building.id,
        name: "catering-settings",
        details: __spreadValues(__spreadValues({}, old_settings), settings),
        description: `Catering settings for ${this._org.building.id}`
      }).toPromise();
      this._change.next(Date.now());
      return result;
    });
  }
  getCateringForZone(zone_id) {
    return __async(this, null, function* () {
      const menu = (yield showMetadata(zone_id, "catering").toPromise()).details;
      return menu instanceof Array ? menu : [];
    });
  }
  getCateringConfig() {
    return __async(this, arguments, function* (zone_id = this._org.building.id) {
      const rules = (yield showMetadata(zone_id, "catering_config").toPromise()).details;
      return rules instanceof Array ? rules : [];
    });
  }
  updateConfig(zone_id, config) {
    return updateMetadata(zone_id, {
      id: zone_id,
      name: "catering_config",
      details: config,
      description: `Catering menu config for ${zone_id}`
    }).toPromise();
  }
  addItemToOrder(order, new_item) {
    let items = order.items;
    const match = items.find((item) => item.id === new_item.id && new_item.options?.length === item.options?.reduce((c, o) => c + (new_item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    match ? match.quantity += 1 : items = items.concat([
      new CateringItem(__spreadProps(__spreadValues({}, new_item), { quantity: 1 }))
    ]);
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items,
      event: null
    }));
    return new_order;
  }
};
_CateringStateService.\u0275fac = function CateringStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService), \u0275\u0275inject(CateringOrdersService));
};
_CateringStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringStateService, factory: _CateringStateService.\u0275fac, providedIn: "root" });
var CateringStateService = _CateringStateService;

// libs/catering/src/lib/catering-menu.component.ts
var _c03 = (a0) => ({ key: "active", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c1 = () => ({ key: "name", name: "Name" });
var _c2 = () => ({ key: "category", name: "Category" });
var _c3 = (a0) => ({ key: "caterer", name: "Caterer", show: a0 });
var _c4 = (a0) => ({ key: "unit_price", name: "Price", content: a0, size: "6rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function CateringMenuComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275listener("ngModelChange", function CateringMenuComponent_ng_template_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEnabled(row_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.isEnabled(row_r2));
  }
}
function CateringMenuComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, data_r4 / 100, \u0275\u0275pipeBind1(2, 1, ctx_r2.symbol)), " ");
  }
}
function CateringMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 4)(6, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_6_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addOption(row_r6));
    });
    \u0275\u0275elementStart(7, "div", 11)(8, "app-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "Add Option");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_12_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editItem(row_r6));
    });
    \u0275\u0275elementStart(13, "div", 11)(14, "app-icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17, "Edit Item");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_18_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(row_r6));
    });
    \u0275\u0275elementStart(19, "div", 11)(20, "app-icon", 12);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div");
    \u0275\u0275text(23, "Remove Item");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "button", 13);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_24_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r6.id] = !ctx_r2.show_children[row_r6.id]);
    });
    \u0275\u0275elementStart(25, "app-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !ctx_r2.can_edit);
    \u0275\u0275property("disabled", !ctx_r2.can_edit)("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", !(row_r6.options == null ? null : row_r6.options.length))("matTooltip", (row_r6.options == null ? null : row_r6.options.length) ? (ctx_r2.show_children[row_r6.id] ? "Hide" : "Show") + " Menu Item Options" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r6.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringMenuComponent_ng_template_7_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_7_div_0_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function CateringMenuComponent_ng_template_7_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_7_div_0_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(1, "app-icon", 12);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringMenuComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CateringMenuComponent_ng_template_7_div_0_button_7_Template, 3, 0, "button", 20)(8, CateringMenuComponent_ng_template_7_div_0_button_8_Template, 3, 0, "button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r9.group, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.can_edit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.can_edit);
  }
}
function CateringMenuComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringMenuComponent_ng_template_7_div_0_Template, 9, 4, "div", 14);
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275property("ngForOf", row_r10.options);
  }
}
var _CateringMenuComponent = class _CateringMenuComponent {
  get filters() {
    return this._orders.filters;
  }
  get can_edit() {
    return this._catering.is_editable;
  }
  get categories() {
    return this._catering.categories;
  }
  get caterers() {
    return this._catering.caterer_list;
  }
  constructor(_catering, _orders) {
    this._catering = _catering;
    this._orders = _orders;
    this.show_children = {};
    this.menu = combineLatest([
      this._catering.menu,
      this._orders.order_filters
    ]).pipe(map(([menu, filters]) => menu.filter((item) => !filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer)));
    this.addOption = (item) => this._catering.addOption(item);
    this.editOption = (item, option) => this._catering.addOption(item, option);
    this.removeOption = (item, option) => this._catering.deleteOption(item, option);
    this.editItem = (item) => this._catering.addItem(item);
    this.removeItem = (item) => this._catering.deleteItem(item);
  }
  isEnabled(item) {
    return !item.hide_for_zones.includes(this._catering.zone);
  }
  setEnabled(item, state) {
    let list = item.hide_for_zones;
    if (!state)
      list = unique([...list, this._catering.zone]);
    else
      list = list.filter((_) => _ !== this._catering.zone);
    this._catering.updateItem(new CateringItem(__spreadProps(__spreadValues({}, item), { hide_for_zones: list })));
  }
};
_CateringMenuComponent.\u0275fac = function CateringMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringMenuComponent)(\u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(CateringOrdersService));
};
_CateringMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringMenuComponent, selectors: [["catering-menu"]], decls: 9, vars: 23, consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["empty_message", "No Items in Menu", 1, "w-full", "min-w-[32rem]", "block", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable"], ["matTooltip", "Allow Ordering Item for this zone", "matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "ngModel"], [1, "px-2", "py-1", "font-mono", "text-xs", "flex", "items-center", "mx-auto", "bg-secondary", "text-secondary-content", "rounded"], [1, "p-2", "flex", "items-center", "mx-auto", "space-x-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["class", "flex p-2 items-center border-b border-solid border-base-200 relative space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "p-2", "items-center", "border-b", "border-solid", "border-base-200", "relative", "space-x-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pl-4", "pr-2"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", "matTooltip", "Edit Menu Item Option", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "class", "!mr-1", "matTooltip", "Remove Menu Item Option", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Edit Menu Item Option", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Menu Item Option", 1, "!mr-1", 3, "click"]], template: function CateringMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 5);
    \u0275\u0275template(1, CateringMenuComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CateringMenuComponent_ng_template_3_Template, 4, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, CateringMenuComponent_ng_template_5_Template, 27, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, CateringMenuComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const active_template_r12 = \u0275\u0275reference(2);
    const price_template_r13 = \u0275\u0275reference(4);
    const actions_template_r14 = \u0275\u0275reference(6);
    const child_template_r15 = \u0275\u0275reference(8);
    \u0275\u0275property("data", ctx.menu)("columns", \u0275\u0275pureFunction6(16, _c6, \u0275\u0275pureFunction1(6, _c03, active_template_r12), \u0275\u0275pureFunction0(8, _c1), \u0275\u0275pureFunction0(9, _c2), \u0275\u0275pureFunction1(10, _c3, !(ctx.filters == null ? null : ctx.filters.caterer) && ctx.caterers.length > 1), \u0275\u0275pureFunction1(12, _c4, price_template_r13), \u0275\u0275pureFunction1(14, _c5, actions_template_r14)))("filter", ctx.filters == null ? null : ctx.filters.search)("show_children", ctx.show_children)("child_template", child_template_r15)("sortable", true);
  }
}, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatCheckbox, MatTooltip, NgControlStatus, NgModel, IconComponent, SimpleTableComponent, MatRipple, AsyncPipe, CurrencyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-menu.component.css.map */"] });
var CateringMenuComponent = _CateringMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringMenuComponent, { className: "CateringMenuComponent", filePath: "libs/catering/src/lib/catering-menu.component.ts", lineNumber: 179 });
})();

// libs/catering/src/lib/catering-order-item.component.ts
var _c04 = ["catering-order-item", ""];
function CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.name, " ");
  }
}
function CateringOrderItemComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template, 2, 1, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3);
  }
}
function CateringOrderItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function CateringOrderItemComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle());
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275template(14, CateringOrderItemComponent_ng_container_0_ng_container_14_Template, 2, 1, "ng-container", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-success", ctx_r1.active)("text-white", ctx_r1.active)("border-solid", ctx_r1.active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.active ? "done" : "local_pizza");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.item == null ? null : ctx_r1.item.amount) || (ctx_r1.item == null ? null : ctx_r1.item.quantity) || 1, "\xD7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.item == null ? null : ctx_r1.item.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.item.option_list);
  }
}
var ACTIVE_ITEMS = /* @__PURE__ */ new Set();
var _CateringOrderItemComponent = class _CateringOrderItemComponent {
  constructor() {
    this.active = false;
  }
  get item_key() {
    return `${this.order_id}|${this.item?.id}`;
  }
  ngOnInit() {
    this.active = ACTIVE_ITEMS.has(this.item_key);
  }
  toggle() {
    if (ACTIVE_ITEMS.has(this.item_key)) {
      ACTIVE_ITEMS.delete(this.item_key);
      this.active = false;
    } else {
      ACTIVE_ITEMS.add(this.item_key);
      this.active = true;
    }
  }
};
_CateringOrderItemComponent.\u0275fac = function CateringOrderItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderItemComponent)();
};
_CateringOrderItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderItemComponent, selectors: [["", "catering-order-item", ""]], inputs: { order_id: "order_id", item: "item" }, attrs: _c04, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "w-16", "text-right", "h-14", "relative"], ["arm", "", 1, "border-b-2", "border-l-2", "border-base-200", "w-4", "h-16", "absolute", "top-1/2", "left-1/2", "-translate-y-full", "-translate-x-px"], [1, "w-12", "mr-4"], ["action", "", "icon", "", "matRipple", "", 1, "border-2", "border-base-200", "border-dashed", "text-xl", "text-dark-fade", "p-2", 3, "click"], [1, "flex", "flex-1", "items-center", "border-b", "border-base-200", "border-solid", "py-4", "space-x-4"], [1, ""], [1, "p-1", "rounded-full", "bg-base-300", "w-10", "h-10", "flex", "items-center", "justify-center", "font-mono", "text-sm"], [1, "flex-1"], [1, "flex", "space-x-2", "mr-2", "px-4"], [4, "ngFor", "ngForOf"], ["class", "text-xs py-1 px-2 bg-warning text-warning-content rounded-2xl shadow", 4, "ngIf"], [1, "text-xs", "py-1", "px-2", "bg-warning", "text-warning-content", "rounded-2xl", "shadow"]], template: function CateringOrderItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderItemComponent_ng_container_0_Template, 15, 10, "ng-container", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.item);
  }
}, dependencies: [NgForOf, NgIf, IconComponent, MatRipple], styles: ["\n\n[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=catering-order-item.component.css.map */"] });
var CateringOrderItemComponent = _CateringOrderItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderItemComponent, { className: "CateringOrderItemComponent", filePath: "libs/catering/src/lib/catering-order-item.component.ts", lineNumber: 63 });
})();

// libs/catering/src/lib/catering.vars.ts
var CATERING_STATUSES = [
  { id: "pending", name: "Pending", icon: { class: "custom-pending" }, colour: "#ccc" },
  { id: "accepted", name: "Accepted", icon: { class: "custom-accepted" }, colour: "#3996B6" },
  {
    id: "preparing",
    name: "Preparing",
    icon: { class: "custom-preparing" },
    colour: "#E7536B"
  },
  { id: "ready", name: "Ready", icon: { class: "custom-ready" }, colour: "#FFD028" },
  {
    id: "delivered",
    name: "Delivered",
    icon: { class: "custom-delivered" },
    colour: "#75BB43"
  },
  {
    id: "cancelled",
    name: "Cancelled",
    icon: { class: "custom-cancelled" },
    colour: "#747474"
  }
];

// libs/catering/src/lib/catering-order-list.component.ts
var _c05 = (a0) => ({ key: "state", name: " ", size: "4rem", sortable: false, content: a0 });
var _c12 = (a0) => ({ key: "caterer", name: "Caterer", show: a0 });
var _c22 = (a0) => ({ key: "deliver_at", name: "Time", content: a0 });
var _c32 = (a0) => ({ key: "event", name: "Location", content: a0, sortable: false });
var _c42 = (a0) => ({ key: "event", name: "Host", content: a0, sortable: false });
var _c52 = () => ({ key: "charge_code", name: "Charge Code" });
var _c62 = () => ({ key: "invoice_number", name: "Invoice No.", empty: "No Invoice" });
var _c7 = (a0) => ({ key: "status", name: "Status", content: a0, size: "11rem" });
var _c8 = (a0) => ({ key: "actions", name: " ", size: "6.5rem", content: a0, sortable: false });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function CateringOrderListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "app-icon");
    \u0275\u0275text(3, "room_service");
    \u0275\u0275elementEnd()()();
  }
}
function CateringOrderListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Deliver at ", \u0275\u0275pipeBind2(3, 5, data_r1, ctx_r2.time_format), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind2(6, 8, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, "MMM d"), ", ", \u0275\u0275pipeBind2(7, 11, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(8, 14, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, "MMM d"), ", ", \u0275\u0275pipeBind2(9, 17, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, ctx_r2.time_format), " ");
  }
}
function CateringOrderListComponent_ng_template_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, " No Location ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CateringOrderListComponent_ng_template_9_span_2_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name)));
  }
}
function CateringOrderListComponent_ng_template_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, " Unknown Host ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275template(3, CateringOrderListComponent_ng_template_11_span_3_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.email) || (data_r5 == null ? null : data_r5.host), " ");
  }
}
function CateringOrderListComponent_ng_template_13_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_13_button_8_Template_button_click_0_listener() {
      const status_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const row_r8 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateStatus(row_r8, status_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275element(2, "div", 25);
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", status_r7.colour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r7.name);
  }
}
function CateringOrderListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 21);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-menu", null, 7);
    \u0275\u0275template(8, CateringOrderListComponent_ng_template_13_button_8_Template, 5, 3, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    const data_r9 = ctx.data;
    const menu_r10 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (tmp_11_0 = ctx_r2.status(data_r9)) == null ? null : tmp_11_0.colour);
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = ctx_r2.status(data_r9)) == null ? null : tmp_13_0.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.statuses);
  }
}
function CateringOrderListComponent_ng_template_15_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r12.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28)(2, "app-icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CateringOrderListComponent_ng_template_15_ng_template_4_Template, 5, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_15_Template_button_click_6_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r12.id] = !ctx_r2.show_children[row_r12.id]);
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const notes_template_r13 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hover", true)("content", notes_template_r13)("disabled", !row_r12.notes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r12.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_17_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 36);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const row_r15 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("order_id", row_r15 == null ? null : row_r15.id)("item", item_r14);
  }
}
function CateringOrderListComponent_ng_template_17_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 34);
    \u0275\u0275template(1, CateringOrderListComponent_ng_template_17_ul_0_li_1_Template, 1, 2, "li", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r15.items);
  }
}
function CateringOrderListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderListComponent_ng_template_17_ul_0_Template, 2, 1, "ul", 33);
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    \u0275\u0275property("ngIf", row_r15 == null ? null : row_r15.items.length);
  }
}
var _CateringOrderListComponent = class _CateringOrderListComponent extends AsyncHandler {
  get filters() {
    return this._orders.filters;
  }
  get time_format() {
    return this._settings.time_format;
  }
  status(value) {
    return CATERING_STATUSES.find((i) => i.id === value);
  }
  constructor(_orders, _settings) {
    super();
    this._orders = _orders;
    this._settings = _settings;
    this.order_list = this._orders.filtered;
    this.loading = this._orders.loading;
    this.caterers = this._orders.caterers;
    this.statuses = CATERING_STATUSES;
    this.show_children = {};
    this.updateStatus = (order, s) => __async(this, null, function* () {
      yield this._orders.updateStatus(order, s);
      this.timeout("status-change", () => order.status = s);
    });
  }
  ngOnInit() {
    this._orders.startPolling();
  }
  ngOnDestroy() {
    this._orders.stopPolling();
  }
  /* istanbul ignore next */
  trackByFn(index, order) {
    return order ? order.id : void 0;
  }
};
_CateringOrderListComponent.\u0275fac = function CateringOrderListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderListComponent)(\u0275\u0275directiveInject(CateringOrdersService), \u0275\u0275directiveInject(SettingsService));
};
_CateringOrderListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderListComponent, selectors: [["catering-order-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 37, consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "top-0", "left-0", "w-full"], ["empty_message", "No Catering Orders", 1, "min-w-[72rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "show_children", "child_template"], [1, "p-2"], [1, "rounded-full", "bg-base-200", "p-2", "text-2xl", "flex", "items-center", "justify-center"], [1, "p-4"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["status", "", "matRipple", "", 1, "rounded-3xl", "text-base", "border-none", "h-10", "px-4", "flex", "items-center", "text-white", "w-36", 3, "matMenuTriggerFor"], [1, "flex", "text-center", "capitalize", "mx-2"], [1, "pl-2"], ["mat-menu-item", "", "class", "flex items-center", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "rounded-full", "h-4", "w-4", "mr-2"], [1, "mr-2", "w-20"], [1, "flex", "items-center", "space-x-2", "p-2", "mx-auto"], ["icon", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "hover", "content", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-2", "rounded-lg", "bg-base-100", "text-base-content", "max-w-[32rem]", "min-w-[8rem]", "shadow", "border", "border-base-200"], [1, "mb-2"], [1, "text-sm", "px-4", "py-2", "bg-base-200", "rounded"], ["class", "list-none p-0 m-0 w-full relative z-0", 4, "ngIf"], [1, "list-none", "p-0", "m-0", "w-full", "relative", "z-0"], ["catering-order-item", "", "class", "flex items-center", 3, "order_id", "item", 4, "ngFor", "ngForOf"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"]], template: function CateringOrderListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-progress-bar", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275element(3, "simple-table", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, CateringOrderListComponent_ng_template_5_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, CateringOrderListComponent_ng_template_7_Template, 10, 20, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, CateringOrderListComponent_ng_template_9_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, CateringOrderListComponent_ng_template_11_Template, 6, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(13, CateringOrderListComponent_ng_template_13_Template, 9, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(15, CateringOrderListComponent_ng_template_15_Template, 9, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(17, CateringOrderListComponent_ng_template_17_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const state_template_r16 = \u0275\u0275reference(6);
    const time_template_r17 = \u0275\u0275reference(8);
    const location_template_r18 = \u0275\u0275reference(10);
    const host_template_r19 = \u0275\u0275reference(12);
    const status_template_r20 = \u0275\u0275reference(14);
    const actions_template_r21 = \u0275\u0275reference(16);
    const child_template_r22 = \u0275\u0275reference(18);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(2, 7, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.order_list)("columns", \u0275\u0275pureFunctionV(27, _c9, [\u0275\u0275pureFunction1(11, _c05, state_template_r16), \u0275\u0275pureFunction1(13, _c12, !(ctx.filters == null ? null : ctx.filters.caterer) && ((tmp_9_0 = \u0275\u0275pipeBind1(4, 9, ctx.caterers)) == null ? null : tmp_9_0.length) > 1), \u0275\u0275pureFunction1(15, _c22, time_template_r17), \u0275\u0275pureFunction1(17, _c32, location_template_r18), \u0275\u0275pureFunction1(19, _c42, host_template_r19), \u0275\u0275pureFunction0(21, _c52), \u0275\u0275pureFunction0(22, _c62), \u0275\u0275pureFunction1(23, _c7, status_template_r20), \u0275\u0275pureFunction1(25, _c8, actions_template_r21)]))("sortable", true)("show_children", ctx.show_children)("child_template", child_template_r22);
  }
}, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent, CustomTooltipComponent, SimpleTableComponent, MatRipple, MatProgressBar, CateringOrderItemComponent, AsyncPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */"] });
var CateringOrderListComponent = _CateringOrderListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderListComponent, { className: "CateringOrderListComponent", filePath: "libs/catering/src/lib/catering-order-list.component.ts", lineNumber: 225 });
})();

// libs/catering/src/lib/charge-code-list-modal.component.ts
function ChargeCodeListModalComponent_main_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-form-field", 7)(2, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ChargeCodeListModalComponent_main_6_div_1_Template_input_ngModelChange_2_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.charge_codes[i_r2], $event) || (ctx_r2.charge_codes[i_r2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_main_6_div_1_Template_button_click_3_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeCode(i_r2));
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.charge_codes[i_r2]);
  }
}
function ChargeCodeListModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275template(1, ChargeCodeListModalComponent_main_6_div_1_Template, 6, 1, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.charge_codes)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function ChargeCodeListModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 10)(1, "button", 11);
    \u0275\u0275text(2, " Import Codes ");
    \u0275\u0275elementStart(3, "input", 12);
    \u0275\u0275listener("change", function ChargeCodeListModalComponent_footer_7_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCodesFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newCode());
    });
    \u0275\u0275text(5, " Add Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChargeCodes());
    });
    \u0275\u0275text(7, " Save Changes ");
    \u0275\u0275elementEnd()();
  }
}
function ChargeCodeListModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving changes to charge codes...");
    \u0275\u0275elementEnd()();
  }
}
var _ChargeCodeListModalComponent = class _ChargeCodeListModalComponent {
  constructor(_state, _dialog_ref) {
    this._state = _state;
    this._dialog_ref = _dialog_ref;
    this.charge_codes = [];
    this.loading = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.charge_codes = (yield this._state.charge_codes.pipe(take(1)).toPromise()) || [];
    });
  }
  newCode() {
    this.charge_codes.push("");
  }
  removeCode(index) {
    this.charge_codes.splice(index, 1);
  }
  /**
   * Load CSV file and populate the code list with the contents
   * @param event File input field event
   */
  addCodesFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          const list = csvToJson(evt.srcElement.result) || [];
          for (const { code, description } of list) {
            this.charge_codes.push(code);
          }
          this.charge_codes = unique(this.charge_codes);
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError("Error reading file."));
      }
    }
  }
  saveChargeCodes() {
    return __async(this, null, function* () {
      this.loading = true;
      const cleaned_codes = this.charge_codes.filter((_) => _ && _.trim());
      yield this._state.saveSettings({ charge_codes: cleaned_codes });
      this._dialog_ref.close();
    });
  }
  trackByFn(idx, item) {
    return idx;
  }
};
_ChargeCodeListModalComponent.\u0275fac = function ChargeCodeListModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChargeCodeListModalComponent)(\u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(MatDialogRef));
};
_ChargeCodeListModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChargeCodeListModalComponent, selectors: [["charge-code-list-modal"]], decls: 10, vars: 3, consts: [["load_state", ""], ["icon", "", "mat-dialog-close", ""], ["class", "overflow-auto max-h-[65vh] min-h-[20rem] flex flex-col", 4, "ngIf", "ngIfElse"], ["class", "flex items-center p-2 space-x-2 border-t border-base-200", 4, "ngIf"], [1, "overflow-auto", "max-h-[65vh]", "min-h-[20rem]", "flex", "flex-col"], ["class", "flex items-center space-x-2 w-full hover:bg-neutral px-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "space-x-2", "w-full", "hover:bg-neutral", "px-2"], ["appearance", "outline", 1, "h-14", "flex-1"], ["matInput", "", "placeholder", "Charge Code", 3, "ngModelChange", "ngModel"], ["icon", "", 3, "click"], [1, "flex", "items-center", "p-2", "space-x-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-48", "inverse", "relative"], ["type", "file", 1, "opacity-0", "absolute", "inset-0", 3, "change"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-20", "space-y-2"], ["diameter", "32"]], template: function ChargeCodeListModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2, "Edit Charge Codes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, ChargeCodeListModalComponent_main_6_Template, 2, 2, "main", 2)(7, ChargeCodeListModalComponent_footer_7_Template, 8, 0, "footer", 3)(8, ChargeCodeListModalComponent_ng_template_8_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, MatDialogClose, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatRipple, MatInput, MatProgressSpinner] });
var ChargeCodeListModalComponent = _ChargeCodeListModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChargeCodeListModalComponent, { className: "ChargeCodeListModalComponent", filePath: "libs/catering/src/lib/charge-code-list-modal.component.ts", lineNumber: 70 });
})();

// libs/catering/src/lib/catering.module.ts
var _SharedCateringModule = class _SharedCateringModule {
};
_SharedCateringModule.\u0275fac = function SharedCateringModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedCateringModule)();
};
_SharedCateringModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedCateringModule });
_SharedCateringModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MatMenuModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTooltipModule,
  FormsModule,
  ReactiveFormsModule,
  ComponentsModule,
  MatFormFieldModule,
  FormFieldsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
] });
var SharedCateringModule = _SharedCateringModule;

export {
  CateringOrdersService,
  CateringStateService,
  CateringMenuComponent,
  CateringOrderListComponent,
  ChargeCodeListModalComponent,
  SharedCateringModule
};
//# sourceMappingURL=chunk-QP4DRUSE.js.map
