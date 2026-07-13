import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ReportDesksChartsComponent } from 'apps/concierge/src/app/reports/desks/report-desks-charts.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

describe('ReportDesksChartsComponent', () => {
    let spectator: Spectator<ReportDesksChartsComponent>;
    let options: ReturnType<typeof signal<any>>;
    let counts: ReturnType<typeof signal<any>>;
    let day_list: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: ReportDesksChartsComponent,
        providers: [
            MockProvider(ReportsStateService, {} as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
            MockProvider(OrganisationService, {
                levelsForBuilding: vi.fn(() => []),
                levelsForRegion: vi.fn(() => []),
                levelWithID: vi.fn(() => ({ display_name: 'Level 1' })),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        options = signal({ zones: ['level-1'] });
        counts = signal({ 'level-1': 4 });
        day_list = signal([
            { date: new Date('2026-04-06T00:00:00').valueOf(), utilisation: 30 },
        ]);
        spectator = createComponent({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: { options, counts, day_list },
                },
            ],
        });
    });

    afterEach(() => {
        vi.clearAllTimers();
        vi.useRealTimers();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the day list from the state service', () => {
        expect(spectator.component.day_list()).toHaveLength(1);
    });

    it('should pair the active options with the resource counts', () => {
        expect(spectator.component.stats()).toEqual([
            { zones: ['level-1'] },
            { 'level-1': 4 },
        ]);
    });
});
