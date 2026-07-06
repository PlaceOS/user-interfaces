import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { signal, WritableSignal } from '@angular/core';

import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';
import { captureDownloads } from '../download-capture.helper';

function bookingWithOrder(date: number, overrides: any = {}) {
    // A plain (non-CalendarEvent) booking routes through the CateringOrder
    // constructor branch of the state service.
    return {
        extension_data: {
            details: {
                caterer: 'cafe',
                status: overrides.status || 'accepted',
                items: overrides.items || [
                    {
                        id: 'coffee',
                        caterer: 'cafe',
                        quantity: 2,
                        unit_price: 500,
                    },
                ],
            },
        },
        linked_event: { date },
    };
}

describe('CateringReportStateService', () => {
    let spectator: SpectatorService<CateringReportStateService>;
    let options: WritableSignal<any>;
    let bookings: WritableSignal<any[]>;
    let downloads: ReturnType<typeof captureDownloads>;
    const in_range = new Date('2026-04-06T10:00:00').valueOf();
    const createService = createServiceFactory({
        service: CateringReportStateService,
        providers: [
            {
                provide: ReportsStateService,
                useFactory: () => ({ options, bookings }),
            },
        ],
    });

    beforeEach(() => {
        options = signal({
            start: new Date('2026-04-06T00:00:00').valueOf(),
            end: new Date('2026-04-06T23:59:59').valueOf(),
        });
        bookings = signal<any[]>([]);
        downloads = captureDownloads();
        spectator = createService();
    });

    afterEach(() => downloads.restore());

    it('should collect in-range, non-cancelled catering orders', () => {
        const out_of_range = new Date('2026-04-20T10:00:00').valueOf();
        bookings.set([
            bookingWithOrder(in_range),
            bookingWithOrder(out_of_range),
            bookingWithOrder(in_range, { status: 'cancelled' }),
        ]);

        const orders = spectator.service.catering_orders();
        expect(orders.length).toBe(1);
        expect(orders[0].total_cost).toBe(1000);
    });

    it('should aggregate item quantities across orders by custom id', () => {
        bookings.set([
            bookingWithOrder(in_range),
            bookingWithOrder(in_range),
        ]);

        const items = spectator.service.catering_items();
        expect(items.length).toBe(1);
        expect(items[0].quantity).toBe(4);
    });

    it('should compute summary statistics for the selected period', () => {
        bookings.set([
            bookingWithOrder(in_range),
            bookingWithOrder(in_range, {
                items: [
                    {
                        id: 'tea',
                        caterer: 'cafe',
                        quantity: 1,
                        unit_price: 300,
                    },
                ],
            }),
        ]);

        const stats = spectator.service.stats();
        expect(stats.order_count).toBe(2);
        expect(stats.unique_items).toBe(2);
        expect(stats.item_count).toBe(3);
        expect(stats.total_cost).toBe(1300);
        expect(stats.avg_cost).toBe(650);
    });

    it('should export catering orders as a downloadable file', async () => {
        bookings.set([bookingWithOrder(in_range)]);

        await spectator.service.downloadOrders();

        expect(downloads.filename).toBe('catering-orders.tsv');
    });
});
