import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    contentChild,
    effect,
    input,
    signal,
    viewChild,
    WritableSignal,
} from '@angular/core';
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
            class="border-neutral outline-base-content hover:border-base-content flex min-w-max items-center space-x-2 rounded-sm border px-4 py-2 focus:outline-2"
            type="button"
            role="date-picker"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
        >
            <div class="flex-1 whitespace-nowrap">
                {{ start_value() || now | date: 'MMM d, yyyy' }}
            </div>
            <div>&ndash;</div>
            <div class="flex-1 whitespace-nowrap">
                {{ end_value() || now | date: 'MMM d, yyyy' }}
            </div>
            <icon class="text-2xl">today</icon>
        </button>
        <div class="hidden">
            <ng-content select="input[startDate]"></ng-content>
            <ng-content select="input[endDate]"></ng-content>
        </div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-73 rounded-sm px-2 py-4">
                <date-range-calendar
                    [month]="start_value() || now"
                    [start]="start_value()"
                    [end]="end_value()"
                    [from]="from()"
                    [to]="until()"
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

    /** First allowed date on the calendar */
    public readonly from = computed((): number => {
        const from = this.from_date();
        return from !== undefined ? from : startOfDay(new Date()).valueOf();
    });
    /** Current date value */
    public readonly until = computed((): number => {
        return this.to_date();
    });

    /**
     * Current values of the inputs. Control values are not signals, so
     * mirror them here, or the field would not show values set in code.
     */
    public readonly start_value = signal<number | undefined>(undefined);
    public readonly end_value = signal<number | undefined>(undefined);

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    constructor() {
        super();
        this._mirrorValue(this.start_date, this.start_value);
        this._mirrorValue(this.end_date, this.end_value);
    }

    /** Keep `target` in sync with the value of the projected control. */
    private _mirrorValue(
        control: () => NgControl | undefined,
        target: WritableSignal<number | undefined>,
    ) {
        effect((on_cleanup) => {
            const ctrl = control();
            if (!ctrl) return;
            target.set(ctrl.value);
            const sub = ctrl.valueChanges?.subscribe((value) =>
                target.set(value),
            );
            on_cleanup(() => sub?.unsubscribe());
        });
    }

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
