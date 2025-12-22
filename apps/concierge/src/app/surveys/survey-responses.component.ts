import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    addStringKey,
    AsyncHandler,
    removeStringKey,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DateRangeFieldComponent } from '@placeos/form-fields';
import { queryAnswers, Survey } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';
import { NewSurveyWidgetComponent } from './new-survey-widget.component';
import { NewSurveyService } from './new-survey.service';

@Component({
    selector: 'survey-responses',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
                overflow: auto;
            }
        `,
    ],
    template: `
        <header
            class="flex w-full items-center justify-between pt-8 pr-8 pb-4 pl-4"
        >
            <div class="flex flex-row">
                <a
                    icon
                    matRipple
                    [routerLink]="[
                        '/surveys',
                        'list',
                        (survey$ | async)?.building_id,
                    ]"
                >
                    <icon class="flex">arrow_back</icon>
                </a>
                <div class="space-y-2">
                    <div class="mt-1 text-2xl">
                        {{ 'APP.CONCIERGE.SURVEY_ANSWERS_HEADER' | translate }}
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
        <div class="mb-4 flex justify-end space-x-4 px-8">
            <div
                class="border-base-300 flex flex-1 flex-col items-center rounded-sm border p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_QUESTIONS' | translate }}
                </h3>
                <p class="text-4xl">
                    {{ (questions$ | async)?.length || 0 }}
                </p>
            </div>
            <div
                class="border-base-300 flex flex-1 flex-col items-center rounded-sm border p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_ANSWERS' | translate }}
                </h3>
                <p class="text-4xl">
                    {{ (answers$ | async)?.length || 0 }}
                </p>
            </div>
            <div
                class="border-base-300 flex flex-1 flex-col items-center space-y-2 rounded-sm border p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_TRIGGER' | translate }}
                </h3>
                <p class="font-mono text-xl capitalize">
                    {{ (survey$ | async)?.trigger }}
                </p>
            </div>
        </div>
        @let question_pages = paged_responses$ | async;
        <div
            class="border-base-300 bg-base-200 h-1/2 flex-1 overflow-auto border-t"
            *ngIf="question_pages?.length > 0; else empty_template"
        >
            <ng-container *ngFor="let p of question_pages; let i = index">
                <div
                    class="flex w-full px-8 pt-2 text-xl font-medium"
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
                                      title: p.title,
                                  }
                    }}
                </div>
                <div
                    class="grid w-full grid-cols-2 gap-4 px-6 py-2 xl:grid-cols-3"
                >
                    @for (r of p.responses; track r) {
                        <new-survey-widget [response]="r"></new-survey-widget>
                    }
                </div>
            </ng-container>
        </div>
        <ng-template #empty_template>
            <div
                class="flex min-h-40 w-full flex-col items-center justify-center"
            >
                <span class="text-lg opacity-30">{{
                    'APP.CONCIERGE.SURVEY_ANSWERS_EMPTY' | translate
                }}</span>
            </div>
        </ng-template>
        <div
            *ngIf="loading$ | async"
            class="bg-base-100 absolute inset-0 z-10 flex opacity-60"
        >
            <div class="m-auto flex flex-col items-center space-y-4">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.SURVEY_ANSWERS_LOADING' | translate }}</p>
            </div>
        </div>
    `,
    imports: [
        MatProgressSpinnerModule,
        CommonModule,
        TranslatePipe,
        NewSurveyWidgetComponent,
        DateRangeFieldComponent,
        RouterModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class SurveyResponsesComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _service = inject(NewSurveyService);

    public readonly options$ = new BehaviorSubject<any>({});
    public readonly loading$ = new BehaviorSubject('');

    public readonly survey$ = this._service.survey$;
    public readonly questions$ = this._service.survey_questions$;

    public readonly answers$ = combineLatest([
        this.survey$,
        this.options$,
    ]).pipe(
        filter(([_]) => !!_),
        switchMap(([{ id }, { start, end }]) => {
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
        map(([survey, q_list]: [Survey, any[]]) => {
            const mapping = {};
            q_list.forEach((e) => (mapping[e.question.id] = e));
            const paged = [];
            survey?.pages.forEach((p) => {
                const t = { title: p.title, responses: [] };
                p.question_order.forEach((q) => t.responses.push(mapping[q]));
                paged.push(t);
            });
            return paged;
        }),
    );

    public get week_start() {
        return this._settings.get('app.week_start');
    }

    public ngOnInit() {
        this.subscription(
            'params',
            this._route.paramMap.subscribe((params) => {
                this._service.setSurvey(params.get('id') || '');
            }),
        );
    }

    public setStartDate(date: number) {
        this.options$.next({ ...this.options$.getValue(), start: date });
    }

    public setEndDate(date: number) {
        this.options$.next({ ...this.options$.getValue(), end: date });
    }
}
