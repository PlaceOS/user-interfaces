import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { OrganisationService } from '@user-interfaces/organisation';
import { Space } from '@user-interfaces/spaces';

import { ViewRoomModalComponent } from '../../overlays/view-room-modal/view-room-modal.component';
import { SpaceFlowService } from './space-flow.service';
import { CAPACITY_OPTIONS } from './space-flow-form.component';

@Component({
    selector: 'space-flow-listing',
    template: `
        <div name="heading" class="w-full">
            <a
                button
                mat-button
                class="clear"
                style="height: auto;"
                [routerLink]="['/book', 'spaces']"
            >
                <div class="flex items-center text-white justify-center p-2 mr-2">
                    <app-icon
                        class="text-lg"
                        [icon]="{ class: 'material-icons', content: 'arrow_back' }"
                    ></app-icon>
                    Back
                </div>
            </a>
        </div>
        <div name="quick" class="p-4 w-full">
            <h3 class="m-auto text-white uppercase width-tablet mb-2">Available Rooms</h3>
            <div class="m-auto width-tablet space-y-2">
                <button mat-button class="inverse" type="button" [matMenuTriggerFor]="menu">
                    <div class="flex items-center justify-center ml-2">
                        Add Filter
                        <app-icon
                            class="text-lg"
                            [icon]="{ class: 'material-icons', content: 'filter_list' }"
                        ></app-icon>
                    </div>
                </button>
                <div></div>
                <mat-chip-list aria-label="Room Filters">
                    <mat-chip>{{ building()?.display_name || building()?.name }}</mat-chip>
                    <mat-chip *ngIf="(filters | async).capacity" [removable]="true" (removed)="updateFilters({ capacity: 0 })"
                        >{{ capacityName((filters | async).capacity) }}
                        <app-icon
                            matChipRemove
                            [icon]="{ class: 'material-icons', content: 'close' }"
                        ></app-icon
                    ></mat-chip>
                    <ng-container *ngIf="(filters | async).zones">
                        <mat-chip *ngFor="let zone of (filters | async).zones" [removable]="true" (removed)="removeZone(zone)"
                            >{{ zoneName(zone) }}
                            <app-icon
                                matChipRemove
                                [icon]="{ class: 'material-icons', content: 'close' }"
                            ></app-icon
                        ></mat-chip>
                    </ng-container>
                </mat-chip-list>
            </div>
        </div>
        <div name="listing" class="relative w-full flex-1 h-half space-y-2 p-4 overflow-auto">
            <ng-container *ngIf="!(loading | async); else load_state">
                <div
                    name="item"
                    *ngFor="let space of (spaces | async) || []"
                    class="m-auto bg-white shadow flex p-2 width-tablet"
                >
                    <div class="flex-1 min-w-0 space-y-2 p-2">
                        <div class="flex items-center">
                            <div class="rounded-full bg-gray-300 text-2xl mr-4">
                                <app-icon
                                    [icon]="{ class: 'material-icons', content: 'place' }"
                                ></app-icon>
                            </div>
                            {{ space.level?.display_name || space.level?.name }},
                            {{ space.display_name || space.name }}
                        </div>
                        <div class="flex items-center">
                            <div class="rounded-full bg-gray-300 text-2xl mr-4">
                                <app-icon
                                    [icon]="{ class: 'material-icons', content: 'group' }"
                                ></app-icon>
                            </div>
                            {{ space.capacity }} {{ space.capacity === 1 ? 'Person' : 'People' }}
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <a
                            button
                            mat-button
                            class="min-w-32"
                            (click)="bookSpace(space)"
                            [routerLink]="['/book', 'spaces', 'confirm']"
                            >Book</a
                        >
                        <button mat-button class="inverse min-w-32" (click)="locateSpace(space)">
                            Map
                        </button>
                    </div>
                </div>
                <div class="text-dark-fade m-auto p-2 text-center text-sm">
                    End of Available Rooms List
                </div>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div class="info-block center">
                <div class="icon">
                    <mat-spinner [diameter]="32"></mat-spinner>
                </div>
                <div class="text">Retrieving available rooms...</div>
            </div>
        </ng-template>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                *ngIf="(buildings | async).length > 1"
                [matMenuTriggerFor]="bld_menu"
            >
                Buildings
            </button>
            <button
                mat-menu-item
                *ngIf="(levels | async).length > 1"
                [matMenuTriggerFor]="level_menu"
            >
                Levels
            </button>
            <button mat-menu-item [matMenuTriggerFor]="cap_menu">Capacity</button>
        </mat-menu>
        <mat-menu #cap_menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let option of capacity_options"
                (click)="updateFilters({ capacity: option.id })"
            >
                {{ option.name }}
            </button>
        </mat-menu>
        <mat-menu #level_menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let lvl of levels | async"
                (click)="updateFilters({ zones: [lvl.id] })"
            >
                {{ building()?.display_name || building()?.name }},
                {{ lvl.display_name || lvl.name }}
            </button>
        </mat-menu>
        <mat-menu #bld_menu="matMenu">
            <button mat-menu-item *ngFor="let bld of buildings | async" (click)="setBuilding(bld)">
                {{ bld.display_name || bld.name }}
            </button>
        </mat-menu>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: auto;
                display: flex;
                flex-direction: column;
            }

            [name='heading'] {
                background-color: #00539f;
            }

            [name='quick'] {
                background-color: #007ac8;
            }
        `,
    ],
})
export class SpaceFlowListingComponent {
    public readonly spaces = this._service.spaces;
    public readonly loading = this._service.loading_spaces;
    public readonly buildings = this._org.building_list;
    public readonly levels = this._org.active_levels;
    public readonly filters = this._service.filters;
    /** List of options available for capacity */
    public readonly capacity_options = CAPACITY_OPTIONS;
    /** Get the active building */
    public readonly building = () => this._org.building;
    /** Update the active building */
    public readonly setBuilding = (b) => {this._org.building = b; this.updateFilters({})};
    /** Update filters for spaces */
    public readonly updateFilters = (f) =>
        this._service.updateFilters({ ...this._service.event_filters, ...f });

    constructor(
        private _service: SpaceFlowService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public ngOnInit() {
        this._org.initialised.pipe(first((_) => _)).subscribe(() => {
            this._service.updateFilters(this._service.event_filters);
        });
    }

    public bookSpace(space: Space) {
        const form = this._service.event_form;
        form.controls.resources.setValue([space]);
        form.controls.system.setValue(space);
        this._service.storeState();
    }

    public locateSpace(space: Space) {
        this._dialog.open(ViewRoomModalComponent, { data: { space } });
    }

    public capacityName(value: number) {
        return this.capacity_options.find(c => c.id === value)?.name || `${value} People`;
    }

    public zoneName(zone_id: string) {
        return this._org.buildings.find(b => b.id === zone_id)?.display_name || this._org.levelWithID([zone_id])?.display_name || '';
    }

    public removeZone(zone_id: string) {
        const zones = (this._service.event_filters.zones || []).filter(z => z !== zone_id);
        this.updateFilters({ zones });
    }
}
