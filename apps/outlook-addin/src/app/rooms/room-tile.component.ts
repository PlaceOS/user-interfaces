import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { Space } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { RoomConfirmService } from './room-confirm.service';

@Component({
    selector: 'placeos-room-tile',
    template: `
        <div
            class="z-0 flex min-h-min w-full min-w-[400px] flex-1 flex-col overflow-hidden"
        >
            <div
                class="justify-content mx-auto flex w-[calc(100%-2rem)] max-w-[375px] items-center"
                (click)="openRoomDetail()"
            >
                <div
                    class="bg-base-100 mx-4 flex h-full w-full flex-col rounded-lg border"
                >
                    <div
                        class="bg-base-200 m-3 flex h-44 items-center justify-center rounded-lg text-gray-500"
                    >
                        @if (space()?.images?.length > 0) {
                            <img
                                auth
                                [source]="space()?.images?.[0]"
                                alt="image of building "
                                width="100%"
                                height="100%"
                                class="z-20 flex rounded-lg"
                            />
                        }

                        @if (space()?.images?.length == 0) {
                            <div>
                                <icon class="text-[8rem]">image</icon>
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex flex-col">
                        <span class="mx-3 mt-1 text-xl font-bold">
                            {{ space()?.name }}</span
                        >

                        <div
                            class="mx-3 mt-1 flex flex-row items-center text-base"
                        >
                            <icon class="text-info">room</icon>
                            <span class="text-gray-500">
                                {{ space()?.level?.name }},
                                {{ space()?.level?.parent_id }}</span
                            >
                        </div>

                        <div
                            class="mx-3 mt-1 flex flex-row items-center text-base"
                        >
                            <icon class="text-info flex items-center"
                                >people</icon
                            >
                            <span class="text-gray-500">
                                {{ space()?.capacity }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="top-box-shadow border-base-200 bg-base-100 -mx-4 mt-5 mb-10 flex h-full flex-col items-center border-t p-3"
        >
            <button
                btn
                matRipple
                (click)="cancel()"
                class="border-secondary bg-base-100 mx-4 ml-2 w-[460px]"
            >
                <span class="text-secondary">Back</span>
            </button>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, IconComponent, AuthenticatedImageDirective],
})
export class RoomTileComponent {
    readonly data = inject<Space>(MAT_BOTTOM_SHEET_DATA);
    private _bottomSheetRef =
        inject<MatBottomSheetRef<RoomTileComponent>>(MatBottomSheetRef);
    private _roomConfirmService = inject(RoomConfirmService);

    readonly space = signal(this.data);

    openRoomDetail() {
        this._roomConfirmService.openRoomDetail(this.space());
    }

    cancel() {
        this._bottomSheetRef.dismiss(null);
    }
}
