import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass } from '@user-interfaces/common';

import { ExploreSearchService } from './explore-search.service';

export interface SearchResult {
    id: string;
    type: 'feature' | 'space' | 'user';
    name: string;
    description: string;
}

@Component({
    selector: 'explore-search',
    template: `
        <div class="fixed inset-0 z-0" [class.hide]="!show" (click)="show = false"></div>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="bg-white m-2 flex items-center z-10 relative overflow-hidden"
            [class.show]="show || search_str"
        >
            <app-icon
                class="text-2xl"
                tabindex="0"
                (click)="show ? closeSearch($event) : showSearch()"
                className="material-icons"
            >
                {{ show || search_str ? 'close' : 'search' }}
            </app-icon>
            <input
                #input
                class="flex-1 text-base"
                [(ngModel)]="search_str"
                (ngModelChange)="setItem($event)"
                placeholder="Search for..."
                (blur)="show = !!search_str"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            <mat-spinner *ngIf="loading | async" class="mr-2" [diameter]="32"></mat-spinner>
            <div
                name="anchor"
                class="absolute bottom-0"
                matAutocompleteOrigin
                #origin="matAutocompleteOrigin"
            ></div>
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of results | async" [value]="option">
                <div class="flex items-center leading-tight">
                    <div class="flex-1 overflow-hidden">
                        <div class="truncate w-full">{{ option.name }}</div>
                        <div class="text-xs">{{ option.description }}</div>
                    </div>
                    <div class="text-xs font-bold p-2 capitalize text-white bg-gray-500 rounded">
                        {{ option.type }}
                    </div>
                </div>
            </mat-option>
        </mat-autocomplete>
    `,
    styles: [
        `
            :host {
                z-index: 99;
            }

            [role='search'] {
                height: 3.125rem;
                width: 3.125rem;
                border-radius: 1.5rem;
                border: 1px solid #ccc;
                outline: none;
                transition: width 200ms;
            }

            app-icon {
                outline: none;
                margin: .55rem;
            }

            [role='search'].show {
                width: 32rem;
                max-width: calc(100vw - 1rem);
                border-color: #1e88e5;
            }

            [name='anchor'] {
                left: 2rem;
                right: 2rem;
            }

            input {
                border: none;
                outline: none;
            }

            .hide {
                display: none;
            }
        `,
    ],
})
export class ExploreSearchComponent extends BaseClass {
    public show: boolean = false;
    public search_str: string = '';
    public readonly results = this._search.search_results;
    public readonly loading = this._search.loading;
    public readonly setFilter = (s) => this._search.setFilter(s);
    public readonly setItem = (i) => (i instanceof Object ? this.select(i) : this.setFilter(i));

    @ViewChild('input') private _input_el: ElementRef<HTMLInputElement>;

    constructor(
        private _search: ExploreSearchService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public showSearch() {
        this.show = true;
        if (this._input_el?.nativeElement) {
            this.timeout('focus', () => this._input_el.nativeElement.focus(), 200);
        }
    }

    public closeSearch(e?: any) {
        this.show = false;
        this.search_str = '';
        if (this._input_el?.nativeElement) {
            this._input_el.nativeElement.focus();
            this._input_el.nativeElement.blur();
        }
    }

    public select(item: SearchResult) {
        this.search_str = item.name;
        const query: any = {};
        query[item.type || 'space'] = item.id;
        this._router.navigate([], { relativeTo: this._route, queryParams: query });
    }
}
