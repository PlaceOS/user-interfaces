import { Component } from '@angular/core';

import { ExploreSearchService } from '@placeos/explore';

@Component({
    selector: 'global-search',
    template: `
        <div
            container
            class="flex items-center rounded focus-within:shadow focus:shadow w-full px-2 relative"
        >
            <app-icon class="text-2xl">search</app-icon>
            <input
                #input
                placeholder="Search for people or spaces..."
                class="flex-1 w-1/2 py-2 outline-none"
                [(ngModel)]="filter_str"
                (ngModelChange)="setFilter($event)"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            <mat-spinner *ngIf="loading | async" [diameter]="32"></mat-spinner>
            <div
                class="absolute bottom-0 left-2 right-2 min-w-[20rem]"
                matAutocompleteOrigin
                #origin="matAutocompleteOrigin"
            ></div>
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            <ng-container *ngIf="(loading | async) !== true && filter_str">
                <mat-option
                    *ngIf="!(results | async)?.length"
                    class="pointer-events-none"
                >
                    No matches found
                </mat-option>
                <mat-option
                    *ngFor="let option of results | async | slice: 0:5"
                    [value]="option"
                >
                    <a
                        [routerLink]="['/explore']"
                        [queryParams]="
                            option.type === 'space'
                                ? { space: option.id }
                                : { email: option.id }
                        "
                        class="w-full h-full flex items-center leading-tight"
                    >
                        <div class="flex-1 overflow-hidden">
                            <div class="truncate w-full">
                                {{ option.name }}
                            </div>
                            <div class="text-xs">
                                {{ option.description }}
                            </div>
                        </div>
                        <div
                            class="text-xs font-bold p-2 capitalize text-white bg-gray-500 rounded"
                        >
                            {{ option.type }}
                        </div>
                    </a>
                </mat-option>
            </ng-container>
        </mat-autocomplete>
    `,
    styles: [
        `
            [container] {
                transition: color 200ms, background-color 200ms;
                background-color: #fff4;
                color: #fff8;
            }

            [container]:focus,
            [container]:focus-within {
                background-color: #fff;
                color: #000;
                outline: var(--primary);
            }

            input::placeholder {
                color: #fff8;
            }

            input:focus ::placeholder {
                color: #0008;
            }
        `,
    ],
})
export class GlobalSearchComponent {
    public readonly results = this._service.search_results;
    public readonly loading = this._service.loading;

    public filter_str = '';

    public readonly setFilter = (s) =>
        s instanceof Object
            ? (this.filter_str = '')
            : this._service.setFilter(s);

    constructor(private _service: ExploreSearchService) {}
}
