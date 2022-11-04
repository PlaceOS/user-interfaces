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

});
