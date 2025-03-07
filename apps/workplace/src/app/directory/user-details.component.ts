import { Component, Input } from '@angular/core';

import { SettingsService } from '@placeos/common';
import { User } from '@placeos/users';

@Component({
    selector: 'a-directory-user-list-item',
    template: `
        <div
            class="mb-2 flex flex-wrap items-center overflow-hidden bg-base-100 p-4 hover:bg-base-200 sm:space-x-4"
            *ngIf="user"
            [class.with-image]="show_image"
        >
            <a-user-avatar *ngIf="show_image" [user]="user"></a-user-avatar>
            <div class="ml-4 flex w-1/2 flex-1 flex-col sm:ml-0">
                <div class="name">{{ user.name }}</div>
                <a
                    class="text-sm underline"
                    name="email"
                    [href]="'mailto:' + user.email | safe: 'url'"
                >
                    {{ user.email }}
                </a>
            </div>
            <div
                class="mt-4 flex w-full items-center space-x-2 sm:mt-0 sm:w-auto sm:flex-col sm:space-x-0 sm:space-y-2"
            >
                <a
                    btn
                    matRipple
                    class="w-32 flex-1 sm:flex-none"
                    locate
                    [routerLink]="['/explore']"
                    [queryParams]="{ user: user.email }"
                    (click)="sendLocateEvent()"
                >
                    Locate
                </a>
                <a
                    btn
                    matRipple
                    class="sm:flex-nones w-32 flex-1"
                    call
                    *ngIf="user.phone"
                    [href]="'tel:' + user.phone | safe: 'url'"
                    (click)="sendCallEvent()"
                >
                    Call
                </a>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class DirectoryUserListItemComponent {
    /** Space to display */
    @Input() public user: User;

    public get show_image() {
        return this._settings.get('app.users.show_avatars');
    }

    public sendLocateEvent() {
        // this._service.Analytics.event('Locate', `locate_clicked_user_${this.user.name}`);
    }

    public sendCallEvent() {
        // this._service.Analytics.event('Call', `call_clicked_user_${this.user.name}`);
    }

    constructor(private _settings: SettingsService) {}
}
