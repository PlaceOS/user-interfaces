import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent, mockDirective } from '@placeos/common/tests';
import { MockModule, MockPipe, MockProvider, ngMocks } from 'ng-mocks';
import { ControlStateService } from '../app/control-state.service';

import {
    BindingDirective,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { ControlStatusBarComponent } from '../app/status-bar.component';

describe('ControlStatusBarComponent', () => {
    let spectator: Spectator<ControlStatusBarComponent>;
    const system = signal({});
    const capture_list = signal([]);
    const has_master_audio = signal<boolean | undefined>(true);
    const createComponent = createComponentFactory({
        component: ControlStatusBarComponent,
        declarations: [
            mockComponent(IconComponent),
            mockDirective(BindingDirective),
            MockPipe(MediaDurationPipe),
            MockPipe(TranslatePipe, (v) => v),
        ],
        providers: [
            MockProvider(ControlStateService, {
                system,
                capture_list,
                has_master_audio,
                setVolume: vi.fn(),
                setMute: vi.fn(),
            }),
        ],
        imports: [MockModule(MatSliderModule), MockModule(FormsModule)],
    });

    beforeEach(() => {
        system.set({});
        capture_list.set([]);
        has_master_audio.set(true);
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should show recording details', async () => {
        expect('[recording]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).capture_list.set([{ mod: 'Capture' }]);
        spectator.detectChanges();
        expect('[recording]').toExist();
    });

    it('should allow pausing and resuming recordings', async () => {
        const service = spectator.inject(ControlStateService);
        (service as any).capture_list.set([{ mod: 'Capture' }]);
        spectator.detectChanges();
        expect('[place-action="start"]').toExist();
        expect('[place-action="pause"]').not.toExist();
        spectator.component.rec_status = 'playing';
        spectator.detectChanges();
        expect('[place-action="start"]').not.toExist();
        expect('[place-action="pause"]').toExist();
    });

    it('should name the mute button and expose its state', () => {
        expect('button[mute]').toHaveAttribute(
            'aria-label',
            'APP.CONTROL.MUTE',
        );
        expect('button[mute]').toHaveAttribute('aria-pressed', 'false');
        const service = spectator.inject(ControlStateService);
        (service as any).system.set({ mute: true });
        spectator.detectChanges();
        expect('button[mute]').toHaveAttribute('aria-pressed', 'true');
    });

    it('should show the volume level', () => {
        const service = spectator.inject(ControlStateService);
        (service as any).system.set({ volume: 45 });
        spectator.detectChanges();
        expect('[volume-level]').toHaveText('45%');
    });

    it('should hide the master volume only when the room has no master audio', () => {
        const service = spectator.inject(ControlStateService);
        (service as any).has_master_audio.set(undefined);
        spectator.detectChanges();
        expect('[volume-level]').toExist();
        (service as any).has_master_audio.set(false);
        spectator.detectChanges();
        expect('[volume-level]').not.toExist();
    });

    it('should toggle the mute state when the mute button is pressed', () => {
        const service = spectator.inject(ControlStateService);
        spectator.click('button[mute]');
        expect(service.setMute).toHaveBeenLastCalledWith(true);
        (service as any).system.set({ mute: true });
        spectator.click('button[mute]');
        expect(service.setMute).toHaveBeenLastCalledWith(false);
    });

    it('should unmute when the volume changes while muted', () => {
        const service = spectator.inject(ControlStateService);
        (service as any).system.set({ mute: true, volume: 20 });
        spectator.component.setVolume(30);
        expect(service.setMute).toHaveBeenCalledWith(false);
        expect(service.setVolume).toHaveBeenCalledWith(30);
    });

    it('should send recording commands to the bound capture module', () => {
        const service = spectator.inject(ControlStateService);
        (service as any).capture_list.set([{ mod: 'Recorder_1' }]);
        spectator.detectChanges();
        expect(ngMocks.input('[place-action="start"]', 'mod')).toBe(
            'Recorder_1',
        );
    });
});
