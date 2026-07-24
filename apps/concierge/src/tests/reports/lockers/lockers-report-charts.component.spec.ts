import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { LockersReportChartsComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-charts.component';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';

describe('LockersReportChartsComponent', () => {
    let spectator: Spectator<LockersReportChartsComponent>;
    let daily_stats: ReturnType<typeof signal<any>>;
    let counts: ReturnType<typeof signal<any>>;
    let bookings: ReturnType<typeof signal<any>>;

    const day = new Date('2026-04-06T00:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: LockersReportChartsComponent,
        providers: [
            MockProvider(LockersReportService, {} as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
            MockProvider(OrganisationService, {
                levels: [{ id: 'level-1' }],
                levelsForBuilding: vi.fn(() => []),
                levelsForRegion: vi.fn(() => []),
                levelWithID: vi.fn(() => ({ display_name: 'Level 1' })),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        daily_stats = signal({
            '2026-04-06': {
                date: day,
                bookings: [
                    { asset_id: 'l1', user_email: 'a@x', duration: 480 },
                    { asset_id: 'l1', user_email: 'a@x', duration: 480 },
                ],
            },
        });
        counts = signal({ 'level-1': 5 });
        bookings = signal([
            { zones: ['level-1'] },
            { zones: ['level-2'] },
        ]);
        spectator = createComponent({
            providers: [
                {
                    provide: LockersReportService,
                    useValue: { daily_stats, counts, bookings },
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

    it('should aggregate unique lockers, hosts and utilisation per day', () => {
        const [entry] = spectator.component.day_list();
        expect(entry).toEqual({
            date: '2026-04-06',
            booking_count: 1,
            host_count: 1,
            booked_count: 2,
            utilisation: 0.4,
        });
    });

    it('should map bookings to configured levels only', () => {
        const [zones, per_zone] = spectator.component.stats();
        expect(zones).toEqual(['level-1']);
        expect(per_zone).toEqual({ 'level-1': 1 });
    });
});
