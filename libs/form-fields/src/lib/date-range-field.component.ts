import { Component, ContentChild, Input, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AsyncHandler } from '@placeos/common';
import { CustomTooltipComponent } from '@placeos/components';
import { startOfDay } from 'date-fns';

@Component({
    selector: 'date-range-field',
    template: `
        <button
            matRipple
            class="flex items-center rounded px-4 py-2 border border-neutral hover:border-base-content focus:outline-2 outline-base-content space-x-2 min-w-max"
            type="button"
            role="date-picker"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled"
            [class.opacity-30]="disabled"
        >
            <div class="flex-1 whitespace-nowrap">
                {{ start_date?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <div>&ndash;</div>
            <div class="flex-1 whitespace-nowrap">
                {{ end_date?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <app-icon class="text-2xl">today</app-icon>
        </button>
        <div class="hidden">
            <ng-content select="input[startDate]"></ng-content>
            <ng-content select="input[endDate]"></ng-content>
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18.25rem] rounded bg-base-100 px-2 py-4">
                <date-range-calendar
                    [month]="start_date?.control?.value || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start"
                    (startChange)="setStartDate($event)"
                    (endChange)="setEndDate($event)"
                ></date-range-calendar>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class DateRangeFieldComponent extends AsyncHandler {
    /** Earliest date available the user is allowed to pick */
    @Input('from') public from_date: number = startOfDay(Date.now()).valueOf();
    /** Latest date available the user is allowed to pick */
    @Input('to') public to_date: number;
    /** Index of the day to start the week on when displaying the calendar */
    @Input() public week_start: number = 0;
    /** Whether form control is disabled */
    @Input() public disabled: boolean = false;
    @Input() public short = false;

    public readonly now = Date.now();

    @ContentChild('startDate', { read: NgControl })
    public start_date?: NgControl;
    @ContentChild('endDate', { read: NgControl }) public end_date?: NgControl;

    @ViewChild(CustomTooltipComponent) private _tooltip: CustomTooltipComponent;

    public setStartDate(date: number) {
        if (!this.start_date) return;
        this.start_date.control.setValue(date);
    }

    public setEndDate(date: number) {
        this._tooltip?.close();
        if (!this.end_date) return;
        this.end_date.control.setValue(date);
    }
}
