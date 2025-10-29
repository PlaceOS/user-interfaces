import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    OnInit,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    AsyncHandler,
    SettingsService,
    User,
    current_user,
} from '@placeos/common';
import { map } from 'rxjs/operators';
import { DateFromPipe } from '../date-from.pipe';
import { IconComponent } from '../icon.component';
import { SanitizePipe } from '../sanitise.pipe';
import { TranslatePipe } from '../translate.pipe';
import { ChatService } from './chat.service';

@Component({
    selector: 'global-chat',
    template: `
        @if (can_show()) {
            <div class="absolute bottom-0 right-0 p-2">
                <button
                    icon
                    matRipple
                    class="rounded-full border border-base-300 bg-base-100 shadow"
                    (click)="toggleChat()"
                >
                    <icon>chat</icon>
                </button>
                @if (show()) {
                    <div
                        class="absolute bottom-2 right-2 w-[40rem] max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border border-base-300 bg-base-200 shadow"
                    >
                        <div
                            class="flex w-full items-center justify-between border-b border-base-300 bg-base-100 p-2"
                        >
                            <h3 class="pl-4">
                                {{ 'APP.WORKPLACE.CHAT_TITLE' | translate }}
                            </h3>
                            <button icon matRipple (click)="toggleChat()">
                                <icon>close</icon>
                            </button>
                        </div>
                        <div
                            class="h-[32rem] max-h-[60vh] overflow-auto"
                            #container
                        >
                            <div
                                class="flex w-full flex-col items-center justify-center space-y-2 p-8"
                            >
                                <icon class="text-8xl">forum</icon>
                                <p class="text-center text-xl">
                                    {{
                                        'APP.WORKPLACE.CHAT_HELLO'
                                            | translate: { name: user().name }
                                    }}
                                    <br />
                                    {{
                                        'APP.WORKPLACE.CHAT_WELCOME' | translate
                                    }}
                                </p>
                            </div>
                            @if (hint | async) {
                                <div
                                    class="m-2 rounded border-base-300 bg-base-100 p-4 text-sm shadow"
                                >
                                    {{ hint | async }}
                                </div>
                            }
                            @for (message of messages | async; track message) {
                                <div
                                    class="m-2 flex flex-col"
                                    [class.pr-4]="message.user_id !== user().id"
                                    [class.pl-4]="message.user_id === user().id"
                                    [class.items-left]="
                                        message.user_id !== user().id
                                    "
                                    [class.items-end]="
                                        message.user_id === user().id
                                    "
                                    (click)="
                                        show_time()[message.id] =
                                            !show_time()[message.id]
                                    "
                                    [class.waiting-margin]="waiting | async"
                                >
                                    <div class="flex items-center space-x-2">
                                        @if (message.user_id !== user().id) {
                                            <div
                                                class="px-2 py-1 text-sm text-base-content opacity-60"
                                            >
                                                {{
                                                    'APP.WORKPLACE.CHAT_ASSISTANT'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        <div
                                            class="px-2 py-1 text-xs text-base-content opacity-40"
                                        >
                                            {{
                                                message.timestamp + offset()
                                                    | dateFrom
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        message
                                        class="markdown selectable rounded border-base-300 bg-base-100 p-4 text-sm shadow"
                                        [innerHTML]="message.content | sanitize"
                                    ></div>
                                </div>
                            }
                            @if (progress | async) {
                                <div class="p-4">
                                    <button
                                        class="block w-full rounded border-base-300 bg-info p-2 text-info-content"
                                        (click)="show_info.set(!show_info)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">{{
                                                icons[
                                                    (progress | async).function
                                                ] || 'info'
                                            }}</icon>
                                            <p class="text-sm">
                                                {{
                                                    (progress | async)
                                                        .message ||
                                                        (progress | async)
                                                            .function
                                                }}
                                            </p>
                                        </div>
                                        <div
                                            class="relative w-full overflow-hidden rounded"
                                        >
                                            <div
                                                class="absolute inset-0 bg-base-100 opacity-10"
                                            ></div>
                                            @if (show_info) {
                                                <div
                                                    class="text-mono break-words p-2 text-left text-xs"
                                                    [innerHTML]="
                                                        (progress | async)
                                                            .content | sanitize
                                                    "
                                                ></div>
                                            }
                                        </div>
                                    </button>
                                </div>
                            }
                        </div>
                        @if (waiting | async) {
                            <div
                                class="absolute right-2 flex items-center justify-center space-x-2 rounded-2xl border border-neutral bg-base-100 p-1"
                                [style.bottom]="height() + 8 + 'px'"
                            >
                                <div
                                    class="h-2 w-2 animate-bounce rounded-full bg-neutral"
                                ></div>
                                <div
                                    class="anim-delay-1 h-2 w-2 animate-bounce rounded-full bg-neutral"
                                ></div>
                                <div
                                    class="anim-delay-2 h-2 w-2 animate-bounce rounded-full bg-neutral"
                                ></div>
                                <span class="sr-only">{{
                                    'APP.WORKPLACE.CHAT_WAITING' | translate
                                }}</span>
                            </div>
                        }
                        <div
                            class="flex max-h-[10rem] overflow-y-auto border-t border-base-300 bg-base-100 outline-info focus-within:outline"
                        >
                            <textarea
                                #input
                                [placeholder]="
                                    'APP.WORKPLACE.CHAT_MESSAGE_PLACEHOLDER'
                                        | translate
                                "
                                class="w-1/2 flex-1 resize-none overflow-hidden p-4 focus:outline-none"
                                [style.height]="height() + 'px'"
                                [(ngModel)]="message"
                                (ngModelChange)="resizeInput()"
                                (keyup.enter)="sendMessage()"
                            ></textarea>
                            <button
                                icon
                                matRipple
                                [disabled]="!message()"
                                class="mt-2"
                                (click)="sendMessage()"
                            >
                                <icon>send</icon>
                            </button>
                        </div>
                    </div>
                }
            </div>
        }
    `,
    styles: [
        `
            .anim-delay-1 {
                animation-delay: 0.25s;
            }
            .anim-delay-2 {
                animation-delay: 0.5s;
            }

            .waiting-margin:last-child {
                padding-bottom: 2rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        FormsModule,
        IconComponent,
        DateFromPipe,
        SanitizePipe,
    ],
})
export class ChatComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _chat = inject(ChatService);

    public readonly show = signal(false);
    public readonly show_info = signal(false);
    public readonly message = signal('');
    public readonly user = signal<User>(new User());
    public readonly show_time = signal<Record<string, boolean>>({});
    public readonly offset = signal(0);
    public readonly height = signal(56);
    public readonly can_show = this._settings.signal('chat.enabled');

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };
    public readonly hint = this._chat.chat_hint;
    public readonly messages = this._chat.messages;
    public readonly progress = this._chat.progress;
    public readonly waiting = this._chat.messages.pipe(
        map(
            (_) =>
                _.length !== 0 && _[_.length - 1]?.user_id === this.user().id,
        ),
    );

    private readonly _input_el =
        viewChild<ElementRef<HTMLTextAreaElement>>('input');
    private readonly _container_el =
        viewChild<ElementRef<HTMLDivElement>>('container');

    public toggleChat() {
        this.show.update((s) => !s);
        if (!this.show()) this._chat.close();
    }

    public ngOnInit(): void {
        this.subscription(
            'current_user',
            current_user.subscribe((user) => this.user.set(user)),
        );
        this.subscription(
            'hint',
            this.hint.subscribe(() => this.scrollToBottom(500)),
        );
        this.subscription(
            'messages',
            this.messages.subscribe(() => this.scrollToBottom()),
        );
        this.subscription(
            'progress',
            this.progress.subscribe((i) =>
                i ? this.scrollToBottom() : this.show_info.set(false),
            ),
        );
        this.interval(
            'offset',
            () => this.offset.set(this.offset ? 0 : 1),
            20 * 1000,
        );
    }

    public resizeInput() {
        const el = this._input_el().nativeElement;
        this.height.set(Math.max(el.scrollHeight, 56));
    }

    public sendMessage() {
        if (!this.message) return;
        if (!this._chat.connected) {
            this._chat.startChat();
            return this.timeout('send', () => this.sendMessage(), 100);
        }
        this._chat.sendMessage(this.message());
        this.message.set('');
        this.height.set(56);
        setTimeout(() => this._input_el().nativeElement.focus(), 100);
    }

    public scrollToBottom(delay = 300) {
        this.timeout(
            'scroll',
            () => {
                const _container_el = this._container_el();
                if (_container_el?.nativeElement) {
                    _container_el.nativeElement.scrollTop =
                        _container_el.nativeElement.scrollHeight;
                }
            },
            delay,
        );
    }
}
