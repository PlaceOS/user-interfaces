import {
  BehaviorSubject,
  CalendarEvent,
  Injectable,
  Space,
  __spreadProps,
  __spreadValues,
  addDays,
  getUnixTime,
  map,
  setClassMetadata,
  setHours,
  setMinutes,
  updateSpaceList,
  ɵɵdefineInjectable
} from "./chunk-35ORDZLP.js";

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
  dining: "Dining & Catering",
  av_tech: "AV / Tech Setup",
  safety: "Safety & Compliance",
  events: "Events"
};
var CATEGORY_ICONS = {
  venue: "meeting_room",
  dining: "restaurant",
  av_tech: "settings_input_hdmi",
  safety: "health_and_safety",
  events: "event"
};
var ROLE_PERMISSIONS = {
  global_admin: {
    can_approve: ["venue", "dining", "av_tech", "events"],
    can_view: ["safety"],
    reject_safety: true
  },
  campus_admin: {
    can_approve: ["venue", "dining", "av_tech", "events"],
    can_view: ["safety"],
    reject_safety: true
  },
  venue_manager: {
    can_approve: ["venue", "dining"],
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
    can_approve: ["venue", "dining", "av_tech"],
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
    can_view: ["safety", "events"],
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
var MOCK_APPROVAL_EVENTS = [
  {
    id: "appr-001",
    title: "Q1 Town Hall",
    category: "venue",
    date: _makeDate(1, 9, 0),
    duration_minutes: 120,
    location: "Main Auditorium",
    organiser: "Sarah Chen"
  },
  {
    id: "appr-002",
    title: "Leadership Offsite",
    category: "venue",
    date: _makeDate(3, 10, 0),
    duration_minutes: 480,
    location: "Conference Centre A",
    organiser: "Mark Thompson"
  },
  {
    id: "appr-003",
    title: "Welcome Lunch \u2014 New Starters",
    category: "dining",
    date: _makeDate(2, 12, 0),
    duration_minutes: 90,
    location: "Dining Hall B",
    organiser: "HR Team"
  },
  {
    id: "appr-004",
    title: "Board Dinner",
    category: "dining",
    date: _makeDate(5, 18, 30),
    duration_minutes: 150,
    location: "Executive Dining Room",
    organiser: "James Watt"
  },
  {
    id: "appr-005",
    title: "Q1 Town Hall \u2014 AV Setup",
    category: "av_tech",
    date: _makeDate(1, 8, 0),
    duration_minutes: 60,
    location: "Main Auditorium",
    organiser: "Tech Services",
    parent_event: "appr-001"
  },
  {
    id: "appr-006",
    title: "Leadership Offsite \u2014 AV Setup",
    category: "av_tech",
    date: _makeDate(3, 9, 30),
    duration_minutes: 60,
    location: "Conference Centre A",
    organiser: "Comms Team",
    parent_event: "appr-002"
  },
  {
    id: "appr-007",
    title: "Fire Drill \u2014 Building C",
    category: "safety",
    date: _makeDate(2, 10, 0),
    duration_minutes: 45,
    location: "Building C \u2014 All Floors",
    organiser: "Safety Officer"
  },
  {
    id: "appr-008",
    title: "Hazardous Materials Briefing",
    category: "safety",
    date: _makeDate(6, 9, 30),
    duration_minutes: 60,
    location: "Training Room 2",
    organiser: "EHS Team"
  },
  {
    id: "appr-009",
    title: "Community Day Setup",
    category: "events",
    date: _makeDate(7, 7, 0),
    duration_minutes: 720,
    location: "Campus Grounds",
    organiser: "Events Coordinator"
  },
  {
    id: "appr-010",
    title: "Annual Awards Night",
    category: "events",
    date: _makeDate(10, 17, 0),
    duration_minutes: 240,
    location: "Main Auditorium",
    organiser: "People & Culture"
  },
  {
    id: "appr-011",
    title: "Q1 Town Hall \u2014 Catering",
    category: "dining",
    date: _makeDate(1, 9, 0),
    duration_minutes: 120,
    location: "Main Auditorium",
    organiser: "R&D Admin",
    parent_event: "appr-001"
  },
  {
    id: "appr-012",
    title: "Leadership Offsite \u2014 Catering",
    category: "dining",
    date: _makeDate(3, 12, 0),
    duration_minutes: 90,
    location: "Conference Centre A",
    organiser: "Facilities",
    parent_event: "appr-002"
  }
];

// apps/concierge/src/app/events/event-approval-state.service.ts
var _EventApprovalStateService = class _EventApprovalStateService {
  constructor() {
    this._status = new BehaviorSubject({});
    this._role = new BehaviorSubject("global_admin");
    this.status$ = this._status.asObservable();
    this.role$ = this._role.asObservable();
    this.approved_calendar_events$ = this._status.pipe(map((statuses) => {
      const approved_ids = Object.entries(statuses).filter(([_, s]) => s === "approved").map(([id]) => id);
      const approved_events = approved_ids.map((id) => MOCK_APPROVAL_EVENTS.find((e) => e.id === id)).filter(Boolean);
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
        const parent = MOCK_APPROVAL_EVENTS.find((e) => e.id === parent_id);
        const primary = parent || children[0];
        const approved_services = children.map((c) => CATEGORY_DISPLAY_NAMES[c.category]);
        if (parent && !children.includes(parent) && approved_ids.includes(parent.id)) {
        }
        calendar_events.push(this._toCalendarEvent(primary, approved_services));
      }
      return calendar_events;
    }));
    this.all_calendar_events$ = this._status.pipe(map((statuses) => {
      return MOCK_APPROVAL_EVENTS.map((event) => {
        const status = statuses[event.id];
        const response_status = status === "approved" ? "accepted" : status === "declined" ? "declined" : "tentative";
        return this._toCalendarEvent(event, [], response_status);
      });
    }));
    this.grouped_calendar_events$ = this._status.pipe(map((statuses) => {
      const root_events = MOCK_APPROVAL_EVENTS.filter((e) => !e.parent_event);
      return root_events.map((parent) => {
        const children = MOCK_APPROVAL_EVENTS.filter((e) => e.parent_event === parent.id);
        const requirements = {
          venue: null,
          dining: null,
          av_tech: null,
          safety: null,
          events: null
        };
        requirements[parent.category] = statuses[parent.id] || "pending";
        for (const child of children) {
          requirements[child.category] = statuses[child.id] || "pending";
        }
        const active = Object.values(requirements).filter(Boolean);
        let response_status = "tentative";
        if (active.length && active.every((s) => s === "approved")) {
          response_status = "accepted";
        } else if (active.some((s) => s === "declined")) {
          response_status = "declined";
        }
        return this._toCalendarEvent(parent, [], response_status, requirements);
      });
    }));
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
    this._status.next(__spreadProps(__spreadValues({}, this._status.getValue()), {
      [event_id]: status
    }));
  }
  /** Unique Space objects for all mock event locations */
  mockSpaces() {
    const seen = /* @__PURE__ */ new Set();
    return MOCK_APPROVAL_EVENTS.map((event) => {
      const room_email = event.location.toLowerCase().replace(/[^a-z0-9]/g, ".") + "@hancock.com";
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
  _toCalendarEvent(mock, approved_services, response_status = "accepted", requirements) {
    const start_seconds = getUnixTime(mock.date);
    const organiser_email = mock.organiser.toLowerCase().replace(/[^a-z0-9]/g, ".") + "@hancock.com";
    const room_email = mock.location.toLowerCase().replace(/[^a-z0-9]/g, ".") + "@hancock.com";
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
      extension_data: __spreadValues({
        shared_event: true,
        category: mock.category,
        attendance_type: "ONSITE"
      }, requirements ? { requirements } : {})
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
  }], null, null);
})();

export {
  ROLE_DISPLAY_NAMES,
  CATEGORY_DISPLAY_NAMES,
  CATEGORY_ICONS,
  ROLE_PERMISSIONS,
  MOCK_APPROVAL_EVENTS,
  EventApprovalStateService
};
//# sourceMappingURL=chunk-T7JIVCRG.js.map
