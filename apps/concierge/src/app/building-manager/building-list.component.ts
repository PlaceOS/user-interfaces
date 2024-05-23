import { Component } from '@angular/core';
import { BuildingManagementService } from './building-management.service';
import {
    EncryptionLevel,
    PlaceSettings,
    addSettings,
    querySettings,
    showMetadata,
    updateMetadata,
    updateSettings,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { SettingsService, notifySuccess } from '@placeos/common';

@Component({
    selector: 'building-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-4">
            <custom-table
                class="block min-w-[60rem] w-full h-full"
                [dataSource]="buildings"
                [columns]="[
                    'display_name',
                    'address',
                    'timezone',
                    'region',
                    'level_count',
                    'actions'
                ]"
                [display_column]="[
                    'Name',
                    'Location',
                    'Timezone',
                    'Region',
                    'Levels',
                    ' '
                ]"
                [column_size]="['12r', 'flex', '12r', '10r', '6r', '3.75r']"
                [template]="{
                    images: image_template,
                    zones: level_template,
                    actions: action_template
                }"
                empty="No buildings"
            ></custom-table>
        </div>
        <ng-template #level_template let-data="data">
            {{ (data | level)?.display_name || (data | level)?.name }}
        </ng-template>
        <ng-template #image_template let-data="data">
            <img
                auth
                *ngIf="data.length"
                [source]="data[0]"
                class="max-h-[3rem] max-w-[8rem]"
            />
            <span *ngIf="!data.length" class="opacity-30">No Images</span>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2">
                <button btn icon matRipple [matMenuTriggerFor]="menu">
                    <app-icon>more_vert</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editBuildingMetadata(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">edit_square</app-icon>
                            <span>App Configuration</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editBuilding(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">edit</app-icon>
                            <span>Edit Building</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setAutoRelease(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                release_alert
                            </app-icon>
                            <span>Auto-release Settings</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setSupportIssueTypes(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                support_agent
                            </app-icon>
                            <span>Support Request Types</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeBuilding(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <app-icon class="text-error text-xl">
                                delete
                            </app-icon>
                            <span>Delete Building</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class BuildingListComponent {
    public readonly buildings = this._manager.filtered_buildings;
    public settings = {};

    public readonly editBuilding = (building) =>
        this._manager.editBuilding(building);

    public readonly editBuildingMetadata = (building) =>
        this._manager.editBuildingMetadata(building);

    public readonly removeBuilding = (building) =>
        this._manager.removeBuilding(building);

    public readonly setAutoRelease = (building) =>
        this._manager.setAutoRelease(building);

    public readonly setSupportIssueTypes = (building) =>
        this._manager.setSupportIssueTypes(building);

    constructor(
        private _manager: BuildingManagementService,
        private _settings: SettingsService
    ) {}
}
