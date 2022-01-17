import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-space-list',
    template: `
        <custom-table
            class="block min-w-[56rem]"
            [dataSource]="spaces"
            [columns]="['name', 'map_id', 'assigned_to', 'notes', 'actions']"
            [display_column]="['Bay No.', 'Map ID', 'Assigned', 'Notes', ' ']"
            [column_size]="['8r', '10r', '14r', 'flex', '10r']"
            [template]="{ actions: action_template }"
            [filter]="(options | async).search"
            [class.opacity-50]="(loading | async)?.includes('spaces')"
        ></custom-table>
        <ng-template #action_template let-row="row">
            <div class="w-full flex items-center justify-end">
                <button mat-icon-button (click)="editSpace(row)">
                    <app-icon>edit</app-icon>
                </button>
                <button mat-icon-button (click)="removeSpace(row)">
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
        <mat-progress-bar
            *ngIf="(loading | async)?.includes('spaces')"
            class="absolute bottom-0 inset-x-0"
        ></mat-progress-bar>
    `,
    styles: [],
})
export class ParkingSpaceListComponent {
    public readonly spaces = this._state.spaces;
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;

    public readonly editSpace = (s) => this._state.editSpace(s);
    public readonly removeSpace = (s) => this._state.removeSpace(s);

    constructor(private _state: ParkingStateService) {}
}
