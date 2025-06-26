import { Component, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    randomString,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { EmergencyContact } from './emergency-contacts.component';

@Component({
    selector: 'emergency-contact-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (contact
                        ? 'APP.CONCIERGE.CONTACTS_EDIT'
                        : 'APP.CONCIERGE.CONTACTS_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="w-[36rem] p-4">
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
                        <label for="name">{{
                            'RESOURCE.LEVEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="zone"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            >
                                <mat-option value="">{{
                                    'COMMON.LEVEL_ALL' | translate
                                }}</mat-option>
                                @for (level of levels | async; track level) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="email">{{
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
                                    @for (
                                        role of (data | async)?.roles || [];
                                        track role
                                    ) {
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
        @if (!loading) {
            <footer
                class="flex items-center justify-end border-t border-base-200 px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <ng-template #role_form>
            <div class="rounded bg-base-100 p-4">
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
    standalone: false,
})
export class EmergencyContactModalComponent {
    private _data = inject<EmergencyContact | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref = inject<MatDialogRef<EmergencyContactModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);

    private _changes = new BehaviorSubject(0);

    public loading = false;
    public role_name: string;
    public readonly contact?: EmergencyContact = this._data;
    public readonly data = combineLatest([
        this._org.active_building,
        this._changes,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) => showMetadata(bld.id, 'emergency_contacts')),
        map(({ details }) => (details as any) || { roles: [], contacts: [] }),
        shareReplay(1),
    );
    public readonly form = new FormGroup({
        id: new FormControl(this._data?.id || `contact-${randomString(8)}`),
        name: new FormControl(this._data?.name || ''),
        email: new FormControl(this._data?.email || ''),
        phone: new FormControl(this._data?.phone || ''),
        zone: new FormControl(this._data?.zone || ''),
        roles: new FormControl(this._data?.roles || []),
    });
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;

    @ViewChild(CustomTooltipComponent) private _tooltip: CustomTooltipComponent;

    public async addRole() {
        if (!this.role_name) return;
        this._tooltip.close();
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data: any = await nextValueFrom(this.data);
        await updateMetadata(this._org.building.id, {
            name: 'emergency_contacts',
            description: 'Emergency Contacts',
            details: {
                roles: [...(data.roles || []), this.role_name].filter(
                    (_) => !!_,
                ),
                contacts: data.contacts,
            },
        }).toPromise();
        this._changes.next(0);
        this.form.patchValue({
            roles: [...(this.form.value.roles || []), this.role_name],
        });
        this.role_name = '';
        this.loading = false;
        this._dialog_ref.disableClose = false;
    }

    public setUser(user: any) {
        this.form.patchValue({
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
        });
    }

    public async save() {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data: any = await nextValueFrom(this.data);
        const contacts = data?.contacts || [];
        const new_contacts = [
            ...contacts.filter((_) => _.id !== this.contact?.id),
            this.form.value,
        ].sort((a, b) => a.name.localeCompare(b.name));
        await updateMetadata(this._org.building.id, {
            name: 'emergency_contacts',
            description: 'Emergency Contacts',
            details: { roles: data.roles || [], contacts: new_contacts },
        })
            .toPromise()
            .catch((e) => {
                this._dialog_ref.disableClose = false;
                this.loading = false;
                notifyError(
                    i18n('APP.CONCIERGE.CONTACTS_SAVE_ERROR', { error: e }),
                );
                throw e;
            });
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('APP.CONCIERGE.CONTACTS_SAVE_SUCCESS'));
        this.loading = false;
        this._dialog_ref.close();
    }
}
