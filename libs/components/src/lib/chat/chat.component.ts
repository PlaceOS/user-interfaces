import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsyncHandler, SettingsService, current_user } from '@placeos/common';
import { ChatService } from './chat.service';
import { StaffUser } from '@placeos/users';
import { map } from 'rxjs/operators';

@Component({
    selector: 'global-chat',
    template: `
        <div class="absolute bottom-0 right-0 p-2" *ngIf="can_show">
            <button
                icon
                matRipple
                class="bg-base-100 rounded-full border border-base-300 shadow"
                (click)="toggleChat()"
            >
                <app-icon>chat</app-icon>
            </button>
            <div
                class="absolute bottom-2 right-2 bg-base-200 rounded-xl border border-base-300 shadow overflow-hidden w-[40rem] max-w-[calc(100vw-1rem)]"
                *ngIf="show"
            >
                <div
                    class="flex items-center justify-between bg-base-100 w-full p-2 border-b border-base-300"
                >
                    <h3 class="pl-4">Virtual Assistant</h3>
                    <button icon matRipple (click)="toggleChat()">
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div class="h-[32rem] max-h-[60vh] overflow-auto" #container>
                    <div
                        class="w-full flex flex-col items-center justify-center p-8 space-y-2"
                    >
                        <app-icon class="text-8xl">forum</app-icon>
                        <p class="text-center text-xl">
                            Hi {{ user.name }}. <br />
                            Welcome to the virtual assistant.
                        </p>
                    </div>
                    <div
                        class="m-2 bg-base-100 border-base-300 p-4 rounded shadow text-sm"
                        *ngIf="hint | async"
                    >
                        {{ hint | async }}
                    </div>
                    <div
                        class="flex flex-col m-2"
                        *ngFor="let message of messages | async"
                        [class.pr-4]="message.user_id !== user.id"
                        [class.pl-4]="message.user_id === user.id"
                        [class.items-left]="message.user_id !== user.id"
                        [class.items-end]="message.user_id === user.id"
                        (click)="show_time[message.id] = !show_time[message.id]"
                        [class.waiting-margin]="waiting | async"
                    >
                        <div class="flex items-center space-x-2">
                            <div
                                class="text-sm text-base-content opacity-60 px-2 py-1"
                                *ngIf="message.user_id !== user.id"
                            >
                                Assistant
                            </div>
                            <div
                                class="text-xs  text-base-content opacity-40 px-2 py-1"
                            >
                                {{ message.timestamp + offset | dateFrom }}
                            </div>
                        </div>
                        <div
                            message
                            class="bg-base-100 border-base-300 p-4 rounded shadow text-sm markdown selectable"
                            [innerHTML]="message.content | sanitize"
                        ></div>
                    </div>
                    <div class="p-4" *ngIf="progress | async">
                        <button
                            class="block p-2 rounded border-base-300 bg-info text-info-content w-full"
                            (click)="show_info = !show_info"
                        >
                            <div class=" flex items-center space-x-2">
                                <app-icon class="text-2xl">{{
                                    icons[(progress | async).function] || 'info'
                                }}</app-icon>
                                <p class="text-sm">
                                    {{
                                        (progress | async).message ||
                                            (progress | async).function
                                    }}
                                </p>
                            </div>
                            <div
                                class="relative overflow-hidden w-full rounded"
                            >
                                <div
                                    class="absolute inset-0 bg-base-100 opacity-10"
                                ></div>
                                <div
                                    class="text-xs text-mono text-left p-2 break-words"
                                    *ngIf="show_info"
                                    [innerHTML]="
                                        (progress | async).content | sanitize
                                    "
                                ></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div
                    class="absolute right-2 flex items-center justify-center space-x-2 p-1 rounded-2xl bg-base-100 border border-neutral"
                    [style.bottom]="height + 8 + 'px'"
                    *ngIf="waiting | async"
                >
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce"
                    ></div>
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce anim-delay-1"
                    ></div>
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce anim-delay-2"
                    ></div>
                    <span class="sr-only">Waiting for reply...</span>
                </div>
                <div
                    class="flex bg-base-100 focus-within:outline outline-info border-t border-base-300 max-h-[10rem] overflow-y-auto"
                >
                    <textarea
                        #input
                        placeholder="New message..."
                        class="p-4 flex-1 w-1/2 focus:outline-none resize-none overflow-hidden"
                        [style.height]="height + 'px'"
                        [(ngModel)]="message"
                        (ngModelChange)="resizeInput()"
                        (keyup.enter)="sendMessage()"
                    ></textarea>
                    <button
                        icon
                        matRipple
                        [disabled]="!message"
                        class="mt-2"
                        (click)="sendMessage()"
                    >
                        <app-icon>send</app-icon>
                    </button>
                </div>
            </div>
        </div>
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
})
export class ChatComponent extends AsyncHandler implements OnInit {
    public show = false;
    public show_info = false;
    public message = '';
    public user: StaffUser;
    public show_time: Record<string, boolean> = {};
    public offset = 0;
    public height = 56;

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };
    public readonly hint = this._chat.chat_hint;
    public readonly messages = this._chat.messages;
    public readonly progress = this._chat.progress;
    public readonly waiting = this._chat.messages.pipe(
        map((_) => _.length !== 0 && _[_.length - 1]?.user_id === this.user?.id)
    );

    public get can_show() {
        return this._settings.get('app.chat.enabled');
    }

    @ViewChild('input') private _input_el: ElementRef<HTMLTextAreaElement>;
    @ViewChild('container') private _container_el: ElementRef<HTMLDivElement>;

    public toggleChat() {
        this.show = !this.show;
        if (!this.show) this._chat.close();
    }

    constructor(
        private _settings: SettingsService,
        private _chat: ChatService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'current_user',
            current_user.subscribe((user) => (this.user = user))
        );
        this.subscription(
            'hint',
            this.hint.subscribe(() => this.scrollToBottom(500))
        );
        this.subscription(
            'messages',
            this.messages.subscribe(() => this.scrollToBottom())
        );
        this.subscription(
            'progress',
            this.progress.subscribe((i) =>
                i ? this.scrollToBottom() : (this.show_info = false)
            )
        );
        this.interval(
            'offset',
            () => (this.offset = this.offset ? 0 : 1),
            20 * 1000
        );
    }

    public resizeInput() {
        const el = this._input_el.nativeElement;
        this.height = Math.max(el.scrollHeight, 56);
    }

    public sendMessage() {
        if (!this.message) return;
        if (!this._chat.connected) {
            this._chat.startChat();
            return this.timeout('send', () => this.sendMessage(), 100);
        }
        this._chat.sendMessage(this.message);
        this.message = '';
        this.height = 56;
        setTimeout(() => this._input_el.nativeElement.focus(), 100);
    }

    public scrollToBottom(delay = 300) {
        this.timeout(
            'scroll',
            () => {
                if (this._container_el?.nativeElement) {
                    this._container_el.nativeElement.scrollTop =
                        this._container_el.nativeElement.scrollHeight;
                }
            },
            delay
        );
    }
}
