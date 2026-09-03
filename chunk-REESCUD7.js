import {
  StaffUser,
  toQueryString
} from "./chunk-C7WVCQQJ.js";
import {
  p
} from "./chunk-BNHBVNSC.js";

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
//# debugId=78278aa3-744b-53df-bbec-10d1e036341b
//# sourceMappingURL=chunk-REESCUD7.js.map
