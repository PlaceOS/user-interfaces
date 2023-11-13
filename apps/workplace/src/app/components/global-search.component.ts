import { Component, ElementRef, ViewChild } from '@angular/core';
import { AsyncHandler } from '@placeos/common';

import { ExploreSearchService } from '@placeos/explore';

@Component({
    selector: 'global-search',
    template: `
        <div class="h-full w-12 relative">
            <button
                icon
                name="global-search"
                matRipple
                class="h-10 w-10 rounded-full bg-base-200"
                (click)="showInput()"
            >
                <app-icon class="text-2xl">search</app-icon>
            </button>
            <div
                search
                class="flex items-center absolute top-1/2 right-2 -translate-y-1/2 max-w-[calc(100vw-4rem)] bg-base-100 shadow h-12 px-2 rounded-[24px] space-x-2 border-2 border-neutral z-50"
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
                    (blur)="hideInput()"
                />
                <mat-spinner
                    *ngIf="loading | async"
                    [diameter]="32"
                ></mat-spinner>
            </div>
            <div
                search
                class="flex flex-col items-center absolute bottom-0 right-2 translate-y-[calc(100%-1rem)] max-w-[calc(100vw-4rem)] bg-base-100 shadow rounded-b pt-4 overflow-hidden border border-base-200"
                [ngClass]="{
                    'w-[32rem]': show,
                    'w-px': !show,
                    'opacity-100': show,
                    'opacity-0': !show,
                    'pointer-events-none': !show
                }"
            >
                <div
                    empty
                    class="p-4 w-full text-center opacity-60"
                    *ngIf="
                        !(results | async)?.length && filter_str;
                        else empty_state
                    "
                    i18n
                >
                    No matches found.
                </div>
                <ng-container *ngIf="!(loading | async) && filter_str">
                    <a
                        matRipple
                        *ngFor="let option of results | async | slice: 0:5"
                        [routerLink]="['/explore']"
                        [queryParams]="
                            option.type === 'space'
                                ? { space: option.id }
                                : option.type === 'user' || option.is_role
                                ? { user: option.id }
                                : {
                                      locate: option.id,
                                      name: option.name,
                                      zone: option.zone
                                  }
                        "
                        class="w-full h-full flex items-center leading-tight p-4 hover:bg-neutral:bg-base-100/5"
                    >
                        <div class="flex-1 overflow-hidden">
                            <div class="truncate w-full">
                                {{ option.name }}
                            </div>
                            <div class="text-xs opacity-60">
                                {{ option.description }}
                            </div>
                        </div>
                        <div
                            class="text-xs font-medium p-2 capitalize text-white bg-secondary text-secondary-content rounded"
                        >
                            {{ option.type }}
                        </div>
                    </a>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                empty
                *ngIf="!(results | async)?.length"
                class="p-4 w-full text-center opacity-60"
                i18n
            >
                Start typing to search...
            </div>
        </ng-template>
    `,
    styles: [
        `
            [search] {
                transition: width 200ms, opacity 200ms;
            }
        `,
    ],
})
export class GlobalSearchComponent extends AsyncHandler {
    public readonly results = this._service.search_results;
    public readonly loading = this._service.loading;
    public show = false;

    public filter_str = '';

    public readonly setFilter = (s) =>
        s instanceof Object
            ? (this.filter_str = '')
            : this._service.setFilter(s);

    @ViewChild('input') public _input_el: ElementRef<HTMLInputElement>;

    constructor(private _service: ExploreSearchService) {
        super();
    }

    public showInput() {
        this.show = true;
        this._input_el.nativeElement.focus();
        this.clearTimeout('close');
    }

    public hideInput() {
        this.timeout('close', () => (this.show = false));
    }
}
