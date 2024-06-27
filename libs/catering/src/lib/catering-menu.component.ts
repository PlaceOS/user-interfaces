import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CateringStateService } from './catering-state.service';
import { CateringItem } from './catering-item.class';
import { unique } from '@placeos/common';
import { CateringOrdersService } from './catering-orders.service';

@Component({
    selector: 'catering-menu',
    template: `
        <simple-table
            class="w-full min-w-[32rem] block text-sm"
            [data]="menu"
            [columns]="[
                {
                    key: 'active',
                    name: ' ',
                    content: active_template,
                    size: '3.5rem',
                    sortable: false
                },
                { key: 'name', name: 'Name' },
                { key: 'category', name: 'Category' },
                {
                    key: 'unit_price',
                    name: 'Price',
                    content: price_template,
                    size: '6rem'
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '6.5rem',
                    sortable: false
                }
            ]"
            [filter]="filters?.search"
            [show_children]="show_children"
            [child_template]="child_template"
            [sortable]="true"
            empty_message="No Items in Menu"
        ></simple-table>
        <ng-template #active_template let-row="row">
            <mat-checkbox
                class="mx-auto"
                matTooltip="Allow Ordering Item for this zone"
                matTooltipPosition="right"
                [ngModel]="isEnabled(row)"
                (ngModelChange)="setEnabled(row, $event)"
            ></mat-checkbox>
        </ng-template>
        <ng-template #price_template let-data="data">
            <div
                class="px-2 py-1 font-mono text-xs flex items-center mx-auto bg-secondary text-secondary-content rounded"
            >
                {{ data / 100 | currency: (symbol | async) }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="p-2 flex items-center mx-auto space-x-2">
                <button
                    icon
                    matRipple
                    [disabled]="!can_edit"
                    [class.opacity-0]="!can_edit"
                    [matMenuTriggerFor]="menu"
                >
                    <app-icon>more_vert</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="addOption(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <app-icon>add</app-icon>
                            <div>Add Option</div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="editItem(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <app-icon>edit</app-icon>
                            <div>Edit Item</div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="removeItem(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <app-icon class="text-error">delete</app-icon>
                            <div>Remove Item</div>
                        </div>
                    </button>
                </mat-menu>
                <button
                    icon
                    matRipple
                    [disabled]="!row.options?.length"
                    [matTooltip]="
                        row.options?.length
                            ? (show_children[row.id] ? 'Hide' : 'Show') +
                              ' Menu Item Options'
                            : ''
                    "
                    (click)="show_children[row.id] = !show_children[row.id]"
                >
                    <app-icon>
                        {{
                            show_children[row.id]
                                ? 'keyboard_arrow_down'
                                : 'chevron_right'
                        }}
                    </app-icon>
                </button>
            </div>
        </ng-template>
        <ng-template #child_template let-row="row">
            <div
                class="flex p-2 items-center border-b border-solid border-base-200 relative space-x-2"
                *ngFor="let option of row.options"
            >
                <div
                    class="absolute inset-y-0 left-0 w-2 bg-black opacity-10"
                ></div>
                <div class="flex-1 pl-4 pr-2">
                    <div class="text">{{ option.name }}</div>
                    <div class="text-xs opacity-60">
                        {{ option.group }}
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    matTooltip="Edit Menu Item Option"
                    (click)="editOption(row, option)"
                    *ngIf="can_edit"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="!mr-1"
                    matTooltip="Remove Menu Item Option"
                    (click)="removeOption(row, option)"
                    *ngIf="can_edit"
                >
                    <app-icon class="text-error">delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 90%;
                width: 100%;
            }
        `,
    ],
})
export class CateringMenuComponent {
    public show_children: Record<string, boolean> = {};
    /** Observable for the currently active menu */
    public readonly menu = this._catering.menu;

    public readonly addOption = (item) => this._catering.addOption(item);

    public readonly editOption = (item, option) =>
        this._catering.addOption(item, option);

    public readonly removeOption = (item, option) =>
        this._catering.deleteOption(item, option);

    public readonly editItem = (item) => this._catering.addItem(item);

    public readonly removeItem = (item) => this._catering.deleteItem(item);

    public get filters() {
        return this._orders.filters;
    }

    public get can_edit() {
        return this._catering.is_editable;
    }
    public get categories() {
        return this._catering.categories;
    }

    constructor(
        private _catering: CateringStateService,
        private _orders: CateringOrdersService
    ) {}

    public isEnabled(item: CateringItem) {
        return !item.hide_for_zones.includes(this._catering.zone);
    }

    public setEnabled(item: CateringItem, state: boolean) {
        let list = item.hide_for_zones;
        if (!state) list = unique([...list, this._catering.zone]);
        else list = list.filter((_) => _ !== this._catering.zone);
        this._catering.updateItem(
            new CateringItem({ ...item, hide_for_zones: list })
        );
    }
}
