import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncHandler, DialogEvent } from '@placeos/common';

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
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="flex flex-col items-center w-full p-2"
            *ngIf="!loading; else load_state"
        >
            <user-form [form]="form"></user-form>
        </main>
        <footer
            class="flex items-center justify-center w-full p-2 border-t border-base-200 space-x-2"
            *ngIf="!loading"
        >
            <button btn matRipple class="inverse" mat-dialog-close>
                Cancel
            </button>
            <button btn matRipple (click)="saveChanges()">Save</button>
        </footer>
        <ng-template #load_state>
            <main class="flex flex-col items-center w-full p-2 space-y-2">
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving attendee...</p>
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
export class NewUserModalComponent extends AsyncHandler implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for the new user */
    public form = generateUserForm(this.user || new User());
    /** New user data store */
    public user?: User;
    /** Whether user details are being saved */
    public loading = false;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: any) {
        super();
        this.user = this._data.user || {};
        this.form = generateUserForm(this.user);
    }

    public ngOnInit(): void {}

    public saveChanges() {
        if (!this.form) return;
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const new_user = new User({
                ...this.form.value,
                is_external: true,
            });
            this.event.emit({ reason: 'done', metadata: new_user });
        }
    }
}
