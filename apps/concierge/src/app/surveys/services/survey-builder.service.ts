import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { openConfirmModal } from "@placeos/common";
import { Question, UISurveyObj, UISurveyPage } from "@placeos/survey-suite";
import { Model } from "survey-core";
import { QuestionBankService } from "./question-bank.service";



@Injectable()
export class SurveyBuilderService{

    public selectedPageIndex: number = 0;
    public survey:UISurveyObj;
    public surveyModel:Model;

    constructor(
        private bank: QuestionBankService,
        private _dialog: MatDialog){
    }

    public get selectedPage(){
        return this.survey?.pages[this.selectedPageIndex];
    }

    public addSurveyPage(){
        if(!this.survey) return;
        let pages = this.survey.pages || [];
        pages.push({
            title:'',
            elements:[]
        });
        this.survey.pages = pages;
        this.selectedPageIndex = (pages.length - 1);
    }

    public async confirmDeletePage(index: number) {
        if (index < 1) return;
        const details = await openConfirmModal(
            {
                title: 'Confirm delete page',
                content: `Are you sure you want to delete this page?`,
                icon: { class: 'material-icons', content: 'delete' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        details.close();
        this.removeSurveyPage(index);
    }

    public removeQuestionFromSurvey(index:number){
        const q = this.selectedPage.elements.splice(index,1);
        this.bank.pushQuestion(q[0]);
    }

    public onDropQuestionToSurvey(event: CdkDragDrop<Question[]>, p:UISurveyPage){
        if(!p) return;
        const { previousIndex, previousContainer, currentIndex, container } = event;
        if(container !== previousContainer){
            //Dropped from question bank
            const q = this.bank.popQuestion(previousIndex);
            p.elements.splice(currentIndex,0,q);
        }else{
            //Reorder Question
            const q = p.elements.splice(previousIndex,1);
            p.elements.splice(currentIndex,0,q[0]);
        }
    }

    public onPreview(){
        this.surveyModel = new Model(this.survey);
        this.surveyModel.onComplete.add((sender: Model) => {
            console.log("Completed survey", sender.data);
        })
    }


    private removeSurveyPage(index:number){
        if(index === 0) return;
        let pages = this.survey.pages || [];
        pages.splice(index,1);
        this.survey.pages = pages;
        this.selectedPageIndex = 0;
    }

    private addSurvey(){}
}