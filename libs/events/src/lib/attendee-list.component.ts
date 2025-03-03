import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: 'attendee-list',
    template: `
        <div class="flex h-full w-full flex-col overflow-hidden bg-base-100">
            <div
                class="flex min-h-12 items-center border-b border-base-200 p-2"
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
                <div class="flex-1 text-center font-medium">
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
            <div class="w-full flex-1 overflow-auto">
                <ng-container *ngFor="let user of list">
                    <div
                        attendee
                        class="flex items-center space-x-2 p-2 hover:bg-base-200"
                        *ngIf="
                            !user.resource && (host !== user.email || show_host)
                        "
                    >
                        <a-user-avatar [user]="user"></a-user-avatar>
                        <div class="w-1/2 flex-1">
                            <div class="truncate">{{ user.name }}</div>
                            <div
                                class="text-sm opacity-60"
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
                </ng-container>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class AttendeeListComponent {
    @Input() public host: string = '';
    @Input() public show_host = true;
    @Input() public list: User[] = [];
    @Input() public hide_close = false;
    @Input() public custom_title = '';
    @Output() public close = new EventEmitter();
}
