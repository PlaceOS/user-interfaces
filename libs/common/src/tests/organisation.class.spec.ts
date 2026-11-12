import { Organisation } from '../lib/types/org.classes';

describe('Organisation', () => {
    it('should allow getting settings', () => {
        expect(new Organisation().setting('test')).toBeNull();
        expect(
            new Organisation({ settings: { test: 'Testing' } }).setting('test'),
        ).toBe('Testing');
        expect(
            new Organisation({
                settings: { nested: { test: 'Testing' } },
            }).setting('nested.test'),
        ).toBe('Testing');
    });
});
