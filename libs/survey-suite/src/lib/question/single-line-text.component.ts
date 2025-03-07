import { Component } from '@angular/core';
import { BaseQuestionComponent } from './base-question.component';

@Component({
    selector: 'single-line-text',
    styles: [],
    template: `
        <div class="flex w-full flex-col" *ngIf="preview">
            <mat-form-field apppearance="outline">
                <input matInput type="text" />
                <mat-hint>{{
                    'APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE' | translate
                }}</mat-hint>
            </mat-form-field>
        </div>
    `,
    standalone: false,
})
export class SingleLineTextComponent extends BaseQuestionComponent {
    constructor() {
        super();
    }
}
