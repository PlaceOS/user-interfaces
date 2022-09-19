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
                width: 50px;
            }

            .button-container button {
                display: flex;
                background-color: #9a2d2d;
                height: 25px;
                width: 25px;
                justify-content: center;
            }

            .button-container button mat-icon {
                display: absolute;
                margin-top: -14px;
                font-size: 20px;
                font-weight: 600;
            }
        `,
    ],
})
export class MinusButtonComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
