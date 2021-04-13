import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseClass, DialogEvent } from '@placeos/common';

import { User } from './user.class';
import { generateUserForm } from './user.utilities';

@Component({
    selector: 'new-user-modal',
    template: `
        <header>
            <div class="heading" mat-dialog-title>
                {{ user?.id ? 'Edit' : 'Add' }} External Attendee
            </div>
            <div class="flex-1"></div>
            <button mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="relative flex flex-col items-center w-full p-2"
            *ngIf="!loading; else load_state"
        >
            <user-form [form]="form"></user-form>
        </main>
        <footer
            class="flex items-center justify-center w-full p-2 border-t border-gray-300 space-x-2"
            *ngIf="!loading"
        >
            <button mat-button class="inverse" mat-dialog-close>Cancel</button>
            <button mat-button (click)="saveChanges()">Save</button>
        </footer>
        <ng-template #load_state>
            <main class="relative flex flex-col items-center w-full p-2">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">Saving attendee...</div>
                </div>
            </main>
        </ng-template>
    `,
    styles: [
        `
            main {
                min-height: 20em !important;
                width: 100%;
            }

            footer button {
                min-width: 8em;
            }
        `,
    ],
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
                visit_expected: !this.form.value.email.endsWith('place.tech'),
            });
            this.event.emit({ reason: 'done', metadata: new_user });
        }
    }
}
