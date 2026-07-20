import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import {
    BookingCardComponent,
    BookingFormService,
    checkinBooking,
    checkinBookingInstance,
    removeBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    CalendarEvent,
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { openConfirmModal, TranslatePipe } from '@placeos/components';
import {
    EventCardComponent,
    EventFormService,
    queryEvents,
    removeEvent,
} from '@placeos/events';
import { format, isSameDay, parse } from 'date-fns';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { ScheduleFiltersComponent } from './schedule-filters.component';
import { ScheduleMobileCalendarComponent } from './schedule-mobile-calendar.component';
import { ScheduleSidebarComponent } from './schedule-sidebar.component';
import {
    ScheduleOptions,
    ScheduleStateService,
} from './schedule-state.service';

@Component({
    selector: 'app-schedule',
    template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div
            class="bg-base-200 relative flex h-1/2 flex-1 flex-col sm:flex-row"
        >
            <schedule-sidebar
                class="bg-base-100 hidden sm:block"
            ></schedule-sidebar>
            <div class="border-neutral bg-base-100 w-full border-b sm:hidden">
                <div class="flex items-center space-x-2 px-2 pt-2">
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        [class.inverse]="period !== 'day'"
                        (click)="setOptions({ period: 'day' })"
                    >
                        {{ 'COMMON.DAY' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        [class.inverse]="period !== 'week'"
                        (click)="setOptions({ period: 'week' })"
                    >
                        {{ 'COMMON.WEEK' | translate }}
                    </button>
                </div>
                @if (period === 'day') {
                    <schedule-mobile-calendar
                        [ngModel]="date()"
                        (ngModelChange)="setDate($event)"
                    ></schedule-mobile-calendar>
                }
                @if (period === 'week') {
                    <div class="my-2 w-full px-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                [ngModel]="week_date()"
                                (ngModelChange)="setDate($event)"
                                [placeholder]="'COMMON.WEEK_SELECT' | translate"
                            >
                                @for (option of week_options(); track option) {
                                    <mat-option
                                        [value]="option.id"
                                        class="leading-tight"
                                    >
                                        {{ option.name }}
                                        @if (option.this_week) {
                                            <span
                                                class="text-info px-1 text-xs"
                                                [matTooltip]="
                                                    'COMMON.WEEK_THIS'
                                                        | translate
                                                "
                                                >(C)</span
                                            >
                                        }
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
            <div class="h-full flex-1 space-y-2 overflow-auto p-4">
                <schedule-filters></schedule-filters>
                @if (booking_dates().length) {
                    @for (
                        date_block of booking_dates();
                        track date_block.date
                    ) {
                        <h3 class="my-2 font-medium">
                            {{ date_block.date | date: 'EEE dd LLL yyyy' }}
                            @if (date_block.is_today) {
                                <span>
                                    ({{ 'COMMON.TODAY' | translate }})
                                </span>
                            }
                        </h3>
                        @for (item of date_block.bookings; track item.id) {
                            @if (isEvent(item)) {
                                <event-card
                                    [event]="item"
                                    [edit_fn]="edit_fn"
                                    [remove_fn]="remove_fn"
                                ></event-card>
                            } @else {
                                <booking-card
                                    [booking]="item"
                                    [edit_fn]="edit_booking_fn"
                                    [remove_fn]="remove_fn"
                                    [end_fn]="end_fn"
                                    [refresh_fn]="refresh_fn"
                                ></booking-card>
                            }
                        }
                    }
                } @else {
                    <div
                        class="flex w-full flex-col items-center justify-center space-y-4 p-8"
                    >
                        <img src="assets/img/no-events.svg" class="mr-4" />
                        <p class="opacity-30">
                            {{ 'APP.WORKPLACE.SCHEDULE_EMPTY' | translate }}
                            {{ date() | date: 'EEEE, dd LLL yyyy' }}
                        </p>
                    </div>
                }
            </div>
            @if (loading()) {
                <mat-progress-bar
                    class="absolute inset-x-0 bottom-0"
                    mode="indeterminate"
                ></mat-progress-bar>
            }
        </div>
        @if (!hide_nav) {
            <footer-menu />
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule,
        TranslatePipe,
        FooterMenuComponent,
        BookingCardComponent,
        EventCardComponent,
        ScheduleFiltersComponent,
        ScheduleMobileCalendarComponent,
        ScheduleSidebarComponent,
        TopbarComponent,
    ],
})
export class ScheduleComponent extends AsyncHandler implements OnInit {
    private _state = inject(ScheduleStateService);
    private _event_form = inject(EventFormService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly booking_dates = computed(() => {
        const bookings = this._state.loading()
            ? []
            : [...this._state.filtered_bookings()];
        const sorted = bookings.sort((a, b) => a.date - b.date);
        const dates = new Set<string>();
        for (const booking of sorted) {
            const date = format(booking.date, 'yyyy-MM-dd');
            if (!dates.has(date)) dates.add(date);
        }
        const list = [];
        for (const date of dates) {
            const day = parse(date, 'yyyy-MM-dd', 0);
            list.push({
                id: date,
                date: day.valueOf(),
                bookings: sorted.filter((booking) =>
                    isSameDay(booking.date, day),
                ),
                is_today: isSameDay(day, Date.now()),
            });
        }
        return list;
    });
    public readonly date = this._state.date;
    public readonly loading = this._state.loading;
    public readonly setDate = (d) => this._state.setDate(d);

    public readonly week_date = this._state.week_date;
    public readonly week_options = this._state.week_options;

    public get period() {
        return this._state.getOptions().period;
    }

    public isEvent(item: any) {
        return item instanceof CalendarEvent;
    }

    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }

    public readonly edit_fn = (i) => this.edit(i);
    public readonly edit_booking_fn = (i) => this.editBooking(i);
    public readonly remove_fn = (i, t?) => this.remove(i, t);
    public readonly end_fn = (i) => this.end(i);
    public readonly refresh_fn = () => this._state.triggerPoll();

    public ngOnInit() {
        this._state.triggerPoll();
        this.subscription('poll', this._state.startPolling());
    }

    public trackByFn(index: number, item: { id: string }) {
        return item?.id;
    }

    public setOptions(options: ScheduleOptions) {
        this._state.setOptions(options);
    }

    public async edit(event: CalendarEvent) {
        this._router.navigate(['/book', 'meeting', 'form']);
        if (event.creator !== event.mailbox) {
            event =
                (
                    await queryEvents({
                        period_start: event.event_start,
                        period_end: event.event_end,
                        ical_uid: event.ical_uid,
                    })
                ).find((_) => _.ical_uid === event.ical_uid) || event;
        }
        setTimeout(() => this._event_form.newForm(event), 300);
    }

    public editBooking(event: Booking) {
        this._router.navigate(['/book', `${event.type}`]);
        this._booking_form.newForm(event.booking_type, event);
        if (event.booking_type === 'visitor') return;
        setTimeout(() => {
            this._booking_form.model.update((m) => ({
                ...m,
                resources: [
                    {
                        id: event.asset_id,
                        name: event.asset_name || event.description,
                    },
                ],
                asset_id: event.asset_id,
            }));
        }, 100);
    }

    public async remove(item: CalendarEvent | Booking, remove_series = false) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name =
            item instanceof CalendarEvent
                ? item.space?.display_name
                : item.asset_name || item.asset_id;
        const resp = await openConfirmModal(
            {
                title: i18n(
                    remove_series
                        ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_TITLE'
                        : 'APP.WORKPLACE.SCHEDULE_REMOVE_TITLE',
                    { name: resource_name, time },
                ),
                content: i18n(
                    remove_series
                        ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_MSG'
                        : 'APP.WORKPLACE.SCHEDULE_REMOVE_MSG',
                    { name: resource_name, time },
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (item instanceof CalendarEvent && item.creator !== item.mailbox) {
            item =
                (
                    await queryEvents({
                        period_start: item.event_start,
                        period_end: item.event_end,
                        ical_uid: item.ical_uid,
                    })
                ).find(
                    (_) => _.ical_uid === (item as CalendarEvent).ical_uid,
                ) || item;
        }
        if (resp.reason !== 'done') return;
        resp.loading(
            i18n(
                remove_series
                    ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_LOADING'
                    : 'APP.WORKPLACE.SCHEDULE_REMOVE_LOADING',
            ),
        );
        const remove_result = (
            item instanceof CalendarEvent ? removeEvent : removeBooking
        )(
            remove_series
                ? (item as any).recurring_event_id || item.id
                : item.id,
            {
                calendar: this._settings.get('app.events.use_bookings')
                    ? null
                    : (item as CalendarEvent).calendar || currentUser()?.email,
                system_id: (item as CalendarEvent).system?.id,
                instance: remove_series ? undefined : !!(item as any).instance,
                start_time: (item as any).instance
                    ? (item as any).instance
                    : undefined,
            } as any,
        ) as any;
        await (
            remove_result?.then instanceof Function
                ? remove_result
                : remove_result.toPromise()
        ).catch((e) => {
            notifyError(
                i18n(
                    remove_series
                        ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_ERROR'
                        : 'APP.WORKPLACE.SCHEDULE_REMOVE_ERROR',
                    { error: e },
                ),
            );
            resp.close();
            throw e;
        });
        notifySuccess(
            i18n(
                remove_series
                    ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_SUCCESS'
                    : 'APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS',
            ),
        );
        this._state.removeItem(item);
        this._dialog.closeAll();
    }

    public async end(item: Booking) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name = item.asset_name || item.asset_id;
        const resp = await openConfirmModal(
            {
                title: i18n('APP.WORKPLACE.SCHEDULE_END_TITLE'),
                content: i18n('APP.WORKPLACE.SCHEDULE_END_MSG', {
                    name: resource_name,
                    time,
                }),
                icon: { content: 'event_busy' },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return;
        resp.loading(i18n('APP.WORKPLACE.SCHEDULE_END_LOADING'));
        const promise = (
            item.instance
                ? checkinBookingInstance(item.id, item.instance, false)
                : checkinBooking(item.id, false)
        ).catch((e) => {
            notifyError(i18n('APP.WORKPLACE.SCHEDULE_END_ERROR', { error: e }));
            resp.close();
            throw e;
        });
        await promise;
        notifySuccess(i18n('APP.WORKPLACE.SCHEDULE_END_SUCCESS'));
        this._state.triggerPoll();
        this._dialog.closeAll();
    }
}
