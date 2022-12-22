import { Inject, Injectable } from "@angular/core";
import { SurveyResponder, SurveysApi } from "@placeos/survey-ts-client";
import { SURVEYS_API_ADAPTER } from "../survey-suite.module";

@Injectable({providedIn: 'root'})
export class SurveysApiService{
    constructor(
        @Inject(SURVEYS_API_ADAPTER)
        private api: SurveysApi
    ){}

    /**
     *  Surveys
     */

    async getSurveys(){
        return await this.api.surveysIndex().then( res => res.data);
    }

    async createSurvey(survey: SurveyResponder){
        return await this.api.surveysCreate(survey).then( res => res.data);
    }

    async getSurveyById(id:number){
        return await this.api.surveysShow(id).then( res => res.data)
    }

    async updateSurvey(id: number, survey:SurveyResponder){
        return await this.api.surveysUpdate(id, survey).then(res => res.data);
    }

    async deleteSurvey(id:number){
        return await this.api.surveysDestroy(id).then(res => res.data);
    }

}