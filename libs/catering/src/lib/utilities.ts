import { CalendarEvent, CateringItem, stringToMinutes } from '@placeos/common';
import {
    AttachedResourceRuleset,
    zoneRulesetLoader,
} from '@placeos/components';
import { isAfter, isBefore, setHours, subMinutes } from 'date-fns';

/** Catering rulesets for the zone, cached per zone */
export const getCateringRulesForZone = zoneRulesetLoader('catering_config');

export function cateringItemAvailable(
    item: CateringItem,
    rules: AttachedResourceRuleset[],
    event: CalendarEvent,
) {
    let is_available = true;
    const now = Date.now();
    for (const rule of rules) {
        if (
            item.category === rule.name ||
            item.tags.includes(rule.name) ||
            event.resources.find((_) => _.zones.includes(rule.name)) ||
            event.space?.zones.includes(rule.name) ||
            rule.name === '*'
        ) {
            let matches = 0;
            for (const [type, value] of rule.rules) {
                const date = new Date(event.date);
                const v =
                    typeof value === 'string'
                        ? stringToMinutes(value)
                        : +value * 60;
                switch (type) {
                    case 'is_before':
                        matches += isBefore(now, subMinutes(date, v)) ? 1 : 0;
                        break;
                    case 'within_hours':
                        matches += isAfter(now, subMinutes(date, v)) ? 1 : 0;
                        break;
                    case 'after_hour':
                        matches += isAfter(date, setHours(date, v / 60))
                            ? 1
                            : 0;
                        break;
                    case 'before_hour':
                        matches += isBefore(date, setHours(date, v / 60))
                            ? 1
                            : 0;
                        break;
                    case 'min_length':
                        matches += event.duration >= v ? 1 : 0;
                        break;
                    case 'max_length':
                        matches += event.duration <= v ? 1 : 0;
                        break;
                    case 'visitor_type':
                        matches += event.ext('visitor_type') === value ? 1 : 0;
                        break;
                    default:
                        matches += 1;
                }
            }
            is_available = matches >= rule.rules.length;
        }
        if (!is_available) return false;
    }
    return is_available;
}
