import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, QuestionType } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'design-preview-container',
    template: `
        <section class="design-preview-section">
            <nav class="tabs-section">
                <mat-tab-group mat-align-tabs="start" animationDuration="0ms">
                    <mat-tab label="Design">
                        <div class="design-content">
                            <div id="survey-title">
                                <input-title
                                    [placeholder]="'Survey Title'"
                                    [fontSize]="20"
                                ></input-title>
                            </div>
                            <div
                                class="drag-drop-container"
                                cdkDropList
                                [cdkDropListData]="question_bank$ | async"
                                (cdkDropListDropped)="drop($event)"
                            >
                                <div
                                    class="dropped-items"
                                    *ngFor="let item of question_bank$ | async"
                                    cdkDrag
                                >
                                    <question-list-item
                                        [question]="item?.title"
                                    >
                                    </question-list-item>
                                </div>
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab label="Preview">Preview</mat-tab>
                </mat-tab-group>
            </nav>
        </section>
    `,

    styles: [
        `
            #survey-title {
                border-bottom: 2px solid #808080;
                margin: 10px 25px;
            }
            .design-preview-section {
                background-color: #f5f5f5;
            }

            .design-content {
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
            }

            .tabs-section {
                background-color: #fff;
            }

            .mat-tab-body-wrapper {
                background-color: #fff;
            }
        `,
    ],
})
export class DesignPreviewContainerComponent implements OnInit {
    question_bank$: Observable<Question[]>;

    constructor(private _surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {
        this.question_bank$ = this._surveyCreatorService.question_bank$;

        this.question_bank$.subscribe((i) => console.log(i, 'q bank'));
    }

    drop(e) {
        console.log(e, 'event');
    }
}
