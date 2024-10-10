import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getUnixTime } from 'date-fns';

import { CalendarEvent } from './event.class';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { Building } from 'libs/organisation/src/lib/building.class';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    notifyError,
    SettingsService,
    getTimezoneOffsetString,
} from '@placeos/common';
import { Space } from 'libs/spaces/src/lib/space.class';
import { getModule } from '@placeos/ts-client';
import { MapLocateModalComponent } from 'libs/components/src/lib/map-locate-modal.component';
import { CateringItem } from 'libs/catering/src/lib/catering-item.class';
import { getEventMetadata } from './events.fn';
import { DatePipe } from '@angular/common';
import { I } from '@angular/cdk/keycodes';

const EMPTY_ACTIONS = [];

@Component({
    selector: 'event-details-modal',
    template: `
        <div
            class="w-screen h-screen print:min-h-screen print:w-screen sm:relative sm:inset-auto sm:w-[51rem] sm:h-auto sm:max-h-[80vh] bg-base-100 sm:bg-base-200 sm:rounded overflow-auto space-y-2 pb-2"
        >
            <div
                class="sm:flex flex-col items-center pb-4 max-h-screen sm:max-h-[80vh] sm:px-16 sm:border-b bg-base-100 border-base-200 print:border-none"
            >
                <i
                    binding
                    [(model)]="room_status"
                    [sys]="space?.id"
                    mod="Bookings"
                    bind="status"
                ></i>
                <div
                    class="h-8 w-full sm:hidden block"
                    *ngIf="!event?.system?.images?.length"
                ></div>
                <div
                    class="bg-neutral w-full h-64 sm:rounded-b overflow-hidden print:hidden"
                    *ngIf="event?.system?.images?.length"
                >
                    <image-carousel
                        [images]="event?.system?.images"
                        class="w-full h-64"
                    ></image-carousel>
                </div>
                <h3
                    title
                    class="px-3 mt-2 text-xl font-medium w-full"
                    [class.pt-4]="!event?.system?.images?.length"
                >
                    {{ event.title }}
                </h3>
                <div class="sm:flex items-center justify-between w-full">
                    <div class="flex m-2">
                        <status-pill [status]="event_status">
                            <div
                                class="flex flex-col leading-tight"
                                [class.pr-4]="timezone && tz"
                            >
                                <div>{{ period }}</div>
                                <div
                                    class="opacity-30 text-xs"
                                    *ngIf="timezone && tz"
                                >
                                    {{ period_tz }}
                                </div>
                            </div>
                        </status-pill>
                    </div>
                    <div
                        actions
                        class="flex items-center space-x-2 px-2 print:hidden"
                        *ngIf="event.state !== 'done'"
                    >
                        <button
                            btn
                            matRipple
                            class="flex-1 h-10"
                            *ngIf="
                                room_status &&
                                event?.can_check_in &&
                                room_status !== 'free'
                            "
                            [class.bg-success]="room_status !== 'pending'"
                            [class.border-none]="room_status !== 'pending'"
                            [class.pointer-events-none]="
                                room_status !== 'pending'
                            "
                            (click)="checkin()"
                        >
                            <div
                                class="flex items-center space-x-2 justify-center"
                            >
                                <app-icon class="text-2xl">{{
                                    room_status === 'pending'
                                        ? 'arrow_back'
                                        : 'done'
                                }}</app-icon>
                                <div class="pr-4" i18n>
                                    {{
                                        room_status === 'pending'
                                            ? 'Check in'
                                            : 'Checked in'
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="menu"
                            class="bg-secondary rounded text-white h-12 w-12"
                            *ngIf="allow_edit"
                        >
                            <app-icon>more_horiz</app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="sm:flex flex-wrap sm:px-12">
                <div
                    class="sm:p-4 sm:bg-base-100 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem] space-y-2"
                >
                    <h3 class="px-3 mt-2 text-lg font-medium mb-2" i18n>
                        Details
                    </h3>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>event</app-icon>
                        <div>
                            {{ event.date | date: 'EEEE, dd LLLL y' }}
                        </div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>schedule</app-icon>
                        <div class="flex flex-col leading-tight">
                            <div>{{ period }}</div>
                            <div
                                class="opacity-30 text-xs"
                                *ngIf="timezone && tz"
                            >
                                {{ period_tz }}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>map</app-icon>
                        <div>
                            <ng-container *ngIf="level">
                                {{ level?.display_name || level?.name }},
                            </ng-container>
                            {{
                                event?.system?.display_name ||
                                    event?.system?.name ||
                                    event?.location
                            }}
                        </div>
                    </div>
                    <div
                        class="flex items-center px-2 space-x-2"
                        *ngIf="building"
                    >
                        <app-icon>place</app-icon>
                        <div>
                            {{ building?.display_name || building?.name }},
                            {{ building?.address }}
                        </div>
                    </div>
                </div>
                <div
                    class="mt-4 sm:p-4 sm:bg-base-100 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                >
                    <div
                        class="mx-3 border-t border-base-200 sm:border-none flex items-center justify-between"
                    >
                        <h3 class="text-lg font-medium" i18n>Attendees</h3>
                        <button
                            matRipple
                            show-attendees
                            class="clear text-xs underline print:hidden"
                            (click)="show_attendees = true"
                            i18n
                        >
                            See All
                        </button>
                    </div>
                    <div class="flex items-center p-1">
                        <div
                            class="flex flex-col flex-1 items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ accept_count || 0 }}</div>
                            <div class="text-sm uppercase" i18n>Yes</div>
                        </div>
                        <div
                            class="flex flex-col flex-1 items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ declined_count || 0 }}</div>
                            <div class="text-sm uppercase" i18n>No</div>
                        </div>
                        <div
                            class="flex flex-col flex-1 items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ pending_count || 0 }}</div>
                            <div class="text-sm uppercase" i18n>Pending</div>
                        </div>
                    </div>
                    <div class="hidden print:block">
                        <ng-container *ngFor="let user of event.attendees">
                            <div
                                class="px-2 flex items-center space-x-2"
                                attendee
                                *ngIf="user.email !== event.host"
                            >
                                <a-user-avatar [user]="user"></a-user-avatar>
                                <div class="text-sm flex-1 w-px">
                                    <div>{{ user?.name }}</div>
                                    <div
                                        class="opacity-60 truncate w-full"
                                        [title]="user.email"
                                    >
                                        {{ user.email }}
                                    </div>
                                </div>
                            </div>
                        </ng-container>
                    </div>
                    <h3
                        class="mx-3 mt-2 pt-2 text-lg font-medium border-t border-base-200"
                        i18n
                    >
                        Host
                    </h3>
                    <div class="px-2 flex items-center space-x-2" host>
                        <a-user-avatar [user]="event.organiser"></a-user-avatar>
                        <div class="text-sm flex-1 w-px">
                            <div>{{ event.organiser?.name }}</div>
                            <div
                                class="opacity-60 truncate w-full"
                                [title]="event.host"
                            >
                                {{ event.host }}
                            </div>
                        </div>
                    </div>
                </div>
                <ng-container *ngIf="has_catering">
                    <div
                        class="mt-4 sm:p-4 sm:bg-base-100 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                    >
                        <h3 class="mx-3 my-2 text-lg font-medium" i18n>
                            Catering
                        </h3>
                        <div class="flex flex-col space-y-2">
                            <div
                                order
                                *ngFor="let order of event.valid_catering"
                                class="border border-base-300 bg-base-100 rounded-xl overflow-hidden"
                            >
                                <div class="flex items-center space-x-2 p-3">
                                    <div class="flex-1">
                                        <div class="text-sm">
                                            Order at
                                            {{
                                                order.deliver_at
                                                    | date
                                                        : 'MMM d, ' +
                                                              time_format
                                            }}
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ order.item_count }} item(s) for
                                            {{
                                                order.total_cost / 100
                                                    | currency: currency_code
                                            }}
                                        </div>
                                    </div>
                                    <button
                                        icon
                                        matRipple
                                        class="print:hidden"
                                        [matTooltip]="
                                            show_order[order.id]
                                                ? 'Hide order items'
                                                : 'Show order items'
                                        "
                                        (click)="
                                            show_order[order.id] =
                                                !show_order[order.id]
                                        "
                                    >
                                        <app-icon>
                                            {{
                                                show_order[order.id]
                                                    ? 'expand_less'
                                                    : 'expand_more'
                                            }}
                                        </app-icon>
                                    </button>
                                </div>
                                <div
                                    class="flex flex-col bg-base-200 divide-y divide-base-100"
                                    [@show]="
                                        print || show_order[order.id]
                                            ? 'show'
                                            : 'hide'
                                    "
                                >
                                    <div
                                        class="flex items-center px-3 py-1 space-x-2 hover:opacity-90"
                                        *ngFor="let item of order.items"
                                    >
                                        <div class="flex items-center flex-1">
                                            <span class="text-sm">{{
                                                item.name || 'Item'
                                            }}</span>
                                            <span
                                                class="text-xs opacity-60 ml-4 font-normal"
                                                *ngIf="item.option_list?.length"
                                                [matTooltip]="optionList(item)"
                                            >
                                                {{
                                                    item.option_list?.length ||
                                                        '0'
                                                }}
                                                option(s)
                                            </span>
                                        </div>
                                        <div
                                            class="rounded bg-success text-success-content text-xs px-2 py-1"
                                        >
                                            x{{ item.quantity }}
                                        </div>
                                        <div
                                            class="rounded bg-info text-info-content text-xs px-2 py-1"
                                        >
                                            {{
                                                item.unit_price_with_options /
                                                    100
                                                    | currency: currency_code
                                            }}
                                            ea
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-container>
                <button
                    map
                    class="mt-4 sm:mt-2 h-64 sm:h-48 relative border border-base-200 overflow-hidden rounded sm:bg-base-100 m-2 flex-grow-[3] min-w-1/3 p-2 w-[calc(100%-1rem)] sm:w-[16rem]"
                    (click)="viewLocation()"
                >
                    <ng-container *ngIf="!hide_map">
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level?.map_id"
                            [features]="features"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    </ng-container>
                </button>
                <div
                    class="mt-4 sm:p-4 sm:bg-base-100 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                    *ngIf="raw_body"
                >
                    <h3
                        class="mx-3 text-lg font-medium border-t sm:border-none border-base-200"
                        i18n
                    >
                        Notes
                    </h3>
                    <div
                        notes
                        class="mx-4 overflow-hidden max-w-full"
                        *ngIf="raw_body"
                        [innerHTML]="
                            (body | sanitize) ||
                            'Unable to sanitize notes contents'
                        "
                    ></div>
                </div>
                <ng-container *ngIf="has_assets">
                    <div
                        class="mt-4 sm:p-4 sm:bg-base-100 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                    >
                        <h3 class="mx-3 pt-2 text-lg font-medium" i18n>
                            Assets ({{ event.valid_assets?.length || 0 }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            <div
                                request
                                *ngFor="let request of event.valid_assets"
                                class="border border-base-300 bg-base-100 rounded-xl overflow-hidden"
                            >
                                <button
                                    matRipple
                                    class="flex items-center space-x-2 p-3 w-full"
                                    (click)="
                                        show_request[request.id] =
                                            !show_request[request.id]
                                    "
                                >
                                    <div class="flex-1 text-left">
                                        <div class="text-sm">
                                            Requested for
                                            {{
                                                request.deliver_at
                                                    | date
                                                        : 'MMM d, ' +
                                                              time_format
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-center rounded-full w-8 h-8"
                                        [class.bg-success]="
                                            request.state === 'approved'
                                        "
                                        [class.text-success-content]="
                                            request.state === 'approved'
                                        "
                                        [class.bg-warning]="
                                            request.state !== 'approved' &&
                                            request.state !== 'rejected'
                                        "
                                        [class.text-warning-content]="
                                            request.state !== 'approved' &&
                                            request.state !== 'rejected'
                                        "
                                        [class.bg-error]="
                                            request.state === 'rejected'
                                        "
                                        [class.text-error-content]="
                                            request.state === 'rejected'
                                        "
                                        [matTooltip]="
                                            request.state || 'Tentative'
                                        "
                                    >
                                        <app-icon>
                                            {{
                                                request.state === 'approved'
                                                    ? 'done'
                                                    : request.state ===
                                                        'rejected'
                                                      ? 'close'
                                                      : 'schedule'
                                            }}
                                        </app-icon>
                                    </div>
                                    <div
                                        class="flex items-center justify-center rounded-full w-8 h-8"
                                    >
                                        <app-icon class="text-2xl">
                                            {{
                                                show_request[request.id]
                                                    ? 'expand_less'
                                                    : 'expand_more'
                                            }}
                                        </app-icon>
                                    </div>
                                </button>
                                <div
                                    class="flex flex-col bg-base-200 divide-y divide-base-100"
                                    [@show]="
                                        print || show_request[request.id]
                                            ? 'show'
                                            : 'hide'
                                    "
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
                    </div>
                </ng-container>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 left-2 bg-neutral text-white print:hidden"
                >
                    <app-icon>close</app-icon>
                </button>
                <div class="absolute inset-0 z-50" *ngIf="show_attendees">
                    <attendee-list
                        [list]="event.attendees"
                        [host]="event.host"
                        (click)="show_attendees = false"
                    ></attendee-list>
                </div>
            </div>
            <mat-menu #menu="matMenu" xPosition="before">
                <button
                    mat-menu-item
                    mat-dialog-close
                    (click)="edit.emit(space)"
                    [matTooltip]="!can_edit ? no_edit_message : ''"
                    [disabled]="!can_edit"
                    *ngIf="!hide_edit"
                >
                    <div class="flex items-center space-x-2 text-base pr-2">
                        <app-icon class="text-2xl">edit</app-icon>
                        <div i18n>Edit event</div>
                    </div>
                </button>
                <button mat-menu-item (click)="remove.emit()">
                    <div class="flex items-center space-x-2 text-base pr-2">
                        <app-icon class="text-2xl text-error">delete</app-icon>
                        <div i18n>Delete event</div>
                    </div>
                </button>
                <button mat-menu-item (click)="printEvent()">
                    <div class="flex items-center space-x-2 text-base pr-2">
                        <app-icon class="text-2xl">print</app-icon>
                        <div i18n>Print event</div>
                    </div>
                </button>
                <button
                    mat-menu-item
                    *ngIf="event.recurring_event_id"
                    (click)="remove.emit(true)"
                >
                    <div class="flex items-center space-x-2 text-base pr-2">
                        <app-icon class="text-2xl text-error">delete</app-icon>
                        <div i18n>Delete Series</div>
                    </div>
                </button>
                <button
                    mat-menu-item
                    *ngFor="let act of custom_actions"
                    (click)="action.emit(act.id)"
                >
                    <div class="flex items-center space-x-2 text-base pr-2">
                        <app-icon class="text-2xl">{{ act.icon }}</app-icon>
                        <div i18n>{{ act.name }}</div>
                    </div>
                </button>
            </mat-menu>
        </div>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    providers: [SpacePipe],
})
export class EventDetailsModalComponent {
    @Output() public action = new EventEmitter();
    @Output() public edit = new EventEmitter();
    @Output() public remove = new EventEmitter();

    public show_order = {};
    public show_request = {};
    public room_status = '';
    public hide_map = false;
    public hide_edit = false;
    public raw_body = '';
    public print = false;
    public show_attendees: boolean = false;
    public readonly event = this._event;
    public readonly no_edit_message =
        'Editing bookings long than \n a day is not available';
    public features = [
        {
            location: this.event?.system?.map_id,
            content: MapPinComponent,
        },
    ];

    public readonly has_catering = this.event?.ext('catering')?.length > 0;
    public readonly has_assets = !!this.event?.linked_bookings?.find(
        (_) => _.booking_type === 'asset-request',
    );

    public get can_edit() {
        return true;
        // return (
        //     this.event.duration <= 24 * 60 ||
        //     this._settings.get('app.events.allow_multiday')
        // );
    }

    public level: BuildingLevel = new BuildingLevel();
    public building: Building = new Building();
    public space: Space = new Space();

    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
    }

    public accept_count = this._event.attendees.reduce(
        (count, user) => (count += user.response_status === 'accepted' ? 1 : 0),
        0,
    );
    public declined_count = this._event.attendees.reduce(
        (count, user) => (count += user.response_status === 'declined' ? 1 : 0),
        0,
    );
    public pending_count = this._event.attendees.reduce(
        (count, user) =>
            (count +=
                user.response_status === 'tentative' ||
                user.response_status === 'needsAction'
                    ? 1
                    : 0),
        0,
    );

    public get body() {
        return this.event.body.replace(/\\n\\n\[ID\|.*\]/gm, '');
    }

    public get allow_edit() {
        return !this._settings.get('app.events.booking_unavailable');
    }

    public get custom_actions(): [string, string][] {
        return this._settings.get('app.events.custom_actions') || EMPTY_ACTIONS;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get event_status() {
        if (this.event?.state === 'done') return 'neutral';
        if (this.event?.status === 'approved') return 'success';
        if (this.event?.status === 'tentative') return 'warning';
        if (this.event?.status === 'declined') return 'error';
        return 'warning';
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: CalendarEvent,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        private _settings: SettingsService,
        private _dialog: MatDialog,
    ) {
        const doc = new DOMParser().parseFromString(
            this.event.body,
            'text/html',
        );
        this.raw_body = (doc.body.textContent || '').trim();
        console.log('Body:', this.raw_body);
        this._load().then();
        console.log('Timezone:', this.timezone);
    }

    public get period() {
        if (this.event?.all_day) return 'All Day';
        return this.formattedTime();
    }

    public get period_tz() {
        return this.formattedTime(this.tz);
    }

    private _date: DatePipe = new DatePipe('en');

    public formattedTime(tz?: string) {
        const date = this.event.date;
        const date_end = this.event.date_end;
        const all_day = this.event.all_day;
        const tz_format = this._date.transform(date, 'z', tz);
        const start_date = this._date.transform(date, 'MMM d', tz);
        const start_time = this._date.transform(date, this.time_format, tz);
        const end_date = this._date.transform(date_end, 'MMM d', tz);
        const end_time = this._date.transform(date_end, this.time_format, tz);
        const is_multiday = this.event?.duration > 24 * 60;

        if (is_multiday) {
            return `${start_date}${all_day ? '' : ', ' + start_time} - ${end_date}${all_day ? '' : ', ' + end_time}`;
        } else if (all_day) {
            return 'All Day';
        }
        return `${start_time} - ${end_time} ${'(' + tz_format + ')'}`;
    }

    public optionList(item: CateringItem) {
        return item.option_list?.map((_) => _.name).join('\n');
    }

    public async checkin() {
        const mod = getModule(this.space?.id, 'Bookings');
        if (!mod) return;
        await mod
            .execute('checkin', [getUnixTime(this.event.date)])
            .catch((e) => notifyError(`Error checking in booking. ${e}`));
        this.room_status = 'busy';
    }

    private async _load() {
        this.space = await this._space_pipe.transform(
            this._event.system?.id || this._event.system?.email,
        );
        this.level = this._org.levelWithID(this.space.zones);
        this.building = this._org.buildings.find((bld) =>
            this.space.zones.includes(bld.id),
        );
        this.features = [
            {
                location: this.space.map_id,
                content: MapPinComponent,
            },
        ];
        const doc = new DOMParser().parseFromString(
            this.event.body,
            'text/html',
        );
        this.raw_body = (doc.body.textContent || '').trim();
        if (
            this.event.extension_data.catering?.length ||
            this.event.extension_data.assets?.length
        ) {
            return;
        }
        const metadata = await getEventMetadata(
            this._event.id,
            this.space.id,
        ).toPromise();
        if (metadata) {
            this._event = new CalendarEvent({
                ...this._event,
                extension_data: {
                    ...this._event.extension_data,
                    ...metadata,
                },
            });
        }
    }

    public status(id: string): string {
        const booking = this.event.linked_bookings.find(
            (_) => _.asset_id === id,
        );
        if (booking.status) return booking.status;
        return booking
            ? booking.approved
                ? 'approved'
                : booking.rejected
                  ? 'rejected'
                  : 'pending'
            : 'pending';
    }

    public viewLocation() {
        this.hide_map = true;
        const ref = this._dialog.open(MapLocateModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { item: this.space },
        });
        ref.afterClosed().subscribe(() => {
            this.hide_map = false;
        });
    }

    public printEvent() {
        this.print = true;
        setTimeout(() => {
            window.print();
            setTimeout(() => (this.print = false), 100);
        }, 300);
    }
}
