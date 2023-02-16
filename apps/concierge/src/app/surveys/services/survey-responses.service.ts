import { Injectable } from '@angular/core';
import { notifyError } from '@placeos/common';
import {
    Question,
    translateToQuestion,
    UISurveyAnswer,
    UISurveyResponse,
} from '@placeos/survey-suite';
import {
    queryAnswers,
    queryQuestions,
    showSurvey,
    Survey,
    SurveyQuestion,
} from '@placeos/ts-client';
import { BehaviorSubject, forkJoin, of, combineLatest } from 'rxjs';
import { catchError, filter, finalize, first, map, switchMap, tap } from 'rxjs/operators';

interface SurveyStats {
    question_count: number;
    answer_count: number;
}

interface PagedSurveyResponse {
    title: string;
    responses: UISurveyResponse[];
}

interface ResponseOptions{
    survey_id: string;
    start?: Date;
    end?: Date; 
}

@Injectable()
export class SurveyResponsesService {

    /** Store for response options */
    private _options = new BehaviorSubject<ResponseOptions>({
        survey_id: null,
        start: null,
        end: null,
    });
    public readonly options$ = this._options.asObservable();
    private set options(value: ResponseOptions){
        this._options.next(value);
    }

    /** Store for load state */
    private readonly _loading = new BehaviorSubject<string>('');
    public readonly loading$ = this._loading.asObservable();
    private set loading(value: string) {
        this._loading.next(value);
    }

    /** Store for responses */
    // private readonly _responses = new BehaviorSubject<UISurveyResponse[]>([]);
    // public readonly responses$ = this._responses.asObservable();
    // private set responses(value: UISurveyResponse[]) {
    //     this._responses.next(value);
    // }

    private readonly _survey = new BehaviorSubject<Survey>(null);
    public readonly survey$ = this._survey.asObservable();
    private set survey(value: Survey) {
        this._survey.next(value);
    }

    private readonly _stats = new BehaviorSubject<SurveyStats>({
        question_count: 0,
        answer_count: 0,
    });
    public readonly stats$ = this._stats.asObservable();
    private set stats(value: SurveyStats) {
        this._stats.next(value);
    }

    survey_responses$ = this.options$.pipe(
        filter( options => !!options?.survey_id?.length),
        switchMap(options => this.getSurveyResponses(options))
    )

    paged_responses$ = combineLatest([this.survey_responses$, this.survey$]).pipe(
        map(([responses, survey]) => {
            if(!responses.length) return [];
            let resMap = {};
            responses.forEach((e) => (resMap[e.question.id] = e));
            let paged: PagedSurveyResponse[] = [];
            survey.pages.forEach((p) => {
                let t = { title: p.title, responses: [] };
                p.question_order.forEach((q) => t.responses.push(resMap[q]));
                paged.push(t);
            });
            return paged;
        })
    );

    constructor() {}

    public setOptions(options: Partial<ResponseOptions>){
        this.options = {... this._options.getValue(), ...options};
    }

    private getSurveyResponses(options: ResponseOptions) {
        this.loading = 'Loading survey responses';
        const { survey_id, start, end} = options;
        const created_after = start ? Math.floor(start.getTime() / 1000) : undefined;
        const created_before = end ? Math.floor(end.getTime() / 1000) : undefined
        return forkJoin([
            queryQuestions({ survey_id}).pipe(
                map(
                    (res: SurveyQuestion[]) =>
                        res?.map((e) => translateToQuestion(e)) || []
                ),
                catchError((err) =>
                    this.handleError('Error loading survey questions')
                )
            ),
            queryAnswers({ survey_id, created_after, created_before}).pipe(
                catchError((err) =>
                    this.handleError('Error loading survey answers')
                )
            ),
            showSurvey(survey_id).pipe(
                catchError((err) =>
                    this.handleError('Error loading survey details')
                )
            ),
        ])
            .pipe(
                first(),
                tap(([questions, answers, survey]) => {
                    this.survey = survey;
                    this.stats = {
                        question_count: questions.length,
                        answer_count: answers.length,
                    };
                }),
                map(([questions, answers]) => {
                    if (!questions?.length || !answers?.length) return [];
                    return this.sortQuestionsAnswers(questions, answers);
                }),
                finalize(() => (this.loading = ''))
            )
    }

    public sortQuestionsAnswers(
        questions: Question[],
        answers: UISurveyAnswer[]
    ): UISurveyResponse[] {
        let qhash = questions.reduce(
            (map, obj) => ((map[obj.id] = { question: obj, answers: [] }), map),
            {}
        );
        answers.forEach((e) => {
            if (qhash[e.question_id]) {
                qhash[e.question_id].answers.push(e);
            }
        });
        return Object.values(qhash);
    }

    private handleError(msg: string, def_res: any = null) {
        notifyError(msg);
        return of(def_res);
    }
}
