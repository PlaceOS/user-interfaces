import {
  GuestUser,
  StaffUser,
  setting,
  toQueryString
} from "./chunk-ACYV7NM4.js";
import {
  Wi,
  d,
  hi
} from "./chunk-JYQPCPCB.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

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

// libs/users/src/lib/staff.fn.ts
var STAFF_ENDPOINT = "/api/staff/v1/people";
async function searchStaff(q, options = {}) {
  const { signal } = options;
  const exclude_guests = options.exclude_guests ?? setting("app.staff_search_exclude_guests") === true;
  const fields = [
    "id",
    "name",
    "email",
    "username",
    "organisation",
    "department"
  ];
  const query = toQueryString(__spreadValues({
    q,
    fields: [...fields, ...exclude_guests ? ["unmapped"] : []].join(",")
  }, exclude_guests ? { additional_fields: "userType" } : {}));
  let url = `${STAFF_ENDPOINT}${q || exclude_guests ? "?" + query : ""}`;
  const users = [];
  const visited = /* @__PURE__ */ new Set();
  const limit = 100;
  while (url) {
    signal?.throwIfAborted();
    const absolute_url = new URL(url, document.baseURI);
    if (absolute_url.origin !== location.origin || absolute_url.pathname.replace(/\/$/, "") !== STAFF_ENDPOINT || visited.has(absolute_url.href)) {
      throw new Error("Invalid staff directory pagination link");
    }
    visited.add(absolute_url.href);
    const list = await d(url);
    signal?.throwIfAborted();
    for (const item of list) {
      const user_type = item.unmapped?.userType;
      const guest = typeof user_type === "string" ? user_type.toLowerCase() === "guest" : (item.username || "").toLowerCase().includes("#ext#");
      if (exclude_guests && guest)
        continue;
      users.push(new StaffUser(item));
      if (exclude_guests && users.length >= limit)
        return users;
    }
    if (!exclude_guests)
      return users;
    const link = Wi(absolute_url.href).link;
    url = link ? hi(link).next || "" : "";
  }
  return users;
}
async function searchStaffByEmailPrefix(email_prefix) {
  const escaped_prefix = email_prefix.replace(/'/g, "''");
  const query = toQueryString({
    filter: `startsWith(mail,'${escaped_prefix}')`
  });
  const list = await d(`${STAFF_ENDPOINT}?${query}`);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await d(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchGuests,
  showGuest,
  searchStaff,
  searchStaffByEmailPrefix,
  showStaff
};
//# debugId=3c180d4f-fc3f-5545-af24-f4fb217d2dab
//# sourceMappingURL=chunk-S37FUGVJ.js.map
