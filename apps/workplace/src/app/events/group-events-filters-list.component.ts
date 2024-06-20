import { Component } from '@angular/core';
import { GroupEventsStateService } from './group-events-state.service';
import { differenceInDays, endOfDay, startOfDay } from 'date-fns';
import { map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'group-events-filters-list',
    template: `
        <div
            class="my-2 w-[63rem] max-w-full mx-auto border border-base-300 p-4 bg-base-100 rounded"
        >
            <div class="flex items-center justify-between space-x-2 mb-4">
                <div>
                    {{ (this_period | async) ? 'This' : 'Upcoming' }}
                    {{ (period | async) === 'week' ? 'Week' : 'Month' }}
                </div>
            </div>
            <div class="flex flex-wrap">
                <div
                    class="flex items-center px-4 py-3 rounded-3xl border border-base-400 m-1 text-sm"
                >
                    {{ (options | async)?.date | date: 'MMM d, y' }}
                    &ndash;
                    {{ (options | async)?.end | date: 'MMM d, y' }}
                </div>
                <div
                    class="flex items-center pl-4 pr-1 rounded-3xl border border-base-400 m-1"
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
        })
    );
    public readonly period = this._state.options.pipe(
        map(({ date, end }) =>
            Math.abs(differenceInDays(date, end || Date.now())) > 7
                ? 'month'
                : 'week'
        )
    );

    constructor(private _state: GroupEventsStateService) {}

    public async removeTag(tag: string) {
        const tags = (await this.filters.pipe(take(1)).toPromise())?.tags || [];
        this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
    }
}
