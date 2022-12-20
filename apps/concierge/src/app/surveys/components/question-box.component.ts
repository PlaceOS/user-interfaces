import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'question-box',
    template: ` <div class="box">
        <input-title [placeholder]="'Page 1'" [fontSize]="'24'"></input-title>
        <input-title
            [placeholder]="'Description'"
            [fontSize]="'16'"
        ></input-title>
        <div class="question-wrapper">
            <div class="question-row">
                <span class="question-number">1.</span>
                <input-title
                    [placeholder]="'question1'"
                    [fontSize]="'16'"
                ></input-title>
            </div>
        </div>
        <div class="question-wrapper"></div>
    </div>`,
    styles: [
        `
            .box {
                display: flex;
                flex-direction: column;
                width: 600px;
                background-color: #f5f5f5;
                margin: auto;
                border: 3px solid #808080;
                border-radius: 15px;
            }

            .box:hover,
            .box:active {
                border: 3px solid orange;
                background-color: #ffeed2;
            }

            .question-wrapper {
                background-color: #fff;
                margin: 5px 15px 15px 15px;
                padding: 20px;
                border-radius: 10px;
            }

            .question-number {
                font-size: 12px;
                color: #808080;
            }

            .question-row {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        `,
    ],
})
export class QuestionBoxComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
