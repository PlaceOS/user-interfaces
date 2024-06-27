import { Component } from '@angular/core';
import { BuildingManagementService } from './building-management.service';
import { SettingsService, notifySuccess } from '@placeos/common';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'building-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="min-w-[62rem] w-full block text-sm"
                [data]="buildings"
                empty_message="No Buildings"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'Building Name',
                        content: name_template
                    },
                    {
                        key: 'location',
                        name: 'Location',
                        size: '16rem'
                    },
                    {
                        key: 'timezone',
                        name: 'Timezone',
                        size: '14rem',
                        content: timezone_template
                    },
                    {
                        key: 'region',
                        name: 'Region',
                        size: '11rem',
                        sortable: false
                    },
                    { key: 'level_count', name: 'Levels', size: '6rem' },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3rem',
                        sortable: false
                    }
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="w-full h-20"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="text-[0.625rem] opacity-30 font-mono">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #timezone_template let-data="data">
            <div class="p-4 font-mono text-sm">{{ data }}</div>
        </ng-template>
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
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded"
                    [matMenuTriggerFor]="menu"
                >
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
                    <button mat-menu-item (click)="setInduction(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                badge
                            </app-icon>
                            <span>Induction Settings</span>
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

    public readonly setInduction = (building) =>
        this._manager.setInduction(building);

    public readonly setSupportIssueTypes = (building) =>
        this._manager.setSupportIssueTypes(building);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess('Building ID copied to clipboard.');
    };

    constructor(
        private _manager: BuildingManagementService,
        private _settings: SettingsService,
        private _clipboard: Clipboard
    ) {}
}
