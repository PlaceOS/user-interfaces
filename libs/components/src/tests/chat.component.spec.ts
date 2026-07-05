import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { SettingsService, settingSignal } from '@placeos/common';
import { ChatComponent } from '../lib/chat/chat.component';
import { ChatMessage, ChatService } from '../lib/chat/chat.service';

describe('ChatComponent', () => {
    let spectator: Spectator<ChatComponent>;

    const chat_enabled = settingSignal('chat.enabled', false);
    const chat_mock = {
        chat_hint: signal(''),
        messages: signal<ChatMessage[]>([]),
        progress: signal<ChatMessage | null>(null),
        connected: true,
        startChat: vi.fn(),
        sendMessage: vi.fn(),
        close: vi.fn(),
    };

    const createComponent = createComponentFactory({
        component: ChatComponent,
        providers: [
            { provide: ChatService, useValue: chat_mock },
            MockProvider(SettingsService),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        chat_enabled.set(false);
        chat_mock.connected = true;
        chat_mock.chat_hint.set('');
        chat_mock.messages.set([]);
        chat_mock.progress.set(null);
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should hide chat unless enabled in settings', () => {
        expect('button').not.toExist();
        chat_enabled.set(true);
        spectator.detectChanges();
        expect('button').toExist();
    });

    it('should toggle the chat window and end chat on close', () => {
        chat_enabled.set(true);
        spectator.detectChanges();
        expect('textarea').not.toExist();
        spectator.click('button');
        spectator.detectChanges();
        expect('textarea').toExist();
        spectator.component.toggleChat();
        spectator.detectChanges();
        expect('textarea').not.toExist();
        expect(chat_mock.close).toHaveBeenCalled();
    });

    it('should send messages to the chat service', () => {
        vi.useFakeTimers();
        chat_enabled.set(true);
        spectator.component.show.set(true);
        spectator.detectChanges();
        spectator.component.message.set('Hello there');
        spectator.component.sendMessage();
        expect(chat_mock.sendMessage).toHaveBeenCalledWith('Hello there');
        expect(spectator.component.message()).toBe('');
        vi.advanceTimersByTime(200);
    });

    it('should start a chat before sending when not connected', () => {
        vi.useFakeTimers();
        chat_mock.connected = false;
        spectator.component.message.set('Hello there');
        spectator.component.sendMessage();
        expect(chat_mock.startChat).toHaveBeenCalled();
        expect(chat_mock.sendMessage).not.toHaveBeenCalled();
    });

    it('should render messages from the chat service', () => {
        chat_enabled.set(true);
        spectator.component.show.set(true);
        chat_mock.messages.set([
            {
                id: 'msg-1',
                user_id: 'assistant',
                content: 'How can I help?',
                timestamp: Date.now(),
            } as ChatMessage,
        ]);
        spectator.detectChanges();
        expect('[message]').toContainText('How can I help?');
    });

    it('should show waiting indicator when last message is from the user', () => {
        chat_enabled.set(true);
        spectator.component.show.set(true);
        spectator.component.user.set({ id: 'user-1' } as any);
        chat_mock.messages.set([
            {
                id: 'msg-1',
                user_id: 'user-1',
                content: 'Book me a room',
                timestamp: Date.now(),
            } as ChatMessage,
        ]);
        spectator.detectChanges();
        expect(spectator.component.waiting()).toBe(true);
        expect('.animate-bounce').toExist();
    });
});
