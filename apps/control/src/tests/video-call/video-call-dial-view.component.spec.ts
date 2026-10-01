import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { IconComponent, TranslatePipe } from '@placeos/components';
import { DialpadComponent } from '../../app/ui/dialpad.component';
import { VideoCallDialViewComponent } from '../../app/video-call/video-call-dial-view.component';
import { VideoCallStateService } from '../../app/video-call/video-call-state.service';

describe('VideoCallDialViewComponent', () => {
    let spectator: Spectator<VideoCallDialViewComponent>;
    const show_camera_pip = signal<boolean | null>(null);
    const call_state = {
        show_camera_pip,
        showCameraPIP: vi.fn(),
        dial: vi.fn(),
    };

    const createComponent = createComponentFactory({
        component: VideoCallDialViewComponent,
        declarations: [
            MockComponent(DialpadComponent),
            MockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
        ],
        providers: [{ provide: VideoCallStateService, useValue: call_state }],
    });

    beforeEach(() => {
        show_camera_pip.set(null);
        call_state.showCameraPIP.mockClear();
        call_state.dial.mockReset().mockResolvedValue(null);
        spectator = createComponent();
    });

    it('should append pressed digits to the dial number', () => {
        spectator.component.addDigit('1');
        spectator.component.addDigit('2');
        expect(spectator.component.dial_number()).toBe('12');
    });

    it('should remove the last digit on backspace', () => {
        spectator.component.dial_number.set('123');
        spectator.component.addDigit('\b');
        expect(spectator.component.dial_number()).toBe('12');
        spectator.component.addDigit('');
        expect(spectator.component.dial_number()).toBe('1');
    });

    it('should disable the join button until a number is entered', () => {
        expect(spectator.query('button[btn]')).toBeDisabled();
        spectator.component.dial_number.set('5551234');
        spectator.detectChanges();
        expect(spectator.query('button[btn]')).not.toBeDisabled();
    });

    it('should dial the entered number and clear it', async () => {
        spectator.component.dial_number.set('5551234');
        await spectator.component.joinConference();
        expect(call_state.dial).toHaveBeenCalledWith('5551234');
        expect(spectator.component.dial_number()).toBe('');
    });
    it('should do nothing when joining with an empty number', async () => {
        spectator.component.dial_number.set('');
        await spectator.component.joinConference();
        expect(call_state.dial).not.toHaveBeenCalled();
    });

    it('should reflect the camera PIP state from the call service', () => {
        expect(spectator.component.show_camera_pip()).toBe(false);
        show_camera_pip.set(true);
        spectator.detectChanges();
        expect(spectator.component.show_camera_pip()).toBe(true);
    });

    it('should toggle the camera PIP through the call service', async () => {
        await spectator.component.toggleCamera();
        expect(call_state.showCameraPIP).toHaveBeenCalledWith(true);
        show_camera_pip.set(true);
        spectator.detectChanges();
        await spectator.component.toggleCamera();
        expect(call_state.showCameraPIP).toHaveBeenLastCalledWith(false);
    });

    it('should clear the joining state when dialling fails', async () => {
        call_state.dial.mockRejectedValue(new Error('busy'));
        spectator.component.dial_number.set('1234');
        await spectator.component.joinConference();
        expect(spectator.component.loading()).toBe(false);
        expect(spectator.component.dial_number()).toBe('1234');
    });
});
