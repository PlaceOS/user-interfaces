import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { EmergencyContactModalComponent } from '../../app/staff/emergency-contact-modal.component';
import { EmergencyContactsService } from '../../app/staff/emergency-contacts.service';

describe('EmergencyContactModalComponent', () => {
    let spectator: Spectator<EmergencyContactModalComponent>;
    let dialog_ref: { close: any; disableClose: boolean };
    const service = {
        roles: signal(['Fire Warden']),
        generateContactId: vi.fn(() => 'contact-generated'),
        addRole: vi.fn(() => Promise.resolve(true)),
        saveContact: vi.fn(() => Promise.resolve(true)),
    };

    const existing_contact = {
        id: 'asset-1',
        name: 'Jane Roe',
        email: 'jane@example.com',
        phone: '123',
        zone: 'level-1',
        roles: ['Fire Warden'],
    };

    const createComponent = createComponentFactory({
        component: EmergencyContactModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, existing_contact),
            MockProvider(EmergencyContactsService, service as any),
            MockProvider(OrganisationService, {
                active_levels: signal([{ id: 'level-1', name: 'Level 1' }]),
            } as any),
            {
                provide: MatDialogRef,
                useValue: (dialog_ref = {
                    close: vi.fn(),
                    disableClose: false,
                }),
            },
        ],
    });

    beforeEach(() => {
        service.addRole.mockClear();
        service.saveContact.mockClear();
        service.saveContact.mockResolvedValue(true);
        service.roles.set(['Fire Warden']);
        dialog_ref = { close: vi.fn(), disableClose: false };
        spectator = createComponent({
            providers: [{ provide: MatDialogRef, useValue: dialog_ref }],
        });
        (spectator.component as any)._tooltip = () => ({ close: vi.fn() });
    });

    it('should seed the model from the provided contact', () => {
        const model = spectator.component.model();
        expect(model.id).toBe('asset-1');
        expect(model.name).toBe('Jane Roe');
        expect(model.email).toBe('jane@example.com');
        expect(model.roles).toEqual(['Fire Warden']);
    });

    it('should copy the selected directory user into the model', () => {
        spectator.component.setUser({
            name: 'New Person',
            email: 'new@example.com',
            phone: '999',
        });
        const model = spectator.component.model();
        expect(model.name).toBe('New Person');
        expect(model.email).toBe('new@example.com');
        expect(model.phone).toBe('999');
    });

    it('should add a new role and append it to the model', async () => {
        spectator.component.role_name.set('First Aider');
        await spectator.component.addRole();

        expect(service.addRole).toHaveBeenCalledWith('First Aider');
        expect(spectator.component.model().roles).toContain('First Aider');
        expect(spectator.component.role_name()).toBe('');
    });

    it('should save the contact and close when successful', async () => {
        await spectator.component.save();

        expect(service.saveContact).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'asset-1', name: 'Jane Roe' }),
        );
        expect(dialog_ref.close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should keep the dialog open when saving fails', async () => {
        service.saveContact.mockResolvedValue(false);
        await spectator.component.save();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
