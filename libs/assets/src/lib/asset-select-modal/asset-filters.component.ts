import { Component, Input } from '@angular/core';
import { Asset } from '../asset.class';
import { AssetStateService } from '../asset-state.service';

@Component({
    selector: 'asset-filters',
    template: `
        <div class="px-4 mt-3 mb-2" [class.sm:hidden]="!search">
            <mat-form-field appearance="outline" class="w-full h-14">
                <app-icon matPrefix class="text-xl">search</app-icon>
                <input
                    matInput
                    [ngModel]="search_value | async"
                    (ngModelChange)="setSearch($event)"
                    placeholder="Search menu..."
                />
            </mat-form-field>
        </div>
        <h3 class="hidden sm:block font-medium px-2 py-4" *ngIf="!search" i18n>
            Catergories
        </h3>
        <div
            class="flex flex-col px-2"
            [class.sm:hidden]="search"
            [class.sm:pt-1]="!search"
        >
            <mat-checkbox
                *ngFor="let item of categories | async"
                [attr.name]="item"
                [ngModel]="(category | async) === item.id"
                (ngModelChange)="toggleCategory(item.id)"
            >
                {{ item.name }}
            </mat-checkbox>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                min-width: 16rem;
            }
        `,
    ],
})
export class AssetFiltersComponent {
    @Input() public search = false;

    public readonly search_value = this._state.search;
    public readonly category = this._state.category;
    public readonly categories = this._state.category_list;

    public readonly setSearch = (s) => this._state.setSearch(s);
    public readonly toggleCategory = (c) => this._state.toggleCategory(c);

    constructor(private _state: AssetStateService) {}
}
