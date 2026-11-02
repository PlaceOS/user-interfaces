import { MediaAnimation } from '@placeos/ts-client';
import {
    hasPlayableScheduleMask,
    mediaAnimation,
    parsePlayAtLocal,
} from './playlist';

describe('hasPlayableScheduleMask', () => {
    const valid_from = new Date(2026, 2, 2).getTime() / 1000;

    it('plays a schedule with no mask', () => {
        expect(hasPlayableScheduleMask({})).toBe(true);
        expect(hasPlayableScheduleMask({ mask: '' })).toBe(true);
    });

    it('needs a valid mask with at least one occurrence', () => {
        expect(hasPlayableScheduleMask({ mask: '01', valid_from })).toBe(true);
        for (const mask of ['000', '10x', '1'.repeat(129), ' 1']) {
            expect(hasPlayableScheduleMask({ mask, valid_from })).toBe(false);
        }
    });

    // The player cannot count occurrences without a valid start date
    it.each([undefined, 0, -60, Number.NaN, 9e15])(
        'does not play a mask that starts at %s',
        (value) => {
            expect(
                hasPlayableScheduleMask({ mask: '1', valid_from: value }),
            ).toBe(false);
        },
    );
});

describe('parsePlayAtLocal', () => {
    it('reads a date time with no offset in the local timezone', () => {
        expect(parsePlayAtLocal('2027-01-01T00:00:00')).toBe(
            new Date(2027, 0, 1).getTime(),
        );
    });

    it.each([
        '2027-01-01T00:00:00Z',
        '2027-01-01T00:00',
        '2027-02-30T00:00:00',
        '2027-01-01T00:60:00',
        '',
        null,
        undefined,
    ])('rejects %s', (value) => {
        expect(parsePlayAtLocal(value)).toBeNull();
    });
});

describe('mediaAnimation', () => {
    // The API stores the name it is sent, but returns its index
    it.each([
        [0, MediaAnimation.Default],
        [1, MediaAnimation.Cut],
        [2, MediaAnimation.CrossFade],
        [4, MediaAnimation.SlideLeft],
        [6, MediaAnimation.SlideBottom],
    ])('maps index %s to %s', (value, expected) => {
        expect(mediaAnimation(value)).toBe(expected);
    });

    it('keeps an animation name', () => {
        expect(mediaAnimation(MediaAnimation.Cut)).toBe(MediaAnimation.Cut);
        expect(mediaAnimation('cross_fade')).toBe(MediaAnimation.CrossFade);
    });

    it.each([-1, 7, 999, 1.5, Number.NaN, 'spin', null, undefined])(
        'uses the default animation for %s',
        (value) => {
            expect(mediaAnimation(value)).toBe(MediaAnimation.Default);
        },
    );
});
