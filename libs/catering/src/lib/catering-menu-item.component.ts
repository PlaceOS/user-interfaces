import { Component, Input } from '@angular/core';

import { CateringItem } from './catering-item.class';
import { CateringStateService } from './catering-state.service';
import { CateringOption } from './catering.interfaces';

@Component({
    selector: '[catering-menu-item]',
    template: `
        <div item class="flex items-center px-2" *ngIf="item">
            <div class="flex items-center p-2 flex-1">
                <div class="flex-1">
                    <div>{{ item.name }}</div>
                    <div class="text-xs text-dark-fade">
                        {{ item.category }}
                    </div>
                </div>
                <div
                    class="p-2 m-2 text-xs font-bold text-white rounded bg-primary"
                >
                    {{ item.unit_price / 100 | currency: (symbol | async) }}
                </div>
            </div>
            <button mat-icon-button [matMenuTriggerFor]="menu">
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
            class="bg-gray-100 overflow-hidden"
            [style.height]="
                show_options ? item.options.length * 3.5 + 'rem' : '0'
            "
        >
            <div
                class="flex p-2 items-center border-none border-t border-solid border-gray-300"
                *ngFor="let option of item.options"
            >
                <div class="flex-1 px-2">
                    <div class="text">{{ option.name }}</div>
                    <div class="text-xs text-dark-fade">{{ option.group }}</div>
                </div>
                <button
                    edit
                    mat-icon-button
                    class="mx-2"
                    (click)="editOption(option)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    remove
                    mat-icon-button
                    class="mx-2"
                    (click)="removeOption(option)"
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
    `,
    styles: [
        `
            :host {
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 0.25rem;
                overflow: hidden;
                width: 768px;
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

    /** Currency symbol for active menu */
    public get symbol() {
        return this._catering.currency;
    }

    constructor(private _catering: CateringStateService) {}
}
