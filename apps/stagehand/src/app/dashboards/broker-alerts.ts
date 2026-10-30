import { unique } from '@placeos/common';
import {
    PlaceAlert,
    TriggerComparison,
    TriggerConditionOperator,
} from '@placeos/ts-client';
import { ZoneFilter } from '../support-groups';

type AlertSeverity = 'critical' | 'high' | 'medium' | 'low';
type AlertStatus = 'open' | 'in progress' | 'closed' | 'resolved';
type DeviceType = 'display' | 'audio' | 'video' | 'network' | 'control';

/** An alert raised on the hot list */
export interface Alert {
    id: string;
    severity: AlertSeverity;
    type: DeviceType;
    location: string;
    device: string;
    subject: string;
    body: string;
    status: AlertStatus;
    timestamp: number;
}

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
    /** `topic_str` split on `/`, so matching doesn't split it again */
    topic_parts: string[];
    value: unknown;
}

export function topicToString(topic: StateTopic, org_id = ''): string {
    return `placeos/${org_id || '+'}/+/${topic.region_id || '+'}/${topic.building_id || '+'}/${topic.level_id || '+'}/${topic.area_id || '+'}/${topic.system_id || '+'}/${topic.driver_id || '+'}/${topic.module_name || '+'}/${topic.module_index || '+'}/${topic.state_key || '+'}`;
}

export function stringToTopic(topic: string): StateTopic {
    const [
        ,
        ,
        ,
        region_id,
        building_id,
        level_id,
        area_id,
        system_id,
        driver_id,
        module_name,
        module_index,
        state_key,
    ] = topic.split('/');
    return {
        region_id,
        building_id,
        level_id,
        area_id,
        system_id,
        driver_id,
        module_name,
        module_index,
        state_key,
    };
}

/** The topic filter a comparison listens on, within `zones` */
export function compareAsTopic(
    item: TriggerComparison,
    zones: ZoneFilter = {},
    org_id = '',
): string {
    const location = {
        region_id: zones.region,
        building_id: zones.building,
        level_id: zones.level,
        area_id: zones.area,
    };
    if (!(item.left instanceof Object))
        return topicToString(
            { ...location, state_key: `${item.left}` },
            org_id,
        );
    const parts = (item.left?.mod || '').split('_');
    parts.pop();
    const module_name = parts.join('_');
    return topicToString(
        { ...location, module_name, state_key: item.left.status },
        org_id,
    );
}

/** Whether two topics, split on `/`, match. `+` matches any level. */
export function matchTopics(
    t_state: readonly string[],
    comp_t_state: readonly string[],
): boolean {
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
        topic_parts: topic_str.split('/'),
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
    const topic = compareAsTopic(item).split('/');
    const matches: BrokerValue[] = [];
    for (const entry of values) {
        if (!matchTopics(topic, entry.topic_parts)) continue;
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
    const out: Alert[] = [];
    for (const alert of definitions) {
        const comparisons = alert.conditions?.comparisons || [];
        if (!comparisons.length) continue;
        const [first_matches, ...other_matches] = comparisons.map((item) =>
            findCompareMatches(list, item),
        );
        // the other conditions' matches by system, so grouping doesn't scan
        // every match for each one
        const others_by_system = other_matches.map((matches) => {
            const by_system = new Map<string, BrokerValue[]>();
            for (const entry of matches) {
                const id = entry.topic.system_id;
                if (!by_system.has(id)) by_system.set(id, []);
                by_system.get(id).push(entry);
            }
            return by_system;
        });
        const required = alert.any_match ? 1 : comparisons.length;
        for (const match of first_matches) {
            const group = [match];
            for (const by_system of others_by_system) {
                // conditions are about one system, within the debounce period
                const other = by_system
                    .get(match.topic.system_id)
                    ?.find(
                        (_) =>
                            Math.abs(_.time - match.time) <
                            alert.debounce_period,
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
    }
    return unique(out, 'id');
}
