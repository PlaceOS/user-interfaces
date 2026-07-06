import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetReportExpiredItemsComponent } from 'apps/concierge/src/app/reports/assets/asset-report-expired-items.component';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

import { captureDownloads } from '../download-capture.helper';

describe('AssetReportExpiredItemsComponent', () => {
    let spectator: Spectator<AssetReportExpiredItemsComponent>;
    let downloads: ReturnType<typeof captureDownloads>;
    let expired_items: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: AssetReportExpiredItemsComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
            MockComponent(ReportMetricGuideComponent),
        ],
        imports: [MatTooltipModule],
        providers: [MockProvider(AssetsReportService, {} as any)],
    });

    afterEach(() => downloads.restore());

    beforeEach(() => {
        downloads = captureDownloads();
        expired_items = signal([
            { purchase_order_number: 'PO-1', invoice_number: 'INV-1' },
        ]);
        spectator = createComponent({
            providers: [
                { provide: AssetsReportService, useValue: { expired_items } },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the expired purchase orders from the service', () => {
        expect(spectator.component.expired_items()).toEqual([
            { purchase_order_number: 'PO-1', invoice_number: 'INV-1' },
        ]);
    });

    it('should download the expired items table on request', async () => {
        await spectator.component.download();
        expect(downloads.filename).toBe('report-assets-expired-items.csv');
    });
});
