import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';
import { RoomConfirmService } from '../room-confirm.service';

@Component({
    selector: 'placeos-room-tile',
    templateUrl: './room-tile.component.html',
    styles: [``],
})
export class RoomTileComponent implements OnInit {
    space: Space;
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomTileComponent>,
        private _roomConfirmService: RoomConfirmService
    ) {}

    ngOnInit() {
        this.space = this.data;
    }

    openRoomDetail() {
        this._roomConfirmService.openRoomDetail(this.space);
    }

    cancel() {
        this._bottomSheetRef.dismiss(null);
    }
}
