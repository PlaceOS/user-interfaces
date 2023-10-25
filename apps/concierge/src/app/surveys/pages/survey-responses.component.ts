import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { TriggerEnumMap } from '@placeos/survey-suite';
import { map, shareReplay, take } from 'rxjs/operators';
import { SurveyResponsesService } from '../services/survey-responses.service';

@Component({
    selector: 'survey-responses',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
                overflow: auto;
            }
        `,
    ],
    template: `
        <div
            *ngIf="(loading$ | async).length"
            class="flex absolute inset-0 opacity-60 bg-base-100 z-10"
        >
            <div class="flex flex-col m-auto items-center">
                <mat-spinner [diameter]="32"></mat-spinner>
                <span>{{ loading$ | async }}</span>
            </div>
        </div>
        <ng-container *ngIf="surveyId$ | async; else noId">
            <header
                class="flex justify-between items-center w-full pb-4 border-b mt-4 pl-2"
            >
                <div class="flex flex-row items-center">
                    <button icon matRipple (click)="back()">
                        <app-icon class="flex mr-2">arrow_back</app-icon>
                    </button>
                    <div class="flex flex-row items-center">
                        <span class="text-2xl">
                            Survey Responses -
                            {{ (survey$ | async)?.title || '' }}
                        </span>
                    </div>
                </div>
                <mat-form-field
                    appearance="outline"
                    subscriptSizing="dynamic"
                    class="w-72 mr-4"
                >
                    <mat-date-range-input
                        [rangePicker]="picker"
                        (stateChanges)="datePicked($event)"
                    >
                        <input
                            matStartDate
                            readonly
                            [ngModel]="(options$ | async)?.start"
                            (ngModelChange)="$event ? setStartDate($event) : ''"
                            placeholder="Start date"
                        />
                        <input
                            matEndDate
                            readonly
                            [ngModel]="(options$ | async)?.end"
                            (ngModelChange)="$event ? setEndDate($event) : ''"
                            placeholder="End date"
                        />
                    </mat-date-range-input>
                    <div matSuffix class="flex items-center">
                        <mat-datepicker-toggle
                            [for]="picker"
                        ></mat-datepicker-toggle>
                        <button
                            *ngIf="(options$ | async)?.end"
                            icon
                            matRipple
                            (click)="clearDates()"
                        >
                            <app-icon>close</app-icon>
                        </button>
                    </div>
                    <mat-date-range-picker #picker></mat-date-range-picker>
                </mat-form-field>
            </header>
            <div class="flex p-4 border-b justify-end space-x-2">
                <div class="flex flex-col items-center flex-1">
                    <h3>Total Questions</h3>
                    <p class="text-4xl">
                        {{ (stats$ | async)?.question_count || 0 }}
                    </p>
                </div>
                <div class="flex flex-col items-center flex-1">
                    <h3>Total Answers</h3>
                    <p class="text-4xl">
                        {{ (stats$ | async)?.answer_count || 0 }}
                    </p>
                </div>
                <div class="flex flex-col items-center flex-1">
                    <h3>Triggers On</h3>
                    <p class="text-2xl">
                        {{ triggerMap[(survey$ | async)?.trigger] }}
                    </p>
                </div>
            </div>

            <ng-container *ngIf="pagedResponses$ | async as pagedResponses">
                <ng-container
                    *ngIf="pagedResponses?.length > 0; else noRecords"
                >
                    <ng-container
                        *ngFor="let p of pagedResponses; let i = index"
                    >
                        <div
                            class="flex w-full px-3 pt-2 space-x-2"
                            *ngIf="pagedResponses.length > 1"
                        >
                            <span class="font-thin text-xl"
                                >Page {{ i + 1 }}
                                {{
                                    p.title?.length ? '- ' + p.title : ''
                                }}</span
                            >
                        </div>
                        <div class="flex flex-wrap w-full pt-2">
                            <survey-widget
                                class="w-full lg:w-1/2 2xl:w-1/3"
                                *ngFor="let r of p.responses"
                                [response]="r"
                            ></survey-widget>
                        </div>
                    </ng-container>
                </ng-container>
            </ng-container>
        </ng-container>

        <ng-template #noId>
            <div
                class="flex flex-col w-full h-full items-center justify-center"
            >
                <span class="text-lg text-gray-700"
                    >Invalid survey identity</span
                >
            </div>
        </ng-template>
        <ng-template #noRecords>
            <div
                class="flex flex-col w-full min-h-[10rem] items-center justify-center"
            >
                <span class="text-lg text-gray-700">No responses found</span>
            </div>
        </ng-template>
    `,
    providers: [SurveyResponsesService],
})
export class SurveyResponsesComponent extends AsyncHandler implements OnInit {
    surveyId$ = this.route.params.pipe(map((params) => params.id || ''));
    survey$ = this.service.survey$;
    pagedResponses$ = this.service.paged_responses$;
    options$ = this.service.options$.pipe(shareReplay(1));
    stats$ = this.service.stats$.pipe(shareReplay(1));
    loading$ = this.service.loading$.pipe(shareReplay(1));

    triggerMap = TriggerEnumMap;

    private start_date;

    constructor(
        private _settings: SettingsService,
        private service: SurveyResponsesService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscription(
            'params',
            this.surveyId$.subscribe((survey_id) => {
                if (survey_id?.length) {
                    this.service.setOptions({ survey_id });
                }
            })
        );
    }

    setStartDate(start: Date) {
        if (!start) return;
        this.start_date = start;
    }

    setEndDate(end: Date) {
        if (!this.start_date || !end) return;
        this.service.setOptions({ start: this.start_date, end });
    }

    clearDates() {
        this.service.setOptions({ start: null, end: null });
    }

    public async back() {
        const survey = await this.survey$.pipe(take(1)).toPromise();
        this.router.navigate([
            this._settings.get('app.default_route').includes('new')
                ? '/surveys/new'
                : '/surveys',
            'survey-list',
            survey.building_id || '',
        ]);
    }
}
