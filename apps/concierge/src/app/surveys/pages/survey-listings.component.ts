import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { TriggerEnumMap } from '@placeos/survey-suite';
import { shareReplay } from 'rxjs/operators';
import { SurveyListingsService } from '../services/survey-listings.service';

@Component({
    selector: 'survey-listings',
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }

            .mat-column-actions {
                width: 4rem;
            }

            .mat-column-trigger {
                width: 12rem;
            }
        `,
    ],
    template: `
        <sidebar></sidebar>
        <main
            class="relative w-full h-full bg-white dark:bg-neutral-600 overflow-y-auto"
        >
            <div
                *ngIf="(loading$ | async).length"
                class="flex absolute inset-0 opacity-60 bg-white dark:bg-black z-10"
            >
                <div class="flex flex-col m-auto items-center">
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <span>{{ loading$ | async }}</span>
                </div>
            </div>
            <div class="flex flex-col bg-white w-full max-w-[68rem] m-auto ">
                <header
                    class="flex items-center justify-between px-4 pt-8 mb-4 w-full"
                >
                    <div class="flex items-center">
                        <button icon matRipple (click)="back()">
                            <app-icon class="flex mr-2">arrow_back</app-icon>
                        </button>
                        <ng-container
                            *ngIf="
                                building$ | async as building;
                                else unknownBuilding
                            "
                        >
                            <span class="text-2xl"
                                >{{ building.display_name || building.name }} -
                                Survey Listing</span
                            >
                        </ng-container>
                        <ng-template #unknownBuilding>
                            <span class="text-2xl">Survey Listing</span>
                        </ng-template>
                    </div>

                    <div class="flex items-center">
                        <button btn matRipple (click)="newSurvey()">
                            <span> Add New Survey</span>
                            <mat-icon>add</mat-icon>
                        </button>
                    </div>
                </header>

                <div class="flex flex-col w-full">
                    <table mat-table [dataSource]="surveys$ | async">
                        <ng-container matColumnDef="title">
                            <th
                                mat-header-cell
                                *matHeaderCellDef
                                class="text-lg"
                            >
                                Title
                            </th>
                            <td
                                mat-cell
                                *matCellDef="let element"
                                class="text-base"
                            >
                                {{ element.title }}
                            </td>
                        </ng-container>

                        <ng-container matColumnDef="level">
                            <th
                                mat-header-cell
                                *matHeaderCellDef
                                class="text-lg"
                            >
                                Level
                            </th>
                            <td
                                mat-cell
                                *matCellDef="let element"
                                class="text-base"
                            >
                                {{
                                    levelMap[element.zone_id] || element.zone_id
                                }}
                            </td>
                        </ng-container>

                        <ng-container matColumnDef="trigger">
                            <th
                                mat-header-cell
                                *matHeaderCellDef
                                class="text-lg"
                            >
                                Trigger
                            </th>
                            <td
                                mat-cell
                                *matCellDef="let element"
                                class="text-base"
                            >
                                {{ triggerMap[element.trigger] }}
                            </td>
                        </ng-container>

                        <ng-container matColumnDef="link">
                            <th
                                mat-header-cell
                                *matHeaderCellDef
                                class="text-lg"
                            >
                                Link
                            </th>
                            <td
                                mat-cell
                                *matCellDef="let element"
                                class="text-base"
                            >
                                {{ element.id }}
                            </td>
                        </ng-container>

                        <ng-container matColumnDef="actions">
                            <th mat-header-cell *matHeaderCellDef></th>
                            <td mat-cell *matCellDef="let element">
                                <button
                                    icon
                                    matRipple
                                    [matMenuTriggerFor]="actionsMenu"
                                >
                                    <mat-icon>more_vert</mat-icon>
                                </button>
                                <mat-menu #actionsMenu="matMenu">
                                    <button
                                        mat-menu-item
                                        (click)="onEdit(element.id)"
                                    >
                                        <mat-icon>edit</mat-icon>
                                        <span>Edit</span>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="onDelete(element.id)"
                                    >
                                        <mat-icon>delete</mat-icon>
                                        <span>Delete</span>
                                    </button>
                                </mat-menu>
                            </td>
                        </ng-container>
                        <tr
                            mat-header-row
                            *matHeaderRowDef="displayedColumns"
                        ></tr>
                        <tr
                            mat-row
                            *matRowDef="let row; columns: displayedColumns"
                        ></tr>
                        <tr class="mat-row" *matNoDataRow>
                            <td
                                class="mat-cell"
                                [attr.colspan]="displayedColumns.length"
                            >
                                <div
                                    class="flex w-full h-20 items-center justify-center"
                                >
                                    <span class="text-base">
                                        No surveys found. Click on
                                        <i>Add survey</i> to create new surveys
                                        for this building.
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    `,
    providers: [SurveyListingsService],
})
export class SurveyListingsComponent extends BaseClass implements OnInit {
    levelMap = {};
    loading$ = this._service.loading$.pipe(shareReplay(1));
    building$ = this._service.building$.pipe(shareReplay(1));
    surveys$ = this._service.surveys$;
    triggerMap = TriggerEnumMap;
    onEdit = (id: number) => this._service.editSurvey(id);
    onDelete = (id: number) => this._service.deleteSurvey(id);
    newSurvey = () => this._service.newSurvey();
    back = () => this._service.back();

    displayedColumns: string[] = ['title', 'level', 'trigger', 'actions'];

    constructor(
        private _route: ActivatedRoute,
        private _service: SurveyListingsService
    ) {
        super();
    }

    public get building_name() {
        return (
            this._service.building?.display_name ||
            this._service.building?.name ||
            ''
        );
    }

    async ngOnInit() {
        this.subscription(
            'route-param',
            this._route.params.subscribe((params) => {
                const id = params.id || '';
                this._service.initBuilding(id);
            })
        );

        this.subscription(
            'level_map',
            this._service.levelNameMap$.subscribe(
                (map) => (this.levelMap = map)
            )
        );
    }
}
