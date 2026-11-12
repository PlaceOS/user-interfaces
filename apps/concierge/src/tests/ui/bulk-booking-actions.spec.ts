import {
    bookingRowKey,
    selectedBookings,
} from '../../app/ui/bulk-booking-actions';

describe('selectedBookings', () => {
    it('should select only the chosen instance of a recurring booking', () => {
        const list = [
            { id: 'b1', instance: 100 },
            { id: 'b1', instance: 200 },
            { id: 'b2', instance: undefined },
        ];

        const selected = selectedBookings(list, [
            bookingRowKey(list[1]),
            bookingRowKey(list[2]),
        ]);

        expect(selected).toEqual([list[1], list[2]]);
    });
});
