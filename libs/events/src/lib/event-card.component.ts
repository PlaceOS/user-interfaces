import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { format, isSameDay } from 'date-fns';
import {
    AsyncHandler,
    getTimezoneOffsetString,
    SettingsService,
} from '@placeos/common';

import { CalendarEvent } from './event.class';
import { EventDetailsModalComponent } from './event-details-modal.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { GroupEventDetailsModalComponent } from './group-event-details-modal.component';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'event-card',
    template: `
        <h4 class="mb-2 flex items-center" *ngIf="event" date>
            <span *ngIf="show_day" day>{{ day }},&nbsp;</span>
            {{ event?.date | date: time_format }}
            <span class="text-xs px-2">({{ event?.date | date: 'z' }})</span>
        </h4>
        <a
            name="view-event-details"
            class="w-full cursor-pointer relative"
            [routerLink]="['./']"
            [queryParams]="{ event: event?.id }"
            (click)="viewDetails()"
            *ngIf="event"
        >
            <div
                class="w-full bg-base-100 border border-base-300 rounded-xl shadow py-4 relative"
            >
                <h4 class="px-4 text-lg">{{ event?.title }}</h4>
                <div class="flex mx-4 my-2">
                    <status-pill [status]="status">
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
                    class="flex flex-wrap flex-col sm:flex-row sm:divide-x divide-base-200-500 py-2 space-y-2 sm:space-y-0"
                >
                    <div class="flex items-center px-4">
                        <app-icon>meeting_room</app-icon>
                        <div class="mx-2 truncate">
                            {{ location }}
                        </div>
                    </div>
                    <div class="flex items-center px-4">
                        <app-icon>person_outline</app-icon>
                        <div class="mx-2">
                            {{
                                event?.organiser?.name ||
                                    event?.organiser?.email
                            }}
                        </div>
                    </div>
                    <div
                        class="flex items-center px-4"
                        *ngIf="event?.ext('catering')?.length"
                    >
                        <app-icon>restaurant</app-icon>
                        <div class="mx-2">Catered</div>
                    </div>
                    <div class="flex items-center px-4">
                        <app-icon>people</app-icon>
                        <div class="mx-2">
                            {{ event?.attendees?.length }}
                            {{
                                event?.attendees?.length === 1
                                    ? 'Person'
                                    : 'People'
                            }}
                        </div>
                    </div>
                </div>
                <app-icon
                    class="absolute top-1/2 right-1 text-4xl -translate-y-1/2"
                >
                    chevron_right
                </app-icon>
                <div
                    class="absolute bottom-2 right-2 sm:bottom-auto sm:top-2 text-sm sm:text-base flex items-center pr-4"
                    *ngIf="event?.attendees?.length"
                >
                    <div
                        class="h-10 w-6"
                        *ngFor="
                            let user of event?.attendees
                                | slice
                                    : 0
                                    : (event?.attendees?.length === 6 ? 6 : 5)
                        "
                    >
                        <a-user-avatar [user]="user"></a-user-avatar>
                    </div>
                    <div class="h-10 w-6" *ngIf="event?.attendees?.length > 6">
                        <div
                            class="bg-secondary rounded-full h-10 w-10 border-2 border-base-100 flex items-center justify-center text-secondary-content"
                        >
                            +{{ event?.attendees?.length - 5 }}
                        </div>
                    </div>
                </div>
            </div>
        </a>
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
})
export class EventCardComponent extends AsyncHandler {
    @Input() public event: CalendarEvent;
    @Input() public show_day: boolean = false;
    @Output() public edit = new EventEmitter();
    @Output() public remove = new EventEmitter();

    public location = '';

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

    public get time_format() {
        return this._settings.time_format;
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

    public get status() {
        if (this.event?.state === 'done') return 'neutral';
        if (this.event?.status === 'approved') return 'success';
        if (this.event?.status === 'tentative') return 'warning';
        if (this.event?.status === 'declined') return 'error';
        return 'warning';
    }

    constructor(
        private _dialog: MatDialog,
        private _route: ActivatedRoute,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        private _settings: SettingsService,
    ) {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                params.has('event') && this.event?.id === params.get('event')
                    ? this.viewDetails()
                    : '',
            ),
        );
        this.location = await this.getLocationString();
    }

    public async ngOnChanges(changes: SimpleChanges) {
        if (changes.event && this.event) {
            this.location = await this.getLocationString();
        }
    }

    public get day() {
        const date = this.event?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? 'Today' : format(date, 'EEEE')}`;
    }

    public async getLocationString() {
        const system =
            this.event?.resources[0] ||
            this.event?.system ||
            this.event?.space ||
            ({} as any);
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
        if (!this.event) return;
        this.timeout('open', () => {
            if (this.event.extension_data?.shared_event) {
                this._dialog.open(GroupEventDetailsModalComponent, {
                    data: { event: this.event, concierge: false },
                });
                return;
            }
            const ref = this._dialog.open(EventDetailsModalComponent, {
                data: this.event,
            });
            this.subscription(
                'edit',
                ref.componentInstance.edit.subscribe(() => this.edit.emit()),
            );
            this.subscription(
                'remove',
                ref.componentInstance.remove.subscribe((_) =>
                    this.remove.emit(_),
                ),
            );
        });
    }
}
