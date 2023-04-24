import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { endOfDay, isBefore, startOfDay } from 'date-fns';
import { first, take } from 'rxjs/operators';
import { DesksStateService } from './desks-state.service';
import { AssetRestriction } from '@placeos/bookings';

@Component({
    selector: 'desk-restriction-modal',
    template: `
        <header class="flex items-center justify-between">
            <h2>
                <ng-container *ngIf="adding">Add</ng-container> Desk
                Restrictions
            </h2>
            <button btn icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main
                class="h-[65vh] overflow-auto"
                *ngIf="!adding; else add_state"
            >
                <custom-table
                    class="block w-[calc(80vw)]"
                    [dataSource]="restrictions"
                    [columns]="['start', 'duration', 'assets', 'actions']"
                    [display_column]="['Date', 'Period', 'No. of Desks', ' ']"
                    [template]="{
                        start: date_template,
                        duration: duration_template,
                        assets: count_template,
                        actions: actions_template
                    }"
                    empty="No desk restrictions set"
                ></custom-table>
                <ng-template #date_template let-data="data">
                    {{ data | date: 'mediumDate' }}
                </ng-template>
                <ng-template #duration_template let-data="data">
                    {{ data | duration: true }}
                </ng-template>
                <ng-template #count_template let-data="data">
                    {{ data?.length || '0' }} desk(s)
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <button btn icon matRipple (click)="remove(row)">
                        <app-icon>delete</app-icon>
                    </button>
                </ng-template>
            </main>
            <footer
                class="flex items-center justify-end space-x-2 p-2 border-t border-gray-200"
                *ngIf="!adding"
            >
                <button btn matRipple class="inverse" (click)="add()">
                    Add Restriction
                </button>
                <button btn matRipple (click)="save()">
                    Save Restrictions
                </button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <div class="flex items-center justify-center w-64 h-48">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Saving desk restriction changes...</p>
            </div>
        </ng-template>
        <ng-template #add_state>
            <main class="flex flex-col h-[65vh] overflow-auto">
                <div class="flex items-center space-x-2 px-2 pt-2">
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-date-range-input [rangePicker]="picker">
                            <input
                                matStartDate
                                placeholder="Start date"
                                [(ngModel)]="start_date"
                            />
                            <input
                                matEndDate
                                placeholder="End date"
                                [(ngModel)]="end_date"
                            />
                        </mat-date-range-input>
                        <mat-datepicker-toggle
                            matIconSuffix
                            [for]="picker"
                        ></mat-datepicker-toggle>
                        <mat-date-range-picker #picker></mat-date-range-picker>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="flex-1">
                        <app-icon matPrefix>search</app-icon>
                        <input
                            matInput
                            [(ngModel)]="search"
                            placeholder="Filter desks"
                        />
                    </mat-form-field>
                </div>
                <custom-table
                    class="block w-[calc(65vw)]"
                    [dataSource]="desk_list"
                    [filter]="search"
                    [columns]="['toggle', 'name', 'map_id']"
                    [display_column]="[' ', 'name', 'MapID']"
                    [template]="{
                        toggle: toggle_template
                    }"
                    empty="No desk restrictions set"
                ></custom-table>
                <ng-template #toggle_template let-row="row">
                    <mat-checkbox
                        [(ngModel)]="selected[row.id || row.map_id]"
                    ></mat-checkbox>
                </ng-template>
            </main>
            <footer
                class="flex items-center justify-end space-x-2 p-2 border-t border-gray-200"
            >
                <button
                    btn
                    matRipple
                    class="inverse w-32"
                    (click)="adding = false"
                >
                    Back
                </button>
                <button btn matRipple (click)="addRestriction()" class="w-32">
                    Save
                </button>
            </footer>
        </ng-template>
    `,
    styles: [``],
})
export class DeskRestrictionModalComponent {
    public loading = false;
    public adding = false;
    public search = '';
    public selected: Record<string, boolean> = {};
    public start_date = startOfDay(Date.now());
    public end_date = endOfDay(Date.now());
    public restrictions: AssetRestriction[] = [];
    public readonly desk_list = this._desks.desks;

    constructor(
        private _desks: DesksStateService,
        private _org: OrganisationService,
        private _dialog_ref: MatDialogRef<DeskRestrictionModalComponent>
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        showMetadata(this._org.building.id, 'desk_restrictions').subscribe(
            ({ details }) => {
                this.restrictions = details instanceof Array ? details : [];
            }
        );
    }

    public add() {
        this.search = '';
        this.start_date = startOfDay(Date.now());
        this.end_date = endOfDay(Date.now());
        this.selected = {};
        this.adding = true;
    }

    public remove(restriction: AssetRestriction) {
        this.restrictions = this.restrictions.filter((_) => _ !== restriction);
    }

    public async addRestriction() {
        const desks = await this.desk_list.pipe(take(1)).toPromise();
        this.restrictions.push({
            start: this.start_date.valueOf(),
            end: this.end_date.valueOf(),
            assets: desks.filter((_) => this.selected[_.id]).map((_) => _.id),
        });
        this.adding = false;
    }

    public async save() {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        await updateMetadata(this._org.building.id, {
            name: 'desk_restrictions',
            details: this.restrictions.filter((_) =>
                isBefore(Date.now(), _.end)
            ),
        });
        this.loading = false;
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close();
        notifySuccess('Successfully updated desk restrictions');
    }
}
