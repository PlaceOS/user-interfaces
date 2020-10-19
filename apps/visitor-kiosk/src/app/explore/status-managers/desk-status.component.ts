import {
    Component,
    Output,
    EventEmitter,
    Input,
    SimpleChanges,
    OnChanges,
    OnDestroy,
} from '@angular/core';
import { interval } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { BaseClass, HashMap, Identity, SettingsService, unique } from '@user-interfaces/common';
import { BookingsService } from '@user-interfaces/bookings';
import { OrganisationService } from '@user-interfaces/organisation';

import { MapStatus } from './status.interfaces';

@Component({
    selector: '[desk-status]',
    template: ` <ng-content></ng-content> `,
})
export class ExploreDeskStatusComponent extends BaseClass implements OnChanges, OnDestroy {
    /** ID of the active level */
    @Input() public zone: string;
    /** ID of the active level */
    @Input() public filters: Identity[];
    /** ID of the desk to checkin */
    @Input() public checkin: string;
    /** Emitter for changes to the desk status */
    @Output() public status = new EventEmitter<MapStatus[]>();
    /** Emitter for available desk features */
    @Output() public features = new EventEmitter<string[]>();
    /** ID of the desk management system */
    public system_id: string;
    /** List of desks for the active level */
    public id_list: string[];
    /** List of desk IDs in use on the active level */
    public in_use: string[];
    /** List of desk IDs that are reserved on the active level */
    public reserved: string[];
    /** Number of occupied desks on the active level */
    public occupied: number = 0;
    /** Number of free desks on the active level */
    public free: number = 0;
    /** Mapping of colours to statuses */
    public colour_map: HashMap<string> = {};

    public last_desks_list: any[];

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _bookings: BookingsService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        this.colour_map = this._settings.get('app.explore.colors') || {};
        this.initPolling();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.zone) {
            this.initPolling();
            this.processDeskData(this.last_desks_list || []);
            this.calculateStatus();
        }
        if (changes.filters) {
            this.processDeskData(this.last_desks_list || []);
            this.calculateStatus();
        }
    }

    public initPolling() {
        if (!this._org.levelWithID([this.zone])) {
            return this.timeout('init_polling', () => this.initPolling());
        }
        const level = this._org.levelWithID([this.zone]);
        this.subscription(
            'poll',
            interval(15 * 1000)
                .pipe(
                    switchMap((_) =>
                        this._bookings.query({
                            building: level.parent_id,
                            level: this.zone,
                        })
                    )
                )
                .subscribe((desk_list: any[]) => {
                    this.processDeskData(desk_list);
                    this.calculateStatus();
                    this.last_desks_list = desk_list;
                })
        );
    }

    public calculateStatus() {
        const desk_list = this.id_list || [];
        const status_list: MapStatus[] = [];
        for (const desk_id of desk_list) {
            const in_use = (this.in_use || []).find((id) => id === desk_id);
            const reserved = (this.reserved || []).find((id) => id === desk_id);
            const status = in_use ? 'unavailable' : reserved ? 'reserved' : 'available';
            status_list.push({
                id: desk_id,
                styles: {
                    fill: this.colour_map[`desk-${status}`],
                    stroke: this.colour_map[`desk-${status}-stroke`],
                },
                status_id: status,
            });
        }
        this.status.emit(status_list);
    }

    /**
     * Process API desk data
     * @param desk_list List of desk data from the API
     */
    private processDeskData(desk_list: any[]) {
        if (!desk_list || !desk_list.length) {
            return;
        }
        const filtered_list = this.filters.length
            ? desk_list.filter((desk) => {
                  const features = unique(desk.attributes.split(','));
                  let matches = 0;
                  for (const feature of features) {
                      if (this.filters.find((filter) => filter.id === feature)) {
                          matches++;
                      }
                  }
                  return matches >= this.filters.length;
              })
            : desk_list;
        this.features.emit(
            unique(
                desk_list.reduce(
                    (features, desk) => features.concat(desk.attributes.split(',')),
                    []
                )
            )
        );

        this.id_list = filtered_list.map((desk) => desk.id);
        this.in_use = filtered_list.reduce((list, desk) => {
            if (!desk.free) {
                list.push(desk.id);
            }
            return list;
        }, []);
    }
}
