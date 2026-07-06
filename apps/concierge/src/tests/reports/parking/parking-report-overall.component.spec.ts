import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { ParkingReportOverallComponent } from 'apps/concierge/src/app/reports/parking/parking-report-overall.component';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';

describe('ParkingReportOverallComponent', () => {
    let spectator: Spectator<ParkingReportOverallComponent>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let options: ReturnType<typeof signal<any>>;

    const monday = new Date('2026-04-06T09:00:00').valueOf();
    const friday = new Date('2026-04-10T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ParkingReportOverallComponent,
        providers: [
            {
                provide: ParkingReportService,
                useValue: {
                    bookings: (bookings = signal<any[]>([])),
                    options: (options = signal<any>({})),
                },
            },
        ],
    });

    beforeEach(() => {
        bookings = signal<any[]>([]);
        options = signal<any>({});
        spectator = createComponent({
            providers: [
                {
                    provide: ParkingReportService,
                    useValue: { bookings, options },
                },
            ],
        });
    });

    it('should split bookings into active, rejected and cancelled counts', () => {
        bookings.set([
            { asset_id: 'a', duration: 60 },
            { asset_id: 'b', duration: 120, status: 'cancelled' },
            { asset_id: 'c', duration: 60, deleted: true },
            { asset_id: 'd', duration: 60, rejected: true },
        ]);
        expect(spectator.component.total_count()).toBe(4);
        // deleted -> cancelled bucket, rejected/status cancelled -> rejected bucket
        expect(spectator.component.deleted_count()).toBe(1);
        expect(spectator.component.cancelled_count()).toBe(2);
        expect(spectator.component.active_count()).toBe(1);
    });

    it('should count a single weekday as one business day', () => {
        options.set({ start: monday, end: monday });
        expect(spectator.component.business_days()).toBe(1);
    });

    it('should count a full working week as five business days', () => {
        options.set({ start: monday, end: friday });
        expect(spectator.component.business_days()).toBe(5);
    });

    it('should render totals into the overall summary', async () => {
        bookings.set([
            { asset_id: 'a', duration: 60 },
            { asset_id: 'b', duration: 60 },
        ]);
        options.set({ start: monday, end: monday });
        spectator.detectChanges();
        await expect(spectator.fixture.nativeElement.textContent).toContain('2');
    });

    it('should produce an average length string from active bookings', () => {
        bookings.set([
            { asset_id: 'a', duration: 60 },
            { asset_id: 'b', duration: 120 },
        ]);
        expect(typeof spectator.component.avg_length()).toBe('string');
        expect(spectator.component.avg_length().length).toBeGreaterThan(0);
    });
});
