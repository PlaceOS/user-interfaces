import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ReportSpacesOverallComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-overall.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

describe('ReportSpacesOverallComponent', () => {
    let spectator: Spectator<ReportSpacesOverallComponent>;
    let stats: ReturnType<typeof signal<any>>;
    let options: ReturnType<typeof signal<any>>;

    const monday = new Date('2026-04-06T09:00:00').valueOf();
    const friday = new Date('2026-04-10T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ReportSpacesOverallComponent,
        providers: [
            {
                provide: ReportsStateService,
                useValue: {
                    stats: (stats = signal<any>({ events: [] })),
                    options: (options = signal<any>({})),
                },
            },
        ],
    });

    beforeEach(() => {
        stats = signal<any>({ events: [] });
        options = signal<any>({});
        spectator = createComponent({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: { stats, options },
                },
            ],
        });
    });

    it('should surface booking status counts from the report stats', () => {
        stats.set({
            total_count: 10,
            count: 7,
            cancelled_count: 2,
            deleted_count: 1,
            avg_length: 45,
            events: [],
        });
        expect(spectator.component.total_count()).toBe(10);
        expect(spectator.component.active_count()).toBe(7);
        expect(spectator.component.cancelled_count()).toBe(2);
        expect(spectator.component.deleted_count()).toBe(1);
    });

    it('should count a single weekday as one business day', () => {
        options.set({ start: monday, end: monday });
        expect(spectator.component.business_days()).toBe(1);
    });

    it('should count a full working week as five business days', () => {
        options.set({ start: monday, end: friday });
        expect(spectator.component.business_days()).toBe(5);
    });

    it('should sum recorded attendance across events', () => {
        stats.set({
            events: [
                { extension_data: { people_count: { max: 4 } } },
                { extension_data: { people_count: { max: 2 } } },
                { extension_data: {} },
            ],
        });
        expect(spectator.component.attendance()).toBe(6);
    });

    it('should flag attendance only when a people count is present', () => {
        stats.set({ events: [{ extension_data: {} }] });
        expect(spectator.component.has_attendance()).toBe(false);
        stats.set({
            events: [{ extension_data: { people_count: { max: 3 } } }],
        });
        expect(spectator.component.has_attendance()).toBe(true);
    });
});
