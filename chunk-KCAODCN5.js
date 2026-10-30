import {
  email,
  form,
  required,
  validate
} from "./chunk-SQO5Y5ZU.js";
import {
  signal
} from "./chunk-UL33YUHR.js";

// libs/users/src/lib/user.utilities.ts
var PHONE_PATTERN = /^\+?(\d[\d\s\-\(\)]{5,13}\d)$/;
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
    validate(p.phone, ({ value }) => value() && !PHONE_PATTERN.test(value()) ? { kind: "pattern" } : void 0);
  }, injector ? { injector } : void 0);
}

export {
  USER_DOMAIN,
  generateUserForm
};
//# debugId=7222811a-d65a-546b-9df6-79953a203480
//# sourceMappingURL=chunk-KCAODCN5.js.map
