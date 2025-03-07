import { Component, Inject, OnInit } from '@angular/core';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'placeos-room-details',
    templateUrl: './room-details.component.html',
    styles: [``],
    standalone: false,
})
export class RoomDetailsComponent implements OnInit {
    space: Space | any;
    room_added: Boolean = false;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomDetailsComponent>,
    ) {}

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
