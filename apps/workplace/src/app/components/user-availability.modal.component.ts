import { Component, OnInit, inject, output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { endOfDay, getUnixTime, isBefore, set, startOfDay } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

import { AsyncHandler, DialogEvent, StaffUser } from '@placeos/common';
import {
    EventTimelineComponent,
    ITimelineEventGroup,
} from './event-timeline.component';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from '@placeos/components';
import { queryEvents } from '@placeos/events';
import { DateFieldComponent } from '@placeos/form-fields';
import { VerticalTimelineComponent } from './vertical-timeline.component';

@Component({
    selector: 'app-user-availability-modal',
    template: `
        <header>
            <div class="heading" mat-dialog-title>Attendees Availability</div>
            <button icon mat-dialog-close>
                <icon
                    [icon]="{
                        type: 'icon',
                        class: 'material-symbols-rounded',
                        content: 'close',
                    }"
                ></icon>
            </button>
        </header>
        <mat-dialog-content>
            <main>
                <div class="date">
                    <a-date-field
                        name="date"
                        [ngModel]="date"
                        (ngModelChange)="changeDate($event)"
                    ></a-date-field>
                </div>
                @if (!loading) {
                    <div class="mobile-only">
                        <vertical-timeline
                            [(date)]="date"
                            [(duration)]="duration"
                            [(groups)]="groups"
                        ></vertical-timeline>
                    </div>
                    <div class="not-mobile">
                        <event-timeline
                            [(date)]="date"
                            [(duration)]="duration"
                            [(groups)]="groups"
                        ></event-timeline>
                    </div>
                } @else {
                    <div class="spinner">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                }
            </main>
        </mat-dialog-content>
        <mat-dialog-actions>
            <footer>
                <button btn matRipple mat-dialog-close class="inverse">
                    Cancel
                </button>
                <button
                    mat-flat-button
                    [disabled]="is_past"
                    color="primary"
                    (click)="save()"
                >
                    Save
                </button>
            </footer>
        </mat-dialog-actions>
    `,
    styles: [
        `
            .heading {
                flex: 1;
                text-align: center;
            }

            .not-mobile {
                @media screen and (max-width: 639px) {
                    display: none;
                }
            }

            .mobile-only {
                @media screen and (min-width: 640px) {
                    display: none;
                }
            }

            .date {
                display: flex;
                justify-content: center;
                margin-bottom: 1em;
            }

            .spinner {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 3em;
            }
        `,
    ],
    imports: [
        MatDialogModule,
        IconComponent,
        DateFieldComponent,
        VerticalTimelineComponent,
        EventTimelineComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        FormsModule,
    ],
})
export class UserAvailabilityModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject(MAT_DIALOG_DATA);

    /** Emitter for user action on the modal */
    public readonly event = output<DialogEvent>();
    /** List of Users to check availability */
    public users: StaffUser[];
    /** Whether the users events are being loaded */
    public loading: boolean;
    /** Selected date in unix ms */
    public date: number = new Date().valueOf();
    /** Groups */
    public groups: ITimelineEventGroup[];
    /** Duration */
    public duration: number;
    /** Date subject */
    public date$ = new BehaviorSubject(this.date);

    public ngOnInit(): void {
        this.users = this._data.users;
        this.date = this._data.date;
        this.duration = this._data.duration;
        this.loadAvailability();
        this.date$
            .pipe(
                debounceTime(500),
                switchMap(() => this.loadAvailability()),
            )
            .subscribe((res) => (this.groups = res));
    }

    /** Load events for all attendees */
    public async loadAvailability() {
        this.loading = true;
        const period_start = getUnixTime(startOfDay(this.date));
        const period_end = getUnixTime(endOfDay(this.date));
        const result: any[] = await Promise.all(
            this.users.map(async (user) => {
                if (!user.email) return [];
                return {
                    name: user.name,
                    events: await queryEvents({
                        period_start,
                        period_end,
                        calendars: user.email,
                    })
                        .toPromise()
                        .then((res) =>
                            res.map((i) => ({
                                start: new Date(i.date).getHours(),
                                duration: i.duration,
                            })),
                        )
                        .catch((err) => []),
                };
            }),
        );
        this.loading = false;
        return result;
    }

    /** Change date keeping hours and minutes */
    public changeDate(new_date: number) {
        const date = new Date(this.date);
        this.date = set(new_date, {
            hours: date.getHours(),
            minutes: date.getMinutes(),
        }).valueOf();
        this.date$.next(this.date);
    }

    /** Whether date is in the past */
    public get is_past(): boolean {
        return isBefore(this.date, Date.now());
    }

    public save() {
        if (this.is_past) {
            return;
        }
        this.event.emit({
            reason: 'done',
            metadata: { date: this.date, duration: this.duration },
        });
    }
}
