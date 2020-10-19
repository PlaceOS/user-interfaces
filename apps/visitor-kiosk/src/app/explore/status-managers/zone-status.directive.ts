import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { BaseClass, HashMap, SettingsService } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';

import { MapStatus } from './status.interfaces';

@Directive({
    selector: '[zone-status]'
})
export class ExploreZoneStatusDirective extends BaseClass implements OnInit, OnDestroy {
    /** ID of the zone to show the statuses for */
    @Input() public zone: string;
    /** Updates the status based of the given time. Unix epoch in milliseconds */
    @Input() public date: number;
    /** Emitter for changes to the space status */
    @Output() public status = new EventEmitter<MapStatus[]>();
    /** ID of the system to grab the zone usage details from */
    public system_id: string;
    /** Mapping of zones IDs to their utilisation */
    public zone_usage: HashMap<number> = {};
    /** Mapping of colours to statuses */
    public colour_map: HashMap<string> = {};

    constructor(private _settings: SettingsService, private _org: OrganisationService) {
        super();
    }

    public async ngOnInit() {
        await this._settings.initialised.pipe(first(_ => _)).toPromise();
        this.colour_map = this._settings.get('app.explore.colors') || {};
    }

    public ngOnDestroy() {
        this.clearZones(this.zone);
    }

    public calculateStatus() {
        const level = this._org.levelWithID([this.zone]);
        if (!level) return;
        const min_usage = level.settings.min_usage || 0;
        const status_list: MapStatus[] = [];
        for (const zone in this.zone_usage) {
            if (this.zone_usage[zone] && this.zone_usage.hasOwnProperty(zone)) {
                const usage = Math.max(min_usage, this.zone_usage[zone]);
                const status = usage < 40 ? 'low' : (usage < 75 ? 'medium' : 'high');
                status_list.push({
                    id: zone,
                    styles: {
                        fill: this.colour_map[`zone-${status}`] || '#ccc'
                    },
                    status_id: status
                })
            }
        }
        this.status.emit(status_list);
    }

    public loadZones() {
        const level = this._org.levelWithID([this.zone]);
        if (!level) return;
        const building = this._org.buildings.find(bld => bld.id === level.parent_id);
        if (!building) return;
        const floor_management = building.systems.floor_management;
        if (!floor_management) return;
        this.system_id = floor_management;
        const mod = getModule(this.system_id, 'FloorManagement');
        if (mod) {
            this.subscription(`zone-${this.zone}.binding`, mod.binding(this.zone).bind());
            this.subscription(`zone-${this.zone}.usage`, mod.binding(this.zone).listen().subscribe((usage => {
                this.zone_usage = usage;
                this.calculateStatus();
            })));
        }
    }

    public clearZones(zone_id: string) {
        this.unsub(`zone-${zone_id}.binding`);
        this.unsub(`zone-${zone_id}.usage`);
        delete this.zone_usage;
        this.zone_usage = {};
    }
}
