import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';

import { ExploreSearchService, SearchResult } from './explore-search.service';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'explore-search',
    template: `
        <button
            #button
            icon
            matRipple
            class="bg-base-200 m-2"
            (window:resize)="checkButtonPosition()"
            (click)="show ? closeSearch($event) : showSearch()"
        >
            <app-icon>{{ show || search_str ? 'close' : 'search' }}</app-icon>
        </button>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="absolute top-1/2 -translate-y-1/2 bg-base-100 flex items-center z-10 overflow-hidden outline-none px-4 max-w-[calc(100vw-7rem)]"
            [class.right-0]="right_size"
            [class.-translate-x-14]="right_size"
            [class.left-0]="!right_size"
            [class.translate-x-14]="!right_size"
            [class.show]="show || search_str"
            (click)="focusInput()"
            matAutocompleteOrigin
            #origin="matAutocompleteOrigin"
        >
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
                    <div
                        class="flex items-center leading-tight w-[22rem] max-w-[calc(100vw-2rem)]"
                    >
                        <div class="flex-1 w-1/2 overflow-hidden">
                            <div class="truncate w-full">{{ option.name }}</div>
                            <div class="text-xs">{{ option.description }}</div>
                        </div>
                        <div
                            class="text-xs font-bold p-2 capitalize text-white bg-base-300 rounded"
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
                position: relative;
            }

            [role='search'] {
                height: 3rem;
                width: 0;
                border-radius: 1.5rem;
                border: 1px solid var(--b3);
                transition: width 200ms opacity 200ms;
                opacity: 0;
                pointer-events: none;
            }

            [role='search'].show {
                width: 24rem;
                opacity: 1;
                pointer-events: auto;
            }
        `,
    ],
})
export class ExploreSearchComponent extends AsyncHandler {
    public show = false;
    public search_str = '';
    public right_size = false;
    public readonly results = this._search.search_results;
    public readonly loading = this._search.loading;
    public readonly setFilter = (s) => this._search.setFilter(s);
    public readonly setItem = (i) =>
        i instanceof Object ? this.select(i) : this.setFilter(i);

    @ViewChild('input') private _input_el: ElementRef<HTMLInputElement>;
    @ViewChild('button', { static: true })
    private _button_el: ElementRef<HTMLButtonElement>;

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

    public ngOnInit() {
        this.checkButtonPosition();
    }

    public focusInput() {
        if (this._input_el?.nativeElement) {
            this.timeout(
                'focus',
                () => this._input_el.nativeElement.focus(),
                300
            );
        }
    }

    public showSearch() {
        this.show = true;
        this.focusInput();
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

    public checkButtonPosition() {
        const window_width = window.innerWidth;
        const button_rect =
            this._button_el.nativeElement.getBoundingClientRect();
        const x_center = button_rect.left + button_rect.width / 2;
        this.right_size = x_center > window_width / 2;
    }
}
