import {
    parseRecentVisitors,
    recentVisitorEntry,
} from '../../../app/book/visitor-flow-new/recent-visitors';

describe('recent visitors', () => {
    it('should read the international flag of the shared visitor forms and not use it as a phone number', () => {
        const [local, international] = parseRecentVisitors([
            'int@example.com|Int|Globex|1',
            'local@example.com|Local|Acme|0',
        ]);

        expect(local).toEqual({
            email: 'local@example.com',
            name: 'Local',
            company: 'Acme',
            phone: '',
            international: false,
            visitor_internal_or_external: 'internal',
        });
        expect(international.phone).toBe('');
        expect(international.international).toBe(true);
    });

    it('should default the internal/external type to internal for legacy entries', () => {
        const [visitor] = parseRecentVisitors([
            'local@example.com|Local|Acme|0',
        ]);

        expect(visitor.visitor_internal_or_external).toBe('internal');
    });

    it('should read the internal/external type from the sixth field', () => {
        const [visitor] = parseRecentVisitors([
            'ext@example.com|Ext|Globex|0||external',
        ]);

        expect(visitor.visitor_internal_or_external).toBe('external');
    });

    it('should read the phone number from the fifth field', () => {
        const [visitor] = parseRecentVisitors([
            'a@example.com|A|Acme|1|+61400111222',
        ]);

        expect(visitor.phone).toBe('+61400111222');
        expect(visitor.international).toBe(true);
    });

    it('should read a phone number that an earlier version saved in the fourth field', () => {
        const [visitor] = parseRecentVisitors([
            'a@example.com|A|Acme|+61400111222',
        ]);

        expect(visitor.phone).toBe('+61400111222');
        expect(visitor.international).toBe(false);
    });

    it('should keep the most recent item for each email address', () => {
        const visitors = parseRecentVisitors([
            'Alice@Example.com|Alice|Acme|0',
            'bob@example.com|Bob|Globex|0',
            'alice@example.com|Alice Again|Acme|0',
            42,
        ]);

        expect(visitors.map((_) => _.name)).toEqual(['Alice Again', 'Bob']);
    });

    it('should write items that it can read back', () => {
        const visitor = {
            email: 'a@example.com',
            name: 'A',
            company: 'Acme',
            phone: '+61400111222',
            international: true,
            visitor_internal_or_external: 'internal' as const,
        };

        expect(recentVisitorEntry(visitor)).toBe(
            'a@example.com|A|Acme|1|+61400111222|internal',
        );
        expect(parseRecentVisitors([recentVisitorEntry(visitor)])).toEqual([
            visitor,
        ]);
    });

    it('should write and read back an external type', () => {
        const visitor = {
            email: 'a@example.com',
            name: 'A',
            company: 'Acme',
            phone: '',
            international: false,
            visitor_internal_or_external: 'external' as const,
        };

        expect(recentVisitorEntry(visitor)).toBe(
            'a@example.com|A|Acme|0||external',
        );
        expect(parseRecentVisitors([recentVisitorEntry(visitor)])).toEqual([
            visitor,
        ]);
    });
});
