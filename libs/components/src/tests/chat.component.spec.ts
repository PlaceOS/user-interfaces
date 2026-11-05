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
        unsent: signal(''),
        sendMessage: vi.fn(() => true),
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
        chat_mock.chat_hint.set('');
        chat_mock.messages.set([]);
        chat_mock.progress.set(null);
        chat_mock.unsent.set('');
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

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

    it('should send on Enter but not on Shift+Enter or while composing', () => {
        chat_enabled.set(true);
        spectator.component.show.set(true);
        spectator.detectChanges();
        spectator.component.message.set('Hello');
        const enter = (init: KeyboardEventInit) => {
            const event = new KeyboardEvent('keydown', {
                key: 'Enter',
                cancelable: true,
                ...init,
            });
            spectator.component.onEnter(event);
            return event;
        };
        expect(enter({ shiftKey: true }).defaultPrevented).toBe(false);
        expect(enter({ isComposing: true }).defaultPrevented).toBe(false);
        expect(
            enter({ keyCode: 229 } as KeyboardEventInit).defaultPrevented,
        ).toBe(false);
        expect(chat_mock.sendMessage).not.toHaveBeenCalled();
        expect(enter({}).defaultPrevented).toBe(true);
        expect(chat_mock.sendMessage).toHaveBeenCalledWith('Hello');
    });

    it('should keep the message when the chat cannot connect', () => {
        chat_enabled.set(true);
        spectator.component.show.set(true);
        spectator.detectChanges();
        chat_mock.sendMessage.mockReturnValueOnce(false);
        spectator.component.message.set('Hello there');
        spectator.component.sendMessage();
        expect(spectator.component.message()).toBe('Hello there');
    });

    it('should put the text of a failed message back in the input', () => {
        chat_mock.unsent.set('Book me a room');
        spectator.detectChanges();
        expect(spectator.component.message()).toBe('Book me a room');
    });

    it('should not scroll down while the user reads older messages', () => {
        vi.useFakeTimers();
        chat_enabled.set(true);
        spectator.component.show.set(true);
        spectator.detectChanges();
        const log = spectator.query<HTMLElement>('[role="log"]');
        Object.defineProperty(log, 'scrollHeight', { value: 1000 });
        Object.defineProperty(log, 'clientHeight', { value: 200 });
        log.scrollTop = 100;
        spectator.dispatchFakeEvent(log, 'scroll');

        chat_mock.messages.set([
            {
                id: 'msg-1',
                user_id: 'assistant',
                content: 'Hi',
                timestamp: Date.now(),
            } as ChatMessage,
        ]);
        spectator.detectChanges();
        vi.advanceTimersByTime(500);
        expect(log.scrollTop).toBe(100);

        log.scrollTop = 790;
        spectator.dispatchFakeEvent(log, 'scroll');
        chat_mock.messages.set([]);
        spectator.detectChanges();
        vi.advanceTimersByTime(500);
        expect(log.scrollTop).toBe(1000);
    });

    it('should toggle the progress detail when tapped', () => {
        chat_enabled.set(true);
        spectator.component.show.set(true);
        chat_mock.progress.set({
            id: 'p-1',
            message: 'Working',
            content: 'Step detail',
        } as ChatMessage);
        spectator.detectChanges();
        expect(spectator.component.show_info()).toBe(false);

        spectator.click('button.bg-info');
        expect(spectator.component.show_info()).toBe(true);

        spectator.click('button.bg-info');
        expect(spectator.component.show_info()).toBe(false);
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
