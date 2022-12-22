import { Inject, Injectable } from "@angular/core";
import { QuestionsApi, SurveyQuestionResponder } from "@placeos/survey-ts-client";
import { QUESTIONS_API_ADAPTER } from "../survey-suite.module";

@Injectable({providedIn: "root"})
export class QuestionsApiService{

    constructor(
        @Inject(QUESTIONS_API_ADAPTER)
        private api: QuestionsApi
    ){}

    async getQuestions(survey_id?: number){
        return await this.api.surveysQuestionsIndex(survey_id).then(res => res.data);
    }

    async createQuestion(question: SurveyQuestionResponder){
        return await this.api.surveysQuestionsCreate(question).then(res => res.data);
    }

    async getQuestionById(id: number){
        return await this.api.surveysQuestionsShow(id).then(res => res.data);
    }

    async deleteQuestion(id: number){
        return await this.api.surveysQuestionsDestroy(id).then(res => res.data);
    }
}