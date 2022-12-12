import { Component, Input } from '@angular/core';
import { unique } from '@placeos/common';

import { CateringItem } from './catering-item.class';
import { CateringStateService } from './catering-state.service';
import { CateringOption } from './catering.interfaces';

@Component({
    selector: '[catering-menu-item]',
    template: `
        <div
            class="w-full h-full bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500 overflow-hidden rounded"
        >
            <div item class="flex items-center px-2" *ngIf="item">
                <mat-checkbox
                    class="mr-2"
                    matTooltip="Allow Ordering Item"
                    [(ngModel)]="is_enabled"
                ></mat-checkbox>
                <div class="flex items-center p-2 flex-1">
                    <div class="flex-1">
                        <div>{{ item.name }}</div>
                        <div class="text-xs opacity-60">
                            {{ item.category }}
                        </div>
                    </div>
                    <div
                        class="p-2 m-2 text-xs font-bold text-white rounded bg-primary"
                    >
                        {{ item.unit_price / 100 | currency: (symbol | async) }}
                    </div>
                </div>
                <button
                    mat-icon-button
                    [matMenuTriggerFor]="menu"
                    *ngIf="can_edit"
                >
                    <app-icon>more_vert</app-icon>
                </button>
                <button
                    mat-icon-button
                    [disabled]="!item.options.length"
                    (click)="show_options = !show_options"
                >
                    <app-icon>expand_more</app-icon>
                </button>
            </div>
            <div
                options
                *ngIf="item"
                class="bg-gray-100 dark:bg-neutral-700 overflow-hidden"
                [style.height]="
                    show_options ? item.options.length * 3.5 + 'rem' : '0'
                "
            >
                <div
                    class="flex p-2 items-center border-t border-solid border-gray-300 dark:border-neutral-500 relative"
                    *ngFor="let option of item.options"
                >
                    <div
                        class="absolute inset-y-0 left-0 w-2 bg-gray-400 dark:bg-neutral-600"
                    ></div>
                    <div class="flex-1 pl-4 pr-2">
                        <div class="text">{{ option.name }}</div>
                        <div class="text-xs opacity-60">
                            {{ option.group }}
                        </div>
                    </div>
                    <button
                        edit
                        mat-icon-button
                        class="mx-2"
                        (click)="editOption(option)"
                        *ngIf="can_edit"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button
                        remove
                        mat-icon-button
                        class="mx-2"
                        (click)="removeOption(option)"
                        *ngIf="can_edit"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                </div>
            </div>
            <mat-menu #menu="matMenu">
                <button
                    mat-menu-item
                    class="flex items-center"
                    (click)="addOption()"
                >
                    <app-icon>add</app-icon>
                    <div class="ml-2">Add Option</div>
                </button>
                <button
                    mat-menu-item
                    class="flex items-center"
                    (click)="editItem()"
                >
                    <app-icon>edit</app-icon>
                    <div class="ml-2">Edit Item</div>
                </button>
                <button
                    mat-menu-item
                    class="flex items-center"
                    (click)="removeItem()"
                >
                    <app-icon>delete</app-icon>
                    <div class="ml-2">Remove Item</div>
                </button>
            </mat-menu>
        </div>
    `,
    styles: [
        `
            :host {
                overflow: hidden;
                width: 48rem;
                margin: 0.5rem auto;
                max-width: calc(100vw - 1rem);
            }

            button[mat-menu-item] {
                display: flex;
            }

            [options] {
                transition: height 200ms;
            }
        `,
    ],
})
export class CateringMenuItemComponent {
    /** Item to display */
    @Input() public item: CateringItem;
    /** Whether to show item options */
    public show_options = false;

    public readonly addOption = () => this._catering.addOption(this.item);

    public readonly editOption = (option: CateringOption) =>
        this._catering.addOption(this.item, option);

    public readonly removeOption = (option: CateringOption) =>
        this._catering.deleteOption(this.item, option);

    public readonly editItem = () => this._catering.addItem(this.item);

    public readonly removeItem = () => this._catering.deleteItem(this.item);

    public get can_edit() {
        return this._catering.is_editable;
    }

    public get is_enabled() {
        return !this.item.hide_for_zones.includes(this._catering.zone);
    }

    public set is_enabled(state: boolean) {
        let list = this.item.hide_for_zones;
        if (!state) list = unique([...list, this._catering.zone]);
        else list = list.filter((_) => _ !== this._catering.zone);
        this._catering.updateItem(
            new CateringItem({ ...this.item, hide_for_zones: list })
        );
    }

    /** Currency symbol for active menu */
    public get symbol() {
        return this._catering.currency;
    }

    constructor(private _catering: CateringStateService) {}
}
