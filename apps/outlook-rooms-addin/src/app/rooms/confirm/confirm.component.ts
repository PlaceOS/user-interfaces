import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'confirm',
    templateUrl: './confirm.component.html',
    styles: [
        `
            .button-text {
                color: var(--secondary);
            }

            .top-box-shadow {
                -webkit-box-shadow: 0px -4px 10px rgba(200, 200, 200, 0.75);
                -moz-box-shadow: 0px -4px 10px rgba(200, 200, 200, 0.75);
                box-shadow: 0px -4px 10px rgba(200, 200, 200, 0.75);
            }
        `,
    ],
})
export class ConfirmComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
