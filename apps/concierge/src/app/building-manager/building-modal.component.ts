import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Building } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { BuildingFormComponent } from './building-form.component';

@Component({
    selector: 'building-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (building().id
                    ? 'APP.CONCIERGE.BUILDINGS_EDIT'
                    : 'APP.CONCIERGE.BUILDINGS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.BUILDINGS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <building-form
                [building]="building()"
                [save]="save_state()"
                [(loading)]="loading"
                (done)="close($event)"
            />
        </fullscreen-modal-shell>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        BuildingFormComponent,
        TranslatePipe,
    ],
})
export class BuildingModalComponent {
    private _data = inject<Building | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<BuildingModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly save_state = signal(0);
    public readonly building = signal<Building>(this._data);

    public readonly close = (d?) => this._dialog_ref.close(d);
    public readonly save = () => this.save_state.set(Date.now());
}
