import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { DeskQrCodeModalComponent } from '../../app/desks/desk-qr-code-modal.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskQrCodeModalComponent', () => {
    let spectator: Spectator<DeskQrCodeModalComponent>;
    let settings: Record<string, unknown>;
    const desks = signal<any[]>([{ id: 'desk-1', name: 'Desk 1' }]);

    const createComponent = createComponentFactory({
        component: DeskQrCodeModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings[key]),
            } as any),
            MockProvider(DesksStateService, { desks } as any),
        ],
    });

    beforeEach(() => {
        settings = {};
        desks.set([{ id: 'desk-1', name: 'Desk 1' }]);
        spectator = createComponent();
    });

    it('should build the kiosk url from the configured path', () => {
        settings['app.workplace_url_path'] = '/kiosk';
        expect(spectator.component.kiosk_url).toBe(
            `${window.location.origin}/kiosk`,
        );
    });

    it('should default the kiosk url path to /workplace', () => {
        expect(spectator.component.kiosk_url).toBe(
            `${window.location.origin}/workplace`,
        );
    });

    it('should attach a qr link and data uri to a desk', () => {
        const item: any = { id: 'desk-1' };
        spectator.component.loadQrCode(item);

        expect(item.qr_link).toContain('asset_id=desk-1');
        expect(item.qr_code).toMatch(/^data:image\/svg\+xml,/);
    });

    it('should decorate each desk in the computed list', () => {
        const list = spectator.component.desks();
        expect(list[0].qr_link).toContain('asset_id=desk-1');
        expect(list[0].qr_code).toMatch(/^data:image\/svg\+xml,/);
    });

    it('should print directly when no qr list element is present', () => {
        const print_spy = vi
            .spyOn(window, 'print')
            .mockImplementation(() => undefined);
        vi.spyOn(document, 'querySelector').mockReturnValue(null);

        spectator.component.print();

        expect(print_spy).toHaveBeenCalledTimes(1);
        print_spy.mockRestore();
    });
});
