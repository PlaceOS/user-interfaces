import { fakeAsync, tick } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../app/control-state.service';

import { ControlMainViewComponent } from '../app/main-view.component';
import { ControlPageViewComponent } from '../app/page-view.component';
import { ControlStatusBarComponent } from '../app/status-bar.component';
import { TopbarHeaderComponent } from '../app/topbar-header.component';

describe('ControlMainViewComponent', () => {
    let spectator: SpectatorRouting<ControlMainViewComponent>;
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
            MockProvider(MatDialog),
            MockProvider(ControlStateService, {
                powerOn: jest.fn(),
                system: new BehaviorSubject({}),
                setID: jest.fn(),
            }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should redirect to bootstrap page if no ID set', fakeAsync(() => {
        const service = spectator.inject(ControlStateService);
        const router = spectator.inject(Router);
        spectator.component.ngOnInit();
        tick(400);
        expect(router.navigate).toBeCalledWith(['/bootstrap']);
        (router.navigate as any).mockClear();
        (service as any).id = 'space-0';
        spectator.component.ngOnInit();
        tick(400);
        expect(service.setID).toBeCalledWith('space-0');
        expect(router.navigate).not.toBeCalled();
    }));

    it('should shown loading when connecting to system', async () => {
        const service = spectator.inject(ControlStateService);
        (service as any).system.next({ connected: true });
        expect('[name="loader"]').toExist();
        spectator.detectChanges();
        expect('[name="loader"]').not.toExist();
    });

    it('should show splash page for space', async () => {
        const service = spectator.inject(ControlStateService);
        (service as any).system.next({ connected: true });
        spectator.detectChanges();
        expect('[name="splash"]').toExist();
        expect('topbar-header').not.toExist();
        spectator.click('[name="splash"]');
        expect(service.powerOn).toBeCalled();
    });

    it('should show panel when powered up', async () => {
        const service = spectator.inject(ControlStateService);
        (service as any).system.next({ connected: true, active: true });
        spectator.detectChanges();
        expect('[name="splash"]').not.toExist();
        expect('topbar-header').toExist();
        expect('[control-page-view]').toExist();
        expect('control-status-bar').toExist();
    });
});
