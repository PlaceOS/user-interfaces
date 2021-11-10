import { Component } from "@angular/core";
import { AssetManagerStateService } from "./asset-manager-state.service";

@Component({
    selector: 'asset-flow-purchases',
    template: `
    <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form">
        <h3>Timeline</h3>
        <div class="flex items-center space-x-4">
            <div class="flex-1 flex-col">
                <label>Purchase Date<span>*</span></label>
                <a-date-field></a-date-field>
            </div>
            <div class="flex-1 flex-col">
                <label>End of Service Date<span>*</span></label>
                <a-date-field></a-date-field>
            </div>
        </div>
        <h3>Purchase Price</h3>
        <div class="flex items-center space-x-4">
            <div class="flex-1 flex-col">
                <label>Purchase Price<span>*</span></label>
                <mat-form-field appearance="outline">
                    <input matInput placeholder="e.g. 10001" />
                </mat-form-field>
            </div>
            <div class="flex-1 flex-col">
                <label>Invoice<span>*</span></label>
                <mat-form-field appearance="outline">
                    <input matInput placeholder="e.g. Apple" />
                </mat-form-field>
            </div>
        </div>
        <h3>Other</h3>
    </div>`,
    styles: [``]
})
export class AssetFlowPurchasesComponent {
    public readonly form = this._state.form;

    constructor(private _state: AssetManagerStateService) { }
}