import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EventStateService } from './event-state.service';
import { User } from '@placeos/users';

@Component({
    selector: 'event-listing',
    template: `
        <custom-table
            class="min-w-[72rem] block"
            [dataSource]="event_list"
            [columns]="[
                'date',
                'level',
                'room',
                'interested',
                'attending',
                'status',
                'permissions',
                'actions'
            ]"
            [display_column]="[
                'Event',
                'Level',
                'Room',
                'Interested',
                'Attending',
                'Status',
                'Published',
                ' '
            ]"
            [column_size]="[
                '24r',
                'flex',
                '10r',
                '6r',
                '6r',
                '8r',
                '5r',
                '3.5r'
            ]"
            [template]="{
                date: event_template,
                level: level_template,
                room: room_template,
                interested: interested_template,
                attending: attending_template,
                status: status_template,
                permissions: published_template,
                actions: actions_template
            }"
        ></custom-table>
        <ng-template #event_template let-item="row">
            <div class="flex items-center space-x-2">
                <div date class="flex flex-col items-center leading-tight w-8">
                    <div
                        month
                        class="text-sm font-medium relative top-0.5 opacity-60"
                    >
                        {{ item.date | date: 'MMM' }}
                    </div>
                    <div day class="text-2xl font-light relative -top-0.5">
                        {{ item.date | date: 'd' }}
                    </div>
                </div>
                <div
                    class="flex items-center justify-center h-12 w-12 rounded overflow-hidden bg-base-200"
                >
                    <img
                        *ngIf="item.images?.length"
                        auth
                        [source]="item.images[0]"
                        class="min-h-full min-w-full"
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
            {{
                ((item.linked_event?.system_id | space | async)?.zones | level)
                    ?.display_name
            }}
            <span *ngIf="!item.linked_event?.system_id" class="opacity-30">
                No Level
            </span>
        </ng-template>
        <ng-template #room_template let-item="row">
            {{ (item.linked_event?.system_id | space | async)?.display_name }}
            <span *ngIf="!item.linked_event?.system_id" class="opacity-30">
                No Room
            </span>
        </ng-template>
        <ng-template #interested_template let-item="row">
            <button
                matRipple
                customTooltip
                [content]="view_attendees"
                class="px-2 rounded h-full w-full flex items-center justify-center"
            >
                {{ item.attendees?.length || 0 }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative w-[20rem] h-[28rem] overflow-auto bg-white rounded shadow"
                >
                    <attendee-list
                        [list]="item.attendees"
                        [host]="item.user_email"
                        [hide_close]="true"
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #attending_template let-item="row">
            <button
                matRipple
                customTooltip
                [content]="view_attendees"
                class="px-2 rounded h-full w-full flex items-center justify-center"
            >
                {{ checkedInCount(item.attendees) }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative w-[20rem] h-[28rem] overflow-auto bg-white rounded shadow"
                >
                    <attendee-list
                        [list]="item.attendees"
                        [host]="item.user_email"
                        [hide_close]="true"
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #published_template let-row="row">
            <div
                *ngIf="row.permission === 'OPEN' || row.permission === 'open'"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto"
            >
                <app-icon>done</app-icon>
            </div>
        </ng-template>
        <ng-template #status_template let-item="row">
            <div
                class="px-4 py-1 rounded-full"
                [class.bg-success]="
                    item.state !== 'done' && item.state !== 'in_progress'
                "
                [class.text-success-content]="
                    item.state !== 'done' && item.state !== 'in_progress'
                "
                [class.bg-warning]="item.state === 'in_progress'"
                [class.text-warning-content]="item.state === 'in_progress'"
                [class.bg-base-200]="item.state === 'done'"
                [class.text-base-content]="item.state === 'done'"
            >
                {{
                    item.state === 'done'
                        ? 'Done'
                        : item.state === 'in_progress'
                        ? 'In Progress'
                        : 'Active'
                }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="w-full flex items-center justify-end space-x-2">
                <button
                    icon
                    matRipple
                    [matMenuTriggerFor]="menu"
                    [disabled]="row.state === 'done'"
                >
                    <app-icon>more_vert</app-icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">
                            confirmation_number
                        </app-icon>
                        <div class="mr-2">Promote Event</div>
                    </div>
                </button>
                <button mat-menu-item (click)="viewEvent(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">visibility</app-icon>
                        <div class="mr-2">View Event</div>
                    </div>
                </button>
                <a
                    mat-menu-item
                    [routerLink]="[
                        '/entertainment',
                        'events',
                        'manage',
                        row?.id
                    ]"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">edit</app-icon>
                        <div class="mr-2">Edit Event</div>
                    </div>
                </a>
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">content_copy</app-icon>
                        <div class="mr-2">Copy URL</div>
                    </div>
                </button>
                <button mat-menu-item (click)="removeEvent(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl text-error">delete</app-icon>
                        <div class="mr-2">Delete Event</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `,
    styles: [``],
})
export class EventListingComponent {
    public readonly event_list = this._state.event_list;

    public readonly viewEvent = (event: any) => this._state.viewEvent(event);
    public readonly removeEvent = (event: any) =>
        this._state.removeEvent(event);

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _settings: SettingsService,
        private _state: EventStateService
    ) {}

    public checkedInCount(attendees: User[]) {
        if (!attendees?.length) return 0;
        return attendees.filter((user: User) => user.checked_in).length;
    }
}
