import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import {
    PlaceOS_Service,
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
                init: vi.fn(() => Promise.resolve()),
                has_uploads: false,
            } as any),
            MockProvider(UploadsService, { init: vi.fn() }),
        ],
    });

    beforeEach(() => {
        settingSignal('chat.enabled', false).set(false);
        spectator = createComponent();
    });

    it('initialises PlaceOS on init', async () => {
        const placeos = spectator.inject(PlaceOS_Service);
        await spectator.component.ngOnInit();
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
