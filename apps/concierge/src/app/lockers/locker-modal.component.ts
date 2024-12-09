import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locker } from '@placeos/bookings';
import { DialogEvent } from '@placeos/common';
import { showStaff, User } from '@placeos/users';

@Component({
    selector: 'locker-modal',
    template: ``,
    styles: [``],
})
export class LockerModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;

    public get id() {
        return this._data?.id || '';
    }

    public readonly form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        map_id: new FormControl('', [Validators.required]),
        assigned_user: new FormControl<User>(null),
        assigned_to: new FormControl(''),
        assigned_name: new FormControl(''),
        notes: new FormControl(''),
        map_rotation: new FormControl(0),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Locker,
        private _dialog_ref: MatDialogRef<LockerModalComponent>,
    ) {
        if (_data) this.form.patchValue(_data);
    }

    public async ngOnInit() {
        if (this._data.assigned_to) {
            const user = await showStaff(this._data.assigned_to).toPromise();
            if (user) {
                this.form.patchValue({
                    assigned_user: user,
                    assigned_to: user.email,
                    assigned_name: user.name,
                });
            }
        }
    }

    public postForm() {
        if (!this.form.valid) return;
        this.loading = true;
        const value = { ...this.form.getRawValue() };
        if (value.assigned_user) {
            value.assigned_to = value.assigned_user.email;
            value.assigned_name = value.assigned_user.name;
            delete value.assigned_user;
        }
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
