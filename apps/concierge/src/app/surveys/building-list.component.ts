import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncHandler, flatten, OrganisationService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { SurveyService } from './survey.service';

@Component({
    selector: 'building-list',
    template: `
        <div class="flex h-full w-full flex-col">
            <header class="flex items-center justify-between px-8 pt-8 pb-2">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.SURVEY_HEADER' | translate }}
                </h2>
            </header>
            <div class="mb-8 px-8">
                {{
                    'APP.CONCIERGE.SURVEY_BUILDING_COUNT'
                        | translate
                            : {
                                  count: buildings()?.length,
                              }
                            : buildings()?.length
                }}
            </div>
            <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto px-8 pb-8">
                @for (building of buildings(); track building.id) {
                    @let stats = bld_stats()?.[building.id];
                    <a
                        matRipple
                        class="border-base-300 bg-base-100 hover:border-info relative flex space-x-4 overflow-hidden rounded-xl border shadow-sm"
                        [routerLink]="['/surveys', 'list', building.id]"
                    >
                        <div
                            class="bg-base-300 flex h-40 w-32 items-center justify-center"
                        >
                            @if (building.images?.length) {
                                <img
                                    auth
                                    class="h-full w-full object-cover object-center"
                                    [source]="building.images[0]"
                                />
                            }
                            @if (!building.images?.length) {
                                <icon class="text-base-100 text-6xl"
                                    >domain</icon
                                >
                            }
                        </div>
                        <div class="flex-1 py-4">
                            <h3 class="mb-4 text-2xl font-medium">
                                {{ building.display_name || building.name }}
                            </h3>
                            <div class="flex items-center space-x-4">
                                <div
                                    class="border-base-200 flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border"
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
                                    class="border-base-200 flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border"
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
                                    class="border-base-200 flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border"
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
                        <icon
                            class="absolute top-1/2 right-2 -translate-y-1/2 text-4xl"
                        >
                            chevron_right
                        </icon>
                    </a>
                }
                @if (buildings().length <= 0) {
                    <div
                        class="bg-base-200 flex h-[calc(100%-2rem)] w-full flex-col items-center justify-center rounded-xl"
                    >
                        <div class="opacity-30">
                            {{ 'APP.CONCIERGE.SURVEY_NO_BLD' | translate }}
                        </div>
                    </div>
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
                background-color: var(--base-100);
            }
        `,
    ],
    imports: [
        AuthenticatedImageDirective,
        TranslatePipe,
        RouterModule,
        IconComponent,
    ],
})
export class BuildingListComponent extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _survey = inject(SurveyService);

    public readonly buildings = this._org.building_list;
    public readonly surveys = this._survey.survey_list;
    public readonly answers = this._survey.answer_list;

    public readonly bld_stats = computed(() => {
        const mapping = {};
        const answers_list = flatten(this.answers());
        for (let i = 0; i < this.buildings().length; i++) {
            const bld = this.buildings()[i];
            const survey_list = this.surveys().filter(
                (_) => _.building_id === bld.id,
            );
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
    });
}
