import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { ChatService } from '@placeos/components';

import { setCurrentUser } from '@placeos/common';
import { VoiceAssistantService } from '../../app/ui/voice-assistant.service';

class MockSpeechRecognition {
    public continuous = false;
    public lang = '';
    public interimResults = false;
    public maxAlternatives = 0;
    public onresult: any = null;
    public onerror: any = null;
    public onend: any = null;
    public start = vi.fn();
    public stop = vi.fn();
    public abort = vi.fn();
}

describe('VoiceAssistantService', () => {
    let spectator: SpectatorService<VoiceAssistantService>;
    let messages: ReturnType<typeof signal<any[]>>;
    let progress: ReturnType<typeof signal<any>>;
    let chat: any;
    let recognition_instances: MockSpeechRecognition[];

    const createService = createServiceFactory({
        service: VoiceAssistantService,
        providers: [],
    });

    beforeEach(() => {
        setCurrentUser({ id: 'user-1' } as any);
        vi.useFakeTimers();
        recognition_instances = [];
        (window as any).SpeechRecognition = vi.fn(function () {
            const instance = new MockSpeechRecognition();
            recognition_instances.push(instance);
            return instance;
        });
        messages = signal<any[]>([]);
        progress = signal<any>(null);
        chat = {
            messages,
            progress,
            connected: true,
            setBinding: vi.fn(),
            startChat: vi.fn(),
            sendMessage: vi.fn(),
            close: vi.fn(),
        };
        spectator = createService({
            providers: [{ provide: ChatService, useValue: chat }],
        });
    });

    afterEach(() => {
        vi.useRealTimers();
        delete (window as any).SpeechRecognition;
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

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

    it('should enable after the debounce and initialise speech recognition', () => {
        spectator.service.setEnabled(true);
        expect(spectator.service.enabled()).toBe(false);
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
        expect(spectator.service.enabled()).toBe(true);
        expect(recognition_instances).toHaveLength(1);
        expect(recognition_instances[0].start).toHaveBeenCalled();
    });

    it('should stop speech recognition when disabled', () => {
        spectator.service.setEnabled(true);
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
        const instance = recognition_instances[0];
        spectator.service.setEnabled(false);
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
        expect(spectator.service.enabled()).toBe(false);
        expect(instance.abort).toHaveBeenCalled();
        expect(instance.onresult).toBeNull();
    });

    it('should report speech recognition as unavailable when the browser lacks it', () => {
        delete (window as any).SpeechRecognition;
        spectator.service.setEnabled(true);
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
        expect(spectator.service.error().speech_recognition).toBe(true);
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

    function enable() {
        spectator.service.setEnabled(true);
        vi.advanceTimersByTime(300);
        TestBed.flushEffects();
        return recognition_instances[0];
    }

    function hear(
        recognition: MockSpeechRecognition,
        text: string,
        final = true,
    ) {
        const result: any = [{ transcript: text }];
        result.isFinal = final;
        recognition.onresult({ results: [result] });
    }

    it('should listen after a tap and cancel on a second tap', () => {
        spectator.service.activate();
        expect(spectator.service.state()).toBe('listening');
        spectator.service.activate();
        expect(spectator.service.state()).toBe('idle');
        spectator.service.activate();
        vi.advanceTimersByTime(8000);
        expect(spectator.service.state()).toBe('idle');
    });

    it('should send the command after the wake phrase', () => {
        const recognition = enable();
        hear(recognition, 'Hey place turn on the projector');
        expect(spectator.service.state()).toBe('processing');
        expect(chat.sendMessage).toHaveBeenCalledWith(
            'Hey PlaceOS, turn on the projector',
        );
    });

    it('should send the next phrase as a command after a tap', () => {
        const recognition = enable();
        spectator.service.activate();
        hear(recognition, 'mute the microphones', false);
        expect(spectator.service.current_text()).toBe('mute the microphones');
        hear(recognition, 'mute the microphones');
        expect(chat.sendMessage).toHaveBeenCalledWith(
            'Hey PlaceOS, mute the microphones',
        );
    });

    it('should ignore speech without the wake phrase', () => {
        const recognition = enable();
        hear(recognition, 'turn on the projector', false);
        hear(recognition, 'turn on the projector');
        expect(spectator.service.state()).toBe('idle');
        expect(chat.sendMessage).not.toHaveBeenCalled();
    });

    it('should ignore speech while the assistant is speaking', () => {
        const recognition = enable();
        (window as any).speechSynthesis = { speaking: true };
        hear(recognition, 'can you please confirm the booking');
        expect(chat.sendMessage).not.toHaveBeenCalled();
        delete (window as any).speechSynthesis;
    });

    it('should speak the reply as plain text and go idle', () => {
        const speak = vi.fn();
        (window as any).speechSynthesis = {
            speaking: false,
            cancel: vi.fn(),
            getVoices: () => [],
            speak,
        };
        (window as any).SpeechSynthesisUtterance = function (text: string) {
            this.text = text;
        };
        const recognition = enable();
        hear(recognition, 'hey place what is on today');
        messages.set([
            {
                id: 'm1',
                user_id: 'assistant',
                message: '**Two** meetings',
                content: '<p><strong>Two</strong> meetings</p>',
            },
        ]);
        TestBed.flushEffects();
        expect(speak).toHaveBeenLastCalledWith(
            expect.objectContaining({ text: 'Two meetings' }),
        );
        expect(spectator.service.state()).toBe('idle');
        delete (window as any).speechSynthesis;
        delete (window as any).SpeechSynthesisUtterance;
    });

    it('should only disable recognition for fatal errors', () => {
        const recognition = enable();
        recognition.onerror({ error: 'network' });
        expect(spectator.service.error().speech_recognition).toBeUndefined();
        recognition.onerror({ error: 'not-allowed' });
        expect(spectator.service.error().speech_recognition).toBe(true);
    });

    it('should report waiting when the last message is from the current user', () => {
        expect(spectator.service.waiting()).toBe(false);
        messages.set([{ id: 'm1', user_id: 'user-1', message: 'hi' }]);
        expect(spectator.service.waiting()).toBe(true);
        messages.set([{ id: 'm2', user_id: 'other', message: 'reply' }]);
        expect(spectator.service.waiting()).toBe(false);
    });
});
