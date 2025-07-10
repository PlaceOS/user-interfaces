import { CommonModule } from '@angular/common';
import { Component, contentChild, input, viewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AsyncHandler } from '@placeos/common';
import { startOfDay } from 'date-fns';

import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DateRangeCalendarComponent } from './date-range-calendar.component';

@Component({
    selector: 'date-range-field',
    template: `
        <button
            matRipple
            class="flex min-w-max items-center space-x-2 rounded border border-neutral px-4 py-2 outline-base-content hover:border-base-content focus:outline-2"
            type="button"
            role="date-picker"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
        >
            <div class="flex-1 whitespace-nowrap">
                {{ start_date()?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <div>&ndash;</div>
            <div class="flex-1 whitespace-nowrap">
                {{ end_date()?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <icon class="text-2xl">today</icon>
        </button>
        <div class="hidden">
            <ng-content select="input[startDate]"></ng-content>
            <ng-content select="input[endDate]"></ng-content>
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18.25rem] rounded bg-base-100 px-2 py-4">
                <date-range-calendar
                    [month]="start_date()?.control?.value || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start()"
                    (startChange)="setStartDate($event)"
                    (endChange)="setEndDate($event)"
                ></date-range-calendar>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        DateRangeCalendarComponent,
        IconComponent,
        CustomTooltipComponent,
    ],
})
export class DateRangeFieldComponent extends AsyncHandler {
    /** Earliest date available the user is allowed to pick */
    public readonly from_date = input<number>(
        startOfDay(Date.now()).valueOf(),
        { alias: 'from' },
    );
    /** Latest date available the user is allowed to pick */
    public readonly to_date = input<number>(undefined, { alias: 'to' });
    /** Index of the day to start the week on when displaying the calendar */
    public readonly week_start = input(0);
    /** Whether form control is disabled */
    public readonly disabled = input(false);
    public readonly short = input(false);

    public readonly now = Date.now();

    public readonly start_date = contentChild('startDate', { read: NgControl });
    public readonly end_date = contentChild('endDate', { read: NgControl });

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    public setStartDate(date: number) {
        const start_date = this.start_date();
        if (!start_date) return;
        start_date.control.setValue(date);
    }

    public setEndDate(date: number) {
        this._tooltip()?.close();
        const end_date = this.end_date();
        if (!end_date) return;
        end_date.control.setValue(date);
    }
}
