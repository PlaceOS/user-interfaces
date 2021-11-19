import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow-details',
    template: `
        <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form">
            <div class="mb-4 border border-gray-300 p-4 bg-gray-50">
                <h3 class="mb-4">Add Asset Images</h3>
                <div classs="flex items-center">
                    <upload-list formControlName="images"></upload-list>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex-1 flex-col">
                    <label>Asset name<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="name"
                            placeholder="e.g. iPad Pro"
                        />
                        <mat-error>Asset name is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex-1 flex-col">
                    <label>Category<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <mat-select formControlName="category"></mat-select>
                        <mat-error>Category is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex-1 flex-col">
                    <label>Item Size<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <mat-select formControlName="size"></mat-select>
                        <mat-error>Item size is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex-1 flex-col">
                    <label>Quantity<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="count"
                            type="number"
                            placeholder="1"
                        />
                        <mat-error>Quantity is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <label>Description<span>*</span></label>
            <mat-form-field appearance="outline">
                <textarea
                    matInput
                    formControlName="description"
                    placeholder="e.g. iPad Pro"
                ></textarea>
                <mat-error>Description is required</mat-error>
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

    constructor(private _state: AssetManagerStateService) {}
}
