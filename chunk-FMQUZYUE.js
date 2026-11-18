import {
  email,
  form,
  required,
  validate
} from "./chunk-V27H5LXC.js";
import {
  signal
} from "./chunk-D5QHX5EO.js";

// libs/users/src/lib/user.utilities.ts
var PHONE_FORMAT = /^(\+?[\d\s\-.()]+?)(?:\s*(?:x|ext\.?)\s*\d{1,6})?$/i;
function isPhoneNumber(text) {
  const number = PHONE_FORMAT.exec(text.trim())?.[1] ?? "";
  const digits = number.replace(/\D/g, "").length;
  return digits >= 6 && digits <= 15;
}
var USER_DOMAIN = "@place.tech";
function generateUserForm(user, injector) {
  if (!user) {
    throw Error("No user passed");
  }
  const model = signal(
    {
      name: user.name || "",
      email: user.email || "",
      organisation: user.organisation || "",
      phone: user.phone || "",
      assistance_required: user.assistance_required || false,
      visit_expected: user.visit_expected ?? true
    },
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  return form(model, (p) => {
    required(p.name);
    required(p.email);
    email(p.email);
    required(p.organisation);
    validate(p.phone, ({ value }) => value() && !isPhoneNumber(value()) ? { kind: "pattern" } : void 0);
  }, injector ? { injector } : void 0);
}

export {
  USER_DOMAIN,
  generateUserForm
};
//# debugId=dc8becaf-7e96-57af-ae09-937f6a501f82
//# sourceMappingURL=chunk-FMQUZYUE.js.map
