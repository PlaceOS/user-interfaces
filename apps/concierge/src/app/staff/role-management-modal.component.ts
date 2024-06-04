import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomTooltipComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap, take } from 'rxjs/operators';

@Component({
    selector: 'role-management-modal',
    template: `
        <header>
            <h2>Manage Roles</h2>
            <button btn icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="overflow-y-auto min-w-[20rem] divide-y divide-base-200 max-h-[65vh]"
        >
            <button
                btn
                matRipple
                class="flex items-center justify-center space-x-2 w-[calc(100%-1rem)] m-2"
                customTooltip
                (click)="active = ''; role_name = ''"
                [content]="role_form"
            >
                <div class="truncate">New Role</div>
                <app-icon>add</app-icon>
            </button>
            <ng-container *ngFor="let role of roles | async">
                <div
                    class="flex items-center space-x-2 hover:bg-base-200:bg-base-300 p-2"
                >
                    <div class="flex-1 truncate">{{ role }}</div>
                    <button
                        btn
                        icon
                        matRipple
                        (click)="active = role; role_name = role"
                        customTooltip
                        [content]="role_form"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button btn icon matRipple (click)="removeRole(role)">
                        <app-icon>delete</app-icon>
                    </button>
                </div>
            </ng-container>
        </main>
        <ng-template #role_form>
            <div class="bg-base-100 p-4 rounded ">
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [(ngModel)]="role_name"
                        placeholder="Role name"
                    />
                </mat-form-field>
                <button btn matRipple class="w-full" (click)="updateRoles()">
                    Save Role
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class RoleManagementModalComponent {
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
        shareReplay(1)
    );
    public readonly roles = this.data.pipe(map((_) => _.roles));

    @ViewChild(CustomTooltipComponent) private _tooltip: CustomTooltipComponent;

    public async removeRole(role: string) {
        if (!role) return;
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data: any = await this.data.pipe(take(1)).toPromise();
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
        this._tooltip.close();
        this._dialog_ref.disableClose = true;
        const data: any = await this.data.pipe(take(1)).toPromise();
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

    constructor(
        private _org: OrganisationService,
        private _dialog_ref: MatDialogRef<RoleManagementModalComponent>
    ) {}
}
