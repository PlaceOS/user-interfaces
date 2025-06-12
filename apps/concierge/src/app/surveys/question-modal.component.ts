import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import {
    generateNewQuestion,
    Question,
    QuestionComponent,
} from '@placeos/survey-suite';
import { addQuestion, updateQuestion } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';

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
            <section>
                <placeos-question
                    #question
                    [isCard]="false"
                    [value]="question"
                ></placeos-question>
            </section>
        </main>
        <div class="flex flex-row justify-end space-x-2 px-4 py-2">
            <button
                btn
                matRipple
                [disabled]="!question_el.valid"
                (click)="save()"
            >
                {{ is_edit ? 'Update' : 'Add to bank' }}
            </button>
        </div>
    `,
    standalone: false,
})
export class QuestionModalComponent {
    @ViewChild('question') question_el: QuestionComponent;

    public is_edit = false;
    public loading = false;
    public question: Question;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Question,
        private _dialog_ref: MatDialogRef<QuestionModalComponent>,
    ) {
        this.is_edit = !!(this._data?.id > 0);
        this.question = this._data || generateNewQuestion();
    }

    public async save() {
        if (!this.question_el.valid) return;
        this.loading = true;
        const call = this.is_edit
            ? updateQuestion(`${this.question.id}`, this.question_el.value)
            : addQuestion(this.question_el.value);
        await lastValueFrom(call);
        this._dialog_ref.close(true);
        notifySuccess('Successfully updated question bank.');
    }
}
