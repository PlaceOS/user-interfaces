import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addDays, subDays } from 'date-fns';

@Component({
    selector: 'date-options',
    template: `
        <button icon matRipple (click)="previousDay()">
            <app-icon
                [icon]="{
                    class: 'material-icons',
                    content: 'keyboard_arrow_left'
                }"
            ></app-icon>
        </button>
        <button icon matRipple (click)="nextDay()">
            <app-icon
                [icon]="{
                    class: 'material-icons',
                    content: 'keyboard_arrow_right'
                }"
            ></app-icon>
        </button>
        <div class="display m-4 text-center" style="width: 7em;">
            {{ date | date: 'mediumDate' }}
        </div>
        <button icon matRipple class="rounded relative" (click)="picker.open()">
            <app-icon
                [icon]="{ class: 'material-icons', content: 'today' }"
            ></app-icon>
            <input
                class="absolute inset-0"
                [(ngModel)]="date"
                (ngModelChange)="dateChange.emit($event)"
                [matDatepicker]="picker"
            />
            <mat-datepicker #picker></mat-datepicker>
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
            }

            button:last-child {
                border: 1px solid #ccc;
                border-radius: 0.25rem;
            }

            input {
                opacity: 0;
                width: 100%;
            }
        `,
    ],
})
export class DateOptionsComponent {
    /** Currently selected date */
    @Input() public date: number | string = new Date().valueOf();
    /** Emitter for changes to the date */
    @Output() public dateChange = new EventEmitter<number | string>();
    /** Change date to the previous date */
    public readonly previousDay = () => {
        this.date = subDays(new Date(this.date), 1).valueOf();
        this.dateChange.emit(this.date);
    };
    /** Change date to the next date */
    public readonly nextDay = () => {
        this.date = addDays(new Date(this.date), 1).valueOf();
        this.dateChange.emit(this.date);
    };

    constructor() {}
}
