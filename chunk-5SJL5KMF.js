import {
  GuestUser,
  toQueryString
} from "./chunk-S4W6LJNN.js";
import {
  d
} from "./chunk-C6EHCETX.js";

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
async function searchGuests(q) {
  const query = toQueryString({ q });
  const list = await d(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await d(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchGuests,
  showGuest
};
//# sourceMappingURL=chunk-5SJL5KMF.js.map
