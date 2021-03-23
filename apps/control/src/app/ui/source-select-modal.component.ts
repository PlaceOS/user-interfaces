import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class SourceSelectModalData {
    output: string;
}

@Component({
    selector: 'source-select-modal',
    template: `
        <div class="fixed inset-0 bg-white flex flex-col items-center py-16 px-8">
            <source-select [output]="output" (source)="close()"></source-select>
            <button
                mat-icon-button
                mat-dialog-close
                class="absolute top-8 right-8"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
})
export class SourceSelectModalComponent {
    public readonly output = this._data.output;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SourceSelectModalData,
        private _dialog_ref: MatDialogRef<SourceSelectModalComponent>
    ) {}

    public close() {
        this._dialog_ref.close();
    }
}
