import { Component } from '@angular/core';
import { flatten, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { combineLatest, forkJoin } from 'rxjs';
import { queryAnswers, querySurveys } from '@placeos/ts-client';

@Component({
    selector: 'building-list',
    template: `
        <div class="flex flex-col h-full w-full">
            <header class="flex items-center justify-between px-8 pt-8 pb-2">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.SURVEY_HEADER' | translate }}
                </h2>
            </header>
            <div class=" px-8  mb-8">
                {{
                    'APP.CONCIERGE.SURVEY_BUILDING_COUNT'
                        | translate: { count: (buildings$ | async)?.length }
                }}
            </div>
            <div class="h-1/2 w-full overflow-auto flex-1 px-8 space-y-4">
                @for (building of buildings$ | async; track building.id) {
                    @let stats = (stats$ | async)[building.id];
                    <a
                        matRipple
                        class="relative flex rounded-xl bg-base-100 overflow-hidden border border-base-300 shadow hover:border-info space-x-4"
                        [routerLink]="['/surveys', 'survey-list', building.id]"
                    >
                        <div
                            class="w-32 h-40 bg-base-300 flex items-center justify-center"
                        >
                            <img
                                auth
                                *ngIf="building.images?.length"
                                class="h-full w-full object-center object-cover"
                                [source]="building.images[0]"
                            />
                            <app-icon
                                *ngIf="!building.images?.length"
                                class="text-base-100 text-6xl"
                                >domain</app-icon
                            >
                        </div>
                        <div class="py-4 flex-1">
                            <h3 class="text-2xl font-medium mb-4">
                                {{ building.display_name || building.name }}
                            </h3>
                            <div class="flex items-center space-x-4">
                                <div
                                    class="w-24 h-20 space-y-2 flex flex-col items-center justify-center rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.live || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_LIVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="w-24 h-20 space-y-2 flex flex-col items-center justify-center rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.drafts || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_DRAFTS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="w-24 h-20 space-y-2 flex flex-col items-center justify-center rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.answers || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_ANSWERS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <app-icon
                            class="absolute right-2 top-1/2 -translate-y-1/2 text-4xl"
                        >
                            chevron_right
                        </app-icon>
                    </a>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                overflow: auto;
                background-color: var(--b1);
            }
        `,
    ],
    standalone: false
})
export class BuildingListComponent {
    public readonly buildings$ = this._org.building_list;

    public readonly surveys$ = this.buildings$.pipe(
        switchMap((bld_list) =>
            forkJoin(
                bld_list.map((bld) => querySurveys({ building_id: bld.id })),
            ),
        ),
        shareReplay(1),
    );

    public readonly answers$ = this.surveys$.pipe(
        switchMap((surveys) =>
            forkJoin(
                flatten(surveys).map((survey) =>
                    queryAnswers({ survey_id: survey.id }),
                ),
            ),
        ),
        shareReplay(1),
    );

    public readonly stats$ = combineLatest([
        this.buildings$,
        this.surveys$,
        this.answers$,
    ]).pipe(
        map(([bld_list, surveys, answers]) => {
            const mapping = {};
            const answers_list = flatten(answers);
            for (let i = 0; i < bld_list.length; i++) {
                const bld = bld_list[i];
                const survey_list = surveys[i];
                mapping[bld.id] = {
                    live: survey_list.filter(
                        (_) => `${_.trigger}`.toLowerCase() !== 'none',
                    ).length,
                    drafts: survey_list.filter(
                        (_) => `${_.trigger}`.toLowerCase() === 'none',
                    ).length,
                    answers: answers_list.filter((resp) =>
                        survey_list.find((_) => _.id === resp.survey_id),
                    ).length,
                };
            }
            return mapping;
        }),
        startWith({}),
        shareReplay(1),
    );

    public get new_routes() {
        return (this._settings.get('app.default_route') || '').includes('new');
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {}
}
