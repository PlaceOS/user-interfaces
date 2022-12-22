import { TitleCasePipe } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { AnswersApi, ArraySurveyAnswerResponderInner } from "@placeos/survey-ts-client";
import { ANSWERS_API_ADAPTER } from "../survey-suite.module";

@Injectable({providedIn:"root"})
export class AnswersApiService{

    constructor(
        @Inject(ANSWERS_API_ADAPTER)
        private api: AnswersApi
    ){}

    async getSurveyAnswers(survey_id: number){
        return await this.api.surveysAnswersIndex(survey_id).then(res => res.data);
    }

    async createSurveyAnswer(answers:ArraySurveyAnswerResponderInner[]){
        return await this.api.surveysAnswersCreate(answers).then(res => res.data);
    }
}