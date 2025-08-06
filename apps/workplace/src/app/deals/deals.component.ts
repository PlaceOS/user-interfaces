import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstTruthyValueFrom, SettingsService, unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DealsService } from './deals.service';

@Component({
    selector: 'deals-n-offers',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-auto">
            <topbar />
            <main
                class="min-h-1/2 flex h-1/2 flex-1 flex-col overflow-auto bg-base-200 px-4"
            >
                @let deal_list = filtered_deals$ | async;
                <div
                    class="sticky top-0 z-20 mx-auto mb-2 w-[40rem] max-w-full bg-base-200 px-2 pt-2"
                >
                    <div class="-mx-2 flex flex-wrap py-2">
                        @let type_list = types | async;
                        <button
                            matRipple
                            class="m-1 rounded-full border border-base-300 px-4 py-1"
                            [class.bg-base-100]="type.value === ''"
                            (click)="type.next('')"
                        >
                            {{ 'COMMON.ALL' | translate }}
                        </button>
                        @for (t of type_list; track t) {
                            <button
                                matRipple
                                class="m-1 rounded-full border border-base-300 px-4 py-1"
                                [class.bg-base-100]="type.value === t"
                                (click)="type.next(t)"
                            >
                                {{ t }}
                            </button>
                        }
                    </div>
                    <div class="flex items-center justify-between text-base">
                        <div>
                            {{
                                'APP.WORKPLACE.DEAL_COUNT'
                                    | translate
                                        : { count: deal_list.length }
                                        : deal_list.length
                            }}
                        </div>
                        <button
                            matRipple
                            class="flex items-center rounded p-2"
                            [matMenuTriggerFor]="sortMenu"
                        >
                            <div>
                                @let sort_t = sort_type.getValue();
                                {{
                                    (sort_t === 'date_desc'
                                        ? 'APP.WORKPLACE.SORT_BY_DATE_DESC'
                                        : sort_t === 'date_asc'
                                          ? 'APP.WORKPLACE.SORT_BY_DATE_ASC'
                                          : 'APP.WORKPLACE.SORT_BY_RELEVANCE'
                                    ) | translate
                                }}
                            </div>
                            <icon class="ml-2 text-xl"
                                >keyboard_arrow_down</icon
                            >
                        </button>
                        <mat-menu #sortMenu="matMenu">
                            <button mat-menu-item (click)="sort('relevance')">
                                {{
                                    'APP.WORKPLACE.SORT_BY_RELEVANCE'
                                        | translate
                                }}
                            </button>
                            <button mat-menu-item (click)="sort('date_desc')">
                                {{
                                    'APP.WORKPLACE.SORT_BY_DATE_DESC'
                                        | translate
                                }}
                            </button>
                            <button mat-menu-item (click)="sort('date_asc')">
                                {{
                                    'APP.WORKPLACE.SORT_BY_DATE_ASC' | translate
                                }}
                            </button>
                        </mat-menu>
                    </div>
                </div>
                <div
                    class="mx-auto mb-4 grid w-[40rem] max-w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3"
                >
                    @for (deal of deal_list; track deal.id) {
                        <div>
                            <button
                                class="flex w-full flex-col items-center overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow"
                                (click)="view(deal)"
                            >
                                <div
                                    class="relative h-48 w-full max-w-full overflow-hidden rounded-b-lg bg-base-300"
                                >
                                    @if (deal.image) {
                                        <img
                                            auth
                                            [source]="deal.image"
                                            alt="Deal Image"
                                            class="h-full w-full object-cover"
                                        />
                                    }
                                    @if (deal.details) {
                                        <div
                                            class="absolute bottom-2 left-2 max-w-full truncate rounded bg-info px-2 py-1 text-xs text-info-content shadow"
                                        >
                                            {{ deal.details }}
                                        </div>
                                    }
                                </div>
                                <div class="w-full px-4 py-2 text-left">
                                    <h3 class="truncate font-bold">
                                        {{ deal.name }}
                                    </h3>
                                    <p class="text-sm opacity-50">
                                        {{
                                            'COMMON.VALID_UNTIL_DATE'
                                                | translate
                                                    : {
                                                          date:
                                                              deal.expires_at
                                                              | date
                                                                  : 'mediumDate',
                                                      }
                                        }}
                                    </p>
                                </div>
                            </button>
                        </div>
                    }
                    @if (deal_list?.length <= 0) {
                        <div
                            class="col-span-6 flex w-full flex-col items-center justify-center rounded-lg bg-base-200 p-16"
                        >
                            <img
                                src="assets/icons/no-deals.svg"
                                alt="No Deals or Offers Available"
                                class="mb-8 w-48"
                            />
                            <div
                                class="flex flex-col items-center space-y-4 text-center"
                            >
                                <p class="text-lg font-bold">
                                    {{
                                        'APP.WORKPLACE.DEALS_EMPTY_TITLE'
                                            | translate
                                    }}
                                </p>
                                <p class="text-sm opacity-50">
                                    {{
                                        'APP.WORKPLACE.DEALS_EMPTY_BODY'
                                            | translate
                                    }}
                                </p>
                                <button btn matRipple>
                                    <icon>refresh</icon>
                                    <div>
                                        {{ 'COMMON.REFRESH' | translate }}
                                    </div>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </main>
            <footer-menu />
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class DealsComponent implements OnInit {
    private _service = inject(DealsService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);

    public readonly deals$ = this._service.deals$;
    public readonly types = this._service.deals$.pipe(
        map((deals) =>
            unique(deals.map((_) => _.type).sort((a, b) => a.localeCompare(b))),
        ),
    );
    public readonly type = new BehaviorSubject('');
    public readonly sort_type = new BehaviorSubject('');
    public readonly filtered_deals$ = combineLatest([
        this.deals$,
        this.type,
        this.sort_type,
    ]).pipe(
        map(([deals, type, sort_type]) =>
            deals
                .filter((deal) => !type || deal.type === type)
                .sort((a, b) =>
                    sort_type === 'date_asc'
                        ? a.expires_at - b.expires_at
                        : sort_type === 'date_desc'
                          ? b.expires_at - a.expires_at
                          : 0,
                ),
        ),
    );
    public readonly view = (d) => this._service.viewDeal(d);

    public sort(type: string) {
        this.sort_type.next(type);
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        await firstTruthyValueFrom(this._settings.initialised);
        const has_deals = (this._settings.get('app.features') || []).includes(
            'deals-n-offers',
        );
        if (!has_deals) this._router.navigate(['/']);
    }
}
