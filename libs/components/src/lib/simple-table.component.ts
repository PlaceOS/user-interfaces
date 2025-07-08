import { CommonModule } from '@angular/common';
import {
    Component,
    SimpleChanges,
    TemplateRef,
    input,
    model,
    output,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler, nextValueFrom } from '@placeos/common';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

export interface TableColumn {
    key: string;
    name: string;
    sortable?: boolean;
    filterable?: boolean;
    content?: string | TemplateRef<any> | Component;
    size?: string;
    show?: boolean;
    empty?: string;
}

@Component({
    selector: 'simple-table',
    template: `
        <div
            role="table"
            class="grid border border-base-300"
            [style.gridTemplateColumns]="column_template"
            (click)="active_row >= 0 ? rowClicked.emit(active_row) : null"
            (touchend)="active_row = -1"
            (mouseleave)="active_row = -1"
        >
            @if (show_header()) {
                @if (selectable()) {
                    <div
                        id="column-selector"
                        class="sticky top-0 z-20 flex min-h-full items-center justify-between border-b border-r border-base-200 bg-base-300 px-2"
                        [style.gridColumn]="'1 / 2'"
                    >
                        <mat-checkbox
                            [checked]="
                                selected().length ===
                                (data_view$ | async)?.length
                            "
                            [indeterminate]="
                                selected().length > 0 &&
                                selected().length < (data_view$ | async)?.length
                            "
                            (change)="selectAll($event.checked)"
                        ></mat-checkbox>
                    </div>
                }
                @for (
                    column of active_columns;
                    track column.key + i;
                    let i = $index
                ) {
                    <button
                        header
                        matRipple
                        [id]="'column-' + column.key"
                        class="sticky top-0 z-20 flex min-h-full items-center justify-between border-b border-base-200 bg-base-300 p-4"
                        [style.gridColumn]="
                            1 +
                            i +
                            (selectable() ? 1 : 0) +
                            ' / ' +
                            (2 + i + (selectable() ? 1 : 0))
                        "
                        [class.pointer-events-none]="
                            !sortable() || column.sortable === false
                        "
                        (click)="setSort(column.key)"
                        [class.active]="sort?.key === column.key"
                        [class.border-r]="i !== active_columns.length - 1"
                        [class.width]="column.size"
                    >
                        <div class="font-medium">
                            {{ column.name || column.key }}
                        </div>
                        @if (sortable() && column.sortable !== false) {
                            <icon class="text-[1.25em]">
                                {{
                                    sort?.key === column.key && sort?.reverse
                                        ? 'arrow_upward'
                                        : 'arrow_downward'
                                }}
                            </icon>
                        }
                    </button>
                }
            }
            @for (
                row of data_view$
                    | async
                    | slice
                        : page * (page_size() || 9999)
                        : (page + 1) * (page_size() || 9999);
                track row.id || row;
                let i = $index
            ) {
                @if (selectable()) {
                    <div
                        id="column-selector"
                        class="z-10 flex min-h-full items-center justify-between border-r border-base-200 px-2"
                        [style.gridColumn]="'1 / 2'"
                        [class.border-b]="
                            i !== (data_view$ | async)?.length - 1
                        "
                        (mouseenter)="active_row = i"
                        (touchstart)="active_row = i"
                    >
                        <mat-checkbox
                            [checked]="selected().includes(i)"
                            (change)="select(i, $event.checked)"
                        ></mat-checkbox>
                    </div>
                }
                @for (column of active_columns; track column; let j = $index) {
                    <div
                        class="z-10 flex min-h-full items-center justify-between border-base-200"
                        [style.gridColumn]="
                            1 +
                            j +
                            (selectable() ? 1 : 0) +
                            ' / ' +
                            (2 + j + (selectable() ? 1 : 0))
                        "
                        [class.border-b]="
                            i !== (data_view$ | async)?.length - 1
                        "
                        [class.border-r]="j !== active_columns.length - 1"
                        [class.width]="column.size"
                        (mouseenter)="active_row = i"
                        (touchstart)="active_row = i"
                    >
                        @switch (columnType(column)) {
                            @default {
                                <div class="p-4">
                                    {{
                                        row[column.key] ??
                                            (column.key === '_index'
                                                ? i + 1
                                                : row[column.key])
                                    }}
                                    @if (
                                        (row[column.key] == null ||
                                            row[column.key] === '') &&
                                        column.key !== '_index'
                                    ) {
                                        <span class="opacity-30">
                                            {{
                                                column.empty ||
                                                    ('COMMON.EMPTY' | translate)
                                            }}
                                        </span>
                                    }
                                </div>
                            }
                            @case ('template') {
                                <ng-container
                                    *ngTemplateOutlet="
                                        column.content;
                                        context: {
                                            first: i === 0,
                                            last:
                                                i ===
                                                    (data_view$ | async)
                                                        ?.length -
                                                        1 ||
                                                i ===
                                                    (data_view$ | async)
                                                        ?.length -
                                                        1,
                                            index: i,
                                            data: row[column.key],
                                            row: row,
                                            key: column.key,
                                            name: column.name || column.key,
                                        }
                                    "
                                ></ng-container>
                            }
                        }
                    </div>
                }
                @if (show_children()[row.id] && child_template()) {
                    <div
                        child-node
                        [style.gridColumn]="'span ' + active_columns.length"
                        class="border-b border-base-200 last:border-b-0 last:border-t"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                child_template();
                                context: {
                                    first: i === 0,
                                    last:
                                        i ===
                                            (data_view$ | async)?.length - 1 ||
                                        i === (data_view$ | async)?.length - 1,
                                    index: i,
                                    row: row,
                                }
                            "
                        ></ng-container>
                    </div>
                }
            }
            @if (!(data_view$ | async)?.length) {
                <div
                    [style.gridColumnStart]="'span ' + active_columns.length"
                    class="flex items-center justify-center p-8 opacity-30"
                >
                    {{ empty_message() }}
                </div>
            }
            <!-- TODO: Add pagination -->
        </div>
        @if (page_size()) {
            <div
                class="sticky bottom-0 z-30 flex w-full items-center justify-end space-x-2 bg-base-200 p-2"
            >
                <div class="px-4 py-2">
                    {{ page * (page_size() || 9999) + 1 }} &ndash;
                    {{
                        (page + 1) * (page_size() || 9999) > total_count
                            ? total_count
                            : (page + 1) * (page_size() || 9999)
                    }}
                    of {{ total_count }}
                </div>
                <button
                    icon
                    matRipple
                    [disabled]="page === 0"
                    (click)="setPage(page - 1)"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page === total_pages - 1"
                    (click)="setPage(page + 1)"
                >
                    <icon>chevron_right</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page === 0"
                    (click)="setPage(0)"
                >
                    <icon>first_page</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page === total_pages - 1"
                    (click)="setPage(total_pages - 1)"
                >
                    <icon>last_page</icon>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host,
            :host > button {
                min-width: 100%;
            }

            [header] icon {
                opacity: 0;
            }
            [header]:hover icon {
                opacity: 0.3;
            }
            [header]:hover.pointer-events-none icon {
                opacity: 0;
            }
            [header].active icon {
                opacity: 1;
            }
        `,
    ],
    imports: [CommonModule, MatRippleModule, TranslatePipe, IconComponent],
})
export class SimpleTableComponent<T extends object = any> extends AsyncHandler {
    public readonly data = input<T[] | Observable<T[]>>(undefined);
    public readonly columns = input<TableColumn[]>([]);
    public readonly selectable = input(false);
    public readonly filter = input('');
    public readonly sortable = input(false);
    public readonly show_header = input(true);
    public readonly selected = model<number[]>([]);
    public readonly page_size = input(0);
    public readonly empty_message = input('No data to list');
    public readonly child_template = input<TemplateRef<any>>(null);
    public readonly show_children = input<Record<string, boolean>>({});
    public readonly filter_on = input<string[]>([]);
    public readonly selectedChange = output<number[]>();
    public readonly rowClicked = output<number>();

    public page = 0;
    public total_count = 0;
    public total_pages = 0;
    public active_row = -1;
    public active_columns = [];

    private _data$ = new BehaviorSubject<T[]>([]);
    private _filter$ = new BehaviorSubject<string>('');
    private _sort$ = new BehaviorSubject<{ key: string; reverse: boolean }>(
        null,
    );

    public data_view$?: Observable<T[]> = null;

    public get sort() {
        return this._sort$.getValue();
    }

    public get data$(): Observable<T[]> {
        const data = this.data();
        return data instanceof Array ? this._data$ : data;
    }

    public get column_count() {
        return this.active_columns.length + (this.selectable() ? 1 : 0);
    }

    public get column_template() {
        const template = this.active_columns
            .map((_) => _.size || 'auto')
            .join(' ');
        return this.selectable() ? `3.5rem ${template}` : template;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.filter) {
            this._filter$.next(this.filter());
        }
        if (changes.columns) {
            this.active_columns = this.columns().filter(
                (_) => _.show !== false,
            );
        }
        if (changes.data) {
            const data = this.data();
            if (data instanceof Array) this._data$.next(data);
            this.data_view$ = combineLatest([
                this.data$,
                this._filter$,
                this._sort$,
            ]).pipe(
                debounceTime(300),
                map(([data, filter, sort]) => {
                    data = [...data];
                    if (filter) {
                        const filter_str = (filter || '').toLowerCase();
                        data = data.filter((v) => {
                            const filter_on = this.filter_on();
                            const keys = filter_on.length
                                ? filter_on
                                : Object.keys(v);
                            return keys.some((key) => {
                                const value = v[key];
                                const cmp_str =
                                    `${JSON.stringify(value)}`.toLowerCase();
                                return cmp_str.includes(filter_str);
                            });
                        });
                    }
                    if (sort && data.length) {
                        const type = typeof data[0][sort.key];
                        if (type === 'number') {
                            data = data.sort((a, b) => {
                                const result = a[sort.key] - b[sort.key];
                                return sort.reverse ? -result : result;
                            });
                        } else {
                            data = data.sort((a, b) => {
                                const a_value = JSON.stringify(
                                    a[sort.key] || '',
                                );
                                const b_value = JSON.stringify(
                                    b[sort.key] || '',
                                );
                                const result = a_value.localeCompare(b_value);
                                return sort.reverse ? -result : result;
                            });
                        }
                    }
                    this.selected.set([]);
                    this.page = 0;
                    const page_size = this.page_size();
                    if (page_size) {
                        this.total_count = data.length;
                        this.total_pages = Math.ceil(
                            this.total_count / page_size,
                        );
                    }
                    return data;
                }),
                shareReplay(1),
            );
        }
    }

    public columnType(column: TableColumn) {
        return column.content instanceof TemplateRef ? 'template' : 'raw';
    }

    public gridSquare(row: number, column: number) {
        return `${row} / ${column} / ${row + 1} / ${column + 1}`;
    }

    public select(index: number, state: boolean) {
        if (state) this.selected().push(index);
        else this.selected.set(this.selected().filter((i) => i !== index));
    }

    public async selectAll(state: boolean) {
        const list = await nextValueFrom(this.data_view$);
        if (state) this.selected.set(list.map((_, i) => i));
        else this.selected.set([]);
    }

    public setSort(key: string) {
        const sort = this._sort$.getValue();
        if (!sort || sort.key !== key) {
            this._sort$.next({ key, reverse: false });
        } else if (!sort.reverse) {
            this._sort$.next({ key, reverse: true });
        } else {
            this._sort$.next(null);
        }
    }

    public setPage(page: number) {
        this.timeout('set_page', () => (this.page = page), 100);
    }
}
