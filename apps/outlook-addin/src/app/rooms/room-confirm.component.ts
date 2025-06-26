import { Component, OnInit, inject } from '@angular/core';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CalendarEvent, EventFormService } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { User } from '@placeos/users';
import { RoomConfirmService } from './room-confirm.service';

@Component({
    selector: 'room-confirm',
    template: `
        <div
            class="z-0 mx-auto flex min-h-[800px] w-[calc(100%-2rem)] w-full flex-1 flex-col overflow-y-auto"
        >
            <section class="flex flex-col border-b border-base-200 py-2">
                <div
                    class="justify-content flex flex-row items-center space-x-4"
                >
                    <button icon matRipple (click)="closeModal()">
                        <icon
                            class="text-gray-700 flex items-center justify-center text-3xl"
                            >close</icon
                        >
                    </button>
                    <span class="mr-auto text-lg font-bold">
                        Confirm Room Booking</span
                    >
                </div>
            </section>

            <section
                class="mt-4 flex flex-row space-x-4 border-b border-base-200 pb-4"
            >
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-700 flex text-base font-bold"
                        >{{ title }}
                    </span>

                    <div class="text-gray-700 mt-2 flex items-center text-sm">
                        <icon class="flex items-center">calendar_today</icon>
                        <span class="flex">
                            {{ unix_time | date: 'dd MMMM yyyy' }}
                        </span>
                    </div>
                    <div class="text-gray-700 mt-2 flex items-center text-sm">
                        <icon class="flex items-center">schedule</icon>
                        <span class="flex"
                            >{{ start_time }} -{{ end_time }}</span
                        >
                    </div>
                </div>
            </section>

            <section
                class="mt-4 flex flex-row space-x-4 border-b border-base-200 pb-4"
            >
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>

                <div class="flex flex-col">
                    <span class="text-gray-700 flex text-base font-bold"
                        >Attendees
                    </span>

                    @for (attendee of attendees; track attendee) {
                        <div
                            class="text-gray-700 mt-2 flex flex-row items-center text-sm"
                        >
                            <div class="flex flex-col">
                                <icon class="flex items-center">people</icon>
                            </div>
                            <div class="flex flex-col">
                                <span class="w-full">{{
                                    attendee?.email
                                }}</span>
                            </div>
                        </div>
                    }

                    <div
                        class="text-gray-700 mt-2 flex flex-row items-center text-sm"
                    >
                        <div class="flex flex-col">
                            <icon class="flex items-center">people</icon>
                        </div>
                        <div class="flex flex-col">
                            <span>{{ form?.controls?.creator?.value }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-4 flex flex-row space-x-4 pb-4">
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-700 flex text-base font-bold"
                        >Rooms
                    </span>

                    <div class="text-gray-700 mt-2 flex items-center text-sm">
                        <icon class="flex items-center">meeting_room</icon>
                        <span class="flex">
                            {{ space?.name }}
                        </span>
                    </div>
                    <div class="text-gray-700 mt-2 flex items-center text-sm">
                        <icon class="flex items-center">room</icon>
                        <span class="flex"> {{ space?.level?.name }}</span>
                    </div>
                </div>
            </section>

            <div
                class="top-box-shadow -mx-4 mb-10 mt-5 flex flex-col items-center border-t border-base-200 p-3"
            >
                <button
                    matRipple
                    (click)="confirmBooking()"
                    [disabled]="!show_submit_button"
                    class="mx-4 ml-2 w-[300px] border-secondary bg-secondary"
                >
                    <span class="">Confirm</span>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RoomConfirmComponent implements OnInit {
    data = inject(MAT_BOTTOM_SHEET_DATA);
    private _bottomSheetRef = inject<MatBottomSheetRef<RoomConfirmComponent>>(MatBottomSheetRef);
    private _state = inject(EventFormService);
    private _roomConfirmService = inject(RoomConfirmService);

    unix_time: number;
    start_time: string;
    end_time: string;
    attendees: User[];
    space: Space;
    title: CalendarEvent['title'];
    show_submit_button: boolean = true;

    public get form() {
        return this._state.form;
    }
    public loading = this._state.loading$;

    async ngOnInit() {
        this.unix_time = this.form?.controls?.date.value;
        this.start_time = new Date(this.unix_time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        const durationMinutes: number = this.form?.controls?.duration.value;
        const end = this.unix_time + durationMinutes * 60 * 1000;
        this.end_time = new Date(end).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        this.attendees = this.form?.controls?.attendees.value as User[];
        this.space = this.data;
        this.title = this.form?.controls?.title.value;
    }

    closeModal() {
        this._bottomSheetRef.dismiss('cancel');
    }

    confirmBooking() {
        this.show_submit_button = false;
        this._roomConfirmService.bookRoom(this.space);
    }
}
