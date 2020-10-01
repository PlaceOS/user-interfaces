import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import {
    storeBookingFormData,
    retrieveBookingFormData,
    clearBookingFormData,
} from 'src/app/bookings/booking.utilities';
import { AvailableBookingFields } from '../../shared/utilities/settings.interfaces';
import { BookingFlowEvent } from '../bookings.component';
import { BookingConfirmComponent } from '../overlays/booking-confirm/booking-confirm.component';
import { Space } from 'src/app/spaces/space.class';
import { store, load } from '../../shared/utilities/general.utilities';
import { CalendarEvent } from 'src/app/events/event.class';
import { generateEventForm } from 'src/app/events/event.utilities';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SettingsService } from 'src/app/common/settings.service';

const STORED_ZONES_KEY = 'ACA_STAFF.room_search_zones';

@Component({
    selector: 'booking-space-flow',
    templateUrl: './space-flow.component.html',
    styleUrls: ['./space-flow.component.scss'],
})
export class BookingSpaceFlowComponent extends BaseClass implements OnInit {
    /** Form fields */
    public form: FormGroup;
    /** Form data store */
    public booking: CalendarEvent;
    /** Step of the booking flow that is currently active */
    public flow_step: string;
    /** Zone filters */
    public zoneFilters: string[] = [];
    /** Level filter */
    public level_filter: string;
    /** Whether to show the overlay menu */
    public show_menu: boolean;
    /** Menu event */
    @Output() public menu = new EventEmitter(false);

    public loading = false;

    @Input() public flow: string;

    /** List of available booking fields for the form */
    public get available_fields(): AvailableBookingFields[] {
        return this._settings.get('app.booking.show_fields') || [];
    }

    constructor(
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _location: Location,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit(): void {
        this._org.initialised.pipe(first(_ => _)).subscribe(() => {
            this.zoneFilters = load(STORED_ZONES_KEY) || [];
            if (!this.zoneFilters.length) {
                this.handleZonesChanged([this._org.building.id]);
            }
            this.subscription(
                'route.params',
                this._route.paramMap.subscribe((params) => {
                    if (params.has('step')) {
                        this.flow_step = params.get('step');
                    }
                })
            );
            this.loadFormData();
            this.setNavTitle();
        });
    }

    /** Filter space function */
    public filterSpaces(i: Space) {
        return i.bookable;
    }

    private setNavTitle(): void {
        switch (this.flow_step) {
            case 'search':
                this._settings.post('navTitle', 'Find Space');
                break;
            case 'catering':
                this._settings.post('navTitle', 'Catering');
                break;
            case 'parking':
                this._settings.post('navTitle', 'Parking');
                break;
            case 'confirm':
                this._settings.post('navTitle', 'Confirm');
                break;
            default:
                this._settings.post('navTitle', 'Book');
                break;
        }
    }

    /**
     * Handle events from child components
     * @param event Booking flow event
     */
    public handleFlowEvent(event: BookingFlowEvent) {
        storeBookingFormData(this.form);
        if (event.type === 'next') {
            this.toNextFlowStep();
        } else if (event.type === 'previous') {
            this.toPreviousFlowStep();
        } else if (event.type === 'reset') {
            this.resetForm();
        }
        this.setNavTitle();
    }

    public getNextFlow(): string {
        let order = ['form', 'search', 'catering', 'confirm'];
        const booking = this.form.value;
        const index = order.findIndex((i) => i === (this.flow_step || 'form'));
        order.splice(0, index + 1);
        if (!booking.needs_space || booking.id) {
            order = order.filter((i) => i !== 'search');
        }
        if (!booking.needs_space || !booking.has_catering) {
            order = order.filter((i) => i !== 'catering');
        }
        return order[0] || '';
    }

    private toNextFlowStep() {
        const nextStep = this.getNextFlow();
        if (nextStep === 'confirm') {
            // make sure that we are using the data saved to localStorage
            this.confirmBooking();
        } else {
            this._router.navigate(['book', 'spaces', nextStep], {
                queryParamsHandling: 'preserve',
            });
        }
    }

    private toPreviousFlowStep() {
        this._location.back();
    }

    /** Clear user changes to the form data */
    private resetForm() {
        delete this.form;
        clearBookingFormData();
        this.booking = new CalendarEvent({});
        this.form = generateEventForm(this.booking);
    }

    /**
     * Load existing form data or generate a new booking form
     */
    private loadFormData(): void {
        const form_data = retrieveBookingFormData();
        this.booking = new CalendarEvent(form_data);
        this.form = generateEventForm(this.booking);
        /** Add local pending data */
        if (form_data && !form_data.id) {
            for (const key in form_data) {
                if (this.form.controls[key]) {
                    this.form.controls[key].setValue(form_data[key]);
                }
            }
        }
        this.form.get('attendees').valueChanges.subscribe((list) => {
            if (!list?.find(i => i.visit_expected)) {
                this.form.patchValue({
                    visitor_type: ''
                });
            }
        });
        this.form.valueChanges.subscribe((s) => storeBookingFormData(this.form));
    }

    /**
     * Open modal to confirm the booking details
     */
    private confirmBooking() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const dialog_ref = this._dialog.open(BookingConfirmComponent, {
                width: '32em',
                maxWidth: '95vw',
                maxHeight: '95vh',
                data: {
                    old_booking: this.booking,
                    booking: new CalendarEvent({ ...this.booking, ...this.form.value }),
                },
            });
            dialog_ref.componentInstance.event.subscribe((event) => {
                if (event.type === 'success') {
                    this._router.navigate(['book', 'spaces', 'confirm'], {
                        queryParamsHandling: 'preserve',
                    });
                }
                dialog_ref.close();
            });
        } else {
            // this._service.notifyError('Some fields are invalid.');
            this._router.navigate(['book', 'spaces']);
            console.warn('Some form fields are invalid:', this.form);
        }
    }

    public get isBackShown(): boolean {
        return this.flow_step && ['form', 'confirm'].indexOf(this.flow_step) < 0;
    }

    public back() {
        this._location.back();
    }

    public handleZonesChanged(zones: string[]) {
        store(STORED_ZONES_KEY, zones);
        this.zoneFilters = zones;
    }
}
