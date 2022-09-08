import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'input-title',
    template: `
        <input type="text" id="title" name="title" placeholder="Survey Title" />
    `,
    styles: [
        `
            input[type='text'] {
                border: none;
                font-size: 2rem;
                padding: 12px 20px;
            }

            input[type='text']:focus {
                border: 2px solid #808080;
                background-color: #d3d3d3;
                border-radius: 5px;
                font: #808080;
            }
        `,
    ],
})
export class InputTitleComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
