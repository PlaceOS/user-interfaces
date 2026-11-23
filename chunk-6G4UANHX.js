import {
  staff_exports
} from "./chunk-BUZOHFVE.js";
import {
  GuestUser,
  StaffUser,
  placeFetch,
  placeFetchJson,
  setting,
  toQueryString
} from "./chunk-7NKOJI3B.js";
import {
  orThrow
} from "./chunk-DKHUXGTD.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/users/src/lib/staff.fn.ts
var STAFF_ENDPOINT = "/api/staff/v1/people";
var STAFF_PAGES_MAX = 20;
function nextLink(header) {
  for (const part of (header || "").split(",")) {
    const match = /<([^>]*)>\s*;\s*rel="?next"?/.exec(part);
    if (match)
      return match[1];
  }
  return "";
}
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
  for (let page = 0; url && page < STAFF_PAGES_MAX; page++) {
    signal?.throwIfAborted();
    const absolute_url = new URL(url, document.baseURI);
    if (absolute_url.origin !== location.origin || absolute_url.pathname.replace(/\/$/, "") !== STAFF_ENDPOINT || visited.has(absolute_url.href)) {
      throw new Error("Invalid staff directory pagination link");
    }
    visited.add(absolute_url.href);
    const response = await placeFetch(`${absolute_url.pathname}${absolute_url.search}`, { signal });
    if (!response.ok) {
      throw Object.assign(new Error(response.statusText), {
        status: response.status
      });
    }
    const list = await response.json();
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
    url = nextLink(response.headers.get("Link"));
  }
  return users;
}
async function searchStaffByEmailPrefix(email_prefix) {
  const escaped_prefix = email_prefix.replace(/'/g, "''");
  const list = await staff_exports.query({ filter: `startsWith(mail,'${escaped_prefix}')` }).then(orThrow);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await staff_exports.show({ id }).then(orThrow));
}

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
var get = (path) => placeFetchJson(path);
async function searchGuests(q) {
  const query = toQueryString({ q });
  const list = await get(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await get(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}

export {
  searchGuests,
  showGuest,
  searchStaff,
  searchStaffByEmailPrefix,
  showStaff
};
//# debugId=5a859717-515a-5c98-ac15-6f06fd0c5b0d
//# sourceMappingURL=chunk-6G4UANHX.js.map
