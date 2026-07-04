import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetReportProductUsageComponent } from 'apps/concierge/src/app/reports/assets/asset-report-product-usage.component';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
}));
import { downloadFile } from '@placeos/common';

describe('AssetReportProductUsageComponent', () => {
    let spectator: Spectator<AssetReportProductUsageComponent>;
    let stats: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: AssetReportProductUsageComponent,
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
        stats = signal({
            bookings: [
                { asset_ids: ['a1', 'a2'] },
                { asset_ids: ['a3'] },
            ],
            products: [
                { name: 'Laptop', assets: [{ id: 'a1' }, { id: 'a2' }] },
                { name: 'Monitor', assets: [{ id: 'a3' }] },
                { name: 'Unused', assets: [{ id: 'a9' }] },
            ],
        });
        spectator = createComponent({
            providers: [{ provide: AssetsReportService, useValue: { stats } }],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should only list products with at least one booking', () => {
        const products = spectator.component.products();
        expect(products.map((p) => p.name)).toEqual(['Laptop', 'Monitor']);
    });

    it('should count bookings and booked assets per product', () => {
        const products = spectator.component.products();
        const laptop = products.find((p) => p.name === 'Laptop');
        expect(laptop).toEqual({
            name: 'Laptop',
            booking_count: 1,
            booked_count: 2,
            asset_count: 2,
        });
        const monitor = products.find((p) => p.name === 'Monitor');
        expect(monitor).toEqual({
            name: 'Monitor',
            booking_count: 1,
            booked_count: 1,
            asset_count: 1,
        });
    });

    it('should download the current product usage on request', async () => {
        await spectator.component.download();
        expect(downloadFile).toHaveBeenCalledWith(
            'report-assets-product-usage.csv',
            expect.any(String),
        );
    });
});
