import { TriggerConditionOperator } from '@placeos/ts-client';

import {
    BrokerValue,
    evaluate,
    parseBrokerMessage,
    raisedAlerts,
} from '../app/dashboards/broker-alerts';

const value = (
    system: string,
    device: string,
    status: string,
    v: unknown,
    time = 100,
): BrokerValue =>
    parseBrokerMessage(
        `placeos/org-1/state/_/bld/lvl/_/${system}/driver-1/${device}/1/${status}`,
        JSON.stringify({ time, value: v }),
    );

const definition = (
    comparisons: any[],
    extra: Record<string, unknown> = {},
): any => ({
    id: 'alert-1',
    name: 'Alert',
    severity: 'high',
    conditions: { comparisons },
    ...extra,
});

describe('broker alerts', () => {
    it('reads an empty payload as a removed topic', () => {
        expect(parseBrokerMessage('placeos/a/state/x', '')).toBeNull();
        expect(
            parseBrokerMessage(
                'placeos/org-1/state/_/b/l/_/sys-1/d/Display/2/power',
                '{"time":5,"value":true}',
            ),
        ).toEqual(
            expect.objectContaining({
                time: 5,
                value: true,
                topic: expect.objectContaining({
                    system_id: 'sys-1',
                    module_name: 'Display',
                    module_index: '2',
                    state_key: 'power',
                }),
            }),
        );
    });

    // the left of a comparison is the status value, the right what it is compared with
    it('compares the status value with the expected one', () => {
        expect(evaluate(30, TriggerConditionOperator.GT, 20)).toBe(true);
        expect(evaluate(10, TriggerConditionOperator.GT, 20)).toBe(false);
        expect(evaluate(10, TriggerConditionOperator.LT, 20)).toBe(true);
        expect(evaluate('20', TriggerConditionOperator.GTE, 20)).toBe(true);
        expect(evaluate('false', TriggerConditionOperator.EQ, false)).toBe(
            true,
        );
        expect(evaluate(true, TriggerConditionOperator.XOR, false)).toBe(true);
    });

    it('raises an alert per module whose value matches', () => {
        const alerts = raisedAlerts(
            [
                definition([
                    {
                        left: 'connected',
                        operator: TriggerConditionOperator.EQ,
                        right: false,
                    },
                ]),
            ],
            [
                value('sys-1', 'Display', 'connected', false),
                value('sys-1', 'Camera', 'connected', true),
                value('sys-2', 'Display', 'connected', false),
            ],
        );
        expect(alerts.map((a) => a.id)).toEqual([
            'alert-1+sys-1+Display_1',
            'alert-1+sys-2+Display_1',
        ]);
        expect(alerts[0]).toEqual(
            expect.objectContaining({ timestamp: 100_000, status: 'open' }),
        );
    });

    it('reads sub-keys of a module status', () => {
        const alerts = raisedAlerts(
            [
                definition([
                    {
                        left: {
                            mod: 'Display_1',
                            status: 'temperature',
                            keys: ['celsius'],
                        },
                        operator: TriggerConditionOperator.GT,
                        right: 40,
                    },
                ]),
            ],
            [
                value('sys-1', 'Display', 'temperature', { celsius: 45 }),
                value('sys-2', 'Display', 'temperature', { celsius: 30 }),
            ],
        );
        expect(alerts.map((a) => a.location)).toEqual(['sys-1']);
    });

    // every condition has to hold on the same system
    it('groups the conditions of one alert by system', () => {
        const alert = definition(
            [
                {
                    left: { mod: 'Display_1', status: 'power' },
                    operator: TriggerConditionOperator.EQ,
                    right: true,
                },
                {
                    left: { mod: 'Projector_1', status: 'power' },
                    operator: TriggerConditionOperator.EQ,
                    right: true,
                },
            ],
            { debounce_period: 60 },
        );
        const alerts = raisedAlerts(
            [alert],
            [
                value('sys-1', 'Display', 'power', true),
                value('sys-2', 'Projector', 'power', true),
                value('sys-3', 'Display', 'power', true),
                value('sys-3', 'Projector', 'power', true),
            ],
        );
        expect(alerts.map((a) => a.location)).toEqual(['sys-3']);
    });
});
