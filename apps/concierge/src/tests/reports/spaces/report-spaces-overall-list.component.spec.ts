import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent, SimpleTableComponent } from '@placeos/components';
import * as common_mod from '@placeos/common';
import { ReportSpacesOverallListComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    jsonToCsv: jest.fn(() => 'csv-data'),
}));

describe('ReportSpacesOverallListComponent', () => {
    let spectator: Spectator<ReportSpacesOverallListComponent>;
    let day_list: ReturnType<typeof signal<any[]>>;

    const day = new Date('2026-04-06T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ReportSpacesOverallListComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            {
                provide: ReportsStateService,
                useValue: { day_list: (day_list = signal<any[]>([])) },
            },
        ],
    });

    beforeEach(() => {
        day_list = signal<any[]>([]);
        (common_mod.downloadFile as jest.Mock).mockClear();
        spectator = createComponent({
            providers: [
                { provide: ReportsStateService, useValue: { day_list } },
            ],
        });
    });

    it('should expose the day list from the report state', () => {
        const rows = [{ date: day, approved: 2, count: 5 }];
        day_list.set(rows);
        expect(spectator.component.day_list()).toBe(rows);
    });

    it('should format percentages for count and total', () => {
        expect(spectator.component.formatPercent(1, 4)).toBe('1 (25%)');
        expect(spectator.component.formatPercent(0, 0)).toBe('0 (0%)');
    });

    it('should export daily rows with formatted date and percentages', async () => {
        day_list.set([
            { date: day, approved: 3, count: 4, cancelled: 1, deleted: 0 },
        ]);
        await spectator.component.download();
        expect(common_mod.jsonToCsv).toHaveBeenCalled();
        const [rows] = (common_mod.jsonToCsv as jest.Mock).mock.calls[0];
        expect(rows[0].cancelled).toBe('1 (25%)');
        expect(rows[0].deleted).toBe('0 (0%)');
        expect(common_mod.downloadFile).toHaveBeenCalledWith(
            'spaces-usage.csv',
            'csv-data',
        );
    });
});
