import { CommonModule } from '@angular/common';
import { Component, inject, signal, viewChild } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import {
    EmergencyContact,
    EmergencyContactsService,
} from './emergency-contacts.service';

@Component({
    selector: 'emergency-contact-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (contact
                        ? 'APP.CONCIERGE.CONTACTS_EDIT'
                        : 'APP.CONCIERGE.CONTACTS_NEW'
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
            <main class="w-xl p-4">
                <form [formGroup]="form">
                    <a-user-search-field
                        ngModel
                        (ngModelChange)="setUser($event)"
                        [ngModelOptions]="{ standalone: true }"
                        class="mb-4"
                    ></a-user-search-field>
                    <div class="flex flex-col">
                        <label for="name">{{ 'FORM.NAME' | translate }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="name"
                                placeholder="Full name"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex flex-1 flex-col">
                            <label for="email">{{
                                'FORM.EMAIL' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="email"
                                    type="email"
                                    [placeholder]="'FORM.EMAIL' | translate"
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="email">{{
                                'FORM.PHONE' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="phone"
                                    type="tel"
                                    [placeholder]="
                                        'APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="zone">{{
                            'RESOURCE.LEVEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="zone"
                                [placeholder]="
                                    'COMMON.LEVEL_SELECT' | translate
                                "
                            >
                                <mat-option value="">{{
                                    'COMMON.LEVEL_ANY' | translate
                                }}</mat-option>
                                @for (level of levels | async; track level.id) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="roles">{{
                            'APP.CONCIERGE.CONTACTS_ROLES' | translate
                        }}</label>
                        <div class="flex items-center space-x-4">
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <mat-select
                                    multiple
                                    formControlName="roles"
                                    [placeholder]="
                                        'APP.CONCIERGE.CONTACTS_ROLES_SELECT'
                                            | translate
                                    "
                                >
                                    @for (role of roles | async; track $index) {
                                        @if (role) {
                                            <mat-option [value]="role">
                                                {{ role }}
                                            </mat-option>
                                        }
                                    }
                                </mat-select>
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                class="space-x-2"
                                customTooltip
                                [content]="role_form"
                            >
                                <icon>add</icon>
                                <div class="pr-2">
                                    {{
                                        'APP.CONCIERGE.CONTACTS_ROLES_ADD'
                                            | translate
                                    }}
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        } @else {
            <main
                loading
                class="flex h-64 flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.CONTACTS_SAVING' | translate }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-end border-t px-4 py-2"
            >
                <button btn matRipple class="w-48" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <ng-template #role_form>
            <div class="bg-base-100 rounded-sm p-4">
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [(ngModel)]="role_name"
                        [placeholder]="
                            'APP.CONCIERGE.CONTACTS_ROLES_NAME' | translate
                        "
                    />
                </mat-form-field>
                <button btn matRipple class="w-full" (click)="addRole()">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_SAVE' | translate }}
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        CustomTooltipComponent,
        UserSearchFieldComponent,
    ],
})
export class EmergencyContactModalComponent {
    private _data = inject<EmergencyContact | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<EmergencyContactModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _contacts_service = inject(EmergencyContactsService);

    public loading = signal(false);
    public role_name: string;
    public readonly contact?: EmergencyContact = this._data;
    public readonly roles = this._contacts_service.roles$;
    public readonly form = new FormGroup({
        id: new FormControl(
            this._data?.id || this._contacts_service.generateContactId(),
        ),
        name: new FormControl(this._data?.name || ''),
        email: new FormControl(this._data?.email || ''),
        phone: new FormControl(this._data?.phone || ''),
        zone: new FormControl(this._data?.zone || ''),
        roles: new FormControl(this._data?.roles || []),
    });
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    public async addRole(): Promise<void> {
        if (!this.role_name) return;
        this._tooltip().close();
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        await this._contacts_service.addRole(this.role_name);
        this.form.patchValue({
            roles: [...(this.form.value.roles || []), this.role_name],
        });
        this.role_name = '';
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
    }

    public setUser(user: any): void {
        this.form.patchValue({
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
        });
    }

    public async save(): Promise<void> {
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const contact: EmergencyContact = {
            id: this.form.value.id,
            name: this.form.value.name,
            email: this.form.value.email,
            phone: this.form.value.phone,
            zone: this.form.value.zone,
            roles: this.form.value.roles || [],
        };
        const success = await this._contacts_service.saveContact(contact);
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        if (success) {
            this._dialog_ref.close();
        }
    }
}
