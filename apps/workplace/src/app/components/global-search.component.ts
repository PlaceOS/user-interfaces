import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseClass } from '@placeos/common';

import { ExploreSearchService } from '@placeos/explore';

@Component({
    selector: 'global-search',
    template: `
        <div
            class="h-full w-12 relative"
        >
            <button mat-icon-button class="text-black h-10 w-10 rounded-full bg-gray-200" (click)="showInput()">
                <app-icon class="text-2xl">search</app-icon>
            </button>
            <div 
                search
                class="flex items-center absolute top-1/2 right-2 -translate-y-1/2 max-w-[calc(100vw-4rem)] bg-white shadow h-12 px-2 text-black rounded space-x-2"
                [ngClass]="{
                    'w-[32rem]': show,
                    'w-px': !show,
                    'opacity-100': show,
                    'opacity-0': !show,
                    'pointer-events-none': !show
                }"
                (click)="showInput()"
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
                    (blur)="hideInput()"
                />
                <mat-spinner *ngIf="loading | async" [diameter]="32"></mat-spinner>
                <div
                    class="absolute bottom-0 left-2 right-2 min-w-[20rem]"
                    matAutocompleteOrigin
                    #origin="matAutocompleteOrigin"
                ></div>
            </div>
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
                                : { user: option.id }
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
            [search] {
                transition: width 200ms, opacity 200ms;
            }

        `,
    ],
})
export class GlobalSearchComponent extends BaseClass {
    public readonly results = this._service.search_results;
    public readonly loading = this._service.loading;
    public show = false;

    public filter_str = '';

    public readonly setFilter = (s) =>
        s instanceof Object
            ? (this.filter_str = '')
            : this._service.setFilter(s);

    @ViewChild('input') public _input_el: ElementRef<HTMLInputElement>

    constructor(private _service: ExploreSearchService) {
        super();
    }

    public showInput() {
        this.show = true;
        this._input_el.nativeElement.focus();
        this.clearTimeout('close');
    }

    public hideInput() {
        this.timeout('close', () => this.show = false);
    }
}
