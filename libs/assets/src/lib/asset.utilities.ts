import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    AssetPurchaseOrder,
} from './asset.class';
import { flatten, stringToMinutes } from '@placeos/common';
import { AttachedResourceRuleset } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { isAfter, isBefore, setHours, subHours } from 'date-fns';
import { catchError, map } from 'rxjs/operators';
import { showMetadata } from '@placeos/ts-client';
import { Observable, of } from 'rxjs';
import { AssetRequest } from './asset-request.class';

export function generateAssetCategoryForm(category: AssetCategory = {} as any) {
    return new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name || '', [Validators.required]),
        parent_category_id: new FormControl(category.parent_category_id),
    });
}

export function generateAssetPurchaseOrderForm(
    order: AssetPurchaseOrder = {} as any
) {
    return new FormGroup({
        id: new FormControl(order.id),
        order_number: new FormControl(
            order.order_number || (order as any).purchase_order_number || '',
            [Validators.required]
        ),
        invoice_number: new FormControl(order.invoice_number || ''),
        unit_price: new FormControl(order.unit_price || 0),
        purchase_date: new FormControl(order.purchase_date * 1000 || null),
        expected_service_start_date: new FormControl(
            order.expected_service_start_date * 1000 ||
                (order as any).depreciation_start_date ||
                null
        ),
        expected_service_end_date: new FormControl(
            order.expected_service_end_date * 1000 ||
                (order as any).depreciation_end_date ||
                null
        ),
    });
}

export function generateAssetGroupForm(group: AssetGroup = new AssetGroup()) {
    return new FormGroup({
        id: new FormControl(group.id),
        category_id: new FormControl(group.category_id || '', [
            Validators.required,
        ]),
        images: new FormControl(group.images || []),
        brand: new FormControl(group.brand || ''),
        name: new FormControl(group.name || '', [Validators.required]),
        description: new FormControl(group.description || ''),
    });
}

export function generateAssetForm(asset: Asset = new Asset()) {
    return new FormGroup({
        id: new FormControl(asset.id),
        type_id: new FormControl(asset.type_id || '', [Validators.required]),
        description: new FormControl(asset.description || ''),
        serial_number: new FormControl(asset.serial_number || ''),
        barcode: new FormControl(asset.barcode || ''),
        identifier: new FormControl(asset.identifier || ''),
        other_data: new FormControl(asset.other_data || {}),
        purchase_order_id: new FormControl(asset.purchase_order_id),
    });
}

const RULE_REQUESTS: Record<string, Observable<AttachedResourceRuleset[]>> = {};

export function getAssetRulesForZone(zone_id: string, fresh: boolean = false) {
    if (!zone_id) return of([] as AttachedResourceRuleset[]);
    if (!RULE_REQUESTS[zone_id] || fresh)
        RULE_REQUESTS[zone_id] = showMetadata(zone_id, 'assets_config').pipe(
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

export function assetAvailable(
    item: AssetGroup,
    rules: AttachedResourceRuleset[],
    event: CalendarEvent
): boolean {
    const current_date = Date.now();
    const event_date = new Date(event.date);

    const isRuleMatch = (rule: AttachedResourceRuleset): boolean =>
        item.name === rule.name ||
        item.category.name.includes(rule.name) ||
        event.resources.some((resource) =>
            resource.zones.includes(rule.name)
        ) ||
        event.space?.zones.includes(rule.name) ||
        rule.name === '*';

    const countMatches = (rule: AttachedResourceRuleset): number =>
        rule.rules.reduce((matches, condition) => {
            switch (condition[0]) {
                case 'is_before':
                    return (
                        matches +
                        (isBefore(
                            current_date,
                            subHours(event_date, condition[1])
                        )
                            ? 1
                            : 0)
                    );
                case 'within_hours':
                    return (
                        matches +
                        (isAfter(
                            current_date,
                            subHours(event_date, condition[1])
                        )
                            ? 1
                            : 0)
                    );
                case 'after_hour':
                    return (
                        matches +
                        (isAfter(event_date, setHours(event_date, condition[1]))
                            ? 1
                            : 0)
                    );
                case 'before_hour':
                    return (
                        matches +
                        (isBefore(
                            event_date,
                            setHours(event_date, condition[1])
                        )
                            ? 1
                            : 0)
                    );
                case 'min_length':
                    return (
                        matches +
                        (event.duration >= stringToMinutes(condition[1])
                            ? 1
                            : 0)
                    );
                case 'max_length':
                    return (
                        matches +
                        (event.duration <= stringToMinutes(condition[1])
                            ? 1
                            : 0)
                    );
                case 'visitor_type':
                    return (
                        matches +
                        (event.ext('visitor_type') === condition[1] ? 1 : 0)
                    );
                default:
                    return matches + 1;
            }
        }, 0);

    for (const rule of rules) {
        if (isRuleMatch(rule)) {
            if (countMatches(rule) < rule.rules.length) {
                return false;
            }
        }
    }
    return true;
}
