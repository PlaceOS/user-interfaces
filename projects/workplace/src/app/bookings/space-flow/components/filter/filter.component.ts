import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Building } from 'src/app/organisation/building.class';
import { BuildingLevel } from 'src/app/organisation/level.class';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { BaseClass } from 'src/app/common/base.class';

@Component({
    selector: 'booking-actions-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent extends BaseClass implements OnInit {
    @Input() public zones: string[];
    @Output() public zonesChanged = new EventEmitter<string[]>();
    @Input() public loading = false;
    @Output() public levelChange = new EventEmitter<string>();

    /** List of buildings */
    public buildings: Building[];
    /** List of levels to the building */
    public levels: BuildingLevel[] = [];

    /** Selected building */
    public building: Building;
    /** Selected level */
    public level: BuildingLevel;

    constructor(private _org: OrganisationService) {
        super();
    }

    public ngOnInit(): void {
        this._org.initialised.pipe(first((_) => _)).subscribe(() => {
            this.buildings = this._org.buildings;
            this.setFilters(this.zones);
        });
    }

    public setFilters(zones: string[]) {
        const level = this.levels.find((i) => zones.indexOf(i.id) !== -1);
        const building = this.buildings.find((i) => zones.indexOf(i.id) !== -1);
        if (level) {
            this.building = this.buildings.find((i) => i.id === level.parent_id);
        } else {
            if (building) {
                this.building = building;
            } else {
                this.building = this._org.building;
            }
        }
        this.processLevels();
    }

    public processLevels(): void {
        const levels = this._org.levelsForBuilding(this.building);
        levels.unshift({ id: '', name: 'All levels' } as any);
        this.levels = levels;
        this.level = this.levels[0];
    }

    public onBuildingChange() {
        this.processLevels();
        this.zonesChanged.emit([this.building.id]);
        this.levelChange.emit('');
    }

    public onLevelChange() {
        this.levelChange.emit(this.level.id);
    }
}
