import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import * as bookings_mod from '@placeos/bookings';
import * as events_mod from '@placeos/events';
import * as common_mod from '@placeos/common';
import { FullscreenModalShellComponent } from '@placeos/components';
import { UserListFieldComponent } from '@placeos/form-fields';
import { BroadcastEmailModalComponent } from '../../app/email-templates/broadcast-email-modal.component';

jest.mock('@placeos/bookings', () => ({
    queryAllBookings: jest.fn(() => Promise.resolve([])),
}));
jest.mock('@placeos/events', () => ({
    queryAllEvents: jest.fn(() => Promise.resolve([])),
}));
jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
        getTimezoneDifferenceInHours: jest.fn(() => 0),
    };
});

describe('BroadcastEmailModalComponent', () => {
    let spectator: Spectator<BroadcastEmailModalComponent>;
    const dialog_close = jest.fn();
    const module_execute = jest.fn(() => Promise.resolve());
    let smtp_module: any;

    const createComponent = createComponentFactory({
        component: BroadcastEmailModalComponent,
        detectChanges: false,
        declarations: [
            MockComponent(FullscreenModalShellComponent),
            MockComponent(UserListFieldComponent),
        ],
        providers: [
            MockProvider(MatDialogRef, { close: dialog_close } as any),
            MockProvider(OrganisationService, {
                module: jest.fn(() => smtp_module),
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
                region: { id: 'reg-1' },
                buildingsForRegion: jest.fn(() => [{ id: 'bld-1' }]),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => false),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        smtp_module = { execute: module_execute };
        spectator = createComponent();
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
        (events_mod.queryAllEvents as jest.Mock).mockResolvedValue([
            {
                host: 'host@example.com',
                attendees: [{ email: 'guest@example.com' }],
            },
        ]);
        spectator.component.model.update((m) => ({
            ...m,
            recipient_group: 'rooms',
        }));

        await spectator.component.updateRecipients();

        expect(events_mod.queryAllEvents).toHaveBeenCalled();
        expect(spectator.component.recipients().sort()).toEqual([
            'guest@example.com',
            'host@example.com',
        ]);
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

        expect(common_mod.notifyError).toHaveBeenCalled();
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
        expect(common_mod.notifySuccess).toHaveBeenCalled();
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
