import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';
import { ParkingReportChartsComponent } from 'apps/concierge/src/app/reports/parking/parking-report-charts.component';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';

vi.mock('chart.js');

describe('ParkingReportChartsComponent', () => {
    let spectator: Spectator<ParkingReportChartsComponent>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let counts: ReturnType<typeof signal<Record<string, number>>>;

    const day_1 = new Date('2026-04-06T09:00:00').valueOf();
    const day_2 = new Date('2026-04-07T09:00:00').valueOf();

    const org_levels = [
        { id: 'lvl-1', name: 'Level 1', tags: ['parking'] },
        { id: 'lvl-2', name: 'Level 2', tags: ['other'] },
    ];

    const createComponent = createComponentFactory({
        component: ParkingReportChartsComponent,
        providers: [
            {
                provide: ParkingReportService,
                useValue: {
                    bookings: (bookings = signal<any[]>([])),
                    counts: (counts = signal<Record<string, number>>({})),
                },
            },
            MockProvider(SettingsService, { get: vi.fn(() => false) } as any),
            MockProvider(OrganisationService, {
                levelsForBuilding: vi.fn(() => org_levels),
                levelsForRegion: vi.fn(() => org_levels),
                levelWithID: vi.fn(([id]) =>
                    org_levels.find((l) => l.id === id),
                ),
            } as any),
        ],
    });

    beforeEach(() => {
        bookings = signal<any[]>([]);
        counts = signal<Record<string, number>>({});
        spectator = createComponent({
            providers: [
                {
                    provide: ParkingReportService,
                    useValue: { bookings, counts },
                },
            ],
        });
    });

    it('should fall back to parking-tagged org levels when counts are empty', () => {
        expect(spectator.component.levels()).toEqual(['lvl-1']);
    });

    it('should use the resource count keys for levels when populated', () => {
        counts.set({ 'lvl-1': 4, 'lvl-2': 2 });
        expect(spectator.component.levels()).toEqual(['lvl-1', 'lvl-2']);
    });

    it('should build per-level daily active booking series', () => {
        counts.set({ 'lvl-1': 4, 'lvl-2': 2 });
        bookings.set([
            { date: day_1, zones: ['lvl-1'] },
            { date: day_1, zones: ['lvl-1'] },
            { date: day_2, zones: ['lvl-2'] },
            { date: day_1, zones: ['lvl-1'], deleted: true }, // excluded
        ]);
        const { dates, series } = spectator.component.daily_data();
        expect(dates).toEqual(['2026-04-06', '2026-04-07']);
        const lvl1 = series.find((s) => s.level === 'lvl-1');
        const lvl2 = series.find((s) => s.level === 'lvl-2');
        expect(lvl1.data).toEqual([2, 0]);
        expect(lvl2.data).toEqual([0, 1]);
    });

    it('should count active bookings per level for the pie chart', () => {
        counts.set({ 'lvl-1': 4, 'lvl-2': 2 });
        bookings.set([
            { date: day_1, zones: ['lvl-1'] },
            { date: day_1, zones: ['lvl-1'], status: 'cancelled' }, // excluded
            { date: day_2, zones: ['lvl-2'] },
        ]);
        expect(spectator.component.level_counts()).toEqual([
            { level: 'lvl-1', count: 1 },
            { level: 'lvl-2', count: 1 },
        ]);
    });
});
