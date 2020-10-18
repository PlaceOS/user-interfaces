import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { BaseClass } from '@user-interfaces/common';
import { Booking, BookingsService, clearDeskBookingFormData, retrieveDeskBookingFormData, storeDeskBookingFormData } from '@user-interfaces/bookings';
import { OrganisationService, Desk } from '@user-interfaces/organisation';
import { StaffService } from '@user-interfaces/users';
import { EventsService, isFuture } from '@user-interfaces/events';

import * as dayjs from 'dayjs';

@Component({
    selector: 'booking-desk-flow',
    templateUrl: './desk-flow.component.html',
    styleUrls: ['./desk-flow.component.scss'],
})
export class BookingDeskFlowComponent extends BaseClass implements OnInit {
    /** Step of the booking flow that is currently active */
    public flow_step: string;
    /** Booking */
    public booking: Booking;
    /** Booking Form */
    public form: FormGroup;
    /** Whether booking request is pending */
    public loading: boolean;
    /** Whether request is completed */
    public finished: boolean;
    /** Menu event */
    @Output() public menu = new EventEmitter(false);

    constructor(
        public _organisation: OrganisationService,
        public _bookings: BookingsService,
        private _staff: StaffService,
        public _route: ActivatedRoute,
        private _router: Router,
        private _events: EventsService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('step')) {
                    this.flow_step = params.get('step');
                }
            })
        );
        this.loadFormData();
    }

    // Desk form
    public createForm(data): FormGroup {
        const init_time = dayjs().add(1, 'd').startOf('d').valueOf();
        const form = new FormGroup({
            building: new FormControl(data.building, [Validators.required]),
            date: new FormControl(data.date || init_time, [
                Validators.required,
                isFuture,
            ]),
            duration: new FormControl(data.duration || 60, Validators.required),
            all_day: new FormControl(data.all_day || true),
            title: new FormControl(data.title),
            desk: new FormControl(data.desk || {}),
        });
        if (!data.building) {
            this._organisation.initialised.pipe(first((_) => _)).subscribe(() => {
                form.patchValue({ building: this._organisation.building.id });
            });
        }
        return form;
    }

    /** Load existing form data */
    public loadFormData(): void {
        const form_data = retrieveDeskBookingFormData();
        this.form = this.createForm(form_data);
        this.form.valueChanges.subscribe((s) => {
            storeDeskBookingFormData(this.form);
        });
    }

    /** Handle events from child component
     * @param event Desk flow event
     */
    public async next(event: string) {
        storeDeskBookingFormData(this.form);
        switch (event) {
            case 'clear':
                clearDeskBookingFormData();
                this.loadFormData();
                break;
            case 'form':
                this.loading = true;
                try {
                    const desk = await this.getAvailableDesk(this.form.value.building);
                    this.form.patchValue({ desk });
                    this.loading = false;
                    this._router.navigate(['book', 'desks', 'questions']);
                } catch (e) {
                    this.loading = false;
                    // this._service.notifyError(e.message);
                }
                break;
            // Not used
            case 'reject':
                // this._service.notifyError('You do not meet the requirements to make a booking.');
                this._router.navigate(['book', 'desks', 'form']);
                break;
            case 'questions':
                this._router.navigate(['book', 'desks', 'confirm']);
                break;
            case 'confirm':
                // Make booking request
                this.loading = true;
                this.finished = false;
                await this.createBooking();
                this.loading = false;
                break;
        }
    }

    public async getAvailableDesk(building_id): Promise<Desk> {
        const { date } = this.form.value;
        const period_start = dayjs(date).startOf('d').unix();
        const period_end = dayjs(date).endOf('d').unix();

        // Check current user bookings (only allowed 1 desk booking per day)
        const current_bookings = await this._bookings.query({
            period_start,
            period_end,
            type: 'desk',
            user: 'current',
        });
        const valid_bookings = current_bookings.filter(
            (i) => i.status !== 'declined'
        );
        if (valid_bookings?.length > 0) {
            throw new Error('You already have a desk booking for the selected date.');
        }

        // Get desks for the building
        const desks = await this._organisation.loadDesks(building_id);
        const user_groups = this._staff.current.groups;
        const bookable_desks = desks.filter((i) =>
            i.bookable && user_groups.includes((i.group || '').toLowerCase())
        );
        if (!bookable_desks?.length) {
            throw new Error('There are no available desks. Please choose a different time.');
        }
        // Get Bookings, check availability
        const bookings = await this._bookings.query({
            period_start,
            period_end,
            type: 'desk',
            zone: building_id,
        });
        const active_bookings = bookings.filter((i) => i.status !== 'declined');

        // Select first free desk
        const list = bookable_desks.filter(
            (el) => !active_bookings.find((i) => i.asset_id === el.id)
        );
        let desk;
        if (!list?.length) {
            // Overcapacity, set ID to user_id
            // and pick first bookable desk to get level and group
            desk = new Desk({
                ...bookable_desks[0],
                id: this._staff.current,
                name: this._staff.current.name
            });
        } else {
            desk = list[Math.floor(Math.random() * list.length)];
        }
        return desk;
    }

    public async createBooking() {
        const data = this.form.value;
        // Location display is stored in the description for desk bookings
        const location = `${data.desk.zone.name}-${data.desk.id}`;
        const booking_data = {
            ...data,
            asset_id: data.desk.id,
            title: data.title,
            description: location,
            zones: [data.desk.zone.id, data.building],
            booking_type: 'desk',
            extension_data: {
                group: data.desk.group
            }
        };

        const booking = new Booking(booking_data);
        // Send booking request
        try {
            await this._bookings.save(booking);
            this.createCalendarDeskEvent(data);
            clearDeskBookingFormData();
            this.finished = true;
        } catch (e) {
            // this._service.notifyError('Error creating booking. Please try again.');
        }
    }

    public createCalendarDeskEvent(data: any) {
        const { date, title, desk } = data;
        const location = `${desk.zone.name}`;
        const form_data = {
            title: title || 'Desk Booking',
            event_start: dayjs(date).startOf('d').unix(),
            event_end: dayjs(date).endOf('d').unix(),
            location,
            all_day: true,
        };
        return this._events.add(form_data);
    }
}
