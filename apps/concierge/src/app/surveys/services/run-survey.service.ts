import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Model } from 'survey-core'
import { SurveyService } from "./survey.service";

@Injectable()
export class RunSurveyService{

    private readonly _loading = new BehaviorSubject<string>('');
    public readonly loading$ = this._loading.asObservable();
    public get loading() {
        return this._loading.getValue();
    }
    public set loading(value: string) {
        this._loading.next(value);
    }

    survey:Model;
    constructor(
        private _survey:SurveyService
    ){}

    public async loadSurvey(survey_id: string) {
        this.loading = "Loading survey...";
        const uiSurvey = await this._survey.getSurveyDetails(survey_id);
        this.loading = '';
        if(!uiSurvey) return;
        this.survey = new Model(uiSurvey);
    }
}