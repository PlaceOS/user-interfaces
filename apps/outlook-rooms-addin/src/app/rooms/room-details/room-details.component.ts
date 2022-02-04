import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import {
    MomentDateAdapter,
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import * as _rollupMoment from 'moment';

const moment = _rollupMoment || _moment;

@Component({
    selector: 'room-details',
    templateUrl: './room-details.component.html',
    styles: [''],

    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
    ],
})
export class RoomDetailsComponent implements OnInit {
    date = new FormControl(moment());

    constructor() {}

    ngOnInit(): void {}
}
