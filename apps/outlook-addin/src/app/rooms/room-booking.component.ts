import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { EventFormService } from '@placeos/events';
import { FeaturesFilterService } from './features-filter.service';
import { currentUser } from '@placeos/common';

@Component({
    selector: 'room-booking',
    templateUrl: './room-booking.component.html',
    styles: [
        `
            .button-text {
                color: var(--p);
            }
        `,
    ],
})
export class RoomBookingComponent implements OnInit {
    public show_spaces = false;
    public show_people = false;

    min_date: Date = new Date();

    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this._state.clearForm();
    };

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private router: Router,
        private _state: EventFormService,
        private _featuresFilterService: FeaturesFilterService
    ) {}

    ngOnInit(): void {
        this._state.newForm();
        this._featuresFilterService.clearFilter();
    }

    async findSpace() {
        this.form.markAllAsTouched();
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        if (!this.form.valid) return;
        await this._state.storeForm();
        this.router.navigate(['/schedule/view']);
    }

    downloadTemplate() {
        window.open('assets/template.csv');
    }
}
