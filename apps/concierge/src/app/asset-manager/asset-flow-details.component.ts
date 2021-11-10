import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow-details',
    template: `
        <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form">
            <div
                class="mb-4 border border-gray-300 p-4 bg-gray-200"
            >
                <h3 class="mb-4">Add Asset Images</h3>
                <div classs="flex items-center">
                <div
                    class="w-64 h-48 bg-white border border-dashed border-gray-300 flex items-center justify-center flex-col relative"
                    matRipple
                >
                    <app-icon class="text-2xl">upload</app-icon>
                    <p>Drag and Drop Image</p>
                    <p class="text-xs my-2">or</p>
                    <button mat-button>Browse</button>
                    <input type="file" multiple class="opacity-0 absolute inset-0" />
                </div>
</div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex-1 flex-col">
                    <label>Asset name<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <input matInput formControlName="name" placeholder="e.g. iPad Pro" />
                    </mat-form-field>
                </div>
                <div class="flex-1 flex-col">
                    <label>Category<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <mat-select formControlName="category"></mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex-1 flex-col">
                    <label>Item Size<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <mat-select formControlName="size"></mat-select>
                    </mat-form-field>
                </div>
                <div class="flex-1 flex-col">
                    <label>Quantity<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <input matInput formControlName="count" type="number" placeholder="1" />
                    </mat-form-field>
                </div>
            </div>
            <label>Description<span>*</span></label>
            <mat-form-field appearance="outline">
                <textarea matInput formControlName="description" placeholder="e.g. iPad Pro"></textarea>
            </mat-form-field>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }
        `,
    ],
})
export class AssetFlowDetailsComponent {
    public readonly form = this._state.form;

    constructor(private _state: AssetManagerStateService) { }
}
