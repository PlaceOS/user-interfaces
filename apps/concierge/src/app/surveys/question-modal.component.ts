import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    generateNewQuestion,
    Question,
    QuestionComponent,
} from '@placeos/survey-suite';

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
                (click)="done()"
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
    public question: Question;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Question,
        private _dialog_ref: MatDialogRef<QuestionModalComponent>,
    ) {
        this.is_edit = !!(this._data?.id > 0);
        this.question = this._data || generateNewQuestion();
    }

    public done() {
        this._dialog_ref.close(this.question);
    }
}
