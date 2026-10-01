import { errorText } from '../app/error-text';

describe('errorText', () => {
    it('should use the error message when there is one', () => {
        expect(errorText(new Error('busy'))).toBe('busy');
        expect(errorText({ message: 'not found' })).toBe('not found');
        expect(errorText('offline')).toBe('offline');
    });

    it('should fall back to the error code or status', () => {
        expect(errorText({ code: 500 })).toBe('500');
        expect(errorText({ status: 404 })).toBe('404');
        expect(errorText(undefined)).toBe('unknown');
    });
});
