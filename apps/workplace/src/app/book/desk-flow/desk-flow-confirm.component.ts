import { DatePipe } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    SettingsService,
    formatRecurrence,
    fromBookingRecurrence,
    getTimezoneOffsetString,
    i18n,
    nextValueFrom,
    notifyError,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { addMinutes, endOfDay } from 'date-fns';
import { AssetRequest } from 'libs/assets/src/lib/asset-request.class';
import { map } from 'rxjs/operators';

@Component({
    selector: 'desk-flow-confirm',
    template: `
        <header
            class="sticky top-2 z-10 mx-auto mb-4 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 p-2"
        >
            <h2 class="m-0 flex-1 px-2 text-xl font-medium capitalize">
                {{ 'APP.WORKPLACE.DESK_CONFIRM_TITLE' | translate }}
            </h2>
            <div class="">
                @if (loading | async) {
                    <mat-spinner diameter="32"></mat-spinner>
                }
                @if (show_close()) {
                    <button
                        icon
                        name="close-desk-confirm"
                        matRipple
                        (click)="dismiss()"
                    >
                        <icon class="text-2xl">close</icon>
                    </button>
                }
            </div>
        </header>
        <section period class="flex space-x-1 px-2 py-4 text-base">
            <icon class="text-2xl text-success">done</icon>
            <div details class="space-y-2">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">calendar_today</icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                @if (
                    booking.recurrence_type &&
                    booking.recurrence_type !== 'none'
                ) {
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">update</icon>
                        <div date>{{ formatted_recurrence }}</div>
                    </div>
                }
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">schedule</icon>
                    <div time>
                        <div time>{{ formattedTime() }}</div>
                        @if (timezone) {
                            <div class="text-xs opacity-30">
                                {{ formattedTime(tz) }}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
        @if (booking_asset?.id) {
            <section
                desk
                class="flex space-x-1 border-t border-neutral px-2 py-4 text-base"
            >
                <icon class="text-2xl text-success">done</icon>
                <div details class="space-y-2">
                    <h3 class="text-xl">
                        {{ booking_asset?.name || booking_asset?.id || '' }}
                    </h3>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
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
                        <icon>place</icon>
                        <div>{{ location }}</div>
                    </div>
                    @for (feat of booking_asset.features; track feat) {
                        <div features class="flex items-center space-x-2">
                            <icon>arrow_upward</icon>
                            <div>{{ feat }}</div>
                        </div>
                    }
                </div>
            </section>
        }
        @if (assets.length) {
            <section
                assets
                class="flex max-h-[50vh] space-x-1 overflow-auto border-t px-2 py-4"
            >
                <icon class="text-success">done</icon>
                <div details class="w-1/2 flex-1 pr-2 leading-6">
                    <h3>{{ 'BOOKINGS.DESK_ASSETS_REQUESTED' | translate }}</h3>
                    @for (request of assets; track request) {
                        <div
                            request
                            class="overflow-hidden rounded-xl border bg-base-100"
                            [class.border-error]="end_time < request.deliver_at"
                            [class.border-base-300]="
                                end_time >= request.deliver_at
                            "
                        >
                            <div class="flex items-center space-x-2 p-3">
                                <div class="flex flex-1 items-center space-x-2">
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
                                    @if (
                                        end_time < request.deliver_at ||
                                        request.conflict
                                    ) {
                                        <div
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-error text-error-content"
                                            [matTooltip]="err_tooltip(request)"
                                        >
                                            <icon>priority_high</icon>
                                        </div>
                                    }
                                    <div class="flex-1"></div>
                                    <div
                                        class="rounded bg-success px-2 py-1 text-xs text-success-content"
                                    >
                                        {{
                                            'COMMON.ITEM_COUNT'
                                                | translate
                                                    : {
                                                          count: request.item_count,
                                                      }
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex flex-col divide-y divide-base-100 bg-base-200"
                            >
                                @for (item of request.items; track item) {
                                    <div
                                        class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                    >
                                        <div class="flex flex-1 items-center">
                                            <span class="text-sm">{{
                                                item.name || 'Item'
                                            }}</span>
                                        </div>
                                        <div
                                            class="rounded bg-success px-2 py-1 text-xs text-success-content"
                                        >
                                            x{{ item.quantity }}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </section>
        }
        @if (needs_locker) {
            <section locker class="flex space-x-1 border-t px-2 py-4">
                <icon class="text-success">done</icon>
                <div details class="leading-6">
                    <h3>{{ 'BOOKINGS.DESK_LOCKER_REQUESTED' | translate }}</h3>
                    <div class="flex space-x-2">
                        <span>Locker E-043</span>
                    </div>
                </div>
            </section>
        }
        <footer class="mt-4 w-full border-t border-base-200 p-2">
            @if (!(loading | async)) {
                <button
                    name="confirm-desk"
                    btn
                    matRipple
                    class="w-full"
                    (click)="postForm()"
                >
                    {{ 'COMMON.CONFIRM' | translate }}
                </button>
            }
        </footer>
    `,
    styles: [``],
    standalone: false,
})
export class NewDeskFlowConfirmComponent extends AsyncHandler {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _sheet_ref = inject(MatBottomSheetRef, { optional: true });
    private _settings = inject(SettingsService);

    public readonly show_close = model(false);

    private _date: DatePipe = new DatePipe('en');

    public booking_asset: Desk;

    public err_tooltip(request: AssetRequest) {
        return request.conflict
            ? i18n('FORM.ASSETS_CLASH_ERROR')
            : i18n('FORM.ASSETS_TIME_ERROR');
    }

    public readonly loading = this._state.loading;
    public readonly is_group = this._state.options.pipe(map((_) => _.group));

    public readonly postForm = async () => {
        try {
            if ((await nextValueFrom(this._state.options))?.group) {
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
        const tz_format = this._date.transform(date, 'zzzz', tz);
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
        return formatRecurrence(fromBookingRecurrence(this.booking));
    }

    public async ngOnInit() {
        const resources = await nextValueFrom(this._state.resources);
        const asset = this.booking.booking_asset;
        this.booking_asset = resources.find((_) => _.id == asset.id) as Desk;
    }
}
