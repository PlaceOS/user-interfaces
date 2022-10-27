import {
    Component,
    OnInit,
    Input,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
    selector: 'survey-list',
    template: `
        <header>
            <span class="building-heading">{{ buildingName }}</span>
        </header>
        <main>
            <div class="table-container ">
                <div class="loading" *ngIf="isLoading">
                    <mat-spinner *ngIf="isLoading"></mat-spinner>
                </div>
            </div>

            <div class="table-container">
                <table mat-table [dataSource]="dataSource" class=" table">
                    <ng-container
                        *ngFor="let column of columns"
                        [matColumnDef]="column.columnDef"
                        ]
                    >
                        <th
                            mat-header-cell
                            *matHeaderCellDef
                            (click)="sortByHeader(column.header)"
                        >
                            <div class="header-wrapper">
                                <span>
                                    {{ column.header }}
                                </span>
                                <span
                                    *ngIf="
                                        column.header != 'Link' &&
                                        column.header != 'Options'
                                    "
                                >
                                    <mat-icon
                                        [ngClass]="{
                                            'descending-icon': !column.ascending
                                        }"
                                        >filter_list</mat-icon
                                    >
                                </span>
                            </div>
                        </th>
                        <td mat-cell *matCellDef="let row">
                            <div *ngIf="column.cell(row) !== 'open'">
                                {{ column.cell(row) }}
                            </div>
                            <div *ngIf="column.cell(row) == 'open'">
                                <mat-icon class="ellipse">more_horiz</mat-icon>
                            </div>
                        </td>
                    </ng-container>

                    <tr
                        mat-header-row
                        *matHeaderRowDef="displayedColumns"
                        class="header-row"
                    ></tr>
                    <tr
                        mat-row
                        *matRowDef="let row; columns: displayedColumns"
                        class="rows"
                    ></tr>
                </table>
            </div>
        </main>
    `,
    styles: [
        `
            .building-heading {
                height: 34px;
                font-size: 28px;
                font-weight: 500;
            }
            .table {
                width: 90%;
                margin: 2rem;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            .rows {
                height: 95px;
                font-size: 16px;
                line-height: 20px;
                font-weight: 400;
            }
            .header-row {
                background-color: #e0e0e0;
                font-size: 16px;
                line-height: 20px;
                font-weight: 400;
            }
            .columns {
                background-color: red;
            }
            .ellipse {
                font-size: 20px;
                margin-top: 10px;
            }
            .header-wrapper {
                display: flex;
                justify-content: left;
                align-items: center;
                height: 30px;
            }
            .header-wrapper span:nth-of-type(2) {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                margin: 7px 0px 0px 5px;
            }
            .descending-icon {
                transform: rotate(180deg);
                margin-bottom: 12px;
            }
        `,
    ],
})
export class SurveyListComponent implements OnInit {
    @Input() buildingName: string = 'Building 1';
    // @ViewChild(MatSort) sort: MatSort;

    //Mock data
    data = of([
        {
            building_name: 'Building 7',
            level: '01',
            type: 'Desk',
            survey_name: 'Satisfaction survey',
            date: '25/08/2022',
            link: '12345',
            options: ['open'],
        },
        {
            building_name: 'Building 3',
            level: '02',
            type: 'Room',
            survey_name: 'Satisfaction survey',
            date: '30/08/2022',
            link: '12345',
            options: ['open'],
        },
        {
            building_name: 'Building 2',
            level: '01',
            type: 'Desk',
            survey_name: 'Satisfaction survey',
            date: '30/09/2022',
            link: '12345',
            options: ['open'],
        },
        {
            building_name: 'Building 5',
            level: '03',
            type: 'Visitors',
            survey_name: 'Satisfaction survey',
            date: '30/10/2022',
            link: '12345',
            options: ['open'],
        },
    ]);
    columns = [
        {
            columnDef: 'building_name',
            header: 'Building',
            cell: (element) => `${element.building_name}`,
            ascending: null,
        },
        {
            columnDef: 'level',
            header: 'Level',
            cell: (element) => `${element.level}`,
            ascending: null,
        },
        {
            columnDef: 'type',
            header: 'Type',
            cell: (element) => `${element.type}`,
            ascending: null,
        },
        {
            columnDef: 'name',
            header: 'Name',
            cell: (element) => `${element.survey_name}`,
            ascending: null,
        },
        {
            columnDef: 'date',
            header: 'Date',
            cell: (element) => `${element.date}`,
            ascending: null,
        },
        {
            columnDef: 'link',
            header: 'Link',
            cell: (element) => `${element.link}`,
        },
        {
            columnDef: 'options',
            header: 'Options',
            cell: (element) => `${element.options}`,
        },
    ];

    isLoading = false; //refactor to read from service
    displayedColumns: string[] = this.columns.map((item) => item.columnDef);
    ascending: boolean;

    dataSource = new MatTableDataSource<any>();
    dataSubscription: Subscription = new Subscription();
    constructor() {}

    ngOnInit(): void {
        this.data.subscribe((data) => {
            this.dataSource.data = data;
            // this.dataSource.sort = this.sort;
        });
    }

    sortByHeader(header: string): void {
        const found_column = this.columns.find(
            (column) => column.header == header
        );

        if (
            found_column.ascending == null ||
            found_column.ascending == undefined
        ) {
            found_column.ascending = false;
        }

        console.log(header, 'header to sort by');

        this.dataSubscription = this.data.subscribe((array) => {
            if (!found_column.ascending) {
                array = array.sort((a, b) =>
                    b[found_column.columnDef].localeCompare(
                        a[found_column.columnDef]
                    )
                );
                this.dataSource.data = array;
                found_column.ascending = !found_column.ascending;
            } else {
                array = array.sort((a, b) =>
                    a[found_column.columnDef].localeCompare(
                        b[found_column.columnDef]
                    )
                );
                this.dataSource.data = array;
                found_column.ascending = !found_column.ascending;
            }
        });

        console.log(this.data, 'data');
    }

    ngOnDestroy(): void {
        this.dataSubscription?.unsubscribe();
    }
}
