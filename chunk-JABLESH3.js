import {
  setHours,
  setMinutes
} from "./chunk-PNVZNC3H.js";
import {
  BehaviorSubject,
  CalendarEvent,
  Injectable,
  Space,
  addDays,
  addMinutes,
  combineLatest,
  getUnixTime,
  inject,
  map,
  of,
  setClassMetadata,
  toDate,
  updateSpaceList,
  ɵɵdefineInjectable
} from "./chunk-U4YKYOQ5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/date-fns/isPast.js
function isPast(date) {
  return +toDate(date) < Date.now();
}

// apps/concierge/src/app/events/event-approvals-mock.data.ts
var ROLE_DISPLAY_NAMES = {
  global_admin: "Global Admin",
  campus_admin: "Campus Admin",
  venue_manager: "Venue Manager",
  campus_it_av_manager: "Campus IT/AV Manager",
  campus_it_av_ic: "Campus IT/AV IC",
  event_owner: "Event Owner",
  faculty_sponsor: "Faculty Sponsor",
  dining_manager: "Dining Manager",
  catering_manager: "Catering Manager",
  security: "Security",
  auditor: "Auditor",
  mrs_captain: "MRS Captain"
};
var CATEGORY_DISPLAY_NAMES = {
  venue: "Venue Booking",
  dining: "Catering & Dining",
  av_tech: "AV & Production",
  safety: "Safety & Security",
  events: "Event Coordination",
  parking: "Parking & Transport",
  setup: "Setup & Furniture",
  services: "Event Services"
};
var CATEGORY_ICONS = {
  venue: "meeting_room",
  dining: "restaurant",
  av_tech: "videocam",
  safety: "shield",
  events: "event_available",
  parking: "local_parking",
  setup: "table_restaurant",
  services: "home_repair_service"
};
var ROLE_PERMISSIONS = {
  global_admin: {
    can_approve: ["venue", "dining", "av_tech", "events", "parking", "setup", "services"],
    can_view: ["safety"],
    reject_safety: true
  },
  campus_admin: {
    can_approve: ["venue", "dining", "av_tech", "events", "parking", "setup", "services"],
    can_view: ["safety"],
    reject_safety: true
  },
  venue_manager: {
    can_approve: ["venue", "dining", "parking", "setup", "services"],
    can_view: [],
    reject_safety: false
  },
  campus_it_av_manager: {
    can_approve: ["av_tech"],
    can_view: [],
    reject_safety: false
  },
  campus_it_av_ic: {
    can_approve: ["av_tech"],
    can_view: [],
    reject_safety: false
  },
  event_owner: {
    can_approve: ["venue", "dining", "av_tech", "parking", "setup", "services"],
    can_view: [],
    reject_safety: true
  },
  faculty_sponsor: {
    can_approve: ["venue"],
    can_view: [],
    reject_safety: false
  },
  dining_manager: {
    can_approve: ["dining"],
    can_view: [],
    reject_safety: true
  },
  catering_manager: {
    can_approve: ["dining"],
    can_view: [],
    reject_safety: true
  },
  security: {
    can_approve: [],
    can_view: ["safety", "events", "parking"],
    reject_safety: true
  },
  auditor: {
    can_approve: [],
    can_view: ["safety", "events"],
    reject_safety: true
  },
  mrs_captain: {
    can_approve: [],
    can_view: ["safety"],
    reject_safety: false
  }
};
function _makeDate(days_offset, hour, minute) {
  return setMinutes(setHours(addDays(Date.now(), days_offset), hour), minute).valueOf();
}
function _refundDeadline(event_date, lead_days) {
  return addDays(event_date, -lead_days).valueOf();
}
var MOCK_APPROVAL_EVENTS = [
  {
    id: "appr-001",
    title: "Q1 Town Hall",
    category: "venue",
    date: _makeDate(-1, 9, 0),
    duration_minutes: 120,
    location: "Royce Hall Main Auditorium",
    organiser: "Sarah Chen",
    refund_deadline: _refundDeadline(_makeDate(-1, 9, 0), 14)
  },
  {
    id: "appr-002",
    title: "Leadership Offsite",
    category: "venue",
    date: _makeDate(3, 10, 0),
    duration_minutes: 480,
    location: "Centennial Ballroom \u2014 Luskin Conference Center",
    organiser: "Mark Thompson",
    refund_deadline: _refundDeadline(_makeDate(3, 10, 0), 14)
  },
  {
    id: "appr-003",
    title: "Welcome Lunch \u2014 New Starters",
    category: "dining",
    date: _makeDate(2, 12, 0),
    duration_minutes: 90,
    location: "Morrison Room \u2014 University Club",
    organiser: "HR Team",
    refund_deadline: _refundDeadline(_makeDate(2, 12, 0), 14)
  },
  {
    id: "appr-004",
    title: "Board Dinner",
    category: "dining",
    date: _makeDate(5, 18, 30),
    duration_minutes: 150,
    location: "Executive Dining Room \u2014 Anderson School",
    organiser: "James Watt",
    refund_deadline: _refundDeadline(_makeDate(5, 18, 30), 14)
  },
  {
    id: "appr-005",
    title: "Q1 Town Hall \u2014 AV Setup",
    category: "av_tech",
    date: _makeDate(-1, 8, 0),
    duration_minutes: 60,
    location: "Royce Hall Main Auditorium",
    organiser: "Tech Services",
    parent_event: "appr-001",
    refund_deadline: _refundDeadline(_makeDate(-1, 8, 0), 7)
  },
  {
    id: "appr-006",
    title: "Leadership Offsite \u2014 AV Setup",
    category: "av_tech",
    date: _makeDate(3, 9, 30),
    duration_minutes: 60,
    location: "Centennial Ballroom \u2014 Luskin Conference Center",
    organiser: "Comms Team",
    parent_event: "appr-002",
    refund_deadline: _refundDeadline(_makeDate(3, 9, 30), 7)
  },
  {
    id: "appr-007",
    title: "Fire Drill \u2014 Covel Commons",
    category: "safety",
    date: _makeDate(2, 10, 0),
    duration_minutes: 45,
    location: "Covel Commons \u2014 All Floors",
    organiser: "Safety Officer",
    refund_deadline: _refundDeadline(_makeDate(2, 10, 0), 7)
  },
  {
    id: "appr-008",
    title: "Hazardous Materials Briefing",
    category: "safety",
    date: _makeDate(6, 9, 30),
    duration_minutes: 60,
    location: "Sycamore \u2014 De Neve Plaza",
    organiser: "EHS Team",
    refund_deadline: _refundDeadline(_makeDate(6, 9, 30), 7)
  },
  {
    id: "appr-009",
    title: "Community Day Setup",
    category: "events",
    date: _makeDate(7, 7, 0),
    duration_minutes: 720,
    location: "Bruin Plaza \u2014 ASUCLA",
    organiser: "Events Coordinator",
    refund_deadline: _refundDeadline(_makeDate(7, 7, 0), 7)
  },
  {
    id: "appr-010",
    title: "Annual Awards Night",
    category: "events",
    date: _makeDate(10, 17, 0),
    duration_minutes: 240,
    location: "Royce Hall Main Auditorium",
    organiser: "People & Culture",
    refund_deadline: _refundDeadline(_makeDate(10, 17, 0), 7)
  },
  {
    id: "appr-011",
    title: "Q1 Town Hall \u2014 Catering",
    category: "dining",
    date: _makeDate(-1, 9, 0),
    duration_minutes: 120,
    location: "Royce Hall Main Auditorium",
    organiser: "R&D Admin",
    parent_event: "appr-001",
    refund_deadline: _refundDeadline(_makeDate(-1, 9, 0), 14)
  },
  {
    id: "appr-012",
    title: "Leadership Offsite \u2014 Catering",
    category: "dining",
    date: _makeDate(3, 12, 0),
    duration_minutes: 90,
    location: "Centennial Ballroom \u2014 Luskin Conference Center",
    organiser: "Facilities",
    parent_event: "appr-002",
    refund_deadline: _refundDeadline(_makeDate(3, 12, 0), 14)
  },
  {
    id: "appr-013",
    title: "Leadership Offsite \u2014 Parking",
    category: "parking",
    date: _makeDate(3, 9, 0),
    duration_minutes: 480,
    location: "Luskin Conference Center \u2014 Lot 8",
    organiser: "Transportation Services",
    parent_event: "appr-002",
    refund_deadline: _refundDeadline(_makeDate(3, 9, 0), 7)
  },
  {
    id: "appr-014",
    title: "Community Day \u2014 Event Parking",
    category: "parking",
    date: _makeDate(7, 6, 0),
    duration_minutes: 840,
    location: "Structure 4 \u2014 ASUCLA",
    organiser: "Events Coordinator",
    parent_event: "appr-009",
    refund_deadline: _refundDeadline(_makeDate(7, 6, 0), 7)
  },
  {
    id: "appr-015",
    title: "Community Day \u2014 Setup",
    category: "setup",
    date: _makeDate(7, 6, 0),
    duration_minutes: 180,
    location: "Bruin Plaza \u2014 ASUCLA",
    organiser: "Events Coordinator",
    parent_event: "appr-009",
    refund_deadline: _refundDeadline(_makeDate(7, 6, 0), 7)
  },
  // ── Awards Night child approvals ────────────────────────────────
  {
    id: "appr-016",
    title: "Annual Awards Night \u2014 Venue",
    category: "venue",
    date: _makeDate(10, 16, 0),
    duration_minutes: 60,
    location: "Royce Hall Main Auditorium",
    organiser: "People & Culture",
    parent_event: "appr-010",
    refund_deadline: _refundDeadline(_makeDate(10, 16, 0), 14)
  },
  {
    id: "appr-017",
    title: "Annual Awards Night \u2014 Catering",
    category: "dining",
    date: _makeDate(10, 17, 0),
    duration_minutes: 240,
    location: "Royce Hall Main Auditorium",
    organiser: "People & Culture",
    parent_event: "appr-010",
    refund_deadline: _refundDeadline(_makeDate(10, 17, 0), 14)
  },
  {
    id: "appr-018",
    title: "Annual Awards Night \u2014 AV & Production",
    category: "av_tech",
    date: _makeDate(10, 15, 0),
    duration_minutes: 120,
    location: "Royce Hall Main Auditorium",
    organiser: "Tech Services",
    parent_event: "appr-010",
    refund_deadline: _refundDeadline(_makeDate(10, 15, 0), 7)
  },
  {
    id: "appr-019",
    title: "Annual Awards Night \u2014 Security",
    category: "safety",
    date: _makeDate(10, 16, 0),
    duration_minutes: 300,
    location: "Royce Hall Main Auditorium",
    organiser: "UCPD",
    parent_event: "appr-010",
    refund_deadline: _refundDeadline(_makeDate(10, 16, 0), 7)
  },
  // ── Community Day child approvals ───────────────────────────────
  {
    id: "appr-020",
    title: "Community Day \u2014 Venue",
    category: "venue",
    date: _makeDate(7, 7, 0),
    duration_minutes: 720,
    location: "Bruin Plaza \u2014 ASUCLA",
    organiser: "Events Coordinator",
    parent_event: "appr-009",
    refund_deadline: _refundDeadline(_makeDate(7, 7, 0), 14)
  },
  {
    id: "appr-021",
    title: "Community Day \u2014 Catering",
    category: "dining",
    date: _makeDate(7, 11, 0),
    duration_minutes: 180,
    location: "Bruin Plaza \u2014 ASUCLA",
    organiser: "Events Coordinator",
    parent_event: "appr-009",
    refund_deadline: _refundDeadline(_makeDate(7, 11, 0), 14)
  },
  {
    id: "appr-022",
    title: "Community Day \u2014 AV & Production",
    category: "av_tech",
    date: _makeDate(7, 6, 30),
    duration_minutes: 60,
    location: "Bruin Plaza \u2014 ASUCLA",
    organiser: "Tech Services",
    parent_event: "appr-009",
    refund_deadline: _refundDeadline(_makeDate(7, 6, 30), 7)
  },
  // ── Services approvals ────────────────────────────────────────────
  {
    id: "appr-023",
    title: "Q1 Town Hall \u2014 Event Services",
    category: "services",
    date: _makeDate(-1, 9, 0),
    duration_minutes: 120,
    location: "Royce Hall Main Auditorium",
    organiser: "Sarah Chen",
    parent_event: "appr-001",
    refund_deadline: _refundDeadline(_makeDate(-1, 9, 0), 7)
  },
  {
    id: "appr-024",
    title: "Leadership Offsite \u2014 Event Services",
    category: "services",
    date: _makeDate(3, 10, 0),
    duration_minutes: 480,
    location: "Centennial Ballroom \u2014 Luskin Conference Center",
    organiser: "Mark Thompson",
    parent_event: "appr-002",
    refund_deadline: _refundDeadline(_makeDate(3, 10, 0), 7)
  },
  {
    id: "appr-025",
    title: "Annual Awards Night \u2014 Event Services",
    category: "services",
    date: _makeDate(10, 17, 0),
    duration_minutes: 240,
    location: "Royce Hall Main Auditorium",
    organiser: "People & Culture",
    parent_event: "appr-010",
    refund_deadline: _refundDeadline(_makeDate(10, 17, 0), 7)
  },
  // ── Ad-hoc / last-minute additions ──────────────────────────────
  {
    id: "appr-026",
    title: "Q1 Town Hall \u2014 Extra Wireless Microphone",
    category: "av_tech",
    date: _makeDate(-1, 9, 0),
    duration_minutes: 120,
    location: "Royce Hall Main Auditorium",
    organiser: "Tech Services",
    parent_event: "appr-001",
    is_adhoc: true,
    added_date: _makeDate(-1, 7, 30),
    refund_deadline: _refundDeadline(_makeDate(-1, 9, 0), 7)
  },
  {
    id: "appr-027",
    title: "Annual Awards Night \u2014 Last-Minute Security Detail",
    category: "safety",
    date: _makeDate(10, 16, 0),
    duration_minutes: 300,
    location: "Royce Hall Main Auditorium",
    organiser: "UCPD",
    parent_event: "appr-010",
    is_adhoc: true,
    added_date: _makeDate(10, 10, 0),
    refund_deadline: _refundDeadline(_makeDate(10, 16, 0), 7)
  },
  {
    id: "appr-028",
    title: "Leadership Offsite \u2014 Emergency Catering Top-Up",
    category: "dining",
    date: _makeDate(3, 12, 0),
    duration_minutes: 90,
    location: "Centennial Ballroom \u2014 Luskin Conference Center",
    organiser: "Facilities",
    parent_event: "appr-002",
    is_adhoc: true,
    added_date: _makeDate(3, 8, 0),
    refund_deadline: _refundDeadline(_makeDate(3, 12, 0), 14)
  }
];
var MOCK_EVENT_ORDERS = {
  // ── appr-003: Welcome Lunch — New Starters (dining) ─────────────
  "appr-003": {
    event_id: "appr-003",
    guest_count: 30,
    items: [
      { menu_item_id: "classic_lunch_buffet", quantity: 30, notes: "Vegetarian option for 8 guests" },
      { menu_item_id: "arnold_palmer", quantity: 4 },
      { menu_item_id: "ucla_cookies", quantity: 3 }
    ]
  },
  // ── appr-004: Board Dinner (dining) ─────────────────────────────
  "appr-004": {
    event_id: "appr-004",
    guest_count: 24,
    items: [
      { menu_item_id: "plated_dinner_entree", quantity: 24 },
      { menu_item_id: "hosted_premium_bar", quantity: 24, notes: "3 hours" },
      { menu_item_id: "artisan_cheese_lg", quantity: 2 },
      { menu_item_id: "petit_fours", quantity: 4, notes: "Assorted selection" }
    ]
  },
  // ── appr-005: Town Hall — AV Setup (av_tech) ────────────────────
  "appr-005": {
    event_id: "appr-005",
    items: [
      { menu_item_id: "av_basic_projector", quantity: 1 },
      { menu_item_id: "av_monitor_65", quantity: 1 },
      { menu_item_id: "av_podium", quantity: 1 },
      { menu_item_id: "av_additional_mic", quantity: 2 },
      { menu_item_id: "av_slide_advancer", quantity: 1 },
      { menu_item_id: "av_technician_day", quantity: 1 }
    ]
  },
  // ── appr-006: Leadership Offsite — AV Setup (av_tech) ───────────
  "appr-006": {
    event_id: "appr-006",
    items: [
      { menu_item_id: "av_projector_screen", quantity: 1 },
      { menu_item_id: "av_additional_mic", quantity: 3 },
      { menu_item_id: "av_hdmi_cable", quantity: 4, notes: "6-foot cables for breakout rooms" },
      { menu_item_id: "av_operator", quantity: 8, notes: "8 hours on-site" }
    ]
  },
  // ── appr-011: Town Hall — Catering (dining) ─────────────────────
  "appr-011": {
    event_id: "appr-011",
    guest_count: 200,
    items: [
      { menu_item_id: "classic_continental", quantity: 200 },
      { menu_item_id: "beverage_package", quantity: 200 },
      { menu_item_id: "ucla_cookies", quantity: 17, notes: "Assorted flavors" }
    ]
  },
  // ── appr-012: Leadership Offsite — Catering (dining) ────────────
  "appr-012": {
    event_id: "appr-012",
    guest_count: 40,
    items: [
      { menu_item_id: "deluxe_boxed_lunch", quantity: 40, notes: "Include vegan option x10" },
      { menu_item_id: "ee_am_break", quantity: 40 },
      { menu_item_id: "canned_juices", quantity: 40 }
    ]
  },
  // ── appr-015: Community Day — Setup (setup) ─────────────────────
  "appr-015": {
    event_id: "appr-015",
    items: [
      { menu_item_id: "cocktail_standing", quantity: 10 },
      { menu_item_id: "table_6ft", quantity: 8 },
      { menu_item_id: "table_8ft", quantity: 4 },
      { menu_item_id: "registration_table", quantity: 2, notes: "Near main entrance" },
      { menu_item_id: "buffet_12ft", quantity: 3 }
    ]
  },
  // ── appr-017: Awards Night — Catering (dining) ──────────────────
  "appr-017": {
    event_id: "appr-017",
    guest_count: 150,
    items: [
      { menu_item_id: "warm_passed_hors", quantity: 150, notes: "Cocktail hour \u2014 1 hr" },
      { menu_item_id: "celebration", quantity: 150 },
      { menu_item_id: "hosted_premium_bar", quantity: 150, notes: "4 hours" },
      { menu_item_id: "mini_desserts", quantity: 15, notes: "15 dozen assorted" }
    ]
  },
  // ── appr-018: Awards Night — AV & Production (av_tech) ──────────
  "appr-018": {
    event_id: "appr-018",
    items: [
      { menu_item_id: "av_monitor_85", quantity: 2, notes: "Stage left & right" },
      { menu_item_id: "av_moon_balloon", quantity: 1 },
      { menu_item_id: "av_camera", quantity: 2 },
      { menu_item_id: "av_mixer_16ch", quantity: 1 },
      { menu_item_id: "av_additional_mic", quantity: 6, notes: "4 lapel + 2 handheld" },
      { menu_item_id: "av_tech_director", quantity: 1 },
      { menu_item_id: "av_technician_day", quantity: 2 },
      { menu_item_id: "av_lighting_operator", quantity: 10, notes: "10 hours" }
    ]
  },
  // ── appr-021: Community Day — Catering (dining) ─────────────────
  "appr-021": {
    event_id: "appr-021",
    guest_count: 500,
    items: [
      { menu_item_id: "national_barbecue", quantity: 500 },
      { menu_item_id: "soft_drinks_bar", quantity: 200 },
      { menu_item_id: "chips_bags", quantity: 300, notes: "Assorted variety" }
    ]
  },
  // ── appr-022: Community Day — AV & Production (av_tech) ─────────
  "appr-022": {
    event_id: "appr-022",
    items: [
      { menu_item_id: "av_projector_screen", quantity: 2 },
      { menu_item_id: "av_additional_mic", quantity: 4 },
      { menu_item_id: "av_power_strip", quantity: 6, notes: "Distributed across plaza" },
      { menu_item_id: "av_operator", quantity: 10, notes: "10 hours" }
    ]
  },
  // ── appr-023: Town Hall — Event Services (services) ─────────────
  "appr-023": {
    event_id: "appr-023",
    items: [
      { menu_item_id: "after_hours", quantity: 1, notes: "Event extends past 5 PM" },
      { menu_item_id: "av_vendor_basic", quantity: 1, notes: "Vendor supervision for catering" }
    ]
  },
  // ── appr-024: Leadership Offsite — Event Services (services) ────
  "appr-024": {
    event_id: "appr-024",
    items: [
      { menu_item_id: "after_hours", quantity: 2, notes: "Full-day event \u2014 2 extensions" },
      { menu_item_id: "av_vendor_premium", quantity: 1, notes: "Premium vendor oversight" }
    ]
  },
  // ── appr-025: Awards Night — Event Services (services) ──────────
  "appr-025": {
    event_id: "appr-025",
    items: [
      { menu_item_id: "after_hours", quantity: 1 },
      { menu_item_id: "av_vendor_premium", quantity: 1, notes: "Award ceremony oversight" },
      { menu_item_id: "av_setup_test", quantity: 1, notes: "Full stage setup & sound check" }
    ]
  }
};
function getEventOrder(event_id) {
  return MOCK_EVENT_ORDERS[event_id];
}
function getEventFamilyOrders(event_id) {
  const orders = [];
  const own = MOCK_EVENT_ORDERS[event_id];
  if (own)
    orders.push(own);
  const children = MOCK_APPROVAL_EVENTS.filter((e) => e.parent_event === event_id);
  for (const child of children) {
    const child_order = MOCK_EVENT_ORDERS[child.id];
    if (child_order)
      orders.push(child_order);
  }
  return orders;
}

// apps/concierge/src/app/events/event-sync.service.ts
var SYNC_URL = "http://localhost:3001";
var _EventSyncService = class _EventSyncService {
  constructor() {
    this._synced_events = new BehaviorSubject([]);
    this._synced_statuses = new BehaviorSubject({});
    this._event_source = null;
    this._connected = new BehaviorSubject(false);
    this._raw_sync_events = /* @__PURE__ */ new Map();
    this._last_cancellation = new BehaviorSubject(null);
    this.synced_events$ = this._synced_events.asObservable();
    this.synced_statuses$ = this._synced_statuses.asObservable();
    this.connected$ = this._connected.asObservable();
    this.cancellation$ = this._last_cancellation.asObservable();
  }
  /** Get raw sync event data by original event ID (for quote/pricing lookup) */
  getRawSyncEvent(original_event_id) {
    return this._raw_sync_events.get(original_event_id) || null;
  }
  connect() {
    if (this._event_source)
      return;
    try {
      this._event_source = new EventSource(`${SYNC_URL}/api/events/stream`);
      this._event_source.onopen = () => {
        this._connected.next(true);
        console.log("[EventSync] Connected to sync server");
      };
      this._event_source.onmessage = (msg) => {
        try {
          const data = JSON.parse(msg.data);
          if (data.type === "event_added") {
            this._handleEventAdded(data.event);
          } else if (data.type === "event_updated") {
            this._handleEventUpdated(data.event);
          } else if (data.type === "status_changed") {
            this._handleStatusChanged(data);
          } else if (data.type === "service_cancelled") {
            this._handleServiceCancelled(data);
          }
        } catch (e) {
          console.warn("[EventSync] Failed to parse SSE:", e);
        }
      };
      this._event_source.onerror = () => {
        this._connected.next(false);
        console.warn("[EventSync] SSE error, will auto-reconnect");
      };
    } catch (e) {
      console.warn("[EventSync] Could not connect:", e);
    }
  }
  disconnect() {
    if (this._event_source) {
      this._event_source.close();
      this._event_source = null;
      this._connected.next(false);
    }
  }
  async fetchEvents() {
    try {
      const res = await fetch(`${SYNC_URL}/api/events`);
      const data = await res.json();
      const sync_events = data.events || [];
      const mock_events = [];
      let all_statuses = {};
      for (const evt of sync_events) {
        this._raw_sync_events.set(evt.id, evt);
        mock_events.push(...this.convertSyncEventToMockEvents(evt));
        Object.assign(all_statuses, this.extractStatuses(evt));
      }
      this._synced_events.next(mock_events);
      this._synced_statuses.next(all_statuses);
      console.log(`[EventSync] Fetched ${sync_events.length} events \u2192 ${mock_events.length} mock entries, ${Object.keys(all_statuses).length} statuses`);
    } catch (e) {
      console.warn("[EventSync] Failed to fetch events:", e);
    }
  }
  async postStatus(event_id, category, status, by_user) {
    await fetch(`${SYNC_URL}/api/events/${event_id}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, status, by_user })
    });
  }
  /** Add a MockApprovalEvent to the local synced events list reactively */
  addLocalEvent(event) {
    const current = this._synced_events.getValue();
    this._synced_events.next([...current, event]);
  }
  /** POST an ad-hoc service to the sync server */
  async postAdhocService(event_id, service) {
    try {
      await fetch(`${SYNC_URL}/api/events/${event_id}/adhoc-service`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(service)
      });
    } catch (e) {
      console.warn("[EventSync] Failed to post adhoc service:", e);
    }
  }
  /**
   * Extract approval statuses from a sync event's workflow tasks.
   * Returns a map of concierge event ID → 'approved' | 'declined'.
   */
  extractStatuses(sync_event) {
    const statuses = {};
    const tasks = sync_event.workflow?.approval_tasks || [];
    for (const task of tasks) {
      const category = task.stage.toLowerCase();
      const s = task.status;
      const mapped = s === "cancelled" ? "declined" : s;
      if (mapped === "approved" || mapped === "declined") {
        if (category === "venue") {
          statuses[`sync-${sync_event.id}`] = mapped;
        } else {
          statuses[`sync-${sync_event.id}-${category}`] = mapped;
        }
      }
    }
    return statuses;
  }
  convertSyncEventToMockEvents(sync_event) {
    const results = [];
    const tasks = sync_event.workflow?.approval_tasks || [];
    const event_date = sync_event.event_start || sync_event.date || sync_event.workflow?.submitted_at || Date.now();
    const venue_task = tasks.find((t) => t.stage.toLowerCase() === "venue");
    const venue_refund_deadline = venue_task?.refund_deadline || event_date - 14 * 24 * 60 * 60 * 1e3;
    results.push({
      id: `sync-${sync_event.id}`,
      title: sync_event.title,
      category: "venue",
      date: event_date,
      duration_minutes: sync_event.duration_minutes || 60,
      location: sync_event.location || "",
      organiser: sync_event.organiser || "",
      refund_deadline: venue_refund_deadline
    });
    for (const task of tasks) {
      const category = task.stage.toLowerCase();
      if (category === "venue")
        continue;
      if (task.status === "cancelled")
        continue;
      const child_refund_deadline = task.refund_deadline || event_date - 7 * 24 * 60 * 60 * 1e3;
      results.push({
        id: `sync-${sync_event.id}-${category}`,
        title: `${sync_event.title} \u2014 ${CATEGORY_DISPLAY_NAMES[category] || category}`,
        category,
        date: event_date,
        duration_minutes: sync_event.duration_minutes || 60,
        location: sync_event.location || "",
        organiser: sync_event.organiser || "",
        parent_event: `sync-${sync_event.id}`,
        refund_deadline: child_refund_deadline
      });
    }
    const adhoc = sync_event.adhoc_services || [];
    for (const svc of adhoc) {
      results.push({
        id: `sync-${sync_event.id}-adhoc-${svc.id}`,
        title: `${sync_event.title} \u2014 ${svc.name}`,
        category: "services",
        date: event_date,
        duration_minutes: sync_event.duration_minutes || 60,
        location: sync_event.location || "",
        organiser: sync_event.organiser || "",
        parent_event: `sync-${sync_event.id}`,
        is_adhoc: true,
        added_date: svc.added_at
      });
    }
    return results;
  }
  _handleEventAdded(sync_event) {
    if (!sync_event)
      return;
    this._raw_sync_events.set(sync_event.id, sync_event);
    const new_entries = this.convertSyncEventToMockEvents(sync_event);
    const current = this._synced_events.getValue();
    const existing_ids = new Set(current.map((e) => e.id));
    const to_add = new_entries.filter((e) => !existing_ids.has(e.id));
    if (to_add.length) {
      this._synced_events.next([...current, ...to_add]);
      console.log(`[EventSync] Added ${to_add.length} entries from event: ${sync_event.title}`);
    }
  }
  _handleEventUpdated(sync_event) {
    if (!sync_event)
      return;
    this._raw_sync_events.set(sync_event.id, sync_event);
    const new_entries = this.convertSyncEventToMockEvents(sync_event);
    const current = this._synced_events.getValue();
    const prefix = `sync-${sync_event.id}`;
    const filtered = current.filter((e) => e.id !== prefix && !e.id.startsWith(`${prefix}-`));
    this._synced_events.next([...filtered, ...new_entries]);
  }
  _handleStatusChanged(data) {
    const event_id = data.event_id;
    const category = (data.category || "").toLowerCase();
    const status = data.status;
    if (status === "approved" || status === "declined") {
      const concierge_id = category === "venue" ? `sync-${event_id}` : `sync-${event_id}-${category}`;
      const current = this._synced_statuses.getValue();
      this._synced_statuses.next(__spreadProps(__spreadValues({}, current), {
        [concierge_id]: status
      }));
    }
    console.log(`[EventSync] Status changed: event=${event_id} category=${category} status=${status}`);
  }
  _handleServiceCancelled(data) {
    const event_id = data.event_id;
    const stage = (data.stage || "").toLowerCase();
    const cancel_id = `sync-${event_id}-${stage}`;
    const refund_issued = data.refund_issued || 0;
    const current = this._synced_events.getValue();
    const updated = current.filter((e) => e.id !== cancel_id);
    if (updated.length !== current.length) {
      this._synced_events.next(updated);
      console.log(`[EventSync] Removed cancelled service: ${cancel_id} (refund: $${refund_issued})`);
    }
    const current_statuses = this._synced_statuses.getValue();
    this._synced_statuses.next(__spreadProps(__spreadValues({}, current_statuses), {
      [cancel_id]: "declined"
    }));
    this._last_cancellation.next({
      event_id,
      stage,
      cancel_id,
      refund_issued,
      cancelled_at: data.cancelled_at || Date.now()
    });
  }
};
_EventSyncService.\u0275fac = function EventSyncService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventSyncService)();
};
_EventSyncService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventSyncService, factory: _EventSyncService.\u0275fac, providedIn: "root" });
var EventSyncService = _EventSyncService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventSyncService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// apps/concierge/src/app/events/event-approval-state.service.ts
function _autoApprovePastEvents() {
  const statuses = {};
  for (const evt of MOCK_APPROVAL_EVENTS) {
    const event_end = addMinutes(evt.date, evt.duration_minutes);
    if (isPast(event_end)) {
      statuses[evt.id] = "approved";
    }
  }
  return statuses;
}
var _EventApprovalStateService = class _EventApprovalStateService {
  latestAllEvents() {
    return this._all_events_cache;
  }
  constructor() {
    this._sync = inject(EventSyncService);
    this._status = new BehaviorSubject(_autoApprovePastEvents());
    this._role = new BehaviorSubject("global_admin");
    this._recent_changes = new BehaviorSubject([]);
    this.status$ = this._status.asObservable();
    this.role$ = this._role.asObservable();
    this.recent_changes$ = this._recent_changes.asObservable();
    this._all_events_cache = [...MOCK_APPROVAL_EVENTS];
    this.all_events$ = combineLatest([
      this._sync.synced_events$,
      of(MOCK_APPROVAL_EVENTS)
    ]).pipe(map(([synced, mock]) => {
      const merged = [...mock, ...synced];
      this._all_events_cache = merged;
      return merged;
    }));
    this.approved_calendar_events$ = combineLatest([
      this._status,
      this.all_events$
    ]).pipe(map(([statuses, all]) => {
      const approved_ids = Object.entries(statuses).filter(([_, s]) => s === "approved").map(([id]) => id);
      const approved_events = approved_ids.map((id) => all.find((e) => e.id === id)).filter(Boolean);
      const parent_map = /* @__PURE__ */ new Map();
      for (const evt of approved_events) {
        const key = evt.parent_event || evt.id;
        if (!parent_map.has(key)) {
          parent_map.set(key, []);
        }
        parent_map.get(key).push(evt);
      }
      const calendar_events = [];
      for (const [parent_id, children] of parent_map) {
        const parent = all.find((e) => e.id === parent_id);
        const primary = parent || children[0];
        const approved_services = children.map((c) => CATEGORY_DISPLAY_NAMES[c.category]);
        if (parent && !children.includes(parent) && approved_ids.includes(parent.id)) {
        }
        calendar_events.push(this._toCalendarEvent(primary, approved_services));
      }
      return calendar_events;
    }));
    this.all_calendar_events$ = combineLatest([
      this._status,
      this.all_events$
    ]).pipe(map(([statuses, all]) => {
      return all.map((event) => {
        const status = statuses[event.id];
        const response_status = status === "approved" ? "accepted" : status === "declined" ? "declined" : "tentative";
        return this._toCalendarEvent(event, [], response_status);
      });
    }));
    this.grouped_calendar_events$ = combineLatest([
      this._status,
      this.all_events$,
      this._recent_changes
    ]).pipe(map(([statuses, all, recent_changes]) => {
      const root_events = all.filter((e) => !e.parent_event);
      return root_events.map((parent) => {
        const children = all.filter((e) => e.parent_event === parent.id);
        const requirements = {
          venue: null,
          dining: null,
          av_tech: null,
          safety: null,
          events: null,
          parking: null,
          setup: null,
          services: null
        };
        requirements[parent.category] = statuses[parent.id] || "pending";
        for (const child of children) {
          requirements[child.category] = statuses[child.id] || "pending";
        }
        const active = Object.values(requirements).filter(Boolean);
        let response_status = "tentative";
        const fully_cancelled = active.length > 0 && active.every((s) => s === "declined");
        if (active.length && active.every((s) => s === "approved")) {
          response_status = "accepted";
        } else if (fully_cancelled) {
          response_status = "cancelled";
        } else if (active.some((s) => s === "declined")) {
          response_status = "declined";
        }
        const adhoc_count = children.filter((c) => c.is_adhoc).length;
        const event_changes = recent_changes.filter((c) => c.parent_id === parent.id || c.event_id === parent.id);
        return this._toCalendarEvent(parent, [], response_status, requirements, fully_cancelled, adhoc_count, event_changes);
      });
    }));
    this._sync.connect();
    this._sync.fetchEvents();
    this._sync.cancellation$.subscribe((cancellation) => {
      if (!cancellation)
        return;
      this.addRecentChange({
        event_id: cancellation.cancel_id,
        parent_id: `sync-${cancellation.event_id}`,
        type: "cancelled",
        label: CATEGORY_DISPLAY_NAMES[cancellation.stage] || cancellation.stage,
        timestamp: cancellation.cancelled_at
      });
    });
    this._sync.synced_events$.subscribe((synced_events) => {
      const adhoc_events = synced_events.filter((e) => e.is_adhoc);
      const current_statuses = this._status.getValue();
      const existing_changes = this._recent_changes.getValue();
      let statuses_changed = false;
      const updated_statuses = __spreadValues({}, current_statuses);
      for (const adhoc of adhoc_events) {
        if (!updated_statuses[adhoc.id]) {
          updated_statuses[adhoc.id] = "approved";
          statuses_changed = true;
        }
        const already_tracked = existing_changes.some((c) => c.event_id === adhoc.id && c.type === "adhoc_added");
        if (!already_tracked && adhoc.added_date) {
          this.addRecentChange({
            event_id: adhoc.id,
            parent_id: adhoc.parent_event || adhoc.id,
            type: "adhoc_added",
            label: adhoc.title.split(" \u2014 ").pop() || adhoc.title,
            timestamp: adhoc.added_date
          });
        }
      }
      if (statuses_changed) {
        this._status.next(updated_statuses);
      }
    });
    this._sync.synced_statuses$.subscribe((synced) => {
      if (!Object.keys(synced).length)
        return;
      const current = this._status.getValue();
      const merged = __spreadValues({}, current);
      let changed = false;
      for (const [id, status] of Object.entries(synced)) {
        if (!merged[id]) {
          merged[id] = status;
          changed = true;
        }
      }
      if (changed) {
        this._status.next(merged);
      }
    });
  }
  get status() {
    return this._status.getValue();
  }
  get role() {
    return this._role.getValue();
  }
  setRole(role) {
    this._role.next(role);
  }
  setStatus(event_id, status) {
    const prev = this._status.getValue()[event_id];
    this._status.next(__spreadProps(__spreadValues({}, this._status.getValue()), {
      [event_id]: status
    }));
    if (status === "declined" && prev !== "declined") {
      const all_events = this.latestAllEvents();
      const evt = all_events.find((e) => e.id === event_id);
      const label = evt ? CATEGORY_DISPLAY_NAMES[evt.category] || evt.category : event_id;
      const parent_id = evt?.parent_event || event_id;
      this.addRecentChange({
        event_id,
        parent_id,
        type: "cancelled",
        label,
        timestamp: Date.now()
      });
    }
    if (event_id.startsWith("sync-")) {
      const parts = event_id.replace("sync-", "").split("-");
      const original_event_id = parts[0];
      const category = parts.slice(1).join("-") || "venue";
      this._sync.postStatus(original_event_id, category, status, "Concierge Admin").catch((err) => console.warn("[Sync] Failed to post status:", err));
    }
  }
  addRecentChange(change) {
    const current = this._recent_changes.getValue();
    this._recent_changes.next([...current, change]);
  }
  /** Force all observables to re-evaluate (e.g. after adding mock events) */
  refresh() {
    this._status.next(__spreadValues({}, this._status.getValue()));
  }
  /** Unique Space objects for all mock event locations */
  mockSpaces() {
    const seen = /* @__PURE__ */ new Set();
    return MOCK_APPROVAL_EVENTS.map((event) => {
      const room_email = event.location.toLowerCase().replace(/[^a-z0-9]/g, ".") + "@ucla.edu";
      if (seen.has(room_email))
        return null;
      seen.add(room_email);
      return new Space({
        id: room_email,
        name: event.location,
        display_name: event.location,
        email: room_email,
        bookable: true
      });
    }).filter(Boolean);
  }
  _toCalendarEvent(mock, approved_services, response_status = "accepted", requirements, fully_cancelled = false, adhoc_count = 0, recent_changes = []) {
    const start_seconds = getUnixTime(mock.date);
    const organiser_email = mock.organiser.toLowerCase().replace(/[^a-z0-9]/g, ".") + "@ucla.edu";
    const room_email = mock.location.toLowerCase().replace(/[^a-z0-9]/g, ".") + "@ucla.edu";
    let body = "";
    if (requirements) {
      const icon = (name, color) => `<span class="material-symbols-rounded" style="font-size:16px;vertical-align:middle;color:${color}">${name}</span>`;
      const STATUS_LABEL = {
        approved: `${icon("done", "#16a34a")} Approved`,
        declined: `${icon("close", "#dc2626")} Declined`,
        pending: `${icon("schedule", "#ca8a04")} Pending`
      };
      const items = Object.entries(requirements).filter(([_, status]) => status !== null).map(([cat, status]) => `<li>${CATEGORY_DISPLAY_NAMES[cat] || cat} \u2014 ${STATUS_LABEL[status] || status}</li>`).join("");
      body = `<p><strong>Services</strong></p><ul>${items}</ul>`;
    } else {
      const services_html = approved_services.map((s) => `<li>${s} \u2014 Confirmed</li>`).join("");
      body = `<p><strong>Approved Services</strong></p><ul>${services_html}</ul>`;
    }
    updateSpaceList([
      new Space({
        id: room_email,
        name: mock.location,
        display_name: mock.location,
        email: room_email
      })
    ]);
    return new CalendarEvent({
      id: mock.id,
      title: mock.title,
      event_start: start_seconds,
      event_end: start_seconds + mock.duration_minutes * 60,
      host: organiser_email,
      location: mock.location,
      body,
      attendees: [
        {
          name: mock.organiser,
          email: organiser_email
        },
        {
          name: mock.location,
          email: room_email,
          resource: true,
          display_name: mock.location,
          response_status
        }
      ],
      extension_data: __spreadValues(__spreadValues(__spreadValues(__spreadValues({
        shared_event: true,
        category: mock.category,
        attendance_type: "ONSITE"
      }, requirements ? { requirements } : {}), fully_cancelled ? { fully_cancelled: true } : {}), adhoc_count > 0 ? { adhoc_count } : {}), recent_changes.length > 0 ? { recent_changes } : {})
    });
  }
};
_EventApprovalStateService.\u0275fac = function EventApprovalStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventApprovalStateService)();
};
_EventApprovalStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventApprovalStateService, factory: _EventApprovalStateService.\u0275fac, providedIn: "root" });
var EventApprovalStateService = _EventApprovalStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventApprovalStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ROLE_DISPLAY_NAMES,
  CATEGORY_DISPLAY_NAMES,
  CATEGORY_ICONS,
  ROLE_PERMISSIONS,
  MOCK_APPROVAL_EVENTS,
  getEventOrder,
  getEventFamilyOrders,
  EventSyncService,
  EventApprovalStateService
};
//# sourceMappingURL=chunk-JABLESH3.js.map
