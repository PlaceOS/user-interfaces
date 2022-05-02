import { Injectable, Inject } from '@angular/core';
import {
    MatBottomSheet,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomConfirmComponent } from './room-confirm/room-confirm.component';

@Injectable({
    providedIn: 'root',
})
export class RoomConfirmService {
    space: Space;
    constructor(private _bottomSheet: MatBottomSheet) {}

    openRoomDetail(space?) {
        if (space) {
            const roomDetailsRef = this._bottomSheet.open(
                RoomDetailsComponent,
                {
                    data: space,
                }
            );
        }
    }

    openRoomConfirm(space?) {
        if (space) {
            const confirmRef = this._bottomSheet.open(RoomConfirmComponent, {
                data: space,
            });
        }
    }

    //method to post form (relocate from find-space component)
}
