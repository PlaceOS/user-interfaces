import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    SettingsService,
    i18n,
    nextValueFrom,
    settingSignal,
} from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    EventDetailsModalComponent,
    SetupBreakdownModalComponent,
} from '@placeos/events';
import { UserPipe } from '@placeos/users';
import { DateOptionsComponent } from '../ui/date-options.component';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'room-bookings-list',
    template: `
        <div class="flex h-full w-full flex-col">
            <div
                class="border-base-200 bg-base-100 flex items-center justify-center border-b p-2"
            >
                <date-options
                    [date]="date()"
                    [step]="period() === 'week' ? 7 : 1"
                    [display_mode]="period() === 'week' ? 'week' : 'day'"
                    [week_start]="week_start"
                    (dateChange)="setDate($event)"
                    [is_new]="true"
                    [hide_today]="true"
                ></date-options>
            </div>
            <div class="min-h-0 flex-1 overflow-auto px-8 pb-16">
                <simple-table
                    class="block min-w-368 text-sm"
                    [data]="bookings()"
                    [columns]="[
                        {
                            key: 'date',
                            name: 'FORM.DATE' | translate,
                            content: date_template,
                            size: '4rem',
                            sortable: false,
                        },
                        {
                            key: 'date',
                            name: 'FORM.PERIOD' | translate,
                            content: period_template,
                            size: '9rem',
                        },
                        {
                            key: 'room_name',
                            name: 'RESOURCE.ROOM' | translate,
                        },
                        {
                            key: 'host',
                            name: 'FORM.HOST' | translate,
                            content: user_template,
                        },
                        {
                            key: 'title',
                            name: 'FORM.TITLE' | translate,
                        },
                        {
                            key: 'type',
                            name: 'COMMON.TYPE' | translate,
                            content: type_template,
                            sortable: false,
                        },
                        {
                            key: 'status',
                            name: 'COMMON.STATUS' | translate,
                            content: status_template,
                            sortable: false,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: action_template,
                            size: '3.25rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'APP.CONCIERGE.SCHEDULE_EMPTY' | translate"
                    [sortable]="true"
                ></simple-table>
            </div>
            @if (loading()) {
                <div
                    class="absolute top-14 right-0 bottom-0 left-0 z-30 flex flex-col items-center justify-center space-y-2 p-2"
                >
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-80"
                    ></div>
                    <mat-spinner diameter="32"></mat-spinner>
                    <p class="relative z-10">
                        {{ 'COMMON.LOADING' | translate }}...
                    </p>
                </div>
            }
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    @if (!row.all_day && row.duration <= 12 * 60) {
                        <div class="p-2">
                            {{ row.date | date: time_format }} &ndash;
                            {{ row.date_end | date: time_format }}
                        </div>
                    }
                    @if (row.all_day || row.duration > 12 * 60) {
                        <div class="p-2">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #user_template let-email="data">
                @let user = email | user: 'email-prefix' | async;
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{ user?.name || user?.email || email }}
                    </div>
                    @if (user?.name) {
                        <div
                            class="max-w-48 truncate text-xs opacity-30 select-all"
                        >
                            {{ email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #type_template let-row="row">
                <div class="px-4 py-2">
                    {{
                        (row.type === 'external'
                            ? 'COMMON.TYPE_EXTERNAL'
                            : row.type === 'cancelled'
                              ? 'COMMON.TYPE_CANCELLED'
                              : 'COMMON.TYPE_INTERNAL'
                        ) | translate
                    }}
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-4 py-2">
                    <div
                        class="bg-success text-success-content inline-flex rounded-full px-3 py-1 text-xs"
                        [class.bg-error!]="
                            !row.deleted &&
                            (row.type === 'cancelled' ||
                                row.status === 'declined')
                        "
                        [class.text-error-content!]="
                            !row.deleted &&
                            (row.type === 'cancelled' ||
                                row.status === 'declined')
                        "
                        [class.bg-neutral!]="row.deleted"
                        [class.text-neutral-content!]="row.deleted"
                        [class.bg-warning!]="
                            row.status === 'tentative' && !row.deleted
                        "
                        [class.text-warning-content!]="
                            row.status === 'tentative' && !row.deleted
                        "
                    >
                        {{
                            (row.deleted
                                ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
                                : row.type === 'cancelled' ||
                                    row.status === 'declined'
                                  ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                  : row.status === 'tentative'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    : 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                            ) | translate
                        }}
                    </div>
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                @if (show_actions(row)) {
                    <div class="mx-auto">
                        <button
                            icon
                            default
                            matRipple
                            [matMenuTriggerFor]="action_menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #action_menu="matMenu">
                            @if (!hide_edit()) {
                                <button mat-menu-item (click)="edit(row)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">edit</icon>
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (can_delete()) {
                                <button mat-menu-item (click)="cancel(row)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >delete</icon
                                        >
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_DELETE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (is_concierge) {
                                <button mat-menu-item (click)="print(row)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">print</icon>
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_PRINT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (row.recurring_event_id) {
                                <button
                                    mat-menu-item
                                    (click)="cancel(row, true)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >delete</icon
                                        >
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_DELETE_SERIES'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @for (act of custom_actions(); track act) {
                                <button
                                    mat-menu-item
                                    (click)="performAction(row, act.id)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">{{
                                            act.icon
                                        }}</icon>
                                        <div>{{ act.name }}</div>
                                    </div>
                                </button>
                            }
                        </mat-menu>
                    </div>
                }
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    providers: [UserPipe],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        IconComponent,
        SimpleTableComponent,
        DateOptionsComponent,
        UserPipe,
    ],
})
export class RoomBookingsListComponent {
    private _state = inject(EventsStateService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly can_delete = settingSignal('events.allow_deleting', false);
    public readonly events = this._state.filtered;
    public readonly date = this._state.date;
    public readonly period = this._state.period;
    public readonly spaces = this._state.spaces;
    public readonly loading = this._state.loading;
    public readonly bookings = computed(() =>
        [...this.events()]
            .filter((event) => !event.extension_data?.shared_event)
            .sort((a, b) => a.date - b.date)
            .map((event) => ({
                ...event,
                source_event: event,
                room_name: this.room_name(event),
                type: event.guests?.length
                    ? 'external'
                    : event.status === 'declined'
                      ? 'cancelled'
                      : 'internal',
            })),
    );

    public readonly setDate = (date) => this._state.setDate(date);
    public readonly edit = (event) =>
        this._state.newBooking(event?.source_event || event);
    public readonly cancel = (event, series = false) =>
        this._state.removeBooking(event?.source_event || event, series);

    public readonly hide_edit = computed(
        () => !this._settings.get('app.events.allow_edit'),
    );
    public readonly custom_actions = computed(
        () => this._settings.get('app.events.custom_actions') || [],
    );

    public readonly show_actions = (event) =>
        event?.state !== 'done' &&
        !this._settings.get('app.events.booking_unavailable');

    public get is_concierge() {
        return (this._settings.app_name || '')
            .toLowerCase()
            .includes('concierge');
    }

    public print(event) {
        const ref = this._dialog.open(EventDetailsModalComponent, {
            data: {
                event: event?.source_event || event,
                edit_fn: this.edit,
                remove_fn: this.cancel,
            },
        });
        ref.componentInstance.hide_edit.set(this.hide_edit());
        ref.componentInstance.printEvent();
    }

    public async performAction(event, action: string) {
        event = event?.source_event || event;
        if (!action.includes('breakdown')) return;
        const ref = this._dialog.open(SetupBreakdownModalComponent, {
            data: event,
        });
        const data = await nextValueFrom(ref.afterClosed());
        if (data) this._state.replace(data);
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get week_start() {
        return this._settings.get('app.week_start');
    }

    private room_name(event: any) {
        const space = this.spaces().find(
            (item) =>
                event.resources?.some(
                    (resource) =>
                        resource.id === item.id ||
                        resource.email === item.email,
                ) ||
                event.system?.id === item.id ||
                event.system?.email === item.email,
        );
        return (
            space?.display_name ||
            space?.name ||
            event.location ||
            i18n('RESOURCE.ROOM') ||
            ''
        );
    }
}
