import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { notifyError, notifySuccess } from '@placeos/common';

import { ServicesStateService } from './services-state.service';

@Component({
    selector: 'service-form',
    template: `
        <div class="bg-base-100 absolute inset-0 overflow-auto">
            <header
                class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    {{ is_edit() ? 'Edit Service' : 'Add Service' }}
                </h2>
                <a
                    icon
                    matRipple
                    [routerLink]="['/services', 'packages']"
                    aria-label="Close form"
                    class="flex h-10 w-10 items-center justify-center rounded-full"
                >
                    <icon>close</icon>
                </a>
            </header>

            <form
                class="mx-auto my-2 flex w-full max-w-[640px] flex-col gap-1 px-4 pb-20"
                [formGroup]="form"
            >
                <label class="text-sm font-medium">Name *</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>Service name</mat-label>
                    <input
                        matInput
                        formControlName="name"
                        placeholder="Service name"
                    />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>

                <label class="text-sm font-medium">Category *</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>Select category</mat-label>
                    <mat-select
                        formControlName="category"
                        placeholder="Select category"
                    >
                        <mat-option value="package">
                            Event Package
                        </mat-option>
                        <mat-option value="alacarte">A La Carte</mat-option>
                        <mat-option value="addon">AV Add-on</mat-option>
                        <mat-option value="space">Space / Venue</mat-option>
                    </mat-select>
                    <mat-error>Category is required</mat-error>
                </mat-form-field>

                <label class="text-sm font-medium">Space / Venue</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. Auditorium and Lobby</mat-label>
                    <input
                        matInput
                        formControlName="space"
                        placeholder="e.g. Auditorium and Lobby"
                    />
                </mat-form-field>

                <label class="text-sm font-medium">Duration</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. Up to 4 hours</mat-label>
                    <input
                        matInput
                        formControlName="duration"
                        placeholder="e.g. Up to 4 hours"
                    />
                </mat-form-field>

                <label class="text-sm font-medium">Description</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>Service description</mat-label>
                    <textarea
                        matInput
                        formControlName="description"
                        placeholder="Service description"
                        rows="3"
                    ></textarea>
                </mat-form-field>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-sm font-medium">
                            Internal Price (UCLA) *
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>e.g. $719</mat-label>
                            <input
                                matInput
                                formControlName="internal_price"
                                placeholder="e.g. $719"
                            />
                            <mat-error>Price is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div>
                        <label class="text-sm font-medium">
                            External Price *
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>e.g. $990.94</mat-label>
                            <input
                                matInput
                                formControlName="external_price"
                                placeholder="e.g. $990.94"
                            />
                            <mat-error>Price is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>

                <label class="text-sm font-medium">
                    Refund Lead Time (days)
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. 7</mat-label>
                    <input
                        matInput
                        type="number"
                        formControlName="refund_lead_days"
                        placeholder="e.g. 7"
                    />
                    <mat-hint>
                        Days before event date when refund cutoff applies
                    </mat-hint>
                </mat-form-field>

                <label class="text-sm font-medium">Icon</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. groups, school, meeting_room</mat-label>
                    <input
                        matInput
                        formControlName="icon"
                        placeholder="e.g. groups, school, meeting_room"
                    />
                    <mat-hint>
                        Use underscores, e.g. meeting_room not meeting room
                    </mat-hint>
                </mat-form-field>
            </form>

            <footer
                class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end gap-2 rounded px-4 py-2"
            >
                <a
                    matRipple
                    [routerLink]="['/services', 'packages']"
                    class="bg-base-300 hover:bg-base-content/20 rounded px-6 py-2 text-sm font-medium"
                >
                    Cancel
                </a>
                <button
                    matRipple
                    class="bg-primary text-primary-content rounded px-6 py-2 text-sm font-medium"
                    (click)="save()"
                >
                    {{ is_edit() ? 'Update' : 'Create' }}
                </button>
            </footer>
        </div>
    `,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule,
        RouterModule,
        IconComponent,
    ],
})
export class ServiceFormComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _state = inject(ServicesStateService);

    public is_edit = signal(false);
    private _edit_id = '';

    public form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        category: new FormControl<
            'package' | 'alacarte' | 'space' | 'addon'
        >('package', [Validators.required]),
        space: new FormControl(''),
        duration: new FormControl(''),
        description: new FormControl(''),
        internal_price: new FormControl('', [Validators.required]),
        external_price: new FormControl('', [Validators.required]),
        refund_lead_days: new FormControl<number | null>(null),
        icon: new FormControl(''),
    });

    public ngOnInit() {
        const id = this._route.snapshot.paramMap.get('id');
        if (id) {
            const service = this._state.getById(id);
            if (service) {
                this.is_edit.set(true);
                this._edit_id = id;
                this.form.patchValue(service);
            } else {
                notifyError('Service not found');
                this._router.navigate(['/services', 'packages']);
            }
        }
    }

    public save() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            notifyError('Please fill in all required fields.');
            return;
        }
        const value = this.form.getRawValue();
        if (this.is_edit()) {
            this._state.updateService(this._edit_id, value);
            notifySuccess('Service updated successfully.');
        } else {
            this._state.addService(value as any);
            notifySuccess('Service created successfully.');
        }
        this._router.navigate(['/services', 'packages']);
    }
}
