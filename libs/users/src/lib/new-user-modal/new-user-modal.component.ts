import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseClass, DialogEvent } from '@user-interfaces/common';

import { User } from '../user.class';
import { generateUserForm } from '../user.utilities';

@Component({
    selector: 'new-user-modal',
    templateUrl: './new-user-modal.component.html',
    styleUrls: ['./new-user-modal.component.scss'],
})
export class NewUserModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for the new user */
    public form: FormGroup;
    /** New user data store */
    public user: User;
    /** Whether user details are being saved */
    public loading: boolean;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: any) {
        super();
    }

    public ngOnInit(): void {
        this.user = this._data.user || {};
        this.form = generateUserForm(this.user);
    }

    public saveChanges() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const new_user = new User({
                ...this.form.value,
                type: 'external',
                visit_expected: !this.form.value.email.endsWith('pwc.com'),
            });
            this.event.emit({ reason: 'done', metadata: new_user });
        }
    }
}
