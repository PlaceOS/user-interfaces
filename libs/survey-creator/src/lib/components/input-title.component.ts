import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'input-title',
    template: `
        <input
            type="text"
            id="title"
            name="title"
            [placeholder]="placeholder"
            [style.fontSize.px]="fontSize"
        />
    `,
    styles: [
        `
            input[type='text'] {
                border: none;
                padding: 10px 10px;
                margin: 5px;
                font-weight: 500;
                width: 100%;
            }

            input[type='text']:focus {
                font: #808080;
            }

            input[type='text']:active {
                border: none;
            }
        `,
    ],
})
export class InputTitleComponent implements OnInit {
    @Input() placeholder: string = 'Title';
    @Input() fontSize: string = '';

    constructor() {}

    ngOnInit(): void {}
}
