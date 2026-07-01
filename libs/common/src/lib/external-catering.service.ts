import { inject, Injectable } from '@angular/core';
import { format } from 'date-fns';

import { OrganisationService } from './org/organisation.service';
import { SettingsService } from './settings.service';
import { CalendarEvent } from './types/event.class';
import { CateringItem, CateringOrder } from './types/catering.class';
import { currentUser } from './user-state';

/** Binding name used to resolve the external `Catering` driver module */
const EXTERNAL_CATERING_BINDING = 'catering';

/** Subset of the external `Product` shape used by the frontend */
interface ExternalProduct {
    uuid: string;
    name: string;
    price: number | null;
    description: string | null;
    status: string | null;
    product_images: { medium_image_url?: string; file_url?: string }[] | null;
    product_categories: { name: string }[] | null;
    dietaries: { code: string; name: string }[] | null;
    supplier: { name: string } | null;
}

interface ExternalProductsResponse {
    items: ExternalProduct[];
    next_page: string | null;
}

/** Subset of the external `Customer` shape used by the frontend */
interface ExternalCustomer {
    uuid: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
}

/** Reference data linking a local catering order to its external counterpart */
export interface ExternalOrderReference {
    /** external catering customer record UUID for the booker */
    customer_uuid: string;
    /** Customer display name sent with the order */
    customer_name: string;
    /** Purchase order number sent to the external system (the PlaceOS event id) */
    purchase_order_number: string;
    /** Raw response returned by the external `create_external_order` call */
    response: unknown;
}

interface ExternalOrderItem {
    product_name: string;
    price: number;
    quantity: number;
    note?: string;
}

/**
 * Integration with the external catering platform via the PlaceOS `Catering` driver.
 *
 * When enabled (`app.catering.backend === 'external'`) this replaces the native
 * PlaceOS catering system: the booking menu is sourced from external `products()`
 * and orders are placed through `match_or_create_customer` + `create_external_order`.
 */
@Injectable({
    providedIn: 'root',
})
export class ExternalCateringService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    /** Whether the external backend should be used instead of native catering */
    public get enabled(): boolean {
        return this._settings.get('app.catering.backend') === 'external';
    }

    private _module() {
        const mod = this._org.module(EXTERNAL_CATERING_BINDING, 'Catering');
        if (!mod) {
            throw new Error(
                'External catering enabled but no `catering` module binding is configured',
            );
        }
        return mod;
    }

    /** Load the full catering menu from the external catering driver, mapped to native `CateringItem`s */
    public async loadMenu(): Promise<CateringItem[]> {
        const mod = this._module();
        const items: CateringItem[] = [];
        let page = 1;
        // ponytail: cap at 50 pages, matches the driver's own 100-page customer cap
        while (page <= 50) {
            const response = await mod
                .execute<ExternalProductsResponse>('products', [page])
                .catch(() => null);
            const products = response?.items || [];
            for (const product of products) {
                if (product.status && product.status !== 'active') continue;
                items.push(toCateringItem(product));
            }
            if (!response?.next_page || !products.length) break;
            page += 1;
        }
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Place each catering order in the event against the external catering platform.
     *
     * Returns a external reference per placed order (aligned to the filtered list
     * of orders that had items) so the caller can store local booking records
     * that point back at the external order.
     */
    public async placeOrders(
        event: CalendarEvent,
        orders: CateringOrder[],
    ): Promise<{ order: CateringOrder; reference: ExternalOrderReference }[]> {
        const valid = (orders || []).filter((order) => order.items.length);
        if (!valid.length) return [];
        const mod = this._module();
        const user = currentUser();
        // Idempotently resolve the external catering customer record for the booker.
        // `match_or_create_customer(customer)` takes a single object param, so
        // it is passed as the sole positional exec argument.
        const customer = await mod.execute<ExternalCustomer>(
            'match_or_create_customer',
            [
                {
                    email: user?.email || '',
                    first_name: user?.first_name || user?.name || '',
                    last_name: user?.last_name || '',
                },
            ],
        );
        const customer_name =
            [customer?.first_name, customer?.last_name]
                .filter((_) => !!_)
                .join(' ')
                .trim() ||
            customer?.email ||
            user?.name ||
            '';
        const delivery_address =
            event.space?.display_name ||
            event.space?.name ||
            this._org.building?.display_name ||
            this._org.building?.name ||
            '';
        const placed: { order: CateringOrder; reference: ExternalOrderReference }[] =
            [];
        for (const order of valid) {
            const order_items: ExternalOrderItem[] = order.items.map((item) => ({
                product_name: item.name,
                price: centsToCurrency(item.unit_price_with_options),
                quantity: item.quantity,
            }));
            // `create_external_order` takes POSITIONAL arguments (the first
            // param is the purchase_order_number string) — passing a single
            // object makes the driver fail to parse. Order matches the driver
            // integration guide: required fields first, then the optionals.
            const response = await mod.execute('create_external_order', [
                event.id, // purchase_order_number
                customer_name, // customer_name
                delivery_address, // delivery_address
                format(order.deliver_at, "yyyy-MM-dd'T'HH:mm:ss"), // delivery_datetime
                centsToCurrency(order.total_cost), // grand_total
                order_items, // order_items
                '', // company_name
                '', // phone_number
                event.attendees?.length || 0, // number_of_guests
                0, // delivery_fee
                0, // discount
                order.notes || '', // delivery_instruction
            ]);
            placed.push({
                order,
                reference: {
                    customer_uuid: customer?.uuid || '',
                    customer_name,
                    purchase_order_number: event.id,
                    response,
                },
            });
        }
        return placed;
    }
}

/** External prices are in major currency units; native `CateringItem`s store cents */
function toCateringItem(product: ExternalProduct): CateringItem {
    return new CateringItem({
        id: product.uuid,
        name: product.name,
        category: product.product_categories?.[0]?.name || '',
        caterer: product.supplier?.name || '',
        description: product.description || '',
        unit_price: Math.round((product.price || 0) * 100),
        images: (product.product_images || [])
            .map((image) => image.medium_image_url || image.file_url || '')
            .filter((_) => !!_),
        tags: (product.dietaries || []).map((diet) => diet.name),
    });
}

function centsToCurrency(cents: number): number {
    return Math.round(cents) / 100;
}
