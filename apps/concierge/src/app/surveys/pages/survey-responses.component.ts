import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    addStringKey,
    AsyncHandler,
    removeStringKey,
    SettingsService,
} from '@placeos/common';
import {
    catchError,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { queryAnswers, queryQuestions, showSurvey } from '@placeos/ts-client';
import {
    endOfDay,
    endOfYear,
    getUnixTime,
    startOfDay,
    startOfYear,
} from 'date-fns';

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
        <ng-container *ngIf="has_id; else invalid_template">
            <header
                class="flex justify-between items-center w-full pt-8 pb-4 pl-4 pr-8"
            >
                <div class="flex flex-row">
                    <a
                        icon
                        matRipple
                        [routerLink]="[
                            '/surveys',
                            'survey-list',
                            (survey$ | async)?.building_id,
                        ]"
                    >
                        <app-icon class="flex">arrow_back</app-icon>
                    </a>
                    <div class="space-y-2">
                        <div class="text-2xl mt-1">
                            {{
                                'APP.CONCIERGE.SURVEY_ANSWERS_HEADER'
                                    | translate
                            }}
                        </div>
                        <div class="text-lg">
                            {{ (survey$ | async)?.title || '' }}
                        </div>
                    </div>
                </div>
                <date-range-field [week_start]="week_start">
                    <input
                        #startDate
                        [ngModel]="(options$ | async).start"
                        (ngModelChange)="$event ? setStartDate($event) : ''"
                    />
                    <input
                        #endDate
                        [ngModel]="(options$ | async).start"
                        (ngModelChange)="$event ? setEndDate($event) : ''"
                    />
                </date-range-field>
            </header>
            <div class="flex justify-end space-x-4 px-8">
                <div
                    class="flex flex-col items-center flex-1 rounded border border-base-300 p-4"
                >
                    <h3>
                        {{
                            'APP.CONCIERGE.SURVEY_ANSWERS_QUESTIONS' | translate
                        }}
                    </h3>
                    <p class="text-4xl">
                        {{ (questions$ | async)?.length || 0 }}
                    </p>
                </div>
                <div
                    class="flex flex-col items-center flex-1 rounded border border-base-300 p-4"
                >
                    <h3>
                        {{ 'APP.CONCIERGE.SURVEY_ANSWERS_ANSWERS' | translate }}
                    </h3>
                    <p class="text-4xl">
                        {{ (answers$ | async)?.length || 0 }}
                    </p>
                </div>
                <div
                    class="flex flex-col items-center flex-1 space-y-2 rounded border border-base-300 p-4"
                >
                    <h3>
                        {{ 'APP.CONCIERGE.SURVEY_ANSWERS_TRIGGER' | translate }}
                    </h3>
                    <p class="text-xl capitalize font-mono">
                        {{ (survey$ | async)?.trigger }}
                    </p>
                </div>
            </div>
            @let question_pages = paged_responses$ | async;
            <div
                class="h-1/2 flex-1 overflow-auto"
                *ngIf="question_pages?.length > 0; else empty_template"
            >
                <ng-container *ngFor="let p of question_pages; let i = index">
                    <div
                        class="flex w-full px-3 pt-2 font-thin text-xl"
                        *ngIf="question_pages.length > 1"
                    >
                        {{
                            (p.title
                                ? 'APP.CONCIERGE.SURVEY_ANSWERS_PAGE_WITH_TITLE'
                                : 'APP.CONCIERGE.SURVEY_ANSWERS_PAGE'
                            )
                                | translate
                                    : {
                                          id: i + 1,
                                          title: page.title,
                                      }
                        }}
                    </div>
                    <div class="flex flex-wrap w-full py-2 px-6">
                        <survey-widget
                            class="w-full lg:w-1/2 2xl:w-1/3"
                            *ngFor="let r of p.responses"
                            [response]="r"
                        ></survey-widget>
                    </div>
                </ng-container>
            </div>
        </ng-container>

        <ng-template #invalid_template>
            <div
                class="flex flex-col w-full h-full items-center justify-center"
            >
                <span class="text-lg opacity-30">{{
                    'APP.CONCIERGE.SURVEY_ANSWERS_ID_INVALID' | translate
                }}</span>
            </div>
        </ng-template>
        <ng-template #empty_template>
            <div
                class="flex flex-col w-full min-h-[10rem] items-center justify-center"
            >
                <span class="text-lg opacity-30">{{
                    'APP.CONCIERGE.SURVEY_ANSWERS_EMPTY' | translate
                }}</span>
            </div>
        </ng-template>
        <div
            *ngIf="loading$ | async"
            class="flex absolute inset-0 opacity-60 bg-base-100 z-10"
        >
            <div class="flex flex-col m-auto items-center space-y-4">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.SURVEY_ANSWERS_LOADING' | translate }}</p>
            </div>
        </div>
    `,
})
export class SurveyResponsesComponent extends AsyncHandler implements OnInit {
    private _survey_id = new BehaviorSubject('');

    public readonly options$ = new BehaviorSubject<any>({});
    public readonly loading$ = new BehaviorSubject('');

    public readonly survey$ = this._survey_id.pipe(
        filter((_) => !!_),
        switchMap((id) => {
            this.loading$.next(
                addStringKey(this.loading$.getValue(), 'SURVEY'),
            );
            return showSurvey(id).pipe(catchError(() => of(null)));
        }),
        tap(() =>
            this.loading$.next(
                removeStringKey(this.loading$.getValue(), 'SURVEY'),
            ),
        ),
        shareReplay(1),
    );

    public readonly questions$ = this._survey_id.pipe(
        filter((_) => !!_),
        switchMap((id) => {
            this.loading$.next(
                addStringKey(this.loading$.getValue(), 'QUESTIONS'),
            );
            return queryQuestions({ survey_id: id }).pipe(
                catchError(() => of([])),
            );
        }),
        tap(() =>
            this.loading$.next(
                removeStringKey(this.loading$.getValue(), 'QUESTIONS'),
            ),
        ),
        shareReplay(1),
        startWith([]),
    );

    public readonly answers$ = combineLatest([
        this._survey_id,
        this.options$,
    ]).pipe(
        filter(([_]) => !!_),
        switchMap(([id, { start, end }]) => {
            this.loading$.next(
                addStringKey(this.loading$.getValue(), 'ANSWERS'),
            );
            const q: any = {
                survey_id: id,
            };
            if (start || end) {
                q.created_after = getUnixTime(startOfDay(start || Date.now()));
                q.created_before = getUnixTime(endOfDay(end || Date.now()));
            }
            return queryAnswers(q).pipe(catchError(() => of([])));
        }),
        tap(() =>
            this.loading$.next(
                removeStringKey(this.loading$.getValue(), 'ANSWERS'),
            ),
        ),
        shareReplay(1),
        startWith([]),
    );

    public readonly paged_responses$ = combineLatest([
        this.survey$,
        this.questions$,
        this.answers$,
        this.questions$,
    ]).pipe(
        map(([survey, questions, answers]) => {
            return [
                survey,
                questions.map((item) => ({
                    question: item,
                    answers: answers.filter((a) => a.question_id === item.id),
                })),
            ];
        }),
        map(([survey, q_list]) => {
            const mapping = {};
            q_list.forEach((e) => (mapping[e.question.id] = e));
            const paged = [];
            survey.pages.forEach((p) => {
                const t = { title: p.title, responses: [] };
                p.question_order.forEach((q) => t.responses.push(mapping[q]));
                paged.push(t);
            });
            return paged;
        }),
    );

    public get has_id() {
        return !!this._survey_id.getValue();
    }

    public get week_start() {
        return this._settings.get('app.week_start');
    }

    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'params',
            this._route.paramMap.subscribe((params) => {
                this._survey_id.next(params.get('id') || '');
            }),
        );
        this.subscription(
            'paged',
            this.paged_responses$.subscribe((d) =>
                console.log('Questions:', d),
            ),
        );
    }

    public setStartDate(date: number) {
        this.options$.next({ ...this.options$.getValue(), start: date });
    }

    public setEndDate(date: number) {
        this.options$.next({ ...this.options$.getValue(), end: date });
    }
}
