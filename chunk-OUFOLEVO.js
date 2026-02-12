import {
  CommonModule,
  Component,
  IconComponent,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  UploadsService,
  forwardRef,
  inject,
  input,
  notifyError,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HFCQTRLN.js";

// apps/concierge/src/app/ui/app-settings/upload-button.component.ts
function UploadButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "cloud_upload");
    \u0275\u0275elementEnd();
  }
}
function UploadButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("mode", !ctx_r0.progress() ? "indeterminate" : "determinate")("value", ctx_r0.progress());
  }
}
var _UploadButtonComponent = class _UploadButtonComponent {
  constructor() {
    this._uploads = inject(UploadsService);
    this.types = input(["image"]);
    this.uploading = signal(false);
    this.progress = signal(0);
    this.value = signal("");
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.value() === new_value)
      return;
    console.error("Set Value:", this.value, new_value);
    this.value.set(new_value);
    if (this._onChange)
      this._onChange(new_value);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  uploadImage(event) {
    if (this.uploading()) {
      return notifyError("Already uploading a file...");
    }
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const file = files[0];
    console.log(`File: ${file.name}`);
    const types = this.types();
    if (!types.some((t) => file.type.includes(t))) {
      return notifyError(`File is not an ${types.join(", ")}`);
    }
    console.log(`Uploading file...`);
    this.progress.set(0);
    this.uploading.set(true);
    let status = null;
    this._uploads.uploadFileWithProgress(file).subscribe((s) => {
      console.log(`Progress:`, s);
      this.progress.set(s.progress);
      status = s;
    }, () => {
      notifyError("Failed to upload image. Try again later");
      this.uploading.set(false);
    }, () => {
      const id = status.upload._request.upload_id;
      this.setValue(`/api/engine/v2/uploads/${encodeURIComponent(id)}/url`);
      this.uploading.set(false);
    });
  }
};
_UploadButtonComponent.\u0275fac = function UploadButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UploadButtonComponent)();
};
_UploadButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadButtonComponent, selectors: [["upload-button"]], inputs: { types: [1, "types"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UploadButtonComponent),
    multi: true
  }
])], decls: 4, vars: 4, consts: [["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "overflow-hidden", "rounded-sm", 3, "disabled", "title"], ["type", "file", 1, "absolute", "inset-0", "cursor-pointer", "opacity-0", 3, "change"], ["diameter", "32", 3, "mode", "value"]], template: function UploadButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275conditionalCreate(1, UploadButtonComponent_Conditional_1_Template, 2, 0, "icon");
    \u0275\u0275elementStart(2, "input", 1);
    \u0275\u0275listener("change", function UploadButtonComponent_Template_input_change_2_listener($event) {
      return ctx.uploadImage($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, UploadButtonComponent_Conditional_3_Template, 1, 2, "mat-spinner", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", ctx.uploading())("title", ctx.value());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.uploading() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.uploading() ? 3 : -1);
  }
}, dependencies: [
  CommonModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  MatRippleModule,
  MatRipple
], encapsulation: 2 });
var UploadButtonComponent = _UploadButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadButtonComponent, [{
    type: Component,
    args: [{
      selector: "upload-button",
      template: `
        <button
            icon
            matRipple
            [disabled]="uploading()"
            class="bg-secondary text-secondary-content h-12 w-12 overflow-hidden rounded-sm"
            [title]="value()"
        >
            @if (!uploading()) {
                <icon>cloud_upload</icon>
            }
            <input
                type="file"
                class="absolute inset-0 cursor-pointer opacity-0"
                (change)="uploadImage($event)"
            />
            @if (uploading()) {
                <mat-spinner
                    [mode]="!progress() ? 'indeterminate' : 'determinate'"
                    diameter="32"
                    [value]="progress()"
                ></mat-spinner>
            }
        </button>
    `,
      imports: [
        CommonModule,
        MatProgressSpinnerModule,
        IconComponent,
        MatRippleModule
      ],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => UploadButtonComponent),
          multi: true
        }
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadButtonComponent, { className: "UploadButtonComponent", filePath: "apps/concierge/src/app/ui/app-settings/upload-button.component.ts", lineNumber: 50 });
})();

export {
  UploadButtonComponent
};
//# sourceMappingURL=chunk-OUFOLEVO.js.map
