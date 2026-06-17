import { Injector, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import {
    AssetGroup,
    CalendarEvent,
    PlaceAsset,
    PlaceAssetCategory,
    PlaceAssetPurchaseOrder,
    SignalFormRef,
    stringToMinutes,
} from '@placeos/common';
import { AttachedResourceRuleset } from '@placeos/components';
import { showMetadata } from '@placeos/ts-client';
import { isAfter, isBefore, setHours, subHours } from 'date-fns';

export function generateAssetCategoryForm(
    category: Partial<PlaceAssetCategory> = {},
    injector?: Injector,
): SignalFormRef<{
    id: string;
    name: string;
    parent_category_id: string;
}> {
    const model = signal({
        id: category.id || '',
        name: category.name || '',
        parent_category_id: category.parent_category_id || '',
    });
    const ref_form = form(model, (p) => required(p.name), {
        injector,
    });
    return { model, form: ref_form };
}

export function generateAssetPurchaseOrderForm(
    order: Partial<PlaceAssetPurchaseOrder> = {},
    injector?: Injector,
): SignalFormRef<{
    id: string;
    purchase_order_number: string;
    invoice_number: string;
    unit_price: number;
    purchase_date: number | null;
    expected_service_start_date: number | null;
    expected_service_end_date: number | null;
}> {
    const model = signal({
        id: order.id || '',
        purchase_order_number: order.purchase_order_number || '',
        invoice_number: order.invoice_number || '',
        unit_price: order.unit_price || 0,
        purchase_date: order.purchase_date ? order.purchase_date * 1000 : null,
        expected_service_start_date: order.expected_service_start_date
            ? order.expected_service_start_date * 1000
            : null,
        expected_service_end_date: order.expected_service_end_date
            ? order.expected_service_end_date * 1000
            : null,
    });
    const ref_form = form(model, (p) => required(p.purchase_order_number), {
        injector,
    });
    return { model, form: ref_form };
}

export function generateAssetGroupForm(
    group: Partial<AssetGroup> = {},
    injector?: Injector,
): SignalFormRef<{
    id: string;
    category_id: string;
    images: string[];
    brand: string;
    name: string;
    description: string;
}> {
    const model = signal({
        id: group.id || '',
        category_id: group.category_id || '',
        images: [...(group.images || [])],
        brand: group.brand || '',
        name: group.name || '',
        description: group.description || '',
    });
    const ref_form = form(
        model,
        (p) => {
            required(p.category_id);
            required(p.name);
        },
        { injector },
    );
    return { model, form: ref_form };
}

export function generateAssetForm(
    asset: Partial<PlaceAsset> = {},
    injector?: Injector,
): SignalFormRef<{
    id: string;
    asset_type_id: string;
    name: string;
    serial_number: string;
    barcode: string;
    identifier: string;
    other_data: Record<string, any>;
    purchase_order_id: string;
}> {
    const model = signal({
        id: asset.id || '',
        asset_type_id: asset.asset_type_id || '',
        name: asset.name || '',
        serial_number: asset.serial_number || '',
        barcode: asset.barcode || '',
        identifier: asset.identifier || '',
        other_data: asset.other_data || {},
        purchase_order_id: asset.purchase_order_id || '',
    });
    const ref_form = form(model, (p) => required(p.asset_type_id), {
        injector,
    });
    return { model, form: ref_form };
}

const RULE_REQUESTS: Record<string, Promise<AttachedResourceRuleset[]>> = {};

export function getAssetRulesForZone(zone_id: string, fresh: boolean = false) {
    if (!zone_id) return Promise.resolve([] as AttachedResourceRuleset[]);
    if (!RULE_REQUESTS[zone_id] || fresh)
        RULE_REQUESTS[zone_id] = showMetadata(zone_id, 'assets_config')
            .then(
                (_) =>
                    (_.details instanceof Array
                        ? _.details
                        : []) as AttachedResourceRuleset[],
            )
            .catch(() => [] as AttachedResourceRuleset[]);
    return RULE_REQUESTS[zone_id];
}

export function assetAvailable(
    item: AssetGroup,
    rules: AttachedResourceRuleset[],
    event: CalendarEvent,
): boolean {
    const current_date = Date.now();
    const event_date = new Date(event.date);

    const isRuleMatch = (rule: AttachedResourceRuleset): boolean =>
        item.name === rule.name ||
        item.category?.name.includes(rule.name) ||
        event.resources?.some((resource) =>
            resource.zones?.includes(rule.name),
        ) ||
        event.space?.zones?.includes(rule.name) ||
        rule.name === '*';

    const countMatches = (rule: AttachedResourceRuleset): number =>
        rule.rules.reduce((matches, condition) => {
            switch (condition[0]) {
                case 'is_before':
                    return (
                        matches +
                        (isBefore(
                            current_date,
                            subHours(event_date, condition[1]),
                        )
                            ? 1
                            : 0)
                    );
                case 'within_hours':
                    return (
                        matches +
                        (isAfter(
                            current_date,
                            subHours(event_date, condition[1]),
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
                            setHours(event_date, condition[1]),
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
