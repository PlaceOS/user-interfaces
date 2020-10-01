import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnDestroy,
    SimpleChanges,
    OnChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMapFeature } from '@acaprojects/ngx-interactive-map';
import { first } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { Space } from 'src/app/spaces/space.class';
import { HashMap } from 'src/app/common/types';
import { ExploreSpaceInfoComponent } from '../overlays/space-info/space-info.component';
import { MapStatus, MapListener, SpaceStatus } from './status.interfaces';
import {
    BookingModalComponent,
    BookingModalData,
} from '../overlays/booking-modal/booking-modal.component';
import { roomConfigBuilder } from 'src/app/common/room-configuration.interface';
import { CalendarEvent } from 'src/app/events/event.class';
import { SpacesService } from 'src/app/spaces/spaces.service';
import { OrganisationService } from 'src/app/organisation/organisation.service';

import * as dayjs from 'dayjs';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: '[space-status]',
    template: `
        <div class="bindings" *ngIf="space_list">
            <ng-container *ngFor="let space of space_list">
                <i
                    binding
                    [sys]="space.id"
                    mod="Bookings"
                    bind="bookings"
                    (modelChange)="processSpaceBookings(space, $event)"
                ></i>
                <i
                    binding
                    [sys]="space.id"
                    mod="Bookings"
                    bind="status"
                    [(model)]="space_status[space.id]"
                    (modelChange)="calculateStatus()"
                ></i>
            </ng-container>
        </div>
        <ng-content></ng-content>
    `,
})
export class ExploreSpaceStatusComponent extends BaseClass
    implements OnInit, OnChanges, OnDestroy {
    /** ID of the zone to grab the spaces */
    @Input() public zone: string;
    /** Updates the status based of the given time. Unix epoch in milliseconds */
    @Input() public date: number;
    /** Emitter for changes to the space status */
    @Output() public status = new EventEmitter<MapStatus[]>();
    /** Emitter for changes to the space status */
    @Output() public listeners = new EventEmitter<MapListener[]>();
    /** Emitter for changes to the space status */
    @Output() public features = new EventEmitter<IMapFeature[]>();
    /** List of spaces to grab the statuses for */
    public space_list: Space[] = [];
    /** Mapping of spaces to active bookings */
    public active_bookings: HashMap<CalendarEvent[]> = {};
    /** Mapping of colours to statuses */
    public colour_map: HashMap<string> = {};
    /** Current Bookings */
    public current_bookings: HashMap<CalendarEvent> = {};
    /** Next Bookings */
    public next_bookings: HashMap<CalendarEvent> = {};
    /** Space status */
    public space_status: HashMap<string> = {};

    constructor(
        private _settings: SettingsService,
        private _spaces: SpacesService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit(): void {
        this._spaces.initialised.pipe(first((_) => _)).subscribe(() => {
            this.colour_map = this._settings.get('app.explore.colors') || {};
            this.loadSpaces();
            this.interval('update_status', () => this.calculateStatus(), 60 * 1000);
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.zone || changes.date) {
            this.loadSpaces();
        }
    }

    public ngOnDestroy() {
        this.clearSpaces();
    }

    /**
     * Determine the availability statuses for all the spaces in the set zone
     */
    public calculateStatus() {
        this.timeout('process_statuses', () => {
            const statuses: MapStatus[] = [];
            for (const space of this.space_list) {
                const status = space.bookable
                    ? this.space_status[space.id] || 'unknown'
                    : 'not-bookable';
                statuses.push({
                    id: space.map_id,
                    styles: {
                        fill: this.colour_map[`space-${status}`] || '#000',
                        opacity: 0.6,
                    },
                    status_id: status,
                });
            }
            this.status.emit(statuses);
        });
    }

    /**
     * Get the status of the space at the set time
     * @param space Space to get the status for
     */
    private getStatus(space: Space, datetime?: number): SpaceStatus {
        if (!space.bookable) {
            return 'not-bookable';
        }
        const bookings = this.active_bookings[space.id] || [];
        const date = dayjs(datetime).startOf('m').second(1);
        const current_booking = bookings.find((booking) => {
            const start = dayjs(booking.date).startOf('m');
            const end = start.add(booking.duration, 'm');
            return date.isAfter(start, 's') && date.isBefore(end, 'm');
        });
        if (current_booking) {
            return 'unavailable';
        }
        return 'available';
    }

    /**
     * Process raw booking data for the given space
     * @param space Space associated with the bookings
     * @param data List of booking data
     */
    public processSpaceBookings(space: Space, data: HashMap[]) {
        const bookings = (data || []).map((bkn_data) => new CalendarEvent(bkn_data));
        this.active_bookings[space.id] = bookings;
    }

    private openSpaceInfo(space: Space) {
        const el = document.querySelector(`.space-info`);
        if (!el || el.getAttribute('id') !== space.id) {
            this.features.emit([
                {
                    id: space.map_id,
                    content: ExploreSpaceInfoComponent,
                    data: this.generateSpaceData(space),
                },
            ]);
        }
    }

    /**
     * Load listeners for space data
     */
    private loadSpaces() {
        this.clearSpaces();
        this.space_list = this._spaces.space_list.filter((i) => i.zones.includes(this.zone));
        const listeners: MapListener[] = [];
        for (const space of this.space_list) {
            listeners.push({
                id: `${space.map_id}`,
                event: 'mouseenter',
                callback: () => this.openSpaceInfo(space),
            });
            listeners.push({
                id: `${space.map_id}`,
                event: 'mouseleave',
                callback: () => this.features.emit([]),
            });
            if (space.bookable) {
                listeners.push({
                    id: `${space.map_id}`,
                    event: 'click',
                    callback: () => this.bookSpace(space),
                });
            }
        }
        this.listeners.emit(listeners);
    }

    /**
     * Clear current space and booking data
     */
    private clearSpaces() {
        delete this.active_bookings;
        this.active_bookings = {};
    }

    private generateSpaceData(space: Space) {
        const data: any = {
            space,
            bookings: this.active_bookings[space.id],
            features: space.feature_list,
            status: this.space_status[space.id],
            configurations: roomConfigBuilder(this._org.available_room_configs, [
                ...space.configurations,
            ]),
        };
        return data;
    }

    private bookSpace(space: Space) {
        const status = this.space_status[space.id];
        if (status !== 'free') {
            // this._service.notifyError(`Space "${space.name}" is currently unavailable.`);
            return;
        }
        this._dialog.open<BookingModalComponent, BookingModalData>(BookingModalComponent, {
            width: '32em',
            data: {
                space,
                date: this.date,
            },
        });
    }
}
