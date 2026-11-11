import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';

import { ControlStateService } from '../../app/control-state.service';
import { VideoCallStateService } from '../../app/video-call/video-call-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as client from '@placeos/ts-client';

describe('VideoCallStateService', () => {
    let spectator: SpectatorService<VideoCallStateService>;
    let execute_spy: ReturnType<typeof vi.fn>;
    let variable_values: Record<string, unknown>;
    const system_id = signal('sys-1');
    const control_mock = { id: 'sys-1', system_id };

    const createService = createServiceFactory({
        service: VideoCallStateService,
        providers: [{ provide: ControlStateService, useValue: control_mock }],
    });

    beforeEach(() => {
        variable_values = {};
        execute_spy = vi.fn().mockResolvedValue('done');
        system_id.set('sys-1');
        control_mock.id = 'sys-1';
        vi.mocked(client.getModule).mockImplementation(
            () =>
                ({
                    execute: execute_spy,
                    variable: (name: string) => {
                        const listener = Object.assign(
                            () => variable_values[name] ?? null,
                            { subscribe: () => () => undefined },
                        );
                        return {
                            bind: () => () => undefined,
                            listen: () => listener,
                        };
                    },
                }) as unknown as ReturnType<typeof client.getModule>,
        );
        spectator = createService();
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

    it('should not treat idle or disconnecting calls as active', () => {
        variable_values.calls = {
            a: { Status: 'Idle' },
            b: { Status: 'Disconnecting' },
        };
        TestBed.flushEffects();
        expect(spectator.service.call()).toBeNull();
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

    it.each([
        ['showCameraPIP', true, 'show_camera_pip', [true]],
        ['muteMicrophone', true, 'mic_mute', [true]],
        ['setVideoLayout', 'Prominent', 'video_layout', ['Prominent']],
        ['setPresentationMode', 'Remote', 'presentation_mode', ['Remote']],
        ['sendDTMF', '5', 'dtmf_send', ['5']],
        ['dial', '1234', 'dial', ['1234']],
        ['hangup', undefined, 'hangup', []],
    ] as const)(
        'should send %s to the VidConf module',
        async (method, arg, command, args) => {
            const call = spectator.service[method] as (v: unknown) => unknown;
            await call.call(spectator.service, arg);
            expect(client.getModule).toHaveBeenCalledWith('sys-1', 'VidConf');
            expect(execute_spy).toHaveBeenCalledWith(command, args);
        },
    );

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
        await spectator.service.dial('1');
        await spectator.service.sendDTMF('1');
        expect(execute_spy).not.toHaveBeenCalled();
    });

    it('should resolve instead of throwing when a command fails', async () => {
        execute_spy.mockRejectedValue(new Error('offline'));
        await expect(spectator.service.muteMicrophone(true)).resolves.toBe(
            false,
        );
    });

    it('should reject when dialling fails, so the caller can show it', async () => {
        execute_spy.mockRejectedValue(new Error('busy'));
        await expect(spectator.service.dial('1234')).rejects.toThrow('busy');
    });
});
