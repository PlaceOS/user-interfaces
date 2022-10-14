import { Component, OnInit, Input } from '@angular/core';
import { QuestionCreatorService } from '../question-creator.service';
import { QuestionType } from '../survey-types';

@Component({
    selector: 'question-options',
    template: `
        <section class="question-options-container">
            <div class="dropdown-container">
                <mat-form-field appearance="none" class="dropdown">
                    <mat-select
                        [(value)]="selected_tag"
                        (selectionChange)="updateSelectedTag()"
                    >
                        <mat-option
                            *ngFor="let enum of QuestionType | keyvalue"
                            [value]="enum.value"
                        >
                            {{ enum.value }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="required-container">
                <mat-slide-toggle> </mat-slide-toggle>
                <span>Required</span>
            </div>
            <div>
                <button-borderless
                    [button_title]="'Delete'"
                    [icon]="'delete_forever'"
                    [icon_color]="'red'"
                    [text_color]="'grey'"
                    class="delete_button"
                ></button-borderless>
            </div>
        </section>
    `,
    styles: [
        `
            .question-options-container {
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: center;
            }
            .dropdown-container {
                display: inline-flex;
                position: relative;
                width: 100px;
                margin-bottom: -10px;
            }
            .dropdown {
                display: absolute;
                font-size: 12px;
                width: 100%;
                height: 30px;
                margin-bottom: 10px;
            }
            .required-container {
                display: inline-flex;
                font-size: 12px;
                justify-content: space-between;
                width: 90px;
                align-items: center;
                margin: 0px 15px 5px 0px;
            }
            .delete-button {
                display: inline-flex;
                color: ##9a2d2d;
            }
        `,
    ],
})
export class QuestionOptionsComponent implements OnInit {
    @Input() view = 'edit';
    public QuestionType = QuestionType;
    selected_tag: string;

    constructor(public questionCreatorService: QuestionCreatorService) {}

    ngOnInit(): void {
        this.selected_tag = this.questionCreatorService.selected_tag;
    }

    updateSelectedTag() {
        this.questionCreatorService.selected_tag = this.selected_tag;
    }
}
