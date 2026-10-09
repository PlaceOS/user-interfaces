import { LocationStatus, USER_LOCATIONS } from '../../app/team-schedule/common';

describe('team-schedule/common', () => {
    const expected_keys: LocationStatus[] = [
        'unspecified',
        'wfh',
        'office',
        'onsite',
        'on_leave',
        'off_sick',
    ];

    it('should define styling metadata for every location status', () => {
        expect(Object.keys(USER_LOCATIONS).sort()).toEqual(
            [...expected_keys].sort(),
        );
    });

    it('should provide a name, icon and colours for each status', () => {
        for (const key of expected_keys) {
            const entry = USER_LOCATIONS[key];
            expect(typeof entry.name).toBe('string');
            expect(entry.name.length).toBeGreaterThan(0);
            expect(typeof entry.icon).toBe('string');
            expect(entry.icon.length).toBeGreaterThan(0);
            expect(entry.fg_color).toMatch(/^rgb\(/);
            expect(entry.bg_color).toMatch(/^rgb\(/);
        }
    });

    it('should map office status to a business icon', () => {
        expect(USER_LOCATIONS.office.icon).toBe('business');
        expect(USER_LOCATIONS.wfh.icon).toBe('home');
        expect(USER_LOCATIONS.off_sick.icon).toBe('local_hospital');
    });
});
