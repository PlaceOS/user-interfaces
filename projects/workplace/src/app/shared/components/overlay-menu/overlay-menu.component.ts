import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { logout } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { StaffService } from 'src/app/users/staff.service';
import { ApplicationLink } from '../../utilities/settings.interfaces';
import { SettingsService } from 'src/app/common/settings.service';
import { VERSION } from 'src/environments/version';


import * as dayjs from 'dayjs';

@Component({
    selector: 'a-overlay-menu',
    templateUrl: './overlay-menu.component.html',
    styleUrls: ['./overlay-menu.component.scss'],
})
export class OverlayMenuComponent extends BaseClass {
    /** Whether to show the menu */
    @Input() public show: boolean;
    /** Emitter for changes to show */
    @Output() public showChange = new EventEmitter<boolean>();

    /** List of links to display on the menu */
    public get menu_items(): ApplicationLink[] {
        return this.settings ? this.settings.items : [];
    }

    /** Copyright details for the application */
    public get copyright(): string {
        return this.settings ? this.settings.copyright : '';
    }

    /** Application version */
    public get version(): string {
        return VERSION.tag;
    }

    public get settings() {
        const settings = this._settings.get('app.general.menu') || { position: '' };
        return settings;
    }

    constructor(private _staff: StaffService, private _settings: SettingsService) {
        super();
    }

    /** Current year to display for copyright */
    public get year(): number {
        return dayjs().year();
    }

    /** Current user */
    public get current() {
        return this._staff.current;
    }

    /** Show groups */
    public get groups(): string {
        return this.current.groups.join(',');
    }

    /** Close the overlay menu */
    public close() {
        this.show = false;
        this.showChange.emit(this.show);
    }

    public logout() {
        logout();
    }

    public delayedClose() {
        this.timeout('close', () => this.close(), 50);
    }

    public cancelClose() {
        this.timeout('cancel_close', () => this.clearTimeout('close'), 10);
    }
}
