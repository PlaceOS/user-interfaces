import { Injectable } from "@angular/core";
import { notifyError } from "@placeos/common";
import { Question, translateToQuestion, UISurveyAnswer, UISurveyResponse } from "@placeos/survey-suite";
import { queryAnswers, queryQuestions, showSurvey, Survey, SurveyQuestion } from "@placeos/ts-client";
import { BehaviorSubject, forkJoin, of } from "rxjs";
import { catchError, finalize, first, map, tap } from "rxjs/operators";

@Injectable()
export class SurveyResponsesService{

    private readonly _loading = new BehaviorSubject<string>('');
    public readonly loading$ = this._loading.asObservable();
    private set loading(value: string){ this._loading.next(value);}

    private readonly _responses = new BehaviorSubject<UISurveyResponse[]>([]);
    public readonly responses$ = this._responses.asObservable();
    private set responses(value: UISurveyResponse[]){ this._responses.next(value);}

    private readonly _survey = new BehaviorSubject<Survey>(null);
    public readonly survey$ = this._survey.asObservable();
    private set survey(value: Survey){ this._survey.next(value); }

    stats$ = this.responses$.pipe(
        map( responses => {
            if(!responses?.length) return { answer_count: 0};
            let answer_count = 0;
            responses.forEach(r => answer_count += r.answers?.length || 0);
            return {answer_count};
        })
    )

    constructor(){}

    async getSurveyResponses(survey_id: string){
        this.loading = 'Loading survey responses';
        const res = await forkJoin([
            queryQuestions({survey_id}).pipe(
                map(
                    (res: SurveyQuestion[]) =>
                        res?.map((e) => translateToQuestion(e)) || []
                ),
                catchError(err => this.handleError('Error loading survey questions'))
            ),
            queryAnswers({survey_id}).pipe(
                catchError(err => this.handleError('Error loading survey answers'))
            ),
            showSurvey(survey_id).pipe(
                catchError(err => this.handleError('Error loading survey details'))
            )
        ]).pipe(
            first(),
            tap(([questions,answers,survey]) => this.survey = survey),
            map(([questions,answers])=>{
                if(!questions?.length || !answers?.length) return [];
                return this.sortQuestionsAnswers(questions,answers);
            }),
            tap(v => console.log('response res', v)),
            finalize(() => this.loading = '')
        ).toPromise();
        this.responses = res;
    }

    public sortQuestionsAnswers(questions:Question[], answers: UISurveyAnswer[]): UISurveyResponse[]{
        let qhash = questions.reduce((map,obj) => (map[obj.id] = {question:obj, answers:[]},map),{});
        console.log("question hash",qhash);
        console.log("answers", answers);
        answers.forEach(e => {
            if(qhash[e.question_id]){
                qhash[e.question_id].answers.push(e)
            }
        });
        return Object.values(qhash);
    }

    private handleError(msg: string, def_res: any = null){
        notifyError(msg);
        return of(def_res)
    }
}