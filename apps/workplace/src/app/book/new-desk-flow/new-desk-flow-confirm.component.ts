import { DatePipe } from '@angular/common';
import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BookingFormService, DAYS_OF_WEEK_INDEX } from '@placeos/bookings';
import {
    AsyncHandler,
    SettingsService,
    getTimezoneOffsetString,
    i18n,
    notifyError,
} from '@placeos/common';
import { formatRecurrence } from '@placeos/events';
import { Desk, OrganisationService } from '@placeos/organisation';
import { addMinutes, endOfDay } from 'date-fns';
import { map, take } from 'rxjs/operators';

@Component({
    selector: 'new-desk-flow-confirm',
    template: `
        <header
            class="flex items-center justify-between p-2 h-12 m-2 rounded bg-base-200"
        >
            <h2 class="text-xl font-medium px-2">
                {{ 'APP.WORKPLACE.DESK_CONFIRM_TITLE' | translate }}
            </h2>
            <div class="">
                <mat-spinner
                    diameter="32"
                    *ngIf="loading | async"
                ></mat-spinner>
                <button
                    icon
                    name="close-desk-confirm"
                    matRipple
                    *ngIf="show_close"
                    (click)="dismiss()"
                >
                    <app-icon class="text-2xl">close</app-icon>
                </button>
            </div>
        </header>
        <section period class="flex space-x-1 py-4 px-2 text-base">
            <app-icon class="text-success text-2xl">done</app-icon>
            <div details class="space-y-2">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">calendar_today</app-icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="
                        booking.recurrence_type &&
                        booking.recurrence_type !== 'none'
                    "
                >
                    <app-icon class="text-xl">update</app-icon>
                    <div date>{{ formatted_recurrence }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">schedule</app-icon>
                    <div time>
                        <div time>{{ formattedTime() }}</div>
                        <div class="text-xs opacity-30" *ngIf="timezone">
                            {{ formattedTime(tz) }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            desk
            class="text-base flex space-x-1 py-4 px-2 border-t border-neutral"
            *ngIf="booking_asset?.id"
        >
            <app-icon class="text-success text-2xl">done</app-icon>
            <div details class="space-y-2">
                <h3 class="text-xl">
                    {{ booking_asset?.name || booking_asset?.id || '' }}
                </h3>
                <div class="flex items-center space-x-2">
                    <app-icon>person</app-icon>
                    <span>
                        {{
                            ((is_group | async)
                                ? 'BOOKINGS.DESK_COUNT_GROUP'
                                : 'BOOKINGS.DESK_COUNT_LONE'
                            ) | translate
                        }}
                    </span>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>place</app-icon>
                    <div>{{ location }}</div>
                </div>
                <ng-container *ngFor="let feat of booking_asset.features">
                    <div features class="flex items-center space-x-2">
                        <app-icon>arrow_upward</app-icon>
                        <div>{{ feat }}</div>
                    </div>
                </ng-container>
            </div>
        </section>
        <section
            assets
            class="flex space-x-1 py-4 px-2 border-t max-h-[50vh] overflow-auto"
            *ngIf="assets.length"
        >
            <app-icon class="text-success">done</app-icon>
            <div details class="flex-1 leading-6 w-1/2 pr-2">
                <h3>{{ 'BOOKINGS.DESK_ASSETS_REQUESTED' | translate }}</h3>
                <div
                    request
                    *ngFor="let request of assets"
                    class="border bg-base-100 rounded-xl overflow-hidden"
                    [class.border-error]="end_time < request.deliver_at"
                    [class.border-base-300]="end_time >= request.deliver_at"
                >
                    <div class="flex items-center space-x-2 p-3">
                        <div class="flex-1 flex items-center space-x-2">
                            <div class="text-sm">
                                {{
                                    'FORM.ASSETS_REQUESTED_FOR'
                                        | translate
                                            : {
                                                  time:
                                                      request.deliver_at_time
                                                      | date
                                                          : 'MMM d, ' +
                                                                time_format,
                                              }
                                }}
                            </div>
                            <div
                                class="flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content"
                                [matTooltip]="err_tooltip"
                                *ngIf="end_time < request.deliver_at"
                            >
                                <app-icon>priority_high</app-icon>
                            </div>
                            <div class="flex-1"></div>
                            <div
                                class="text-xs bg-success text-success-content px-2 py-1 rounded"
                            >
                                {{
                                    'COMMON.ITEM_COUNT'
                                        | translate
                                            : { count: request.item_count }
                                }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col bg-base-200 divide-y divide-base-100"
                    >
                        <div
                            class="flex items-center px-3 py-1 space-x-2 hover:opacity-90"
                            *ngFor="let item of request.items"
                        >
                            <div class="flex items-center flex-1">
                                <span class="text-sm">{{
                                    item.name || 'Item'
                                }}</span>
                            </div>
                            <div
                                class="rounded bg-success text-success-content text-xs px-2 py-1"
                            >
                                x{{ item.quantity }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            locker
            class="flex space-x-1 py-4 px-2 border-t"
            *ngIf="needs_locker"
        >
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3>{{ 'BOOKINGS.DESK_LOCKER_REQUESTED' | translate }}</h3>
                <div class="flex space-x-2">
                    <span>Locker E-043</span>
                </div>
            </div>
        </section>
        <footer class="p-2 w-full border-t border-base-200 mt-4">
            <button
                name="confirm-desk"
                btn
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
            >
                {{ 'COMMON.CONFIRM' | translate }}
            </button>
        </footer>
    `,
    styles: [``],
})
export class NewDeskFlowConfirmComponent extends AsyncHandler {
    @Input() public show_close = false;

    private _date: DatePipe = new DatePipe('en');

    public readonly loading = this._state.loading;
    public readonly is_group = this._state.options.pipe(map((_) => _.group));

    public readonly postForm = async () => {
        try {
            if ((await this._state.options.pipe(take(1)).toPromise())?.group) {
                await this._state.postFormForGroup();
            } else {
                await this._state.postForm();
            }
            this.dismiss(true);
        } catch (e) {
            notifyError(
                typeof e === 'string'
                    ? e
                    : i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`),
            );
        }
    };
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e);

    public formattedTime(tz?: string) {
        const date = this.booking.date;
        const date_end = this.booking.date_end;
        const all_day = this.booking.all_day;
        const tz_format = this._date.transform(date, 'z', tz);
        const start_date = this._date.transform(date, 'MMM d', tz);
        const start_time = this._date.transform(date, this.time_format, tz);
        const end_date = this._date.transform(date_end, 'MMM d', tz);
        const end_time = this._date.transform(date_end, this.time_format, tz);

        if (this.is_multiday) {
            return `${start_date}${all_day ? '' : ', ' + start_time} - ${end_date}${all_day ? '' : ', ' + end_time}`;
        } else if (all_day) {
            return i18n('COMMON.ALL_DAY');
        }
        return `${start_time} - ${end_time} ${'(' + tz_format + ')'}`;
    }

    public get end_time() {
        const end = addMinutes(
            this.booking.date,
            this.booking.duration,
        ).valueOf();
        return this.booking.all_day ? endOfDay(end).valueOf() : end;
    }

    public get booking() {
        return this._state.form.value as any;
    }

    public get is_multiday() {
        return this.booking.duration > 24 * 60;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        return this._settings.get('app.desks.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz);
    }

    public get assets() {
        return this.booking.assets || null;
    }

    public get needs_locker() {
        return !!this.booking.secondary_resource;
    }

    public get assets_count() {
        return this.assets?.length
            ? this.assets.reduce((a, b) => a + b.amount, 0)
            : 0;
    }

    public get booking_asset() {
        return this.booking.booking_asset as Desk;
    }

    public get location() {
        const building = this._org.buildings.find(
            (b) => b.id === this.booking_asset?.zone?.parent_id,
        );
        const level = this._org.levels.find(
            (l) => l.id === this.booking_asset?.zone?.id,
        );
        return `${level?.display_name || level?.name}${building ? ',' : ''} ${
            building?.address || building?.display_name || building?.name || ''
        }`;
    }

    public get formatted_recurrence() {
        return formatRecurrence({
            pattern: this.booking.recurrence_type,
            start: this.booking.date,
            end: this.booking.recurrence_end * 1000,
            interval: this.booking.recurrence_interval,
            days_of_week: new Array(7)
                .fill(0)
                .map((_, i) => i)
                .filter(
                    (i) => this.booking.recurrence_days & DAYS_OF_WEEK_INDEX[i],
                ),
        });
    }

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        @Optional() private _sheet_ref: MatBottomSheetRef,
        private _settings: SettingsService,
    ) {
        super();
    }
}
