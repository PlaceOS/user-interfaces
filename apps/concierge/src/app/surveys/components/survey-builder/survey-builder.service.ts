import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import { Question } from "@placeos/survey-suite";
import { Model } from "survey-core";
import { QuestionBankService } from "../question-bank/question-bank.service";

export interface SurveyObj{
    title: string;
    description?: string;
    pages: SurveyPage[];
}

export interface SurveyPage{
    name:string;
    elements: Question[];
}

@Injectable()
export class SurveyBuilderService{

    public survey:SurveyObj;
    public questions: Question[] = [];
    public surveyModel:Model;

    constructor(
        private bank: QuestionBankService){
    }


    public removeQuestionFromSurvey(index:number){
        const q = this.questions.splice(index,1);
        this.bank.pushQuestion(q[0]);
    }

    public onDropQuestionToSurvey(event: CdkDragDrop<Question[]>){
        console.log("Survey builder dropped ", event);
        if(event.container !== event.previousContainer){
            //Dropped from question bank
            const q = this.bank.popQuestion(event.previousIndex);
            this.questions.splice(event.currentIndex,0,q);
        }else{
            //Reorder Question
            const q = this.questions.splice(event.previousIndex,1);
            this.questions.splice(event.currentIndex,0,q[0]);
        }
    }

    public onPreview(){
        this.survey.pages[0].elements = [...this.questions];
        this.surveyModel = new Model(this.survey);
        this.surveyModel.onComplete.add((sender: Model) => {
            console.log("Completed survey", sender.data);
        })
    }

    public generateNewSurvey(){
        this.survey = {
            title:'New Survey Title',
            description: '',
            pages:[
                {
                    name:'Page 1',
                    elements:[]
                }
            ]
        } as SurveyObj;
    }

    private addSurvey(){}
}