import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, QuestionType } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import {
    DragDropModule,
    CdkDragDrop,
    moveItemInArray,
    copyArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
    selector: 'design-preview-container',
    template: `
        <div class="section-wrapper" cdkDropListGroup>
            <section class="design-preview-section">
                <mat-tab-group mat-align-tabs="start" animationDuration="0ms">
                    <mat-tab label="Design">
                        <div class="design-content">
                            <div id="survey-title">
                                <input-title
                                    [placeholder]="'Survey Title'"
                                    [fontSize]="16"
                                ></input-title>
                            </div>
                            <div class="selected-questions">
                                <div
                                    cdkDropList
                                    (cdkDropListDropped)="drop($event)"
                                    [cdkDropListData]="selected_questions"
                                >
                                    <div
                                        *ngFor="let item of selected_questions"
                                        cdkDrag
                                    >
                                        <question-list-item
                                            [question]="item?.title"
                                        >
                                        </question-list-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab label="Preview">Preview</mat-tab>
                </mat-tab-group>
            </section>
            <aside class="question-bank-section">
                <header class="header">
                    <span class="title">Question Bank</span>
                </header>
                <search-bar></search-bar>
                <div
                    class="question-bank"
                    cdkDropList
                    [cdkDropListData]="question_bank"
                    (cdkDropListDropped)="drop($event)"
                >
                    <div
                        class="dropped-items"
                        *ngFor="let item of question_bank"
                        cdkDrag
                    >
                        <question-list-item [question]="item?.title">
                        </question-list-item>
                    </div>
                </div>
            </aside>
        </div>
    `,

    styles: [
        `
            /* design-preview-container .mat-tab-label-container {
                background-color: red;
                padding: 0px;
            }

            design-preview-container .mat-tab-group.mat-primary .mat-ink-bar {
                background-color: red;
            }

            mat-tab-group mat-tab-label {
                background-color: red;
            } */

            design-preview-container
                .design-preview-section
                .mat-tab-group
                mat-tab-header {
                background-color: red !important;
            }
            .section-wrapper {
                display: flex;
                flex-direction: row;
                border: 1px solid gray;
                border-radius: 5px;
                margin: 10px;
                background-color: #f5f5f5;
            }

            #survey-title {
                border-bottom: 2px solid #808080;
                margin: 10px 25px;
            }
            .design-preview-section {
                display: flex;
                flex: 3;
                flex-direction: column;
                background-color: #f5f5f5;
                border-right: 1px solid #808080;
                width: 800px;
            }

            .design-content {
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
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
        `,
    ],
})
export class DesignPreviewContainerComponent implements OnInit {
    question_bank: Question[] = this.surveyCreatorService.question_bank;
    selected_questions: Question[] =
        this.surveyCreatorService.selected_questions;

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}

    drop(event: any) {
        console.log('dropped');
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            copyArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
