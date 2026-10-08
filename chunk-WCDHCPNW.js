import {
  GuestUser,
  toQueryString
} from "./chunk-ARBARE47.js";
import {
  _
} from "./chunk-S3P72WGT.js";

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
async function searchGuests(q) {
  const query = toQueryString({ q });
  const list = await _(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await _(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchGuests,
  showGuest
};
//# debugId=d12b2d37-7898-5a62-9203-851bc3642561
//# sourceMappingURL=chunk-WCDHCPNW.js.map
