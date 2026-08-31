import {
  GuestUser,
  toQueryString
} from "./chunk-3YCGTXG5.js";
import {
  p
} from "./chunk-7MJI2IHH.js";

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
async function searchGuests(q) {
  const query = toQueryString({ q });
  const list = await p(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await p(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchGuests,
  showGuest
};
//# sourceMappingURL=chunk-I2NO6JFL.js.map
