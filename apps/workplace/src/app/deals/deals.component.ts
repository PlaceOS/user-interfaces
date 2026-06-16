import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import {
    firstTruthyValueFrom,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { DealsService } from './deals.service';

@Component({
    selector: 'deals-n-offers',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-auto">
            <topbar />
            <main
                class="bg-base-200 flex h-1/2 min-h-1/2 flex-1 flex-col overflow-auto px-4"
            >
                @let deal_list = filtered_deals();
                <div
                    class="bg-base-200 sticky top-0 z-20 mx-auto mb-2 w-160 max-w-full px-2 pt-2"
                >
                    <div class="-mx-2 flex flex-wrap py-2">
                        @let type_list = types();
                        <button
                            matRipple
                            class="border-base-300 m-1 rounded-full border px-4 py-1"
                            [class.bg-base-100]="type() === ''"
                            (click)="type.set('')"
                        >
                            {{ 'COMMON.ALL' | translate }}
                        </button>
                        @for (t of type_list; track t) {
                            <button
                                matRipple
                                class="border-base-300 m-1 rounded-full border px-4 py-1"
                                [class.bg-base-100]="type() === t"
                                (click)="type.set(t)"
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
                            class="flex items-center rounded-sm p-2"
                            [matMenuTriggerFor]="sortMenu"
                        >
                            <div>
                                @let sort_t = sort_type();
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
                    class="mx-auto mb-4 grid w-160 max-w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3"
                >
                    @for (deal of deal_list; track deal.id) {
                        <div>
                            <button
                                class="border-base-300 bg-base-100 flex w-full flex-col items-center overflow-hidden rounded-lg border shadow-sm"
                                (click)="view(deal)"
                            >
                                <div
                                    class="bg-base-300 relative h-48 w-full max-w-full overflow-hidden rounded-b-lg"
                                >
                                    @if (deal.image) {
                                        <img
                                            auth
                                            [source]="deal.image"
                                            [alt]="deal.name + ' [Image]'"
                                            class="text-base-content/50 flex h-full w-full items-center justify-center object-cover"
                                        />
                                    }
                                    @if (deal.details) {
                                        <div
                                            class="bg-info text-info-content absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-sm px-2 py-1 text-xs shadow-sm"
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
                            class="bg-base-200 col-span-6 flex w-full flex-col items-center justify-center rounded-lg p-16"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatMenuModule,
        TopbarComponent,
        FooterMenuComponent,
        AuthenticatedImageDirective,
    ],
})
export class DealsComponent implements OnInit {
    private _service = inject(DealsService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);

    public readonly deals = computed(() =>
        this._service.deals().filter((_) => _.expires_at > Date.now()),
    );
    public readonly types = computed(() =>
        unique(
            this.deals()
                .map((_) => _.type)
                .sort((a, b) => a.localeCompare(b)),
        ),
    );
    public readonly type = signal('');
    public readonly sort_type = signal('');
    public readonly filtered_deals = computed(() =>
        this.deals()
            .filter((deal) => !this.type() || deal.type === this.type())
            .sort((a, b) =>
                this.sort_type() === 'date_asc'
                    ? a.expires_at - b.expires_at
                    : this.sort_type() === 'date_desc'
                      ? b.expires_at - a.expires_at
                      : 0,
            ),
    );
    public readonly view = (d) => this._service.viewDeal(d);

    public sort(type: string) {
        this.sort_type.set(type);
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        await firstTruthyValueFrom(this._settings.initialised);
        const has_deals = (this._settings.get('app.features') || []).includes(
            'deals-n-offers',
        );
        if (!has_deals) this._router.navigate(['/']);
    }
}
