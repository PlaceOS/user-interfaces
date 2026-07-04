import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { LockersReportDailyUsageComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-daily-usage.component';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
}));
import { downloadFile } from '@placeos/common';

describe('LockersReportDailyUsageComponent', () => {
    let spectator: Spectator<LockersReportDailyUsageComponent>;
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

    beforeEach(() => {
        (downloadFile as jest.Mock).mockClear();
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
        expect(downloadFile).toHaveBeenCalledWith(
            'report-lockers-daily-usage.csv',
            expect.any(String),
        );
    });
});
