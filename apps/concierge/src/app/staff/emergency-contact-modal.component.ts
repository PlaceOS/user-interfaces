import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmergencyContact } from './emergency-contacts.component';
import { FormControl, FormGroup } from '@angular/forms';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap, take } from 'rxjs/operators';
import { notifySuccess, randomString } from '@placeos/common';
import { CustomTooltipComponent } from '@placeos/components';

@Component({
    selector: 'emergency-contact-modal',
    template: `
        <header>
            <h2>{{ contact ? 'Edit' : 'New' }} Emergency Contact</h2>
            <div class="flex-1 w-0"></div>
            <button icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-4 w-[36rem]" *ngIf="!loading; else load_state">
            <form [formGroup]="form" class="space-y-4">
                <a-user-search-field
                    ngModel
                    (ngModelChange)="setUser($event)"
                    [ngModelOptions]="{ standalone: true }"
                    class="mb-4"
                ></a-user-search-field>
                <div class="flex flex-col">
                    <label for="name">Name:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="name"
                            placeholder="Full name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex flex-col flex-1">
                        <label for="email">Email:</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="email"
                                type="email"
                                placeholder="Email address"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col flex-1">
                        <label for="email">Phone:</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="phone"
                                type="tel"
                                placeholder="Emergency contact number"
                            />
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="name">Level:</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            formControlName="zone"
                            placeholder="All Levels"
                        >
                            <mat-option value="">All Levels</mat-option>
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
                    <label for="email">Roles:</label>
                    <div class="flex items-center space-x-2">
                        <mat-form-field
                            class="no-subscript flex-1"
                            appearance="outline"
                        >
                            <mat-select
                                multiple
                                formControlName="roles"
                                placeholder="Select roles"
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
                            <div class="pr-2">Add New Role</div>
                        </button>
                    </div>
                </div>
            </form>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-center items-center p-2 border-t border-base-200"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main
                loading
                class="h-64 flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Saving contact details...</p>
            </main>
        </ng-template>
        <ng-template #role_form>
            <div class="bg-base-100 p-4 rounded ">
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [(ngModel)]="role_name"
                        placeholder="Role name"
                    />
                </mat-form-field>
                <button btn matRipple class="w-full" (click)="addRole()">
                    Save Role
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
        shareReplay(1)
    );
    public readonly form = new FormGroup({
        id: new FormControl(this._data?.id || `ecntct-${randomString(8)}`),
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
        private _org: OrganisationService
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
                    (_) => !!_
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
        }).toPromise();
        this._dialog_ref.disableClose = true;
        notifySuccess('Successfully updated emergency contacts.');
        this.loading = false;
        this._dialog_ref.close();
    }
}
