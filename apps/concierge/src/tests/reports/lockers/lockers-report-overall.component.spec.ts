import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { LockersReportOverallComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-overall.component';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';

describe('LockersReportOverallComponent', () => {
    let spectator: Spectator<LockersReportOverallComponent>;
    let bookings: ReturnType<typeof signal<any>>;
    let options: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: LockersReportOverallComponent,
        providers: [MockProvider(LockersReportService, {} as any)],
    });

    beforeEach(() => {
        bookings = signal([
            { deleted: false, status: 'approved', duration: 60 },
            { deleted: false, status: 'cancelled', duration: 30 },
            { deleted: true, status: 'approved', duration: 120 },
        ]);
        options = signal({
            start: new Date('2026-04-06T09:00:00').valueOf(),
            end: new Date('2026-04-06T17:00:00').valueOf(),
        });
        spectator = createComponent({
            providers: [
                {
                    provide: LockersReportService,
                    useValue: { bookings, options },
                },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should split active, cancelled and deleted booking counts', () => {
        expect(spectator.component.total_count()).toBe(3);
        expect(spectator.component.active_count()).toBe(1);
        expect(spectator.component.cancelled_count()).toBe(1);
        expect(spectator.component.deleted_count()).toBe(1);
    });

    it('should compute at least one business day for a single weekday range', () => {
        expect(spectator.component.business_days()).toBe(1);
    });

    it('should average the duration of active bookings only', () => {
        // only the single active booking (60m) contributes
        expect(spectator.component.avg_length()).toContain('60');
    });
});
