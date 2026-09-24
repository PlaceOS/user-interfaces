import { signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent, mockDirective } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';
import { ControlStateService } from '../app/control-state.service';

import {
    AuthenticatedImageDirective,
    CustomTooltipComponent,
    IconComponent,
} from '@placeos/components';
import { TopbarHeaderComponent } from '../app/topbar-header.component';
import { VideoCallStateService } from '../app/video-call/video-call-state.service';

describe('TopbarHeaderComponent', () => {
    let spectator: Spectator<TopbarHeaderComponent>;
    let can_change_room = true;
    const createComponent = createComponentFactory({
        component: TopbarHeaderComponent,
        declarations: [
            mockComponent(IconComponent),
            mockComponent(CustomTooltipComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(SettingsService, { get: vi.fn(), theme: 'light' }),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
            } as any),
            MockProvider(ControlStateService, {
                system: signal([]),
                mic_list: signal([]),
                microphones: signal([]),
                camera_list: signal([]),
                lights: signal([]),
                blinds: signal([]),
                lighting_scenes: signal([]),
                lighting_levels: signal([]),
                joined: signal([]),
                join_modes: signal([]),
                join_status: signal([false, false]),
                hide_join_button: signal(false),
                help_items: signal({}),
                room_accessories: signal([]),
                powerOff: vi.fn(),
                changeRoom: vi.fn(),
                canChangeRoom: vi.fn(() => can_change_room),
            } as any),
            MockProvider(VideoCallStateService, {
                call: signal(null),
                connected: signal(null),
                speaker_track: signal(null),
            }),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => {
        can_change_room = true;
        vi.clearAllMocks();
        vi.useFakeTimers();
    });

    afterEach(() => vi.useRealTimers());

    it('should show the logo', () => {
        spectator = createComponent();
        expect('img[auth]').toExist();
    });

    it('should open change room after holding the logo', () => {
        spectator = createComponent();
        spectator.component.startHold();
        vi.advanceTimersByTime(3000);
        expect(
            spectator.inject(ControlStateService).changeRoom,
        ).toHaveBeenCalled();
    });

    it('should not change room on a fixed device', () => {
        can_change_room = false;
        spectator = createComponent();
        spectator.component.startHold();
        vi.advanceTimersByTime(3000);
        expect(
            spectator.inject(ControlStateService).changeRoom,
        ).not.toHaveBeenCalled();
    });
});
