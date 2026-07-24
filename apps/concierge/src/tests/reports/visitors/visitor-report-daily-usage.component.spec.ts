import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { captureDownloads } from '../download-capture.helper';
import { VisitorReportDailyUsageComponent } from 'apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component';
import { VisitorsReportService } from 'apps/concierge/src/app/reports/visitors/visitors-report.service';

describe('VisitorReportDailyUsageComponent', () => {
    let spectator: Spectator<VisitorReportDailyUsageComponent>;
    let downloads: ReturnType<typeof captureDownloads>;
    let daily_stats: ReturnType<typeof signal<any>>;

    const day = new Date('2026-04-06T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: VisitorReportDailyUsageComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            {
                provide: VisitorsReportService,
                useValue: { daily_stats: (daily_stats = signal<any>({})) },
            },
        ],
    });

    afterEach(() => downloads.restore());

    beforeEach(() => {
        daily_stats = signal<any>({});
        downloads = captureDownloads();
        spectator = createComponent({
            providers: [
                { provide: VisitorsReportService, useValue: { daily_stats } },
            ],
        });
    });

    it('should count unique visitors and hosts per day', () => {
        daily_stats.set({
            '2026-04-06': {
                date: day,
                bookings: [
                    { asset_id: 'v1', user_email: 'a@x.com' },
                    { asset_id: 'v1', user_email: 'b@x.com' },
                    { asset_id: 'v2', user_email: 'b@x.com' },
                ],
            },
        });
        const [row] = spectator.component.daily_stats();
        expect(row.date).toBe('2026-04-06');
        expect(row.booking_count).toBe(2); // unique asset ids
        expect(row.host_count).toBe(2); // unique user emails
        expect(row.booked_count).toBe(3);
    });

    it('should export daily usage to a csv file', async () => {
        daily_stats.set({
            '2026-04-06': {
                date: day,
                bookings: [{ asset_id: 'v1', user_email: 'a@x.com' }],
            },
        });
        await spectator.component.download();
        expect(downloads.filename).toBe('report-visitors-daily-usage.csv');
    });
});
