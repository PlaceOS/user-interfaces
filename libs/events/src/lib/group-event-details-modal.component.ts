import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    model,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {
    Building,
    BuildingLevel,
    CalendarEvent,
    currentUser,
    GuestUser,
    notifyInfo,
    OrganisationService,
    settingSignal,
    Space,
    unique,
    ViewerFeature,
} from '@placeos/common';
import { MapLocateModalComponent, MapPinComponent } from '@placeos/components';

import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { AttendeeListComponent } from './attendee-list.component';
import {
    addEventGuest,
    checkinEventGuest,
    removeEventGuest,
} from './events.fn';

@Component({
    selector: `group-event-details-modal`,
    template: `
        <div
            class="relative max-h-[80vh] w-3xl max-w-[calc(100vw-1rem)] overflow-hidden"
        >
            <div
                class="bg-base-200 relative flex h-52 w-full items-center justify-between overflow-hidden"
            >
                @if (event().extension_data?.images?.length) {
                    <img
                        auth
                        [source]="event().extension_data?.images[0]"
                        class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                }
            </div>

            @if (featured()) {
                <div
                    class="bg-info text-info-content absolute top-0 left-0 flex items-center space-x-2 rounded-br py-2 pr-4 pl-2 text-sm"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
            }
            @if (!is_limited()) {
                <button
                    icon
                    mat-dialog-close
                    class="absolute top-1 right-1 overflow-hidden"
                >
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-30"
                    ></div>
                    <icon class="z-10">close</icon>
                </button>
            }
            <div
                class="border-base-200 flex items-center justify-between border-b px-8 py-4"
            >
                <h3 class="text-left text-xl">
                    {{ event().title }}
                </h3>
                <div class="flex items-center space-x-2">
                    @if (!concierge()) {
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded-sm px-4"
                            [class.bg-base-200]="!is_interested()"
                            [class.text-base-content]="!is_interested()"
                            [class.opacity-30]="!is_interested()"
                            [class.bg-success]="is_interested()"
                            [class.text-success-content]="is_interested()"
                            [class.opacity-100]="is_interested()"
                        >
                            <icon>star</icon>
                            <div class="pr-2">
                                {{
                                    (is_interested()
                                        ? 'CALENDAR_EVENT.GROUP_INTERESTED'
                                        : 'CALENDAR_EVENT.GROUP_NOT_INTERESTED'
                                    ) | translate
                                }}
                            </div>
                        </div>
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded-sm px-4"
                            [class.bg-base-200]="!is_going()"
                            [class.text-base-content]="!is_going()"
                            [class.opacity-30]="!is_going()"
                            [class.bg-success]="is_going()"
                            [class.text-success-content]="is_going()"
                            [class.opacity-100]="is_going()"
                        >
                            <icon>help</icon>
                            <div class="pr-2">
                                {{
                                    (is_going()
                                        ? 'CALENDAR_EVENT.GROUP_GOING'
                                        : 'CALENDAR_EVENT.GROUP_NOT_GOING'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    }
                    <button
                        btn
                        matRipple
                        class="clear bg-base-200 text-base-content w-11"
                        [disabled]="event().state === 'done'"
                        [matMenuTriggerFor]="
                            concierge() ? concierge_menu : menu
                        "
                    >
                        <icon class="text-2xl">more_horiz</icon>
                    </button>
                    <mat-menu #concierge_menu="matMenu">
                        <button mat-menu-item [disabled]="true">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    confirmation_number
                                </icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_PROMOTE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="edit ? edit(event()) : ''"
                            mat-dialog-close
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">edit</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.ACTION_EDIT' | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            [disabled]="!public_event_link()"
                            (click)="copyPublicEventLink()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">content_copy</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_COPY_URL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        @if (event().state !== 'done') {
                            <button
                                mat-menu-item
                                (click)="remove(event(), false)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl">
                                        delete
                                    </icon>
                                    <div class="mr-2">
                                        {{
                                            'CALENDAR_EVENT.GROUP_DELETE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </mat-menu>
                    <mat-menu #menu="matMenu">
                        <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                            (click)="toggleInterest()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_interested()">
                                    star
                                </icon>
                                <span>
                                    {{
                                        (is_interested()
                                            ? 'CALENDAR_EVENT.GROUP_INTEREST_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_INTEREST_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="toggleAttendance()">
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_going()">
                                    help
                                </icon>
                                <span>
                                    {{
                                        (is_going()
                                            ? 'CALENDAR_EVENT.GROUP_GOING_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_GOING_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </div>
            <div
                class="flex max-h-[calc(80vh-18rem)] flex-1 space-x-6 overflow-x-hidden overflow-y-auto p-8"
            >
                <div class="flex w-1/3 flex-1 flex-col space-y-2">
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_HOST'
                                    | translate
                                        : {
                                              name:
                                                  event().organiser?.name ||
                                                  event().host,
                                          }
                            }}
                        </div>
                    </div>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_WHEN_WHERE' | translate }}
                    </h3>
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>calendar_today</icon>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm">
                                {{
                                    'CALENDAR_EVENT.GROUP_DATE_TIME' | translate
                                }}
                            </div>
                            <div class="text-sm opacity-30">
                                {{ event().date | date: 'EEEE, d MMMM, yyyy' }}
                                . {{ event().date | date: time_format() }} -
                                {{
                                    event().date + event().duration * 60 * 1000
                                        | date: time_format()
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>place</icon>
                        </div>
                        <div class="flex flex-col text-sm">
                            @if (is_onsite() && has_space()) {
                                <div>
                                    {{ space().display_name }}
                                </div>
                            }
                            @if (is_onsite() && !has_space()) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                            | translate
                                    }}
                                </div>
                            }
                            @if (is_online()) {
                                <div class="opacity-30">
                                    {{
                                        (is_onsite()
                                            ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                            : 'CALENDAR_EVENT.GROUP_REMOTE'
                                        ) | translate
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                    <button
                        matRipple
                        (click)="show_attendees.set(!is_limited() && true)"
                        class="flex min-h-12 items-center space-x-4 rounded-sm"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDEES'
                                    | translate
                                        : {
                                              going: attendance(),
                                              interested: attendees(),
                                          }
                            }}
                        </div>
                    </button>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_ABOUT' | translate }}
                    </h3>
                    <div class="pb-4 text-sm">
                        <span
                            event-details
                            [innerHTML]="body() | sanitize"
                        ></span>
                        @if (!raw_description()) {
                            <span class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                        | translate
                                }}
                            </span>
                        }
                    </div>
                </div>
                <div>
                    @if (level()) {
                        <div class="flex w-[20rem]">
                            <div class="border-base-300 w-full border">
                                <button
                                    matRipple
                                    class="bg-base-200 relative h-40 w-full"
                                    (click)="viewLocation()"
                                >
                                    @if (!showing_map()) {
                                        <interactive-map
                                            [src]="level().map_id"
                                            [features]="features()"
                                            [styles]="styles()"
                                        ></interactive-map>
                                    }
                                </button>
                                <div class="space-y-2 p-4">
                                    @if (is_onsite() && has_space()) {
                                        <div>
                                            {{ space().display_name }}
                                        </div>
                                    }
                                    @if (is_onsite() && !has_space()) {
                                        <div class="opacity-30">
                                            {{
                                                'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                    <div class="mt-0! text-sm opacity-30">
                                        @if (building() && level()) {
                                            <span>
                                                {{
                                                    building().display_name ||
                                                        building().name
                                                }},
                                                {{
                                                    level().display_name ||
                                                        level().name
                                                }}
                                            </span>
                                        }
                                        @if (!building() || !level()) {
                                            <span class="opacity-30">
                                                {{
                                                    'CALENDAR_EVENT.GROUP_NO_LOCATION'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                    </div>
                                    @if (is_online()) {
                                        <a
                                            class="mt-4 opacity-30"
                                            [class.underline]="
                                                event().meeting_url
                                            "
                                            [href]="event().meeting_url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{
                                                (is_onsite()
                                                    ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                                    : 'CALENDAR_EVENT.GROUP_REMOTE'
                                                ) | translate
                                            }}
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        @if (show_attendees()) {
            <div class="absolute inset-0 z-50">
                <button
                    class="bg-base-content absolute inset-0 opacity-60"
                    (click)="show_attendees.set(false)"
                ></button>
                <div
                    class="absolute inset-y-8 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded-sm shadow-sm"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="event().attendees"
                        [host]="event().host"
                        [show_host]="false"
                        (click)="show_attendees.set(false)"
                    ></attendee-list>
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        AttendeeListComponent,
        InteractiveMapComponent,
        SanitizePipe,
        MatMenuModule,
        MatDialogModule,
        AuthenticatedImageDirective,
    ],
})
export class GroupEventDetailsModalComponent implements OnInit {
    private _data = inject<{
        event: CalendarEvent;
        edit_fn: (i) => void;
        remove_fn: (i, s) => void;
        concierge: boolean;
    }>(MAT_DIALOG_DATA, { optional: true });
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _dialog_ref = inject<MatDialogRef<GroupEventDetailsModalComponent>>(
        MatDialogRef,
        { optional: true },
    );

    public readonly edit = this._data?.edit_fn;
    public readonly space = signal<Space>(new Space());
    public readonly event = model(this._data?.event);
    public readonly is_limited = signal(!this._data);
    public readonly concierge = signal(this._data?.concierge);
    public readonly building = signal<Building>(new Building());
    public readonly level = signal<BuildingLevel>(new BuildingLevel());
    public readonly features = signal<ViewerFeature[]>([]);
    public readonly locate = signal('');
    public readonly showing_map = signal(false);
    public readonly show_attendees = signal(false);
    public readonly styles = signal({});
    public readonly raw_description = signal('');
    public readonly calendar_space = signal(new Space());

    public readonly featured = computed(
        () =>
            (this.event() as any).featured ||
            this.event().extension_data?.featured,
    );
    public readonly has_space = computed(() => !!this.space().id);
    public readonly is_onsite = computed(
        () => this.event().extension_data.attendance_type !== 'ONLINE',
    );
    public readonly is_online = computed(
        () =>
            !this.is_onsite() ||
            this.event().extension_data.attendance_type === 'ANY',
    );

    public readonly body = computed(() => {
        if (this.is_online()) return this.event().body;
        let body = this.event().body;
        const remove_blocks = [
            `<div style="margin-bottom:24px; overflow:hidden; white-space:nowrap">________________________________________________________________________________</div>`,
            `<p>________________________________________________________________________________</p>`,
        ];
        for (const block of remove_blocks) {
            const first = body.indexOf(block);
            const last = body.lastIndexOf(block);
            body = body.substring(0, first) + body.substring(last);
        }
        for (const block of remove_blocks) {
            body = body.replace(block, '');
        }
        return body;
    });
    public readonly attendance = computed(
        () =>
            this.event().attendees?.filter((_: any) => _.checked_in)?.length ||
            0,
    );

    public remove(event: CalendarEvent, remove_series?: boolean) {
        if (event?.state === 'done') return;
        this._data?.remove_fn(event, remove_series);
    }

    public readonly attendees = computed(
        () =>
            this.event().attendees?.filter(
                (user) => user.email !== this.group_event_calendar(),
            )?.length || 0,
    );

    public readonly guest_details = computed(() => {
        const user = currentUser();
        return this.event().attendees?.find((_) => _.email === user.email);
    });
    public readonly is_interested = computed(() => !!this.guest_details());
    public readonly is_going = computed(() => this.guest_details()?.checked_in);
    public readonly system_id = computed(() => this.space().id);
    public readonly public_event_link = computed(() => {
        const system_id = this.calendar_space().id;
        const event_id = this.event()?.id;
        if (!system_id || !event_id) return '';
        const path = `${this.public_url_path() || '/public'}`.replace(
            /\/$/,
            '',
        );
        return `${window.location.origin}${path}/#/event/${encodeURIComponent(system_id)}/${encodeURIComponent(event_id)}`;
    });

    public readonly group_event_calendar = settingSignal<string>(
        'group_events_calendar',
        '',
    );
    public readonly public_url_path = settingSignal<string>(
        'public_url_path',
        '/public',
    );

    private readonly _use_24_hour = settingSignal<boolean>(
        'use_24_hour_time',
        false,
    );
    public readonly time_format = computed(() =>
        this._use_24_hour() ? 'HH:mm' : 'h:mm a',
    );

    public async ngOnInit() {
        const space_pipe = new SpacePipe();
        space_pipe.org = this._org;
        const resource = this.event().resources.find(
            (_) => _.email !== this.group_event_calendar(),
        );
        this.space.set(
            await space_pipe.transform(resource?.id || resource?.email),
        );
        this.calendar_space.set(
            await space_pipe.transform(this.group_event_calendar()),
        );
        const map_id = (this.event().extension_data as any)?.map_id;
        const id = this.space()?.map_id || map_id;
        if (id) {
            this.styles.set({ [`#${id}`]: { fill: 'green' } });
            this.features.set([
                {
                    location: id,
                    content: MapPinComponent,
                    data: {},
                },
            ]);
        }
        const zones = (this.space().zones as any) || [];
        this.level.set(this._org.levelWithID(zones) || this.level());
        this.building.set(
            this._org.buildings.find((_) => zones.includes(_.id)) ||
                this._org.building,
        );
        this.locate.set(map_id || '');
        this.raw_description.set(this.removeHtmlTags(this.event().body).trim());
    }

    public removeHtmlTags(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return (doc.body.textContent || '').trim();
    }
    public viewLocation() {
        if (!this.space().map_id) {
            return notifyInfo('Unable to locate space on map.');
        }
        this.showing_map.set(true);
        const ref = this._dialog.open(MapLocateModalComponent, {
            width: '100vw',
            height: '100vh',
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'fullscreen-dialog',
            data: { item: this.space },
        });
        ref.afterClosed().subscribe(() => this.showing_map.set(false));
    }

    public async toggleInterest() {
        let user = this.guest_details();
        const _user = new GuestUser(currentUser());
        if (this.is_interested() && user) {
            await removeEventGuest(this.event().id, _user, {
                system_id: this.calendar_space().id,
                calendar: this.group_event_calendar(),
            });
            this.event.update(
                (event) =>
                    new CalendarEvent({
                        ...event,
                        attendees: (event.attendees || []).filter(
                            (_: any) => _.email !== user.email,
                        ),
                    }),
            );
        } else {
            user = await addEventGuest(this.event().id, _user, {
                system_id: this.calendar_space().id,
                calendar: this.group_event_calendar(),
            });
            this.event.update(
                (event) =>
                    new CalendarEvent({
                        ...event,
                        attendees: unique(
                            [...(event.attendees || []), user],
                            'email',
                        ),
                    }),
            );
        }
    }

    public copyPublicEventLink() {
        const link = this.public_event_link();
        if (!link) return;
        if (this._clipboard.copy(link)) {
            notifyInfo('Copied public event link to clipboard.');
        }
    }

    public async toggleAttendance() {
        let user = this.guest_details();
        const _user = new GuestUser(currentUser());
        if (!user) {
            user = await addEventGuest(this.event().id, _user, {
                system_id: this.event().system?.id,
                calendar: this.group_event_calendar(),
            });
            this.event.update(
                (event) =>
                    new CalendarEvent({
                        ...event,
                        attendees: unique(
                            [...(event.attendees || []), user],
                            'email',
                        ),
                    }),
            );
        }
        user = { ...currentUser(), ...(user || {}) };
        if (!user.email) return;
        await checkinEventGuest(this.event().id, user.email, !this.is_going(), {
            system_id: this.event().system?.id,
        });
        const guest = this.event().attendees.find(
            (_) => _.email === user.email,
        );
        if (!guest) return;
        this.event.update(
            (event) =>
                new CalendarEvent({
                    ...event,
                    attendees: event.attendees.map((attendee) =>
                        attendee.email === user.email
                            ? { ...attendee, checked_in: !this.is_going() }
                            : attendee,
                    ),
                }),
        );
    }
}
