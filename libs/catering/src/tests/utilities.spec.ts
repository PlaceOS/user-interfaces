import { CalendarEvent, CateringItem } from '@placeos/common';
import { AttachedResourceRuleset } from '@placeos/components';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
}));

import * as ts_client from '@placeos/ts-client';
import {
    cateringItemAvailable,
    getCateringRulesForZone,
} from '../lib/utilities';

const makeEvent = (overrides: Record<string, any> = {}) =>
    ({
        resources: [],
        space: null,
        date: Date.now() + 24 * 60 * 60 * 1000,
        duration: 120,
        ext: (_: string) => undefined,
        ...overrides,
    }) as any as CalendarEvent;

describe('catering utilities', () => {
    beforeEach(() => jest.clearAllMocks());

    describe('getCateringRulesForZone', () => {
        it('should resolve empty for missing zone id', async () => {
            const rules = await getCateringRulesForZone('');
            expect(rules).toEqual([]);
            expect(ts_client.showMetadata).not.toHaveBeenCalled();
        });

        it('should return the rules from zone metadata', async () => {
            const details = [{ name: '*', rules: [] }];
            jest.mocked(ts_client.showMetadata).mockResolvedValue({
                details,
            } as any);
            const rules = await getCateringRulesForZone('zone-a');
            expect(rules).toEqual(details);
            expect(ts_client.showMetadata).toHaveBeenCalledWith(
                'zone-a',
                'catering_config',
            );
        });

        it('should cache requests per zone', async () => {
            jest.mocked(ts_client.showMetadata).mockResolvedValue({
                details: [],
            } as any);
            await getCateringRulesForZone('zone-b');
            await getCateringRulesForZone('zone-b');
            expect(ts_client.showMetadata).toHaveBeenCalledTimes(1);
            await getCateringRulesForZone('zone-b', true);
            expect(ts_client.showMetadata).toHaveBeenCalledTimes(2);
        });

        it('should resolve empty when metadata request fails', async () => {
            jest.mocked(ts_client.showMetadata).mockRejectedValue(
                new Error('nope'),
            );
            const rules = await getCateringRulesForZone('zone-c');
            expect(rules).toEqual([]);
        });

        it('should coerce non-array details to empty', async () => {
            jest.mocked(ts_client.showMetadata).mockResolvedValue({
                details: { not: 'an array' },
            } as any);
            const rules = await getCateringRulesForZone('zone-d');
            expect(rules).toEqual([]);
        });
    });

    describe('cateringItemAvailable', () => {
        it('should be available when there are no rules', () => {
            const item = new CateringItem({ category: 'Drinks' });
            expect(cateringItemAvailable(item, [], makeEvent())).toBe(true);
        });

        it('should ignore rules that do not target the item', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const rules = [
                { name: 'Snacks', rules: [['min_length', 100]] },
            ] as any as AttachedResourceRuleset[];
            expect(cateringItemAvailable(item, rules, makeEvent())).toBe(true);
        });

        it('should apply a wildcard rule to every item', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const passing = [
                { name: '*', rules: [['min_length', 1]] },
            ] as any as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(item, passing, makeEvent({ duration: 120 })),
            ).toBe(true);
            const failing = [
                { name: '*', rules: [['min_length', 3]] },
            ] as any as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(item, failing, makeEvent({ duration: 120 })),
            ).toBe(false);
        });

        it('should match rules by item category', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const rules = [
                { name: 'Drinks', rules: [['max_length', 3]] },
            ] as any as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(item, rules, makeEvent({ duration: 120 })),
            ).toBe(true);
        });

        it('should match rules by item tag', () => {
            const item = new CateringItem({ tags: ['Hot'] });
            const rules = [
                { name: 'Hot', rules: [['min_length', 5]] },
            ] as any as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(item, rules, makeEvent({ duration: 120 })),
            ).toBe(false);
        });

        it('should evaluate visitor_type rules against event extension data', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const rules = [
                { name: 'Drinks', rules: [['visitor_type', 'VIP']] },
            ] as any as AttachedResourceRuleset[];
            const vip_event = makeEvent({
                ext: (key: string) => (key === 'visitor_type' ? 'VIP' : undefined),
            });
            expect(cateringItemAvailable(item, rules, vip_event)).toBe(true);
            expect(cateringItemAvailable(item, rules, makeEvent())).toBe(false);
        });

        it('should require all rules in a matched ruleset to pass', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const rules = [
                {
                    name: 'Drinks',
                    rules: [
                        ['min_length', 1],
                        ['max_length', 1],
                    ],
                },
            ] as any as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(item, rules, makeEvent({ duration: 120 })),
            ).toBe(false);
        });
    });
});
