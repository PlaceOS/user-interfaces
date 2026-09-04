import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent, mockDirective } from '@placeos/common/tests';
import { MockPipe, MockProvider } from 'ng-mocks';

import {
    AuthenticatedImageDirective,
    ChangelogService,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { ControlStatusBarComponent } from '../../app/status-bar.component';
import { TabOutletComponent } from '../../app/tabbed-view/tab-outlet.component';
import { ControlTabbedViewComponent } from '../../app/tabbed-view/tabbed-view.component';
import { TopbarHeaderComponent } from '../../app/topbar-header.component';
import { VoiceAssistantComponent } from '../../app/ui/voice-assistant.component';

describe('ControlTabbedViewComponent', () => {
    let spectator: SpectatorRouting<ControlTabbedViewComponent>;
    const changelog = {
        available: signal(true).asReadonly(),
        view: vi.fn(),
    };
    const createComponent = createRoutingFactory({
        component: ControlTabbedViewComponent,
        params: { system: 'space-0' },
        declarations: [
            mockComponent(TopbarHeaderComponent),
            mockComponent(TabOutletComponent),
            mockComponent(ControlStatusBarComponent),
            mockComponent(VoiceAssistantComponent),
            mockComponent(IconComponent),
            mockDirective(AuthenticatedImageDirective),
            MockPipe(TranslatePipe, (v) => v),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            MockProvider(ChangelogService, changelog),
            MockProvider(SettingsService, { get: vi.fn(), theme: 'light' }),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
            } as any),
            MockProvider(ControlStateService, {
                system: signal({}),
                join_status: signal([false, false]),
                system_id: signal('space-0'),
                powerOn: vi.fn(),
                setID: vi.fn(),
                selectMeeting: vi.fn(),
            } as any),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should set the active system id from the route param', () => {
        const service = spectator.inject(ControlStateService);
        expect(service.setID).toHaveBeenCalledWith('space-0');
    });

    it('should show a loader while not connected to the system', () => {
        expect('[name="loader"]').toExist();
        expect('mat-spinner').toExist();
    });

    it('should show the splash screen when connected but not active', () => {
        const service: any = spectator.inject(ControlStateService);
        service.system.set({ connected: true, name: 'Room A' });
        spectator.detectChanges();
        expect('[name="loader"]').not.toExist();
        expect('[name="splash"]').toExist();
        expect('topbar-header').not.toExist();
    });

    it('should power on the system when the splash is touched', () => {
        const service: any = spectator.inject(ControlStateService);
        service.system.set({ connected: true });
        spectator.detectChanges();
        spectator.click('[name="splash"]');
        expect(service.powerOn).toHaveBeenCalled();
    });

    it('should show the control panel when the system is active', () => {
        const service: any = spectator.inject(ControlStateService);
        service.system.set({ connected: true, active: true });
        spectator.detectChanges();
        expect('[name="splash"]').not.toExist();
        expect('topbar-header').toExist();
        expect('[tab-outlet]').toExist();
        expect('control-status-bar').toExist();
    });

    it('should show the join lockout overlay when locked out as a secondary', () => {
        const service: any = spectator.inject(ControlStateService);
        service.system.set({ connected: true, active: true });
        service.join_status.set([false, true]);
        spectator.detectChanges();
        expect('[lockout]').toExist();
    });

    it('should not show the lockout overlay when this room is the master', () => {
        const service: any = spectator.inject(ControlStateService);
        service.system.set({ connected: true, active: true });
        service.join_status.set([true, true]);
        spectator.detectChanges();
        expect('[lockout]').not.toExist();
    });

    it('should open the deployed changelog', () => {
        spectator.component.viewChangelog();
        expect(changelog.view).toHaveBeenCalled();
    });
});
