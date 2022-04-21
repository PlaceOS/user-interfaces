import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'placeos-room-tile',
    templateUrl: './room-tile.component.html',
    styles: [``],
})
export class RoomTileComponent implements OnInit {
    space: Space;
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomTileComponent>
    ) {}

    ngOnInit() {
        console.log(this.data, 'data in room tile');
        this.space = this.data;
    }

    cancel() {
        this._bottomSheetRef.dismiss();
    }
}
