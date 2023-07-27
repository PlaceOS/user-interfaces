import { Component } from '@angular/core';
import { LevelManagementService } from './level-management.service';

@Component({
    selector: 'level-list',
    template: `
        <div class="absolute inset-0 overflow-auto">
            <custom-table
                class="block min-w-[48rem] w-full h-full"
                [dataSource]="levels"
                [columns]="['display_name', 'building', 'actions']"
                [display_column]="['Name', 'Building', ' ']"
                [column_size]="['flex', '12r', '5r']"
                [template]="{
                    actions: action_template
                }"
                empty="No levels"
            ></custom-table>
        </div>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2">
                <button
                    btn
                    icon
                    matTooltip="Edit Level"
                    (click)="editLevel(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class LevelListComponent {
    public readonly levels = this._manager.filtered_levels;

    public readonly editLevel = (level) => this._manager.editLevel(level);

    constructor(private _manager: LevelManagementService) {}
}
