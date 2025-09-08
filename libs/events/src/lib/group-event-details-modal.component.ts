import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {
    SettingsService,
    currentUser,
    notifyInfo,
    unique,
} from '@placeos/common';
import { MapLocateModalComponent, MapPinComponent } from '@placeos/components';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { ViewerFeature } from '@placeos/svg-viewer';
import { GuestUser } from '@placeos/users';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { Space } from 'libs/spaces/src/lib/space.class';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { lastValueFrom } from 'rxjs';
import { AttendeeListComponent } from './attendee-list.component';
import { CalendarEvent } from './event.class';
import {
    addEventGuest,
    checkinEventGuest,
    removeEventGuest,
} from './events.fn';

@Component({
    selector: `group-event-details-modal`,
    template: `
        <div
            class="relative max-h-[80vh] w-[48rem] max-w-[calc(100vw-1rem)] overflow-hidden"
        >
            <div
                class="relative flex h-52 w-full items-center justify-between overflow-hidden bg-base-200"
            >
                @if (event.extension_data?.images?.length) {
                    <img
                        auth
                        [source]="event.extension_data?.images[0]"
                        class="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                }
            </div>

            @if (featured) {
                <div
                    class="absolute left-0 top-0 flex items-center space-x-2 rounded-br bg-info py-2 pl-2 pr-4 text-sm text-info-content"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
            }
            <button
                icon
                mat-dialog-close
                class="absolute right-1 top-1 overflow-hidden"
            >
                <div class="absolute inset-0 z-0 bg-base-100 opacity-30"></div>
                <icon class="z-10">close</icon>
            </button>
            <div
                class="flex items-center justify-between border-b border-base-200 px-8 py-4"
            >
                <h3 class="text-left text-xl">
                    {{ event.title }}
                </h3>
                <div class="flex items-center space-x-2">
                    @if (!concierge) {
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded px-4"
                            [class.bg-base-200]="!is_interested"
                            [class.text-base-content]="!is_interested"
                            [class.opacity-30]="!is_interested"
                            [class.bg-success]="is_interested"
                            [class.text-success-content]="is_interested"
                            [class.opacity-100]="is_interested"
                        >
                            <icon>star</icon>
                            <div class="pr-2">
                                {{
                                    (is_interested
                                        ? 'CALENDAR_EVENT.GROUP_INTERESTED'
                                        : 'CALENDAR_EVENT.GROUP_NOT_INTERESTED'
                                    ) | translate
                                }}
                            </div>
                        </div>
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded px-4"
                            [class.bg-base-200]="!is_going"
                            [class.text-base-content]="!is_going"
                            [class.opacity-30]="!is_going"
                            [class.bg-success]="is_going"
                            [class.text-success-content]="is_going"
                            [class.opacity-100]="is_going"
                        >
                            <icon>help</icon>
                            <div class="pr-2">
                                {{
                                    (is_going
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
                        class="clear w-[2.75rem] bg-base-200 text-base-content"
                        [disabled]="event.state === 'done'"
                        [matMenuTriggerFor]="concierge ? concierge_menu : menu"
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
                            (click)="edit ? edit(event) : ''"
                            mat-dialog-close
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">edit</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_EDIT' | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button mat-menu-item [disabled]="true">
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
                        <button
                            mat-menu-item
                            (click)="remove ? remove(event, false) : ''"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl text-error">
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
                    </mat-menu>
                    <mat-menu #menu="matMenu">
                        <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                            (click)="toggleInterest()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_interested">
                                    star
                                </icon>
                                <span>
                                    {{
                                        (is_interested
                                            ? 'CALENDAR_EVENT.GROUP_INTEREST_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_INTEREST_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="toggleAttendance()">
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_going">
                                    help
                                </icon>
                                <span>
                                    {{
                                        (is_going
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
                class="flex max-h-[calc(80vh-18rem)] flex-1 space-x-6 overflow-y-auto overflow-x-hidden p-8"
            >
                <div class="flex w-1/3 flex-1 flex-col space-y-2">
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_HOST'
                                    | translate
                                        : {
                                              name:
                                                  event.organiser?.name ||
                                                  event.host,
                                          }
                            }}
                        </div>
                    </div>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_WHEN_WHERE' | translate }}
                    </h3>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
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
                                {{ event.date | date: 'EEEE, d MMMM, yyyy' }}
                                . {{ event.date | date: time_format }} -
                                {{
                                    event.date + event.duration * 60 * 1000
                                        | date: time_format
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>place</icon>
                        </div>
                        <div class="flex flex-col text-sm">
                            @if (is_onsite && has_space) {
                                <div>
                                    {{
                                        (system_id | space | async)
                                            ?.display_name
                                    }}
                                </div>
                            }
                            @if (is_onsite && !has_space) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                            | translate
                                    }}
                                </div>
                            }
                            @if (is_online) {
                                <div class="opacity-30">
                                    {{
                                        (is_onsite
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
                        (click)="show_attendees = true"
                        class="flex min-h-12 items-center space-x-4 rounded"
                    >
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDEES'
                                    | translate
                                        : {
                                              going: attendance,
                                              interested: attendees,
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
                            [innerHTML]="body | sanitize"
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
                    @if (level) {
                        <div class="flex w-[20rem]">
                            <div class="w-full border border-base-300">
                                <button
                                    matRipple
                                    class="relative h-40 w-full bg-base-200"
                                    (click)="viewLocation()"
                                >
                                    @if (!showing_map) {
                                        <interactive-map
                                            [src]="level?.map_id"
                                            [features]="features"
                                            [styles]="styles"
                                        ></interactive-map>
                                    }
                                </button>
                                <div class="space-y-2 p-4">
                                    @if (is_onsite && has_space) {
                                        <div>
                                            {{
                                                (system_id | space | async)
                                                    ?.display_name
                                            }}
                                        </div>
                                    }
                                    @if (is_onsite && !has_space) {
                                        <div class="opacity-30">
                                            {{
                                                'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                    <div class="!mt-0 text-sm opacity-30">
                                        @if (building && level) {
                                            <span>
                                                {{
                                                    building.display_name ||
                                                        building.name
                                                }},
                                                {{
                                                    level?.display_name ||
                                                        level?.name
                                                }}
                                            </span>
                                        }
                                        @if (!building || !level) {
                                            <span class="opacity-30">
                                                {{
                                                    'CALENDAR_EVENT.GROUP_NO_LOCATION'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                    </div>
                                    @if (is_online) {
                                        <a
                                            class="mt-4 opacity-30"
                                            [class.underline]="
                                                event.meeting_url
                                            "
                                            [href]="event.meeting_url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{
                                                (is_onsite
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
        @if (show_attendees) {
            <div class="absolute inset-0 z-50">
                <button
                    class="absolute inset-0 bg-base-content opacity-60"
                    (click)="show_attendees = false"
                ></button>
                <div
                    class="absolute inset-y-8 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded shadow"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="event.attendees"
                        [host]="event.host"
                        [show_host]="false"
                        (click)="show_attendees = false"
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
        SpacePipe,
    ],
})
export class GroupEventDetailsModalComponent {
    private _data = inject<{
        event: CalendarEvent;
        edit_fn: (i) => void;
        remove_fn: (i, s) => void;
        concierge: boolean;
    }>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);
    private _dialog_ref =
        inject<MatDialogRef<GroupEventDetailsModalComponent>>(MatDialogRef);

    public readonly edit = this._data.edit_fn;
    public readonly remove = this._data.remove_fn;
    public space: Space;
    public event: CalendarEvent = this._data.event;
    public concierge = this._data.concierge;
    public building: Building;
    public level: BuildingLevel;
    public features: ViewerFeature[] = [];
    public locate = '';
    public showing_map = false;
    public show_attendees = false;
    public styles = {};
    public readonly raw_description = signal('');
    public calendar_space: Space;

    public get time_format() {
        return this._settings.time_format;
    }

    public get featured() {
        return (
            (this.event as any).featured || this.event.extension_data?.featured
        );
    }

    public get is_onsite() {
        return this.event.extension_data.attendance_type !== 'ONLINE';
    }

    public get has_space() {
        return !!this.space?.id;
    }

    public get is_online() {
        return (
            !this.is_onsite ||
            this.event.extension_data.attendance_type === 'ANY'
        );
    }

    public get body() {
        if (this.is_online) return this.event.body;
        let body = this.event.body;
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
    }

    public get attendance() {
        return (
            this.event.attendees?.filter((_: any) => _.checked_in)?.length || 0
        );
    }

    public get attendees() {
        return (
            this.event.attendees?.filter(
                (user) => user.email !== this.group_event_calendar,
            )?.length || 0
        );
    }

    public get is_interested() {
        return !!this.guest_details;
    }

    public get is_going() {
        return this.guest_details?.checked_in;
    }

    public get system_id() {
        return this.space?.id;
    }

    public get guest_details() {
        const user = currentUser();
        return this.event.attendees?.find((_) => _.email === user.email);
    }

    public get group_event_calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public async ngOnInit() {
        const space_pipe = new SpacePipe();
        space_pipe.org = this._org;
        const resource = this.event.resources.find(
            (_) => _.email !== this.group_event_calendar,
        );
        this.space = await space_pipe.transform(
            resource?.id || resource?.email,
        );
        this.calendar_space = await space_pipe.transform(
            this.group_event_calendar,
        );
        const map_id = (this.event.extension_data as any)?.map_id;
        const id = this.space?.map_id || map_id;
        if (id) {
            this.styles[`#${id}`] = { fill: 'green' };
            this.features = [
                {
                    location: id,
                    content: MapPinComponent,
                    data: {},
                },
            ];
        }
        const zones = (this.space?.zones as any) || [];
        this.level = this._org.levelWithID(zones);
        this.building =
            this._org.buildings.find((_) => zones.includes(_.id)) ||
            this._org.building;
        this.locate = map_id || '';
        this.raw_description.set(this.removeHtmlTags(this.event.body).trim());
    }

    public removeHtmlTags(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return (doc.body.textContent || '').trim();
    }
    public viewLocation() {
        if (!this.space?.map_id) {
            return notifyInfo('Unable to locate space on map.');
        }
        this.showing_map = true;
        const ref = this._dialog.open(MapLocateModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { item: this.space },
        });
        ref.afterClosed().subscribe(() => {
            this.showing_map = false;
        });
    }

    public async toggleInterest() {
        let user = this.guest_details;
        console.log('System', this.event, this.calendar_space);
        const _user = new GuestUser(currentUser());
        if (this.is_interested && user) {
            await lastValueFrom(
                removeEventGuest(this.event.id, _user, {
                    system_id: this.calendar_space?.id,
                    calendar: this.group_event_calendar,
                }),
            );
            (this.event as any).attendees = (this.event.attendees || []).filter(
                (_: any) => _.email !== user.email,
            );
        } else {
            user = await lastValueFrom(
                addEventGuest(this.event.id, _user, {
                    system_id: this.calendar_space?.id,
                    calendar: this.group_event_calendar,
                }),
            );
            (this.event as any).attendees = unique(
                [...(this.event.attendees || []), user],
                'email',
            );
        }
    }

    public async toggleAttendance() {
        let user = this.guest_details;
        const _user = new GuestUser(currentUser());
        if (!user) {
            user = await lastValueFrom(
                addEventGuest(this.event.id, _user, {
                    system_id: this.event.system?.id,
                    calendar: this.group_event_calendar,
                }),
            );
            (this.event as any).attendees = unique(
                [...(this.event.attendees || []), user],
                'email',
            );
        }
        user = { ...currentUser(), ...(user || {}) };
        if (!user.email) return;
        await lastValueFrom(
            checkinEventGuest(this.event.id, user.email, !this.is_going, {
                system_id: this.event.system?.id,
            }),
        );
        const guest = this.event.attendees.find((_) => _.email === user.email);
        if (!guest) return;
        (guest as any).checked_in = !this.is_going;
    }
}
