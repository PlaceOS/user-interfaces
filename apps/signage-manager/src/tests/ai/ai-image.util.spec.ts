import {
    errorMessage,
    errorStatus,
    perceivedLightness,
} from '../../app/ai/ai-image.util';

describe('AI image utilities', () => {
    it('reads nested API errors without returning an object', () => {
        expect(
            errorMessage(
                { error: { error: 'Provider rejected the request' } },
                'Fallback',
            ),
        ).toBe('Provider rejected the request');
        expect(errorMessage({ error: {} }, 'Fallback')).toBe('Fallback');
    });

    it('reads direct and wrapped HTTP status codes', () => {
        expect(errorStatus({ status: 404 })).toBe(404);
        expect(errorStatus({ error: { status: 403 } })).toBe(403);
        expect(errorStatus(new Error('offline'))).toBeUndefined();
    });

    it('uses one luminance calculation for black and white', () => {
        expect(perceivedLightness(0, 0, 0)).toBe(0);
        expect(perceivedLightness(255, 255, 255)).toBe(255);
    });
});
