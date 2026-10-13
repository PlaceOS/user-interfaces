import { CommonModule } from '@angular/common';
import {
    Component,
    effect,
    ElementRef,
    inject,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

import { ExploreSearchService } from '@placeos/explore';
import { ScheduleStateService } from '../schedule/schedule-state.service';

@Component({
    selector: 'global-search',
    template: `
        <div class="relative h-full w-12">
            <button
                icon
                name="global-search"
                matRipple
                class="bg-base-200 h-10 w-10 rounded-full"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
            </button>
            <div
                search
                class="border-neutral bg-base-100 absolute top-1/2 right-2 z-50 flex h-12 w-[calc(100vw-4rem)] -translate-y-1/2 items-center space-x-2 rounded-[24px] border-2 px-2 shadow-sm sm:w-lg"
                [ngClass]="{
                    'opacity-100': show(),
                    'opacity-0': !show(),
                    'pointer-events-none': !show(),
                    open: show(),
                }"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
                <input
                    #input
                    [placeholder]="'APP.WORKPLACE.GLOBAL_SEARCH' | translate"
                    class="w-1/2 flex-1 py-2 outline-hidden"
                    [(ngModel)]="filter_str"
                    (ngModelChange)="setFilter($event)"
                    (blur)="hideInput()"
                />
                @if (loading()) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
            </div>
            @if (filter_str()) {
                <div
                    search
                    class="border-base-200 bg-base-100 absolute right-2 bottom-0 flex max-h-[40vh] w-[calc(100vw-4rem)] translate-y-[calc(100%-1rem)] flex-col items-center overflow-auto rounded-b border pt-4 shadow-sm sm:w-lg"
                    [ngClass]="{
                        'opacity-100': show(),
                        'opacity-0': !show(),
                        'pointer-events-none': !show(),
                        open: show(),
                    }"
                >
                    @if (!results().length && filter_str()) {
                        <div empty class="w-full p-4 text-center opacity-60">
                            {{ 'COMMON.SEARCH_EMPTY' | translate }}
                        </div>
                    } @else {
                        @if (!results().length) {
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
                    @if (!loading() && filter_str()) {
                        @for (
                            option of results() | slice: 0 : 100;
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
                                class="hover:bg-base-200 flex h-14 min-h-14 w-full items-center px-4 py-2 leading-tight"
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
                                    class="bg-secondary text-secondary-content rounded-sm p-2 text-xs font-medium text-white capitalize"
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
                clip-path: inset(0 0 0 calc(100% - 3rem) round 24px);
                transition:
                    clip-path 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
                    opacity 160ms ease-out;
            }

            [search].open {
                clip-path: inset(0 0 0 0 round 24px);
            }

            @media (prefers-reduced-motion: reduce) {
                [search] {
                    transition: none;
                }
            }
        `,
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslatePipe,
        IconComponent,
        FormsModule,
        MatProgressSpinnerModule,
    ],
})
export class GlobalSearchComponent extends AsyncHandler implements OnInit {
    private _service = inject(ExploreSearchService);
    private _schedule = inject(ScheduleStateService);

    public readonly results = this._service.global_search_results;
    public readonly loading = this._service.loading;
    public readonly show = signal(false);

    public readonly filter_str = signal('');

    public readonly setFilter = (s) =>
        s instanceof Object
            ? this.filter_str.set('')
            : this._service.setFilter(s);

    public readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');

    constructor() {
        super();
        effect(() => {
            const in_progress = this._schedule.bookings().filter((b) => {
                const state = b.state;
                return state === 'in_progress' || state === 'started';
            });
            this._service.setInProgressBookings(in_progress);
        });
    }

    public ngOnInit() {}

    public showInput() {
        this.show.set(true);
        this._input_el().nativeElement.focus();
        this.clearTimeout('close');
    }

    public hideInput() {
        this.timeout('close', () => this.show.set(false));
    }
}
