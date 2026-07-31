import { hasStoredApiKey } from '../app/api-key';

describe('hasStoredApiKey', () => {
    beforeEach(() => {
        localStorage.clear();
        sessionStorage.clear();
    });

    it('should report no key when none is stored', () => {
        expect(hasStoredApiKey()).toBe(false);
    });

    it('should find a key stored under any client prefix', () => {
        // The prefix is a hash of the client configuration, so only the suffix
        // is predictable before the client has been set up.
        localStorage.setItem('a1b2c3_x-api-key', 'secret');

        expect(hasStoredApiKey()).toBe(true);
    });

    it('should find a key held in session storage', () => {
        sessionStorage.setItem('a1b2c3_x-api-key', 'secret');

        expect(hasStoredApiKey()).toBe(true);
    });

    it('should ignore an empty key', () => {
        localStorage.setItem('a1b2c3_x-api-key', '');

        expect(hasStoredApiKey()).toBe(false);
    });

    it('should ignore unrelated stored values', () => {
        localStorage.setItem('a1b2c3_access_token', 'secret');
        localStorage.setItem('x-api-key-notes', 'secret');

        expect(hasStoredApiKey()).toBe(false);
    });
});
