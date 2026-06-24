import { decodeEntities, decodeEntityNames } from './decode-entity-names.util';

describe('decodeEntities', () => {
    it('decodes HTML entities', () => {
        expect(decodeEntities('Sales &amp; Marketing')).toBe(
            'Sales & Marketing',
        );
        expect(decodeEntities('A &lt;B&gt; &quot;C&quot;')).toBe('A <B> "C"');
    });

    it('leaves plain values untouched and is idempotent', () => {
        expect(decodeEntities('Sales & Marketing')).toBe('Sales & Marketing');
        expect(decodeEntities('plain name')).toBe('plain name');
        expect(decodeEntities('')).toBe('');
    });
});

describe('decodeEntityNames', () => {
    it('decodes name and display_name', () => {
        expect(
            decodeEntityNames({
                id: '1',
                name: 'R&amp;D',
                display_name: 'A &amp; B',
            }),
        ).toEqual({ id: '1', name: 'R&D', display_name: 'A & B' });
    });

    it('decodes nested group/user/zone names', () => {
        const result = decodeEntityNames({
            user_id: 'u',
            user: { id: 'u', name: 'Tom &amp; Jerry' },
        });
        expect(result.user.name).toBe('Tom & Jerry');
    });

    it('passes through non-objects', () => {
        expect(decodeEntityNames(null as any)).toBeNull();
        expect(decodeEntityNames('x' as any)).toBe('x');
    });
});
