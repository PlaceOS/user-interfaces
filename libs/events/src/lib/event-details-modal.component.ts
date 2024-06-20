import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addMinutes, format, formatDuration, getUnixTime } from 'date-fns';

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
    MapsPeopleService,
} from '@placeos/common';
import { Space } from 'libs/spaces/src/lib/space.class';
import { getModule } from '@placeos/ts-client';
import { MapLocateModalComponent } from 'libs/components/src/lib/map-locate-modal.component';
import { CateringItem } from 'libs/catering/src/lib/catering-item.class';
import { getEventMetadata } from './events.fn';

const EMPTY_ACTIONS = [];

@Component({
    selector: 'event-details-modal',
    template: `
        <div
            class="w-[100vw] h-[100vh] sm:relative sm:inset-auto sm:w-[51rem] sm:h-auto sm:max-h-[80vh] bg-base-100 sm:bg-base-200 sm:dark:bg-neutral-600 sm:rounded overflow-auto space-y-2 pb-2"
        >
            <div
                class="sm:flex flex-col items-center pb-4 max-h-screen sm:max-h-[80vh] sm:px-16 sm:border-b bg-base-100 border-base-200"
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
                    class="bg-neutral w-full h-64 sm:rounded-b overflow-hidden"
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
                            {{ period }}
                        </status-pill>
                    </div>
                    <div
                        actions
                        class="flex items-center space-x-2 px-2"
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
                                <app-icon>{{
                                    room_status === 'pending'
                                        ? 'arrow_back'
                                        : 'done'
                                }}</app-icon>
                                <div class="mr-4" i18n>
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
                            class="bg-secondary rounded text-white h-10 w-10"
                            *ngIf="allow_edit"
                        >
                            <app-icon>more_horiz</app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="sm:flex flex-wrap sm:px-12">
                <div
                    class="sm:p-4 sm:bg-base-100 sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem] space-y-2"
                >
                    <h3 class="px-3 mt-2 text-lg font-medium mb-2" i18n>
                        Details
                    </h3>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>event</app-icon>
                        <div>{{ event.date | date: 'EEEE, dd LLLL y' }}</div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>schedule</app-icon>
                        <div>{{ period }}</div>
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
                    class="mt-4 sm:p-4 sm:bg-base-100 sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                >
                    <div
                        class="mx-3 border-t border-base-200 sm:border-none flex items-center justify-between"
                    >
                        <h3 class="text-lg font-medium" i18n>Attendees</h3>
                        <button
                            matRipple
                            show-attendees
                            class="clear text-xs underline"
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
                        class="mt-4 sm:p-4 sm:bg-base-100 sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
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
                                        show_order[order.id] ? 'show' : 'hide'
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
                    class="mt-4 sm:mt-2 h-64 sm:h-48 relative border border-base-200 overflow-hidden rounded sm:bg-base-100 sm:dark:bg-neutral-700 m-2 flex-grow-[3] min-w-1/3 p-2 w-[calc(100%-1rem)] sm:w-[16rem]"
                    (click)="viewLocation()"
                >
                    <ng-container *ngIf="!hide_map">
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level?.map_id"
                            [features]="features"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true
                            }"
                        ></interactive-map>
                    </ng-container>
                </button>
                <div
                    class="mt-4 sm:p-4 sm:bg-base-100 sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                    *ngIf="body"
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
                        *ngIf="body"
                        [innerHTML]="
                            (body | sanitize) ||
                            'Unable to sanitize notes contents'
                        "
                    ></div>
                </div>
                <ng-container *ngIf="has_assets">
                    <div
                        class="mt-4 sm:p-4 sm:bg-base-100 sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
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
                                        show_request[request.id]
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
                    class="absolute top-2 left-2 bg-neutral text-white"
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
                    <div class="flex items-center space-x-2 text-base">
                        <app-icon>edit</app-icon>
                        <div i18n>Edit event</div>
                    </div>
                </button>
                <button mat-menu-item (click)="remove.emit()">
                    <div class="flex items-center space-x-2 text-base">
                        <app-icon>delete</app-icon>
                        <div i18n>Delete event</div>
                    </div>
                </button>
                <button
                    mat-menu-item
                    *ngIf="event.recurring_event_id"
                    (click)="remove.emit(true)"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <app-icon>delete</app-icon>
                        <div i18n>Delete Series</div>
                    </div>
                </button>
                <button
                    mat-menu-item
                    *ngFor="let act of custom_actions"
                    (click)="action.emit(act.id)"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <app-icon>{{ act.icon }}</app-icon>
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
        (_) => _.booking_type === 'asset-request'
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

    public accept_count = this._event.attendees.reduce(
        (count, user) => (count += user.response_status === 'accepted' ? 1 : 0),
        0
    );
    public declined_count = this._event.attendees.reduce(
        (count, user) => (count += user.response_status === 'declined' ? 1 : 0),
        0
    );
    public pending_count = this._event.attendees.reduce(
        (count, user) =>
            (count +=
                user.response_status === 'tentative' ||
                user.response_status === 'needsAction'
                    ? 1
                    : 0),
        0
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
        private _dialog: MatDialog
    ) {
        this._load().then();
    }

    public get period() {
        if (this.event?.all_day) return 'All Day';
        const start = this.event?.date || Date.now();
        const duration = this.event?.duration || 60;
        const end = addMinutes(start, duration);
        const is_multiday = this.event?.duration > 24 * 60;
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(
            start,
            (is_multiday ? `MMM d, ` : '') + this.time_format
        )} - ${format(
            end,
            (is_multiday ? `MMM d, ` : '') + this.time_format
        )} ${duration < 24 * 60 ? '(' + dur + ')' : ''}`;
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
            this._event.system?.id || this._event.system?.email
        );
        this.level = this._org.levelWithID(this.space.zones);
        this.building = this._org.buildings.find((bld) =>
            this.space.zones.includes(bld.id)
        );
        this.features = [
            {
                location: this.space.map_id,
                content: MapPinComponent,
            },
        ];
        if (
            this.event.extension_data.catering?.length ||
            this.event.extension_data.assets?.length
        ) {
            return;
        }
        const metadata = await getEventMetadata(
            this._event.id,
            this.space.id
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
            (_) => _.asset_id === id
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
}
