import { Component, Input, OnInit } from '@angular/core';
import { Question, QuestionType, QuestionTypeOptions } from '../types';

@Component({
    selector: 'placeos-question',
    styles: [],
    template: `
        <div
            class="border bg-base-100 shadow flex flex-col w-full items-center justify-between px-4 py-2 pt-4"
        >
            <ng-container *ngIf="!preview; else previewTitle">
                <mat-form-field class="w-full" appearance="outline">
                    <input
                        matInput
                        placeholder="Enter your question here"
                        type="text"
                        [(ngModel)]="question.title"
                    />
                    <mat-error class="input-error" *ngIf="!question?.title"
                        >Please enter a question</mat-error
                    >
                </mat-form-field>
            </ng-container>

            <ng-template #previewTitle>
                <span class="text-xl w-full mb-4">{{
                    question.title || 'No question'
                }}</span>
            </ng-template>

            <div class="flex flex-col w-full mb-4" [ngSwitch]="question.type">
                <ng-container *ngSwitchCase="QuestionType.Comment_Box">
                    <multi-line-text
                        [question]="question"
                        [preview]="preview"
                    ></multi-line-text>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Single_Line_Text">
                    <single-line-text
                        [question]="question"
                        [preview]="preview"
                    ></single-line-text>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Check_Box">
                    <selection
                        [value]="question"
                        [preview]="preview"
                    ></selection>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Radio_Group">
                    <selection
                        [value]="question"
                        [preview]="preview"
                    ></selection>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Drop_Down">
                    <selection
                        [value]="question"
                        [preview]="preview"
                    ></selection>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Rating">
                    <rating [value]="question" [preview]="preview"></rating>
                </ng-container>
            </div>

            <div
                class="flex flex-row w-full items-center justify-end space-x-4"
                *ngIf="!preview"
            >
                <!-- <mat-form-field appearance="outline" class="h-[2rem]">
                    <div class="mat-form-field-wrapper" style="margin-bottom: 0;">
                        <mat-select [(ngModel)]="question.type">
                            <mat-option
                                *ngFor="let item of typeOptions"
                                [value]="item.value"
                            >
                                {{ item.name }}
                            </mat-option>
                        </mat-select>
                    </div>
                </mat-form-field> -->

                <select [(ngModel)]="question.type">
                    <option
                        *ngFor="let item of typeOptions"
                        [value]="item.value"
                    >
                        {{ item.name }}
                    </option>
                </select>

                <mat-slide-toggle [(ngModel)]="question.isRequired">
                    Required</mat-slide-toggle
                >
                <!-- <mat-slide-toggle [(ngModel)]="preview"> Preview</mat-slide-toggle> -->
            </div>
        </div>
    `,
})
export class QuestionComponent implements OnInit {
    @Input() preview: boolean = false;
    @Input() set value(value: Question) {
        if (value) {
            this.question = value;
        }
        this.hasValue = !!value;
    }

    public QuestionType = QuestionType;
    public typeOptions = QuestionTypeOptions;

    public hasValue = false;
    public question: Question;

    constructor() {}

    public get valid() {
        if (!this.question?.title) return false;
        const q = this.question;
        let valid = true;

        switch (q.type) {
            case QuestionType.Check_Box:
            case QuestionType.Radio_Group:
            case QuestionType.Drop_Down:
                const checkop = q.choices?.map((e) => !!e?.text?.length);
                valid =
                    !!checkop?.length &&
                    checkop.reduce((acc, val) => acc && val);
                break;
            case QuestionType.Rating:
                valid = q.rateMax >= 3;
        }

        return valid;
    }

    ngOnInit(): void {}
}
