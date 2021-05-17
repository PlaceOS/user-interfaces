import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';

import { PanelTopbarComponent } from '../../app/panel/topbar.component';

describe('PanelTopbarComponent', () => {
    let spectator: Spectator<PanelTopbarComponent>;
    const createComponent = createComponentFactory({
        component: PanelTopbarComponent,
        providers: [{ provide: SettingsService, useValue: { get: jest.fn() } }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show logo', () => expect('img').toExist());

    it('should show time', () => expect('[time]').toExist());
});
