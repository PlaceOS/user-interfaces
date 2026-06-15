import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { CalendarEvent, Space, User } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { RoomConfirmService } from './room-confirm.service';

@Component({
    selector: 'room-confirm',
    template: `
        <div
            class="z-0 mx-auto flex min-h-[800px] w-[calc(100%-2rem)] w-full flex-1 flex-col overflow-y-auto"
        >
            <section class="border-base-200 flex flex-col border-b py-2">
                <div
                    class="justify-content flex flex-row items-center space-x-4"
                >
                    <button icon matRipple (click)="closeModal()">
                        <icon
                            class="flex items-center justify-center text-3xl text-gray-700"
                            >close</icon
                        >
                    </button>
                    <span class="mr-auto text-lg font-bold">
                        Confirm Room Booking</span
                    >
                </div>
            </section>

            <section
                class="border-base-200 mt-4 flex flex-row space-x-4 border-b pb-4"
            >
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>
                <div class="flex flex-col">
                    <span class="flex text-base font-bold text-gray-700"
                        >{{ title() }}
                    </span>

                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">calendar_today</icon>
                        <span class="flex">
                            {{ unix_time() | date: 'dd MMMM yyyy' }}
                        </span>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">schedule</icon>
                        <span class="flex"
                            >{{ start_time() }} -{{ end_time() }}</span
                        >
                    </div>
                </div>
            </section>

            <section
                class="border-base-200 mt-4 flex flex-row space-x-4 border-b pb-4"
            >
                <div class="flex flex-col">
                    <span class="text-base"
                        ><img src="assets/tick.svg" />
                    </span>
                </div>

                <div class="flex flex-col">
                    <span class="flex text-base font-bold text-gray-700"
                        >Attendees
                    </span>

                    @for (attendee of attendees(); track attendee) {
                        <div
                            class="mt-2 flex flex-row items-center text-sm text-gray-700"
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
                        class="mt-2 flex flex-row items-center text-sm text-gray-700"
                    >
                        <div class="flex flex-col">
                            <icon class="flex items-center">people</icon>
                        </div>
                        <div class="flex flex-col">
                            <span>{{ creator() }}</span>
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
                    <span class="flex text-base font-bold text-gray-700"
                        >Rooms
                    </span>

                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">meeting_room</icon>
                        <span class="flex">
                            {{ space().name }}
                        </span>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-700">
                        <icon class="flex items-center">room</icon>
                        <span class="flex"> {{ space().level?.name }}</span>
                    </div>
                </div>
            </section>

            <div
                class="top-box-shadow border-base-200 -mx-4 mt-5 mb-10 flex flex-col items-center border-t p-3"
            >
                <button
                    matRipple
                    (click)="confirmBooking()"
                    [disabled]="!show_submit_button()"
                    class="border-secondary bg-secondary mx-4 ml-2 w-[300px]"
                >
                    <span class="">Confirm</span>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [CommonModule, MatRippleModule, IconComponent],
})
export class RoomConfirmComponent {
    data = inject(MAT_BOTTOM_SHEET_DATA);
    private _bottomSheetRef =
        inject<MatBottomSheetRef<RoomConfirmComponent>>(MatBottomSheetRef);
    private _state = inject(EventFormService);
    private _roomConfirmService = inject(RoomConfirmService);

    public readonly form = this._state.form;
    public readonly model = this._state.model;
    public loading = this._state.loading;
    public readonly show_submit_button = signal(true);
    public readonly space = signal<Space>(this.data as Space);

    private readonly _form_value = this.model;

    public readonly unix_time = computed(
        () => this._form_value()?.date as number,
    );
    public readonly start_time = computed(() =>
        new Date(this.unix_time()).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
    );
    public readonly end_time = computed(() => {
        const duration_minutes = this._form_value()?.duration as number;
        const end_time = this.unix_time() + duration_minutes * 60 * 1000;
        return new Date(end_time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    });
    public readonly attendees = computed(
        () => (this._form_value()?.attendees as User[]) || [],
    );
    public readonly creator = computed(
        () => (this._form_value()?.creator as string) || '',
    );
    public readonly title = computed(
        () => this._form_value()?.title as CalendarEvent['title'],
    );

    closeModal() {
        this._bottomSheetRef.dismiss('cancel');
    }

    confirmBooking() {
        this.show_submit_button.set(false);
        this._roomConfirmService.bookRoom(this.space());
    }
}
