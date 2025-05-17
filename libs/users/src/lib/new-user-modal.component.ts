import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AsyncHandler, DialogEvent } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

import { UserFormComponent } from './user-form.component';
import { User } from './user.class';
import { generateUserForm } from './user.utilities';

@Component({
    selector: 'new-user-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (user?.id ? 'COMMON.USER_EDIT' : 'COMMON.USER_NEW')
                        | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex w-full min-w-[24rem] flex-col items-center px-4"
            *ngIf="!loading; else load_state"
        >
            <user-form [form]="form"></user-form>
        </main>
        <footer
            class="flex w-full items-center justify-end space-x-2 border-t border-base-200 p-2"
            *ngIf="!loading"
        >
            <button btn matRipple class="inverse" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button btn matRipple (click)="saveChanges()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <main class="flex w-full flex-col items-center space-y-2 p-2">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.USER_SAVING' | translate }}</p>
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
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        UserFormComponent,
        MatDialogModule,
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
