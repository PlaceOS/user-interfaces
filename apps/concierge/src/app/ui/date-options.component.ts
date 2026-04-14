import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    computed,
    inject,
    input,
    model,
    output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
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
    format,
    isSameDay,
    parse,
    startOfMinute,
    subDays,
} from 'date-fns';

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
                [class.opacity-60]="disabled()"
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
            class="display hover:bg-base-200 relative mx-4 flex h-12 w-28 items-center justify-center rounded-sm leading-none"
        >
            @if (is_today()) {
                <div
                    class="text-info absolute top-1 left-1/2 -translate-x-1/2 text-xs"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="relative" [class.top-2]="is_today()">
                {{ date() | date: 'mediumDate' }}
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
            <button
                icon
                matRipple
                class="border-base-200 relative rounded-sm border"
                customTooltip
                [content]="calendar_picker"
                yPosition="top"
                [class.pointer-events-none]="disabled()"
                [class.opacity-60]="disabled()"
            >
                <icon>today</icon>
            </button>
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
    public readonly date = model<number>(Date.now());
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
        () => isSameDay(this.date(), Date.now()) && !this.hide_today(),
    );

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('date')) {
                    this.timeout('set-date', () => {
                        this.date.set(
                            parse(
                                params.get('date'),
                                'yyyy-MM-dd',
                                0,
                            ).valueOf(),
                        );
                        this.dateChange.emit(this.date());
                    });
                }
            }),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date) {
            this.setDate(this.date() || Date.now(), false);
        }
    }

    public setDate(date: number = Date.now(), emit = true) {
        date = startOfMinute(date).valueOf();
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
}
