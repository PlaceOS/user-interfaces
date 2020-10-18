import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogEvent, randomInt } from '@user-interfaces/common';

import { CateringItem } from './catering-item.class';
import { CateringOption } from './catering.interfaces';

export interface CateringItemOptionModalData {
    parent: CateringItem;
    option: CateringOption;
    types: string[];
}

@Component({
    selector: 'catering-option-modal',
    template: `
        <header>
            <h3 mat-dialog-title>{{ option.id ? 'Edit' : 'Add' }} Item Option</h3>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon
                    [icon]="{ type: 'icon', class: 'material-icons', content: 'close' }"
                ></app-icon>
            </button>
        </header>
        <form
            class="p-4 overflow-auto"
            *ngIf="form && !loading; else load_state"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="title"
                    [class.error]="form.controls.name.invalid && form.controls.name.touched"
                >
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input matInput name="name" placeholder="Item name" formControlName="name" />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.group">
                <label
                    for="group"
                    [class.error]="form.controls.group.invalid && form.controls.group.touched"
                >
                    Type<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="group"
                        placeholder="Type of option e.g. Number of sugars"
                        formControlName="group"
                        [matAutocomplete]="auto"
                    />
                    <mat-error>Type is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.unit_price">
                <label for="title">Unit Price:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="unit-price"
                        type="number"
                        placeholder="Unit Price"
                        formControlName="unit_price"
                    />
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.multiple">
                <mat-checkbox name="multiple" formControlName="multiple"
                    >Can select multiple of type</mat-checkbox
                >
            </div>
        </form>
        <footer
            *ngIf="!loading"
            class="flex p-2 items-center justify-center border-none border-t border-solid border-gray-300"
        >
            <button mat-button [disabled]="!form.dirty" (click)="saveChanges()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="body">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">Saving catering item...</div>
                </div>
            </div>
        </ng-template>
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of types" [value]="option">
                {{ option }}
            </mat-option>
        </mat-autocomplete>
    `,
    styles: [
        `
            .field {
                display: flex;
                flex-wrap: wrap;
            }
        `,
    ],
})
export class CateringItemOptionModalComponent {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for item */
    public form: FormGroup;
    /** Whether changes are being saved */
    public loading: boolean = false;

    /** Current item details */
    public get option(): CateringOption {
        return this._data.option;
    }

    /** List of available categories */
    public get types(): string[] {
        return this._data.types || [];
    }

    constructor(@Inject(MAT_DIALOG_DATA) private _data: CateringItemOptionModalData) {}

    public ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(this.option.name || '', [Validators.required]),
            group: new FormControl(this.option.group || '', [Validators.required]),
            unit_price: new FormControl(this.option.unit_price),
            multiple: new FormControl(!!this.option.multiple, []),
        });
    }

    public saveChanges() {
        this.loading = true;
        const new_option = {
            ...this.option,
            id: this.option.id || `option-${randomInt(9999_9999)}`,
            ...this.form.value,
        } as CateringOption;
        this.event.emit({
            reason: 'done',
            metadata: {
                item: new CateringItem({
                    ...this._data.parent,
                    options: this._data.parent.options
                        .filter((i) => i.id !== new_option.id)
                        .concat([new_option]),
                }),
            },
        });
    }
}
