import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

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
                <span class="small-title">Building image</span>
                <div class="upload-container"></div>
                <span class="small-title">Building name</span>

                <input
                    matInput
                    type="text"
                    class="building-name-input"
                    [formControl]="building_name"
                    [placeholder]="'Type name here'"
                    (keyup)="onKey($event)"
                />

                <mat-error
                    class="input-error"
                    *ngIf="building_name.hasError('required')"
                    >Please enter a building title</mat-error
                >

                <span class="small-title">Building location</span>
                <input
                    matInput
                    type="text"
                    class="building-name-input"
                    [formControl]="building_location"
                    [placeholder]="'Type to search or add manually'"
                    (keyup)="onKey($event)"
                />

                <mat-error
                    class="input-error"
                    *ngIf="building_name.hasError('required')"
                    >Please enter a building title</mat-error
                >
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
                    (click)="addBuilding()"
                >
                    Add
                </button>
            </footer>
        </section>
    `,
    styles: [
        `
            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #fff;
                height: 70px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            main {
                margin: 20px;
                display: flex;
                flex-direction: column;
            }
            .dialog-title {
                display: flex;
                font-size: 20px;
                line-height: 30px;
                font-weight: 800;
                padding: 20px;
            }
            .small-title {
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
                margin: 8px 0px 8px 0px;
            }
            .upload-container {
                background-color: #f8f8fa;
                width: 380px;
                height: 259px;
                border: 1px solid #d4d4d4;
                border-radius: 6px;
                margin-bottom: 10px;
            }
            .building-name-input {
                border: 1px solid #e0e0e0;
                border-radius: 2px;
                padding: 12px 8px 12px 8px;
                font-weight: 400;
                width: 380px;
                font-size: 14px;
                line-height: 24px;
                color: #979797;
                margin-bottom: 10px;
            }
            .cancel-button {
                display: flex;
                color: #292f5b;
                background-color: #fff;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
            }
            .add-button {
                display: flex;
                color: #fff;
                background-color: #292f5b;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
            }
            footer {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                margin-right: 20px;
            }
            .close {
                display: flex;
                z-index: 99;
                text-align: right;
                vertical-align: middle;
                line-height: 12px;
                margin-right: 20px;
            }
        `,
    ],
})
export class AddBuildingModalComponent implements OnInit {
    building_name: FormControl = new FormControl('Type name here', [
        Validators.required,
        Validators.minLength(1),
    ]);
    building_location: FormControl = new FormControl(
        'Type to search or add manually',
        [Validators.required]
    );

    constructor(public dialogRef: MatDialogRef<AddBuildingModalComponent>) {}

    ngOnInit(): void {}

    closeDialog() {
        this.dialogRef.close();
    }

    addBuilding(): void {
        return;
    }
    onKey(event): void {
        return;
    }
}
