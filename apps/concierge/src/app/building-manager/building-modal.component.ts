import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Building } from '@placeos/organisation';

@Component({
    selector: 'building-modal',
    template: `
        <header>
            <h2>{{ building.id ? 'Edit' : 'Add' }} Building</h2>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="max-h-[65vh] overflow-y-auto overflow-x-hidden p-4">
            <building-form
                [building]="building"
                [save]="save_state"
                [(loading)]="loading"
                (done)="close($event)"
            ></building-form>
        </main>
        <footer
            class="p-2 flex justify-end border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn class="w-32" (click)="save()">Save</button>
        </footer>
    `,
    styles: [``],
})
export class BuildingModalComponent {
    public loading = false;
    public save_state = 0;
    public readonly building = this._data;

    public readonly close = (d?) => this._dialog_ref.close(d);
    public readonly save = () => (this.save_state = Date.now());

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Building | undefined,
        private _dialog_ref: MatDialogRef<BuildingModalComponent>
    ) {}
}
