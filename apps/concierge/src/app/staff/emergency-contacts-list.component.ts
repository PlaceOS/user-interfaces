import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    nextValueFrom,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { EmergencyContact } from './emergency-contacts.component';
import { EmergencyContactModalComponent } from './emergency-contact-modal.component';
import { RoleManagementModalComponent } from './role-management-modal.component';

@Component({
    selector: 'emergency-contacts-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
        <section class="flex flex-col sticky left-0">
            <div class="mb-2 flex items-center justify-between space-x-2">
                <mat-form-field class="no-subscript flex-1" appearance="outline">
                    <icon class="text-2xl" matPrefix> search </icon>
                    <input
                        matInput
                        [(ngModel)]="search"
                        [placeholder]="
                            'APP.CONCIERGE.CONTACTS_FILTER' | translate
                        "
                    />
                </mat-form-field>
                <mat-form-field class="no-subscript" appearance="outline">
                    <mat-select
                        [ngModel]="role_filter.getValue()"
                        (ngModelChange)="role_filter.next($event)"
                        [placeholder]="
                            'APP.CONCIERGE.CONTACTS_ROLES_ALL' | translate
                        "
                    >
                        <mat-option value="">{{
                            'APP.CONCIERGE.CONTACTS_ROLES_ALL' | translate
                        }}</mat-option>
                        @for (role of (roles | async) || []; track role + $index) {
                            <mat-option [value]="role">
                                {{ role }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <div class="flex-1 w-px"></div>
                <div class="flex items-center space-x-2">
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded bg-secondary text-secondary-content"
                        [matTooltip]="
                            'APP.CONCIERGE.CONTACTS_ROLES_MANAGE' | translate
                        "
                        (click)="manageRoles()"
                    >
                        <icon>list_alt</icon>
                    </button>
                </div>
            </div>
        </section>
            <simple-table
                class="block min-w-[52rem] text-sm"
                [data]="filtered_contacts"
                [filter]="search"
                [empty_message]="
                    (search
                        ? 'APP.CONCIERGE.CONTACTS_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.CONTACTS_EMPTY'
                    ) | translate
                "
                [columns]="[
                    {
                        key: 'name',
                        name: 'COMMON.PERSON' | translate,
                        content: person_template,
                    },
                    {
                        key: 'roles',
                        name: 'APP.CONCIERGE.CONTACTS_ROLES' | translate,
                        content: roles_template,
                        sortable: false,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        size: '6rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
            <ng-template #person_template let-row="row">
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.email)"
                >
                    <div class="">{{ row.name }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.email }}
                    </div>
                </button>
            </ng-template>
            <ng-template #roles_template let-data="data">
                <div class="flex flex-wrap p-2">
                    @for (role of data; track role) {
                        <span
                            class="m-1 rounded-2xl bg-info px-2 py-1 font-mono text-xs text-info-content"
                        >
                            {{ role }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div
                    class="flex w-full items-center justify-end space-x-2 p-2"
                >
                    <button
                        icon
                        matRipple
                        [matTooltip]="'APP.CONCIERGE.CONTACTS_EDIT' | translate"
                        (click)="editContact(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="text-error"
                        (click)="removeContact(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.CONTACTS_REMOVE' | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
        SimpleTableComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        TranslatePipe,
    ],
})
export class EmergencyContactsListComponent {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);

    private _change = new BehaviorSubject<number>(0);

    public search = '';
    public readonly role_filter = new BehaviorSubject<string>('');
    public readonly data = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) => showMetadata(bld.id, 'emergency_contacts')),
        map(({ details }) => (details as any) || { roles: [], contacts: [] }),
        shareReplay(1),
    );
    public readonly roles = this.data.pipe(map((_) => _?.roles || []));
    public readonly contacts = this.data.pipe(map((_) => _?.contacts || []));
    public readonly filtered_contacts = combineLatest([
        this.contacts,
        this.role_filter,
    ]).pipe(
        map(([list, role]) =>
            list.filter((_) => !role || _.roles.includes(role)),
        ),
    );

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess("User's email copied to clipboard.");
    };

    public manageRoles() {
        const ref = this._dialog.open(RoleManagementModalComponent, {});
        ref.afterClosed().subscribe(() => this._change.next(Date.now()));
    }

    public editContact(contact?: EmergencyContact) {
        const ref = this._dialog.open(EmergencyContactModalComponent, {
            data: contact,
        });
        ref.afterClosed().subscribe(() => this._change.next(Date.now()));
    }

    public async removeContact(contact: EmergencyContact) {
        const result = await openConfirmModal(
            {
                title: 'Remove Emergency Contact',
                content: `Are you sure you want to remove ${contact.name} from the emergency contacts?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading('Removing contact...');
        const data: any = await nextValueFrom(this.data);
        const new_contacts = (data?.contacts || []).filter(
            (_) => _.id !== contact.id,
        );
        await updateMetadata(this._org.building.id, {
            name: 'emergency_contacts',
            description: 'Emergency Contacts',
            details: { roles: data.roles, contacts: new_contacts },
        }).toPromise();
        result.close();
        this._change.next(Date.now());
        notifySuccess('Successfully removed emergency contact.');
    }
}
