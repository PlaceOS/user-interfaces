import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';

import {
    AsyncHandler,
    Building,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';

import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    addSurvey,
    SurveyPage,
    SurveyQuestion,
    updateSurvey,
} from '@placeos/ts-client';

import {
    IconComponent,
    SurveyOutletComponent,
    TranslatePipe,
} from '@placeos/components';
import { NewSurveyService } from './new-survey.service';
import { QuestionComponent } from './question.component';
import { QuestionPipe } from './question.pipe';
import { QuestionTypeMap, QuestionTypeOptions, TriggerOptions } from './types';

@Component({
    selector: 'survey-builder',
    template: `
        <div class="sticky top-0 mb-2 px-8">
            <div header class="flex items-center py-4">
                <a
                    icon
                    matRipple
                    [routerLink]="['/surveys', 'list', model().building_id]"
                >
                    <icon>arrow_back</icon>
                </a>
                <div class="font flex flex-1 flex-col text-2xl">
                    <h2>
                        {{
                            (model().id
                                ? 'APP.CONCIERGE.SURVEY_EDIT'
                                : 'APP.CONCIERGE.SURVEY_NEW'
                            ) | translate
                        }}
                    </h2>
                </div>
                <button btn matRipple class="w-32" (click)="saveSurvey()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </div>
            <div settings class="mb-2 flex space-x-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.BUILDING_SELECT' | translate"
                        [formField]="form.building_id"
                    >
                        @for (b of buildings(); track b) {
                            <mat-option [value]="b.id">{{
                                b.display_name || b.name
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        [formField]="form.zone_id"
                    >
                        <mat-option [value]="model().building_id">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
                        @for (b of levels(); track b) {
                            <mat-option [value]="b.id">{{
                                b.display_name || b.name
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.NONE' | translate"
                        [formField]="form.trigger"
                    >
                        @for (op of trigger_types; track op) {
                            <mat-option [value]="op.id">
                                {{ op.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div details class="mb-2 flex space-x-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        [placeholder]="'FORM.TITLE' | translate"
                        [formField]="form.title"
                    />
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                    />
                </mat-form-field>
            </div>
            <div
                view-select
                class="bg-base-200 flex w-full items-center space-x-2 rounded-sm p-2"
            >
                <button
                    matRipple
                    class="hover:bg-base-300 flex h-10 flex-1 items-center justify-center rounded-sm"
                    [class.bg-secondary]="view() === 'builder'"
                    [class.text-secondary-content]="view() === 'builder'"
                    (click)="view.set('builder')"
                >
                    {{ 'APP.CONCIERGE.SURVEY_BUILDER' | translate }}
                </button>
                <button
                    matRipple
                    class="hover:bg-base-300 flex h-10 flex-1 items-center justify-center rounded-sm"
                    [class.bg-secondary]="view() === 'preview'"
                    [class.text-secondary-content]="view() === 'preview'"
                    (click)="view.set('preview')"
                >
                    {{ 'COMMON.PREVIEW' | translate }}
                </button>
            </div>
        </div>
        @if (view() === 'builder') {
            <div
                builder
                class="bg-base-200 flex h-px w-full flex-1 space-x-2 px-8 py-2"
            >
                <div
                    pages
                    class="sticky top-0 h-full w-1/2 flex-1 space-y-2 overflow-auto"
                >
                    <div class="flex items-center space-x-2">
                        <div
                            class="border-base-300 bg-base-100 relative h-[calc(3rem+2px)] flex-1 overflow-hidden rounded-sm border"
                        >
                            <mat-tab-group
                                [selectedIndex]="active_page()"
                                (selectedTabChange)="onPageChange($event)"
                            >
                                @for (
                                    page of model().pages;
                                    track idx;
                                    let idx = $index
                                ) {
                                    <mat-tab
                                        [label]="
                                            page.title || 'Page ' + (idx + 1)
                                        "
                                    ></mat-tab>
                                }
                            </mat-tab-group>
                        </div>

                        <button
                            icon
                            matRipple
                            class="border-base-300 bg-base-100 h-12 w-12 rounded-sm border"
                            matTooltip="Add Page"
                            (click)="addPage()"
                        >
                            <icon>add</icon>
                        </button>
                    </div>
                    <div class="flex items-center space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript bg-base-100 w-1/2 flex-1 rounded-sm"
                        >
                            <input
                                matInput
                                [ngModel]="active_page_value().title"
                                (ngModelChange)="
                                    updateActivePage({ title: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Page Title"
                            />
                        </mat-form-field>
                        @if (model().pages.length > 1) {
                            <button
                                icon
                                matRipple
                                class="border-base-300 bg-base-100 text-error h-12 w-12 rounded-sm border"
                                matTooltip="Remove Page"
                                (click)="removePage()"
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    </div>
                    <div
                        page-questions
                        cdkDropList
                        #page_list="cdkDropList"
                        (cdkDropListDropped)="drop($event)"
                        class="space-y-2"
                    >
                        @let page = active_page_value();
                        @if (page?.question_order.length > 0) {
                            @for (
                                q_id of page.question_order;
                                track q_id;
                                let idx = $index
                            ) {
                                @let quest = $any(q_id) | question;
                                @if (quest) {
                                    <div cdkDrag class="relative -ml-px flex">
                                        <div
                                            class="border-base-content bg-base-300 h-20 w-full rounded-lg border-3 border-dashed opacity-50"
                                            *cdkDragPlaceholder
                                        ></div>
                                        <div
                                            class="relative left-px z-10 flex flex-col items-center space-y-1"
                                        >
                                            <div
                                                class="border-base-400 bg-base-100 relative left-px flex h-10 w-10 items-center justify-center rounded-l border-y border-l p-2 font-mono"
                                            >
                                                {{ idx + 1 }}
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                cdkDragHandle
                                                class="border-base-400 bg-base-100 cursor-grab rounded-l rounded-r-none border-y border-l"
                                                matTooltip="Reorder Question"
                                            >
                                                <icon class="text-xl"
                                                    >drag_indicator</icon
                                                >
                                            </button>
                                            <button
                                                icon
                                                matRipple
                                                class="border-base-400 bg-base-100 text-error rounded-l rounded-r-none border-y border-l"
                                                matTooltip="Remove Question"
                                                (click)="
                                                    removePageQuestion(idx)
                                                "
                                            >
                                                <icon class="text-xl"
                                                    >delete</icon
                                                >
                                            </button>
                                        </div>
                                        <placeos-question
                                            class="z-0 flex-1"
                                            [preview]="true"
                                            [question]="quest"
                                        >
                                        </placeos-question>
                                    </div>
                                }
                            }
                        } @else {
                            <div
                                class="flex h-full w-full flex-col items-center justify-center space-y-4 p-12 text-center opacity-30"
                            >
                                <icon class="text-8xl">list</icon>
                                <p>No questions added to this page yet.</p>
                                <p>
                                    Drag and drop questions to from the right to
                                    start building your survey.
                                </p>
                            </div>
                        }
                    </div>
                </div>
                <div
                    questions
                    class="border-base-300 bg-base-100 h-full w-[20rem] space-y-2 overflow-auto rounded-sm border pb-2 shadow-sm"
                >
                    <div class="bg-base-100 sticky top-0 z-10">
                        <div
                            class="border-base-200 flex items-center justify-between border-b px-2 py-1"
                        >
                            <h3 class="px-2 font-medium">
                                {{
                                    'APP.CONCIERGE.SURVEY_QUESTION_HEADER'
                                        | translate
                                }}
                            </h3>
                            <button
                                icon
                                matRipple
                                matTooltip="Add Question"
                                (click)="editQuestion()"
                            >
                                <icon>add</icon>
                            </button>
                        </div>
                        <div
                            class="border-base-200 flex items-center justify-between space-x-2 border-b p-2"
                        >
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <icon
                                    class="relative -left-1 text-2xl"
                                    matPrefix
                                    >search</icon
                                >
                                <input
                                    matInput
                                    [ngModel]="search_text()"
                                    (ngModelChange)="onSearchChange($event)"
                                    placeholder="Search..."
                                />
                            </mat-form-field>
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <mat-select
                                    [placeholder]="
                                        'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                            | translate
                                    "
                                    [ngModel]="selected_type()"
                                    (ngModelChange)="onTypeChange($event)"
                                >
                                    <mat-option value="">
                                        {{
                                            'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                                | translate
                                        }}
                                    </mat-option>
                                    @for (
                                        item of question_options;
                                        track item
                                    ) {
                                        <mat-option [value]="item.id">
                                            {{ item.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <div
                        class="space-y-2 px-2"
                        cdkDropList
                        [cdkDropListData]="questions()"
                        [cdkDropListConnectedTo]="[page_list]"
                    >
                        @for (question of questions(); track question.id) {
                            <div
                                class="border-base-200 bg-base-200 relative flex w-full items-center rounded-sm border"
                                cdkDrag
                            >
                                <div
                                    class="border-base-content bg-base-300 h-20 w-full rounded-lg border-3 border-dashed opacity-50"
                                    *cdkDragPlaceholder
                                ></div>
                                <button
                                    cdkDragHandle
                                    class="bg-base-200 flex h-20 h-full flex-col justify-center rounded-sm p-1 hover:cursor-move"
                                    matRipple
                                    matTooltip="Drag Question onto page"
                                >
                                    <icon>drag_indicator</icon>
                                </button>
                                <div class="bg-base-100 flex-1 py-2 pr-12 pl-4">
                                    <div>{{ question.title }}</div>
                                    <div class="text-sm opacity-40">
                                        {{ question_types[question.type] }}
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    class="absolute top-1 right-1"
                                    [matMenuTriggerFor]="actionsMenu"
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #actionsMenu="matMenu">
                                    <button
                                        mat-menu-item
                                        (click)="duplicateQuestion(question)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl"
                                                >content_copy</icon
                                            >
                                            <div>
                                                {{
                                                    'COMMON.DUPLICATE'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="editQuestion(question)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl">edit</icon>
                                            <div>
                                                {{ 'COMMON.EDIT' | translate }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="removeQuestion(question)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-error text-xl"
                                                >delete</icon
                                            >
                                            <div>
                                                {{
                                                    'COMMON.DELETE' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                </mat-menu>
                            </div>
                        }
                    </div>
                </div>
            </div>
        } @else {
            <div preview class="h-px w-full flex-1">
                <survey-outlet
                    [survey]="$any(model())"
                    [preview]="true"
                ></survey-outlet>
            </div>
        }
        @if (loading()) {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>Saving survey details...</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        FormField,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        IconComponent,
        TranslatePipe,
        SurveyOutletComponent,
        DragDropModule,
        MatMenuModule,
        MatTabsModule,
        QuestionPipe,
        QuestionComponent,
    ],
})
export class SurveyBuilderComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _service = inject(NewSurveyService);
    private _route = inject(ActivatedRoute);

    public readonly view = signal<'builder' | 'preview'>('builder');
    public readonly active_page = signal(0);
    public readonly loading = signal(false);
    public readonly selected_type = signal('');
    public readonly search_text = signal('');

    public readonly buildings = this._org.building_list;
    public readonly levels = this._org.active_levels;
    public readonly questions = this._service.filtered_questions;
    public readonly trigger_types = TriggerOptions;
    public readonly question_types = QuestionTypeMap;
    public readonly question_options = QuestionTypeOptions;
    public readonly model = signal({
        id: '' as string | number,
        title: '',
        description: '',
        trigger: '',
        building_id: '',
        zone_id: '',
        pages: [
            { title: '', description: '', question_order: [] },
        ] as SurveyPage[],
    });
    public readonly form = form(this.model, (p) => {
        required(p.title);
    });

    /** The page currently being edited. */
    public readonly active_page_value = computed(
        () =>
            this.model().pages[this.active_page()] || {
                title: '',
                description: '',
                question_order: [],
            },
    );

    /** Sync the form with the active survey whenever it loads */
    private readonly _sync_survey = effect(() => {
        const survey = this._service.survey() as any;
        if (!survey) return;
        this.model.update((m) => ({
            ...m,
            id: survey.id ?? m.id,
            title: survey.title ?? m.title,
            description: survey.description ?? m.description,
            trigger: survey.trigger ?? m.trigger,
            building_id: survey.building_id ?? m.building_id,
            zone_id: survey.zone_id ?? m.zone_id,
            pages: survey.pages?.length ? survey.pages : m.pages,
        }));
    });

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this._service.setSurvey(params.get('id'));
                }
            }),
        );
    }

    /** Apply a patch to the page currently being edited. */
    public updateActivePage(patch: Partial<SurveyPage>) {
        const idx = this.active_page();
        this.model.update((m) => ({
            ...m,
            pages: m.pages.map((page, i) =>
                i === idx ? { ...page, ...patch } : page,
            ),
        }));
    }

    public onPageChange(event: MatTabChangeEvent) {
        const index = event.index;
        this.active_page.set(index);
    }

    public addPage() {
        this.model.update((m) => ({
            ...m,
            pages: [
                ...m.pages,
                { title: '', description: '', question_order: [] },
            ],
        }));
    }

    public setBuilding(bld: Building) {
        this._org.building = bld;
    }

    public removeQuestion(q: SurveyQuestion) {
        this._service.removeQuestion(q);
    }

    public duplicateQuestion(q: SurveyQuestion) {
        this._service.editQuestion({ ...q, id: undefined });
    }

    public editQuestion(q?: SurveyQuestion) {
        this._service.editQuestion(q);
    }

    public removePage() {
        const remove_index = this.active_page();
        const pages = this.model().pages.filter((_, i) => i !== remove_index);
        if (remove_index >= pages.length) {
            this.active_page.set(Math.max(0, pages.length - 1));
        }
        this.model.update((m) => ({ ...m, pages }));
    }

    public removePageQuestion(idx: number) {
        const order = [...this.active_page_value().question_order];
        order.splice(idx, 1);
        this.updateActivePage({ question_order: order });
    }

    public async drop(event: CdkDragDrop<SurveyQuestion[]>) {
        const order = [...this.active_page_value().question_order];
        if (event.previousContainer === event.container) {
            moveItemInArray(order, event.previousIndex, event.currentIndex);
        } else {
            const questions = this.questions();
            const q_id = questions[event.previousIndex].id;
            order.splice(event.currentIndex, 0, q_id);
        }
        this.updateActivePage({ question_order: order });
    }

    public onSearchChange(search_text: string) {
        this.search_text.set(search_text);
        this._service.setQuestionFilters({
            search_text,
            type: this.selected_type as any,
        });
    }

    public onTypeChange(type: any) {
        this.selected_type.set(type);
        this._service.setQuestionFilters({
            type,
            search_text: this.search_text(),
        });
    }

    public async saveSurvey() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        const survey = this.model();
        const call = survey.id
            ? updateSurvey(`${survey.id}`, survey as any)
            : addSurvey(survey as any);
        await call.catch((error) => {
            notifyError('Failed to save survey details. Error: ', error);
            throw error;
        });
        notifySuccess('Successfully saved survey details.');
        this.loading.set(false);
    }
}
