import {
  GuestUser,
  StaffUser,
  toQueryString
} from "./chunk-YGL7BAHJ.js";
import {
  f
} from "./chunk-C5PCZO6L.js";

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
async function searchStaffByEmailPrefix(email_prefix) {
  const escaped_prefix = email_prefix.replace(/'/g, "''");
  const query = toQueryString({
    filter: `startsWith(mail,'${escaped_prefix}')`
  });
  const list = await f(`${STAFF_ENDPOINT}?${query}`);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await f(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchGuests,
  showGuest,
  searchStaff,
  searchStaffByEmailPrefix,
  showStaff
};
//# debugId=a002541f-1e08-5595-b9e2-3336b46caa67
//# sourceMappingURL=chunk-WJ53ME5C.js.map
