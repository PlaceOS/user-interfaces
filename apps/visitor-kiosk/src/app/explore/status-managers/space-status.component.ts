import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnDestroy,
    SimpleChanges,
    OnChanges
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { ExploreSpaceInfoComponent } from '../overlays/space-info/space-info.component';
import { MapStatus, MapListener, SpaceStatus } from './status.interfaces';
import { ExploreBookingModalComponent, ExploreBookingModalData } from '../../overlays/explore-booking-modal/explore-booking-modal.component';

import * as dayjs from 'dayjs';
import { BaseClass, HashMap, SettingsService } from '@user-interfaces/common';
import { ViewerFeature } from '@yuion/svg-viewer';
import { Space, SpacesService } from '@user-interfaces/spaces';
import { CalendarEvent } from '@user-interfaces/events';

@Component({
    selector: '[space-status]',
    template: `
        <div class="bindings" *ngIf="space_list">
            <i
                *ngFor="let space of space_list"
                binding
                [sys]="space.id"
                mod="Bookings"
                bind="today"
                (modelChange)="processSpaceBookings(space, $event)"
            ></i>
        </div>
        <ng-content></ng-content>
    `
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
    @Output() public features = new EventEmitter<ViewerFeature[]>();
    /** List of spaces to grab the statuses for */
    public space_list: Space[] = [];
    /** Mapping of spaces to active bookings */
    public active_bookings: HashMap<CalendarEvent[]> = {};
    /** Mapping of colours to statuses */
    public colour_map: HashMap<string> = {};

    constructor(private _settings: SettingsService, private _dialog: MatDialog, private _spaces: SpacesService) {
        super();
    }

    public async ngOnInit() {
        await this._settings.initialised.pipe(first(_ => _)).toPromise();
        this.colour_map = this._settings.get('app.explore.colors') || {};
        this.subscription(
            'spaces',
            this._spaces.list.subscribe(() => this.loadSpaces())
        );
        this.interval('update_status', () => this.calculateStatus(), 60 * 1000);
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
                const status = this.getStatus(space, this.date);
                statuses.push({
                    id: `${space.map_id}-status`,
                    styles: {
                        fill: this.colour_map[`space-${status}`] || '#000',
                        opacity: 0.8
                    },
                    status_id: status
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
        const date = dayjs(datetime)
            .startOf('m')
            .second(1);
        const current_booking = bookings.find(booking => {
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
        const bookings = (data || []).map(
            bkn_data => new CalendarEvent(bkn_data)
        );
        this.active_bookings[space.id] = bookings;
        this.calculateStatus();
    }

    /**
     * Load listeners for space data
     */
    private loadSpaces() {
        this.clearSpaces();
        this.space_list = this._spaces.space_list.filter(space => space.zones.indexOf(this.zone) >= 0);
        const listeners: MapListener[] = [];
        for (const space of this.space_list) {
            listeners.push({
                id: `${space.map_id}-status`,
                event: 'mouseenter',
                callback: () =>
                    this.features.emit([
                        {
                            location: space.map_id,
                            content: ExploreSpaceInfoComponent,
                            data: this.generateSpaceData(space)
                        } as any
                    ])
            });
            listeners.push({
                id: `${space.map_id}-status`,
                event: 'mouseleave',
                callback: () => this.features.emit([])
            });
            // if (space.bookable) {
            //     listeners.push({
            //         id: `${space.map_id}-status`,
            //         event: 'click',
            //         callback: () => this.bookSpace(space)
            //     });
            // }
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
        const data: any = { space, bookings: this.active_bookings[space.id] };
        return data;
    }

    private bookSpace(space: Space) {
        const ref = this._dialog.open<ExploreBookingModalComponent, ExploreBookingModalData>(
            ExploreBookingModalComponent,
            {
                maxHeight: 'none',
                maxWidth: '32em',
                height: 'auto',
                width: 'auto',
                data: {
                    space
                }
            }
        );
    }
}
