import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class SourceSelectModalData {
    output: string;
}

@Component({
    selector: 'source-select-modal',
    template: `
        <div
            class="bg-base-100 flex flex-col items-center py-16 px-8 overflow-auto"
            [style.max-height]="simple ? '80vh' : ''"
            [class.fixed]="!simple"
            [class.inset-0]="!simple"
            [class.relative]="simple"
            [class.rounded]="simple"
        >
            <source-select
                [simple]="simple"
                [output]="output"
                (source)="close()"
            ></source-select>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute"
                [class.top-8]="!simple"
                [class.right-8]="!simple"
                [class.top-2]="simple"
                [class.right-2]="simple"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
})
export class SourceSelectModalComponent {
    public simple = false;
    public readonly output = this._data.output;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SourceSelectModalData,
        private _dialog_ref: MatDialogRef<SourceSelectModalComponent>
    ) {}

    public close() {
        this._dialog_ref.close();
    }
}
