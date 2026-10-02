import { i18n } from 'libs/common/src/lib/locale.service';
import type { CateringOrderStatus } from './catering.interfaces';

/** Display details for a catering order status */
export interface CateringStatusOption {
    id: CateringOrderStatus;
    name: string;
    icon: { class: string };
    colour: string;
}

export function statusList(): CateringStatusOption[] {
    return [
        {
            id: 'pending',
            name: i18n('CATERING.STATUS_PENDING'),
            icon: { class: 'custom-pending' },
            colour: '#ccc',
        },
        {
            id: 'accepted',
            name: i18n('CATERING.STATUS_ACCEPTED'),
            icon: { class: 'custom-accepted' },
            colour: '#3996B6',
        },
        {
            id: 'preparing',
            name: i18n('CATERING.STATUS_PREPARING'),
            icon: { class: 'custom-preparing' },
            colour: '#E7536B',
        },
        {
            id: 'ready',
            name: i18n('CATERING.STATUS_READY'),
            icon: { class: 'custom-ready' },
            colour: '#FFD028',
        },
        {
            id: 'delivered',
            name: i18n('CATERING.STATUS_DELIVERED'),
            icon: { class: 'custom-delivered' },
            colour: '#75BB43',
        },
        {
            id: 'cancelled',
            name: i18n('CATERING.STATUS_CANCELLED'),
            icon: { class: 'custom-cancelled' },
            colour: '#747474',
        },
    ];
}

export const CATERING_STATUSES = statusList();

/** Order of the steps that an order goes through before delivery */
const STATUS_STEPS: CateringOrderStatus[] = [
    'pending',
    'accepted',
    'preparing',
    'ready',
    'delivered',
];

/** Minutes before delivery when an order shows as due soon */
export const ORDER_DUE_SOON_MINUTES = 30;

/** Status filter for the order list. Active hides delivered and cancelled orders. */
export type CateringStatusFilter = 'all' | 'active' | CateringOrderStatus;

/** Whether no more work is needed for an order with the given status */
export function isOrderDone(status: CateringOrderStatus) {
    return status === 'delivered' || status === 'cancelled';
}

/** Next status in the delivery steps. Null when the order is done. */
export function nextOrderStatus(
    status: CateringOrderStatus,
): CateringOrderStatus | null {
    if (isOrderDone(status)) return null;
    const index = STATUS_STEPS.indexOf(status);
    return STATUS_STEPS[index + 1] || null;
}

/** Whether an order status matches the status filter */
export function matchesStatusFilter(
    status: CateringOrderStatus,
    filter: CateringStatusFilter = 'all',
) {
    if (filter === 'all') return true;
    if (filter === 'active') return !isOrderDone(status);
    return status === filter;
}

/**
 * How urgent an order is at the given time.
 * Orders that are done are never urgent.
 * @param deliver_at Delivery time of the order in ms
 * @param now Current time in ms
 */
export function orderUrgency(
    status: CateringOrderStatus,
    deliver_at: number,
    now: number,
): 'overdue' | 'soon' | null {
    if (isOrderDone(status)) return null;
    if (deliver_at < now) return 'overdue';
    if (deliver_at - now <= ORDER_DUE_SOON_MINUTES * 60 * 1000) return 'soon';
    return null;
}
