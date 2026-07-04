import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { VisitorReportOverallComponent } from 'apps/concierge/src/app/reports/visitors/visitor-report-overall.component';
import { VisitorsReportService } from 'apps/concierge/src/app/reports/visitors/visitors-report.service';

describe('VisitorReportOverallComponent', () => {
    let spectator: Spectator<VisitorReportOverallComponent>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let options: ReturnType<typeof signal<any>>;

    const monday = new Date('2026-04-06T09:00:00').valueOf();
    const friday = new Date('2026-04-10T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: VisitorReportOverallComponent,
        providers: [
            {
                provide: VisitorsReportService,
                useValue: {
                    bookings: (bookings = signal<any[]>([])),
                    options: (options = signal<any>({})),
                },
            },
        ],
    });

    beforeEach(() => {
        bookings = signal<any[]>([]);
        options = signal<any>({});
        spectator = createComponent({
            providers: [
                {
                    provide: VisitorsReportService,
                    useValue: { bookings, options },
                },
            ],
        });
    });

    it('should expose the total number of visitor bookings', () => {
        bookings.set([{ duration: 30 }, { duration: 60 }, { duration: 90 }]);
        expect(spectator.component.total_count()).toBe(3);
    });

    it('should count a single weekday as one business day', () => {
        options.set({ start: monday, end: monday });
        expect(spectator.component.business_days()).toBe(1);
    });

    it('should count a full working week as five business days', () => {
        options.set({ start: monday, end: friday });
        expect(spectator.component.business_days()).toBe(5);
    });

    it('should produce an average length string across bookings', () => {
        bookings.set([{ duration: 30 }, { duration: 90 }]);
        expect(typeof spectator.component.avg_length()).toBe('string');
        expect(spectator.component.avg_length().length).toBeGreaterThan(0);
    });

    it('should render the total visitors into the summary', async () => {
        bookings.set([{ duration: 30 }, { duration: 60 }]);
        spectator.detectChanges();
        await expect(spectator.fixture.nativeElement.textContent).toContain('2');
    });
});
