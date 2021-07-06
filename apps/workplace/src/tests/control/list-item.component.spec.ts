import { SpectatorRouting } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent, SafePipe } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { ControlSpaceListItemComponent } from '../../app/control/list-item.component';

describe('ControlSpaceListItemComponent', () => {
    let spectator: SpectatorRouting<ControlSpaceListItemComponent>;
    const createComponent = createRoutingFactory({
        component: ControlSpaceListItemComponent,
        providers: [
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: OrganisationService, useValue: { buildings: [] } },
        ],
        declarations: [MockComponent(IconComponent), SafePipe],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow user to locate space', () => {
        expect('a[button][locate]').not.toExist();
        spectator.setInput({ space: { name: 'Space 1', capacity: 32 } as any });
        expect('a[button][locate]').toExist();
    });

    it('should allow user to open support URL', () => {
        expect('a[button][control]').not.toExist();
        spectator.setInput({ space: { name: 'Space 1', capacity: 32 } as any });
        expect('a[button][control]').toExist();
    });
});
