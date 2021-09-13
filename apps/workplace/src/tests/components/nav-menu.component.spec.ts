import { MatMenuModule } from '@angular/material/menu';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { NavMenuComponent } from '../../app/components/nav-menu.component';

describe('NavMenuComponent', () => {
    let spectator: SpectatorRouting<NavMenuComponent>;
    const createComponent = createRoutingFactory({
        component: NavMenuComponent,
        stubsEnabled: false,
        providers: [
            {
                provide: SettingsService,
                useValue: { get: jest.fn(), value: jest.fn(), post: jest.fn() },
            },
        ],
        declarations: [MockComponent(IconComponent)],
        routes: [
            { path: '', component: IconComponent },
            { path: 'foo', component: IconComponent },
        ],
        imports: [MatMenuModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show links based off settings', () => {
        expect('a').not.toExist();
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation(() => [{}, {}]);
        spectator.detectChanges();
        expect('a').toExist();
    });

    it('should allow for navigating', async () => {
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation(() => [
            { route: '/foo' },
            { route: '/bar' },
        ]);
        spectator.detectChanges();
        spectator.click('a');
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });

    it('should be collapsable', () => {
        const set_spy = jest.spyOn(spectator.component, 'hidden', 'set');
        jest.useFakeTimers();
        expect(set_spy).not.toHaveBeenCalled();
        spectator.component.entered();
        expect(set_spy).toHaveBeenCalledWith(false);
        jest.runOnlyPendingTimers();
        expect(set_spy).toHaveBeenCalledTimes(2);
        expect(set_spy).toHaveBeenCalledWith(true);
        jest.useRealTimers();
    });
});
