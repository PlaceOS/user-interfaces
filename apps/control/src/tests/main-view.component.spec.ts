import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { ChangelogService } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ControlStateService } from '../app/control-state.service';

import { ControlMainViewComponent } from '../app/main-view.component';
import { ControlPageViewComponent } from '../app/page-view.component';
import { ControlStatusBarComponent } from '../app/status-bar.component';
import { TopbarHeaderComponent } from '../app/topbar-header.component';

describe('ControlMainViewComponent', () => {
    let spectator: SpectatorRouting<ControlMainViewComponent>;
    const system = signal<{ active?: boolean; connected?: boolean }>({});
    const changelog = {
        available: signal(false).asReadonly(),
        view: vi.fn(),
    };
    const createComponent = createRoutingFactory({
        component: ControlMainViewComponent,
        params: { system: 'space-0' },
        declarations: [
            MockComponent(TopbarHeaderComponent),
            MockComponent(ControlPageViewComponent),
            MockComponent(ControlStatusBarComponent),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            MockProvider(ChangelogService, changelog),
            MockProvider(ControlStateService, {
                powerOn: vi.fn(),
                system,
                setID: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        system.set({});
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should shown loading when connecting to system', async () => {
        system.set({ connected: true });
        expect('[name="loader"]').toExist();
        spectator.detectChanges();
        expect('[name="loader"]').not.toExist();
    });

    it('should show splash page for space', async () => {
        const service = spectator.inject(ControlStateService);
        system.set({ connected: true });
        spectator.detectChanges();
        expect('[name="splash"]').toExist();
        expect('topbar-header').not.toExist();
        spectator.click('[name="splash"]');
        expect(service.powerOn).toHaveBeenCalled();
    });

    it('should disable the changelog action when no changelog is deployed', () => {
        system.set({ connected: true });
        spectator.detectChanges();

        expect('button[disabled]').toExist();
    });

    it('should show panel when powered up', async () => {
        system.set({ connected: true, active: true });
        spectator.detectChanges();
        expect('[name="splash"]').not.toExist();
        expect('topbar-header').toExist();
        expect('[control-page-view]').toExist();
        expect('control-status-bar').toExist();
    });
});
