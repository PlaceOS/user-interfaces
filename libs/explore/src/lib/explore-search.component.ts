import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass } from '@placeos/common';

import { ExploreSearchService, SearchResult } from './explore-search.service';

@Component({
    selector: 'explore-search',
    template: `
        <div
            role="search"
            tabindex="0"
            matRipple
            class="bg-white m-2 flex items-center z-10 relative overflow-hidden outline-none"
            [class.show]="show || search_str"
       > 
            <app-icon
                class="text-2xl outline-none"
                tabindex="0"
                (click)="show ? closeSearch($event) : showSearch()"
            >
                {{ show || search_str ? 'close' : 'search' }}
            </app-icon>
            <input
                #input
                keyboard
                class="flex-1 text-base border-none outline-none"
                [(ngModel)]="search_str"
                (ngModelChange)="setItem($event)"
                placeholder="Search for..."
                i18n-placeholder
                (blur)="show = !!search_str"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            <mat-spinner
                *ngIf="loading | async"
                class="mr-2"
                [diameter]="32"
            ></mat-spinner>
            <div
                class="absolute bottom-0 left-8 right-8 min-w-[20rem]"
                matAutocompleteOrigin
                #origin="matAutocompleteOrigin"
            ></div>
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            <ng-container
                *ngIf="(loading | async) !== true && (show || search_str)"
            >
                <mat-option
                    *ngIf="!(results | async)?.length"
                    class="pointer-events-none"
                    i18n
                >
                    No matches found
                </mat-option>
                <mat-option
                    *ngFor="let option of results | async | slice: 0:5"
                    [value]="option"
                >
                    <div class="flex items-center leading-tight">
                        <div class="flex-1 overflow-hidden">
                            <div class="truncate w-full">{{ option.name }}</div>
                            <div class="text-xs">{{ option.description }}</div>
                        </div>
                        <div
                            class="text-xs font-bold p-2 capitalize text-white bg-gray-500 rounded"
                        >
                            {{ option.type }}
                        </div>
                    </div>
                </mat-option>
            </ng-container>
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
                transition: width 200ms;
            }

            app-icon {
                margin: 0.55rem;
            }

            [role='search'].show {
                width: 32rem;
                max-width: calc(100vw - 1rem);
                border-color: #1e88e5;
            }
        `,
    ],
})
export class ExploreSearchComponent extends BaseClass {
    public show = false;
    public search_str = '';
    public readonly results = this._search.search_results;
    public readonly loading = this._search.loading;
    public readonly setFilter = (s) => this._search.setFilter(s);
    public readonly setItem = (i) =>
        i instanceof Object ? this.select(i) : this.setFilter(i);

    @ViewChild('input') private _input_el: ElementRef<HTMLInputElement>;

    @HostListener('document:click', ['$event'])
    public checkClick(event) {
        if (!this._el?.nativeElement?.contains(event.target)) {
            this.show = false;
            this._input_el?.nativeElement?.blur();
        }
    }

    @HostListener('document:touchstart', ['$event']) public onTouch = (e) =>
        this.checkClick(e);

    constructor(
        private _el: ElementRef<HTMLElement>,
        private _search: ExploreSearchService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public showSearch() {
        this.show = true;
        if (this._input_el?.nativeElement) {
            this.timeout(
                'focus',
                () => this._input_el.nativeElement.focus(),
                300
            );
        }
    }

    public closeSearch(e?: any) {
        this.show = false;
        this.search_str = '';
        this.setFilter('');
        if (this._input_el?.nativeElement) {
            this._input_el.nativeElement.focus();
            this._input_el.nativeElement.blur();
        }
    }

    public select(item: SearchResult) {
        this.search_str = item.name;
        const query: any = {};
        const type =
            item.type === 'space'
                ? 'space'
                : item.type === 'feature'
                ? 'feature'
                : 'user';
        query[type] = item.id;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: query,
        });
    }
}
