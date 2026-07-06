import { signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';
import type { Mock } from 'vitest';
import { SupportTicketModalComponent } from '../lib/support-ticket-modal.component';

describe('SupportTicketModalComponent', () => {
    let spectator: Spectator<SupportTicketModalComponent>;
    let execute_spy: Mock;
    let close_spy: Mock;

    const createComponent = createComponentFactory({
        component: SupportTicketModalComponent,
        shallow: true,
        providers: [
            MockProvider(MatDialogRef, { close: vi.fn() } as any),
            MockProvider(SettingsService, {
                signal: ((_: string, def: any) => signal(def)) as any,
            }),
            MockProvider(OrganisationService, {
                building_list: signal([
                    { id: 'bld-1', name: 'HQ', display_name: 'Head Office' },
                ]) as any,
                building: {
                    id: 'bld-1',
                    name: 'HQ',
                    display_name: 'Head Office',
                } as any,
                module: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        close_spy = spectator.inject(MatDialogRef).close as unknown as Mock;
        execute_spy = vi.fn(() => Promise.resolve());
        vi.mocked(
            spectator.inject(OrganisationService).module,
        ).mockReturnValue({ execute: execute_spy } as any);
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should default the location from the active building', () => {
        expect(spectator.component.model().location).toBe('Head Office');
    });

    it('should list the available buildings', () => {
        expect(spectator.component.buildings()).toHaveLength(1);
    });

    it('should flag a missing description on submit', async () => {
        await spectator.component.submit();
        expect(spectator.component.desc_error()).toBe(true);
        expect(close_spy).not.toHaveBeenCalled();
        expect(execute_spy).not.toHaveBeenCalled();
    });

    it('should send the ticket and close when the form is valid', async () => {
        spectator.component.model.set({
            name: 'Jane',
            email: 'jane@place.tech',
            location: 'Head Office',
            description: '<p>Broken projector</p>',
            issue_type: '',
            images: [],
        });
        spectator.detectChanges();

        await spectator.component.submit();

        expect(execute_spy).toHaveBeenCalled();
        const send_mail_args = execute_spy.mock.calls[0][1];
        expect(send_mail_args[0]).toBe('support@place.tech');
        expect(close_spy).toHaveBeenCalled();
    });
});
