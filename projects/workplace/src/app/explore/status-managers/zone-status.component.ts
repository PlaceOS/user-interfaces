import { Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, Component } from '@angular/core';

import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/common/types';
import { MapStatus } from './status.interfaces';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: '[zone-status]',
    template: `
        <ng-content></ng-content>
        <div class="bindings" *ngIf="system_id">
            <!-- BINDINGS -->
            <i binding bind="usage" [(model)]="zone_usage" [sys]="system_id" mod="FloorManagement" (modelChange)="calculateStatus()"></i>
        </div>
    `
})
export class ExploreZoneStatusComponent extends BaseClass implements OnInit, OnDestroy, OnChanges {
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

    public ngOnInit(): void {
        this.colour_map = this._settings.get('app.explore.colors') || {};
        this.loadZones();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.zone) {
            this.clearZones(changes.zone.previousValue);
            this.loadZones();
        }
    }

    public ngOnDestroy() {
        this.clearZones(this.zone);
    }

    public calculateStatus() {
        const level = this._org.levelWithID([this.zone]);
        if (!level) {
            return;
        }
        const min_usage = level.settings ? level.settings.min_usage || 0 : 0;
        const status_list: MapStatus[] = [];
        for (const lvl in this.zone_usage) {
            if (!!this.zone_usage[lvl] && lvl === this.zone) {
                const keys = Object.keys(this.zone_usage[lvl]);
                for (const zone of keys) {
                    const usage = Math.max(min_usage, this.zone_usage[lvl][zone]);
                    const status = usage < 40 ? 'low' : usage < 75 ? 'medium' : 'high';
                    status_list.push({
                        id: zone,
                        styles: {
                            fill: this.colour_map[`zone-${status}`] || '#ccc',
                        },
                        status_id: status,
                    });
                }
            }
        }
        this.status.emit(status_list);
    }

    public loadZones() {
        const level = this._org.levelWithID([this.zone]);
        if (!level) {
            return;
        }
        const building = this._org.buildings.find(
            (bld) => bld.id === level.parent_id
        );
        if (!building) {
            return;
        }
        const floor_management = building.systems.floor_management;
        if (!floor_management) { return; }
        this.system_id = floor_management;
    }

    public clearZones(zone_id: string) {
        this.unsub(`zone-${zone_id}.binding`);
        this.unsub(`zone-${zone_id}.usage`);
        delete this.zone_usage;
        this.zone_usage = {};
    }
}
