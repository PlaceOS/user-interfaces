import { isAfter, isBefore, setHours, subHours } from 'date-fns';

import { stringToMinutes } from 'libs/events/src/lib/helpers';
import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { CateringItem } from './catering-item.class';
import { CateringRuleset } from './catering.interfaces';
import { Observable, of } from 'rxjs';
import { showMetadata } from '@placeos/ts-client';
import { catchError, map } from 'rxjs/operators';

const RULE_REQUESTS: Record<string, Observable<CateringRuleset[]>> = {};

export function getCateringRulesForZone(zone_id: string, fresh: boolean = false) {
    if (!zone_id) return of([] as CateringRuleset[]);
    if (!RULE_REQUESTS[zone_id] || fresh)
        RULE_REQUESTS[zone_id] = showMetadata(zone_id, 'catering_config').pipe(
            map((_) => _.details as CateringRuleset[]),
            catchError((e) => of([] as CateringRuleset[]))
        );
    return RULE_REQUESTS[zone_id];
}

export function cateringItemAvailable(
    item: CateringItem,
    rules: CateringRuleset[],
    event: CalendarEvent
) {
    let is_available = true;
    for (const rule of rules) {
        if (
            item.category === rule.name ||
            item.tags.includes(rule.name) ||
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
                        matches++;
                }
            }
            is_available = matches >= rule.rules.length;
        }
    }
    return is_available;
}
