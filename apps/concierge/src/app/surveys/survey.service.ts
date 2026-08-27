import { computed, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { notifySuccess, OrganisationService } from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    queryAnswers,
    querySurveys,
    removeQuestion,
    removeSurvey,
    showSurvey,
    Survey,
    SurveyAnswer,
    SurveyQuestion,
} from '@placeos/ts-client';
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

enum LoadType {
    ALL = 'all',
    SURVEYS = 'surveys',
    ANSWERS = 'answers',
    QUESTIONS = 'questions',
}

@Injectable({
    providedIn: 'root',
})
export class SurveyService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public readonly question_filters = signal<QuestionFilters>({});

    public readonly loading = signal('');
    public readonly building = signal('');
    public readonly survey = signal<Survey>(new Survey({}));
    public readonly survey_list = signal<Survey[]>([]);
    public readonly answer_list = signal<SurveyAnswer[]>([]);
    public readonly question_list = signal<SurveyQuestion[]>([]);
    public readonly building_surveys = computed(() => {
        return this.survey_list().filter(
            (survey) => survey.building_id === this.building(),
        );
    });
    public readonly building_answers = computed(() => {
        const surveys = this.building_surveys();
        return this.answer_list().filter((answer) =>
            surveys.find((s) => s.id === answer.survey_id),
        );
    });
    public readonly survey_questions = computed(() => {
        const survey = this.survey();
        if (!survey.id) return [];
        return this.question_list().filter((question) =>
            survey.pages.find((page) =>
                page.question_order.find((q_id) => q_id === question.id),
            ),
        );
    });
    public readonly filtered_questions = computed(() => {
        const questions = this.question_list();
        const filters = this.question_filters();
        return questions.filter(
            (question) =>
                (!filters.type || question.type === filters.type) &&
                (!filters.search_text ||
                    question.title
                        .toLowerCase()
                        .includes(filters.search_text.toLowerCase())),
        );
    });

    constructor() {
        this._org.waitUntilInitialised().then(() => {
            setTimeout(() => this._load(), 300);
        });
    }

    public setBuilding(id: string) {
        this.building.set(id);
    }

    public async setSurvey(id: string) {
        this.loading.set(`Loading survey "${id}"...`);
        const survey = await showSurvey(id);
        this.survey.set(survey);
        this.building.set(survey.building_id);
        this.loading.set('');
    }

    public async removeSurvey(survey: Survey, confirm = true) {
        if (confirm) {
            const result = await openConfirmModal(
                {
                    title: 'Remove Survey',
                    content: 'Are you sure you want to remove this survey?',
                    icon: { content: 'warning' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.loading('Removing survey...');
            await removeSurvey(`${survey.id}`);
            result.close();
        } else {
            await removeSurvey(`${survey.id}`);
        }
        notifySuccess('Successfully removed survey.');
        this._load(LoadType.SURVEYS);
    }

    public async removeQuestion(question: SurveyQuestion, confirm = true) {
        if (confirm) {
            const result = await openConfirmModal(
                {
                    title: 'Remove Survey Question',
                    content:
                        'Are you sure you want to remove this survey question?',
                    icon: { content: 'warning' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.loading('Removing survey question...');
            await removeQuestion(`${question.id}`);
            result.close();
        } else {
            await removeQuestion(`${question.id}`);
        }
        notifySuccess('Successfully removed survey question.');
        this._load(LoadType.QUESTIONS);
    }

    private async _load(type = LoadType.ALL) {
        const buildings = this._org.building_list();
        if (!buildings) return;
        this.loading.set('Loading survey data...');
        if (type === LoadType.ALL || type === LoadType.SURVEYS) {
            const surveys = await Promise.all(
                buildings.map((bld) => querySurveys({ building_id: bld.id })),
            );
            const survey_list = surveys.flat();
            this.survey_list.set(survey_list);
        }
        if (type === LoadType.ALL || type === LoadType.ANSWERS) {
            const answers = await Promise.all(
                this.survey_list().map((survey) =>
                    queryAnswers({ survey_id: survey.id }),
                ),
            );
            this.answer_list.set(answers.flat());
        }
        if (type === LoadType.ALL || type === LoadType.QUESTIONS) {
            const questions = await queryAllSurveyQuestions({ limit: 200 });
            this.question_list.set(questions);
        }
        this.loading.set('');
    }
}
