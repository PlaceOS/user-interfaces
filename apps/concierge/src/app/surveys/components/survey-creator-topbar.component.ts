import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { Building, OrganisationService } from '@placeos/organisation';
import { TriggerOptions } from '@placeos/survey-suite';
import { combineLatest } from 'rxjs';
import {
    distinctUntilKeyChanged,
    filter,
    shareReplay,
    take,
    tap,
} from 'rxjs/operators';
import { SurveyOptions, SurveyService } from '../services/survey.service';

@Component({
    selector: 'survey-creator-topbar',
    styles: [],
    template: `
        <div
            class="flex flex-row items-center bg-white dark:bg-neutral-700 h-20 px-4 w-full dark:border-neutral-500"
        >
            <div class="flex space-x-2">
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

                <mat-form-field
                    appearance="outline"
                    [subscriptSizing]="'dynamic'"
                >
                    <mat-select
                        [value]="(options$ | async).zone_id"
                        (valueChange)="updateOptions({ zone_id: $event })"
                    >
                        <mat-option [value]="''"> All Levels </mat-option>
                        <mat-option
                            *ngFor="let level of levels"
                            [value]="level.id"
                        >
                            {{ level.display_name || level.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

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
        await this._org.initialised.pipe(take(1)).toPromise();

        this.subscription(
            'query_params',
            this._actRoute.queryParams.subscribe((qparams) => {
                const id = qparams['building_id'];
                if (id?.length) this.updateOptions({ building_id: id });
            })
        );

        this.subscription(
            'option_change',
            this._survey._options$
                .pipe(
                    distinctUntilKeyChanged('building_id'),
                    tap((v) => console.log('option changed', v))
                )
                .subscribe((options) => {
                    this.doBuildingChange(options.building_id);
                })
        );
    }

    onBuildingChange(building_id: string) {
        if (!building_id?.length) return;
        this.doBuildingChange(building_id);
    }

    private doBuildingChange(building_id: string) {
        if (!building_id?.length) return;
        this.selected_building = this._org.buildings.find(
            (e) => e.id === building_id
        );
        this.levels = this._org.levelsForBuilding(this.selected_building);
        this.updateOptions({ zone_id: '', building_id });
    }
}
