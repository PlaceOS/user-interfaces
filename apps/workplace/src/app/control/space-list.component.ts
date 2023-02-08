import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space, SpacesService } from '@placeos/spaces';

@Component({
    selector: 'a-control-space-list',
    template: `
        <div class="w-full flex items-center justify-center p-2">
            <mat-form-field overlay class="rounded h-12" appearance="outline">
                <app-icon class="text-xl" matPrefix>search</app-icon>
                <input
                    matInput
                    [(ngModel)]="search_str"
                    placeholder="Search..."
                />
                <mat-spinner
                    matSuffix
                    class="top-2"
                    *ngIf="loading"
                    [diameter]="32"
                ></mat-spinner>
            </mat-form-field>
        </div>
        <div
            class="flex flex-col flex-1 overflow-auto w-full"
            *ngIf="filtered_list.length; else empty_state"
        >
            <a-control-space-list-item
                *ngFor="let space of filtered_list"
                [space]="space"
            ></a-control-space-list-item>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <app-icon>close</app-icon>
                <p>
                    {{
                        search_str
                            ? ' No matches for "' + search_str + '"'
                            : 'No controllable spaces'
                    }}
                </p>
            </div>
        </ng-template>
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
})
export class ControlSpaceListComponent extends AsyncHandler implements OnInit {
    /** List of controllable spaces */
    public space_list: Space[] = [];
    /** Filter string */
    public search_str: string;
    /** Whether space list is being filtered */
    public loading: boolean;

    constructor(
        private _spaces: SpacesService,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this.space_list = this._spaces.filter((space) => !!space.support_url);
        this.space_list.sort((a, b) => this.sortSpaces(a, b));
    }

    /** List of spaces filtered using the search string */
    public get filtered_list(): Space[] {
        const search = (this.search_str || '').toLowerCase();
        return (this.space_list || []).filter((space) => {
            const bld = this._org.buildings.find(
                (building) => building.id === space.level.parent_id
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
    }

    private sortSpaces(first: Space, second: Space) {
        const bld_a = this._org.buildings.find(
            (building) => building.id === first.level?.parent_id
        );
        const space_a_name = (first.name || '').toLowerCase();
        const level_a_name = (
            (first.level ? first.level.name : '') || ''
        ).toLowerCase();
        const bld_a_name = (bld_a?.name || '').toLowerCase();
        const bld_b = this._org.buildings.find(
            (building) => building.id === second.level?.parent_id
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
