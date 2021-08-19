import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogEvent } from '@placeos/common';

@Component({
    selector: 'dashboard-delivery-modal',
    template: `
        <header class="flex items-center justify-between">
            <h3>Register Delivery</h3>
            <button mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-2 w-[24rem]" [formGroup]="form">
            <div>
                <label>Name<span>*</span>:</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        placeholder="Name of items being delivered"
                        formControlName="name"
                    />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div>
                <label>Description:</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        placeholder="Description of items being delivered"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
        </main>
        <footer
            class="p-2 flex items-center justify-center border-t border-gray-100"
        >
            <button mat-button class="w-32" (click)="register()">
                Register
            </button>
        </footer>
    `,
    styles: [``],
})
export class DashboardDeliveryModalComponent {
    @Output() public events = new EventEmitter<DialogEvent>();

    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
    });

    public register() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this.events.emit({ reason: 'done', metadata: this.form.value });
    }
}
