import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
            class="bg-base-100 flex flex-col items-center overflow-auto px-8 py-16"
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
    changeDetection: ChangeDetectionStrategy.Eager,
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

    public simple = false;
    public readonly output = this._data.output;

    public close() {
        this._dialog_ref.close();
    }
}
