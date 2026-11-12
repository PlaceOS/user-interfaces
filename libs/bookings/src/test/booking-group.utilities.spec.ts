import { Booking, setCurrentUser, StaffUser, User } from '@placeos/common';
import {
    isGroupBooking,
    mapGroupMembers,
    mapGroupMembersFromBookings,
    mapGroupMembersFromExtension,
    matchGroupSiblings,
    rollbackGroupBookings,
    visitorMemberPatch,
} from '../lib/booking-group.utilities';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('isGroupBooking', () => {
    it('is true for a parent, a group reference or group members', () => {
        expect(isGroupBooking(new Booking({ parent_id: 'bkn-1' }))).toBe(true);
        expect(
            isGroupBooking(new Booking({ extension_data: { group: 'grp-1' } })),
        ).toBe(true);
        expect(
            isGroupBooking(
                new Booking({
                    extension_data: {
                        group_members: [{ email: 'adam@place.tech' }],
                    },
                }),
            ),
        ).toBe(true);
    });

    it('is false for a lone booking or no booking', () => {
        expect(isGroupBooking(new Booking({ id: 'bkn-1' }))).toBe(false);
        expect(isGroupBooking(null)).toBe(false);
    });
});

describe('mapGroupMembersFromBookings', () => {
    it('keeps the international flag of each visitor', () => {
        const group_members = [
            {
                email: 'adam@place.tech',
                name: 'Adam Brown',
                international: true,
            },
            { email: 'zoe@place.tech', name: 'Zoe Amos' },
            { email: 'lee@place.tech', name: 'Lee Chan' },
        ];
        const bookings = [
            new Booking({
                asset_id: 'adam@place.tech',
                extension_data: { group_members },
            }),
            new Booking({
                asset_id: 'zoe@place.tech',
                extension_data: { group_members, international: true },
            }),
            new Booking({
                asset_id: 'lee@place.tech',
                extension_data: { group_members },
            }),
        ];
        const flags = mapGroupMembersFromBookings(bookings, true).map((m) => [
            m.email,
            m.extension_data.international,
        ]);
        expect(flags).toEqual([
            ['adam@place.tech', true],
            ['zoe@place.tech', true],
            ['lee@place.tech', false],
        ]);
    });

    it('keeps the internal or external type of each visitor', () => {
        const group_members = [
            {
                email: 'adam@place.tech',
                name: 'Adam Brown',
                visitor_internal_or_external: 'external',
            },
            { email: 'zoe@place.tech', name: 'Zoe Amos' },
        ];
        const bookings = [
            new Booking({
                asset_id: 'adam@place.tech',
                extension_data: { group_members },
            }),
            new Booking({
                asset_id: 'zoe@place.tech',
                extension_data: { group_members },
            }),
        ];
        const types = mapGroupMembersFromBookings(bookings, true).map((m) => [
            m.email,
            m.extension_data.visitor_internal_or_external,
        ]);
        expect(types).toEqual([
            ['adam@place.tech', 'external'],
            ['zoe@place.tech', 'internal'],
        ]);
    });
});

describe('visitorMemberPatch', () => {
    const base_form = { booking_type: 'visitor', zones: ['bld-1'] };
    const opts = { id: '', parent_id: 'bkn-1', group_name: 'grp-1' };

    it('carries the internal or external type into the member booking', () => {
        const member = new User({
            name: 'Adam Brown',
            email: 'adam@place.tech',
            visitor_internal_or_external: 'external',
        } as any);
        const patch = visitorMemberPatch(member, base_form, opts);
        expect(patch.visitor_internal_or_external).toBe('external');
    });

    it('defaults the member booking to an internal visitor', () => {
        const member = new User({
            name: 'Zoe Amos',
            email: 'zoe@place.tech',
        });
        const patch = visitorMemberPatch(member, base_form, opts);
        expect(patch.visitor_internal_or_external).toBe('internal');
    });

    it('takes zones from the form, then the existing booking, then the fallback, after the org zones', () => {
        const member = new User({ email: 'zoe@place.tech' });
        const zone_opts = {
            ...opts,
            org_zones: ['org-1', ''],
            existing_zones: ['bld-old'],
            fallback_zones: ['bld-default'],
        };
        const zonesFor = (form: Record<string, unknown>, extra = {}) =>
            visitorMemberPatch(member, form, { ...zone_opts, ...extra }).zones;

        expect(zonesFor({ zones: ['bld-1', 'org-1'] })).toEqual([
            'org-1',
            'bld-1',
        ]);
        expect(zonesFor({ zones: [] })).toEqual(['org-1', 'bld-old']);
        expect(zonesFor({}, { existing_zones: [] })).toEqual([
            'org-1',
            'bld-default',
        ]);
    });
});

describe('mapGroupMembersFromExtension', () => {
    const members = [
        {
            email: 'adam@place.tech',
            company: 'ACME',
            international: true,
            visitor_internal_or_external: 'external',
        },
        { email: 'adam@place.tech', name: 'Adam copy' },
        { name: 'No email' },
    ];

    it('should build one visitor per email with its visitor details', () => {
        const [adam, ...rest] = mapGroupMembersFromExtension(members, true);

        expect(rest).toEqual([]);
        expect(adam.name).toBe('adam@place.tech');
        expect(adam.organisation).toBe('ACME');
        expect(adam.extension_data).toMatchObject({
            international: true,
            visitor_internal_or_external: 'external',
        });
    });

    it('should not give staff group members a visitor type', () => {
        const [adam] = mapGroupMembersFromExtension(members, false);

        expect(adam.organisation).toBe('ACME');
        expect(
            adam.extension_data.visitor_internal_or_external,
        ).toBeUndefined();
    });
});

describe('rollbackGroupBookings', () => {
    afterEach(() => vi.restoreAllMocks());

    it('should try to remove every booking and only log the failures', async () => {
        const del = vi
            .spyOn(ts_client, 'del')
            .mockImplementation(async (url: string) => {
                if (url.includes('bkn-2')) throw new Error('offline');
            });
        const log = vi.spyOn(console, 'error').mockImplementation(() => {});

        await expect(
            rollbackGroupBookings(['bkn-1', 'bkn-2', 'bkn-3']),
        ).resolves.toBeUndefined();

        expect(del).toHaveBeenCalledTimes(3);
        expect(log).toHaveBeenCalledTimes(1);
        expect(log.mock.calls[0][1]).toHaveLength(1);
    });
});

describe('mapGroupMembers', () => {
    beforeEach(() =>
        setCurrentUser(
            new StaffUser({ id: 'me', email: 'me@place.tech', name: 'Me' }),
        ),
    );

    const members = [
        new User({ email: 'adam@place.tech', name: 'Adam' }),
        new User({ email: 'me@place.tech', name: 'Me again' }),
        new User({ email: 'adam@place.tech', name: 'Adam copy' }),
        new User({ name: 'No email' }),
    ];

    it('should add the current user once to a staff group and drop duplicates', () => {
        expect(
            mapGroupMembers('desk', members).map((_) => [_.email, _.name]),
        ).toEqual([
            ['me@place.tech', 'Me'],
            ['adam@place.tech', 'Adam'],
        ]);
    });

    it('should not add the current user to a visitor group', () => {
        expect(mapGroupMembers('visitor', members).map((_) => _.email)).toEqual(
            ['adam@place.tech', 'me@place.tech'],
        );
    });
});

describe('matchGroupSiblings', () => {
    const members = [new User({ email: 'adam@place.tech' })];

    it('should match visitor bookings by asset ID and staff bookings by user email', () => {
        const visitor = new Booking({ id: 'v1', asset_id: 'adam@place.tech' });
        const staff = new Booking({ id: 's1', user_email: 'adam@place.tech' });

        expect(
            matchGroupSiblings([visitor], members, true).sibling_map,
        ).toEqual({ 'adam@place.tech': visitor });
        expect(matchGroupSiblings([staff], members, false).sibling_map).toEqual(
            { 'adam@place.tech': staff },
        );
    });

    it('should delete the bookings of members removed from the group', () => {
        const kept = new Booking({ id: 'b1', user_email: 'adam@place.tech' });
        const removed = new Booking({ id: 'b2', user_email: 'zoe@place.tech' });

        const { to_delete } = matchGroupSiblings(
            [kept, removed],
            members,
            false,
        );

        expect(to_delete).toEqual([removed]);
    });
});
