import { Component } from '@angular/core';
import {
    EmailTemplatesFilters,
    EmailTemplatesStateService,
} from './email-templates-state.service';

@Component({
    selector: 'email-templates-list',
    template: ` <div class="absolute inset-0 flex flex-col">
        <div class="flex items-center justify-between p-8 space-x-2">
            <h2 class="text-2xl font-medium">Email Templates</h2>
            <div class="flex-1"></div>
            <mat-form-field appearance="outline" class="w-56 no-subscript">
                <mat-select
                    [ngModel]="(filters | async)?.category"
                    placeholder="All Categories"
                    (ngModelChange)="setFilters({ category: $event })"
                >
                    <mat-option value="">All Categories</mat-option>
                    <mat-option value="internal">Internal</mat-option>
                    <mat-option value="external">External</mat-option>
                </mat-select>
            </mat-form-field>
            <a btn matRipple [routerLink]="['/email-templates', 'manage']">
                <div class="ml-2">Create Template</div>
                <app-icon class="text-2xl">add</app-icon>
            </a>
        </div>
        <div class="h-1/2 flex-1 w-full px-8 overflow-y-auto relative">
            <div class="w-full min-h-full overflow-x-auto">
                <simple-table
                    class="min-w-[56rem] w-full block text-sm"
                    [data]="templates"
                    empty_message="No group events for selected period"
                    [columns]="[
                        { key: 'title', name: 'Title' },
                        {
                            key: 'category',
                            name: 'Category',
                            show: !(filters | async)?.category
                        },
                        { key: 'trigger', name: 'Trigger' },
                        {
                            key: 'zone_id',
                            name: 'Building',
                            content: bld_template
                        },
                        {
                            key: 'created_at',
                            name: 'Created',
                            size: '8rem',
                            content: date_template
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6.5rem',
                            content: actions_template
                        }
                    ]"
                    [sortable]="true"
                >
                </simple-table>
                <ng-template #date_template let-data="data">
                    <div class="opacity-60">
                        {{ data * 1000 | date: 'mediumDate' }}
                    </div>
                </ng-template>
                <ng-template #bld_template let-data="data">
                    <div class="p-4">
                        {{ (data | building | async)?.display_name }}
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <a
                        btn
                        icon
                        matRipple
                        (click)="editTemplate(row)"
                        [routerLink]="['/email-templates', 'manage', row.id]"
                    >
                        <app-icon>edit</app-icon>
                    </a>
                    <button
                        icon
                        matRipple
                        class="text-error"
                        (click)="removeTemplate(row)"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                </ng-template>
            </div>
        </div>
    </div>`,
    styles: [``],
})
export class EmailTemplatesListComponent {
    public readonly filters = this._state.filters;
    public readonly templates = this._state.filtered_templates;

    public readonly removeTemplate = (t) => this._state.removeTemplate(t);

    constructor(private _state: EmailTemplatesStateService) {}

    public setFilters(filters: Partial<EmailTemplatesFilters>) {
        this._state.setFilters(filters);
    }
}
