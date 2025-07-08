import { CommonModule } from '@angular/common';
import { Component, Inject, viewChild } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import {
    addQuestion,
    SurveyQuestion,
    updateQuestion,
} from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { lastValueFrom } from 'rxjs';
import { QuestionComponent } from './question.component';

@Component({
    selector: 'question-modal',
    styles: [],
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (is_edit
                        ? 'APP.CONCIERGE.SURVEY_QUESTION_EDIT'
                        : 'APP.CONCIERGE.SURVEY_QUESTION_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[40rem] overflow-x-hidden">
            <placeos-question
                #question_el
                [is_card]="false"
                [question]="question"
            ></placeos-question>
        </main>
        <footer class="flex flex-row justify-end space-x-2 px-4 py-2">
            <button
                btn
                matRipple
                [disabled]="!question_el?.valid"
                (click)="save()"
            >
                {{ is_edit ? 'Update' : 'Add to bank' }}
            </button>
        </footer>
    `,
    imports: [
        CommonModule,
        QuestionComponent,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        MatDialogModule,
    ],
})
export class QuestionModalComponent {
    readonly question_el = viewChild<QuestionComponent>('question_el');

    public is_edit = false;
    public loading = false;
    public question: SurveyQuestion;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SurveyQuestion,
        private _dialog_ref: MatDialogRef<QuestionModalComponent>,
    ) {
        this.is_edit = !!(this._data?.id > 0);
        this.question = this._data || new SurveyQuestion({ type: 'text' });
        console.log('Data', this._data, this.question);
    }

    public async save() {
        const question_el = this.question_el();
        if (!question_el.valid) return;
        this.loading = true;
        const call = this.is_edit
            ? updateQuestion(`${this.question.id}`, question_el.question())
            : addQuestion(question_el.question());
        await lastValueFrom(call);
        this._dialog_ref.close(true);
        notifySuccess('Successfully updated question bank.');
    }
}
