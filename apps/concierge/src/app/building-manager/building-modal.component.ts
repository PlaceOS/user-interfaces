import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Building } from '@placeos/organisation';

@Component({
    selector: 'building-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (building.id
                    ? 'APP.CONCIERGE.BUILDINGS_EDIT'
                    : 'APP.CONCIERGE.BUILDINGS_NEW'
                ) | translate
            "
            [loading]="
                (loading | async)
                    ? ('APP.CONCIERGE.BUILDINGS_SAVING' | translate)
                    : ''
            "
            (confirm)="save()"
        >
            <building-form [building]="building"
                [save]="save_state"
                [(loading)]="loading"
                (done)="close($event)"
             />
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class BuildingModalComponent {
    public loading = false;
    public save_state = 0;
    public readonly building = this._data;

    public readonly close = (d?) => this._dialog_ref.close(d);
    public readonly save = () => (this.save_state = Date.now());

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Building | undefined,
        private _dialog_ref: MatDialogRef<BuildingModalComponent>,
    ) {}
}
