import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required, validate } from '@angular/forms/signals';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
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
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="flex max-h-[65vh] flex-col overflow-auto p-4">
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
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
                            [formField]="form.assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="clearUser()"
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <div class="mb-4 flex space-x-4">
                        <settings-toggle
                            class="flex-1"
                            [label]="
                                'APP.CONCIERGE.LOCKERS_ACCESSIBLE' | translate
                            "
                            [formField]="form.accessible"
                        ></settings-toggle>
                        <settings-toggle
                            class="flex-1"
                            [label]="'COMMON.BOOKABLE' | translate"
                            [formField]="form.bookable"
                        ></settings-toggle>
                    </div>
                    <div class="mb-1 flex space-x-4">
                        <div class="flex-1">
                            <label for="row">Start Column</label>
                            <a-counter
                                [ngModel]="model().position[0] + 1"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        position: [$event - 1, m.position[1]],
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="255"
                            ></a-counter>
                        </div>
                        <div class="flex-1">
                            <label for="column">Start Row</label>
                            <a-counter
                                [ngModel]="model().position[1] + 1"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        position: [m.position[0], $event - 1],
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="bank?.height"
                            ></a-counter>
                        </div>
                    </div>
                    <div
                        class="text-error mb-4 text-xs"
                        [class.opacity-100]="form.position().invalid()"
                        [class.opacity-0]="!form.position().invalid()"
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
                                [ngModel]="model().size[0]"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        size: [$event, m.size[1]],
                                    }))
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
                                [ngModel]="model().size[1]"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        size: [m.size[0], $event],
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="(bank?.height || 10) - model().position[1]"
                                [render_fn]="render_fn"
                            ></a-counter>
                        </div>
                    </div>
                    <div
                        class="text-error mb-4 text-xs"
                        [class.opacity-100]="form.size().invalid()"
                        [class.opacity-0]="!form.size().invalid()"
                    >
                        {{ 'APP.CONCIERGE.LOCKERS_SIZE_INVALID' | translate }}
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [formField]="form.notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <label for="features">
                        {{ 'COMMON.FEATURES' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
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
    changeDetection: ChangeDetectionStrategy.Eager,
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
        FormField,
        SettingsToggleComponent,
        MatTooltipModule,
        UserSearchFieldComponent,
        MatDialogModule,
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
    public readonly loading = signal(false);

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

    public readonly addTag = (e) => addChipItem(this._features_control as any, e);
    public readonly removeTag = (i) =>
        removeChipItem(this._features_control as any, i);

    public get tag_list(): string[] {
        return this.model().features;
    }

    public readonly model = signal({
        id: '',
        name: '',
        assigned_user: null as User | null,
        assigned_to: '',
        assigned_name: '',
        position: [0, 0] as number[],
        size: [1, 1] as number[],
        notes: '',
        accessible: false,
        bookable: false,
        features: [] as string[],
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
        validate(p.position, ({ value }) => {
            const [x, y] = value();
            return validateNoOverlap([x, y, 1, 1], this._locker_bounds)
                ? undefined
                : { kind: 'position' };
        });
        // Depends on `position` via valueOf, so size re-validates whenever the
        // position changes — no manual re-trigger needed.
        validate(p.size, ({ value, valueOf }) => {
            const [x, y] = valueOf(p.position) || [0, 0];
            const [w, h] = value();
            return validateNoOverlap([x, y, w, h], this._locker_bounds)
                ? undefined
                : { kind: 'position' };
        });
    });

    private get _features_control() {
        return {
            value: this.model().features,
            setValue: (value: string[]) =>
                this.model.update((m) => ({ ...m, features: value })),
        };
    }

    constructor() {
        super();
        const data = this._data.locker as any;
        this._locker_bounds = this._lockerBounds();
        if (data) {
            this.model.update((m) => ({
                ...m,
                id: data.id ?? m.id,
                name: data.name ?? m.name,
                assigned_to: data.assigned_to ?? m.assigned_to,
                assigned_name: data.assigned_name ?? m.assigned_name,
                position: data.position ?? m.position,
                size: data.size ?? m.size,
                notes: data.notes ?? m.notes,
                accessible: data.accessible ?? m.accessible,
                bookable: data.bookable ?? m.bookable,
                features: data.features ?? m.features,
            }));
        }
    }

    public async ngOnInit() {
        if (this.locker?.assigned_to) {
            const user = await showStaff(this.locker.assigned_to);
            if (user) {
                this.model.update((m) => ({
                    ...m,
                    assigned_user: user,
                    assigned_to: user.email,
                    assigned_name: user.name,
                }));
            }
        }
    }

    public clearUser() {
        this.model.update((m) => ({
            ...m,
            assigned_user: null,
            assigned_to: '',
            assigned_name: '',
        }));
    }

    public postForm() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        const value: any = { ...this.model() };
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
