import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AsyncHandler } from '@placeos/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'custom-table',
    template: `
        <cdk-table
            [dataSource]="data_source"
            matSort
            class="block border border-base-200 divide-y divide-base-200 text-sm"
        >
            <ng-container *ngFor="let column of columns; let i = index">
                <ng-container [cdkColumnDef]="column">
                    <div
                        cdk-header-cell
                        class="capitalize p-2 h-12 bg-base-300 flex items-center"
                        [style.width]="(column_size[i] || '8') + 'em'"
                        [style.flex]="column_size[i] === 'flex' ? '1' : ''"
                        *cdkHeaderCellDef
                        mat-sort-header
                    >
                        {{ display_column[i] || column }}
                    </div>
                    <div
                        cdk-cell
                        class="p-2 truncate flex items-center"
                        [style.width]="(column_size[i] || '8') + 'em'"
                        [style.flex]="column_size[i] === 'flex' ? '1' : ''"
                        *cdkCellDef="let row; let idx = index"
                    >
                        <ng-container
                            *ngIf="column !== '_index'; else index_outlet"
                        >
                            <ng-container
                                *ngIf="!template[column]; else cell_outlet"
                                >{{ row[column]
                                }}<span
                                    *ngIf="
                                        row[column] == null ||
                                        row[column] === ''
                                    "
                                    class="opacity-30"
                                >
                                    N/A
                                </span></ng-container
                            >
                            <ng-template #cell_outlet>
                                <ng-container
                                    *ngTemplateOutlet="
                                        template[column];
                                        context: {
                                            first: idx === 0,
                                            last:
                                                idx ===
                                                    data_source.data.length -
                                                        1 ||
                                                idx === data_source.length - 1,
                                            index: i,
                                            data: row[column],
                                            row: row,
                                            key: column,
                                            name: display_column[i] || column
                                        }
                                    "
                                ></ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-template #index_outlet>
                            <div class="w-full text-center">{{ idx + 1 }}</div>
                        </ng-template>
                    </div>
                </ng-container>
            </ng-container>

            <cdk-header-row
                class="sticky flex items-center bg-base-100 top-0 z-10"
                *cdkHeaderRowDef="columns"
            ></cdk-header-row>
            <cdk-row
                row
                class="flex z-0 relative hover:bg-neutral:bg-base-100/5 divide-x divide-base-200"
                (click)="row_clicked.emit(row)"
                *cdkRowDef="let row; columns: columns"
            ></cdk-row>
            <ng-template cdkNoDataRow>
                <p class="w-full p-4 text-center opacity-30">
                    {{ empty || 'No data to display' }}
                </p>
            </ng-template>
        </cdk-table>
        <div footer [hidden]="!pagination">
            <mat-paginator
                [pageSize]="page_size"
                [hidePageSize]="true"
                [showFirstLastButtons]="true"
            >
            </mat-paginator>
        </div>
    `,
    styles: [
        `
            cdk-header-row {
                font-weight: 500;
                text-transform: capitalize;
                min-height: 3rem;
            }
        `,
    ],
})
export class CustomTableComponent<T extends {} = any>
    extends AsyncHandler
    implements AfterViewInit, OnChanges
{
    /** Data source to render in the table */
    @Input() public dataSource: T[] | Observable<T[]>;
    /** Whether table should use pagination */
    @Input() public pagination = false;
    /** Number of items to display on pagination pages */
    @Input() public page_size = 7;
    /** Filter string to apply to table listings */
    @Input() public filter: string;
    /** Values to display for column headers */
    @Input() public display_column: string[];
    /** List of columns to display in the table */
    @Input() public columns: string[];
    /** Size of the columns in em or flex for a flexible size */
    @Input() public column_size: string[] = [];
    /** Displayed value when the table is empty */
    @Input() public empty: string;
    /** Displayed value when the table is empty */
    @Input() public template: Record<string, TemplateRef<any>> = {};
    /** Reset viewed page to first on change */
    @Input() public reset_page: any;
    /** Emitter for when a row is clicked */
    @Output() public row_clicked = new EventEmitter<T>();
    /** List of items to display in the table */
    public readonly data_source: MatTableDataSource<T> = new MatTableDataSource(
        []
    );

    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;

    public ngAfterViewInit() {
        this.data_source.sort = this._sort;
        this.data_source.paginator = this.pagination ? this._paginator : null;
        this.data_source.filterPredicate = (i: any, s) => {
            for (const key in i) {
                if (
                    typeof i[key] === 'string' &&
                    i[key].toLowerCase().includes(s.toLowerCase())
                ) {
                    return true;
                } else if (i[key] === s) {
                    return true;
                }
            }
            return false;
        };
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.dataSource && this.dataSource) {
            if (this.dataSource instanceof Observable) {
                this.subscription(
                    'data',
                    this.dataSource.subscribe(
                        (data) => (this.data_source.data = data)
                    )
                );
            } else {
                this.data_source.data = this.dataSource;
            }
        }
        if (changes.pagination) {
            this.data_source.paginator = this.pagination
                ? this._paginator
                : null;
        }
        if (changes.filter) {
            this.data_source.filter = (this.filter || '').trim().toLowerCase();
        }
        if (changes.columns && this.columns) {
            this.display_column = this.columns.map(
                (_, idx) =>
                    (this.display_column || [])[idx] || _.split('_').join(' ')
            );
        }
        if (!this.column_size) {
            this.column_size = [];
        }
        if (
            changes.reset_page &&
            this.reset_page !== changes.reset_page.previousValue
        ) {
            this._paginator?.firstPage();
        }
    }
}
