import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';
import { RoomDetailsComponent } from '../room-details/room-details.component';

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
        private _bottomSheetRef: MatBottomSheetRef<RoomTileComponent>
    ) {}

    ngOnInit() {
        console.log(this.data, 'data in room tile');
        this.space = this.data;
    }

    openRoomDetail() {
        const bottomSheetRef = this._bottomSheet.open(RoomDetailsComponent, {
            data: this.space,
        });
        bottomSheetRef.afterDismissed().subscribe(() => {
            this.updateSelectedSpace();
        });
    }

    updateSelectedSpace() {}

    cancel() {
        this._bottomSheetRef.dismiss();
    }
}
