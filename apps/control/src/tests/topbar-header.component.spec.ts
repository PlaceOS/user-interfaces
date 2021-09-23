import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { CustomTooltipComponent, IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../app/control-state.service';

import { TopbarHeaderComponent } from '../app/topbar-header.component';
import { VideoCallStateService } from '../app/video-call/video-call-state.service';

describe('TopbarHeaderComponent', () => {
    let spectator: Spectator<TopbarHeaderComponent>;
    const createComponent = createComponentFactory({
        component: TopbarHeaderComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CustomTooltipComponent),
        ],
        providers: [
            { provide: SettingsService, useValue: { get: jest.fn() } },
            {
                provide: ControlStateService,
                useValue: {
                    system: new BehaviorSubject([]),
                    mic_list: new BehaviorSubject([]),
                    camera_list: new BehaviorSubject([]),
                    lights: new BehaviorSubject([]),
                    blinds: new BehaviorSubject([]),
                    powerOff: jest.fn(),
                },
            },
            {
                provide: VideoCallStateService,
                useValue: {
                    call: new BehaviorSubject(null),
                    connected: new BehaviorSubject(null),
                },
            },
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the logo', () => {
        expect('[logo]').toExist();
    });

    it('should show the lights action', async () => {
        expect('button[type="lights"]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).lights.next([{}]);
        spectator.detectChanges();
        expect('button[type="lights"]').toExist();
    });

    it('should show the blinds action', async () => {
        expect('button[type="blinds"]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).blinds.next([{}]);
        spectator.detectChanges();
        expect('button[type="blinds"]').toExist();
    });

    it('should show the mics action', async () => {
        expect('button[type="mics"]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).mic_list.next([{}]);
        spectator.detectChanges();
        expect('button[type="mics"]').toExist();
    });

    it('should show the camera action', async () => {
        expect('button[type="camera"]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).camera_list.next([{}]);
        spectator.detectChanges();
        expect('button[type="camera"]').toExist();
    });

    it('should show help action', () => {
        expect('button[type="help"]').toExist();
    });

    it('should show power action', () => {
        expect('button[type="power"]').toExist();
    });
});
