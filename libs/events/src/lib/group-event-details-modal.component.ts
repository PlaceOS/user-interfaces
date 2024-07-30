import { Component, Inject, Output, EventEmitter } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
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
import { Space } from 'libs/spaces/src/lib/space.class';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
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
            class="relative w-[48rem] max-w-[calc(100vw-1rem)] max-h-[80vh] overflow-hidden"
        >
            <div
                class="relative flex items-center justify-between h-52 w-full bg-base-200 overflow-hidden"
            >
                <img
                    *ngIf="event.extension_data?.images?.length"
                    auth
                    [source]="event.extension_data?.images[0]"
                    class="absolute top-1/2 left-1/2 min-h-full min-w-full object-cover -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            <div
                class="absolute top-0 left-0 rounded-br py-2 pl-2 pr-4 space-x-2 bg-info text-info-content flex items-center text-sm"
                *ngIf="featured"
            >
                <app-icon class="text-base">star</app-icon>
                <div class="uppercase">Featured</div>
            </div>
            <button
                icon
                mat-dialog-close
                class="absolute top-1 right-1 overflow-hidden"
            >
                <div class="absolute inset-0 bg-base-100 opacity-30 z-0"></div>
                <app-icon class="z-10">close</app-icon>
            </button>
            <div
                class="flex items-center justify-between py-4 px-8 border-b border-base-200"
            >
                <h3 class="text-left text-xl">
                    {{ event.title }}
                </h3>
                <div class="flex items-center space-x-2">
                    <ng-container *ngIf="!concierge">
                        <div
                            btn
                            class="flex items-center px-4 h-10 rounded space-x-2"
                            [class.bg-base-200]="!is_interested"
                            [class.text-base-content]="!is_interested"
                            [class.opacity-30]="!is_interested"
                            [class.bg-success]="is_interested"
                            [class.text-success-content]="is_interested"
                            [class.opacity-100]="is_interested"
                        >
                            <app-icon>star</app-icon>
                            <div class="pr-2">
                                {{ is_interested ? '' : 'Not ' }}Interested
                            </div>
                        </div>
                        <div
                            btn
                            class="flex items-center px-4 h-10 rounded space-x-2"
                            [class.bg-base-200]="!is_going"
                            [class.text-base-content]="!is_going"
                            [class.opacity-30]="!is_going"
                            [class.bg-success]="is_going"
                            [class.text-success-content]="is_going"
                            [class.opacity-100]="is_going"
                        >
                            <app-icon>help</app-icon>
                            <div class="pr-2">
                                {{ is_going ? '' : 'Not ' }}Going
                            </div>
                        </div>
                    </ng-container>
                    <button
                        btn
                        matRipple
                        class="clear bg-base-200 text-base-content w-[2.75rem]"
                        [disabled]="event.state === 'done'"
                        [matMenuTriggerFor]="concierge ? concierge_menu : menu"
                    >
                        <app-icon class="text-2xl">more_horiz</app-icon>
                    </button>
                    <mat-menu #concierge_menu="matMenu">
                        <button mat-menu-item [disabled]="true">
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">
                                    confirmation_number
                                </app-icon>
                                <div class="mr-2">Promote Event</div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="edit.emit()"
                            mat-dialog-close
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">edit</app-icon>
                                <div class="mr-2">Edit Event</div>
                            </div>
                        </button>
                        <button mat-menu-item [disabled]="true">
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl"
                                    >content_copy</app-icon
                                >
                                <div class="mr-2">Copy URL</div>
                            </div>
                        </button>
                        <button mat-menu-item (click)="remove.emit()">
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl text-error">
                                    delete
                                </app-icon>
                                <div class="mr-2">Delete Event</div>
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
                                <app-icon [class.text-error]="is_interested">
                                    star
                                </app-icon>
                                <span>
                                    {{ is_interested ? 'Revoke' : 'Indicate' }}
                                    Interest
                                </span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="toggleAttendance()">
                            <div class="flex items-center space-x-2">
                                <app-icon [class.text-error]="is_going">
                                    help
                                </app-icon>
                                <span>
                                    {{ is_going ? 'Revoke' : 'Indicate' }}
                                    Going
                                </span>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </div>
            <div
                class="flex flex-1 max-h-[calc(80vh-18rem)] overflow-y-auto overflow-x-hidden p-8 space-x-6"
            >
                <div class="flex flex-1 flex-col space-y-2 w-1/3">
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>person</app-icon>
                        </div>
                        <div>
                            Event by
                            {{ event.organiser?.name || event.host }}
                        </div>
                    </div>
                    <h3 class="font-medium pt-4">When and where</h3>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>calendar_today</app-icon>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm">Date and Time</div>
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
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>place</app-icon>
                        </div>
                        <div class="flex flex-col text-sm">
                            <div *ngIf="is_onsite && has_space">
                                {{ (system_id | space | async)?.display_name }}
                            </div>
                            <div
                                *ngIf="is_onsite && !has_space"
                                class="opacity-30"
                            >
                                Room to be confirmed
                            </div>
                            <div *ngIf="is_online" class="opacity-30">
                                {{
                                    is_onsite
                                        ? 'Can be attended online'
                                        : 'Remote Event'
                                }}
                            </div>
                        </div>
                    </div>
                    <button
                        matRipple
                        (click)="show_attendees = true"
                        class="flex items-center space-x-4 rounded min-h-12"
                    >
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>person</app-icon>
                        </div>
                        <div>
                            {{ attendance }} going,
                            {{ event.attendees?.length }}
                            interested
                        </div>
                    </button>
                    <h3 class="font-medium pt-4">About this event</h3>
                    <div class="text-sm pb-4">
                        <span
                            event-details
                            [innerHTML]="event.body | sanitize"
                        ></span>
                        <span
                            *ngIf="!raw_description.trim()"
                            class="opacity-30"
                        >
                            No description
                        </span>
                    </div>
                </div>
                <div>
                    <div class="flex w-[20rem]" *ngIf="level">
                        <div class="border border-base-300 w-full">
                            <button
                                matRipple
                                class="relative w-full h-40 bg-base-200"
                                (click)="viewLocation()"
                            >
                                <interactive-map
                                    *ngIf="!showing_map"
                                    [src]="level?.map_id"
                                    [features]="features"
                                    [styles]="styles"
                                ></interactive-map>
                            </button>
                            <div class=" p-4 space-y-2">
                                <div>
                                    <div *ngIf="is_onsite && has_space">
                                        {{
                                            (system_id | space | async)
                                                ?.display_name
                                        }}
                                    </div>
                                    <div
                                        *ngIf="is_onsite && !has_space"
                                        class="opacity-30"
                                    >
                                        Room to be confirmed
                                    </div>
                                    <a
                                        *ngIf="is_online"
                                        class="opacity-30"
                                        [class.underline]="event.meeting_url"
                                        [href]="event.meeting_url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {{
                                            is_onsite
                                                ? 'Can be attended online'
                                                : 'Remote Event'
                                        }}
                                    </a>
                                </div>
                                <div class="opacity-30 text-sm">
                                    <span *ngIf="building && level">
                                        {{
                                            building.display_name ||
                                                building.name
                                        }},
                                        {{ level?.display_name || level?.name }}
                                    </span>
                                    <span
                                        *ngIf="!building || !level"
                                        class="opacity-30"
                                    >
                                        No location set for this event
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-0 z-50" *ngIf="show_attendees">
            <button
                class="absolute inset-0 bg-base-content opacity-60"
                (click)="show_attendees = false"
            ></button>
            <div
                class="absolute left-1/2 -translate-x-1/2 w-[24rem] inset-y-8 rounded shadow overflow-hidden"
            >
                <attendee-list
                    [list]="event.attendees"
                    [host]="event.user_email"
                    (click)="show_attendees = false"
                ></attendee-list>
            </div>
        </div>
    `,
    styles: [``],
})
export class GroupEventDetailsModalComponent {
    @Output() public edit = new EventEmitter();
    @Output() public remove = new EventEmitter();
    public space: Space;
    public event: CalendarEvent = this._data.event;
    public concierge = this._data.concierge;
    public building: Building;
    public level: BuildingLevel;
    public features: ViewerFeature[] = [];
    public locate = '';
    public showing_map = false;
    public show_attendees: boolean = false;
    public styles = {};
    public raw_description = '';

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

    public get attendance() {
        return (
            this.event.attendees?.filter((_: any) => _.checked_in)?.length || 0
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

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { event: CalendarEvent; concierge: boolean },
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<GroupEventDetailsModalComponent>,
    ) {}

    public async ngOnInit() {
        const space_pipe = new SpacePipe(this._org);
        const resource = this.event.resources.find(
            (_) => _.email !== this.group_event_calendar,
        );
        this.space = await space_pipe.transform(
            resource?.id || resource?.email,
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
        this.raw_description = this.removeHtmlTags(this.event.body);
    }

    public removeHtmlTags(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
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
        console.log('User:', user, this.is_interested);
        if (this.is_interested && user) {
            await removeEventGuest(this.event.id, currentUser() as any, {
                system_id: this.event.system?.id,
            }).toPromise();
            (this.event as any).attendees = (this.event.attendees || []).filter(
                (_: any) => _.email !== user.email,
            );
        } else {
            user = await addEventGuest(this.event.id, currentUser() as any, {
                system_id: this.event.system?.id,
            }).toPromise();
            (this.event as any).attendees = unique(
                [...(this.event.attendees || []), user],
                'email',
            );
        }
    }

    public async toggleAttendance() {
        let user = this.guest_details;
        if (!user) {
            user = await addEventGuest(this.event.id, currentUser() as any, {
                system_id: this.event.system?.id,
            }).toPromise();
            (this.event as any).attendees = unique(
                [...(this.event.attendees || []), user],
                'email',
            );
        }
        user = { ...currentUser(), ...(user || {}) };
        if (!user.email) return;
        await checkinEventGuest(this.event.id, user.email, !this.is_going, {
            system_id: this.event.system?.id,
        }).toPromise();
        const guest = this.event.attendees.find((_) => _.email === user.email);
        if (!guest) return;
        (guest as any).checked_in = !this.is_going;
    }
}
