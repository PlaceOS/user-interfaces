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
import {
    removeQuestion,
    showSurvey,
    Survey,
    SurveyQuestion,
} from '@placeos/ts-client';
import { confirmAction, errorText } from '../ui/modal-actions';
import { QuestionModalComponent } from './question-modal.component';
import { queryAllSurveyQuestions } from '../query-all-pages';

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
        loader: async ({ params: id }) => (!id ? null : showSurvey(id)),
    });
    public readonly survey: Signal<Survey | null> = this._survey.value;

    /** Full list of survey questions */
    private readonly _questions = resource({
        params: () => this._change(),
        defaultValue: [] as SurveyQuestion[],
        loader: async () => queryAllSurveyQuestions({ limit: 200 }),
    });
    public readonly questions: Signal<SurveyQuestion[]> = this._questions.value;

    /** Questions belonging to the active survey, in page order */
    public readonly survey_questions = computed(() => {
        const survey = this.survey();
        const questions = this.questions();
        if (!survey) return [];
        const q_list: SurveyQuestion[] = [];
        for (const page of survey.pages) {
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
                (!filters.search_text ||
                    q.title.includes(filters.search_text)),
        );
    });

    public setSurvey(id: string) {
        this._survey_id.set(id);
    }

    public setQuestionFilters(filters: QuestionFilters) {
        this._question_filters.set(filters);
    }

    public editQuestion(question = new SurveyQuestion({ type: 'text' })) {
        const ref = this._dialog.open(QuestionModalComponent, {
            data: question,
        });
        ref.afterClosed().subscribe((result) => {
            if (result) this._change.update((v) => v + 1);
        });
    }

    public async removeQuestion(question: SurveyQuestion) {
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
                action: () => removeQuestion(`${question.id}`),
                error: (e) =>
                    `Failed to remove survey question. ${errorText(e)}`,
            },
        );
        if (!removed) return;
        notifySuccess('Successfully removed survey question.');
        this._change.update((v) => v + 1);
    }
}
