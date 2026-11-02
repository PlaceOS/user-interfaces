import { Component, computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n } from '@placeos/common';
import { PlaceGroupZone } from '@placeos/ts-client';
import { dialogClosed } from '../signage-service.util';
import { SignageGroupAdminService } from './signage-group-admin.service';
import { SignageGroupMembersComponent } from './signage-group-members.component';
import { SignageGroupPermissionsModalComponent } from './signage-group-permissions-modal.component';
import { SignageGroupZoneSelectModalComponent } from './signage-group-zone-select-modal.component';

@Component({
    selector: 'signage-group-zones',
    template: `
        <signage-group-members
            kind="zones"
            [members]="members()"
            [loading]="loading()"
            [failed]="failed()"
            (add)="addZone()"
            (edit)="editZonePermissions($event)"
            (remove)="removeZone($event)"
        />
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [SignageGroupMembersComponent],
})
export class SignageGroupZonesComponent {
    private readonly _group_admin = inject(SignageGroupAdminService);
    private readonly _dialog = inject(MatDialog);

    public readonly zones = this._group_admin.managed_group_zones;
    public readonly loading = this._group_admin.managed_group_zones_loading;
    public readonly failed = this._group_admin.managed_group_zones_failed;
    public readonly members = computed(() =>
        this.zones().map((row) => ({
            id: row.zone_id,
            name: row.zone?.display_name || row.zone?.name || row.zone_id,
            deny: row.deny,
            permissions: row.permissions,
            row,
        })),
    );

    public async addZone() {
        const zone = await dialogClosed(
            this._dialog.open(SignageGroupZoneSelectModalComponent, {
                data: {
                    exclude_ids: this.zones().map((item) => item.zone_id),
                },
                panelClass: 'mobile-fullscreen',
            }),
        );
        if (zone) await this._group_admin.addManagedGroupZone(zone);
    }

    public async editZonePermissions(row: PlaceGroupZone) {
        const result = await dialogClosed(
            this._dialog.open(SignageGroupPermissionsModalComponent, {
                data: {
                    title: i18n('SIGNAGE_MANAGER.ZONE_PERMISSIONS'),
                    permissions: row.permissions,
                    deny: row.deny,
                    show_deny: true,
                },
            }),
        );
        if (result) {
            await this._group_admin.updateManagedGroupZone(
                row,
                result.permissions,
                result.deny,
            );
        }
    }

    public removeZone(row: PlaceGroupZone) {
        this._group_admin.removeManagedGroupZone(row);
    }
}
