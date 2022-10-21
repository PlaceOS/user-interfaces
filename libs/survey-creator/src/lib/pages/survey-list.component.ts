import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
    selector: 'survey-list',
    template: `
        <header>
            <span>{{ buildingName }}</span>
        </header>
        <main>
            <div class="table-container mat-elevation-z8">
                <div class="loading" *ngIf="isLoading">
                    <mat-spinner *ngIf="isLoading"></mat-spinner>
                </div>
            </div>

            <div class="table-container">
                <table
                    mat-table
                    [dataSource]="dataSource"
                    class="mat-elevation-z8"
                >
                    <ng-container
                        *ngFor="let column of columns"
                        [matColumnDef]="column.columnDef"
                        ]
                    >
                        <th mat-header-cell *matHeaderCellDef>
                            {{ column.header }}
                        </th>
                        <td mat-cell *matCellDef="let row">
                            {{ column.cell(row) }}
                        </td>
                    </ng-container>

                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                    <tr
                        mat-row
                        *matRowDef="let row; columns: displayedColumns"
                    ></tr>
                </table>
            </div>
        </main>
    `,
    styles: [``],
})
export class SurveyListComponent implements OnInit {
    @Input() buildingName: string = 'Building 1';

    //Mock data
    data = [
        {
            building_name: 'Building 1',
            level: '01',
            type: 'Desk',
            survey_name: 'Satisfaction survey',
            date: '25/08/2022',
            link: '12345',
            options: ['open'],
        },
        {
            building_name: 'Building 1',
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
            type: 'Visitors',
            survey_name: 'Satisfaction survey',
            date: '30/09/2022',
            link: '12345',
            options: ['open'],
        },
        {
            building_name: 'Building 5',
            level: '03',
            type: 'Desk',
            survey_name: 'Satisfaction survey',
            date: '30/10/2022',
            link: '12345',
            options: ['open'],
        },
    ];
    columns = [
        {
            columnDef: 'building_name',
            header: 'Building',
            cell: (element) => `${element.building_name}`,
        },
        {
            columnDef: 'level',
            header: 'Level',
            cell: (element) => `${element.level}`,
        },
        {
            columnDef: 'type',
            header: 'Type',
            cell: (element) => `${element.type}`,
        },
        {
            columnDef: 'name',
            header: 'Name',
            cell: (element) => `${element.survey_name}`,
        },
        {
            columnDef: 'date',
            header: 'Date',
            cell: (element) => `${element.date}`,
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

    dataSource = this.data;

    constructor() {}

    ngOnInit(): void {}
}
