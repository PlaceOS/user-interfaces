import { Component, Output, EventEmitter, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { first } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/common/types';
import { MapStatus } from './status.interfaces';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: '[desk-status]',
    template: `
        <ng-content></ng-content>
        <div class="bindings" *ngIf="system_id">
            <!-- BINDINGS -->
            <i binding [(model)]="in_use" [sys]="system_id" mod="DeskManagement" [bind]="zone" (modelChange)="calculateStatus()"></i>
            <i binding [(model)]="id_list" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':desk_ids'" (modelChange)="calculateStatus()"></i>
            <i binding [(model)]="reserved" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':reserved'" (modelChange)="calculateStatus()"></i>
            <i binding [(model)]="occupied" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':occupied_count'"></i>
            <i binding [(model)]="free" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':free_count'"></i>
            <!-- REMOTE EXECUTIONS -->
            <i binding [(model)]="checkin" [sys]="system_id" mod="DeskManagement" exec="manual_checkin" [params]="[checkin]"></i>
            <i binding [(model)]="cancel" [sys]="system_id" mod="DeskManagement" exec="cancel_reservation" [params]="[]"></i>
        </div>
    `
})
export class ExploreDeskStatusComponent extends BaseClass implements OnChanges {
    /** ID of the active level */
    @Input() public zone: string;
    /** ID of the desk to checkin */
    @Input() public checkin: string;
    /** Emitter for changes to the desk status */
    @Output() public status = new EventEmitter<MapStatus[]>();
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
    /** Number of free desks on the active level */
    public cancel: boolean = false;
    /** Mapping of colours to statuses */
    public colour_map: HashMap<string> = {};

    constructor(private _settings: SettingsService, private _org: OrganisationService) {
        super();
    }

    public ngOnInit(): void {
        this.colour_map = this._settings.get('app.explore.colors') || {};
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.zone) {
            this.loadDesks();
        }
    }

    public calculateStatus() {
        const desk_list = this.id_list || [];
        const status_list: MapStatus[] = [];
        for (const desk_id of desk_list) {
            const in_use = (this.in_use || []).find(id => id === desk_id);
            const reserved = (this.reserved || []).find(id => id === desk_id);
            const status = in_use ? 'unavailable' : reserved ? 'reserved' : 'available';
            status_list.push({
                id: desk_id,
                styles: {
                    fill: this.colour_map[`desk-${status}`],
                    stroke: this.colour_map[`desk-${status}-stroke`],
                },
                status_id: status
            });
        }
        this.status.emit(status_list);
    }

    private loadDesks() {
        const level = this._org.levelWithID([this.zone]);
        if (!level) { return ; }
        const building = this._org.buildings.find(bld => bld.id === level.parent_id);
        if (!building) { return; }
        const desk_management = building.systems.desk_management;
        if (!desk_management) { return; }
        this.system_id = desk_management;
    }
}
