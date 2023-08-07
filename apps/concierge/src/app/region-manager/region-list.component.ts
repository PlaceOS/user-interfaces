import { Component } from '@angular/core';
import { RegionManagementService } from './region-management.service';

@Component({
    selector: 'region-list',
    template: `
        <div class="absolute inset-0 overflow-auto">
            <custom-table
                class="block min-w-[48rem] w-full h-full"
                [dataSource]="regions"
                [columns]="['display_name', 'building_count', 'actions']"
                [display_column]="['Name', 'Buildings', ' ']"
                [column_size]="['flex', '10r', '5r']"
                [template]="{
                    actions: action_template
                }"
                empty="No regions"
            ></custom-table>
        </div>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2">
                <button btn icon [matMenuTriggerFor]="menu">
                    <app-icon>more_vert</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editRegionMetadata(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon>edit_square</app-icon>
                            <span>App Configuration</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editRegion(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon>edit</app-icon>
                            <span>Edit Region</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeRegion(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <app-icon>delete</app-icon>
                            <span>Delete Region</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class RegionListComponent {
    public readonly regions = this._manager.filtered_regions;

    public readonly editRegion = (region) => this._manager.editRegion(region);
    public readonly removeRegion = (region) =>
        this._manager.removeRegion(region);
    public readonly editMetadata = (region) =>
        this._manager.editRegionMetadata(region);

    constructor(private _manager: RegionManagementService) {}
}
