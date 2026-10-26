import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    TemplateRef,
    afterRenderEffect,
    computed,
    effect,
    inject,
    input,
    model,
    output,
    signal,
    untracked,
    viewChild,
    viewChildren,
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
            [style.minWidth]="min_width() || null"
            [attr.aria-rowcount]="data_view().length + (show_header() ? 1 : 0)"
            (click)="active_row() >= 0 ? rowClicked.emit(active_row()) : null"
            (touchend)="active_row.set(-1)"
            (mouseleave)="active_row.set(-1)"
        >
            @if (show_header()) {
                <div #table_header table-header role="row">
                    @if (selectable()) {
                        <div
                            row-selector
                            role="columnheader"
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
                            role="columnheader"
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
                            [attr.tabindex]="
                                !sortable() || column.sortable === false
                                    ? -1
                                    : null
                            "
                            [attr.aria-sort]="
                                !sortable() || column.sortable === false
                                    ? null
                                    : sort()?.key !== column.key
                                      ? 'none'
                                      : sort()?.reverse
                                        ? 'descending'
                                        : 'ascending'
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
                                <icon class="text-[1.25em]" aria-hidden="true">
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
                </div>
            }
            @if (virtual_scroll()) {
                <div
                    aria-hidden="true"
                    class="col-span-full"
                    [style.height.px]="row_offsets()[virtual_range().start]"
                ></div>
            }
            @for (
                row of rendered_data();
                track rowKey(row) || row;
                let i = $index
            ) {
                <div
                    #table_row
                    table-row
                    role="row"
                    [attr.data-row-index]="row_offset() + i"
                    [attr.aria-rowindex]="
                        row_offset() + i + (show_header() ? 2 : 1)
                    "
                >
                    @if (selectable()) {
                        @let key = rowKey(row);
                        <div
                            row-selector
                            role="cell"
                            class="border-base-200 z-10 flex min-h-full items-center justify-between border-r px-2"
                            [style.gridColumn]="'1 / 2'"
                            [class.border-b]="
                                virtual_scroll()
                                    ? row_offset() + i !==
                                      data_view().length - 1
                                    : i !== rendered_data().length - 1
                            "
                            (mouseenter)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
                            (touchstart)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
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
                            role="cell"
                            class="border-base-200 z-10 flex min-h-full items-center justify-between"
                            [style.gridColumn]="
                                1 +
                                j +
                                (selectable() ? 1 : 0) +
                                ' / ' +
                                (2 + j + (selectable() ? 1 : 0))
                            "
                            [class.border-b]="
                                virtual_scroll()
                                    ? row_offset() + i !==
                                      data_view().length - 1
                                    : i !== rendered_data().length - 1
                            "
                            [class.border-r]="j !== active_columns().length - 1"
                            [class.width]="column.size"
                            (mouseenter)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
                            (touchstart)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
                        >
                            @switch (columnType(column)) {
                                @default {
                                    <div class="p-4">
                                        {{
                                            row[column.key] ??
                                                (column.key === '_index'
                                                    ? i + 1 + row_offset()
                                                    : row[column.key])
                                        }}
                                        @if (
                                            (row[column.key] === null ||
                                                row[column.key] === undefined ||
                                                row[column.key] === '') &&
                                            column.key !== '_index'
                                        ) {
                                            <span class="opacity-70">
                                                {{
                                                    column.empty ||
                                                        ('COMMON.EMPTY'
                                                            | translate)
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
                                                first:
                                                    i === 0 &&
                                                    (!virtual_scroll() ||
                                                        row_offset() === 0),
                                                last:
                                                    i ===
                                                        rendered_data().length -
                                                            1 &&
                                                    (!virtual_scroll() ||
                                                        i + row_offset() ===
                                                            data_view().length -
                                                                1),
                                                index: i + row_offset(),
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
                                        first:
                                            i === 0 &&
                                            (!virtual_scroll() ||
                                                row_offset() === 0),
                                        last:
                                            i === rendered_data().length - 1 &&
                                            (!virtual_scroll() ||
                                                i + row_offset() ===
                                                    data_view().length - 1),
                                        index: i + row_offset(),
                                        row: row,
                                    }
                                "
                            ></ng-container>
                        </div>
                    }
                </div>
            }
            @if (virtual_scroll()) {
                <div
                    aria-hidden="true"
                    class="col-span-full"
                    [style.height.px]="
                        row_offsets()[data_view().length] -
                        row_offsets()[virtual_range().end]
                    "
                ></div>
            }
            @if (error()) {
                <load-error
                    [style.gridColumnStart]="'span ' + column_count()"
                    (retry)="retry.emit()"
                />
            } @else if (!data_view().length) {
                <div
                    [style.gridColumnStart]="'span ' + column_count()"
                    class="flex items-center justify-center p-8 opacity-70"
                    [attr.aria-busy]="loading() || null"
                >
                    {{
                        loading()
                            ? ('COMMON.LOADING' | translate)
                            : empty_message()
                    }}
                </div>
            }
        </div>
        @if (page_size() && !virtual_scroll()) {
            <div
                class="bg-base-200 sticky bottom-0 left-0 z-30 flex w-full max-w-full items-center justify-end space-x-2 p-2"
                [style.width]="min_width() ? '100cqw' : null"
            >
                <div class="px-4 py-2">
                    {{ total_count() ? page() * (page_size() || 9999) + 1 : 0 }}
                    &ndash;
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
                    [disabled]="page() >= total_pages() - 1"
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
                    [disabled]="page() >= total_pages() - 1"
                    (click)="setPage(total_pages() - 1)"
                >
                    <icon>last_page</icon>
                </button>
            </div>
        }
    `,
    host: {
        '[style.min-width]': 'virtual_scroll() ? null : min_width() || null',
        '[class.virtual-scroll]': 'virtual_scroll()',
        '(scroll)': 'readViewport(true)',
    },
    styles: [
        `
            :host,
            :host > button {
                min-width: 100%;
            }

            [table-header],
            [table-row] {
                display: contents;
            }

            :host.virtual-scroll {
                display: block;
                height: 100%;
                min-height: 0;
                overflow: auto;
                overflow-anchor: none;
            }

            :host.virtual-scroll [table-header],
            :host.virtual-scroll [table-row] {
                display: grid;
                grid-column: 1 / -1;
                grid-template-columns: subgrid;
            }

            :host.virtual-scroll [table-header] {
                position: sticky;
                top: 0;
                z-index: 20;
            }

            :host.virtual-scroll [role='cell'] {
                min-width: 0;
                overflow-wrap: anywhere;
            }

            :host.virtual-scroll [role='cell'] > * {
                min-width: 0;
                max-width: 100%;
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
    /** Render the visible rows and a viewport of buffer on each side. Requires a parent with a set height. */
    public readonly virtual_scroll = input(false);
    /**
     * Minimum width of the rows, e.g. `72rem`. Set `container-type:
     * inline-size` on the scroll wrapper so the page controls use its width
     * and stay visible when the rows scroll sideways.
     */
    public readonly min_width = input('');
    public readonly empty_message = input('No data to list');
    public readonly child_template = input<TemplateRef<any>>(null);
    public readonly show_children = input<Record<string, boolean>>({});
    public readonly filter_on = input<string[]>([]);
    /** Show a load error with a retry button instead of the empty message */
    public readonly error = input(false);
    /** Show a loading message instead of the empty message while data loads */
    public readonly loading = input(false);

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
    /** Row keys and page size of the last data view, to detect reloads */
    private _last_row_keys = '';
    private _last_page_size = 0;
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _rows = viewChildren<ElementRef<HTMLElement>>('table_row');
    private readonly _header =
        viewChild<ElementRef<HTMLElement>>('table_header');
    private readonly _scroll_top = signal(0);
    private readonly _viewport_height = signal(600);
    private readonly _row_heights = signal(new Map<string | T, number>());
    private _viewport_width = 0;
    private _pending_scroll_top: number | null = null;
    private _scroll_anchor: { key: string | T; offset: number } | null = null;
    private _at_end = false;
    private _last_filter = '';
    private _last_sort: { key: string; reverse: boolean } | null = null;

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
        if (!page_size_value || this.virtual_scroll()) return data;

        const start = this.page() * page_size_value;
        const end = (this.page() + 1) * page_size_value;
        return data.slice(start, end);
    });

    /** Prefix sums are rebuilt on data or size changes, not on each scroll. */
    public readonly row_offsets = computed(() => {
        const heights = this._row_heights();
        const offsets = [0];
        for (const row of this.data_view()) {
            offsets.push(
                offsets[offsets.length - 1] +
                    (heights.get(this.rowKey(row) ?? row) ?? 64),
            );
        }
        return offsets;
    });

    public readonly virtual_range = computed(() => {
        const offsets = this.row_offsets();
        const height = this._viewport_height();
        const top = this._scroll_top();
        return {
            start: this._rowAtOffset(offsets, Math.max(0, top - height)),
            end: Math.min(
                this.data_view().length,
                this._rowAtOffset(offsets, top + height * 2) + 1,
            ),
        };
    });

    public readonly row_offset = computed(() =>
        this.virtual_scroll()
            ? this.virtual_range().start
            : this.page() * this.page_size(),
    );

    public readonly rendered_data = computed(() =>
        this.virtual_scroll()
            ? this.data_view().slice(
                  this.virtual_range().start,
                  this.virtual_range().end,
              )
            : this.paginated_data(),
    );

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
            .map(
                (_) =>
                    _.size ||
                    (this.virtual_scroll() ? 'minmax(0, 1fr)' : 'auto'),
            )
            .join(' ');
        return this.selectable() ? `3.5rem ${template}` : template;
    });

    // Computed column count
    public readonly column_count = computed(() => {
        return this.active_columns().length + (this.selectable() ? 1 : 0);
    });

    constructor() {
        afterRenderEffect((onCleanup) => {
            if (!this.virtual_scroll()) return;
            const rows = this._rows();
            const header = this._header();
            // Data can change without replacing the rendered row elements.
            this.data_view();
            this._row_heights();
            // Apply the anchor after the spacers have their new heights.
            if (this._pending_scroll_top !== null) {
                this._element.nativeElement.scrollTop =
                    this._pending_scroll_top;
                this._pending_scroll_top = null;
            }
            untracked(() => this._measureRows());
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(() => this._measureRows());
            observer.observe(this._element.nativeElement);
            if (header) observer.observe(header.nativeElement);
            for (const row of rows) observer.observe(row.nativeElement);
            onCleanup(() => observer.disconnect());
        });

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

        // Keep paged views on the same page when the row keys do not change.
        // Virtual views keep their visible row when data is added or removed.
        effect(() => {
            const data = this.data_view();
            const page_size_value = this.page_size();
            const row_keys = data.map((row) => this.rowKey(row));
            const same_rows =
                page_size_value === this._last_page_size &&
                row_keys.every((key) => key != null) &&
                row_keys.join('\u0000') === this._last_row_keys;
            this._last_row_keys = row_keys.join('\u0000');
            this._last_page_size = page_size_value;

            const filter = this.filter();
            const sort = this.sort();
            const reset_virtual =
                filter !== this._last_filter || sort !== this._last_sort;
            this._last_filter = filter;
            this._last_sort = sort;
            if (!same_rows) this.page.set(0);
            if (this.virtual_scroll() && (reset_virtual || !same_rows)) {
                const anchor = this._scroll_anchor;
                const anchor_index =
                    !reset_virtual && anchor
                        ? data.findIndex(
                              (row) => (this.rowKey(row) ?? row) === anchor.key,
                          )
                        : -1;
                const top =
                    anchor_index >= 0
                        ? untracked(this.row_offsets)[anchor_index] +
                          anchor.offset
                        : 0;
                if (anchor_index < 0) this._scroll_anchor = null;
                this._pending_scroll_top = top;
                this._at_end = false;
                this._scroll_top.set(top);
                this.active_row.set(-1);
            }

            // Remove measurements for deleted or filtered rows.
            if (this.virtual_scroll()) {
                const keys = new Set(
                    data.map((row) => this.rowKey(row) ?? row),
                );
                const heights = untracked(this._row_heights);
                if ([...heights.keys()].some((key) => !keys.has(key))) {
                    this._row_heights.set(
                        new Map([...heights].filter(([key]) => keys.has(key))),
                    );
                }
            }

            if (page_size_value) {
                this.total_count.set(data.length);
                this.total_pages.set(Math.ceil(data.length / page_size_value));
            }
        });
    }

    public readViewport(from_scroll = false) {
        if (!this.virtual_scroll()) return;
        const element = this._element.nativeElement;
        if (from_scroll) {
            this._at_end =
                element.scrollTop > 0 &&
                element.scrollHeight > element.clientHeight &&
                element.scrollTop >=
                    element.scrollHeight - element.clientHeight - 2;
        }
        const header_height =
            this._header()?.nativeElement.getBoundingClientRect().height || 0;
        this._viewport_height.set(
            Math.max(1, element.clientHeight - header_height),
        );
        this._scroll_top.set(element.scrollTop);
        this.active_row.set(-1);
        // Save the key before the next data update, once the scroll has settled.
        if (this._pending_scroll_top === null) {
            const offsets = this.row_offsets();
            const index = this._rowAtOffset(offsets, element.scrollTop);
            const row = this.data_view()[index];
            this._scroll_anchor = row
                ? {
                      key: this.rowKey(row) ?? row,
                      offset: element.scrollTop - offsets[index],
                  }
                : null;
        }
    }

    /** Find a row in logarithmic time, including large scrollbar jumps. */
    private _rowAtOffset(offsets: number[], offset: number) {
        let low = 0;
        let high = Math.max(0, offsets.length - 2);
        while (low < high) {
            const middle = Math.ceil((low + high) / 2);
            if (offsets[middle] <= offset) low = middle;
            else high = middle - 1;
        }
        return low;
    }

    /** Measure complete rows, including wrapped text and expanded children. */
    private _measureRows() {
        const element = this._element.nativeElement;
        if (
            !element.clientHeight ||
            !element.clientWidth ||
            this._pending_scroll_top !== null
        )
            return;
        const offsets = this.row_offsets();
        const anchor = this._rowAtOffset(offsets, element.scrollTop);
        const anchor_offset = element.scrollTop - offsets[anchor];
        const resized = element.clientWidth !== this._viewport_width;
        this._viewport_width = element.clientWidth;
        const previous = this._row_heights();
        const heights = resized
            ? new Map<string | T, number>()
            : new Map(previous);
        const data = this.data_view();
        let changed = resized;
        for (const row of this._rows()) {
            const index = Number(row.nativeElement.dataset.rowIndex);
            const height = row.nativeElement.getBoundingClientRect().height;
            if (!data[index] || !height) continue;
            const key = this.rowKey(data[index]) ?? data[index];
            if (Math.abs((heights.get(key) ?? 64) - height) < 0.5) continue;
            heights.set(key, height);
            changed = true;
        }
        if (changed) {
            this._row_heights.set(heights);
            // Keep the first visible row in place when a buffered row changes height.
            this._pending_scroll_top = this._at_end
                ? Number.MAX_SAFE_INTEGER
                : this.row_offsets()[anchor] + anchor_offset;
        }
        this.readViewport();
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
