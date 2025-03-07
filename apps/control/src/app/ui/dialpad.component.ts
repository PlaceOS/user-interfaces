import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'dialpad',
    template: `
        <div
            dialpad
            class="relative flex w-60 flex-wrap items-center justify-center !text-base-content"
        >
            <button
                digit
                matRipple
                *ngFor="let digit of digits"
                class="relative m-2 flex h-16 w-16 items-center justify-center rounded-lg bg-base-100 active:top-1"
                (click)="pressed.emit(digit)"
            >
                {{ digit }}
            </button>
            <button
                digit
                matRipple
                *ngIf="backspace"
                class="m-2 flex h-16 w-60 flex-1 items-center justify-center rounded-lg bg-base-100 active:-bottom-1"
                [class.absolute]="!inline"
                [class.bottom-0]="!inline"
                [class.-right-4]="!inline"
                [class.translate-x-full]="!inline"
                (click)="pressed.emit('')"
            >
                {{ 'APP.CONTROL.BACKSPACE' | translate }}
            </button>
        </div>
    `,
    styles: [
        `
            [digit] {
                box-shadow: 0px 4px 0px 0px var(--b3);
                border: 2px solid var(--b3);
                transition:
                    top 200ms,
                    bottom 200ms,
                    box-shadow 200ms;
            }

            [digit]:active {
                box-shadow: none;
            }
        `,
    ],
    standalone: false,
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
