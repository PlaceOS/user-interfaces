import { unique } from '@placeos/common';
import {
    PlaceAlert,
    TriggerComparison,
    TriggerConditionOperator,
} from '@placeos/ts-client';

import { Alert } from '../alerts.service';

export interface StateTopic {
    region_id?: string;
    building_id?: string;
    level_id?: string;
    area_id?: string;
    system_id?: string;
    driver_id?: string;
    module_name?: string;
    module_index?: string;
    state_key?: string;
}

/** The latest value the broker holds for one status topic */
export interface BrokerValue {
    /** epoch seconds, from source */
    time: number;
    topic: StateTopic;
    topic_str: string;
    value: unknown;
}

export function topicToString(topic: StateTopic, org_id = ''): string {
    return `placeos/${org_id || '+'}/+/${topic.region_id || '+'}/${topic.building_id || '+'}/${topic.level_id || '+'}/${topic.area_id || '+'}/${topic.system_id || '+'}/${topic.driver_id || '+'}/${topic.module_name || '+'}/${topic.module_index || '+'}/${topic.state_key || '+'}`;
}

export function stringToTopic(topic: string): StateTopic {
    const [
        _,
        _o,
        _s,
        bld_id,
        lvl_id,
        area_id,
        _b,
        sys_id,
        dev_id,
        mod_id,
        mod_idx,
        key,
    ] = topic.split('/');
    return {
        building_id: bld_id,
        level_id: lvl_id,
        area_id: area_id,
        system_id: sys_id,
        driver_id: dev_id,
        module_name: mod_id,
        module_index: mod_idx,
        state_key: key,
    };
}

/** The topic filter a comparison listens on */
export function compareAsTopic(
    item: TriggerComparison,
    zones: { region?: string; building?: string; level?: string } = {},
    org_id = '',
): string {
    if (!(item.left instanceof Object))
        return topicToString(
            {
                state_key: `${item.left}`,
                region_id: zones.region,
                building_id: zones.building,
            },
            org_id,
        );
    const parts = (item.left?.mod || '').split('_');
    parts.pop();
    const module_name = parts.join('_');
    return topicToString(
        {
            module_name,
            state_key: item.left.status,
            region_id: zones.region,
            building_id: zones.building,
            level_id: zones.level,
        },
        org_id,
    );
}

export function matchTopics(topic: string, comp: string): boolean {
    const t_state = topic.split('/');
    const comp_t_state = comp.split('/');
    for (let i = 0; i < t_state.length; i++) {
        if (
            t_state[i] !== comp_t_state[i] &&
            t_state[i] !== '+' &&
            comp_t_state[i] !== '+'
        ) {
            return false;
        }
    }
    return true;
}

/**
 * Reads a broker message. `null` means the topic was removed: source clears a
 * retained topic by publishing an empty payload to it, when a status is
 * cleared or the module it belonged to is gone.
 */
export function parseBrokerMessage(
    topic_str: string,
    payload: string,
): BrokerValue | null {
    if (!payload) return null;
    const data = JSON.parse(payload);
    return {
        time: data.time,
        value: data.value,
        topic: stringToTopic(topic_str),
        topic_str,
    };
}

/** "true", "12" and "null" as the values they stand for */
export function coerceValue(value: unknown): unknown {
    if (typeof value !== 'string') return value;
    const lower = value.toLowerCase();
    if (lower === 'true') return true;
    if (lower === 'false') return false;
    if (lower === 'null') return null;
    if (lower === 'undefined') return undefined;
    if (value !== '' && !isNaN(Number(value))) return Number(value);
    return value;
}

/** The comparison's left-hand value, read from a status value */
function comparedValue(value: unknown, item: TriggerComparison): unknown {
    let out = value;
    const keys = item.left instanceof Object ? item.left.keys || [] : [];
    for (const key of keys) {
        if (out == null) break;
        out = out[key];
    }
    return out;
}

/** Whether `value <operator> expected` holds */
export function evaluate(
    value: unknown,
    operator: TriggerConditionOperator,
    expected: unknown,
): boolean {
    // compared as JavaScript compares them, as the REST checks did
    const current = coerceValue(value) as number;
    const right = coerceValue(expected) as number;
    switch (operator) {
        case TriggerConditionOperator.EQ:
            return current === right;
        case TriggerConditionOperator.NEQ:
            return current !== right;
        case TriggerConditionOperator.GT:
            return current > right;
        case TriggerConditionOperator.LT:
            return current < right;
        case TriggerConditionOperator.GTE:
            return current >= right;
        case TriggerConditionOperator.LTE:
            return current <= right;
        case TriggerConditionOperator.AND:
            return !!(current && right);
        case TriggerConditionOperator.OR:
            return !!(current || right);
        case TriggerConditionOperator.XOR:
            return !!current !== !!right;
        default:
            return false;
    }
}

/** The broker values a comparison holds for */
export function findCompareMatches(
    values: Iterable<BrokerValue>,
    item: TriggerComparison,
): BrokerValue[] {
    const topic = compareAsTopic(item);
    const matches: BrokerValue[] = [];
    for (const entry of values) {
        if (!matchTopics(topic, entry.topic_str)) continue;
        const value = comparedValue(entry.value, item);
        if (evaluate(value, item.operator, item.right)) matches.push(entry);
    }
    return matches;
}

/**
 * The alerts raised by the broker's current values.
 *
 * NOTE:: `values` holds only the latest value of each topic, and only topics
 * the broker still retains. Source keeps the broker matching the modules,
 * their order and their state, so nothing here is checked again over REST.
 */
export function raisedAlerts(
    definitions: PlaceAlert[],
    values: Iterable<BrokerValue>,
): Alert[] {
    const list = [...values];
    let out: Alert[] = [];
    for (const alert of definitions) {
        const comparisons = alert.conditions?.comparisons || [];
        if (!comparisons.length) continue;
        const comparison_matches = comparisons.map((item) =>
            findCompareMatches(list, item),
        );
        const required = alert.any_match ? 1 : comparisons.length;
        for (const match of comparison_matches[0]) {
            const group = [match];
            for (let i = 1; i < comparison_matches.length; i++) {
                // conditions are about one system, within the debounce period
                const other = comparison_matches[i].find(
                    (_) =>
                        _.topic.system_id === match.topic.system_id &&
                        Math.abs(_.time - match.time) < alert.debounce_period,
                );
                if (other) group.push(other);
            }
            if (group.length < required) continue;
            const { time, topic } = group[0];
            const device = `${topic.module_name}_${topic.module_index}`;
            out.push({
                id: `${alert.id}+${topic.system_id}+${device}`,
                severity: alert.severity as Alert['severity'],
                type: alert.alert_type as Alert['type'],
                location: topic.system_id,
                device,
                subject: alert.name,
                body: alert.description,
                status: 'open',
                timestamp: time * 1000,
            });
        }
        out = unique(out, 'id');
    }
    return out;
}
