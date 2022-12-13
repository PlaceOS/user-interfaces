import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BuildingsService } from './buildings.service';
import { Building, BookingRuleDetails } from '@placeos/organisation';

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
                <form [formGroup]="buildingForm">
                    <span class="small-title">Building image</span>
                    <div
                        class="upload-container"
                        dragDrop
                        (fileDropped)="onFileDropped($event)"
                    >
                        <div class="drag-drop-container">
                            <label
                                for="file-upload"
                                *ngIf="!imageURL"
                                class="drag-text"
                            >
                                <span
                                    ><svg
                                        width="26"
                                        height="30"
                                        viewBox="0 0 26 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.75 23H18.25V12.5H25.25L13 0.25L0.75 12.5H7.75V23ZM0.75 26.5H25.25V30H0.75V26.5Z"
                                            fill="#BDBDBD"
                                        />
                                    </svg>
                                </span>
                                <span>
                                    Click to browse or drag and drop your
                                    building photo
                                </span>
                            </label>

                            <input
                                class="file-input"
                                type="file"
                                id="file-upload"
                                #fileDropRef
                                accept="image/jpeg, image/png, image/jpeg"
                                (change)="fileHandler($event.target.files)"
                            />

                            <img
                                *ngIf="imageURL"
                                [src]="imageURL"
                                height="230"
                                width="350"
                                alt="preview of image"
                            />
                        </div>
                    </div>
                    <span class="small-title">Building name</span>

                    <input
                        matInput
                        type="text"
                        class="building-name-input"
                        [formControl]="buildingForm.get('building_name')"
                        [placeholder]="'Type name here'"
                        (keyup)="onKey($event)"
                    />

                    <mat-error
                        class="input-error"
                        *ngIf="
                            buildingForm
                                .get('building_name')
                                .hasError('required')
                        "
                        >Please enter a building title</mat-error
                    >

                    <span class="small-title">Building location</span>
                    <input
                        matInput
                        type="text"
                        class="building-name-input"
                        [formControl]="buildingForm.get('building_location')"
                        [placeholder]="'Type to search or add manually'"
                        (keyup)="onKey($event)"
                    />

                    <mat-error
                        class="input-error"
                        type="submit"
                        *ngIf="
                            buildingForm
                                .get('building_location')
                                .hasError('required')
                        "
                        >Please enter a location</mat-error
                    >
                </form>
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
                    [disabled]="!buildingForm.valid"
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
            main,
            form {
                display: flex;
                flex-direction: column;
                align-items: center;
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
                margin: 8px 0px 8px 8px;
                align-self: flex-start;
            }
            .upload-container {
                display: flex;
                background-color: #f8f8fa;
                width: 380px;
                height: 259px;
                border: 1px solid #d4d4d4;
                border-radius: 6px;
                margin-bottom: 10px;
                align-items: center;
                justify-content: center;
            }
            .drag-drop-container {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px dashed #bdbdbd;
                margin: 20px;
                border-radius: 6px;
                width: 290px;
                height: 190px;
                padding: 30px;
            }
            .drag-text {
                display: flex;
                flex-direction: column;
                color: #a5a5a5;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
            .drag-text span {
                display: flex;
                margin: 10px 0px 10px 0px;
            }
            .file-input {
                display: none;
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
            .input-error {
                display: flex;
                align-self: flex-start;
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
                margin-right: 30px;
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
    buildingForm = new FormGroup({
        building_name: new FormControl('Type name here', [
            Validators.required,
            Validators.minLength(1),
        ]),
        building_location: new FormControl('Type to search or add manually', [
            Validators.required,
        ]),
        building_image: new FormControl(''),
    });

    fileDrag: boolean = false;
    files: any[] = [];
    imageURL: string = '';

    constructor(
        public dialogRef: MatDialogRef<AddBuildingModalComponent>,
        public buildingsService: BuildingsService
    ) {}

    ngOnInit(): void {}

    closeDialog() {
        this.dialogRef.close();
    }

    addBuilding(): void {
        console.log(
            this.buildingForm.get('building_name')?.value,
            this.buildingForm.get('building_location')?.value
        );
        const building = {
            id: 'bld-02',
            name: this.buildingForm.get('building_name')?.value,
            display_name: 'Brisbane',
            zone_id: '',
            code: '',
            address: this.buildingForm.get('building_location')?.value,
            timezone: '',
            holding_bay: '',
            visitor_space: '',
            booking_details: '',
            catering_restricted_from: 0,
            currency: '',
            extras: '',
            loan_items: '',
            levels: [],
            zones: [''],
            searchable: '',
            room_configurations: '',
            catering_hours: {},
            bindings: {},
            orientations: {},
            attributes: [],
            image: this.imageURL || '',
        };
        this.buildingsService.addBuilding(building);
        this.closeDialog();
    }
    onKey(event): void {
        return;
    }
    onFileDropped($event) {
        this.uploadFiles($event);
        this.previewImage($event);
    }
    fileHandler(files: File[]) {
        this.uploadFiles(files);
        this.previewImage(files);
    }

    uploadFiles(files: File[]) {
        for (const item of files) {
            this.files.push(item);
            console.log(this.files, 'files');
        }
        this.previewImage(files);
    }

    previewImage(files) {
        let reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageURL = event.target.result;
        };
        reader.readAsDataURL(files.item(0));
        this.buildingForm
            .get('building_name')
            ?.setValue(files[0].name.split('.')[0]);
    }
}
