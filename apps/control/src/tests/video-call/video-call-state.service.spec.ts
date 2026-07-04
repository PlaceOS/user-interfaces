import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { ControlStateService } from '../../app/control-state.service';
import { VideoCallStateService } from '../../app/video-call/video-call-state.service';

jest.mock('@placeos/ts-client', () => ({ getModule: jest.fn() }));

import * as client from '@placeos/ts-client';

describe('VideoCallStateService', () => {
    let spectator: SpectatorService<VideoCallStateService>;
    let execute_spy: jest.Mock;
    let variable_values: Record<string, any>;
    const system_id = signal('sys-1');
    const control_mock: any = { id: 'sys-1', system_id };

    const createService = createServiceFactory({
        service: VideoCallStateService,
        providers: [{ provide: ControlStateService, useValue: control_mock }],
    });

    beforeEach(() => {
        variable_values = {};
        execute_spy = jest.fn().mockResolvedValue('done');
        system_id.set('sys-1');
        control_mock.id = 'sys-1';
        (client.getModule as jest.Mock).mockImplementation(() => ({
            execute: execute_spy,
            variable: (name: string) => {
                const listener: any = () => variable_values[name] ?? null;
                listener.subscribe = () => () => undefined;
                return { bind: () => () => undefined, listen: () => listener };
            },
        }));
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should derive the active call from the calls binding', () => {
        variable_values.calls = {
            a: { Status: '' },
            b: { Status: 'Connected', RemoteNumber: '123' },
        };
        TestBed.flushEffects();
        expect(spectator.service.call()).toEqual({
            Status: 'Connected',
            RemoteNumber: '123',
        });
    });

    it('should return null when no call has a status', () => {
        variable_values.calls = { a: { Status: '' } };
        TestBed.flushEffects();
        expect(spectator.service.call()).toBeNull();
    });

    it('should expose speaker track availability from its binding', () => {
        variable_values.speaker_track = {
            'Status/Cameras/SpeakerTrack/Availability': 'Available',
        };
        TestBed.flushEffects();
        expect(spectator.service.speaker_track()).toBe('Available');
    });

    it('should execute show_camera_pip when toggling camera PIP', async () => {
        await spectator.service.showCameraPIP(true);
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'VidConf');
        expect(execute_spy).toHaveBeenCalledWith('show_camera_pip', [true]);
    });

    it('should execute mic_mute when muting the microphone', async () => {
        await spectator.service.muteMicrophone(true);
        expect(execute_spy).toHaveBeenCalledWith('mic_mute', [true]);
    });

    it('should execute video_layout when setting the layout', async () => {
        await spectator.service.setVideoLayout('Prominent');
        expect(execute_spy).toHaveBeenCalledWith('video_layout', ['Prominent']);
    });

    it('should execute presentation_mode when setting presentation mode', async () => {
        await spectator.service.setPresentationMode('Remote');
        expect(execute_spy).toHaveBeenCalledWith('presentation_mode', [
            'Remote',
        ]);
    });

    it('should execute hangup', async () => {
        await spectator.service.hangup();
        expect(execute_spy).toHaveBeenCalledWith('hangup', []);
    });

    it('should execute dtmf_send with the pressed digit', async () => {
        await spectator.service.sendDTMF('5');
        expect(execute_spy).toHaveBeenCalledWith('dtmf_send', ['5']);
    });

    it('should place a running call on hold', async () => {
        variable_values.calls = { a: { Status: 'Connected' } };
        TestBed.flushEffects();
        await spectator.service.toggleCallOnHold();
        expect(execute_spy).toHaveBeenCalledWith('call_place_on_hold', []);
    });

    it('should resume a call that is on hold', async () => {
        variable_values.calls = { a: { Status: 'OnHold' } };
        TestBed.flushEffects();
        await spectator.service.toggleCallOnHold();
        expect(execute_spy).toHaveBeenCalledWith('call_resume', []);
    });

    it('should not toggle hold when there is no active call', async () => {
        variable_values.calls = {};
        TestBed.flushEffects();
        await spectator.service.toggleCallOnHold();
        expect(execute_spy).not.toHaveBeenCalled();
    });

    it('should not execute driver methods when there is no system id', async () => {
        control_mock.id = '';
        await spectator.service.showCameraPIP(true);
        await spectator.service.hangup();
        await spectator.service.sendDTMF('1');
        expect(execute_spy).not.toHaveBeenCalled();
    });
});
