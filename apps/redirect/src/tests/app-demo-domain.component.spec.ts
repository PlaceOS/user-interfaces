/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://demo.place.tech/"}
 */
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    currentUser,
    firstTruthyValueFrom,
    setupPlace,
    SettingsService,
} from '@placeos/common';
import { authority } from '@placeos/ts-client';

import { AppComponent } from '../app/app.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    const settings_get = jest.fn();
    class SettingsService {
        public initialised = true;
        public get = settings_get;
    }
    (SettingsService as any).get_mock = settings_get;
    return {
        ...actual,
        SettingsService,
        firstTruthyValueFrom: jest.fn(() => Promise.resolve(true)),
        setupPlace: jest.fn(() => Promise.resolve()),
        currentUser: jest.fn(() => ({ email: 'user@example.com' })),
        current_user: { subscribe: () => ({ unsubscribe: jest.fn() }) },
    };
});

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    authority: jest.fn(),
    setAPI_Key: jest.fn(),
}));

describe('AppComponent (demo domain)', () => {
    let spectator: Spectator<AppComponent>;
    const settings_get = (SettingsService as any).get_mock as jest.Mock;
    const route_stub: any = {
        snapshot: {
            queryParamMap: {
                has: () => false,
                get: () => null,
                getAll: () => [],
                keys: [],
            },
        },
    };

    const create_component = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        providers: [{ provide: ActivatedRoute, useValue: route_stub }],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'log').mockImplementation(() => void 0);
        // mock setting explicitly disabled so only the demo origin can enable it
        settings_get.mockImplementation((key: string) =>
            key === 'composer' ? {} : undefined,
        );
        (firstTruthyValueFrom as jest.Mock).mockResolvedValue(true);
        (setupPlace as jest.Mock).mockResolvedValue(undefined);
        (currentUser as jest.Mock).mockReturnValue({
            email: 'user@example.com',
        });
        (authority as jest.Mock).mockReturnValue(undefined);
        spectator = create_component();
    });

    it('should run under the demo origin', () => {
        expect(location.origin).toBe('https://demo.place.tech');
    });

    it('should enable mock mode on the demo domain even when the setting is off', async () => {
        await spectator.component.ngOnInit();
        expect(setupPlace).toHaveBeenCalledWith(
            expect.objectContaining({ mock: true }),
        );
    });
});
