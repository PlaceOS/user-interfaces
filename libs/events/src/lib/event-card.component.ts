import { CommonModule, DatePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    input,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    CalendarEvent,
    formatRecurrence,
    fromEventRecurrence,
    getTimezoneOffsetString,
    i18n,
    settingSignal,
} from '@placeos/common';
import { format, isSameDay } from 'date-fns';

import { OrganisationService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { EventDetailsModalComponent } from './event-details-modal.component';
import { GroupEventDetailsModalComponent } from './group-event-details-modal.component';

@Component({
    selector: 'event-card',
    template: `
        @if (event()) {
            <h4 class="mb-2 flex items-center" date>
                @if (show_day()) {
                    <span day>{{ day() }},&nbsp;</span>
                }
                {{ event()?.date | date: time_format() }}
                <span class="px-2 text-xs"
                    >({{ event()?.date | date: 'zzzz' }})</span
                >
            </h4>
        }
        @if (event()) {
            <a
                name="view-event-details"
                class="relative w-full cursor-pointer"
                [routerLink]="['./']"
                [queryParams]="{ event: event()?.id }"
                (click)="viewDetails()"
            >
                <div
                    class="border-base-300 bg-base-100 relative w-full rounded-xl border py-4 shadow-sm"
                >
                    <h4 class="px-4 text-lg">{{ event()?.title }}</h4>
                    <div class="mx-4 my-2 flex items-center space-x-2">
                        <status-pill [status]="status()">
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
                    <div
                        class="divide-base-200-500 flex flex-col flex-wrap space-y-2 py-2 sm:flex-row sm:space-y-0 sm:divide-x"
                    >
                        <div class="flex items-center px-4">
                            <icon
                                [matTooltip]="'RESOURCE.ROOM' | translate"
                                matTooltipPosition="right"
                                >meeting_room</icon
                            >
                            <div class="mx-2 truncate">
                                {{ location() }}
                            </div>
                        </div>
                        <div class="flex items-center px-4">
                            <icon>person_outline</icon>
                            <div class="mx-2">
                                {{
                                    event()?.organiser?.name ||
                                        event()?.organiser?.email
                                }}
                            </div>
                        </div>
                        @if (event()?.ext('catering')?.length) {
                            <div class="flex items-center px-4">
                                <icon>restaurant</icon>
                                <div class="mx-2">
                                    {{ 'CALENDAR_EVENT.CATERED' | translate }}
                                </div>
                            </div>
                        }
                        <div class="flex items-center px-4">
                            <icon>people</icon>
                            <div class="mx-2">
                                {{
                                    'CALENDAR_EVENT.ATTENDEE_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      event()?.attendees
                                                          ?.length || 0,
                                              }
                                }}
                            </div>
                        </div>
                    </div>
                    <icon
                        class="absolute top-1/2 right-1 -translate-y-1/2 text-4xl"
                    >
                        chevron_right
                    </icon>
                    @if (event()?.attendees?.length) {
                        <div
                            class="absolute right-2 bottom-2 flex items-center pr-4 text-sm sm:top-2 sm:bottom-auto sm:text-base"
                        >
                            @for (
                                user of event()?.attendees
                                    | slice
                                        : 0
                                        : (event()?.attendees?.length === 6
                                              ? 6
                                              : 5);
                                track user.id || user.email
                            ) {
                                <div class="z-10 h-10 w-6">
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                </div>
                            }
                            @if (event()?.attendees?.length > 6) {
                                <div class="h-10 w-6">
                                    <div
                                        class="border-base-100 bg-secondary text-secondary-content flex h-10 w-10 items-center justify-center rounded-full border-2"
                                    >
                                        +{{ event()?.attendees?.length - 5 }}
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </a>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
    providers: [SpacePipe],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        RouterModule,
        MatTooltipModule,
        StatusPillComponent,
        IconComponent,
        UserAvatarComponent,
    ],
})
export class EventCardComponent extends AsyncHandler implements OnInit {
    private _dialog = inject(MatDialog);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private _space_pipe = inject(SpacePipe);

    public readonly event = input<CalendarEvent>(undefined);
    public readonly show_day = input(false);
    public readonly edit_fn = input((d) => null);
    public readonly remove_fn = input((d, t) => null);

    public readonly location = signal('');

    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    private readonly _use_bld_tz = settingSignal<boolean>(
        'events.use_building_timezone',
        false,
    );
    private readonly _active_building = toSignal(this._org.active_building);

    public readonly timezone = computed(() =>
        this._use_bld_tz() ? this._active_building()?.timezone || '' : '',
    );

    public readonly tz = computed(() => {
        const tz = this.timezone();
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
    });

    private readonly _use_24_hour = settingSignal<boolean>(
        'use_24_hour_time',
        false,
    );

    public readonly time_format = computed(() =>
        this._use_24_hour() ? 'HH:mm' : 'h:mm a',
    );

    public readonly period = computed(() => {
        if (this.event()?.all_day) return i18n('COMMON.ALL_DAY');
        return this.formattedTime();
    });

    public readonly period_tz = computed(() => {
        return this.formattedTime(this.tz());
    });

    public readonly recurr_tooltip = computed(() => {
        return (
            formatRecurrence(
                fromEventRecurrence(this.event()?.recurrence),
                this.event()?.date,
            ) || i18n('CALENDAR_EVENT.RECURRING_TOOLTIP')
        );
    });

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
            return i18n('COMMON.ALL_DAY');
        }
        return `${start_time} - ${end_time} ${'(' + tz_format + ')'}`;
    }

    public readonly status = computed(() => {
        const event = this.event();
        if (event?.state === 'done') return 'neutral';
        if (event?.status === 'approved') return 'success';
        if (event?.status === 'tentative') return 'warning';
        if (event?.status === 'declined') return 'error';
        return 'warning';
    });

    public readonly day = computed(() => {
        const date = this.event()?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? i18n('COMMON.TODAY') : format(date, 'EEEE')}`;
    });

    private _event_effect = effect(() => {
        const event = this.event();
        if (event) {
            this.getLocationString().then((loc) => this.location.set(loc));
        }
    });

    constructor() {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('event')) {
                    this.event()?.id === params.get('event')
                        ? this.viewDetails()
                        : '';
                }
            }),
        );
    }

    public async getLocationString() {
        const event = this.event();
        const system =
            event?.resources[0] || event?.system || event?.space || ({} as any);
        const space = await this._space_pipe.transform(
            system.id || system.email,
        );
        const zone_list = space?.zones || [];
        const zone =
            this._org.levelWithID(zone_list) ||
            this._org.buildings.find((_) => zone_list.includes(_.id));
        return `${zone ? (zone.display_name || zone.name) + ', ' : ''} ${
            space?.display_name || space?.name
        }`;
    }

    public viewDetails() {
        if (!this.event()) return;
        this.timeout('open', () => {
            this._dialog.closeAll();
            const event = this.event();
            if (event.extension_data?.shared_event) {
                this._dialog.open(GroupEventDetailsModalComponent, {
                    data: {
                        event: event,
                        edit_fn: this.edit_fn(),
                        remove_fn: this.remove_fn(),
                        concierge: false,
                    },
                });
                return;
            }
            this._dialog.open(EventDetailsModalComponent, {
                data: {
                    event: event,
                    edit_fn: this.edit_fn(),
                    remove_fn: this.remove_fn(),
                },
            });
        });
    }
}
