import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    setMocks: jest.fn(),
}));

jest.mock('@placeos/mocks', () => ({ mocksInit: {} }));

import {
    PlaceOS_Service,
    setMocks,
    settingSignal,
    UploadsService,
} from '@placeos/common';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        providers: [
            MockProvider(PlaceOS_Service, {
                init: jest.fn(() => Promise.resolve()),
                has_uploads: false,
            } as any),
            MockProvider(UploadsService, { init: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (setMocks as jest.Mock).mockClear();
        settingSignal('chat.enabled', false).set(false);
        spectator = createComponent();
    });

    it('registers mocks and initialises PlaceOS on init', async () => {
        const placeos = spectator.inject(PlaceOS_Service);
        await spectator.component.ngOnInit();
        expect(setMocks).toHaveBeenCalled();
        expect(placeos.init).toHaveBeenCalled();
    });

    it('does not init uploads when uploads are unavailable', async () => {
        const uploads = spectator.inject(UploadsService);
        await spectator.component.ngOnInit();
        expect(uploads.init).not.toHaveBeenCalled();
    });

    it('initialises uploads when the instance supports them', async () => {
        const placeos = spectator.inject(PlaceOS_Service);
        (placeos as any).has_uploads = true;
        const uploads = spectator.inject(UploadsService);
        await spectator.component.ngOnInit();
        expect(uploads.init).toHaveBeenCalled();
    });

    it('exposes chat availability from the chat.enabled setting', () => {
        expect(spectator.component.has_chat()).toBe(false);
        settingSignal('chat.enabled', false).set(true);
        expect(spectator.component.has_chat()).toBe(true);
    });
});
