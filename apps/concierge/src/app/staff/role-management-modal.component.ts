import { Component, inject, viewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { nextValueFrom } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
    selector: 'role-management-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
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
        <main class="h-[32rem] max-h-[65vh] min-w-[28rem] overflow-y-auto">
            @for (role of roles | async; track role + $index) {
                <div
                    class="hover:bg-base-200:bg-base-300 m-2 flex items-center space-x-2 rounded border border-base-200 p-2"
                >
                    <div class="flex-1 truncate px-2">{{ role }}</div>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded border border-secondary text-secondary"
                        (click)="active = role; role_name = role"
                        customTooltip
                        [content]="role_form"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded border border-error text-error"
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
                <button btn matRipple class="w-full" (click)="updateRoles()">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_SAVE' | translate }}
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class RoleManagementModalComponent {
    private _org = inject(OrganisationService);
    private _dialog_ref =
        inject<MatDialogRef<RoleManagementModalComponent>>(MatDialogRef);

    private _changes = new BehaviorSubject(0);

    public active: string;
    public role_name: string;
    public loading = false;
    public readonly data = combineLatest([
        this._org.active_building,
        this._changes,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) => showMetadata(bld.id, 'emergency_contacts')),
        map(({ details }) => {
            const value = (details as any) || { roles: [], contacts: [] };
            if (!value.roles) value.roles = [];
            if (!value.contacts) value.contacts = [];
            return value;
        }),
        shareReplay(1),
    );
    public readonly roles = this.data.pipe(map((_) => _.roles));

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    public async removeRole(role: string) {
        if (!role) return;
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data: any = await nextValueFrom(this.data);
        await updateMetadata(this._org.building.id, {
            name: 'emergency_contacts',
            description: 'Emergency Contacts',
            details: {
                roles: [...data.roles.filter((_) => _ !== role)]
                    .filter((_) => !!_)
                    .sort((a, b) => a.localeCompare(b)),
                contacts: data.contacts.map((_) => ({
                    ..._,
                    roles: _.roles.filter((r) => r !== role),
                })),
            },
        }).toPromise();
        this._changes.next(0);
        this.loading = false;
        this._dialog_ref.disableClose = false;
    }

    public async updateRoles() {
        if (!this.role_name) return;
        this.loading = true;
        this._tooltip().close();
        this._dialog_ref.disableClose = true;
        const data: any = await nextValueFrom(this.data);
        await updateMetadata(this._org.building.id, {
            name: 'emergency_contacts',
            description: 'Emergency Contacts',
            details: {
                roles: [
                    ...data.roles.filter((_) => _ !== this.active),
                    this.role_name,
                ]
                    .filter((_) => !!_)
                    .sort((a, b) => a.localeCompare(b)),
                contacts: data.contacts,
            },
        }).toPromise();
        this._changes.next(0);
        this.role_name = '';
        this.active = '';
        this.loading = false;
        this._dialog_ref.disableClose = false;
    }
}
