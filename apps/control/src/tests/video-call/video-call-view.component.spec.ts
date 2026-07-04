import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockPipe } from 'ng-mocks';

import { TranslatePipe } from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { ControlStatusBarComponent } from '../../app/status-bar.component';
import { TopbarHeaderComponent } from '../../app/topbar-header.component';
import { ControlVideoCallViewComponent } from '../../app/video-call/video-call-view.component';
import { VideoCallPageComponent } from '../../app/video-call/video-call-page.component';

describe('ControlVideoCallViewComponent', () => {
    let spectator: SpectatorRouting<ControlVideoCallViewComponent>;
    const state_mock = {
        system: signal<any>({}),
        system_id: signal('sys-1'),
        powerOn: jest.fn(),
        setID: jest.fn(),
        selectMeeting: jest.fn(),
    };

    const createComponent = createRoutingFactory({
        component: ControlVideoCallViewComponent,
        params: { system: 'space-0' },
        declarations: [
            MockComponent(TopbarHeaderComponent),
            MockComponent(VideoCallPageComponent),
            MockComponent(ControlStatusBarComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            { provide: ControlStateService, useValue: state_mock },
        ],
    });

    beforeEach(() => {
        state_mock.system.set({});
        state_mock.powerOn.mockClear();
        state_mock.setID.mockClear();
        state_mock.selectMeeting.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should set the active system id from the route param', () => {
        expect(state_mock.setID).toHaveBeenCalledWith('space-0');
    });

    it('should show the loader until the system is connected', () => {
        expect('[name="loader"]').toExist();
        state_mock.system.set({ connected: true });
        spectator.detectChanges();
        expect('[name="loader"]').not.toExist();
    });

    it('should show the splash screen and power on when tapped', () => {
        state_mock.system.set({ connected: true });
        spectator.detectChanges();
        expect('[name="splash"]').toExist();
        expect('topbar-header').not.toExist();
        spectator.click('[name="splash"]');
        expect(state_mock.powerOn).toHaveBeenCalled();
    });

    it('should show the call panel once the system is active', () => {
        state_mock.system.set({ connected: true, active: true });
        spectator.detectChanges();
        expect('[name="splash"]').not.toExist();
        expect('topbar-header').toExist();
        expect('[video-call-page]').toExist();
        expect('control-status-bar').toExist();
    });

    it('should join the meeting when the join query param is true', () => {
        spectator.setRouteQueryParam('join', 'true');
        expect(state_mock.selectMeeting).toHaveBeenCalled();
    });

    it('should not join the meeting without the join query param', () => {
        expect(state_mock.selectMeeting).not.toHaveBeenCalled();
    });
});
