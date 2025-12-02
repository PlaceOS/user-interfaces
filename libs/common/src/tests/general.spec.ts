import { csvToJson, timePeriodsIntersect } from '../lib/general';

describe('General Methods', () => {
    describe('csvToJson', () => {
        it('should parse basic CSV data', () => {
            const csv = 'name,email\nJohn,john@test.com';
            const result = csvToJson(csv);
            expect(result).toEqual([{ name: 'John', email: 'john@test.com' }]);
        });

        it('should filter out blank lines', () => {
            const csv = 'name,email\nJohn,john@test.com\n\n\n';
            const result = csvToJson(csv);
            expect(result.length).toBe(1);
            expect(result[0]).toEqual({ name: 'John', email: 'john@test.com' });
        });

        it('should filter out lines with only whitespace', () => {
            const csv = 'name,email\nJohn,john@test.com\n   ,   \n';
            const result = csvToJson(csv);
            expect(result.length).toBe(1);
        });

        it('should handle multiple valid rows with blank lines between', () => {
            const csv =
                'name,email\nJohn,john@test.com\n\nJane,jane@test.com\n\n';
            const result = csvToJson(csv);
            expect(result.length).toBe(2);
            expect(result[0].name).toBe('John');
            expect(result[1].name).toBe('Jane');
        });
    });

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
