import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
    imports: [CommonModule, MatFormFieldModule, MatInputModule],
})
export class SingleLineTextComponent extends BaseQuestionComponent {}
