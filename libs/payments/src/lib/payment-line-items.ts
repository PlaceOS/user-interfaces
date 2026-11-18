import { BookingType, CateringOrder } from '@placeos/common';
import { PaymentLineItemRequest, PaymentResourceType } from './payment.types';

/** Booking types that can have a price */
const PAYABLE_BOOKING_TYPES: Partial<Record<BookingType, PaymentResourceType>> =
    {
        desk: 'desk',
        parking: 'parking',
        locker: 'locker',
        room: 'room',
    };

/** Resource of a booking, e.g. a desk or a space */
export interface PayableResource {
    id: string;
    name?: string;
    /** Level or building of the resource */
    zone_id?: string;
}

export interface PayableBooking {
    type: BookingType;
    resources: PayableResource[];
    /** Start of the booking in milliseconds */
    date: number;
    /** Length of the booking in minutes */
    duration: number;
}

/**
 * Line items for a booking, one for each resource. Empty for booking types
 * that cannot have a price, e.g. visitors.
 */
export function bookingLineItems(
    booking: PayableBooking,
): PaymentLineItemRequest[] {
    const resource_type = PAYABLE_BOOKING_TYPES[booking.type];
    if (!resource_type) return [];
    return booking.resources
        .filter((resource) => !!resource?.id)
        .map((resource) => ({
            resource_type,
            resource_id: resource.id,
            zone_id: resource.zone_id,
            name: resource.name || resource.id,
            start: Math.floor(booking.date / 1000),
            duration: booking.duration,
            quantity: 1,
        }));
}

/**
 * Line items for the items of catering orders. The driver prices each item
 * from the catering menu of the zone.
 */
export function cateringLineItems(
    orders: readonly CateringOrder[],
    zone_id: string,
): PaymentLineItemRequest[] {
    return orders.flatMap((order) =>
        order.items
            .filter((item) => item.quantity > 0)
            .map((item) => ({
                resource_type: 'catering' as const,
                resource_id: item.id,
                zone_id,
                name: item.name,
                quantity: item.quantity,
                option_ids: item.option_list.map((option) => option.id),
            })),
    );
}
