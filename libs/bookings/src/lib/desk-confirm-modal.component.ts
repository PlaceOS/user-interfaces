import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEvent } from '@user-interfaces/common';
import { BuildingLevel, Desk } from '@user-interfaces/organisation';

export interface DeskConfirmModalData {
    desk: Desk;
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
                <div class="mb-4">
                    <label>Date</label>
                    <div *ngIf="!can_set_date">{{ date | date: 'mediumDate' }}</div>
                    <a-date-field *ngIf="can_set_date" [(ngModel)]="date"></a-date-field>
                </div>
                <div class="mb-4">
                    <label>Reason</label>
                    <div>{{ reason || '~No set reason~' }}</div>
                </div>
                <p>
                    Your desk will be {{ desk?.name }} on
                    {{ level?.display_name || level?.name }}
                </p>
            </main>
            <footer class="flex items-center justify-center p-2">
                <button mat-button (click)="confirm()">Confirm</button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <main class="flex flex-col p-12 items-center justify-center">
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

    public readonly desk = this._data.desk;

    public date = this._data.date;

    public can_set_date: boolean;

    public readonly reason = this._data.reason;

    public readonly level = this._data.level;

    public loading: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: DeskConfirmModalData
    ) {
    }

    public ngOnInit() {
        this.can_set_date = this._data.can_set_date;
    }

    public confirm() {
        this.loading = 'Requesting desk booking...';
        this.event.emit({ reason: 'done' });
    }
}
