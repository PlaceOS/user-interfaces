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
                <button
                    btn
                    icon
                    matTooltip="Edit Region"
                    (click)="editRegion(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    btn
                    icon
                    matTooltip="Edit Region"
                    (click)="editRegion(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class RegionListComponent {
    public readonly regions = this._manager.filtered_regions;

    public readonly editRegion = (region) => this._manager.editRegion(region);
    public readonly editMetadata = (region) =>
        this._manager.editRegionMetadata(region);

    constructor(private _manager: RegionManagementService) {}
}
