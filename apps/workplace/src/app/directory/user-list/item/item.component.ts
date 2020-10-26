import { Component, OnInit, Input } from '@angular/core';

import { SettingsService } from '@user-interfaces/common';
import { User } from '@user-interfaces/users';

@Component({
    selector: 'a-directory-user-list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class DirectoryUserListItemComponent {
    /** Space to display */
    @Input() public user: User;

    public get show_image() {
        return this._settings.get('app.directory.show_avatars');
    }

    public sendLocateEvent() {
        // this._service.Analytics.event('Locate', `locate_clicked_user_${this.user.name}`);
    }

    public sendCallEvent() {
        // this._service.Analytics.event('Call', `call_clicked_user_${this.user.name}`);
    }

    constructor(private _settings: SettingsService) {}
}
