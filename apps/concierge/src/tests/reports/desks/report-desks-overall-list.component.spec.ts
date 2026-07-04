import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ReportDesksOverallListComponent } from 'apps/concierge/src/app/reports/desks/report-desks-overall-list.component';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
}));
import { downloadFile } from '@placeos/common';

describe('ReportDesksOverallListComponent', () => {
    let spectator: Spectator<ReportDesksOverallListComponent>;
    let day_list: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: ReportDesksOverallListComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
            MockComponent(ReportMetricGuideComponent),
        ],
        imports: [MatTooltipModule],
        providers: [MockProvider(ReportsStateService, {} as any)],
    });

    beforeEach(() => {
        (downloadFile as jest.Mock).mockClear();
        day_list = signal([
            {
                date: new Date('2026-04-06T00:00:00').valueOf(),
                approved: 3,
                count: 5,
                cancelled: 1,
                deleted: 1,
                utilisation: '40.0',
            },
        ]);
        spectator = createComponent({
            providers: [
                { provide: ReportsStateService, useValue: { day_list } },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the daily list from the state service', () => {
        expect(spectator.component.day_list()).toHaveLength(1);
    });

    it('should format booking percentages against total requests', () => {
        expect(spectator.component.formatPercent(1, 5)).toBe('1 (20%)');
    });

    it('should download the daily usage table on request', async () => {
        await spectator.component.download();
        expect(downloadFile).toHaveBeenCalledWith(
            'desks-usage.csv',
            expect.any(String),
        );
    });
});
