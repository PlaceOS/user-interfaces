import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'button-borderless',
    template: `
        <button class="button-with-icon">
            <span class="">
                <mat-icon
                    aria-hidden="false"
                    aria-label="Material icon for button"
                    class="icon"
                    [ngClass]="icon_color == 'red' ? 'red' : 'blue'"
                    >{{ icon }}</mat-icon
                >
            </span>
            <span
                class="button-title"
                [ngClass]="text_color == 'black' ? 'black' : 'blue'"
            >
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
                margin: 10px 0px 10px 10px;
                display: inline-flex;
                align-items: center;
                flex-direction: row;
                text-decoration: none;
                padding: 0px 10px 0px 0px;
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
            }
            .blue {
                color: #3e69cf;
            }
            .red {
                color: #9a2d2d;
            }
            .grey {
                color: #808080;
            }
            .black {
                color: #000000;
            }
            .button-title {
                display: inline-flex;
                vertical-align: middle;
            }
        `,
    ],
})
export class ButtonBorderlessComponent implements OnInit {
    @Input() button_title: string = '';
    @Input() icon?: string = '';
    @Input() icon_color: string = '';
    @Input() text_color: string = '';
    constructor() {}

    ngOnInit(): void {
        console.log(this.icon_color, 'icon color');
    }
}
