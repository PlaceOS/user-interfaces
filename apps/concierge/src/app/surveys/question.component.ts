import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    input,
    model,
    OnInit,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';
import { SurveyQuestion } from '@placeos/ts-client';

import { QuestionType, QuestionTypeOptions } from './types';

@Component({
    selector: 'placeos-question',
    styles: [],
    template: `
        <div
            #container_el
            class="flex w-full flex-col items-center justify-between px-4 py-2"
        >
            @if (!is_card()) {
                <div
                    class="flex w-full flex-row items-center justify-end space-x-4 pb-2"
                >
                    <settings-toggle
                        [ngModel]="preview()"
                        (ngModelChange)="preview.set($event)"
                        [name]="'COMMON.PREVIEW' | translate"
                    ></settings-toggle>
                    <div class="flex-1"></div>
                    @if (!preview()) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select [(ngModel)]="question().type">
                                @for (item of type_options; track item) {
                                    @if (item.id[0] !== '0') {
                                        <mat-option [value]="item.id">
                                            {{ item.name }}
                                        </mat-option>
                                    }
                                }
                            </mat-select>
                        </mat-form-field>

                        <settings-toggle
                            [(ngModel)]="question().required"
                            [name]="'COMMON.REQUIRED' | translate"
                        ></settings-toggle>
                    }
                </div>
            }

            <div
                class="my-2 flex w-full flex-col rounded-sm border-base-200"
                [class.border]="!is_card()"
                [class.p-4]="!is_card()"
            >
                @if (!preview()) {
                    <mat-form-field
                        class="no-subscript mb-2 w-full"
                        appearance="outline"
                    >
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER'
                                    | translate
                            "
                            type="text"
                            [(ngModel)]="question().title"
                        />
                        <mat-error
                            class="input-error"
                            *ngIf="!question()?.title"
                        >
                            {{
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER_ERROR'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                } @else {
                    <span class="mb-4 w-full text-xl">{{
                        question().title
                    }}</span>
                    @if (!question().title) {
                        <span class="mb-4 w-full text-xl opacity-30">{{
                            'Untitled Question'
                        }}</span>
                    }
                }
                @if (question().type === QuestionType.Comment_Box) {
                    <div class="flex w-full flex-col" *ngIf="preview()">
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                cols="30"
                                rows="5"
                                placeholder="Enter option text"
                            ></textarea>
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (question().type === QuestionType.Single_Line_Text) {
                    <div class="flex w-full flex-col" *ngIf="preview()">
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="text"
                                placeholder="Enter option text"
                            />
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (
                    question().type === QuestionType.Check_Box ||
                    question().type === QuestionType.Radio_Group ||
                    question().type === QuestionType.Drop_Down
                ) {
                    @if (question) {
                        <div class="flex w-full flex-col">
                            @if (!preview()) {
                                <div
                                    class="mb-4 flex w-full flex-col space-y-2 pl-2"
                                >
                                    <div
                                        *ngFor="
                                            let item of question().choices;
                                            let i = index
                                        "
                                        class="flex w-full flex-row items-center space-x-2"
                                    >
                                        <span class="p-2 font-mono"
                                            >{{ i + 1 }}.
                                        </span>
                                        <mat-form-field
                                            class="no-subscript w-full"
                                            appearance="outline"
                                        >
                                            <input
                                                matInput
                                                type="text"
                                                [(ngModel)]="item.text"
                                                placeholder="Enter option text"
                                                name="item{{ i }}"
                                            />
                                        </mat-form-field>
                                        <button
                                            icon
                                            matRipple
                                            class="h-12 min-w-12 rounded-sm border border-error text-error"
                                            (click)="deleteOption(i)"
                                        >
                                            <icon> delete_outline</icon>
                                        </button>
                                    </div>
                                </div>
                                <button
                                    btn
                                    matRipple
                                    class="w-full"
                                    (click)="addOption()"
                                >
                                    <div
                                        class="text-gray-800 flex flex-row items-center"
                                    >
                                        <icon>add_circle</icon>
                                        <span>Add option</span>
                                    </div>
                                </button>
                            } @else {
                                @if (is_dropdown) {
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            placeholder="Select an option"
                                        >
                                            <mat-option
                                                *ngFor="
                                                    let item of question()
                                                        .choices
                                                "
                                                [value]="item.value"
                                                >{{ item.text }}</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
                                } @else if (is_checkbox) {
                                    <div
                                        class="grid grid-cols-1 sm:grid-cols-2"
                                    >
                                        @for (
                                            choice of question().choices;
                                            track choice
                                        ) {
                                            <mat-checkbox>{{
                                                choice.text
                                            }}</mat-checkbox>
                                        }
                                    </div>
                                } @else {
                                    <div class="flex w-full flex-col pl-2">
                                        <mat-radio-group>
                                            <div
                                                class="grid grid-cols-1 sm:grid-cols-2"
                                            >
                                                @for (
                                                    choice of question()
                                                        .choices;
                                                    track choice
                                                ) {
                                                    <mat-radio-button
                                                        [value]="choice"
                                                        >{{
                                                            choice.text
                                                        }}</mat-radio-button
                                                    >
                                                }
                                            </div>
                                        </mat-radio-group>
                                    </div>
                                }
                            }
                        </div>
                    }
                } @else if (question().type === QuestionType.Rating) {
                    <div class="flex w-full flex-col">
                        <div btn-grp class="divide-x divide-secondary">
                            @for (idx of rating_options; track idx) {
                                <button
                                    matRipple
                                    class="h-12 w-12 border-y border-secondary first:rounded-l first:border-l last:rounded-r last:border-r!"
                                >
                                    {{ idx }}
                                </button>
                            }
                        </div>
                        <div class="flex flex-col" *ngIf="!preview()">
                            <a-counter
                                [max]="10"
                                [min]="3"
                                [(ngModel)]="question().max_rating"
                                (ngModelChange)="
                                    rating_options = generateArray($event)
                                "
                                class="mb-1 w-40"
                            ></a-counter>
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule,
        MatRippleModule,
        FormsModule,
        TranslatePipe,
        SettingsToggleComponent,
        IconComponent,
        CounterComponent,
    ],
})
export class QuestionComponent implements AfterViewInit, OnInit {
    public is_card = input(true);
    public preview = model(false);
    public readonly question = model(
        new SurveyQuestion({ title: '', type: QuestionType.Single_Line_Text }),
    );

    public QuestionType = QuestionType;
    public type_options = QuestionTypeOptions;
    public rating_options: number[] = [1, 2, 3];

    private readonly _container_el =
        viewChild<ElementRef<HTMLDivElement>>('container_el');

    public get valid() {
        const q = this.question();
        if (!q?.title) return false;
        let is_valid = true;

        switch (q.type) {
            case QuestionType.Check_Box:
            case QuestionType.Radio_Group:
            case QuestionType.Drop_Down:
                const checkop = q.choices?.map((e) => !!e?.text?.length);
                is_valid =
                    !!checkop?.length &&
                    checkop.reduce((acc, val) => acc && val);
                break;
            case QuestionType.Rating:
                is_valid = q.max_rating >= 3;
        }

        return is_valid;
    }

    public get is_dropdown() {
        return this.question()?.type === QuestionType.Drop_Down;
    }

    public get is_checkbox() {
        return this.question()?.type === QuestionType.Check_Box;
    }

    public ngOnInit() {
        const q = this.question();
        if (!q?.choices) q.choices = [];
        if (!q.max_rating) q.max_rating = 3;
        this.rating_options = this.generateArray(q.max_rating);
    }

    public ngAfterViewInit() {
        if (this.is_card()) {
            this._container_el().nativeElement.classList.add(
                'border',
                'border-base-400',
                'bg-base-100',
                'shadow-sm',
            );
        }
    }

    public addOption() {
        this.question.update((q) => {
            q.choices.push({ text: '' });
            return q;
        });
    }

    public deleteOption(index: number) {
        this.question.update((q) => {
            q.choices.splice(index, 1);
            return q;
        });
    }

    public generateArray(max: number) {
        return Array.from({ length: max }, (_, index) => index + 1);
    }
}
