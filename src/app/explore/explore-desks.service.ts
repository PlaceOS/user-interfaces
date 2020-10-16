import { Injectable } from '@angular/core';
import { listen } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { BaseClass } from '../common/base.class';
import { SettingsService } from '../common/settings.service';
import { HashMap } from '../common/types';
import { ExploreStateService } from './explore-state.service';
import { OrganisationService } from '../organisation/organisation.service';
import { BuildingLevel } from '../organisation/level.class';
import { DEFAULT_COLOURS } from './explore-spaces.service';

export interface DesksStats {
    free: number;
    occupied: number;
    total: number;
}

@Injectable()
export class ExploreDesksService extends BaseClass {
    private _level: BuildingLevel = null;
    private _in_use = new BehaviorSubject<string[]>([]);
    private _desks = new BehaviorSubject<string[]>([]);
    private _reserved = new BehaviorSubject<string[]>([]);
    private _statuses: HashMap<string> = {};
    private _stats = new BehaviorSubject<DesksStats>({ free: 0, occupied: 0, total: 0 });

    constructor(private _state: ExploreStateService, private _org: OrganisationService, private _settings: SettingsService) {
        super();
        this.subscription(
            'spaces',
            this._state.level.subscribe((level) => {
                this.clearBindings();
                this._level = level;
                this.bindToDesks();
            })
        );
        this.subscription('changes', combineLatest([this._desks, this._in_use, this._reserved]).subscribe((details) => {
            const [desks, in_use, reserved] = details;
            this._statuses = {};
            for (const id of desks) {
                const is_used = in_use.some(i => id === i);
                const is_reserved = reserved.some(i => id === i);
                this._statuses[id] = is_used ? 'free' : is_reserved ? 'reserved' : 'busy';
            }
            this.timeout('update', () => this.updateStatus(), 100);
        }));
    }

    public clearBindings() {
        if (!this._level) return;
        const bindings = ['desks_in_use', 'desk_list', 'desks_reserved'];
        for (const id of bindings) { this.unsub(id); }
        this._statuses = {};
    }

    public bindToDesks() {
        if (!this._level) return;
        const building = this._org.buildings.find(bld => bld.id === this._level.parent_id);
        if (!building) { return; }
        const desk_management = building.systems.desk_management;
        if (!desk_management) { return; }
        desk_management;
        const binding = { sys: desk_management, mod: 'DeskManagement', index: 1 };
        this.subscription(
            `desks_in_use`,
            listen({
                ...binding,
                name: `${this._level.id}`,
            }).subscribe((d) => this._in_use.next(d))
        );
        this.subscription(
            `desks_list`,
            listen({
                ...binding,
                name: `${this._level.id}:desk_ids`,
            }).subscribe((d) => this._desks.next(d))
        );
        this.subscription(
            `desks_reserved`,
            listen({
                ...binding,
                name: `${this._level.id}:reserved`,
            }).subscribe((d) => this._reserved.next(d))
        );
        this.subscription(
            `desks_occupied`,
            listen({
                ...binding,
                name: `${this._level.id}:occupied_count`,
            }).subscribe((d) => this._stats.next({ ...this._stats.getValue(), occupied: d }))
        );
        this.subscription(
            `desks_free`,
            listen({
                ...binding,
                name: `${this._level.id}:free_count`,
            }).subscribe((d) => this._stats.next({ ...this._stats.getValue(), free: d }))
        );
    }

    private updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || DEFAULT_COLOURS;
        for (const desk_id in this._statuses) {
            style_map[`#${desk_id}`] = {
                fill: colours[`desk-${this._statuses[desk_id]}`] || colours[`${this._statuses[desk_id]}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('desks', style_map);
    }
}
