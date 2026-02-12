import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { CalendarEvent, SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { EventStateService } from './event-state.service';
import {
    EventSummaryDialogComponent,
    EventSummaryData,
} from './event-summary-dialog.component';
import { MOCK_APPROVAL_EVENTS } from './event-approvals-mock.data';

@Component({
    selector: 'event-listing',
    template: `
        <mat-progress-bar
            class="w-full"
            [class.opacity-0]="!(loading | async)"
            mode="indeterminate"
        />
        <simple-table
            class="block w-full min-w-4xl text-sm"
            [data]="event_list"
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
                    name: 'Dining',
                    content: dining_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_av',
                    name: 'AV/Tech',
                    content: av_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_safety',
                    name: 'Safety',
                    content: safety_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_events',
                    name: 'Events',
                    content: events_req_template,
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
                        class="relative top-0.5 text-sm font-medium opacity-60"
                    >
                        {{ item.date | date: 'MMM' }}
                    </div>
                    <div day class="relative -top-0.5 text-2xl font-light">
                        {{ item.date | date: 'd' }}
                    </div>
                </div>
                <div details class="flex flex-col">
                    <div class="text-sm font-medium hover:underline">{{ item.title }}</div>
                    <div class="text-xs opacity-40">
                        {{ item.date | date: 'EEEE, ' + time_format }}
                        &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: time_format
                        }}
                    </div>
                    <div class="text-xs opacity-60">
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
                        <span class="opacity-30">&mdash;</span>
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
                        <span class="opacity-30">&mdash;</span>
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
                        <span class="opacity-30">&mdash;</span>
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
                        <span class="opacity-30">&mdash;</span>
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
                        <span class="opacity-30">&mdash;</span>
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
            >
                <icon>more_vert</icon>
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
        TranslatePipe,
        MatProgressBarModule,
    ],
})
export class EventListingComponent {
    private _settings = inject(SettingsService);
    private _state = inject(EventStateService);
    private _dialog = inject(MatDialog);

    public readonly loading = this._state.loading;
    public readonly event_list = this._state.event_list;

    public readonly viewEvent = (event: CalendarEvent) =>
        this._state.viewEvent(event);
    public readonly removeEvent = (event: CalendarEvent) =>
        this._state.removeEvent(event);

    public get time_format() {
        return this._settings.time_format;
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
        const mock = MOCK_APPROVAL_EVENTS.find(
            (e) => e.id === event.id,
        );
        if (!mock) return;
        this._dialog.open(EventSummaryDialogComponent, {
            data: { event: mock } as EventSummaryData,
        });
    }
}
