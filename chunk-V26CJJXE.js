import {
  updateSpaceList
} from "./chunk-RS5BLX6K.js";
import {
  Space
} from "./chunk-APRAHSLM.js";
import {
  Sa,
  predictableRandomInt
} from "./chunk-UFRT5OBF.js";
import {
  catchError,
  from,
  map,
  of,
  shareReplay,
  tap,
  throwError
} from "./chunk-PVT473L2.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/users/src/lib/user.utilities.ts
var USER_DOMAIN = "@place.tech";

// libs/events/src/lib/space.utilities.ts
var SPACE_LIST_REQUESTS = {};
function requestSpacesForZone(id) {
  if (!id)
    return of([]);
  if (SPACE_LIST_REQUESTS[id])
    return SPACE_LIST_REQUESTS[id];
  SPACE_LIST_REQUESTS[id] = from(Sa({
    zone_id: id,
    limit: 500,
    signage: false
  })).pipe(
    map((_) => (_.data || []).map((_2) => new Space(_2))),
    tap((_) => updateSpaceList(_)),
    // Drop a failed request so that a retry queries the API again
    catchError((e) => {
      delete SPACE_LIST_REQUESTS[id];
      return throwError(() => e);
    }),
    shareReplay(1)
  );
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
  requestSpacesForZone,
  generateMockSpace
};
//# debugId=c7133bc5-9f0d-53f2-ae9f-622579b05925
//# sourceMappingURL=chunk-V26CJJXE.js.map
