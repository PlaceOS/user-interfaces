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
import { Router } from '@angular/router';

@Component({
    selector: 'survey-list',
    template: `
        <section class="page-wrapper">
            <header class="heading-wrapper">
                <div class="left-wrapper">
                    <span
                        ><mat-icon class="back-arrow"
                            >arrow_back</mat-icon
                        ></span
                    >
                    <span class="page-heading">{{ buildingName }}</span>
                </div>

                <div class="right-wrapper">
                    <div class="dropdown-container">
                        <mat-form-field appearance="outline" class="dropdown">
                            <mat-label>Select...</mat-label>
                            <mat-select
                                [(value)]="selected_level"
                                (selectionChange)="updateListView()"
                            >
                                <mat-option
                                    *ngFor="let level of building_levels"
                                    [value]="level.level"
                                >
                                    {{ level.display }}</mat-option
                                >
                            </mat-select>
                        </mat-form-field>
                    </div>

                    <button
                        mat-button
                        class="add-button"
                        color="primary"
                        (click)="addSurvey()"
                    >
                        Add New Survey
                        <mat-icon>add</mat-icon>
                    </button>
                </div>
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
                                                'descending-icon':
                                                    !column.ascending
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
                                    <button
                                        mat-icon-button
                                        [matMenuTriggerFor]="optionsMenu"
                                        aria-label="button to see more options"
                                        class="options-button"
                                        (click)="openOptionsModal()"
                                    >
                                        <mat-icon class="ellipse"
                                            >more_horiz</mat-icon
                                        >
                                    </button>
                                    <mat-menu #optionsMenu="matMenu">
                                        <button mat-menu-item>
                                            <span>View</span>
                                        </button>
                                        <button mat-menu-item>
                                            <span>Edit</span>
                                        </button>
                                        <button mat-menu-item>
                                            <span>Delete</span>
                                        </button>
                                    </mat-menu>
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
        </section>
    `,
    styles: [
        `
            .page-wrapper {
                background-color: #fff;
                padding: 10px;
            }
            .heading-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 20px 0px 0px 20px;
                width: 90%;
            }
            .left-wrapper {
                display: flex;
                align-items: center;
            }
            .right-wrapper {
                display: flex;
                align-items: center;
            }
            .back-arrow {
                display: flex;
                margin-right: 10px;
            }
            .page-heading {
                line-height: 34px;
                font-size: 26px;
                font-weight: 400;
            }
            .dropdown-container {
                display: flex;
                height: 53px;
            }
            .add-button {
                display: flex;
                color: #fff;
                background-color: #292f5b;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
                padding: 0px 20px;
            }
            .table {
                width: 90%;
                margin: 20px;
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
            .options-button {
                display: flex;
                background-color: #fff;
                border: none;
                align-items: center;
                justify-content: center;
                height: 40px;
                width: 40px;
            }

            .ellipse {
                display: flex;
                font-size: 20px;
                align-items: center;
                justify-content: center;
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

    building_levels: any[];
    selected_level: string = '';

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
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.data.subscribe((data) => {
            this.dataSource.data = data;
            // this.dataSource.sort = this.sort;
        });
        this.building_levels = [
            { display: 'All Levels', level: 'all' },
            ...this.dataSource.data
                .map((item) => ({
                    display: `Level ${item.level}`,
                    level: item.level,
                }))
                .sort(),
        ];
        this.building_levels = [
            ...new Map(
                this.building_levels.map((item) => [item.level, item])
            ).values(),
        ];
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
                    b[found_column.columnDef]?.localeCompare(
                        a[found_column.columnDef]
                    )
                );
                this.dataSource.data = array;
                found_column.ascending = !found_column.ascending;
            } else {
                array = array.sort((a, b) =>
                    a[found_column.columnDef]?.localeCompare(
                        b[found_column.columnDef]
                    )
                );
                this.dataSource.data = array;
                found_column.ascending = !found_column.ascending;
            }
        });

        console.log(this.data, 'data');
    }

    addSurvey(): void {
        //routes to be added in app
    }

    updateListView() {
        console.log(this.selected_level, 'sel level');
        this.data.subscribe((data) => {
            this.dataSource.data = data;
        });
        const updated_view = this.dataSource.data.filter(
            (item) => item.level == this.selected_level
        );
        console.log(updated_view, 'updated view');
        if (updated_view.length) {
            this.dataSource.data = updated_view;
        }
    }

    openOptionsModal() {}
    ngOnDestroy(): void {
        this.dataSubscription?.unsubscribe();
    }
}
