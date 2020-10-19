import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApplicationIcon, BaseClass, DialogEvent } from '@user-interfaces/common';

export interface ConfirmModalData {
    /** Title of the modal */
    title: string;
    /** Contents of the modal */
    content: string;
    /** Text displaed on the confirmation button */
    action?: string;
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
            <h3 mat-dialog-title>{{ title || 'Confirm' }}</h3>
        </header>
        <mat-dialog-content>
            <div class="body" *ngIf="!loading; else load_state">
                <app-icon [icon]="icon"></app-icon>
                <div class="content">
                    <p [innerHTML]="content"></p>
                </div>
            </div>
        </mat-dialog-content>
        <mat-dialog-actions *ngIf="!loading">
            <button mat-button class="inverse" mat-dialog-close>Cancel</button>
            <button mat-button name="accept" (click)="accept()">{{ action }}</button>
        </mat-dialog-actions>
        <ng-template #load_state>
            <div class="body">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">{{ loading }}</div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            .body {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 1em;
            }

            .content {
                min-width: 16rem;
                text-align: center;
                font-size: 0.8em;
            }

            app-icon {
                font-size: 3em;
            }

            mat-dialog-actions {
                justify-content: center;
            }

            mat-dialog-actions button {
                min-width: 8em;
            }
        `,
    ],
})
export class ConfirmModalComponent extends BaseClass {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Title of the confirm modal */
    public title: string = this._data.title || 'Confirm';
    /** Body of the confirm modal */
    public content: string = this._data.content || 'Are you sure?';
    /** Display text on the confirm button */
    public action: string = this._data.action || 'Ok';
    /** Display icon properties */
    public icon: ApplicationIcon = this._data.icon || { class: 'material-icons', content: 'done' };
    /** Loading state */
    public loading: string;

    constructor(
        private _dialog_ref: MatDialogRef<ConfirmModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: ConfirmModalData
    ) {
        super();
    }

    /**
     * User confirmation of the content of the modal
     */
    public accept() {
        this._dialog_ref.close('done');
        this.event.emit({ reason: 'done' });
    }
}
