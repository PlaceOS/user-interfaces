import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportUsageListComponent } from 'apps/concierge/src/app/reports/report-usage-list.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

import { captureDownloads } from './download-capture.helper';

describe('ReportUsageListComponent', () => {
    let spectator: Spectator<ReportUsageListComponent>;
    let downloads: ReturnType<typeof captureDownloads>;
    let day_list: ReturnType<typeof signal<unknown[]>>;

    const day = new Date('2026-04-06T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ReportUsageListComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
            MockComponent(ReportMetricGuideComponent),
        ],
        imports: [MatTooltipModule],
        detectChanges: false,
    });

    afterEach(() => downloads.restore());

    beforeEach(() => {
        day_list = signal<unknown[]>([
            { date: day, approved: 3, count: 4, cancelled: 1, deleted: 0 },
        ]);
        downloads = captureDownloads();
        spectator = createComponent({
            providers: [
                { provide: ReportsStateService, useValue: { day_list } },
            ],
        });
    });

    it('should format percentages for count and total', () => {
        expect(spectator.component.formatPercent(1, 4)).toBe('1 (25%)');
        expect(spectator.component.formatPercent(0, 0)).toBe('0 (0%)');
    });

    it('should export desk rows with a short month name', async () => {
        spectator.setInput('type', 'desks');
        await spectator.component.download();
        const csv = await downloads.text();
        expect(downloads.filename).toBe('desks-usage.csv');
        expect(csv).toContain('Apr 6, 2026(Mon)');
        expect(csv).toContain('1 (25%)');
    });

    it('should export space rows with a full month name', async () => {
        spectator.setInput('type', 'spaces');
        await spectator.component.download();
        const csv = await downloads.text();
        expect(downloads.filename).toBe('spaces-usage.csv');
        expect(csv).toContain('April 6, 2026(Mon)');
        expect(csv).toContain('0 (0%)');
    });
});
