import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'dialpad',
    template: `
        <div
            dialpad
            class="w-60 flex flex-wrap justify-center items-center relative !text-base-content"
        >
            <button
                digit
                matRipple
                *ngFor="let digit of digits"
                class="relative bg-base-100 h-16 w-16 flex rounded-lg items-center justify-center m-2 active:top-1"
                (click)="pressed.emit(digit)"
            >
                {{ digit }}
            </button>
            <button
                digit
                matRipple
                *ngIf="backspace"
                class="active:-bottom-1 bg-base-100 h-16 flex-1 flex rounded-lg items-center justify-center m-2 w-60"
                [class.absolute]="!inline"
                [class.bottom-0]="!inline"
                [class.-right-4]="!inline"
                [class.translate-x-full]="!inline"
                (click)="pressed.emit('')"
            >
                Backspace
            </button>
        </div>
    `,
    styles: [
        `
            [digit] {
                box-shadow: 0px 4px 0px 0px var(--b3);
                border: 2px solid var(--b3);
                transition: top 200ms, bottom 200ms, box-shadow 200ms;
            }

            [digit]:active {
                box-shadow: none;
            }
        `,
    ],
})
export class DialpadComponent {
    @Input() public backspace = true;
    @Input() public inline = false;
    @Output() public pressed = new EventEmitter<string>();

    // prettier-ignore
    public readonly digits = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '*', '0', '#',
    ];
}
