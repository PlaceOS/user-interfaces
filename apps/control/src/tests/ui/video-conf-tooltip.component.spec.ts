import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { CustomTooltipData } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { ControlStateService } from '../../app/control-state.service';
import { VideoConferenceTooltipComponent } from '../../app/ui/video-conf-tooltip.component';
import { VideoCallDialViewComponent } from '../../app/video-call/video-call-dial-view.component';
import { VideoCallStateService } from '../../app/video-call/video-call-state.service';

describe('VideoConferenceTooltipComponent', () => {
    let spectator: SpectatorRouting<VideoConferenceTooltipComponent>;
    const createComponent = createRoutingFactory({
        component: VideoConferenceTooltipComponent,
        declarations: [MockComponent(VideoCallDialViewComponent)],
        providers: [
            {
                provide: ControlStateService,
                useValue: { id: 'sys-1' },
            },
            {
                provide: VideoCallStateService,
                useValue: { call: signal<any>(null) },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the system id from the control state', () => {
        expect(spectator.component.id).toBe('sys-1');
    });

    it('should show the dial view when there is no active call', () => {
        expect('video-call-dial-view').toExist();
        expect(spectator.element).not.toContainText('VC_IN_CALL');
    });

    it('should close the tooltip when the dial view emits close', () => {
        spectator.component.close();
        expect(spectator.inject(CustomTooltipData).close).toHaveBeenCalled();
    });

    it('should accumulate dialled digits', () => {
        spectator.component.addDigit('1');
        spectator.component.addDigit('2');
        expect(spectator.component.dial_number()).toBe('12');
    });

    it('should show in-call actions when a call is active', () => {
        const vc = spectator.inject(VideoCallStateService);
        (vc.call as any).set({ id: 'call-1' });
        spectator.detectChanges();
        expect('video-call-dial-view').not.toExist();
        const links = spectator.queryAll('a[btn]');
        expect(links).toHaveLength(2);
    });
});
