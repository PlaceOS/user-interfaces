import { Component, computed, inject } from '@angular/core';
import { settingSignal } from 'libs/common/src/lib/settings.service';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { AlertsService } from './alerts.service';
import { SupportService } from './support.service';

function contains(str: string, substr: string) {
    return str.toLowerCase().includes(substr.toLowerCase());
}

@Component({
    selector: 'stagehand-remote-support',
    template: `
        <div class="absolute inset-0 flex bg-base-200">
            <sidebar />
            <div class="flex w-px flex-1 flex-col">
                <header
                    class="flex h-[4.5rem] w-full items-center justify-between border-base-400 bg-base-100 p-4"
                >
                    <h1 class="text-2xl font-bold">
                        AV Systems Remote Support
                    </h1>
                </header>
                <main class="w-full flex-1 overflow-auto">
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">Total Rooms</h3>
                                <icon class="text-3xl text-info">sensors</icon>
                            </div>
                            <div class="text-4xl font-bold">
                                {{ (room_list | async)?.length || '0' }}
                            </div>
                            <div class="text-sm opacity-40">+2 this month</div>
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">
                                    Active Alerts
                                </h3>
                                <icon class="text-3xl text-error">warning</icon>
                            </div>
                            <div class="text-4xl font-bold">
                                {{ alerts().length }}
                            </div>
                            <div class="text-sm opacity-40">
                                {{ critical_alerts() }} critical
                            </div>
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">
                                    System Uptime
                                </h3>
                                <icon class="text-3xl text-success"
                                    >show_chart</icon
                                >
                            </div>
                            <div class="text-4xl font-bold">99.9%</div>
                            <div class="text-sm opacity-40">Last 30 days</div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 px-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript flex-1 bg-base-100"
                        >
                            <icon matPrefix class="relative -left-2 text-2xl"
                                >search</icon
                            >
                            <input
                                matInput
                                [ngModel]="search.getValue()"
                                (ngModelChange)="search.next($event)"
                                placeholder="Search rooms..."
                            />
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript bg-base-100"
                        >
                            <mat-select
                                placeholder="All Rooms"
                                [ngModel]="state.getValue()"
                                (ngModelChange)="state.next($event)"
                            >
                                <mat-option>All Rooms</mat-option>
                                <mat-option value="in_use">In Use</mat-option>
                                <mat-option value="available"
                                    >Available</mat-option
                                >
                                <mat-option value="issues"
                                    >Has Issues</mat-option
                                >
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="overflow-auto p-4">
                        <simple-table
                            class="block w-full min-w-[88rem] overflow-hidden bg-base-100 text-sm"
                            [data]="filtered_rooms"
                            [filter]="search.getValue()"
                            [columns]="[
                                {
                                    key: 'display_name',
                                    name: 'Room',
                                },
                                {
                                    key: 'available',
                                    name: 'Status',
                                    content: status_template,
                                },
                                {
                                    key: 'event',
                                    name: is_eduction()
                                        ? 'Next Class'
                                        : 'Next Event',
                                    content: event_template,
                                },
                                {
                                    key: 'source',
                                    name: 'Current Source',
                                },
                                {
                                    key: 'mic_list',
                                    name: 'Microphones',
                                    content: mics_template,
                                },
                                {
                                    key: 'issues',
                                    name: 'Issues',
                                    content: issue_template,
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    content: actions_template,
                                    size: '3.5rem',
                                },
                            ]"
                            [selectable]="true"
                            [sortable]="true"
                            empty_message="No rooms able to be remotely supported"
                        ></simple-table>
                        <ng-template #status_template let-space="row">
                            <i
                                binding
                                [(model)]="status[space.id]"
                                [sys]="space.id"
                                mod="Bookings"
                                bind="status"
                            ></i>
                            <div class="flex items-center space-x-2 p-4">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-error]="
                                        status[space.id] === 'busy'
                                    "
                                    [class.bg-warning]="
                                        status[space.id] !== 'busy' &&
                                        status[space.id] !== 'free'
                                    "
                                    [class.bg-success]="
                                        status[space.id] === 'free'
                                    "
                                ></div>
                                <div>
                                    {{
                                        status[space.id] === 'free'
                                            ? 'Available'
                                            : status[space.id] === 'busy'
                                              ? 'In Use'
                                              : 'Pending'
                                    }}
                                </div>
                            </div>
                        </ng-template>
                        <ng-template #event_template let-space="row">
                            <i
                                binding
                                [(model)]="next[space.id]"
                                [sys]="space.id"
                                mod="Bookings"
                                bind="next_booking"
                            ></i>
                            <div class="p-4">
                                @if (next[space.id]) {
                                    {{
                                        next[space.id].event_start * 1000
                                            | date: 'shortTime'
                                    }}
                                    &ndash;
                                    {{ next[space.id].title }}
                                } @else {
                                    <span class="opacity-30">None</span>
                                }
                            </div>
                        </ng-template>
                        <ng-template #mics_template let-data="data">
                            <div class="flex flex-wrap p-2">
                                @for (
                                    mic of data;
                                    let idx = $index;
                                    track idx
                                ) {
                                    <div
                                        class="m-1 flex items-center rounded bg-info-light px-2 py-1"
                                    >
                                        <icon
                                            class="mr-1 text-2xl"
                                            className="material-symbols-outlined"
                                            >{{ mic.icon || 'mic' }}</icon
                                        >
                                        <div
                                            class="relative top-1 flex flex-col items-center"
                                        >
                                            <div class="text-xs">
                                                {{ mic.value }}%
                                            </div>
                                            <icon
                                                className="material-symbols-outlined"
                                                class="-mt-2 text-2xl"
                                                [class.text-success]="
                                                    mic.value > 50
                                                "
                                                [class.text-warning]="
                                                    mic.value > 20 &&
                                                    mic.value <= 50
                                                "
                                                [class.text-error]="
                                                    mic.value <= 20
                                                "
                                            >
                                                @if (mic.value > 75) {
                                                    battery_full_alt
                                                } @else if (mic.value > 50) {
                                                    battery_horiz_075
                                                } @else if (mic.value > 25) {
                                                    battery_horiz_050
                                                } @else if (mic.value > 10) {
                                                    battery_low
                                                } @else {
                                                    battery_very_low
                                                }
                                            </icon>
                                        </div>
                                    </div>
                                }
                            </div>
                        </ng-template>
                        <ng-template #feed_template>
                            <div
                                class="m-4 h-16 w-16 rounded bg-base-300"
                            ></div>
                        </ng-template>
                        <ng-template #issue_template let-data="data">
                            @if (data?.length) {
                                @let issue = data[0];
                                <div class="flex items-center space-x-2 p-4">
                                    <icon
                                        className="material-symbols-outlined"
                                        class="text-2xl"
                                        [class.text-error]="
                                            issue.severity === 'critical'
                                        "
                                        [class.text-warning]="
                                            issue.severity !== 'critical'
                                        "
                                        >{{
                                            issue.severity === 'critical'
                                                ? 'warning'
                                                : 'error'
                                        }}</icon
                                    >
                                    <div>{{ issue.subject }}</div>
                                </div>
                            } @else {
                                <div class="p-4 opacity-30">No issues</div>
                            }
                        </ng-template>
                        <ng-template #actions_template let-row="row">
                            <div class="p-2">
                                <button
                                    icon
                                    matRipple
                                    class="rounded"
                                    [matMenuTriggerFor]="menu"
                                >
                                    <icon class="text-2xl">more_vert</icon>
                                </button>
                                <mat-menu #menu="matMenu">
                                    <a
                                        mat-menu-item
                                        [href]="
                                            backoffice_link +
                                            '#/systems/' +
                                            row.id
                                        "
                                        target="_blank"
                                        ref="noopener noreferrer"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">build</icon>
                                            <div>Manage Room</div>
                                        </div>
                                    </a>
                                    <a
                                        mat-menu-item
                                        [href]="
                                            row.support_url ||
                                            service_link + '#/tabbed/' + row.id
                                        "
                                        target="_blank"
                                        ref="noopener noreferrer"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >devices</icon
                                            >
                                            <div>Control Room</div>
                                        </div>
                                    </a>
                                </mat-menu>
                            </div>
                        </ng-template>
                    </div>
                </main>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RemoteSupportComponent {
    private readonly _alerts = inject(AlertsService);
    private readonly _support = inject(SupportService);

    public readonly is_eduction = settingSignal('educational_environment');

    public readonly alerts = this._alerts.alerts;
    public readonly critical_alerts = computed(
        () =>
            this.alerts().filter((alert) => alert.severity === 'critical')
                .length,
    );

    public search = new BehaviorSubject('');
    public status: Record<string, string> = {};
    public next: Record<string, any> = {};
    public readonly state = new BehaviorSubject('');
    public readonly room_list = this._support.space_list;
    public readonly filtered_rooms = combineLatest([
        this.room_list,
        this.state,
        this.search,
    ]).pipe(
        map(([list, type, search]) => {
            list = list.filter((room) => {
                switch (type) {
                    case 'in_use':
                        return this.status[room.id] === 'busy';
                    case 'available':
                        return this.status[room.id] === 'free';
                    case 'issues':
                        return room.issues.length > 0;
                }
                return true;
            });
            return list;
        }),
    );

    public get backoffice_link() {
        return `${location.origin}/backoffice/`;
    }

    public get service_link() {
        return `${location.origin}/control/`;
    }
}
