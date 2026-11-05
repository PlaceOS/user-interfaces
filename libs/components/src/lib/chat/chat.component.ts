import {
    Component,
    ElementRef,
    OnInit,
    computed,
    effect,
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
    settingSignal,
} from '@placeos/common';
import { DateFromPipe } from '../date-from.pipe';
import { IconComponent } from '../icon.component';
import { TranslatePipe } from '../translate.pipe';
import { ChatService } from './chat.service';

@Component({
    selector: 'global-chat',
    template: `
        @if (can_show()) {
            <div class="absolute right-0 bottom-0 p-2">
                <button
                    icon
                    default
                    matRipple
                    [attr.aria-label]="'APP.WORKPLACE.CHAT_TITLE' | translate"
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
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="'COMMON.CLOSE' | translate"
                                (click)="toggleChat()"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                        <div
                            class="h-128 max-h-[60vh] overflow-auto"
                            role="log"
                            #container
                            (scroll)="onScroll()"
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
                                        [innerHTML]="message.content"
                                    ></div>
                                </div>
                            }
                            @if (progress()) {
                                <div class="p-4">
                                    <button
                                        class="border-base-300 bg-info text-info-content block w-full rounded-sm p-2"
                                        (click)="show_info.set(!show_info())"
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
                                (keydown.enter)="onEnter($event)"
                            ></textarea>
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="'COMMON.SUBMIT' | translate"
                                [disabled]="!message().trim()"
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
        TranslatePipe,
        MatRippleModule,
        FormsModule,
        IconComponent,
        DateFromPipe,
    ],
})
export class ChatComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _chat = inject(ChatService);

    public readonly show = signal(false);
    public readonly show_info = signal(false);
    public readonly message = signal('');
    public readonly user = signal<User>(new User());
    public readonly offset = signal(0);
    public readonly height = signal(56);
    public readonly can_show = settingSignal('chat.enabled', false);

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };
    public readonly hint = this._chat.chat_hint;
    public readonly messages = this._chat.messages;
    public readonly progress = this._chat.progress;
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
    /**
     * Whether new content scrolls the log down. False while the user reads
     * older messages.
     */
    private _stick_to_bottom = true;

    public toggleChat() {
        this.show.update((s) => !s);
        this._stick_to_bottom = true;
        if (!this.show()) this._chat.close();
    }

    public ngOnInit(): void {
        this.subscription(
            'current_user',
            current_user.subscribe((user) => this.user.set(user)),
        );
        this.interval(
            'offset',
            () => this.offset.set(this.offset() ? 0 : 1),
            20 * 1000,
        );
    }

    constructor() {
        super();
        effect(() => {
            this._chat.chat_hint();
            this.scrollToBottom(500);
        });
        effect(() => {
            this._chat.messages();
            this.scrollToBottom();
        });
        effect(() => {
            const progress = this._chat.progress();
            if (progress) this.scrollToBottom();
            else this.show_info.set(false);
        });
        // Put the text of a message that got no reply back in the input
        effect(() => {
            const text = this._chat.unsent();
            if (!text) return;
            this.message.update((current) =>
                current ? `${text}\n${current}` : text,
            );
        });
    }

    public resizeInput() {
        const el = this._input_el().nativeElement;
        this.height.set(Math.max(el.scrollHeight, 56));
    }

    /** Send on Enter. Shift+Enter adds a new line. */
    public onEnter(event: Event) {
        // Angular types key events as `Event`
        const { shiftKey, isComposing, keyCode } = event as KeyboardEvent;
        // Enter also confirms text from an input method editor (IME). Some
        // Safari versions only show this with key code 229.
        if (shiftKey || isComposing || keyCode === 229) return;
        event.preventDefault();
        this.sendMessage();
    }

    public sendMessage() {
        if (!this.message().trim()) return;
        // Keep the text in the input if the chat cannot connect
        if (!this._chat.sendMessage(this.message())) return;
        // Show the user's own message, even if they had scrolled up
        this._stick_to_bottom = true;
        this.message.set('');
        this.height.set(56);
        setTimeout(() => this._input_el().nativeElement.focus(), 100);
    }

    /** Stick to the bottom only while the user is near it */
    public onScroll() {
        const el = this._container_el().nativeElement;
        this._stick_to_bottom =
            el.scrollHeight - el.scrollTop - el.clientHeight < 64;
    }

    /** Scroll the log to the newest content, unless the user has scrolled up */
    public scrollToBottom(delay = 300) {
        this.timeout(
            'scroll',
            () => {
                const _container_el = this._container_el();
                if (this._stick_to_bottom && _container_el?.nativeElement) {
                    _container_el.nativeElement.scrollTop =
                        _container_el.nativeElement.scrollHeight;
                }
            },
            delay,
        );
    }
}
