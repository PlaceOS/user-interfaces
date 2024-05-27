import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: 'attendee-list',
    template: `
        <div class="w-full h-full overflow-hidden flex flex-col bg-base-100">
            <div
                class="flex items-center border-b border-base-200 p-2 min-h-12"
            >
                <button
                    close
                    icon
                    matRipple
                    *ngIf="!hide_close"
                    (click)="close.emit()"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <div class="flex-1 text-center font-medium" i18n>
                    {{ list.length }}
                    {{
                        custom_title
                            ? custom_title
                            : list.length === 1
                            ? 'Attendee'
                            : 'Attendees'
                    }}
                </div>
                <div class="w-12" *ngIf="!hide_close"></div>
            </div>
            <div class="flex-1 w-full overflow-auto">
                <div
                    attendee
                    class="flex items-center p-2 space-x-2 hover:bg-base-200"
                    *ngFor="let user of list"
                >
                    <a-user-avatar [user]="user"></a-user-avatar>
                    <div class="flex-1 w-1/2">
                        <div class="truncate">{{ user.name }}</div>
                        <div
                            class="opacity-60 text-sm"
                            *ngIf="host === user.email"
                        >
                            Host
                        </div>
                    </div>
                    <div class="p-2">
                        <div
                            class="h-3 w-3 rounded-full"
                            [class.bg-success]="user.checked_in"
                            [class.bg-pending]="!user.checked_in"
                            [matTooltip]="
                                user.checked_in
                                    ? 'Checked in'
                                    : 'Not checked in'
                            "
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class AttendeeListComponent {
    @Input() public host: string = '';
    @Input() public list: User[] = [];
    @Input() public hide_close = false;
    @Input() public custom_title = '';
    @Output() public close = new EventEmitter();
}
