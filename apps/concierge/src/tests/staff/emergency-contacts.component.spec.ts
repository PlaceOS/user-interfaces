import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { EmergencyContactsComponent } from '../../app/staff/emergency-contacts.component';
import {
    EmergencyContactModalComponent,
} from '../../app/staff/emergency-contact-modal.component';
import { EmergencyContactsService } from '../../app/staff/emergency-contacts.service';
import { RoleManagementModalComponent } from '../../app/staff/role-management-modal.component';

describe('EmergencyContactsComponent', () => {
    let spectator: SpectatorRouting<EmergencyContactsComponent>;
    const contacts = signal<any[]>([]);
    const dialog = {
        open: jest.fn(() => ({ afterClosed: () => of(true) })),
    };
    const clipboard = { copy: jest.fn(() => true) };
    const service = {
        roles: signal<string[]>(['Fire Warden']),
        contacts,
        refresh: jest.fn(),
        needsMigration: jest.fn(() => Promise.resolve(false)),
        deleteContact: jest.fn(() => Promise.resolve(true)),
    };

    const createComponent = createRoutingFactory({
        component: EmergencyContactsComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EmergencyContactsService, service as any),
            MockProvider(Clipboard, clipboard as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
            } as any),
        ],
    });

    beforeEach(() => {
        clipboard.copy.mockClear();
        service.refresh.mockClear();
        contacts.set([
            { id: '1', name: 'A', email: 'a@x.com', roles: ['Fire Warden'] },
            { id: '2', name: 'B', email: 'b@x.com', roles: ['First Aider'] },
        ]);
        dialog.open.mockClear();
        spectator = createComponent();
        // The component resolves its own MatDialog instance; swap in a mock.
        (spectator.component as any)._dialog = dialog;
    });

    it('should return all contacts when no role filter is set', () => {
        expect(spectator.component.filtered_contacts()).toHaveLength(2);
    });

    it('should filter contacts by the selected role', () => {
        spectator.component.role_filter.set('First Aider');
        const filtered = spectator.component.filtered_contacts();
        expect(filtered).toHaveLength(1);
        expect(filtered[0].name).toBe('B');
    });

    it('should copy an email to the clipboard', () => {
        spectator.component.copyToClipboard('a@x.com');
        expect(clipboard.copy).toHaveBeenCalledWith('a@x.com');
    });

    it('should open the contact editor and refresh on close', () => {
        spectator.component.editContact({ id: '1' } as any);
        expect(dialog.open).toHaveBeenCalledWith(
            EmergencyContactModalComponent,
            { data: { id: '1' } },
        );
        expect(service.refresh).toHaveBeenCalled();
    });

    it('should open the role management modal and refresh on close', () => {
        spectator.component.manageRoles();
        expect(dialog.open).toHaveBeenCalledWith(
            RoleManagementModalComponent,
            {},
        );
        expect(service.refresh).toHaveBeenCalled();
    });
});
