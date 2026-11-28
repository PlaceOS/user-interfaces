import { HashMap } from '@placeos/common';
import {
    type MockPlaceWebsocketSystem,
    mockSystem,
    registerSystem,
} from '@placeos/ts-client/compat';

import { createCameraModule } from './realtime/camera';
import { createCaptureModule } from './realtime/capture';
import { createContactTracingModule } from './realtime/contact-tracing';
import { createSystemModule } from './realtime/control';
import {
    createAreaManagementModule,
    MockLocationServicesModule,
} from './realtime/desks';
import { createBookingsModule } from './realtime/events';
import { createLockerLocationsModule } from './realtime/locker-locations';
import { createMeetingPushModule } from './realtime/meeting';
import { createPaymentsModule } from './realtime/payments';
import {
    HearingAugmentationModule,
    LightingModule,
    LoggerModule,
} from './realtime/room-devices';
import { createVideoConferenceModule } from './realtime/video-conference';
import { VolumeModule } from './realtime/volume';
import {
    hasMockSession,
    persistValue,
    saveMockSession,
    whenSaved,
} from './session';

/** Saved binding values of a mock system, by module name and index */
type SystemState = HashMap<HashMap<HashMap>>;

/** Whether a value comes back the same from JSON */
const isPlainData = (value: unknown) =>
    value === null ||
    typeof value !== 'object' ||
    Array.isArray(value) ||
    Object.getPrototypeOf(value) === Object.prototype;

/**
 * Public binding values of a mock module, without its functions. ts-client
 * makes each status variable a property with a getter and a setter, and
 * keeps each function under a `$` name. Names that start with `_` are
 * internal state of the mock, such as a `Set`, and are left out.
 */
export function moduleState(mod: HashMap): HashMap {
    const values: HashMap = {};
    for (const key of Object.keys(mod)) {
        if (key[0] === '_' || key[0] === '$') continue;
        const value = mod[key];
        if (typeof value === 'function') continue;
        if (isPlainData(value)) values[key] = value;
    }
    return values;
}

/** The `$` commands that run now, with the commands that they call */
let command_depth = 0;

/**
 * Keep the binding values of the mock modules that receive a command, for
 * the browser session. Polled modules, such as Bookings, load their data
 * again, so only modules the user controls are saved.
 */
function persistSystem(id: string, system: MockPlaceWebsocketSystem) {
    const key = `system.${id}`;
    /** Modules that received a command, as `name` to a list of indexes */
    const called: HashMap<Set<number>> = {};
    let tracked = false;
    const track = () => {
        if (tracked) return;
        tracked = true;
        persistValue(
            key,
            (): SystemState => {
                const state: SystemState = {};
                for (const [name, indexes] of Object.entries(called)) {
                    state[name] = {};
                    for (const index of indexes) {
                        state[name][index] = moduleState(system[name][index]);
                    }
                }
                return state;
            },
            (state: SystemState) => {
                for (const [name, list] of Object.entries(state || {})) {
                    for (const [index, values] of Object.entries(list)) {
                        const mod = system[name]?.[+index];
                        if (!mod) continue;
                        (called[name] ||= new Set()).add(+index);
                        for (const prop in values) {
                            if (
                                prop in mod &&
                                typeof mod[prop] !== 'function'
                            ) {
                                mod[prop] = values[prop];
                            }
                        }
                    }
                }
            },
        );
    };
    if (hasMockSession(key)) track();
    else whenSaved(key, track);
    for (const [name, modules] of Object.entries(system)) {
        if (!Array.isArray(modules)) continue;
        modules.forEach((mod, index) => {
            // Commands from the app call the `$` functions. Polling keeps a
            // reference to the function from before this wrap, so it does
            // not save.
            for (const key of Object.keys(mod)) {
                const fn = mod[key];
                if (key[0] !== '$' || typeof fn !== 'function') continue;
                mod[key] = (...args: unknown[]) => {
                    // A command can call other `$` functions. Save one time,
                    // when the outermost command returns.
                    command_depth += 1;
                    let result: unknown;
                    try {
                        result = fn.apply(mod, args);
                    } finally {
                        command_depth -= 1;
                    }
                    (called[name] ||= new Set()).add(index);
                    if (command_depth === 0) {
                        track();
                        saveMockSession();
                    }
                    return result;
                };
            }
        });
    }
}

export function createSystem(space: HashMap) {
    registerSystem(space.id, {
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
        Payments: [createPaymentsModule(space)],
        LockerLocations: [createLockerLocationsModule()],
        Lighting: [new LightingModule()],
        HearingAugmentation: [new HearingAugmentationModule()],
        Logger: [new LoggerModule()],
    });

    const system = mockSystem(space.id);
    // Taken before `persistSystem` wraps the functions, so polling does not
    // save the polled modules.
    const bookings = system.Bookings[0];
    const pollBookings = bookings.$poll_bookings;
    const areas = system.AreaManagement[0];
    const updateAreas = areas.$update;
    persistSystem(space.id, system);

    pollBookings.call(bookings);
    setInterval(() => pollBookings.call(bookings), 30 * 1000);

    updateAreas.call(areas);
    setInterval(() => updateAreas.call(areas), 30 * 1000);
}
