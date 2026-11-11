import { PlaceZone } from '@placeos/ts-client';
import type { BookingAsset } from '../lib/booking-form.types';
import {
    pickAutoAllocatedResource,
    preferredAllocationPool,
} from '../lib/booking-resource.utilities';

const asset = (
    id: string,
    extra: Partial<BookingAsset> = {},
): BookingAsset => ({ id, name: id, bookable: true, features: [], ...extra });
const onLevel = (id: string, level_id: string) =>
    asset(id, { zone: new PlaceZone({ id: level_id }) });

describe('preferredAllocationPool', () => {
    const tag_only = asset('tag', { tags: ['eng'] });
    const home_only = asset('home', { homebase: 'eng' });
    const both = asset('both', { tags: ['eng'], homebase: 'eng' });
    const other = asset('other', { tags: ['sales'], homebase: 'sales' });

    it('should prefer resources that match both tags and homebase', () => {
        const pool = preferredAllocationPool(
            [tag_only, home_only, both, other],
            ['eng'],
        );
        expect(pool).toEqual([both]);
    });

    it('should prefer a homebase match over a tag match', () => {
        const pool = preferredAllocationPool(
            [tag_only, home_only, other],
            ['eng'],
        );
        expect(pool).toEqual([home_only]);
    });

    it('should use tag matches when no homebase matches', () => {
        const pool = preferredAllocationPool([tag_only, other], ['eng']);
        expect(pool).toEqual([tag_only]);
    });

    it('should use every resource when nothing matches or the user has no groups', () => {
        const available = [tag_only, other];
        expect(preferredAllocationPool(available, ['ops'])).toBe(available);
        expect(preferredAllocationPool(available, [])).toBe(available);
    });
});

describe('pickAutoAllocatedResource', () => {
    afterEach(() => vi.restoreAllMocks());

    it('should pick from the level with the most available resources', () => {
        const available = [
            onLevel('a1', 'lvl-a'),
            onLevel('b1', 'lvl-b'),
            onLevel('b2', 'lvl-b'),
            onLevel('a2', 'lvl-a'),
            onLevel('b3', 'lvl-b'),
        ];
        // The last index on the level, so a wrong level cannot match
        vi.spyOn(Math, 'random').mockReturnValue(0.99);

        expect(pickAutoAllocatedResource(available).id).toBe('b3');
    });

    it('should group resources without a level together', () => {
        const available = [
            onLevel('a1', 'lvl-a'),
            asset('x1'),
            asset('x2'),
        ];
        vi.spyOn(Math, 'random').mockReturnValue(0);

        expect(pickAutoAllocatedResource(available).id).toBe('x1');
    });
});
