import { Component } from '@angular/core';
import { randomInt } from '@placeos/common';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow-consumables',
    template: `
        <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form">
            <h3>Items</h3>
            <div
                class="flex items-center hover:bg-gray-50 rounded"
                *ngFor="
                    let pair of form.value?.consumables || [];
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
                Add Item
            </button>
        </div>
    `,
    styles: [``],
})
export class AssetFlowConsumablesComponent {
    public readonly form = this._state.form;

    constructor(private _state: AssetManagerStateService) {}

    public addItem() {
        const { consumables } = this.form?.value || { consumables: [] };
        this.form.patchValue({
            consumables: [
                ...consumables,
                { id: `item-${randomInt(99999)}`, name: '' },
            ],
        });
    }

    public removeItem(item: any) {
        const { consumables } = this.form?.value || { consumables: [] };
        this.form.patchValue({
            consumables: consumables.filter((_) => _.id !== item.id),
        });
    }
}
