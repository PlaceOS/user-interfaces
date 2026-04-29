import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { SettingsService } from './settings.service';

@Injectable()
export class SettingsTitleStrategy extends TitleStrategy {
    private _title = inject(Title);
    private _settings = inject(SettingsService);

    public override updateTitle(snapshot: RouterStateSnapshot): void {
        const page_title = this.buildTitle(snapshot);
        const app_name =
            this._settings.get('app.name') || this._settings.app_name;
        this._title.setTitle(
            page_title ? `${app_name} | ${page_title}` : app_name,
        );
    }
}
