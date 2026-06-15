import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { nextValueFrom } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { differenceInDays, endOfDay, startOfDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { GroupEventsStateService } from './group-events-state.service';

@Component({
    selector: 'group-events-filters-list',
    template: `
        <div
            class="border-base-300 bg-base-100 mx-auto my-2 w-252 max-w-full rounded-sm border p-4"
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
                    class="border-base-400 m-1 flex items-center rounded-3xl border px-4 py-3 text-sm"
                >
                    {{ (options | async)?.date | date: 'MMM d, y' }}
                    &ndash;
                    {{ (options | async)?.end | date: 'MMM d, y' }}
                </div>
                @for (tag of (filters | async)?.tags || []; track tag) {
                    <div
                        class="border-base-400 m-1 flex items-center rounded-3xl border pr-1 pl-4"
                    >
                        <div class="mr-2 flex-1 text-sm">{{ tag }}</div>
                        <button icon matRipple (click)="removeTag(tag)">
                            <icon>close</icon>
                        </button>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [CommonModule, MatRippleModule, TranslatePipe, IconComponent],
})
export class GroupEventsFiltersListComponent {
    private _state = inject(GroupEventsStateService);

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

    public async removeTag(tag: string) {
        const tags = (await nextValueFrom(this.filters))?.tags || [];
        this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
    }
}
