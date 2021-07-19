import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogEvent, SettingsService } from '@placeos/common';
import { BuildingLevel, Desk } from '@placeos/organisation';
import { User } from '@placeos/users';

export interface DeskConfirmModalData {
    host: User;
    desks: Desk[];
    date: number;
    reason: string;
    level: BuildingLevel;
    can_set_date: boolean;
}

@Component({
    selector: 'desk-flow-confirm-modal-component',
    template: `
        <header>
            <h2>Confirm Booking</h2>
            <div class="flex-1"></div>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <i class="material-icons">close</i>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main class="p-4">
                <div host class="flex flex-col" *ngIf="can_set_host">
                    <label>Host</label>
                    <a-user-search-field
                        [(ngModel)]="host"
                    ></a-user-search-field>
                </div>
                <div date class="mb-4">
                    <label>Date</label>
                    <div *ngIf="!can_set_date">
                        {{ date | date: 'mediumDate' }}
                    </div>
                    <a-date-field
                        *ngIf="can_set_date"
                        [(ngModel)]="date"
                    ></a-date-field>
                </div>
                <div reason class="flex flex-col mb-4" *ngIf="!hide_reason">
                    <label>Reason</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [(ngModel)]="reason"
                            placeholder="Reason"
                        />
                    </mat-form-field>
                </div>
                <p>
                    Your desk{{ desks.length === 1 ? '' : 's' }} will be
                    {{ desk_list }} on
                    {{ level?.display_name || level?.name }}
                </p>
            </main>
            <footer class="flex items-center justify-center p-2">
                <button mat-button (click)="confirm()">Confirm</button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <main load class="flex flex-col p-12 items-center justify-center">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [
        `
            main {
                width: 24rem;
                max-width: calc(100vw - 4.5rem);
            }
        `,
    ],
})
export class DeskConfirmModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly desks = this._data.desks || [];

    public date = this._data.date;
    public host = this._data.host;

    public readonly can_set_date = this._data.can_set_date;

    public reason = this._data.reason;

    public readonly level = this._data.level;

    public loading: string;

    public get desk_list() {
        return this.desks.map((_) => _.name).join(', ');
    }

    public get hide_reason() {
        return !!this._settings.get('app.desks.hide_reason');
    }

    public get can_set_host() {
        return !!this._settings.get('app.desks.can_set_host');
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: DeskConfirmModalData,
        private _settings: SettingsService
    ) {}

    public confirm() {
        this.loading = 'Requesting desk booking...';
        this.event.emit({ reason: 'done' });
    }
}
