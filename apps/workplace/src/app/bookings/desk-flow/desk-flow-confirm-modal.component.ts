import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEvent } from '@user-interfaces/common';
import { BuildingLevel, Desk } from '@user-interfaces/organisation';

export interface DeskFlowConfirmModalData {
    desk: Desk;
    date: number;
    reason: string;
    level: BuildingLevel;
}

@Component({
    selector: 'desk-flow-confirm-modal-component',
    template: `
        <header>
            <h2>Confirm Booking</h2>
            <div class="flex-1"></div>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main class="p-4">
                <div class="mb-4">
                    <label>Date</label>
                    <div>{{ date | date: 'mediumDate' }}</div>
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
export class DeskFlowConfirmModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly desk = this._data.desk;

    public readonly date = this._data.date;

    public readonly reason = this._data.reason;

    public readonly level = this._data.level;

    public loading: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: DeskFlowConfirmModalData
    ) {}

    public confirm() {
        this.loading = 'Requesting desk booking...';
        this.event.emit({ reason: 'done' });
    }
}
