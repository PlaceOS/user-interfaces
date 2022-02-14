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
    startTime;
    endTime;
    attendees: string[];

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomConfirmComponent>
    ) {}

    ngOnInit(): void {
        this.unixTime = this.data?.controls?.date?.value;
        this.startTime = new Date(this.unixTime).toLocaleTimeString();
        const durationMinutes: number = this.data?.controls?.duration?.value;
        const end = this.unixTime + durationMinutes * 60 * 1000;
        this.endTime = new Date(end).toLocaleTimeString();
        this.attendees = this.data?.controls?.attendees?.value;
    }

    openLink(event: MouseEvent) {
        this._bottomSheetRef.dismiss();

        event.preventDefault();
    }

    closeModal() {
        this._bottomSheetRef.dismiss();
    }
}
