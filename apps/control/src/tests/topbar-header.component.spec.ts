import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { CustomTooltipComponent, IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
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
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(ControlStateService, {
                system: new BehaviorSubject([]),
                mic_list: new BehaviorSubject([]),
                microphones: new BehaviorSubject([]),
                camera_list: new BehaviorSubject([]),
                lights: new BehaviorSubject([]),
                blinds: new BehaviorSubject([]),
                lighting_scenes: new BehaviorSubject([]),
                joined: new BehaviorSubject([]),
                join_modes: new BehaviorSubject([]),
                join_status: new BehaviorSubject([false, false]),
                hide_join_button: new BehaviorSubject(false),
                help_items: new BehaviorSubject({}),
                room_accessories: new BehaviorSubject([]),
                powerOff: jest.fn(),
            } as any),
            MockProvider(VideoCallStateService, {
                call: new BehaviorSubject(null),
                connected: new BehaviorSubject(null),
                speaker_track: new BehaviorSubject(null),
            }),
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
