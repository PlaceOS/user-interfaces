import { Clipboard } from '@angular/cdk/clipboard';

import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { notifySuccess, OrganisationService } from '@placeos/common';
import {
    IconComponent,
    LevelPipe,
    openConfirmModal,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { EmergencyContactModalComponent } from './emergency-contact-modal.component';
import {
    EmergencyContact,
    EmergencyContactsService,
} from './emergency-contacts.service';
import { RoleManagementModalComponent } from './role-management-modal.component';

export { EmergencyContact } from './emergency-contacts.service';

@Component({
    selector: '[app-emergency-contacts]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <section topbar class="flex flex-col px-8 py-4">
                    <div class="flex items-center justify-between">
                        <h2 class="text-2xl font-medium">
                            {{ 'APP.CONCIERGE.CONTACTS_HEADER' | translate }}
                        </h2>
                        <div class="flex items-center space-x-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <icon class="text-2xl" matPrefix> search </icon>
                                <input
                                    matInput
                                    [(ngModel)]="search"
                                    [placeholder]="
                                        'APP.CONCIERGE.CONTACTS_FILTER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                class="space-x-2"
                                (click)="editContact()"
                            >
                                <icon class="text-2xl">add</icon>
                                <div class="pr-2">
                                    {{
                                        'APP.CONCIERGE.CONTACTS_ADD' | translate
                                    }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="mt-2 flex items-center justify-between py-2">
                        <mat-form-field
                            class="no-subscript"
                            appearance="outline"
                        >
                            <mat-select
                                [(ngModel)]="role_filter"
                                [placeholder]="
                                    'APP.CONCIERGE.CONTACTS_ROLES_ALL'
                                        | translate
                                "
                            >
                                <mat-option value="">{{
                                    'APP.CONCIERGE.CONTACTS_ROLES_ALL'
                                        | translate
                                }}</mat-option>
                                @for (role of roles(); track role + $index) {
                                    <mat-option [value]="role">
                                        {{ role }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <div class="flex items-center space-x-2">
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="
                                    'APP.CONCIERGE.CONTACTS_ROLES_MANAGE'
                                        | translate
                                "
                                (click)="manageRoles()"
                            >
                                <icon>list_alt</icon>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="h-1/2 w-full flex-1 overflow-auto px-8">
                    <simple-table
                        class="block min-w-208 text-sm"
                        [data]="filtered_contacts()"
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
                                name:
                                    'APP.CONCIERGE.CONTACTS_ROLES' | translate,
                                content: roles_template,
                                sortable: false,
                            },
                            {
                                key: 'zone',
                                name: 'RESOURCE.LEVEL' | translate,
                                content: zone_template,
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
                                    class="bg-info text-info-content m-1 rounded-2xl px-2 py-1 font-mono text-xs"
                                >
                                    {{ role }}
                                </span>
                            }
                        </div>
                    </ng-template>
                    <ng-template #zone_template let-data="data">
                        <div class="p-4">
                            {{ data ? (data | level)?.display_name : 'All' }}
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-row="row">
                        <div
                            class="flex w-full items-center justify-end space-x-2 p-2"
                        >
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    'APP.CONCIERGE.CONTACTS_EDIT' | translate
                                "
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
                background-color: var(--base-100);
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
        SimpleTableComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        FormsModule,
        TranslatePipe,
        LevelPipe,
    ],
})
export class EmergencyContactsComponent implements OnInit {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _contacts_service = inject(EmergencyContactsService);

    public search = '';
    public readonly role_filter = signal('');
    public readonly data$ = this._contacts_service.data$;
    public readonly roles = toSignal(this._contacts_service.roles$, {
        initialValue: [],
    });
    public readonly contacts = toSignal(this._contacts_service.contacts$, {
        initialValue: [],
    });
    public readonly filtered_contacts = computed(() => {
        const role = this.role_filter();
        return this.contacts().filter((_) => !role || _.roles.includes(role));
    });

    public ngOnInit(): void {
        // Check if migration from metadata is needed
        this.checkMigration();
    }

    private async checkMigration(): Promise<void> {
        const needs_migration = await this._contacts_service.needsMigration();
        if (needs_migration) {
            const result = await openConfirmModal(
                {
                    title: 'Migrate Emergency Contacts',
                    content:
                        'Emergency contacts data from the old system was found. Would you like to migrate it to the new system?',
                    icon: { content: 'sync' },
                },
                this._dialog,
            );
            if (result.reason === 'done') {
                result.loading('Migrating contacts...');
                await this._contacts_service.migrateFromMetadata();
                result.close();
            } else {
                result.close();
            }
        }
    }

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess("User's email copied to clipboard.");
    };

    public manageRoles(): void {
        const ref = this._dialog.open(RoleManagementModalComponent, {});
        ref.afterClosed().subscribe(() => this._contacts_service.refresh());
    }

    public editContact(contact?: EmergencyContact): void {
        const ref = this._dialog.open(EmergencyContactModalComponent, {
            data: contact,
        });
        ref.afterClosed().subscribe(() => this._contacts_service.refresh());
    }

    public async removeContact(contact: EmergencyContact): Promise<void> {
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
        await this._contacts_service.deleteContact(contact.id);
        result.close();
    }
}
