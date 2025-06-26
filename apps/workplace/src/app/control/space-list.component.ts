import { Component, inject } from '@angular/core';
import { filter, map, startWith } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space, SpacesService } from '@placeos/spaces';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
    selector: 'a-control-space-list',
    template: `
        <div
            class="flex w-full items-center justify-center border-b border-base-300 bg-base-100 p-2"
        >
            <mat-form-field overlay class="h-12 rounded" appearance="outline">
                <icon class="text-xl" matPrefix>search</icon>
                <input
                    matInput
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                    placeholder="Search..."
                />
                @if (loading) {
                    <mat-spinner
                        matSuffix
                        class="top-2"
                        [diameter]="32"
                    ></mat-spinner>
                }
            </mat-form-field>
        </div>
        @let spaces = filtered_spaces | async;
        @if (spaces.length) {
            <div class="flex w-full flex-1 flex-col overflow-auto p-4">
                @for (space of spaces; track space.id) {
                    <a-control-space-list-item
                        [space]="space"
                    ></a-control-space-list-item>
                }
            </div>
        } @else {
            <div class="flex flex-col items-center space-y-4 p-8 opacity-30">
                <icon class="text-6xl">no_meeting_room</icon>
                <p>
                    {{
                        search_str
                            ? ' No matches for "' + search.getValue() + '"'
                            : 'No controllable spaces'
                    }}
                </p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }

            mat-form-field {
                width: 48rem;
                max-width: calc(100% - 2rem);
            }
        `,
    ],
    standalone: false,
})
export class ControlSpaceListComponent extends AsyncHandler {
    private _spaces = inject(SpacesService);
    private _org = inject(OrganisationService);

    /** Filter string */
    public readonly search = new BehaviorSubject('');
    /** List of controlable spaces for the active building */
    public readonly space_list = combineLatest([
        this._org.active_building,
        this._spaces.all_spaces,
        this._spaces.initialised,
    ]).pipe(
        filter(([_]) => !!_),
        map(([bld, list]) =>
            list.filter((s) => !!s.support_url && s.zones.includes(bld.id)),
        ),
        map((spaces) => spaces.sort((a, b) => this.sortSpaces(a, b))),
    );
    // Filtered list of controlable spaces
    public readonly filtered_spaces = combineLatest([
        this.space_list,
        this.search,
    ]).pipe(
        map(([list, s]) => {
            const search = (s || '').toLowerCase();
            if (!search) return list;
            return (list || []).filter((space) => {
                const bld = this._org.buildings.find(
                    (building) => building.id === space.level.parent_id,
                );
                const space_name = (space.name || '').toLowerCase();
                const level_name = (
                    (space.level ? space.level.name : '') || ''
                ).toLowerCase();
                const bld_name = ((bld ? bld.name : '') || '').toLowerCase();
                return (
                    space_name.indexOf(search) >= 0 ||
                    (level_name && level_name.indexOf(search) >= 0) ||
                    (bld_name && bld_name.indexOf(search) >= 0)
                );
            });
        }),
        startWith([]),
    );
    /** Whether space list is being filtered */
    public loading: boolean;

    private sortSpaces(first: Space, second: Space) {
        const bld_a = this._org.buildings.find(
            (building) => building.id === first.level?.parent_id,
        );
        const space_a_name = (first.name || '').toLowerCase();
        const level_a_name = (
            (first.level ? first.level.name : '') || ''
        ).toLowerCase();
        const bld_a_name = (bld_a?.name || '').toLowerCase();
        const bld_b = this._org.buildings.find(
            (building) => building.id === second.level?.parent_id,
        );
        const space_b_name = (second.name || '').toLowerCase();
        const level_b_name = (
            (second.level ? second.level.name : '') || ''
        ).toLowerCase();
        const bld_b_name = (bld_b?.name || '').toLowerCase();
        return (
            bld_a_name.localeCompare(bld_b_name) ||
            level_a_name.localeCompare(level_b_name) ||
            space_a_name.localeCompare(space_b_name)
        );
    }
}
