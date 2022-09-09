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
    @Input() placeholder: string = 'Title';
    @Input() fontSize: string = '';

    constructor() {}

    ngOnInit(): void {}
}
