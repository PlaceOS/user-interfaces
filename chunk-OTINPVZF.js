import {
  StaffUser,
  toQueryString
} from "./chunk-3YCGTXG5.js";
import {
  p
} from "./chunk-7MJI2IHH.js";

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
  const list = await p(`${STAFF_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new StaffUser(item));
}
async function searchStaffByEmailPrefix(email_prefix) {
  const escaped_prefix = email_prefix.replace(/'/g, "''");
  const query = toQueryString({
    filter: `startsWith(mail,'${escaped_prefix}')`
  });
  const list = await p(`${STAFF_ENDPOINT}?${query}`);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await p(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchStaff,
  searchStaffByEmailPrefix,
  showStaff
};
//# sourceMappingURL=chunk-OTINPVZF.js.map
