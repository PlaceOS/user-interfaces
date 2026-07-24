import { isPublicMode, setPublicMode } from '../lib/public-mode';

describe('public mode', () => {
    afterEach(() => setPublicMode(false));

    it('should default to disabled', () => {
        expect(isPublicMode()).toBe(false);
    });

    it('should reflect the set state', () => {
        setPublicMode(true);
        expect(isPublicMode()).toBe(true);
        setPublicMode(false);
        expect(isPublicMode()).toBe(false);
    });

    it('should coerce truthy values to booleans', () => {
        setPublicMode('yes' as any);
        expect(isPublicMode()).toBe(true);
    });
});
