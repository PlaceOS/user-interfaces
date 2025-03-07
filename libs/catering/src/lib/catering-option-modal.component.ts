import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { randomInt } from 'libs/common/src/lib/general';
import { DialogEvent } from 'libs/common/src/lib/types';

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
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (option.id
                        ? 'CATERING.ITEM_OPTION_EDIT'
                        : 'CATERING.ITEM_OPTION_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <form
            class="max-h-[65vh] w-[28rem] overflow-auto px-4"
            *ngIf="form && !loading; else load_state"
            [formGroup]="form"
        >
            <div class="flex flex-col" *ngIf="form.controls.name">
                <label
                    for="title"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                >
                    {{ 'FORM.NAME' | translate }}<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="name"
                        [placeholder]="'FORM.NAME' | translate"
                        formControlName="name"
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col" *ngIf="form.controls.group">
                <label
                    for="group"
                    [class.error]="
                        form.controls.group.invalid &&
                        form.controls.group.touched
                    "
                >
                    {{ 'COMMON.TYPE' | translate }}<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="group"
                        [placeholder]="
                            'CATERING.ITEM_OPTION_TYPE_PLACEHOLDER' | translate
                        "
                        formControlName="group"
                        [matAutocomplete]="auto"
                    />
                    <mat-error>{{
                        'CATERING.ITEM_OPTION_TYPE_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
            </div>
            <div class="mb-4 flex flex-col" *ngIf="form.controls.multiple">
                <settings-toggle
                    [name]="'CATERING.ITEM_OPTION_SELECT_MULTIPLE' | translate"
                    formControlName="multiple"
                >
                </settings-toggle>
            </div>
            <div class="flex flex-col" *ngIf="form.controls.unit_price">
                <label for="title">{{
                    'CATERING.ITEM_PRICE' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="unit-price"
                        type="number"
                        [placeholder]="'CATERING.ITEM_PRICE' | translate"
                        formControlName="unit_price"
                    />
                </mat-form-field>
            </div>
        </form>
        <footer
            *ngIf="!loading"
            class="flex items-center justify-end border-t border-solid border-base-200 px-4 py-2"
        >
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!form.dirty"
                (click)="saveChanges()"
            >
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <div loading class="flex w-64 flex-col items-center space-y-2 p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'CATREING.ITEM_OPTION_SAVING' | translate }}</p>
            </div>
        </ng-template>
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of types" [value]="option">
                {{ option }}
            </mat-option>
        </mat-autocomplete>
    `,
    styles: [``],
    standalone: false,
})
export class CateringItemOptionModalComponent {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for item */
    public form = new FormGroup({
        name: new FormControl(this.option.name || '', [Validators.required]),
        group: new FormControl(this.option.group || '', [Validators.required]),
        unit_price: new FormControl(this.option.unit_price),
        multiple: new FormControl(!!this.option.multiple, []),
    });
    /** Whether changes are being saved */
    public loading = false;

    /** Current item details */
    public get option(): CateringOption {
        return this._data.option;
    }

    /** List of available categories */
    public get types(): string[] {
        return this._data.types || [];
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: CateringItemOptionModalData,
    ) {}

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
