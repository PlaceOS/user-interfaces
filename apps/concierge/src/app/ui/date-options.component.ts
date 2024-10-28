import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { addDays, startOfMinute, subDays, format, parse } from 'date-fns';

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
})
export class DateOptionsComponent extends AsyncHandler {
    @Input() public is_new = false;
    @Input() public disabled = false;
    /** Index of the day to start the week on when displaying the calendar */
    @Input() public week_start: number = 0;
    /** Currently selected date */
    @Input() public date: number = Date.now();
    @Input() public step = 1;
    /** Emitter for changes to the date */
    @Output() public dateChange = new EventEmitter<number | string>();
    /** Change date to the previous date */
    public readonly previousDay = () =>
        this.setDate(subDays(this.date, this.step).valueOf());
    /** Change date to the next date */
    public readonly nextDay = () =>
        this.setDate(addDays(this.date, this.step).valueOf());

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('date')) {
                    this.timeout('set-date', () => {
                        this.date = parse(
                            params.get('date'),
                            'yyyy-MM-dd',
                            0,
                        ).valueOf();
                        this.dateChange.emit(this.date);
                    });
                }
            }),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date) {
            this.setDate(this.date || Date.now(), false);
        }
    }

    public setDate(date: number, emit: boolean = true) {
        date = startOfMinute(date).valueOf();
        this.date = date;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { date: format(date, 'yyyy-MM-dd') },
            queryParamsHandling: 'merge',
        });
        if (emit) this.dateChange.emit(this.date);
        this.timeout(
            'clear-set-date',
            () => this.clearTimeout('set-date'),
            100,
        );
    }
}
