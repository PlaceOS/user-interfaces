import { Component, OnInit } from '@angular/core';
import { RoomConfirmComponent } from '../room-confirm/room-confirm.component';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
    selector: 'confirm',
    templateUrl: './confirm.component.html',
    styles: [
        `
            .button-text {
                color: var(--secondary);
            }
        `,
    ],
})
export class ConfirmComponent implements OnInit {
    constructor(private _bottomSheet: MatBottomSheet) {}

    ngOnInit(): void {}

    openRoomConfirm() {
        this._bottomSheet.open(RoomConfirmComponent);
    }
}
