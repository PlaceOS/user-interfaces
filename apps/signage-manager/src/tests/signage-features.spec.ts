import {
    effectiveFeatures,
    signageGroupFeatures,
} from '../app/signage-features';

describe('signageGroupFeatures', () => {
    it('reads the signage lists from a subsystem map', () => {
        expect(
            signageGroupFeatures({
                signage: {
                    features: ['templates'],
                    available_plugins: ['plugin-1'],
                },
                events: { features: ['other'] },
            }),
        ).toEqual({
            features: ['templates'],
            available_plugins: ['plugin-1'],
        });
    });

    it('reads flat lists from the subsystem features route', () => {
        expect(signageGroupFeatures({ features: ['ai-editing'] })).toEqual({
            features: ['ai-editing'],
        });
    });

    it('drops values with the wrong type', () => {
        expect(
            signageGroupFeatures({
                features: 'templates',
                available_plugins: ['plugin-1', 2],
            }),
        ).toEqual({ available_plugins: ['plugin-1'] });
        expect(signageGroupFeatures(null)).toEqual({});
    });
});

describe('effectiveFeatures', () => {
    it('keeps every global feature when the group sets no list', () => {
        expect(effectiveFeatures(['templates', 'ai-editing'], {})).toEqual([
            'templates',
            'ai-editing',
        ]);
    });

    it('never adds a feature the global list does not have', () => {
        expect(
            effectiveFeatures(['templates'], {
                features: ['templates', 'ai-editing'],
            }),
        ).toEqual(['templates']);
    });
});
