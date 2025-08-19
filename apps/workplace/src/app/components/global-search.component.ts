import {
    Component,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';

import { ExploreSearchService } from '@placeos/explore';

@Component({
    selector: 'global-search',
    template: `
        <div class="relative h-full w-12">
            <button
                icon
                name="global-search"
                matRipple
                class="h-10 w-10 rounded-full bg-base-200"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
            </button>
            <div
                search
                class="absolute right-2 top-1/2 z-50 flex h-12 max-w-[calc(100vw-4rem)] -translate-y-1/2 items-center space-x-2 rounded-[24px] border-2 border-neutral bg-base-100 px-2 shadow"
                [ngClass]="{
                    'w-[32rem]': show(),
                    'w-px': !show(),
                    'opacity-100': show(),
                    'opacity-0': !show(),
                    'pointer-events-none': !show(),
                }"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
                <input
                    #input
                    [placeholder]="'APP.WORKPLACE.GLOBAL_SEARCH' | translate"
                    class="w-1/2 flex-1 py-2 outline-none"
                    [(ngModel)]="filter_str"
                    (ngModelChange)="setFilter($event)"
                    (blur)="hideInput()"
                />
                @if (loading | async) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
            </div>
            @if (filter_str()) {
                <div
                    search
                    class="absolute bottom-0 right-2 flex max-h-[40vh] max-w-[calc(100vw-4rem)] translate-y-[calc(100%-1rem)] flex-col items-center overflow-auto rounded-b border border-base-200 bg-base-100 pt-4 shadow"
                    [ngClass]="{
                        'w-[32rem]': show(),
                        'w-px': !show(),
                        'opacity-100': show(),
                        'opacity-0': !show(),
                        'pointer-events-none': !show(),
                    }"
                >
                    @if (!(results | async)?.length && filter_str()) {
                        <div empty class="w-full p-4 text-center opacity-60">
                            {{
                                'APP.WORKPLACE.GLOBAL_SEARCH_EMPTY' | translate
                            }}
                        </div>
                    } @else {
                        @if (!(results | async)?.length) {
                            <div
                                empty
                                class="w-full p-4 text-center opacity-60"
                            >
                                {{
                                    'APP.WORKPLACE.GLOBAL_SEARCH_START'
                                        | translate
                                }}
                            </div>
                        }
                    }
                    @if (!(loading | async) && filter_str()) {
                        @for (
                            option of results | async | slice: 0 : 100;
                            track option.id + $index
                        ) {
                            <a
                                matRipple
                                [routerLink]="['/explore']"
                                [queryParams]="
                                    option.type === 'space'
                                        ? { space: option.id }
                                        : option.type === 'user' ||
                                            option.is_role
                                          ? { user: option.id }
                                          : {
                                                locate: option.id,
                                                name: option.name,
                                                zone: option.zone,
                                            }
                                "
                                class="flex h-14 min-h-14 w-full items-center px-4 py-2 leading-tight hover:bg-base-200"
                            >
                                <div class="flex-1 overflow-hidden">
                                    <div class="w-full truncate">
                                        {{ option.name }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        {{ option.description }}
                                    </div>
                                </div>
                                <div
                                    class="rounded bg-secondary p-2 text-xs font-medium capitalize text-secondary-content text-white"
                                >
                                    {{ option.type }}
                                </div>
                            </a>
                        }
                    }
                </div>
            }
        </div>
    `,
    styles: [
        `
            [search] {
                transition:
                    width 200ms,
                    opacity 200ms;
            }
        `,
    ],
    standalone: false,
})
export class GlobalSearchComponent extends AsyncHandler {
    private _service = inject(ExploreSearchService);

    public readonly results = this._service.search_results;
    public readonly loading = this._service.loading;
    public readonly show = signal(false);

    public readonly filter_str = signal('');

    public readonly setFilter = (s) =>
        s instanceof Object
            ? this.filter_str.set('')
            : this._service.setFilter(s);

    public readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');

    public showInput() {
        this.show.set(true);
        this._input_el().nativeElement.focus();
        this.clearTimeout('close');
    }

    public hideInput() {
        this.timeout('close', () => this.show.set(false));
    }
}
