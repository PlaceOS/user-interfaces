import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow-consumables',
    template: `
        <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form"></div>
    `,
    styles: [``],
})
export class AssetFlowConsumablesComponent {
    public readonly form = this._state.form;

    constructor(private _state: AssetManagerStateService) {}
}
