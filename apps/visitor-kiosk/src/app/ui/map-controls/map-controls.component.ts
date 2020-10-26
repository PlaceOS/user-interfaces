import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass, SettingsService } from '@user-interfaces/common';
import { Building, BuildingLevel, OrganisationService } from '@user-interfaces/organisation';

@Component({
    selector: 'a-map-controls',
    templateUrl: './map-controls.component.html',
    styleUrls: ['./map-controls.component.scss']
})
export class MapControlsComponent extends BaseClass implements OnInit {
    /** ID of the active building */
    @Input() public building: string;
    /** ID of the active level */
    @Input() public level: string;
    /** Emitter for changes to the active level */
    @Output() public levelChange = new EventEmitter<string>();
    /** List of available buildings */
    public building_list: Building[] = [];
    /** List of available levels */
    public level_list: readonly BuildingLevel[] = [];

    public get can_select_building(): boolean {
        return !!this._settings.get('app.explore.can_select_building');
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(params => {
                if (params.has('level')) {
                    const level_id = params.get('level');
                    const level = this._org.levelWithID([level_id]);
                    this.level = level.id;
                    this.setBuilding(level.parent_id);
                    this.levelChange.emit(this.level);
                    this.clearTimeout('check_building');
                }
            })
        );
        this.building_list = this._org.buildings;
        this.timeout('check_building', () => {
            if (!this.building) {
                this.setBuilding(this._org.building.id);
            }
            this.levelChange.emit(this.level);
        });
    }

    public setBuilding(bld_id: string) {
        const building = this._org.buildings.find(bld => bld.id === bld_id);
        if (building) {
            this.building = bld_id;
            this.level_list = building.levels;
            if (this.level_list.length && !this.level_list.find(lvl => lvl.id === this.level)) {
                this.updateLevel(this.level_list[0].id);
            }
        }
    }

    public updateLevel(lvl_id: string) {
        this.level = lvl_id;
        this.levelChange.emit(this.level);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParamsHandling: 'merge',
            queryParams: { level: lvl_id }
        });
    }
}
