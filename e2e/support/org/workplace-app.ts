/**
 * `workplace_app` settings modelled on mqt.placeos.run, the Medibank-profile
 * test host, as read on 2026-10-27. Customer names, logos and addresses are
 * replaced with neutral values.
 *
 * Differences from mqt, for features the suite tests or the stack cannot serve:
 * - `features` adds `lockers` and `group-events`.
 * - the building keeps `desks.can_book_lockers` on, as the org has it.
 * - `colleagues_require_auth` is left unset. mqt's `false` searches colleagues
 *   in the calendar directory, which the stack only has with `E2E_O365_*`.
 */
const SUPPORT_EMAIL = 'support@e2e.test';

const FEATURES = [
    'spaces',
    'desks',
    'explore',
    'parking',
    'lockers',
    'visitor-invite',
    'group-events',
    'schedule',
    'wfh',
    'support-ticket',
    'help',
];

const base = () => ({
    help: [
        {
            icon: { type: 'icon', class: 'material-icons', content: 'email' },
            link: `mailto:${SUPPORT_EMAIL}`,
            name: 'General Enquiries',
        },
        {
            icon: { type: 'icon', class: 'material-icons', content: 'dns' },
            link: 'https://www.placeos.com/',
            name: 'About PlaceOS',
        },
    ],
    desks: {
        hide_map: false,
        has_assets: true,
        hide_reason: false,
        allow_groups: true,
        auto_checkin: false,
        needs_reason: false,
        allow_all_day: true,
        height_enabled: true,
        auto_allocation: false,
        allow_recurrence: true,
        available_period: 14,
        can_book_lockers: true,
        allow_time_changes: true,
        can_book_for_others: true,
        show_calendar_links: true,
        default_select_as_map: false,
    },
    banner: {},
    events: {
        setup: 0,
        breakdown: 0,
        hide_notes: false,
        idle_timeout: 5,
        max_duration: 360,
        room_as_host: false,
        use_bookings: false,
        allow_all_day: true,
        no_standalone: false,
        allow_multiday: false,
        hide_attendees: false,
        all_day_default: false,
        allow_externals: true,
        multiple_spaces: false,
        allow_recurrence: true,
        hide_user_actions: false,
        allowed_future_days: 45,
        booking_unavailable: false,
        can_book_for_others: true,
        use_building_timezone: false,
        cache_duration_in_days: 14,
        allow_daily_allday_recurrence: false,
    },
    explore: {
        disable: [],
        hide_zones: false,
        area_count_key: 'count',
        disable_labels: [],
        disable_styles: [],
        disable_actions: [],
        show_booking_qr: false,
        disable_features: [],
        show_zone_labels: false,
        use_zone_polygons: true,
        hide_device_fields: false,
        show_zone_sensor_info: true,
    },
    lockers: {
        hide_checkin: true,
        only_duration: true,
        show_calendar_links: false,
    } as Record<string, boolean>,
    parking: {
        show_users: true,
        auto_checkin: false,
        auto_allocation: false,
        allow_recurrence: false,
        available_period: 14,
        allow_time_changes: false,
        can_book_for_others: false,
        show_calendar_links: false,
        default_select_as_map: false,
    } as Record<string, boolean | number>,
    bookings: {
        allow_assets: false,
        allow_all_day: false,
        can_book_for_others: false,
        use_building_timezone: false,
    },
    features: FEATURES,
    use_region: false,
    week_start: 0,
    departments: {},
    has_uploads: true,
    auto_release: { resources: ['parking'], time_after: 90, time_before: 20 },
    global_search: true,
    feature_groups: {},
    allow_dark_mode: true,
    hide_colleagues: false,
    show_quick_links: false,
    hide_landing_rooms: false,
    use_imperial_units: false,
    hide_landing_spaces: false,
    support_issue_types: [
        { name: 'Property (FM) issues', email: SUPPORT_EMAIL },
        { name: 'IT issues contact email:', email: SUPPORT_EMAIL },
    ],
    hide_landing_sidebar: false,
    allow_support_ticket_images: true,
});

/** The org zone's document. */
export function orgWorkplaceApp() {
    return base();
}

/** The building zone's document: the org's, with mqt's building-level differences. */
export function buildingWorkplaceApp() {
    const settings = base();
    settings.lockers.disabled_start_time = true;
    settings.lockers.disabled_date_select = true;
    delete settings.parking.show_users;
    return settings;
}
