import { Component, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { User } from '@placeos/users';
import { EventStateService } from './event-state.service';

@Component({
    selector: 'event-listing',
    template: `
        <mat-progress-bar
            class="w-full"
            [class.opacity-0]="!(loading | async)"
            mode="indeterminate"
        />
        <simple-table
            class="block w-full min-w-[72rem] text-sm"
            [data]="event_list"
            empty_message="No group events for selected period"
            [columns]="[
                { key: 'date', name: 'Event', content: event_template },
                {
                    key: 'level',
                    name: 'RESOURCE.LEVEL' | translate,
                    content: level_template,
                    size: '8rem',
                    sortable: false,
                },
                {
                    key: 'room',
                    name: 'RESOURCE.ROOM' | translate,
                    content: room_template,
                    size: '12rem',
                    sortable: false,
                },
                {
                    key: 'interested',
                    name: 'CALENDAR_EVENT.GROUP_INTERESTED' | translate,
                    content: interested_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'attending',
                    name: 'CALENDAR_EVENT.GROUP_ATTENDING_FIELD' | translate,
                    content: attending_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'state',
                    name: 'COMMON.STATUS' | translate,
                    content: status_template,
                    size: '8.5rem',
                },
                {
                    key: 'access',
                    name: 'COMMON.PUBLISHED' | translate,
                    content: published_template,
                    size: '6rem',
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
        <ng-template #event_template let-item="row">
            <div class="flex items-center space-x-2 px-3 py-2">
                <div date class="flex w-8 flex-col items-center leading-tight">
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
                <div
                    class="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-base-200 bg-base-200"
                >
                    <img
                        *ngIf="item.images?.length"
                        auth
                        [source]="item.images[0]"
                        class="min-h-full min-w-full object-cover"
                    />
                </div>
                <div details class="flex flex-col">
                    <div class="text-sm">{{ item.title }}</div>
                    <div class="text-xs opacity-40">
                        {{ item.date | date: 'EEEE, ' + time_format }} &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: time_format + ' (z)'
                        }}
                    </div>
                    <div class="text-xs">
                        {{
                            (
                                (item.linked_event?.system_id | space | async)
                                    ?.zones | building
                            )?.address
                        }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #level_template let-item="row">
            <div class="p-4">
                {{
                    ((room(item)?.email | space | async)?.zones | level)
                        ?.display_name
                }}
                <span *ngIf="!room(item)?.email" class="opacity-30">
                    {{ 'COMMON.LEVEL_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #room_template let-item="row">
            <div class="p-4">
                {{ (room(item)?.email | space | async)?.display_name }}
                <span *ngIf="!room(item)?.email" class="opacity-30">
                    {{ 'COMMON.ROOM_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #interested_template let-item="row">
            <button
                icon
                matRipple
                customTooltip
                [content]="view_attendees"
                class="mx-auto h-12 w-12 rounded"
                [disabled]="!attendeeCount(item.attendees)"
            >
                {{ attendeeCount(item.attendees) || 0 }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative h-[28rem] w-[20rem] overflow-auto rounded bg-white shadow"
                >
                    <attendee-list
                        [list]="attendeeList(item.attendees)"
                        [host]="item.user_email || item.host"
                        [show_host]="false"
                        [hide_close]="true"
                        [custom_title]="
                            'CALENDAR_EVENT.GROUP_INTERESTED' | translate
                        "
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #attending_template let-item="row">
            <button
                icon
                matRipple
                customTooltip
                [content]="view_attendees"
                class="mx-auto h-12 w-12 rounded"
                [disabled]="!checkedInCount(item.attendees)"
            >
                {{ checkedInCount(item.attendees) }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative h-[28rem] w-[20rem] overflow-auto rounded bg-white shadow"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="checkedInList(item.attendees)"
                        [host]="item.user_email || item.host"
                        [hide_close]="true"
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #published_template let-data="data">
            <div
                *ngIf="data === 'OPEN' || data === 'open'"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
            >
                <icon>done</icon>
            </div>
        </ng-template>
        <ng-template #status_template let-item="row">
            <div class="p-4">
                <div
                    class="rounded-full px-4 py-1"
                    [class.bg-success]="
                        item.state !== 'done' &&
                        item.state !== 'in_progress' &&
                        item.state !== 'started'
                    "
                    [class.text-success-content]="
                        item.state !== 'done' &&
                        item.state !== 'in_progress' &&
                        item.state !== 'started'
                    "
                    [class.bg-warning]="
                        item.state === 'in_progress' || item.state === 'started'
                    "
                    [class.text-warning-content]="
                        item.state === 'in_progress' || item.state === 'started'
                    "
                    [class.bg-base-200]="item.state === 'done'"
                    [class.text-base-content]="item.state === 'done'"
                >
                    {{
                        (item.state === 'done'
                            ? 'COMMON.STATE_DONE'
                            : item.state === 'in_progress' ||
                                item.state === 'started'
                              ? 'COMMON.STATE_IN_PROGRESS'
                              : 'COMMON.STATE_ACTIVE'
                        ) | translate
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <button
                icon
                matRipple
                class="mx-2 h-12 w-12 rounded"
                [matMenuTriggerFor]="menu"
                [disabled]="row.state === 'done'"
            >
                <icon>more_vert</icon>
            </button>
            <mat-menu #menu="matMenu">
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl"> confirmation_number </icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_PROMOTE' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="viewEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">visibility</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_VIEW' | translate }}
                        </div>
                    </div>
                </button>
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
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_EDIT' | translate }}
                        </div>
                    </div>
                </a>
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">content_copy</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_COPY_URL' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="removeEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl text-error">delete</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_REMOVE' | translate }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class EventListingComponent {
    private _settings = inject(SettingsService);
    private _state = inject(EventStateService);

    public readonly loading = this._state.loading;
    public readonly event_list = this._state.event_list;

    public readonly viewEvent = (event: any) => this._state.viewEvent(event);
    public readonly removeEvent = (event: any) =>
        this._state.removeEvent(event);

    public room(item: CalendarEvent) {
        return item.resources.find((_) => _.email !== this._state.calendar);
    }

    public get time_format() {
        return this._settings.time_format;
    }
    public attendeeCount(attendees: User[]) {
        if (!attendees?.length) return 0;
        return attendees.filter(
            (user: User) => user.email !== this._state.calendar,
        ).length;
    }

    public attendeeList(attendees: User[]) {
        if (!attendees?.length) return [];
        return attendees.filter(
            (user: User) => user.email !== this._state.calendar,
        );
    }

    public checkedInCount(attendees: User[]) {
        if (!attendees?.length) return 0;
        return attendees.filter((user: User) => user.checked_in).length;
    }

    public checkedInList(attendees: User[]) {
        if (!attendees?.length) return [];
        return attendees.filter((user: User) => user.checked_in);
    }
}
