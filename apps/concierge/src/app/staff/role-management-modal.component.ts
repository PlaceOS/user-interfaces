import { CommonModule } from '@angular/common';
import { Component, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.CONTACTS_ROLES_MANAGE' | translate }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        <main class="h-128 max-h-[65vh] min-w-md overflow-y-auto">
            @for (role of roles(); track role + $index) {
                <div
                    class="hover:bg-base-200:bg-base-300 border-base-200 m-2 flex items-center space-x-2 rounded-sm border p-2"
                >
                    <div class="flex-1 truncate px-2">{{ role }}</div>
                    <button
                        icon
                        matRipple
                        class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                        (click)="active.set(role); role_name.set(role)"
                        customTooltip
                        [content]="role_form"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="border-error text-error h-12 w-12 rounded-sm border"
                        (click)="removeRole(role)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            }
        </main>
        <footer class="border-base-200 border-t">
            <button
                btn
                matRipple
                class="m-2 flex w-[calc(100%-1rem)] items-center justify-center space-x-2"
                customTooltip
                (click)="active.set(''); role_name.set('')"
                [content]="role_form"
            >
                <div class="truncate pl-2">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_ADD' | translate }}
                </div>
                <icon class="text-2xl">add</icon>
            </button>
        </footer>
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

    public readonly active = signal('');
    public readonly role_name = signal('');
    public readonly loading = signal(false);
    public readonly roles = toSignal(this._contacts_service.roles$, {
        initialValue: [],
    });

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    public async removeRole(role: string): Promise<void> {
        if (!role) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        await this._contacts_service.removeRole(role);
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
    }

    public async updateRoles(): Promise<void> {
        const role_name = this.role_name().trim();
        if (!role_name) return;
        this.loading.set(true);
        this._tooltip().close();
        this._dialog_ref.disableClose = true;
        if (this.active()) {
            // Renaming an existing role
            await this._contacts_service.renameRole(this.active(), role_name);
        } else {
            // Adding a new role
            await this._contacts_service.addRole(role_name);
        }
        this.role_name.set('');
        this.active.set('');
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
    }
}
