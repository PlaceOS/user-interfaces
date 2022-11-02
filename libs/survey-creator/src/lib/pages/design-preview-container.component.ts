import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Question, QuestionType } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddQuestionBankComponent } from '../components/add-question-bank.component';
import { EditQuestionBankComponent } from '../components/edit-question-bank.component';
import { SearchService } from '../search.service';

@Component({
    selector: 'design-preview-container',
    templateUrl: './design-preview-container.component.html',
    styles: [
        `
            .page-wrapper {
                background-color: #fff;
                padding: 20px;
            }
            .heading-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .left-wrapper {
                display: flex;
                align-items: center;
            }
            .right-wrapper {
                display: flex;
                align-items: center;
            }
            .back-arrow {
                display: flex;
                margin-right: 10px;
            }
            .page-heading {
                line-height: 34px;
                font-size: 26px;
                font-weight: 400;
            }
            .add-button {
                display: flex;
                color: #fff;
                background-color: #292f5b;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
                padding: 0px 20px;
            }
            .section-wrapper {
                display: flex;
                flex: auto;
                flex-direction: row;
                border: 1px solid gray;
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
                flex: auto;
                flex-direction: column;
                background-color: #f5f5f5;
                color: #808080;
                border-right: 1px solid #808080;
                min-width: 800px;
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
                min-height: 600px;
            }
            .preview-questions-container {
                display: flex;
                flex-direction: column;
                width: 100%;
                min-height: 600px;
                margin-top: -10px;
                align-items: center;
            }
            .preview-list {
                width: 600px;
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
            .complete-button {
                display: flex;
                color: #fff;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
            }
            .dropdown-options {
                display: flex;
                flex-direction: row;
            }
            .dropdown-container {
                display: flex;
                flex-direction: column;
                margin-right: 20px;
            }
            .dropdown-container mat-label {
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
                margin-left: 2px;
            }
        `,
    ],
})
export class DesignPreviewContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('tabGroup') tabGroup;

    question_bank$: Observable<Question[]>;
    selected_building: any = '';
    buildings = [
        {
            name: 'Building 1',
            levels: ['Level 1', 'Level 2', 'Level 3'],
        },
        {
            name: 'Building 5',
            levels: ['LG', 'Ground', 'Level 1'],
        },
    ];
    selected_location: any = '';
    locations = [{ name: 'Sydney' }, { name: 'Melbourne' }];

    // survey_title: string = this.surveyCreatorService.survey_title || '';

    selected_questions: Question[] =
        this.surveyCreatorService.selected_questions;

    dialogConfig = {
        width: '900px',
        height: '700px',
    };

    constructor(
        public surveyCreatorService: SurveyCreatorService,
        public searchService: SearchService,
        public addDialog: MatDialog
    ) {}

    ngOnInit(): void {
        console.log(this.searchService.question_bank, 'q bank');
        this.question_bank$ = this.searchService.question_bank$;
        this.selected_building = this.buildings[0].name;
        this.selected_location = this.locations[0].name;
        console.log(this.buildings, 'buildings');
    }

    ngAfterViewInit(): void {
        console.log(this.tabGroup.selectedIndex);
    }

    openAddQuestionBankDialog(): void {
        this.addDialog.open(AddQuestionBankComponent, this.dialogConfig);
    }

    openEditQuestionBankDialog(): void {
        this.addDialog.open(EditQuestionBankComponent, this.dialogConfig);
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

    updateBuilding() {
        return;
    }
    updateLocation() {
        return;
    }
}
