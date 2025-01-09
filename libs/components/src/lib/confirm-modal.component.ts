import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialog,
} from '@angular/material/dialog';
import { first } from 'rxjs/operators';

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
    width: '28em',
    maxHeight: 'calc(100vh - 2em)',
    maxWidth: 'calc(100vw - 2em)',
};

export interface ConfirmRepsonse {
    reason: 'done' | '' | null;
    loading: (_: string) => void;
    close: () => void;
}

export async function openConfirmModal(
    data: ConfirmModalData,
    dialog: MatDialog,
): Promise<ConfirmRepsonse> {
    const ref = dialog.open<ConfirmModalComponent, ConfirmModalData>(
        ConfirmModalComponent,
        {
            ...CONFIRM_METADATA,
            data,
        },
    );
    return {
        ...(await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ])),
        loading: (s) => (ref.componentInstance.loading = s),
        close: () => ref.close(),
    };
}

@Component({
    selector: 'confirm-modal',
    template: `
        <header class="px-4 py-3">
            <h3 class="font-medium text-xl">{{ title | translate }}</h3>
        </header>
        <main
            *ngIf="!loading; else load_state"
            class="flex flex-col items-center space-y-4 p-4 max-w-[80vw]"
        >
            <app-icon [icon]="icon" class="text-5xl"></app-icon>
            <p content class="text-center" [innerHTML]="content"></p>
        </main>
        <footer
            class="flex items-center justify-center p-4 space-x-4"
            *ngIf="!loading"
        >
            <button btn matRipple class="inverse flex-1" mat-dialog-close>
                {{ cancel_text | translate }}
            </button>
            <button
                btn
                matRipple
                name="accept"
                class="flex-1"
                (click)="onConfirm()"
            >
                {{ confirm_text | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <main loading>
                <div
                    class="w-full h-48 flex flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ConfirmModalComponent extends AsyncHandler implements OnInit {
    /** Loading state */
    public loading: string;
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Title of the confirm modal */
    public readonly title: string = this._data.title || 'COMMON.CONFIRM';
    /** Body of the confirm modal */
    public readonly content: string = this._data.content || 'Are you sure?';
    /** Display text on the confirm button */
    public readonly confirm_text: string =
        this._data.confirm_text || 'COMMON.ACCEPT';
    /** Display text on the cancel button */
    public readonly cancel_text: string =
        this._data.cancel_text || 'COMMON.CANCEL';
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
        @Inject(MAT_DIALOG_DATA) private _data: ConfirmModalData,
    ) {
        super();
    }

    public ngOnInit() {
        if (this._data.close_delay) {
            this.timeout(
                'close',
                () => this._dialog_ref.close(),
                this._data.close_delay,
            );
        }
    }

    /** User confirmation of the content of the modal */
    public onConfirm() {
        this.event.emit({ reason: 'done' });
    }
}
