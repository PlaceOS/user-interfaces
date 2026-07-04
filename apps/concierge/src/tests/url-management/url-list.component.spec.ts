import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService, ShortURL } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { UrlListComponent } from '../../app/url-management/url-list.component';
import { UrlManagementService } from '../../app/url-management/url-management.service';

describe('UrlListComponent', () => {
    let spectator: Spectator<UrlListComponent>;
    let manager: any;

    const createComponent = createComponentFactory({
        component: UrlListComponent,
        providers: [
            MockProvider(UrlManagementService, {
                url_list: signal([]),
                qr_codes: signal({}),
                editURL: jest.fn(),
                removeURL: jest.fn(),
                loadQrCode: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => '/kiosk'),
            } as any),
        ],
    });

    beforeEach(() => {
        spectator = createComponent({ detectChanges: false });
        manager = spectator.inject(UrlManagementService);
    });

    it('should delegate row actions to the management service', () => {
        const url = { id: 'url-1' } as ShortURL;
        spectator.component.edit(url);
        spectator.component.remove(url);
        spectator.component.loadQrCode(url);
        expect(manager.editURL).toHaveBeenCalledWith(url);
        expect(manager.removeURL).toHaveBeenCalledWith(url);
        expect(manager.loadQrCode).toHaveBeenCalledWith(url);
    });

    it('should build the kiosk URL from settings and origin', () => {
        expect(spectator.component.kiosk_url).toBe(
            `${window.location.origin}/kiosk`,
        );
    });

    it('should trigger printing of the window', () => {
        const print_spy = jest
            .spyOn(window, 'print')
            .mockImplementation(() => undefined);
        spectator.component.print();
        expect(print_spy).toHaveBeenCalled();
        print_spy.mockRestore();
    });
});
