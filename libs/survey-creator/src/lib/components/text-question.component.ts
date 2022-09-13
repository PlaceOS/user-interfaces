import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'text-question',
    template: `
        <div class="question-container">
            <div class="question">
                <span>
                    {{ question }}
                </span>
            </div>
        </div>
    `,
    styles: [
        `
            .question-container {
                display: flex;
                flex-direction: column;
                font-size: 12px;
                width: 800px;
                color: #808080;
                background-color: #fff;
                padding: 20px;
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }

            .question {
                display: flex;
                flex-direction: row;
            }
        `,
    ],
})
export class TextQuestionComponent implements OnInit {
    @Input() question: string;
    constructor() {}

    ngOnInit(): void {}
}
