import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { DialpadComponent } from '../../app/ui/dialpad.component';
import { VideoCallPageComponent } from '../../app/video-call/video-call-page.component';
import { VideoCallStateService } from '../../app/video-call/video-call-state.service';

jest.mock('@placeos/ts-client', () => ({ getModule: jest.fn() }));

import * as client from '@placeos/ts-client';

describe('VideoCallPageComponent', () => {
    let spectator: Spectator<VideoCallPageComponent>;
    let execute_spy: jest.Mock;
    const router_mock = { navigate: jest.fn() };
    const mic_mute = signal<any>(null);
    const show_camera_pip = signal<any>(null);

    const call_state: any = {
        call: signal({ Status: 'Connected' }),
        show_camera_pip,
        mic_mute,
        presentation_mode: signal('None'),
        video_layout: signal('Auto'),
        sendDTMF: jest.fn(),
        setPresentationMode: jest.fn(),
        setVideoLayout: jest.fn(),
        showCameraPIP: jest.fn(),
        muteMicrophone: jest.fn(),
        toggleCallOnHold: jest.fn(),
        hangup: jest.fn().mockResolvedValue(null),
    };
    const control_state: any = {
        id: 'sys-1',
        presentables: signal([]),
        camera_list: signal([]),
        selected_camera: signal(''),
        setRoute: jest.fn(),
    };

    const createComponent = createComponentFactory({
        component: VideoCallPageComponent,
        declarations: [
            MockComponent(DialpadComponent),
            MockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatProgressSpinnerModule),
        ],
        providers: [
            { provide: VideoCallStateService, useValue: call_state },
            { provide: ControlStateService, useValue: control_state },
            { provide: Router, useValue: router_mock },
        ],
    });

    beforeEach(() => {
        execute_spy = jest.fn().mockResolvedValue(null);
        mic_mute.set(null);
        show_camera_pip.set(null);
        call_state.call.set({ Status: 'Connected' });
        router_mock.navigate.mockClear();
        Object.values(call_state).forEach(
            (fn: any) => fn?.mockClear && fn.mockClear(),
        );
        call_state.hangup.mockResolvedValue(null);
        control_state.setRoute.mockClear();
        (client.getModule as jest.Mock).mockImplementation(() => ({
            execute: execute_spy,
        }));
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should clear loading once a call becomes active', () => {
        // call() is truthy so ngOnInit resolves immediately
        expect(spectator.component.loading()).toBe('');
    });

    it('should send DTMF digits through the call service', () => {
        spectator.component.sentDTMF('7');
        expect(call_state.sendDTMF).toHaveBeenCalledWith('7');
    });

    it('should route a presentation source to the present output', () => {
        spectator.setInput({ present_output: 'out-1' });
        spectator.component.setPresentationSource({ id: 'in-2' });
        expect(control_state.setRoute).toHaveBeenCalledWith(
            'in-2',
            'out-1',
            false,
        );
    });

    it('should forward presentation mode and layout changes', () => {
        spectator.component.setPresentationMode('Remote');
        expect(call_state.setPresentationMode).toHaveBeenCalledWith('Remote');
        spectator.component.setVideoLayout('Single');
        expect(call_state.setVideoLayout).toHaveBeenCalledWith('Single');
    });

    it('should reflect and toggle the mic mute state', async () => {
        expect(spectator.component.mic_mute()).toBe(false);
        await spectator.component.toggleMute();
        expect(call_state.muteMicrophone).toHaveBeenCalledWith(true);
        mic_mute.set({ on: true });
        spectator.detectChanges();
        expect(spectator.component.mic_mute()).toBe(true);
        await spectator.component.toggleMute();
        expect(call_state.muteMicrophone).toHaveBeenLastCalledWith(false);
    });

    it('should reflect and toggle the camera PIP state', async () => {
        expect(spectator.component.show_camera_pip()).toBe(false);
        await spectator.component.toggleCamera();
        expect(call_state.showCameraPIP).toHaveBeenCalledWith(true);
        show_camera_pip.set({ on: true });
        spectator.detectChanges();
        expect(spectator.component.show_camera_pip()).toBe(true);
    });

    it('should toggle the call on hold', () => {
        spectator.component.toggleOnHold();
        expect(call_state.toggleCallOnHold).toHaveBeenCalled();
    });

    it('should hang up and navigate back to the panel on end call', async () => {
        await spectator.component.endCall();
        expect(call_state.hangup).toHaveBeenCalled();
        expect(router_mock.navigate).toHaveBeenCalledWith(['/panel', 'sys-1']);
    });

    it('should not navigate on end call when redirect is disabled', async () => {
        spectator.setInput({ redirect: false });
        await spectator.component.endCall();
        expect(call_state.hangup).toHaveBeenCalled();
        expect(router_mock.navigate).not.toHaveBeenCalled();
    });

    it('should surface errors and stop loading when hangup fails', async () => {
        call_state.hangup.mockRejectedValue('boom');
        await expect(spectator.component.endCall()).rejects.toBe('boom');
        expect(spectator.component.loading()).toBe('');
        expect(router_mock.navigate).not.toHaveBeenCalled();
    });

    it('should select a camera through the System module', () => {
        spectator.component.selectCamera('cam-1');
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'System');
        expect(execute_spy).toHaveBeenCalledWith('selected_camera', ['cam-1']);
    });

    it('should not execute when the System module is unavailable', () => {
        (client.getModule as jest.Mock).mockReturnValue(null);
        spectator.component.selectCamera('cam-1');
        expect(execute_spy).not.toHaveBeenCalled();
    });
});
