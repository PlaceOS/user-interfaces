import {
    computed,
    inject,
    Injectable,
    resource,
    Signal,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import { orThrow } from '@placeos/ts-client/compat';
import {
    type Survey,
    type SurveyQuestion,
    surveys,
    surveys_questions,
} from '@placeos/ts-client/staff';
import { queryAllSurveyQuestions } from '../query-all-pages';
import { confirmAction, errorText } from '../ui/modal-actions';
import { QuestionModalComponent } from './question-modal.component';
import type { QuestionDraft } from './types';

export interface QuestionFilters {
    search_text?: string;
    type?:
        | 'rating'
        | 'text'
        | 'comment'
        | 'checkbox'
        | 'radiogroup'
        | 'dropdown';
}

@Injectable({
    providedIn: 'root',
})
export class NewSurveyService {
    private _dialog = inject(MatDialog);

    private _survey_id = signal<string>('');
    private _change = signal(0);
    private _question_filters = signal<QuestionFilters>({});

    /** Active survey being viewed or edited */
    private readonly _survey = resource({
        params: () => this._survey_id(),
        defaultValue: null as Survey | null,
        loader: async ({ params: id }) =>
            // Survey IDs are numbers. The route gives the ID as a string.
            !Number(id) ? null : surveys.show({ id: Number(id) }).then(orThrow),
    });
    public readonly survey: Signal<Survey | null> = this._survey.value;

    /** Full list of survey questions */
    private readonly _questions = resource({
        params: () => this._change(),
        defaultValue: [] as SurveyQuestion[],
        loader: async () => queryAllSurveyQuestions(),
    });
    public readonly questions: Signal<SurveyQuestion[]> = this._questions.value;
    /** Whether the question list has loaded and is not loading again */
    public readonly questions_ready = computed(
        () => this._questions.hasValue() && !this._questions.isLoading(),
    );

    /** Questions belonging to the active survey, in page order */
    public readonly survey_questions = computed(() => {
        const survey = this.survey();
        const questions = this.questions();
        if (!survey) return [];
        const q_list: SurveyQuestion[] = [];
        for (const page of survey.pages ?? []) {
            for (const q_id of page.question_order) {
                const question = questions.find((q) => q.id === q_id);
                if (question) q_list.push(question);
            }
        }
        return q_list;
    });

    /** Questions matching the active question filters */
    public readonly filtered_questions = computed(() => {
        const questions = this.questions();
        const filters = this._question_filters();
        return questions.filter(
            (q) =>
                (!filters.type || q.type === filters.type) &&
                (!filters.search_text || q.title.includes(filters.search_text)),
        );
    });

    public setSurvey(id: string) {
        this._survey_id.set(id);
    }

    public setQuestionFilters(filters: QuestionFilters) {
        this._question_filters.set(filters);
    }

    /** Open the question form. Without a question, the form makes a new text question. */
    public editQuestion(
        question: Partial<SurveyQuestion | QuestionDraft> = { type: 'text' },
    ) {
        const ref = this._dialog.open(QuestionModalComponent, {
            data: question,
        });
        ref.afterClosed().subscribe((result) => {
            if (result) this._change.update((v) => v + 1);
        });
    }

    public async removeQuestion(question: Pick<SurveyQuestion, 'id'>) {
        const removed = await confirmAction(
            this._dialog,
            {
                title: 'Remove Survey Question',
                content:
                    'Are you sure you want to remove this survey question?',
                icon: { content: 'warning' },
            },
            {
                loading: 'Removing survey question...',
                action: () =>
                    surveys_questions
                        .destroy({ id: question.id })
                        .then(orThrow),
                error: (e) =>
                    `Failed to remove survey question. ${errorText(e)}`,
            },
        );
        if (!removed) return;
        notifySuccess('Successfully removed survey question.');
        this._change.update((v) => v + 1);
    }
}
