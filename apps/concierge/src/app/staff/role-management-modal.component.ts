import { CommonModule } from '@angular/common';
import { Component, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { EmergencyContactsService } from './emergency-contacts.service';

@Component({
    selector: 'role-management-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.CONTACTS_ROLES_MANAGE' | translate }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        <main class="h-128 max-h-[65vh] min-w-md overflow-y-auto">
            @for (role of roles | async; track role + $index) {
                <div
                    class="hover:bg-base-200:bg-base-300 m-2 flex items-center space-x-2 rounded-sm border border-base-200 p-2"
                >
                    <div class="flex-1 truncate px-2">{{ role }}</div>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-sm border border-secondary text-secondary"
                        (click)="active = role; role_name = role"
                        customTooltip
                        [content]="role_form"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-sm border border-error text-error"
                        (click)="removeRole(role)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            }
        </main>
        <footer class="border-t border-base-200">
            <button
                btn
                matRipple
                class="m-2 flex w-[calc(100%-1rem)] items-center justify-center space-x-2"
                customTooltip
                (click)="active = ''; role_name = ''"
                [content]="role_form"
            >
                <div class="truncate pl-2">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_ADD' | translate }}
                </div>
                <icon class="text-2xl">add</icon>
            </button>
        </footer>
        <ng-template #role_form>
            <div class="rounded-sm bg-base-100 p-4">
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [(ngModel)]="role_name"
                        [placeholder]="
                            'APP.CONCIERGE.CONTACTS_ROLES_NAME' | translate
                        "
                    />
                </mat-form-field>
                <button btn matRipple class="w-full" (click)="updateRoles()">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_SAVE' | translate }}
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        IconComponent,
        CustomTooltipComponent,
    ],
})
export class RoleManagementModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<RoleManagementModalComponent>>(MatDialogRef);
    private _contacts_service = inject(EmergencyContactsService);

    public active: string;
    public role_name: string;
    public loading = false;
    public readonly roles = this._contacts_service.roles$;

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    public async removeRole(role: string): Promise<void> {
        if (!role) return;
        this.loading = true;
        this._dialog_ref.disableClose = true;
        await this._contacts_service.removeRole(role);
        this.loading = false;
        this._dialog_ref.disableClose = false;
    }

    public async updateRoles(): Promise<void> {
        if (!this.role_name) return;
        this.loading = true;
        this._tooltip().close();
        this._dialog_ref.disableClose = true;
        if (this.active) {
            // Renaming an existing role
            await this._contacts_service.renameRole(
                this.active,
                this.role_name,
            );
        } else {
            // Adding a new role
            await this._contacts_service.addRole(this.role_name);
        }
        this.role_name = '';
        this.active = '';
        this.loading = false;
        this._dialog_ref.disableClose = false;
    }
}
