import { Component, OnInit } from "@angular/core";
import { QuestionType } from "../types";
import { BaseQuestionComponent } from "./base-question.component";

@Component({
    selector: 'multi-line-text',
    styles: [],
    template: `
        <div class="flex flex-col w-full" *ngIf="preview">
            <mat-form-field appearance="outline">
                <textarea matInput cols="30" rows="5"></textarea>
                <mat-hint>*Type your answer above. Multiple lines supported</mat-hint>
            </mat-form-field>
        </div>
    `
})

export class MultiLineTextComponent extends BaseQuestionComponent{

    constructor(){
        super();
    }
}