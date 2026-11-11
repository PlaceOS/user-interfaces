import { CalendarEvent, CateringItem } from '@placeos/common';
import { AttachedResourceRuleset } from '@placeos/components';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import {
    cateringItemAvailable,
    getCateringRulesForZone,
} from '../lib/utilities';

const makeEvent = (overrides: Record<string, unknown> = {}) =>
    ({
        resources: [],
        space: null,
        date: Date.now() + 24 * 60 * 60 * 1000,
        duration: 120,
        ext: (_: string) => undefined,
        ...overrides,
    }) as CalendarEvent;

describe('catering utilities', () => {
    beforeEach(() => vi.clearAllMocks());

    // Caching and error handling are tested with zoneRulesetLoader in components
    it('should load rules from the catering config of the zone', async () => {
        const details = [{ name: '*', rules: [] }];
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details,
        } as any);
        await expect(getCateringRulesForZone('zone-a')).resolves.toEqual(
            details,
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-a',
            'catering_config',
        );
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
            ] as unknown as AttachedResourceRuleset[];
            expect(cateringItemAvailable(item, rules, makeEvent())).toBe(true);
        });

        it('should apply a wildcard rule to every item', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const passing = [
                { name: '*', rules: [['min_length', 1]] },
            ] as unknown as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(
                    item,
                    passing,
                    makeEvent({ duration: 120 }),
                ),
            ).toBe(true);
            const failing = [
                { name: '*', rules: [['min_length', 3]] },
            ] as unknown as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(
                    item,
                    failing,
                    makeEvent({ duration: 120 }),
                ),
            ).toBe(false);
        });

        it('should match rules by item category', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const rules = [
                { name: 'Drinks', rules: [['max_length', 1]] },
            ] as unknown as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(
                    item,
                    rules,
                    makeEvent({ duration: 120 }),
                ),
            ).toBe(false);
        });

        it('should match rules by item tag', () => {
            const item = new CateringItem({ tags: ['Hot'] });
            const rules = [
                { name: 'Hot', rules: [['min_length', 5]] },
            ] as unknown as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(
                    item,
                    rules,
                    makeEvent({ duration: 120 }),
                ),
            ).toBe(false);
        });

        it('should evaluate visitor_type rules against event extension data', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const rules = [
                { name: 'Drinks', rules: [['visitor_type', 'VIP']] },
            ] as AttachedResourceRuleset[];
            const vip_event = makeEvent({
                ext: (key: string) =>
                    key === 'visitor_type' ? 'VIP' : undefined,
            });
            expect(cateringItemAvailable(item, rules, vip_event)).toBe(true);
            expect(cateringItemAvailable(item, rules, makeEvent())).toBe(false);
        });

        it('should match rules by a zone of the event room', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const rules = [
                { name: 'level-1', rules: [['min_length', 5]] },
            ] as unknown as AttachedResourceRuleset[];
            const room = (zones: string[]) =>
                makeEvent({ resources: [{ zones }], duration: 120 });
            expect(cateringItemAvailable(item, rules, room(['level-1']))).toBe(
                false,
            );
            expect(cateringItemAvailable(item, rules, room(['level-2']))).toBe(
                true,
            );
        });

        it('should check how far ahead the order is made', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const hours = (count: number) =>
                makeEvent({ date: Date.now() + count * 60 * 60 * 1000 });
            const rule = (type: string) =>
                [
                    { name: '*', rules: [[type, 24]] },
                ] as unknown as AttachedResourceRuleset[];

            expect(
                cateringItemAvailable(item, rule('is_before'), hours(48)),
            ).toBe(true);
            expect(
                cateringItemAvailable(item, rule('is_before'), hours(12)),
            ).toBe(false);
            expect(
                cateringItemAvailable(item, rule('within_hours'), hours(12)),
            ).toBe(true);
            expect(
                cateringItemAvailable(item, rule('within_hours'), hours(48)),
            ).toBe(false);
        });

        it('should check the hour of day of the event', () => {
            const item = new CateringItem({ category: 'Drinks' });
            const at = (hour: number) =>
                makeEvent({ date: new Date(2026, 0, 1, hour).valueOf() });
            const rule = (type: string, hour: number) =>
                [
                    { name: '*', rules: [[type, hour]] },
                ] as unknown as AttachedResourceRuleset[];

            expect(
                cateringItemAvailable(item, rule('after_hour', 10), at(11)),
            ).toBe(true);
            expect(
                cateringItemAvailable(item, rule('after_hour', 10), at(9)),
            ).toBe(false);
            expect(
                cateringItemAvailable(item, rule('before_hour', 12), at(9)),
            ).toBe(true);
            expect(
                cateringItemAvailable(item, rule('before_hour', 12), at(13)),
            ).toBe(false);
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
            ] as unknown as AttachedResourceRuleset[];
            expect(
                cateringItemAvailable(
                    item,
                    rules,
                    makeEvent({ duration: 120 }),
                ),
            ).toBe(false);
        });
    });
});
