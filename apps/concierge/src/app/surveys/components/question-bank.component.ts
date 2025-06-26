import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import {
    Question,
    QuestionTypeEnumMap,
    QuestionTypeOptions,
} from '@placeos/survey-suite';
import { shareReplay } from 'rxjs/operators';
import {
    QuestionBankService,
    QuestionFilter,
} from '../services/question-bank.service';

@Component({
    selector: 'question-bank',
    styles: [
        `
            :host {
                height: 100%;
            }
        `,
    ],
    template: `
        <div
            class="relative flex h-full w-full flex-col border-l border-base-400 bg-base-200"
        >
            @if ((loading$ | async).length) {
                <div class="absolute inset-0 z-10 flex bg-base-100 opacity-60">
                    <div class="m-auto flex flex-col items-center">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <span>{{ loading$ | async }}</span>
                    </div>
                </div>
            }
            <header class="flex w-full items-center px-4 pt-2">
                <span>{{
                    'APP.CONCIERGE.SURVEY_QUESTION_HEADER' | translate
                }}</span>
                <div class="ml-auto">
                    <button icon matRipple (click)="onAddQuestion()">
                        <icon>add_circle_outline</icon>
                    </button>
                </div>
            </header>
            <div
                class="flex w-full space-x-2 border-b border-base-400 px-4 pb-3"
            >
                <search-input
                    class="w-px flex-1"
                    [placeholder]="
                        'APP.CONCIERGE.SURVEY_QUESTION_SEARCH' | translate
                    "
                    (onSearch)="setFilter({ search: $event })"
                ></search-input>
                <mat-form-field
                    class="no-subscript max-w-32 flex-1"
                    appearance="outline"
                >
                    <mat-select
                        [value]="(filters$ | async)?.type || ''"
                        (selectionChange)="setFilter({ type: $event.value })"
                    >
                        <mat-option value="">
                            {{
                                'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                    | translate
                            }}
                        </mat-option>
                        @for (item of typeOptions; track item) {
                            <mat-option [value]="item.value">
                                {{ item.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div
                cdkDropList
                [cdkDropListData]="questions$ | async"
                (cdkDropListDropped)="onDrop($event)"
                class="flex h-full min-h-0 w-full flex-col space-y-3 overflow-y-auto p-4"
            >
                @for (q of questions$ | async; track q) {
                    <div
                        cdkDrag
                        class="flex w-full items-center space-x-3 border border-base-400 bg-base-100 pr-2"
                    >
                        <div
                            cdkDragHandle
                            class="flex h-full flex-col justify-center bg-base-200 p-1 hover:cursor-move"
                        >
                            <icon>drag_indicator</icon>
                        </div>
                        <div class="flex w-full flex-col space-y-1 py-3">
                            <span>{{ q.title }}</span>
                            <span class="text-sm opacity-40">{{
                                typeMap[q.type]
                            }}</span>
                        </div>
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="actionsMenu"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #actionsMenu="matMenu">
                            <button mat-menu-item (click)="onAddQuestion(q)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">content_copy</icon>
                                    <div>
                                        {{ 'COMMON.DUPLICATE' | translate }}
                                    </div>
                                </div>
                            </button>
                            <button mat-menu-item (click)="onEditQuestion(q)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">edit</icon>
                                    <div>{{ 'COMMON.EDIT' | translate }}</div>
                                </div>
                            </button>
                            <button mat-menu-item (click)="onDeleteQuestion(q)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl text-error"
                                        >delete</icon
                                    >
                                    <div>{{ 'COMMON.DELETE' | translate }}</div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
                @if ((questions$ | async)?.length > 0) {
                    <div></div>
                } @else {
                    <div
                        class="m-auto flex h-20 flex-col items-center space-y-2 opacity-30"
                    >
                        <span>{{
                            'APP.CONCIERGE.SURVEY_QUESTION_EMPTY' | translate
                        }}</span>
                        <span>{{
                            'APP.CONCIERGE.SURVEY_QUESTION_EMPTY_ACTION'
                                | translate
                        }}</span>
                    </div>
                }
            </div>
        </div>
    `,
    standalone: false,
})
export class QuestionBankComponent {
    private service = inject(QuestionBankService);

    loading$ = this.service.loading$.pipe(shareReplay(1));
    questions$ = this.service.filteredQuestions$.pipe(shareReplay(1));
    filters$ = this.service.filter$.pipe(shareReplay(1));
    onDrop = (event: CdkDragDrop<Question[]>) => this.service.onDrop(event);
    onAddQuestion = (q?: Question) =>
        this.service.modQuestionOverlay(q ? { ...q, id: 0 } : null);
    onEditQuestion = (q: Question) => this.service.modQuestionOverlay(q, true);
    onDeleteQuestion = (q: Question) => this.service.confirmDeleteQuestion(q);
    setFilter = (filter: Partial<QuestionFilter>) =>
        this.service.setFilter(filter);

    public typeOptions = QuestionTypeOptions;
    public typeMap = QuestionTypeEnumMap;
}
