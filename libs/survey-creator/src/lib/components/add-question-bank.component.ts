import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { QuestionType } from '../survey-types';

@Component({
    selector: 'add-question-bank',
    template: `
        <section>
            <div class="header">
                <span class="dialog-title">Add to question bank</span>
                <span class="close" (click)="closeDialog()">
                    <mat-icon
                        aria-hidden="false"
                        aria-label="Material icon for closing dialog"
                        class="icon"
                        >close</mat-icon
                    >
                </span>
            </div>
            <main>
                <div><span class="section-heading">Category</span></div>
                <div>
                    <p class="small-text">
                        Please select tags that apply to the below question.
                    </p>
                </div>
                <div class="category-tags" *ngFor="let tag of tags">
                    <mat-checkbox>{{ tag }}</mat-checkbox>
                </div>
                <div class="question-box">
                    <div>placeholder question</div>
                    <div class="dropdown-container">
                        <mat-form-field appearance="none" class="dropdown">
                            <mat-select [(value)]="selected_tag">
                                <mat-option
                                    *ngFor="let enum of QuestionType | keyvalue"
                                    [value]="enum.value"
                                >
                                    {{ enum.value }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>

                    <button-with-icon
                        [button_title]="'Delete'"
                        [icon]="'delete'"
                    ></button-with-icon>
                </div>
            </main>
        </section>
    `,
    styles: [
        `
            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #fff;
                height: 70px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }

            main {
                margin: 20px;
            }
            .dialog-title {
                display: flex;
                font-size: 20px;
                line-height: 30px;
                font-weight: 800;
                padding: 20px;
            }
            .section-heading {
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
            }
            .small-text {
                size: 11px;
                font-weight: 400;
                margin-top: 3px;
            }
            .category-tags {
                display: inline-flex;
            }

            .category-tags mat-checkbox {
                margin-right: 20px;
            }
            .question-box {
                border: 1px solid #3b82f6;
                box-shadow: 0px 0px 1px rgba(15, 23, 42, 0.06),
                    0px 20px 25px -5px rgba(15, 23, 42, 0.1),
                    0px 10px 10px -5px rgba(15, 23, 42, 0.04);
                border-radius: 4px;
            }
            .dropdown-container {
                display: flex;
                position: relative;
                width: 100px;
            }
            .dropdown {
                display: absolute;
                font-size: 12px;
                width: 100%;
                height: 30px;
                margin-bottom: 10px;
            }
            .close {
                display: flex;
                z-index: 99;
                text-align: right;
                vertical-align: middle;
                line-height: 12px;
                margin-right: 20px;
            }
        `,
    ],
})
export class AddQuestionBankComponent implements OnInit {
    tags: string[] = ['Desk', 'Room', 'Parking'];
    selected_tag: any = QuestionType.rating;

    public QuestionType = QuestionType;

    constructor(public dialogRef: MatDialogRef<AddQuestionBankComponent>) {}

    ngOnInit(): void {
        console.log(this.selected_tag, 'selected tag');
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
