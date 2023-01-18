import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { generateNewSurvey, Question, UISurveyObj, UISurveyPage } from '@placeos/survey-suite';
import { SurveyBuilderService } from '../../services/survey-builder.service';

@Component({
    selector: 'survey-builder',
    templateUrl: './survey-builder.component.html',
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                min-height: 0;
            }
        `,
    ]
})
export class SurveyBuilderComponent implements OnInit {

    view: 'design' | 'preview' = 'design';
    onDrop = (event: CdkDragDrop<Question[]>, p: UISurveyPage) =>
        this.service.onDropQuestionToSurvey(event,p);
    onRemove = (index: number) => this.service.removeQuestionFromSurvey(index);
    addSurveyPage = () => this.service.addSurveyPage();
    removeSurveyPage = (index:number) => this.service.confirmDeletePage(index);

    constructor(public service: SurveyBuilderService) {}

    ngOnInit(): void {
        this.service.survey = generateNewSurvey();
    }

    get selectedPageIndex(){
        return this.service.selectedPageIndex;
    }

    set selectedPageIndex(value:number){
        this.service.selectedPageIndex = value;
    }

    get selectedPage(){
        return this.service.selectedPage;
    }
    get survey(){
        return this.service.survey; 
    }

    switchView(view: 'design' | 'preview'){
        this.view = view;
        if(view === 'preview'){
            this.service.onPreview();
        }
    }

    onTabChange(event: MatTabChangeEvent) {
        if (event.index === 1) {
            this.service.onPreview();
        }
    }
}
