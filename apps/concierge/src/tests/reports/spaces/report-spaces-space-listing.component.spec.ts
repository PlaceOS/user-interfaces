import { ApplicationRef, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import * as ts_client from '@placeos/ts-client';
import { ReportSpacesSpaceListingComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('ReportSpacesSpaceListingComponent', () => {
    let spectator: Spectator<ReportSpacesSpaceListingComponent>;
    let stats: ReturnType<typeof signal<any>>;
    let options: ReturnType<typeof signal<any>>;

    const start = new Date('2026-04-06T09:00:00').valueOf();
    const end = new Date('2026-04-06T18:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: ReportSpacesSpaceListingComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            {
                provide: ReportsStateService,
                useValue: {
                    stats: (stats = signal<any>({ events: [] })),
                    options: (options = signal<any>({ start, end })),
                },
            },
            {
                provide: SettingsService,
                useValue: { get: vi.fn(() => undefined) },
            },
        ],
    });

    async function settle() {
        spectator.detectChanges();
        await spectator.inject(ApplicationRef).whenStable();
        spectator.detectChanges();
    }

    beforeEach(() => {
        (ts_client.showSystem as any).mockImplementation((id: string) =>
            Promise.resolve({
                id,
                name: id,
                display_name: id,
                email: id,
                capacity: 4,
                zones: [],
            }),
        );
        (ts_client.querySystemsWithEmails as any).mockResolvedValue({
            data: [],
        });
        stats = signal<any>({ events: [] });
        options = signal<any>({ start, end });
        spectator = createComponent({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: { stats, options },
                },
                {
                    provide: SettingsService,
                    useValue: { get: vi.fn(() => undefined) },
                },
            ],
        });
    });

    it('should hide attendance columns before any data has resolved', () => {
        expect(spectator.component.has_attendance()).toBe(false);
        const labels = spectator.component
            .table_metric_guide()
            .map((i) => i.label);
        expect(labels).not.toContain('No-shows');
        expect(labels).not.toContain('Min / Max attendance');
    });

    it('should aggregate bookings per resolved space', async () => {
        stats.set({
            events: [
                {
                    date: start,
                    duration: 60,
                    attendees: [{ email: 'a@x.com' }, { email: 'b@x.com' }],
                    resources: [{ email: 'room-1', capacity: 4 }],
                    system: { id: 'room-1', capacity: 4 },
                    extension_data: { people_count: { max: 3 } },
                },
                {
                    date: start,
                    duration: 120,
                    attendees: [{ email: 'c@x.com' }],
                    resources: [{ email: 'room-1', capacity: 4 }],
                    system: { id: 'room-1', capacity: 4 },
                    extension_data: { people_count: { max: 2 } },
                },
            ],
        });
        await settle();
        const list = spectator.component.space_list();
        expect(list).toHaveLength(1);
        expect(list[0].id).toBe('room-1');
        expect(list[0].booking_count).toBe(2);
        expect(list[0].avg_attendees).toBe(1.5); // (2 + 1) / 2
        expect(typeof list[0].utilisation).toBe('string');
        expect(spectator.component.has_attendance()).toBe(true);
    });

    it('should record no-shows for bookings with a zero max people count', async () => {
        stats.set({
            events: [
                {
                    date: start,
                    duration: 60,
                    attendees: [{ email: 'a@x.com' }],
                    resources: [{ email: 'room-2', capacity: 6 }],
                    system: { id: 'room-2', capacity: 6 },
                    extension_data: { people_count: { max: 0 } },
                },
            ],
        });
        await settle();
        const [space] = spectator.component.space_list();
        expect(space.id).toBe('room-2');
        expect(space.no_shows).toBe(1);
    });
});
