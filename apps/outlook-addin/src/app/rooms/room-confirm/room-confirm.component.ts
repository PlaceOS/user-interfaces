import { Component, Inject, OnInit } from '@angular/core';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CalendarEvent, EventFormService } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { User } from '@placeos/users';
import { RoomConfirmService } from '../room-confirm.service';

@Component({
    selector: 'room-confirm',
    templateUrl: './room-confirm.component.html',
    styles: [``],
    standalone: false,
})
export class RoomConfirmComponent implements OnInit {
    unix_time: number;
    start_time: string;
    end_time: string;
    attendees: User[];
    space: Space;
    title: CalendarEvent['title'];
    show_submit_button: boolean = true;

    public get form() {
        return this._state.form;
    }
    public loading = this._state.loading$;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<RoomConfirmComponent>,
        private _state: EventFormService,
        private _roomConfirmService: RoomConfirmService,
    ) {}

    async ngOnInit() {
        this.unix_time = this.form?.controls?.date.value;
        this.start_time = new Date(this.unix_time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        const durationMinutes: number = this.form?.controls?.duration.value;
        const end = this.unix_time + durationMinutes * 60 * 1000;
        this.end_time = new Date(end).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        this.attendees = this.form?.controls?.attendees.value as User[];
        this.space = this.data;
        this.title = this.form?.controls?.title.value;
    }

    closeModal() {
        this._bottomSheetRef.dismiss('cancel');
    }

    confirmBooking() {
        this.show_submit_button = false;
        this._roomConfirmService.bookRoom(this.space);
    }
}
