import { Component, computed, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { FooterComponent } from '../shared/footer.component';
import { TopbarComponent } from '../shared/topbar.component';
import { EventCardComponent, VenueEvent } from './event-card.component';

type FilterType =
    | 'all'
    | 'draft'
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'sla_warning';

@Component({
    selector: 'manage-root',
    template: `
        <app-topbar class="border-base-200 sticky top-0 z-20 border-b" />
        <main class="bg-base-200 relative z-0 flex flex-1 flex-col gap-6 p-4">
            <!-- Page Header -->
            <section
                class="mx-auto flex w-5xl max-w-full items-center justify-between"
            >
                <h1 class="text-secondary text-3xl font-medium">My Events</h1>
                <a
                    btn
                    matRipple
                    class="flex items-center gap-2"
                    [routerLink]="['/booking-request']"
                >
                    <icon class="text-lg">add</icon>
                    <span>Request New Event</span>
                </a>
            </section>

            <!-- Filter Section -->
            <section
                class="bg-base-100 border-base-300 mx-auto w-5xl max-w-full rounded-lg border p-6 shadow-sm"
            >
                <h2 class="mb-4 text-lg font-semibold">Filter By:</h2>
                <div class="flex flex-wrap gap-3">
                    @for (filter of filters; track filter.id) {
                        <button
                            matRipple
                            class="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                            [class.bg-secondary]="active_filter() === filter.id"
                            [class.text-secondary-content]="
                                active_filter() === filter.id
                            "
                            [class.border-secondary]="
                                active_filter() === filter.id
                            "
                            [class.bg-base-100]="active_filter() !== filter.id"
                            [class.border-base-300]="
                                active_filter() !== filter.id
                            "
                            [class.hover:bg-base-200]="
                                active_filter() !== filter.id
                            "
                            (click)="setFilter(filter.id)"
                        >
                            @if (filter.icon) {
                                <icon class="text-base">{{ filter.icon }}</icon>
                            }
                            {{ filter.label }}
                        </button>
                    }
                </div>
            </section>

            <!-- Events List -->
            <section class="mx-auto flex w-5xl max-w-full flex-col gap-4">
                @for (event of filtered_events(); track event.id) {
                    <event-card [event]="event" />
                } @empty {
                    <div
                        class="bg-base-100 border-base-300 flex flex-col items-center justify-center rounded-lg border p-12 text-center shadow-sm"
                    >
                        <icon class="text-base-content/30 mb-4 text-6xl"
                            >event_busy</icon
                        >
                        <h3 class="text-lg font-medium">No events found</h3>
                        <p class="text-base-content/70 mt-1">
                            @if (active_filter() === 'all') {
                                You haven't created any events yet.
                            } @else {
                                No events match the selected filter.
                            }
                        </p>
                    </div>
                }
            </section>
        </main>
        <app-footer />
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow: auto;
            }
        `,
    ],
    imports: [
        TopbarComponent,
        FooterComponent,
        IconComponent,
        MatRippleModule,
        RouterLink,
        EventCardComponent,
    ],
})
export class ManageRequestsComponent {
    public readonly active_filter = signal<FilterType>('all');

    public readonly filters = [
        { id: 'all' as FilterType, label: 'All Events', icon: null },
        { id: 'draft' as FilterType, label: 'Draft', icon: null },
        { id: 'pending' as FilterType, label: 'Pending', icon: null },
        { id: 'approved' as FilterType, label: 'Approved', icon: null },
        { id: 'rejected' as FilterType, label: 'Rejected', icon: null },
        {
            id: 'sla_warning' as FilterType,
            label: 'SLA Warning',
            icon: 'warning',
        },
    ];

    // Mock event data
    public readonly events: VenueEvent[] = [
        {
            id: '1',
            title: 'Annual Graduation Ceremony',
            date: new Date('2025-06-15T10:00:00'),
            venue: 'Pauley Pavilion',
            status: 'pending',
            approvals: [
                { name: 'Venue Management', status: 'completed' },
                { name: 'UCLA Police Department', status: 'completed' },
                { name: 'Facilities Management', status: 'pending' },
                { name: 'Parking Services', status: 'pending' },
            ],
            services: [
                {
                    id: 'presentation',
                    name: 'Presentation',
                    icon: 'bar_chart',
                    action: 'upload',
                    action_label: 'Upload',
                },
                {
                    id: 'signage',
                    name: 'Digital Signage',
                    icon: 'tv',
                    action: 'settings',
                    action_label: 'Manage',
                },
            ],
            has_missing_documents: true,
            has_sla_warning: false,
        },
        {
            id: '2',
            title: 'Welcome Week BBQ',
            date: new Date('2025-09-20T17:00:00'),
            venue: 'Janss Steps',
            status: 'approved',
            approvals: [
                { name: 'Venue Management', status: 'completed' },
                { name: 'Environmental Health & Safety', status: 'completed' },
                { name: 'Insurance & Risk Management', status: 'completed' },
            ],
            services: [
                {
                    id: 'presentation',
                    name: 'Presentation',
                    icon: 'bar_chart',
                    action: 'upload',
                    action_label: 'Upload',
                },
                {
                    id: 'signage',
                    name: 'Digital Signage',
                    icon: 'tv',
                    action: 'settings',
                    action_label: 'Manage',
                },
            ],
            has_missing_documents: false,
            has_sla_warning: false,
        },
        {
            id: '3',
            title: 'Department Holiday Party',
            date: new Date('2025-12-15T18:00:00'),
            venue: 'Faculty Center',
            status: 'draft',
            approvals: [{ name: 'Venue Management', status: 'pending' }],
            services: [
                {
                    id: 'presentation',
                    name: 'Presentation',
                    icon: 'bar_chart',
                    action: 'upload',
                    action_label: 'Upload',
                },
                {
                    id: 'signage',
                    name: 'Digital Signage',
                    icon: 'tv',
                    action: 'settings',
                    action_label: 'Manage',
                },
            ],
            has_missing_documents: false,
            has_sla_warning: false,
        },
        {
            id: '4',
            title: 'Fourth of July Fireworks Show',
            date: new Date('2025-07-04T20:00:00'),
            venue: 'Intramural Field',
            status: 'rejected',
            approvals: [
                { name: 'Venue Management', status: 'completed' },
                { name: 'UCLA Police Department', status: 'completed' },
                { name: 'Environmental Health & Safety', status: 'rejected' },
                { name: 'Insurance & Risk Management', status: 'pending' },
            ],
            services: [
                {
                    id: 'presentation',
                    name: 'Presentation',
                    icon: 'bar_chart',
                    action: 'upload',
                    action_label: 'Upload',
                },
                {
                    id: 'signage',
                    name: 'Digital Signage',
                    icon: 'tv',
                    action: 'settings',
                    action_label: 'Manage',
                },
            ],
            has_missing_documents: true,
            has_sla_warning: false,
        },
        {
            id: '5',
            title: 'Research Symposium',
            date: new Date('2025-07-10T09:00:00'),
            venue: 'Covel Commons',
            status: 'pending',
            approvals: [
                { name: 'Venue Management', status: 'completed' },
                { name: 'Audio/Visual Services', status: 'pending' },
            ],
            services: [
                {
                    id: 'presentation',
                    name: 'Presentation',
                    icon: 'bar_chart',
                    action: 'upload',
                    action_label: 'Upload',
                },
                {
                    id: 'signage',
                    name: 'Digital Signage',
                    icon: 'tv',
                    action: 'settings',
                    action_label: 'Manage',
                },
            ],
            has_missing_documents: false,
            has_sla_warning: true,
        },
    ];

    public readonly filtered_events = computed(() => {
        const filter = this.active_filter();
        if (filter === 'all') {
            return this.events;
        }
        if (filter === 'sla_warning') {
            return this.events.filter((e) => e.has_sla_warning);
        }
        return this.events.filter((e) => e.status === filter);
    });

    public setFilter(filter: FilterType): void {
        this.active_filter.set(filter);
    }
}
