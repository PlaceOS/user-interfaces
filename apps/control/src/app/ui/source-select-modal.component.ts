import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export class SourceSelectModalData {
    output: string;
}

@Component({
    selector: 'source-select-modal',
    template: `
        <div
            class="flex flex-col items-center overflow-auto bg-base-100 px-8 py-16"
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
                <icon>close</icon>
            </button>
        </div>
    `,
    standalone: false,
})
export class SourceSelectModalComponent {
    public simple = false;
    public readonly output = this._data.output;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SourceSelectModalData,
        private _dialog_ref: MatDialogRef<SourceSelectModalComponent>,
    ) {}

    public close() {
        this._dialog_ref.close();
    }
}
