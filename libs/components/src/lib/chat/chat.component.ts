import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    computed,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    AsyncHandler,
    SettingsService,
    User,
    current_user,
    settingSignal,
} from '@placeos/common';
import { DateFromPipe } from '../date-from.pipe';
import { IconComponent } from '../icon.component';
import { SanitizePipe } from '../sanitise.pipe';
import { TranslatePipe } from '../translate.pipe';
import { ChatService } from './chat.service';

@Component({
    selector: 'global-chat',
    template: `
        @if (can_show()) {
            <div class="absolute right-0 bottom-0 p-2">
                <button
                    icon
                    matRipple
                    class="border-base-300 bg-base-100 rounded-full border shadow-sm"
                    (click)="toggleChat()"
                >
                    <icon>chat</icon>
                </button>
                @if (show()) {
                    <div
                        class="border-base-300 bg-base-200 absolute right-2 bottom-2 w-160 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border shadow-sm"
                    >
                        <div
                            class="border-base-300 bg-base-100 flex w-full items-center justify-between border-b p-2"
                        >
                            <h3 class="pl-4">
                                {{ 'APP.WORKPLACE.CHAT_TITLE' | translate }}
                            </h3>
                            <button icon matRipple (click)="toggleChat()">
                                <icon>close</icon>
                            </button>
                        </div>
                        <div
                            class="h-128 max-h-[60vh] overflow-auto"
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
                            @if (hint()) {
                                <div
                                    class="border-base-300 bg-base-100 m-2 rounded-sm p-4 text-sm shadow-sm"
                                >
                                    {{ hint() }}
                                </div>
                            }
                            @for (message of messages(); track message) {
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
                                    [class.waiting-margin]="waiting()"
                                >
                                    <div class="flex items-center space-x-2">
                                        @if (message.user_id !== user().id) {
                                            <div
                                                class="text-base-content px-2 py-1 text-sm opacity-60"
                                            >
                                                {{
                                                    'APP.WORKPLACE.CHAT_ASSISTANT'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        <div
                                            class="text-base-content px-2 py-1 text-xs opacity-40"
                                        >
                                            {{
                                                message.timestamp + offset()
                                                    | dateFrom
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        message
                                        class="markdown selectable border-base-300 bg-base-100 rounded-sm p-4 text-sm shadow-sm"
                                        [innerHTML]="message.content | sanitize"
                                    ></div>
                                </div>
                            }
                            @if (progress()) {
                                <div class="p-4">
                                    <button
                                        class="border-base-300 bg-info text-info-content block w-full rounded-sm p-2"
                                        (click)="show_info.set(!show_info)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">{{
                                                icons[progress().function] ||
                                                    'info'
                                            }}</icon>
                                            <p class="text-sm">
                                                {{
                                                    progress().message ||
                                                        progress().function
                                                }}
                                            </p>
                                        </div>
                                        <div
                                            class="relative w-full overflow-hidden rounded-sm"
                                        >
                                            <div
                                                class="bg-base-100 absolute inset-0 opacity-10"
                                            ></div>
                                            @if (show_info()) {
                                                <div
                                                    class="text-mono p-2 text-left text-xs wrap-break-word"
                                                    [innerHTML]="
                                                        progress().content
                                                            | sanitize
                                                    "
                                                ></div>
                                            }
                                        </div>
                                    </button>
                                </div>
                            }
                        </div>
                        @if (waiting()) {
                            <div
                                class="border-neutral bg-base-100 absolute right-2 flex items-center justify-center space-x-2 rounded-2xl border p-1"
                                [style.bottom]="height() + 8 + 'px'"
                            >
                                <div
                                    class="bg-neutral h-2 w-2 animate-bounce rounded-full"
                                ></div>
                                <div
                                    class="anim-delay-1 bg-neutral h-2 w-2 animate-bounce rounded-full"
                                ></div>
                                <div
                                    class="anim-delay-2 bg-neutral h-2 w-2 animate-bounce rounded-full"
                                ></div>
                                <span class="sr-only">{{
                                    'APP.WORKPLACE.CHAT_WAITING' | translate
                                }}</span>
                            </div>
                        }
                        <div
                            class="border-base-300 bg-base-100 outline-info flex max-h-40 overflow-y-auto border-t focus-within:outline-solid"
                        >
                            <textarea
                                #input
                                [placeholder]="
                                    'APP.WORKPLACE.CHAT_MESSAGE_PLACEHOLDER'
                                        | translate
                                "
                                class="w-1/2 flex-1 resize-none overflow-hidden p-4 focus:outline-hidden"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
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
    public readonly can_show = settingSignal('chat.enabled', false);

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };
    public readonly hint = toSignal(this._chat.chat_hint);
    public readonly messages = toSignal(this._chat.messages);
    public readonly progress = toSignal(this._chat.progress);
    public readonly waiting = computed(() => {
        const msgs = this.messages();
        return (
            msgs?.length !== 0 &&
            msgs?.[msgs?.length - 1]?.user_id === this.user().id
        );
    });

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
            this._chat.chat_hint.subscribe(() => this.scrollToBottom(500)),
        );
        this.subscription(
            'messages',
            this._chat.messages.subscribe(() => this.scrollToBottom()),
        );
        this.subscription(
            'progress',
            this._chat.progress.subscribe((i) =>
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
