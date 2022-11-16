import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'add-building-modal',
    template: `
        <section>
            <div class="header">
                <span class="dialog-title">Add Building</span>
                <span class="close" (click)="closeDialog()">
                    <mat-icon
                        aria-hidden="false"
                        aria-label="Material icon for closing dialog"
                        class="icon"
                        >close</mat-icon
                    >
                </span>
            </div>
            <main>
                <div>
                    <button
                        mat-button
                        class="add-another-question"
                        (click)="addAnotherBuilding()"
                    >
                        Add another
                    </button>
                </div>
            </main>
            <footer>
                <button
                    mat-button
                    class="cancel-button"
                    color="basic"
                    (click)="closeDialog()"
                >
                    Cancel
                </button>
                <button
                    mat-button
                    class="add-button"
                    color="primary"
                    (click)="addQuestion()"
                >
                    Add
                </button>
            </footer>
        </section>
    `,
    styles: [``],
})
export class AddBuildingModalComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<AddBuildingModalComponent>) {}

    ngOnInit(): void {}

    closeDialog() {
        this.dialogRef.close();
    }

    addAnotherBuilding(): void {
        return;
    }
}
