import {
  GuestUser,
  StaffUser,
  toQueryString
} from "./chunk-A5NMZHR5.js";
import {
  f
} from "./chunk-6SUTYSMR.js";

// libs/users/src/lib/staff.fn.ts
var STAFF_ENDPOINT = "/api/staff/v1/people";
async function searchStaff(q) {
  const query = toQueryString({
    q,
    fields: [
      "id",
      "name",
      "email",
      "username",
      "organisation",
      "department"
    ].join(",")
  });
  const list = await f(`${STAFF_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await f(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`));
}

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
  showGuest,
  searchStaff,
  showStaff
};
//# sourceMappingURL=chunk-YIAP225W.js.map
