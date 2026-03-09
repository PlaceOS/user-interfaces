import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { CalendarEvent, SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
} from '@placeos/components';
import { EventStateService } from './event-state.service';
import {
    EventSummaryDialogComponent,
    EventSummaryData,
} from './event-summary-dialog.component';
import {
    EventApprovalStateService,
    RecentChange,
} from './event-approval-state.service';

@Component({
    selector: 'event-listing',
    template: `
        <mat-progress-bar
            class="w-full"
            [class.opacity-0]="!(loading | async)"
            mode="indeterminate"
        />
        <div class="mb-2 flex items-center justify-end space-x-2">
            @if (cancelled_count() > 0) {
                <button
                    matRipple
                    class="flex items-center space-x-1.5 rounded border px-3 py-1.5 text-xs font-medium transition-colors"
                    [ngClass]="
                        show_cancelled()
                            ? 'border-error/40 bg-error/10 text-error'
                            : 'border-base-300 bg-base-100 text-base-content/70'
                    "
                    (click)="show_cancelled.set(!show_cancelled())"
                >
                    <icon class="text-sm">filter_list</icon>
                    <span>Cancelled Events ({{ cancelled_count() }})</span>
                    @if (show_cancelled()) {
                        <icon class="text-sm">close</icon>
                    }
                </button>
            }
        </div>
        <simple-table
            class="block w-full min-w-4xl text-sm"
            [data]="filtered_event_list()"
            empty_message="No events for selected period"
            [columns]="[
                { key: 'date', name: 'Event', content: event_template },
                {
                    key: 'location',
                    name: 'Location',
                    content: location_template,
                    size: '12rem',
                    sortable: false,
                },
                {
                    key: 'req_venue',
                    name: 'Venue',
                    content: venue_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_dining',
                    name: 'Catering',
                    content: dining_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_av',
                    name: 'AV/Prod.',
                    content: av_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_safety',
                    name: 'Security',
                    content: safety_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_events',
                    name: 'Event Coord.',
                    content: events_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_parking',
                    name: 'Parking',
                    content: parking_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_setup',
                    name: 'Setup',
                    content: setup_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_services',
                    name: 'Services',
                    content: services_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '4rem',
                    sortable: false,
                },
            ]"
            [sortable]="true"
        />
        <div class="h-20 w-full"></div>

        <!-- Event column -->
        <ng-template #event_template let-item="row">
            <div
                class="flex cursor-pointer items-center space-x-2 px-3 py-2 hover:bg-base-200/50"
                (click)="showSummary(item)"
            >
                <div
                    date
                    class="flex w-8 flex-col items-center leading-tight"
                >
                    <div
                        month
                        class="relative top-0.5 text-sm font-medium text-gray-600"
                    >
                        {{ item.date | date: 'MMM' }}
                    </div>
                    <div day class="relative -top-0.5 text-2xl font-light">
                        {{ item.date | date: 'd' }}
                    </div>
                </div>
                <div details class="flex flex-col">
                    <div class="flex items-center space-x-1 text-sm font-medium hover:underline">
                        <span>{{ item.title }}</span>
                        @if (isCancelled(item)) {
                            <span class="rounded bg-error/20 px-1.5 py-0.5 text-[10px] font-semibold text-error">
                                CANCELLED
                            </span>
                        }
                        @if (adhocCount(item) > 0) {
                            <span class="rounded bg-warning/20 px-1.5 py-0.5 text-[10px] font-semibold text-warning">
                                +{{ adhocCount(item) }} ad-hoc
                            </span>
                        }
                    </div>
                    @if (recentChanges(item).length > 0) {
                        <div class="mt-0.5 flex flex-wrap gap-1">
                            @for (change of recentChanges(item); track change.event_id) {
                                <span
                                    class="flex items-center space-x-0.5 rounded px-1 py-0.5 text-[10px] font-medium"
                                    [ngClass]="change.type === 'cancelled'
                                        ? 'bg-error/10 text-error'
                                        : 'bg-info/10 text-info'"
                                >
                                    <icon class="text-[10px]">{{
                                        change.type === 'cancelled' ? 'cancel' : 'add_circle'
                                    }}</icon>
                                    <span>{{ change.label }}</span>
                                </span>
                            }
                        </div>
                    }
                    <div class="text-xs text-gray-600">
                        {{ item.date | date: 'EEEE, ' + time_format }}
                        &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: time_format
                        }}
                    </div>
                    <div class="text-xs text-gray-600">
                        {{ item.host }}
                    </div>
                </div>
            </div>
        </ng-template>

        <!-- Location column -->
        <ng-template #location_template let-item="row">
            <div class="p-4 text-sm">
                {{ item.location }}
            </div>
        </ng-template>

        <!-- Venue requirement -->
        <ng-template #venue_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'venue')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Dining requirement -->
        <ng-template #dining_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'dining')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- AV/Tech requirement -->
        <ng-template #av_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'av_tech')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Safety requirement -->
        <ng-template #safety_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'safety')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Events requirement -->
        <ng-template #events_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'events')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Parking requirement -->
        <ng-template #parking_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'parking')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Setup requirement -->
        <ng-template #setup_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'setup')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Services requirement -->
        <ng-template #services_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'services')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="text-gray-600">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Actions column -->
        <ng-template #actions_template let-row="row">
            <button
                icon
                matRipple
                class="mx-2 h-12 w-12 rounded-sm"
                [matMenuTriggerFor]="menu"
                aria-label="Event actions"
            >
                <icon aria-hidden="true">more_vert</icon>
                <span class="sr-only">Event actions</span>
            </button>
            <mat-menu #menu="matMenu">
                <a
                    mat-menu-item
                    [routerLink]="[
                        '/entertainment',
                        'events',
                        'manage',
                        row?.id,
                    ]"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">edit</icon>
                        <div class="mr-2">Edit Event</div>
                    </div>
                </a>
                <button mat-menu-item (click)="removeEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl">delete</icon>
                        <div class="mr-2">Remove Event</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SimpleTableComponent,
        IconComponent,
        MatMenuModule,
        MatDialogModule,
        RouterModule,
        MatRippleModule,
        MatProgressBarModule,
    ],
})
export class EventListingComponent {
    private _settings = inject(SettingsService);
    private _state = inject(EventStateService);
    private _dialog = inject(MatDialog);
    private _approval_state = inject(EventApprovalStateService);
    private _all_events = toSignal(this._approval_state.all_events$, {
        initialValue: [],
    });

    public readonly loading = this._state.loading;
    public readonly event_list = this._state.event_list;

    /** Toggle to show/hide cancelled events */
    public readonly show_cancelled = signal(false);

    private readonly _event_list_signal = toSignal(this._state.event_list, {
        initialValue: [] as CalendarEvent[],
    });

    /** Count of fully cancelled events in the current list */
    public readonly cancelled_count = computed(() =>
        this._event_list_signal().filter(
            (e) => (e as any).extension_data?.fully_cancelled,
        ).length,
    );

    /** Event list filtered by cancelled toggle */
    public readonly filtered_event_list = computed(() => {
        const events = this._event_list_signal();
        if (this.show_cancelled()) return events;
        return events.filter(
            (e) => !(e as any).extension_data?.fully_cancelled,
        );
    });

    public readonly viewEvent = (event: CalendarEvent) =>
        this._state.viewEvent(event);
    public readonly removeEvent = (event: CalendarEvent) =>
        this._state.removeEvent(event);

    public get time_format() {
        return this._settings.time_format;
    }

    isCancelled(item: CalendarEvent): boolean {
        return !!(item as any).extension_data?.fully_cancelled;
    }

    adhocCount(item: CalendarEvent): number {
        return (item as any).extension_data?.adhoc_count || 0;
    }

    recentChanges(item: CalendarEvent): RecentChange[] {
        return (item as any).extension_data?.recent_changes || [];
    }

    reqStatus(
        item: CalendarEvent,
        category: string,
    ): string | null {
        return (
            (item as any).extension_data?.requirements?.[category] ||
            null
        );
    }

    showSummary(event: CalendarEvent): void {
        const all = this._all_events();
        const mock = all.find((e) => e.id === event.id);
        if (mock) {
            this._dialog.open(EventSummaryDialogComponent, {
                data: { event: mock } as EventSummaryData,
            });
        } else {
            // Fall back to CalendarEvent-based display
            this._dialog.open(EventSummaryDialogComponent, {
                data: { calendar_event: event } as EventSummaryData,
            });
        }
    }
}
