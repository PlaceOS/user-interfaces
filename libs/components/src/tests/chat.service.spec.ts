import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';

vi.mock('@placeos/ts-client', { spy: true });

import * as client from '@placeos/ts-client';
import { ChatService } from '../lib/chat/chat.service';

/** WebSocket stand-in that records instances */
class FakeSocket {
    public static instances: FakeSocket[] = [];
    public readyState = 1;
    public onmessage: ((e: MessageEvent) => void) | null = null;
    public onerror: ((e: Event) => void) | null = null;
    public onclose: (() => void) | null = null;
    public close = vi.fn();
    public send = vi.fn();
    public addEventListener = vi.fn();
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

    beforeEach(() => {
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
});
