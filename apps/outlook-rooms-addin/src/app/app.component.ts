import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { invalidateToken, isMock } from '@placeos/ts-client';
import {
    BaseClass,
    current_user,
    currentUser,
    setAppName,
    setNotifyOutlet,
    SettingsService,
    setupCache,
    setupPlace,
    log,
    notifyInfo,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { setInternalUserDomain } from 'libs/users/src/lib/user.utilities';
import { setDefaultCreator } from 'libs/events/src/lib/event.class';
import { SpacesService } from 'libs/spaces/src/lib/spaces.service';

import * as MOCKS from '@placeos/mocks';

declare let Office: any;
declare let OfficeRuntime: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent extends BaseClass implements OnInit {
    title = 'outlook-rooms-addin';

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _spaces: SpacesService, // For init
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar
    ) {
        super();
    }

    public async ngOnInit() {
        window.history.replaceState = (data: null, unused: null) => {};

        log('APP', 'MOCKS:', MOCKS);

        setNotifyOutlet(this._snackbar);
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        const get_token = (OfficeRuntime || Office)?.auth?.getAccessToken( { allowSignInPrompt: true });
        if (get_token) {
            const office_token = await get_token.catch(e => console.error(e));
            if (office_token) notifyInfo(`Loaded office token.`);
        }
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');

        await setupPlace(settings).catch((_) => console.error(_));
        setupCache(this._cache);
        if (!settings.local_login) {
            this.timeout('wait_for_user', () => this.onInitError(), 30 * 1000);
        }
        await current_user.pipe(first((_) => !!_)).toPromise();
        this.clearTimeout('wait_for_user');
        setDefaultCreator(currentUser());
        setInternalUserDomain(
            this._settings.get('app.general.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`
        );
    }

    private onInitError() {
        if (isMock() || currentUser()?.is_logged_in) return;
        invalidateToken();
        location.reload();
    }
}
