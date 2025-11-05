import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addDays, subDays } from 'date-fns';

@Component({
    selector: `schedule-topbar`,
    template: `
        <div
            class="flex w-full flex-col items-center justify-between space-y-2 border-b border-base-300 bg-base-100 p-2 sm:flex-row sm:space-x-2 sm:space-y-0"
        >
            <div date class="flex w-full items-center space-x-2 sm:w-auto">
                <button
                    btn
                    matRipple
                    class="inverse min-h-11"
                    (click)="resetDate()"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="inverse min-h-11 min-w-11 p-0"
                    (click)="previousDate()"
                >
                    <icon class="text-2xl">keyboard_arrow_left</icon>
                </button>
                <button
                    btn
                    matRipple
                    class="inverse min-h-11 min-w-11 p-0"
                    (click)="nextDate()"
                >
                    <icon class="text-2xl">keyboard_arrow_right</icon>
                </button>
                <div>{{ date() | date: 'EEE, dd MMM' }}</div>
                <div
                    class="rounded-lg border border-base-300 px-2 py-1 text-xs"
                >
                    {{ date() | date: 'z' }}
                </div>
            </div>
            <div
                view
                class="flex w-full space-x-1 rounded-xl border border-base-300 bg-base-200 p-1 sm:w-auto"
            >
                <a
                    btn
                    matRipple
                    class="min-h-10 flex-1 hover:bg-base-300"
                    [class.clear]="view() !== 'day'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'day' }"
                    (click)="view.set('day')"
                >
                    {{ 'COMMON.DAY' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="min-h-10 flex-1 hover:bg-base-300"
                    [class.clear]="view() !== 'week'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'week' }"
                    (click)="view.set('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="min-h-10 flex-1 hover:bg-base-300"
                    [class.clear]="view() !== 'list'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'list' }"
                    (click)="view.set('list')"
                >
                    {{ 'COMMON.LIST' | translate }}
                </a>
            </div>
        </div>
    `,
    styles: [``],
    imports: [CommonModule, TranslatePipe, IconComponent, RouterModule],
})
export class ScheduleTopbarComponent {
    public readonly view = model<'day' | 'week' | 'list'>('list');
    public readonly date = model(Date.now());

    public readonly resetDate = () => this.date.set(Date.now());
    public readonly previousDate = () =>
        this.date.set(
            subDays(Date.now(), this.view() === 'week' ? 7 : 1).valueOf(),
        );
    public readonly nextDate = () =>
        this.date.set(
            addDays(Date.now(), this.view() === 'week' ? 7 : 1).valueOf(),
        );
}
