import {
    csvToJson,
    downloadFile,
    jsonToCsv,
    timePeriodsIntersect,
} from '../lib/general';

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

    describe('jsonToCsv', () => {
        it('should escape CSV cells for Excel-friendly output', () => {
            const csv = jsonToCsv([
                {
                    name: 'Jane, Doe',
                    note: 'Line 1\nLine "2"',
                    count: 2,
                    meta: { a: 1, b: 2 },
                },
            ]);
            expect(csv).toBe(
                'name,note,count,meta\r\n"Jane, Doe","Line 1\nLine ""2""",2,"{""a"":1,""b"":2}"',
            );
        });

        it('should support tab-separated output', () => {
            const csv = jsonToCsv([{ name: 'Jane, Doe', role: 'Admin' }], '\t');
            expect(csv).toBe('name\trole\r\nJane, Doe\tAdmin');
        });
    });

    describe('csvToJson', () => {
        it('should parse tab-separated content and strip BOM from header', () => {
            const list = csvToJson('\uFEFFname\tcount\r\nJane\t2', '\t');
            expect(list).toEqual([{ name: 'Jane', count: 2 }]);
        });
    });

    describe('downloadFile', () => {
        it('should prefix BOM for csv downloads', () => {
            const original_url = window.URL;
            const create_object_url = jest.fn((blob: Blob) => 'blob:test-url');
            const revoke_object_url = jest.fn();
            (window as any).URL = {
                createObjectURL: create_object_url,
                revokeObjectURL: revoke_object_url,
            };
            jest.useFakeTimers();
            try {
                downloadFile('report.csv', 'name,count\r\nJane,2');
                const blob = create_object_url.mock.calls[0][0] as Blob;
                expect(blob.type).toBe('text/csv;charset=utf-8');
                expect(blob.size).toBe(
                    new TextEncoder().encode('\uFEFFname,count\r\nJane,2')
                        .length,
                );
                jest.runOnlyPendingTimers();
                expect(revoke_object_url).toHaveBeenCalledWith('blob:test-url');
            } finally {
                jest.useRealTimers();
                (window as any).URL = original_url;
            }
        });
    });
});
