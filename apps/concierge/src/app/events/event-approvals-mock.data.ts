import { addDays, setHours, setMinutes } from 'date-fns';

export type ApprovalCategory =
    | 'venue'
    | 'dining'
    | 'av_tech'
    | 'safety'
    | 'events'
    | 'parking'
    | 'setup';

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
};

export const CATEGORY_ICONS: Record<ApprovalCategory, string> = {
    venue: 'meeting_room',
    dining: 'restaurant',
    av_tech: 'videocam',
    safety: 'shield',
    events: 'event_available',
    parking: 'local_parking',
    setup: 'table_restaurant',
};

export const ROLE_PERMISSIONS: Record<EventRole, RolePermission> = {
    global_admin: {
        can_approve: ['venue', 'dining', 'av_tech', 'events', 'parking', 'setup'],
        can_view: ['safety'],
        reject_safety: true,
    },
    campus_admin: {
        can_approve: ['venue', 'dining', 'av_tech', 'events', 'parking', 'setup'],
        can_view: ['safety'],
        reject_safety: true,
    },
    venue_manager: {
        can_approve: ['venue', 'dining', 'parking', 'setup'],
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
        can_approve: ['venue', 'dining', 'av_tech', 'parking', 'setup'],
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
];
