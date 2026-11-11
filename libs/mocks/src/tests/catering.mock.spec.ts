import { CalendarEvent, CateringOrder } from '@placeos/common';

import {
    MOCK_BOOKINGS,
    MOCK_CATERING_BOOKINGS,
} from '../lib/api/bookings.data';
import { MOCK_EVENTS } from '../lib/api/events.data';

describe('mock catering orders', () => {
    const catered = MOCK_EVENTS.filter(
        (event) => event.extension_data.catering.length > 0,
    );

    it('adds orders to some events', () => {
        expect(catered.length).toBeGreaterThan(0);
        expect(catered.length).toBeLessThan(MOCK_EVENTS.length);
    });

    it('gives event orders that the catering apps can read', () => {
        for (const data of catered.slice(0, 200)) {
            const event = new CalendarEvent(data);
            const orders = event.valid_catering;
            // Orders after the event end, or items of another caterer, drop out
            expect(orders.length).toBe(data.extension_data.catering.length);
            for (const [i, order] of orders.entries()) {
                const raw = data.extension_data.catering[i];
                expect(order.items.length).toBe(raw.items.length);
                expect(order.event_id).toBe(data.id);
            }
        }
    });

    it('makes one booking for each event order', () => {
        const orders = catered.flatMap((e) => e.extension_data.catering);
        expect(MOCK_CATERING_BOOKINGS.length).toBe(orders.length);
        // The booking endpoints find bookings by ID
        const ids = [...MOCK_BOOKINGS, ...MOCK_CATERING_BOOKINGS].map(
            (b) => b.id,
        );
        expect(new Set(ids).size).toBe(ids.length);
        for (const booking of MOCK_CATERING_BOOKINGS.slice(0, 200)) {
            const event = MOCK_EVENTS.find(
                (e) => e.id === booking.linked_event.id,
            );
            const { details } = booking.extension_data;
            expect(
                event.extension_data.catering.map((order) => order.id),
            ).toContain(details.id);
            expect(booking.zones).toEqual(event.system.zones);
            const order = new CateringOrder(details);
            expect(order.items.length).toBe(details.items.length);
        }
    });
});
