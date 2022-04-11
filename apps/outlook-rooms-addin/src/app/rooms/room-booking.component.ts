import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FindSpaceComponent } from './find-space/find-space.component';
import { EventFormService } from '@placeos/events';
import { currentUser } from '../../../../../libs/common/src/lib/user-state';
import { FormDataService } from './form-data.service';

// import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
// import {
//     MomentDateAdapter,
//     MAT_MOMENT_DATE_ADAPTER_OPTIONS,
// } from '@angular/material-moment-adapter';
// import * as _moment from 'moment';
// import * as _rollupMoment from 'moment';

// const moment = _rollupMoment || _moment;

@Component({
    selector: 'room-booking',
    templateUrl: './room-booking.component.html',
    styles: [
        `
            .button-text {
                color: var(--secondary);
            }

            ::ng-deep.mat-form-field-appearance-outline
                .mat-form-field-outline-start,
            ::ng-deep.mat-form-field-appearance-outline
                .mat-form-field-outline-gap,
            ::ng-deep.mat-form-field-appearance-outline
                .mat-form-field-outline-end {
                background-color: white;
            }
        `,
    ],
    // providers: [
    //     {
    //         provide: DateAdapter,
    //         useClass: MomentDateAdapter,
    //         deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    //     },
    // ],
})
export class RoomBookingComponent implements OnInit {
    public show_spaces = false;
    public show_people = false;
    public loading = false;

    // date = new FormControl(moment());
    minDate: Date = new Date();

    public get form(): FormGroup {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this._state.clearForm();
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _state: EventFormService,
        private _formDataService: FormDataService
    ) {}

    ngOnInit(): void {
        this._state.newForm();
        this._state.form.patchValue({ booking_type: 'room' });
    }

    async findSpace() {
        this.form.markAllAsTouched();
        if (
            !this.form?.controls?.title.valid ||
            !this.form?.controls?.date.valid ||
            !this.form?.controls?.duration.valid
        )
            return;

        console.log(this._state.form, 'form in room-booking component');
        await this._state.storeForm();

        this._formDataService.form = this.form;

        this.router.navigate(['/find']);
    }
}
