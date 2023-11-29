import { Injectable } from '@angular/core';
import {
    AsyncHandler,
    SettingsService,
    currentUser,
    log,
    randomString,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { apiKey, getModule, token } from '@placeos/ts-client';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

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
    private _chat_messages = new BehaviorSubject<ChatMessage[]>([]);
    private _progress_message = new BehaviorSubject<ChatMessage | null>(null);
    private _chat_system = this._org.active_building.pipe(
        filter((b) => !!b),
        map((_) => this._org.binding('chat_room'))
    );
    private _chat_id = '';

    public chat_hint: Observable<string> = this._chat_system.pipe(
        filter((_) => !!_),
        switchMap((id) => {
            const mod = getModule(id, 'LLM');
            const binding = mod.binding('user_hint');
            this.subscription(`binding:LLM:user_hint`, binding.bind());
            return binding.listen();
        }),
        shareReplay(1)
    );
    private _change = new BehaviorSubject(0);
    private _socket?: WebSocketSubject<any>;
    private _chat_pipe = combineLatest([this._chat_system, this._change]).pipe(
        switchMap(([id]) => {
            const auth =
                token() !== 'x-api-key'
                    ? `bearer_token=${encodeURIComponent(token())}`
                    : `x-api-key=${apiKey()}`;
            const url = `ws${location.origin.replace(
                'http',
                ''
            )}/api/engine/v2/chatgpt/chat/${encodeURIComponent(id)}?${auth}${
                this._chat_id
                    ? '&resume=' + encodeURIComponent(this._chat_id)
                    : ''
            }`;
            this._socket = webSocket<any>({
                url,
                serializer: (data) =>
                    typeof data === 'object' ? JSON.stringify(data) : data,
                deserializer: (data) => {
                    let return_value = data.data;
                    try {
                        const obj = JSON.parse(data.data);
                        return_value = obj;
                    } catch (e) {
                        return_value = return_value;
                    }
                    return return_value;
                },
            });
            this.subscription(
                'chat-ws',
                this._socket.subscribe(
                    (_) => this._onMessage(_),
                    (e) => this._cleanup(),
                    () => this._cleanup()
                )
            );
            return this._socket;
        }),
        shareReplay(1)
    );

    public readonly messages = this._chat_messages.asObservable();
    public readonly progress = this._progress_message.asObservable();

    public get connected() {
        return !!this._socket;
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public startChat() {
        if (this._socket) return;
        this._change.next(Date.now());
        log('CHAT', 'Starting chat connection.');
        this.subscription('chat', this._chat_pipe.subscribe());
        return () => this.endChat();
    }

    public endChat() {
        log('CHAT', 'Dropping chat connection.');
        this._socket?.complete();
        this._cleanup();
    }

    public close() {
        this.endChat();
        this._chat_id = '';
        this._chat_messages.next([]);
    }

    public sendMessage(message: string) {
        if (!message) return;
        this._onMessage({ chat_id: '', message, user_id: currentUser().id });
        this._socket?.next(message);
    }

    private _timeoutSocket(delay = 55 * 1000) {
        this.timeout(
            'socket',
            () => {
                const msg_list = this._chat_messages.getValue();
                if (
                    msg_list.length > 0 &&
                    msg_list[msg_list.length - 1].user_id !== 'assistant'
                ) {
                    return this._timeoutSocket(delay);
                }
                this.endChat();
            },
            delay
        );
    }

    private _cleanup() {
        this._socket = null;
        this.unsubWith('chat');
    }

    private _onMessage(msg) {
        if (msg.chat_id) this._chat_id = msg.chat_id;
        if (msg.type === 'progress') {
            this._progress_message.next({
                id: `msg-${randomString(6)}`,
                chat_id: msg.chat_id,
                message: msg.message,
                content: marked.parse(msg.message),
                user_id: msg.user_id || 'assistant',
                function: msg.function,
                timestamp: Date.now(),
            });
            if (msg.function === 'task_complete') {
                this._settings.post('CHAT:task_complete', msg.task_id);
            }
        } else {
            this._chat_messages.next([
                ...this._chat_messages.getValue(),
                {
                    id: `msg-${randomString(6)}`,
                    chat_id: msg.chat_id,
                    message: msg.message,
                    content: marked.parse(msg.message),
                    user_id: msg.user_id || 'assistant',
                    timestamp: Date.now(),
                },
            ]);
            if (msg.type === 'response') {
                this._progress_message.next(null);
            }
        }
        this._timeoutSocket();
    }
}
