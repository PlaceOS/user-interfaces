import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { map, shareReplay } from 'rxjs/operators';
import { SurveyOptions, SurveyService } from '../services/survey.service';
import { SurveyBuilderService } from '../services/survey-builder.service';
import { OrganisationService } from '@placeos/organisation';
import { TriggerOptions, UISurveyPage } from '@placeos/survey-suite';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'mod-survey',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
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
                <p>{{ loading$ | async }}</p>
            </div>
        </div>
        <header
            class="flex justify-between items-center w-full pt-8 pb-4 pl-4 pr-8"
        >
            <div class="flex items-center">
                <a
                    icon
                    matRipple
                    [routerLink]="[
                        '/surveys',
                        'survey-list',
                        bld_id || survey?.building_id,
                    ]"
                >
                    <app-icon class="flex">arrow_back</app-icon>
                </a>
                <h2 class="text-2xl">
                    {{
                        (id
                            ? 'APP.CONCIERGE.SURVEY_EDIT'
                            : 'APP.CONCIERGE.SURVEY_NEW'
                        ) | translate
                    }}
                </h2>
            </div>
            <button btn matRipple class="w-32" (click)="onSave()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </header>
        <div class="flex items-center space-x-4 px-8 mb-4">
            <mat-form-field appearance="outline" class="flex-1 no-subscript">
                <mat-select
                    [placeholder]="'COMMON.BUILDING_SELECT' | translate"
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
            <mat-form-field appearance="outline" class="flex-1 no-subscript">
                <mat-select
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    [value]="(options$ | async).zone_id"
                    (valueChange)="updateOptions({ zone_id: $event })"
                >
                    <mat-option [value]="(options$ | async).building_id">
                        {{ 'COMMON.LEVEL_ALL' | translate }}
                    </mat-option>
                    <mat-option
                        *ngFor="let level of levels$ | async"
                        [value]="level.id"
                    >
                        {{ level.display_name || level.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" class="flex-1 no-subscript">
                <mat-select
                    [placeholder]="'COMMON.NONE' | translate"
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
        <div class="flex items-center space-x-4 px-8 mb-4" *ngIf="survey">
            <mat-form-field
                name="title"
                appearance="outline"
                class="flex-1 no-subscript"
            >
                <input
                    matInput
                    required
                    [placeholder]="'FORM.TITLE' | translate"
                    [(ngModel)]="survey.title"
                />
            </mat-form-field>
            <mat-form-field
                name="desc"
                appearance="outline"
                class="flex-1 no-subscript"
            >
                <input
                    matInput
                    [placeholder]="'COMMON.DESCRIPTION' | translate"
                    [(ngModel)]="survey.description"
                />
            </mat-form-field>
        </div>
        <div
            *ngIf="survey"
            cdkDropListGroup
            class="flex flex-col w-full h-1/2 flex-1 bg-base-100"
        >
            <nav
                class="flex bg-base-200 border-b border-base-400"
                mat-tab-nav-bar
                [tabPanel]="tabPanel"
            >
                <a
                    mat-tab-link
                    (click)="switchView('design')"
                    [active]="view === 'design'"
                >
                    Questions
                </a>

                <a
                    mat-tab-link
                    (click)="switchView('preview')"
                    [active]="view === 'preview'"
                >
                    {{ 'COMMON.PREVIEW' | translate }}
                </a>
            </nav>
            <div
                mat-tab-nav-panel
                #tabPanel
                class="flex min-h-0 h-full w-full bg-base-200"
            >
                <div
                    *ngIf="view === 'design'"
                    class="mt-0 flex min-h-0 h-full w-full"
                >
                    <div
                        class="flex flex-col h-full w-1/2 space-y-3 overflow-y-auto flex-1"
                    >
                        <div
                            class="flex flex-row items-center justify-end w-full space-x-2 pr-2"
                        >
                            <nav
                                class="max-w-xl"
                                mat-tab-nav-bar
                                [tabPanel]="pagePanel"
                            >
                                <a
                                    mat-tab-link
                                    class="rounded-b-md"
                                    *ngFor="
                                        let p of survey.pages;
                                        let k = index
                                    "
                                    (click)="selectedPageIndex = k"
                                    [active]="selectedPage === p"
                                >
                                    {{
                                        'APP.CONCIERGE.SURVEY_ANSWERS_PAGE'
                                            | translate: { id: k + 1 }
                                    }}
                                </a>
                            </nav>
                            <button
                                icon
                                matRipple
                                (click)="addSurveyPage()"
                                [matTooltip]="
                                    'APP.CONCIERGE.SURVEY_QUESTION_PAGE_NEW'
                                        | translate
                                "
                            >
                                <app-icon>add_circle_outline</app-icon>
                            </button>
                        </div>
                        <div
                            class="flex flex-col py-2 px-6 pt-0 w-full overflow-x-hidden"
                            #pagePanel
                        >
                            <ng-container *ngIf="selectedPage">
                                <div
                                    class="flex flex-row items-center justify-end space-x-2 w-full mb-4"
                                >
                                    <mat-form-field
                                        class="flex-1"
                                        [subscriptSizing]="'dynamic'"
                                        appearance="fill"
                                    >
                                        <input
                                            matInput
                                            [placeholder]="
                                                'APP.CONCIERGE.SURVEY_QUESTION_PAGE_TITLE'
                                                    | translate
                                            "
                                            type="text"
                                            [(ngModel)]="selectedPage.title"
                                        />
                                    </mat-form-field>
                                    <button
                                        btn
                                        matRipple
                                        class="inverse text-error border-error"
                                        *ngIf="selectedPageIndex > 0"
                                        (click)="
                                            removeSurveyPage(selectedPageIndex)
                                        "
                                    >
                                        {{
                                            'APP.CONCIERGE.SURVEY_QUESTION_PAGE_REMOVE'
                                                | translate
                                        }}
                                    </button>
                                </div>
                                <div
                                    cdkDropList
                                    [cdkDropListData]="selectedPage.elements"
                                    (cdkDropListDropped)="
                                        onDrop($event, selectedPage)
                                    "
                                    class="flex flex-col w-full space-y-3"
                                >
                                    <div
                                        cdkDrag
                                        *ngFor="
                                            let q of selectedPage.elements;
                                            let i = index
                                        "
                                        class="flex flex-row rounded-md items-start w-full bg-base-200 py-1"
                                    >
                                        <div class="flex flex-col px-2 h-full">
                                            <span class="text-lg">{{
                                                i + 1
                                            }}</span>
                                        </div>
                                        <placeos-question
                                            class="flex-1"
                                            [preview]="true"
                                            [value]="q"
                                        >
                                        </placeos-question>
                                        <div
                                            class="flex flex-col items-center h-full py-2"
                                        >
                                            <app-icon
                                                cdkDragHandle
                                                class="hover:cursor-move"
                                                >drag_indicator</app-icon
                                            >
                                            <button
                                                class="mt-auto text-error"
                                                icon
                                                matRipple
                                                [matTooltip]="
                                                    'APP.CONCIERGE.SURVEY_QUESTION_REMOVE'
                                                        | translate
                                                "
                                                (click)="onRemove(i)"
                                            >
                                                <app-icon>{{
                                                    q.deleted
                                                        ? 'delete_forever'
                                                        : 'delete'
                                                }}</app-icon>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        *ngIf="
                                            selectedPage?.elements?.length > 0;
                                            else empty_template
                                        "
                                    ></div>
                                </div>
                            </ng-container>
                        </div>
                    </div>
                    <div class="flex flex-col w-[20rem] min-w-[20rem]">
                        <question-bank class="w-full"></question-bank>
                    </div>
                </div>

                <div
                    *ngIf="view === 'preview'"
                    class="flex flex-col h-full w-full px-6 overflow-y-auto"
                >
                    <survey
                        *ngIf="service.surveyModel"
                        [model]="service.surveyModel"
                    ></survey>
                </div>
            </div>
        </div>

        <ng-template #empty_template>
            <div class="flex flex-col m-auto h-52 justify-center space-y-2">
                <img
                    src="assets/icons/dragdrop.svg"
                    class="h-12 opacity-60"
                    alt="Icon of drag and drop"
                />
                <p class="opacity-30">
                    {{ 'APP.CONCIERGE.SURVEY_DND_INFO' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    standalone: false,
})
export class ModSurveyComponent extends AsyncHandler implements OnInit {
    loading$ = this._survey.loading$.pipe(shareReplay(1));
    public id = '';
    public bld_id = '';

    constructor(
        public service: SurveyBuilderService,
        private _survey: SurveyService,
        private _route: ActivatedRoute,
        private _org: OrganisationService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscription(
            'route_param',
            this._route.queryParams.subscribe((params) => {
                const id = params?.survey_id || '';
                this.id = id;
                this._survey.loadSurvey(id);
                const bld_id = params['building_id'];
                this.bld_id = bld_id;
                if (bld_id?.length) this.updateOptions({ building_id: bld_id });
            }),
        );
    }
    view: 'design' | 'preview' = 'design';

    onDrop = (event: any, p: UISurveyPage) =>
        this.service.onDropQuestionToSurvey(event, p);
    onRemove = (index: number) => this.service.removeQuestionFromSurvey(index);
    addSurveyPage = () => this.service.addSurveyPage();
    removeSurveyPage = (index: number) => this.service.confirmDeletePage(index);

    get selectedPageIndex() {
        return this.service.selectedPageIndex;
    }

    set selectedPageIndex(value: number) {
        this.service.selectedPageIndex = value;
    }

    get selectedPage() {
        return this.service.selectedPage;
    }
    get survey() {
        return this.service.getUISurvey();
    }

    switchView(view: 'design' | 'preview') {
        this.view = view;
        if (view === 'preview') {
            this.service.onPreview();
        }
    }

    onTabChange(event: MatTabChangeEvent) {
        if (event.index === 1) {
            this.service.onPreview();
        }
    }
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
        }),
    );
    public readonly triggerOptions = TriggerOptions;

    updateOptions = (op: Partial<SurveyOptions>) => this._survey.setOptions(op);
    onSave = () => this._survey.saveSurvey();
    onCancel = () => this._survey.back();

    onBuildingChange(building_id: string) {
        if (!building_id?.length) return;
        this.doBuildingChange(building_id);
    }

    private doBuildingChange(building_id: string) {
        if (!building_id?.length) return;
        this.updateOptions({ zone_id: building_id, building_id });
    }
}
