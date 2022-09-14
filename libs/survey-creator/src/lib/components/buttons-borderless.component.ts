import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'buttons-borderless',
    template: `
        <button class="button-with-icon">
            <span class="">
                <mat-icon
                    aria-hidden="false"
                    aria-label="Material icon for button"
                    class="icon"
                    >{{ icon }}</mat-icon
                >
            </span>
            <span class="button-title">
                {{ button_title }}
            </span>
        </button>
    `,
    styles: [
        `
            .button-with-icon {
                height: 35px;
                border: none;
                font-size: 12px;
                background-color: #fff;
                margin: 10px;
                display: inline-flex;
                align-items: center;
                flex-direction: row;
                text-decoration: none;
                padding: 0px;
            }

            .button-with-icon:hover {
                background-color: #f5f5f5;
            }

            .button-with-icon:active {
                background-color: #f5f5f5;
            }

            .button-with-icon span {
                color: #3e69cf;
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
            }

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 5px;
                color: #3e69cf;
            }

            .button-title {
                display: inline-flex;
                color: #808080;
                vertical-align: middle;
            }
        `,
    ],
})
export class ButtonsBorderlessComponent implements OnInit {
    @Input() button_title: string = '';
    @Input() icon?: string = '';
    constructor() {}

    ngOnInit(): void {}
}
