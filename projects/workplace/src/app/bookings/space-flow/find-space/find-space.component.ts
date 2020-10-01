import {
    Component,
    Input,
    EventEmitter,
    Output,
    OnInit,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { BaseClass } from 'src/app/common/base.class';
import { Space } from 'src/app/spaces/space.class';
import { BookingFlowEvent } from '../../bookings.component';
import { StaffService } from 'src/app/users/staff.service';
import { CalendarService } from 'src/app/calendar/calendar.service';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SettingsService } from 'src/app/common/settings.service';
import { rulesForSpace } from 'src/app/bookings/booking.utilities';

import * as dayjs from 'dayjs';

@Component({
    selector: 'booking-find-space',
    templateUrl: './find-space.component.html',
    styleUrls: ['./find-space.component.scss'],
})
export class BookingFindSpaceComponent extends BaseClass implements OnInit, OnChanges {
    /** Emitter for flow update events */
    @Output() public event = new EventEmitter<BookingFlowEvent>();
    /** Form Group */
    @Input() public form: FormGroup;
    /** Whether space list is loading */
    @Input() public loading: boolean;
    /** Level id to filter */
    @Input() public level: string;
    /** Zones filters */
    @Input() public zones: string[] = [];
    /** List of spaces available during the required period */
    public available_spaces: Space[] = [];
    /** Subject holding the value of the search */
    public readonly change$ = new Subject<string>();

    /**  Whether multiple spaces are allowed to be selected */
    public get multiple(): boolean {
        return this._settings.get('app.booking.multiple_spaces');
    }

    public get filtered_spaces(): Space[] {
        let list: Space[];
        if (this.level) {
            list = this.available_spaces.filter((i) => i.zones.includes(this.level));
        } else {
            list = this.available_spaces;
        }
        // check booking rules
        list = list.filter((space) => {
            const booking_rules = this._org.buildingSettings(space.level.parent_id).details
                ?.booking_rules;
            const { date, all_day, duration, visitor_type } = this.form.value;
            const rules = rulesForSpace({
                time: date,
                duration: all_day ? 24 * 60 : duration,
                visitor_type,
                user: this._staff.current,
                rules: booking_rules,
                space
            });
            if (visitor_type) {
                return !rules.hide && rules.room_type === visitor_type;
            } else {
                return !rules.hide;
            }
        });
        return list;
    }

    constructor(
        private _staff: StaffService,
        private _calendar: CalendarService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'space.filter.changes',
            this.change$
                .pipe(
                    debounceTime(400),
                    distinctUntilChanged(),
                    switchMap(() => {
                        this.loading = true;
                        return this.loadSpaces().catch((err) => {
                            console.log(err);
                            return [];
                        });
                    }),
                    tap((list) => {
                        this.loading = false;
                        return list;
                    })
                )
                .subscribe((list: any[]) => {
                    this.available_spaces = list.sort((a, b) => a.name.localeCompare(b.name));
                })
        );
        this.change$.next('');
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            const onChange = (_) => this.change$.next(_);
            /* istanbul ignore else */
            if (this.form.controls.date) {
                this.subscription(
                    'date_field',
                    this.form.controls.date.valueChanges.subscribe(onChange)
                );
            }
            /* istanbul ignore else */
            if (this.form.controls.duration) {
                this.subscription(
                    'duration_field',
                    this.form.controls.duration.valueChanges.subscribe(onChange)
                );
            }
        }
        if (changes.zones) {
            console.log('Zones:', this.zones);
            this.change$.next(new Date().toISOString());
        }
    }

    /** Load Available spaces */
    private async loadSpaces() {
        const { date, duration, all_day, attendees } = this.form.value;
        const start = dayjs(date);
        const query = {
            period_start: start.unix(),
            period_end: start.add(duration, 'm').unix(),
            capacity: attendees?.length || null,
            zone_ids: this.zones.join(','),
        };
        return this._calendar.availability(query, all_day);
    }

    /**
     * Update the selected space list
     * @param space Space to add/toggle in the selected list
     */
    public selectSpace(space: Space) {
        const spaces = this.form.controls.resources;
        if (this.multiple) {
            const list = spaces.value || [];
            const found = list.find((item) => item.id === space.id);
            if (found) {
                spaces.setValue(list.filter((item) => item.id !== space.id));
            } else {
                spaces.setValue(list.concat([space]));
            }
        } else {
            spaces.setValue([space]);
            this.form.controls.system.setValue(space);
            this.event.emit({ type: 'next', step: 'search' });
        }
    }

    /**
     * Proceed to the next step in the space booking flow
     */
    public next(): void {
        this.event.emit({ type: 'next', step: 'search' });
    }

    /** Move flow to previous step */
    public previous(): void {
        this.event.emit({ type: 'previous', step: 'search' });
    }
}
