import { buildingDayEnd, buildingDayStart } from '../../app/ui/building-time';

describe('building day', () => {
    const utc = (iso: string) => new Date(iso).valueOf();

    it('uses the building offset of the selected date', () => {
        // New York is UTC-5 in January and UTC-4 in July
        expect(
            buildingDayStart(
                new Date(2026, 0, 15),
                'America/New_York',
            ).valueOf(),
        ).toBe(utc('2026-01-15T05:00:00Z'));
        expect(
            buildingDayStart(
                new Date(2026, 6, 15),
                'America/New_York',
            ).valueOf(),
        ).toBe(utc('2026-07-15T04:00:00Z'));
    });

    it('ends the day just before the next day starts', () => {
        // Santiago repeats 23:00 on 4 April 2026, so the day has 25 hours
        expect(
            buildingDayEnd(
                new Date(2026, 3, 4, 12),
                'America/Santiago',
            ).valueOf(),
        ).toBe(utc('2026-04-05T03:59:59.999Z'));
    });

    it('starts a day at its first moment when midnight is skipped', () => {
        // Santiago moves 00:00 to 01:00 on 6 September 2026
        expect(
            buildingDayStart(
                new Date(2026, 8, 6, 12),
                'America/Santiago',
            ).valueOf(),
        ).toBe(utc('2026-09-06T04:00:00Z'));
        expect(
            buildingDayEnd(
                new Date(2026, 8, 5, 12),
                'America/Santiago',
            ).valueOf(),
        ).toBe(utc('2026-09-06T03:59:59.999Z'));
    });

    it('starts a day at its first midnight when midnight repeats', () => {
        // Havana moves 01:00 back to 00:00 on 1 November 2026
        expect(
            buildingDayStart(
                new Date(2026, 10, 1, 12),
                'America/Havana',
            ).valueOf(),
        ).toBe(utc('2026-11-01T04:00:00Z'));
    });

    it('uses the browser day without a timezone', () => {
        const date = new Date(2026, 6, 15, 9);
        expect(buildingDayStart(date, '')).toEqual(new Date(2026, 6, 15));
        expect(buildingDayEnd(date, '')).toEqual(
            new Date(2026, 6, 15, 23, 59, 59, 999),
        );
    });
});
