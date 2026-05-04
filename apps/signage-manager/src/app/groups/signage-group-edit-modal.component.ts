import { Component, inject, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FullscreenModalShellComponent } from '@placeos/components';
import { PlaceGroup } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

@Component({
    selector: 'signage-group-edit-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="group.id ? 'Edit signage group' : 'New signage group'"
            [loading]="loading() ? 'Saving signage group...' : ''"
            (confirm)="save()"
        >
            <form [formGroup]="form" class="flex flex-col">
                <label for="signage-group-name"
                    >Name<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="signage-group-name"
                        name="signage-group-name"
                        placeholder="Name"
                        formControlName="name"
                        required
                    />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
                <label for="signage-group-description">Description</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        id="signage-group-description"
                        name="signage-group-description"
                        placeholder="Description"
                        formControlName="description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
                <label for="signage-group-parent"
                    >Parent Group
                    @if (!group.id) {
                        <span required>*</span>
                    }
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        id="signage-group-parent"
                        name="signage-group-parent"
                        placeholder="Select parent group"
                        formControlName="parent_id"
                        [required]="!group.id"
                    >
                        @if (group.id) {
                            <mat-option value="">No parent</mat-option>
                        }
                        @for (parent of parent_groups(); track parent.id) {
                            <mat-option [value]="parent.id">
                                {{ parent.name || parent.id }}
                            </mat-option>
                        }
                    </mat-select>
                    <mat-error>Parent group is required</mat-error>
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
})
export class SignageGroupEditModalComponent {
    private readonly _data = inject<{ group: Partial<PlaceGroup> }>(
        MAT_DIALOG_DATA,
    );
    private readonly _dialog_ref =
        inject<MatDialogRef<SignageGroupEditModalComponent>>(MatDialogRef);
    private readonly _service = inject(SignageService);

    public readonly loading = signal(false);
    public readonly group = this._data.group || {};
    public readonly parent_groups = () =>
        this._service
            .manageable_signage_groups()
            .filter((group) => group.id !== this.group.id);
    public readonly form = new FormGroup({
        name: new FormControl(this.group.name || '', [Validators.required]),
        description: new FormControl(this.group.description || ''),
        parent_id: new FormControl(
            this.group.parent_id || '',
            this.group.id ? [] : [Validators.required],
        ),
    });

    public async save() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        try {
            const result = await this._service.saveSignageGroup(
                this.group,
                this.form.getRawValue(),
            );
            this._dialog_ref.disableClose = false;
            if (result) this._dialog_ref.close(result);
        } catch {
            this._dialog_ref.disableClose = false;
            this.loading.set(false);
        }
    }
}
