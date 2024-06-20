import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { ApplicationIcon, DialogEvent } from 'libs/common/src/lib/types';

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
    /** Delay before closing the modal */
    close_delay?: number;
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
            <h3>{{ title }}</h3>
        </header>
        <main
            *ngIf="!loading; else load_state"
            class="flex flex-col items-center space-y-2 p-4"
        >
            <app-icon [icon]="icon" class="text-5xl"></app-icon>
            <p
                content
                class="text-center text-sm w-[22rem]"
                [innerHTML]="content"
            ></p>
        </main>
        <footer
            class="flex items-center justify-center p-2 space-x-2"
            *ngIf="!loading"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                {{ cancel_text }}
            </button>
            <button
                btn
                matRipple
                name="accept"
                class="w-32"
                (click)="onConfirm()"
            >
                {{ confirm_text }}
            </button>
        </footer>
        <ng-template #load_state>
            <main loading>
                <div
                    class="w-full h-48 flex flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ConfirmModalComponent extends AsyncHandler {
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
    ) {
        super();
    }

    public ngOnInit() {
        if (this._data.close_delay) {
            this.timeout(
                'close',
                () => this._dialog_ref.close(),
                this._data.close_delay
            );
        }
    }

    /** User confirmation of the content of the modal */
    public onConfirm() {
        this.event.emit({ reason: 'done' });
    }
}
