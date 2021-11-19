import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow-specs',
    template: ` 
    <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form">
        <h3>General</h3>
        <div class="flex items-center space-x-4">
            <div class="flex-1 flex-col">
                <label>Barcode<span>*</span></label>
                <mat-form-field appearance="outline">
                    <input matInput formControlName="barcode" placeholder="e.g. 10001" />
                    <mat-error>Barcode is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex-1 flex-col">
                <label>Brand<span>*</span></label>
                <mat-form-field appearance="outline">
                    <input matInput formControlName="brand" placeholder="e.g. Apple" />
                    <mat-error>Brand is required</mat-error>
                </mat-form-field>
            </div>
        </div>
        <h3>Other</h3>
    </div>
    `,
    styles: [``],
})
export class AssetFlowSpecsComponent {
    public readonly form = this._state.form;

    constructor(private _state: AssetManagerStateService) { }
}
