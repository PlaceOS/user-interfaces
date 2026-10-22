import {
  getInvalidSignalFields,
  i18n,
  notifyError
} from "./chunk-LSVIIU5S.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/booking-invalid-fields.ts
var FIELD_LABELS = {
  date: "FORM.DATE",
  duration: "FORM.DURATION",
  title: "FORM.TITLE",
  user: "FORM.HOST",
  notes: "FORM.NOTES",
  plate_number: "BOOKINGS.PARKING_PLATE_NUMBER",
  space_restrictions: "BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE"
};
function notifyInvalidBookingFields(form, model, resource_key) {
  form().markAsTouched();
  const labels = {};
  const keys = __spreadProps(__spreadValues({}, FIELD_LABELS), {
    asset_id: resource_key,
    resources: resource_key
  });
  for (const field in keys)
    labels[field] = i18n(keys[field]);
  const fields = getInvalidSignalFields(form, model, labels);
  notifyError(i18n("FORM.INVALID_FIELDS", {
    field_list: [...new Set(fields)].join(", ")
  }));
}

export {
  notifyInvalidBookingFields
};
//# debugId=2d2ed6ac-266d-5f5b-9b59-fb581838200c
//# sourceMappingURL=chunk-YKFSR362.js.map
