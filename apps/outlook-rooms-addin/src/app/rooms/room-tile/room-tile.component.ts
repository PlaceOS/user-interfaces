import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
    selector: 'placeos-room-tile',
    templateUrl: './room-tile.component.html',
    styles: [``],
})
export class RoomTileComponent implements OnInit {
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomTileComponent>
    ) {}

    ngOnInit(): void {}

    cancel() {
        this._bottomSheetRef.dismiss();
    }
}
