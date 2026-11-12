import { BuildingLevel } from '../lib/types/org.classes';

describe('Level', () => {
    it('should try to get level number from display name', () => {
        expect(new BuildingLevel().number).toBe('');
        expect(new BuildingLevel({ display_name: 'Level 2' }).number).toBe('2');
        expect(new BuildingLevel({ display_name: 'Mezzanine' }).number).toBe(
            'M',
        );
        expect(
            new BuildingLevel({ display_name: 'Building Level 42' }).number,
        ).toBe('42');
    });

    it('should keep at most two characters of the level number', () => {
        expect(new BuildingLevel({ display_name: 'Level 123' }).number).toBe(
            '12',
        );
        expect(new BuildingLevel({ display_name: 'Level g' }).number).toBe('G');
    });
});
