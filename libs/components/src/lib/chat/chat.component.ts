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
                class="bg-white rounded-full border border-gray-300 shadow"
                (click)="toggleChat()"
            >
                <app-icon>chat</app-icon>
            </button>
            <div
                class="absolute bottom-2 right-2 bg-gray-100 rounded-xl border border-gray-200 shadow overflow-hidden w-[20rem]"
                *ngIf="show"
            >
                <div
                    class="flex items-center justify-between bg-white w-full p-2 border-b border-gray-200"
                >
                    <h3 class="pl-4">Virtual Assistant</h3>
                    <button icon matRipple (click)="show = false">
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div class="h-[24rem] overflow-auto" #container>
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
                        class="m-2 bg-white border-gray-200 p-4 rounded shadow text-sm"
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
                                class="text-sm text-black/60 px-2 py-1"
                                *ngIf="message.user_id !== user.id"
                            >
                                Assistant
                            </div>
                            <div class="text-xs text-black/30 px-2 py-1">
                                {{ message.timestamp | dateFrom }}
                            </div>
                        </div>
                        <div
                            class="bg-white border-gray-200 p-4 rounded shadow text-sm markdown"
                            [innerHTML]="message.content | sanitize"
                        ></div>
                    </div>
                </div>
                <div
                    class="absolute bottom-16 right-2 flex items-center justify-center space-x-2 p-1 rounded-2xl bg-slate-400 border border-slate-600"
                    *ngIf="waiting | async"
                >
                    <div
                        class="h-2 w-2 bg-slate-600 rounded-full animate-bounce"
                    ></div>
                    <div
                        class="h-2 w-2 bg-slate-600 rounded-full animate-bounce anim-delay-1"
                    ></div>
                    <div
                        class="h-2 w-2 bg-slate-600 rounded-full animate-bounce anim-delay-2"
                    ></div>
                    <span class="sr-only">Waiting for reply...</span>
                </div>
                <div
                    class="flex items-center bg-white focus-within:outline outline-blue-500 border-t border-gray-200"
                >
                    <input
                        #input
                        placeholder="New message..."
                        class="p-4 flex-1 w-1/2 focus:outline-none"
                        [(ngModel)]="message"
                        (keyup.enter)="sendMessage()"
                    />
                    <button
                        icon
                        matRipple
                        [disabled]="!message"
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
                padding-bottom: 2.5rem;
            }
        `,
    ],
})
export class ChatComponent extends AsyncHandler implements OnInit {
    public show = false;
    public message = '';
    public user: StaffUser;
    public show_time: Record<string, boolean> = {};

    public readonly hint = this._chat.chat_hint;
    public readonly messages = this._chat.messages;
    public readonly waiting = this._chat.messages.pipe(
        map((_) => _.length !== 0 && _[_.length - 1]?.user_id === this.user?.id)
    );

    public get can_show() {
        return this._settings.get('app.chat.enabled');
    }

    @ViewChild('input') private _input_el: ElementRef<HTMLInputElement>;
    @ViewChild('container') private _container_el: ElementRef<HTMLDivElement>;

    public toggleChat() {
        this.show = !this.show;
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
    }

    public sendMessage() {
        if (!this.message) return;
        if (!this._chat.connected) {
            this._chat.startChat();
            return this.timeout('send', () => this.sendMessage(), 100);
        }
        this._chat.sendMessage(this.message);
        this.message = '';
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
