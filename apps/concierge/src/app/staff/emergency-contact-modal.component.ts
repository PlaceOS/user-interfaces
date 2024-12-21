import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmergencyContact } from './emergency-contacts.component';
import { FormControl, FormGroup } from '@angular/forms';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap, take } from 'rxjs/operators';
import {
    i18n,
    notifyError,
    notifySuccess,
    randomString,
} from '@placeos/common';
import { CustomTooltipComponent } from '@placeos/components';

@Component({
    selector: 'emergency-contact-modal',
    template: `
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{
                    (contact
                        ? 'APP.CONCIERGE.CONTACTS_EDIT'
                        : 'APP.CONCIERGE.CONTACTS_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-4 w-[36rem]" *ngIf="!loading; else load_state">
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
                    <div class="flex flex-col flex-1">
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
                    <div class="flex flex-col flex-1">
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
                    <label for="name">{{ 'RESOURCE.LEVEL' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            formControlName="zone"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        >
                            <mat-option value="">{{
                                'COMMON.LEVEL_ALL' | translate
                            }}</mat-option>
                            <mat-option
                                *ngFor="let level of levels | async"
                                [value]="level.id"
                            >
                                {{ level.display_name || level.name }}
                            </mat-option>
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
                                <ng-container
                                    *ngFor="
                                        let role of (data | async)?.roles || []
                                    "
                                >
                                    <mat-option *ngIf="role" [value]="role">
                                        {{ role }}
                                    </mat-option>
                                </ng-container>
                            </mat-select>
                        </mat-form-field>
                        <button
                            btn
                            matRipple
                            class="space-x-2"
                            customTooltip
                            [content]="role_form"
                        >
                            <app-icon>add</app-icon>
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
        <footer
            *ngIf="!loading"
            class="flex justify-end items-center px-4 py-2 border-t border-base-200"
        >
            <button btn matRipple class="w-32" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <main
                loading
                class="h-64 flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.CONTACTS_SAVING' | translate }}</p>
            </main>
        </ng-template>
        <ng-template #role_form>
            <div class="bg-base-100 p-4 rounded ">
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
})
export class EmergencyContactModalComponent {
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

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: EmergencyContact | undefined,
        private _dialog_ref: MatDialogRef<EmergencyContactModalComponent>,
        private _org: OrganisationService,
    ) {}

    public async addRole() {
        if (!this.role_name) return;
        this._tooltip.close();
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data: any = await this.data.pipe(take(1)).toPromise();
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
        const data: any = await this.data.pipe(take(1)).toPromise();
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
