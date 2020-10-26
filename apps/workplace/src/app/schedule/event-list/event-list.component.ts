import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { first } from 'rxjs/operators';

import { BaseClass, SettingsService, unique } from '@user-interfaces/common';
import { Calendar, CalendarService } from '@user-interfaces/calendar';
import { EventsService } from '@user-interfaces/events';
import { SpacesService } from '@user-interfaces/spaces';
import { BookingsService } from '@user-interfaces/bookings';

import { BookingLike } from './list-item/list-item.component';

import * as dayjs from 'dayjs';

export interface EventPair {
    id: string;
    date: number;
}

@Component({
    selector: 'schedule-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
})
export class ScheduleEventListComponent extends BaseClass implements OnInit {
    /** Emitter  */
    @Output('eventList') public event_list = new EventEmitter<EventPair[]>();
    /** List of items to display on the event list */
    public events: BookingLike[] = [];
    /** Update promise */
    public event_promise: Promise<void>;
    /** Whether bookings are being updated */
    public loading: boolean;
    /** Number of days to render in the list from the current date */
    public shown_offset: number = 7;
    /** Offset of the date to show events for */
    public date_offset: number = 0;
    /** Date to scroll to on next update */
    public scroll_to: string;
    /** Current UTC epoch */
    public from: number = dayjs().valueOf();
    /** Current UTC epoch */
    public date: number;
    /** List of user calendars */
    public calendar_list: Calendar[];
    /** Selected calendar id to display */
    public calendar: string;
    /** Legend */
    public legend_list = [];
    /** Menu event */
    @Output() public menu = new EventEmitter();

    @ViewChild('dateMenu', { read: MatMenuTrigger, static: false })
    public trigger: MatMenuTrigger;

    constructor(
        private _settings: SettingsService,
        private _events: EventsService,
        private _spaces: SpacesService,
        private _calendars: CalendarService,
        private _bookings: BookingsService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('email')) {
                    this.calendar = params.get('email');
                }
            })
        );
        this._spaces.initialised.pipe(first((_) => _)).subscribe(() => {
            this._calendars.initialised.pipe(first((_) => _)).subscribe((value) => {
                this.calendar_list = this._calendars.calendars;
                if (!this.calendar) {
                    this.calendar =
                        this.calendar_list.find((i) => i.primary)?.id || this.calendar_list[0]?.id;
                }
                this.updateList();
                this.interval('update_events', () => this.updateList(), 100 * 1000);
            });
        });
        this.legend_list = this._settings.get('app.schedule.legend');
    }
    /**
     * Update the list of events for the currently visible period
     */
    public async updateList() {
        this.loading = true;
        const start = dayjs().add(this.date_offset, 'd').startOf('d');
        const end = start.add(7, 'd').endOf('d');
        let events;
        if (this.calendar === 'desks') {
            events = await this._bookings.query({
                period_start: start.unix(),
                period_end: end.unix(),
                type: 'desk',
                user: 'current',
            });
        } else {
            events = await this._events.query({
                calendars: this.calendar,
                period_start: start.unix(),
                period_end: end.unix(),
            });
        }
        const list = events;
        const old_events = this.events.filter((i) => {
            const date = dayjs(i.date);
            return (
                i.type !== 'date' &&
                i.type !== 'empty' &&
                (date.isBefore(start, 's') || date.isAfter(end, 's'))
            );
        });
        this.events = this.processEvents(list, old_events);
        // Update event list for view listing
        const event_list = this.events.filter((i) => i.type !== 'date' && i.type !== 'empty');
        this.event_list.emit(event_list.map((i) => ({ id: i.id, date: i.date })));
        // Scroll to date if needed
        this.timeout('scroll_to', () => this.scrollTo());
        this.loading = false;
    }

    /**
     * Process list of new items and merge with the old
     * @param list List of new bookings to generate event blocks for
     * @param old_events List of relevant old event blocks
     */
    public processEvents(list: any[], old_events: BookingLike[] = []): BookingLike[] {
        let events: BookingLike[] = [];
        const now = dayjs();
        let date = dayjs().startOf('d');
        const end = date.add(this.date_offset + this.shown_offset, 'd').endOf('d');
        for (; date.isBefore(end); date = date.add(1, 'd')) {
            const date_str = date.format('YYYY-MM-DD');
            // Add date block
            events.push({
                id: date_str,
                type: 'date',
                title: date.format('dddd, DD MMM'),
                date: date.valueOf(),
            });
            const filter_fn: (_: BookingLike) => boolean = (i) => {
                const day = dayjs(i.date);
                return day.isSame(date, 'd');
            };
            // Add events for today to list
            const new_items = list.filter(filter_fn as any);
            const old_items = old_events.filter(filter_fn as any);
            if (new_items.length || old_items.length) {
                events = events.concat(new_items as any).concat(old_items);
            } else {
                // Add block for no events if so
                events.push({
                    id: `${date_str}-empty`,
                    type: 'empty',
                    title: `No items for ${date.format('dddd, DD MMM')}`,
                    date: date.valueOf() + 1,
                });
            }
        }
        events.sort((a, b) => a.date - b.date);
        return unique(events, 'id');
    }

    /**
     * Handle scrolling on the event list
     */
    public onScroll() {
        if (!this.event_promise && this.calendar_list) {
            this.date_offset = this.date_offset + 7;
            this.updateList();
        }
    }

    /**
     * Update the date offset
     * @param date UTC milliseconds epoch of new date offset
     */
    public updateDate(date: number) {
        const day = dayjs(date);
        this.date_offset = day.diff(dayjs(), 'd') - 1;
        this.shown_offset = Math.max(this.shown_offset, this.date_offset + 3);
        this.scroll_to = day.format('YYYY-MM-DD');
        delete this.event_promise;
        // this.date = dayjs().add(this.date_offset, 'd').valueOf();
        this.updateList();
    }

    /**
     * Scroll to a previously defined date on the event list
     */
    private scrollTo() {
        if (this.scroll_to) {
            const index = this.events.findIndex((i) => i.id === this.scroll_to);
            if (index > -1) {
                document.getElementById(`${index}`).scrollIntoView({ behavior: 'smooth' });
            }
            this.scroll_to = '';
        }
    }

    /** On calendar change */
    public onCalendarChange() {
        this.events = [];
        this.date_offset = 0;
        this.date = dayjs().valueOf();
        this.updateList();
        this._router.navigate(['/schedule'], {
            queryParams: {
                email: this.calendar,
            },
            queryParamsHandling: 'merge',
        });
    }

    /** Close calendar */
    public closeDatePicker() {
        this.trigger.closeMenu();
    }
}
