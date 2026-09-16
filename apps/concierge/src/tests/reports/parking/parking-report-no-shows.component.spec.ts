import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { Booking, OrganisationService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { ParkingReportNoShowsComponent } from 'apps/concierge/src/app/reports/parking/parking-report-no-shows.component';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';
import { captureDownloads } from '../download-capture.helper';

describe('ParkingReportNoShowsComponent', () => {
    let spectator: Spectator<ParkingReportNoShowsComponent>;
    let bookings: ReturnType<typeof signal<Partial<Booking>[]>>;

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
                useValue: {
                    bookings: (bookings = signal<Partial<Booking>[]>([])),
                },
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
        bookings = signal<Partial<Booking>[]>([]);
        spectator = createComponent({
            providers: [
                {
                    provide: ParkingReportService,
                    useValue: {
                        bookings,
                        formatBookingDate: (date: number) =>
                            new Date(date).toISOString(),
                    },
                },
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
    it('should group email variants, keep namesakes separate, and rank by count', () => {
        const incident = {
            date: past,
            booking_end: past_end,
            asset_id: 'bay-1',
        };
        bookings.set([
            { ...incident, user_name: 'Kiri Scott', user_email: 'other@x.com' },
            {
                ...incident,
                date: past + 3600000,
                user_name: 'Kiri Scott',
                user_email: ' Kiri@x.com ',
            },
            {
                ...incident,
                user_name: 'Kiri',
                user_email: 'kiri@x.com',
                asset_id: 'bay-2',
            },
        ]);
        const [kiri, namesake] = spectator.component.user_no_shows();
        expect(kiri.email).toBe('kiri@x.com');
        expect(kiri.count).toBe(2);
        expect(kiri.incidents.map((incident) => incident.asset_id)).toEqual([
            'bay-2',
            'bay-1',
        ]);
        expect(namesake.count).toBe(1);
        expect(namesake.email).toBe('other@x.com');
    });

    it('should use user IDs when email is missing and keep unidentified bookings separate', () => {
        const incident = {
            date: past,
            booking_end: past_end,
            user_name: 'Same name',
        };
        bookings.set([
            { ...incident, user_id: 'user-1' },
            { ...incident, user_id: 'user-1' },
            { ...incident, user_id: 'user-2' },
            incident,
            incident,
        ]);
        expect(
            spectator.component.user_no_shows().map((row) => row.count),
        ).toEqual([2, 1, 1, 1]);
        bookings.set([{ ...incident, user_id: 'user-2' }]);
        expect(spectator.component.user_no_shows()).toHaveLength(1);
        expect(spectator.component.user_no_shows()[0].count).toBe(1);
    });

    it('should export one row per user with counts and incident details', async () => {
        const downloads = captureDownloads();
        bookings.set([
            {
                date: past,
                booking_end: past_end,
                user_email: 'kiri@x.com',
                zones: ['lvl-1'],
            },
            {
                date: past + 3600000,
                booking_end: past_end,
                user_email: 'kiri@x.com',
            },
        ]);
        try {
            await spectator.component.download();
            expect(downloads.filename).toBe('report-parking-no-shows.csv');
            const csv = await downloads.text();
            expect(csv).toContain('host,email,no_show_count,incidents');
            expect(csv).toContain('kiri@x.com,kiri@x.com,2,');
            expect(csv.match(/kiri@x.com/g)).toHaveLength(2);
            expect(csv).toContain('HQ, Level 1');
            expect(csv).toContain(new Date(past).toISOString());
            expect(csv).toContain(new Date(past + 3600000).toISOString());
        } finally {
            downloads.restore();
        }
    });
    it('should expand users independently and show all incidents when printing', () => {
        const incident = { date: past, booking_end: past_end };
        bookings.set([
            { ...incident, user_email: 'kiri@x.com' },
            { ...incident, user_email: 'alex@x.com' },
        ]);
        const [first, second] = spectator.component.user_no_shows();
        expect(spectator.component.show_children()).toEqual({});
        spectator.component.toggleRow(first.id);
        expect(spectator.component.show_children()).toEqual({
            [first.id]: true,
        });
        spectator.setInput('print', true);
        expect(spectator.component.show_children()).toEqual({
            [first.id]: true,
            [second.id]: true,
        });
        spectator.setInput('print', false);
        spectator.component.toggleRow(first.id);
        expect(spectator.component.show_children()[first.id]).toBe(false);
        spectator.component.toggleRow(second.id);
        bookings.set([]);
        expect(spectator.component.show_children()).toEqual({});
    });
});
