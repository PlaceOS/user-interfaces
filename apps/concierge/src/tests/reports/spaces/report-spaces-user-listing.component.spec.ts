import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { ReportSpacesUserListingComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

describe('ReportSpacesUserListingComponent', () => {
    let spectator: Spectator<ReportSpacesUserListingComponent>;
    let stats: ReturnType<typeof signal<any>>;

    const createComponent = createComponentFactory({
        component: ReportSpacesUserListingComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            {
                provide: ReportsStateService,
                useValue: { stats: (stats = signal<any>({ events: [] })) },
            },
        ],
    });

    beforeEach(() => {
        stats = signal<any>({ events: [] });
        spectator = createComponent({
            providers: [
                { provide: ReportsStateService, useValue: { stats } },
            ],
        });
    });

    it('should aggregate hosted bookings by host attendee', () => {
        stats.set({
            events: [
                {
                    host: 'host@x.com',
                    duration: 60,
                    attendees: [
                        { email: 'host@x.com', name: 'Host' },
                        { email: 'a@x.com' },
                    ],
                    resources: [{ capacity: 4 }],
                    extension_data: { people_count: { max: 3 } },
                },
                {
                    host: 'host@x.com',
                    duration: 30,
                    attendees: [
                        { email: 'host@x.com', name: 'Host' },
                        { email: 'b@x.com' },
                        { email: 'c@x.com' },
                    ],
                    resources: [{ capacity: 4 }],
                    extension_data: { people_count: { max: 0 } },
                },
            ],
        });
        const list = spectator.component.user_list();
        expect(list).toHaveLength(1);
        expect(list[0].id).toBe('host@x.com');
        expect(list[0].name).toBe('Host');
        expect(list[0].booking_count).toBe(2);
        expect(list[0].avg_attendees).toBe(2.5); // (2 + 3) / 2
        expect(list[0].no_shows).toBe(1); // one booking with max === 0
        expect(typeof list[0].total_time).toBe('string');
    });

    it('should skip bookings that have no matching host attendee', () => {
        stats.set({
            events: [
                {
                    host: 'missing@x.com',
                    duration: 60,
                    attendees: [{ email: 'someone@x.com' }],
                    resources: [{ capacity: 4 }],
                    extension_data: {},
                },
            ],
        });
        expect(spectator.component.user_list()).toEqual([]);
    });

    it('should match a host via the host override attendee', () => {
        stats.set({
            events: [
                {
                    host: 'organiser@x.com',
                    duration: 45,
                    attendees: [{ email: 'delegate@x.com', name: 'Delegate' }],
                    resources: [{ capacity: 2 }],
                    extension_data: { host_override: 'delegate@x.com' },
                },
            ],
        });
        const list = spectator.component.user_list();
        expect(list).toHaveLength(1);
        expect(list[0].id).toBe('delegate@x.com');
    });
});
