import {
  GuestUser,
  toQueryString
} from "./chunk-TKBUED64.js";
import {
  f
} from "./chunk-CKWNTDV3.js";

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
async function searchGuests(q) {
  const query = toQueryString({ q });
  const list = await f(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await f(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchGuests,
  showGuest
};
//# sourceMappingURL=chunk-CUL63NNE.js.map
