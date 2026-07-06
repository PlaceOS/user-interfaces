import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    StaffUser,
    setCurrentUser,
    setNotifyOutlet,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { BroadcastEmailModalComponent } from '../../app/email-templates/broadcast-email-modal.component';
import { EmailTemplatesListComponent } from '../../app/email-templates/email-templates-list.component';
import {
    EmailTemplate,
    EmailTemplatesStateService,
} from '../../app/email-templates/email-templates-state.service';

describe('EmailTemplatesListComponent', () => {
    let spectator: SpectatorRouting<EmailTemplatesListComponent>;
    const removeTemplate = vi.fn();
    const setFilters = vi.fn();
    const dialog_open = vi.fn();
    const module_execute = vi.fn(() => Promise.resolve());
    let smtp_module: any;
    let smtp_binding: any;
    let notify_open: ReturnType<typeof vi.fn>;

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
                binding: vi.fn(() => smtp_binding),
                module: vi.fn(() => smtp_module),
            } as any),
            MockProvider(MatDialog, { open: dialog_open } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        setCurrentUser(new StaffUser({ email: 'me@example.com' }) as any);
        smtp_module = { execute: module_execute };
        smtp_binding = { name: 'smtp' };
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(spectator.component.sending_email).toBeNull();
    });

    it('should notify an error when the mailer module is missing', async () => {
        smtp_module = null;

        await spectator.component.sendTestEmail({
            id: 'template-1',
        } as EmailTemplate);

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(module_execute).not.toHaveBeenCalled();
    });

    it('should delegate removal to the state service', () => {
        const template = { id: 'template-1' } as EmailTemplate;
        spectator.component.removeTemplate(template);
        expect(removeTemplate).toHaveBeenCalledWith(template);
    });
});
