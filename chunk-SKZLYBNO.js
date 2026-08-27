import {
  searchStaffByEmailPrefix,
  showGuest,
  showStaff
} from "./chunk-MW5L6XB7.js";
import {
  Pipe,
  User,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-OAKJKJVS.js";

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var INFLIGHT_REQUESTS = /* @__PURE__ */ new Map();
var EMPTY_USER = {};
async function fetchUser(user_id, lookup_mode) {
  if (lookup_mode === "email-prefix") {
    const email_prefix = user_id.split("@")[0];
    const [staff] = await searchStaffByEmailPrefix(email_prefix).catch(() => []);
    return staff ? new User({ name: staff.name, email: user_id }) : EMPTY_USER;
  }
  let user = await showStaff(user_id).catch(() => null);
  if (user) {
    USER_LIST.push(user);
    return user;
  }
  user = await showGuest(user_id).catch(() => null);
  if (user) {
    USER_LIST.push(user);
    return user;
  }
  return EMPTY_USER;
}
var UserPipe = class _UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   * @param lookup_mode Whether to match the full ID or an email prefix
   */
  async transform(user_id, lookup_mode = "exact") {
    if (!user_id)
      return EMPTY_USER;
    if (lookup_mode === "exact") {
      const user = USER_LIST.find(({ id, email }) => id === user_id || email === user_id);
      if (user)
        return user;
    }
    const lookup_key = `${lookup_mode}:${user_id}`;
    const existing = INFLIGHT_REQUESTS.get(lookup_key);
    if (existing)
      return existing;
    const request = fetchUser(user_id, lookup_mode).finally(() => INFLIGHT_REQUESTS.delete(lookup_key));
    INFLIGHT_REQUESTS.set(lookup_key, request);
    return request;
  }
  static {
    this.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

export {
  UserPipe
};
//# sourceMappingURL=chunk-SKZLYBNO.js.map
