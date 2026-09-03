import {
  GuestUser,
  toQueryString
} from "./chunk-C7WVCQQJ.js";
import {
  p
} from "./chunk-BNHBVNSC.js";

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
//# debugId=d12b2d37-7898-5a62-9203-851bc3642561
//# sourceMappingURL=chunk-M6MEMKNC.js.map
