import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { SurveyAnswer, SurveyQuestion } from '@placeos/ts-client';
import { QuestionType } from './types';

@Component({
    selector: 'new-survey-widget',
    template: `
        <div
            class="h-full space-y-2 rounded border border-base-300 bg-base-100 p-4"
        >
            <h3 class="text-lg font-medium">
                {{ response().question?.title }}
            </h3>
            <div class="flex w-full justify-end">
                {{ answer_list().length }} answers
            </div>
            <div>
                @if (is_table()) {
                    <div class="space-y-2">
                        @for (answer of answer_list(); track answer.id) {
                            <div class="rounded bg-base-200 p-2 text-sm">
                                {{ answer.answer_json }}
                            </div>
                        }
                    </div>
                } @else if (is_selection()) {
                    @for (item of selection_items(); track item.id) {
                        <div class="mx-4 flex flex-1 items-end pb-3 pt-2">
                            <div class="w-px flex-1 flex-col space-y-1">
                                <div
                                    class="flex-1 truncate"
                                    [matTooltip]="item.name"
                                >
                                    {{ item.name }}
                                </div>
                                <div class="progress-bar h-1 bg-base-200">
                                    @let percent = item.percentage || 0;
                                    <span
                                        class="progress-bar-fill h-1 justify-center rounded-lg"
                                        [ngClass]="{
                                            'bg-error': percent <= 25,
                                            'bg-warning':
                                                percent > 25 && percent <= 50,
                                            'bg-info':
                                                percent > 50 && percent <= 75,
                                            'bg-success': percent > 75,
                                        }"
                                        [ngStyle]="{ width: percent + '%' }"
                                    ></span>
                                </div>
                            </div>
                            <div class="w-16 text-right text-2xl font-thin">
                                {{ item.percentage / 100 | percent }}
                            </div>
                        </div>
                    }
                } @else {
                    <div class="flex flex-row space-x-4 p-4">
                        <div
                            class="relative flex w-1/3 flex-col items-center justify-center space-y-2"
                        >
                            <div class="relative h-28 w-28">
                                @let percent = progress();
                                <svg class="h-full w-full -rotate-90">
                                    <circle
                                        [ngStyle]="{
                                            cx: size / 2 + 'px',
                                            cy: size / 2 + 'px',
                                            r: (size - border_width) / 2 + 'px',
                                            stroke: 'var(--base-200)',
                                            'stroke-width': border_width + 'px',
                                            'stroke-dasharray': circle() + 'px',
                                        }"
                                    ></circle>
                                    <circle
                                        class="progress-bar"
                                        [ngStyle]="{
                                            cx: size / 2 + 'px',
                                            cy: size / 2 + 'px',
                                            r: (size - border_width) / 2 + 'px',
                                            stroke:
                                                percent <= 0.25
                                                    ? 'var(--error)'
                                                    : percent <= 0.5
                                                      ? 'var(--warn)'
                                                      : percent <= 0.75
                                                        ? 'var(--info)'
                                                        : 'var(--success)',
                                            'stroke-width': border_width + 'px',
                                            'stroke-dasharray': circle() + 'px',
                                            'stroke-dashoffset':
                                                radius() + 'px',
                                        }"
                                    ></circle>
                                </svg>
                                <div
                                    class="absolute inset-0 flex items-center justify-center text-4xl font-medium"
                                >
                                    {{ average_rating() || 0 | number: '1.1' }}
                                </div>
                            </div>
                            <div>{{ answer_list().length }} ratings</div>
                        </div>
                        <div class="flex w-2/3 flex-col-reverse">
                            @for (
                                item of selection_items();
                                track item.id || i;
                                let i = $index
                            ) {
                                <div
                                    class="flex w-full flex-row items-center space-x-4 rounded-xl border border-base-100 px-2 hover:border-base-200"
                                >
                                    @let percent = item.percentage || 0;
                                    <div class="w-5 text-right">
                                        {{ i + 1 }}
                                    </div>
                                    <div
                                        progbar
                                        class="h-2.5 flex-1 rounded-full bg-base-200"
                                    >
                                        <div
                                            class="h-2.5 rounded-full"
                                            [ngStyle]="{
                                                width: (percent || 0) + '%',
                                                'background-color':
                                                    percent <= 25
                                                        ? 'var(--error)'
                                                        : percent <= 50
                                                          ? 'var(--warn)'
                                                          : percent <= 75
                                                            ? 'var(--info)'
                                                            : 'var(--success)',
                                            }"
                                        ></div>
                                    </div>
                                    <div class="flex w-6 justify-end font-thin">
                                        {{ (percent || 0) / 100 | percent }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            svg circle {
                fill: transparent;
            }

            .progress-bar {
                stroke-linecap: round;
                transition: stroke-dashoffset 0.5s ease-in-out;
            }
        `,
    ],
    imports: [CommonModule],
})
export class NewSurveyWidgetComponent {
    public readonly response = input<{
        question: SurveyQuestion;
        answers: SurveyAnswer[];
    }>();
    public readonly answer_list = computed(() => this.response().answers || []);
    public readonly selection_items = computed(() => {
        const choices = this.is_selection()
            ? this.response().question?.choices
            : new Array(this.response().question?.max_rating || 0)
                  .fill(0)
                  .map((_, i) => ({ text: i + 1 }));
        return (
            choices?.map((choice) => ({
                id: choice.text,
                name: choice.text,
                percentage:
                    (this.answer_list().filter(
                        ({ answer_json }) =>
                            answer_json === choice.text ||
                            (answer_json instanceof Array &&
                                answer_json.includes(choice.text)),
                    ).length /
                        this.answer_list().length) *
                    100,
            })) || []
        );
    });
    public readonly average_rating = computed(() => {
        const ratings = this.answer_list().map(
            (answer) => +`${answer.answer_json}`,
        );
        const sum = ratings.reduce((acc, val) => acc + val, 0);
        return Math.floor((sum / ratings.length) * 10) / 10;
    });
    public readonly progress = computed(() => {
        return this.average_rating() / this.max_rate();
    });
    public readonly type = computed(
        () => this.response().question?.type || QuestionType.Empty,
    );
    public readonly is_table = computed(
        () =>
            this.type() === QuestionType.Comment_Box ||
            this.type() === QuestionType.Single_Line_Text,
    );
    public readonly is_selection = computed(
        () =>
            this.type() === QuestionType.Drop_Down ||
            this.type() === QuestionType.Radio_Group ||
            this.type() === QuestionType.Check_Box,
    );

    public readonly size = 7 * 16;
    public readonly border_width = 0.75 * 16;

    public readonly circle = computed(() => {
        return Math.round((2 * 3.14159 * (this.size - this.border_width)) / 2);
    });

    public readonly radius = computed(() => {
        return Math.round(this.circle() * (1 - this.progress()));
    });

    public readonly max_rate = computed(
        () => this.response().question?.max_rating || 10,
    );
}
