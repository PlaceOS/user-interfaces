import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Question, QuestionType } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddQuestionBankComponent } from './add-question-bank.component';

@Component({
    selector: 'design-preview-container',
    templateUrl: './design-preview-container.component.html',
    styles: [
        `
            .section-wrapper {
                display: flex;
                flex-direction: row;
                border: 1px solid gray;
                border-radius: 5px;
                margin: 10px;
                background-color: #f5f5f5;
            }
            .survey-title {
                border-bottom: 2px solid #808080;
                margin: 10px 25px;
            }
            .preview-survey-title {
                padding: 10px 10px;
                border-bottom: 2px solid #808080;
                margin: 20px 25px;
                font-weight: 500;
                align-items: center;
            }

            .preview-survey-title span {
                display: flex;
                margin: -5px 0px 5px 5px;
            }

            .design-preview-section {
                display: flex;
                flex: 3;
                flex-direction: column;
                background-color: #f5f5f5;
                color: #808080;
                border-right: 1px solid #808080;
                width: 800px;
            }

            .design-content {
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                min-height: 500px;
            }

            .mat-tab-body-wrapper {
                background-color: #fff;
            }
            .question-bank-section {
                display: flex;
                flex: 0.5;
                flex-shrink: 3;
                flex-direction: column;
                background-color: #f5f5f5;
                width: 400px;
            }
            .header {
                display: flex;
                justify-content: space-between;
                height: 49px;
                border-bottom: 1px solid rgb(0, 0, 0, 0.12);
                width: 400px;
                align-items: center;
                background-color: #fff;
            }
            .title {
                font-size: 14px;
                font-weight: 500;
                color: #808080;
                margin: 20px;
            }
            .selected-questions-container {
                display: inline-block;
                width: 100%;
                min-height: 600px;
            }

            .selected-questions-list {
                display: inline-block;
                width: 100%;
                min-height: 300px;
            }

            .preview-questions-container {
                display: inline-block;
                width: 100%;
                min-height: 600px;
                margin-top: -10px;
            }

            .none-selected {
                display: flex;
                flex-direction: column;
                color: #808080;
                width: 200px;
                height: 200px;
                text-align: center;
                margin: 200px auto;
            }
            .none-selected img {
                margin: 10px;
            }
        `,
    ],
})
export class DesignPreviewContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('tabGroup') tabGroup;
    question_bank: Question[] = this.surveyCreatorService.question_bank;
    // survey_title: string = this.surveyCreatorService.survey_title || '';

    selected_questions: Question[] =
        this.surveyCreatorService.selected_questions;

    dialogConfig = {
        width: '900px',
        height: '700px',
    };

    constructor(
        public surveyCreatorService: SurveyCreatorService,
        public addDialog: MatDialog
    ) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        console.log(this.tabGroup.selectedIndex);
    }

    openAddQuestionBankDialog(): void {
        this.addDialog.open(AddQuestionBankComponent, this.dialogConfig);
    }

    noReturnPredicate() {
        // return false;
    }

    onKey(event: any) {
        this.surveyCreatorService.survey_title.next(event.target.value);
    }

    tabChanged(event: any) {
        console.log(this.tabGroup.selectedIndex);
        console.log(event.index, 'index');
    }
}
