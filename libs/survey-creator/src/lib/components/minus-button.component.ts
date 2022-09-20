import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'minus-button',
    template: `
        <div class="button-container">
            <button mat-mini-fab aria-label="Button with plus icon">
                <mat-icon>remove</mat-icon>
            </button>
        </div>
    `,
    styles: [
        `
            .button-container {
                display: flex;
                justify-content: center;
                width: 40px;
            }

            .button-container button {
                display: flex;
                position: relative;
                background-color: #9a2d2d;
                height: 20px;
                width: 20px;
                justify-content: center;
            }

            .button-container button mat-icon {
                position: absolute;
                top: 0;
                left: 0;
                margin-left: -2px;
                margin-top: 1px;
                font-size: 18px;
                font-weight: 700;
            }
        `,
    ],
})
export class MinusButtonComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
