import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'button-with-icon',
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
                display: inline-flex;
                align-items: center;
                flex-direction: row;
                text-decoration: none;
                border: none;
                padding: 5px 10px;
                border-radius: 5px;
            }

            .button-with-icon:hover {
                background-color: orange;
            }

            .button-with-icon:active {
                background-color: #fff;
            }

            .button-with-icon span {
                display: inline-flex;
                vertical-align: middle;
            }

            .icon {
                display: inline-flex;
                color: orange;
            }

            .button-title {
                display: inline-flex;
                color: #808080;
                vertical-align: middle;
            }
        `,
    ],
})
export class ButtonWithIconComponent implements OnInit {
    @Input() button_title: string = '';
    @Input() icon: string = '';

    public fontIcon = 'delete';
    constructor() {}

    ngOnInit(): void {}
}
