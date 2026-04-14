import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    addQuestion,
    SurveyQuestion,
    updateQuestion,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { QuestionComponent } from './question.component';

@Component({
    selector: 'question-modal',
    styles: [],
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (is_edit
                        ? 'APP.CONCIERGE.SURVEY_QUESTION_EDIT'
                        : 'APP.CONCIERGE.SURVEY_QUESTION_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close aria-label="Close dialog">
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-160 overflow-x-hidden">
            <placeos-question
                #question_el
                [is_card]="false"
                [question]="question()"
            ></placeos-question>
        </main>
        <footer class="flex flex-row justify-end space-x-2 px-4 py-2">
            <button
                btn
                matRipple
                [disabled]="!question_el?.valid()"
                (click)="save()"
            >
                {{ is_edit() ? 'Update' : 'Add to bank' }}
            </button>
        </footer>
    `,
    imports: [
        QuestionComponent,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        MatDialogModule,
    ],
})
export class QuestionModalComponent implements OnInit {
    private _data: SurveyQuestion = inject(MAT_DIALOG_DATA);
    private _dialog_ref = inject(MatDialogRef<QuestionModalComponent>);

    public readonly question_el = viewChild<QuestionComponent>('question_el');

    public readonly is_edit = signal(false);
    public readonly loading = signal(false);
    public readonly question = signal<SurveyQuestion | undefined>(undefined);

    public ngOnInit() {
        this.is_edit.set(!!(this._data?.id > 0));
        this.question.set(this._data || new SurveyQuestion({ type: 'text' }));
    }

    public async save() {
        const question_el = this.question_el();
        if (!question_el?.valid()) return;
        this.loading.set(true);
        const call = this.is_edit()
            ? updateQuestion(`${this.question().id}`, question_el.question())
            : addQuestion(question_el.question());
        await lastValueFrom(call);
        this._dialog_ref.close(true);
        notifySuccess('Successfully updated question bank.');
    }
}
