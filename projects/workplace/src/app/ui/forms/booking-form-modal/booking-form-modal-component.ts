import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseClass } from 'src/app/common/base.class';

@Component({
    selector: 'a-booking-form-modal',
    templateUrl: './booking-form-modal-component.html',
    styleUrls: ['./booking-form-modal-component.scss'],
})
export class BookingFormModalComponent extends BaseClass implements OnInit {
    @Input() public first_form: boolean;
    @Input() public form: FormGroup;

    public ngOnInit() {}
}
