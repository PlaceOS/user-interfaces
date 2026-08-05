import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { FullscreenModalShellComponent } from '@placeos/components';
import { UserListFieldComponent } from '@placeos/form-fields';
import { BroadcastEmailModalComponent } from '../../app/email-templates/broadcast-email-modal.component';

// `queryAllEvents` (from the inlined `@placeos/events` lib) resolves through the
// `@placeos/ts-client` `query` boundary, which is the interceptable layer.
vi.mock('@placeos/ts-client', { spy: true });

describe('BroadcastEmailModalComponent', () => {
    let spectator: Spectator<BroadcastEmailModalComponent>;
    const dialog_close = vi.fn();
    const module_execute = vi.fn(() => Promise.resolve());
    let smtp_module: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: BroadcastEmailModalComponent,
        detectChanges: false,
        declarations: [
            MockComponent(FullscreenModalShellComponent),
            MockComponent(UserListFieldComponent),
        ],
        imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(MatDialogRef, { close: dialog_close } as any),
            MockProvider(OrganisationService, {
                module: vi.fn(() => smtp_module),
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
                region: { id: 'reg-1' },
                buildingsForRegion: vi.fn(() => [{ id: 'bld-1' }]),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        smtp_module = { execute: module_execute };
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
    });

    it('should resolve, normalise and de-duplicate custom recipients', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            recipient_group: 'custom',
            recipients: [
                { email: 'Alpha@Example.com' },
                { email: 'alpha@example.com' },
                { email: 'not-an-email' },
            ] as any,
        }));

        await spectator.component.updateRecipients();

        expect(spectator.component.recipients()).toEqual(['alpha@example.com']);
        expect(spectator.component.recipient_count()).toBe(1);
        expect(spectator.component.resolving_recipients()).toBe(false);
    });

    it('should resolve room hosts and attendees for the rooms group', async () => {
        (ts_client.query as any).mockResolvedValue({
            data: [
                {
                    host: 'host@example.com',
                    attendees: [{ email: 'guest@example.com' }],
                },
            ],
            next: undefined,
        });
        spectator.component.model.update((m) => ({
            ...m,
            recipient_group: 'rooms',
        }));

        await spectator.component.updateRecipients();

        expect(ts_client.query).toHaveBeenCalled();
        expect(spectator.component.recipients().sort()).toEqual([
            'guest@example.com',
            'host@example.com',
        ]);
    });

    it('should not re-resolve recipients when the subject changes', () => {
        TestBed.flushEffects();
        const update_recipients = vi.spyOn(
            spectator.component,
            'updateRecipients',
        );

        spectator.component.model.update((m) => ({
            ...m,
            subject: 'Emergency notice',
        }));
        TestBed.flushEffects();

        expect(update_recipients).not.toHaveBeenCalled();
    });

    it('should notify an error and skip sending when the mailer is missing', async () => {
        smtp_module = null;
        spectator.component.model.update((m) => ({
            ...m,
            subject: 'Hello',
            message_plaintext: 'Body',
            recipient_group: 'custom',
            recipients: [{ email: 'user@example.com' }] as any,
        }));

        await spectator.component.sendEmail();

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(module_execute).not.toHaveBeenCalled();
    });

    it('should send the broadcast email and close the dialog on success', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            subject: 'Hello',
            message_plaintext: 'Body',
            recipient_group: 'custom',
            recipients: [{ email: 'user@example.com' }] as any,
        }));

        await spectator.component.sendEmail();

        expect(module_execute).toHaveBeenCalledWith('send_mail', [
            'user@example.com',
            'Hello',
            'Body',
        ]);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(dialog_close).toHaveBeenCalledWith(true);
    });

    it('should disable sending while there are no valid recipients', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            subject: 'Hello',
            message_plaintext: 'Body',
            recipient_group: 'custom',
            recipients: [] as any,
        }));
        await spectator.component.updateRecipients();

        expect(spectator.component.send_disabled()).toBe(true);
    });
});
