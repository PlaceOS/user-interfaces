import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import { BroadcastEmailModalComponent } from '../../app/email-templates/broadcast-email-modal.component';
import { EmailTemplatesListComponent } from '../../app/email-templates/email-templates-list.component';
import {
    EmailTemplate,
    EmailTemplatesStateService,
} from '../../app/email-templates/email-templates-state.service';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        currentUser: jest.fn(() => ({ email: 'me@example.com' })),
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
    };
});

describe('EmailTemplatesListComponent', () => {
    let spectator: SpectatorRouting<EmailTemplatesListComponent>;
    const removeTemplate = jest.fn();
    const setFilters = jest.fn();
    const dialog_open = jest.fn();
    const module_execute = jest.fn(() => Promise.resolve());
    let smtp_module: any;
    let smtp_binding: any;

    const createComponent = createRoutingFactory({
        component: EmailTemplatesListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EmailTemplatesStateService, {
                filters: signal({}),
                filtered_templates: signal([]),
                removeTemplate,
                setFilters,
            } as any),
            MockProvider(OrganisationService, {
                binding: jest.fn(() => smtp_binding),
                module: jest.fn(() => smtp_module),
            } as any),
            MockProvider(MatDialog, { open: dialog_open } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        smtp_module = { execute: module_execute };
        smtp_binding = { name: 'smtp' };
        spectator = createComponent();
    });

    it('should reflect whether a mailing binding exists', () => {
        expect(spectator.component.has_mailing_binding).toBe(true);
        smtp_binding = null;
        expect(spectator.component.has_mailing_binding).toBe(false);
    });

    it('should open the broadcast modal', () => {
        spectator.component.openBroadcastModal();
        expect(dialog_open).toHaveBeenCalledWith(
            BroadcastEmailModalComponent,
            {},
        );
    });

    it('should send a test email through the mailer module', async () => {
        const template = {
            id: 'template-1',
            subject: 'Hi',
            text: 'plain',
            html: '<p>Hi</p>',
        } as EmailTemplate;

        await spectator.component.sendTestEmail(template);

        expect(module_execute).toHaveBeenCalledWith(
            'send_mail',
            expect.arrayContaining([
                'me@example.com',
                'Hi',
                'plain',
                '<p>Hi</p>',
            ]),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
        expect(spectator.component.sending_email).toBeNull();
    });

    it('should notify an error when the mailer module is missing', async () => {
        smtp_module = null;

        await spectator.component.sendTestEmail({
            id: 'template-1',
        } as EmailTemplate);

        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(module_execute).not.toHaveBeenCalled();
    });

    it('should delegate removal to the state service', () => {
        const template = { id: 'template-1' } as EmailTemplate;
        spectator.component.removeTemplate(template);
        expect(removeTemplate).toHaveBeenCalledWith(template);
    });
});
