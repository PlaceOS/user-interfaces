import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetReportUsersComponent } from 'apps/concierge/src/app/reports/assets/asset-report-users.component';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

import { captureDownloads } from '../download-capture.helper';

describe('AssetReportUsersComponent', () => {
    let spectator: Spectator<AssetReportUsersComponent>;
    let downloads: ReturnType<typeof captureDownloads>;
    let stats: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: AssetReportUsersComponent,
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
        stats = signal({
            events: [
                { host: 'h1', organiser: { name: 'Alice', email: 'alice@x' } },
                { host: 'h1', organiser: { name: 'Alice', email: 'alice@x' } },
                { host: 'h2', organiser: null },
            ],
            bookings: [
                { booked_by_email: 'h1', asset_ids: ['a1', 'a2'] },
                { booked_by_email: 'h2', asset_ids: ['a3'] },
            ],
            products: [
                { name: 'Laptop', assets: [{ id: 'a1' }, { id: 'a2' }] },
                { name: 'Monitor', assets: [{ id: 'a3' }] },
            ],
        });
        spectator = createComponent({
            providers: [{ provide: AssetsReportService, useValue: { stats } }],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should group bookings by unique host', () => {
        const users = spectator.component.users();
        expect(users).toHaveLength(2);
    });

    it('should count events, booked assets and asset types per host', () => {
        const users = spectator.component.users();
        const alice = users.find((u) => u.name === 'Alice');
        expect(alice).toEqual({
            name: 'Alice',
            booking_count: 2,
            asset_count: 2,
            asset_types: 1,
        });
    });

    it('should fall back to the host identifier when no organiser is set', () => {
        const users = spectator.component.users();
        const host_two = users.find((u) => u.name === 'h2');
        expect(host_two).toEqual({
            name: 'h2',
            booking_count: 1,
            asset_count: 1,
            asset_types: 1,
        });
    });

    it('should download the current user report on request', async () => {
        await spectator.component.download();
        expect(downloads.filename).toBe('report-assets-users.csv');
    });
});
