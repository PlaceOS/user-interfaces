import { Component, OnInit } from "@angular/core";
import { QuestionType } from "../types";
import { BaseQuestionComponent } from "./base-question.component";

@Component({
    selector: 'multi-line-text',
    styles: [],
    template: `
        <div class="flex flex-col w-full items-center justify-between p-4">

            <mat-form-field appearance="outline" *ngIf="!isPreview; else previewTitle;">
                <input matInput 
                    [placeholder]="placeholderTitle"
                    type="text" 
                    [ngModel]="question.title"
                    [disabled]="readonly">
                <mat-error class="input-error" *ngIf="!question?.title">Please enter a question</mat-error>
            </mat-form-field>

            <ng-template #previewTitle>
                <span>{{question.title || 'No question'}}</span>
            </ng-template>

        </div>
    `
})

export class MultiLineTextComponent extends BaseQuestionComponent implements OnInit{

    constructor(){
        super();
    }

    ngOnInit(): void {
    }
}