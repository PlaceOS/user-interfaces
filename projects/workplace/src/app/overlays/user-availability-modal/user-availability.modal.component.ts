import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseClass } from 'src/app/common/base.class';
import { DialogEvent, HashMap } from 'src/app/common/types';
import { StaffUser } from 'src/app/users/user.class';
import { EventsService } from 'src/app/events/events.service';
import { ITimelineEventGroup } from '../../shared/components/event-timeline/event-timeline.component';
import * as dayjs from 'dayjs';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-user-availability-modal',
    templateUrl: './user-availability.modal.component.html',
    styleUrls: ['./user-availability.modal.component.scss'],
})
export class UserAvailabilityModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** List of Users to check availability */
    public users: StaffUser[];
    /** Whether the users events are being loaded */
    public loading: boolean;
    /** Selected date in unix ms */
    public date: number;
    /** Groups */
    public groups: ITimelineEventGroup[];
    /** Duration */
    public duration: number;
    /** Date subject */
    public date$ = new BehaviorSubject(this.date);

    constructor(@Inject(MAT_DIALOG_DATA) private _data: any, private _events: EventsService) {
        super();
    }

    public ngOnInit(): void {
        this.users = this._data.users;
        this.date = this._data.date;
        this.duration = this._data.duration;
        this.loadAvailability();
        this.date$
            .pipe(
                debounceTime(500),
                switchMap(() => {
                    return this.loadAvailability();
                })
            )
            .subscribe((res) => {
                this.groups = res;
            });
    }

    /** Load events for all attendees */
    public async loadAvailability() {
        this.loading = true;
        const result = await Promise.all(
            this.users.map(async (user) => {
                return {
                    name: user.name,
                    events: await this._events
                        .getDayEvents(this.date, [user.email])
                        .then((res) =>
                            res.map((i) => ({
                                start: dayjs(i.date).hour(),
                                duration: i.duration,
                            }))
                        )
                        .catch((err) => []),
                };
            })
        );
        this.loading = false;
        return result;
    }

    /** Change date keeping hours and minutes */
    public changeDate(new_date: number) {
        const date = dayjs(this.date);
        this.date = dayjs(new_date).hour(date.hour()).minute(date.minute()).valueOf();
        this.date$.next(this.date);
    }

    /** Whether date is in the past */
    public get is_past(): boolean {
        return dayjs(this.date).isBefore(dayjs());
    }

    public save() {
        if (this.is_past) {
            return;
        }
        this.event.emit({ reason: 'done', metadata: { date: this.date, duration: this.duration } });
    }
}
