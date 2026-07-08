import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
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
        expect(instance.stop).toHaveBeenCalled();
    });

    it('should activate and auto-deactivate after the timeout', () => {
        spectator.service.activate();
        expect(spectator.service.active()).toBe(true);
        vi.advanceTimersByTime(5000);
        expect(spectator.service.active()).toBe(false);
    });

    it('should report waiting when the last message is from the current user', () => {
        expect(spectator.service.waiting()).toBe(false);
        messages.set([{ id: 'm1', user_id: 'user-1', message: 'hi' }]);
        expect(spectator.service.waiting()).toBe(true);
        messages.set([{ id: 'm2', user_id: 'other', message: 'reply' }]);
        expect(spectator.service.waiting()).toBe(false);
    });
});
