import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';

import { MatRippleModule } from '@angular/material/core';
import { Question, QuestionType, QuestionTypeOptions } from './types';

@Component({
    selector: 'placeos-question',
    styles: [],
    template: `
        <div
            #container_el
            class="flex w-full flex-col items-center justify-between px-4 py-2"
        >
            @if (!isCard) {
                <div
                    class="flex w-full flex-row items-center justify-end space-x-4 pb-2"
                >
                    <settings-toggle
                        [(ngModel)]="preview"
                        [name]="'COMMON.PREVIEW' | translate"
                    ></settings-toggle>
                    <div class="flex-1"></div>
                    @if (!preview) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select [(ngModel)]="question.type">
                                @for (item of typeOptions; track item) {
                                    <mat-option
                                        *ngIf="item.value[0] !== '0'"
                                        [value]="item.value"
                                    >
                                        {{ item.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>

                        <settings-toggle
                            [(ngModel)]="question.isRequired"
                            [name]="'COMMON.REQUIRED' | translate"
                        ></settings-toggle>
                    }
                </div>
            }

            <div
                class="my-2 flex w-full flex-col rounded border-base-200"
                [class.border]="!isCard"
                [class.p-4]="!isCard"
            >
                @if (!preview) {
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
                            [(ngModel)]="question.title"
                        />
                        <mat-error class="input-error" *ngIf="!question?.title">
                            {{
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER_ERROR'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                } @else {
                    <span class="mb-4 w-full text-xl">{{
                        question.title
                    }}</span>
                    @if (!question.title) {
                        <span class="mb-4 w-full text-xl opacity-30">{{
                            'Untitled Question'
                        }}</span>
                    }
                }
                @if (question.type === QuestionType.Comment_Box) {
                    <div class="flex w-full flex-col" *ngIf="preview">
                        <mat-form-field appearance="outline">
                            <textarea matInput cols="30" rows="5"></textarea>
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (question.type === QuestionType.Single_Line_Text) {
                    <div class="flex w-full flex-col" *ngIf="preview">
                        <mat-form-field appearance="outline">
                            <input matInput type="text" />
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (
                    question.type === QuestionType.Check_Box ||
                    question.type === QuestionType.Radio_Group ||
                    question.type === QuestionType.Drop_Down
                ) {
                    @if (question) {
                        <div class="flex w-full flex-col">
                            @if (!preview) {
                                <div
                                    class="mb-4 flex w-full flex-col space-y-2 pl-2"
                                >
                                    <div
                                        *ngFor="
                                            let item of question.choices;
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
                                            class="h-12 min-w-12 rounded border border-error text-error"
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
                                    <mat-form-field>
                                        <mat-select>
                                            <mat-option
                                                *ngFor="
                                                    let item of question.choices
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
                                            choice of question.choices;
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
                                                    choice of question.choices;
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
                } @else if (question.type === QuestionType.Rating) {
                    <!-- <rating [value]="question" [preview]="preview"></rating> -->
                    <div class="flex w-full flex-col p-4">
                        <div btn-grp class="divide-x divide-secondary py-2">
                            @for (idx of rating_options; track idx) {
                                <button
                                    matRipple
                                    class="h-12 w-12 border-y border-secondary first:rounded-l first:border-l last:rounded-r last:!border-r"
                                >
                                    {{ idx }}
                                </button>
                            }
                        </div>
                        <div class="flex flex-col" *ngIf="!preview">
                            <a-counter
                                [max]="10"
                                [min]="3"
                                [(ngModel)]="question.rateMax"
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
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        SettingsToggleComponent,
        FormsModule,
        IconComponent,
        MatRadioModule,
        MatCheckboxModule,
        CounterComponent,
        MatRippleModule,
    ],
})
export class QuestionComponent implements AfterViewInit, OnInit {
    @Input() public isCard = true;
    @Input() public preview = false;
    @Input() public set value(value: Question) {
        if (value) this.question = value;
        this.has_value = !!value;
    }

    public QuestionType = QuestionType;
    public typeOptions = QuestionTypeOptions;

    public has_value = false;
    public question: Question;
    public rating_options: number[] = [1, 2, 3];

    @ViewChild('container_el', { static: true })
    private _container_el: ElementRef<HTMLDivElement>;

    public get valid() {
        if (!this.question?.title) return false;
        const q = this.question;
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
                is_valid = q.rateMax >= 3;
        }

        return is_valid;
    }

    public get is_dropdown() {
        return this.question?.type === QuestionType.Drop_Down;
    }

    public get is_checkbox() {
        return this.question?.type === QuestionType.Check_Box;
    }

    public ngOnInit() {
        if (!this.question?.choices) this.question.choices = [];
        if (!this.question.rateMax) this.question.rateMax = 3;
        this.rating_options = this.generateArray(this.question.rateMax);
    }

    public ngAfterViewInit() {
        if (this.isCard) {
            this._container_el.nativeElement.classList.add(
                'border',
                'border-base-400',
                'bg-base-100',
                'shadow',
            );
        }
    }

    public addOption() {
        this.question.choices.push({ text: '' });
    }

    public deleteOption(index: number) {
        this.question.choices.splice(index, 1);
    }

    public generateArray(max: number) {
        return Array.from({ length: max }, (val, index) => index + 1);
    }
}
