import { startMockPlaceClient } from '@placeos/common/tests';
import { queryCalendarAvailability, querySpaceFreeBusy } from '@placeos/events';
import {
    alert_dashboards,
    alerts,
    asset_categories,
    asset_purchase_orders,
    asset_types,
    assets,
    type CallError,
    groups,
    groups_users,
    groups_zones,
    map_ai,
    metadata,
    modules,
    oauth_applications,
    playlist,
    playlist_media,
    type Result,
    settings,
    short_url,
    signage,
    signage_ai,
    signage_plugins,
    signage_template_mappings,
    signage_templates,
    systems,
    users,
    zones,
} from '@placeos/ts-client';
import * as staff_api from '@placeos/ts-client/staff';
import { addDays, getUnixTime } from 'date-fns';

import { mocksInit } from '../index';
import { MOCK_SPACES } from '../lib/api/spaces.data';
import { ACTIVE_USER, MOCK_GUESTS, MOCK_STAFF } from '../lib/api/users.data';
import { MOCK_BUILDINGS, MOCK_LEVELS } from '../lib/api/zone.data';

/** `limit` that returns each item of a paged mock list in one page */
const ALL = 10_000;
/** Most items of a list that a group calls an item operation for */
const MAX_ITEMS = 25;
/** The period that holds all the mock bookings and events */
const PERIOD = {
    period_start: getUnixTime(addDays(Date.now(), -60)),
    period_end: getUnixTime(addDays(Date.now(), 60)),
};
/** A period after all the mock events, so that each mock room is free */
const FREE_PERIOD = {
    period_start: getUnixTime(addDays(Date.now(), 400)),
    period_end: getUnixTime(addDays(Date.now(), 400)) + 3600,
};
const BUILDING_IDS = MOCK_BUILDINGS.map((bld) => bld.id);
/** Metadata names that the mock zones generate */
const METADATA_NAMES = [
    'bindings',
    'catering',
    'catering-settings',
    'catering_config',
    'lockers',
    'desks',
    'charge_codes',
    'map_regions',
];

type Call<T> = Promise<Result<{ readonly data: T }, CallError>>;

/**
 * The checks of one group. `ok` gives the data of a call, or records the
 * failure as `operation: error` and gives `null`. `each` calls `fn` for the
 * first `MAX_ITEMS` items, at the same time.
 */
function makeChecks() {
    const failures: string[] = [];
    async function ok<T>(name: string, call: Call<T>): Promise<T | null> {
        const result = await call;
        if (result.ok === false) {
            const failure = `${name}: ${JSON.stringify(result.error)}`;
            // Items of a list often fail the same way
            if (!failures.includes(failure)) failures.push(failure);
            return null;
        }
        return result.value.data;
    }
    async function each<I, T>(
        name: string,
        items: readonly I[] | null,
        fn: (item: I) => Call<T>,
    ) {
        await Promise.all(
            (items ?? []).slice(0, MAX_ITEMS).map((item) => ok(name, fn(item))),
        );
    }
    return { failures, ok, each };
}

type Checks = ReturnType<typeof makeChecks>;

/**
 * Calls each GET operation that the mock endpoints serve, with the v7
 * schemas. A mock value with the wrong type or outside an enum fails the
 * call, and the failure names the field.
 */
describe('mock data matches the v7 schemas', () => {
    /** Each group lists the data, then calls the item operations */
    const GROUPS: Record<string, (checks: Checks) => Promise<unknown>> = {
        zones: async ({ ok, each }) => {
            const list = await ok('zones.query', zones.query({ limit: ALL }));
            await each('zones.show', list, (zone) =>
                zones.show({ id: zone.id }),
            );
        },
        settings: async ({ ok, each }) => {
            const list = await ok('settings.query', settings.query());
            await each('settings.show', list, (item) =>
                settings.show({ id: item.id }),
            );
        },
        metadata: async ({ ok, each }) => {
            const ids = ['current', 'zone-org', ...BUILDING_IDS];
            await Promise.all([
                each('metadata.show', ids, (id) => metadata.show({ id })),
                each('metadata.show', METADATA_NAMES, (name) =>
                    metadata.show({ id: MOCK_LEVELS[0].id, name }),
                ),
                each('metadata.bulkFetch', METADATA_NAMES, (name) =>
                    metadata.bulkFetch({
                        name,
                        parent_ids: MOCK_LEVELS.map((lvl) => lvl.id),
                    }),
                ),
                each(
                    'metadata.childrenMetadata',
                    ['desks', 'lockers'],
                    (name) =>
                        metadata.childrenMetadata({
                            id: BUILDING_IDS[0],
                            name,
                        }),
                ),
            ]);
        },
        systems: async ({ ok, each }) => {
            const list = await ok(
                'systems.query',
                systems.query({ limit: ALL }),
            );
            await Promise.all([
                ok(
                    'systems.query',
                    systems.query({ signage: true, limit: ALL }),
                ),
                ok(
                    'systems.findByEmail',
                    systems.findByEmail({
                        in: (list ?? [])
                            .map((sys) => sys.email)
                            .filter(Boolean),
                    }),
                ),
                each('systems.show', list, (sys) =>
                    systems.show({ sys_id: sys.id }),
                ),
                each('systems.state', list, (sys) =>
                    systems.state({ sys_id: sys.id, module_slug: 'System_1' }),
                ),
                each('modules.query', list, (sys) =>
                    modules.query({ control_system_id: sys.id }),
                ),
            ]);
        },
        users: async ({ ok, each }) => {
            const list = await ok('users.query', users.query({ limit: ALL }));
            await Promise.all([
                ok('users.current', users.current()),
                each('users.show', list, (user) => users.show({ id: user.id })),
            ]);
        },
        groups: async ({ ok, each }) => {
            const list = await ok('groups.query', groups.query({ limit: ALL }));
            await Promise.all([
                each('groups.show', list, (group) =>
                    groups.show({ id: group.id }),
                ),
                each('groups.features', list, (group) =>
                    groups.features({ id: group.id }),
                ),
                each('groups_users.query', list, (group) =>
                    groups_users.query({ group_id: group.id }),
                ),
                each('groups_zones.query', list, (group) =>
                    groups_zones.query({ group_id: group.id }),
                ),
                each('playlist.approvers', list, (group) =>
                    playlist.approvers({ group_id: group.id }),
                ),
                each('signage_templates.approvers', list, (group) =>
                    signage_templates.approvers({ group_id: group.id }),
                ),
                ok('staff.groups.query', staff_api.groups.query()),
            ]);
        },
        signage_media: async ({ ok, each }) => {
            const list = await ok(
                'playlist_media.query',
                playlist_media.query({ limit: ALL }),
            );
            await Promise.all([
                ok('playlist_media.tags', playlist_media.tags()),
                ok('playlist_media.tagCounts', playlist_media.tagCounts()),
                each('playlist_media.show', list, (media) =>
                    playlist_media.show({ id: media.id }),
                ),
            ]);
        },
        signage_playlists: async ({ ok, each }) => {
            const list = await ok(
                'playlist.query',
                playlist.query({ limit: ALL }),
            );
            await Promise.all([
                each('playlist.show', list, (item) =>
                    playlist.show({ id: item.id }),
                ),
                each('playlist.media', list, (item) =>
                    playlist.media({ id: item.id }),
                ),
                each('playlist.mediaRevisions', list, (item) =>
                    playlist.mediaRevisions({ id: item.id }),
                ),
            ]);
        },
        signage_displays: async ({ ok, each }) => {
            const list = await ok(
                'zones.query',
                zones.query({ tags: ['display'], limit: ALL }),
            );
            await each('signage.display', list, (zone) =>
                signage.display({ system_id: zone.id }),
            );
        },
        signage_plugins: async ({ ok, each }) => {
            const list = await ok(
                'signage_plugins.query',
                signage_plugins.query({ limit: ALL }),
            );
            await each('signage_plugins.show', list, (plugin) =>
                signage_plugins.show({ id: plugin.id }),
            );
        },
        signage_templates: async ({ ok, each }) => {
            const [templates, mappings] = await Promise.all([
                ok(
                    'signage_templates.query',
                    signage_templates.query({ limit: ALL }),
                ),
                ok(
                    'signage_template_mappings.query',
                    signage_template_mappings.query({ limit: ALL }),
                ),
            ]);
            await Promise.all([
                each('signage_templates.show', templates, (item) =>
                    signage_templates.show({ id: item.id }),
                ),
                each('signage_template_mappings.show', mappings, (item) =>
                    signage_template_mappings.show({ id: item.id }),
                ),
            ]);
        },
        signage_ai: async ({ ok, each }) => {
            const [jobs] = await Promise.all([
                ok('signage_ai.indexJobs', signage_ai.indexJobs()),
                ok('signage_ai.capabilities', signage_ai.capabilities()),
            ]);
            await each('signage_ai.showJob', jobs, (job) =>
                signage_ai.showJob({ id: job.id }),
            );
        },
        map_ai: ({ ok, each }) =>
            Promise.all([
                ok('map_ai.capabilities', map_ai.capabilities()),
                ok('map_ai.indexJobs', map_ai.indexJobs()),
                ok('map_ai.usage', map_ai.usage()),
            ]),
        assets: async ({ ok, each }) => {
            const parking = MOCK_LEVELS.find((lvl) => lvl.type === 'parking');
            const [list, types, categories, orders] = await Promise.all([
                ok('assets.query', assets.query({ limit: ALL })),
                ok('asset_types.query', asset_types.query({ limit: ALL })),
                ok(
                    'asset_categories.query',
                    asset_categories.query({ limit: ALL }),
                ),
                ok(
                    'asset_purchase_orders.query',
                    asset_purchase_orders.query({ limit: ALL }),
                ),
                ok(
                    'assets.query',
                    assets.query({
                        type_id: '_parking_type_',
                        zone_id: parking?.id,
                        limit: ALL,
                    }),
                ),
            ]);
            await Promise.all([
                each('assets.show', list, (item) =>
                    assets.show({ id: item.id }),
                ),
                each('asset_types.show', types, (item) =>
                    asset_types.show({ id: item.id }),
                ),
                each('asset_categories.show', categories, (item) =>
                    asset_categories.show({ id: item.id }),
                ),
                each('asset_purchase_orders.show', orders, (item) =>
                    asset_purchase_orders.show({ id: item.id }),
                ),
            ]);
        },
        alerts: async ({ ok, each }) => {
            const [dashboards, list] = await Promise.all([
                ok(
                    'alert_dashboards.query',
                    alert_dashboards.query({ limit: ALL }),
                ),
                ok('alerts.query', alerts.query({ limit: ALL })),
            ]);
            await Promise.all([
                each('alert_dashboards.show', dashboards, (item) =>
                    alert_dashboards.show({ id: item.id }),
                ),
                each('alert_dashboards.alerts', dashboards, (item) =>
                    alert_dashboards.alerts({ id: item.id }),
                ),
                each('alerts.show', list, (item) =>
                    alerts.show({ id: item.id }),
                ),
            ]);
        },
        applications: ({ ok, each }) =>
            ok(
                'oauth_applications.query',
                oauth_applications.query({ limit: ALL }),
            ),
        short_url: async ({ ok, each }) => {
            const list = await ok(
                'short_url.query',
                short_url.query({ limit: ALL }),
            );
            await each('short_url.show', list, (item) =>
                short_url.show({ id: item.id }),
            );
        },
        bookings: async ({ ok, each }) => {
            const [list] = await Promise.all([
                ok(
                    'staff.bookings.query',
                    staff_api.bookings.query({
                        ...PERIOD,
                        zones: BUILDING_IDS.join(','),
                        include_deleted: true,
                        limit: ALL,
                    }),
                ),
                ok(
                    'staff.bookings.query',
                    staff_api.bookings.query({ ...PERIOD, limit: ALL }),
                ),
            ]);
            await each('staff.bookings.show', list, (item) =>
                staff_api.bookings.show({ id: item.id }),
            );
        },
        events: async ({ ok, each }) => {
            const [list] = await Promise.all([
                ok(
                    'staff.events.query',
                    staff_api.events.query({
                        ...PERIOD,
                        zone_ids: BUILDING_IDS.join(','),
                    }),
                ),
                ok('staff.events.query', staff_api.events.query(PERIOD)),
                ok('staff.events.history', staff_api.events.history(PERIOD)),
            ]);
            await Promise.all([
                each('staff.events.show', list, (item) =>
                    staff_api.events.show({ id: item.id }),
                ),
                each('staff.events.getMetadata', list, (item) =>
                    staff_api.events.getMetadata({
                        id: item.id,
                        system_id: item.system?.id ?? '',
                    }),
                ),
            ]);
        },
        calendars: ({ ok, each }) =>
            Promise.all([
                ok('staff.calendars.query', staff_api.calendars.query()),
                ok(
                    'staff.calendars.availability',
                    staff_api.calendars.availability(FREE_PERIOD),
                ),
                ok(
                    'staff.calendars.freeBusy',
                    staff_api.calendars.freeBusy(FREE_PERIOD),
                ),
                each(
                    'staff.calendars.checkPermission',
                    [
                        ACTIVE_USER.email,
                        MOCK_STAFF[1].email,
                        'other@place.tech',
                    ],
                    (user_email) =>
                        staff_api.calendars.checkPermission({ user_email }),
                ),
            ]),
        people: async ({ ok, each }) => {
            const list = await ok('staff.staff.query', staff_api.staff.query());
            await each('staff.staff.show', list, (user) =>
                staff_api.staff.show({ id: user.email }),
            );
        },
        // `guests.catering` is not called: the mock sends `null` for a guest
        // without catering, as `getGuestCateringItem` of `@placeos/users`
        // expects, and the operation schema wants an object
        guests: async ({ ok, each }) => {
            const list = await ok(
                'staff.guests.query',
                staff_api.guests.query(),
            );
            await Promise.all([
                each('staff.guests.show', list, (guest) =>
                    staff_api.guests.show({ id: guest.email }),
                ),
                each('staff.guests.meetings', MOCK_GUESTS, (guest) =>
                    staff_api.guests.meetings({ id: guest.email }),
                ),
            ]);
        },
        surveys: async ({ ok, each }) => {
            const [list, questions] = await Promise.all([
                ok('staff.surveys.query', staff_api.surveys.query()),
                ok(
                    'staff.surveys_questions.query',
                    staff_api.surveys_questions.query(),
                ),
                ok(
                    'staff.surveys_answers.query',
                    staff_api.surveys_answers.query(),
                ),
            ]);
            await Promise.all([
                each('staff.surveys.show', list, (item) =>
                    staff_api.surveys.show({ id: item.id }),
                ),
                each('staff.surveys_questions.show', questions, (item) =>
                    staff_api.surveys_questions.show({ id: item.id }),
                ),
            ]);
        },
    };

    beforeAll(() => {
        startMockPlaceClient();
        mocksInit();
    });

    // The mock endpoints wait about 200 ms, so the groups run at once
    it.concurrent.each(Object.keys(GROUPS))('%s', async (name) => {
        const checks = makeChecks();
        await GROUPS[name](checks);
        expect(checks.failures).toEqual([]);
    });

    it('should give the app the room of each room calendar', async () => {
        const [calendars, spaces] = await Promise.all([
            queryCalendarAvailability(FREE_PERIOD),
            querySpaceFreeBusy(FREE_PERIOD),
        ]);

        expect(calendars.map((cal) => cal.resource.id)).toEqual(
            MOCK_SPACES.map((space) => space.id),
        );
        expect(spaces.map((space) => space.id)).toEqual(
            MOCK_SPACES.filter((space) => space.bookable).map(
                (space) => space.id,
            ),
        );
    });
});
