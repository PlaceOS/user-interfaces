import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApplicationIcon, DialogEvent } from '../../../common/src/lib/types';

export interface ConfirmModalData {
    /** Title of the modal */
    title: string;
    /** Contents of the modal */
    content: string;
    /** Text displaed on the confirmation button */
    confirm_text?: string;
    /** Text displaed on the confirmation button */
    cancel_text?: string;
    /** Icon to display on the modal */
    icon: ApplicationIcon;
}

export const CONFIRM_METADATA = {
    height: 'auto',
    width: '24em',
    maxHeight: 'calc(100vh - 2em)',
    maxWidth: 'calc(100vw - 2em)',
};

@Component({
    selector: 'confirm-modal',
    template: `
        <header>
            <h3 mat-dialog-title>{{ title }}</h3>
        </header>
        <main
            *ngIf="!loading; else load_state"
            class="flex flex-col items-center justify-center space-y-2 px-6"
        >
            <app-icon [icon]="icon" class="text-5xl"></app-icon>
            <p content class="text-center text-sm" [innerHTML]="content"></p>
        </main>
        <footer
            class="flex items-center justify-center p-2 space-x-2"
            *ngIf="!loading"
        >
            <button mat-button class="inverse" mat-dialog-close>
                {{ cancel_text }}
            </button>
            <button mat-button name="accept" (click)="onConfirm()">
                {{ confirm_text }}
            </button>
        </footer>
        <ng-template #load_state>
            <main loading>
                <div class="h-48 w-64 flex flex-col items-center space-y-2">
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </main>
        </ng-template>
    `,
    styles: [
        `
            main {
                min-height: 10rem;
            }

            footer button {
                min-width: 8em;
            }
        `,
    ],
})
export class ConfirmModalComponent {
    /** Loading state */
    public loading: string;
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Title of the confirm modal */
    public readonly title: string = this._data.title || 'Confirm';
    /** Body of the confirm modal */
    public readonly content: string = this._data.content || 'Are you sure?';
    /** Display text on the confirm button */
    public readonly confirm_text: string = this._data.confirm_text || 'Accept';
    /** Display text on the cancel button */
    public readonly cancel_text: string = this._data.cancel_text || 'Cancel';
    /** Display icon properties */
    public readonly icon: ApplicationIcon = this._data.icon || {
        class: 'material-icons',
        content: 'done',
    };
    /** Prevent user from closing the modal */
    public readonly disableClose = () => (this._dialog_ref.disableClose = true);
    /** Allow the user to close the modal */
    public readonly enableClose = () => (this._dialog_ref.disableClose = false);

    constructor(
        private _dialog_ref: MatDialogRef<ConfirmModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: ConfirmModalData
    ) {}

    /** User confirmation of the content of the modal */
    public onConfirm() {
        this._dialog_ref.close('done');
        this.event.emit({ reason: 'done' });
    }
}
