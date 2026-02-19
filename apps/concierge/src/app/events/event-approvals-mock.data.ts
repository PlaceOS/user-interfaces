import { addDays, setHours, setMinutes } from 'date-fns';

export type ApprovalCategory =
    | 'venue'
    | 'dining'
    | 'av_tech'
    | 'safety'
    | 'events'
    | 'parking'
    | 'setup'
    | 'services';

export type EventRole =
    | 'global_admin'
    | 'campus_admin'
    | 'venue_manager'
    | 'campus_it_av_manager'
    | 'campus_it_av_ic'
    | 'event_owner'
    | 'faculty_sponsor'
    | 'dining_manager'
    | 'catering_manager'
    | 'security'
    | 'auditor'
    | 'mrs_captain';

export interface RolePermission {
    can_approve: ApprovalCategory[];
    can_view: ApprovalCategory[];
    reject_safety: boolean;
}

export interface MockApprovalEvent {
    id: string;
    title: string;
    category: ApprovalCategory;
    date: number;
    duration_minutes: number;
    location: string;
    organiser: string;
    /** Links a service approval to its parent venue approval */
    parent_event?: string;
}

export const ROLE_DISPLAY_NAMES: Record<EventRole, string> = {
    global_admin: 'Global Admin',
    campus_admin: 'Campus Admin',
    venue_manager: 'Venue Manager',
    campus_it_av_manager: 'Campus IT/AV Manager',
    campus_it_av_ic: 'Campus IT/AV IC',
    event_owner: 'Event Owner',
    faculty_sponsor: 'Faculty Sponsor',
    dining_manager: 'Dining Manager',
    catering_manager: 'Catering Manager',
    security: 'Security',
    auditor: 'Auditor',
    mrs_captain: 'MRS Captain',
};

export const CATEGORY_DISPLAY_NAMES: Record<ApprovalCategory, string> = {
    venue: 'Venue Booking',
    dining: 'Catering & Dining',
    av_tech: 'AV & Production',
    safety: 'Safety & Security',
    events: 'Event Coordination',
    parking: 'Parking & Transport',
    setup: 'Setup & Furniture',
    services: 'Event Services',
};

export const CATEGORY_ICONS: Record<ApprovalCategory, string> = {
    venue: 'meeting_room',
    dining: 'restaurant',
    av_tech: 'videocam',
    safety: 'shield',
    events: 'event_available',
    parking: 'local_parking',
    setup: 'table_restaurant',
    services: 'home_repair_service',
};

export const ROLE_PERMISSIONS: Record<EventRole, RolePermission> = {
    global_admin: {
        can_approve: ['venue', 'dining', 'av_tech', 'events', 'parking', 'setup', 'services'],
        can_view: ['safety'],
        reject_safety: true,
    },
    campus_admin: {
        can_approve: ['venue', 'dining', 'av_tech', 'events', 'parking', 'setup', 'services'],
        can_view: ['safety'],
        reject_safety: true,
    },
    venue_manager: {
        can_approve: ['venue', 'dining', 'parking', 'setup', 'services'],
        can_view: [],
        reject_safety: false,
    },
    campus_it_av_manager: {
        can_approve: ['av_tech'],
        can_view: [],
        reject_safety: false,
    },
    campus_it_av_ic: {
        can_approve: ['av_tech'],
        can_view: [],
        reject_safety: false,
    },
    event_owner: {
        can_approve: ['venue', 'dining', 'av_tech', 'parking', 'setup', 'services'],
        can_view: [],
        reject_safety: true,
    },
    faculty_sponsor: {
        can_approve: ['venue'],
        can_view: [],
        reject_safety: false,
    },
    dining_manager: {
        can_approve: ['dining'],
        can_view: [],
        reject_safety: true,
    },
    catering_manager: {
        can_approve: ['dining'],
        can_view: [],
        reject_safety: true,
    },
    security: {
        can_approve: [],
        can_view: ['safety', 'events', 'parking'],
        reject_safety: true,
    },
    auditor: {
        can_approve: [],
        can_view: ['safety', 'events'],
        reject_safety: true,
    },
    mrs_captain: {
        can_approve: [],
        can_view: ['safety'],
        reject_safety: false,
    },
};

function _makeDate(days_offset: number, hour: number, minute: number): number {
    return setMinutes(
        setHours(addDays(Date.now(), days_offset), hour),
        minute,
    ).valueOf();
}

export const MOCK_APPROVAL_EVENTS: MockApprovalEvent[] = [
    {
        id: 'appr-001',
        title: 'Q1 Town Hall',
        category: 'venue',
        date: _makeDate(-1, 9, 0),
        duration_minutes: 120,
        location: 'Royce Hall Main Auditorium',
        organiser: 'Sarah Chen',
    },
    {
        id: 'appr-002',
        title: 'Leadership Offsite',
        category: 'venue',
        date: _makeDate(3, 10, 0),
        duration_minutes: 480,
        location: 'Centennial Ballroom — Luskin Conference Center',
        organiser: 'Mark Thompson',
    },
    {
        id: 'appr-003',
        title: 'Welcome Lunch — New Starters',
        category: 'dining',
        date: _makeDate(2, 12, 0),
        duration_minutes: 90,
        location: 'Morrison Room — University Club',
        organiser: 'HR Team',
    },
    {
        id: 'appr-004',
        title: 'Board Dinner',
        category: 'dining',
        date: _makeDate(5, 18, 30),
        duration_minutes: 150,
        location: 'Executive Dining Room — Anderson School',
        organiser: 'James Watt',
    },
    {
        id: 'appr-005',
        title: 'Q1 Town Hall — AV Setup',
        category: 'av_tech',
        date: _makeDate(-1, 8, 0),
        duration_minutes: 60,
        location: 'Royce Hall Main Auditorium',
        organiser: 'Tech Services',
        parent_event: 'appr-001',
    },
    {
        id: 'appr-006',
        title: 'Leadership Offsite — AV Setup',
        category: 'av_tech',
        date: _makeDate(3, 9, 30),
        duration_minutes: 60,
        location: 'Centennial Ballroom — Luskin Conference Center',
        organiser: 'Comms Team',
        parent_event: 'appr-002',
    },
    {
        id: 'appr-007',
        title: 'Fire Drill — Covel Commons',
        category: 'safety',
        date: _makeDate(2, 10, 0),
        duration_minutes: 45,
        location: 'Covel Commons — All Floors',
        organiser: 'Safety Officer',
    },
    {
        id: 'appr-008',
        title: 'Hazardous Materials Briefing',
        category: 'safety',
        date: _makeDate(6, 9, 30),
        duration_minutes: 60,
        location: 'Sycamore — De Neve Plaza',
        organiser: 'EHS Team',
    },
    {
        id: 'appr-009',
        title: 'Community Day Setup',
        category: 'events',
        date: _makeDate(7, 7, 0),
        duration_minutes: 720,
        location: 'Bruin Plaza — ASUCLA',
        organiser: 'Events Coordinator',
    },
    {
        id: 'appr-010',
        title: 'Annual Awards Night',
        category: 'events',
        date: _makeDate(10, 17, 0),
        duration_minutes: 240,
        location: 'Royce Hall Main Auditorium',
        organiser: 'People & Culture',
    },
    {
        id: 'appr-011',
        title: 'Q1 Town Hall — Catering',
        category: 'dining',
        date: _makeDate(-1, 9, 0),
        duration_minutes: 120,
        location: 'Royce Hall Main Auditorium',
        organiser: 'R&D Admin',
        parent_event: 'appr-001',
    },
    {
        id: 'appr-012',
        title: 'Leadership Offsite — Catering',
        category: 'dining',
        date: _makeDate(3, 12, 0),
        duration_minutes: 90,
        location: 'Centennial Ballroom — Luskin Conference Center',
        organiser: 'Facilities',
        parent_event: 'appr-002',
    },
    {
        id: 'appr-013',
        title: 'Leadership Offsite — Parking',
        category: 'parking',
        date: _makeDate(3, 9, 0),
        duration_minutes: 480,
        location: 'Luskin Conference Center — Lot 8',
        organiser: 'Transportation Services',
        parent_event: 'appr-002',
    },
    {
        id: 'appr-014',
        title: 'Community Day — Event Parking',
        category: 'parking',
        date: _makeDate(7, 6, 0),
        duration_minutes: 840,
        location: 'Structure 4 — ASUCLA',
        organiser: 'Events Coordinator',
        parent_event: 'appr-009',
    },
    {
        id: 'appr-015',
        title: 'Community Day — Setup',
        category: 'setup',
        date: _makeDate(7, 6, 0),
        duration_minutes: 180,
        location: 'Bruin Plaza — ASUCLA',
        organiser: 'Events Coordinator',
        parent_event: 'appr-009',
    },

    // ── Awards Night child approvals ────────────────────────────────
    {
        id: 'appr-016',
        title: 'Annual Awards Night — Venue',
        category: 'venue',
        date: _makeDate(10, 16, 0),
        duration_minutes: 60,
        location: 'Royce Hall Main Auditorium',
        organiser: 'People & Culture',
        parent_event: 'appr-010',
    },
    {
        id: 'appr-017',
        title: 'Annual Awards Night — Catering',
        category: 'dining',
        date: _makeDate(10, 17, 0),
        duration_minutes: 240,
        location: 'Royce Hall Main Auditorium',
        organiser: 'People & Culture',
        parent_event: 'appr-010',
    },
    {
        id: 'appr-018',
        title: 'Annual Awards Night — AV & Production',
        category: 'av_tech',
        date: _makeDate(10, 15, 0),
        duration_minutes: 120,
        location: 'Royce Hall Main Auditorium',
        organiser: 'Tech Services',
        parent_event: 'appr-010',
    },
    {
        id: 'appr-019',
        title: 'Annual Awards Night — Security',
        category: 'safety',
        date: _makeDate(10, 16, 0),
        duration_minutes: 300,
        location: 'Royce Hall Main Auditorium',
        organiser: 'UCPD',
        parent_event: 'appr-010',
    },

    // ── Community Day child approvals ───────────────────────────────
    {
        id: 'appr-020',
        title: 'Community Day — Venue',
        category: 'venue',
        date: _makeDate(7, 7, 0),
        duration_minutes: 720,
        location: 'Bruin Plaza — ASUCLA',
        organiser: 'Events Coordinator',
        parent_event: 'appr-009',
    },
    {
        id: 'appr-021',
        title: 'Community Day — Catering',
        category: 'dining',
        date: _makeDate(7, 11, 0),
        duration_minutes: 180,
        location: 'Bruin Plaza — ASUCLA',
        organiser: 'Events Coordinator',
        parent_event: 'appr-009',
    },
    {
        id: 'appr-022',
        title: 'Community Day — AV & Production',
        category: 'av_tech',
        date: _makeDate(7, 6, 30),
        duration_minutes: 60,
        location: 'Bruin Plaza — ASUCLA',
        organiser: 'Tech Services',
        parent_event: 'appr-009',
    },

    // ── Services approvals ────────────────────────────────────────────
    {
        id: 'appr-023',
        title: 'Q1 Town Hall — Event Services',
        category: 'services',
        date: _makeDate(-1, 9, 0),
        duration_minutes: 120,
        location: 'Royce Hall Main Auditorium',
        organiser: 'Sarah Chen',
        parent_event: 'appr-001',
    },
    {
        id: 'appr-024',
        title: 'Leadership Offsite — Event Services',
        category: 'services',
        date: _makeDate(3, 10, 0),
        duration_minutes: 480,
        location: 'Centennial Ballroom — Luskin Conference Center',
        organiser: 'Mark Thompson',
        parent_event: 'appr-002',
    },
    {
        id: 'appr-025',
        title: 'Annual Awards Night — Event Services',
        category: 'services',
        date: _makeDate(10, 17, 0),
        duration_minutes: 240,
        location: 'Royce Hall Main Auditorium',
        organiser: 'People & Culture',
        parent_event: 'appr-010',
    },
];

// ══════════════════════════════════════════════════════════════════════
// Order Detail Interfaces & Mock Data
// ══════════════════════════════════════════════════════════════════════

export interface OrderLineItem {
    menu_item_id: string;
    quantity: number;
    notes?: string;
}

export interface EventOrderDetail {
    event_id: string;
    guest_count?: number;
    items: OrderLineItem[];
}

export const MOCK_EVENT_ORDERS: Record<string, EventOrderDetail> = {
    // ── appr-003: Welcome Lunch — New Starters (dining) ─────────────
    'appr-003': {
        event_id: 'appr-003',
        guest_count: 30,
        items: [
            { menu_item_id: 'classic_lunch_buffet', quantity: 30, notes: 'Vegetarian option for 8 guests' },
            { menu_item_id: 'arnold_palmer', quantity: 4 },
            { menu_item_id: 'ucla_cookies', quantity: 3 },
        ],
    },

    // ── appr-004: Board Dinner (dining) ─────────────────────────────
    'appr-004': {
        event_id: 'appr-004',
        guest_count: 24,
        items: [
            { menu_item_id: 'plated_dinner_entree', quantity: 24 },
            { menu_item_id: 'hosted_premium_bar', quantity: 24, notes: '3 hours' },
            { menu_item_id: 'artisan_cheese_lg', quantity: 2 },
            { menu_item_id: 'petit_fours', quantity: 4, notes: 'Assorted selection' },
        ],
    },

    // ── appr-005: Town Hall — AV Setup (av_tech) ────────────────────
    'appr-005': {
        event_id: 'appr-005',
        items: [
            { menu_item_id: 'av_basic_projector', quantity: 1 },
            { menu_item_id: 'av_monitor_65', quantity: 1 },
            { menu_item_id: 'av_podium', quantity: 1 },
            { menu_item_id: 'av_additional_mic', quantity: 2 },
            { menu_item_id: 'av_slide_advancer', quantity: 1 },
            { menu_item_id: 'av_technician_day', quantity: 1 },
        ],
    },

    // ── appr-006: Leadership Offsite — AV Setup (av_tech) ───────────
    'appr-006': {
        event_id: 'appr-006',
        items: [
            { menu_item_id: 'av_projector_screen', quantity: 1 },
            { menu_item_id: 'av_additional_mic', quantity: 3 },
            { menu_item_id: 'av_hdmi_cable', quantity: 4, notes: '6-foot cables for breakout rooms' },
            { menu_item_id: 'av_operator', quantity: 8, notes: '8 hours on-site' },
        ],
    },

    // ── appr-011: Town Hall — Catering (dining) ─────────────────────
    'appr-011': {
        event_id: 'appr-011',
        guest_count: 200,
        items: [
            { menu_item_id: 'classic_continental', quantity: 200 },
            { menu_item_id: 'beverage_package', quantity: 200 },
            { menu_item_id: 'ucla_cookies', quantity: 17, notes: 'Assorted flavors' },
        ],
    },

    // ── appr-012: Leadership Offsite — Catering (dining) ────────────
    'appr-012': {
        event_id: 'appr-012',
        guest_count: 40,
        items: [
            { menu_item_id: 'deluxe_boxed_lunch', quantity: 40, notes: 'Include vegan option x10' },
            { menu_item_id: 'ee_am_break', quantity: 40 },
            { menu_item_id: 'canned_juices', quantity: 40 },
        ],
    },

    // ── appr-015: Community Day — Setup (setup) ─────────────────────
    'appr-015': {
        event_id: 'appr-015',
        items: [
            { menu_item_id: 'cocktail_standing', quantity: 10 },
            { menu_item_id: 'table_6ft', quantity: 8 },
            { menu_item_id: 'table_8ft', quantity: 4 },
            { menu_item_id: 'registration_table', quantity: 2, notes: 'Near main entrance' },
            { menu_item_id: 'buffet_12ft', quantity: 3 },
        ],
    },

    // ── appr-017: Awards Night — Catering (dining) ──────────────────
    'appr-017': {
        event_id: 'appr-017',
        guest_count: 150,
        items: [
            { menu_item_id: 'warm_passed_hors', quantity: 150, notes: 'Cocktail hour — 1 hr' },
            { menu_item_id: 'celebration', quantity: 150 },
            { menu_item_id: 'hosted_premium_bar', quantity: 150, notes: '4 hours' },
            { menu_item_id: 'mini_desserts', quantity: 15, notes: '15 dozen assorted' },
        ],
    },

    // ── appr-018: Awards Night — AV & Production (av_tech) ──────────
    'appr-018': {
        event_id: 'appr-018',
        items: [
            { menu_item_id: 'av_monitor_85', quantity: 2, notes: 'Stage left & right' },
            { menu_item_id: 'av_moon_balloon', quantity: 1 },
            { menu_item_id: 'av_camera', quantity: 2 },
            { menu_item_id: 'av_mixer_16ch', quantity: 1 },
            { menu_item_id: 'av_additional_mic', quantity: 6, notes: '4 lapel + 2 handheld' },
            { menu_item_id: 'av_tech_director', quantity: 1 },
            { menu_item_id: 'av_technician_day', quantity: 2 },
            { menu_item_id: 'av_lighting_operator', quantity: 10, notes: '10 hours' },
        ],
    },

    // ── appr-021: Community Day — Catering (dining) ─────────────────
    'appr-021': {
        event_id: 'appr-021',
        guest_count: 500,
        items: [
            { menu_item_id: 'national_barbecue', quantity: 500 },
            { menu_item_id: 'soft_drinks_bar', quantity: 200 },
            { menu_item_id: 'chips_bags', quantity: 300, notes: 'Assorted variety' },
        ],
    },

    // ── appr-022: Community Day — AV & Production (av_tech) ─────────
    'appr-022': {
        event_id: 'appr-022',
        items: [
            { menu_item_id: 'av_projector_screen', quantity: 2 },
            { menu_item_id: 'av_additional_mic', quantity: 4 },
            { menu_item_id: 'av_power_strip', quantity: 6, notes: 'Distributed across plaza' },
            { menu_item_id: 'av_operator', quantity: 10, notes: '10 hours' },
        ],
    },

    // ── appr-023: Town Hall — Event Services (services) ─────────────
    'appr-023': {
        event_id: 'appr-023',
        items: [
            { menu_item_id: 'after_hours', quantity: 1, notes: 'Event extends past 5 PM' },
            { menu_item_id: 'av_vendor_basic', quantity: 1, notes: 'Vendor supervision for catering' },
        ],
    },

    // ── appr-024: Leadership Offsite — Event Services (services) ────
    'appr-024': {
        event_id: 'appr-024',
        items: [
            { menu_item_id: 'after_hours', quantity: 2, notes: 'Full-day event — 2 extensions' },
            { menu_item_id: 'av_vendor_premium', quantity: 1, notes: 'Premium vendor oversight' },
        ],
    },

    // ── appr-025: Awards Night — Event Services (services) ──────────
    'appr-025': {
        event_id: 'appr-025',
        items: [
            { menu_item_id: 'after_hours', quantity: 1 },
            { menu_item_id: 'av_vendor_premium', quantity: 1, notes: 'Award ceremony oversight' },
            { menu_item_id: 'av_setup_test', quantity: 1, notes: 'Full stage setup & sound check' },
        ],
    },
};

/** Returns the order for a single event, or undefined if none. */
export function getEventOrder(event_id: string): EventOrderDetail | undefined {
    return MOCK_EVENT_ORDERS[event_id];
}

/** Returns orders for an event and all its children (for parent/venue events). */
export function getEventFamilyOrders(event_id: string): EventOrderDetail[] {
    const orders: EventOrderDetail[] = [];
    const own = MOCK_EVENT_ORDERS[event_id];
    if (own) orders.push(own);
    const children = MOCK_APPROVAL_EVENTS.filter(
        (e) => e.parent_event === event_id,
    );
    for (const child of children) {
        const child_order = MOCK_EVENT_ORDERS[child.id];
        if (child_order) orders.push(child_order);
    }
    return orders;
}
