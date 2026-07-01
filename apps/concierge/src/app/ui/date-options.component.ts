import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    computed,
    inject,
    input,
    linkedSignal,
    output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateCalendarComponent } from '@placeos/form-fields';
import {
    addDays,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    isSameYear,
    isValid,
    parse,
    startOfMinute,
    startOfWeek,
    subDays,
} from 'date-fns';

type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

@Component({
    selector: 'date-options',
    template: `
        @if (is_new()) {
            <button
                icon
                matRipple
                class="relative rounded-sm"
                customTooltip
                [content]="calendar_picker"
                yPosition="top"
                [class.pointer-events-none]="disabled()"
                [class.opacity-30]="disabled()"
            >
                <icon>today</icon>
            </button>
        }
        <button
            icon
            matRipple
            class="hover:bg-base-200 rounded-sm"
            (click)="previousDay()"
        >
            <icon>keyboard_arrow_left</icon>
        </button>
        @if (!is_new()) {
            <button
                icon
                matRipple
                class="hover:bg-base-200 rounded-sm"
                (click)="nextDay()"
            >
                <icon>keyboard_arrow_right</icon>
            </button>
        }
        <button
            matRipple
            (dblclick)="setDate()"
            class="display hover:bg-base-200 relative mx-4 flex h-12 items-center justify-center rounded-sm leading-none"
            [class.w-28]="display_mode() === 'day'"
            [class.w-48]="display_mode() === 'week'"
        >
            @if (is_today()) {
                <div
                    class="text-info absolute top-1 left-1/2 -translate-x-1/2 text-xs"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="relative" [class.top-2]="is_today()">
                {{ display_date() }}
            </div>
        </button>
        @if (is_new()) {
            <button
                icon
                matRipple
                class="hover:bg-base-200 rounded-sm"
                (click)="nextDay()"
            >
                <icon>keyboard_arrow_right</icon>
            </button>
        }
        @if (!is_new()) {
            <div matTooltip="Pick Date">
                <button
                    icon
                    default
                    matRipple
                    customTooltip
                    [content]="calendar_picker"
                    yPosition="top"
                    [class.pointer-events-none]="disabled()"
                    [class.opacity-30]="disabled()"
                >
                    <icon>today</icon>
                </button>
            </div>
        }
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-76 rounded-sm px-2 py-4">
                <date-calendar
                    [ngModel]="date()"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setDate($event)"
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
    imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
        TranslatePipe,
        CustomTooltipComponent,
        DateCalendarComponent,
        IconComponent,
        MatTooltipModule,
    ],
})
export class DateOptionsComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly is_new = input(false);
    public readonly disabled = input(false);
    /** Index of the day to start the week on when displaying the calendar */
    public readonly week_start = input<number>(0);
    /** Currently selected date */
    public readonly dateInput = input<number>(Date.now(), { alias: 'date' });
    public readonly date = linkedSignal(this.dateInput);
    /** How the selected date should be represented in the label */
    public readonly display_mode = input<'day' | 'week'>('day');
    public readonly step = input(1);
    public readonly hide_today = input(false);
    /** Emitter for changes to the date */
    public readonly dateChange = output<number | string>();
    /** Change date to the previous date */
    public readonly previousDay = () =>
        this.setDate(subDays(this.date(), this.step()).valueOf());
    /** Change date to the next date */
    public readonly nextDay = () =>
        this.setDate(addDays(this.date(), this.step()).valueOf());

    public readonly is_today = computed(
        () =>
            this.display_mode() === 'day' &&
            isSameDay(this.date(), Date.now()) &&
            !this.hide_today(),
    );
    public readonly display_date = computed(() => {
        const date = this._validDate(this.date());
        if (this.display_mode() === 'day') {
            return format(date, 'MMM d, yyyy');
        }
        const start = startOfWeek(date, {
            weekStartsOn: this._week_start,
        });
        const end = endOfWeek(date, {
            weekStartsOn: this._week_start,
        });
        if (isSameYear(start, end)) {
            if (isSameMonth(start, end)) {
                return `${format(start, 'MMM d')} - ${format(end, 'd, yyyy')}`;
            }
            return `${format(start, 'MMM d')} - ${format(end, 'MMM d, yyyy')}`;
        }
        return `${format(start, 'MMM d, yyyy')} - ${format(end, 'MMM d, yyyy')}`;
    });

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('date')) {
                    this.timeout('set-date', () => {
                        const date = parse(
                            params.get('date') || '',
                            'yyyy-MM-dd',
                            new Date(),
                        ).valueOf();
                        this.date.set(this._validDate(date, this.date()));
                        this.dateChange.emit(this.date());
                    });
                }
            }),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date) {
            this.setDate(this._validDate(this.date()), false);
        }
    }

    public setDate(date: number = Date.now(), emit = true) {
        date = startOfMinute(this._validDate(date)).valueOf();
        this.date.set(date);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { date: format(date, 'yyyy-MM-dd') },
            queryParamsHandling: 'merge',
        });
        if (emit) this.dateChange.emit(this.date());
        this.timeout(
            'clear-set-date',
            () => this.clearTimeout('set-date'),
            100,
        );
    }

    private get _week_start() {
        return (this.week_start() || 0) as DayOfWeek;
    }

    private _validDate(date: number, fallback = Date.now()) {
        if (isValid(date)) return date;
        if (isValid(fallback)) return fallback;
        return Date.now();
    }
}
