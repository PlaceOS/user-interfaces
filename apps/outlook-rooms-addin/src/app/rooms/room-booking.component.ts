import { Component, OnInit } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {
    MomentDateAdapter,
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import * as _rollupMoment from 'moment';

import { RoomConfirmComponent } from './room-confirm/room-confirm.component';

const moment = _rollupMoment || _moment;

@Component({
    selector: 'room-booking',
    templateUrl: './room-booking.component.html',
    styles: [
        `
            .button-text {
                color: var(--secondary);
            }
        `,
    ],
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
    ],
})
export class RoomBookingComponent implements OnInit {
    date = new FormControl(moment());
    minDate: Date = new Date();

    form = new FormGroup({
        title: new FormControl('title'),
        datePicker: new FormControl('datePicker'),
        attendee: new FormControl('attendees'),
    });

    constructor(private _bottomSheet: MatBottomSheet) {}

    ngOnInit(): void {}

    openRoomConfirm() {
        this._bottomSheet.open(RoomConfirmComponent);
    }
}
