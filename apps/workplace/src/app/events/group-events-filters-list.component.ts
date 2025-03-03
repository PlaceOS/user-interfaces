import { Component } from '@angular/core';
import { GroupEventsStateService } from './group-events-state.service';
import { differenceInDays, endOfDay, startOfDay } from 'date-fns';
import { map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'group-events-filters-list',
    template: `
        <div
            class="mx-auto my-2 w-[63rem] max-w-full rounded border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-4 flex items-center justify-between space-x-2">
                <div>
                    {{
                        ((this_period | async)
                            ? (period | async) === 'week'
                                ? 'COMMON.WEEK_THIS'
                                : 'COMMON.MONTH_THIS'
                            : (period | async) === 'week'
                              ? 'COMMON.WEEK_UPCOMING'
                              : 'COMMON.MONTH_UPCOMING'
                        ) | translate
                    }}
                </div>
            </div>
            <div class="flex flex-wrap">
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-400 px-4 py-3 text-sm"
                >
                    {{ (options | async)?.date | date: 'MMM d, y' }}
                    &ndash;
                    {{ (options | async)?.end | date: 'MMM d, y' }}
                </div>
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-400 pl-4 pr-1"
                    *ngFor="let tag of (filters | async)?.tags || []"
                >
                    <div class="mr-2 flex-1 text-sm">{{ tag }}</div>
                    <button icon matRipple (click)="removeTag(tag)">
                        <app-icon>close</app-icon>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class GroupEventsFiltersListComponent {
    public readonly options = this._state.options;
    public readonly filters = this._state.filters;
    public readonly this_period = this._state.options.pipe(
        map(({ date, end }) => {
            return (
                Date.now() >= startOfDay(date).valueOf() &&
                Date.now() < endOfDay(end || date).valueOf()
            );
        }),
    );
    public readonly period = this._state.options.pipe(
        map(({ date, end }) =>
            Math.abs(differenceInDays(date, end || Date.now())) > 7
                ? 'month'
                : 'week',
        ),
    );

    constructor(private _state: GroupEventsStateService) {}

    public async removeTag(tag: string) {
        const tags = (await this.filters.pipe(take(1)).toPromise())?.tags || [];
        this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
    }
}
