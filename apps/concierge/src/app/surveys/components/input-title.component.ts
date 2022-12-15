import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'input-title',
    template: `
        <input
            #input
            type="text"
            name="title"
            [id]="id"
            [placeholder]="placeholder"
            [style.fontSize.px]="fontSize"
            [value]="value"
        />
        <mat-error class="input-error" *ngIf="title.hasError('required')"
            >Please enter a question</mat-error
        >
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
                color: #808080;
            }

            input[type='text']:active {
                border: none;
            }

            .input-error {
                font-size: 14px;
                color: #3b82f6;
                border: none;
                margin-left: 30px;
            }
        `,
    ],
})
export class InputTitleComponent implements OnInit {
    @Input() placeholder: string = 'Title';
    @Input() fontSize: string = '';
    @Input() id: string = '';
    @Input() value?: string = '';

    title: FormControl = new FormControl('');

    constructor() {}

    ngOnInit(): void {}
}
