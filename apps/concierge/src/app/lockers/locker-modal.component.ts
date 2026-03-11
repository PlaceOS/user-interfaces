import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Locker, LockerBank } from '@placeos/bookings';
import { AsyncHandler, DialogEvent, User } from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    addChipItem,
    CounterComponent,
    removeChipItem,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { showStaff } from '@placeos/users';

type Box = [number, number, number, number];

function boxesOverlap(
    [a_x, a_y, a_w, a_h]: Box,
    [b_x, b_y, b_w, b_h]: Box,
): boolean {
    return (
        a_x < b_x + b_w && a_x + a_w > b_x && a_y < b_y + b_h && a_y + a_h > b_y
    );
}

function validateNoOverlap(box: Box, check_boxes: Box[]): boolean {
    return !check_boxes.find((check) => boxesOverlap(box, check));
}

@Component({
    selector: 'locker-modal',
    template: `
        <div class="w-lg">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.LOCKERS_EDIT'
                            : 'APP.CONCIERGE.LOCKERS_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close aria-label="Close dialog">
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            [placeholder]="'FORM.NAME' | translate"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="user">{{
                        'APP.CONCIERGE.USER_ASSIGNED' | translate
                    }}</label>
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="
                                form.patchValue({
                                    assigned_user: null,
                                    assigned_to: null,
                                    assigned_name: null,
                                })
                            "
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <div class="mb-4 flex space-x-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="
                                'APP.CONCIERGE.LOCKERS_ACCESSIBLE' | translate
                            "
                            formControlName="accessible"
                        ></settings-toggle>
                        <settings-toggle
                            class="flex-1"
                            [name]="'COMMON.BOOKABLE' | translate"
                            formControlName="bookable"
                        ></settings-toggle>
                    </div>
                    <div class="mb-1 flex space-x-4">
                        <div class="flex-1">
                            <label for="row">Start Column</label>
                            <a-counter
                                [ngModel]="form.value.position[0] + 1"
                                (ngModelChange)="
                                    form.patchValue({
                                        position: [
                                            $event - 1,
                                            form.value.position[1],
                                        ],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="255"
                            ></a-counter>
                        </div>
                        <div class="flex-1">
                            <label for="column">Start Row</label>
                            <a-counter
                                [ngModel]="form.value.position[1] + 1"
                                (ngModelChange)="
                                    form.patchValue({
                                        position: [
                                            form.value.position[0],
                                            $event - 1,
                                        ],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="bank?.height"
                            ></a-counter>
                        </div>
                    </div>
                    <div
                        class="text-error mb-4 text-xs"
                        [class.opacity-100]="form.get('position').invalid"
                        [class.opacity-0]="!form.get('position').invalid"
                    >
                        {{
                            'APP.CONCIERGE.LOCKERS_POSITION_INVALID' | translate
                        }}
                    </div>
                    <div class="mb-1 flex space-x-4">
                        <div class="flex-1">
                            <label for="row">{{
                                'COMMON.WIDTH' | translate
                            }}</label>
                            <a-counter
                                [ngModel]="form.value.size[0]"
                                (ngModelChange)="
                                    form.patchValue({
                                        size: [$event, form.value.size[1]],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="10"
                                [render_fn]="render_fn"
                            ></a-counter>
                        </div>
                        <div class="flex-1">
                            <label for="column">{{
                                'COMMON.HEIGHT' | translate
                            }}</label>
                            <a-counter
                                [ngModel]="form.value.size[1]"
                                (ngModelChange)="
                                    form.patchValue({
                                        size: [form.value.size[0], $event],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="
                                    (bank?.height || 10) -
                                    form.value.position[1]
                                "
                                [render_fn]="render_fn"
                            ></a-counter>
                        </div>
                    </div>
                    <div
                        class="text-error mb-4 text-xs"
                        [class.opacity-100]="form.get('size').invalid"
                        [class.opacity-0]="!form.get('size').invalid"
                    >
                        {{ 'APP.CONCIERGE.LOCKERS_SIZE_INVALID' | translate }}
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <mat-label>{{ 'FORM.NOTES' | translate }}</mat-label>
                        <textarea
                            matInput
                            name="notes"
                            formControlName="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <label for="features">
                        {{ 'COMMON.FEATURES' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-label>{{ 'COMMON.FEATURES' | translate }}</mat-label>
                        <mat-chip-grid
                            name="features"
                            #chipList
                            aria-label="Tag List"
                        >
                            @for (item of tag_list; track item) {
                                <mat-chip-row (removed)="removeTag(item)">
                                    <div class="max-w-md truncate">
                                        {{ item }}
                                    </div>
                                    <button
                                        matChipRemove
                                        [attr.aria-label]="
                                            'COMMON.ITEM_REMOVE' | translate
                                        "
                                    >
                                        <icon>cancel</icon>
                                    </button>
                                </mat-chip-row>
                            }
                        </mat-chip-grid>
                        <input
                            [placeholder]="'COMMON.FEATURES' | translate"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addTag($event)"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.LOCKERS_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
        CounterComponent,
        FormsModule,
        ReactiveFormsModule,
        SettingsToggleComponent,
        MatTooltipModule,
        UserSearchFieldComponent,
    ],
})
export class LockerModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        locker?: Locker;
        bank: LockerBank;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<LockerModalComponent>>(MatDialogRef);

    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;

    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    public readonly render_fn = (v) => `${v}u`;

    private _locker_bounds = [];

    public get bank() {
        return this._data.bank;
    }

    public get locker() {
        return this._data.locker;
    }

    public get id() {
        return this.locker?.id || '';
    }

    public readonly addTag = (e) =>
        addChipItem(this.form.controls.features as any, e);
    public readonly removeTag = (i) =>
        removeChipItem(this.form.controls.features as any, i);

    public get tag_list(): string[] {
        return this.form.controls.features.value;
    }

    public readonly form: FormGroup = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        assigned_user: new FormControl<User>(null),
        assigned_to: new FormControl(''),
        assigned_name: new FormControl(''),
        position: new FormControl([0, 0], [(e) => this.validatePosition(e)]),
        size: new FormControl([1, 1], [(e) => this.validateSize(e)]),
        notes: new FormControl(''),
        accessible: new FormControl(false),
        bookable: new FormControl(false),
        features: new FormControl([]),
    });

    constructor() {
        super();
        const _data = this._data;

        this._locker_bounds = this._lockerBounds();
        if (_data.locker) this.form.patchValue(_data.locker);
    }

    public async ngOnInit() {
        this.subscription(
            'pos_change',
            this.form.controls.position.valueChanges.subscribe(() => {
                this.timeout(
                    'changed',
                    () =>
                        this.form.controls.size.patchValue(
                            this.form.controls.size.value,
                        ),
                    50,
                );
            }),
        );
        if (this.locker?.assigned_to) {
            const user = await showStaff(this.locker.assigned_to).toPromise();
            if (user) {
                this.form.patchValue({
                    assigned_user: user,
                    assigned_to: user.email,
                    assigned_name: user.name,
                });
            }
        }
    }

    public validatePosition(control: AbstractControl) {
        const [x, y] = control.value;
        return validateNoOverlap([x, y, 1, 1], this._locker_bounds)
            ? null
            : { position: true };
    }

    public validateSize(control: AbstractControl) {
        const [x, y] = this.form?.value?.position || [0, 0];
        const [w, h] = control.value;
        return validateNoOverlap([x, y, w, h], this._locker_bounds)
            ? null
            : { position: true };
    }

    public postForm() {
        if (!this.form.valid) return;
        this.loading = true;
        const value = { ...this.form.getRawValue() };
        if (value.assigned_user) {
            value.assigned_to = value.assigned_user.email;
            value.assigned_name = value.assigned_user.name;
            delete value.assigned_user;
        } else {
            delete value.assigned_to;
            delete value.assigned_name;
        }
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }

    private _lockerBounds(): Box[] {
        const list = [];
        for (const locker of this.bank.lockers || []) {
            if (locker.id !== this.locker?.id) {
                list.push([
                    locker.position[0],
                    locker.position[1],
                    locker.size[0],
                    locker.size[1],
                ]);
            }
        }
        return list;
    }
}
