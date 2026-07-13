import { addMinutes } from 'date-fns';

import {
    addToDate,
    BookingRuleDetails,
    BookingRuleset,
    checkRulesMatch,
    filterResourcesFromRules,
    rulesForResource,
    stringToMinutes,
} from '../lib/booking-rules';
import { User } from '../lib/types/user.class';

function details(overrides: Partial<BookingRuleDetails> = {}) {
    return {
        resource: { id: 'desk-1', zones: ['zone-1'], name: 'Desk 1' },
        date: Date.now(),
        duration: 60,
        host: new User({ email: 'host@dev.place.tech', groups: ['staff'] }),
        ...overrides,
    } as BookingRuleDetails;
}

describe('stringToMinutes', () => {
    it('should convert time strings into minutes', () => {
        expect(stringToMinutes('15 minutes')).toBe(15);
        expect(stringToMinutes('2 hours')).toBe(120);
        expect(stringToMinutes('1 day')).toBe(24 * 60);
        expect(stringToMinutes('2 weeks')).toBe(2 * 7 * 24 * 60);
        expect(stringToMinutes('1 month')).toBe(30 * 24 * 60);
    });

    it('should handle case insensitive units', () => {
        expect(stringToMinutes('1 Day')).toBe(24 * 60);
    });

    it('should return 0 for invalid input', () => {
        expect(stringToMinutes('')).toBe(0);
        expect(stringToMinutes(null as any)).toBe(0);
        expect(stringToMinutes('30')).toBe(0);
    });
});

describe('addToDate', () => {
    it('should add the parsed duration to the given date', () => {
        const date = new Date('2024-01-01T00:00:00');
        expect(addToDate('2 hours', date).valueOf()).toBe(
            addMinutes(date, 120).valueOf(),
        );
    });
});

describe('checkRulesMatch', () => {
    it('should match when there are no conditions', () => {
        expect(
            checkRulesMatch(details(), { conditions: null } as any),
        ).toBe(true);
    });

    it('should require all conditions to match', () => {
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: {
                resource_ids: ['desk-1'],
                min_length: 30,
            },
        };
        expect(checkRulesMatch(details(), ruleset)).toBe(true);
        // resource matches but duration is below min_length
        expect(checkRulesMatch(details({ duration: 15 }), ruleset)).toBe(
            false,
        );
    });

    it('should match resource ids', () => {
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: { resource_ids: ['desk-2'] },
        };
        expect(checkRulesMatch(details(), ruleset)).toBe(false);
    });

    it('should match host groups', () => {
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: { groups: ['staff'] },
        };
        expect(checkRulesMatch(details(), ruleset)).toBe(true);
        ruleset.conditions.groups = ['staff', 'admin'];
        expect(checkRulesMatch(details(), ruleset)).toBe(false);
    });

    it('should match resource tags', () => {
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: { tags: ['standing'] },
        };
        const has_tags = details({
            resource: {
                id: 'desk-1',
                zones: ['zone-1'],
                tags: ['standing', 'window'],
            },
        });
        expect(checkRulesMatch(has_tags, ruleset)).toBe(true);
        expect(checkRulesMatch(details(), ruleset)).toBe(false);
    });

    it('should match booking length limits', () => {
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: { min_length: 30, max_length: 120 },
        };
        expect(checkRulesMatch(details({ duration: 60 }), ruleset)).toBe(true);
        expect(checkRulesMatch(details({ duration: 15 }), ruleset)).toBe(
            false,
        );
        expect(checkRulesMatch(details({ duration: 240 }), ruleset)).toBe(
            false,
        );
    });

    it('should match time of day with is_between', () => {
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: { is_between: [9, 17] },
        };
        const at = (hours: number) =>
            details({
                date: new Date('2024-01-01T00:00:00').setHours(hours),
            });
        expect(checkRulesMatch(at(10), ruleset)).toBe(true);
        expect(checkRulesMatch(at(8), ruleset)).toBe(false);
        expect(checkRulesMatch(at(17), ruleset)).toBe(false);
    });

    it('should match date periods with is_period', () => {
        const now = Date.now();
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: { is_period: [now - 1000, now + 1000] },
        };
        expect(checkRulesMatch(details({ date: now }), ruleset)).toBe(true);
        expect(
            checkRulesMatch(details({ date: now + 5000 }), ruleset),
        ).toBe(false);
    });

    it('should match locations against the resource name', () => {
        const ruleset: BookingRuleset = {
            zone: '*',
            rules: {},
            conditions: { locations: ['Desk 1'] },
        };
        expect(checkRulesMatch(details(), ruleset)).toBe(true);
    });
});

describe('rulesForResource', () => {
    const hidden_ruleset: BookingRuleset = {
        zone: 'zone-1',
        rules: { hidden: true, auto_approve: false },
        conditions: {},
    };

    it('should return default rules when ruleset list is not an array', () => {
        expect(rulesForResource(details(), null as any)).toEqual({
            auto_approve: true,
            hidden: false,
        });
    });

    it('should return rules from a matching ruleset for the resource zone', () => {
        expect(rulesForResource(details(), [hidden_ruleset])).toEqual(
            hidden_ruleset.rules,
        );
    });

    it('should match wildcard zone rulesets', () => {
        expect(
            rulesForResource(details(), [
                { ...hidden_ruleset, zone: '*' },
            ]),
        ).toEqual(hidden_ruleset.rules);
    });

    it('should ignore rulesets for other zones', () => {
        expect(
            rulesForResource(details(), [
                { ...hidden_ruleset, zone: 'zone-other' },
            ]),
        ).toEqual({ auto_approve: true, hidden: false });
    });

    it('should return the first matching ruleset', () => {
        const first: BookingRuleset = {
            zone: '*',
            rules: { hidden: false, auto_approve: false },
            conditions: {},
        };
        expect(rulesForResource(details(), [first, hidden_ruleset])).toEqual(
            first.rules,
        );
    });
});

describe('filterResourcesFromRules', () => {
    it('should remove resources with hidden rules', () => {
        const resources = [
            { id: 'desk-1', zones: ['zone-1'] },
            { id: 'desk-2', zones: ['zone-2'] },
        ];
        const rulesets: BookingRuleset[] = [
            {
                zone: 'zone-1',
                rules: { hidden: true },
                conditions: {},
            },
        ];
        const filtered = filterResourcesFromRules(
            resources,
            details(),
            rulesets,
        );
        expect(filtered).toEqual([resources[1]]);
    });
});
