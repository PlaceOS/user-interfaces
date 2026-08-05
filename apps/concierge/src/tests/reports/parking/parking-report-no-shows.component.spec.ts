import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { OrganisationService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { ParkingReportNoShowsComponent } from 'apps/concierge/src/app/reports/parking/parking-report-no-shows.component';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';

describe('ParkingReportNoShowsComponent', () => {
    let spectator: Spectator<ParkingReportNoShowsComponent>;
    let bookings: ReturnType<typeof signal<any[]>>;

    const past = new Date('2026-04-06T09:00:00').valueOf();
    const past_end = Math.floor(
        new Date('2026-04-06T17:00:00').valueOf() / 1000,
    );
    const future_end = Math.floor((Date.now() + 60 * 60 * 1000) / 1000);

    const level = { id: 'lvl-1', name: 'Level 1', parent_id: 'bld-1' };
    const building = { id: 'bld-1', name: 'HQ' };

    const createComponent = createComponentFactory({
        component: ParkingReportNoShowsComponent,
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
            {
                provide: OrganisationService,
                useValue: {
                    levelWithID: (ids: string[]) =>
                        ids?.includes(level.id) ? level : undefined,
                    find: (id: string) =>
                        id === building.id ? building : undefined,
                },
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

    it('should only list ended bookings that were never checked in', () => {
        bookings.set([
            {
                asset_id: 'bay-1',
                date: past,
                booking_end: past_end,
                user_name: 'No Show',
                zones: ['lvl-1'],
            },
            {
                asset_id: 'bay-2',
                date: past,
                booking_end: past_end,
                checked_in: true,
                user_name: 'Arrived',
            },
            {
                asset_id: 'bay-3',
                date: past,
                booking_end: past_end,
                checked_in: false,
                checked_in_at: past_end - 3600,
                user_name: 'Checked Out',
            },
            {
                asset_id: 'bay-4',
                date: Date.now(),
                booking_end: future_end,
                user_name: 'Upcoming',
            },
            {
                asset_id: 'bay-5',
                date: past,
                booking_end: past_end,
                deleted: true,
                user_name: 'Cancelled',
            },
        ]);
        const list = spectator.component.no_shows();
        expect(list.length).toBe(1);
        expect(list[0].host).toBe('No Show');
        expect(list[0].asset_id).toBe('bay-1');
        expect(list[0].date_end).toBe(past_end * 1000);
    });

    it('should resolve building and level names for the booking zones', () => {
        bookings.set([
            {
                asset_id: 'bay-1',
                date: past,
                booking_end: past_end,
                user_email: 'jane@x.com',
                zones: ['lvl-1'],
            },
            {
                asset_id: 'bay-2',
                date: past,
                booking_end: past_end,
                user_email: 'joe@x.com',
                zones: ['unknown'],
            },
        ]);
        const [known, unknown] = spectator.component.no_shows();
        expect(known.location).toBe('HQ, Level 1');
        expect(known.host).toBe('jane@x.com');
        expect(unknown.location).toBe('');
    });
});
