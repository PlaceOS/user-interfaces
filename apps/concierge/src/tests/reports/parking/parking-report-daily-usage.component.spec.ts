import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent, SimpleTableComponent } from '@placeos/components';
import * as common_mod from '@placeos/common';
import { ParkingReportDailyUsageComponent } from 'apps/concierge/src/app/reports/parking/parking-report-daily-usage.component';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    jsonToCsv: jest.fn(() => 'csv-data'),
}));

describe('ParkingReportDailyUsageComponent', () => {
    let spectator: Spectator<ParkingReportDailyUsageComponent>;
    let daily_stats: ReturnType<typeof signal<any>>;

    const day = new Date('2026-04-06T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ParkingReportDailyUsageComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            {
                provide: ParkingReportService,
                useValue: { daily_stats: (daily_stats = signal<any>({})) },
            },
        ],
    });

    beforeEach(() => {
        daily_stats = signal<any>({});
        (common_mod.downloadFile as jest.Mock).mockClear();
        spectator = createComponent({
            providers: [
                { provide: ParkingReportService, useValue: { daily_stats } },
            ],
        });
    });

    it('should aggregate per-day booking statistics', () => {
        daily_stats.set({
            '2026-04-06': {
                date: day,
                bookings: [
                    { asset_id: 'bay-1', user_email: 'a@x.com' },
                    { asset_id: 'bay-1', user_email: 'b@x.com' },
                    {
                        asset_id: 'bay-2',
                        user_email: 'b@x.com',
                        status: 'cancelled',
                    },
                    { asset_id: 'bay-3', user_email: 'c@x.com', deleted: true },
                ],
            },
        });
        const [row] = spectator.component.daily_stats();
        expect(row.date).toBe('2026-04-06');
        expect(row.booking_count).toBe(3); // unique asset ids
        expect(row.host_count).toBe(3); // unique user emails
        expect(row.active_count).toBe(2); // not deleted, not cancelled
        expect(row.cancelled_count).toBe(1); // status cancelled, not deleted
        expect(row.deleted_count).toBe(1);
        expect(row.booked_count).toBe(4);
    });

    it('should sort day rows chronologically', () => {
        daily_stats.set({
            '2026-04-07': { date: day, bookings: [{ asset_id: 'a' }] },
            '2026-04-06': { date: day, bookings: [{ asset_id: 'b' }] },
        });
        expect(spectator.component.daily_stats().map((r) => r.date)).toEqual([
            '2026-04-06',
            '2026-04-07',
        ]);
    });

    it('should export daily usage with formatted percentages', async () => {
        daily_stats.set({
            '2026-04-06': {
                date: day,
                bookings: [
                    { asset_id: 'a', status: 'cancelled' },
                    { asset_id: 'b' },
                ],
            },
        });
        await spectator.component.download();
        expect(common_mod.downloadFile).toHaveBeenCalledWith(
            'report-parking-daily-usage.csv',
            'csv-data',
        );
    });
});
