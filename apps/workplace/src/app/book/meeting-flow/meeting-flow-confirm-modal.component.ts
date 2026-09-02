import { CommonModule, DatePipe } from '@angular/common';
import {
    Component,
    OnInit,
    computed,
    inject,
    model,
    signal,
} from '@angular/core';
import {
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { addMinutes, endOfDay, startOfDay } from 'date-fns';

import { validateAssetRequestsForResource } from '@placeos/assets';
import {
    AssetRequest,
    AsyncHandler,
    CateringItem,
    CateringOrder,
    OrganisationService,
    SettingsService,
    Space,
    formatRecurrence,
    fromEventRecurrence,
    getTimezoneOffsetString,
    i18n,
    notifyError,
} from '@placeos/common';
import { EventFormService, multipleSpacesEnabled } from '@placeos/events';

import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    SanitizePipe,
    TranslatePipe,
    openConfirmModal,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';

@Component({
    selector: 'meeting-flow-confirm-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-160 max-w-full items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium capitalize">
                {{ 'APP.WORKPLACE.MEETING_CONFIRM' | translate }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
            @if (loading()) {
                <mat-spinner
                    diameter="32"
                    class="absolute top-1/2 right-2 -translate-y-1/2"
                ></mat-spinner>
            }
        </header>
        <main
            class="grid max-h-[65vh] w-full max-w-[calc(100vw-2rem)] flex-1 grid-cols-2 gap-4 overflow-auto px-4 pt-2 pb-4"
        >
            <div>
                <div class="mb-2 flex items-center space-x-4">
                    <div
                        class="border-success text-success flex items-center justify-center rounded-full border"
                    >
                        <icon class="text-2xl">done</icon>
                    </div>
                    <h3 class="text-xl">
                        {{ event.title || 'Meeting Details' }}
                    </h3>
                </div>
                <div class="space-y-1 pl-10">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">today</icon>
                        <div date>{{ event.date | date: 'fullDate' }}</div>
                    </div>
                    @if (event.recurrence?.pattern) {
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">update</icon>
                            <div date>{{ formatted_recurrence }}</div>
                        </div>
                    }
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">schedule</icon>
                        <div class="flex flex-col leading-tight">
                            <div time>{{ formattedTime() }}</div>
                            @if (timezone) {
                                <div class="text-xs opacity-30">
                                    {{ formattedTime(tz) }}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            @if (event.resources?.length) {
                <div>
                    <div class="mb-2 flex items-center space-x-4">
                        <div
                            class="border-success text-success flex items-center justify-center rounded-full border"
                        >
                            <icon class="text-2xl">done</icon>
                        </div>
                        <h3 class="text-xl">
                            {{
                                'APP.WORKPLACE.MEETING_BOOKED_ROOM' | translate
                            }}
                        </h3>
                    </div>
                    <div class="space-y-1 pl-10">
                        @for (s of event.resources; track s.email) {
                            <div class="flex items-start space-x-2">
                                <icon class="text-2xl">layers</icon>
                                <div class="flex flex-col">
                                    <div>
                                        {{ spaceLocation(s) }} /
                                        {{ s.display_name || s.name }}
                                    </div>
                                    @if (roomTime(s); as room_time) {
                                        <div
                                            room-time
                                            class="text-xs opacity-60"
                                        >
                                            {{ room_time }}
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
            @if (event.attendees?.length) {
                <div>
                    <div class="mb-2 flex items-center space-x-4">
                        <div
                            class="border-success text-success flex items-center justify-center rounded-full border"
                        >
                            <icon class="text-2xl">done</icon>
                        </div>
                        <h3 class="text-xl">
                            {{
                                'CALENDAR_EVENT.ATTENDEE_COUNT'
                                    | translate
                                        : {
                                              count: event.attendees?.length,
                                          }
                            }}
                        </h3>
                    </div>
                    <div class="pl-10" attendee-list>
                        <mat-chip-set aria-label="User selection">
                            @for (user of event.attendees; track user) {
                                <mat-chip>
                                    <div class="flex items-center">
                                        <icon class="mr-2">business</icon>
                                        {{ user.name || user.email }}
                                    </div>
                                </mat-chip>
                            }
                        </mat-chip-set>
                    </div>
                </div>
            }
            @if (event.catering?.length || event.assets?.length) {
                <div class="col-span-2">
                    @if (event.catering?.length) {
                        <div class="w-full">
                            <div class="mb-2 flex items-center space-x-4">
                                <div
                                    class="border-success text-success flex items-center justify-center rounded-full border"
                                >
                                    <icon class="text-2xl">done</icon>
                                </div>
                                <h3 class="text-xl">
                                    {{ 'RESOURCE.CATERING' | translate }}
                                </h3>
                            </div>
                            <div class="flex w-full flex-col space-y-2 pl-12">
                                @for (order of catering_orders; track order) {
                                    <div
                                        order
                                        class="bg-base-100 overflow-hidden rounded-xl border"
                                        [class.border-error]="
                                            end_time < order.deliver_at
                                        "
                                        [class.border-base-300]="
                                            end_time >= order.deliver_at
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2 p-3"
                                        >
                                            <div
                                                class="flex flex-1 items-center space-x-2"
                                            >
                                                <div class="text-sm">
                                                    {{
                                                        'CALENDAR_EVENT.CATERING_ORDER_AT'
                                                            | translate
                                                                : {
                                                                      time:
                                                                          order.deliver_at
                                                                          | date
                                                                              : 'MMM d, ' +
                                                                                    time_format,
                                                                  }
                                                    }}
                                                </div>
                                                @if (
                                                    end_time < order.deliver_at
                                                ) {
                                                    <div
                                                        class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                                        [matTooltip]="
                                                            'CALENDAR_EVENT.CATERING_ORDER_TIME_ERROR'
                                                                | translate
                                                        "
                                                    >
                                                        <icon
                                                            >priority_high</icon
                                                        >
                                                    </div>
                                                }
                                                <div class="flex-1"></div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    {{
                                                        'COMMON.ITEM_COUNT'
                                                            | translate
                                                                : {
                                                                      count: order.item_count,
                                                                  }
                                                    }}
                                                </div>
                                                <div
                                                    class="bg-info text-info-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    Total:
                                                    {{
                                                        order.total_cost / 100
                                                            | currency: code
                                                    }}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        >
                                            @for (
                                                item of order.items;
                                                track item
                                            ) {
                                                <div
                                                    class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                                >
                                                    <div
                                                        class="flex flex-1 items-center"
                                                    >
                                                        <span class="text-sm">{{
                                                            item.name || 'Item'
                                                        }}</span>
                                                        @if (
                                                            item.option_list
                                                                ?.length
                                                        ) {
                                                            <span
                                                                class="ml-4 text-xs font-normal opacity-60"
                                                                [matTooltip]="
                                                                    optionList(
                                                                        item
                                                                    )
                                                                "
                                                            >
                                                                {{
                                                                    'CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT'
                                                                        | translate
                                                                            : {
                                                                                  count:
                                                                                      item
                                                                                          .option_list
                                                                                          ?.length ||
                                                                                      '0',
                                                                              }
                                                                }}
                                                            </span>
                                                        }
                                                    </div>
                                                    <div
                                                        class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                    >
                                                        x{{ item.quantity }}
                                                    </div>
                                                    <div
                                                        class="bg-info text-info-content rounded-sm px-2 py-1 text-xs"
                                                    >
                                                        {{
                                                            item.unit_price_with_options /
                                                                100
                                                                | currency: code
                                                        }}
                                                        ea
                                                    </div>
                                                    <div
                                                        class="bg-info text-info-content rounded-sm px-2 py-1 text-xs"
                                                    >
                                                        {{
                                                            item.total_cost /
                                                                100
                                                                | currency: code
                                                        }}
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    @if (assets?.length) {
                        <div class="col-span-2 mt-4 w-full">
                            <div class="mb-2 flex items-center space-x-4">
                                <div
                                    class="border-success text-success flex items-center justify-center rounded-full border"
                                >
                                    <icon class="text-2xl">done</icon>
                                </div>
                                <h3 class="text-xl">
                                    {{ 'RESOURCE.ASSETS' | translate }}
                                </h3>
                            </div>
                            <div class="flex w-full flex-col space-y-2 pl-12">
                                @for (request of assets; track request) {
                                    <div
                                        request
                                        class="bg-base-100 w-full overflow-hidden rounded-xl border"
                                        [class.border-error]="
                                            end_time < request.deliver_at
                                        "
                                        [class.border-base-300]="
                                            end_time >= request.deliver_at
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2 p-3"
                                        >
                                            <div
                                                class="flex flex-1 items-center space-x-2"
                                            >
                                                <div class="text-sm">
                                                    {{
                                                        'CALENDAR_EVENT.ASSETS_REQUESTED_FOR'
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
                                                    end_time <
                                                        request.deliver_at ||
                                                    request.conflict
                                                ) {
                                                    <div
                                                        class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                                        [matTooltip]="
                                                            err_tooltip(request)
                                                        "
                                                    >
                                                        <icon
                                                            >priority_high</icon
                                                        >
                                                    </div>
                                                }
                                                <div class="flex-1"></div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
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
                                            class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        >
                                            @for (
                                                item of request.items;
                                                track item
                                            ) {
                                                <div
                                                    class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                                >
                                                    <div
                                                        class="flex flex-1 items-center"
                                                    >
                                                        <span class="text-sm">{{
                                                            item.name || 'Item'
                                                        }}</span>
                                                    </div>
                                                    <div
                                                        class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                    >
                                                        x{{ item.quantity }}
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            }
            @if (event.body) {
                <div class="relative space-y-2 py-4 pr-4 pl-16">
                    <div
                        class="border-success text-success absolute top-4 left-4 flex items-center justify-center rounded-full border text-2xl"
                    >
                        <icon>done</icon>
                    </div>
                    <h3 class="mt-0! text-xl">
                        {{ 'FORM.NOTES' | translate }}
                    </h3>
                    <div [innerHTML]="event.body | sanitize"></div>
                </div>
            }
            @if (requires_approval) {
                <div
                    class="bg-warning text-warning-content col-span-2 mt-2 rounded-sm border-none! px-2 py-1 text-center text-sm"
                >
                    {{ 'CALENDAR_EVENT.APPROVAL_REQUIRED_MSG' | translate }}
                </div>
            }
        </main>
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-end border-t p-2"
            >
                <button
                    btn
                    name="confirm-meeting"
                    matRipple
                    class="w-32"
                    (click)="postForm()"
                >
                    {{ 'COMMON.CONFIRM' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    providers: [SpacePipe],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        SanitizePipe,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatDialogModule,
    ],
})
export class MeetingFlowConfirmModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _space_pipe = inject(SpacePipe);
    private _dialog_ref = inject<
        MatDialogRef<MeetingFlowConfirmModalComponent>
    >(MatDialogRef, { optional: true });
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly show_close = model(false);

    private _loading = signal(false);

    private _date: DatePipe = new DatePipe('en');

    public readonly loading = computed(
        () => this._event_form.loading() || this._loading(),
    );
    public readonly catering_orders;
    public readonly assets;
    public err_tooltip(request: AssetRequest) {
        return request.conflict
            ? i18n('FORM.ASSETS_CLASH_ERROR')
            : i18n('FORM.ASSETS_TIME_ERROR');
    }

    public get requires_approval() {
        return this.event.resources.some((s) => s.approval);
    }

    public get has_assets() {
        return !!this._settings.get('app.events.has_assets');
    }

    public get has_conflict() {
        return this.assets?.some((_) => _.conflict);
    }

    public formattedTime(tz?: string) {
        const date = this.event.date;
        const date_end = this.event.date_end;
        const all_day = this.event.all_day;
        const tz_format = this._date.transform(date, 'zzzz', tz);
        const start_date = this._date.transform(date, 'MMM d', tz);
        const start_time = this._date.transform(date, this.time_format, tz);
        const end_date = this._date.transform(date_end, 'MMM d', tz);
        const end_time = this._date.transform(date_end, this.time_format, tz);

        if (this.is_multiday) {
            return `${start_date}${all_day ? '' : ', ' + start_time} - ${end_date}${all_day ? '' : ', ' + end_time}`;
        } else if (all_day) {
            return 'All Day';
        }
        return `${start_time} - ${end_time} ${'(' + tz_format + ')'}`;
    }

    public readonly postForm = async () => {
        if (!this.space) {
            const result = await openConfirmModal(
                {
                    title: i18n('APP.WORKPLACE.MEETING_WITHOUT_ROOM_TITLE'),
                    content: i18n('APP.WORKPLACE.MEETING_WITHOUT_ROOM_MSG'),
                    icon: { content: 'event_available' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.close();
        }
        const resp = await this._event_form.postForm().catch((_) => {
            notifyError(_);
            return false;
        });
        if (resp) this.dismiss(true);
    };
    public readonly cancelPost = () => this._event_form.cancelPostForm();
    public readonly dismiss = (e?) => this._dialog_ref?.close(e);

    private _space = this.event.resources[0];

    public get is_multiday() {
        return this.event.duration > 24 * 60;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        if (multipleSpacesEnabled(this._settings)) {
            return this.event.timezone || '';
        }
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz, new Date(this.event.date));
    }

    public get end_time() {
        return this.event.all_day
            ? endOfDay(this.event.date_end).valueOf()
            : this.event.date_end;
    }

    public get event() {
        return this._event_form.model() as any;
    }

    public get space(): Space {
        return this.event.resources[0];
    }

    public get level() {
        return this._org.levelWithID(this.space.zones);
    }

    /** Get the region, building and level label for a room. */
    public spaceLocation(space: Space) {
        return this._org.locationWithID(space.zones).label;
    }

    /** Format a room's local time when it differs from the organiser's. */
    public roomTime(space: Space): string {
        if (!multipleSpacesEnabled(this._settings) || this.event.all_day) {
            return '';
        }
        const room_timezone = this._org.locationWithID(space.zones).building
            ?.timezone;
        const user_timezone =
            this.event.timezone ||
            Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (!room_timezone || !user_timezone) return '';
        try {
            const date = new Date(this.event.date);
            const room_offset = getTimezoneOffsetString(room_timezone, date);
            const user_offset = getTimezoneOffsetString(user_timezone, date);
            return room_offset === user_offset
                ? ''
                : this.formattedTime(room_offset);
        } catch {
            return '';
        }
    }

    public get location() {
        const building = this._org.buildings.find((_) =>
            this.space.zones.includes(_.id),
        );
        return building?.address || building?.display_name || building?.name;
    }

    public get code() {
        return this._org.currency_code;
    }

    public get formatted_recurrence() {
        const recurrence_start = this.event.recurrence.start || this.event.date;
        return formatRecurrence(
            fromEventRecurrence({
                ...this.event.recurrence,
                start: recurrence_start,
            }),
            recurrence_start,
        );
    }

    public async ngOnInit() {
        const date = this.event.all_day
            ? startOfDay(this.event.date).valueOf()
            : this.event.date;
        (this as any).catering_orders = this.event.catering?.map(
            (order) =>
                new CateringOrder({
                    ...order,
                    event: {
                        ...this.event,
                        date: date,
                        date_end: addMinutes(
                            date,
                            this.event.duration,
                        ).valueOf(),
                    },
                }),
        );
        (this as any).assets = this.event.assets?.map(
            (_) => new AssetRequest({ ..._, event: this.event }),
        );
        this._space =
            (await this._space_pipe.transform(
                this.event.resources[0]?.email,
            )) || this._space;
        const original_space_ids = new Set(
            this._event_form.event?.resources?.map((space) => space.id) || [],
        );
        const changed_spaces =
            !this._event_form.event ||
            original_space_ids.size !== this.event.resources.length ||
            this.event.resources.some(
                (space) => !original_space_ids.has(space.id),
            );
        const changed_times =
            !this._event_form.event ||
            this.event.date !== this._event_form.event.date ||
            this.event.date_end !== this._event_form.event.date_end;
        const event = this._event_form.model();
        this._loading.set(true);
        if (this.has_assets && event.assets?.length) {
            await validateAssetRequestsForResource(
                this._event_form.event || {},
                {
                    date: this.event.date,
                    duration: this.event.duration,
                    host: this.event.host,
                    all_day: this.event.all_day,
                    location_name:
                        this._space?.display_name || this._space?.name || '',
                    location_id: this._space?.id || '',
                    zones: this._space?.level?.parent_id
                        ? [this._space?.level?.parent_id]
                        : [this._org.building?.id],
                    reset_state: changed_times,
                },
                event.assets,
                changed_spaces || changed_times,
            ).catch((e) => notifyError(e));
            this.timeout(
                'update_assets',
                () => {
                    (this as any).assets = event.assets?.map(
                        (_) => new AssetRequest({ ..._, event }),
                    );
                    this._event_form.model.update((m) => ({
                        ...m,
                        assets: event.assets,
                    }));
                },
                100,
            );
        }
        this._loading.set(false);
    }

    public optionList(item: CateringItem) {
        return item.option_list?.map((_) => _.name).join('\n');
    }
}
