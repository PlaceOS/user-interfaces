import {
    Component,
    ElementRef,
    OnInit,
    inject,
    viewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { VirtualKeyboardComponent } from 'libs/components/src/lib/virtual-keyboard.component';
import { ExploreSearchService, SearchResult } from './explore-search.service';

@Component({
    selector: 'explore-search',
    template: `
        <button
            #button
            icon
            matRipple
            class="m-2 bg-base-200"
            (window:resize)="checkButtonPosition()"
            (click)="show ? closeSearch($event) : showSearch()"
        >
            <icon>{{ show || search_str ? 'close' : 'search' }}</icon>
        </button>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="absolute top-1/2 z-10 flex max-w-[calc(100vw-7rem)] -translate-y-1/2 items-center overflow-hidden bg-base-100 px-4 outline-none"
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
                class="flex-1 border-none text-base outline-none"
                [(ngModel)]="search_str"
                (ngModelChange)="setFilter($event)"
                [placeholder]="'COMMON.SEARCH' | translate"
                (focus)="cancelClear()"
                (blur)="clear()"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            @if (loading | async) {
                <mat-spinner class="mr-2" [diameter]="32"></mat-spinner>
            }
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            @if ((loading | async) !== true && (show || search_str)) {
                @if (!(results | async)?.length) {
                    <mat-option class="pointer-events-none">
                        {{ 'COMMON.SEARCH_EMPTY' | translate }}
                    </mat-option>
                }
                @for (
                    option of results | async | slice: 0 : 5;
                    track option.name
                ) {
                    <mat-option [value]="option.name" (click)="select(option)">
                        <div
                            class="flex w-[22rem] max-w-[calc(100vw-2rem)] items-center leading-tight"
                        >
                            <div class="w-1/2 flex-1 overflow-hidden">
                                <div class="w-full truncate">
                                    {{ option.name }}
                                </div>
                                <div class="text-xs">
                                    {{ option.description }}
                                </div>
                            </div>
                            <div
                                class="rounded bg-base-300 p-2 text-xs font-bold capitalize text-white"
                            >
                                {{ option.type }}
                            </div>
                        </div>
                    </mat-option>
                }
            }
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
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        VirtualKeyboardComponent,
        FormsModule,
    ],
})
export class ExploreSearchComponent extends AsyncHandler implements OnInit {
    private _el = inject<ElementRef<HTMLElement>>(ElementRef);
    private _search = inject(ExploreSearchService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public show = false;
    public search_str = '';
    public right_size = false;
    public readonly results = this._search.search_results;
    public readonly loading = this._search.loading;
    public readonly setFilter = (s) => this._search.setFilter(s);

    private readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');
    private readonly _button_el =
        viewChild<ElementRef<HTMLButtonElement>>('button');

    constructor() {
        super();
    }

    public ngOnInit() {
        this.checkButtonPosition();
    }

    public clear() {
        this.timeout('clear', () => {
            this.show = false;
            this.search_str = '';
            this.setFilter('');
        });
    }

    public cancelClear() {
        this.clearTimeout('clear');
    }

    public focusInput() {
        if (this._input_el()?.nativeElement) {
            this.timeout(
                'focus',
                () => this._input_el().nativeElement.focus(),
                300,
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
        const _input_el = this._input_el();
        if (_input_el?.nativeElement) {
            _input_el.nativeElement.focus();
            _input_el.nativeElement.blur();
        }
    }

    public select(item: SearchResult) {
        this.search_str = item.name;
        const query: any = {};
        const type =
            item.type === 'space'
                ? 'space'
                : item.type === 'feature'
                  ? 'locate'
                  : 'user';
        query[type] = item.id;
        if (type === 'locate') {
            query.name = item.name;
            query.zone = item.zone;
        }
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: query,
        });
        this.focusInput();
    }

    public checkButtonPosition() {
        const window_width = window.innerWidth;
        const button_rect =
            this._button_el().nativeElement.getBoundingClientRect();
        const x_center = button_rect.left + button_rect.width / 2;
        this.right_size = x_center > window_width / 2;
    }
}
