import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { AssetReportOverallComponent } from 'apps/concierge/src/app/reports/assets/asset-report-overall.component';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';

describe('AssetReportOverallComponent', () => {
    let spectator: Spectator<AssetReportOverallComponent>;
    let stats: ReturnType<typeof signal<any>>;
    let options: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: AssetReportOverallComponent,
        providers: [
            MockProvider(AssetsReportService, {} as any),
        ],
    });

    beforeEach(() => {
        stats = signal({
            total_count: 10,
            active_count: 6,
            cancelled_count: 3,
            deleted_count: 1,
            booking_count: 6,
            events: [{ duration: 60 }, { duration: 120 }],
        });
        options = signal({
            start: new Date('2026-04-06T09:00:00').valueOf(),
            end: new Date('2026-04-06T17:00:00').valueOf(),
        });
        spectator = createComponent({
            providers: [
                {
                    provide: AssetsReportService,
                    useValue: { stats, options },
                },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose booking status counts from stats', () => {
        expect(spectator.component.total_count()).toBe(10);
        expect(spectator.component.active_count()).toBe(6);
        expect(spectator.component.cancelled_count()).toBe(3);
        expect(spectator.component.deleted_count()).toBe(1);
    });

    it('should fall back to booking_count when explicit counts are missing', () => {
        stats.set({ booking_count: 4 });
        expect(spectator.component.total_count()).toBe(4);
        expect(spectator.component.active_count()).toBe(4);
        expect(spectator.component.cancelled_count()).toBe(0);
        expect(spectator.component.deleted_count()).toBe(0);
    });

    it('should compute at least one business day for a single weekday range', () => {
        expect(spectator.component.business_days()).toBe(1);
    });

    it('should compute the average event length from event durations', () => {
        // (60 + 120) / 2 => 90 minutes
        expect(spectator.component.avg_length()).toContain('90');
    });
});
