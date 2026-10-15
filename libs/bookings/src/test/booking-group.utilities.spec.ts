import { Booking } from '@placeos/common';
import { mapGroupMembersFromBookings } from '../lib/booking-group.utilities';

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
});
