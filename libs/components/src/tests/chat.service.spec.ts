import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
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
        spectator = createService();
        spectator.service.setBinding('sys-1');
    });

    afterEach(() => {
        window.WebSocket = original_socket;
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

    it('should show an error if the chat closes before it opens', () => {
        spectator.service.startChat();
        const socket = FakeSocket.instances[0];
        socket.readyState = FakeSocket.CONNECTING;

        expect(spectator.service.sendMessage('Hello')).toBe(true);
        socket.listeners['close']();

        expect(socket.send).not.toHaveBeenCalled();
        expect(snackbar.open).toHaveBeenCalled();
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
});
