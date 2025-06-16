import { SpectatorRouting } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockPipe, MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { ControlSpaceListItemComponent } from '../../app/control/list-item.component';

describe('ControlSpaceListItemComponent', () => {
    let spectator: SpectatorRouting<ControlSpaceListItemComponent>;
    const createComponent = createRoutingFactory({
        component: ControlSpaceListItemComponent,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(() => ['explore']),
            } as any),
            MockProvider(OrganisationService, { buildings: [] }),
        ],
        declarations: [MockComponent(IconComponent), MockPipe(SafePipe)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow user to locate space', () => {
        expect('a[btn][locate]').not.toExist();
        spectator.setInput({ space: { name: 'Space 1', capacity: 32 } as any });
        expect('a[btn][locate]').toExist();
    });

    it('should allow user to open support URL', () => {
        expect('a[btn][control]').not.toExist();
        spectator.setInput({ space: { name: 'Space 1', capacity: 32 } as any });
        expect('a[btn][control]').toExist();
    });
});
