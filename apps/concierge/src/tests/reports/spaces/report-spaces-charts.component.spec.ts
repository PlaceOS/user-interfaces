import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';
import { ReportSpacesChartsComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-charts.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

import * as chart_mod from 'chart.js';

jest.mock('chart.js');

describe('ReportSpacesChartsComponent', () => {
    let spectator: Spectator<ReportSpacesChartsComponent>;
    let day_list: ReturnType<typeof signal<any[]>>;
    let options: ReturnType<typeof signal<any>>;
    let counts: ReturnType<typeof signal<Record<string, number>>>;

    const org_levels = [
        { id: 'lvl-1', name: 'Level 1' },
        { id: 'lvl-2', name: 'Level 2' },
    ];

    const createComponent = createComponentFactory({
        component: ReportSpacesChartsComponent,
        providers: [
            {
                provide: ReportsStateService,
                useValue: {
                    day_list: (day_list = signal<any[]>([])),
                    options: (options = signal<any>({ zones: [] })),
                    counts: (counts = signal<Record<string, number>>({})),
                },
            },
            MockProvider(SettingsService, { get: jest.fn(() => false) } as any),
            MockProvider(OrganisationService, {
                levelsForBuilding: jest.fn(() => org_levels),
                levelsForRegion: jest.fn(() => org_levels),
                levelWithID: jest.fn(([id]) =>
                    org_levels.find((l) => l.id === id),
                ),
            } as any),
        ],
    });

    beforeEach(() => {
        (chart_mod.Chart as unknown as jest.Mock).mockClear();
        day_list = signal<any[]>([]);
        options = signal<any>({ zones: [] });
        counts = signal<Record<string, number>>({});
        spectator = createComponent({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: { day_list, options, counts },
                },
            ],
        });
        // render the canvases so the chart view children resolve
        spectator.detectChanges();
    });

    it('should expose the report state signals to the template', () => {
        expect(spectator.component.day_list()).toEqual([]);
        expect(spectator.component.counts()).toEqual({});
    });

    it('should build a daily utilisation line chart from the day list', () => {
        day_list.set([
            { date: new Date('2026-04-06T09:00:00').valueOf(), utilisation: '30' },
            { date: new Date('2026-04-07T09:00:00').valueOf(), utilisation: '55' },
        ]);
        (chart_mod.Chart as unknown as jest.Mock).mockClear();
        spectator.component.updateDailyChart(spectator.component.day_list());
        const [, config] = (chart_mod.Chart as unknown as jest.Mock).mock
            .calls[0];
        expect(config.type).toBe('line');
        expect(config.data.datasets[0].data).toEqual([30, 55]);
    });

    it('should only chart levels that have bookings', () => {
        counts.set({ 'lvl-1': 3, 'lvl-2': 0 });
        (chart_mod.Chart as unknown as jest.Mock).mockClear();
        spectator.component.updateLevelChart({ zones: ['lvl-1', 'lvl-2'] }, {
            'lvl-1': 3,
            'lvl-2': 0,
        });
        const [, config] = (chart_mod.Chart as unknown as jest.Mock).mock
            .calls[0];
        expect(config.type).toBe('pie');
        expect(config.data.labels).toEqual(['Level 1']);
        expect(config.data.datasets[0].data).toEqual([3]);
    });
});
