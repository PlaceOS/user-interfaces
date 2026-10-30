import {
  parse,
  stringify
} from "./chunk-6JYDOR4Q.js";
import {
  DurationFieldComponent
} from "./chunk-IYBWI6LJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-4D2YZQAY.js";
import {
  MatProgressSpinnerModule
} from "./chunk-I52JNSOJ.js";
import "./chunk-PAJWQ7AP.js";
import {
  SettingsToggleComponent
} from "./chunk-YEGWJU2K.js";
import "./chunk-TW5QCAQQ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-2K5G7CFD.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5GXWVSSG.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint
} from "./chunk-54KE5JKV.js";
import "./chunk-OX3RHFRB.js";
import "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import {
  isValidUrl
} from "./chunk-3TOA4G7Y.js";
import "./chunk-7G72PXFC.js";
import "./chunk-7T3N6W45.js";
import "./chunk-IGQY3INR.js";
import {
  FormField,
  form,
  validate
} from "./chunk-I75UA7CR.js";
import {
  UploadsService
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  AsyncHandler,
  Le,
  Pe,
  Sa,
  getInvalidSignalFields,
  notifyError,
  notifySuccess,
  onFieldChange,
  qa,
  xa
} from "./chunk-JYQPCPCB.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import "./chunk-N4RTV55R.js";
import {
  Component,
  Injector,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/ui/app-settings/booking-panel-settings-modal.component.ts
var BookingPanelSettingsModalComponent = class _BookingPanelSettingsModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._injector = inject(Injector);
    this._uploads = inject(UploadsService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading = signal(
      0,
      ...ngDevMode ? [{ debugName: "uploading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone = this._data.zone;
    this.model = signal(
      {
        control_ui: "",
        catering_ui: "",
        custom_qr_url: "",
        custom_qr_color: "",
        show_qr_code: true,
        hide_qr_text: false,
        disable_book_now: false,
        disable_book_now_host: true,
        disable_end_meeting: false,
        enable_end_meeting_button: false,
        hide_meeting_details: false,
        hide_meeting_title: false,
        min_duration: 15,
        max_duration: 480,
        pending_before: 5,
        pending_period: 15,
        room_image: "",
        offline_image: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      validate(p.control_ui, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.catering_ui, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.custom_qr_url, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.room_image, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.offline_image, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
    });
    this._defaults = {};
  }
  async ngOnInit() {
    if (!this.zone?.id) {
      notifyError("Opened booking panel settings modal with invalid zone");
      return;
    }
    onFieldChange(this.model, (m) => m.max_duration, (max_duration) => {
      if (max_duration <= 60)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        min_duration: Math.max(15, Math.floor(m.min_duration / 15) * 15)
      }));
    }, this._injector);
    this._defaults = __spreadValues({}, this.model());
    this.loading.set("Loading existing panel settings...");
    let settings = [];
    try {
      const response = await Sa({ parent_id: this.zone.id });
      settings = response?.data || [];
    } catch {
    }
    const unencrypted_settings = settings.find((block) => block.encryption_level === Le.None);
    if (!unencrypted_settings) {
      this.loading.set("");
      return;
    }
    this.loading.set("Processing found panel settings...");
    const setting_value = parse(unencrypted_settings.settings_string) || {};
    this.model.update((m) => __spreadValues(__spreadValues({}, m), setting_value));
    this.loading.set("");
  }
  uploadImage(event, link_field) {
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const file = files[0];
    if (!file.type.includes("image")) {
      return notifyError("File is not an image");
    }
    const upload = this._uploads.uploadFileWithProgress(file);
    const effect_ref = effect(() => {
      const s = upload();
      this.uploading.set(s.progress);
      if (s.error) {
        notifyError("Failed to upload image. Try again later");
        this.uploading.set(0);
        effect_ref.destroy();
        return;
      }
      if (s.link) {
        this.uploading.set(0);
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          [link_field]: s.link
        }));
        effect_ref.destroy();
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "effect_ref" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(`Some form fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
    }
    const form_value = this.model();
    this._dialog_ref.disableClose = true;
    this.loading.set("Loading existing booking panel settings...");
    let settings = [];
    try {
      const response = await Sa({ parent_id: this.zone.id });
      settings = response?.data || [];
    } catch {
    }
    let unencrypted_settings = settings.find((block) => block.encryption_level === Le.None);
    if (!unencrypted_settings)
      unencrypted_settings = new Pe({
        encryption_level: Le.None
      });
    const setting_value = parse(unencrypted_settings.settings_string) || {};
    const new_settings_blob = __spreadValues(__spreadValues({}, setting_value), form_value);
    const new_setting = __spreadProps(__spreadValues({}, unencrypted_settings), {
      parent_id: this._data.zone.id,
      settings_string: stringify(new_settings_blob)
    });
    this.loading.set("Saving changes to booking panel settings...");
    const update = unencrypted_settings.id ? xa(unencrypted_settings.id, new_setting) : qa(new_setting);
    try {
      await update;
    } catch (e) {
      this._dialog_ref.disableClose = false;
      this.loading.set("");
      notifyError("Error saving changes to booking panel settings");
      throw e;
    }
    this._dialog_ref.close();
    notifySuccess(`Successfully updated booking panel settings for "${this.zone.display_name}"`);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BookingPanelSettingsModalComponent_BaseFactory;
      return function BookingPanelSettingsModalComponent_Factory(__ngFactoryType__) {
        return (\u0275BookingPanelSettingsModalComponent_BaseFactory || (\u0275BookingPanelSettingsModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookingPanelSettingsModalComponent)))(__ngFactoryType__ || _BookingPanelSettingsModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingPanelSettingsModalComponent, selectors: [["booking-panel-settings-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 89, vars: 34, consts: [["file_input_1", ""], ["file_input_2", ""], [3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-4", 3, "submit"], [1, "border-base-300", "relative", "mb-4", "flex", "flex-col", "rounded-sm", "border", "p-2"], [1, "bg-base-100", "absolute", "top-0", "left-8", "-translate-y-1/2", "p-2", "text-sm"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Disable booking", 3, "formField"], ["label", "Hide booking host options", 3, "formField"], [1, "flex", "space-x-4"], [1, "h-20", "flex-1"], ["for", "booking-panel-settings-modal-min-duration", "id", "booking-panel-settings-modal-min-duration-label"], ["role", "group", "aria-labelledby", "booking-panel-settings-modal-min-duration-label", 3, "formField", "min", "step", "max"], ["for", "booking-panel-settings-modal-max-duration", "id", "booking-panel-settings-modal-max-duration-label"], ["role", "group", "aria-labelledby", "booking-panel-settings-modal-max-duration-label", 3, "formField", "min", "step", "max"], [1, "flex-1"], ["for", "booking-panel-settings-modal-pending_before", "id", "booking-panel-settings-modal-pending_before-label"], ["role", "group", "aria-labelledby", "booking-panel-settings-modal-pending_before-label", 3, "formField", "min", "step", "max"], ["for", "booking-panel-settings-modal-pending_period", "id", "booking-panel-settings-modal-pending_period-label"], ["role", "group", "aria-labelledby", "booking-panel-settings-modal-pending_period-label", 3, "formField", "min", "step", "max"], ["label", "Disable auto-ending bookings", "info", "Disable ending the current booking early when sensors\ndon't detect presence in room after a period of time", 3, "formField"], ["label", "Show button to end booking early", 3, "formField"], ["label", "Hide Meeting Details", "info", "When enabled only shows the time of the current meeting", 3, "formField"], ["label", "Hide Meeting Title", "info", "When enabled only shows the time and host of the current meeting", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Hide QR helper text", 3, "formField"], [1, "mb-2"], ["for", "booking-panel-settings-modal-custom-qr-url"], ["appearance", "outline", 1, "w-full"], ["id", "booking-panel-settings-modal-custom-qr-url", "matInput", "", "placeholder", "/workplace/#/book/room/?room_id=sys-123456", 3, "formField"], ["for", "booking-panel-settings-modal-custom-qr-color"], ["id", "booking-panel-settings-modal-custom-qr-color", "matInput", "", "placeholder", "#4A2C89", 3, "formField"], ["for", "booking-panel-settings-modal-control-ui"], ["id", "booking-panel-settings-modal-control-ui", "matInput", "", "placeholder", "https://control.example.com/...", 3, "formField"], ["for", "booking-panel-settings-modal-catering-ui"], ["id", "booking-panel-settings-modal-catering-ui", "matInput", "", "placeholder", "https://catering.example.com/...", 3, "formField"], ["for", "booking-panel-settings-modal-room-image"], [1, "flex", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["id", "booking-panel-settings-modal-room-image", "matInput", "", "placeholder", "/assets/images/room_test1.png", 3, "formField"], ["type", "button", "icon", "", "matRipple", "", "aria-label", "Upload room image", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "disabled"], ["tabindex", "-1", "aria-hidden", "true", "type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["for", "booking-panel-settings-modal-offline-image"], ["id", "booking-panel-settings-modal-offline-image", "matInput", "", "placeholder", "/assets/images/offline1.png", 3, "formField"], ["type", "button", "icon", "", "matRipple", "", "aria-label", "Upload offline image", 1, "bg-secondary", "text-secondary-content", "relative", "h-12", "w-12", "rounded-sm", 3, "click", "disabled"]], template: function BookingPanelSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
        \u0275\u0275listener("confirm", function BookingPanelSettingsModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(1, "form", 3);
        \u0275\u0275listener("submit", function BookingPanelSettingsModalComponent_Template_form_submit_1_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275elementStart(2, "div", 4)(3, "h4", 5);
        \u0275\u0275text(4, " Booking Settings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275element(6, "settings-toggle", 7);
        \u0275\u0275controlCreate();
        \u0275\u0275element(7, "settings-toggle", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 9)(9, "div", 10)(10, "label", 11);
        \u0275\u0275text(11, "Minimum Booking Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "a-duration-field", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "label", 13);
        \u0275\u0275text(15, "Maximum Booking Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "a-duration-field", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 9)(18, "div", 15)(19, "label", 16);
        \u0275\u0275text(20, "Allow check-in before meeting");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "a-duration-field", 17);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15)(23, "label", 18);
        \u0275\u0275text(24, "Cancel not checked-in meetings after");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "a-duration-field", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 6);
        \u0275\u0275element(27, "settings-toggle", 20);
        \u0275\u0275controlCreate();
        \u0275\u0275element(28, "settings-toggle", 21);
        \u0275\u0275controlCreate();
        \u0275\u0275element(29, "settings-toggle", 22);
        \u0275\u0275controlCreate();
        \u0275\u0275element(30, "settings-toggle", 23);
        \u0275\u0275controlCreate();
        \u0275\u0275element(31, "settings-toggle", 24);
        \u0275\u0275controlCreate();
        \u0275\u0275element(32, "settings-toggle", 25);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 26)(34, "label", 27);
        \u0275\u0275text(35, "Custom QR Code URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-form-field", 28);
        \u0275\u0275element(37, "input", 29);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(38, "mat-error");
        \u0275\u0275text(39, " Custom QR Code URL must be a valid URL ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-hint");
        \u0275\u0275text(41, " Custom QR Code URL will replace the default Booking QR Code ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 26)(43, "label", 30);
        \u0275\u0275text(44, "Custom QR Color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-form-field", 28);
        \u0275\u0275element(46, "input", 31);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 9)(48, "div", 15)(49, "label", 32);
        \u0275\u0275text(50, "Control UI URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "mat-form-field", 28);
        \u0275\u0275element(52, "input", 33);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(53, "mat-error");
        \u0275\u0275text(54, "Control UI must be a valid URL");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 15)(56, "label", 34);
        \u0275\u0275text(57, "Catering UI URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field", 28);
        \u0275\u0275element(59, "input", 35);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(60, "mat-error");
        \u0275\u0275text(61, " Catering UI must be a valid URL ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 9)(63, "div", 15)(64, "label", 36);
        \u0275\u0275text(65, "Room Image URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 37)(67, "mat-form-field", 38);
        \u0275\u0275element(68, "input", 39);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(69, "mat-error");
        \u0275\u0275text(70, " Room Image must be a valid URL ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "button", 40);
        \u0275\u0275listener("click", function BookingPanelSettingsModalComponent_Template_button_click_71_listener($event) {
          \u0275\u0275restoreView(_r1);
          const file_input_1_r2 = \u0275\u0275reference(75);
          return \u0275\u0275resetView($event.target !== file_input_1_r2 && file_input_1_r2.click());
        });
        \u0275\u0275elementStart(72, "icon");
        \u0275\u0275text(73, "cloud_upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "input", 41, 0);
        \u0275\u0275listener("change", function BookingPanelSettingsModalComponent_Template_input_change_74_listener($event) {
          return ctx.uploadImage($event, "room_image");
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(76, "div", 15)(77, "label", 42);
        \u0275\u0275text(78, "Offline Image URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 37)(80, "mat-form-field", 38);
        \u0275\u0275element(81, "input", 43);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(82, "mat-error");
        \u0275\u0275text(83, " Offline Image must be a valid URL ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "button", 44);
        \u0275\u0275listener("click", function BookingPanelSettingsModalComponent_Template_button_click_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          const file_input_2_r3 = \u0275\u0275reference(88);
          return \u0275\u0275resetView($event.target !== file_input_2_r3 && file_input_2_r3.click());
        });
        \u0275\u0275elementStart(85, "icon");
        \u0275\u0275text(86, "cloud_upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "input", 41, 1);
        \u0275\u0275listener("change", function BookingPanelSettingsModalComponent_Template_input_change_87_listener($event) {
          return ctx.uploadImage($event, "offline_image");
        });
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", "Booking Panel Settings - " + (ctx.zone.display_name || ctx.zone.name || "Organisation"))("loading", ctx.loading());
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.disable_book_now);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.disable_book_now_host);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.min_duration)("min", 0)("step", ctx.model().max_duration > 60 ? 15 : 5)("max", ctx.model().max_duration);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.max_duration)("min", ctx.model().min_duration + 15 - ctx.model().min_duration % 15)("step", 15)("max", 480);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.pending_before)("min", 0)("step", 5)("max", 60);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.pending_period)("min", 0)("step", 5)("max", 60);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.disable_end_meeting);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.enable_end_meeting_button);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_meeting_details);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_meeting_title);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.show_qr_code);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_qr_text);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.custom_qr_url);
        \u0275\u0275control();
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.custom_qr_color);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.control_ui);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.catering_ui);
        \u0275\u0275control();
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.room_image);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.uploading());
        \u0275\u0275advance(10);
        \u0275\u0275property("formField", ctx.form.offline_image);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.uploading());
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatFormField,
      MatHint,
      MatError,
      MatInputModule,
      MatInput,
      SettingsToggleComponent,
      DurationFieldComponent,
      MatDialogModule,
      FormField
    ], styles: ["\nsettings-toggle[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=booking-panel-settings-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingPanelSettingsModalComponent, [{
    type: Component,
    args: [{ selector: `booking-panel-settings-modal`, template: `
        <fullscreen-modal-shell
            [heading]="
                'Booking Panel Settings - ' +
                (zone.display_name || zone.name || 'Organisation')
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form
                class="flex flex-col space-y-4"
                (submit)="$event.preventDefault()"
            >
                <div
                    class="border-base-300 relative mb-4 flex flex-col rounded-sm border p-2"
                >
                    <h4
                        class="bg-base-100 absolute top-0 left-8 -translate-y-1/2 p-2 text-sm"
                    >
                        Booking Settings
                    </h4>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Disable booking"
                            [formField]="form.disable_book_now"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide booking host options"
                            [formField]="form.disable_book_now_host"
                        ></settings-toggle>
                    </div>
                    <div class="flex space-x-4">
                        <div class="h-20 flex-1">
                            <label
                                for="booking-panel-settings-modal-min-duration"
                                id="booking-panel-settings-modal-min-duration-label"
                                >Minimum Booking Duration</label
                            >
                            <a-duration-field
                                role="group"
                                aria-labelledby="booking-panel-settings-modal-min-duration-label"
                                [formField]="form.min_duration"
                                [min]="0"
                                [step]="model().max_duration > 60 ? 15 : 5"
                                [max]="model().max_duration"
                            ></a-duration-field>
                        </div>
                        <div class="h-20 flex-1">
                            <label
                                for="booking-panel-settings-modal-max-duration"
                                id="booking-panel-settings-modal-max-duration-label"
                                >Maximum Booking Duration</label
                            >
                            <a-duration-field
                                role="group"
                                aria-labelledby="booking-panel-settings-modal-max-duration-label"
                                [formField]="form.max_duration"
                                [min]="
                                    model().min_duration +
                                    15 -
                                    (model().min_duration % 15)
                                "
                                [step]="15"
                                [max]="480"
                            ></a-duration-field>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label
                            for="booking-panel-settings-modal-pending_before"
                            id="booking-panel-settings-modal-pending_before-label"
                            >Allow check-in before meeting</label
                        >
                        <a-duration-field
                            role="group"
                            aria-labelledby="booking-panel-settings-modal-pending_before-label"
                            [formField]="form.pending_before"
                            [min]="0"
                            [step]="5"
                            [max]="60"
                        ></a-duration-field>
                    </div>
                    <div class="flex-1">
                        <label
                            for="booking-panel-settings-modal-pending_period"
                            id="booking-panel-settings-modal-pending_period-label"
                            >Cancel not checked-in meetings after</label
                        >
                        <a-duration-field
                            role="group"
                            aria-labelledby="booking-panel-settings-modal-pending_period-label"
                            [formField]="form.pending_period"
                            [min]="0"
                            [step]="5"
                            [max]="60"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="-mx-2 flex flex-wrap items-center">
                    <settings-toggle
                        label="Disable auto-ending bookings"
                        [formField]="form.disable_end_meeting"
                        info="Disable ending the current booking early when sensors
don't detect presence in room after a period of time"
                    ></settings-toggle>
                    <settings-toggle
                        label="Show button to end booking early"
                        [formField]="form.enable_end_meeting_button"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide Meeting Details"
                        [formField]="form.hide_meeting_details"
                        info="When enabled only shows the time of the current meeting"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide Meeting Title"
                        [formField]="form.hide_meeting_title"
                        info="When enabled only shows the time and host of the current meeting"
                    ></settings-toggle>
                    <settings-toggle
                        label="Show Booking QR Code"
                        [formField]="form.show_qr_code"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide QR helper text"
                        [formField]="form.hide_qr_text"
                    ></settings-toggle>
                </div>
                <div class="mb-2">
                    <label for="booking-panel-settings-modal-custom-qr-url"
                        >Custom QR Code URL</label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            id="booking-panel-settings-modal-custom-qr-url"
                            matInput
                            placeholder="/workplace/#/book/room/?room_id=sys-123456"
                            [formField]="form.custom_qr_url"
                        />
                        <mat-error>
                            Custom QR Code URL must be a valid URL
                        </mat-error>
                        <mat-hint>
                            Custom QR Code URL will replace the default Booking
                            QR Code
                        </mat-hint>
                    </mat-form-field>
                </div>
                <div class="mb-2">
                    <label for="booking-panel-settings-modal-custom-qr-color"
                        >Custom QR Color</label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            id="booking-panel-settings-modal-custom-qr-color"
                            matInput
                            placeholder="#4A2C89"
                            [formField]="form.custom_qr_color"
                        />
                    </mat-form-field>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="booking-panel-settings-modal-control-ui"
                            >Control UI URL</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="booking-panel-settings-modal-control-ui"
                                matInput
                                [formField]="form.control_ui"
                                placeholder="https://control.example.com/..."
                            />
                            <mat-error
                                >Control UI must be a valid URL</mat-error
                            >
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="booking-panel-settings-modal-catering-ui"
                            >Catering UI URL</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="booking-panel-settings-modal-catering-ui"
                                matInput
                                [formField]="form.catering_ui"
                                placeholder="https://catering.example.com/..."
                            />
                            <mat-error>
                                Catering UI must be a valid URL
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="booking-panel-settings-modal-room-image"
                            >Room Image URL</label
                        >
                        <div class="flex space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="w-1/2 flex-1"
                            >
                                <input
                                    id="booking-panel-settings-modal-room-image"
                                    matInput
                                    placeholder="/assets/images/room_test1.png"
                                    [formField]="form.room_image"
                                />
                                <mat-error>
                                    Room Image must be a valid URL
                                </mat-error>
                            </mat-form-field>
                            <!--
                                The button is the control. The file input on top takes mouse clicks
                                and dropped files, and the button opens it for keyboard users
                            -->
                            <button
                                type="button"
                                icon
                                matRipple
                                [disabled]="uploading()"
                                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                                aria-label="Upload room image"
                                (click)="
                                    $event.target !== file_input_1 &&
                                        file_input_1.click()
                                "
                            >
                                <icon>cloud_upload</icon>
                                <input
                                    #file_input_1
                                    tabindex="-1"
                                    aria-hidden="true"
                                    type="file"
                                    class="absolute inset-0 opacity-0"
                                    (change)="uploadImage($event, 'room_image')"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="flex-1">
                        <label for="booking-panel-settings-modal-offline-image"
                            >Offline Image URL</label
                        >
                        <div class="flex space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="w-1/2 flex-1"
                            >
                                <input
                                    id="booking-panel-settings-modal-offline-image"
                                    matInput
                                    placeholder="/assets/images/offline1.png"
                                    [formField]="form.offline_image"
                                />
                                <mat-error>
                                    Offline Image must be a valid URL
                                </mat-error>
                            </mat-form-field>
                            <button
                                type="button"
                                icon
                                matRipple
                                [disabled]="uploading()"
                                class="bg-secondary text-secondary-content relative h-12 w-12 rounded-sm"
                                aria-label="Upload offline image"
                                (click)="
                                    $event.target !== file_input_2 &&
                                        file_input_2.click()
                                "
                            >
                                <icon>cloud_upload</icon>
                                <input
                                    #file_input_2
                                    tabindex="-1"
                                    aria-hidden="true"
                                    type="file"
                                    class="absolute inset-0 opacity-0"
                                    (change)="
                                        uploadImage($event, 'offline_image')
                                    "
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatRippleModule,
      IconComponent,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      MatDialogModule,
      FormField
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/booking-panel-settings-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=booking-panel-settings-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingPanelSettingsModalComponent, { className: "BookingPanelSettingsModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/booking-panel-settings-modal.component.ts", lineNumber: 361 });
})();
export {
  BookingPanelSettingsModalComponent
};
//# debugId=29c5bf58-8d84-509e-81e4-cb5e5089372e
//# sourceMappingURL=booking-panel-settings-modal.component-TLDQYJRT.js.map
