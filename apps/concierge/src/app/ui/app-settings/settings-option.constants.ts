/**
 * Shared option constants for settings form modals.
 * Eliminates duplication of mat-option value/label pairs across modals.
 */

export interface SelectOption<T = number | string> {
    value: T;
    label: string;
}

// ── Available Period (days ahead users can book) ──

export const AVAILABLE_PERIOD_SHORT_OPTIONS: SelectOption<number>[] = [
    { value: 1, label: '1 Day' },
    { value: 2, label: '2 Days' },
    { value: 3, label: '3 Days' },
    { value: 4, label: '4 Days' },
    { value: 5, label: '5 Days' },
    { value: 6, label: '6 Days' },
    { value: 7, label: '1 Week' },
    { value: 8, label: '8 Days' },
    { value: 9, label: '9 Days' },
    { value: 10, label: '10 Days' },
    { value: 11, label: '11 Days' },
    { value: 12, label: '12 Days' },
    { value: 13, label: '13 Days' },
    { value: 14, label: '2 Weeks' },
    { value: 21, label: '3 Weeks' },
    { value: 30, label: '1 Month' },
];

export const AVAILABLE_PERIOD_EXTENDED_OPTIONS: SelectOption<number>[] = [
    ...AVAILABLE_PERIOD_SHORT_OPTIONS,
    { value: 45, label: '6 Weeks' },
    { value: 60, label: '2 Months' },
    { value: 90, label: '3 Months' },
    { value: 120, label: '4 Months' },
    { value: 150, label: '5 Months' },
    { value: 180, label: '6 Months' },
];

// ── Max Duration (in minutes) ──

export const MAX_DURATION_FULL_OPTIONS: SelectOption<number>[] = [
    { value: 60, label: '1 Hour' },
    { value: 90, label: '1 Hour 30 Minutes' },
    { value: 120, label: '2 Hours' },
    { value: 180, label: '3 Hours' },
    { value: 240, label: '4 Hours' },
    { value: 300, label: '5 Hours' },
    { value: 360, label: '6 Hours' },
    { value: 420, label: '7 Hours' },
    { value: 480, label: '8 Hours' },
    { value: 540, label: '9 Hours' },
    { value: 600, label: '10 Hours' },
    { value: 660, label: '11 Hours' },
    { value: 720, label: '12 Hours' },
    { value: 780, label: '13 Hours' },
    { value: 840, label: '14 Hours' },
    { value: 900, label: '15 Hours' },
    { value: 960, label: '16 Hours' },
    { value: 1020, label: '17 Hours' },
    { value: 1080, label: '18 Hours' },
    { value: 1140, label: '19 Hours' },
    { value: 1200, label: '20 Hours' },
];

export const MAX_DURATION_SHORT_OPTIONS: SelectOption<number>[] =
    MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 720);

export const MAX_DURATION_MINI_OPTIONS: SelectOption<number>[] =
    MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 480);

// ── Week Start ──

export const WEEK_START_OPTIONS: SelectOption<number>[] = [
    { value: 0, label: 'Sunday' },
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
];

// ── Block Start / End Time (for day timeline views) ──

export const BLOCK_START_OPTIONS: SelectOption<number>[] = [
    { value: 0, label: '12AM (Midnight)' },
    { value: 1, label: '1AM' },
    { value: 2, label: '2AM' },
    { value: 3, label: '3AM' },
    { value: 4, label: '4AM' },
    { value: 5, label: '5AM' },
    { value: 6, label: '6AM' },
    { value: 7, label: '7AM' },
    { value: 8, label: '8AM' },
    { value: 9, label: '9AM' },
    { value: 10, label: '10AM' },
    { value: 11, label: '11AM' },
];

export const BLOCK_END_OPTIONS: SelectOption<number>[] = [
    { value: 12, label: '12PM (Midday)' },
    { value: 13, label: '1PM' },
    { value: 14, label: '2PM' },
    { value: 15, label: '3PM' },
    { value: 16, label: '4PM' },
    { value: 17, label: '5PM' },
    { value: 18, label: '6PM' },
    { value: 19, label: '7PM' },
    { value: 20, label: '8PM' },
    { value: 21, label: '9PM' },
    { value: 22, label: '10PM' },
    { value: 23, label: '11PM' },
    { value: 24, label: '12AM (Midnight)' },
];

export const BOOKABLE_HOUR_START_OPTIONS: SelectOption<number>[] = [
    { value: 0, label: '12AM (Midnight)' },
    { value: 1, label: '1AM' },
    { value: 2, label: '2AM' },
    { value: 3, label: '3AM' },
    { value: 4, label: '4AM' },
    { value: 5, label: '5AM' },
    { value: 6, label: '6AM' },
    { value: 7, label: '7AM' },
    { value: 8, label: '8AM' },
    { value: 9, label: '9AM' },
    { value: 10, label: '10AM' },
    { value: 11, label: '11AM' },
    { value: 12, label: '12PM (Midday)' },
    { value: 13, label: '1PM' },
    { value: 14, label: '2PM' },
    { value: 15, label: '3PM' },
    { value: 16, label: '4PM' },
    { value: 17, label: '5PM' },
    { value: 18, label: '6PM' },
    { value: 19, label: '7PM' },
    { value: 20, label: '8PM' },
    { value: 21, label: '9PM' },
    { value: 22, label: '10PM' },
    { value: 23, label: '11PM' },
];

export const BOOKABLE_HOUR_END_OPTIONS: SelectOption<number>[] = [
    { value: 1, label: '1AM' },
    { value: 2, label: '2AM' },
    { value: 3, label: '3AM' },
    { value: 4, label: '4AM' },
    { value: 5, label: '5AM' },
    { value: 6, label: '6AM' },
    { value: 7, label: '7AM' },
    { value: 8, label: '8AM' },
    { value: 9, label: '9AM' },
    { value: 10, label: '10AM' },
    { value: 11, label: '11AM' },
    { value: 12, label: '12PM (Midday)' },
    { value: 13, label: '1PM' },
    { value: 14, label: '2PM' },
    { value: 15, label: '3PM' },
    { value: 16, label: '4PM' },
    { value: 17, label: '5PM' },
    { value: 18, label: '6PM' },
    { value: 19, label: '7PM' },
    { value: 20, label: '8PM' },
    { value: 21, label: '9PM' },
    { value: 22, label: '10PM' },
    { value: 23, label: '11PM' },
    { value: 24, label: '12AM (Midnight)' },
];

// ── Block Height (rem units for day timeline) ──

export const BLOCK_HEIGHT_OPTIONS: SelectOption<number>[] = [
    { value: 1, label: '1rem (16px)' },
    { value: 1.5, label: '1.5rem (24px)' },
    { value: 2, label: '2rem (32px)' },
    { value: 2.5, label: '2.5rem (40px)' },
    { value: 3, label: '3rem (48px)' },
    { value: 3.5, label: '3.5rem (56px)' },
    { value: 4, label: '4rem (64px)' },
    { value: 4.5, label: '4.5rem (72px)' },
    { value: 5, label: '5rem (80px)' },
    { value: 5.5, label: '5.5rem (88px)' },
    { value: 6, label: '6rem (96px)' },
    { value: 6.5, label: '6.5rem (104px)' },
    { value: 7, label: '7rem (112px)' },
    { value: 7.5, label: '7.5rem (120px)' },
    { value: 8, label: '8rem (128px)' },
];

// ── Setup / Breakdown Duration (minutes) ──

export const SETUP_BREAKDOWN_OPTIONS: SelectOption<number>[] = [
    { value: 5, label: '5 Minutes' },
    { value: 10, label: '10 Minutes' },
    { value: 15, label: '15 Minutes' },
    { value: 30, label: '30 Minutes' },
    { value: 45, label: '45 Minutes' },
    { value: 60, label: '1 Hour' },
    { value: 90, label: '1 Hour 30 Minutes' },
    { value: 120, label: '2 Hours' },
];

// ── Cache Duration (days, includes "No cache" option) ──

export const CACHE_DURATION_OPTIONS: SelectOption<number>[] = [
    { value: -1, label: 'No cache' },
    ...AVAILABLE_PERIOD_SHORT_OPTIONS,
];

// ── Explore / Map Feature Options ──

export const EXPLORE_FEATURE_OPTIONS: SelectOption<string>[] = [
    { value: 'devices', label: 'Devices' },
    { value: 'desks', label: 'Desks' },
    { value: 'lockers', label: 'Lockers' },
    { value: 'parking', label: 'Parking' },
    { value: 'spaces', label: 'Rooms' },
    { value: 'spaces-presence', label: 'Room Presence' },
    { value: 'zones', label: 'Zones' },
];

// ── Banner Type Options ──

export const BANNER_TYPE_OPTIONS: SelectOption<string>[] = [
    { value: '', label: 'None' },
    { value: 'info', label: 'Info' },
    { value: 'warn', label: 'Warning' },
    { value: 'error', label: 'Error' },
];

// ── Day Timeline View Options ──

export const DAY_TIMELINE_VIEW_OPTIONS: SelectOption<string>[] = [
    { value: 'default', label: 'Timeline' },
    { value: 'inverted', label: 'Timeline (Rooms Vertical)' },
];
