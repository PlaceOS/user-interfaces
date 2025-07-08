import { Component, input, output } from '@angular/core';

@Component({
    selector: 'dialpad',
    template: `
        <div
            dialpad
            class="relative flex w-60 flex-wrap items-center justify-center !text-base-content"
        >
            @for (digit of digits; track digit) {
                <button
                    digit
                    matRipple
                    class="relative m-2 flex h-16 w-16 items-center justify-center rounded-lg bg-base-100 active:top-1"
                    (click)="pressed.emit(digit)"
                >
                    {{ digit }}
                </button>
            }
            @if (backspace()) {
                <button
                    digit
                    matRipple
                    class="m-2 flex h-16 w-60 flex-1 items-center justify-center rounded-lg bg-base-100 active:-bottom-1"
                    [class.absolute]="!inline()"
                    [class.bottom-0]="!inline()"
                    [class.-right-4]="!inline()"
                    [class.translate-x-full]="!inline()"
                    (click)="pressed.emit('')"
                >
                    {{ 'APP.CONTROL.BACKSPACE' | translate }}
                </button>
            }
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
    public readonly backspace = input(true);
    public readonly inline = input(false);
    public readonly pressed = output<string>();

    // prettier-ignore
    public readonly digits = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '*', '0', '#',
    ];
}
