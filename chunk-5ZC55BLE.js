import {
  updateSpaceList
} from "./chunk-ZC4HXMJ3.js";
import {
  USER_DOMAIN
} from "./chunk-VRRINFON.js";
import {
  Space,
  email,
  form,
  from,
  ia,
  map,
  of,
  onFieldChange,
  predictableRandomInt,
  required,
  shareReplay,
  signal,
  tap,
  validate
} from "./chunk-DN5DJS3N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/events/src/lib/space.utilities.ts
var SPACE_LIST_REQUESTS = {};
var isValidUrl = (url) => {
  if (!url)
    return true;
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};
var isDigits = (value) => /^[0-9]*$/.test(`${value ?? ""}`);
function generateSystemsFormFields(system, injector) {
  const has_id = !!system?.id;
  const model = signal(
    {
      id: system?.id || "",
      name: system.name || "",
      display_name: system.display_name || "",
      email: system.email || "",
      code: system.code || "",
      support_url: system.support_url || "",
      timetable_url: system.timetable_url || "",
      camera_url: system.camera_url || "",
      camera_snapshot_url: system.camera_snapshot_urls?.find((url) => !!url) || system.camera_snapshot_url || "",
      camera_snapshot_urls: [
        ...system.camera_snapshot_urls || [system.camera_snapshot_url]
      ],
      room_booking_url: system.room_booking_url || "",
      installed_ui_devices: system.installed_ui_devices || 0,
      features: typeof system.features === "string" ? system.features.split(" ") : [...system.features || []],
      capacity: system.capacity || 0,
      bookable: system.bookable || false,
      public: system.public || false,
      description: system.description || "",
      images: [...system.images || []],
      map_id: system.map_id || "",
      timezone: system.timezone || "",
      zone: null,
      zones: [...system.zones || []],
      version: system.version,
      approval: system.approval || false
    },
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const ref_form = form(model, (p) => {
    required(p.name);
    required(p.zones);
    email(p.email);
    required(p.zone, { when: () => !has_id });
    validate(p.support_url, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
    validate(p.timetable_url, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
    validate(p.camera_url, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
    validate(p.camera_snapshot_url, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
    validate(p.room_booking_url, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
    validate(p.installed_ui_devices, ({ value }) => isDigits(value()) ? void 0 : { kind: "pattern" });
    validate(p.capacity, ({ value }) => isDigits(value()) ? void 0 : { kind: "pattern" });
  }, { injector });
  if (!has_id) {
    onFieldChange(model, (value) => value.zone, (zone) => zone && model.update((m) => __spreadProps(__spreadValues({}, m), { zones: [zone.id] })), injector);
  }
  return { model, form: ref_form };
}
function requestSpacesForZone(id) {
  if (!id)
    return of([]);
  if (SPACE_LIST_REQUESTS[id])
    return SPACE_LIST_REQUESTS[id];
  SPACE_LIST_REQUESTS[id] = from(ia({
    zone_id: id,
    limit: 500,
    signage: false
  })).pipe(map((_) => (_.data || []).map((_2) => new Space(_2))), tap((_) => updateSpaceList(_)), shareReplay(1));
  return SPACE_LIST_REQUESTS[id];
}
var SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
  const id = `space-${SPACE_COUNT++}`;
  const name = `Test Space ${SPACE_COUNT}`;
  const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
  const space = __spreadValues({
    id,
    name,
    long_name: `${name} with an long name`,
    map_id: `${SPACE_COUNT}`,
    capacity: predictableRandomInt(21, 1) * 2,
    email: `${name.toLowerCase().split(" ").join(".")}@${USER_DOMAIN}`,
    type: "",
    searchable: predictableRandomInt(99999) % 2 === 0,
    controlable: predictableRandomInt(99999) % 2 === 0,
    bookable: predictableRandomInt(99999) % 2 === 0,
    cost_hour: predictableRandomInt(300) * 100,
    setup: predictableRandomInt(6) * 5,
    breakdown: predictableRandomInt(6) * 5,
    zones: ["zone_lvl-0"],
    support_url: `/control/#/panel/${id}`,
    bookings: [],
    //Array(10).fill(0).map(i => generateMockBooking()),
    linked_rooms: linked ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`] : [],
    image: ""
  }, overrides);
  if (space["configurations"] && space["configurations"].length > 0) {
    space["configurations"].forEach((config) => config.capacity = predictableRandomInt(space.capacity) + 1);
    space["configurations"][0].capacity = space.capacity;
  }
  return space;
}

export {
  isValidUrl,
  generateSystemsFormFields,
  requestSpacesForZone,
  generateMockSpace
};
//# sourceMappingURL=chunk-5ZC55BLE.js.map
