import {
    errorMessage,
    errorStatus,
    orientationOf,
    perceivedLightness,
} from '../../app/image-gen/image-gen.util';

describe('image generation utilities', () => {
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

    it('labels orientation from the image size, then the aspect ratio', () => {
        expect(orientationOf(1024, 1536, '16:9')).toBe('portrait');
        expect(orientationOf(1536, 1024, '9:16')).toBe('landscape');
        expect(orientationOf(undefined, undefined, '3:4')).toBe('portrait');
        expect(orientationOf(undefined, undefined, '1:1')).toBe('landscape');
    });
});
