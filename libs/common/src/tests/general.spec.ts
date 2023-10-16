import { timePeriodsIntersect } from '../lib/general';

describe('General Methods', () => {

    describe('timePeriodsIntersect', () => {

        it('should handle start overlapping other period', () => {
            expect(timePeriodsIntersect(2, 10, 1, 5)).toBe(true);
            expect(timePeriodsIntersect(1, 5, 2, 10)).toBe(true);
        });

        it('should handle end overlapping other period', () => {
            expect(timePeriodsIntersect(2, 10, 5, 15)).toBe(true);
            expect(timePeriodsIntersect(5, 15, 2, 10)).toBe(true);
        });

        it('should handle start overlapping with end', () => {
            expect(timePeriodsIntersect(2, 10, 10, 15)).toBe(false);
            expect(timePeriodsIntersect(10, 15, 2, 10)).toBe(false);
        });

        it('should one period containing the other', () => {
            expect(timePeriodsIntersect(5, 10, 1, 15)).toBe(true);
            expect(timePeriodsIntersect(1, 15, 5, 10)).toBe(true);
        });
    });
});

