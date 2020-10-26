import { mockSystem, registerSystem } from '@placeos/ts-client';

import { generateMockSpace } from '@user-interfaces/spaces';
import { setMockBookingStartDatetime } from '@user-interfaces/events';

import { MOCK_SPACES } from './api/spaces.data';
import { MOCK_EVENTS } from './api/events.data';
import { MOCK_BUILDINGS, MOCK_LEVELS } from './api/zone.data';

import * as dayjs from 'dayjs';
import { predictableRandomInt } from '@user-interfaces/common';

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
export function createSystem(id?: string) {
    id =
        id ||
        `sys-${LETTERS[Math.floor(index / NUMBERS.length)]}${NUMBERS[index++ % NUMBERS.length]}`;
    setMockBookingStartDatetime(dayjs().minute(-50).valueOf());
    const space = MOCK_SPACES.find((f) => f.id === id) || generateMockSpace({ id });
    SPACE_LIST.push(space);

    const booking_bindings: IBookingPanelBindings = {
        touch_enabled: true,
        timeout: 300,
        cancel_timeout: 600,
        has_catering: true,
        control_url: 'https://aca.im/demo/aca/control/',
        icon: `/assets/img/${IMAGES[predictableRandomInt(IMAGES.length)]}.png`,
    };

    const today = dayjs();
    const desk_bindings = {};

    const system = {
        id,
        name: space.name,
        Bookings: [],
        DeskManagement: [
            {
                'zone_lvl-01:desk_ids': [],
            },
        ],
        DeskBookings: [],
        FloorManagement: [
            {
                usage: randomUsageForBuilding(MOCK_BUILDINGS[0]),
            },
        ],
    };
    const todayEvents = MOCK_EVENTS.filter((f) => f.system.id === id);
    system.Bookings.push({
        ...booking_bindings,
        room_name: space.name,
        today: todayEvents,
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
    system.DeskBookings.push({
        ...desk_bindings,
        $book: (email: string, desk: string, date: number) => {
            console.log('[MOCK] Book called');
        },
        $check_in: (email: string, desk: string) => {
            system.DeskBookings[0]['zone_lvl-01:bookings'][desk][dayjs().format('YYYY-MM-DD')][
                email
            ].checked_in = true;
        },
        $check_out: (email: string, desk: string) => {
            console.log(`[MOCK]Check out called`);
        },
    });

    // dynamically update stuff every 10 secs
    setInterval(() => {
        const sysB0 = mockSystem('sys-B0');
        const fm = sysB0.FloorManagement[0];
        fm.usage = { ...randomUsageForBuilding(MOCK_BUILDINGS[0]) };
    }, 10 * 1000);

    return system;
}

function randomUsageForBuilding(building) {
    const lvls = MOCK_LEVELS.filter((f) => f.parent_id === building.id);
    const usage = {};
    const zones = ['A', 'B', 'C', 'WT'];
    lvls.forEach((level) => {
        const chunks = level.id.split('-');
        const id = chunks.pop();
        usage[id] = {};
        zones.forEach(
            (zone) => (usage[id][`zone-${id}.${zone}`] = predictableRandomInt(100))
        );
    });
    return usage;
}

MOCK_SPACES.forEach(space => registerSystem(space.id, createSystem(space.id) as any))
