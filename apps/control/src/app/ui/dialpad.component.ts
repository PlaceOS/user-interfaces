import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'dialpad',
    template: `
        <div dialpad class="w-60 flex flex-wrap justify-center items-center">
            <button
                digit
                matRipple
                *ngFor="let digit of digits"
                class="relative bg-white h-16 w-16 flex rounded-lg items-center justify-center m-2"
                (click)="pressed.emit(digit)"
            >
                {{ digit }}
            </button>
        </div>
    `,
    styles: [
        `
            [digit] {
                box-shadow: 0px 4px 0px 0px #ccc;
                border: 2px solid #ccc;
                transition: top 200ms;
                color: black !important;
            }

            [digit]:active {
                top: 4px;
                box-shadow: none;
            }
        `,
    ],
})
export class DialpadComponent {
    @Output() public pressed = new EventEmitter<string>();

    // prettier-ignore
    public readonly digits = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '*', '0', '#',
    ];
}
