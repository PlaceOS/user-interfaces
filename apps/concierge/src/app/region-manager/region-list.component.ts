import { Component } from '@angular/core';
import { RegionManagementService } from './region-management.service';
import { notifySuccess } from '@placeos/common';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'region-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="min-w-[32rem] block text-sm"
                [data]="regions"
                empty_message="No Regions"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'Building Name',
                        content: name_template
                    },
                    { key: 'building_count', name: 'Buildings', size: '8rem' },
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
                    <button mat-menu-item (click)="editMetadata(row)">
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
                            <app-icon class="text-error">delete</app-icon>
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

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess('Region ID copied to clipboard.');
    };

    constructor(
        private _manager: RegionManagementService,
        private _clipboard: Clipboard
    ) {}
}
