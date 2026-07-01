import {
    Component,
    EventEmitter,
    Output,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormField, form, required } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CateringItem, DialogEvent, randomInt } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
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
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (option().id
                        ? 'CATERING.ITEM_OPTION_EDIT'
                        : 'CATERING.ITEM_OPTION_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <form class="max-h-[65vh] w-md overflow-auto px-4">
                @if (form.name) {
                    <div class="flex flex-col">
                        <label
                            for="title"
                            [class.error]="
                                form.name().invalid() && form.name().touched()
                            "
                        >
                            {{ 'FORM.NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'FORM.NAME' | translate"
                                [formField]="form.name"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.group) {
                    <div class="flex flex-col">
                        <label
                            for="group"
                            [class.error]="
                                form.group().invalid() && form.group().touched()
                            "
                        >
                            {{ 'COMMON.TYPE' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'CATERING.ITEM_OPTION_TYPE_PLACEHOLDER'
                                        | translate
                                "
                                [formField]="form.group"
                                [matAutocomplete]="auto"
                            />
                            <mat-error>{{
                                'CATERING.ITEM_OPTION_TYPE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.multiple) {
                    <div class="mb-4 flex flex-col">
                        <settings-toggle
                            [label]="
                                'CATERING.ITEM_OPTION_SELECT_MULTIPLE'
                                    | translate
                            "
                            [formField]="form.multiple"
                        >
                        </settings-toggle>
                    </div>
                }
                @if (form.unit_price) {
                    <div class="flex flex-col">
                        <label for="title">{{
                            'CATERING.ITEM_PRICE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="number"
                                [placeholder]="
                                    'CATERING.ITEM_PRICE' | translate
                                "
                                [formField]="form.unit_price"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        } @else {
            <div loading class="flex w-64 flex-col items-center space-y-2 p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'CATREING.ITEM_OPTION_SAVING' | translate }}</p>
            </div>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form().dirty()"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <mat-autocomplete #auto="matAutocomplete">
            @for (option of types(); track option) {
                <mat-option [value]="option">
                    {{ option }}
                </mat-option>
            }
        </mat-autocomplete>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        SettingsToggleComponent,
        MatDialogModule,
        IconComponent,
        FormField,
    ],
})
export class CateringItemOptionModalComponent {
    private _data = inject<CateringItemOptionModalData>(MAT_DIALOG_DATA);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Current item details */
    public readonly option = computed(() => this._data.option);
    /** List of available categories */
    public readonly types = computed(() => this._data.types || []);
    /** Form fields for item */
    public readonly model = signal({
        name: this.option().name || '',
        group: this.option().group || '',
        unit_price: this.option().unit_price,
        multiple: !!this.option().multiple,
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.group);
    });
    /** Whether changes are being saved */
    public readonly loading = signal(false);

    public saveChanges() {
        this.loading.set(true);
        const new_option = {
            ...this.option(),
            id: this.option().id || `option-${randomInt(9999_9999)}`,
            ...this.model(),
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
