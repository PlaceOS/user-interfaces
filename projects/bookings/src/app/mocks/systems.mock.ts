
import { registerSystem, registerMockEndpoint } from '@placeos/ts-client';

import { setMockBookingStartDatetime } from 'src/app/bookings/booking.utilities';
import { generateMockSpace } from 'src/app/spaces/space.utilities';
import { generateMockUser } from 'src/app/users/user.utilities';
import { HashMap } from 'src/app/common/types';
import { addHours, addMinutes } from 'date-fns';

interface IMockEngineSystem {
    id?: string;
    name?: string;
    [module: string]: HashMap[] | string;
}

export interface IBookingPanelBindings {
    /** Whether user input is enabled */
    touch_enabled: boolean;
    /** Number of seconds before a meeting can be started, being truthy enables start/stop and auto-cancellations */
    timeout?: number;
    /** Number of seconds after the start of a meeting when it is auto-cancelled, overrides `timeout` value */
    cancel_timeout?: number;
    /** Whether to display hearing assistance UI elements */
    has_accessability?: boolean;
    /** URL to embed into the control modal when opened */
    control_url?: string;
    /** Whether to display catering UI elements */
    has_catering?: boolean;
    /** Whether to hide booking details(title and host) */
    hide_details?: boolean;
    /** Whether to hide the title of the displayed bookings */
    hide_title?: boolean;
    /** Whether to hide user(host) details */
    hide_user?: boolean;
    /** Whether to hide timeline availability */
    hide_availability?: boolean;
    /** Whether to disable booking from the UI */
    booking_disabled?: boolean;
    /** Whether booking future meetings are allowed */
    no_timeline_bookings?: boolean;
    /** Time before the booking end with which the current booking is endable in ms from UTC epoch */
    is_endable?: number;
    /** Whether to automatically ask user starting the current meeting */
    ask_start?: boolean;
    /** Whether to automatically ask user about ending the active meeting */
    ask_end?: boolean;
    /** Default meeting title if the displayed meeting doesn't have one */
    default_title?: string;
    /** Hide all meeting related details */
    hide_all?: boolean;
    /** Title of the active space */
    title?: string;
    /** Description of the active space */
    description?: string;
    /** URL of an icon image to display on the UI */
    icon?: string;
    /** Whether the space status is displayed on the right */
    flip_status?: boolean;
    /** Whether bookings can be automatically cancelled once they expire */
    can_cancel?: boolean;
    /** Minimum bookable duration in minutes */
    min_duration?: number;
    /** Maximum bookable duration in minutes */
    max_duration?: number;
    /** Start time of the business day with format `HH:mm` */
    business_start?: string;
    /** End time of the business day with format `HH:mm` */
    business_end?: string;
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = '0123456789'.split('');

let index = 0;

const SPACE_LIST: any[] = [];

const IMAGES: string[] = ['large_down', 'large_up', 'small_down', 'small_up'];

/**
 * Create mock engine booking module with appropriate bookings and space data
 */
function createSystem(): IMockEngineSystem {
    const id = `sys-${LETTERS[Math.floor(index / NUMBERS.length)]}${NUMBERS[index++ % NUMBERS.length]}`;
    setMockBookingStartDatetime(addMinutes(new Date(), -50).valueOf());
    const space = generateMockSpace({ id });
    SPACE_LIST.push(space);
    const bindings: IBookingPanelBindings = {
        touch_enabled: true,
        timeout: 300,
        min_duration: 30,
        cancel_timeout: 600,
        has_catering: true,
        control_url: 'https://aca.im/demo/aca/control/',
        icon: `/assets/img/${IMAGES[Math.floor(Math.random() * IMAGES.length)]}.png`,
    };
    const system = {
        id,
        name: space.name,
        Bookings: [],
    };
    system.Bookings.push({
        ...bindings,
        room_name: space.name,
        today: space.bookings,
        reload: Math.floor(addHours(new Date(), 1).valueOf() / 1000),
        $start_meeting: (time: number) => {
            system.Bookings[0].last_meeting_started = time;
        },
        $cancel_meeting: (time: number, reason: string) => {
            const list = system.Bookings[0].today;
            system.Bookings[0].today = list.filter((i) => i.date !== time);
        },
        $waiter_call: () => {
            console.log(`[MOCK][${id}] Waiter called...`);
        },
    });
    return system;
}

export const MOCK_SYSTEMS = Array(10)
    .fill(0)
    .map((i) => createSystem());

for (const system of MOCK_SYSTEMS) {
    registerSystem(system.id, system as any);
}

// Add mock data for API endpoints
const USER_LIST = Array(1000)
    .fill(0)
    .map((i) => generateMockUser());

registerMockEndpoint({
    path: '/api/engine/v2/systems',
    metadata: null,
    method: 'GET',
    callback: (_) => ({ total: 10, results: MOCK_SYSTEMS }),
});
registerMockEndpoint({
    path: '/api/staff/rooms',
    metadata: null,
    method: 'GET',
    callback: (_) => SPACE_LIST,
});
registerMockEndpoint({
    path: '/api/staff/users',
    metadata: null,
    method: 'GET',
    callback: (_) => USER_LIST,
});
registerMockEndpoint({
    path: '/api/engine/v2/users/current',
    metadata: null,
    method: 'GET',
    callback: (_) => USER_LIST[0],
});
registerMockEndpoint({
    path: '/api/engine/v2/zones',
    metadata: null,
    method: 'GET',
    callback: (_) => ({ total: 1, results: [{ id: 'zone_org-1' }] }),
});
