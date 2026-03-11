import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import {
    BuildingPipe,
    IconComponent,
    LevelPipe,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { Survey } from '@placeos/ts-client';
import { SurveyService } from './survey.service';

@Component({
    selector: 'survey-listings',
    template: `
        <div class="flex w-full items-center justify-between px-8 py-4">
            <div class="flex">
                <a icon matRipple [routerLink]="['/surveys']">
                    <icon class="mr-2 flex">arrow_back</icon>
                </a>
                <div class="flex flex-col">
                    <span class="text-2xl">{{
                        'APP.CONCIERGE.SURVEY_LIST_HEADER' | translate
                    }}</span>
                    <span class="text-4xl">
                        @let bld = building() | building;
                        {{ bld?.display_name || bld?.name }}
                    </span>
                </div>
            </div>
            <a
                btn
                matRipple
                class="space-x-2"
                [routerLink]="['/surveys', 'builder']"
                [queryParams]="{ building_id: building() }"
            >
                <span class="ml-4">{{
                    'APP.CONCIERGE.SURVEY_ADD' | translate
                }}</span>
                <icon class="text-xl">add</icon>
            </a>
        </div>
        <div class="flex h-1/2 w-full flex-1 overflow-auto px-8">
            <simple-table
                class="block w-full min-w-xl text-sm"
                [data]="surveys()"
                [columns]="[
                    { key: 'title', name: 'FORM.TITLE' | translate },
                    {
                        key: 'zone_id',
                        name: 'RESOURCE.LEVEL' | translate,
                        content: level_template,
                    },
                    {
                        key: 'trigger',
                        name: 'COMMON.TRIGGER' | translate,
                        content: trigger_template,
                    },
                    { key: 'id', name: 'Link', show: false },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                empty_message="No surveys found. Click on <i>Add survey</i> to create new surveys for this building."
            ></simple-table>
        </div>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ (data | level)?.display_name || (data | level)?.name }}
                @if (!(data | level)) {
                    <span class="opacity-60">
                        {{ 'COMMON.LEVEL_ALL' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #trigger_template let-data="data">
            <div class="p-4 capitalize">
                {{ data }}
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded-sm"
                    [matMenuTriggerFor]="actionsMenu"
                    aria-label="More options"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #actionsMenu="matMenu">
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'responses', row.id]"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">analytics</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_RESPONSES' | translate
                            }}</span>
                        </div>
                    </a>
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'builder', row.id]"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_EDIT' | translate
                            }}</span>
                        </div>
                    </a>
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'run', row.id]"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">open_in_new</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_TEST' | translate
                            }}</span>
                        </div>
                    </a>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-xl"> delete </icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
            }
        `,
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        RouterModule,
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        LevelPipe,
        BuildingPipe,
    ],
})
export class SurveyListingsComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _survey = inject(SurveyService);

    public readonly surveys = this._survey.building_surveys;
    public readonly building = this._survey.building;

    public ngOnInit() {
        this.subscription(
            'route-param',
            this._route.paramMap.subscribe((params) =>
                this._survey.setBuilding(params.get('id') || ''),
            ),
        );
    }

    public async remove(survey: Survey) {
        await this._survey.removeSurvey(survey);
    }
}
