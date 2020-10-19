import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { formatDuration } from 'date-fns';

import { BaseClass } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { Desk } from '@user-interfaces/organisation';

import * as dayjs from 'dayjs';

@Component({
    selector: 'booking-desk-confirm',
    templateUrl: './desk-confirm.component.html',
    styleUrls: ['./desk-confirm.component.scss'],
})
export class BookingDeskConfirmComponent extends BaseClass implements OnInit {
    @Input() public form: FormGroup;
    /** Whether request is pending */
    @Input() public loading: boolean;
    /** Whether request is completed */
    @Input() public finished: boolean;
    /** Events */
    @Output() public event = new EventEmitter<string>();

    constructor(private _organisation: OrganisationService, private _router: Router) {
        super();
    }

    public ngOnInit(): void {}

    public get desk(): Desk {
        return this.form.value?.desk;
    }

    public get date(): string {
        return dayjs(this.form.value.date).isSame(dayjs(), 'd')
            ? 'Today'
            : dayjs(this.form.value.date).format('DD MMM YYYY');
    }

    public get time(): string {
        return this.form.value.all_day
            ? 'All day'
            : `At ${dayjs(this.form.value.date).format('h:mm A')} for ${formatDuration({
                  minutes: this.form.value.duration
            })}`;
    }

    public get description(): string {
        return this.form.value.description;
    }

    public get zone(): string {
        return this.desk?.zone?.name;
    }

    public edit(): void {
        this._router.navigate(['book', 'desks']);
    }

    public confirm(): void {
        this.event.emit('confirm');
    }
}
