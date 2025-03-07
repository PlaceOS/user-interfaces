import { Component } from '@angular/core';
import { BaseQuestionComponent } from './base-question.component';

@Component({
    selector: 'multi-line-text',
    styles: [],
    template: `
        <div class="flex w-full flex-col" *ngIf="preview">
            <mat-form-field appearance="outline">
                <textarea matInput cols="30" rows="5"></textarea>
                <mat-hint>{{
                    'APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE' | translate
                }}</mat-hint>
            </mat-form-field>
        </div>
    `,
    standalone: false,
})
export class MultiLineTextComponent extends BaseQuestionComponent {
    constructor() {
        super();
    }
}
