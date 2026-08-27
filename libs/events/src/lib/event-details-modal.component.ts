import {
    Component,
    computed,
    inject,
    OnInit,
    output,
    signal,
} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { getUnixTime } from 'date-fns';

import { CommonModule, DatePipe } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    Building,
    BuildingLevel,
    CalendarEvent,
    CateringItem,
    formatRecurrence,
    fromEventRecurrence,
    getTimezoneOffsetString,
    i18n,
    notifyError,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import { getModule } from '@placeos/ts-client';

import { OrganisationService } from '@placeos/common';
import { BindingDirective } from 'libs/components/src/lib/binding.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapLocateModalComponent } from 'libs/components/src/lib/map-locate-modal.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { UserPipe } from 'libs/users/src/lib/user.pipe';
import { AttendeeListComponent } from './attendee-list.component';
import { getEventMetadata } from './events.fn';

const EMPTY_ACTIONS: { id: string; name: string; icon: string }[] = [];

@Component({
    selector: 'event-details-modal',
    template: `
        <div
            class="bg-base-100 sm:bg-base-200 h-screen w-screen space-y-2 overflow-auto pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-204 sm:rounded-sm print:min-h-screen print:w-screen print:overflow-visible"
        >
            <div
                class="border-base-200 bg-base-100 max-h-screen flex-col items-center pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16 print:border-none"
            >
                <i
                    binding
                    [(model)]="room_status"
                    [sys]="space()?.id"
                    mod="Bookings"
                    bind="status"
                ></i>
                @if (!event()?.system?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (event()?.system?.images?.length) {
                    <div
                        class="bg-neutral h-64 w-full overflow-hidden sm:rounded-b print:hidden"
                    >
                        <image-carousel
                            [images]="event()?.system?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!event()?.system?.images?.length"
                >
                    {{ event().title }}
                </h3>
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="event_status()">
                            <div
                                class="flex flex-col leading-tight"
                                [class.pr-4]="timezone() && tz()"
                            >
                                <div>{{ period() }}</div>
                                @if (timezone() && tz()) {
                                    <div class="text-xs opacity-30">
                                        {{ period_tz() }}
                                    </div>
                                }
                            </div>
                        </status-pill>
                        @if (event().recurring_event_id) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    @if (event().state !== 'done') {
                        <div
                            actions
                            class="flex items-center space-x-2 px-2 print:hidden"
                        >
                            @if (
                                room_status() &&
                                event()?.can_check_in &&
                                room_status() !== 'free'
                            ) {
                                <button
                                    btn
                                    matRipple
                                    class="h-10 flex-1"
                                    [class.bg-success]="
                                        room_status() !== 'pending'
                                    "
                                    [class.border-none]="
                                        room_status() !== 'pending'
                                    "
                                    [class.pointer-events-none]="
                                        room_status() !== 'pending'
                                    "
                                    (click)="checkin()"
                                >
                                    <div
                                        class="flex items-center justify-center space-x-2"
                                    >
                                        <icon class="text-2xl">{{
                                            room_status() === 'pending'
                                                ? 'arrow_back'
                                                : 'done'
                                        }}</icon>
                                        <div class="pr-4">
                                            {{
                                                (room_status() === 'pending'
                                                    ? 'COMMON.CHECK_IN'
                                                    : 'COMMON.CHECKED_IN'
                                                ) | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (allow_edit()) {
                                <button
                                    icon
                                    matRipple
                                    [matMenuTriggerFor]="menu"
                                    class="bg-secondary h-12 w-12 rounded-sm text-white"
                                >
                                    <icon>more_horiz</icon>
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="border-base-200 sm:bg-base-100 min-w-1/3 grow-3 space-y-2 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <h3 class="mt-2 mb-2 px-3 text-lg font-medium">
                        {{ 'COMMON.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>event</icon>
                        <div class="flex flex-col leading-tight">
                            <div>
                                {{ event().date | date: 'EEEE, dd LLLL y' }}
                            </div>
                            @if (timezone() && tz() && !tz_date_same()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        event().date
                                            | date: 'EEEE, dd LLLL y (z)' : tz()
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>schedule</icon>
                        <div class="flex flex-col leading-tight">
                            <div>{{ period() }}</div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{ period_tz() }}
                                </div>
                            }
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>map</icon>
                        <div>
                            @if (level()) {
                                {{ level()?.display_name || level()?.name }},
                            }
                            {{
                                event()?.system?.display_name ||
                                    event()?.system?.name ||
                                    event()?.location
                            }}
                        </div>
                    </div>
                    @if (building()) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon>place</icon>
                            <div>
                                {{
                                    building()?.display_name ||
                                        building()?.name
                                }},
                                {{ building()?.address }}
                            </div>
                        </div>
                    }
                    @if (event().creator !== event().host) {
                        @let creator =
                            (event().creator | user | async)?.name ||
                            event().creator;
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Created By">person</icon>
                            <div>
                                {{ creator }}
                            </div>
                        </div>
                    }
                    @if (
                        event().visibility && event().visibility !== 'normal'
                    ) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Visibility">visibility</icon>
                            <div>
                                {{
                                    'COMMON.VISIBILITY_' +
                                        (event().visibility | uppercase)
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <div
                        class="border-base-200 mx-3 flex items-center justify-between border-t sm:border-none"
                    >
                        <h3 class="text-lg font-medium">
                            {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                        </h3>
                        <button
                            matRipple
                            show-attendees
                            class="clear text-xs underline print:hidden"
                            (click)="show_attendees.set(true)"
                        >
                            {{ 'COMMON.VIEW_ALL' | translate }}
                        </button>
                    </div>
                    <div class="flex items-center p-1">
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ accept_count() || 0 }}</div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.YES' | translate }}
                            </div>
                        </div>
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">
                                {{ declined_count() || 0 }}
                            </div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.NO' | translate }}
                            </div>
                        </div>
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">
                                {{ pending_count() || 0 }}
                            </div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.PENDING' | translate }}
                            </div>
                        </div>
                    </div>
                    <div class="hidden print:block">
                        @for (user of event().attendees; track user) {
                            @if (user.email !== event().host) {
                                <div
                                    class="flex items-center space-x-2 px-2"
                                    attendee
                                >
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                    <div class="w-px flex-1 text-sm">
                                        <div class="w-full truncate">
                                            {{ user?.name }}
                                        </div>
                                        <div
                                            class="w-full truncate opacity-60"
                                            [title]="user.email"
                                        >
                                            {{ user.email }}
                                        </div>
                                    </div>
                                </div>
                            }
                        }
                    </div>
                    <h3
                        class="border-base-200 mx-3 mt-2 border-t pt-2 text-lg font-medium"
                    >
                        {{ 'FORM.HOST' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2" host>
                        @let host =
                            (event().host | user: 'email-prefix' | async)
                                ?.name || event().host;
                        <a-user-avatar
                            [user]="event().organiser"
                        ></a-user-avatar>
                        <div class="w-px flex-1 text-sm">
                            <div class="w-full truncate">{{ host }}</div>
                            <div
                                class="w-full truncate opacity-60"
                                [title]="event().host"
                            >
                                {{ event().host }}
                            </div>
                        </div>
                    </div>
                </div>
                @if (has_catering()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 my-2 text-lg font-medium">
                            {{ 'RESOURCE.CATERING' | translate }}
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                order of event().valid_catering;
                                track order
                            ) {
                                <div
                                    order
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <div
                                        class="flex items-center space-x-2 p-3"
                                    >
                                        <div class="flex-1">
                                            <div class="text-sm">
                                                {{
                                                    'CALENDAR_EVENT.CATERING_ORDER_AT'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      order.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <div class="text-xs opacity-60">
                                                    {{
                                                        'CALENDAR_EVENT.CATERING_ORDER_DETAILS'
                                                            | translate
                                                                : {
                                                                      count: order.item_count,
                                                                      cost:
                                                                          order.total_cost /
                                                                              100
                                                                          | currency
                                                                              : currency_code,
                                                                  }
                                                    }}
                                                </div>
                                                @if (order.caterer) {
                                                    <div
                                                        class="bg-base-200 rounded-sm px-2 py-1 text-xs"
                                                    >
                                                        {{ order.caterer }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            class="print:hidden"
                                            [matTooltip]="
                                                show_order()[order.id]
                                                    ? 'Hide order items'
                                                    : 'Show order items'
                                            "
                                            (click)="toggleOrder(order.id)"
                                        >
                                            <icon>
                                                {{
                                                    show_order()[order.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </button>
                                    </div>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            print() || show_order()[order.id]
                                                ? 'show'
                                                : 'hide'
                                        "
                                    >
                                        @for (item of order.items; track item) {
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
                                                        item.option_list?.length
                                                    ) {
                                                        <span
                                                            class="ml-4 text-xs font-normal opacity-60"
                                                            [matTooltip]="
                                                                optionList(item)
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
                                                            | currency
                                                                : currency_code
                                                    }}
                                                    ea
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <button
                    map
                    class="border-base-200 sm:bg-base-100 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] min-w-1/3 grow-3 overflow-hidden rounded-sm border p-2 sm:mt-2 sm:h-48 sm:w-[16rem]"
                    (click)="viewLocation()"
                >
                    @if (!hide_map()) {
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level()?.map_id"
                            [features]="features()"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    }
                </button>
                @if (raw_body()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3
                            class="border-base-200 mx-3 border-t text-lg font-medium sm:border-none"
                        >
                            {{ 'FORM.NOTES' | translate }}
                        </h3>
                        @if (raw_body()) {
                            <div
                                notes
                                class="mx-4 max-w-full overflow-hidden"
                                [innerHTML]="(body() | sanitize) || empty_notes"
                            ></div>
                        }
                    </div>
                }
                @if (has_assets()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 pt-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                event().valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of event().valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="toggleRequest(request.id)"
                                    >
                                        <div class="flex-1 text-left">
                                            <div class="text-sm">
                                                {{
                                                    'CALENDAR_EVENT.ASSETS_REQUESTED_FOR'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      request.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full print:hidden"
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
                                            <icon>
                                                {{
                                                    request.state === 'approved'
                                                        ? 'done'
                                                        : request.state ===
                                                            'rejected'
                                                          ? 'close'
                                                          : 'schedule'
                                                }}
                                            </icon>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full print:hidden"
                                        >
                                            <icon class="text-2xl">
                                                {{
                                                    show_request()[request.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            print() ||
                                            show_request()[request.id]
                                                ? 'show'
                                                : 'hide'
                                        "
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
                <button
                    icon
                    default
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 left-2 print:hidden"
                >
                    <icon>close</icon>
                </button>
                @if (show_attendees()) {
                    <div class="absolute inset-0 z-50">
                        <attendee-list
                            [list]="event().attendees"
                            [host]="event().host"
                            (click)="show_attendees.set(false)"
                        ></attendee-list>
                    </div>
                }
            </div>
            <mat-menu #menu="matMenu" xPosition="before">
                @if (!hide_edit()) {
                    <button
                        mat-menu-item
                        mat-dialog-close
                        (click)="edit ? edit(event()) : ''"
                        [matTooltip]="!can_edit() ? no_edit_message() : ''"
                        [disabled]="!can_edit()"
                    >
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">edit</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (event().state !== 'done') {
                    <button mat-menu-item (click)="remove(event(), false)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-error text-2xl">delete</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_DELETE' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (is_concierge) {
                    <button mat-menu-item (click)="printEvent()">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">print</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_PRINT' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (event().state !== 'done' && event().recurring_event_id) {
                    <button mat-menu-item (click)="remove(event(), true)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-error text-2xl">delete</icon>
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
                    <button mat-menu-item (click)="action.emit(act.id)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">{{ act.icon }}</icon>
                            <div>{{ act.name }}</div>
                        </div>
                    </button>
                }
            </mat-menu>
        </div>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    providers: [SpacePipe],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatMenuModule,
        MatDialogModule,
        AttendeeListComponent,
        SanitizePipe,
        InteractiveMapComponent,
        UserAvatarComponent,
        StatusPillComponent,
        ImageCarouselComponent,
        BindingDirective,
        MatTooltipModule,
        UserPipe,
    ],
})
export class EventDetailsModalComponent implements OnInit {
    private _data = inject<{
        event: CalendarEvent;
        edit_fn: (i) => void;
        remove_fn: (i, s) => void;
    }>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);
    private _space_pipe = inject(SpacePipe);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly action = output<any>();
    public readonly edit = this._data.edit_fn;

    public readonly empty_notes =
        '<div class="p-4 w-full rounded-md bg-base-200 text-center"><span class="opacity-30">No notes</span></div>';
    public readonly show_order = signal<Record<string, boolean>>({});
    public readonly show_request = signal<Record<string, boolean>>({});
    public readonly room_status = signal('');
    public readonly hide_map = signal(false);
    public readonly hide_edit = signal(false);
    public readonly raw_body = signal('');
    public readonly print = signal(false);
    public readonly show_attendees = signal(false);
    public readonly event = signal(new CalendarEvent(this._data.event));
    public readonly no_edit_message = signal(
        'Editing bookings long than \n a day is not available',
    );
    public readonly features = computed(() => [
        {
            location: this.space().map_id || this.event()?.system?.map_id,
            content: MapPinComponent,
        },
    ]);

    public remove(event: CalendarEvent, remove_series?: boolean) {
        if (event?.state === 'done') return;
        this._data.remove_fn(event, remove_series);
    }
    public readonly has_catering = computed(
        () => this.event()?.ext('catering')?.length > 0,
    );
    public readonly has_assets = computed(
        () =>
            !!this.event()?.linked_bookings?.find(
                (_) => _.booking_type === 'asset-request',
            ),
    );

    public get is_concierge() {
        return this._settings.app_name.toLowerCase().includes('concierge');
    }

    public readonly can_edit = computed(() => {
        return true;
        // return (
        //     this.event.duration <= 24 * 60 ||
        //     this._settings.get('app.events.allow_multiday')
        // );
    });

    public readonly space = signal(new Space());
    public readonly level = computed(
        () => this._org.levelWithID(this.space().zones) || new BuildingLevel(),
    );
    public readonly building = computed(
        () =>
            this._org.buildings.find((b) =>
                this.space().zones.includes(b.id),
            ) || new Building(),
    );
    public readonly timezone = computed(() =>
        settingSignal('events.use_building_timezone')()
            ? this._org.building.timezone
            : '',
    );
    public readonly tz = computed(() => {
        const tz = this.timezone();
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
    });

    public readonly tz_date_same = computed(() => {
        return !this._date
            .transform(this.event().date, 'yyyy-MM-dd', this.tz())
            .localeCompare(
                this._date.transform(this.event().date, 'yyyy-MM-dd'),
            );
    });

    public readonly accept_count = computed(
        () =>
            this.event().attendees?.reduce(
                (count, user) =>
                    (count += user.response_status === 'accepted' ? 1 : 0),
                0,
            ) || 0,
    );
    public readonly declined_count = computed(
        () =>
            this.event().attendees?.reduce(
                (count, user) =>
                    (count += user.response_status === 'declined' ? 1 : 0),
                0,
            ) || 0,
    );
    public readonly pending_count = computed(
        () =>
            this.event().attendees?.reduce(
                (count, user) =>
                    (count +=
                        user.response_status === 'tentative' ||
                        user.response_status === 'needsAction'
                            ? 1
                            : 0),
                0,
            ) || 0,
    );

    public readonly body = computed(() =>
        (this.event().body || '').replace(/\\n\\n\[ID\|.*\]/gm, ''),
    );

    public readonly allow_edit = computed(
        () => !settingSignal('events.booking_unavailable')(),
    );

    public readonly custom_actions = settingSignal(
        'events.custom_actions',
        EMPTY_ACTIONS,
    );

    private readonly _use_24_hour = settingSignal<boolean>(
        'use_24_hour_time',
        false,
    );
    public readonly time_format = computed(() =>
        this._use_24_hour() ? 'HH:mm' : 'h:mm a',
    );

    public get currency_code() {
        return this._org.currency_code;
    }

    public readonly event_status = computed(() => {
        if (this.event()?.state === 'done') return 'neutral';
        if (this.event()?.status === 'approved') return 'success';
        if (this.event()?.status === 'tentative') return 'warning';
        if (this.event()?.status === 'declined') return 'error';
        return 'warning';
    });
    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    public ngOnInit() {
        console.log('Event:', this._data);
        this.event.set(new CalendarEvent(this._data.event));
        const doc = new DOMParser().parseFromString(
            this.event().body,
            'text/html',
        );
        this.raw_body.set((doc.body.textContent || '').trim());
        this._load().then();
        this.no_edit_message.set(i18n('CALENDAR_EVENT.NO_LONG_EDIT_MSG'));
    }

    public readonly period = computed(() =>
        this.event()?.all_day ? 'All Day' : this.formattedTime(),
    );
    public readonly period_tz = computed(() => this.formattedTime(this.tz()));

    private _date: DatePipe = new DatePipe('en');

    public formattedTime(tz?: string) {
        const date = this.event().date;
        const date_end = this.event().date_end;
        const all_day = this.event().all_day;
        const tz_format = this._date.transform(date, 'zzzz', tz);
        const start_date = this._date.transform(date, 'MMM d', tz);
        const start_time = this._date.transform(date, this.time_format(), tz);
        const end_date = this._date.transform(date_end, 'MMM d', tz);
        const end_time = this._date.transform(date_end, this.time_format(), tz);
        const is_multiday = this.event()?.duration > 24 * 60;

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

    public toggleOrder(id: string) {
        this.show_order.update((show_order) => ({
            ...show_order,
            [id]: !show_order[id],
        }));
    }

    public toggleRequest(id: string) {
        this.show_request.update((show_request) => ({
            ...show_request,
            [id]: !show_request[id],
        }));
    }

    public readonly recurr_tooltip = computed(
        () =>
            formatRecurrence(
                fromEventRecurrence(this.event().recurrence),
                this.event()?.date,
            ) || i18n('CALENDAR_EVENT.RECURRING_TOOLTIP'),
    );

    public async checkin() {
        const mod = getModule(this.space()?.id, 'Bookings');
        if (!mod) return;
        await mod
            .execute('checkin', [getUnixTime(this.event().date)])
            .catch((e) => notifyError(`Error checking in booking. ${e}`));
        this.room_status.set('busy');
    }

    private async _load() {
        this.space.set(
            await this._space_pipe.transform(
                this.event().system?.id || this.event().system?.email,
            ),
        );
        const doc = new DOMParser().parseFromString(
            this.event().body,
            'text/html',
        );
        this.raw_body.set((doc.body.textContent || '').trim());
        if (
            this.event().extension_data.catering?.length ||
            this.event().extension_data.assets?.length
        ) {
            return;
        }
        const metadata = await getEventMetadata(
            this.event().id,
            this.space().id,
        );
        if (metadata) {
            this.event.set(
                new CalendarEvent({
                    ...this.event(),
                    extension_data: {
                        ...this.event().extension_data,
                        ...metadata,
                    },
                }),
            );
        }
    }

    public status(id: string): string {
        const booking = this.event().linked_bookings.find(
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
        this.hide_map.set(true);
        const ref = this._dialog.open(MapLocateModalComponent, {
            width: '100vw',
            height: '100vh',
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'fullscreen-dialog',
            data: { item: this.space() },
        });
        ref.afterClosed().subscribe(() => this.hide_map.set(false));
    }

    public printEvent() {
        this.print.set(true);
        setTimeout(() => {
            window.print();
            setTimeout(() => this.print.set(false), 100);
        }, 300);
    }
}
