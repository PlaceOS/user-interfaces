import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent, SafePipe } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { HelpOptionListComponent } from '../../app/help/option-list.component';

describe('HelpOptionListComponent', () => {
    let spectator: Spectator<HelpOptionListComponent>;
    const createComponent = createComponentFactory({
        component: HelpOptionListComponent,
        providers: [{ provide: SettingsService, useValue: { get: jest.fn() } }],
        declarations: [MockComponent(IconComponent), SafePipe],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it('should list tiles from settings', () => {
        expect('a').toHaveLength(0);
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation(() => [{ link: 'test' }]);
        spectator.detectChanges();
        expect('a').toHaveLength(1);
        settings.get.mockImplementation(() => [
            { link: 'test' },
            { link: 'test 2', background: '#123456', name: 'Test' },
        ]);
        spectator.detectChanges();
        expect('a').toHaveLength(2);
    });
});
