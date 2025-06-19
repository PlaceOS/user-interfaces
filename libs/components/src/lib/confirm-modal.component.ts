import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { ApplicationIcon, DialogEvent } from 'libs/common/src/lib/types';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

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
        <header
            class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title }}</h2>
        </header>
        @if (!loading) {
            <main
                class="flex w-[28rem] max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon" class="text-5xl"></icon>
                <p content class="text-center" [innerHTML]="content"></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </main>
        }
        @if (!loading) {
            <footer
                class="sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse flex-1 bg-base-100"
                    mat-dialog-close
                >
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
        }
    `,
    styles: [``],
    imports: [
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
    ],
})
export class ConfirmModalComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<ConfirmModalComponent>>(MatDialogRef);
    private _data = inject<ConfirmModalData>(MAT_DIALOG_DATA);

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
        class: 'material-symbols-rounded',
        content: 'done',
    };
    /** Prevent user from closing the modal */
    public readonly disableClose = () => (this._dialog_ref.disableClose = true);
    /** Allow the user to close the modal */
    public readonly enableClose = () => (this._dialog_ref.disableClose = false);

    constructor() {
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
