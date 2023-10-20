import { isAfter, isBefore, setHours, subHours } from 'date-fns';

import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { CateringItem } from './catering-item.class';
import { Observable, of } from 'rxjs';
import { showMetadata } from '@placeos/ts-client';
import { catchError, map } from 'rxjs/operators';
import { stringToMinutes } from '@placeos/common';
import { AttachedResourceRuleset } from '@placeos/components';

const RULE_REQUESTS: Record<string, Observable<AttachedResourceRuleset[]>> = {};

export function getCateringRulesForZone(
    zone_id: string,
    fresh: boolean = false
) {
    if (!zone_id) return of([] as AttachedResourceRuleset[]);
    if (!RULE_REQUESTS[zone_id] || fresh)
        RULE_REQUESTS[zone_id] = showMetadata(zone_id, 'catering_config').pipe(
            map(
                (_) =>
                    (_.details instanceof Array
                        ? _.details
                        : []) as AttachedResourceRuleset[]
            ),
            catchError((e) => of([] as AttachedResourceRuleset[]))
        );
    return RULE_REQUESTS[zone_id];
}

export function cateringItemAvailable(
    item: CateringItem,
    rules: AttachedResourceRuleset[],
    event: CalendarEvent
) {
    let is_available = true;
    for (const rule of rules) {
        if (
            item.category === rule.name ||
            item.tags.includes(rule.name) ||
            event.resources.find((_) => _.zones.includes(rule.name)) ||
            event.space?.zones.includes(rule.name) ||
            rule.name === '*'
        ) {
            let matches = 0;
            for (const condition of rule.rules) {
                const date = new Date(event.date);
                switch (condition[0]) {
                    case 'is_before':
                        matches += isBefore(
                            Date.now(),
                            subHours(date, condition[1])
                        )
                            ? 1
                            : 0;
                        break;
                    case 'within_hours':
                        matches += isAfter(
                            Date.now(),
                            subHours(date, condition[1])
                        )
                            ? 1
                            : 0;
                        break;
                    case 'after_hour':
                        matches += isAfter(date, setHours(date, condition[1]))
                            ? 1
                            : 0;
                        break;
                    case 'before_hour':
                        matches += isBefore(date, setHours(date, condition[1]))
                            ? 1
                            : 0;
                        break;
                    case 'min_length':
                        matches +=
                            event.duration >= stringToMinutes(condition[1])
                                ? 1
                                : 0;
                        break;
                    case 'max_length':
                        matches +=
                            event.duration <= stringToMinutes(condition[1])
                                ? 1
                                : 0;
                        break;
                    case 'visitor_type':
                        matches +=
                            event.ext('visitor_type') === condition[1] ? 1 : 0;
                        break;
                    default:
                        matches += 1;
                }
            }
            is_available = matches >= rule.rules.length;
        }
    }
    return is_available;
}
