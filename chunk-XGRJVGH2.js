import {
  StaffUser,
  toQueryString
} from "./chunk-TKBUED64.js";
import {
  f
} from "./chunk-CKWNTDV3.js";

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

export {
  searchStaff,
  showStaff
};
//# sourceMappingURL=chunk-XGRJVGH2.js.map
