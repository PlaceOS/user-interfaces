import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'plus-button',
    template: `
        <div class="button-container">
            <button mat-mini-fab aria-label="Button with plus icon">
                <mat-icon>add</mat-icon>
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
                background-color: #529a60;
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
export class PlusButtonComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
