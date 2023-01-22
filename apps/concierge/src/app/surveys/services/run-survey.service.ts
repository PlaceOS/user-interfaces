import { Injectable } from '@angular/core';
import { notifyError, notifySuccess } from '@placeos/common';
import { UISurveyObj } from '@placeos/survey-suite';
import { addAnswer, SurveyAnswer } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, first } from 'rxjs/operators';
import { Model } from 'survey-core';
import { SurveyService } from './survey.service';

@Injectable()
export class RunSurveyService {
    private readonly _loading = new BehaviorSubject<string>('');
    public readonly loading$ = this._loading.asObservable();
    public get loading() {
        return this._loading.getValue();
    }
    public set loading(value: string) {
        this._loading.next(value);
    }

    surveyModel: Model;
    uiSurvey: UISurveyObj;
    constructor(private _survey: SurveyService) {}

    public async loadSurvey(survey_id: string) {
        this.loading = 'Loading survey...';
        const uiSurvey = await this._survey.getSurveyDetails(survey_id);
        this.loading = '';
        if (!uiSurvey) return;
        this.uiSurvey = uiSurvey;
        this.surveyModel = new Model(uiSurvey);
        this.surveyModel.onComplete.add((sender: Model) => {
            this.processSurveyAnswer(sender);
        });
    }

    private async processSurveyAnswer(survey: Model) {
        const { id, pages } = this.uiSurvey;
        const answersMap = survey.data;
        let answers = [];
        let questions = [];
        pages.forEach(
            (p) => (questions = [...questions, ...(p.elements || [])])
        );
        questions.forEach((q) => {
            if (answersMap[q.id]) {
                answers.push({
                    question_id: q.id,
                    type: q.type,
                    survey_id: id,
                    answer_json: answersMap[q.id],
                });
            }
        });
        this.saveSurveyAnswer(answers);
    }

    private async saveSurveyAnswer(answers: Partial<SurveyAnswer>[]) {
        this.loading = 'Saving survey answers...';
        const res = await addAnswer(answers as any)
            .pipe(
                first(),
                catchError((err) => {
                    notifyError('Failed to save survey answers');
                    return of(null);
                }),
                finalize(() => (this.loading = ''))
            )
            .toPromise();
        if (res) notifySuccess('Survey answers have been recorded');
    }
}
