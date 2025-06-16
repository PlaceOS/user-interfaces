import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseQuestionComponent } from './base-question.component';

@Component({
    selector: 'single-line-text',
    styles: [],
    template: `
        @if (preview) {
            <div class="flex w-full flex-col">
                <mat-form-field apppearance="outline">
                    <input matInput type="text" />
                    <mat-hint>{{
                        'APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE' | translate
                    }}</mat-hint>
                </mat-form-field>
            </div>
        }
    `,
    imports: [MatFormFieldModule, MatInputModule],
})
export class SingleLineTextComponent extends BaseQuestionComponent {}
