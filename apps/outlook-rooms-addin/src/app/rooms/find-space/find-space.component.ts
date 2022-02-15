import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'find-space',
    templateUrl: './find-space.component.html',
    styles: [``],
})
export class FindSpaceComponent implements OnInit {
    unixTime;
    startTime;
    durationMinutes;
    endTime;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<FindSpaceComponent>,
        private _state: EventFormService
    ) {}

    ngOnInit(): void {
        this.unixTime = this.data?.controls?.date?.value;
        this.startTime = new Date(this.unixTime).toLocaleTimeString();
        const durationMinutes: number = this.data?.controls?.duration?.value;
        const end = this.unixTime + durationMinutes * 60 * 1000;
        this.endTime = new Date(end).toLocaleTimeString();
    }

    closeModal() {
        this._bottomSheetRef.dismiss();
    }

    public get form() {
        console.log(this._state.form);
        return this._state.form;
    }
}
