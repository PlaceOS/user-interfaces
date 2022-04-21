import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'placeos-room-details',
    templateUrl: './room-details.component.html',
    styles: [``],
})
export class RoomDetailsComponent implements OnInit {
    space: Space;
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomDetailsComponent>
    ) {}

    ngOnInit() {
        this.space = this.data;
    }

    cancel() {
        this._bottomSheetRef.dismiss();
    }
}
