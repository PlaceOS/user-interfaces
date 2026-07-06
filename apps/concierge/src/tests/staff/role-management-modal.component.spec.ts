import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MatDialogRef } from '@angular/material/dialog';
import { MockProvider } from 'ng-mocks';

import { RoleManagementModalComponent } from '../../app/staff/role-management-modal.component';
import { EmergencyContactsService } from '../../app/staff/emergency-contacts.service';

describe('RoleManagementModalComponent', () => {
    let spectator: Spectator<RoleManagementModalComponent>;
    let dialog_ref: { disableClose: boolean };
    const service = {
        roles: signal(['Fire Warden']),
        removeRole: vi.fn(() => Promise.resolve(true)),
        renameRole: vi.fn(() => Promise.resolve(true)),
        addRole: vi.fn(() => Promise.resolve(true)),
    };

    const createComponent = createComponentFactory({
        component: RoleManagementModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EmergencyContactsService, service as any),
            {
                provide: MatDialogRef,
                useValue: (dialog_ref = { disableClose: false }),
            },
        ],
    });

    beforeEach(() => {
        service.removeRole.mockClear();
        service.renameRole.mockClear();
        service.addRole.mockClear();
        service.roles.set(['Fire Warden']);
        dialog_ref = { disableClose: false };
        spectator = createComponent({
            providers: [{ provide: MatDialogRef, useValue: dialog_ref }],
        });
        // Stub the tooltip view child used to dismiss the inline form.
        (spectator.component as any)._tooltip = () => ({ close: vi.fn() });
    });

    it('should expose roles from the contacts service', () => {
        expect(spectator.component.roles()).toEqual(['Fire Warden']);
    });

    it('should ignore an empty role name on remove', async () => {
        await spectator.component.removeRole('');
        expect(service.removeRole).not.toHaveBeenCalled();
    });

    it('should remove a role and reset the busy state', async () => {
        await spectator.component.removeRole('Fire Warden');
        expect(service.removeRole).toHaveBeenCalledWith('Fire Warden');
        expect(spectator.component.loading()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
    });

    it('should add a new role when no active role is selected', async () => {
        spectator.component.role_name.set('First Aider');
        await spectator.component.updateRoles();

        expect(service.addRole).toHaveBeenCalledWith('First Aider');
        expect(service.renameRole).not.toHaveBeenCalled();
        expect(spectator.component.role_name()).toBe('');
        expect(spectator.component.active()).toBe('');
    });

    it('should rename the active role when one is selected', async () => {
        spectator.component.active.set('Fire Warden');
        spectator.component.role_name.set('Chief Warden');
        await spectator.component.updateRoles();

        expect(service.renameRole).toHaveBeenCalledWith(
            'Fire Warden',
            'Chief Warden',
        );
        expect(service.addRole).not.toHaveBeenCalled();
    });

    it('should ignore a blank role name on update', async () => {
        spectator.component.role_name.set('   ');
        await spectator.component.updateRoles();
        expect(service.addRole).not.toHaveBeenCalled();
        expect(service.renameRole).not.toHaveBeenCalled();
    });
});
