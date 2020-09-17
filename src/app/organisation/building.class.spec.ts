import { Building } from './building.class';

import { HashMap } from '../common/types';
import { generateMockBuilding } from './building.utilities';

describe('Building', () => {
    let init_data: HashMap;
    let service: any;
    let bld: Building;

    beforeEach(() => {
        init_data = generateMockBuilding();
        service = { get: jest.fn() }
        bld = new Building(init_data);
    });

    it('should have an ID', () => {
        expect(init_data.id).toBe(bld.id);
        expect(init_data.zone_id).toBe(bld.zone_id);
    });

    it('should have extras', () => {
        expect(bld.extras.length).toBe(init_data.extras.length);
        expect(bld.extras[0].name).toBe(init_data.extras[0].extra_name);
    });

    it('should have loan items', () => {
        expect(bld.loan_items.length).toBe(init_data.loan_items.length);
        expect(bld.loan_items[0].name).toBe(init_data.loan_items[0].extra_name);
    });

    it('should have roles', () => {
        expect(bld.lockers).toBeTruthy();
    });

    it('should have lockers', () => {
        expect(bld.role_names.length).toBeGreaterThan(0);
        expect(bld.role(bld.role_names[0])).toBeTruthy();
    });
});
