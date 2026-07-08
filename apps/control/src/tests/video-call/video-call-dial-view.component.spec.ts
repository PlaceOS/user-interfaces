import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { DialpadComponent } from '../../app/ui/dialpad.component';
import { VideoCallDialViewComponent } from '../../app/video-call/video-call-dial-view.component';
import { VideoCallStateService } from '../../app/video-call/video-call-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as client from '@placeos/ts-client';

describe('VideoCallDialViewComponent', () => {
    let spectator: Spectator<VideoCallDialViewComponent>;
    let execute_spy: any;
    const router_mock = { navigate: vi.fn() };
    const show_camera_pip = signal<any>(null);
    const call_state: any = {
        call: signal(null),
        show_camera_pip,
        showCameraPIP: vi.fn(),
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
        providers: [
            { provide: ControlStateService, useValue: { id: 'sys-1' } },
            { provide: VideoCallStateService, useValue: call_state },
            { provide: Router, useValue: router_mock },
            { provide: ActivatedRoute, useValue: {} },
        ],
    });

    beforeEach(() => {
        execute_spy = vi.fn().mockResolvedValue(null);
        show_camera_pip.set(null);
        router_mock.navigate.mockClear();
        call_state.showCameraPIP.mockClear();
        (client.getModule as any).mockImplementation(() => ({
            execute: execute_spy,
        }));
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
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

    it('should dial the entered number and navigate to the call page', async () => {
        spectator.component.dial_number.set('5551234');
        await spectator.component.joinConference();
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'VidConf');
        expect(execute_spy).toHaveBeenCalledWith('dial', ['5551234']);
        expect(router_mock.navigate).toHaveBeenCalledWith(
            ['call'],
            expect.any(Object),
        );
        expect(spectator.component.dial_number()).toBe('');
    });

    it('should not navigate when redirect is disabled', async () => {
        spectator.setInput({ redirect: false });
        spectator.component.dial_number.set('5551234');
        await spectator.component.joinConference();
        expect(execute_spy).toHaveBeenCalledWith('dial', ['5551234']);
        expect(router_mock.navigate).not.toHaveBeenCalled();
    });

    it('should emit close after joining a conference', async () => {
        const close_spy = vi.fn();
        spectator.output('close').subscribe(close_spy);
        spectator.component.dial_number.set('5551234');
        await spectator.component.joinConference();
        expect(close_spy).toHaveBeenCalled();
    });

    it('should do nothing when joining with an empty number', async () => {
        spectator.component.dial_number.set('');
        await spectator.component.joinConference();
        expect(execute_spy).not.toHaveBeenCalled();
    });

    it('should reflect the camera PIP state from the call service', () => {
        expect(spectator.component.show_camera_pip()).toBe(false);
        show_camera_pip.set({ foo: 'bar' });
        spectator.detectChanges();
        expect(spectator.component.show_camera_pip()).toBe(true);
    });

    it('should toggle the camera PIP through the call service', async () => {
        await spectator.component.toggleCamera();
        expect(call_state.showCameraPIP).toHaveBeenCalledWith(true);
        show_camera_pip.set({ on: true });
        spectator.detectChanges();
        await spectator.component.toggleCamera();
        expect(call_state.showCameraPIP).toHaveBeenLastCalledWith(false);
    });
});
