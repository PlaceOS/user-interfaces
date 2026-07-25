import {
  showGuest
} from "./chunk-BJCFGM7Y.js";
import {
  showStaff
} from "./chunk-JC2LAWYU.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-NUJFPPHE.js";

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var INFLIGHT_REQUESTS = /* @__PURE__ */ new Map();
var EMPTY_USER = {};
async function fetchUser(user_id) {
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
   */
  async transform(user_id) {
    if (!user_id)
      return EMPTY_USER;
    const user = USER_LIST.find(({ id, email }) => id === user_id || email === user_id);
    if (user)
      return user;
    const existing = INFLIGHT_REQUESTS.get(user_id);
    if (existing)
      return existing;
    const request = fetchUser(user_id).finally(() => INFLIGHT_REQUESTS.delete(user_id));
    INFLIGHT_REQUESTS.set(user_id, request);
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
//# sourceMappingURL=chunk-EGW53QGF.js.map
