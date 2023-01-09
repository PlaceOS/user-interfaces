import { Component } from '@angular/core';
import { randomInt } from '@placeos/common';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow-purchases',
    template: ` <div class="flex flex-col p-4" *ngIf="form" [formGroup]="form">
        <h3 class="mb-2">Timeline</h3>
        <div class="flex items-center space-x-4">
            <div class="flex-1 flex-col">
                <label>Purchase Date</label>
                <a-date-field></a-date-field>
            </div>
            <div class="flex-1 flex-col">
                <label>End of Service Date</label>
                <a-date-field></a-date-field>
            </div>
        </div>
        <h3 class="mb-2">Purchase Details</h3>
        <div class="flex flex-col">
            <div
                class="flex items-center hover:bg-gray-50 rounded"
                *ngFor="
                    let invoice of form.value?.invoices || [];
                    let i = index
                "
            >
                <div class="flex-1 flex flex-col">
                    <label *ngIf="i === 0">Purchase Price</label>
                    <mat-form-field class="h-[3.25rem]" appearance="outline">
                        <input
                            matInput
                            [(ngModel)]="invoice.price"
                            placeholder="e.g. $1231.12"
                            [ngModelOptions]="{ standalone: true }"
                        />
                    </mat-form-field>
                </div>
                <div class="flex-1 flex flex-col ml-4">
                    <label *ngIf="i === 0">Invoice</label>
                    <mat-form-field class="h-[3.25rem]" appearance="outline">
                        <input matInput placeholder="e.g. Invoice.pdf" />
                    </mat-form-field>
                </div>
                <button
                    icon
                    matRipple
                    class="ml-2 bg-gray-50 border border-gray-200"
                    [class.mt-6]="i === 0"
                    (click)="removeInvoice(invoice)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
            <button
                matRipple
                class="w-full bg-white border border-gray-300 rounded-none text-black mt-4"
                (click)="addInvoice()"
            >
                Add Invoice
            </button>
        </div>
        <h3 class="my-4">Other</h3>
        <div class="flex flex-col">
            <div
                class="flex items-center hover:bg-gray-50 rounded"
                *ngFor="
                    let pair of form.value?.purchase_details || [];
                    let i = index
                "
            >
                <div class="flex-1 flex flex-col">
                    <label *ngIf="i === 0">Name</label>
                    <mat-form-field class="h-[3.25rem]" appearance="outline">
                        <input
                            matInput
                            [(ngModel)]="pair.name"
                            placeholder="e.g. Supplier ID"
                            [ngModelOptions]="{ standalone: true }"
                        />
                    </mat-form-field>
                </div>
                <div class="flex-1 flex flex-col ml-4">
                    <label *ngIf="i === 0">Value</label>
                    <mat-form-field class="h-[3.25rem]" appearance="outline">
                        <input
                            matInput
                            [(ngModel)]="pair.value"
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
                    (click)="removeProperty(pair)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
            <button
                matRipple
                class="w-full bg-white border border-gray-300 rounded-none text-black mt-4"
                (click)="addProperty()"
            >
                Add Extra Purchase Detail
            </button>
        </div>
    </div>`,
    styles: [``],
})
export class AssetFlowPurchasesComponent {
    public readonly form = this._state.form;

    constructor(private _state: AssetManagerStateService) {}

    public addInvoice() {
        const { invoices } = this.form?.value || { invoices: [] };
        this.form.patchValue({
            invoices: [
                ...invoices,
                { id: `invoice-${randomInt(99999)}`, name: '', url: '' },
            ],
        });
    }

    public removeInvoice(item: any) {
        const { invoices } = this.form?.value || { invoices: [] };
        this.form.patchValue({
            invoices: invoices.filter((_) => _.id !== item.id),
        });
    }

    public addProperty() {
        const { purchase_details } = this.form?.value || {
            purchase_details: [],
        };
        this.form.patchValue({
            purchase_details: [
                ...purchase_details,
                { id: `prop-${randomInt(99999)}`, name: '', value: '' },
            ],
        });
    }

    public removeProperty(item: any) {
        const { purchase_details } = this.form?.value || {
            purchase_details: [],
        };
        this.form.patchValue({
            purchase_details: purchase_details.filter((_) => _.id !== item.id),
        });
    }
}
