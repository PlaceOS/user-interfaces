import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseClass } from 'src/app/common/base.class';
import { FormGroup } from '@angular/forms';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { Building } from 'src/app/organisation/building.class';
import { first } from 'rxjs/operators';
import * as dayjs from 'dayjs';

@Component({
    selector: 'booking-desk-form',
    templateUrl: './desk-form.component.html',
    styleUrls: ['./desk-form.component.scss'],
})
export class BookingDeskFormComponent extends BaseClass implements OnInit {
    @Input() public form: FormGroup;
    @Input() public loading: boolean;
    @Output() public event = new EventEmitter<string>();
    /** List of buildings */
    public buildings_list: Building[];
    /** Earliest date for booking */
    public from: number = dayjs().add(1, 'd').valueOf();

    constructor(private _organisations: OrganisationService) {
        super();
    }

    public ngOnInit(): void {
        this._organisations.initialised.pipe(first((_) => _)).subscribe(() => {
            this.buildings_list = this._organisations.buildings;
        });
    }

    public clear(): void {
        this.event.emit('clear');
    }

    public next(): void {
        if (this.form.valid) {
            this.event.emit('form');
        }
    }
}
