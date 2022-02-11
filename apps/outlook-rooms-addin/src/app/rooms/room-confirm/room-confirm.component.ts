import { Component, Inject, OnInit } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
    selector: 'room-confirm',
    templateUrl: './room-confirm.component.html',
    styles: [``],
})
export class RoomConfirmComponent implements OnInit {
    unixTime: number;
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomConfirmComponent>
    ) {}

    ngOnInit(): void {
        console.log(this.data);

        this.unixTime = this.data?.controls?.date?.value;
    }

    openLink(event: MouseEvent) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
