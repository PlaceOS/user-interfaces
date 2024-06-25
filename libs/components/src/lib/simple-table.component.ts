import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, take } from 'rxjs/operators';

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
            <div
                *ngIf="selectable"
                id="column-selector"
                class="sticky top-0 flex items-center justify-between px-2 border-r border-b border-base-200 bg-base-300 min-h-full z-20"
                [style.gridColumn]="'1 / 2'"
            >
                <mat-checkbox
                    [checked]="selected.length === (data_view$ | async)?.length"
                    [indeterminate]="
                        selected.length > 0 &&
                        selected.length < (data_view$ | async)?.length
                    "
                    (change)="selectAll($event.checked)"
                ></mat-checkbox>
            </div>
            <button
                header
                matRipple
                *ngFor="let column of active_columns; let i = index"
                [id]="'column-' + column.key"
                class="sticky top-0 flex items-center justify-between p-4 border-b border-base-200 bg-base-300 min-h-full z-20"
                [style.gridColumn]="
                    1 +
                    i +
                    (selectable ? 1 : 0) +
                    ' / ' +
                    (2 + i + (selectable ? 1 : 0))
                "
                [class.pointer-events-none]="
                    !sortable || column.sortable === false
                "
                (click)="setSort(column.key)"
                [class.active]="sort?.key === column.key"
                [class.border-r]="i !== active_columns.length - 1"
                [class.width]="column.size"
            >
                <div class="font-medium">{{ column.name || column.key }}</div>
                <app-icon
                    class="text-[1.25em]"
                    *ngIf="sortable && column.sortable !== false"
                >
                    {{
                        sort?.key === column.key && sort?.reverse
                            ? 'arrow_upward'
                            : 'arrow_downward'
                    }}
                </app-icon>
            </button>
            <ng-container
                *ngFor="
                    let row of data_view$
                        | async
                        | slice
                            : page * (page_size || 9999)
                            : (page + 1) * (page_size || 9999);
                    let i = index
                "
            >
                <div
                    *ngIf="selectable"
                    id="column-selector"
                    class="flex items-center justify-between px-2 border-r border-base-200 min-h-full z-10"
                    [style.gridColumn]="'1 / 2'"
                    [class.border-b]="i !== (data_view$ | async)?.length - 1"
                    (mouseenter)="active_row = i"
                    (touchstart)="active_row = i"
                >
                    <mat-checkbox
                        [checked]="selected.includes(i)"
                        (change)="select(i, $event.checked)"
                    ></mat-checkbox>
                </div>
                <div
                    *ngFor="let column of active_columns; let j = index"
                    class="flex items-center justify-between border-base-200 min-h-full z-10"
                    [style.gridColumn]="
                        1 +
                        j +
                        (selectable ? 1 : 0) +
                        ' / ' +
                        (2 + j + (selectable ? 1 : 0))
                    "
                    [class.border-b]="i !== (data_view$ | async)?.length - 1"
                    [class.border-r]="j !== active_columns.length - 1"
                    [class.width]="column.size"
                    (mouseenter)="active_row = i"
                    (touchstart)="active_row = i"
                >
                    <ng-container [ngSwitch]="columnType(column)">
                        <div class="p-4" *ngSwitchDefault>
                            {{ row[column.key] }}
                            <span
                                *ngIf="
                                    row[column.key] == null ||
                                    row[column.key] === ''
                                "
                                class="opacity-30"
                            >
                                {{ column.empty || 'N/A' }}
                            </span>
                        </div>
                        <ng-container *ngSwitchCase="'template'">
                            <ng-container
                                *ngTemplateOutlet="
                                    column.content;
                                    context: {
                                        first: i === 0,
                                        last:
                                            i ===
                                                (data_view$ | async)?.length -
                                                    1 ||
                                            i ===
                                                (data_view$ | async)?.length -
                                                    1,
                                        index: i,
                                        data: row[column.key],
                                        row: row,
                                        key: column.key,
                                        name: column.name || column.key
                                    }
                                "
                            ></ng-container>
                        </ng-container>
                    </ng-container>
                </div>
                <div
                    child-node
                    *ngIf="show_children[row.id] && child_template"
                    [style.gridColumn]="'span ' + active_columns.length"
                    class="border-b last:border-t last:border-b-0 border-base-200"
                >
                    <ng-container
                        *ngTemplateOutlet="
                            child_template;
                            context: {
                                first: i === 0,
                                last:
                                    i === (data_view$ | async)?.length - 1 ||
                                    i === (data_view$ | async)?.length - 1,
                                index: i,
                                row: row,
                            }
                        "
                    ></ng-container>
                </div>
            </ng-container>
            <div
                *ngIf="!(data_view$ | async)?.length"
                [style.gridColumnStart]="'span ' + active_columns.length"
                class="flex items-center justify-center p-8 opacity-30"
            >
                {{ empty_message }}
            </div>
            <!-- TODO: Add pagination -->
        </div>
        <div
            *ngIf="page_size"
            class="sticky bottom-0 w-full flex items-center justify-end space-x-2 p-2 bg-base-200"
        >
            <div class="px-4 py-2">
                {{ page * (page_size || 9999) + 1 }} &ndash;
                {{
                    (page + 1) * (page_size || 9999) > total_count
                        ? total_count
                        : (page + 1) * (page_size || 9999)
                }}
                of {{ total_count }}
            </div>
            <button
                icon
                matRipple
                [disabled]="page === 0"
                (click)="setPage(page - 1)"
            >
                <app-icon>chevron_left</app-icon>
            </button>
            <button
                icon
                matRipple
                [disabled]="page === total_pages - 1"
                (click)="setPage(page + 1)"
            >
                <app-icon>chevron_right</app-icon>
            </button>
            <button icon matRipple [disabled]="page === 0" (click)="setPage(0)">
                <app-icon>first_page</app-icon>
            </button>
            <button
                icon
                matRipple
                [disabled]="page === total_pages - 1"
                (click)="setPage(total_pages - 1)"
            >
                <app-icon>last_page</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host,
            :host > button {
                min-width: 100%;
            }

            [header] app-icon {
                opacity: 0;
            }
            [header]:hover app-icon {
                opacity: 0.3;
            }
            [header]:hover.pointer-events-none app-icon {
                opacity: 0;
            }
            [header].active app-icon {
                opacity: 1;
            }
        `,
    ],
})
export class SimpleTableComponent<T extends {} = any> extends AsyncHandler {
    @Input() public data: T[] | Observable<T[]>;
    @Input() public columns: TableColumn[] = [];
    @Input() public selectable = false;
    @Input() public filter: string = '';
    @Input() public sortable = false;
    @Input() public selected: number[] = [];
    @Input() public page_size = 0;
    @Input() public empty_message = 'No data to list';
    @Input() public child_template: TemplateRef<any> = null;
    @Input() public show_children: Record<string, boolean> = {};
    @Output() public selectedChange = new EventEmitter<number[]>();
    @Output() public rowClicked = new EventEmitter<number>();

    public page = 0;
    public total_count = 0;
    public total_pages = 0;
    public active_row = -1;
    public active_columns = [];

    private _data$ = new BehaviorSubject<T[]>([]);
    private _filter$ = new BehaviorSubject<string>('');
    private _sort$ = new BehaviorSubject<{ key: string; reverse: boolean }>(
        null
    );

    public data_view$?: Observable<T[]> = null;

    public get sort() {
        return this._sort$.getValue();
    }

    public get data$(): Observable<T[]> {
        return this.data instanceof Array ? this._data$ : this.data;
    }

    public get column_count() {
        return this.active_columns.length + (this.selectable ? 1 : 0);
    }

    public get column_template() {
        const template = this.active_columns
            .map((_) => _.size || 'auto')
            .join(' ');
        return this.selectable ? `3.5rem ${template}` : template;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.filter) {
            this._filter$.next(this.filter);
        }
        if (changes.columns) {
            this.active_columns = this.columns.filter((_) => _.show !== false);
        }
        if (changes.data) {
            this.data_view$ = combineLatest([
                this.data$,
                this._filter$,
                this._sort$,
            ]).pipe(
                debounceTime(300),
                map(([data, filter, sort]) => {
                    data = [...data];
                    if (filter) {
                        data = data.filter((_) =>
                            Object.values(_).some((i) =>
                                JSON.stringify(i)
                                    .toLowerCase()
                                    .includes(filter.toLowerCase())
                            )
                        );
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
                                    a[sort.key] || ''
                                );
                                const b_value = JSON.stringify(
                                    b[sort.key] || ''
                                );
                                const result = a_value.localeCompare(b_value);
                                return sort.reverse ? -result : result;
                            });
                        }
                    }
                    this.selected = [];
                    this.page = 0;
                    if (this.page_size) {
                        this.total_count = data.length;
                        this.total_pages = Math.ceil(
                            this.total_count / this.page_size
                        );
                    }
                    return data;
                }),
                shareReplay(1)
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
        if (state) this.selected.push(index);
        else this.selected = this.selected.filter((i) => i !== index);
    }

    public async selectAll(state: boolean) {
        const list = await this.data_view$.pipe(take(1)).toPromise();
        if (state) this.selected = list.map((_, i) => i);
        else this.selected = [];
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
