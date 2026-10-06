import {
    actionError,
    errorStatus,
    hexColour,
    orientationOf,
    perceivedLightness,
    UserFacingError,
} from '../../app/image-gen/image-gen.util';

describe('image generation utilities', () => {
    it('names the action rather than a raw error, unless written for people', () => {
        expect(
            actionError(
                new Error('Creating upload for a.png failed with status 500'),
                'The image could not be attached',
            ),
        ).toBe('The image could not be attached');
        expect(
            actionError(
                new UserFacingError('This domain has no organisation zone'),
                'The logo could not be saved',
            ),
        ).toBe('This domain has no organisation zone');
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

    it('writes colours the way a colour input reports them', () => {
        expect(hexColour('#FFF')).toBe('#ffffff');
        expect(hexColour('#0E6E52')).toBe('#0e6e52');
        expect(hexColour('rgb(0, 0, 0)')).toBe('');
    });

    it('labels orientation from the image size, then the aspect ratio', () => {
        expect(orientationOf(1024, 1536, '16:9')).toBe('portrait');
        expect(orientationOf(1536, 1024, '9:16')).toBe('landscape');
        expect(orientationOf(undefined, undefined, '3:4')).toBe('portrait');
        expect(orientationOf(undefined, undefined, '1:1')).toBe('landscape');
    });
});
