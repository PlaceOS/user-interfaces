import {
    Component,
    computed,
    inject,
    Injector,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { endOfDay, getUnixTime, isBefore, set, startOfDay } from 'date-fns';
import { debounceTime, skip } from 'rxjs/operators';

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
                        [ngModel]="date()"
                        (ngModelChange)="changeDate($event)"
                    ></a-date-field>
                </div>
                @if (!loading()) {
                    <div class="mobile-only">
                        <vertical-timeline
                            [date]="date()"
                            (dateChange)="date.set($event)"
                            [duration]="duration()"
                            (durationChange)="duration.set($event)"
                            [groups]="groups()"
                            (groupsChange)="groups.set($event)"
                        ></vertical-timeline>
                    </div>
                    <div class="not-mobile">
                        <event-timeline
                            [date]="date()"
                            (dateChange)="date.set($event)"
                            [duration]="duration()"
                            (durationChange)="duration.set($event)"
                            [groups]="groups()"
                            (groupsChange)="groups.set($event)"
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
                    [disabled]="is_past()"
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
    private _injector = inject(Injector);

    /** Emitter for user action on the modal */
    public readonly event = output<DialogEvent>();
    /** List of Users to check availability */
    public readonly users = signal<StaffUser[]>([]);
    /** Whether the users events are being loaded */
    public readonly loading = signal(false);
    /** Selected date in unix ms */
    public readonly date = signal(new Date().valueOf());
    /** Groups */
    public readonly groups = signal<ITimelineEventGroup[]>([]);
    /** Duration */
    public readonly duration = signal(0);
    /** Whether date is in the past */
    public readonly is_past = computed(() =>
        isBefore(this.date(), Date.now()),
    );

    public ngOnInit(): void {
        this.users.set(this._data.users);
        this.date.set(this._data.date);
        this.duration.set(this._data.duration);
        this.loadAvailability();

        toObservable(this.date, { injector: this._injector })
            .pipe(skip(1), debounceTime(500))
            .subscribe(() => this.loadAvailability());
    }

    /** Load events for all attendees */
    public async loadAvailability() {
        this.loading.set(true);
        const period_start = getUnixTime(startOfDay(this.date()));
        const period_end = getUnixTime(endOfDay(this.date()));
        const result: ITimelineEventGroup[] = await Promise.all(
            this.users().map(async (user) => {
                if (!user.email) return { name: user.name, events: [] };
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
                        .catch(() => []),
                };
            }),
        );
        this.loading.set(false);
        this.groups.set(result);
    }

    /** Change date keeping hours and minutes */
    public changeDate(new_date: number) {
        const current_date = new Date(this.date());
        this.date.set(
            set(new_date, {
                hours: current_date.getHours(),
                minutes: current_date.getMinutes(),
            }).valueOf(),
        );
    }

    public save() {
        if (this.is_past()) {
            return;
        }
        this.event.emit({
            reason: 'done',
            metadata: { date: this.date(), duration: this.duration() },
        });
    }
}
