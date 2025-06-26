import { Component, OnInit, inject } from '@angular/core';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'placeos-room-details',
    template: `
        <div
            class="z-0 flex min-h-[800px] w-full flex-1 flex-col overflow-hidden"
        >
            @if (space?.images?.length > 0) {
                <section
                    class="text-gray-500 flex min-h-[300px] items-center justify-center bg-base-200"
                >
                    <img
                        auth
                        [source]="space.images[0]"
                        [alt]="'Image of ' + (space.display_name || space.name)"
                        width="100%"
                        height="100%"
                        class="z-20 flex rounded-lg"
                    />
                </section>
            }
            <section
                class="mx-auto flex w-[calc(100%-2rem)] flex-col border-b border-base-200"
            >
                <span class="mt-3 text-lg font-bold"> {{ space?.name }}</span>

                <div (click)="selectRoom()" class="w-max-[375px]">
                    @if (room_added == false) {
                        <button
                            btn
                            matRipple
                            class="m-3 mx-auto w-full border-secondary bg-secondary"
                        >
                            <span class="text-white">+ Add this room</span>
                        </button>
                    }

                    @if (room_added == true) {
                        <button
                            btn
                            matRipple
                            class="m-3 mx-auto w-full border-base-200 bg-base-200"
                        >
                            <span class="text-black">- Remove this room</span>
                        </button>
                    }
                </div>
            </section>
            <section
                class="mx-auto flex w-[calc(100%-2rem)] flex-col border-b border-base-200 p-3 pl-0"
            >
                <span class="text-base font-bold">Details</span>
                <div class="mt-3 flex flex-row items-center text-sm">
                    <icon class="text-info">people</icon>
                    <span class="text-gray-500 text-sm">
                        {{ space?.capacity }} People</span
                    >
                </div>
                <div class="mt-1 flex flex-row items-center text-sm">
                    <icon class="text-info">room</icon>
                    <span class="text-gray-500">
                        {{ space?.level?.name }},
                        {{ space?.level?.parent_id }}</span
                    >
                </div>
            </section>
            @if (space?.feature_list.length > 0) {
                <section class="mx-auto flex w-[calc(100%-2rem)] flex-col py-3">
                    <span class="mb-3 text-base font-bold"
                        >Room Facilities</span
                    >
                    @for (facility of space?.feature_list; track facility) {
                        <div class="mb-1 flex w-full flex-row">
                            <div>
                                @switch (facility) {
                                    @case ('Views') {
                                        <div>
                                            <icon class="text-info"
                                                >panorama</icon
                                            >
                                        </div>
                                    }
                                    @case ('Projector') {
                                        <div>
                                            <icon class="text-info"
                                                >video_camera_front</icon
                                            >
                                        </div>
                                    }
                                    @case ('VidConf') {
                                        <div>
                                            <icon class="text-info"
                                                >contact_phone</icon
                                            >
                                        </div>
                                    }
                                    @case ('Whiteboard') {
                                        <div>
                                            <icon class="text-info"
                                                >drive_file_rename_outline</icon
                                            >
                                        </div>
                                    }
                                    @case ('Jamboard') {
                                        <div>
                                            <icon class="text-info">draw</icon>
                                        </div>
                                    }
                                    @case ('Wifi') {
                                        <div>
                                            <icon class="text-info"
                                                >nest_remote_comfort_sensor</icon
                                            >
                                        </div>
                                    }
                                }
                            </div>
                            <span class="text-gray-500 text-sm">
                                {{ facility }}
                            </span>
                        </div>
                    }
                </section>
            }
            <div
                class="top-box-shadow flex flex-col border-t border-base-200 bg-base-100 p-3"
            >
                @if (!room_added) {
                    <button
                        btn
                        matRipple
                        class="mx-auto w-full border-secondary bg-base-100"
                        (click)="back()"
                    >
                        <span class="text-secondary">Back</span>
                    </button>
                }
                @if (room_added) {
                    <button
                        btn
                        matRipple
                        class="mx-auto w-full border-secondary bg-secondary"
                        (click)="back()"
                    >
                        <span class="text-white">Confirm</span>
                    </button>
                }
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RoomDetailsComponent implements OnInit {
    data = inject(MAT_BOTTOM_SHEET_DATA);
    private _bottomSheetRef = inject<MatBottomSheetRef<RoomDetailsComponent>>(MatBottomSheetRef);

    space: Space | any;
    room_added: Boolean = false;

    ngOnInit() {
        this.space = this.data;
    }

    selectRoom() {
        this.room_added = !this.room_added;
    }

    back() {
        if (this.room_added) {
            this._bottomSheetRef.dismiss(this.space);
        } else {
            this._bottomSheetRef.dismiss(null);
        }
    }
}
