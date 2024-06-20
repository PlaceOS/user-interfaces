import { Component } from '@angular/core';
import { LevelManagementService } from './level-management.service';
import { notifySuccess } from '@placeos/common';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'level-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="min-w-[48rem] block text-sm"
                [data]="levels"
                empty_message="No levels"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'Level Name',
                        content: name_template
                    },
                    { key: 'building', name: 'Buildings', size: '16rem' },
                    {
                        key: 'parking',
                        name: 'Parking',
                        content: parking_template,
                        size: '5rem',
                        sortable: false
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '6rem',
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
        <ng-template #parking_template let-row="row">
            <div
                *ngIf="row.tags?.includes('parking')"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto"
            >
                <app-icon>done</app-icon>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2 p-2">
                <button
                    icon
                    matRipple
                    matTooltip="Edit Level"
                    (click)="editLevel(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    (click)="removeLevel(row)"
                    matTooltip="Remove Level"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class LevelListComponent {
    public readonly levels = this._manager.filtered_levels;

    public readonly editLevel = (level) => this._manager.editLevel(level);
    public readonly removeLevel = (level) => this._manager.removeLevel(level);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess('Level ID copied to clipboard.');
    };

    constructor(
        private _manager: LevelManagementService,
        private _clipboard: Clipboard
    ) {}
}
