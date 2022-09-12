import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'question-box',
    template: ` <section class="box">
        <input-title [placeholder]="'Page 1'" [fontSize]="'30'"></input-title>
    </section>`,
    styles: [
        `
            .box {
                display: flex;
                flex-direction: column;
                width: 600px;
                height: 250px;
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
        `,
    ],
})
export class QuestionBoxComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
