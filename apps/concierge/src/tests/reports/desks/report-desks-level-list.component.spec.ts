import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ReportDesksLevelListComponent } from 'apps/concierge/src/app/reports/desks/report-desks-level-list.component';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

import { captureDownloads } from '../download-capture.helper';

describe('ReportDesksLevelListComponent', () => {
    let spectator: Spectator<ReportDesksLevelListComponent>;
    let downloads: ReturnType<typeof captureDownloads>;
    let options: ReturnType<typeof signal<any>>;
    let stats: ReturnType<typeof signal<any>>;
    let counts: ReturnType<typeof signal<any>>;

    const day = new Date('2026-04-06T00:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ReportDesksLevelListComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
            MockComponent(ReportMetricGuideComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            MockProvider(ReportsStateService, {} as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(() => ({ display_name: 'Level 1' })),
                levelsForBuilding: vi.fn(() => []),
                levelsForRegion: vi.fn(() => []),
            } as any),
        ],
    });

    afterEach(() => downloads.restore());

    beforeEach(() => {
        downloads = captureDownloads();
        options = signal({ zones: ['level-1'], start: day, end: day });
        stats = signal({
            events: [
                { zones: ['level-1'], approved: true },
                { zones: ['level-1'], approved: false },
            ],
        });
        counts = signal({ 'level-1': 10 });
        spectator = createComponent({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: { options, stats, counts },
                },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should build a per-level utilisation summary', () => {
        const [level] = spectator.component.level_list();
        expect(level).toEqual({
            name: 'Level 1',
            free: 8,
            approved: 1,
            avg_usage: '2.00',
            total: 10,
            count: 2,
            utilisation: '20.00',
        });
    });

    it('should skip the aggregate "All" zone entry', () => {
        options.set({ zones: ['All', 'level-1'], start: day, end: day });
        expect(spectator.component.level_list()).toHaveLength(1);
    });

    it('should download the level usage table on request', async () => {
        await spectator.component.download();
        expect(downloads.filename).toBe('desks-levels-usage.csv');
    });
});
