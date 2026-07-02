import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { ApplicationLink, SettingsService } from '@placeos/common';
import { LocaleService } from 'libs/common/src/lib/locale.service';
import { CustomTooltipData } from '../lib/custom-tooltip.component';
import { HelpTooltipComponent } from '../lib/help-tooltip.component';

describe('HelpTooltipComponent', () => {
    let spectator: Spectator<HelpTooltipComponent>;
    const help_tiles = signal<ApplicationLink[]>([]);
    const createComponent = createComponentFactory({
        component: HelpTooltipComponent,
        providers: [
            {
                provide: CustomTooltipData,
                useValue: { data: null, close: jest.fn() },
            },
            {
                provide: SettingsService,
                useValue: { signal: jest.fn(() => help_tiles) },
            },
            MockProvider(LocaleService),
        ],
    });

    beforeEach(() => {
        help_tiles.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render a link for each help tile from settings', () => {
        expect('a').not.toExist();
        help_tiles.set([
            {
                name: 'User Guide',
                link: 'https://help.example.com/guide',
                icon: { content: 'help' },
            },
            {
                name: 'Support',
                link: 'https://help.example.com/support',
                icon: { content: 'support' },
            },
        ] as any);
        spectator.detectChanges();
        const links = spectator.queryAll<HTMLAnchorElement>('a');
        expect(links).toHaveLength(2);
        expect(links[0]).toContainText('User Guide');
        expect(links[0].href).toBe('https://help.example.com/guide');
        expect(links[1]).toContainText('Support');
        expect(links[1].href).toBe('https://help.example.com/support');
    });

    it('should close the tooltip when clicked', () => {
        spectator.click('div');
        expect(spectator.inject(CustomTooltipData).close).toHaveBeenCalled();
    });
});
