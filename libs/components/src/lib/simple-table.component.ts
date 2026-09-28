import { CommonModule } from '@angular/common';
import {
    Component,
    TemplateRef,
    computed,
    effect,
    input,
    model,
    output,
    signal,
    untracked,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { Observable, Subscription } from 'rxjs';
import { IconComponent } from './icon.component';
import { LoadErrorComponent } from './load-error.component';
import { TranslatePipe } from './translate.pipe';

export interface TableColumn {
    key: string;
    name: string;
    sortable?: boolean;
    sort_fn?: (a, b) => number;
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
            class="border-base-300 grid border"
            [style.gridTemplateColumns]="column_template()"
            (click)="active_row() >= 0 ? rowClicked.emit(active_row()) : null"
            (touchend)="active_row.set(-1)"
            (mouseleave)="active_row.set(-1)"
        >
            @if (show_header()) {
                @if (selectable()) {
                    <div
                        id="column-selector"
                        class="border-base-200 bg-base-300 sticky top-0 z-20 flex min-h-full items-center justify-between border-r border-b px-2"
                        [style.gridColumn]="'1 / 2'"
                    >
                        <mat-checkbox
                            [checked]="all_selected()"
                            [indeterminate]="
                                selected().length > 0 && !all_selected()
                            "
                            [disabled]="!selectable_keys().length"
                            [aria-label]="'COMMON.SELECT_ALL' | translate"
                            (change)="selectAll($event.checked)"
                        ></mat-checkbox>
                    </div>
                }
                @for (
                    column of active_columns();
                    track column.key + i;
                    let i = $index
                ) {
                    <button
                        header
                        matRipple
                        [id]="'column-' + column.key"
                        class="border-base-200 bg-base-300 sticky top-0 z-20 flex min-h-full items-center justify-between border-b p-4"
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
                        [class.active]="sort()?.key === column.key"
                        [class.border-r]="i !== active_columns().length - 1"
                        [class.width]="column.size"
                    >
                        <div class="font-medium">
                            {{ column.name || column.key }}
                        </div>
                        @if (sortable() && column.sortable !== false) {
                            <icon class="text-[1.25em]">
                                {{
                                    sort()?.key === column.key &&
                                    sort()?.reverse
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}
                            </icon>
                        }
                    </button>
                }
            }
            @for (
                row of paginated_data();
                track rowKey(row) || row;
                let i = $index
            ) {
                @if (selectable()) {
                    @let key = rowKey(row);
                    <div
                        id="column-selector"
                        class="border-base-200 z-10 flex min-h-full items-center justify-between border-r px-2"
                        [style.gridColumn]="'1 / 2'"
                        [class.border-b]="i !== paginated_data().length - 1"
                        (mouseenter)="active_row.set(i)"
                        (touchstart)="active_row.set(i)"
                        (click)="$event.stopPropagation()"
                    >
                        <mat-checkbox
                            [checked]="selected().includes(key)"
                            [disabled]="!can_select()(row)"
                            [aria-label]="'COMMON.SELECT_ROW' | translate"
                            (change)="select(key, $event.checked)"
                        ></mat-checkbox>
                    </div>
                }
                @for (
                    column of active_columns();
                    track column.key + j;
                    let j = $index
                ) {
                    <div
                        class="border-base-200 z-10 flex min-h-full items-center justify-between"
                        [style.gridColumn]="
                            1 +
                            j +
                            (selectable() ? 1 : 0) +
                            ' / ' +
                            (2 + j + (selectable() ? 1 : 0))
                        "
                        [class.border-b]="i !== paginated_data().length - 1"
                        [class.border-r]="j !== active_columns().length - 1"
                        [class.width]="column.size"
                        (mouseenter)="active_row.set(i)"
                        (touchstart)="active_row.set(i)"
                    >
                        @switch (columnType(column)) {
                            @default {
                                <div class="p-4">
                                    {{
                                        row[column.key] ??
                                            (column.key === '_index'
                                                ? i +
                                                  1 +
                                                  page() * (page_size() || 0)
                                                : row[column.key])
                                    }}
                                    @if (
                                        (row[column.key] === null ||
                                            row[column.key] === undefined ||
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
                                        template(column);
                                        context: {
                                            first: i === 0,
                                            last:
                                                i ===
                                                paginated_data().length - 1,
                                            index:
                                                i + page() * (page_size() || 0),
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
                @if (show_children()[row['id']] && child_template()) {
                    <div
                        child-node
                        [style.gridColumn]="'span ' + column_count()"
                        class="border-base-200 relative border-b last:border-t last:border-b-0"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                child_template();
                                context: {
                                    first: i === 0,
                                    last: i === paginated_data().length - 1,
                                    index: i + page() * (page_size() || 0),
                                    row: row,
                                }
                            "
                        ></ng-container>
                    </div>
                }
            }
            @if (error()) {
                <load-error
                    [style.gridColumnStart]="'span ' + column_count()"
                    (retry)="retry.emit()"
                />
            } @else if (!data_view().length) {
                <div
                    [style.gridColumnStart]="'span ' + column_count()"
                    class="flex items-center justify-center p-8 opacity-30"
                >
                    {{ empty_message() }}
                </div>
            }
        </div>
        @if (page_size()) {
            <div
                class="bg-base-200 sticky bottom-0 z-30 flex w-full items-center justify-end space-x-2 p-2"
            >
                <div class="px-4 py-2">
                    {{ page() * (page_size() || 9999) + 1 }} &ndash;
                    {{
                        (page() + 1) * (page_size() || 9999) > total_count()
                            ? total_count()
                            : (page() + 1) * (page_size() || 9999)
                    }}
                    of {{ total_count() }}
                </div>
                <button
                    icon
                    matRipple
                    [disabled]="page() === 0"
                    (click)="setPage(page() - 1)"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page() === total_pages() - 1"
                    (click)="setPage(page() + 1)"
                >
                    <icon>chevron_right</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page() === 0"
                    (click)="setPage(0)"
                >
                    <icon>first_page</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page() === total_pages() - 1"
                    (click)="setPage(total_pages() - 1)"
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
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatCheckboxModule,
        LoadErrorComponent,
    ],
})
export class SimpleTableComponent<T extends object = any> {
    // Inputs
    public readonly data = input<T[] | Observable<T[]>>(undefined);
    public readonly columns = input<TableColumn[]>([]);
    public readonly selectable = input(false);
    /** Unique key for a row. Selection and row tracking use it. */
    public readonly row_key = input<(row: T) => string>((row) => row?.['id']);
    /** Whether the user can select a row */
    public readonly can_select = input<(row: T) => boolean>(() => true);
    public readonly filter = input('');
    public readonly sortable = input(false);
    public readonly show_header = input(true);
    /** Keys of the selected rows. Supports two-way binding. */
    public readonly selected = model<string[]>([]);
    public readonly page_size = input(0);
    public readonly empty_message = input('No data to list');
    public readonly child_template = input<TemplateRef<any>>(null);
    public readonly show_children = input<Record<string, boolean>>({});
    public readonly filter_on = input<string[]>([]);
    /** Show a load error with a retry button instead of the empty message */
    public readonly error = input(false);

    // Outputs
    public readonly rowClicked = output<number>();
    public readonly retry = output<void>();

    // Internal signals
    public readonly page = signal(0);
    public readonly total_count = signal(0);
    public readonly total_pages = signal(0);
    public readonly active_row = signal(-1);
    public readonly active_columns = signal<TableColumn[]>([]);
    public readonly sort = signal<{ key: string; reverse: boolean } | null>(
        null,
    );

    // Signal to hold the actual data (handles both array and Observable inputs)
    private readonly _data_signal = signal<T[]>([]);
    private _data_subscription: Subscription | null = null;

    // Computed data view with filtering and sorting
    public readonly data_view = computed(() => {
        let data = [...this._data_signal()];
        const filter_str = this.filter()?.toLowerCase();
        const current_sort = this.sort();

        // Apply filter
        if (filter_str) {
            data = data.filter((v) => {
                const filter_on = this.filter_on();
                const keys = filter_on.length ? filter_on : Object.keys(v);
                return keys.some((key) => {
                    const value = v[key];
                    const cmp_str = `${JSON.stringify(value)}`.toLowerCase();
                    return cmp_str.includes(filter_str);
                });
            });
        }

        // Apply sort
        if (current_sort && data.length) {
            const type = typeof data[0][current_sort.key];
            const default_fn =
                type === 'number'
                    ? (a, b) => a - b
                    : (a, b) => {
                          const a_value = JSON.stringify(a);
                          const b_value = JSON.stringify(b);
                          return a_value?.localeCompare(b_value);
                      };
            data = data.sort((a, b) => {
                const sort_fn =
                    this.column(current_sort.key)?.sort_fn || default_fn;
                const result = sort_fn(
                    a[current_sort.key],
                    b[current_sort.key],
                );
                return current_sort.reverse ? -result : result;
            });
        }

        return data;
    });

    // Paginated data view
    public readonly paginated_data = computed(() => {
        const data = this.data_view();
        const page_size_value = this.page_size();
        if (!page_size_value) return data;

        const start = this.page() * page_size_value;
        const end = (this.page() + 1) * page_size_value;
        return data.slice(start, end);
    });

    /** Keys of the rows in view that the user can select */
    public readonly selectable_keys = computed(() => {
        const can_select = this.can_select();
        return this.data_view()
            .filter((row) => can_select(row))
            .map((row) => this.rowKey(row));
    });

    public readonly all_selected = computed(() => {
        const keys = this.selectable_keys();
        const selected = this.selected();
        return keys.length > 0 && keys.every((_) => selected.includes(_));
    });

    // Computed column template
    public readonly column_template = computed(() => {
        const template = this.active_columns()
            .map((_) => _.size || 'auto')
            .join(' ');
        return this.selectable() ? `3.5rem ${template}` : template;
    });

    // Computed column count
    public readonly column_count = computed(() => {
        return this.active_columns().length + (this.selectable() ? 1 : 0);
    });

    constructor() {
        // Handle data input changes (supports both array and Observable)
        effect((onCleanup) => {
            const data = this.data();

            // Cleanup previous subscription if any
            if (this._data_subscription) {
                this._data_subscription.unsubscribe();
                this._data_subscription = null;
            }

            if (data instanceof Observable) {
                this._data_subscription = data.subscribe((value) => {
                    this._data_signal.set(value || []);
                });
                onCleanup(() => {
                    this._data_subscription?.unsubscribe();
                    this._data_subscription = null;
                });
            } else {
                this._data_signal.set(data || []);
            }
        });

        // Drop selected keys for rows that are no longer in the data
        effect(() => {
            const keys = new Set(
                this._data_signal().map((row) => this.rowKey(row)),
            );
            const selected = untracked(this.selected);
            const kept = selected.filter((_) => keys.has(_));
            if (kept.length !== selected.length) this.selected.set(kept);
        });

        // Update active columns when columns input changes
        effect(() => {
            this.active_columns.set(
                this.columns().filter((_) => _.show !== false),
            );
        });

        // Reset page and update pagination info when data view changes
        effect(() => {
            const data = this.data_view();
            const page_size_value = this.page_size();

            this.page.set(0);

            if (page_size_value) {
                this.total_count.set(data.length);
                this.total_pages.set(Math.ceil(data.length / page_size_value));
            }
        });
    }

    public template(column: TableColumn) {
        return column.content as TemplateRef<any>;
    }

    public html(column: TableColumn) {
        return column.content as string;
    }

    public column(key: string) {
        return this.active_columns().find((_) => _.key === key);
    }

    public columnType(column: TableColumn) {
        return column.content instanceof TemplateRef ? 'template' : 'raw';
    }

    public gridSquare(row: number, column: number) {
        return `${row} / ${column} / ${row + 1} / ${column + 1}`;
    }

    public rowKey(row: T) {
        return this.row_key()(row);
    }

    public select(key: string, state: boolean) {
        const current = this.selected().filter((_) => _ !== key);
        this.selected.set(state ? [...current, key] : current);
    }

    public selectAll(state: boolean) {
        if (!state) return this.selected.set([]);
        const current = this.selected();
        const added = this.selectable_keys().filter(
            (_) => !current.includes(_),
        );
        this.selected.set([...current, ...added]);
    }

    public setSort(key: string) {
        const current_sort = this.sort();
        if (!current_sort || current_sort.key !== key) {
            this.sort.set({ key, reverse: false });
        } else if (!current_sort.reverse) {
            this.sort.set({ key, reverse: true });
        } else {
            this.sort.set(null);
        }
    }

    public setPage(page_value: number) {
        this.page.set(page_value);
    }
}
