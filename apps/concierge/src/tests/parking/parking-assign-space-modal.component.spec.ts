import { bookingZonesForLevel } from '../../app/parking/parking-assign-space-modal.component';

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
