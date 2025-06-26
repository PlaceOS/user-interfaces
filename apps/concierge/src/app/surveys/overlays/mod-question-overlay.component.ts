import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (isEdit
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
    private _data = inject<Question>(MAT_DIALOG_DATA);
    private _dialog_ref = inject<MatDialogRef<ModQuestionOverlayComponent>>(MatDialogRef);

    @ViewChild('questionElement') questionElement: QuestionComponent;

    isEdit: boolean = false;
    question: Question;

    constructor() {
        this.isEdit = !!(this._data?.id > 0);
        this.question = this._data || generateNewQuestion();
    }

    ngOnInit(): void {}

    public done() {
        this._dialog_ref.close(this.question);
    }
}
