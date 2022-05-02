import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { of } from 'rxjs';
import { Space } from '@placeos/spaces';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { MapService } from '../map.service';
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
        private _bottomSheet: MatBottomSheet,
        private _bottomSheetRef: MatBottomSheetRef<RoomTileComponent>,
        // private _mapService: MapService,
        private _roomConfirmService: RoomConfirmService
    ) {}

    ngOnInit() {
        this.space = this.data;
    }

    openRoomDetail() {
        this._roomConfirmService.openRoomDetail(this.space);
    }

    cancel() {
        this._bottomSheetRef.dismiss('cancel');
    }
}
