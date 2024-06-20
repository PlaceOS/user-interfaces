import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEvent } from '@placeos/common';
import { Desk } from '@placeos/organisation';

@Component({
    selector: 'desk-modal',
    template: `
        <div class="w-[28rem]">
            <header class="flex items-center justify-between px-2 w-full">
                <h2 class="px-2">{{ id ? 'Edit' : 'New' }} Desk</h2>
                <button *ngIf="!loading" icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                *ngIf="!loading; else load_state"
                class="p-4 flex flex-col"
                [formGroup]="form"
            >
                <div class="flex space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="name">Desk Name<span>*</span></label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="name"
                                formControlName="name"
                                placeholder="e.g. Office Desk"
                            />
                            <mat-error>A name is required for desks</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1 w-1/3">
                        <label for="map-id">Map ID<span>*</span></label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="map-id"
                                formControlName="map_id"
                                placeholder="e.g. table-01.012"
                            />
                            <mat-error>
                                A Map ID is required for desks
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <label for="notes">Groups</label>
                <item-list-field
                    class="w-full"
                    placeholder="Add user groups..."
                    formControlName="groups"
                ></item-list-field>
                <label for="notes">Features</label>
                <item-list-field
                    class="w-full"
                    placeholder="Add features..."
                    formControlName="features"
                ></item-list-field>
                <label for="notes">Notes</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="notes"
                        formControlName="notes"
                    ></textarea>
                </mat-form-field>
                <div class="flex items-center justify-end space-x-2">
                    <button btn matRipple class="w-32 inverse" mat-dialog-close>
                        Cancel
                    </button>
                    <button btn matRipple class="w-32" (click)="postForm()">
                        Save
                    </button>
                </div>
            </main>
        </div>
        <ng-template #load_state>
            <main
                class="p-8 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving desk details...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class DeskModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;

    public get id(): string {
        return this._data?.desk?.id || '';
    }

    public readonly form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        map_id: new FormControl('', [Validators.required]),
        groups: new FormControl<string[]>([]),
        features: new FormControl<string[]>([]),
        notes: new FormControl(''),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { desk?: Desk },
        private _dialog_ref: MatDialogRef<DeskModalComponent>
    ) {
        if (_data?.desk) this.form.patchValue(_data.desk);
    }

    public postForm() {
        if (!this.form.valid) return;
        this.loading = true;
        const value = this.form.value;
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
