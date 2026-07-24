import {
    loadPersistedZones,
    persistZones,
} from '../../app/ui/zone-persistence';

describe('zone-persistence', () => {
    beforeEach(() => localStorage.clear());

    it('should round-trip persisted zones for a view + scope', () => {
        persistZones('desks', 'bld-1', ['zone-a', 'zone-b']);
        expect(loadPersistedZones('desks', 'bld-1')).toEqual([
            'zone-a',
            'zone-b',
        ]);
    });

    it('should keep view/scope selections independent', () => {
        persistZones('desks', 'bld-1', ['zone-a']);
        persistZones('parking', 'bld-1', ['zone-b']);
        persistZones('desks', 'bld-2', ['zone-c']);

        expect(loadPersistedZones('desks', 'bld-1')).toEqual(['zone-a']);
        expect(loadPersistedZones('parking', 'bld-1')).toEqual(['zone-b']);
        expect(loadPersistedZones('desks', 'bld-2')).toEqual(['zone-c']);
    });

    it('should return an empty array when nothing is persisted', () => {
        expect(loadPersistedZones('desks', 'bld-unknown')).toEqual([]);
    });

    it('should ignore an empty scope id for both load and persist', () => {
        persistZones('desks', '', ['zone-a']);
        expect(localStorage.length).toBe(0);
        expect(loadPersistedZones('desks', '')).toEqual([]);
    });

    it('should discard corrupt or non-array stored values', () => {
        localStorage.setItem('PLACEOS.concierge.zones.desks.bld-1', '{bad');
        expect(loadPersistedZones('desks', 'bld-1')).toEqual([]);

        localStorage.setItem(
            'PLACEOS.concierge.zones.desks.bld-2',
            JSON.stringify({ not: 'array' }),
        );
        expect(loadPersistedZones('desks', 'bld-2')).toEqual([]);
    });

    it('should filter out non-string entries from stored values', () => {
        localStorage.setItem(
            'PLACEOS.concierge.zones.desks.bld-1',
            JSON.stringify(['zone-a', 5, null, 'zone-b', { x: 1 }]),
        );
        expect(loadPersistedZones('desks', 'bld-1')).toEqual([
            'zone-a',
            'zone-b',
        ]);
    });
});
