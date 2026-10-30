import { TIMEZONES_IANA } from '../lib/timezones';

describe('TIMEZONES_IANA', () => {
    it('should offer UTC and the fixed-offset zones with the browser list', () => {
        expect(TIMEZONES_IANA).toContain('UTC');
        expect(TIMEZONES_IANA).toContain('Etc/GMT-10');
        expect(TIMEZONES_IANA).toContain('Australia/Sydney');
        expect(TIMEZONES_IANA).toEqual([...TIMEZONES_IANA].sort());
    });
});
