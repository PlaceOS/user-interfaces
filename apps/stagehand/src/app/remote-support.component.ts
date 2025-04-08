import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

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
                    <div class="flex items-center space-x-4 p-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript flex-1 bg-base-100"
                        >
                            <icon matPrefix class="relative -left-2 text-2xl"
                                >search</icon
                            >
                            <input
                                matInput
                                [(ngModel)]="search"
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
                            [filter]="search"
                            [columns]="[
                                {
                                    key: 'name',
                                    name: 'Room',
                                },
                                {
                                    key: 'available',
                                    name: 'Status',
                                    content: status_template,
                                },
                                {
                                    key: 'event',
                                    name: 'Next Class',
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
                                    key: 'feed',
                                    name: 'Camera Feed',
                                    content: feed_template,
                                    size: '8rem',
                                    sortable: false,
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
                        <ng-template #status_template let-data="data">
                            <div class="flex items-center space-x-2 p-4">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-error]="!data"
                                    [class.bg-success]="data"
                                ></div>
                                <div>{{ data ? 'Available' : 'In Use' }}</div>
                            </div>
                        </ng-template>
                        <ng-template #event_template let-data="data">
                            <div class="p-4">
                                @if (data) {
                                    {{ data.date | date: 'shortTime' }} &ndash;
                                    {{ data.title }}
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
                        <ng-template #actions_template>
                            <div class="p-2">
                                <button icon matRipple class="rounded">
                                    <icon class="text-2xl">more_vert</icon>
                                </button>
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
    public search = '';
    public readonly state = new BehaviorSubject('');
    public readonly room_list = new BehaviorSubject([
        {
            name: 'Lecture Theatre 1',
            available: false,
            event: { date: Date.now(), title: 'COMP201' },
            source: 'HDMI1 (Lecturn PC)',
            mic_list: [
                { icon: 'mic', value: 85 },
                { icon: 'devices', value: 1 },
            ],
            feed: '',
            issues: [],
        },
        {
            name: 'Collaborative Space A',
            available: false,
            event: { date: Date.now(), title: 'MGMT305' },
            source: 'Wireless Display (Team 2)',
            mic_list: [
                { icon: 'mic', value: 40 },
                { icon: 'devices', value: 67 },
            ],
            feed: '',
            issues: [
                {
                    severity: 'warning',
                    subject: 'Occasional wireless display latency',
                },
            ],
        },
        {
            name: 'Science Lab 2B',
            available: true,
            event: { date: Date.now(), title: 'CHEM101' },
            source: '',
            mic_list: [
                { icon: 'mic', value: 54 },
                { icon: 'devices', value: 32 },
            ],
            feed: '',
            issues: [],
        },
    ]);
    public readonly filtered_rooms = combineLatest([
        this.room_list,
        this.state,
    ]).pipe(
        map(([list, type]) => {
            return list.filter((room) => {
                switch (type) {
                    case 'in_use':
                        return !room.available;
                    case 'available':
                        return room.available;
                    case 'issues':
                        return room.issues.length > 0;
                }
                return true;
            });
        }),
    );
}
