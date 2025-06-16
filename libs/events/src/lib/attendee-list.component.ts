import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: 'attendee-list',
    template: `
        <div class="flex h-full w-full flex-col overflow-hidden bg-base-100">
            <div
                class="flex min-h-12 items-center border-b border-base-200 p-2"
            >
                @if (!hide_close) {
                    <button close icon matRipple (click)="close.emit()">
                        <icon>arrow_back</icon>
                    </button>
                }
                <div class="flex-1 text-center font-medium">
                    {{ list.length }}
                    {{
                        custom_title
                            ? custom_title
                            : ('ATTENDEES_COUNT'
                              | translate: { count: list.length } : list.length)
                    }}
                </div>
                @if (!hide_close) {
                    <div class="w-12"></div>
                }
            </div>
            <div class="w-full flex-1 overflow-auto">
                @for (user of list; track user) {
                    @if (!user.resource && (host !== user.email || show_host)) {
                        <div
                            attendee
                            class="flex items-center space-x-2 p-2 hover:bg-base-200"
                        >
                            <a-user-avatar [user]="user"></a-user-avatar>
                            <div class="w-1/2 flex-1">
                                <div class="truncate">{{ user.name }}</div>
                                @if (host === user.email) {
                                    <div class="text-sm opacity-60">
                                        {{ 'FORM.HOST' | translate }}
                                    </div>
                                }
                            </div>
                            <div class="p-2">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-success]="user.checked_in"
                                    [class.bg-pending]="!user.checked_in"
                                    [matTooltip]="
                                        (user.checked_in
                                            ? 'COMMON.CHECKED_IN'
                                            : 'COMMON.CHECKED_IN_NOT'
                                        ) | translate
                                    "
                                ></div>
                            </div>
                        </div>
                    }
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        UserAvatarComponent,
        MatTooltipModule,
    ],
})
export class AttendeeListComponent {
    @Input() public host = '';
    @Input() public show_host = true;
    @Input() public list: User[] = [];
    @Input() public hide_close = false;
    @Input() public custom_title = '';
    @Output() public close = new EventEmitter();
}
