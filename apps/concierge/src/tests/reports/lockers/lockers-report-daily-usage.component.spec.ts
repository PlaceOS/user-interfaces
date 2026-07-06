import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { LockersReportDailyUsageComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-daily-usage.component';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

import { captureDownloads } from '../download-capture.helper';

describe('LockersReportDailyUsageComponent', () => {
    let spectator: Spectator<LockersReportDailyUsageComponent>;
    let downloads: ReturnType<typeof captureDownloads>;
    let daily_stats: ReturnType<typeof signal<any>>;

    const day = new Date('2026-04-06T00:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: LockersReportDailyUsageComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
            MockComponent(ReportMetricGuideComponent),
        ],
        imports: [MatTooltipModule],
        providers: [MockProvider(LockersReportService, {} as any)],
    });

    afterEach(() => downloads.restore());

    beforeEach(() => {
        downloads = captureDownloads();
        daily_stats = signal({
            '2026-04-07': {
                date: day,
                bookings: [
                    { asset_id: 'l2', user_email: 'z@x', deleted: false },
                ],
            },
            '2026-04-06': {
                date: day,
                bookings: [
                    {
                        asset_id: 'l1',
                        user_email: 'a@x',
                        deleted: false,
                        status: 'approved',
                    },
                    {
                        asset_id: 'l1',
                        user_email: 'a@x',
                        deleted: false,
                        status: 'cancelled',
                    },
                    {
                        asset_id: 'l3',
                        user_email: 'b@x',
                        deleted: true,
                        status: 'approved',
                    },
                ],
            },
        });
        spectator = createComponent({
            providers: [
                { provide: LockersReportService, useValue: { daily_stats } },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should sort the daily rows by date ascending', () => {
        expect(spectator.component.daily_stats().map((r) => r.date)).toEqual([
            '2026-04-06',
            '2026-04-07',
        ]);
    });

    it('should count unique lockers, hosts and booking states per day', () => {
        const row = spectator.component
            .daily_stats()
            .find((r) => r.date === '2026-04-06');
        expect(row).toEqual({
            date: '2026-04-06',
            booking_count: 2,
            host_count: 2,
            active_count: 1,
            cancelled_count: 1,
            deleted_count: 1,
            booked_count: 3,
        });
    });

    it('should download the daily usage table on request', async () => {
        await spectator.component.download();
        expect(downloads.filename).toBe('report-lockers-daily-usage.csv');
    });
});
