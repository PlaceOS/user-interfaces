import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';
import { CheckinComponent } from '../../app/checkin/checkin.component';
import { TopbarHeaderComponent } from '../../app/components/topbar-header.component';

describe('CheckinComponent', () => {
    let spectator: SpectatorRouting<CheckinComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinComponent,
        providers: [{ provide: SettingsService, useValue: { get: jest.fn() } }],
        declarations: [MockComponent(TopbarHeaderComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
