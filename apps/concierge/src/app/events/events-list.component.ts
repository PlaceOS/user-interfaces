import { Component } from '@angular/core';
import {
    AsyncHandler,
    SettingsService,
    notifyError,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import { EventStateService } from './event-state.service';
import { MatDialog } from '@angular/material/dialog';
import { GroupEventDetailsModalComponent } from 'apps/workplace/src/app/events/group-event-details-modal.component';
import { removeBooking } from '@placeos/bookings';
import {
    addDays,
    addMonths,
    endOfDay,
    startOfMonth,
    startOfWeek,
    format,
} from 'date-fns';
import { BehaviorSubject } from 'rxjs';

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
            <div filters class="flex items-center px-8 space-x-2 pb-4">
                <mat-form-field appearance="outline" class="w-32 no-subscript">
                    <mat-select
                        [ngModel]="period.value"
                        (ngModelChange)="period.next($event)"
                    >
                        <mat-option value="week">Week</mat-option>
                        <mat-option value="month">Month</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="w-64 no-subscript">
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option
                            [value]="range.id"
                            *ngFor="let range of period_list"
                        >
                            {{ range.display }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="h-1/2 flex-1 w-full px-8 overflow-auto">
                <custom-table
                    class="min-w-[60rem] block"
                    [dataSource]="event_list"
                    [columns]="[
                        'date',
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
                    [column_size]="['24r', 'flex', '10r', '6r', '8r', '3.5r']"
                    [template]="{
                        date: event_template,
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
                    class="h-12 w-12 rounded overflow-hidden bg-base-200"
                ></div>
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
                            item.location ||
                                (
                                    (item.asset_id | space | async)?.zones
                                    | building
                                )?.address
                        }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #level_template let-item="row">
            {{ ((item.asset_id | space | async)?.zones | level)?.display_name }}
            <span *ngIf="item.asset_id | space | async" class="opacity-30">
                No Level
            </span>
        </ng-template>
        <ng-template #room_template let-item="row">
            {{ (item.asset_id | space | async)?.display_name }}
            <span *ngIf="item.asset_id | space | async" class="opacity-30">
                No Room
            </span>
        </ng-template>
        <ng-template #attending_template let-item="row">
            {{ item.attendees?.length || 1 }}
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
                <button icon matRipple [matMenuTriggerFor]="menu">
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
    styles: [
        `
            :host {
                flex: 1;
            }
        `,
    ],
})
export class EventsListComponent extends AsyncHandler {
    public period = new BehaviorSubject<'week' | 'month'>('week');
    public period_list = [];
    public selected_range: number;
    public readonly event_list = this._state.event_list;

    public get time_format() {
        return this._settings.time_format;
    }

    public viewEvent(event: any) {
        this._dialog.open(GroupEventDetailsModalComponent, { data: event });
    }

    public async removeEvent(event: any) {
        const result = await openConfirmModal(
            {
                title: 'Delete Event',
                content: `Are you sure you want to delete the event "${event.title}"?`,
                icon: { content: 'delete' },
                confirm_text: 'Delete',
            },
            this._dialog
        );
        if (result.reason !== 'done') return;
        result.loading('Deleting event...');
        await removeBooking(event.id)
            .toPromise()
            .catch((e) => {
                notifyError(e);
                result.close();
                throw e;
            });
        result.close();
        notifySuccess('Successfully deleted event.');
    }

    constructor(
        private _settings: SettingsService,
        private _state: EventStateService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'period',
            this.period.subscribe(() => {
                this._generatePeriods();
                if (this.period_list.length) {
                    this.setPeriod(this.period_list[0].id);
                    this.selected_range = this.period_list[0].id;
                }
            })
        );
        this._generatePeriods();
        if (this.period_list.length) {
            this.setPeriod(this.period_list[0].id);
            this.selected_range = this.period_list[0].id;
        }
    }

    public setPeriod(id: string) {
        const { start, end } = this.period_list.find((_) => _.id === id);
        this._state.setOptions({ date: start, end });
    }

    private _generatePeriods() {
        const periods = [];
        const period_type = this.period.value;
        let date = Date.now();
        const end_date = addDays(date, 12 * 30).valueOf();
        const week_offset = this._settings.get('app.week_start') || 0;
        if (period_type === 'month') {
            date = startOfMonth(date).valueOf();
        } else if (period_type === 'week') {
            date = startOfWeek(date, { weekStartsOn: week_offset }).valueOf();
        }
        while (date < end_date) {
            if (period_type === 'week') {
                const end = endOfDay(addDays(date, 6)).valueOf();
                periods.push({
                    id: date,
                    start: date,
                    end,
                    display: `${format(
                        Math.max(Date.now(), date),
                        'EEE, do MMM'
                    )} – ${format(end, 'do MMM')}`,
                });
                date = addDays(date, 7).valueOf();
            } else if (period_type === 'month') {
                const end = addDays(addMonths(date, 1), -1).valueOf();
                periods.push({
                    id: date,
                    start: date,
                    end,
                    display: `${format(date, 'MMMM yyyy')}`,
                });
                date = addMonths(date, 1).valueOf();
            } else break;
        }
        this.period_list = periods;
    }
}
