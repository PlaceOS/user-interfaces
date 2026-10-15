import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    SpectatorService,
    createServiceFactory,
    mockProvider,
} from '@ngneat/spectator/vitest';
import { ChatService } from '@placeos/components';

import { SettingsService, setCurrentUser } from '@placeos/common';
import { MicCapture } from '../../app/ui/speech/mic-capture';
import {
    SpeechEngine,
    SpeechEngineEvents,
} from '../../app/ui/speech/speech-engine';
import { SpeechPlayer } from '../../app/ui/speech/speech-player';
import type { VoiceActivityEvents } from '../../app/ui/speech/voice-activity';
import {
    VoiceAssistantService,
    parseWakePhrase,
} from '../../app/ui/voice-assistant.service';

describe('parseWakePhrase', () => {
    it('should return the command after a wake phrase', () => {
        expect(parseWakePhrase('Hey, Room. Turn on the TV!')).toBe(
            'turn on the tv',
        );
        expect(parseWakePhrase('Hey rum set volume to 50%')).toBe(
            'set volume to 50%',
        );
        expect(parseWakePhrase('hey room')).toBe('');
    });

    it('should return undefined without a wake phrase', () => {
        expect(parseWakePhrase('turn on the tv')).toBeUndefined();
        expect(parseWakePhrase('')).toBeUndefined();
    });
});

describe('VoiceAssistantService', () => {
    let spectator: SpectatorService<VoiceAssistantService>;
    let messages: ReturnType<typeof signal<unknown[]>>;
    let progress: ReturnType<typeof signal<unknown>>;
    let chat: any;
    let capture: { start: any; stop: any; resume: any };
    let capture_events: VoiceActivityEvents;
    let is_muted: () => boolean;
    let engine: { start: any; transcribe: any; synthesize: any };
    let engine_events: SpeechEngineEvents;
    let player: { play: any; stop: any; busy_until: number };

    const createService = createServiceFactory({
        service: VoiceAssistantService,
        providers: [mockProvider(SettingsService, { get: () => '' })],
    });

    beforeEach(() => {
        setCurrentUser({ id: 'user-1' } as any);
        vi.useFakeTimers();
        (window as any).Worker ??= class {};
        (window as any).AudioWorkletNode ??= class {};
        capture = {
            start: vi.fn(async (events, muted) => {
                capture_events = events;
                is_muted = muted;
            }),
            stop: vi.fn(),
            resume: vi.fn(),
        };
        engine = {
            start: vi.fn((_, events) => (engine_events = events)),
            transcribe: vi.fn(async () => ''),
            synthesize: vi.fn(async () => {}),
        };
        player = { play: vi.fn(), stop: vi.fn(), busy_until: 0 };
        messages = signal<unknown[]>([]);
        progress = signal<unknown>(null);
        chat = {
            messages,
            progress,
            connected: true,
            setBinding: vi.fn(),
            startChat: vi.fn(),
            sendMessage: vi.fn(),
            close: vi.fn(),
            endChat: vi.fn(),
        };
        spectator = createService({
            providers: [
                { provide: ChatService, useValue: chat },
                { provide: MicCapture, useValue: capture },
                { provide: SpeechEngine, useValue: engine },
                { provide: SpeechPlayer, useValue: player },
            ],
        });
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    function enable() {
        spectator.service.setEnabled(true);
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
    }

    /** Simulates a spoken phrase that speech recognition reads as `text` */
    async function hear(text: string) {
        engine.transcribe.mockResolvedValueOnce(text);
        capture_events.phrase(new Float32Array(16000));
        await vi.advanceTimersByTimeAsync(0);
    }

    it('should expose the chat service progress signal', () => {
        progress.set({ function: 'call_function', message: 'busy' });
        expect(spectator.service.progress()).toEqual({
            function: 'call_function',
            message: 'busy',
        });
    });

    it('should bind the chat service to the configured system id', () => {
        spectator.service.setBinding('sys-9');
        TestBed.flushEffects();
        expect(chat.setBinding).toHaveBeenCalledWith('sys-9');
    });

    it('should open the microphone and load the models after the debounce', async () => {
        spectator.service.setEnabled(true);
        expect(spectator.service.enabled()).toBe(false);
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(0);
        expect(spectator.service.enabled()).toBe(true);
        expect(engine.start).toHaveBeenCalledTimes(1);
        expect(capture.start).toHaveBeenCalled();
    });

    it('should release the microphone at once when disabled', () => {
        enable();
        spectator.service.setEnabled(false);
        expect(spectator.service.enabled()).toBe(false);
        expect(capture.stop).toHaveBeenCalled();
        expect(player.stop).toHaveBeenCalled();
        expect(chat.endChat).toHaveBeenCalled();
    });

    it('should report speech recognition as unavailable when the microphone is blocked', async () => {
        spectator.service.setEnabled(true);
        capture.start.mockRejectedValueOnce(new Error('NotAllowedError'));
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(0);
        expect(spectator.service.error().speech_recognition).toBe(true);
        expect(capture.stop).toHaveBeenCalled();
        expect(engine.start).not.toHaveBeenCalled();
    });

    it('should report a model that fails to load', async () => {
        enable();
        await vi.advanceTimersByTimeAsync(0);
        engine_events.failed('text_to_speech', 'HTTP 404');
        expect(spectator.service.error().speech_synthesis).toBe(true);
        expect(spectator.service.error().speech_recognition).toBeUndefined();
    });

    it('should drop the previous room chat when the system changes', () => {
        spectator.service.setBinding('sys-1');
        TestBed.flushEffects();
        expect(chat.close).not.toHaveBeenCalled();
        spectator.service.setBinding('sys-2');
        TestBed.flushEffects();
        expect(chat.close).toHaveBeenCalledTimes(1);
        expect(chat.setBinding).toHaveBeenLastCalledWith('sys-2');
    });

    it('should listen after a tap and cancel on a second tap', () => {
        spectator.service.activate();
        expect(spectator.service.state()).toBe('listening');
        spectator.service.activate();
        expect(spectator.service.state()).toBe('idle');
        spectator.service.activate();
        vi.advanceTimersByTime(8000);
        expect(spectator.service.state()).toBe('idle');
    });

    it('should keep listening while the user speaks', () => {
        enable();
        spectator.service.activate();
        vi.advanceTimersByTime(7000);
        capture_events.start();
        vi.advanceTimersByTime(7000);
        expect(spectator.service.state()).toBe('listening');
    });

    it('should send the command after the wake phrase', async () => {
        enable();
        await hear('Hey Room, turn on the projector.');
        expect(spectator.service.state()).toBe('processing');
        expect(chat.sendMessage).toHaveBeenCalledWith(
            'Hey PlaceOS, turn on the projector',
        );
    });

    it('should ask for a command after the wake phrase alone', async () => {
        enable();
        await hear('Hey Room.');
        expect(spectator.service.state()).toBe('listening');
        expect(engine.synthesize).toHaveBeenLastCalledWith(
            'How may I help you?',
            expect.any(Function),
            expect.any(AbortSignal),
        );
    });

    it('should send the next phrase as a command after a tap', async () => {
        enable();
        spectator.service.activate();
        await hear('Mute the microphones.');
        expect(chat.sendMessage).toHaveBeenCalledWith(
            'Hey PlaceOS, mute the microphones',
        );
    });

    it('should ignore speech without the wake phrase', async () => {
        enable();
        await hear('turn on the projector');
        expect(spectator.service.state()).toBe('idle');
        expect(chat.sendMessage).not.toHaveBeenCalled();
    });

    it('should not send a pending command to a new room', async () => {
        spectator.service.setBinding('sys-1');
        TestBed.flushEffects();
        enable();
        chat.connected = false;
        await hear('Hey room turn on the projector');
        spectator.service.setBinding('sys-2');
        TestBed.flushEffects();
        chat.connected = true;
        vi.advanceTimersByTime(1000);
        expect(chat.sendMessage).not.toHaveBeenCalled();
        expect(spectator.service.state()).toBe('idle');
    });

    it('should drop a transcript that arrives after voice control turns off', async () => {
        enable();
        let resolve: (text: string) => void = () => {};
        engine.transcribe.mockReturnValueOnce(
            new Promise<string>((_) => (resolve = _)),
        );
        capture_events.phrase(new Float32Array(16000));
        spectator.service.setEnabled(false);
        resolve('hey room turn on the projector');
        await vi.advanceTimersByTimeAsync(0);
        expect(chat.sendMessage).not.toHaveBeenCalled();
    });

    it('should mute the microphone while the assistant speaks', () => {
        enable();
        expect(is_muted()).toBe(false);
        player.busy_until = Date.now() + 500;
        expect(is_muted()).toBe(true);
        // Our voice can still echo for a short time after it ends
        vi.advanceTimersByTime(1000);
        expect(is_muted()).toBe(true);
        vi.advanceTimersByTime(1000);
        expect(is_muted()).toBe(false);
    });

    it('should speak the reply as plain text and go idle', async () => {
        enable();
        await hear('hey room what is on today');
        messages.set([
            {
                id: 'm1',
                user_id: 'assistant',
                message: '**Two** meetings',
                content: '<p><strong>Two</strong> meetings</p>',
            },
        ]);
        TestBed.flushEffects();
        expect(engine.synthesize).toHaveBeenLastCalledWith(
            'Two meetings',
            expect.any(Function),
            expect.any(AbortSignal),
        );
        expect(spectator.service.state()).toBe('idle');
    });

    it('should stop the current speech before the next', async () => {
        enable();
        await hear('hey room what is on today');
        const [, , first_signal] = engine.synthesize.mock.lastCall;
        messages.set([{ id: 'm1', user_id: 'assistant', message: 'Done' }]);
        TestBed.flushEffects();
        expect(first_signal.aborted).toBe(true);
        expect(player.stop).toHaveBeenCalled();
    });
});
