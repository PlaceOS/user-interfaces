import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
import { SourceSelectComponent } from './source-select.component';

export class SourceSelectModalData {
    output: string;
}

@Component({
    selector: 'source-select-modal',
    template: `
        <div
            class="bg-base-100 fixed inset-0 flex flex-col items-center overflow-auto px-8 py-16"
        >
            <source-select [output]="output" (source)="close()"></source-select>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-8 right-8"
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    imports: [
        MatDialogModule,
        IconComponent,
        MatRippleModule,
        SourceSelectComponent,
    ],
})
export class SourceSelectModalComponent {
    private _data = inject<SourceSelectModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<SourceSelectModalComponent>>(MatDialogRef);

    public readonly output = this._data.output;

    public close() {
        this._dialog_ref.close();
    }
}
