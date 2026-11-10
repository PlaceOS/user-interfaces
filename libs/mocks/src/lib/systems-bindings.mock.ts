import { HashMap } from '@placeos/common';
import {
    MockPlaceWebsocketSystem,
    mockSystem,
    registerSystem,
} from '@placeos/ts-client';

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
 * Public binding values of a mock module, without its methods. ts-client
 * keeps each binding in a `_<name>` signal. Names that start with `_` are
 * internal state of the mock, such as a `Set`, and are left out.
 */
export function moduleState(mod: HashMap): HashMap {
    const values: HashMap = {};
    for (const key of Object.keys(mod)) {
        if (key[0] !== '_' || key[1] === '_') continue;
        if (typeof mod[key]?.set !== 'function') continue;
        const value = mod[key].value;
        if (isPlainData(value)) values[key.slice(1)] = value;
    }
    return values;
}

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
                            if (`_${prop}` in mod) mod[prop] = values[prop];
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
            // Commands from the app arrive through `call`. Internal polling
            // calls the `$` methods directly, so it does not save.
            const call = mod.call.bind(mod);
            mod.call = (command: string, args?: unknown[]) => {
                const result = call(command, args);
                (called[name] ||= new Set()).add(index);
                track();
                saveMockSession();
                return result;
            };
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
        Payment: [createPaymentsModule(space)],
        LockerLocations: [createLockerLocationsModule()],
        Lighting: [new LightingModule()],
        HearingAugmentation: [new HearingAugmentationModule()],
        Logger: [new LoggerModule()],
    });

    const system = mockSystem(space.id);
    persistSystem(space.id, system);

    system.Bookings[0].$poll_bookings();
    setInterval(() => system.Bookings[0].$poll_bookings(), 30 * 1000);

    system.AreaManagement[0].$update();
    setInterval(() => system.AreaManagement[0].$update(), 30 * 1000);
}
