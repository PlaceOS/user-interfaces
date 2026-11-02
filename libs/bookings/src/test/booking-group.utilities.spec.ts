import { Booking, User } from '@placeos/common';
import {
    isGroupBooking,
    mapGroupMembersFromBookings,
    visitorMemberPatch,
} from '../lib/booking-group.utilities';

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
});
