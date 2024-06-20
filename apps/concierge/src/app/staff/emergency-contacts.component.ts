import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { filter, map, shareReplay, switchMap, take } from 'rxjs/operators';
import { EmergencyContactModalComponent } from './emergency-contact-modal.component';
import { notify, notifySuccess, openConfirmModal } from '@placeos/common';
import { RoleManagementModalComponent } from './role-management-modal.component';
import { Clipboard } from '@angular/cdk/clipboard';

export interface EmergencyContact {
    id: string;
    email: string;
    name: string;
    phone: string;
    roles: string[];
    zone: string;
}

export interface EmergencyContactData {
    contacts: EmergencyContact[];
    roles: string[];
}

@Component({
    selector: '[app-emergency-contacts]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <section topbar class="px-8 py-4 flex flex-col">
                    <div class="flex items-center justify-between">
                        <h2 class="text-2xl font-medium">Emergency Contacts</h2>
                        <div class="flex items-center space-x-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <app-icon class="text-2xl" matPrefix>
                                    search
                                </app-icon>
                                <input
                                    matInput
                                    [(ngModel)]="search"
                                    placeholder="Filter contacts..."
                                />
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                class="space-x-2"
                                (click)="editContact()"
                            >
                                <app-icon class="text-2xl">add</app-icon>
                                <div class="pr-2">Add Contact</div>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between py-2 mt-2">
                        <mat-form-field
                            class="no-subscript"
                            appearance="outline"
                        >
                            <mat-select
                                [ngModel]="role_filter.getValue()"
                                (ngModelChange)="role_filter.next($event)"
                                placeholder="All Roles"
                            >
                                <mat-option value="">All Roles</mat-option>
                                <mat-option
                                    *ngFor="let role of (roles | async) || []"
                                    [value]="role"
                                >
                                    {{ role }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                        <div class="flex items-center space-x-2">
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 bg-secondary text-secondary-content rounded"
                                matTooltip="Manage Roles"
                                (click)="manageRoles()"
                            >
                                <app-icon>list_alt</app-icon>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="w-full h-1/2 flex-1 overflow-auto px-8">
                    <simple-table
                        class="min-w-[52rem] block text-sm"
                        [data]="filtered_contacts"
                        [filter]="search"
                        [empty_message]="
                            search
                                ? 'No matching contacts'
                                : 'No emergency contacts for this building'
                        "
                        [columns]="[
                            {
                                key: 'name',
                                name: 'Person',
                                content: person_template
                            },
                            {
                                key: 'roles',
                                name: 'Roles',
                                content: roles_template,
                                sortable: false
                            },
                            {
                                key: 'zone',
                                name: 'Zone',
                                content: zone_template,
                                size: '8rem',
                                sortable: false
                            },
                            {
                                key: 'actions',
                                name: ' ',
                                content: actions_template,
                                size: '6rem',
                                sortable: false
                            }
                        ]"
                        [sortable]="true"
                    ></simple-table>
                    <div class="w-full h-12"></div>
                    <ng-template #person_template let-row="row">
                        <button
                            class="px-4 py-2 text-left leading-tight"
                            (click)="copyToClipboard(row.email)"
                        >
                            <div class="">{{ row.name }}</div>
                            <div class="text-[0.625rem] opacity-30 font-mono">
                                {{ row.email }}
                            </div>
                        </button>
                    </ng-template>
                    <ng-template #roles_template let-data="data">
                        <div class="flex flex-wrap p-2">
                            <span
                                class="m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content"
                                *ngFor="let role of data"
                            >
                                {{ role }}
                            </span>
                        </div>
                    </ng-template>
                    <ng-template #zone_template let-data="data">
                        <div class="p-4">
                            {{ data ? (data | level)?.display_name : 'All' }}
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-row="row">
                        <div
                            class="flex items-center justify-end w-full space-x-2 p-2"
                        >
                            <button
                                icon
                                matRipple
                                matTooltip="Edit Emergency Contact"
                                (click)="editContact(row)"
                            >
                                <app-icon>edit</app-icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="text-error"
                                (click)="removeContact(row)"
                                matTooltip="Remove Emergency Contact"
                            >
                                <app-icon>delete</app-icon>
                            </button>
                        </div>
                    </ng-template>
                </section>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }
        `,
    ],
})
export class EmergencyContactsComponent {
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
        shareReplay(1)
    );
    public readonly roles = this.data.pipe(map((_) => _?.roles || []));
    public readonly contacts = this.data.pipe(map((_) => _?.contacts || []));
    public readonly filtered_contacts = combineLatest([
        this.contacts,
        this.role_filter,
    ]).pipe(
        map(([list, role]) =>
            list.filter((_) => !role || _.roles.includes(role))
        )
    );

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess("User's email copied to clipboard.");
    };

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _clipboard: Clipboard
    ) {}

    public ngOnInit() {}

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
            this._dialog
        );
        if (result.reason !== 'done') return;
        result.loading('Removing contact...');
        const data: any = await this.data.pipe(take(1)).toPromise();
        const new_contacts = (data?.contacts || []).filter(
            (_) => _.id !== contact.id
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
