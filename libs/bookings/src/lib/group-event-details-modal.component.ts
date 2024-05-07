import { Component, Inject, Output, EventEmitter } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    Booking,
    bookingAddGuest,
    bookingRemoveGuest,
    checkinBookingGuest,
    removeBooking,
} from '@placeos/bookings';
import {
    SettingsService,
    currentUser,
    notifyError,
    notifySuccess,
    openConfirmModal,
    unique,
} from '@placeos/common';
import { MapPinComponent } from '@placeos/components';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { ViewerFeature } from '@placeos/svg-viewer';

@Component({
    selector: `group-event-details-modal`,
    template: `
        <div
            class="relative w-[48rem] max-w-[calc(100vw-1rem)] max-h-[80vh] overflow-hidden"
        >
            <div
                class="flex items-center justify-between h-52 w-full bg-base-200 overflow-hidden"
            >
                <img
                    *ngIf="booking.images?.length"
                    auth
                    [source]="booking.images[0]"
                    class="object-cover"
                />
            </div>
            <div
                class="absolute top-0 left-0 rounded-br py-2 pl-2 pr-4 space-x-2 bg-info text-info-content flex items-center text-sm"
                *ngIf="featured"
            >
                <app-icon class="text-base">star</app-icon>
                <div class="uppercase">Featured</div>
            </div>
            <button icon mat-dialog-close class="absolute top-1 right-1">
                <app-icon>close</app-icon>
            </button>
            <div
                class="flex items-center justify-between py-4 px-8 border-b border-base-200"
            >
                <h3 class="text-left text-xl">
                    {{ booking.title }}
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
                        <button mat-menu-item (click)="removeEvent()">
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
            <div class="flex overflow-y-auto overflow-x-hidden p-8">
                <div class="flex flex-1 flex-col space-y-2 w-1/2">
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>person</app-icon>
                        </div>
                        <div>Event by {{ booking.user_name }}</div>
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
                                {{ booking.date | date: 'EEEE, d MMMM, yyyy' }}
                                . {{ booking.date | date: time_format }} -
                                {{
                                    booking.date + booking.duration * 60 * 1000
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
                        <div class="text-sm">
                            {{
                                (
                                    booking.linked_event?.system_id
                                    | space
                                    | async
                                )?.display_name
                            }}
                            <span
                                *ngIf="!booking.linked_event?.system_id"
                                class="opacity-30"
                            >
                                Remote Event
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>person</app-icon>
                        </div>
                        <div>
                            {{ attendance }} going,
                            {{ booking.attendees?.length - attendance }}
                            interested
                        </div>
                    </div>
                    <h3 class="font-medium pt-4">About this event</h3>
                    <div class="text-sm pb-4">
                        {{ booking.description }}
                        <span *ngIf="!booking.description" class="opacity-30">
                            No description
                        </span>
                    </div>
                </div>
                <div class="flex w-[20rem]" *ngIf="level">
                    <div class="border border-base-300 w-full">
                        <button
                            matRipple
                            class="relative w-full h-40 bg-base-200"
                        >
                            <interactive-map
                                [src]="level?.map_id"
                                [features]="features"
                            ></interactive-map>
                        </button>
                        <div class=" p-4 space-y-2">
                            <div>
                                {{ booking.location }}
                                <span
                                    *ngIf="!booking.location"
                                    class="opacity-30"
                                >
                                    Remote Event
                                </span>
                            </div>
                            <div class="opacity-30 text-sm">
                                {{ booking.location }}
                                <span
                                    *ngIf="!booking.location"
                                    class="opacity-30"
                                >
                                    No location set for this event
                                </span>
                            </div>
                            <div class="flex items-center space-x-2 pt-4">
                                <div
                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-base-200"
                                    matTooltip="WiFi available"
                                >
                                    <app-icon class="text-2xl">wifi</app-icon>
                                </div>
                                <div
                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-base-200"
                                    matTooltip="Cafe available"
                                >
                                    <app-icon class="text-2xl"
                                        >local_cafe</app-icon
                                    >
                                </div>
                                <div
                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-base-200"
                                    matTooltip=""
                                >
                                    <app-icon class="text-2xl">chat</app-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class GroupEventDetailsModalComponent {
    @Output() public edit = new EventEmitter();
    public booking: Booking = this._data.booking;
    public concierge = this._data.concierge;
    public level: BuildingLevel;
    public features: ViewerFeature[] = [];
    public locate = '';

    public get time_format() {
        return this._settings.time_format;
    }

    public get featured() {
        return (
            (this.booking as any).featured ||
            this.booking.extension_data?.featured
        );
    }

    public get attendance() {
        return (
            this.booking.attendees?.filter((_: any) => _.status === 'accepted')
                ?.length || 0
        );
    }

    public get is_interested() {
        return !!this.guest_details;
    }

    public get is_going() {
        return this.guest_details?.checked_in;
    }

    public get guest_details() {
        const user = currentUser();
        return this.booking.attendees?.find((_) => _.email === user.email);
    }

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { booking: Booking; concierge: boolean },
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<GroupEventDetailsModalComponent>
    ) {}

    public ngOnInit(): void {
        this.level = this._org.levelWithID(this.booking.zones);
        this.locate = this.booking.extension_data?.map_id || '';
        this.features = [
            {
                location: this.locate,
                content: MapPinComponent,
                data: {},
            },
        ];
    }

    public async toggleInterest() {
        let user = this.guest_details;
        console.log('User:', user, this.is_interested);
        if (this.is_interested && user) {
            await bookingRemoveGuest(
                this.booking.id,
                currentUser() as any
            ).toPromise();
            (this.booking as any).attendees = (
                this.booking.attendees || []
            ).filter((_: any) => _.email !== user.email);
        } else {
            user = await bookingAddGuest(
                this.booking.id,
                currentUser() as any
            ).toPromise();
            (this.booking as any).attendees = unique(
                [...(this.booking.attendees || []), user],
                'email'
            );
        }
    }

    public async toggleAttendance() {
        console.log('Toggle Attendance:', this.is_going, this.guest_details);
        let user = this.guest_details;
        if (!user) {
            user = await bookingAddGuest(
                this.booking.id,
                currentUser() as any
            ).toPromise();
            (this.booking as any).attendees = unique(
                [...(this.booking.attendees || []), user],
                'email'
            );
        }
        await checkinBookingGuest(
            this.booking.id,
            user.email,
            !this.is_going
        ).toPromise();
        (user as any).checked_in = !this.is_going;
    }

    public async removeEvent() {
        const result = await openConfirmModal(
            {
                title: 'Delete Event',
                content: `Are you sure you want to delete the event "${this.booking.title}"?`,
                icon: { content: 'delete' },
                confirm_text: 'Delete',
            },
            this._dialog
        );
        if (result.reason !== 'done') return;
        result.loading('Deleting event...');
        await removeBooking(this.booking.id)
            .toPromise()
            .catch((e) => {
                notifyError(e);
                result.close();
                throw e;
            });
        result.close();
        notifySuccess('Successfully deleted event.');
        this._dialog_ref.close();
    }
}
