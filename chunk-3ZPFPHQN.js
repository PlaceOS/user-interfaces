import {
  GuestUser,
  toQueryString
} from "./chunk-H5RXMK2P.js";
import {
  f
} from "./chunk-KCR2XKLM.js";

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
//# debugId=d12b2d37-7898-5a62-9203-851bc3642561
//# sourceMappingURL=chunk-3ZPFPHQN.js.map
