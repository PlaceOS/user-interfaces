import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEvent } from '@placeos/common';
import { Desk } from '@placeos/organisation';
import { User } from '@placeos/users';

@Component({
    selector: 'desk-modal',
    template: `
        <div class="w-[28rem]">
            <header
                class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium px-2">
                    {{
                        (id
                            ? 'APP.CONCIERGE.DESKS_EDIT'
                            : 'APP.CONCIERGE.DESKS_NEW'
                        ) | translate
                    }}
                </h2>
                <button icon matRipple mat-dialog-close *ngIf="!loading">
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                *ngIf="!loading; else load_state"
                class="p-4 flex flex-col max-h-[65vh] overflow-auto"
                [formGroup]="form"
            >
                <div class="flex space-x-4">
                    <div class="flex-1 w-1/3">
                        <label for="name">
                            {{ 'APP.CONCIERGE.DESKS_NAME' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="name"
                                formControlName="name"
                                placeholder="e.g. Office Desk"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1 w-1/3">
                        <label for="map-id">
                            {{ 'EXPLORE.MAP_ID' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="map-id"
                                formControlName="map_id"
                                [placeholder]="
                                    'APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER'
                                        | translate
                                "
                            />
                            <mat-error>
                                {{ 'EXPLORE.MAP_ID_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <label for="user">{{
                    'APP.CONCIERGE.USER_ASSIGNED' | translate
                }}</label>
                <div class="flex items-center space-x-2 mb-4">
                    <a-user-search-field
                        name="user"
                        formControlName="assigned_user"
                        class="flex-1"
                    ></a-user-search-field>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 min-w-12 rounded bg-secondary text-secondary-content"
                        [matTooltip]="'APP.CONCIERGE.USER_CLEAR' | translate"
                        (click)="
                            form.patchValue({
                                assigned_user: null,
                                assigned_to: null,
                                assigned_name: null,
                            })
                        "
                    >
                        <app-icon className="material-symbols-outlined">
                            person_cancel
                        </app-icon>
                    </button>
                </div>
                <div class="flex pb-4 space-x-4">
                    <settings-toggle
                        formControlName="bookable"
                        class="flex-1"
                        [name]="'COMMON.BOOKABLE' | translate"
                    >
                    </settings-toggle>
                    <div class="flex-1"></div>
                </div>
                <label for="notes">{{ 'COMMON.GROUPS' | translate }}</label>
                <item-list-field
                    class="w-full"
                    [placeholder]="'BOOKINGS.GROUPS' | translate"
                    formControlName="groups"
                ></item-list-field>
                <label for="notes">{{ 'COMMON.FEATURES' | translate }}</label>
                <item-list-field
                    class="w-full"
                    [placeholder]="'COMMON.FEATURES' | translate"
                    formControlName="features"
                ></item-list-field>
                <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="notes"
                        formControlName="notes"
                    ></textarea>
                </mat-form-field>
            </main>
            <footer
                class="flex items-center justify-end space-x-2 px-4 py-2 border-t border-base-300"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main
                class="p-8 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.DESKS_SAVING' | translate }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class DeskModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;

    public get id(): string {
        return this._data?.desk?.id || '';
    }

    public readonly form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        map_id: new FormControl('', [Validators.required]),
        groups: new FormControl<string[]>([]),
        features: new FormControl<string[]>([]),
        bookable: new FormControl(false),
        notes: new FormControl(''),
        assigned_user: new FormControl<User>(null),
        assigned_to: new FormControl(''),
        assigned_name: new FormControl(''),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { desk?: Desk },
        private _dialog_ref: MatDialogRef<DeskModalComponent>,
    ) {
        if (_data?.desk) this.form.patchValue(_data.desk);
    }

    public postForm() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
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
}
