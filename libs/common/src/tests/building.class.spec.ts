import { Building, LockerMap } from '../lib/types/org.classes';

const LOCKERS: LockerMap = {
    'zone-1': { 'area-1': { small: [['locker-1', true]] } },
};

describe('Building', () => {
    it('should map extras and loan items to id and name', () => {
        const bld = new Building({
            extras: [{ extra_id: 'tv', extra_name: 'TV' }],
            loan_items: [{ id: 'laptop', name: 'Laptop' }],
        } as any);

        expect(bld.extras).toEqual([{ id: 'tv', name: 'TV' }]);
        expect(bld.loan_items).toEqual([{ id: 'laptop', name: 'Laptop' }]);
    });

    it('should read details from discovery info when the zone has none', () => {
        const bld = new Building({
            id: 'bld-1',
            settings: {
                discovery_info: {
                    timezone: 'Australia/Sydney',
                    currency: 'AUD',
                    roles: { 'first-aiders': [{ name: 'Ann' }] },
                    locker_structure: LOCKERS,
                    levels: [{ id: 'lvl-1' }],
                },
            },
        } as any);

        expect(bld.timezone).toBe('Australia/Sydney');
        expect(bld.currency).toBe('AUD');
        expect(bld.role_names).toEqual(['first-aiders']);
        expect(bld.role('first-aiders')).toEqual([{ name: 'Ann' }]);
        expect(bld.lockers).toEqual(LOCKERS);
        expect(bld.levels[0].id).toBe('lvl-1');
    });

    it('should use defaults when no details are set', () => {
        const bld = new Building();

        expect(bld.currency).toBe('USD');
        expect(bld.catering_hours).toEqual({ start: 7, end: 20 });
        expect(bld.catering_restricted_from).toBe(-1440);
        expect(bld.location).toBe('0,0');
        expect(bld.role('unknown')).toEqual([]);
    });

    it('should return copies of roles and lockers', () => {
        const bld = new Building({
            roles: { security: [{ name: 'Sam' }] },
            lockers: LOCKERS,
        } as any);

        bld.role('security').push({ name: 'Other' } as any);
        bld.lockers['zone-2'] = {};

        expect(bld.role('security')).toEqual([{ name: 'Sam' }]);
        expect(bld.lockers).toEqual(LOCKERS);
    });

    it('should list neighbourhood features by level', () => {
        const bld = new Building({
            neighbourhoods: {
                'lvl-1': { Kitchen: 'area-1', Lounge: 'area-2' },
                'lvl-2': { Library: 'area-3' },
            },
        } as any);

        expect(bld.featuresForLevel('lvl-1')).toEqual([
            { id: 'area-1', name: 'Kitchen', level_id: 'lvl-1' },
            { id: 'area-2', name: 'Lounge', level_id: 'lvl-1' },
        ]);
        expect(bld.featuresForLevel('lvl-3')).toEqual([]);
    });
});
