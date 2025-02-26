import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    generateNewQuestion,
    Question,
    QuestionComponent,
} from '@placeos/survey-suite';

@Component({
    selector: 'mod-question-overlay',
    styles: [],
    template: `
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{
                    (isEdit
                        ? 'APP.CONCIERGE.SURVEY_QUESTION_EDIT'
                        : 'APP.CONCIERGE.SURVEY_QUESTION_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="min-w-[40rem] overflow-x-hidden">
            <section>
                <placeos-question
                    #questionElement
                    [isCard]="false"
                    [value]="question"
                ></placeos-question>
            </section>
        </main>
        <div class="flex flex-row justify-end space-x-2 px-4 py-2">
            <button
                btn
                matRipple
                [disabled]="!questionElement.valid"
                (click)="done()"
            >
                {{ isEdit ? 'Update' : 'Add to bank' }}
            </button>
        </div>
    `,
    standalone: false,
})
export class ModQuestionOverlayComponent implements OnInit {
    @ViewChild('questionElement') questionElement: QuestionComponent;

    isEdit: boolean = false;
    question: Question;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Question,
        private _dialog_ref: MatDialogRef<ModQuestionOverlayComponent>,
    ) {
        this.isEdit = !!(this._data?.id > 0);
        this.question = this._data || generateNewQuestion();
    }

    ngOnInit(): void {}

    public done() {
        this._dialog_ref.close(this.question);
    }
}
