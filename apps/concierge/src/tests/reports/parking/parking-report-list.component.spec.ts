import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { ParkingReportListComponent } from 'apps/concierge/src/app/reports/parking/parking-report-list.component';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';

describe('ParkingReportListComponent', () => {
    let spectator: Spectator<ParkingReportListComponent>;
    let bookings: ReturnType<typeof signal<any[]>>;

    const early = new Date('2026-04-06T08:00:00').valueOf();
    const late = new Date('2026-04-06T15:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ParkingReportListComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            {
                provide: ParkingReportService,
                useValue: { bookings: (bookings = signal<any[]>([])) },
            },
        ],
    });

    beforeEach(() => {
        bookings = signal<any[]>([]);
        spectator = createComponent({
            providers: [
                { provide: ParkingReportService, useValue: { bookings } },
            ],
        });
    });

    it('should map booking fields with host and plate fallbacks', () => {
        bookings.set([
            {
                asset_id: 'bay-1',
                date: early,
                date_end: early + 60 * 60 * 1000,
                duration: 60,
                user_name: 'Jane Doe',
                user_email: 'jane@x.com',
                extension_data: { plate_number: 'ABC123' },
                checked_in: true,
            },
            {
                asset_id: 'bay-2',
                date: late,
                duration: 60,
                user_email: 'no-name@x.com',
                extension_data: {},
            },
        ]);
        const [first, second] = spectator.component.parking_bookings();
        expect(first.host).toBe('Jane Doe');
        expect(first.plate_number).toBe('ABC123');
        expect(first.date_end).toBe(early + 60 * 60 * 1000);
        expect(second.host).toBe('no-name@x.com');
        expect(second.plate_number).toBe('');
    });

    it('should resolve booking status via the shared status helper', () => {
        bookings.set([
            { asset_id: 'a', date: early, duration: 60, deleted: true },
            { asset_id: 'b', date: late, duration: 60, rejected: true },
        ]);
        const [cancelled, rejected] = spectator.component.parking_bookings();
        expect(cancelled.status).toBe('Cancelled');
        expect(rejected.status).toBe('Rejected');
    });

    it('should sort bookings ascending by date', () => {
        bookings.set([
            { asset_id: 'late', date: late, duration: 60 },
            { asset_id: 'early', date: early, duration: 60 },
        ]);
        expect(
            spectator.component.parking_bookings().map((b) => b.asset_id),
        ).toEqual(['early', 'late']);
    });
});
