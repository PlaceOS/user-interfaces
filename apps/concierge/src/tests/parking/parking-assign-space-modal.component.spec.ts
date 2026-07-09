import {
    availableParkingSpaces,
    bookingZonesForLevel,
    bookedResourcePeriodForBooking,
    mapLocationFromClick,
} from '../../app/parking/parking-assign-space-modal.component';

describe('bookingZonesForLevel', () => {
    it('should include the selected parking level hierarchy in booking zones', () => {
        const zones = bookingZonesForLevel(
            {
                organisation: { id: 'org-1' },
                region: { id: 'region-1' },
            } as any,
            {
                id: 'lvl-1',
                parent_id: 'bld-1',
            } as any,
        );

        expect(zones).toEqual(['org-1', 'region-1', 'bld-1', 'lvl-1']);
    });

    it('should omit empty zone values', () => {
        const zones = bookingZonesForLevel(
            {
                organisation: { id: 'org-1' },
                region: null,
            } as any,
            {
                id: 'lvl-1',
                parent_id: 'bld-1',
            } as any,
        );

        expect(zones).toEqual(['org-1', 'bld-1', 'lvl-1']);
    });
});

describe('mapLocationFromClick', () => {
    it('should use the map item id for map provider click events', () => {
        expect(
            mapLocationFromClick({ properties: { externalId: 'space-1' } }),
        ).toBe('space-1');
        expect(mapLocationFromClick({ properties: { roomId: 'space-2' } })).toBe(
            'space-2',
        );
        expect(mapLocationFromClick({ id: 'space-3' })).toBe('space-3');
    });

    it('should use the smallest SVG bounds containing a coordinate click', () => {
        const map_info = {
            parent: { x: 0, y: 0, w: 10, h: 10 },
            child: { x: 2, y: 2, w: 2, h: 2 },
        } as any;

        expect(mapLocationFromClick({ x: 3, y: 3 }, map_info)).toBe('child');
    });

    it('should return an empty string when no map location matches', () => {
        expect(
            mapLocationFromClick(
                { x: 20, y: 20 },
                { space: { x: 0, y: 0, w: 1, h: 1 } } as any,
            ),
        ).toBe('');
    });
});

describe('availableParkingSpaces', () => {
    it('should hide booked, clashing, assigned and unbookable spaces', () => {
        const spaces = [
            { id: 'free', bookable: true },
            { id: 'booked', bookable: true },
            { id: 'clashing', bookable: true },
            { id: 'assigned', bookable: true, assigned_to: 'user@example.com' },
            { id: 'disabled', bookable: false },
        ] as any;

        expect(
            availableParkingSpaces(
                spaces,
                new Set(['booked']),
                new Set(['clashing']),
            ),
        ).toEqual([{ id: 'free', bookable: true }]);
    });
});

describe('bookedResourcePeriodForBooking', () => {
    it('should query five minutes either side of the booking window', () => {
        expect(
            bookedResourcePeriodForBooking({
                booking_start: 1_700_000_000,
                booking_end: 1_700_003_600,
            } as any),
        ).toEqual({
            period_start: 1_699_999_700,
            period_end: 1_700_003_900,
        });
    });

    it('should use date and duration when the booking end is missing', () => {
        expect(
            bookedResourcePeriodForBooking({
                date: 1_700_000_000_000,
                duration: 90,
            } as any),
        ).toEqual({
            period_start: 1_699_999_700,
            period_end: 1_700_005_700,
        });
    });
});
