import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { CustomTooltipComponent, IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../app/control-state.service';

import { TopbarHeaderComponent } from '../app/topbar-header.component';

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
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the logo', () => {
        expect('[logo]').toExist();
    });

    it('should show the lights action', async () => {
        expect('button[lights]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).lights.next([{}]);        spectator.detectChanges();
        expect('button[lights]').toExist();
    });

    it('should show the blinds action', async () => {
        expect('button[blinds]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).blinds.next([{}]);        spectator.detectChanges();
        expect('button[blinds]').toExist();
    });

    it('should show the mics action', async () => {
        expect('button[mics]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).mic_list.next([{}]);        spectator.detectChanges();
        expect('button[mics]').toExist();
    });

    it('should show the camera action', async () => {
        expect('button[cameras]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).camera_list.next([{}]);        spectator.detectChanges();
        expect('button[cameras]').toExist();
    });

    it('should show help action', () => {
        expect('button[help]').toExist()
    });

    it('should show power action', () => {
        expect('button[power]').toExist()
    });
});
