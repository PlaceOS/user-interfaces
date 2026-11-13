import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ControlStateService } from '../app/control-state.service';

import { ControlAdvancedViewComponent } from '../app/advanced-view.component';
import { ControlMainViewComponent } from '../app/main-view.component';
import { ControlStatusBarComponent } from '../app/status-bar.component';
import { TopbarHeaderComponent } from '../app/topbar-header.component';
import { ControlConnectingComponent } from '../app/ui/connecting.component';
import { NextMeetingComponent } from '../app/ui/next-meeting.component';
import { SplashComponent } from '../app/ui/splash.component';

describe('ControlMainViewComponent', () => {
    let spectator: SpectatorRouting<ControlMainViewComponent>;
    const system = signal<{ active?: boolean; connected?: boolean }>({});
    const createComponent = createRoutingFactory({
        component: ControlMainViewComponent,
        params: { system: 'space-0' },
        declarations: [
            MockComponent(TopbarHeaderComponent),
            MockComponent(ControlAdvancedViewComponent),
            MockComponent(ControlStatusBarComponent),
            MockComponent(ControlConnectingComponent),
            MockComponent(NextMeetingComponent),
            MockComponent(SplashComponent),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            MockProvider(ControlStateService, {
                system,
                setID: vi.fn(),
                selectMeeting: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        system.set({});
        spectator = createComponent();
    });

    it('should set the active system from the route', () => {
        const service = spectator.inject(ControlStateService);
        expect(service.setID).toHaveBeenCalledWith('space-0');
    });

    it('should show the connecting screen until the system connects', () => {
        expect('control-connecting').toExist();
        system.set({ connected: true });
        spectator.detectChanges();
        expect('control-connecting').not.toExist();
    });

    it('should show the splash screen while the room is off', () => {
        system.set({ connected: true });
        spectator.detectChanges();
        expect('control-splash').toExist();
        expect('topbar-header').not.toExist();
    });

    it('should show the panel when powered up', () => {
        system.set({ connected: true, active: true });
        spectator.detectChanges();
        expect('control-splash').not.toExist();
        expect('topbar-header').toExist();
        expect('control-advanced-view').toExist();
        expect('control-status-bar').toExist();
    });

    it('should open the meeting list when the join parameter is true', () => {
        const service = spectator.inject(ControlStateService);
        spectator.setRouteQueryParam('join', 'false');
        expect(service.selectMeeting).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('join', 'true');
        expect(service.selectMeeting).toHaveBeenCalledTimes(1);
    });
});
