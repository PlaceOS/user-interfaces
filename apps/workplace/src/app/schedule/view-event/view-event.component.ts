import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest } from 'rxjs';

import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent, EventsService } from '@user-interfaces/events';
import { Booking, BookingsService } from '@user-interfaces/bookings';
import { ConfirmModalComponent } from '@user-interfaces/components';


@Component({
    selector: 'schedule-view-event',
    templateUrl: './view-event.component.html',
    styleUrls: ['./view-event.component.scss'],
})
export class ScheduleViewEventComponent extends BaseClass implements OnInit {
    /** ID of the current booking to display */
    public id: string;
    /** Calendar the event belongs to */
    public calendar: string;
    /** Type of event to retrieve */
    public type: string;
    /** Booking to display */
    public event: CalendarEvent | Booking;
    /** Whether booking data is being loaded */
    public loading: string;
    /** Whether booking is being edited */
    public editing: boolean;
    /** Whether booking is being deleted */
    public deleting: boolean;
    /** Menu event */
    @Output() public menu = new EventEmitter(false);

    constructor(
        private _bookings: BookingsService,
        private _events: EventsService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _location: Location
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            combineLatest([this._route.paramMap, this._route.queryParamMap]).subscribe(
                ([param, queryParam]) => {
                    if (param.has('id')) {
                        this.id = param.get('id');
                    }
                    if (queryParam.has('calendar')) {
                        this.calendar = queryParam.get('calendar');
                    }
                    if (queryParam.has('type')) {
                        this.type = queryParam.get('type');
                    }
                    if (this.id) {
                        this.loadEvent();
                    }
                }
            )
        );
    }

    public back() {
        if (this.editing) {
            this.onChange({ type: 'cancel_edit' });
        } else {
            this._location.back();
        }
    }

    /**
     * Load the details of the active event
     */
    public async loadEvent() {
        if (this.deleting) {
            return;
        }
        this.loading = 'Loading booking data...';
        let booking;
        try {
            switch (this.type) {
                case 'booking':
                    booking = await this._bookings.show(this.id);
                    break;
                default:
                    booking = await this._events.show(this.id, { calendar: this.calendar });
            }
            this.loading = '';
            this.event = booking;
        } catch (err) {
            this.loading = '';
            // this._service.notifyError(`Failed to load booking data\nID: ${this.id}`);
            this._router.navigate(['/schedule']);
        }
    }

    /**
     * Delete event
     */
    private async deleteEvent() {
        if (this.event && !this.loading) {
            this.loading = 'Cancelling meeting...';
            const { id, title } = this.event;
            this.deleting = true;
            await this._events
                .delete(id, { calendar: (this.event as CalendarEvent).calendar })
                .catch(() => {
                    // this._service.notifyError(`Failed to cancel booking \n ${title}`);
                });
            // this._service.notifySuccess(`Booking ${title} was successfully cancelled`);
            this._router.navigate(['/schedule']);
            this.event = null;
            this.loading = '';
            this.deleting = false;
        }
    }

    private confirmDelete() {
        const dialog_ref = this._dialog.open(ConfirmModalComponent, {
            data: {
                title: 'Cancel Meeting',
                content: `Are you sure you want to cancel this meeting: ${this.event.title}`,
                okText: `I'm sure`,
                cancelText: 'No',
            },
        });
        dialog_ref.afterClosed().subscribe((evt) => {
            if (evt) {
                this.deleteEvent();
            }
        });
    }

    /**
     * Handle changes to sub-components
     */
    public onChange(event: { type: string }): void {
        if (event.type === 'edit') {
            if (localStorage) {
                const booking = new CalendarEvent({ ...this.event as any });
                localStorage.setItem('STAFF.booking_form', JSON.stringify(booking));
            }
            this._router.navigate(['/book', 'spaces']);
        } else if (event.type === 'view' || event.type === 'cancel_edit') {
            this.editing = false;
        } else if (event.type === 'cancel_booking') {
            this.editing = false;
            this.confirmDelete();
        }
    }
}
