import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { addDays, subDays } from 'date-fns';

@Component({
    selector: 'date-options',
    template: `
        <button
            icon
            matRipple
            class="rounded relative"
            *ngIf="is_new"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [class.pointer-events-none]="disabled"
            [class.opacity-30]="disabled"
        >
            <app-icon>today</app-icon>
        </button>
        <button icon matRipple (click)="previousDay()">
            <app-icon>keyboard_arrow_left</app-icon>
        </button>
        <button icon matRipple (click)="nextDay()" *ngIf="!is_new">
            <app-icon>keyboard_arrow_right</app-icon>
        </button>
        <div class="display m-4 text-center" style="width: 7em;">
            {{ date | date: 'mediumDate' }}
        </div>
        <button icon matRipple (click)="nextDay()" *ngIf="is_new">
            <app-icon>keyboard_arrow_right</app-icon>
        </button>
        <button
            icon
            matRipple
            class="rounded relative border border-base-200"
            *ngIf="!is_new"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [class.pointer-events-none]="disabled"
            [class.opacity-30]="disabled"
        >
            <app-icon>today</app-icon>
        </button>
        <ng-template #calendar_picker>
            <div class="relative w-[19rem] rounded bg-base-100 px-2 py-4">
                <date-calendar
                    [ngModel]="date"
                    [offset_weekday]="week_start"
                    (ngModelChange)="date = $event; dateChange.emit($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
            }

            input {
                opacity: 0;
                width: 100%;
            }
        `,
    ],
})
export class DateOptionsComponent {
    @Input() public is_new = false;
    @Input() public disabled = false;
    /** Index of the day to start the week on when displaying the calendar */
    @Input() public week_start: number = 0;
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

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date) {
            this.date = this.date || Date.now();
        }
    }
}
