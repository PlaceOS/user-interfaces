import { Component, Inject, OnInit } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { current_user } from '@placeos/common';
import { take } from 'rxjs/operators';

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
    space: Space;
    title;
    user;

    public get form() {
        return this._state.form;
    }
    public loading = this._state.loading;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomConfirmComponent>,
        private _state: EventFormService
    ) {}

    async ngOnInit() {
        this.unixTime = this.form?.controls?.date.value;
        this.startTime = new Date(this.unixTime).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        const durationMinutes: number = this.form?.controls?.duration.value;
        const end = this.unixTime + durationMinutes * 60 * 1000;
        this.endTime = new Date(end).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        this.attendees = this.form?.controls?.attendees.value;
        this.space = this.data;
        this.title = this.form?.controls?.title.value;
    }

    openLink(event: MouseEvent) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }

    closeModal() {
        this._bottomSheetRef.dismiss();
    }

    confirmBooking() {
        this._bottomSheetRef.dismiss();
    }
}
