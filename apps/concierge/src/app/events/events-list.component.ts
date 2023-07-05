import { Component } from '@angular/core';
import { CalendarEvent } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { addMinutes } from 'date-fns';

@Component({
    selector: 'app-event-list',
    template: `
        <div class="w-full h-full flex flex-col">
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">Events</h2>
                <a
                    btn
                    matRipple
                    [routerLink]="['/entertainment', 'events', 'manage']"
                >
                    <div class="ml-2">Create Event</div>
                    <app-icon class="text-2xl">chevron_right</app-icon>
                </a>
            </div>
            <div filters class=""></div>
            <div class="h-1/2 flex-1 w-full px-8 overflow-auto">
                <custom-table
                    class="min-w-[64rem] block"
                    [dataSource]="event_list"
                    [columns]="[
                        'events',
                        'level',
                        'room',
                        'attending',
                        'status',
                        'actions'
                    ]"
                    [display_column]="[
                        'Event',
                        'Level',
                        'Room',
                        'Attending',
                        'Status',
                        ' '
                    ]"
                    [column_size]="['20r', '10r', '10r', '8r', '8r', 'flex']"
                    [template]="{
                        events: event_template,
                        level: level_template,
                        room: room_template,
                        attending: attending_template,
                        status: status_template,
                        actions: actions_template
                    }"
                ></custom-table>
            </div>
        </div>
        <ng-template #event_template let-item="row">
            <div class="flex items-center space-x-2">
                <div date class="flex flex-col items-center leading-tight">
                    <div month class="text-sm font-medium relative top-0.5">
                        {{ item.date | date: 'MMM' }}
                    </div>
                    <div day class="text-2xl font-light relative -top-0.5">
                        {{ item.date | date: 'd' }}
                    </div>
                </div>
                <div
                    class="h-12 w-12 rounded overflow-hidden bg-gray-200"
                ></div>
                <div details class="flex flex-col">
                    <div class="text-sm">{{ item.title }}</div>
                    <div class="text-xs opacity-40">
                        {{ item.date | date: 'EEEE, h:mma' }} &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: 'h:mma z'
                        }}
                    </div>
                    <div class="text-xs">
                        {{
                            item.location ||
                                (
                                    (item.resources[0]?.email | space | async)
                                        ?.zones | building
                                )?.address
                        }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #level_template let-item="row">
            {{
                ((item.resources[0]?.email | space | async)?.zones | level)
                    ?.display_name
            }}
        </ng-template>
        <ng-template #room_template let-item="row">
            {{ (item.resources[0]?.email | space | async)?.display_name }}
        </ng-template>
        <ng-template #attending_template let-item="row">
            {{ item.attendees?.length || 1 }}
        </ng-template>
        <ng-template #status_template let-item="row">
            <div
                class="px-4 py-1 rounded-full"
                [class.text-white]="
                    item.state !== 'done' && item.state !== 'in_progress'
                "
                [class.bg-green-600]="
                    item.state !== 'done' && item.state !== 'in_progress'
                "
                [class.bg-yellow-400]="item.state === 'in_progress'"
                [class.bg-gray-300]="item.state === 'done'"
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
        <ng-template #actions_template let-item="row">
            <div class="w-full flex items-center justify-end space-x-2">
                <button icon matRipple [matMenuTriggerFor]="menu">
                    <app-icon>more_vert</app-icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item>Promote Event</button>
                <button mat-menu-item>View</button>
                <button mat-menu-item>Edit</button>
                <button mat-menu-item>Copy URL</button>
                <button mat-menu-item>Delete</button>
            </mat-menu>
        </ng-template>
    `,
    styles: [
        `
            :host {
                flex: 1;
            }
        `,
    ],
})
export class EventsListComponent {
    public event_list = [
        new CalendarEvent({
            title: 'Test Event',
            date: addMinutes(new Date(), -15).valueOf(),
            resources: [{ email: 'testroom1@0cbfs.onmicrosoft.com' } as any],
        }),
    ];

    constructor(private _org: OrganisationService) {}
}
