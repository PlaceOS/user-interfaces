import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { LockersReportListComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-list.component';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

import { captureDownloads } from '../download-capture.helper';

describe('LockersReportListComponent', () => {
    let spectator: Spectator<LockersReportListComponent>;
    let downloads: ReturnType<typeof captureDownloads>;
    let bookings: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: LockersReportListComponent,
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
        bookings = signal([
            {
                asset_name: 'Locker A',
                date: 200,
                duration: 60,
                all_day: false,
                user_name: 'Bob',
                user_email: 'bob@x',
                checked_in: true,
                extension_data: { tags: ['secure'], self_registered: true },
                tags: [],
                deleted: false,
                status: 'approved',
            },
            {
                asset_id: 'L2',
                date: 100,
                duration: 13 * 60,
                all_day: false,
                user_email: 'z@x',
                checked_in: false,
                extension_data: {},
                tags: ['locker'],
                deleted: true,
                status: 'approved',
            },
        ]);
        spectator = createComponent({
            providers: [
                { provide: LockersReportService, useValue: { bookings } },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should sort rows by booking date ascending', () => {
        const rows = spectator.component.lockers_bookings();
        expect(rows.map((r) => r.lockers_name)).toEqual(['L2', 'Locker A']);
    });

    it('should resolve locker name, host, type and status per booking', () => {
        const rows = spectator.component.lockers_bookings();
        const locker_a = rows.find((r) => r.lockers_name === 'Locker A');
        expect(locker_a).toEqual(
            expect.objectContaining({
                host: 'Bob',
                type: 'secure',
                status: 'Approved',
                checked_in: 'COMMON.YES',
            }),
        );
        const locker_two = rows.find((r) => r.lockers_name === 'L2');
        expect(locker_two).toEqual(
            expect.objectContaining({
                host: 'z@x',
                type: 'locker',
                status: 'Cancelled',
                checked_in: 'COMMON.NO',
            }),
        );
    });

    it('should download the locker bookings table on request', async () => {
        await spectator.component.download();
        expect(downloads.filename).toBe('report-lockers-daily-usage.csv');
    });
});
