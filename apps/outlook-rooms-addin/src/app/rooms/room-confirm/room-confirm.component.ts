import { Component, Inject, OnInit } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { RoomConfirmService } from '../room-confirm.service';
import { CalendarEvent } from '@placeos/events';

@Component({
    selector: 'room-confirm',
    templateUrl: './room-confirm.component.html',
    styles: [``],
})
export class RoomConfirmComponent implements OnInit {
    unixTime: number;
    startTime: string;
    endTime: string;
    attendees: string[];
    space: Space;
    title: CalendarEvent['title'];

    public get form() {
        return this._state.form;
    }
    public loading = this._state.loading;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomConfirmComponent>,
        private _state: EventFormService,
        private _roomConfirmService: RoomConfirmService
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

    closeModal() {
        this._bottomSheetRef.dismiss('cancel');
    }

    confirmBooking() {
        this._roomConfirmService.bookRoom(this.space);
    }
}
