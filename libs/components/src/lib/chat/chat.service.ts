import { Injectable, computed, effect, inject, signal } from '@angular/core';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    currentUser,
    log,
    randomString,
} from '@placeos/common';
import { apiKey, getModule, token } from '@placeos/ts-client';

import * as marked from 'marked';

export interface ChatMessage {
    id: string;
    chat_id: string;
    user_id: string;
    message: string;
    content: string;
    function?: string;
    timestamp: number;
}

@Injectable({
    providedIn: 'root',
})
export class ChatService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _binding = signal('');
    private _chat_messages = signal<ChatMessage[]>([]);
    private _progress_message = signal<ChatMessage | null>(null);
    private _chat_system = computed(() => {
        const bld = this._org.building_signal();
        const bind_id = this._binding();
        if (!bld?.id) return '';
        const binding = this._org.binding('chat_room');
        const system_id = binding instanceof Object ? binding.id : binding;
        return bind_id || system_id;
    });
    private _chat_id = '';

    public chat_hint = signal('');
    private _socket?: WebSocket;

    public readonly messages = this._chat_messages.asReadonly();
    public readonly progress = this._progress_message.asReadonly();

    public get connected() {
        return !!this._socket;
    }

    constructor() {
        super();
        effect(() => {
            const id = this._chat_system();
            if (id) this._bindHint(id);
        });
    }

    public setBinding(system_id: string) {
        this._binding.set(system_id);
    }

    public startChat() {
        if (this._socket) return;
        const id = this._chat_system();
        if (!id) return;
        const auth =
            token() !== 'x-api-key'
                ? `bearer_token=${encodeURIComponent(token())}`
                : `x-api-key=${apiKey()}`;
        const url = `ws${location.origin.replace(
            'http',
            '',
        )}/api/engine/v2/chatgpt/chat/${encodeURIComponent(id)}?${auth}${
            this._chat_id ? '&resume=' + encodeURIComponent(this._chat_id) : ''
        }`;
        log('CHAT', 'Starting chat connection.');
        this._socket = new WebSocket(url);
        this._socket.onmessage = (event) => {
            let msg = event.data;
            try {
                msg = JSON.parse(event.data);
            } catch (e) {}
            this._onMessage(msg);
        };
        this._socket.onerror = (e) => {
            log('CHAT', 'Connection error:', [e], 'error');
            this._cleanup();
        };
        this._socket.onclose = () => this._cleanup();
        return () => this.endChat();
    }

    public endChat() {
        log('CHAT', 'Dropping chat connection.');
        this._socket?.close();
        this._cleanup();
    }

    public close() {
        this.endChat();
        this._chat_id = '';
        this._chat_messages.set([]);
    }

    public sendMessage(message: string) {
        if (!message) return;

        this._onMessage({ chat_id: '', message, user_id: currentUser().id });
        this._socket?.send(message);
    }

    private _timeoutSocket(delay = 55 * 1000) {
        this.timeout(
            'socket',
            () => {
                const msg_list = this._chat_messages();
                if (
                    msg_list.length > 0 &&
                    msg_list[msg_list.length - 1].user_id !== 'assistant'
                ) {
                    return this._timeoutSocket(delay);
                }
                this.endChat();
            },
            delay,
        );
    }

    private _cleanup() {
        this._socket = null;
    }

    private _onMessage(msg) {
        if (msg.chat_id) this._chat_id = msg.chat_id;
        if (msg.type === 'progress') {
            this._progress_message.set({
                id: `msg-${randomString(6)}`,
                chat_id: msg.chat_id,
                message: msg.message,
                content: marked.parse(msg.message, { async: false }) as any,
                user_id: msg.user_id || 'assistant',
                function: msg.function,
                timestamp: Date.now(),
            });
            if (msg.function === 'task_complete') {
                this._settings.post('CHAT:task_complete', msg.task_id);
            }
        } else {
            this._chat_messages.set([
                ...this._chat_messages(),
                {
                    id: `msg-${randomString(6)}`,
                    chat_id: msg.chat_id,
                    message: msg.message,
                    content: marked.parse(msg.message, { async: false }) as any,
                    user_id: msg.user_id || 'assistant',
                    timestamp: Date.now(),
                },
            ]);
            if (msg.type === 'response') {
                this._progress_message.set(null);
            }
        }
        this._timeoutSocket();
    }

    private _bindHint(id: string) {
        const mod = getModule(id, 'LLM');
        const binding = mod.variable('user_hint');
        this.subscription(`binding:LLM:user_hint`, binding.bind());
        this.subscription(
            `listen:LLM:user_hint`,
            binding.listen().subscribe((value) => this.chat_hint.set(value)),
        );
    }
}
