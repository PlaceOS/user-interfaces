import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'confirm-delete-modal',
    template: `
        <aside>
            <span
                >Are you sure you want to permanently delete this survey?</span
            >
            <div class="button-wrapper">
                <button
                    mat-button
                    (click)="cancel()"
                    class="cancel-button"
                    aria-label="do not delete survey"
                >
                    No
                </button>
                <button
                    mat-flat-button
                    (click)="delete()"
                    class="delete-button"
                    aria-label="delete survey"
                >
                    Yes Delete
                </button>
            </div>
        </aside>
    `,
    styles: [
        `
            aside {
                margin: 20px;
            }
            .button-wrapper {
                display: flex;
                padding-top: 20px;
                width: 100%;
                justify-content: space-between;
            }
            .cancel-button {
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.12);
                color: black;
                border-radius: 2px;
                font-weight: 700;
                padding: 6px 20px;
            }
            .delete-button {
                background-color: #e12e40;
                color: #fff;
                font-weight: 700;
                border-radius: 2px;
                padding: 6px 20px;
            }
        `,
    ],
})
export class ConfirmDeleteModalComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<ConfirmDeleteModalComponent>) {}

    ngOnInit(): void {}

    cancel(): void {
        this.dialogRef.close(false);
    }

    delete() {
        this.dialogRef.close(true);
    }
}
