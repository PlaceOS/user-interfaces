import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
    ResourceRestriction,
    SettingsService,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { endOfDay, isBefore, startOfDay } from 'date-fns';
import { first, take } from 'rxjs/operators';

import { RoomManagementService } from './room-management.service';

@Component({
    selector: 'room-restriction-modal',
    template: `
        <header class="flex items-center justify-between">
            <h2>
                <ng-container *ngIf="adding">Add</ng-container> Room
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
                    class="block w-[36rem] max-w-[80vw]"
                    [dataSource]="restrictions"
                    [columns]="['start', 'duration', 'items', 'actions']"
                    [display_column]="['Date', 'Period', 'No. of Rooms', ' ']"
                    [column_size]="['10r', 'flex', '10r', '3.5r']"
                    [template]="{
                        start: date_template,
                        duration: duration_template,
                        items: count_template,
                        actions: actions_template
                    }"
                    empty="No room restrictions set"
                ></custom-table>
                <ng-template #date_template let-data="data">
                    {{ data | date: 'mediumDate' }}
                </ng-template>
                <ng-template #duration_template let-row="row">
                    {{ row.start | date: time_format }} &ndash;
                    {{ row.end | date: time_format }}
                </ng-template>
                <ng-template #count_template let-data="data">
                    {{ data?.length || '0' }} room(s)
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
                <button btn matRipple class="inverse w-40" (click)="add()">
                    Add Restriction
                </button>
                <button btn matRipple (click)="save()" class="w-40">
                    Save Restrictions
                </button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <div
                class="flex flex-col items-center justify-center w-[20rem] h-[16rem] space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Saving room restriction changes...</p>
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
                            placeholder="Filter rooms"
                        />
                    </mat-form-field>
                </div>
                <div class="flex items-center space-x-2 px-2 -mt-4">
                    <div class="">
                        <label for="start-time">Start Time</label>
                        <a-time-field
                            name="start-time"
                            [no_past_times]="false"
                            [(ngModel)]="start_date"
                            class="flex-1"
                        ></a-time-field>
                    </div>
                    <div class="">
                        <label for="end-time">End Time</label>
                        <a-time-field
                            name="end-time"
                            [no_past_times]="false"
                            [(ngModel)]="end_date"
                            class="flex-1"
                        ></a-time-field>
                    </div>
                </div>
                <custom-table
                    class="block w-[36rem] max-w-[80vw]"
                    [dataSource]="room_list"
                    [filter]="search"
                    [columns]="['toggle', 'display_name', 'map_id']"
                    [display_column]="[' ', 'Name', 'Map ID']"
                    [column_size]="['4r', 'flex', '12r']"
                    [template]="{
                        toggle: toggle_template
                    }"
                    empty="No room restrictions set"
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
                <button btn matRipple (click)="addRestriction()" class="w-48">
                    Add to Restrictions
                </button>
            </footer>
        </ng-template>
    `,
    styles: [``],
})
export class RoomRestrictionModalComponent {
    public loading = false;
    public adding = false;
    public search = '';
    public selected: Record<string, boolean> = {};
    public start_date = startOfDay(Date.now());
    public end_date = endOfDay(Date.now());
    public restrictions: ResourceRestriction[] = [];
    public readonly room_list = this._rooms.room_list;

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _rooms: RoomManagementService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _dialog_ref: MatDialogRef<RoomRestrictionModalComponent>
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        showMetadata(this._org.building.id, 'room_restrictions').subscribe(
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

    public remove(restriction: ResourceRestriction) {
        this.restrictions = this.restrictions.filter((_) => _ !== restriction);
    }

    public async addRestriction() {
        const rooms = await this.room_list.pipe(take(1)).toPromise();
        this.restrictions.push({
            start: this.start_date.valueOf(),
            end: this.end_date.valueOf(),
            items: rooms.filter((_) => this.selected[_.id]).map((_) => _.id),
        });
        this.adding = false;
    }

    public async save() {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        await updateMetadata(this._org.building.id, {
            name: 'room_restrictions',
            description: 'Room restrictions',
            details: this.restrictions.filter((_) =>
                isBefore(Date.now(), _.end)
            ),
        })
            .toPromise()
            .catch((_) => {
                this.loading = false;
                this._dialog_ref.disableClose = false;
                notifyError('Failed to update room restrictions');
                throw _;
            });
        this.loading = false;
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close();
        notifySuccess('Successfully updated room restrictions');
    }
}
