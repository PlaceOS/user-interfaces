import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';

import {
    AsyncHandler,
    Building,
    nextValueFrom,
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
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    addSurvey,
    SurveyPage,
    SurveyQuestion,
    updateSurvey,
} from '@placeos/ts-client';
import { first, lastValueFrom } from 'rxjs';

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
                    [routerLink]="['/surveys', 'list', form.value.building_id]"
                >
                    <icon>arrow_back</icon>
                </a>
                <div class="font flex flex-1 flex-col text-2xl">
                    <h2>
                        {{
                            (form.value.id
                                ? 'APP.CONCIERGE.SURVEY_EDIT'
                                : 'APP.CONCIERGE.SURVEY_NEW'
                            ) | translate
                        }}
                    </h2>
                </div>
                <button btn matRipple class="w-32">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </div>
            <div settings class="mb-2 flex space-x-2" [formGroup]="form">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.BUILDING_SELECT' | translate"
                        formControlName="building_id"
                    >
                        <mat-option
                            *ngFor="let b of buildings$ | async"
                            [value]="b.id"
                            (click)="onBuildingClick(b)"
                            >{{ b.display_name || b.name }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        formControlName="zone_id"
                    >
                        <mat-option [value]="form.value.building_id">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
                        <mat-option
                            *ngFor="let b of levels$ | async"
                            [value]="b.id"
                            >{{ b.display_name || b.name }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.NONE' | translate"
                        formControlName="trigger"
                    >
                        <mat-option
                            *ngFor="let op of trigger_types"
                            [value]="op.id"
                        >
                            {{ op.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div details class="mb-2 flex space-x-2" [formGroup]="form">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        required
                        [placeholder]="'FORM.TITLE' | translate"
                        formControlName="title"
                    />
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        formControlName="description"
                    />
                </mat-form-field>
            </div>
            <div
                view-select
                class="flex w-full items-center space-x-2 rounded bg-base-200 p-2"
            >
                <button
                    matRipple
                    class="flex h-10 flex-1 items-center justify-center rounded hover:bg-base-300"
                    [class.bg-secondary]="view() === 'builder'"
                    [class.text-secondary-content]="view() === 'builder'"
                    (click)="view.set('builder')"
                >
                    {{ 'APP.CONCIERGE.SURVEY_BUILDER' | translate }}
                </button>
                <button
                    matRipple
                    class="flex h-10 flex-1 items-center justify-center rounded hover:bg-base-300"
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
                class="flex h-px w-full flex-1 space-x-2 bg-base-200 px-8 py-2"
            >
                <div
                    pages
                    class="sticky top-0 h-full w-1/2 flex-1 space-y-2 overflow-auto"
                    [formGroup]="active_page_form()"
                >
                    <div class="flex items-center space-x-2">
                        <div
                            class="relative h-[calc(3rem+2px)] flex-1 overflow-hidden rounded border border-base-300 bg-base-100"
                        >
                            <mat-tab-group
                                [selectedIndex]="active_page()"
                                (selectedTabChange)="onPageChange($event)"
                            >
                                @for (
                                    page of form.value.pages;
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
                            class="h-12 w-12 rounded border border-base-300 bg-base-100"
                            matTooltip="Add Page"
                            (click)="addPage()"
                        >
                            <icon>add</icon>
                        </button>
                    </div>
                    <div class="flex items-center space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1 rounded bg-base-100"
                        >
                            <input
                                matInput
                                formControlName="title"
                                placeholder="Page Title"
                            />
                        </mat-form-field>
                        @if (form.value.pages.length > 1) {
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 rounded border border-base-300 bg-base-100 text-error"
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
                        @let page = active_page_form()?.value;
                        @if (page?.question_order.length > 0) {
                            @for (
                                q_id of page.question_order;
                                track q_id;
                                let idx = $index
                            ) {
                                @let quest =
                                    q_id | question: questions().length;
                                @if (quest) {
                                    <div cdkDrag class="relative -ml-px flex">
                                        <div
                                            class="border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50"
                                            *cdkDragPlaceholder
                                        ></div>
                                        <div
                                            class="relative left-px z-10 flex flex-col items-center space-y-1"
                                        >
                                            <div
                                                class="relative left-px flex h-10 w-10 items-center justify-center rounded-l border-y border-l border-base-400 bg-base-100 p-2 font-mono"
                                            >
                                                {{ idx + 1 }}
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                cdkDragHandle
                                                class="cursor-grab rounded-l rounded-r-none border-y border-l border-base-400 bg-base-100"
                                                matTooltip="Reorder Question"
                                            >
                                                <icon class="text-xl"
                                                    >drag_indicator</icon
                                                >
                                            </button>
                                            <button
                                                icon
                                                matRipple
                                                class="rounded-l rounded-r-none border-y border-l border-base-400 bg-base-100 text-error"
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
                    class="h-full w-[20rem] space-y-2 overflow-auto rounded border border-base-300 bg-base-100 pb-2 shadow"
                >
                    <div class="sticky top-0 z-10 bg-base-100">
                        <div
                            class="flex items-center justify-between border-b border-base-200 px-2 py-1"
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
                            class="flex items-center justify-between space-x-2 border-b border-base-200 p-2"
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
                                    [(ngModel)]="search_text"
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
                                    [ngModel]="selected_type"
                                    (ngModelChange)="onTypeChange($event)"
                                >
                                    <mat-option value="">
                                        {{
                                            'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                                | translate
                                        }}
                                    </mat-option>
                                    <mat-option
                                        *ngFor="let item of question_options"
                                        [value]="item.id"
                                    >
                                        {{ item.name }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <div
                        class="space-y-2 px-2"
                        cdkDropList
                        [cdkDropListData]="questions$ | async"
                        [cdkDropListConnectedTo]="[page_list]"
                    >
                        @for (
                            question of questions$ | async;
                            track question.id
                        ) {
                            <div
                                class="relative flex w-full items-center rounded border border-base-200 bg-base-200"
                                cdkDrag
                            >
                                <div
                                    class="border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50"
                                    *cdkDragPlaceholder
                                ></div>
                                <button
                                    cdkDragHandle
                                    class="flex h-20 h-full flex-col justify-center rounded bg-base-200 p-1 hover:cursor-move"
                                    matRipple
                                    matTooltip="Drag Question onto page"
                                >
                                    <icon>drag_indicator</icon>
                                </button>
                                <div class="flex-1 bg-base-100 py-2 pl-4 pr-12">
                                    <div>{{ question.title }}</div>
                                    <div class="text-sm opacity-40">
                                        {{ question_types[question.type] }}
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    class="absolute right-1 top-1"
                                    [matMenuTriggerFor]="actionsMenu"
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #actionsMenu="matMenu">
                                    <button
                                        mat-menu-item
                                        (click)="duplicateQuestion(q)"
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
                                        (click)="editQuestion(q)"
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
                                        (click)="removeQuestion(q)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl text-error"
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
                    [survey]="form.value"
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
        ReactiveFormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
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
    public readonly active_page_form = computed(
        () => this.page_forms[this.active_page()],
    );
    public readonly loading = signal(false);
    public readonly selected_type = signal('');
    public readonly search_text = signal('');
    public readonly questions = signal([]);

    public readonly buildings$ = this._org.building_list;
    public readonly levels$ = this._org.active_levels;
    public readonly questions$ = this._service.filtered_questions$;
    public readonly trigger_types = TriggerOptions;
    public readonly question_types = QuestionTypeMap;
    public readonly question_options = QuestionTypeOptions;
    public readonly form = new FormGroup({
        id: new FormControl<string | number>(''),
        title: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        trigger: new FormControl(''),
        building_id: new FormControl(''),
        zone_id: new FormControl(''),
        pages: new FormControl<SurveyPage[]>([
            { title: '', description: '', question_order: [] },
        ]),
    });

    public readonly page_forms: FormGroup[] = [
        new FormGroup({
            title: new FormControl('', []),
            description: new FormControl(''),
            question_order: new FormControl([]),
        }),
    ];

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this._service.setSurvey(params.get('id'));
                }
            }),
        );
        this.subscription(
            'survey',
            this._service.survey$.subscribe((s) => {
                if (s) {
                    this.form.patchValue(s);
                    console.log('Survey loaded', s);
                    while (s.pages.length > this.page_forms.length) {
                        this.page_forms.push(
                            new FormGroup({
                                title: new FormControl('', []),
                                description: new FormControl(''),
                                question_order: new FormControl([]),
                            }),
                        );
                    }
                }
            }),
        );
        this.subscription(
            'form_pages',
            this.form.valueChanges.subscribe(({ pages }) => {
                while (pages.length > this.page_forms.length) {
                    this.page_forms.push(
                        new FormGroup({
                            title: new FormControl('', []),
                            description: new FormControl(''),
                            question_order: new FormControl([]),
                        }),
                    );
                }
                for (let i = 0; i < pages.length; i++) {
                    const page = pages[i];
                    this.page_forms[i].patchValue(page);
                }
            }),
        );
        this.questions$
            .pipe(first((_) => _.length > 0))
            .subscribe((l) =>
                this.timeout('questions', () => this.questions.set(l)),
            );
    }

    public onPageChange(event: MatTabChangeEvent) {
        const index = event.index;
        this.active_page.set(index);
    }

    public addPage() {
        const pages = this.form.value.pages;
        this.page_forms.push(
            new FormGroup({
                title: new FormControl('', []),
                description: new FormControl(''),
                question_order: new FormControl([]),
            }),
        );
        this.form.patchValue({
            pages: [
                ...pages,
                { title: '', description: '', question_order: [] },
            ],
        });
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
        const pages = this.form.value.pages;
        const page_form = this.page_forms[this.active_page()];
        pages.splice(this.active_page(), 1);
        if (this.active_page() >= pages.length) {
            page_form.patchValue({
                title: '',
                description: '',
                question_order: [],
            });
            this.active_page.set(pages.length - 1);
        }
        this.form.patchValue({ pages });
    }

    public removePageQuestion(idx: number) {
        const page_form = this.page_forms[this.active_page()];
        const order = page_form.get('question_order').value;
        order.splice(idx, 1);
        page_form.patchValue({ question_order: order });
    }

    public async drop(event: CdkDragDrop<SurveyQuestion[]>) {
        if (event.previousContainer === event.container) {
            const order =
                this.page_forms[this.active_page()].get('question_order').value;
            moveItemInArray(order, event.previousIndex, event.currentIndex);
            this.page_forms[this.active_page()].patchValue({
                question_order: order,
            });
        } else {
            const questions = await nextValueFrom(this.questions$);
            const q_id = questions[event.previousIndex].id;
            const order =
                this.page_forms[this.active_page()].get('question_order').value;
            order.splice(event.currentIndex, 0, q_id);
            this.page_forms[this.active_page()].patchValue({
                question_order: order,
            });
        }
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
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this.loading.set(true);
        const page_count = this.form.value.pages?.length || 0;
        const pages = [];
        for (let i = 0; i < page_count; i++) {
            const page_form = this.page_forms[i];
            pages.push(page_form.value);
        }
        this.form.patchValue({ pages });
        const survey = this.form.value;
        const call = this.form.value.id
            ? addSurvey(survey as any)
            : updateSurvey(`${survey.id}`, survey as any);
        await lastValueFrom(call).catch((error) => {
            notifyError('Failed to save survey details. Error: ', error);
            throw error;
        });
        notifySuccess('Successfully saved survey details.');
        this.loading.set(false);
    }
}
