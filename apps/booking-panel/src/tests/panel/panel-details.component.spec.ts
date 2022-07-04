import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { PanelStateService } from '../../app/panel-state.service';
import { PanelDetailsComponent } from '../../app/panel/panel-details.component';
import { BehaviorSubject } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { IconComponent } from '@placeos/components';

describe('PanelDetailsComponent', () => {
    let spectator: SpectatorRouting<PanelDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: PanelDetailsComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    space: new BehaviorSubject(null),
                    settings: new BehaviorSubject({}),
                    newBooking: jest.fn(),
                    confirmWaiter: jest.fn(),
                    viewControl: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => {
        localStorage.setItem('PLACEOS.BOOKINGS.system', 'a-system');
        spectator = createComponent();
    });

    afterEach(() => localStorage.clear());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow for creating new events', () => {
        const service = spectator.inject(PanelStateService);
        expect('[event]').toExist();
        spectator.click('[event]');
        expect(service.newBooking).toHaveBeenCalled();
        (service.settings as any).next({ disable_book_now: true });
        spectator.detectChanges();
        expect('[event]').not.toExist();
    });

    it('should allow for calling waiter', () => {
        expect('[waiter]').not.toExist();
        const service = spectator.inject(PanelStateService);
        (service.settings as any).next({ catering_ui: true });
        spectator.detectChanges();
        expect('[waiter]').toExist();
        spectator.click('[waiter]');
        expect(service.confirmWaiter).toHaveBeenCalled();
    });

    it('should allow for viewing control UI', () => {
        expect('[control]').not.toExist();
        const service = spectator.inject(PanelStateService);
        (service.settings as any).next({ control_ui: 'here' });
        spectator.detectChanges();
        expect('[control]').toExist();
        spectator.click('[control]');
        expect(service.viewControl).toHaveBeenCalled();
    });
});
