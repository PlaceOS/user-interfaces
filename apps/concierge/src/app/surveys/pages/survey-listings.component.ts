import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { TriggerEnumMap } from '@placeos/survey-suite';
import { shareReplay } from 'rxjs/operators';
import { SurveyListingsService } from '../services/survey-listings.service';

@Component({
    selector: 'survey-listings',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }

            .mat-column-actions {
                width: 4rem;
            }

            .mat-column-trigger {
                width: 12rem;
            }
        `,
    ],
    template: `
        <div class="flex items-center justify-between px-8 py-4 w-full">
            <div class="flex">
                <button icon matRipple (click)="back()">
                    <app-icon class="flex mr-2">arrow_back</app-icon>
                </button>
                <div class="flex flex-col">
                    <span class="text-2xl">Survey Listing </span>
                    <span class="text-4xl">{{
                        (building$ | async)?.display_name || building_name
                    }}</span>
                </div>
            </div>
            <button btn matRipple class="space-x-2" (click)="newSurvey()">
                <span class="ml-2">Add New Survey</span>
                <app-icon>add</app-icon>
            </button>
        </div>
        <div class="flex flex-1 h-1/2 w-full overflow-auto px-8">
            <simple-table
                class="min-w-[36rem] w-full block text-sm"
                [data]="surveys$"
                [columns]="[
                    { key: 'title', name: 'Title' },
                    { key: 'zone_id', name: 'Level', content: level_template },
                    {
                        key: 'trigger',
                        name: 'Trigger',
                        content: trigger_template
                    },
                    { key: 'id', name: 'Link', show: false },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false
                    }
                ]"
                [sortable]="true"
                empty_message="No surveys found. Click on <i>Add survey</i> to create new surveys for this building."
            ></simple-table>
        </div>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ levelMap[data] || data }}
            </div>
        </ng-template>
        <ng-template #trigger_template let-data="data">
            <div class="p-4">
                {{ data }}
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center space-x-2 mx-auto p-2">
                <button icon matRipple [matMenuTriggerFor]="actionsMenu">
                    <app-icon>more_vert</app-icon>
                </button>
                <mat-menu #actionsMenu="matMenu">
                    <button mat-menu-item (click)="onViewStats(row.id)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">analytics</app-icon>
                            <span>Survey Responses</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="onEdit(row.id)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">edit</app-icon>
                            <span>Edit Survey</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="onDelete(row.id)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-error text-xl">
                                delete
                            </app-icon>
                            <span>Delete Survey</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    providers: [SurveyListingsService],
})
export class SurveyListingsComponent extends AsyncHandler implements OnInit {
    levelMap = {};
    loading$ = this._service.loading$.pipe(shareReplay(1));
    building$ = this._service.building$.pipe(shareReplay(1));
    surveys$ = this._service.surveys$;
    triggerMap = TriggerEnumMap;
    onEdit = (id: number) => this._service.editSurvey(id);
    onDelete = (id: number) => this._service.deleteSurvey(id);
    newSurvey = () => this._service.newSurvey();
    back = () => this._service.back();
    onViewStats = (id: number) =>
        this._router.navigate([
            this._settings.get('app.default_route').includes('new')
                ? '/surveys/new'
                : '/surveys',
            'responses',
            id,
        ]);

    displayedColumns: string[] = ['title', 'level', 'trigger', 'actions'];

    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _service: SurveyListingsService
    ) {
        super();
    }

    public get building_name() {
        return (
            this._service.building?.display_name ||
            this._service.building?.name ||
            ''
        );
    }

    async ngOnInit() {
        this.subscription(
            'route-param',
            this._route.params.subscribe((params) => {
                const id = params.id || '';
                this._service.initBuilding(id);
            })
        );

        this.subscription(
            'level_map',
            this._service.levelNameMap$.subscribe(
                (map) => (this.levelMap = map)
            )
        );
    }
}
