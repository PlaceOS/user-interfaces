import { Booking, setCurrentUser, StaffUser, User } from '@placeos/common';
import {
    bookingSaveQuery,
    buildBookingExtensionData,
    formBookingData,
} from '../lib/booking-form.payload';

describe('formBookingData', () => {
    it('should keep only form and booking fields, and drop the stale asset_ids', () => {
        const data = formBookingData({
            asset_id: 'desk-2',
            asset_ids: ['desk-1'],
            phone: '0400 000 000',
            resources: [{ id: 'desk-2' }],
            assets: [{ id: 'asset-1' }],
            not_a_field: true,
            extension_data: {
                notes: 'Near a window',
                asset_id: 'desk-1',
                assets: [{ id: 'asset-1' }],
                not_a_field: true,
            },
        });

        expect(data).toEqual({
            asset_id: 'desk-2',
            phone: '0400 000 000',
            extension_data: { notes: 'Near a window' },
        });
    });
});

describe('buildBookingExtensionData', () => {
    const base = { assets: [], group: 'grp-1' };

    beforeEach(() =>
        setCurrentUser(
            new StaffUser({
                email: 'me@example.com',
                groups: ['my-group'],
                department: 'Engineering',
            }),
        ),
    );

    it('should name the assigned desk, using the ID when there is no name', () => {
        const data = buildBookingExtensionData(
            { ...base, booking_type: 'desk', asset_id: 'desk-1' },
            [],
        );

        expect(data).toMatchObject({
            group: 'grp-1',
            assigned_asset_id: 'desk-1',
            assigned_asset_name: 'desk-1',
            department: 'Engineering',
        });
        expect(data).not.toHaveProperty('visitor_name');
        expect(data).not.toHaveProperty('group_members');
    });

    it('should save the visitor name and flags for a visitor booking', () => {
        const data = buildBookingExtensionData(
            {
                ...base,
                booking_type: 'visitor',
                asset_id: 'guest@example.com',
                international: 1,
                visitor_internal_or_external: 'external',
            },
            [{ email: 'guest@example.com' }],
        );

        expect(data).toMatchObject({
            visitor_name: 'guest@example.com',
            international: true,
            visitor_internal_or_external: 'external',
            group_members: [{ email: 'guest@example.com' }],
        });
        expect(data).not.toHaveProperty('assigned_asset_id');
    });

    it('should use the groups of the person the parking is booked for, matching emails in any case', () => {
        const for_other = buildBookingExtensionData(
            {
                ...base,
                booking_type: 'parking',
                user: new User({
                    email: 'other@example.com',
                    groups: ['other-group'],
                }),
            },
            [],
        );
        const for_me = buildBookingExtensionData(
            {
                ...base,
                booking_type: 'parking',
                user: new User({ email: 'ME@example.com' }),
            },
            [],
        );

        expect(for_other).toMatchObject({
            user_groups: ['other-group'],
            requires_manual_approval: false,
        });
        // The current user's groups also hold their department
        expect(for_me.user_groups).toEqual(['my-group', 'Engineering']);
    });
});

describe('bookingSaveQuery', () => {
    const series = new Booking({
        id: 'bkn-1',
        instance: 1_800_000_000,
        booking_start: 1_800_000_000,
    });

    it('should link the booking to its parent event before a parent booking', () => {
        expect(
            bookingSaveQuery(
                { event_id: 'evt-1', ical_uid: 'uid-1', parent_id: 'bkn-0' },
                new Booking(),
            ),
        ).toEqual({ event_id: 'evt-1', ical_uid: 'uid-1' });
        expect(
            bookingSaveQuery({ parent_id: 'bkn-0' }, new Booking()),
        ).toEqual({ booking_id: 'bkn-0' });
    });

    it('should target one occurrence unless the whole series is updated', () => {
        expect(bookingSaveQuery({}, series)).toEqual({
            instance: true,
            start_time: 1_800_000_000,
        });
        expect(bookingSaveQuery({ update_master: true }, series)).toEqual({});
    });
});
