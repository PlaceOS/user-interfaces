import {
  setMinutes
} from "./chunk-YLRMYCAO.js";
import {
  subMonths
} from "./chunk-VM6S4CN7.js";
import {
  subMinutes
} from "./chunk-LNNJMX3J.js";
import {
  setHours
} from "./chunk-HEZTQUUY.js";
import {
  generateMockSpace
} from "./chunk-BM6IYUTT.js";
import "./chunk-N4SBFQJR.js";
import "./chunk-JWWAAOGY.js";
import {
  subDays
} from "./chunk-GHYTEFQM.js";
import "./chunk-USTJO6RK.js";
import "./chunk-2TPDHADH.js";
import {
  Bp,
  Or,
  addDays,
  addMinutes,
  capitalizeFirstLetter,
  differenceInMinutes,
  fo,
  getUnixTime,
  isBefore,
  log,
  padLength,
  predictableRandomInt,
  randomInt,
  randomString,
  startOfDay,
  timePeriodsIntersect,
  unique
} from "./chunk-4USKPYHW.js";
import "./chunk-IR32ILQ7.js";
import "./chunk-AQIWUFR7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/mocks/src/lib/session.ts
var MOCK_SESSION_PREFIX = "PLACEOS.mock.";
var MOCK_SESSION_COOKIE = "placeos_mock_session=1";
var MAX_STORE_CHARS = 1e6;
var _stores = /* @__PURE__ */ new Map();
var _written = /* @__PURE__ */ new Map();
var _waiting = /* @__PURE__ */ new Map();
function read(key) {
  try {
    const raw = localStorage.getItem(MOCK_SESSION_PREFIX + key);
    if (raw === null)
      return void 0;
    _written.set(key, raw);
    return JSON.parse(raw);
  } catch {
    return void 0;
  }
}
function write(key, value) {
  let raw;
  try {
    raw = JSON.stringify(value);
  } catch (error) {
    log("MOCKS", `Unable to serialise session store "${key}"`, [error]);
    return;
  }
  if (raw === void 0 || _written.get(key) === raw)
    return;
  if (raw.length > MAX_STORE_CHARS) {
    log("MOCKS", `Session store "${key}" is too large to keep`, [
      raw.length
    ]);
    return;
  }
  try {
    localStorage.setItem(MOCK_SESSION_PREFIX + key, raw);
    _written.set(key, raw);
  } catch (error) {
    log("MOCKS", `Unable to keep session store "${key}"`, [error]);
  }
}
function replaceContents(target, value) {
  if (Array.isArray(target)) {
    if (Array.isArray(value))
      target.splice(0, target.length, ...value);
    return;
  }
  if (!value || typeof value !== "object" || Array.isArray(value))
    return;
  for (const key of Object.keys(target))
    delete target[key];
  Object.assign(target, value);
}
function load(key, store, value) {
  try {
    store.load(value);
  } catch (error) {
    log("MOCKS", `Unable to restore session store "${key}"`, [error]);
  }
}
function track(key, store) {
  _stores.set(key, store);
  _waiting.delete(key);
  const saved = read(key);
  if (saved !== void 0)
    load(key, store, saved);
}
function onStorage(event) {
  if (!event.key?.startsWith(MOCK_SESSION_PREFIX))
    return;
  if (event.newValue === null)
    return;
  const key = event.key.slice(MOCK_SESSION_PREFIX.length);
  const store = _stores.get(key);
  if (!store)
    return _waiting.get(key)?.();
  try {
    const value = JSON.parse(event.newValue);
    _written.set(key, event.newValue);
    load(key, store, value);
  } catch (error) {
    log("MOCKS", `Unable to read session store "${key}"`, [error]);
  }
}
function startMockSession() {
  try {
    if (!document.cookie.split("; ").includes(MOCK_SESSION_COOKIE)) {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(MOCK_SESSION_PREFIX))
          keys.push(key);
      }
      keys.forEach((key) => localStorage.removeItem(key));
      document.cookie = `${MOCK_SESSION_COOKIE};path=/;samesite=strict`;
    }
  } catch (error) {
    log("MOCKS", "Unable to start the mock session", [error]);
  }
  window.removeEventListener("storage", onStorage);
  window.addEventListener("storage", onStorage);
}
function persist(key, target, { onLoad } = {}) {
  track(key, {
    dump: () => target,
    load: (value) => {
      replaceContents(target, value);
      onLoad?.();
    }
  });
  return target;
}
var _lists = /* @__PURE__ */ new Map();
function persistById(key, list, { onLoad } = {}) {
  const dirty = /* @__PURE__ */ new Set();
  const removed = /* @__PURE__ */ new Set();
  let known = new Set(list.map((item) => `${item.id}`));
  _lists.set(key, { list, dirty });
  track(key, {
    dump: () => {
      const ids = new Set(list.map((item) => `${item.id}`));
      for (const id of known)
        if (!ids.has(id))
          removed.add(id);
      for (const id of ids) {
        if (!known.has(id))
          dirty.add(id);
        removed.delete(id);
      }
      known = ids;
      return {
        changed: list.filter((item) => dirty.has(`${item.id}`)),
        removed: [...removed]
      };
    },
    load: (value) => {
      const saved = value;
      for (const id of saved?.removed || []) {
        const index = list.findIndex((item) => `${item.id}` === id);
        if (index >= 0)
          list.splice(index, 1);
        removed.add(id);
        dirty.delete(id);
      }
      for (const item of saved?.changed || []) {
        const index = list.findIndex((i) => `${i.id}` === `${item.id}`);
        if (index >= 0)
          list.splice(index, 1, item);
        else
          list.push(item);
        dirty.add(`${item.id}`);
        removed.delete(`${item.id}`);
      }
      known = new Set(list.map((item) => `${item.id}`));
      onLoad?.();
    }
  });
  return list;
}
function markChanged(ids) {
  const keys = ids.filter((id) => id !== void 0 && id !== null);
  if (!keys.length)
    return;
  for (const { list, dirty } of _lists.values()) {
    for (const id of keys) {
      if (list.some((item) => `${item.id}` === `${id}`)) {
        dirty.add(`${id}`);
      }
    }
  }
}
function persistValue(key, get, set) {
  track(key, { dump: get, load: (value) => set(value) });
}
function whenSaved(key, start) {
  if (!_stores.has(key))
    _waiting.set(key, start);
}
function hasMockSession(key) {
  try {
    return localStorage.getItem(MOCK_SESSION_PREFIX + key) !== null;
  } catch {
    return false;
  }
}
function saveMockSession() {
  for (const [key, store] of _stores)
    write(key, store.dump());
}
function registerMockEndpoint(options) {
  const { callback } = options;
  if (options.method === "GET" || !callback) {
    return fo(options);
  }
  fo(__spreadProps(__spreadValues({}, options), {
    callback: (request) => {
      const result = callback(request);
      const items = Array.isArray(result) ? result : [result];
      markChanged([
        request.route_params?.id,
        ...items.map((item) => item?.id)
      ]);
      saveMockSession();
      return result;
    }
  }));
}
function mockId(prefix = "") {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

// libs/mocks/src/lib/api/crud.mock.ts
function registerCrudEndpoints(path, dataset, id_prefix, label) {
  const indexOf = (id) => {
    const index = dataset.findIndex((e) => e.id === id);
    if (index < 0)
      throw {
        status: 404,
        message: `Unable to find ${label} with ID ${id}`
      };
    return index;
  };
  registerMockEndpoint({
    path: `${path}/:id`,
    method: "GET",
    callback: (req) => dataset[indexOf(req.route_params.id)]
  });
  registerMockEndpoint({
    path,
    method: "POST",
    callback: (req) => {
      const item = __spreadProps(__spreadValues({}, req.body), { id: mockId(id_prefix) });
      dataset.push(item);
      return item;
    }
  });
  registerMockEndpoint({
    path: `${path}/:id`,
    method: "PUT",
    callback: (req) => {
      const item = __spreadValues({}, req.body);
      dataset.splice(indexOf(req.route_params.id), 1, item);
      return item;
    }
  });
  registerMockEndpoint({
    path: `${path}/:id`,
    method: "PATCH",
    callback: (req) => {
      const index = indexOf(req.route_params.id);
      const item = __spreadValues(__spreadValues({}, dataset[index]), req.body);
      dataset.splice(index, 1, item);
      return item;
    }
  });
  registerMockEndpoint({
    path: `${path}/:id`,
    method: "DELETE",
    callback: (req) => {
      dataset.splice(indexOf(req.route_params.id), 1);
    }
  });
}

// libs/mocks/src/lib/api/alerts.mock.ts
var BASE = "/api/engine/v2";
var MOCK_DASHBOARDS = [
  {
    id: "alert_dashboard-ops",
    name: "Building Operations",
    description: "Room and device health for the main building",
    enabled: true,
    authority_id: "mock-authority"
  }
];
var NO_CONDITIONS = { comparisons: [], time_dependents: [] };
var MOCK_ALERTS = [
  {
    id: "alert-offline",
    name: "Display offline",
    description: "A room display stopped responding",
    alert_dashboard_id: "alert_dashboard-ops",
    authority_id: "mock-authority",
    enabled: true,
    conditions: NO_CONDITIONS,
    severity: "high",
    alert_type: "status",
    debounce_period: 60,
    any_match: false
  },
  {
    id: "alert-occupancy",
    name: "Room over capacity",
    description: "People count is higher than the room capacity",
    alert_dashboard_id: "alert_dashboard-ops",
    authority_id: "mock-authority",
    enabled: true,
    conditions: NO_CONDITIONS,
    severity: "medium",
    alert_type: "threshold",
    debounce_period: 300,
    any_match: true
  }
];
function registerMockAlerts() {
  persist("alert-dashboards", MOCK_DASHBOARDS);
  persist("alerts", MOCK_ALERTS);
  registerMockEndpoint({
    path: `${BASE}/alert_dashboards`,
    method: "GET",
    callback: () => MOCK_DASHBOARDS
  });
  registerMockEndpoint({
    path: `${BASE}/alert_dashboards/:id/alerts`,
    method: "GET",
    callback: (request) => MOCK_ALERTS.filter((alert) => alert.alert_dashboard_id === request.route_params.id)
  });
  registerCrudEndpoints(`${BASE}/alert_dashboards`, MOCK_DASHBOARDS, "alert_dashboard-", "alert dashboard");
  registerMockEndpoint({
    path: `${BASE}/alerts`,
    method: "GET",
    callback: (request) => {
      const id = request.query_params?.alert_dashboard_id;
      return id ? MOCK_ALERTS.filter((alert) => alert.alert_dashboard_id === id) : MOCK_ALERTS;
    }
  });
  registerCrudEndpoints(`${BASE}/alerts`, MOCK_ALERTS, "alert-", "alert");
}

// libs/mocks/src/lib/api/applications.mock.ts
var MOCK_APPLICATIONS = [
  ["workplace", "Workplace"],
  ["concierge", "Concierge"],
  ["signage-manager", "Signage Manager"],
  ["control", "Control"],
  ["stagehand", "Stagehand"]
].map(([path, name]) => ({
  id: `oauth-app-${path}`,
  name,
  uid: `mock-${path}`,
  owner_id: "mock-authority",
  scopes: "public",
  redirect_uri: `${location.origin}/${path}/oauth-resp.html`,
  confidential: false,
  skip_authorization: true,
  subsystems: [],
  preserve_client_id: false
}));
function registerMockApplications() {
  registerMockEndpoint({
    path: "/api/engine/v2/oauth_apps",
    method: "GET",
    callback: () => MOCK_APPLICATIONS
  });
}

// libs/mocks/src/lib/api/common.mock.ts
var DOMAIN = "place.tech";

// libs/mocks/src/lib/api/users.data.ts
var REALISTIC_STAFF_PROFILES = [
  {
    first_name: "Sarah",
    last_name: "Chen",
    department: "Engineering",
    title: "Senior Software Engineer",
    location: "Sydney"
  },
  {
    first_name: "Michael",
    last_name: "Rodriguez",
    department: "Product",
    title: "Product Manager",
    location: "Melbourne"
  },
  {
    first_name: "Emily",
    last_name: "Johnson",
    department: "Design",
    title: "UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "David",
    last_name: "Park",
    department: "Engineering",
    title: "Technical Lead",
    location: "Sydney"
  },
  {
    first_name: "Jessica",
    last_name: "Thompson",
    department: "Marketing",
    title: "Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Alex",
    last_name: "Kumar",
    department: "Sales",
    title: "Account Executive",
    location: "Adelaide"
  },
  {
    first_name: "Rachel",
    last_name: "Williams",
    department: "Human Resources",
    title: "HR Business Partner",
    location: "Sydney"
  },
  {
    first_name: "James",
    last_name: "O'Connor",
    department: "Finance",
    title: "Financial Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Lisa",
    last_name: "Zhang",
    department: "Operations",
    title: "Operations Manager",
    location: "Sydney"
  },
  {
    first_name: "Tom",
    last_name: "Mitchell",
    department: "Engineering",
    title: "DevOps Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Amanda",
    last_name: "Foster",
    department: "Customer Success",
    title: "Customer Success Manager",
    location: "Melbourne"
  },
  {
    first_name: "Chris",
    last_name: "Anderson",
    department: "IT",
    title: "IT Administrator",
    location: "Perth"
  },
  {
    first_name: "Priya",
    last_name: "Sharma",
    department: "Research & Development",
    title: "Research Scientist",
    location: "Sydney"
  },
  {
    first_name: "Mark",
    last_name: "Davis",
    department: "Sales",
    title: "Sales Manager",
    location: "Adelaide"
  },
  {
    first_name: "Sophie",
    last_name: "Taylor",
    department: "Design",
    title: "Senior UX Designer",
    location: "Melbourne"
  },
  {
    first_name: "Daniel",
    last_name: "Lee",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Olivia",
    last_name: "Brown",
    department: "Marketing",
    title: "Content Creator",
    location: "Sydney"
  },
  {
    first_name: "Ryan",
    last_name: "Wilson",
    department: "Product",
    title: "Business Analyst",
    location: "Perth"
  },
  {
    first_name: "Grace",
    last_name: "Martinez",
    department: "Legal",
    title: "Legal Counsel",
    location: "Melbourne"
  },
  {
    first_name: "Ben",
    last_name: "Clarke",
    department: "Engineering",
    title: "Quality Assurance Engineer",
    location: "Sydney"
  },
  // Additional staff profiles to reach 80 total
  {
    first_name: "Natasha",
    last_name: "Petrov",
    department: "Engineering",
    title: "Senior Developer",
    location: "Melbourne"
  },
  {
    first_name: "Carlos",
    last_name: "Silva",
    department: "Sales",
    title: "Sales Manager",
    location: "Sydney"
  },
  {
    first_name: "Maya",
    last_name: "Patel",
    department: "Design",
    title: "UI/UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "Jacob",
    last_name: "Nielsen",
    department: "Marketing",
    title: "Digital Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Isabella",
    last_name: "Romano",
    department: "Human Resources",
    title: "HR Manager",
    location: "Adelaide"
  },
  {
    first_name: "Hassan",
    last_name: "Ahmed",
    department: "Finance",
    title: "Senior Financial Analyst",
    location: "Sydney"
  },
  {
    first_name: "Elena",
    last_name: "Popov",
    department: "Operations",
    title: "Operations Coordinator",
    location: "Melbourne"
  },
  {
    first_name: "Nathan",
    last_name: "Campbell",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Zoe",
    last_name: "Walker",
    department: "Product",
    title: "Product Owner",
    location: "Perth"
  },
  {
    first_name: "Adrian",
    last_name: "Kowalski",
    department: "IT",
    title: "Systems Administrator",
    location: "Adelaide"
  },
  {
    first_name: "Samantha",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Success Specialist",
    location: "Sydney"
  },
  {
    first_name: "Lucas",
    last_name: "Garcia",
    department: "Research & Development",
    title: "Data Scientist",
    location: "Melbourne"
  },
  {
    first_name: "Aisha",
    last_name: "Johnson",
    department: "Legal",
    title: "Compliance Officer",
    location: "Brisbane"
  },
  {
    first_name: "Marcus",
    last_name: "Stone",
    department: "Engineering",
    title: "Technical Lead",
    location: "Perth"
  },
  {
    first_name: "Lily",
    last_name: "Watson",
    department: "Design",
    title: "Graphic Designer",
    location: "Adelaide"
  },
  {
    first_name: "Oscar",
    last_name: "Murphy",
    department: "Sales",
    title: "Business Development Manager",
    location: "Sydney"
  },
  {
    first_name: "Chloe",
    last_name: "Edwards",
    department: "Marketing",
    title: "Marketing Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Ethan",
    last_name: "Roberts",
    department: "Finance",
    title: "Budget Analyst",
    location: "Brisbane"
  },
  {
    first_name: "Mia",
    last_name: "Turner",
    department: "Human Resources",
    title: "Talent Acquisition Specialist",
    location: "Perth"
  },
  {
    first_name: "Logan",
    last_name: "Phillips",
    department: "Operations",
    title: "Process Improvement Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Aria",
    last_name: "Cooper",
    department: "Engineering",
    title: "Frontend Developer",
    location: "Sydney"
  },
  {
    first_name: "Felix",
    last_name: "Morgan",
    department: "Product",
    title: "Product Marketing Manager",
    location: "Melbourne"
  },
  {
    first_name: "Ruby",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Account Manager",
    location: "Brisbane"
  },
  {
    first_name: "Caleb",
    last_name: "Reed",
    department: "IT",
    title: "Network Engineer",
    location: "Perth"
  },
  {
    first_name: "Luna",
    last_name: "Howard",
    department: "Design",
    title: "Product Designer",
    location: "Adelaide"
  },
  {
    first_name: "Mason",
    last_name: "Cox",
    department: "Research & Development",
    title: "Machine Learning Engineer",
    location: "Sydney"
  },
  {
    first_name: "Hazel",
    last_name: "Ward",
    department: "Legal",
    title: "Contract Manager",
    location: "Melbourne"
  },
  {
    first_name: "Theo",
    last_name: "Torres",
    department: "Sales",
    title: "Account Executive",
    location: "Brisbane"
  },
  {
    first_name: "Violet",
    last_name: "Peterson",
    department: "Marketing",
    title: "Brand Manager",
    location: "Perth"
  },
  {
    first_name: "Julian",
    last_name: "Gray",
    department: "Finance",
    title: "Tax Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Nova",
    last_name: "James",
    department: "Human Resources",
    title: "Learning & Development Coordinator",
    location: "Sydney"
  },
  {
    first_name: "Blake",
    last_name: "Watson",
    department: "Operations",
    title: "Supply Chain Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ivy",
    last_name: "Brooks",
    department: "Engineering",
    title: "Backend Developer",
    location: "Brisbane"
  },
  {
    first_name: "Axel",
    last_name: "Fisher",
    department: "Product",
    title: "Technical Writer",
    location: "Perth"
  },
  {
    first_name: "Sage",
    last_name: "Bennett",
    department: "Customer Success",
    title: "Implementation Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Kai",
    last_name: "Powell",
    department: "IT",
    title: "Security Analyst",
    location: "Sydney"
  },
  {
    first_name: "Raven",
    last_name: "Long",
    department: "Design",
    title: "Creative Director",
    location: "Melbourne"
  },
  {
    first_name: "Phoenix",
    last_name: "Hughes",
    department: "Research & Development",
    title: "Research Engineer",
    location: "Brisbane"
  },
  {
    first_name: "River",
    last_name: "Price",
    department: "Legal",
    title: "Intellectual Property Lawyer",
    location: "Perth"
  },
  {
    first_name: "Atlas",
    last_name: "Sanders",
    department: "Sales",
    title: "Regional Sales Director",
    location: "Adelaide"
  },
  {
    first_name: "Willow",
    last_name: "Ross",
    department: "Marketing",
    title: "Social Media Manager",
    location: "Sydney"
  },
  {
    first_name: "Orion",
    last_name: "Morris",
    department: "Finance",
    title: "Investment Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ember",
    last_name: "Rogers",
    department: "Human Resources",
    title: "Organizational Development Specialist",
    location: "Brisbane"
  },
  {
    first_name: "Juno",
    last_name: "Reed",
    department: "Operations",
    title: "Quality Assurance Manager",
    location: "Perth"
  },
  {
    first_name: "Zara",
    last_name: "Cook",
    department: "Engineering",
    title: "Mobile Developer",
    location: "Adelaide"
  },
  {
    first_name: "Leo",
    last_name: "Morgan",
    department: "Product",
    title: "UX Researcher",
    location: "Sydney"
  },
  {
    first_name: "Iris",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Training Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Finn",
    last_name: "Rivera",
    department: "IT",
    title: "Database Administrator",
    location: "Brisbane"
  },
  {
    first_name: "Aurora",
    last_name: "Cooper",
    department: "Design",
    title: "Motion Graphics Designer",
    location: "Perth"
  },
  {
    first_name: "Xavier",
    last_name: "Richardson",
    department: "Research & Development",
    title: "AI Research Scientist",
    location: "Adelaide"
  },
  {
    first_name: "Skye",
    last_name: "Cox",
    department: "Legal",
    title: "Privacy Officer",
    location: "Sydney"
  },
  {
    first_name: "Knox",
    last_name: "Howard",
    department: "Sales",
    title: "Enterprise Sales Manager",
    location: "Melbourne"
  },
  {
    first_name: "Luna",
    last_name: "Ward",
    department: "Marketing",
    title: "Event Marketing Manager",
    location: "Brisbane"
  },
  {
    first_name: "Sage",
    last_name: "Torres",
    department: "Finance",
    title: "Risk Analyst",
    location: "Perth"
  },
  {
    first_name: "Phoenix",
    last_name: "Peterson",
    department: "Human Resources",
    title: "Employee Relations Specialist",
    location: "Adelaide"
  },
  {
    first_name: "River",
    last_name: "Gray",
    department: "Operations",
    title: "Facilities Manager",
    location: "Sydney"
  },
  {
    first_name: "Atlas",
    last_name: "James",
    department: "Engineering",
    title: "Cloud Architect",
    location: "Melbourne"
  },
  {
    first_name: "Willow",
    last_name: "Watson",
    department: "Product",
    title: "Product Strategy Manager",
    location: "Brisbane"
  },
  {
    first_name: "Orion",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Operations Manager",
    location: "Perth"
  },
  {
    first_name: "Ember",
    last_name: "Fisher",
    department: "IT",
    title: "DevOps Manager",
    location: "Adelaide"
  },
  {
    first_name: "Juno",
    last_name: "Bennett",
    department: "Design",
    title: "Brand Designer",
    location: "Sydney"
  },
  {
    first_name: "Nova",
    last_name: "Powell",
    department: "Research & Development",
    title: "Technology Innovation Manager",
    location: "Melbourne"
  },
  {
    first_name: "Blake",
    last_name: "Long",
    department: "Legal",
    title: "Regulatory Affairs Manager",
    location: "Brisbane"
  },
  {
    first_name: "Ivy",
    last_name: "Hughes",
    department: "Sales",
    title: "Channel Partner Manager",
    location: "Perth"
  },
  {
    first_name: "Axel",
    last_name: "Price",
    department: "Marketing",
    title: "Growth Marketing Manager",
    location: "Adelaide"
  }
];
var VISITOR_PROFILES = [
  {
    first_name: "Jennifer",
    last_name: "Adams",
    company: "TechCorp Australia",
    purpose: "Business Partnership Meeting"
  },
  {
    first_name: "Robert",
    last_name: "Hayes",
    company: "Global Innovations Pty Ltd",
    purpose: "Product Demo"
  },
  {
    first_name: "Maria",
    last_name: "Gonzalez",
    company: "Digital Solutions Group",
    purpose: "Contract Negotiation"
  },
  {
    first_name: "Kevin",
    last_name: "Turner",
    company: "Innovation Labs",
    purpose: "Technical Consultation"
  },
  {
    first_name: "Catherine",
    last_name: "Moore",
    company: "Future Systems",
    purpose: "Strategic Planning"
  },
  {
    first_name: "Steven",
    last_name: "White",
    company: "Advanced Technologies",
    purpose: "Vendor Assessment"
  },
  {
    first_name: "Nicole",
    last_name: "Campbell",
    company: "Smart Solutions Ltd",
    purpose: "Project Review"
  },
  {
    first_name: "Brian",
    last_name: "Scott",
    company: "NextGen Industries",
    purpose: "Investment Discussion"
  },
  {
    first_name: "Michelle",
    last_name: "Green",
    company: "Dynamic Enterprises",
    purpose: "Collaboration Meeting"
  },
  {
    first_name: "Jason",
    last_name: "Hill",
    company: "Creative Solutions Inc",
    purpose: "Design Review"
  },
  {
    first_name: "Laura",
    last_name: "King",
    company: "Enterprise Partners",
    purpose: "Partnership Proposal"
  },
  {
    first_name: "Andrew",
    last_name: "Wright",
    company: "Strategic Consulting",
    purpose: "Business Consultation"
  },
  {
    first_name: "Rebecca",
    last_name: "Lopez",
    company: "Business Development Co",
    purpose: "Market Analysis"
  },
  {
    first_name: "Paul",
    last_name: "Young",
    company: "Market Leaders Group",
    purpose: "Industry Insights"
  },
  // Additional visitor profiles to create 20 total guests
  {
    first_name: "Douglas",
    last_name: "Chen",
    company: "Quantum Dynamics",
    purpose: "R&D Collaboration"
  },
  {
    first_name: "Victoria",
    last_name: "Singh",
    company: "Digital Innovation Hub",
    purpose: "Technology Transfer"
  },
  {
    first_name: "Timothy",
    last_name: "O'Brien",
    company: "CloudTech Solutions",
    purpose: "Infrastructure Review"
  },
  {
    first_name: "Angela",
    last_name: "Martinez",
    company: "Data Analytics Corp",
    purpose: "Analytics Partnership"
  },
  {
    first_name: "Gordon",
    last_name: "Thompson",
    company: "Venture Capital Partners",
    purpose: "Investment Evaluation"
  },
  {
    first_name: "Patricia",
    last_name: "Wilson",
    company: "Sustainability Solutions",
    purpose: "ESG Consultation"
  }
];
var ACTIVE_USER = {
  id: "current",
  name: "Sarah Chen",
  email: "sarah.chen@place.tech",
  first_name: "Sarah",
  last_name: "Chen",
  department: "Engineering",
  title: "Senior Software Engineer",
  location: "Sydney",
  groups: ["staff", "engineering", "senior"],
  sys_admin: true,
  phone: "+61 2 9876 5432",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b9ce2c62?w=150&h=150&fit=crop&crop=face"
};
var MOCK_STAFF = REALISTIC_STAFF_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase().replace(/'/g, "")}`;
  const isManager = profile.title.toLowerCase().includes("manager") || profile.title.toLowerCase().includes("lead") || profile.title.toLowerCase().includes("senior");
  return {
    id: `staff-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${DOMAIN}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    department: profile.department,
    title: profile.title,
    location: profile.location,
    groups: [
      "staff",
      profile.department.toLowerCase().replace(/\s+/g, "-"),
      ...isManager ? ["manager"] : []
    ],
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    avatar: `https://images.unsplash.com/photo-${15e11 + i * 1e6}?w=150&h=150&fit=crop&crop=face`,
    extension_data: {
      employee_id: `EMP${String(i + 1).padStart(4, "0")}`,
      start_date: new Date(2020 + predictableRandomInt(4), predictableRandomInt(12), predictableRandomInt(28) + 1).toISOString(),
      manager_id: isManager ? null : `staff-${predictableRandomInt(5) + 1}`
    }
  };
}).concat([ACTIVE_USER]);
var MOCK_GUESTS = VISITOR_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase()}`;
  const companyDomain = profile.company.toLowerCase().replace(/\s+/g, "").replace(/pty.*ltd|ltd|inc|corp|group|co/gi, "").slice(0, 12) + ".com";
  return {
    id: `guest-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${companyDomain}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    company: profile.company,
    purpose: profile.purpose,
    visit_expected: predictableRandomInt(99999) % 3 !== 0,
    // 66% expected
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    extension_data: __spreadValues(__spreadValues({
      visitor_type: predictableRandomInt(99999) % 4 === 0 ? "VIP" : "Standard",
      host_id: `staff-${predictableRandomInt(REALISTIC_STAFF_PROFILES.length) + 1}`,
      requirements: predictableRandomInt(99999) % 5 === 0 ? "Wheelchair accessible" : null,
      parking_required: predictableRandomInt(99999) % 3 === 0
    }, predictableRandomInt(99999) % 4 === 0 ? {
      vaccination_proof: {
        url: "https://fonts.gstatic.com/s/i/materialicons/verified/v11/24px.svg",
        verified: true
      }
    } : {}), predictableRandomInt(99999) % 3 === 0 ? {
      id_data: {
        url: "https://fonts.gstatic.com/s/i/materialicons/fingerprint/v12/24px.svg",
        type: "Driver License",
        verified: true
      }
    } : {})
  };
});

// libs/mocks/src/lib/api/zone.data.ts
var MOCK_ORGS = [
  {
    id: "zone-org",
    created_at: getUnixTime(subMonths(Date.now(), 24)),
    updated_at: getUnixTime(subMonths(Date.now(), 1)),
    name: "PlaceOS Global",
    display_name: "PlaceOS Global",
    description: "Global headquarters and innovation centers for PlaceOS technology solutions",
    tags: ["org", "headquarters", "technology"],
    count: 2,
    // Number of regions
    capacity: 4500,
    // Total capacity across all buildings
    parent_id: "",
    triggers: [],
    settings: {
      timezone: "Australia/Sydney",
      booking_rules: {
        advance_booking_days: 90,
        max_booking_duration: 8 * 60,
        // 8 hours
        auto_release_minutes: 15
      },
      work_hours: {
        start: "07:00",
        end: "19:00",
        days: [1, 2, 3, 4, 5]
        // Monday to Friday
      },
      features: [
        "wifi",
        "parking",
        "accessibility",
        "catering",
        "security"
      ]
    },
    contact: {
      email: "facilities@place.tech",
      phone: "+61 2 8765 4321",
      address: "Sydney Technology Park, NSW, Australia"
    },
    metadata: {
      founded: 2018,
      employee_count: 1200,
      sustainability_rating: "A+",
      certifications: [
        "Green Building Council",
        "ISO 14001",
        "LEED Platinum"
      ]
    }
  }
];
var MOCK_REGIONS = [
  {
    id: "region-sydney",
    created_at: getUnixTime(subMonths(Date.now(), 18)),
    updated_at: getUnixTime(subMonths(Date.now(), 2)),
    name: "Sydney Region",
    display_name: "Sydney Metropolitan Region",
    description: "Primary business region covering Sydney and surrounding areas",
    tags: ["region", "sydney", "metropolitan"],
    count: 3,
    // Number of buildings
    capacity: 2700,
    parent_id: "zone-org",
    triggers: [],
    settings: {
      timezone: "Australia/Sydney",
      region_code: "SYD",
      business_hours: {
        start: "07:00",
        end: "19:00",
        timezone: "Australia/Sydney"
      }
    },
    contact: {
      email: "sydney@place.tech",
      phone: "+61 2 8765 4322",
      address: "Sydney, NSW, Australia"
    },
    boundaries: {
      north: -33.5,
      south: -34.2,
      east: 151.5,
      west: 150.5
    }
  },
  {
    id: "region-melbourne",
    created_at: getUnixTime(subMonths(Date.now(), 15)),
    updated_at: getUnixTime(subMonths(Date.now(), 1)),
    name: "Melbourne Region",
    display_name: "Melbourne Metropolitan Region",
    description: "Secondary business region covering Melbourne and Victoria",
    tags: ["region", "melbourne", "metropolitan"],
    count: 2,
    // Number of buildings
    capacity: 1800,
    parent_id: "zone-org",
    triggers: [],
    settings: {
      timezone: "Australia/Melbourne",
      region_code: "MEL",
      business_hours: {
        start: "07:30",
        end: "19:30",
        timezone: "Australia/Melbourne"
      }
    },
    contact: {
      email: "melbourne@place.tech",
      phone: "+61 3 8765 4323",
      address: "Melbourne, VIC, Australia"
    },
    boundaries: {
      north: -37.5,
      south: -38.2,
      east: 145.5,
      west: 144.5
    }
  }
];
var MOCK_BUILDINGS = [
  {
    id: "bld-01",
    name: "Innovation Hub",
    display_name: "Innovation Hub",
    description: "Modern workspace focused on collaboration and innovation with state-of-the-art facilities",
    tags: ["building", "innovation", "modern", "headquarters"],
    count: 4,
    // Number of levels (including parking)
    capacity: 1200,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2", "lvl-P1"],
    address: {
      street: "123 Technology Drive",
      suburb: "Sydney Olympic Park",
      state: "NSW",
      postcode: "2127",
      country: "Australia",
      coordinates: {
        lat: -33.8473,
        lng: 151.0647
      }
    },
    features: {
      parking_spaces: 300,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: true,
      ev_charging: 20,
      security_level: "high"
    },
    building_details: {
      year_built: 2020,
      architect: "Foster + Partners",
      total_floors: 12,
      basement_levels: 2,
      floor_area_sqm: 8500,
      energy_rating: "6 Star Green Star",
      construction_type: "Steel frame with glass facade",
      elevator_count: 4,
      stair_count: 3
    }
  },
  {
    id: "bld-02",
    name: "Executive Center",
    display_name: "Executive Center",
    description: "Premium business center with executive suites, boardrooms, and high-end meeting facilities",
    tags: ["building", "executive", "premium", "business"],
    count: 5,
    capacity: 800,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-2", "lvl-3", "lvl-4", "lvl-P1"],
    address: {
      street: "456 Collins Street",
      suburb: "Sydney CBD",
      state: "NSW",
      postcode: "2000",
      country: "Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: false,
      shower_facilities: true,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 15,
      security_level: "premium"
    },
    building_details: {
      year_built: 2018,
      architect: "Woods Bagot",
      total_floors: 25,
      basement_levels: 3,
      floor_area_sqm: 6200,
      energy_rating: "5 Star NABERS",
      construction_type: "Reinforced concrete with marble facade",
      elevator_count: 6,
      stair_count: 2
    }
  },
  {
    id: "bld-03",
    name: "Creative Campus",
    display_name: "Creative Campus",
    description: "Flexible workspace designed for creative teams with open collaboration areas and maker spaces",
    tags: ["building", "creative", "flexible", "collaboration"],
    count: 3,
    capacity: 500,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-M", "lvl-1"],
    address: {
      street: "789 Creative Boulevard",
      suburb: "Pyrmont",
      state: "NSW",
      postcode: "2009",
      country: "Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.1957
      }
    },
    features: {
      parking_spaces: 150,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: true,
      ev_charging: 25,
      security_level: "standard"
    },
    building_details: {
      year_built: 2021,
      architect: "BVN Architecture",
      total_floors: 8,
      basement_levels: 1,
      floor_area_sqm: 4800,
      energy_rating: "6 Star Green Star",
      construction_type: "Timber and steel hybrid with living walls",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-04",
    name: "Melbourne Tower",
    display_name: "Melbourne Tower",
    description: "High-rise office building in Melbourne CBD with premium corporate facilities",
    tags: ["building", "corporate", "high-rise", "premium"],
    count: 6,
    capacity: 1e3,
    parent_id: "region-melbourne",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2", "lvl-3", "lvl-4", "lvl-P1"],
    address: {
      street: "100 Collins Street",
      suburb: "Melbourne",
      state: "VIC",
      postcode: "3000",
      country: "Australia",
      coordinates: {
        lat: -37.8136,
        lng: 144.9631
      }
    },
    features: {
      parking_spaces: 250,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: false,
      ev_charging: 30,
      security_level: "high"
    },
    building_details: {
      year_built: 2019,
      architect: "Hassell",
      total_floors: 35,
      basement_levels: 4,
      floor_area_sqm: 12e3,
      energy_rating: "5 Star Green Star",
      construction_type: "Steel and glass with sustainable features",
      elevator_count: 8,
      stair_count: 4
    }
  },
  {
    id: "bld-05",
    name: "Melbourne Innovation Lab",
    display_name: "Melbourne Innovation Lab",
    description: "State-of-the-art research and development facility with collaborative workspaces",
    tags: ["building", "innovation", "research", "lab"],
    count: 3,
    capacity: 800,
    parent_id: "region-melbourne",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2"],
    address: {
      street: "250 Exhibition Street",
      suburb: "Melbourne",
      state: "VIC",
      postcode: "3000",
      country: "Australia",
      coordinates: {
        lat: -37.8103,
        lng: 144.9717
      }
    },
    features: {
      parking_spaces: 180,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: true,
      ev_charging: 20,
      security_level: "high"
    },
    building_details: {
      year_built: 2022,
      architect: "ARM Architecture",
      total_floors: 8,
      basement_levels: 1,
      floor_area_sqm: 7500,
      energy_rating: "6 Star Green Star",
      construction_type: "Cross-laminated timber and steel",
      elevator_count: 3,
      stair_count: 2
    }
  }
];
var MOCK_ZONES = [];
var createMockLevel = (id, idx, building, levelCode = "1") => {
  const levelNumber = levelCode === "G" ? 0 : levelCode === "M" ? 0.5 : levelCode.startsWith("P") ? -parseInt(levelCode.substring(1)) : parseInt(levelCode) || 1;
  const isGroundFloor = levelCode === "G";
  const isMezzanine = levelCode === "M";
  const isParkingLevel = levelCode.startsWith("P");
  let levelType = "office";
  if (isParkingLevel)
    levelType = "parking";
  else if (isGroundFloor)
    levelType = "lobby";
  else if (isMezzanine)
    levelType = "mixed-use";
  const capacityByType = {
    parking: 0,
    lobby: 50,
    "mixed-use": Math.floor(building.capacity * 0.2),
    office: Math.floor(building.capacity * 0.4)
  };
  const levelName = isParkingLevel ? `Parking Level ${levelCode.substring(1)}` : isGroundFloor ? "Ground Floor" : isMezzanine ? "Mezzanine" : `Level ${levelCode}`;
  const displayName = levelName;
  const features = [];
  if (isGroundFloor)
    features.push("reception", "lobby", "cafe", "security");
  if (isMezzanine)
    features.push("meeting-rooms", "break-areas", "informal-seating");
  if (levelType === "office")
    features.push("workstations", "meeting-rooms", "collaboration-spaces");
  if (isParkingLevel)
    features.push("parking", "ev-charging", "bike-storage");
  return {
    id: `${building.id}_${id}`,
    name: levelName,
    display_name: displayName,
    parent_id: building.id,
    description: `${levelName} of ${building.name} featuring ${features.join(", ")}`,
    tags: ["level", levelType, building.tags[1]].filter(Boolean),
    map_id: `assets/maps/level_${levelCode}.svg`,
    code: `${building.name.substring(0, 3).toUpperCase()}-${levelCode}`,
    type: levelType,
    count: predictableRandomInt(15, 5),
    // Number of spaces/rooms
    capacity: capacityByType[levelType] || Math.floor(building.capacity * 0.3),
    location: `${building.address.coordinates.lat},${building.address.coordinates.lng}`,
    level_number: levelNumber,
    floor_area_sqm: Math.floor(building.building_details.floor_area_sqm / building.count),
    ceiling_height: levelType === "lobby" ? 4.5 : isParkingLevel ? 2.4 : 2.8,
    features,
    accessibility: {
      wheelchair_accessible: true,
      elevator_access: !isParkingLevel || building.building_details.elevator_count > 0,
      accessible_bathrooms: levelType !== "parking",
      hearing_loop: isGroundFloor || levelType === "office"
    },
    utilities: {
      power_outlets: levelType === "office" ? "extensive" : "standard",
      data_points: levelType === "office" ? "fiber_optic" : "standard",
      hvac_zones: Math.ceil((capacityByType[levelType] || 50) / 50),
      fire_safety: "compliant",
      security_systems: building.features.security_level
    },
    spaces: {
      meeting_rooms: levelType === "office" ? predictableRandomInt(8, 3) : isMezzanine ? predictableRandomInt(4, 2) : 0,
      workstations: levelType === "office" ? Math.floor((capacityByType[levelType] || 0) * 0.8) : 0,
      break_areas: levelType !== "parking" ? predictableRandomInt(3, 1) : 0,
      storage_rooms: predictableRandomInt(4, 1),
      bathrooms: isParkingLevel ? 1 : predictableRandomInt(4, 2),
      parking_spaces: isParkingLevel ? Math.floor(building.features.parking_spaces / 2) : 0
    },
    created_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(36, 6))),
    updated_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(3, 0))),
    settings: {
      booking_enabled: levelType !== "parking",
      public_access: isGroundFloor,
      after_hours_access: levelType === "office" ? "keycard" : "restricted",
      temperature_range: {
        min: 20,
        max: 26
      },
      lighting: {
        type: levelType === "office" ? "LED with daylight sensors" : "LED standard",
        zones: Math.ceil((capacityByType[levelType] || 30) / 30)
      }
    },
    maintenance: {
      last_inspection: getUnixTime(subMonths(Date.now(), predictableRandomInt(6, 1))),
      next_inspection: getUnixTime(new Date(Date.now() + predictableRandomInt(90, 30) * 24 * 60 * 60 * 1e3)),
      cleaning_schedule: isParkingLevel ? "weekly" : "daily",
      maintenance_contact: "Facilities Management"
    }
  };
};
var MOCK_LEVELS = MOCK_BUILDINGS.map((bld) => bld.levels.map((level, idx) => createMockLevel(level, idx, bld, level.split("-")[1]))).reduce((prev, current) => prev.concat(current), []);

// libs/mocks/src/lib/api/assets.data.ts
var MOCK_CATEGORIES = [
  {
    id: "1",
    name: "Technology",
    description: "Electronic devices and computing equipment"
  },
  {
    id: "2",
    name: "Furniture",
    description: "Office furniture and workspace equipment"
  },
  {
    id: "3",
    name: "Audio Visual",
    description: "Presentation and meeting room equipment"
  },
  {
    id: "4",
    name: "Office Supplies",
    description: "Stationery and consumable items"
  },
  {
    id: "5",
    name: "Kitchen & Catering",
    description: "Kitchen appliances and catering equipment"
  },
  {
    id: "6",
    name: "Wellness & Safety",
    description: "Health, safety, and wellness equipment"
  },
  {
    id: "7",
    name: "Mobility",
    description: "Transportation and mobility aids"
  },
  {
    id: "8",
    name: "Cleaning & Maintenance",
    description: "Cleaning supplies and maintenance tools"
  },
  {
    id: "_parking_category_",
    name: "_PARKING_",
    description: "Parking spaces",
    hidden: true
  },
  {
    id: "_catering_category_",
    name: "_CATERING_",
    description: "Catering menu items",
    hidden: true
  }
];
var MOCK_PRODUCTS = [
  {
    id: "_catering_standalone_type_",
    name: "CATERING:_STANDALONE_",
    category_id: "_catering_category_",
    brand: "PlaceOS"
  },
  {
    id: "_catering_acme_type_",
    name: "CATERING:Acme Catering",
    category_id: "_catering_category_",
    brand: "PlaceOS"
  },
  // Technology
  {
    id: "1",
    name: 'iPad Pro 12.9"',
    category_id: "1",
    brand: "Apple",
    barcode: "APL-IPD-PRO-12",
    model: "MHNK3X/A",
    description: "Latest generation iPad Pro with M2 chip, perfect for presentations and digital collaboration",
    specifications: {
      screen_size: "12.9 inch",
      storage: "256GB",
      connectivity: "Wi-Fi + Cellular",
      color: "Space Gray"
    }
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    category_id: "1",
    brand: "Apple",
    barcode: "APL-IPH-14P",
    model: "MQ0G3X/A",
    description: "Professional smartphone for business communications and mobile productivity",
    specifications: {
      storage: "128GB",
      color: "Deep Purple",
      connectivity: "5G"
    }
  },
  {
    id: "3",
    name: 'MacBook Pro 16"',
    category_id: "1",
    brand: "Apple",
    barcode: "APL-MBP-16",
    model: "MK1E3X/A",
    description: "High-performance laptop for development and creative work",
    specifications: {
      processor: "M2 Pro",
      memory: "16GB",
      storage: "512GB SSD",
      color: "Space Gray"
    }
  },
  {
    id: "4",
    name: "Surface Pro 9",
    category_id: "1",
    brand: "Microsoft",
    barcode: "MSF-SP9-256",
    model: "QEZ-00001",
    description: "2-in-1 tablet and laptop for versatile productivity",
    specifications: {
      processor: "Intel Core i5",
      memory: "8GB",
      storage: "256GB SSD"
    }
  },
  {
    id: "5",
    name: "Wireless Presenter Remote",
    category_id: "1",
    brand: "Logitech",
    barcode: "LOG-R400",
    model: "R400",
    description: "Professional wireless presenter with laser pointer and intuitive controls"
  },
  // Furniture
  {
    id: "6",
    name: "Aeron Chair",
    category_id: "2",
    brand: "Herman Miller",
    barcode: "HM-AER-B",
    model: "AE113AWBPJG1C7",
    description: "Ergonomic office chair with advanced lumbar support and breathable mesh",
    specifications: {
      size: "Size B (Medium)",
      color: "Graphite",
      material: "Pellicle mesh",
      adjustments: "Full feature"
    }
  },
  {
    id: "7",
    name: "Standing Desk Converter",
    category_id: "2",
    brand: "Varidesk",
    barcode: "VAR-SD36",
    model: "Pro Plus 36",
    description: "Height-adjustable desk converter for ergonomic workspace flexibility",
    specifications: {
      width: "36 inches",
      weight_capacity: "35 lbs",
      height_range: '11.5" - 15.5"'
    }
  },
  {
    id: "8",
    name: "Modular Sofa System",
    category_id: "2",
    brand: "Steelcase",
    barcode: "STC-MSS-3",
    model: "Gesture Lounge",
    description: "Flexible seating solution for collaborative spaces and break areas"
  },
  {
    id: "9",
    name: "Conference Table",
    category_id: "2",
    brand: "Knoll",
    barcode: "KNL-CT-12",
    model: "Florence 12-Person",
    description: "Premium conference table with integrated cable management",
    specifications: {
      seats: "12 people",
      material: "Oak veneer",
      shape: "Rectangular"
    }
  },
  // Audio Visual
  {
    id: "10",
    name: "4K Laser Projector",
    category_id: "3",
    brand: "Epson",
    barcode: "EPS-LS500",
    model: "EpiqVision Ultra LS500",
    description: "Ultra-short throw 4K laser projector for meeting rooms and presentations",
    specifications: {
      resolution: "4K UHD",
      brightness: "4000 lumens",
      technology: "Laser",
      connectivity: "HDMI, USB-C, Wireless"
    }
  },
  {
    id: "11",
    name: "Wireless Microphone System",
    category_id: "3",
    brand: "Shure",
    barcode: "SHR-SM58",
    model: "SM58-LC",
    description: "Professional wireless microphone for presentations and events"
  },
  {
    id: "12",
    name: '86" Interactive Display',
    category_id: "3",
    brand: "Microsoft",
    barcode: "MSF-SH2-86",
    model: 'Surface Hub 2S 85"',
    description: "Large format interactive display for collaborative meetings and workshops",
    specifications: {
      size: "85 inches",
      resolution: "4K",
      touch_points: "20 simultaneous",
      connectivity: "Multiple inputs"
    }
  },
  {
    id: "13",
    name: "Soundbar System",
    category_id: "3",
    brand: "Bose",
    barcode: "BSE-SB700",
    model: "Smart Soundbar 700",
    description: "Premium soundbar for meeting room audio enhancement"
  },
  // Office Supplies
  {
    id: "14",
    name: "Whiteboard Markers Set",
    category_id: "4",
    brand: "Artline",
    barcode: "ART-WB-12",
    description: "Set of 12 assorted color whiteboard markers with fine tips"
  },
  {
    id: "15",
    name: "Premium Notebooks",
    category_id: "4",
    brand: "Moleskine",
    barcode: "MOL-NB-A4",
    model: "Classic Hard Cover",
    description: "Professional notebooks for meeting notes and planning"
  },
  {
    id: "16",
    name: "Wireless Charging Pad",
    category_id: "4",
    brand: "Belkin",
    barcode: "BLK-WCP15",
    description: "Fast wireless charging pad for meeting room desk integration"
  },
  // Kitchen & Catering
  {
    id: "17",
    name: "Coffee Machine",
    category_id: "5",
    brand: "Nespresso",
    barcode: "NSP-VM200",
    model: "Vertuo Plus",
    description: "Professional coffee machine for office kitchen and meeting refreshments",
    specifications: {
      type: "Capsule system",
      cup_sizes: "4 sizes",
      water_tank: "1.1L"
    }
  },
  {
    id: "18",
    name: "Mini Refrigerator",
    category_id: "5",
    brand: "Haier",
    barcode: "HAI-MR126",
    model: "HR-126WL",
    description: "Compact refrigerator for meeting room refreshments and catering storage"
  },
  {
    id: "19",
    name: "Water Cooler",
    category_id: "5",
    brand: "Zip",
    barcode: "ZIP-HC160",
    description: "Filtered water cooler with hot and cold dispensing options"
  },
  // Wellness & Safety
  {
    id: "20",
    name: "First Aid Kit",
    category_id: "6",
    brand: "St John Ambulance",
    barcode: "SJA-FAK50",
    description: "Comprehensive workplace first aid kit for 50 people"
  },
  {
    id: "21",
    name: "Air Purifier",
    category_id: "6",
    brand: "Dyson",
    barcode: "DYS-AP01",
    model: "Pure Cool TP01",
    description: "HEPA air purifier and fan for meeting room air quality"
  },
  {
    id: "22",
    name: "Ergonomic Footrest",
    category_id: "6",
    brand: "Humanscale",
    barcode: "HUM-FR300",
    description: "Adjustable footrest for ergonomic workstation setup"
  },
  // Mobility
  {
    id: "23",
    name: "Equipment Trolley",
    category_id: "7",
    brand: "Rubbermaid",
    barcode: "RBM-ET3",
    description: "Mobile trolley for transporting AV equipment and supplies"
  },
  {
    id: "24",
    name: "Laptop Cart",
    category_id: "7",
    brand: "Bretford",
    barcode: "BRT-LC20",
    description: "Mobile charging cart for laptops and tablets"
  },
  // Cleaning & Maintenance
  {
    id: "25",
    name: "Cleaning Supply Kit",
    category_id: "8",
    brand: "Diversey",
    barcode: "DIV-CSK01",
    description: "Complete cleaning supply kit for office maintenance"
  },
  {
    id: "26",
    name: "HEPA Vacuum Cleaner",
    category_id: "8",
    brand: "Shark",
    barcode: "SHK-NV752",
    description: "Professional grade vacuum cleaner with HEPA filtration"
  },
  {
    id: "_parking_type_",
    name: "_PARKING_SPACES_",
    category_id: "_parking_category_",
    brand: "PlaceOS"
  }
];
var ASSET_CONDITIONS = ["Excellent", "Good", "Fair", "Poor"];
var ASSET_STATUS = ["Available", "In Use", "Maintenance", "Retired"];
var MAINTENANCE_TYPES = ["Routine", "Repair", "Calibration", "Inspection"];
var generateAssetHistory = (assetId) => {
  const historyCount = predictableRandomInt(5, 1);
  return Array(historyCount).fill(null).map((_, i) => ({
    id: `history-${assetId}-${i}`,
    asset_id: assetId,
    action: ["Assigned", "Returned", "Maintained", "Relocated"][predictableRandomInt(4)],
    user_id: `staff-${predictableRandomInt(20) + 1}`,
    location: `Floor ${predictableRandomInt(3) + 1}`,
    timestamp: getUnixTime(subDays(Date.now(), predictableRandomInt(365))),
    notes: "Asset management action recorded"
  }));
};
var generateMaintenanceSchedule = (assetId) => {
  if (predictableRandomInt(3) === 0)
    return null;
  return {
    id: `maintenance-${assetId}`,
    asset_id: assetId,
    type: MAINTENANCE_TYPES[predictableRandomInt(MAINTENANCE_TYPES.length)],
    frequency_days: [30, 60, 90, 180, 365][predictableRandomInt(5)],
    last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90))),
    next_service: getUnixTime(new Date(Date.now() + (predictableRandomInt(90) + 30) * 24 * 60 * 60 * 1e3)),
    service_provider: "Internal IT" + (predictableRandomInt(3) === 0 ? "" : " / External Contractor"),
    estimated_cost: predictableRandomInt(500, 50)
  };
};
var MOCK_ASSETS = Array(150).fill(null).map((_, i) => {
  const product = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
  const purchaseDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const condition = ASSET_CONDITIONS[predictableRandomInt(ASSET_CONDITIONS.length)];
  const status = ASSET_STATUS[predictableRandomInt(ASSET_STATUS.length)];
  const assetId = `asset-${String(i + 1).padStart(4, "0")}`;
  return {
    id: assetId,
    name: `${product.name} - ${assetId}`,
    asset_type_id: product.id,
    description: product.description || `${product.brand} ${product.name} for office use`,
    model_number: product.model || `${product.brand}-${predictableRandomInt(9999)}`,
    serial_number: `${product.brand?.substring(0, 3).toUpperCase()}${predictableRandomInt(999999999)}`,
    identifier: `${product.barcode}-${String(i + 1).padStart(3, "0")}`,
    barcode: product.barcode,
    brand: product.brand,
    condition,
    status,
    purchase_order_id: `PO-${Math.floor(i / 5) + 1}`,
    // Group assets by purchase orders
    purchase_date: getUnixTime(purchaseDate),
    warranty_expiry: getUnixTime(new Date(purchaseDate.getTime() + predictableRandomInt(36, 12) * 30 * 24 * 60 * 60 * 1e3)),
    purchase_price: predictableRandomInt(5e3, 100),
    current_value: Math.max(predictableRandomInt(3e3, 50), 50),
    // Depreciated value
    location: {
      building: `Building ${predictableRandomInt(2) + 1}`,
      floor: predictableRandomInt(5) + 1,
      room: `Room ${String(predictableRandomInt(50) + 1).padStart(2, "0")}`,
      zone: `zone-${predictableRandomInt(3) + 1}`
    },
    assigned_to: status === "In Use" ? `staff-${predictableRandomInt(20) + 1}` : null,
    category_id: product.category_id,
    specifications: product.specifications || {},
    other_data: {
      history: generateAssetHistory(assetId),
      maintenance_schedule: generateMaintenanceSchedule(assetId),
      insurance_value: predictableRandomInt(6e3, 200),
      depreciation_rate: predictableRandomInt(20, 5),
      // 5-25% per year
      energy_rating: product.category_id === "1" || product.category_id === "5" ? ["A+++", "A++", "A+", "A", "B"][predictableRandomInt(5)] : null,
      dimensions: {
        width: predictableRandomInt(100, 10),
        height: predictableRandomInt(100, 5),
        depth: predictableRandomInt(80, 10),
        weight: predictableRandomInt(50, 1)
      },
      tags: [
        product.brand?.toLowerCase(),
        MOCK_CATEGORIES.find((c2) => c2.id === product.category_id)?.name.toLowerCase(),
        condition.toLowerCase(),
        ...status === "In Use" ? ["assigned"] : [],
        ...product.category_id === "1" ? ["tech"] : []
      ].filter(Boolean)
    }
  };
});
MOCK_ASSETS.push({
  id: "catering-coffee",
  name: "Coffee Service",
  identifier: "Coffee Service",
  asset_type_id: "_catering_standalone_type_",
  zone_id: "bld-01",
  images: [],
  other_data: {
    category: "Beverages",
    description: "Freshly brewed coffee for meetings",
    unit_price: 350,
    quantity: 0,
    options: [],
    tags: ["Drink", "Beverage"],
    accept_points: false,
    discount_cap: 0,
    hide_for_zones: []
  }
}, {
  id: "catering-sandwiches",
  name: "Sandwich Platter",
  identifier: "Sandwich Platter",
  asset_type_id: "_catering_acme_type_",
  zone_id: "bld-01",
  images: [],
  other_data: {
    category: "Food",
    description: "Assorted sandwich platter",
    unit_price: 1200,
    quantity: 0,
    options: [],
    tags: ["Lunch"],
    accept_points: false,
    discount_cap: 0,
    hide_for_zones: []
  }
});
var MOCK_PURCHASE_ORDERS = Array(30).fill(null).map((_, i) => {
  const orderDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const deliveryDate = new Date(orderDate.getTime() + predictableRandomInt(30) * 24 * 60 * 60 * 1e3);
  return {
    id: `PO-${i + 1}`,
    purchase_order_number: `PO-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(i + 1).padStart(4, "0")}`,
    invoice_number: `INV-${String(predictableRandomInt(99999) + 1e4)}`,
    vendor: [
      "Office Supplies Co",
      "Tech Solutions Ltd",
      "Furniture Plus",
      "AV Equipment Pro"
    ][predictableRandomInt(4)],
    department: ["IT", "Facilities", "HR", "Finance"][predictableRandomInt(4)],
    purchase_date: getUnixTime(orderDate),
    delivery_date: getUnixTime(deliveryDate),
    expected_service_start_date: getUnixTime(deliveryDate),
    expected_service_end_date: getUnixTime(new Date(deliveryDate.getTime() + 3 * 365 * 24 * 60 * 60 * 1e3)),
    // 3 years
    total_amount: predictableRandomInt(5e4, 1e3),
    currency: "AUD",
    status: ["Pending", "Approved", "Delivered", "Complete"][predictableRandomInt(4)],
    approver_id: `staff-${predictableRandomInt(5) + 1}`,
    notes: i % 3 === 0 ? "Bulk order for office renovation" : i % 3 === 1 ? "Emergency replacement" : "Routine procurement",
    payment_terms: [
      "Net 30",
      "Net 60",
      "Payment on Delivery",
      "Net 15"
    ][predictableRandomInt(4)]
  };
});
var MOCK_PARKING_LEVELS = [];
function mockLevelZones(level_id) {
  const level = MOCK_LEVELS.find((_) => _.id === level_id);
  const building = MOCK_BUILDINGS.find((_) => _.id === level?.parent_id);
  const region = MOCK_REGIONS.find((_) => _.id === building?.parent_id);
  return [region?.parent_id, region?.id, building?.id, level_id].filter(Boolean);
}
function generateMockParkingAssets(zone_id) {
  if (!MOCK_PARKING_LEVELS.includes(zone_id)) {
    MOCK_PARKING_LEVELS.push(zone_id);
    const zones = mockLevelZones(zone_id);
    const parts = zone_id.split("-");
    const id = parts[parts.length - 1];
    const spaces = new Array(18 * 6).fill(0).map((_, idx) => {
      const position = padLength(idx % 18 + Math.floor(idx / 18) * 100, 3);
      const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
      return {
        id: `park-${id}-${position}`,
        map_id: `park-${position}`,
        name: `${position}`,
        bookable: predictableRandomInt(9999) % 4 !== 0,
        assigned_to: assignee.email || "",
        assigned_name: assignee.name || "",
        asset_type_id: "_parking_type_",
        zone_id,
        zones,
        notes: "",
        place_groups: [],
        features: [],
        images: []
      };
    });
    MOCK_ASSETS.push(...spaces);
  }
  return MOCK_ASSETS.filter((asset) => asset.asset_type_id === "_parking_type_" && asset.zone_id === zone_id);
}

// libs/mocks/src/lib/api/assets.mock.ts
var BASE_PATH = "/api/engine/v2";
var bulkBody = (body) => {
  const list = typeof body === "string" ? JSON.parse(body) : body;
  return Array.isArray(list) ? list : [];
};
function registerMockAssets() {
  persist("asset-categories", MOCK_CATEGORIES);
  persist("asset-types", MOCK_PRODUCTS);
  persist("asset-purchase-orders", MOCK_PURCHASE_ORDERS);
  persist("assets", MOCK_ASSETS);
  persist("parking-levels", MOCK_PARKING_LEVELS);
  registerMockEndpoint({
    path: `${BASE_PATH}/asset_categories`,
    method: "GET",
    callback: (req) => {
      let results = MOCK_CATEGORIES;
      if (req.query_params?.hidden !== void 0) {
        const hidden = String(req.query_params.hidden) === "true";
        results = results.filter((c2) => !!c2.hidden === hidden);
      }
      return results;
    }
  });
  registerCrudEndpoints(`${BASE_PATH}/asset_categories`, MOCK_CATEGORIES, "-category-", "asset category");
  registerMockEndpoint({
    path: `${BASE_PATH}/asset_types`,
    method: "GET",
    callback: (req) => {
      let results = MOCK_PRODUCTS;
      if (req.query_params?.category_id) {
        results = results.filter((p) => p.category_id === req.query_params.category_id);
      }
      return results;
    }
  });
  registerCrudEndpoints(`${BASE_PATH}/asset_types`, MOCK_PRODUCTS, "-product-", "asset type");
  registerMockEndpoint({
    path: `${BASE_PATH}/asset_purchase_orders`,
    method: "GET",
    callback: () => MOCK_PURCHASE_ORDERS
  });
  registerCrudEndpoints(`${BASE_PATH}/asset_purchase_orders`, MOCK_PURCHASE_ORDERS, "-purchase-order-", "purchase order");
  registerMockEndpoint({
    path: `${BASE_PATH}/assets`,
    method: "GET",
    callback: (req) => {
      const type_id = req.query_params?.type_id;
      const zone_id = req.query_params?.zone_id;
      const zones = `${req.query_params?.zones || ""}`.split(",").filter(Boolean);
      if (type_id === "_parking_type_" && zone_id) {
        return generateMockParkingAssets(zone_id);
      }
      if (type_id === "_parking_type_" && zones.length) {
        MOCK_LEVELS.filter((level) => level.type === "parking" && zones.every((id) => mockLevelZones(level.id).includes(id))).forEach((level) => generateMockParkingAssets(level.id));
      }
      let results = [...MOCK_ASSETS];
      if (type_id) {
        results = results.filter((a) => a.asset_type_id === type_id);
      }
      if (zone_id) {
        results = results.filter((a) => a.zone_id === zone_id || (a.zones || []).includes(zone_id));
      }
      if (zones.length) {
        results = results.filter((a) => zones.every((id) => (a.zones || []).includes(id)));
      }
      return results;
    }
  });
  registerMockEndpoint({
    path: `${BASE_PATH}/assets/bulk`,
    method: "POST",
    callback: (req) => {
      const items = bulkBody(req.body).map((item) => __spreadProps(__spreadValues({}, item), {
        id: mockId("-asset-")
      }));
      MOCK_ASSETS.push(...items);
      return items;
    }
  });
  registerMockEndpoint({
    path: `${BASE_PATH}/assets/bulk`,
    method: "PATCH",
    callback: (req) => bulkBody(req.body).map((changes) => {
      const index = MOCK_ASSETS.findIndex((a) => a.id === changes.id);
      if (index < 0)
        return changes;
      const item = __spreadValues(__spreadValues({}, MOCK_ASSETS[index]), changes);
      MOCK_ASSETS.splice(index, 1, item);
      return item;
    })
  });
  registerCrudEndpoints(`${BASE_PATH}/assets`, MOCK_ASSETS, "-asset-", "asset");
}

// libs/mocks/src/lib/api/catering.data.ts
var MOCK_MENU = [
  // Beverages
  {
    id: "bev-001",
    name: "Barista Coffee Selection",
    unit_price: 450,
    category: "beverages",
    description: "Freshly brewed barista-quality coffee with premium beans",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300",
    options: [
      { id: "opt-001", name: "Espresso", group: "type" },
      { id: "opt-002", name: "Cappuccino", group: "type" },
      { id: "opt-003", name: "Flat White", group: "type" },
      { id: "opt-004", name: "Latte", group: "type" },
      { id: "opt-005", name: "Long Black", group: "type" },
      { id: "opt-006", name: "Mocha", group: "type" },
      { id: "opt-007", name: "Regular", group: "size" },
      { id: "opt-008", name: "Large", group: "size", unit_price: 50 },
      { id: "opt-009", name: "Oat Milk", group: "milk", unit_price: 60 },
      {
        id: "opt-010",
        name: "Almond Milk",
        group: "milk",
        unit_price: 60
      },
      { id: "opt-011", name: "Soy Milk", group: "milk", unit_price: 50 },
      {
        id: "opt-012",
        name: "Extra Shot",
        group: "extras",
        unit_price: 70
      },
      { id: "opt-013", name: "Decaf", group: "extras" }
    ]
  },
  {
    id: "bev-002",
    name: "Premium Tea Selection",
    unit_price: 350,
    category: "beverages",
    description: "Selection of premium loose leaf teas",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300",
    options: [
      { id: "opt-014", name: "Earl Grey", group: "type" },
      { id: "opt-015", name: "English Breakfast", group: "type" },
      { id: "opt-016", name: "Green Tea", group: "type" },
      { id: "opt-017", name: "Chamomile", group: "type" },
      { id: "opt-018", name: "Peppermint", group: "type" },
      { id: "opt-019", name: "Jasmine", group: "type" },
      {
        id: "opt-020",
        name: "Honey",
        group: "additions",
        unit_price: 30
      },
      {
        id: "opt-021",
        name: "Lemon",
        group: "additions",
        unit_price: 20
      }
    ]
  },
  {
    id: "bev-003",
    name: "Fresh Juice Bar",
    unit_price: 550,
    category: "beverages",
    description: "Cold-pressed fresh juices and smoothies",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
    options: [
      { id: "opt-022", name: "Orange", group: "juice" },
      { id: "opt-023", name: "Apple", group: "juice" },
      { id: "opt-024", name: "Green Machine", group: "juice" },
      { id: "opt-025", name: "Berry Blast", group: "smoothie" },
      { id: "opt-026", name: "Tropical Paradise", group: "smoothie" },
      {
        id: "opt-027",
        name: "Protein Boost",
        group: "smoothie",
        unit_price: 100
      }
    ]
  },
  {
    id: "bev-004",
    name: "Sparkling Water Station",
    unit_price: 250,
    category: "beverages",
    description: "Premium sparkling and still water with fruit infusions",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300",
    options: [
      { id: "opt-028", name: "Still Water", group: "type" },
      { id: "opt-029", name: "Sparkling Water", group: "type" },
      { id: "opt-030", name: "Cucumber Mint", group: "infusion" },
      { id: "opt-031", name: "Lemon Lime", group: "infusion" },
      { id: "opt-032", name: "Berry Mix", group: "infusion" }
    ]
  },
  // Breakfast
  {
    id: "brf-001",
    name: "Artisan Pastry Selection",
    unit_price: 650,
    category: "breakfast",
    description: "Fresh baked croissants, danish, and muffins",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
    options: [
      { id: "opt-033", name: "Butter Croissant", group: "pastry" },
      {
        id: "opt-034",
        name: "Almond Croissant",
        group: "pastry",
        unit_price: 100
      },
      { id: "opt-035", name: "Pain au Chocolat", group: "pastry" },
      { id: "opt-036", name: "Blueberry Muffin", group: "muffin" },
      { id: "opt-037", name: "Banana Walnut Muffin", group: "muffin" },
      { id: "opt-038", name: "Double Choc Chip Muffin", group: "muffin" }
    ]
  },
  {
    id: "brf-002",
    name: "Breakfast Bowl Bar",
    unit_price: 1250,
    category: "breakfast",
    description: "Build-your-own breakfast bowls with fresh toppings",
    dietary: ["vegetarian", "gluten-free"],
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300",
    options: [
      { id: "opt-039", name: "Greek Yogurt", group: "base" },
      { id: "opt-040", name: "Overnight Oats", group: "base" },
      {
        id: "opt-041",
        name: "Acai Bowl",
        group: "base",
        unit_price: 200
      },
      { id: "opt-042", name: "Fresh Berries", group: "toppings" },
      { id: "opt-043", name: "Granola", group: "toppings" },
      { id: "opt-044", name: "Honey", group: "toppings" },
      { id: "opt-045", name: "Chia Seeds", group: "toppings" },
      { id: "opt-046", name: "Coconut Flakes", group: "toppings" }
    ]
  },
  {
    id: "brf-003",
    name: "Executive Breakfast Platter",
    unit_price: 1850,
    category: "breakfast",
    description: "Premium breakfast selection with eggs, bacon, and sides",
    dietary: [],
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300",
    options: [
      { id: "opt-047", name: "Scrambled Eggs", group: "eggs" },
      { id: "opt-048", name: "Poached Eggs", group: "eggs" },
      {
        id: "opt-049",
        name: "Eggs Benedict",
        group: "eggs",
        unit_price: 300
      },
      { id: "opt-050", name: "Crispy Bacon", group: "protein" },
      { id: "opt-051", name: "Sausages", group: "protein" },
      {
        id: "opt-052",
        name: "Smoked Salmon",
        group: "protein",
        unit_price: 400
      },
      { id: "opt-053", name: "Hash Browns", group: "sides" },
      { id: "opt-054", name: "Grilled Tomato", group: "sides" }
    ]
  },
  // Salads
  {
    id: "sal-001",
    name: "Mediterranean Power Bowl",
    unit_price: 1450,
    category: "salads",
    description: "Fresh Mediterranean ingredients with quinoa and feta",
    dietary: ["vegetarian", "gluten-free"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
    options: [
      {
        id: "opt-055",
        name: "Grilled Chicken",
        group: "protein",
        unit_price: 300
      },
      {
        id: "opt-056",
        name: "Falafel",
        group: "protein",
        unit_price: 200
      },
      {
        id: "opt-057",
        name: "Extra Feta",
        group: "extras",
        unit_price: 150
      },
      {
        id: "opt-058",
        name: "Avocado",
        group: "extras",
        unit_price: 200
      }
    ]
  },
  {
    id: "sal-002",
    name: "Asian Fusion Salad",
    unit_price: 1350,
    category: "salads",
    description: "Crisp vegetables with sesame dressing and edamame",
    dietary: ["vegetarian", "vegan", "dairy-free"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
    options: [
      {
        id: "opt-059",
        name: "Teriyaki Chicken",
        group: "protein",
        unit_price: 300
      },
      { id: "opt-060", name: "Tofu", group: "protein", unit_price: 150 },
      { id: "opt-061", name: "Crispy Noodles", group: "toppings" },
      { id: "opt-062", name: "Sesame Seeds", group: "toppings" }
    ]
  },
  // Sandwiches & Wraps
  {
    id: "snd-001",
    name: "Gourmet Sandwich Selection",
    unit_price: 1250,
    category: "sandwiches",
    description: "Premium sandwiches on artisan breads",
    dietary: [],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300",
    options: [
      { id: "opt-063", name: "Turkey & Avocado", group: "filling" },
      { id: "opt-064", name: "Ham & Swiss", group: "filling" },
      {
        id: "opt-065",
        name: "Roast Beef & Horseradish",
        group: "filling"
      },
      { id: "opt-066", name: "Caprese", group: "filling" },
      { id: "opt-067", name: "Sourdough", group: "bread" },
      { id: "opt-068", name: "Multigrain", group: "bread" },
      { id: "opt-069", name: "Ciabatta", group: "bread" }
    ]
  },
  {
    id: "snd-002",
    name: "Fresh Wrap Station",
    unit_price: 1150,
    category: "sandwiches",
    description: "Build-your-own wraps with fresh ingredients",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1565299585323-38174d4d6174?w=300",
    options: [
      { id: "opt-070", name: "Grilled Chicken", group: "protein" },
      { id: "opt-071", name: "Tuna Salad", group: "protein" },
      { id: "opt-072", name: "Hummus & Veggie", group: "protein" },
      { id: "opt-073", name: "Spinach Tortilla", group: "wrap" },
      { id: "opt-074", name: "Whole Wheat", group: "wrap" },
      { id: "opt-075", name: "Sun-dried Tomato", group: "wrap" }
    ]
  },
  // Hot Meals
  {
    id: "hot-001",
    name: "Pasta Bar",
    unit_price: 1650,
    category: "hot-meals",
    description: "Fresh pasta with choice of sauces and toppings",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300",
    options: [
      { id: "opt-076", name: "Penne", group: "pasta" },
      { id: "opt-077", name: "Fettuccine", group: "pasta" },
      { id: "opt-078", name: "Spaghetti", group: "pasta" },
      { id: "opt-079", name: "Marinara", group: "sauce" },
      { id: "opt-080", name: "Alfredo", group: "sauce" },
      { id: "opt-081", name: "Pesto", group: "sauce" },
      {
        id: "opt-082",
        name: "Grilled Chicken",
        group: "protein",
        unit_price: 300
      },
      {
        id: "opt-083",
        name: "Italian Sausage",
        group: "protein",
        unit_price: 350
      }
    ]
  },
  {
    id: "hot-002",
    name: "Asian Noodle Station",
    unit_price: 1550,
    category: "hot-meals",
    description: "Wok-fried noodles with fresh vegetables",
    dietary: ["dairy-free"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300",
    options: [
      { id: "opt-084", name: "Pad Thai", group: "dish" },
      { id: "opt-085", name: "Singapore Noodles", group: "dish" },
      { id: "opt-086", name: "Beef Black Bean", group: "dish" },
      { id: "opt-087", name: "Vegetable Stir Fry", group: "dish" },
      {
        id: "opt-088",
        name: "Extra Prawns",
        group: "protein",
        unit_price: 400
      },
      { id: "opt-089", name: "Tofu", group: "protein", unit_price: 150 }
    ]
  },
  // Appetizers
  {
    id: "app-001",
    name: "Charcuterie & Cheese Board",
    unit_price: 2200,
    category: "appetizers",
    description: "Curated selection of meats, cheeses, and accompaniments",
    dietary: [],
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300",
    options: [
      { id: "opt-090", name: "Small (6-8 people)", group: "size" },
      {
        id: "opt-091",
        name: "Medium (10-12 people)",
        group: "size",
        unit_price: 800
      },
      {
        id: "opt-092",
        name: "Large (15-20 people)",
        group: "size",
        unit_price: 1600
      },
      {
        id: "opt-093",
        name: "Premium Selection",
        group: "upgrade",
        unit_price: 500
      }
    ]
  },
  {
    id: "app-002",
    name: "Fresh Spring Rolls",
    unit_price: 950,
    category: "appetizers",
    description: "Vietnamese-style fresh rolls with dipping sauce",
    dietary: ["dairy-free", "nut-free"],
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=300",
    options: [
      { id: "opt-094", name: "Prawn & Avocado", group: "filling" },
      { id: "opt-095", name: "Chicken & Herbs", group: "filling" },
      { id: "opt-096", name: "Tofu & Vegetables", group: "filling" },
      { id: "opt-097", name: "Peanut Sauce", group: "sauce" },
      { id: "opt-098", name: "Sweet Chili", group: "sauce" }
    ]
  },
  // Desserts
  {
    id: "des-001",
    name: "Artisan Dessert Platter",
    unit_price: 1450,
    category: "desserts",
    description: "Selection of petit fours, macarons, and mini tarts",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
    options: [
      { id: "opt-099", name: "Mixed Selection", group: "type" },
      { id: "opt-100", name: "Chocolate Focus", group: "type" },
      { id: "opt-101", name: "Fruit Focus", group: "type" },
      {
        id: "opt-102",
        name: "Gluten-Free Options",
        group: "dietary",
        unit_price: 200
      }
    ]
  },
  {
    id: "des-002",
    name: "Fresh Fruit Display",
    unit_price: 850,
    category: "desserts",
    description: "Seasonal fresh fruit beautifully presented",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300",
    options: [
      { id: "opt-103", name: "Regular Display", group: "size" },
      {
        id: "opt-104",
        name: "Premium Exotic Fruits",
        group: "upgrade",
        unit_price: 300
      },
      {
        id: "opt-105",
        name: "Chocolate Dip",
        group: "extras",
        unit_price: 200
      }
    ]
  },
  // Platters
  {
    id: "plt-001",
    name: "Executive Lunch Platter",
    unit_price: 2850,
    category: "platters",
    description: "Complete lunch solution for meetings and events",
    dietary: [],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300",
    options: [
      { id: "opt-106", name: "Serves 8-10", group: "size" },
      {
        id: "opt-107",
        name: "Serves 12-15",
        group: "size",
        unit_price: 1e3
      },
      {
        id: "opt-108",
        name: "Serves 18-20",
        group: "size",
        unit_price: 2e3
      },
      { id: "opt-109", name: "Vegetarian Option", group: "dietary" },
      {
        id: "opt-110",
        name: "Gluten-Free Option",
        group: "dietary",
        unit_price: 200
      }
    ]
  },
  // Snacks
  {
    id: "snk-001",
    name: "Healthy Snack Mix",
    unit_price: 650,
    category: "snacks",
    description: "Mix of nuts, dried fruits, and seeds",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300",
    options: [
      { id: "opt-111", name: "Regular Mix", group: "type" },
      { id: "opt-112", name: "Tropical Mix", group: "type" },
      {
        id: "opt-113",
        name: "Protein Mix",
        group: "type",
        unit_price: 100
      }
    ]
  }
];
var CATERERS = [
  "Gourmet Events Catering",
  "Fresh & Local Kitchen",
  "Premium Dining Solutions"
];
var CHARGE_CODES = ["CC-1001", "CC-1002", "CC-1003", "CC-2001", "CC-2002"];
var ORDER_NOTES = [
  "",
  "",
  "Please include serving utensils",
  "Set up 15 minutes before the meeting starts",
  "Two guests are vegetarian",
  "Leave at reception if the room is locked"
];
function seededRandomInt(seed) {
  let state = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    state = Math.imul(state ^ seed.charCodeAt(i), 16777619);
  }
  return (ceil, floor = 0) => {
    state = state + 1831565813 | 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    const ratio = ((t ^ t >>> 14) >>> 0) / 4294967296;
    return Math.floor(ratio * (ceil - floor)) + floor;
  };
}
function statusAt(deliver_at, rand) {
  if (rand(12) === 0)
    return "cancelled";
  const minutes = differenceInMinutes(deliver_at, Date.now());
  if (minutes < -30)
    return "delivered";
  if (minutes < 0)
    return rand(3) ? "delivered" : "ready";
  if (minutes < 60)
    return rand(2) ? "preparing" : "ready";
  if (minutes < 24 * 60)
    return rand(3) ? "accepted" : "pending";
  return rand(2) ? "accepted" : "pending";
}
function mockEventCatering(event) {
  const rand = seededRandomInt(`${event.id}`);
  if (event.status === "cancelled" || rand(4) !== 0)
    return [];
  const guests = Math.max(1, event.attendees?.length || 1);
  const order_count = rand(4) === 0 ? 2 : 1;
  const first_caterer = rand(CATERERS.length);
  return Array.from({ length: order_count }, (_, index) => {
    const caterer = CATERERS[(first_caterer + index) % CATERERS.length];
    const deliver_offset = [-15, 0, 0, 30][rand(4)];
    const item_count = rand(4, 1);
    const first_item = rand(MOCK_MENU.length);
    const items = Array.from({ length: item_count }, (_2, i) => {
      const item = MOCK_MENU[(first_item + i * 7) % MOCK_MENU.length];
      const groups = [...new Set(item.options.map((o) => o.group))];
      const chosen = new Set(groups.filter(() => rand(2) === 0).map((group) => {
        const list = item.options.filter((o) => o.group === group);
        return list[rand(list.length)].id;
      }));
      return {
        id: item.id,
        name: item.name,
        category: item.category,
        description: item.description,
        unit_price: item.unit_price,
        images: [item.image],
        tags: item.dietary,
        caterer,
        in_order: true,
        quantity: item.category === "beverages" ? guests : Math.ceil(guests / 4),
        options: item.options.map((o) => __spreadProps(__spreadValues({}, o), {
          active: chosen.has(o.id)
        }))
      };
    });
    return {
      id: `order-${event.id}-${index}`,
      event_id: event.id,
      system_id: event.system?.id || "",
      caterer,
      items,
      deliver_offset,
      status: statusAt((event.event_start + deliver_offset * 60) * 1e3, rand),
      charge_code: CHARGE_CODES[rand(CHARGE_CODES.length)],
      invoice_number: rand(3) === 0 ? `INV-${rand(99999, 1e4)}` : "",
      notes: ORDER_NOTES[rand(ORDER_NOTES.length)]
    };
  });
}

// libs/mocks/src/lib/api/spaces.data.ts
var ROOM_FEATURES = {
  "Meeting Room": [
    "Whiteboard",
    "Display Screen",
    "Video Conference",
    "Phone"
  ],
  "Conference Room": [
    "Projector",
    "Video Conference",
    "Whiteboard",
    "Audio System",
    "Phone"
  ],
  Boardroom: [
    "Large Display",
    "Video Conference",
    "Audio System",
    "Whiteboard",
    "Climate Control",
    "Executive Seating"
  ],
  "Training Room": [
    "Projector",
    "Whiteboard",
    "Flipchart",
    "Audio System",
    "Breakout Tables"
  ],
  "Phone Booth": ["Phone", "Acoustic Privacy", "Power Outlet"],
  "Collaboration Space": [
    "Whiteboard",
    "Moveable Furniture",
    "Power Outlets",
    "Informal Seating"
  ],
  "Event Space": [
    "Audio System",
    "Projector",
    "Stage/Platform",
    "Catering Setup",
    "Flexible Seating"
  ],
  "Break Room": [
    "Kitchen Facilities",
    "Refrigerator",
    "Microwave",
    "Coffee Machine",
    "Seating"
  ],
  "Focus Room": [
    "Acoustic Privacy",
    "Desk",
    "Power Outlets",
    "Natural Light"
  ],
  "Presentation Room": [
    "Large Display",
    "Audio System",
    "Tiered Seating",
    "Lighting Control"
  ]
};
var CAPACITY_RANGES = {
  "Meeting Room": { min: 4, max: 12 },
  "Conference Room": { min: 8, max: 20 },
  Boardroom: { min: 10, max: 25 },
  "Training Room": { min: 15, max: 50 },
  "Phone Booth": { min: 1, max: 2 },
  "Collaboration Space": { min: 6, max: 15 },
  "Event Space": { min: 50, max: 200 },
  "Break Room": { min: 10, max: 30 },
  "Focus Room": { min: 1, max: 3 },
  "Presentation Room": { min: 20, max: 100 }
};
var BUILDING_THEMES = {
  "bld-01": {
    name: "Innovation Hub",
    floors: ["Ground", "Level 1", "Level 2"],
    style: "Modern",
    year: 2020
  },
  "bld-02": {
    name: "Executive Center",
    floors: ["Ground", "Level 2", "Level 3", "Level 4"],
    style: "Premium",
    year: 2018
  },
  "bld-03": {
    name: "Creative Campus",
    floors: ["Ground", "Mezzanine", "Level 1"],
    style: "Collaborative",
    year: 2021
  },
  "bld-04": {
    name: "Melbourne Tower",
    floors: ["Ground", "Level 1", "Level 2", "Level 3", "Level 4"],
    style: "Corporate",
    year: 2019
  },
  "bld-05": {
    name: "Melbourne Innovation Lab",
    floors: ["Ground", "Level 1", "Level 2"],
    style: "Research",
    year: 2022
  }
};
var REALISTIC_ROOM_NAMES = [
  // Meeting Rooms
  {
    name: "Sydney Harbour",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Melbourne Cup", type: "Meeting Room", theme: "Australian Cities" },
  {
    name: "Brisbane River",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Perth Skyline", type: "Meeting Room", theme: "Australian Cities" },
  {
    name: "Adelaide Hills",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Darwin Sunset", type: "Meeting Room", theme: "Australian Cities" },
  // Conference Rooms
  { name: "Innovation Lab", type: "Conference Room", theme: "Business" },
  { name: "Strategy Center", type: "Conference Room", theme: "Business" },
  { name: "Think Tank", type: "Conference Room", theme: "Business" },
  { name: "Solution Studio", type: "Conference Room", theme: "Business" },
  { name: "Discovery Room", type: "Conference Room", theme: "Business" },
  { name: "Vision Quest", type: "Conference Room", theme: "Business" },
  // Boardrooms
  { name: "Executive Boardroom", type: "Boardroom", theme: "Executive" },
  { name: "Chairman's Suite", type: "Boardroom", theme: "Executive" },
  { name: "Directors Lounge", type: "Boardroom", theme: "Executive" },
  { name: "Leadership Circle", type: "Boardroom", theme: "Executive" },
  // Training Rooms
  { name: "Learning Hub Alpha", type: "Training Room", theme: "Education" },
  {
    name: "Development Center Beta",
    type: "Training Room",
    theme: "Education"
  },
  { name: "Skills Workshop", type: "Training Room", theme: "Education" },
  { name: "Knowledge Exchange", type: "Training Room", theme: "Education" },
  { name: "Growth Academy", type: "Training Room", theme: "Education" },
  // Phone Booths
  { name: "Call Pod 1", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 2", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 3", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 4", type: "Phone Booth", theme: "Functional" },
  { name: "Privacy Booth A", type: "Phone Booth", theme: "Functional" },
  { name: "Privacy Booth B", type: "Phone Booth", theme: "Functional" },
  // Collaboration Spaces
  { name: "Creative Corner", type: "Collaboration Space", theme: "Creative" },
  { name: "Brainstorm Bay", type: "Collaboration Space", theme: "Creative" },
  { name: "Idea Incubator", type: "Collaboration Space", theme: "Creative" },
  {
    name: "Innovation Intersection",
    type: "Collaboration Space",
    theme: "Creative"
  },
  { name: "Design Den", type: "Collaboration Space", theme: "Creative" },
  // Event Spaces
  { name: "Grand Auditorium", type: "Event Space", theme: "Events" },
  { name: "Conference Hall", type: "Event Space", theme: "Events" },
  { name: "Presentation Theater", type: "Event Space", theme: "Events" },
  { name: "Multi-Purpose Arena", type: "Event Space", theme: "Events" },
  // Break Rooms
  { name: "Coffee Central", type: "Break Room", theme: "Social" },
  { name: "Relaxation Station", type: "Break Room", theme: "Social" },
  { name: "Social Hub", type: "Break Room", theme: "Social" },
  { name: "Refresh & Recharge", type: "Break Room", theme: "Social" },
  { name: "Community Kitchen", type: "Break Room", theme: "Social" },
  // Focus Rooms
  { name: "Deep Work Den", type: "Focus Room", theme: "Productivity" },
  { name: "Concentration Cave", type: "Focus Room", theme: "Productivity" },
  { name: "Quiet Quarters", type: "Focus Room", theme: "Productivity" },
  { name: "Focus Flow", type: "Focus Room", theme: "Productivity" },
  { name: "Zen Zone", type: "Focus Room", theme: "Productivity" },
  // Presentation Rooms
  { name: "Demo Theater", type: "Presentation Room", theme: "Presentation" },
  {
    name: "Showcase Auditorium",
    type: "Presentation Room",
    theme: "Presentation"
  },
  {
    name: "Client Presentation Suite",
    type: "Presentation Room",
    theme: "Presentation"
  }
];
var generateRoomCode = (building, floor, index) => {
  const bldCode = building.split("-")[1];
  const floorCode = floor.includes("Ground") ? "G" : floor.includes("Mezzanine") ? "M" : floor.match(/\d+/) ? floor.match(/\d+/)[0] : "1";
  return `${bldCode}.${floorCode}.${String(index + 1).padStart(2, "0")}`;
};
var getRandomFeatures = (roomType) => {
  const availableFeatures = ROOM_FEATURES[roomType] || [];
  const numFeatures = predictableRandomInt(availableFeatures.length - 1, 2);
  const selectedFeatures = [];
  for (let i = 0; i < numFeatures; i++) {
    const feature = availableFeatures[predictableRandomInt(availableFeatures.length)];
    if (!selectedFeatures.includes(feature)) {
      selectedFeatures.push(feature);
    }
  }
  return selectedFeatures;
};
var getCapacityForRoomType = (roomType) => {
  const range = CAPACITY_RANGES[roomType] || { min: 4, max: 12 };
  return predictableRandomInt(range.max - range.min, range.min);
};
var getZoneHierarchy = (buildingId, levelId) => {
  const building = MOCK_BUILDINGS.find((b) => b.id === buildingId);
  if (!building)
    return ["zone-org", "region-sydney", buildingId, levelId];
  const region = MOCK_REGIONS.find((r) => r.id === building.parent_id);
  const orgId = region ? region.parent_id : "zone-org";
  return [orgId, building.parent_id, buildingId, levelId];
};
var generateSpaceData = () => {
  const spaces = [];
  let spaceIndex = 0;
  Object.entries(BUILDING_THEMES).forEach(([buildingId, buildingInfo]) => {
    buildingInfo.floors.forEach((floor, floorIndex) => {
      const floorId = `${buildingId}_lvl-${floorIndex}`;
      const spacesPerFloor = predictableRandomInt(16, 5);
      for (let i = 0; i < spacesPerFloor; i++) {
        const roomData = REALISTIC_ROOM_NAMES[spaceIndex % REALISTIC_ROOM_NAMES.length];
        const roomCode = generateRoomCode(buildingId, floor, i);
        const capacity = getCapacityForRoomType(roomData.type);
        const features = getRandomFeatures(roomData.type);
        const isBookable = ![
          "Break Room",
          "Collaboration Space",
          "Focus Room"
        ].includes(roomData.type) || predictableRandomInt(3) === 0;
        const space = {
          id: `space-${spaceIndex + 1}`,
          name: `${roomCode} ${roomData.name}`,
          display_name: roomData.name,
          map_id: `area-${roomCode.toLowerCase()}-status`,
          zones: getZoneHierarchy(buildingId, floorId),
          type: roomData.type,
          capacity,
          features,
          images: [
            `https://images.unsplash.com/photo-${15e8 + spaceIndex * 1e5}?w=800&h=600&fit=crop`,
            ...capacity > 10 ? [
              `https://images.unsplash.com/photo-${15e8 + spaceIndex * 1e5 + 5e4}?w=800&h=600&fit=crop`
            ] : []
          ],
          bookable: isBookable,
          level: {
            id: floorId,
            parent_id: buildingId,
            name: floor,
            display_name: floor,
            capacity,
            number: floorIndex.toString(),
            map_id: `${buildingId}_${floorIndex}`,
            tags: [
              buildingInfo.style.toLowerCase(),
              roomData.theme.toLowerCase()
            ],
            settings: {
              booking_enabled: isBookable,
              auto_release: roomData.type === "Meeting Room" || roomData.type === "Conference Room",
              max_booking_duration: roomData.type === "Phone Booth" ? 60 : roomData.type === "Focus Room" ? 240 : roomData.type === "Event Space" ? 480 : 240
            },
            images: [
              `https://images.unsplash.com/photo-${14e8 + floorIndex * 2e5}?w=1200&h=800&fit=crop`
            ],
            locations: {
              id: floorId,
              name: floor,
              building: buildingInfo.name
            }
          },
          // Additional metadata
          building: buildingInfo.name,
          building_id: buildingId,
          floor,
          floor_number: floorIndex,
          room_code: roomCode,
          theme: roomData.theme,
          style: buildingInfo.style,
          year_built: buildingInfo.year,
          last_renovation: buildingInfo.year + predictableRandomInt(4, 1),
          accessibility: {
            wheelchair_accessible: predictableRandomInt(4) !== 0,
            // 75% accessible
            hearing_loop: [
              "Boardroom",
              "Event Space",
              "Presentation Room"
            ].includes(roomData.type),
            braille_signage: predictableRandomInt(2) === 0
          },
          equipment: features.map((feature) => ({
            name: feature,
            status: [
              "Working",
              "Working",
              "Working",
              "Maintenance"
            ][predictableRandomInt(4)],
            last_serviced: new Date(Date.now() - predictableRandomInt(90) * 24 * 60 * 60 * 1e3).toISOString()
          })),
          amenities: {
            natural_light: !roomData.name.toLowerCase().includes("pod") && predictableRandomInt(3) !== 0,
            air_conditioning: true,
            power_outlets: capacity * (roomData.type === "Training Room" ? 2 : 1),
            wifi: true,
            catering_available: [
              "Conference Room",
              "Boardroom",
              "Training Room",
              "Event Space"
            ].includes(roomData.type),
            parking_nearby: buildingId === "bld-01" || predictableRandomInt(2) === 0
          },
          booking_rules: {
            advance_booking_days: roomData.type === "Event Space" ? 90 : roomData.type === "Boardroom" ? 60 : 30,
            min_booking_duration: roomData.type === "Phone Booth" ? 15 : 30,
            max_booking_duration: roomData.type === "Phone Booth" ? 60 : roomData.type === "Focus Room" ? 240 : 480,
            buffer_time: roomData.type === "Event Space" ? 30 : 15,
            approval_required: roomData.type === "Boardroom" || roomData.type === "Event Space"
          },
          cost_center: buildingInfo.name.toLowerCase().replace(/\s+/g, "-"),
          hourly_rate: roomData.type === "Event Space" ? predictableRandomInt(200, 100) : roomData.type === "Boardroom" ? predictableRandomInt(100, 50) : roomData.type === "Phone Booth" ? 0 : predictableRandomInt(50, 10)
        };
        spaces.push(space);
        spaceIndex++;
      }
    });
  });
  return spaces;
};
var rawSpaces = generateSpaceData();
var MOCK_SPACES = rawSpaces.map((space) => generateMockSpace(__spreadProps(__spreadValues({}, space), {
  features: space.features || [],
  images: space.images || [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  ]
})));

// libs/mocks/src/lib/api/events.data.ts
var event_status = ["tentative", "confirmed", "cancelled"];
var randomStatus = () => {
  const rnd = predictableRandomInt(10);
  return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};
var MEETING_TYPES = {
  "Team Standup": {
    category: "Operational",
    body: "Daily team synchronization meeting to discuss progress, blockers, and priorities.",
    typical_attendees: 5,
    departments: ["Engineering", "Product", "Design"]
  },
  "Project Kickoff": {
    category: "Project",
    body: "Initial meeting to define project scope, objectives, timeline, and team responsibilities.",
    typical_attendees: 8,
    departments: ["Engineering", "Product", "Design", "Marketing"]
  },
  "Client Presentation": {
    category: "Client",
    body: "Formal presentation of project deliverables, progress updates, or proposal pitch to client stakeholders.",
    typical_attendees: 6,
    departments: ["Sales", "Marketing", "Engineering"]
  },
  "Strategic Planning": {
    category: "Strategic",
    body: "High-level discussion on company direction, quarterly goals, and resource allocation strategies.",
    typical_attendees: 4,
    departments: ["Leadership", "Product", "Finance"]
  },
  "Code Review Session": {
    category: "Technical",
    body: "Collaborative review of code changes, architecture decisions, and technical implementation details.",
    typical_attendees: 4,
    departments: ["Engineering"]
  },
  "Training Workshop": {
    category: "Training",
    body: "Educational session covering new technologies, processes, or professional development topics.",
    typical_attendees: 12,
    departments: ["All Departments"]
  },
  "Budget Review": {
    category: "Financial",
    body: "Quarterly financial review covering expenses, revenue projections, and budget adjustments.",
    typical_attendees: 6,
    departments: ["Finance", "Leadership", "Operations"]
  },
  "1:1 Meeting": {
    category: "Personal",
    body: "Individual meeting between manager and team member for performance discussion and feedback.",
    typical_attendees: 2,
    departments: ["All Departments"]
  },
  "Product Demo": {
    category: "Product",
    body: "Demonstration of new features, product updates, or prototype showcasing to stakeholders.",
    typical_attendees: 8,
    departments: ["Product", "Engineering", "Design", "Marketing"]
  },
  "Team Building": {
    category: "Social",
    body: "Interactive activities designed to improve team cohesion, communication, and workplace culture.",
    typical_attendees: 15,
    departments: ["All Departments"]
  },
  "Interview Panel": {
    category: "HR",
    body: "Candidate interview session with multiple team members to evaluate fit and technical skills.",
    typical_attendees: 4,
    departments: ["HR", "Engineering", "Product"]
  },
  "Vendor Meeting": {
    category: "Business",
    body: "Discussion with external vendors regarding partnerships, services, or procurement decisions.",
    typical_attendees: 5,
    departments: ["Operations", "Finance", "Leadership"]
  },
  "Risk Assessment": {
    category: "Strategic",
    body: "Analysis and discussion of potential project risks, mitigation strategies, and contingency planning.",
    typical_attendees: 6,
    departments: ["Leadership", "Operations", "Finance"]
  },
  "Innovation Brainstorm": {
    category: "Creative",
    body: "Creative ideation session for new product features, process improvements, or market opportunities.",
    typical_attendees: 8,
    departments: ["Product", "Design", "Engineering", "Marketing"]
  },
  "Compliance Review": {
    category: "Legal",
    body: "Review of regulatory requirements, policy updates, and compliance procedures.",
    typical_attendees: 5,
    departments: ["Legal", "Operations", "Leadership"]
  },
  "All Hands Meeting": {
    category: "Company",
    body: "Company-wide meeting for announcements, updates, and team recognition.",
    typical_attendees: 50,
    departments: ["All Departments"]
  },
  "Sprint Planning": {
    category: "Agile",
    body: "Planning session for upcoming sprint work, story estimation, and capacity planning.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  Retrospective: {
    category: "Agile",
    body: "Team reflection on completed sprint, identifying improvements and celebrating successes.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  "User Research": {
    category: "Research",
    body: "Discussion of user feedback, research findings, and implications for product development.",
    typical_attendees: 5,
    departments: ["Product", "Design", "Engineering"]
  },
  "Security Briefing": {
    category: "Security",
    body: "Review of security protocols, threat assessments, and incident response procedures.",
    typical_attendees: 8,
    departments: ["Engineering", "Operations", "Leadership"]
  }
};
var getRandomMeetingContent = () => {
  const titles = Object.keys(MEETING_TYPES);
  const title = titles[predictableRandomInt(titles.length)];
  return __spreadValues({
    title
  }, MEETING_TYPES[title]);
};
var generateMeetingUrl = () => {
  const providers = [
    { name: "Zoom", urlPattern: "https://zoom.us/j/" },
    {
      name: "Microsoft Teams",
      urlPattern: "https://teams.microsoft.com/l/meetup-join/"
    },
    { name: "Google Meet", urlPattern: "https://meet.google.com/" },
    { name: "WebEx", urlPattern: "https://placeos.webex.com/meet/" }
  ];
  const provider = providers[predictableRandomInt(providers.length)];
  const meetingId = Math.random().toString(36).substring(2, 15);
  return {
    provider: provider.name,
    url: provider.urlPattern + meetingId,
    id: meetingId
  };
};
function eventBooksSpace(event, id) {
  let booked = event.system?.id === id || !!event.resources?.some((space) => space.id === id);
  for (const user of event.attendees || []) {
    if (user.id !== id)
      continue;
    if (user.response_status === "declined")
      return false;
    if (user.resource)
      booked = true;
  }
  return booked;
}
function eventSpaces(event) {
  const ids = [
    event.system?.id,
    ...(event.resources || []).map((space) => space.id),
    ...(event.attendees || []).filter((user) => user.resource).map((space) => space.id)
  ];
  return [...new Set(ids)].filter((id) => id && eventBooksSpace(event, id));
}
var MOCK_EVENTS = (() => {
  const events = [];
  const totalDays = 30;
  const dayOffset = -15;
  MOCK_SPACES.forEach((space, spaceIndex) => {
    for (let day = 0; day < totalDays; day++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 7);
      const hourOffset = 7 + (spaceIndex + day) % 11;
      const minuteOffset = (spaceIndex * 17 + day * 13) % 60;
      const eventTime = getUnixTime(setHours(setMinutes(dayStart, minuteOffset), hourOffset));
      const availableStaff = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email);
      const host = availableStaff[spaceIndex % availableStaff.length];
      const colleagues = MOCK_STAFF.filter((s) => s.department === host.department && s.email !== host.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(3) + 1);
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const attendees = [host, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `space-daily-${space.id}-${day}`,
        status: randomStatus(),
        host: host.email,
        calendar: `calendar-${host.department?.toLowerCase() || "general"}`,
        creator: host.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: predictableRandomInt(4) === 0,
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: host.department?.toLowerCase().replace(/\s+/g, "-") || "general",
          priority: "normal",
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  });
  const activeUserDailyCount = /* @__PURE__ */ new Map();
  MOCK_STAFF.forEach((user, userIndex) => {
    if (user.email === ACTIVE_USER.email) {
      return;
    }
    for (let day = 0; day < totalDays; day++) {
      const eventsPerDay = predictableRandomInt(3) + 1;
      for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
        const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 8);
        const hourOffset = 8 + eventNum * 3 + userIndex % 3;
        const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 17)));
        const space = MOCK_SPACES[(userIndex + day + eventNum) % MOCK_SPACES.length];
        let colleagues = MOCK_STAFF.filter((s) => s.department === user.department && s.email !== user.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 1);
        const currentDayCount = activeUserDailyCount.get(day) || 0;
        const shouldIncludeActiveUser = user.department === ACTIVE_USER.department && currentDayCount === 0 && predictableRandomInt(5) === 0;
        if (shouldIncludeActiveUser) {
          colleagues = [...colleagues, ACTIVE_USER];
          activeUserDailyCount.set(day, currentDayCount + 1);
        }
        const meetingContent = getRandomMeetingContent();
        const meetingInfo = generateMeetingUrl();
        const attendees = [user, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
          organizer: idx === 0,
          checked_in: predictableRandomInt(99999) % 3 === 0,
          response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
        }));
        const event_start = eventTime;
        const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
        events.push({
          id: `user-daily-${userIndex}-${day}-${eventNum}`,
          status: randomStatus(),
          host: user.email,
          calendar: `calendar-${user.department?.toLowerCase() || "general"}`,
          creator: user.email,
          attendees,
          title: meetingContent.title,
          body: meetingContent.body,
          private: predictableRandomInt(4) === 0,
          event_start,
          event_end,
          timezone: "Australia/Sydney",
          all_day: false,
          location: space?.name || "TBD",
          recurring: predictableRandomInt(10) === 0,
          recurrence: {},
          attachments: {},
          system: space,
          meeting_url: meetingInfo.url,
          meeting_id: meetingInfo.id,
          meeting_provider: meetingInfo.provider,
          extension_data: {
            category: meetingContent.category,
            catering: [],
            setup: 0,
            breakdown: 0,
            cost_center: user.department?.toLowerCase().replace(/\s+/g, "-") || "general",
            priority: "normal",
            estimated_attendees: attendees.length,
            actual_attendees: attendees.length
          }
        });
      }
    }
  });
  for (let day = 0; day < totalDays; day++) {
    const eventsPerDay = predictableRandomInt(3) + 1;
    for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 9);
      const hourOffset = 9 + eventNum * 3;
      const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 16)));
      const space = MOCK_SPACES[(day + eventNum) % MOCK_SPACES.length];
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const colleagues = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 2);
      const attendees = [ACTIVE_USER, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `active-user-daily-${day}-${eventNum}`,
        status: "confirmed",
        host: ACTIVE_USER.email,
        calendar: `calendar-${ACTIVE_USER.department?.toLowerCase() || "engineering"}`,
        creator: ACTIVE_USER.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: eventNum === 0,
        // Make first event of day private sometimes
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: ACTIVE_USER.department?.toLowerCase().replace(/\s+/g, "-") || "engineering",
          priority: eventNum === 0 ? "high" : "normal",
          // First event of day is high priority
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  }
  const seen = /* @__PURE__ */ new Set();
  const uniqueEvents = events.filter((event) => {
    if (seen.has(event.id))
      return false;
    seen.add(event.id);
    event.extension_data.catering = mockEventCatering(event);
    return true;
  });
  return uniqueEvents.sort((a, b) => a.event_start - b.event_start);
})();

// libs/mocks/src/lib/api/bookings.data.ts
var TRACKING = ["in_storage", "in_transit", "at_location"];
var generateBookingForDay = (day, type, index, user) => {
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const lvl_spaces = MOCK_SPACES.filter((_) => _.zones.includes(lvl?.id)) || [];
  const approved = predictableRandomInt(999999) % 4;
  const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
  const guest = MOCK_GUESTS[predictableRandomInt(MOCK_GUESTS.length)];
  const asset_count = predictableRandomInt(3, 1);
  const position = padLength(predictableRandomInt(999) + 1, 3);
  const base_time = setHours(addDays(startOfDay(Date.now()), day - 15), predictableRandomInt(10, 7));
  const booking_start = getUnixTime(base_time);
  const time_length = predictableRandomInt(240, 60);
  const booking_end = getUnixTime(addMinutes(base_time, time_length));
  const qr_base = Date.now() * predictableRandomInt(999999, 1) / 1e5;
  return {
    id: index,
    qr_code: Math.floor(qr_base).toString(),
    booking_start,
    booking_end,
    timezone: "Australia/Sydney",
    title: capitalizeFirstLetter(`${type.replace("-", " ")} booking ${index}`),
    event_start: booking_start,
    event_end: booking_end,
    asset_ids: type === "asset-request" ? [...Array(asset_count)].map((_, i) => MOCK_ASSETS[predictableRandomInt(MOCK_ASSETS.length, i + 1)].id) : [
      type === "visitor" ? guest.email : `${type}-${bld?.id}-${lvl?.id}-${position}`
    ],
    asset_id: type === "visitor" ? guest.email : `${type}-${bld?.id}-${lvl?.id}-${position}`,
    asset_name: type === "visitor" ? guest.name : `${bld?.name}-${position}`,
    description: type === "visitor" ? guest.name : `${capitalizeFirstLetter(type.replace("-", " "))} in ${bld?.name}`,
    booking_type: type,
    type,
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_id: user.id,
    booked_by_name: user.name,
    booked_by_email: user.email,
    attendees: [],
    checked_in: approved && predictableRandomInt(4) <= 2,
    rejected: predictableRandomInt(12) === 0,
    approved: approved !== 0,
    deleted: false,
    access: approved !== 0,
    permission: type === "group-event" ? "OPEN" : "PRIVATE",
    approver_id: approved ? approver.id : "",
    approver_name: approved ? approver.name : "",
    approver_email: approved ? approver.email : "",
    process_state: type === "asset-request" ? TRACKING[predictableRandomInt(TRACKING.length, index)] : "",
    last_changed: booking_start,
    created: booking_start - 3600,
    created_by_id: user.id,
    created_by_name: user.name,
    created_by_email: user.email,
    zones: [
      bld?.id,
      type === "parking" ? MOCK_LEVELS.find((l) => l.parent_id === bld?.id && l.type === "parking")?.id : lvl?.id
    ].filter(Boolean),
    extension_data: {
      map_id: `table-${bld?.id}.${position}`,
      note: capitalizeFirstLetter(`${type.replace("-", " ")} booking ${index}`),
      notes: "",
      plate_number: randomString(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      tracking: approved ? "at_location" : "in_storage",
      space_id: lvl_spaces.length ? lvl_spaces[predictableRandomInt(lvl_spaces.length)].id : `space-${index}`,
      building_id: bld?.id,
      building_name: bld?.name
    }
  };
};
var MOCK_BOOKINGS = (() => {
  const bookings = [];
  let bookingIndex = 0;
  for (let day = 0; day < 30; day++) {
    const dayBookings = [];
    const staffWithoutActive = MOCK_STAFF.filter((u) => u.id !== ACTIVE_USER.id);
    const targetUserCount = Math.min(20, staffWithoutActive.length);
    const shuffled = [...staffWithoutActive];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = predictableRandomInt(i + 1);
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    const selectedUsers = shuffled.slice(0, targetUserCount);
    {
      const activeFromStaff = MOCK_STAFF.find((u) => u.id === ACTIVE_USER.id);
      selectedUsers.push(activeFromStaff || __spreadProps(__spreadValues({}, ACTIVE_USER), {
        extension_data: {
          employee_id: "EMP0000",
          start_date: (/* @__PURE__ */ new Date()).toISOString(),
          manager_id: null
        }
      }));
    }
    selectedUsers.forEach((user) => {
      const userDayBookings = [];
      if (!user)
        return;
      const deskBookingCount = predictableRandomInt(4, 1);
      for (let i = 0; i < deskBookingCount; i++) {
        const booking = generateBookingForDay(day, "desk", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 2);
        const latestStartHour = 18 - durationHours;
        const minStartHour = Math.min(7 + i * 3, latestStartHour);
        const startHour = predictableRandomInt(latestStartHour + 1, minStartHour);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "parking", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 6);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "visitor", bookingIndex++, user);
        const durationHours = predictableRandomInt(4, 1);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      dayBookings.push(...userDayBookings);
    });
    bookings.push(...dayBookings);
  }
  const active_user = MOCK_STAFF.find((user) => user.id === ACTIVE_USER.id);
  for (const bld of active_user ? MOCK_BUILDINGS : []) {
    const booking = generateBookingForDay(15, "parking", bookingIndex++, active_user);
    const parking_level = MOCK_LEVELS.find((level) => level.parent_id === bld.id && level.type === "parking");
    booking.title = `Cancelled parking request - ${bld.name}`;
    booking.description = "Cancelled mock request for testing disabled parking actions";
    booking.asset_id = `unallocated-${bld.id}-cancelled`;
    booking.asset_ids = [booking.asset_id];
    booking.asset_name = "Unallocated parking request";
    booking.checked_in = false;
    booking.rejected = false;
    booking.approved = false;
    booking.deleted = true;
    booking.access = false;
    booking.zones = [bld.id, parking_level?.id].filter(Boolean);
    booking.extension_data = __spreadProps(__spreadValues({}, booking.extension_data), {
      notes: "Cancelled mock request",
      plate_number: "CANCELLED"
    });
    bookings.push(booking);
  }
  return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();
var MOCK_CATERING_BOOKINGS = MOCK_EVENTS.flatMap((event) => event.extension_data.catering.map((order) => {
  const host = MOCK_STAFF.find((user) => user.email === event.host) || ACTIVE_USER;
  const space = event.system;
  return {
    booking_start: event.event_start,
    booking_end: event.event_end,
    timezone: event.timezone,
    title: event.title,
    description: event.title,
    booking_type: "catering-order",
    type: "catering-order",
    asset_id: space.id,
    asset_ids: [space.id],
    asset_name: space.name,
    user_id: host.id,
    user_name: host.name,
    user_email: host.email,
    booked_by_id: host.id,
    booked_by_name: host.name,
    booked_by_email: host.email,
    attendees: [],
    checked_in: false,
    rejected: false,
    approved: true,
    zones: space.zones,
    extension_data: {
      parent_id: event.id,
      name: space.name,
      location_id: space.id,
      details: order
    },
    linked_event: {
      id: event.id,
      title: event.title,
      event_start: event.event_start,
      event_end: event.event_end,
      host: event.host,
      system_id: space.id,
      location: event.location,
      // `CalendarEvent` finds the organiser from the attendees
      attendees: [
        {
          id: host.id,
          name: host.name,
          email: host.email,
          organizer: true
        }
      ]
    }
  };
})).sort((a, b) => a.booking_start - b.booking_start).map((booking, index) => __spreadValues({ id: 1e4 + index }, booking));

// libs/mocks/src/lib/api/bookings.mock.ts
var ALL_BOOKINGS = [...MOCK_BOOKINGS, ...MOCK_CATERING_BOOKINGS];
function findBooking(id) {
  const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${id}`);
  if (!booking) {
    throw {
      status: 404,
      message: `Unable to find booking with ID ${id}`
    };
  }
  return booking;
}
function approveBooking(id, approved) {
  const booking = findBooking(id);
  booking.approved = approved;
  booking.rejected = !approved;
  return booking;
}
function checkInBooking(id, state_param) {
  const booking = findBooking(id);
  const state = `${state_param ?? "true"}` === "true";
  booking.checked_in = state;
  if (state) {
    booking.checked_in_at = getUnixTime(Date.now());
    delete booking.checked_out_at;
  } else {
    booking.checked_out_at = getUnixTime(Date.now());
  }
  return booking;
}
function clashingAssets(booking, include_time) {
  const asset_ids = booking.asset_ids?.length ? booking.asset_ids : [booking.asset_id].filter(Boolean);
  const clashes = ALL_BOOKINGS.filter((other) => !other.deleted && !other.rejected && `${other.id}` !== `${booking.id}` && timePeriodsIntersect(booking.booking_start, booking.booking_end, other.booking_start, other.booking_end)).flatMap((other) => (other.asset_ids?.length ? other.asset_ids : [other.asset_id]).filter((id) => asset_ids.includes(id)).map((asset_id) => ({
    asset_id,
    booking_start: other.booking_start,
    booking_end: other.booking_end
  })));
  return include_time ? clashes : [...new Set(clashes.map((clash) => clash.asset_id))];
}
function registerMockBookings() {
  persistById("bookings", ALL_BOOKINGS);
  registerMockEndpoint({
    path: "/api/staff/v1/bookings",
    method: "GET",
    callback: (_) => {
      let events = ALL_BOOKINGS;
      if (!_.query_params.zone_ids && !_.query_params.zones) {
        _.query_params.user_id = ACTIVE_USER.id;
      }
      if (_.query_params.user_id) {
        events = events.filter((booking) => booking.user_id === _.query_params.user_id);
      }
      if (_.query_params.email) {
        events = events.filter((booking) => booking.user_email === _.query_params.email);
      }
      if (_.query_params.zones || _.query_params.zone_ids) {
        const zones = (_.query_params.zones || _.query_params.zone_ids || "").split(",").filter((id) => !!id);
        if (zones.length > 0) {
          events = events.filter((booking) => zones.some((zone) => booking.zones.includes(zone)));
        }
      }
      if (_.query_params.period_start && _.query_params.period_end) {
        events = events.filter((event) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, event.booking_start, event.booking_end));
      }
      if (!_.query_params.include_deleted && !_.query_params.deleted) {
        events = events.filter((booking) => !booking.deleted);
      }
      if (_.query_params.type) {
        events = events.filter((event) => event.type === _.query_params.type || event.booking_type === _.query_params.type);
      }
      const limit = +_.query_params.limit || 50;
      const offset = +_.query_params.offset || 0;
      events = events.slice(offset, offset + limit);
      return events;
    }
  });
  registerMockEndpoint({
    path: "/api/debug/bookings/distribution",
    method: "GET",
    callback: (_) => {
      const distribution = {};
      ALL_BOOKINGS.forEach((booking) => {
        if (!distribution[booking.user_id]) {
          distribution[booking.user_id] = {
            user_name: booking.user_name,
            user_email: booking.user_email,
            total: 0,
            desk: 0,
            parking: 0,
            visitor: 0,
            other: 0
          };
        }
        distribution[booking.user_id].total++;
        if (booking.type === "desk")
          distribution[booking.user_id].desk++;
        else if (booking.type === "parking")
          distribution[booking.user_id].parking++;
        else if (booking.type === "visitor")
          distribution[booking.user_id].visitor++;
        else
          distribution[booking.user_id].other++;
      });
      return {
        total_bookings: ALL_BOOKINGS.length,
        total_users: Object.keys(distribution).length,
        distribution
      };
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id",
    method: "GET",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    method: "POST",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      }
      const user = {
        id: _.body.id,
        name: _.body.name,
        email: _.body.email
      };
      event.attendees.push(user);
      return user;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    method: "DELETE",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      const guest = event.attendees.find((_2) => _2.email === decodeURIComponent(email));
      if (!guest) {
        throw {
          status: 404,
          message: `Unable to find guest with email ${decodeURIComponent(email)}`
        };
      }
      return guest;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/guests/:email/checkin",
    method: "POST",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      event.attendees = event.attendees.filter((_2) => _2.email !== decodeURIComponent(email));
      return {};
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings",
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: mockId("-booking-")
      });
      ALL_BOOKINGS.push(new_event);
      return new_event;
    }
  });
  const updateBooking = (id, data) => {
    const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${id}`);
    if (index < 0)
      throw {
        status: 404,
        message: `Unable to find booking with ID ${id}`
      };
    const new_event = __spreadValues({}, data);
    ALL_BOOKINGS.splice(index, 1, new_event);
    return new_event;
  };
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id",
    method: "PATCH",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/approve",
    method: "POST",
    callback: (req) => approveBooking(req.route_params.id, true)
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/reject",
    method: "POST",
    callback: (req) => approveBooking(req.route_params.id, false)
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/check_in",
    method: "POST",
    callback: (req) => checkInBooking(req.route_params.id, req.query_params?.state)
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/update_induction",
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      const induction = req.query_params.induction || "tentative";
      booking.induction = induction;
      return booking;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id",
    method: "PUT",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id",
    method: "DELETE",
    callback: (req) => {
      const booking = findBooking(req.route_params.id);
      booking.deleted = true;
      booking.deleted_at = Math.floor(Date.now() / 1e3);
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/clashing-assets",
    method: "POST",
    callback: (req) => clashingAssets(req.body || {}, `${req.query_params?.include_clash_time}` === "true")
  });
  const instance = "/api/staff/v1/bookings/:id/instance/:start";
  for (const method of ["PATCH", "PUT"]) {
    registerMockEndpoint({
      path: instance,
      method,
      callback: (req) => Object.assign(findBooking(req.route_params.id), req.body)
    });
  }
  registerMockEndpoint({
    path: instance,
    method: "DELETE",
    callback: (req) => {
      const booking = findBooking(req.route_params.id);
      booking.deleted = true;
      booking.deleted_at = Math.floor(Date.now() / 1e3);
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/approve/:start",
    method: "POST",
    callback: (req) => approveBooking(req.route_params.id, true)
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/reject/:start",
    method: "POST",
    callback: (req) => approveBooking(req.route_params.id, false)
  });
  registerMockEndpoint({
    path: "/api/staff/v1/bookings/:id/check_in/:start",
    method: "POST",
    callback: (req) => checkInBooking(req.route_params.id, req.query_params?.state)
  });
}

// libs/mocks/src/lib/api/calendars.mock.ts
function registerMockCalendars() {
  registerMockEndpoint({
    path: "/api/staff/v1/calendars",
    method: "GET",
    callback: (_request) => {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user2 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user3 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      return [
        {
          id: ACTIVE_USER.email,
          summary: ACTIVE_USER.name,
          primary: true,
          can_edit: true,
          hidden: false
        },
        {
          id: user.email,
          summary: user.name,
          primary: false,
          can_edit: true,
          hidden: false
        },
        {
          id: user2.email,
          summary: user2.name,
          primary: false,
          can_edit: false,
          hidden: false
        },
        {
          id: user3.email,
          summary: user3.name,
          primary: false,
          can_edit: false,
          hidden: true
        }
      ];
    }
  });
  const handleSpaceAvailability = (request) => {
    const start = +request.query_params.period_start;
    const end = +request.query_params.period_end;
    const zones = (request.query_params.zone_ids || "").split(",").filter((i) => !!i);
    const systems = (request.query_params.system_ids || "").split(",").filter((i) => !!i);
    const spaces = MOCK_SPACES.filter((space) => zones.length ? zones.reduce((has, zone) => has && space.zones.includes(zone), true) : systems.length ? systems.includes(space.id) : true).filter((space) => {
      const bookings = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.id === space.id));
      for (const event of bookings) {
        if (timePeriodsIntersect(start, end, event.event_start, event.event_end))
          return false;
      }
      return true;
    });
    return spaces;
  };
  registerMockEndpoint({
    path: "/api/staff/v1/calendars/availability",
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
  registerMockEndpoint({
    path: "/api/staff/v1/calendars/free_busy",
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
  registerMockEndpoint({
    path: "/api/staff/v1/calendars/:email/permission",
    method: "GET",
    callback: (request) => {
      const email = decodeURIComponent(request.route_params.email);
      if (email === ACTIVE_USER.email) {
        return { can_edit: true, has_access: true, role: "owner" };
      }
      const staff = MOCK_STAFF.some((user) => user.email === email);
      return staff ? { can_edit: true, has_access: true, role: "writer" } : { can_edit: false, has_access: false, role: "none" };
    }
  });
}

// libs/mocks/src/lib/api/events.mock.ts
function findEvent(id) {
  const event = MOCK_EVENTS.find((item) => item.id === id);
  if (!event)
    throw { status: 404, message: "Event not found" };
  return event;
}
function pollSpaces(ids) {
  for (const id of new Set(ids)) {
    if (id)
      Or(id)?.Bookings?.[0]?.$poll_bookings();
  }
}
function clashingSpaces(event, include_time) {
  const space_ids = eventSpaces(event);
  const clashes = MOCK_EVENTS.filter((other) => other.id !== event.id && timePeriodsIntersect(event.event_start, event.event_end, other.event_start, other.event_end)).flatMap((other) => eventSpaces(other).filter((id) => space_ids.includes(id)).map((asset_id) => ({
    asset_id,
    booking_start: other.event_start,
    booking_end: other.event_end
  })));
  return include_time ? clashes : [...new Set(clashes.map((clash) => clash.asset_id))];
}
function registerMockEvents() {
  persistById("events", MOCK_EVENTS, {
    onLoad: () => pollSpaces(MOCK_SPACES.map((space) => space.id))
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events",
    method: "GET",
    callback: (_) => {
      let events = MOCK_EVENTS;
      if (!_.query_params.zone_ids) {
        events = events.filter((event) => !!event.attendees.find((user) => user.email === ACTIVE_USER.email));
      } else if (_.query_params.zone_ids) {
        events = events.filter((event) => !!event.system.zones.find((zone) => _.query_params.zone_ids.includes(zone)));
      }
      if (_.query_params.period_start) {
        events = events.filter((e) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, e.event_start, e.event_end));
      }
      return events;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events",
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: mockId("-cal-event-")
      });
      new_event.attendees = [
        MOCK_STAFF.find((_) => _.email === new_event.host),
        ...new_event.attendees || []
      ];
      new_event.attendees.forEach((user) => {
        if (user.zones)
          user.resource = true;
      });
      if (new_event.system) {
        new_event.attendees = [
          ...new_event.attendees || [],
          __spreadProps(__spreadValues({}, new_event.system), { resource: true })
        ];
      }
      MOCK_EVENTS.push(new_event);
      pollSpaces(eventSpaces(new_event));
      return new_event;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/history",
    method: "GET",
    callback: () => []
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id",
    method: "GET",
    callback: (request) => {
      const item = MOCK_EVENTS.find((event) => event.id === request.route_params.id);
      if (item) {
        return item;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id",
    method: "DELETE",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index >= 0) {
        const event = MOCK_EVENTS[index];
        if (event.host === ACTIVE_USER.email) {
          MOCK_EVENTS.splice(index, 1);
        } else {
          const user = event.attendees.find((_) => _.email === ACTIVE_USER.email);
          user.response_status = "declined";
        }
        pollSpaces(eventSpaces(event));
        return;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  for (const method of ["PATCH", "PUT"]) {
    registerMockEndpoint({
      path: "/api/staff/v1/events/:id",
      method,
      callback: (request) => {
        const index = MOCK_EVENTS.findIndex((event2) => event2.id === request.route_params.id);
        if (index < 0)
          throw { status: 404, message: "Event not found" };
        const previous = MOCK_EVENTS[index];
        const event = __spreadValues(__spreadValues({}, previous), request.body);
        MOCK_EVENTS.splice(index, 1, event);
        pollSpaces([
          request.query_params.system_id,
          ...eventSpaces(previous),
          ...eventSpaces(event)
        ]);
        return event;
      }
    });
  }
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id/guests/:email/checkin",
    method: "POST",
    callback: (request) => {
      const event = findEvent(request.route_params.id);
      const email = decodeURIComponent(request.route_params.email);
      const state = `${request.query_params.state ?? "true"}` === "true";
      event.extension_data ||= {};
      const checked_in = (event.extension_data.checked_in || []).filter((item) => item !== email);
      event.extension_data.checked_in = state ? [...checked_in, email] : checked_in;
      const guest = event.attendees.find((user) => user.email === email);
      return __spreadProps(__spreadValues({}, guest || { email }), { checked_in: state });
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/clashing-assets",
    method: "POST",
    callback: (request) => clashingSpaces(request.body || {}, `${request.query_params.include_clash_time}` === "true")
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id/decline",
    method: "POST",
    callback: (request) => {
      const event = findEvent(request.route_params.id);
      const user = event.attendees.find((item) => item.email === ACTIVE_USER.email);
      if (user)
        user.response_status = "declined";
      return event;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id/attendee",
    method: "POST",
    callback: (request) => {
      const event = findEvent(request.route_params.id);
      const guest = __spreadValues({}, request.body);
      event.attendees = [
        ...event.attendees.filter((user) => user.email !== guest.email),
        guest
      ];
      return guest;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id/attendee/:email",
    method: "DELETE",
    callback: (request) => {
      const event = findEvent(request.route_params.id);
      const email = decodeURIComponent(request.route_params.email);
      const guest = event.attendees.find((user) => user.email === email);
      if (!guest)
        throw { status: 404, message: "Guest not found" };
      event.attendees = event.attendees.filter((user) => user !== guest);
      return guest;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id/metadata/:system_id",
    method: "GET",
    callback: (request) => findEvent(request.route_params.id).extension_data || {}
  });
  registerMockEndpoint({
    path: "/api/staff/v1/events/:id/metadata/:system_id",
    method: "PATCH",
    callback: (request) => {
      const event = findEvent(request.route_params.id);
      event.extension_data = __spreadValues(__spreadValues({}, event.extension_data || {}), request.body);
      return event.extension_data;
    }
  });
}

// libs/mocks/src/lib/api/maps-ai.mock.ts
var PATH = "/api/engine/v2/maps/ai";
function registerMockMapsAi() {
  registerMockEndpoint({
    path: `${PATH}/capabilities`,
    method: "GET",
    callback: () => ({
      enabled: false,
      reason: "Map AI is not available in mock mode.",
      providers: [],
      default_provider_id: null,
      quota: { user_remaining_today: 0, domain_remaining_month: 0 },
      limits: {
        max_context_bytes: 0,
        max_ops: 0,
        max_instruction_chars: 0
      }
    })
  });
  registerMockEndpoint({
    path: `${PATH}/jobs`,
    method: "GET",
    callback: () => []
  });
  registerMockEndpoint({
    path: `${PATH}/usage`,
    method: "GET",
    callback: () => []
  });
}

// libs/mocks/src/lib/api/short-url.mock.ts
var PATH2 = "/api/engine/v2/short_url";
var now = getUnixTime(Date.now());
var MOCK_SHORT_URLS = [
  {
    id: "uri-welcome",
    name: "Visitor welcome",
    description: "Check-in page for building visitors",
    uri: "https://place.tech/visitors",
    user_id: ACTIVE_USER.id,
    user_name: ACTIVE_USER.name,
    user_email: ACTIVE_USER.email,
    redirect_count: 42,
    enabled: true,
    valid_from: now - 30 * 24 * 60 * 60,
    valid_to: 0,
    created_at: now - 30 * 24 * 60 * 60,
    updated_at: now - 2 * 24 * 60 * 60
  }
];
function registerMockShortUrls() {
  persist("short-urls", MOCK_SHORT_URLS);
  registerMockEndpoint({
    path: PATH2,
    method: "GET",
    callback: (request) => {
      const q = `${request.query_params?.q || ""}`.toLowerCase();
      return MOCK_SHORT_URLS.filter((item) => !q || item.name.toLowerCase().includes(q) || item.uri.toLowerCase().includes(q));
    }
  });
  registerCrudEndpoints(PATH2, MOCK_SHORT_URLS, "uri-", "short URL");
}

// libs/mocks/src/lib/api/signage.mock.ts
var CONTENT_CATEGORIES = [
  { id: "announcements", name: "Announcements", color: "#FF5722" },
  { id: "events", name: "Events & Meetings", color: "#2196F3" },
  { id: "wayfinding", name: "Wayfinding", color: "#4CAF50" },
  { id: "emergency", name: "Emergency", color: "#F44336" },
  { id: "corporate", name: "Corporate Updates", color: "#673AB7" },
  { id: "wellness", name: "Wellness & Safety", color: "#FF9800" },
  { id: "social", name: "Social & Community", color: "#E91E63" },
  { id: "weather", name: "Weather & External", color: "#607D8B" }
];
var MEDIA_TYPES = [
  "image",
  "video",
  "html",
  "text",
  "slideshow",
  "live_feed",
  "weather",
  "calendar"
];
var DISPLAY_ORIENTATIONS = ["landscape", "portrait", "square"];
var DISPLAY_RESOLUTIONS = [
  "1920x1080",
  "1080x1920",
  "3840x2160",
  "2160x3840",
  "1366x768",
  "768x1366"
];
var CONTENT_TEMPLATES = [
  {
    category: "announcements",
    title: "Weekly Office Updates",
    description: "Important announcements and office news",
    content: {
      headline: "This Week in the Office",
      items: [
        "New parking guidelines effective Monday",
        "Kitchen renovation completed on Level 2",
        "Fire drill scheduled for Thursday 2PM",
        "Coffee machine maintenance this Friday"
      ]
    },
    duration: 15e3
    // 15 seconds
  },
  {
    category: "events",
    title: "Today's Meetings",
    description: "Real-time meeting room schedule display",
    content: {
      template: "meeting_schedule",
      refresh_interval: 3e5,
      // 5 minutes
      show_next_hours: 8
    },
    duration: 3e4
    // 30 seconds
  },
  {
    category: "wayfinding",
    title: "Building Directory",
    description: "Interactive building navigation",
    content: {
      floors: [
        {
          level: "Ground",
          departments: ["Reception", "Cafe", "Security"]
        },
        {
          level: "Level 1",
          departments: ["Engineering", "Product", "Design"]
        },
        { level: "Level 2", departments: ["Sales", "Marketing", "HR"] },
        {
          level: "Level 3",
          departments: ["Finance", "Legal", "Executive"]
        }
      ],
      emergency_exits: [
        "North Stairwell",
        "South Stairwell",
        "Main Elevator"
      ]
    },
    duration: 0
    // Interactive - no auto advance
  },
  {
    category: "emergency",
    title: "Emergency Procedures",
    description: "Safety information and emergency contacts",
    content: {
      type: "emergency_info",
      contacts: [
        { role: "Emergency", number: "000" },
        { role: "Building Security", number: "1234" },
        { role: "First Aid", number: "5678" }
      ],
      assembly_point: "Car Park Level 1",
      procedures: [
        "Stay calm and follow instructions",
        "Use stairs, not elevators",
        "Proceed to assembly point",
        "Wait for all-clear signal"
      ]
    },
    duration: 45e3
    // 45 seconds
  },
  {
    category: "corporate",
    title: "Company Performance Dashboard",
    description: "Key metrics and achievements",
    content: {
      metrics: [
        { label: "Projects Delivered", value: "127", trend: "+12%" },
        { label: "Client Satisfaction", value: "94%", trend: "+3%" },
        { label: "Team Members", value: "850", trend: "+15%" },
        { label: "Offices Worldwide", value: "12", trend: "stable" }
      ],
      achievement: "Certified Great Place to Work 2024"
    },
    duration: 2e4
    // 20 seconds
  },
  {
    category: "wellness",
    title: "Wellness Tips",
    description: "Daily wellness and safety reminders",
    content: {
      tips: [
        "Remember to take regular breaks from your screen",
        "Stay hydrated - aim for 8 glasses of water daily",
        "Use proper ergonomics at your workstation",
        "Take the stairs for extra exercise",
        "Practice good hand hygiene"
      ],
      wellness_metric: "Steps Goal: 10,000 daily"
    },
    duration: 12e3
    // 12 seconds
  },
  {
    category: "social",
    title: "Team Celebrations",
    description: "Celebrating our people and achievements",
    content: {
      celebrations: [
        "Happy Birthday Sarah Chen! \u{1F389}",
        "Congratulations to the Sales team on Q4 results! \u{1F3C6}",
        "Welcome new team members joining this month! \u{1F44B}",
        "Tech Talk Friday: AI in the Workplace - 3PM Conference Room A"
      ],
      upcoming_events: [
        "Monthly Town Hall - Next Tuesday 10AM",
        "Volunteer Day - Community Garden - Saturday",
        "Holiday Party Planning - Committee Meeting Thursday"
      ]
    },
    duration: 18e3
    // 18 seconds
  },
  {
    category: "weather",
    title: "Weather & Transport",
    description: "Current weather and transport updates",
    content: {
      weather: {
        current: "22\xB0C Partly Cloudy",
        forecast: "High 25\xB0C, Low 18\xB0C",
        uv_index: "6 - High",
        rain_chance: "20%"
      },
      transport: [
        "Train services operating normally",
        "Light delays on Bus Route 123",
        "Bike sharing stations: 85% available"
      ]
    },
    duration: 25e3
    // 25 seconds
  }
];
function generateMockDisplays() {
  const displays = [];
  let displayId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const levels = MOCK_LEVELS.filter((level) => level.parent_id === building.id);
    levels.forEach((level) => {
      const displayCount = predictableRandomInt(4, 2);
      for (let i = 0; i < displayCount; i++) {
        const orientation = DISPLAY_ORIENTATIONS[predictableRandomInt(DISPLAY_ORIENTATIONS.length)];
        const resolution = DISPLAY_RESOLUTIONS.filter((res) => orientation === "portrait" && res.includes("x1920") || orientation === "landscape" && res.includes("1920x") || orientation === "square")[0] || "1920x1080";
        const display = {
          id: `display-${String(displayId).padStart(3, "0")}`,
          name: `${level.name} Display ${String.fromCharCode(65 + i)}`,
          description: `Digital signage display located in ${level.name} of ${building.name}`,
          // Location
          building_id: building.id,
          level_id: level.id,
          zone_id: building.parent_id,
          location: {
            building: building.name,
            level: level.name,
            area: [
              "Main Corridor",
              "Reception Area",
              "Break Room",
              "Elevator Lobby",
              "Meeting Room Entrance"
            ][predictableRandomInt(5)],
            coordinates: {
              x: predictableRandomInt(100, 10),
              y: predictableRandomInt(100, 10)
            }
          },
          // Hardware specifications
          hardware: {
            model: [
              "Samsung QM55R",
              "LG 55SM5KE",
              "NEC MultiSync V554",
              "Sharp PN-M501"
            ][predictableRandomInt(4)],
            size_inches: [43, 50, 55, 65, 75][predictableRandomInt(5)],
            resolution,
            orientation,
            brightness: predictableRandomInt(500, 300),
            // nits
            contrast_ratio: "5000:1",
            viewing_angle: "178\xB0",
            operating_hours: predictableRandomInt(5e4, 3e4)
          },
          // Network and connectivity
          network: {
            ip_address: `192.168.${predictableRandomInt(255, 1)}.${predictableRandomInt(255, 1)}`,
            mac_address: `00:1B:44:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}`,
            connection_type: "Ethernet",
            bandwidth: "100 Mbps",
            wifi_enabled: predictableRandomInt(2) === 1
          },
          // Status and health
          status: ["online", "offline", "maintenance", "error"][predictableRandomInt(10) === 0 ? predictableRandomInt(4) : 0],
          // 90% online
          health: {
            cpu_usage: predictableRandomInt(30, 5),
            memory_usage: predictableRandomInt(60, 20),
            storage_used: predictableRandomInt(80, 30),
            temperature: predictableRandomInt(45, 25),
            uptime_hours: predictableRandomInt(720, 1),
            // Up to 30 days
            last_reboot: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 1)))
          },
          // Display settings
          settings: {
            brightness: predictableRandomInt(100, 60),
            volume: orientation === "portrait" ? 0 : predictableRandomInt(50, 10),
            power_schedule: {
              on_time: "06:00",
              off_time: "22:00",
              weekend_mode: "reduced_hours"
              // 08:00-18:00
            },
            sleep_mode: predictableRandomInt(2) === 1,
            auto_rotation: false,
            screensaver: {
              enabled: true,
              timeout_minutes: 30,
              type: "clock_and_weather"
            }
          },
          // Content preferences
          content_settings: {
            allowed_categories: CONTENT_CATEGORIES.slice(0, predictableRandomInt(CONTENT_CATEGORIES.length, 3)).map((c2) => c2.id),
            prohibited_content: ["external_feeds", "social_media"],
            emergency_override: true,
            local_content_cache: true,
            max_file_size_mb: 50,
            supported_formats: ["jpg", "png", "mp4", "html", "pdf"]
          },
          // Maintenance and monitoring
          maintenance: {
            last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90, 7))),
            next_service: getUnixTime(addDays(Date.now(), predictableRandomInt(180, 30))),
            service_provider: "TechCorp Solutions",
            warranty_expiry: getUnixTime(addDays(Date.now(), predictableRandomInt(365, 180))),
            cleaning_schedule: "weekly",
            firmware_version: `v${predictableRandomInt(5, 1)}.${predictableRandomInt(9, 0)}.${predictableRandomInt(99, 10)}`,
            last_update: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7)))
          },
          // Analytics and usage
          analytics: {
            daily_views: predictableRandomInt(500, 50),
            interaction_count: orientation !== "portrait" ? predictableRandomInt(50, 5) : 0,
            content_engagement: `${predictableRandomInt(85, 45)}%`,
            error_count_24h: predictableRandomInt(3, 0),
            avg_content_display_time: predictableRandomInt(20, 8)
          },
          // Timestamps
          created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(365, 30))),
          updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
          last_seen: getUnixTime(subDays(Date.now(), predictableRandomInt(1, 0)))
        };
        displays.push(display);
        displayId++;
      }
    });
  });
  return displays;
}
function generateMockMedia() {
  const media = [];
  let mediaId = 1;
  CONTENT_TEMPLATES.forEach((template) => {
    const variations = predictableRandomInt(3, 2);
    for (let v = 0; v < variations; v++) {
      const mediaItem = {
        id: `media-${String(mediaId).padStart(3, "0")}`,
        name: `${template.title} ${v > 0 ? `v${v + 1}` : ""}`,
        description: template.description,
        category: template.category,
        type: MEDIA_TYPES[predictableRandomInt(MEDIA_TYPES.length)],
        // File details
        file: {
          filename: `${template.title.toLowerCase().replace(/\s+/g, "_")}_${mediaId}.${template.category === "weather" ? "html" : "jpg"}`,
          size_bytes: predictableRandomInt(5e6, 1e5),
          // 100KB - 5MB
          mime_type: template.category === "weather" ? "text/html" : "image/jpeg",
          url: `https://signage-assets.place.tech/media/${mediaId}`,
          thumbnail_url: `https://signage-assets.place.tech/thumbs/${mediaId}_thumb.jpg`,
          duration_seconds: template.duration / 1e3 || null
        },
        // Content metadata
        content: template.content,
        tags: [template.category, "corporate", "approved"],
        // Display properties
        display_properties: {
          duration_ms: template.duration,
          transition: ["fade", "slide_left", "slide_right", "zoom"][predictableRandomInt(4)],
          background_color: "#ffffff",
          text_color: "#333333",
          font_family: "Inter, sans-serif",
          font_size: "responsive",
          aspect_ratio: "16:9"
        },
        // Scheduling and targeting
        scheduling: {
          start_date: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 0))),
          end_date: getUnixTime(addDays(Date.now(), predictableRandomInt(90, 30))),
          time_slots: [
            { start: "06:00", end: "10:00", days: [1, 2, 3, 4, 5] },
            { start: "12:00", end: "14:00", days: [1, 2, 3, 4, 5] },
            { start: "16:00", end: "19:00", days: [1, 2, 3, 4, 5] }
          ],
          priority: template.category === "emergency" ? 10 : predictableRandomInt(5, 1),
          frequency: predictableRandomInt(3, 1)
          // times per hour
        },
        // Approval and compliance
        approval: {
          status: ["approved", "pending", "rejected"][template.category === "emergency" ? 0 : predictableRandomInt(3)],
          approved_by: "facilities.manager@place.tech",
          approved_date: getUnixTime(subDays(Date.now(), predictableRandomInt(14, 1))),
          compliance_checked: true,
          brand_guidelines: template.category !== "emergency"
        },
        // Analytics
        performance: {
          impressions: predictableRandomInt(5e3, 500),
          unique_views: predictableRandomInt(2e3, 200),
          engagement_rate: `${predictableRandomInt(75, 25)}%`,
          average_view_time: predictableRandomInt(template.duration / 1e3, 3),
          skip_rate: `${predictableRandomInt(15, 2)}%`
        },
        // Metadata
        created_by: "marketing.team@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
        version: `v1.${v}`,
        status: "active"
      };
      media.push(mediaItem);
      mediaId++;
    }
  });
  return media;
}
function generateMockPlaylists(displays, media) {
  const playlists = [];
  let playlistId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const buildingDisplays = displays.filter((d) => d.building_id === building.id);
    const generalPlaylist = {
      id: `playlist-${String(playlistId).padStart(3, "0")}`,
      name: `${building.name} General Content`,
      description: `Default content rotation for all displays in ${building.name}`,
      // Content items (randomly select 5-8 media items)
      items: media.filter((m) => ["announcements", "corporate", "wellness"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, predictableRandomInt(8, 5)).map((mediaItem, index) => ({
        id: `item-${playlistId}-${index + 1}`,
        media_id: mediaItem.id,
        order: index + 1,
        duration_override: null,
        start_date: mediaItem.scheduling.start_date,
        end_date: mediaItem.scheduling.end_date,
        conditions: {
          weather: null,
          occupancy: null,
          time_based: true
        }
      })),
      // Playlist settings
      settings: {
        loop: true,
        shuffle: false,
        auto_advance: true,
        emergency_interruption: true,
        volume_control: true,
        transition_effect: "fade",
        default_duration: 15e3
      },
      // Targeting
      target: {
        displays: buildingDisplays.map((d) => d.id),
        zones: [building.id],
        categories: ["lobby", "corridor", "general"]
      },
      // Scheduling
      schedule: {
        active_hours: {
          start: "06:00",
          end: "22:00",
          timezone: "Australia/Sydney"
        },
        days: [1, 2, 3, 4, 5],
        // Weekdays
        override_holidays: false
      },
      // Metadata
      created_by: "facilities.manager@place.tech",
      created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 7))),
      updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
      status: "active",
      priority: 5
    };
    playlists.push(generalPlaylist);
    playlistId++;
    if (predictableRandomInt(2) === 0) {
      const meetingPlaylist = {
        id: `playlist-${String(playlistId).padStart(3, "0")}`,
        name: `${building.name} Meeting Rooms`,
        description: `Content specifically for meeting room displays in ${building.name}`,
        items: media.filter((m) => ["events", "wayfinding", "announcements"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, 4).map((mediaItem, index) => ({
          id: `item-${playlistId}-${index + 1}`,
          media_id: mediaItem.id,
          order: index + 1,
          duration_override: null,
          start_date: mediaItem.scheduling.start_date,
          end_date: mediaItem.scheduling.end_date
        })),
        target: {
          displays: buildingDisplays.filter((d) => d.location.area.includes("Meeting")).map((d) => d.id),
          zones: [building.id],
          categories: ["meeting_room"]
        },
        settings: {
          loop: true,
          auto_advance: true,
          emergency_interruption: true,
          show_room_schedule: true,
          integration: "calendar_api"
        },
        created_by: "it.admin@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(21, 3))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(5, 0))),
        status: "active",
        priority: 7
      };
      playlists.push(meetingPlaylist);
      playlistId++;
    }
  });
  const emergencyPlaylist = {
    id: `playlist-emergency`,
    name: "Emergency Broadcast",
    description: "High-priority emergency communications for all displays",
    items: media.filter((m) => m.category === "emergency").map((mediaItem, index) => ({
      id: `emergency-item-${index + 1}`,
      media_id: mediaItem.id,
      order: index + 1,
      duration_override: null
    })),
    target: {
      displays: displays.map((d) => d.id),
      // All displays
      zones: ["zone-EmWFTjuYExK"],
      categories: ["emergency"]
    },
    settings: {
      loop: true,
      interrupt_all: true,
      max_volume: true,
      ignore_schedule: true,
      manual_dismiss_only: true
    },
    created_by: "security.manager@place.tech",
    created_at: getUnixTime(subDays(Date.now(), 100)),
    updated_at: getUnixTime(subDays(Date.now(), 50)),
    status: "standby",
    // Activated only during emergencies
    priority: 10
  };
  playlists.push(emergencyPlaylist);
  const hour = 60 * 60;
  const now2 = getUnixTime(Date.now());
  const distribution_schedules = [
    [{ play_at: now2 + 3 * hour, play_period: 60 }],
    [],
    [{ play_at: now2 + hour, play_period: 30 }],
    [{ play_at: now2 - 10 * 60, play_period: 60 }],
    [{ play_at: now2 - 48 * hour, play_period: 60 }]
  ];
  playlists.push({
    id: "playlist-distribution",
    name: "Lobby Distribution",
    description: "Media scheduled to play at set times in the lobby",
    distribution: true,
    items: distribution_schedules.map((schedules, index) => ({
      id: `distribution-item-${index + 1}`,
      media_id: media[index].id,
      order: index + 1,
      schedules
    })),
    settings: { loop: true, shuffle: false, default_duration: 15e3 },
    target: { displays: [], zones: [], categories: [] },
    created_by: "facilities.manager@place.tech",
    created_at: getUnixTime(subDays(Date.now(), 10)),
    updated_at: getUnixTime(subDays(Date.now(), 1)),
    status: "active"
  });
  return playlists;
}
var MOCK_DISPLAYS = generateMockDisplays();
var MOCK_MEDIA = generateMockMedia();
var MOCK_PLAYLISTS = generateMockPlaylists(MOCK_DISPLAYS, MOCK_MEDIA);
var MOCK_TEMPLATES = [];
var MOCK_TEMPLATE_MAPPINGS = [];
var MOCK_PLUGINS = [
  {
    id: "weather",
    name: "Weather",
    description: "Current weather signage widget",
    uri: "/plugins/weather/index.html",
    enabled: true,
    defaults: { units: "metric" },
    params: {
      location: {
        type: "string",
        title: "Location",
        default: "Sydney"
      }
    }
  },
  {
    id: "clock",
    name: "Clock",
    description: "Clock signage widget",
    uri: "/plugins/clock/index.html",
    enabled: true,
    defaults: { format: "24h" },
    params: {}
  }
];
var SIGNAGE_GROUPS = [
  {
    group: {
      id: "signage-group-facilities",
      name: "Facilities Signage",
      description: "Facility-managed signage content",
      subsystems: ["signage"]
    },
    permissions: 255
  },
  {
    group: {
      id: "signage-group-marketing",
      name: "Marketing Signage",
      description: "Marketing managed signage content",
      subsystems: ["signage"]
    },
    permissions: 129
  }
];
var SIGNAGE_GROUP_USERS = [
  {
    group_id: "signage-group-facilities",
    user_id: MOCK_STAFF[0].email,
    permissions: 255,
    user: MOCK_STAFF[0]
  },
  {
    group_id: "signage-group-facilities",
    user_id: MOCK_STAFF[1].email,
    permissions: 65,
    user: MOCK_STAFF[1]
  }
];
var MOCK_DIRECTORY_GROUPS = [
  {
    id: "6a1c9a4e-0000-4000-8000-000000000001",
    name: "All Staff",
    email: "all-staff@place.tech"
  },
  {
    id: "6a1c9a4e-0000-4000-8000-000000000002",
    name: "Facilities Team",
    email: "facilities@place.tech"
  },
  {
    id: "6a1c9a4e-0000-4000-8000-000000000003",
    name: "Marketing Team",
    email: "marketing@place.tech"
  },
  {
    id: "6a1c9a4e-0000-4000-8000-000000000004",
    name: "Reception",
    email: "reception@place.tech"
  }
];
var SIGNAGE_GROUP_ZONES = [
  {
    group_id: "signage-group-facilities",
    zone_id: MOCK_BUILDINGS[0].id,
    permissions: 255,
    deny: false,
    zone: MOCK_BUILDINGS[0]
  }
];
function listSignageMockGroups(query_params = {}) {
  const groups = SIGNAGE_GROUPS.map((item) => item.group).filter((group) => {
    if (query_params.subsystem && !group.subsystems?.includes(query_params.subsystem)) {
      return false;
    }
    if (query_params.parent_id && group.parent_id !== query_params.parent_id) {
      return false;
    }
    if (query_params.q) {
      const search = query_params.q.toLowerCase();
      return group.name.toLowerCase().includes(search) || group.description.toLowerCase().includes(search);
    }
    return true;
  });
  const limit = Number(query_params.limit || groups.length) || groups.length;
  const offset = Number(query_params.offset || 0) || 0;
  return groups.slice(offset, offset + limit);
}
function filterByGroup(items, group_id = "") {
  if (!group_id || group_id === SIGNAGE_GROUPS[0].group.id)
    return items;
  return items.filter((_, index) => index % 2 === 0);
}
function sharedWithGroups(items, id) {
  const index = items.findIndex((item) => item.id === id);
  if (index < 0)
    return [];
  const groups = index % 2 === 0 ? SIGNAGE_GROUPS : [SIGNAGE_GROUPS[0]];
  return groups.map(({ group }) => ({ id: group.id, name: group.name }));
}
function toEngineMedia(item) {
  const is_video = item.type === "video";
  return __spreadValues({
    id: item.id,
    name: item.name,
    description: item.description,
    media_type: is_video ? "video" : "image",
    media_uri: item.file?.url,
    media_id: "",
    thumbnail_id: item.file?.thumbnail_url ? item.id + "-thumb" : "",
    orientation: "landscape",
    play_time: item.display_properties?.duration_ms || 15e3,
    video_length: is_video ? item.display_properties?.duration_ms : 0,
    created_at: item.created_at,
    updated_at: item.updated_at,
    valid_from: item.scheduling?.start_date,
    valid_until: item.scheduling?.end_date,
    tags: item.tags || []
  }, item.engine);
}
function toEnginePlaylist(item) {
  return __spreadValues({
    id: item.id,
    name: item.name,
    description: item.description,
    enabled: item.status !== "disabled",
    distribution: !!item.distribution,
    random: !!item.settings?.shuffle,
    default_duration: item.settings?.default_duration || 15e3,
    default_animation: 1,
    orientation: "landscape",
    play_count: 0,
    created_at: item.created_at,
    updated_at: item.updated_at
  }, item.engine);
}
function findItem(list, id, label) {
  const item = list.find((entry) => entry.id === id);
  if (!item)
    throw { status: 404, message: `${label} not found` };
  return item;
}
function removeItem(list, id) {
  const index = list.findIndex((entry) => entry.id === id);
  if (index >= 0)
    list.splice(index, 1);
}
function applyEngineChanges(item, changes) {
  item.engine = __spreadValues(__spreadValues({}, item.engine), changes);
  if (changes.tags)
    item.tags = changes.tags;
  item.updated_at = getUnixTime(Date.now());
}
function shareResult(query_params) {
  const items = `${query_params?.items || ""}`.split(",").filter(Boolean);
  return { linked: items, already_present: [] };
}
function approvers(group_id) {
  return SIGNAGE_GROUP_USERS.filter((item) => item.group_id === group_id).map((item) => ({
    id: item.user?.email || item.user_id,
    name: item.user?.name || item.user_id
  }));
}
function playlistMediaResponse(playlist_id, approved = false) {
  const playlist = MOCK_PLAYLISTS.find((item) => item.id === playlist_id);
  const distribution = !!playlist?.distribution;
  const media_ids = [
    ...new Set((playlist?.items || []).map((item) => item.media_id))
  ];
  return {
    id: `${playlist_id}-media`,
    playlist_id,
    media: media_ids.map((id) => MOCK_MEDIA.find((item) => item.id === id)).filter((item) => !!item).map(toEngineMedia),
    items: (playlist?.items || []).map((item) => distribution ? item.id : item.media_id),
    schedules: (playlist?.items || []).map((item) => __spreadValues({
      id: item.id,
      item_id: item.media_id,
      schedules: item.schedules || []
    }, distribution ? {
      media: toEngineMedia(MOCK_MEDIA.find(({ id }) => id === item.media_id))
    } : {})),
    approved,
    approval_requested: false,
    updated_at: playlist?.updated_at || getUnixTime(Date.now())
  };
}
function signageDisplay(display_id) {
  if (display_id === "display-1") {
    throw { status: 404, message: "Display not found" };
  }
  const display = MOCK_DISPLAYS.find((item) => item.id === display_id) || MOCK_DISPLAYS[0];
  const playlists = MOCK_PLAYLISTS.filter((playlist) => playlist.target?.displays?.includes(display.id) || playlist.target?.zones?.includes(display.zone_id)).slice(0, 3);
  const mapped_playlists = playlists.length ? playlists : MOCK_PLAYLISTS.slice(0, 2);
  const media_ids = [
    ...new Set(mapped_playlists.flatMap((playlist) => playlist.items.map((item) => item.media_id)))
  ];
  return {
    id: display_id,
    zones: [display.zone_id, display.building_id].filter(Boolean),
    playlist_mappings: {
      [display_id]: mapped_playlists.map((playlist) => playlist.id),
      [display.zone_id]: []
    },
    playlist_config: Object.fromEntries(mapped_playlists.map((playlist) => [
      playlist.id,
      [
        toEnginePlaylist(playlist),
        playlist.items.map((item) => item.media_id)
      ]
    ])),
    playlist_media: media_ids.map((id) => MOCK_MEDIA.find((item) => item.id === id)).filter((item) => !!item).map(toEngineMedia),
    plugins: MOCK_PLUGINS
  };
}
function registerMockSignage() {
  persist("signage-media", MOCK_MEDIA);
  persist("signage-playlists", MOCK_PLAYLISTS);
  persist("signage-groups", SIGNAGE_GROUPS);
  persist("signage-group-users", SIGNAGE_GROUP_USERS);
  persist("signage-group-zones", SIGNAGE_GROUP_ZONES);
  persist("signage-templates", MOCK_TEMPLATES);
  persist("signage-template-mappings", MOCK_TEMPLATE_MAPPINGS);
  MOCK_DISPLAYS.forEach((display, index) => {
    if (index < 10 && !MOCK_ZONES.some((zone) => zone.id === display.id)) {
      MOCK_ZONES.push({
        id: display.id,
        tags: ["signage", "display"],
        display_name: display.name.split(" ").slice(-2).join(" "),
        // Extract "Display A" from "Level 1 Display A"
        name: display.name,
        parent_id: display.building_id,
        description: display.description,
        hardware: display.hardware,
        status: display.status,
        location: display.location
      });
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/groups/current",
    method: "GET",
    callback: (request) => {
      if (request.query_params?.subsystem === "signage") {
        return SIGNAGE_GROUPS;
      }
      return [];
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/groups",
    method: "GET",
    callback: (request) => listSignageMockGroups(request.query_params)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/groups",
    method: "POST",
    callback: (request) => {
      const group = __spreadProps(__spreadValues({}, request.body), {
        id: `signage-group-${Date.now()}`,
        subsystems: request.body?.subsystems || ["signage"],
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUPS.push({ group, permissions: 255 });
      return group;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/groups/:id",
    method: "PATCH",
    callback: (request) => {
      const item = SIGNAGE_GROUPS.find(({ group }) => group.id === request.route_params.id);
      if (!item)
        throw { status: 404, message: "Group not found" };
      item.group = __spreadProps(__spreadValues(__spreadValues({}, item.group), request.body), {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item.group;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/groups/:id",
    method: "GET",
    callback: (request) => {
      const item = SIGNAGE_GROUPS.find(({ group }) => group.id === request.route_params.id);
      if (!item)
        throw { status: 404, message: "Group not found" };
      return item.group;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/groups/:id/features",
    method: "GET",
    callback: (request) => {
      const groups = SIGNAGE_GROUPS.map(({ group: group2 }) => group2);
      const chain = [];
      let group = groups.find(({ id }) => id === request.route_params.id);
      while (group && !chain.includes(group)) {
        chain.unshift(group);
        group = groups.find(({ id }) => id === group.parent_id);
      }
      if (!chain.length)
        throw { status: 404, message: "Not found" };
      const features = {};
      for (const { features: own = {} } of chain) {
        for (const [subsystem2, flags] of Object.entries(own)) {
          features[subsystem2] = __spreadValues(__spreadValues({}, features[subsystem2]), flags);
        }
      }
      const subsystem = request.query_params?.subsystem;
      return subsystem ? { [subsystem]: features[subsystem] || {} } : features;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/groups/:id",
    method: "DELETE",
    callback: (request) => {
      const index = SIGNAGE_GROUPS.findIndex(({ group }) => group.id === request.route_params.id);
      if (index >= 0)
        SIGNAGE_GROUPS.splice(index, 1);
      return {};
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/groups",
    method: "GET",
    callback: (request) => {
      const q = (request.query_params?.q || "").toLowerCase();
      return MOCK_DIRECTORY_GROUPS.filter((group) => !q || group.name.toLowerCase().includes(q) || group.email.toLowerCase().includes(q));
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_users",
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_USERS.filter((item) => item.group_id === request.query_params?.group_id)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_users",
    method: "POST",
    callback: (request) => {
      const user = MOCK_STAFF.find((item2) => item2.email === request.body.user_id || item2.id === request.body.user_id);
      const group = SIGNAGE_GROUPS.find((item2) => item2.group.id === request.body.group_id)?.group;
      const item = __spreadProps(__spreadValues({}, request.body), {
        user_id: request.body.user_id,
        permissions: request.body.permissions ?? group?.default_permissions ?? 0,
        user,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUP_USERS.push(item);
      return item;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_users/:user_id/:group_id",
    method: "PATCH",
    callback: (request) => {
      const user_id = decodeURIComponent(request.route_params.user_id);
      const group_id = decodeURIComponent(request.route_params.group_id);
      const item = SIGNAGE_GROUP_USERS.find((row) => row.user_id === user_id && row.group_id === group_id);
      if (!item)
        throw { status: 404, message: "Group user not found" };
      Object.assign(item, request.body, {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_users/:user_id/:group_id",
    method: "DELETE",
    callback: (request) => {
      const user_id = decodeURIComponent(request.route_params.user_id);
      const group_id = decodeURIComponent(request.route_params.group_id);
      const index = SIGNAGE_GROUP_USERS.findIndex((row) => row.user_id === user_id && row.group_id === group_id);
      if (index >= 0)
        SIGNAGE_GROUP_USERS.splice(index, 1);
      return {};
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_zones",
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_ZONES.filter((item) => item.group_id === request.query_params?.group_id)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_zones",
    method: "POST",
    callback: (request) => {
      const zone = MOCK_ZONES.find((item2) => item2.id === request.body.zone_id);
      const item = __spreadProps(__spreadValues({}, request.body), {
        permissions: request.body.permissions || 0,
        deny: !!request.body.deny,
        zone,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUP_ZONES.push(item);
      return item;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_zones/:group_id/:zone_id",
    method: "PATCH",
    callback: (request) => {
      const group_id = decodeURIComponent(request.route_params.group_id);
      const zone_id = decodeURIComponent(request.route_params.zone_id);
      const item = SIGNAGE_GROUP_ZONES.find((row) => row.group_id === group_id && row.zone_id === zone_id);
      if (!item)
        throw { status: 404, message: "Group zone not found" };
      Object.assign(item, request.body, {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/group_zones/:group_id/:zone_id",
    method: "DELETE",
    callback: (request) => {
      const group_id = decodeURIComponent(request.route_params.group_id);
      const zone_id = decodeURIComponent(request.route_params.zone_id);
      const index = SIGNAGE_GROUP_ZONES.findIndex((row) => row.group_id === group_id && row.zone_id === zone_id);
      if (index >= 0)
        SIGNAGE_GROUP_ZONES.splice(index, 1);
      return {};
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media",
    method: "GET",
    callback: (request) => filterByGroup(MOCK_MEDIA, request.query_params?.group_id).map(toEngineMedia)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/tags",
    method: "GET",
    callback: (request) => [
      ...new Set(filterByGroup(MOCK_MEDIA, request.query_params?.group_id).flatMap((item) => item.tags || []).filter((tag) => !!tag))
    ]
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/tag_counts",
    method: "GET",
    callback: (request) => {
      const counts = {};
      for (const item of filterByGroup(MOCK_MEDIA, request.query_params?.group_id)) {
        for (const tag of item.tags || []) {
          if (!tag)
            continue;
          counts[tag] = (counts[tag] || 0) + 1;
        }
      }
      return counts;
    }
  });
  const taggedMedia = (query_params, tag) => filterByGroup(MOCK_MEDIA, query_params?.group_id).filter((item) => toEngineMedia(item).tags.includes(tag));
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/tags",
    method: "PATCH",
    callback: ({ query_params }) => {
      const { current_tag, new_tag } = query_params;
      for (const item of taggedMedia(query_params, current_tag)) {
        const tags = toEngineMedia(item).tags.map((tag) => tag === current_tag ? new_tag : tag);
        applyEngineChanges(item, { tags: [...new Set(tags)] });
      }
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/tags",
    method: "DELETE",
    callback: ({ query_params }) => {
      const { tag } = query_params;
      for (const item of taggedMedia(query_params, tag)) {
        if (`${query_params.remove_media}` === "true") {
          removeItem(MOCK_MEDIA, item.id);
          continue;
        }
        applyEngineChanges(item, {
          tags: toEngineMedia(item).tags.filter((value) => value !== tag)
        });
      }
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media",
    method: "POST",
    callback: (request) => {
      const now2 = getUnixTime(Date.now());
      const item = {
        id: mockId("media-"),
        name: request.body?.name || "",
        type: request.body?.media_type === "video" ? "video" : "image",
        tags: request.body?.tags || [],
        created_at: now2,
        updated_at: now2,
        engine: __spreadValues({}, request.body)
      };
      MOCK_MEDIA.push(item);
      return toEngineMedia(item);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/:id",
    method: "GET",
    callback: (request) => __spreadProps(__spreadValues({}, toEngineMedia(findItem(MOCK_MEDIA, request.route_params.id, "Media"))), {
      shared_with: sharedWithGroups(MOCK_MEDIA, request.route_params.id)
    })
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/:id",
    method: "PATCH",
    callback: (request) => {
      const item = findItem(MOCK_MEDIA, request.route_params.id, "Media");
      applyEngineChanges(item, request.body || {});
      return toEngineMedia(item);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/:id",
    method: "DELETE",
    callback: (request) => {
      const id = request.route_params.id;
      removeItem(MOCK_MEDIA, id);
      for (const playlist of MOCK_PLAYLISTS) {
        playlist.items = playlist.items.filter((item) => item.media_id !== id);
      }
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/:id/thumbnail",
    method: "GET",
    callback: () => ({})
  });
  registerMockEndpoint({
    path: "/api/engine/v2/uploads/screenshot",
    method: "POST",
    callback: (request) => ({
      id: `upload-screenshot-${Date.now()}`,
      file_name: `screenshot-${new URL(request.body.url).host}.jpg`,
      file_mime: "image/jpeg",
      tags: ["screenshot"]
    })
  });
  registerMockEndpoint({
    path: "/api/engine/v2/uploads/:id",
    method: "DELETE",
    callback: () => ({})
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/media/share",
    method: "POST",
    callback: (request) => shareResult(request.query_params)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/plugins",
    method: "GET",
    callback: () => MOCK_PLUGINS
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/plugins/:id",
    method: "GET",
    callback: (request) => MOCK_PLUGINS.find((plugin) => plugin.id === request.route_params.id) || {}
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists",
    method: "GET",
    callback: (request) => filterByGroup(MOCK_PLAYLISTS, request.query_params?.group_id).map(toEnginePlaylist)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/approvers",
    method: "GET",
    callback: (request) => approvers(request.query_params?.group_id)
  });
  const findPlaylist = (id) => findItem(MOCK_PLAYLISTS, id, "Playlist");
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists",
    method: "POST",
    callback: (request) => {
      const now2 = getUnixTime(Date.now());
      const playlist = {
        id: mockId("playlist-"),
        name: request.body?.name || "",
        description: request.body?.description || "",
        status: "active",
        items: [],
        settings: {},
        created_at: now2,
        updated_at: now2,
        engine: __spreadValues({}, request.body)
      };
      MOCK_PLAYLISTS.push(playlist);
      return toEnginePlaylist(playlist);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id",
    method: "GET",
    callback: (request) => __spreadProps(__spreadValues({}, toEnginePlaylist(findPlaylist(request.route_params.id))), {
      shared_with: sharedWithGroups(MOCK_PLAYLISTS, request.route_params.id)
    })
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id",
    method: "PATCH",
    callback: (request) => {
      const playlist = findPlaylist(request.route_params.id);
      applyEngineChanges(playlist, request.body || {});
      return toEnginePlaylist(playlist);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id",
    method: "DELETE",
    callback: (request) => removeItem(MOCK_PLAYLISTS, request.route_params.id)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id/media",
    method: "GET",
    callback: (request) => playlistMediaResponse(request.route_params.id, false)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id/media",
    method: "POST",
    callback: (request) => {
      const playlist = findPlaylist(request.route_params.id);
      const distribution = !!playlist.distribution;
      const refs = Array.isArray(request.body) ? request.body : [];
      playlist.items = refs.map((ref) => playlist.items.find((item) => (distribution ? item.id : item.media_id) === ref) || { id: mockId("item-"), media_id: ref, schedules: [] });
      playlist.updated_at = getUnixTime(Date.now());
      return playlistMediaResponse(playlist.id, false);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id/media/schedule",
    method: "POST",
    callback: (request) => {
      const playlist = findPlaylist(request.route_params.id);
      playlist.items.push({
        id: mockId("schedule-"),
        media_id: request.body?.item_id,
        schedules: request.body?.schedules || []
      });
      playlist.updated_at = getUnixTime(Date.now());
      return playlistMediaResponse(playlist.id, false);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id/media/schedule/:item_id",
    method: "PATCH",
    callback: (request) => {
      const playlist = findPlaylist(request.route_params.id);
      const item = findItem(playlist.items, request.route_params.item_id, "Schedule");
      if (request.body?.item_id)
        item.media_id = request.body.item_id;
      if (request.body?.schedules)
        item.schedules = request.body.schedules;
      playlist.updated_at = getUnixTime(Date.now());
      return {
        id: item.id,
        item_id: item.media_id,
        schedules: item.schedules || []
      };
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id/media/revisions",
    method: "GET",
    callback: (request) => [
      playlistMediaResponse(request.route_params.id, false),
      playlistMediaResponse(request.route_params.id, true)
    ]
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id/media/approve",
    method: "POST",
    callback: (request) => playlistMediaResponse(request.route_params.id, true)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/:id/media/request_approval",
    method: "POST",
    callback: () => ({})
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/playlists/share",
    method: "POST",
    callback: (request) => shareResult(request.query_params)
  });
  registerMockSignageTemplates();
  registerMockEndpoint({
    path: "/api/engine/v2/signage/:id",
    method: "GET",
    callback: (request) => signageDisplay(request.route_params.id)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/:id/metrics",
    method: "POST",
    callback: () => ({})
  });
  registerMockSignageImageGen();
}
function registerMockSignageTemplates() {
  const BASE2 = "/api/engine/v2/signage/templates";
  const MAPPINGS = "/api/engine/v2/signage/template_mappings";
  const now2 = () => (/* @__PURE__ */ new Date()).toISOString();
  const findTemplate = (id) => findItem(MOCK_TEMPLATES, id, "Template");
  registerMockEndpoint({
    path: BASE2,
    method: "GET",
    callback: ({ query_params }) => filterByGroup(MOCK_TEMPLATES, query_params?.group_id).filter((item) => `${query_params?.approved}` !== "true" || item.approved)
  });
  registerMockEndpoint({
    path: `${BASE2}/approvers`,
    method: "GET",
    callback: ({ query_params }) => approvers(query_params?.group_id)
  });
  registerMockEndpoint({
    path: `${BASE2}/share`,
    method: "POST",
    callback: ({ query_params }) => shareResult(query_params)
  });
  registerMockEndpoint({
    path: `${BASE2}/:id`,
    method: "GET",
    callback: ({ route_params }) => __spreadProps(__spreadValues({}, findTemplate(route_params.id)), {
      shared_with: sharedWithGroups(MOCK_TEMPLATES, route_params.id)
    })
  });
  registerMockEndpoint({
    path: BASE2,
    method: "POST",
    callback: ({ body }) => {
      const template = __spreadProps(__spreadValues({
        tags: [],
        layouts: []
      }, body), {
        id: mockId("template-"),
        approved: false,
        approval_requested: false,
        created_at: now2(),
        updated_at: now2()
      });
      MOCK_TEMPLATES.push(template);
      return template;
    }
  });
  registerMockEndpoint({
    path: `${BASE2}/:id`,
    method: "PATCH",
    callback: ({ route_params, body }) => Object.assign(findTemplate(route_params.id), body, {
      id: route_params.id,
      updated_at: now2()
    })
  });
  registerMockEndpoint({
    path: `${BASE2}/:id`,
    method: "DELETE",
    callback: ({ route_params }) => {
      removeItem(MOCK_TEMPLATES, route_params.id);
      const mappings = MOCK_TEMPLATE_MAPPINGS.filter((item) => item.template_id === route_params.id);
      mappings.forEach((item) => removeItem(MOCK_TEMPLATE_MAPPINGS, item.id));
    }
  });
  registerMockEndpoint({
    path: `${BASE2}/:id/draft`,
    method: "DELETE",
    callback: ({ route_params }) => findTemplate(route_params.id)
  });
  registerMockEndpoint({
    path: `${BASE2}/:id/approve`,
    method: "POST",
    callback: ({ route_params }) => Object.assign(findTemplate(route_params.id), {
      approved: true,
      approval_requested: false,
      approved_by_id: ACTIVE_USER.id,
      approved_by_name: ACTIVE_USER.name,
      approved_by_email: ACTIVE_USER.email,
      updated_at: now2()
    })
  });
  registerMockEndpoint({
    path: `${BASE2}/:id/request_approval`,
    method: "POST",
    callback: ({ route_params }) => {
      Object.assign(findTemplate(route_params.id), {
        approval_requested: true,
        requested_by_id: ACTIVE_USER.id
      });
    }
  });
  registerMockEndpoint({
    path: MAPPINGS,
    method: "GET",
    callback: ({ query_params }) => MOCK_TEMPLATE_MAPPINGS.filter((item) => ["control_system_id", "zone_id", "template_id"].every((key) => !query_params?.[key] || item[key] === query_params[key]))
  });
  registerMockEndpoint({
    path: `${MAPPINGS}/:id`,
    method: "GET",
    callback: ({ route_params }) => findItem(MOCK_TEMPLATE_MAPPINGS, route_params.id, "Mapping")
  });
  registerMockEndpoint({
    path: MAPPINGS,
    method: "POST",
    callback: ({ body }) => {
      const mapping = __spreadProps(__spreadValues({
        schedule: null
      }, body), {
        id: mockId("template-mapping-"),
        created_at: now2(),
        updated_at: now2()
      });
      MOCK_TEMPLATE_MAPPINGS.push(mapping);
      return mapping;
    }
  });
  registerMockEndpoint({
    path: `${MAPPINGS}/:id`,
    method: "PATCH",
    callback: ({ route_params, body }) => Object.assign(findItem(MOCK_TEMPLATE_MAPPINGS, route_params.id, "Mapping"), body, { id: route_params.id, updated_at: now2() })
  });
  registerMockEndpoint({
    path: `${MAPPINGS}/:id`,
    method: "DELETE",
    callback: ({ route_params }) => removeItem(MOCK_TEMPLATE_MAPPINGS, route_params.id)
  });
}
function registerMockSignageImageGen() {
  const IMAGE_GEN_JOBS = {};
  const SAMPLE_IMAGES = MOCK_MEDIA.slice(0, 4).map((item) => item.id);
  const now2 = () => Math.floor(Date.now() / 1e3);
  function makeJob(request, kind) {
    const count = Math.min(Math.max(request.candidates || 2, 1), 4);
    const job = {
      id: `signage-ai-job-${Object.keys(IMAGE_GEN_JOBS).length + 1}`,
      state: "queued",
      kind,
      provider: "OPENAI",
      model: "gpt-image-2.5-sunburst",
      candidates: count,
      images_produced: 0,
      parent_job_id: request.parent_job_id,
      version: 0,
      prompt: request.prompt,
      images: Array.from({ length: count }, () => null),
      created_at: now2()
    };
    IMAGE_GEN_JOBS[job.id] = job;
    if (`${request.prompt}`.includes("trigger-moderation")) {
      setTimeout(() => {
        job.state = "failed";
        job.error_kind = "moderation";
        job.error_message = "The request was blocked by the safety system";
        job.version += 1;
      }, 600);
      return job;
    }
    job.state = "running";
    for (let index = 0; index < count; index++) {
      setTimeout(() => {
        const media_id = SAMPLE_IMAGES[index % SAMPLE_IMAGES.length] || "upload-1";
        job.images[index] = {
          state: "done",
          index,
          upload_id: media_id,
          url: `/api/engine/v2/uploads/${media_id}/url`,
          width: 2048,
          height: 1152,
          mime: "image/jpeg"
        };
        job.images_produced += 1;
        job.version += 1;
        if (job.images_produced >= count) {
          job.state = "done";
          job.finished_at = now2();
          job.version += 1;
        }
      }, 800 + index * 500);
    }
    return job;
  }
  registerMockEndpoint({
    path: "/api/engine/v2/signage/ai/capabilities",
    method: "GET",
    callback: () => ({
      enabled: true,
      providers: [
        {
          id: "signage-ai-provider-1",
          name: "Mock provider",
          provider: "OPENAI",
          default_model: "gpt-image-2.5-sunburst",
          models: [
            {
              id: "gpt-image-2.5-sunburst",
              name: "GPT Image 2.5 Sunburst",
              generate: true,
              edit: true,
              enhance: true,
              max_references: 16,
              max_candidates: 4,
              qualities: ["standard", "high"],
              aspect_ratios: ["16:9", "9:16", "1:1", "4:3"]
            }
          ]
        }
      ],
      default_provider_id: "signage-ai-provider-1",
      aspect_ratios: ["16:9", "9:16", "1:1", "4:3"],
      qualities: ["standard", "high"],
      max_candidates: 4,
      logo_layer: false,
      quota: { user_remaining_today: 42, domain_remaining_month: 900 }
    })
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/ai/generate",
    method: "POST",
    callback: (request) => makeJob(request.body || {}, "generate")
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/ai/edit",
    method: "POST",
    callback: (request) => makeJob(request.body || {}, "edit")
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/ai/jobs",
    method: "GET",
    callback: () => Object.values(IMAGE_GEN_JOBS)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/ai/jobs/:id",
    method: "GET",
    callback: (request) => {
      const job = IMAGE_GEN_JOBS[request.route_params.id];
      if (!job)
        throw { status: 404, message: "No such job" };
      return job;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/ai/jobs/:id/cancel",
    method: "POST",
    callback: (request) => {
      const job = IMAGE_GEN_JOBS[request.route_params.id];
      if (!job)
        throw { status: 404, message: "No such job" };
      if (job.state === "queued" || job.state === "running") {
        job.state = "cancelled";
        job.version += 1;
      }
      return job;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/signage/ai/jobs/:id/claim",
    method: "POST",
    callback: (request) => {
      const job = IMAGE_GEN_JOBS[request.route_params.id];
      if (!job)
        throw { status: 404, message: "No such job" };
      const entry = job.images.find((image) => image?.upload_id === request.body?.upload_id);
      if (entry)
        entry.item_id = request.body?.item_id;
      return job;
    }
  });
}

// libs/mocks/src/lib/api/surveys.mock.ts
var MOCK_SURVEYS = [
  {
    id: 1,
    title: "Employee Satisfaction Survey",
    description: "Annual survey to assess employee satisfaction and workplace culture",
    trigger: "quarterly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-G",
    pages: [
      {
        title: "Job Satisfaction",
        description: "Questions about your current role and responsibilities",
        question_order: [1, 2, 3]
      },
      {
        title: "Work Environment",
        description: "Questions about your workplace and facilities",
        question_order: [4, 5, 6]
      }
    ]
  },
  {
    id: 2,
    title: "Facility Feedback Survey",
    description: "Help us improve our office facilities and amenities",
    trigger: "monthly",
    building_id: "bld-02",
    zone_id: "bld-02_lvl-2",
    pages: [
      {
        title: "Office Facilities",
        description: "Rate your experience with our office facilities",
        question_order: [7, 8, 9]
      }
    ]
  },
  {
    id: 3,
    title: "Meeting Room Experience",
    description: "Quick feedback about your meeting room experience",
    trigger: "after_booking",
    building_id: "bld-03",
    zone_id: "bld-03_lvl-1",
    pages: [
      {
        title: "Room Quality",
        description: "How was your meeting room experience?",
        question_order: [10, 11]
      }
    ]
  },
  {
    id: 4,
    title: "Melbourne Office Feedback",
    description: "Help us improve the Melbourne office experience",
    trigger: "monthly",
    building_id: "bld-04",
    zone_id: "bld-04_lvl-1",
    pages: [
      {
        title: "Office Environment",
        description: "Rate your Melbourne office experience",
        question_order: [12, 13, 14]
      }
    ]
  },
  {
    id: 5,
    title: "Innovation Lab Usage Survey",
    description: "Feedback on research and development facilities",
    trigger: "quarterly",
    building_id: "bld-05",
    zone_id: "bld-05_lvl-2",
    pages: [
      {
        title: "Lab Facilities",
        description: "How are you finding the innovation lab?",
        question_order: [15, 16]
      }
    ]
  },
  {
    id: 6,
    title: "Parking Experience Survey",
    description: "Help us improve parking facilities",
    trigger: "weekly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-P1",
    pages: [
      {
        title: "Parking Quality",
        description: "Rate your parking experience",
        question_order: [17, 18]
      }
    ]
  },
  {
    id: 7,
    title: "Comprehensive Feedback Survey",
    description: "A survey with all question types for testing",
    trigger: "monthly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-1",
    pages: [
      {
        title: "Page 1 - Ratings and Text",
        description: "Rate your experience and provide text feedback",
        question_order: [19, 20, 21]
      },
      {
        title: "Page 2 - Selections",
        description: "Select from various options",
        question_order: [22, 23, 24]
      }
    ]
  }
];
var MOCK_QUESTIONS = [
  {
    id: 1,
    title: "How satisfied are you with your current role?",
    description: "Rate your overall job satisfaction",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Dissatisfied",
        "Dissatisfied",
        "Neutral",
        "Satisfied",
        "Very Satisfied"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["job-satisfaction", "role"],
    deleted: false
  },
  {
    id: 2,
    title: "Do you feel valued by your supervisor?",
    description: "How valued do you feel by your direct supervisor?",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: ["Always", "Often", "Sometimes", "Rarely", "Never"],
    tags: ["supervisor", "recognition"],
    deleted: false
  },
  {
    id: 3,
    title: "What could we improve about your work experience?",
    description: "Please share any suggestions for improvement",
    type: "text",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "improvement"],
    deleted: false
  },
  {
    id: 4,
    title: "Rate the cleanliness of the office",
    description: "How would you rate the overall cleanliness?",
    type: "rating",
    options: { min: 1, max: 10 },
    required: true,
    max_rating: 10,
    choices: [],
    tags: ["cleanliness", "office"],
    deleted: false
  },
  {
    id: 5,
    title: "Is the temperature comfortable in your work area?",
    description: "Rate the temperature comfort level",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Too Cold",
      "Slightly Cold",
      "Just Right",
      "Slightly Warm",
      "Too Warm"
    ],
    tags: ["temperature", "comfort"],
    deleted: false
  },
  {
    id: 6,
    title: "How would you rate the noise level?",
    description: "Is the office noise level appropriate for work?",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Too Quiet",
        "Slightly Quiet",
        "Perfect",
        "Slightly Noisy",
        "Too Noisy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["noise", "environment"],
    deleted: false
  },
  {
    id: 7,
    title: "Rate the kitchen facilities",
    description: "How satisfied are you with the kitchen and dining areas?",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["kitchen", "facilities"],
    deleted: false
  },
  {
    id: 8,
    title: "Which amenities do you use most?",
    description: "Select all that apply",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Coffee machine" },
      { text: "Microwave" },
      { text: "Refrigerator" },
      { text: "Water cooler" },
      { text: "Vending machines" },
      { text: "Recreation area" }
    ],
    tags: ["amenities", "usage"],
    deleted: false
  },
  {
    id: 9,
    title: "Additional facility suggestions",
    description: "What other facilities would you like to see?",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["suggestions", "facilities"],
    deleted: false
  },
  {
    id: 10,
    title: "Rate the meeting room quality",
    description: "Overall quality of the meeting room you used",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["meeting-room", "quality"],
    deleted: false
  },
  {
    id: 11,
    title: "Were all technical equipment working properly?",
    description: "Screen, projector, video conferencing, etc.",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Yes, everything worked perfectly",
      "Most things worked",
      "Some issues but manageable",
      "Major technical problems"
    ],
    tags: ["technical", "equipment"],
    deleted: false
  },
  {
    id: 12,
    title: "How would you rate the Melbourne office atmosphere?",
    description: "Overall atmosphere and culture in Melbourne",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["atmosphere", "culture", "melbourne"],
    deleted: false
  },
  {
    id: 13,
    title: "What do you like most about the Melbourne office?",
    description: "Share what you enjoy about working here",
    type: "text",
    options: { multiline: true, max_length: 400 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "positive", "melbourne"],
    deleted: false
  },
  {
    id: 14,
    title: "How often do you use the gym facilities?",
    description: "Frequency of gym usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: ["Daily", "Few times a week", "Weekly", "Monthly", "Never"],
    tags: ["gym", "facilities", "usage"],
    deleted: false
  },
  {
    id: 15,
    title: "Rate the innovation lab equipment",
    description: "Quality and availability of lab equipment",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["equipment", "innovation", "lab"],
    deleted: false
  },
  {
    id: 16,
    title: "What additional equipment would be helpful?",
    description: "Suggestions for new lab equipment or tools",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["equipment", "suggestions", "innovation"],
    deleted: false
  },
  {
    id: 17,
    title: "How easy is it to find parking?",
    description: "Rate the ease of finding a parking spot",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Difficult",
        "Difficult",
        "Neutral",
        "Easy",
        "Very Easy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["parking", "availability"],
    deleted: false
  },
  {
    id: 18,
    title: "Do you use EV charging stations?",
    description: "Electric vehicle charging usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      "Yes, regularly",
      "Yes, occasionally",
      "No, but would like to",
      "No, not needed"
    ],
    tags: ["ev-charging", "parking", "sustainability"],
    deleted: false
  },
  // Comprehensive survey questions (19-24)
  {
    id: 19,
    title: "Overall satisfaction rating",
    description: "Rate your overall satisfaction from 1 to 5",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["satisfaction", "comprehensive"],
    deleted: false
  },
  {
    id: 20,
    title: "Your name",
    description: "Please enter your name",
    type: "text",
    options: { max_length: 100 },
    required: true,
    max_rating: 0,
    choices: [],
    tags: ["name", "comprehensive"],
    deleted: false
  },
  {
    id: 21,
    title: "Additional comments",
    description: "Please share any additional feedback",
    type: "comment",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["comments", "comprehensive"],
    deleted: false
  },
  {
    id: 22,
    title: "Preferred contact method",
    description: "How would you like us to contact you?",
    type: "dropdown",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Email" },
      { text: "Phone" },
      { text: "In Person" },
      { text: "No Contact" }
    ],
    tags: ["contact", "comprehensive"],
    deleted: false
  },
  {
    id: 23,
    title: "Preferred time of day",
    description: "When is the best time to reach you?",
    type: "radiogroup",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Morning (9am - 12pm)" },
      { text: "Afternoon (12pm - 5pm)" },
      { text: "Evening (5pm - 8pm)" }
    ],
    tags: ["time", "comprehensive"],
    deleted: false
  },
  {
    id: 24,
    title: "Topics of interest",
    description: "Select all topics that interest you",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Workplace improvements" },
      { text: "New facilities" },
      { text: "Team events" },
      { text: "Training opportunities" }
    ],
    tags: ["interests", "comprehensive"],
    deleted: false
  }
];
var MOCK_ANSWERS = [
  {
    id: 1,
    question_id: 1,
    survey_id: 1,
    type: "rating",
    answer_json: { rating: 4, comment: "Generally satisfied with my role" }
  },
  {
    id: 2,
    question_id: 2,
    survey_id: 1,
    type: "multiple_choice",
    answer_json: { choice: "Often", index: 1 }
  },
  {
    id: 3,
    question_id: 3,
    survey_id: 1,
    type: "text",
    answer_json: { text: "More flexible working hours would be great." }
  },
  {
    id: 4,
    question_id: 4,
    survey_id: 2,
    type: "rating",
    answer_json: { rating: 8 }
  },
  {
    id: 5,
    question_id: 5,
    survey_id: 2,
    type: "multiple_choice",
    answer_json: { choice: "Just Right", index: 2 }
  },
  {
    id: 6,
    question_id: 10,
    survey_id: 3,
    type: "rating",
    answer_json: {
      rating: 5,
      comment: "Excellent meeting room experience"
    }
  },
  {
    id: 7,
    question_id: 11,
    survey_id: 3,
    type: "multiple_choice",
    answer_json: { choice: "Yes, everything worked perfectly", index: 0 }
  },
  {
    id: 8,
    question_id: 12,
    survey_id: 4,
    type: "rating",
    answer_json: { rating: 4, comment: "Great atmosphere in Melbourne" }
  },
  {
    id: 9,
    question_id: 13,
    survey_id: 4,
    type: "text",
    answer_json: {
      text: "Love the city views and the collaborative spaces"
    }
  },
  {
    id: 10,
    question_id: 15,
    survey_id: 5,
    type: "rating",
    answer_json: { rating: 5, comment: "Excellent lab equipment" }
  },
  {
    id: 11,
    question_id: 17,
    survey_id: 6,
    type: "rating",
    answer_json: { rating: 3 }
  },
  {
    id: 12,
    question_id: 18,
    survey_id: 6,
    type: "multiple_choice",
    answer_json: { choice: "Yes, occasionally", index: 1 }
  }
];
var nextId = (list) => Math.max(0, ...list.map((item) => Number(item.id) || 0)) + 1;
function findById(list, id, label) {
  const item = list.find((entry) => entry.id === parseInt(id));
  if (!item)
    throw { status: 404, message: `${label} not found` };
  return item;
}
function registerMockSurveys() {
  persist("surveys", MOCK_SURVEYS);
  persist("survey-questions", MOCK_QUESTIONS);
  persist("survey-answers", MOCK_ANSWERS);
  registerMockEndpoint({
    path: "/api/staff/v1/surveys",
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredSurveys = [...MOCK_SURVEYS];
      if (query_params?.building_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.building_id === query_params.building_id);
      }
      if (query_params?.zone_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.zone_id === query_params.zone_id);
      }
      if (query_params?.trigger) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.trigger === query_params.trigger);
      }
      return filteredSurveys;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/questions",
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredQuestions = MOCK_QUESTIONS.filter((q) => !q.deleted);
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
        if (survey) {
          const questionIds = survey.pages.flatMap((page) => page.question_order);
          filteredQuestions = filteredQuestions.filter((q) => questionIds.includes(q.id));
        }
      }
      if (query_params?.type) {
        filteredQuestions = filteredQuestions.filter((q) => q.type === query_params.type);
      }
      if (query_params?.tags) {
        const searchTags = Array.isArray(query_params.tags) ? query_params.tags : [query_params.tags];
        filteredQuestions = filteredQuestions.filter((q) => searchTags.some((tag) => q.tags.includes(tag)));
      }
      return filteredQuestions;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/questions/:id",
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const questionId = parseInt(request.route_params?.id);
      const question = MOCK_QUESTIONS.find((q) => q.id === questionId && !q.deleted);
      if (!question) {
        throw new Error("Question not found");
      }
      return question;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/answers",
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredAnswers = [...MOCK_ANSWERS];
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.survey_id === surveyId);
      }
      if (query_params?.question_id) {
        const questionId = parseInt(query_params.question_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.question_id === questionId);
      }
      if (query_params?.type) {
        filteredAnswers = filteredAnswers.filter((answer) => answer.type === query_params.type);
      }
      return filteredAnswers;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/answers/:id",
    method: "GET",
    callback: (request) => {
      const answerId = parseInt(request.route_params?.id);
      const answer = MOCK_ANSWERS.find((a) => a.id === answerId);
      if (!answer) {
        throw new Error("Answer not found");
      }
      return answer;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/:id",
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const surveyId = parseInt(request.route_params?.id);
      const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
      if (!survey)
        throw { status: 404 };
      return survey;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/answers",
    method: "POST",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const body = request.body;
      const answers = Array.isArray(body) ? body : [body];
      const created_answers = [];
      for (const answer of answers) {
        const new_answer = {
          id: nextId(MOCK_ANSWERS),
          survey_id: answer.survey_id,
          question_id: answer.question_id,
          type: answer.type,
          answer_json: answer.answer_json
        };
        MOCK_ANSWERS.push(new_answer);
        created_answers.push(new_answer);
      }
      return created_answers.length === 1 ? created_answers[0] : created_answers;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys",
    method: "POST",
    callback: ({ body }) => {
      const survey = __spreadProps(__spreadValues({}, body), { id: nextId(MOCK_SURVEYS) });
      MOCK_SURVEYS.push(survey);
      return survey;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/:id",
    method: "PATCH",
    callback: ({ route_params, body }) => {
      const survey = findById(MOCK_SURVEYS, route_params.id, "Survey");
      return Object.assign(survey, body, { id: survey.id });
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/:id",
    method: "DELETE",
    callback: ({ route_params }) => {
      const survey = findById(MOCK_SURVEYS, route_params.id, "Survey");
      MOCK_SURVEYS.splice(MOCK_SURVEYS.indexOf(survey), 1);
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/questions",
    method: "POST",
    callback: ({ body }) => {
      const question = __spreadProps(__spreadValues({}, body), {
        id: nextId(MOCK_QUESTIONS)
      });
      MOCK_QUESTIONS.push(question);
      return question;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/questions/:id",
    method: "PATCH",
    callback: ({ route_params, body }) => {
      const question = findById(MOCK_QUESTIONS, route_params.id, "Question");
      return Object.assign(question, body, { id: question.id });
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/surveys/questions/:id",
    method: "DELETE",
    callback: ({ route_params }) => {
      const question = findById(MOCK_QUESTIONS, route_params.id, "Question");
      question.deleted = true;
    }
  });
}

// libs/mocks/src/lib/realtime/camera.ts
var CameraTilt;
(function(CameraTilt2) {
  CameraTilt2[CameraTilt2["Down"] = 0] = "Down";
  CameraTilt2[CameraTilt2["Up"] = 1] = "Up";
  CameraTilt2[CameraTilt2["Stop"] = 2] = "Stop";
})(CameraTilt || (CameraTilt = {}));
var CameraPan;
(function(CameraPan2) {
  CameraPan2[CameraPan2["Left"] = 0] = "Left";
  CameraPan2[CameraPan2["Right"] = 1] = "Right";
  CameraPan2[CameraPan2["Stop"] = 2] = "Stop";
})(CameraPan || (CameraPan = {}));
var CameraModule = class {
  constructor(_) {
    this.pan = 0;
    this.tilt = 0;
    this.zoom = 50;
    this.pan_speed = 5;
    this.tilt_speed = 5;
    this.zoom_speed = 5;
    this.moving = false;
    this.presets = [
      "Preset One",
      "Preset 2",
      "Preset Three",
      "Wide Shot",
      "Close Up"
    ];
  }
  $pan(dir) {
    if (dir === CameraPan.Left) {
      this.pan = Math.max(-100, this.pan - this.pan_speed);
    } else if (dir === CameraPan.Right) {
      this.pan = Math.min(100, this.pan + this.pan_speed);
    }
    this.moving = dir !== CameraPan.Stop;
  }
  $tilt(dir) {
    if (dir === CameraTilt.Up) {
      this.tilt = Math.min(100, this.tilt + this.tilt_speed);
    } else if (dir === CameraTilt.Down) {
      this.tilt = Math.max(-100, this.tilt - this.tilt_speed);
    }
    this.moving = dir !== CameraTilt.Stop;
  }
  $zoom(direction) {
    if (direction === "in") {
      this.zoom = Math.min(100, this.zoom + this.zoom_speed);
    } else if (direction === "out") {
      this.zoom = Math.max(0, this.zoom - this.zoom_speed);
    }
  }
  $recall(name) {
    if (this.presets.includes(name)) {
      this.pan = 0;
      this.tilt = 0;
      this.zoom = 50;
    }
  }
  $save_preset(name) {
    if (!this.presets.includes(name)) {
      this.presets = [...this.presets, name];
    }
  }
};
var createCameraModule = (space, overrides = {}) => new CameraModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/capture.ts
var interval;
var CaptureModule = class {
  constructor(_) {
    this.status = "stopped";
    this.live = false;
    this.remaining = randomInt(24 * 60 * 60);
  }
  $start() {
    this.status = "playing";
    interval = setInterval(() => {
      if (this.remaining < 1)
        clearInterval(interval);
      this.remaining = this.remaining - 1;
      this.current = this.current + 1;
    }, 3e3);
  }
  $pause() {
    this.status = "paused";
    clearInterval(interval);
  }
  $resume() {
    this.$start();
  }
  $stop() {
    this.status = "stopped";
    this.current = 0;
    clearInterval(interval);
  }
};
var createCaptureModule = (space, overrides = {}) => new CaptureModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/contact-tracing.ts
var CONTACT_EVENTS = {};
var filterFn = (start, end) => (itm) => {
  return timePeriodsIntersect(start, end, itm.contact_time, itm.contact_time);
};
var ContactTracingModule = class {
  constructor(_) {
  }
  $close_contacts(email, user, start, end) {
    if (!CONTACT_EVENTS[email])
      CONTACT_EVENTS[email] = [];
    if (CONTACT_EVENTS[email].length)
      return CONTACT_EVENTS[email].filter(filterFn(start, end));
    const events = [];
    const beginning = addDays(start * 1e3, -10);
    const ending = addDays(end * 1e3, 10);
    let date = new Date(beginning);
    while (isBefore(date, ending)) {
      new Array(randomInt(4)).fill(0).map((_) => ({
        mac_address: randomString(10),
        contact_time: getUnixTime(setHours(date, randomInt(11) + 7)),
        duration: randomInt(60) * 60,
        username: MOCK_STAFF[randomInt(MOCK_STAFF.length)].email
      })).forEach((e) => events.push(e));
      date = addDays(date, 1);
    }
    CONTACT_EVENTS[email] = events;
    return CONTACT_EVENTS[email].filter(filterFn(start, end));
  }
};
var createContactTracingModule = (space, overrides = {}) => new ContactTracingModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/room-devices.ts
var LIGHTING_AREAS = [
  { name: "Front", area: "zone1", binding: "level_zone1" },
  { name: "Middle", area: "zone2", binding: "level_zone2" },
  { name: "Back", area: "zone3", binding: "level_zone3" }
];
var LightingModule = class {
  constructor() {
    this.level_zone1 = 50;
    this.level_zone2 = 75;
    this.level_zone3 = 100;
  }
  $set_lighting_level(value, area) {
    const key = `level_${area}`;
    if (key in this)
      this[key] = value;
  }
};
var HearingAugmentationModule = class {
  constructor() {
    this.join_code = "4821";
    this.has_t_coil = true;
  }
};
var LoggerModule = class {
  constructor() {
    this.enabled = false;
  }
  $post_event(_event) {
  }
};

// libs/mocks/src/lib/realtime/control.ts
var RoomModule = class {
  constructor(_data) {
    this.selected_input = "";
    this.lighting_scenes = [
      "Off",
      "Presentation",
      "Meeting",
      "Full"
    ];
    this.lighting_scene = "Off";
    this.lighting_levels = LIGHTING_AREAS;
    this.available_cameras = [
      "Camera1",
      "Camera2",
      "Camera3",
      "Camera4"
    ];
    this.selected_camera = null;
    this.microphones = [
      "Microphone_1",
      "Microphone_2",
      "Microphone_3"
    ];
    this.join_modes = {
      independent: "Independent",
      combined: "Combined Mode",
      overflow: "Overflow Mode"
    };
    this.joined = { room_ids: [] };
    this.join_lockout_secondary = false;
    this.room_accessories = [
      {
        id: "blind1",
        name: "Window Blinds",
        icon: "blinds",
        states: ["Open", "Closed", "Half"],
        state: "Open"
      },
      {
        id: "screen1",
        name: "Projector Screen",
        icon: "screen_share",
        states: ["Up", "Down"],
        state: "Up"
      }
    ];
    this.voice_control = true;
    this.dial_bindings = {
      module: "QSC",
      index: 1
    };
    this.offhook = false;
    this.ringing = false;
    this.has_master_audio = true;
    this.mute = false;
    this.meeting_url = "https://meet.example.com/room-123";
    this.hide_join_button = false;
    this.hide_present_all = false;
    this.preview_outputs = ["Display1", "Display2"];
    this.help = {
      help: {
        title: "Help",
        content: `
# Using the asset browser

## Activating the menu
The 5 finger touch can be actvated by placing 4 fingers and your thumb on the screen, or quickly double-tapping the screen. Activation through double tap will leave the menu on-screen. To close tap the \u2018X\u2019.

## Selecting a menu item
Leaving at least one finger on the screen, drag your finger to the icon to select.

## Home Menu
The home menu allows you to access files and navigate to content and presentations via the Launcher.

## Connect and stream your laptop or access the CMS to add files
Plug your laptop into the HDMI to stream it to the screen, or access the CMS to add your own content and create custom presentations.

<video></video>

1. Test1
2. Test2
3. Test3
            `
      },
      "laptop-help": {
        icon: "web_asset",
        title: "Asset Browser",
        content: `# Test 2`
      }
    };
    this.tabs = [
      {
        icon: "laptop",
        name: "Laptop",
        type: "Laptop"
      },
      {
        icon: "call",
        name: "VC",
        inputs: ["VidConf_1"],
        help: "vidconf-help",
        controls: "vidconf-controls"
      }
    ];
    this.volume = 0;
    this.name = _data.name || "Test Module";
    this.connected = _data.connected ?? true;
    this.active = _data.active || false;
    this.input_list = _data.input_list;
    this.output_list = _data.output_list;
    this.env_sources = _data.env_sources || [];
    this.inputs = Object.keys(this.input_list || {}) || [];
    this.outputs = Object.keys(this.output_list || {}) || [];
    this.available_inputs = this.inputs;
    this.available_outputs = this.outputs;
    const types = unique(this.env_sources.map((_) => _.type)) || [];
    types.forEach((t) => this[`${t}`] = this.env_sources.filter((_) => _.type === t).map((_) => _.id));
    this.env_sources.forEach((source) => this[`${source.type}/${source.id}`] = source);
    this.inputs.forEach((key) => this[`input/${key}`] = this.input_list[key]);
    this.outputs.forEach((key) => this[`output/${key}`] = this.output_list[key]);
  }
  $power(state = true) {
    this.active = state;
  }
  /** Shares a signal source with the room and any connected remote participants. */
  $share() {
  }
  /**
   * Connect a signal source to a signal output, or set of outputs. Any intermediate
   * device interactions are handled internally. For example, on a system using a small
   * presentation switcher and a display, routing a laptop input will select the
   * appropriate input on the switcher, and select the appropriate input on the display.
   *
   * This includes all routable signal types - in addition to the above example, this may
   * be interacting with an audio DSP to add a microphone feed to an output zone, or
   * connecting a USB HID input device with a specific output.
   **/
  $route(input, output) {
    if (this.inputs.includes(input) && this.outputs.includes(output)) {
      this.$updateState(input, {
        routes: unique([
          ...this.input_list[input].routes || [],
          output
        ])
      });
      this.$updateState(output, {
        source: input,
        following: input
      });
    }
  }
  /** Connect a signal source to every output */
  $route_all(input) {
    this.outputs.forEach((output) => this.$route(input, output));
  }
  /** Set the input that the panel shows controls for */
  $selected_input(input) {
    this.selected_input = input;
  }
  /**
   * Remove a signal source from a signal output.
   * Predominantly intended for outputs that support more than one simultaneous input source
   * (mixed audio zone, or display capable of compositing multiple video sources).
   **/
  $unroute(output) {
    const input = this.output_list[output]?.source;
    if (!input)
      return;
    if (this.input_list[input]) {
      this.$updateState(input, {
        routes: (this.input_list[input].routes || []).filter((_) => _ !== output)
      });
    }
    this.$updateState(output, { source: "", following: "" });
  }
  /**
   * Establish a call (either phone or video) with a remote participant.
   * This may be a peer-to-peer connection or a wider group via an external bridging service.
   **/
  $connect() {
  }
  /** End a call with a remote participant. */
  $disconnect() {
  }
  /**
   * Bind the current system to another PlaceOS controlled space, relinquishing local control.
   * This may be used for an education pod that pairs with a wider classroom or a room being
   * used as an overflow from a primary event space.
   **/
  $link() {
  }
  /**
   * Join the current system with another PlaceOS controlled space, sharing control and signal IO.
   * Examples of usage would be a set of rooms with moveable walls. N-way merges supported.
   **/
  $merge() {
  }
  /** Separate from a linked or merged system. */
  $split() {
  }
  /**
   * Display an alert visible to participants in the space. This may occur as a screen overlay,
   * on a control interface, a bot post in a chat space associated with the current meeting or
   * other modalities depending on hardware capability.
   **/
  $notify() {
  }
  /**
   * Place the room into a predefined operation mode. This may include executing an arbitrary
   * set of device interactions, changing metadata associated with the system itself (changing
   * available input or output nodes), or other configurable actions designed to transition
   * the space to a specific state.
   **/
  $preset() {
  }
  /**
   * Set the volume for a signal node in the space. This can include outputs as well as inputs
   * where supported (e.g. microphone). If unspecified, default is to interact with a ‘primary’
   * output node.
   **/
  $volume(value, source = "all") {
    if (source === "all" || source === this.outputs[0]) {
      this.volume = value;
    }
    this.$updateState(source, { volume: value });
  }
  /** Interact with audio muting on supporting signal nodes within the space. */
  $mute(state = true, source = "all") {
    if (source === "all" || source === this.outputs[0]) {
      this.mute = state;
    }
    this.$updateState(source, { mute: state });
  }
  /**
   * Activates or deactivates a signal mute for the associated IO. If this is not possible,
   * (e.g. unsupported by the device) an error is returned.
   **/
  $unmute(source = "all") {
    this.$mute(false, source);
  }
  /**
   * Wrapper for an arbitrary set of control points defined in system configuration.
   * Each of these may map to control options available on a sibling module and take one of two forms:
   *  - Continuous value within a range (temperature set point 16.0...28.0 degrees, lighting level 0...100)
   *  - Set of possible states (lighting high/med/low, blind up/down, electrochromic glass clear/opaque)
   *
   * System state provides the ability to introspect configured points for both control limits and current value.
   **/
  $environment(id, state) {
    const source = this.env_sources.find((_) => _.id === id);
    if (source) {
      this[`${source.type}/${source.id}`] = __spreadProps(__spreadValues({}, source), { state });
    }
  }
  /** Locks an IO node. Prevents any route changes that include this until unlocked. */
  $lock(source) {
    this.$updateState(source, { locked: true });
  }
  /** Unlocks an IO node. */
  $unlock(source) {
    this.$updateState(source, { locked: false });
  }
  /** Set the lighting scene */
  $set_lighting_scene(scene) {
    if (this.lighting_scenes.includes(scene)) {
      this.lighting_scene = scene;
      const light_source = this.env_sources.find((_) => _.type === "lights");
      if (light_source) {
        this[`${light_source.type}/${light_source.id}`] = __spreadProps(__spreadValues({}, light_source), {
          state: scene
        });
      }
    }
  }
  /** Select a camera */
  $selected_camera(camera_id) {
    if (this.available_cameras.includes(camera_id)) {
      this.selected_camera = camera_id;
    }
  }
  /** Join rooms with a specific mode */
  $join_rooms(mode, room_ids = []) {
    if (this.join_modes[mode]) {
      this.joined = { room_ids, mode };
    }
  }
  /** Separate joined rooms */
  $separate_rooms() {
    this.joined = { room_ids: [] };
  }
  /** Control a room accessory */
  $set_accessory_state(accessory_id, state) {
    const accessory = this.room_accessories.find((_) => _.id === accessory_id);
    if (accessory && accessory.states.includes(state)) {
      accessory.state = state;
      this.room_accessories = [...this.room_accessories];
    }
  }
  /** Dial a phone number */
  $dial_phone(_number) {
    this.offhook = true;
    return new Promise((r) => setTimeout(() => r(), 1e3));
  }
  /** Hangup phone call */
  $hangup_phone() {
    this.offhook = false;
    this.ringing = false;
  }
  $updateState(source, data) {
    if (this[`input/${source}`]) {
      this[`input/${source}`] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
      this.input_list[source] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
    } else if (this[`output/${source}`]) {
      this[`output/${source}`] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
      this.output_list[source] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
    }
  }
};
var input_list = {
  Mic1: {
    name: "Lectern Mic",
    type: "Microphone",
    mod: "Microphone_1"
  },
  Mic2: {
    name: "Lapel Mic",
    type: "Microphone",
    mod: "Microphone_2"
  },
  Mic3: {
    name: "Handheld Mic",
    type: "Microphone",
    mod: "Microphone_3"
  },
  PC1: {
    name: "PC-1",
    type: "PC"
  },
  PC2: {
    name: "PC-2",
    type: "PC"
  },
  PC3: {
    name: "PC-3",
    type: "PC"
  },
  PC4: {
    name: "PC-4",
    type: "PC"
  },
  HDMI: {
    name: "Laptop HDMI",
    type: "Laptop"
  },
  VGA: {
    name: "Laptop VGA",
    type: "Laptop"
  },
  Camera1: {
    name: "Camera Rear",
    type: "Camera",
    mod: "Camera_1"
  },
  Camera2: {
    name: "Camera Front",
    type: "Camera",
    mod: "Camera_2"
  },
  Camera3: {
    name: "Camera Rear 2",
    type: "Camera",
    mod: "Camera_3"
  },
  Camera4: {
    name: "Camera Front 2",
    type: "Camera",
    mod: "Camera_4"
  },
  TV1: {
    name: "IPTV 1",
    type: "TV",
    mod: "IPTV_1"
  },
  VC1: {
    name: "Video Conference 1",
    type: "VC",
    mod: "VidConf_1"
  }
};
var output_list = {
  Display1: {
    name: "Screen 1",
    type: "Display",
    source: "PC1",
    mod: "Display_1"
  },
  Display2: {
    name: "Screen 2",
    type: "Display",
    mod: "Display_2"
  },
  Display5: {
    name: "TV 1",
    type: "Display",
    mod: "Display_5",
    source: "TV1"
  }
};
var env_sources = [
  {
    id: "light1",
    name: "Lighting",
    type: "lights",
    states: ["Off", "Presentation", "Meeting", "Full"],
    state: "Off"
  },
  {
    id: "blind1",
    name: "Blinds",
    type: "blinds",
    states: ["Off", "Presentation", "Meeting"],
    state: "Off"
  },
  {
    id: "screen1",
    name: "Screen",
    type: "screen",
    states: ["Up", "Down"],
    state: "Down"
  }
];
var createSystemModule = (space, overrides = {}) => new RoomModule(__spreadValues(__spreadProps(__spreadValues({}, space), {
  input_list,
  output_list,
  env_sources
}), overrides));

// node_modules/ts-md5/dist/index.es.js
var c = new Int32Array(4);
var h = class _h {
  static hashStr(i, a = false) {
    return this.onePassHasher.start().appendStr(i).end(a);
  }
  static hashAsciiStr(i, a = false) {
    return this.onePassHasher.start().appendAsciiStr(i).end(a);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _h();
  static _hex(i) {
    const a = _h.hexChars, t = _h.hexOut;
    let e, s, r, n;
    for (n = 0; n < 4; n += 1)
      for (s = n * 8, e = i[n], r = 0; r < 8; r += 2)
        t[s + 1 + r] = a.charAt(e & 15), e >>>= 4, t[s + 0 + r] = a.charAt(e & 15), e >>>= 4;
    return t.join("");
  }
  static _md5cycle(i, a) {
    let t = i[0], e = i[1], s = i[2], r = i[3];
    t += (e & s | ~e & r) + a[0] - 680876936 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[1] - 389564586 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[3] - 1044525330 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[4] - 176418897 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[5] + 1200080426 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[7] - 45705983 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[8] + 1770035416 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[9] - 1958414417 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[10] - 42063 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[11] - 1990404162 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[12] + 1804603682 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[13] - 40341101 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[15] + 1236535329 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & r | s & ~r) + a[1] - 165796510 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[6] - 1069501632 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[0] - 373897302 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[5] - 701558691 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[10] + 38016083 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[4] - 405537848 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[9] + 568446438 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[14] - 1019803690 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[8] + 1163531501 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[13] - 1444681467 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[2] - 51403784 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[12] - 1926607734 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e ^ s ^ r) + a[5] - 378558 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[8] - 2022574463 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[14] - 35309556 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[1] - 1530992060 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[4] + 1272893353 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[10] - 1094730640 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[13] + 681279174 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[0] - 358537222 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[6] + 76029189 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[9] - 640364487 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[12] - 421815835 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[2] - 995338651 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (s ^ (e | ~r)) + a[0] - 198630844 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[7] + 1126891415 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[5] - 57434055 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[12] + 1700485571 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[3] - 1894986606 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[1] - 2054922799 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[8] + 1873313359 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[15] - 30611744 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[13] + 1309151649 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[4] - 145523070 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[11] - 1120210379 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[9] - 343485551 | 0, e = (e << 21 | e >>> 11) + s | 0, i[0] = t + i[0] | 0, i[1] = e + i[1] | 0, i[2] = s + i[2] | 0, i[3] = r + i[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_h.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r;
    for (r = 0; r < i.length; r += 1) {
      if (s = i.charCodeAt(r), s < 128)
        a[e++] = s;
      else if (s < 2048)
        a[e++] = (s >>> 6) + 192, a[e++] = s & 63 | 128;
      else if (s < 55296 || s > 56319)
        a[e++] = (s >>> 12) + 224, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      else {
        if (s = (s - 55296) * 1024 + (i.charCodeAt(++r) - 56320) + 65536, s > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        a[e++] = (s >>> 18) + 240, a[e++] = s >>> 12 & 63 | 128, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      }
      e >= 64 && (this._dataLength += 64, _h._md5cycle(this._state, t), e -= 64, t[0] = t[16]);
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i.charCodeAt(r++);
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i[r++];
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const i = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [i[0], i[1], i[2], i[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(i) {
    const a = i.buffer, t = i.state, e = this._state;
    let s;
    for (this._dataLength = i.length, this._bufferLength = i.buflen, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], s = 0; s < a.length; s += 1)
      this._buffer8[s] = a.charCodeAt(s);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(i = false) {
    const a = this._bufferLength, t = this._buffer8, e = this._buffer32, s = (a >> 2) + 1;
    this._dataLength += a;
    const r = this._dataLength * 8;
    if (t[a] = 128, t[a + 1] = t[a + 2] = t[a + 3] = 0, e.set(_h.buffer32Identity.subarray(s), s), a > 55 && (_h._md5cycle(this._state, e), e.set(_h.buffer32Identity)), r <= 4294967295)
      e[14] = r;
    else {
      const n = r.toString(16).match(/(.*?)(.{0,8})$/);
      if (n === null) return i ? c : "";
      const o = parseInt(n[2], 16), _ = parseInt(n[1], 16) || 0;
      e[14] = o, e[15] = _;
    }
    return _h._md5cycle(this._state, e), i ? this._state : _h._hex(this._state);
  }
};
if (h.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");

// libs/mocks/src/lib/realtime/desks.ts
var MockAreaManagementModule = class {
  constructor() {
    this.overview = {};
    this.emergency_contacts = {
      "First Aid": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0),
      "Fire Warden": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0)
    };
  }
  $locate_user(_email, _username) {
    return {};
  }
  $update() {
    updateLocations(this, MOCK_LEVELS);
  }
};
var MAC_LOOKUP = {};
var MockLocationServicesModule = class {
  $check_ownership_of(mac_address) {
    if (!MAC_LOOKUP[mac_address]) {
      const staff = randomInt(999999) % 3 === 0 ? MOCK_STAFF[randomInt(MOCK_STAFF.length)] : { name: "" };
      MAC_LOOKUP[mac_address] = { assigned_to: staff.name };
    }
    return MAC_LOOKUP[mac_address];
  }
  $locate_user(_email, _username) {
    return [
      {
        type: "wireless",
        position: { x: 0.5, y: 0.5 },
        level: MOCK_LEVELS[randomInt(MOCK_LEVELS.length)].id,
        priority: 0
      }
    ];
  }
};
function padZero(no, len = 3) {
  let str = `${no}`;
  while (str.length < len) {
    str = "0" + str;
  }
  return str;
}
function createAreaManagementModule(space, _overrides = {}) {
  const mod = new MockAreaManagementModule();
  for (const lvl of MOCK_LEVELS) {
    mod.overview[lvl.id] = {
      desk_count: 100,
      desk_usage: 0,
      device_capacity: 100,
      device_count: 0,
      estimated_people: 0,
      percentage_use: 0,
      recommendation: 1e4
    };
    mod[`${lvl.id}:desk_ids`] = new Array(mod.overview[lvl.id].desk_count).fill(0).map((_, idx) => `table-${lvl.number}.${padZero(idx)}`);
    mod[`${lvl.id}`] = { value: [] };
    mod[`${lvl.id}:areas`] = {
      value: [
        {
          area_id: "zone-10.B",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.A",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.C",
          count: randomInt(50),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-02.D",
          count: randomInt(100),
          name: "Quite Work"
        },
        {
          area_id: "zone-02.B",
          count: randomInt(100),
          name: "Meeting Area A"
        },
        {
          area_id: "zone-02.A",
          count: randomInt(100),
          name: "Meeting Area B"
        },
        {
          area_id: "zone-02.C",
          count: randomInt(50),
          name: "Casual Work"
        }
      ]
    };
  }
  return mod;
}
function updateLocations(mod, levels) {
  for (const lvl of levels) {
    mod[lvl.id] = {
      value: new Array(predictableRandomInt(20)).fill(0).map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`]))
    };
    for (const area of mod[`${lvl.id}:areas`].value) {
      area.count = randomInt(100);
    }
    mod[`${lvl.id}:areas`] = __spreadValues({}, mod[`${lvl.id}:areas`]);
  }
}
function generateLocation(lvl, desks, users = MOCK_STAFF) {
  const fixed = predictableRandomInt(9999) % 3 === 0;
  const usr = (users || [])[predictableRandomInt((users || [])?.length)]?.email;
  return fixed ? {
    location: "desk",
    at_location: predictableRandomInt(9999) % 2 !== 0,
    map_id: desks[predictableRandomInt(desks.length)],
    mac: h?.hashStr(usr || ""),
    level: lvl.id,
    building: lvl.parent_id
  } : {
    location: "wireless",
    coordinates_from: "bottom-left",
    x: predictableRandomInt(1e3) / 10,
    y: predictableRandomInt(1e3) / 10,
    lon: 55.27476066828535,
    lat: 25.20106100633537,
    s2_cell_id: "3e5f4281459c",
    mac: h?.hashStr(usr || ""),
    variance: 9.62534032222287,
    last_seen: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
    map_width: 100,
    map_height: 100
  };
}

// libs/mocks/src/lib/realtime/events.ts
var MockBookingModule = class {
  constructor(space, _data) {
    this.time_zone = "Australia/Sydney";
    this.disable_book_now = false;
    this.disable_end_meeting = false;
    this.enable_end_meeting_button = true;
    this.disable_book_now_host = false;
    this.bookings = [];
    this.pending_period = 15;
    this.pending_before = 5;
    this.control_ui = "";
    this.catering_ui = "";
    this.last_booking_started = 0;
    this.current_booking = null;
    this.next_booking = null;
    this.room_image = "assets/boardroom.jpg";
    this.status = "free";
    this.room_name = "";
    this.room_capacity = 10;
    this.custom_qr_url = "";
    this.custom_qr_color = "";
    this.show_qr_code = true;
    this.hide_qr_text = false;
    this.hide_meeting_details = false;
    this.hide_meeting_title = false;
    this.show_timeline = false;
    this.timeline_position = "floating-left";
    this.offline_image = "";
    this.offline_color = "#FFFFFF";
    this.presence = false;
    this.min_duration = 15;
    this.max_duration = 480;
    this.default_title = "Ad-Hoc Panel Booking";
    this.pending = true;
    this._space = null;
    this._created = Date.now();
    this._space = space;
    this.room_name = space?.display_name || space?.name || "";
    this.room_capacity = space?.capacity || 10;
    if (_data) {
      Object.assign(this, _data);
    }
  }
  /** Start the meeting that begins at `t` (unix seconds) */
  $start_meeting(t) {
    const booking = this.bookings.find((_) => _.event_start === t);
    if (!booking)
      return;
    this.last_booking_started = t;
    updateBookings(this._space, this);
  }
  /** End the meeting that begins at `t` (unix seconds) */
  $end_meeting(t, _notify, _reason) {
    const booking = this.bookings.find((_) => _.event_start === t) || this.current_booking;
    if (!booking)
      return;
    endBooking(this._space, this, booking);
    updateBookings(this._space, this);
  }
  /** Book the space from now for `len` seconds. The meeting starts at once. */
  $book_now(len, t, o) {
    const now2 = Math.floor(Date.now() / 1e3);
    const new_booking = {
      id: `mock-booking-${now2}`,
      event_start: now2,
      event_end: now2 + len,
      title: t || this.default_title,
      host: o || "mock@place.tech",
      system: this._space,
      attendees: [__spreadProps(__spreadValues({}, this._space), { resource: true })],
      extension_data: {}
    };
    MOCK_EVENTS.push(new_booking);
    this.last_booking_started = now2;
    updateBookings(this._space, this);
    return new_booking;
  }
  /** Check in to the pending booking */
  $checkin(_time) {
    const booking = this.current_booking || this.next_booking;
    if (!booking || this.status !== "pending")
      return;
    this.last_booking_started = booking.event_start;
    updateBookings(this._space, this);
  }
  /** Call waiter service */
  $waiter_call(time) {
    return { success: true, time };
  }
  $poll_bookings() {
    updateBookings(this._space, this);
  }
};
var createBookingsModule = (space, overrides = {}) => new MockBookingModule(space, overrides);
function isStarted(mod, event) {
  return event.event_start === mod.last_booking_started || event.event_start * 1e3 < mod._created || !mod.pending;
}
function declineEvent(event, space) {
  const attendees = event.attendees || [];
  const room = attendees.find((user) => user.id === space.id);
  if (room)
    room.response_status = "declined";
  else {
    event.attendees = [
      ...attendees,
      __spreadProps(__spreadValues({}, space), { resource: true, response_status: "declined" })
    ];
  }
}
function endBooking(space, mod, event) {
  const now2 = Math.floor(Date.now() / 1e3);
  if (isStarted(mod, event) && event.event_start <= now2) {
    event.event_end = Math.min(event.event_end, now2);
  } else {
    declineEvent(event, space);
  }
  markChanged([event.id]);
  saveMockSession();
}
function updateBookings(space, mod) {
  const now2 = Date.now();
  const start = (event) => event.event_start * 1e3;
  const end = (event) => event.event_end * 1e3;
  const during = (s, e) => s <= now2 && now2 < e;
  const books = (event) => eventBooksSpace(event, space.id);
  let bookings = MOCK_EVENTS.filter(books);
  const released = bookings.filter((event) => !isStarted(mod, event) && during(start(event), end(event)) && now2 > addMinutes(start(event), mod.pending_period).valueOf());
  if (released.length) {
    released.forEach((event) => declineEvent(event, space));
    markChanged(released.map((event) => event.id));
    saveMockSession();
    bookings = bookings.filter(books);
  }
  mod.bookings = bookings.sort((a, b) => a.event_start - b.event_start);
  mod.current_booking = mod.bookings.find((_) => during(start(_), end(_))) || null;
  mod.next_booking = mod.bookings.find((_) => start(_) > now2) || null;
  const { current_booking, next_booking } = mod;
  const target = current_booking || next_booking;
  const started = !!current_booking && isStarted(mod, current_booking);
  const pending = mod.pending && !!target && !isStarted(mod, target) && during(subMinutes(start(target), mod.pending_before).valueOf(), addMinutes(start(target), mod.pending_period).valueOf());
  mod.presence = started;
  mod.status = !space?.bookable ? "not-bookable" : pending ? "pending" : current_booking ? "busy" : "free";
}

// libs/mocks/src/lib/realtime/locker-locations.ts
var LockerLocationsModule = class {
  constructor(_data) {
  }
  $lockers_allocated_to_me(..._args) {
    return [
      {
        location: "locker",
        bank_id: "977cb758-4e42-4292-848a-4821f2fb4d74",
        locker_id: "adda7802-dfd7-467c-b369-d73394ad7084",
        locker_name: "0.105",
        allocated: true,
        group_id: "6c246e35-4a73-475a-8725-0676d78167f4"
      }
    ];
  }
};
var createLockerLocationsModule = (details, overrides = {}) => new LockerLocationsModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/meeting.ts
var MeetingPushModule = class {
  constructor(_data) {
    this.supported_meeting_url = "https://meet.";
  }
  $econtrol(..._args) {
  }
};
var createMeetingPushModule = (details, overrides = {}) => new MeetingPushModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/payments.ts
var PaymentsModule = class {
  $list_payment_methods(_type) {
  }
  $add_payment_method(_type, _details) {
  }
  $get_product_prices(_id, _period) {
    return [12e3, 60];
  }
  $create_payment_intent(_amount, _source) {
    return randomString(12);
  }
  $confirm_payment_intent(_id) {
  }
  $cancel_payment_intent(_id) {
  }
  $create_customer(..._args) {
    return `stripe-${randomInt(9999999, 1e6)}`;
  }
  constructor(_) {
  }
};
var createPaymentsModule = (space, overrides = {}) => new PaymentsModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/video-conference.ts
var VideoConferenceModule = class {
  $show_camera_pip(visible) {
    this.selfview = visible;
  }
  $mic_mute(state) {
    this.mic_mute = state;
  }
  $presentation_mode(state) {
    this.presentation_mode = state;
    this.presentation = state === "Local" ? "Sending" : false;
  }
  $hangup() {
    this.calls = {};
    this.call_status = "Idle";
    this.presentation_mode = "None";
    this.presentation = false;
  }
  $call_place_on_hold() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "OnHold";
        this.calls[key].PlacedOnHold = true;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "OnHold";
        return;
      }
    }
  }
  $call_resume() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "Connected";
        this.calls[key].PlacedOnHold = false;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "Connected";
        return;
      }
    }
  }
  $video_layout(layout) {
    this.video_layout = layout;
  }
  $dtmf_send(digit) {
    this.dtmf_history.push(digit);
  }
  $dial(dial_number) {
    this.call_status = "Dialling";
    return new Promise((resolve) => {
      setTimeout(() => {
        this.call_status = "Connected";
        const call_id = `call-${Date.now()}`;
        this.calls = {
          [call_id]: {
            AnswerState: "Answered",
            CallType: "Video",
            CallbackNumber: dial_number,
            DeviceType: "Endpoint",
            Direction: "Outgoing",
            DisplayName: 0,
            Duration: 0,
            "Encryption/Type": "AES-256",
            FacilityServiceId: 0,
            HoldReason: "",
            PlacedOnHold: false,
            Protocol: "SIP",
            ReceiveCallRate: 4096,
            RemoteNumber: dial_number,
            Status: "Connected",
            TransmitCallRate: 4096,
            Ice: ""
          }
        };
        resolve();
      }, 1e3);
    });
  }
  constructor(_) {
    this.mic_mute = false;
    this.selfview = false;
    this.video_layout = "Auto";
    this.presentation_mode = "None";
    this.presentation = false;
    this.calls = {};
    this.call_status = "Idle";
    this.dtmf_history = [];
  }
};
var createVideoConferenceModule = (space = {}, overrides = {}) => new VideoConferenceModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/volume.ts
var VolumeModule = class {
  constructor() {
    this.volume = randomInt(100);
  }
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
};

// libs/mocks/src/lib/systems-bindings.mock.ts
var isPlainData = (value) => value === null || typeof value !== "object" || Array.isArray(value) || Object.getPrototypeOf(value) === Object.prototype;
function moduleState(mod) {
  const values = {};
  for (const key of Object.keys(mod)) {
    if (key[0] !== "_" || key[1] === "_")
      continue;
    if (typeof mod[key]?.set !== "function")
      continue;
    const value = mod[key].value;
    if (isPlainData(value))
      values[key.slice(1)] = value;
  }
  return values;
}
function persistSystem(id, system) {
  const key = `system.${id}`;
  const called = {};
  let tracked = false;
  const track2 = () => {
    if (tracked)
      return;
    tracked = true;
    persistValue(key, () => {
      const state = {};
      for (const [name, indexes] of Object.entries(called)) {
        state[name] = {};
        for (const index of indexes) {
          state[name][index] = moduleState(system[name][index]);
        }
      }
      return state;
    }, (state) => {
      for (const [name, list] of Object.entries(state || {})) {
        for (const [index, values] of Object.entries(list)) {
          const mod = system[name]?.[+index];
          if (!mod)
            continue;
          (called[name] ||= /* @__PURE__ */ new Set()).add(+index);
          for (const prop in values) {
            if (`_${prop}` in mod)
              mod[prop] = values[prop];
          }
        }
      }
    });
  };
  if (hasMockSession(key))
    track2();
  else
    whenSaved(key, track2);
  for (const [name, modules] of Object.entries(system)) {
    if (!Array.isArray(modules))
      continue;
    modules.forEach((mod, index) => {
      const call = mod.call.bind(mod);
      mod.call = (command, args) => {
        const result = call(command, args);
        (called[name] ||= /* @__PURE__ */ new Set()).add(index);
        track2();
        saveMockSession();
        return result;
      };
    });
  }
}
function createSystem(space) {
  Bp(space.id, {
    System: [createSystemModule(space)],
    Bookings: [createBookingsModule(space)],
    ContactTracing: [createContactTracingModule(space)],
    AreaManagement: [createAreaManagementModule(space)],
    LocationServices: [new MockLocationServicesModule()],
    Camera: new Array(10).fill(0).map((_) => createCameraModule(space)),
    Display: new Array(10).fill(0).map(() => new VolumeModule()),
    Microphone: new Array(10).fill(0).map(() => new VolumeModule()),
    Capture: [createCaptureModule(space)],
    MeetingPush: [createMeetingPushModule()],
    VidConf: [createVideoConferenceModule()],
    Payment: [createPaymentsModule(space)],
    LockerLocations: [createLockerLocationsModule()],
    Lighting: [new LightingModule()],
    HearingAugmentation: [new HearingAugmentationModule()],
    Logger: [new LoggerModule()]
  });
  const system = Or(space.id);
  persistSystem(space.id, system);
  system.Bookings[0].$poll_bookings();
  setInterval(() => system.Bookings[0].$poll_bookings(), 30 * 1e3);
  system.AreaManagement[0].$update();
  setInterval(() => system.AreaManagement[0].$update(), 30 * 1e3);
}

// libs/mocks/src/lib/api/systems.mock.ts
function findSpace(id) {
  const space = MOCK_SPACES.find((_) => _.id === id);
  if (!space)
    throw { status: 404 };
  return space;
}
function registerMockSystems() {
  persist("spaces", MOCK_SPACES);
  MOCK_SPACES.forEach((space) => createSystem(space));
  registerMockEndpoint({
    path: "/api/engine/v2/systems",
    method: "GET",
    callback: (request) => {
      const systems = request.query_params?.zone_id ? MOCK_SPACES.filter((_) => _.zones.includes(request.query_params.zone_id)) : MOCK_SPACES;
      if (request.query_params?.signage) {
        return systems.map((space) => __spreadProps(__spreadValues({}, space), {
          signage: true,
          display_name: space.display_name || space.name,
          playlists: space.playlists || [],
          zones: space.zones || []
        }));
      }
      return systems;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/systems/with_emails",
    method: "GET",
    callback: (request) => {
      const emails = `${request.query_params?.in || ""}`.toLowerCase().split(",").filter(Boolean);
      return MOCK_SPACES.filter((space) => emails.includes(`${space.email || ""}`.toLowerCase()));
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/systems/:id",
    method: "GET",
    callback: (request) => findSpace(request.route_params.id)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/systems",
    method: "POST",
    callback: (request) => {
      const space = __spreadProps(__spreadValues({
        zones: []
      }, request.body), {
        id: mockId("sys-")
      });
      MOCK_SPACES.push(space);
      createSystem(space);
      return space;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/systems/:id",
    method: "PATCH",
    callback: (request) => Object.assign(findSpace(request.route_params.id), request.body, {
      id: request.route_params.id
    })
  });
  registerMockEndpoint({
    path: "/api/engine/v2/systems/:id",
    method: "DELETE",
    callback: (request) => {
      const space = findSpace(request.route_params.id);
      MOCK_SPACES.splice(MOCK_SPACES.indexOf(space), 1);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/systems/:id/:module",
    method: "GET",
    callback: (request) => {
      const parts = request.route_params.module.split("_");
      const index = Number(parts.pop()) || 1;
      const mod = Or(request.route_params.id)?.[parts.join("_")]?.[index - 1];
      if (!mod)
        throw { status: 404, message: "Module not found" };
      return moduleState(mod);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/modules",
    method: "GET",
    callback: (request) => {
      const system_id = request.query_params?.control_system_id;
      const system = system_id ? Or(system_id) : null;
      if (!system)
        return [];
      return Object.entries(system).filter(([, modules]) => Array.isArray(modules)).flatMap(([name, modules]) => modules.map((_, index) => ({
        id: `mod-${system_id}-${name}-${index + 1}`,
        name,
        custom_name: "",
        control_system_id: system_id,
        running: true,
        connected: true
      })));
    }
  });
}

// libs/mocks/src/lib/api/users.mock.ts
var GUEST_CATERING = {};
var findUser = (list, id) => list.find((user) => user.id === id || user.email === id);
function registerMockUsers() {
  const linkActiveUser = () => {
    const index = MOCK_STAFF.findIndex((u) => u.id === ACTIVE_USER.id);
    if (index >= 0)
      MOCK_STAFF[index] = ACTIVE_USER;
  };
  persist("active-user", ACTIVE_USER);
  persist("staff", MOCK_STAFF, { onLoad: linkActiveUser });
  persist("guests", MOCK_GUESTS);
  persist("guest-catering", GUEST_CATERING);
  linkActiveUser();
  registerMockEndpoint({
    path: "/api/engine/v2/users",
    method: "GET",
    callback: (request) => {
      const search = (request.query_params.q || "").toLowerCase();
      const limit = Number(request.query_params.limit || 100);
      return MOCK_STAFF.filter(({ name, email }) => {
        return !search || name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
      }).slice(0, limit);
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/users/:id",
    method: "GET",
    callback: (request) => {
      if (request.route_params.id === "current") {
        if (localStorage.getItem("mock-signage-user") === "group") {
          return __spreadProps(__spreadValues({}, ACTIVE_USER), {
            groups: ["staff", "engineering", "senior"],
            sys_admin: false
          });
        }
        return ACTIVE_USER;
      }
      const person = findUser(MOCK_STAFF, decodeURIComponent(request.route_params.id));
      if (person) {
        return person;
      }
      throw { status: 404, message: "User not found" };
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/users/:id",
    method: "PATCH",
    callback: (request) => {
      const id = decodeURIComponent(request.route_params.id);
      const person = findUser(MOCK_STAFF, id);
      if (!person)
        throw { status: 404, message: "User not found" };
      return Object.assign(person, request.body, { id: person.id });
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/people",
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_STAFF.filter(({ name, email }) => {
          return name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
        });
      }
      return MOCK_STAFF;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/people/:id",
    method: "GET",
    callback: (request) => {
      const id = decodeURIComponent(request.route_params.id);
      const person = MOCK_STAFF.find((user) => user.email === id);
      if (person) {
        return __spreadProps(__spreadValues({}, person), {
          location: generateLocation2()
        });
      }
      throw { status: 404, message: "User not found" };
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/guests",
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_GUESTS.filter((user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));
      }
      return MOCK_GUESTS;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/guests/:email",
    method: "GET",
    callback: (request) => {
      const email = decodeURIComponent(request.route_params.email);
      const person = findUser(MOCK_GUESTS, email);
      if (person)
        return person;
      throw { status: 404, message: "Guest not found" };
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/guests/:email",
    method: "PATCH",
    callback: (request) => {
      const id = decodeURIComponent(request.route_params.email);
      const guest = findUser(MOCK_GUESTS, id);
      if (guest)
        return Object.assign(guest, request.body);
      const created = __spreadValues({ id, email: id }, request.body);
      MOCK_GUESTS.push(created);
      return created;
    }
  });
  const cateringKey = (request) => `${decodeURIComponent(request.route_params.email)}|${request.query_params.booking_id || ""}`;
  registerMockEndpoint({
    path: "/api/staff/v1/guests/:email/catering",
    method: "GET",
    callback: (request) => GUEST_CATERING[cateringKey(request)] || null
  });
  registerMockEndpoint({
    path: "/api/staff/v1/guests/:email/catering",
    method: "PATCH",
    callback: (request) => {
      GUEST_CATERING[cateringKey(request)] = request.body;
      return request.body;
    }
  });
  registerMockEndpoint({
    path: "/api/staff/v1/guests/:email/meetings",
    method: "GET",
    callback: (request) => {
      if (request.route_params.email) {
        const email = request.route_params.email.toLowerCase();
        const events = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.email.toLowerCase() === email));
        return events;
      }
      throw {
        status: 404,
        message: `Unable to find meetings with guest with email ${request.route_params.email}`
      };
    }
  });
  const LOCATION_TYPES = [
    "meeting",
    "desk_id",
    "laptop",
    "mobile",
    "geo",
    "none"
  ];
  function generateLocation2() {
    const type = LOCATION_TYPES[predictableRandomInt(LOCATION_TYPES.length)];
    const level = MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)];
    const level_spaces = MOCK_SPACES.filter((s) => s.zones.includes(level.id));
    const space = level_spaces[predictableRandomInt(level_spaces.length)] || {};
    const location2 = {};
    switch (type) {
      case "meeting":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          system: space.id,
          map_id: space.map_id,
          event_id: ""
        };
        break;
      case "desk_id":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          map_id: space.map_id,
          checked_in: getUnixTime(Date.now())
        };
        break;
      case "laptop":
      case "mobile":
        location2[type] = {
          building: level.parent_id,
          level: level.id,
          x: +predictableRandomInt(1e4),
          y: +predictableRandomInt(5e3),
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
      case "geo":
        location2.geo = {
          lat: predictableRandomInt(180) - 90,
          lon: predictableRandomInt(360) - 180,
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
    }
    return location2;
  }
}

// libs/mocks/src/lib/api/zones.mock.ts
var MOCK_METADATA = {
  current: {
    contacts: {
      name: "contacts",
      description: "",
      details: [
        {
          id: "user-1",
          name: "Jonathan McFarlane (PlaceOS)",
          email: "jon@place.tech",
          first_name: "Jonathan",
          last_name: "McFarlane"
        },
        {
          id: "user-1",
          name: "Alex Sorafumo (PlaceOS)",
          email: "alex@place.tech",
          first_name: "Alex",
          last_name: "Sorafumo"
        }
      ]
    }
  },
  "zone-org": {
    concierge_app: {
      name: "concierge_app",
      description: "Mock-only concierge settings",
      details: {
        parking: {
          allow_deleting: true
        }
      }
    }
  }
};
var LOCKERS = {};
var MOCK_SETTINGS = [];
function registerMockZones() {
  const zone_lists = [
    MOCK_ORGS,
    MOCK_REGIONS,
    MOCK_BUILDINGS,
    MOCK_LEVELS,
    MOCK_ZONES
  ];
  persist("orgs", MOCK_ORGS);
  persist("regions", MOCK_REGIONS);
  persist("buildings", MOCK_BUILDINGS);
  persist("levels", MOCK_LEVELS);
  persist("zones", MOCK_ZONES);
  persist("metadata", MOCK_METADATA);
  persist("lockers", LOCKERS);
  persist("settings", MOCK_SETTINGS);
  const all_zones = () => zone_lists.flat();
  const locateZone = (id) => {
    for (const list of zone_lists) {
      const index = list.findIndex((zone) => zone.id === id);
      if (index >= 0)
        return { list, index };
    }
    throw { status: 404, message: `Unable to find zone with id "${id}"` };
  };
  registerMockEndpoint({
    path: "/api/engine/v2/zones",
    method: "GET",
    callback: (request) => {
      let zones = all_zones();
      const tag_list = `${request.query_params?.tags || ""}`.split(" ").filter(Boolean);
      if (tag_list.length) {
        zones = zones.filter((zone) => tag_list.some((tag) => zone.tags.includes(tag)));
      }
      if (request.query_params?.parent_id) {
        zones = zones.filter((zone) => zone.parent_id === request.query_params.parent_id);
      }
      return zones;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/zones/:id",
    method: "GET",
    callback: (request) => {
      const zone = all_zones().find((_) => _.id === request.route_params.id);
      if (!zone) {
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      }
      return zone;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/zones",
    method: "POST",
    callback: (request) => {
      const zone = __spreadProps(__spreadValues({ tags: [] }, request.body), { id: mockId("zone-") });
      MOCK_ZONES.push(zone);
      return zone;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/zones/:id",
    method: "PATCH",
    callback: (request) => {
      const { list, index } = locateZone(request.route_params.id);
      const zone = __spreadProps(__spreadValues(__spreadValues({}, list[index]), request.body), {
        id: list[index].id
      });
      list.splice(index, 1, zone);
      return zone;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/zones/:id",
    method: "DELETE",
    callback: (request) => {
      const { list, index } = locateZone(request.route_params.id);
      list.splice(index, 1);
    }
  });
  const findSettings = (id) => {
    const item = MOCK_SETTINGS.find((entry) => entry.id === id);
    if (!item)
      throw { status: 404, message: "Settings not found" };
    return item;
  };
  registerMockEndpoint({
    path: "/api/engine/v2/settings",
    method: "GET",
    callback: (request) => {
      const parent_id = request.query_params?.parent_id;
      return parent_id ? MOCK_SETTINGS.filter((item) => item.parent_id === parent_id) : MOCK_SETTINGS;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/settings",
    method: "POST",
    callback: (request) => {
      const item = __spreadProps(__spreadValues({}, request.body), { id: mockId("sets-") });
      MOCK_SETTINGS.push(item);
      return item;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/settings/:id",
    method: "GET",
    callback: (request) => findSettings(request.route_params.id)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/settings/:id",
    method: "PATCH",
    callback: (request) => Object.assign(findSettings(request.route_params.id), request.body)
  });
  const showMetadata = (request) => {
    const saved = MOCK_METADATA[request.route_params.id];
    const name = request.query_params.name;
    if (name && saved?.[name])
      return { [name]: saved[name] };
    if (request.query_params.name === "bindings") {
      const system_id = MOCK_SPACES[0].id;
      return {
        bindings: {
          details: {
            area_management: system_id,
            location_services: system_id,
            contact_tracing: system_id,
            lockers: system_id
            // payments: system_id,
          }
        }
      };
    }
    if (request.query_params.name === "catering") {
      return {
        catering: {
          details: MOCK_MENU
        }
      };
    }
    if (request.query_params.name === "catering-settings") {
      return {
        "catering-settings": {
          details: {
            require_notes: false,
            charge_codes: [
              "CC-1001",
              "CC-1002",
              "CC-1003",
              "CC-2001",
              "CC-2002"
            ],
            disabled_rooms: []
          }
        }
      };
    }
    if (request.query_params.name === "catering_config") {
      return {
        catering_config: {
          details: []
        }
      };
    }
    if (request.query_params.name === "lockers") {
      const parts = request.route_params.id.split("-");
      const id = parts[parts.length - 1];
      return generateLockers(id);
    }
    if (request.query_params.name === "desks") {
      const parts = request.route_params.id.split("-");
      const id = parts[parts.length - 1];
      return generateMockDeskMetadata(id);
    }
    if (request.query_params.name === "charge_codes") {
      return {
        charge_codes: {
          details: new Array(30).fill(0).map((_, idx) => `C-${idx}`)
        }
      };
    }
    if (request.query_params.name === "map_regions") {
      return {
        map_regions: {
          details: {
            areas: [
              {
                id: "zone-10.A",
                properties: {
                  capacity: 100,
                  label_location: { x: 0.36, y: 0.33 }
                  // draw_polygon: true
                },
                geometry: {
                  coordinates: [
                    [0, 0],
                    [0, 0.5],
                    [0.5, 0.5],
                    [0.5, 0]
                  ]
                }
              },
              {
                id: "zone-10.B",
                properties: {
                  capacity: 100,
                  label_location: { x: 0.76, y: 0.33 }
                }
              },
              {
                id: "zone-10.C",
                properties: {
                  capacity: 100,
                  label_location: { x: 0.63, y: 0.77 }
                }
              }
            ]
          }
        }
      };
    }
    if (MOCK_METADATA[request.route_params.id] && MOCK_METADATA[request.route_params.id][request.query_params.name]) {
      return MOCK_METADATA[request.route_params.id];
    } else if (MOCK_METADATA[request.route_params.id] && !request.query_params.name) {
      return MOCK_METADATA[request.route_params.id] || {};
    }
    return {};
  };
  registerMockEndpoint({
    path: "/api/engine/v2/metadata/:id",
    method: "GET",
    callback: (request) => showMetadata(request)
  });
  registerMockEndpoint({
    path: "/api/engine/v2/metadata/:name/bulk",
    method: "GET",
    callback: (request) => {
      const name = request.route_params.name;
      const ids = `${request.query_params.parent_ids || ""}`.split(",").filter(Boolean);
      const result = {};
      for (const id of ids) {
        const item = showMetadata({
          route_params: { id },
          query_params: { name }
        })[name];
        if (item)
          result[id] = item;
      }
      return result;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/metadata/:id",
    method: "PATCH",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  registerMockEndpoint({
    path: "/api/engine/v2/metadata/:id",
    method: "PUT",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  const DESK_FEATURES = ["sit_to_stand", "single_monitor", "dual_monitor"];
  function generateMockDeskMetadata(id) {
    return {
      desks: {
        details: new Array(30).fill(0).map((_, idx) => ({
          id: `table-${padLength(id, 2)}.${padLength(idx + 1, 3)}`,
          name: `Desk ${id}.${padLength(idx + 1, 3)}`,
          bookable: predictableRandomInt(9999) % 4 !== 0,
          groups: predictableRandomInt(9999) % 4 === 0 ? ["test-1"] : [],
          features: DESK_FEATURES.filter((_2) => predictableRandomInt(99999) % 3 === 0)
        }))
      }
    };
  }
  function generateLockers(id) {
    if (!LOCKERS[id]) {
      LOCKERS[id] = {
        lockers: {
          details: new Array(6).fill(0).map((_, idx) => {
            const position = padLength(idx + 1, 2);
            const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
            return {
              id: `locker-bank-${id}.${position}`,
              map_id: `bank-${id}.${position}`,
              level_id: `lvl-02`,
              name: `Bank ${position}`,
              height: 3,
              lockers: new Array(18).fill(0).map((_2, idx2) => ({
                id: `locker-${position}.${padLength(idx2 + 1, 3)}`,
                name: `Locker ${idx2 + 1}`,
                accessible: predictableRandomInt(9999) % 2 !== 0,
                bookable: predictableRandomInt(9999) % 4 !== 0,
                position: [idx2 % 6, Math.floor(idx2 / 6)],
                size: [1, 1]
              }))
            };
          })
        }
      };
    }
    return LOCKERS[id];
  }
  registerMockEndpoint({
    path: "/api/engine/v2/metadata/:id/children",
    method: "GET",
    callback: (request) => {
      const zone = MOCK_BUILDINGS.find((_) => _.id === request.route_params.id);
      if (!zone)
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      return MOCK_LEVELS.filter((_) => _.parent_id === zone.id).map((lvl) => {
        const parts = lvl.id.split("-");
        const id = parts[parts.length - 1];
        return {
          zone: lvl,
          metadata: request.query_params.name === "lockers" ? generateLockers(id) : generateMockDeskMetadata(id)
        };
      });
    }
  });
}

// libs/mocks/src/index.ts
function mocksInit() {
  startMockSession();
  registerMockAlerts();
  registerMockApplications();
  registerMockAssets();
  registerMockBookings();
  registerMockCalendars();
  registerMockEvents();
  registerMockMapsAi();
  registerMockShortUrls();
  registerMockSignage();
  registerMockSurveys();
  registerMockSystems();
  registerMockUsers();
  registerMockZones();
}
export {
  mocksInit
};
//# debugId=15f33794-b074-5edd-859c-063cd6025b56
//# sourceMappingURL=src-DIGUIKRX.js.map
