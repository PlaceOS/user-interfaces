import { Component, OnInit } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
    selector: 'room-confirm',
    templateUrl: './room-confirm.component.html',
    styles: [``],
})
export class RoomConfirmComponent implements OnInit {
    constructor(
        private _bottomSheetRef: MatBottomSheetRef<RoomConfirmComponent>
    ) {}

    ngOnInit(): void {}

    openLink(event: MouseEvent) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
