import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetReportDailyUsageComponent } from 'apps/concierge/src/app/reports/assets/asset-report-daily-usage.component';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
}));
import { downloadFile } from '@placeos/common';

describe('AssetReportDailyUsageComponent', () => {
    let spectator: Spectator<AssetReportDailyUsageComponent>;
    let daily_stats: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: AssetReportDailyUsageComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
            MockComponent(ReportMetricGuideComponent),
        ],
        imports: [MatTooltipModule],
        providers: [MockProvider(AssetsReportService, {} as any)],
    });

    beforeEach(() => {
        (downloadFile as jest.Mock).mockClear();
        daily_stats = signal({
            '2026-04-06': {
                all_bookings: [
                    { asset_ids: ['a1'], deleted: false, status: 'approved' },
                    { asset_ids: ['a1'], deleted: false, status: 'cancelled' },
                    { asset_ids: ['a2'], deleted: true, status: 'approved' },
                ],
                bookings: [
                    { asset_ids: ['a1'], deleted: false, status: 'approved' },
                ],
                products: [
                    { name: 'Laptop', assets: [{ id: 'a1' }, { id: 'a2' }] },
                    { name: 'Unused', assets: [{ id: 'a9' }] },
                ],
            },
        });
        spectator = createComponent({
            providers: [
                { provide: AssetsReportService, useValue: { daily_stats } },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should only include products with bookings on the day', () => {
        const rows = spectator.component.daily_products();
        expect(rows.map((r) => r.name)).toEqual(['Laptop']);
    });

    it('should split active, cancelled and deleted counts per product day', () => {
        const [row] = spectator.component.daily_products();
        expect(row).toEqual(
            expect.objectContaining({
                name: 'Laptop',
                date: '2026-04-06',
                booking_count: 3,
                active_count: 1,
                cancelled_count: 1,
                deleted_count: 1,
                booked_count: 1,
                asset_count: 2,
            }),
        );
    });

    it('should format percentages using booking_count as the total', () => {
        expect(spectator.component.formatPercent(1, 4)).toBe('1 (25%)');
    });

    it('should download the daily usage table on request', async () => {
        await spectator.component.download();
        expect(downloadFile).toHaveBeenCalledWith(
            'report-assets-daily-usage.csv',
            expect.any(String),
        );
    });
});
