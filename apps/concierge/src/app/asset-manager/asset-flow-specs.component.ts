import { Component } from '@angular/core';
import { randomInt } from '@placeos/common';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow-specs',
    template: `
        <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form">
            <h3 class="mb-4">General</h3>
            <div class="flex items-center space-x-4">
                <div class="flex-1 flex flex-col">
                    <label>Barcode<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="barcode"
                            placeholder="e.g. 10001"
                        />
                        <mat-error>Barcode is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex-1 flex flex-col">
                    <label>Brand<span>*</span></label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="brand"
                            placeholder="e.g. Apple"
                        />
                        <mat-error>Brand is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <h3>Other</h3>
            <div
                class="flex items-center hover:bg-gray-50 rounded"
                *ngFor="
                    let pair of form.value?.general_details || [];
                    let i = index
                "
            >
                <div class="flex-1 flex flex-col">
                    <label *ngIf="i === 0">ID</label>
                    <mat-form-field class="h-[3.25rem]" appearance="outline">
                        <input
                            matInput
                            [(ngModel)]="pair.id"
                            placeholder="e.g. Item ID"
                            [ngModelOptions]="{ standalone: true }"
                        />
                    </mat-form-field>
                </div>
                <div class="flex-1 flex flex-col ml-4">
                    <label *ngIf="i === 0">Name</label>
                    <mat-form-field class="h-[3.25rem]" appearance="outline">
                        <input
                            matInput
                            [(ngModel)]="pair.name"
                            placeholder="e.g. 12345"
                            [ngModelOptions]="{ standalone: true }"
                        />
                    </mat-form-field>
                </div>
                <button
                    icon
                    matRipple
                    class="ml-2 bg-gray-50 border border-gray-200"
                    [class.mt-6]="i === 0"
                    (click)="removeItem(pair)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
            <button
                matRipple
                class="w-full bg-white border border-gray-300 rounded-none text-black mt-4"
                (click)="addItem()"
            >
                Add New Field row
            </button>
        </div>
    `,
    styles: [``],
})
export class AssetFlowSpecsComponent {
    public readonly form = this._state.form;

    constructor(private _state: AssetManagerStateService) {}

    public addItem() {
        const { general_details } = this.form?.value || { general_details: [] };
        this.form.patchValue({
            general_details: [
                ...general_details,
                { id: `item-${randomInt(99999)}`, name: '' },
            ],
        });
    }

    public removeItem(item: any) {
        const { general_details } = this.form?.value || { general_details: [] };
        this.form.patchValue({
            general_details: general_details.filter((_) => _.id !== item.id),
        });
    }
}
