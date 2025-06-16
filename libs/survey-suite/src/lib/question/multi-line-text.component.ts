import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseQuestionComponent } from './base-question.component';

@Component({
    selector: 'multi-line-text',
    styles: [],
    template: `
        @if (preview) {
            <div class="flex w-full flex-col">
                <mat-form-field appearance="outline">
                    <textarea matInput cols="30" rows="5"></textarea>
                    <mat-hint>{{
                        'APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE'
                            | translate
                    }}</mat-hint>
                </mat-form-field>
            </div>
        }
    `,
    imports: [MatFormFieldModule, MatInputModule],
})
export class MultiLineTextComponent extends BaseQuestionComponent {}
