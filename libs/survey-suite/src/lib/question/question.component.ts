import { Component, Input, OnInit } from '@angular/core';
import { Question, QuestionType, QuestionTypeOptions } from '../types';

@Component({
    selector: 'placeos-question',
    styles: [],
    template: `
        <div class="shadow flex flex-col w-full items-center justify-between px-4 py-2">
            <ng-container *ngIf="!readonly; else previewTitle">
                <mat-form-field class="w-full" appearance="outline">
                    <input
                        matInput
                        placeholder="Enter your question here"
                        type="text"
                        [(ngModel)]="question.title"
                        [disabled]="readonly">
                    <mat-error class="input-error" *ngIf="!question?.title">Please enter a question</mat-error>
                </mat-form-field>
            </ng-container>

            <ng-template #previewTitle>
                <span class="text-xl w-full mb-4">{{ question.title || 'No question' }}</span>
            </ng-template>

            <div class="flex flex-col w-full mb-4" [ngSwitch]="question.type">
                <ng-container *ngSwitchCase="QuestionType.Multi_Line_Text">
                    <multi-line-text [question]="question" [readonly]="readonly"></multi-line-text>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Single_Line_Text">
                    <single-line-text [question]="question" [readonly]="readonly"></single-line-text>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Multi_Select">
                    <selection [value]="question" [readonly]="readonly"></selection>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Single_Select">
                    <selection [value]="question" [readonly]="readonly"></selection>
                </ng-container>

                <ng-container *ngSwitchCase="QuestionType.Rating">
                    <rating [value]="question" [readonly]="readonly"></rating>
                </ng-container>
            </div>

            <div class="flex flex-row w-full items-center justify-end space-x-4" *ngIf="!readonly">
                <mat-form-field appearance="none" class="h-[2rem]">
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
                </mat-form-field>

                <mat-slide-toggle [(ngModel)]="question.isRequired"> Required</mat-slide-toggle>
                <mat-slide-toggle [(ngModel)]="readonly"> Preview</mat-slide-toggle>
                <!-- <button mat-icon-button color="warn" >
                    <mat-icon>delete_outline</mat-icon>
                </button> -->
            </div>
        </div>
    `,
})
export class QuestionComponent implements OnInit {
    @Input() readonly: boolean = false;
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

    public get valid(){
        if(!this.question) return false;
        const q = this.question;
        let valid = !!q.title;

        switch(q.type){
            case QuestionType.Single_Select:
            case QuestionType.Multi_Select: 
                const checkop = q.options?.map(e => !!e.text.length);
                valid = !!checkop?.length && checkop.reduce((acc,val) => acc && val);
                break;
            case QuestionType.Rating:
                valid = !!q.rateValues?.length;
        }

        return valid;
    }

    ngOnInit(): void {
    }
}
