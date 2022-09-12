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
                padding: 6px 10px;
                margin: 2px;
                font-weight: 700;
            }

            input[type='text']:focus {
                border: 2px solid orange;
                background-color: #f5f5f5;
                border-radius: 5px;
                font: #808080;
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
