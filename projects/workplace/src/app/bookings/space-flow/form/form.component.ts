import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BookingFlowEvent } from '../../bookings.component';
import {
    RecurrenceModalComponent,
    RecurrenceModalData,
} from '../../../overlays/recurrence-modal/recurrence-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { unique } from 'src/app/common/general';
import { BaseClass } from 'src/app/common/base.class';
import { NewUserModalComponent } from 'src/app/users/new-user-modal/new-user-modal.component';
import {
    SpaceSelectModalComponent,
    SpaceSelectModalData,
} from '../../../overlays/space-select-modal/space-select-modal.component';
import { UserAvailabilityModalComponent } from '../../../overlays/user-availability-modal/user-availability.modal.component';
import { CalendarService } from 'src/app/calendar/calendar.service';
import { StaffService } from 'src/app/users/staff.service';
import { Calendar } from 'src/app/calendar/calendar.class';

import * as dayjs from 'dayjs';
import { Identity } from 'src/app/common/types';
import { CateringOrder } from 'src/app/catering/catering-order.class';
import { CateringStateService } from 'src/app/catering/catering-state.service';

@Component({
    selector: 'booking-spaces-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class BookingSpaceFlowFormComponent extends BaseClass implements OnInit {
    /** Booking form fields */
    @Input() public form: FormGroup;
    /** Emitter for flow update events */
    @Output() public event = new EventEmitter<BookingFlowEvent>();
    /** Calendars List */
    public calendars: Calendar[] = [];
    /** Reccurent patterns */
    public patterns: Identity[] = [
        { id: '', name: 'None' },
        { id: 'daily', name: 'Daily', interval: 1, pattern: 'daily' },
        { id: 'weekly', name: 'Weekly', interval: 1, pattern: 'weekly' },
        { id: 'monthly', name: 'Every 4 weeks', interval: 4, pattern: 'weekly' },
    ];

    @ViewChild('container', { static: true }) private container: ElementRef<HTMLDivElement>;

    public minDate = dayjs().startOf('day').toDate();


    public get catering_allowed() {
        return this.form.controls.visitor_type?.value === 'client';
    }

    /** Display string for the catering value of the booking */
    public get catering() {
        const order: CateringOrder = this.form.controls.catering?.value[0];
        const style = 'font-size: .6em; color: rgba(0,0,0,.6); margin-left: .5em; font-weight: 500; position: relative; top: -.25em';
        return order
            ? `${order.item_count} item${order.item_count === 1 ? '' : 's'}<span style="${style}">(${(order.total_cost / 100).toFixed(2)} RED)</span>`
            : 'No Catering';
    }

    /** Display string for the recurrence value of the booking */
    public get recurrence(): string {
        const recurrence = this.form.controls.recurring
            ? this.form.controls.recurrence.value
            : null;
        if (!recurrence?.pattern) {
            return 'No recurrence';
        }
        const pattern = this.patterns.find(
            (i) => i.interval === recurrence.interval && i.pattern === recurrence.pattern
        );
        const end = recurrence.end
            ? `until ${dayjs(recurrence.end).format('DD MMM YYYY')}`
            : 'forever';
        return `${pattern.name} ${end}`;
    }

    /** Display string for spaces */
    public get space_list(): string {
        const resources = this.form.value.resources;
        if (!resources) {
            return 'No Location';
        }
        return this.form.value.resources.map((i) => i.name).join(',');
    }

    constructor(
        private _catering: CateringStateService,
        private _dialog: MatDialog,
        private _calendars: CalendarService,
        private _staff: StaffService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'calendars',
            this._calendars.calendar_list.subscribe((list) => {
                this.calendars = list;
            })
        );
    }

    /** Move flow to next step */
    public next(): void {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.event.emit({ type: 'next', step: 'form' });
        } else if (this.container) {
            this.container.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
        console.log('Form:', this.form);
    }

    /** Move flow to previous step */
    public previous(): void {
        this.event.emit({ type: 'previous', step: 'form' });
    }

    /** Reset form to initial state */
    public resetForm(): void {
        this.event.emit({ type: 'reset', step: 'form' });
    }

    public openRecurrenceModal() {
        const ref = this._dialog.open<RecurrenceModalComponent, RecurrenceModalData>(
            RecurrenceModalComponent,
            {
                width: 'auto',
                height: 'auto',
                maxWidth: '95vw',
                data: {
                    details: this.form.controls.recurrence.value,
                    date: this.form.controls.date.value,
                },
            }
        );
        this.subscription(
            'recurrence',
            ref.componentInstance.event.subscribe((event) => {
                /* istanbul ignore else */
                if (event.reason === 'done') {
                    if (event.metadata?.pattern) {
                        this.form.controls.recurrence.setValue({
                            pattern: event.metadata.pattern,
                            end: dayjs(event.metadata.end).endOf('d').valueOf(),
                            interval: event.metadata.interval,
                        });
                        this.form.controls.recurring.setValue(true);
                    } else {
                        this.form.controls.recurring.setValue(false);
                        this.form.controls.recurrence.setValue({});
                    }
                    ref.close();
                    this.unsub('recurrence');
                }
            })
        );
    }

    public openSpaceSelectModal() {
        const { date, duration, resources, all_day, visitor_type } = this.form.value;
        const ref = this._dialog.open<SpaceSelectModalComponent, SpaceSelectModalData>(
            SpaceSelectModalComponent,
            {
                width: '32em',
                height: 'auto',
                maxWidth: '95vw',
                data: {
                    date,
                    duration,
                    spaces: resources?.map((i) => i.email),
                    all_day,
                    visitor_type,
                },
            }
        );
        this.subscription(
            'space_select',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.form.controls.resources.setValue(event.metadata);
                    this.form.controls.system.setValue(event.metadata[0]);
                    ref.close();
                    this.unsub('space_select');
                }
            })
        );
    }

    /**
     * Open modal to change the recurrence details for the booking
     */
    public openCateringModal() {
        const order = this.form.controls.catering?.value[0] || new CateringOrder();
        this._catering.manageCateringOrder(order).then((new_order) => {
            if (new_order.item_count > 0 && this.form.controls.catering) {
                this.form.controls.catering.setValue([new_order]);
            }
        })
    }

    public openAvailabilityModal() {
        const { date, duration, attendees } = this.form.value;
        const ref = this._dialog.open<UserAvailabilityModalComponent>(
            UserAvailabilityModalComponent,
            {
                minWidth: '95vw',
                maxWidth: '95vw',
                data: {
                    date,
                    duration,
                    users: [this._staff.current, ...attendees],
                },
            }
        );
        this.subscription(
            'availability',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.form.patchValue({
                        date: event.metadata.date,
                        duration: event.metadata.duration,
                    });
                    ref.close();
                    this.unsub('availability');
                }
            })
        );
    }

    public openNewUserModal(user) {
        const ref = this._dialog.open<NewUserModalComponent>(NewUserModalComponent, {
            width: 'auto',
            height: 'auto',
            data: {
                user,
            },
        });
        this.subscription(
            'new_user',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    const attendees = this.form.controls.attendees.value || [];
                    const index = attendees.findIndex((i) => i.email === event.metadata.email);
                    if (index !== -1) {
                        attendees.splice(index, 1, event.metadata);
                    } else {
                        attendees.push(event.metadata);
                    }
                    this.form.controls.attendees.setValue(unique(attendees, 'email'));
                    ref.close();
                    this.unsub('new_user');
                }
            })
        );
    }

    public get has_external(): boolean {
        return this.form.value.attendees?.some((i) => i.visit_expected);
    }

    public get visitor_type(): string {
        return this.form?.controls.visitor_type.value;
    }
}
