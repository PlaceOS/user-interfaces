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
                height: 35px;
                font-size: 12px;
                background-color: #fff;
                margin: 10px;
                border: 1px solid rgba(0, 0, 0, 0.12);
                display: inline-flex;
                align-items: center;
                flex-direction: row;
                text-decoration: none;
                padding: 5px 10px;
                border-radius: 20px;
            }

            .button-with-icon:hover {
                background-color: #f5f5f5;
            }

            .button-with-icon:active {
                background-color: #f5f5f5;
            }

            .button-with-icon span {
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
            }

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 5px;
                color: gray;
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
