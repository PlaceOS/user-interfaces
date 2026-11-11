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
    // Settings that differ from the component defaults
    let settings: Record<string, unknown>;

    const createComponent = createComponentFactory({
        component: SupportTicketModalComponent,
        shallow: true,
        providers: [
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(SettingsService, {
                signal: (key: string, def: any) =>
                    signal(key in settings ? settings[key] : def),
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
        settings = {};
        spectator = createComponent();
        close_spy = spectator.inject(MatDialogRef).close as unknown as Mock;
        execute_spy = vi.fn(() => Promise.resolve());
        vi.mocked(spectator.inject(OrganisationService).module).mockReturnValue(
            { execute: execute_spy } as any,
        );
        spectator.detectChanges();
    });

    it('should default the location from the active building', () => {
        expect(spectator.component.model().location).toBe('Head Office');
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

    it('should escape user text in the html body', async () => {
        spectator.component.model.set({
            name: '<b>Jane</b>',
            email: 'jane@place.tech',
            location: 'Head Office',
            description: '<p>Broken</p>',
            issue_type: '',
            images: [],
        });
        await spectator.component.submit();
        const html = execute_spy.mock.calls[0][1][3];
        expect(html).toContain('&lt;b&gt;Jane&lt;/b&gt;');
        expect(html).not.toContain('<b>Jane</b>');
    });

    it('should stop loading when sending fails', async () => {
        execute_spy.mockRejectedValueOnce(new Error('offline'));
        close_spy.mockClear();
        spectator.component.model.set({
            name: 'Jane',
            email: 'jane@place.tech',
            location: 'Head Office',
            description: '<p>Broken</p>',
            issue_type: '',
            images: [],
        });
        await spectator.component.submit();
        expect(spectator.component.loading()).toBe(false);
        expect(close_spy).not.toHaveBeenCalled();
    });

    it('should send to the issue type address with safe html and full image urls', async () => {
        settings = {
            support_issue_types: [{ name: 'AV', email: 'av@place.tech' }],
        };
        spectator = createComponent();
        vi.mocked(spectator.inject(OrganisationService).module).mockReturnValue(
            { execute: execute_spy } as any,
        );
        spectator.component.model.set({
            name: 'Jane',
            email: 'jane@place.tech',
            location: 'Head Office',
            description: '<p>Broken</p><script>alert(1)</script>',
            issue_type: 'AV',
            images: ['/api/engine/v2/uploads/up-1/url'],
        });

        await spectator.component.submit();

        const [to, , text, html] = execute_spy.mock.calls[0][1];
        expect(to).toBe('av@place.tech');
        expect(html).toContain('<p>Broken</p>');
        expect(html).not.toContain('<script>');
        const image_url = `${globalThis.location.origin}/api/engine/v2/uploads/up-1/url`;
        expect(html).toContain(image_url);
        expect(text).toContain(image_url);
    });
});
