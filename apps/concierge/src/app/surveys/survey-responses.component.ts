import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DateRangeFieldComponent } from '@placeos/form-fields';
import { queryAnswers, SurveyAnswer } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
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

                        survey()?.building_id,
                    ]"
                >
                    <icon class="flex">arrow_back</icon>
                </a>
                <div class="space-y-2">
                    <div class="mt-1 text-2xl">
                        {{ 'APP.CONCIERGE.SURVEY_ANSWERS_HEADER' | translate }}
                    </div>
                    <div class="text-lg">
                        {{ survey()?.title || '' }}
                    </div>
                </div>
            </div>
            <date-range-field [week_start]="week_start">
                <input
                    #startDate
                    [ngModel]="options().start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="options().end"
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
                    {{ questions().length || 0 }}
                </p>
            </div>
            <div
                class="border-base-300 flex flex-1 flex-col items-center rounded-sm border p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_ANSWERS' | translate }}
                </h3>
                <p class="text-4xl">
                    {{ answers().length || 0 }}
                </p>
            </div>
            <div
                class="border-base-300 flex flex-1 flex-col items-center space-y-2 rounded-sm border p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_TRIGGER' | translate }}
                </h3>
                <p class="font-mono text-xl capitalize">
                    {{ survey()?.trigger }}
                </p>
            </div>
        </div>
        @let question_pages = paged_responses();
        @if (question_pages?.length > 0) {
            <div
                class="border-base-300 bg-base-200 h-1/2 flex-1 overflow-auto border-t"
            >
                @for (p of question_pages; track p; let i = $index) {
                    @if (question_pages.length > 1) {
                        <div class="flex w-full px-8 pt-2 text-xl font-medium">
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
                    }
                    <div
                        class="grid w-full grid-cols-2 gap-4 px-6 py-2 xl:grid-cols-3"
                    >
                        @for (r of p.responses; track r) {
                            <new-survey-widget
                                [response]="r"
                            ></new-survey-widget>
                        }
                    </div>
                }
            </div>
        } @else {
            <div
                class="flex min-h-40 w-full flex-col items-center justify-center"
            >
                <span class="text-lg opacity-30">{{
                    'APP.CONCIERGE.SURVEY_ANSWERS_EMPTY' | translate
                }}</span>
            </div>
        }
        @if (loading()) {
            <div class="bg-base-100 absolute inset-0 z-10 flex opacity-60">
                <div class="m-auto flex flex-col items-center space-y-4">
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>
                        {{ 'APP.CONCIERGE.SURVEY_ANSWERS_LOADING' | translate }}
                    </p>
                </div>
            </div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
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

    public readonly options = signal<any>({});

    public readonly survey = this._service.survey;
    public readonly questions = this._service.survey_questions;

    private readonly _answers = resource({
        params: () => ({ survey: this.survey(), options: this.options() }),
        defaultValue: [] as SurveyAnswer[],
        loader: async ({ params: { survey, options } }) => {
            if (!survey) return [];
            const q: any = { survey_id: survey.id };
            if (options.start || options.end) {
                q.created_after = getUnixTime(
                    startOfDay(options.start || Date.now()),
                );
                q.created_before = getUnixTime(
                    endOfDay(options.end || Date.now()),
                );
            }
            return queryAnswers(q).catch(() => [] as SurveyAnswer[]);
        },
    });
    public readonly answers = this._answers.value;
    public readonly loading = computed(() =>
        this._answers.isLoading() ? 'ANSWERS' : '',
    );

    public readonly paged_responses = computed(() => {
        const survey = this.survey();
        const questions = this.questions();
        const answers = this.answers();
        if (!survey) return [];
        const mapping: Record<string, any> = {};
        questions.forEach((question) => {
            mapping[question.id] = {
                question,
                answers: answers.filter((a) => a.question_id === question.id),
            };
        });
        const paged = [];
        survey.pages.forEach((p) => {
            const t = { title: p.title, responses: [] };
            p.question_order.forEach((q) => t.responses.push(mapping[q]));
            paged.push(t);
        });
        return paged;
    });

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
        this.options.update((options) => ({ ...options, start: date }));
    }

    public setEndDate(date: number) {
        this.options.update((options) => ({ ...options, end: date }));
    }
}
