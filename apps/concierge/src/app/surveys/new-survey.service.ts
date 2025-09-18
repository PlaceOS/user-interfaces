import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { flatten, notifySuccess, OrganisationService } from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    queryAnswers,
    queryQuestions,
    querySurveys,
    removeQuestion,
    removeSurvey,
    showSurvey,
    Survey,
    SurveyAnswer,
    SurveyQuestion,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    forkJoin,
    lastValueFrom,
    map,
    Observable,
    of,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs';
import { QuestionModalComponent } from './question-modal.component';
import { updateQuestionMap } from './question.pipe';

export enum TriggerEnum {
    None = 'NONE',
    Reserved = 'RESERVED',
    Checked_In = 'CHECKEDIN',
    Checked_Out = 'CHECKEDOUT',
    // No_Show = 'NOSHOW',
    Rejected = 'REJECTED',
    Cancelled = 'CANCELLED',
    // Ended = 'ENDED'
    Visitor = 'VISITOR',
}

export enum QuestionType {
    Single_Line_Text = 'text',
    Comment_Box = 'comment',
    Radio_Group = 'radiogroup',
    Drop_Down = 'dropdown',
    Check_Box = 'checkbox',
    Rating = 'rating',
    Empty = '0[EMPTY]',
}

export const TriggerOptions = getEnumOptions(TriggerEnum);
export const QuestionTypeOptions = getEnumOptions(QuestionType);
export const QuestionTypeMap = getEnumMap(QuestionType);

export function getEnumOptions<T>(targetEnum: T) {
    return Object.entries(targetEnum)
        .filter((e) => isNaN(Number(e[0])))
        .map((e) => ({
            name: e[0].replace(/_/g, ' '),
            id: e[1],
        }));
}

export function getEnumMap<T>(targetEnum: T) {
    const enum_map = {};
    Object.entries(targetEnum)
        .filter((e) => isNaN(Number(e[0])))
        .forEach((e) => (enum_map[e[1]] = e[0].replace(/_/g, ' ')));
    return enum_map;
}

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
    private _survey_id = new BehaviorSubject<string>('');
    private _bld_id = new BehaviorSubject<string>('');
    private _change = new BehaviorSubject(0);
    private _loading = new BehaviorSubject<boolean>(false);
    private _question_filters = new BehaviorSubject<QuestionFilters>({});

    public readonly survey_list$ = combineLatest([
        this._org.building_list,
        this._change,
    ]).pipe(
        tap(() => this._loading.next(true)),
        switchMap(([list]) =>
            forkJoin(list.map((bld) => querySurveys({ building_id: bld.id }))),
        ),
        map((data) => flatten(data) as Survey[]),
        shareReplay(1),
    );

    public readonly answer_list$: Observable<SurveyAnswer[]> =
        this.survey_list$.pipe(
            switchMap((surveys) =>
                forkJoin(
                    surveys.map((survey) =>
                        queryAnswers({ survey_id: survey.id }),
                    ),
                ),
            ),
            map((answers) => flatten(answers) as SurveyAnswer[]),
            tap(() => this._loading.next(false)),
            shareReplay(1),
        );

    public readonly building_surveys$ = combineLatest([
        this._bld_id,
        this.survey_list$,
    ]).pipe(
        map(([bld_id, list]) => list.filter((s) => s.building_id === bld_id)),
    );

    public readonly building_answers$ = combineLatest([
        this.building_surveys$,
        this.answer_list$,
    ]).pipe(
        map(([surveys, list]) =>
            list.filter((s) =>
                surveys.find((survey) => survey.id === s.survey_id),
            ),
        ),
    );

    public readonly survey$ = this._survey_id.pipe(
        switchMap((id) => (!id ? of(null) : showSurvey(id))),
        shareReplay(1),
    );

    public readonly questions$: Observable<SurveyQuestion[]> = queryQuestions({
        limit: 1000,
    } as any).pipe(
        tap((l) => updateQuestionMap(l)),
        shareReplay(1),
    );

    public readonly survey_questions$ = combineLatest([
        this.survey$,
        this.questions$,
    ]).pipe(
        map(([survey, questions]) => {
            if (!survey) return [];
            const q_list = [];
            for (const page of survey.pages) {
                for (const q_id of page.question_order) {
                    q_list.push(questions.find((q) => q.id === q_id));
                }
            }
            return q_list;
        }),
        shareReplay(1),
    );

    public readonly filtered_questions$ = combineLatest([
        this.questions$,
        this._question_filters,
    ]).pipe(
        map(([questions, filters]) =>
            questions.filter(
                (q) =>
                    (!filters.type || q.type === filters.type) &&
                    (!filters.search_text ||
                        q.title.includes(filters.search_text)),
            ),
        ),
    );

    public readonly loading$ = this._loading.asObservable();

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
    ) {}

    public get building() {
        return this._org.buildings.find(
            (bld) => bld.id === this._bld_id.getValue(),
        );
    }

    public setSurvey(id: string) {
        this._survey_id.next(id);
    }

    public setBuilding(id: string) {
        this._bld_id.next(id);
    }

    public setQuestionFilters(filters: QuestionFilters) {
        this._question_filters.next(filters);
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
            await lastValueFrom(removeSurvey(`${survey.id}`));
            result.close();
        } else {
            await lastValueFrom(removeSurvey(`${survey.id}`));
        }
        notifySuccess('Successfully removed survey.');
        this._change.next(Date.now());
    }

    public editQuestion(question = new SurveyQuestion({ type: 'text' })) {
        const ref = this._dialog.open(QuestionModalComponent, {
            data: question,
        });
        ref.afterClosed().subscribe((result) => {
            if (result) this._change.next(Date.now());
        });
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
            await lastValueFrom(removeQuestion(`${question.id}`));
            result.close();
        } else {
            await lastValueFrom(removeQuestion(`${question.id}`));
        }
        notifySuccess('Successfully removed survey question.');
        this._change.next(Date.now());
    }
}
