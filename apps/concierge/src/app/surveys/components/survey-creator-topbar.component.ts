import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { TriggerOptions } from '@placeos/survey-suite';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SurveyOptions, SurveyService } from '../services/survey.service';

@Component({
    selector: 'survey-creator-topbar',
    styles: [],
    template: `
        <div
            class="flex flex-row items-center bg-white dark:bg-neutral-700 h-20 px-4 w-full dark:border-neutral-500"
        >
            <div class="flex space-x-2">
                <div class="flex flex-col pt-2">
                    <label>Building</label>
                    <mat-form-field
                        appearance="outline"
                        [subscriptSizing]="'dynamic'"
                    >
                        <mat-select
                            [value]="(options$ | async).building_id"
                            (valueChange)="onBuildingChange($event)"
                        >
                            <mat-option
                                *ngFor="let b of buildings$ | async"
                                [value]="b.id"
                                >{{ b.display_name || b.name }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>

                <div class="flex flex-col pt-2">
                    <label>Level</label>
                    <mat-form-field
                        appearance="outline"
                        [subscriptSizing]="'dynamic'"
                    >
                        <mat-select
                            [value]="(options$ | async).zone_id"
                            (valueChange)="updateOptions({ zone_id: $event })"
                        >
                            <mat-option
                                [value]="(options$ | async).building_id"
                            >
                                All Levels
                            </mat-option>
                            <mat-option
                                *ngFor="let level of levels$ | async"
                                [value]="level.id"
                            >
                                {{ level.display_name || level.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>

                <div class="flex flex-col pt-2">
                    <label>Trigger</label>
                    <mat-form-field
                        appearance="outline"
                        [subscriptSizing]="'dynamic'"
                    >
                        <mat-select
                            [value]="(options$ | async).trigger"
                            (valueChange)="updateOptions({ trigger: $event })"
                        >
                            <mat-option
                                *ngFor="let op of triggerOptions"
                                [value]="op.value"
                            >
                                {{ op.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>

            <div class="flex items-center ml-auto space-x-4">
                <button btn matRipple class="clear" (click)="onCancel()">
                    Cancel
                </button>
                <button btn matRipple (click)="onSave()">Save</button>
            </div>
        </div>
    `,
})
export class SurveyCreatorTopbarComponent extends BaseClass implements OnInit {
    public selected_building = null;
    public levels = [];
    public readonly options$ = this._survey._options$.pipe(shareReplay(1));
    public readonly buildings$ = this._org.building_list;
    public readonly levels$ = combineLatest([
        this.options$,
        this._org.level_list,
    ]).pipe(
        map(([options, levels]) => {
            const { building_id } = options;
            if (!building_id?.length) return [];
            return levels.filter((l) => l.parent_id === building_id);
        })
    );
    public readonly triggerOptions = TriggerOptions;

    updateOptions = (op: Partial<SurveyOptions>) => this._survey.setOptions(op);
    onSave = () => this._survey.saveSurvey();
    onCancel = () => this._survey.back();

    constructor(
        private _org: OrganisationService,
        private _actRoute: ActivatedRoute,
        private _survey: SurveyService
    ) {
        super();
    }

    async ngOnInit() {
        this.subscription(
            'query_params',
            this._actRoute.queryParams.subscribe((qparams) => {
                const id = qparams['building_id'];
                if (id?.length) this.updateOptions({ building_id: id });
            })
        );
    }

    onBuildingChange(building_id: string) {
        if (!building_id?.length) return;
        this.doBuildingChange(building_id);
    }

    private doBuildingChange(building_id: string) {
        if (!building_id?.length) return;
        this.updateOptions({ zone_id: building_id, building_id });
    }
}
