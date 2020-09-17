import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { invalidateToken } from '@placeos/ts-client';

import { SettingsService } from './common/settings.service';
import { OrganisationService } from './organisation/organisation.service';
import { SpacesService } from './spaces/spaces.service';
import { setupPlace } from './common/placeos';
import { setupCache } from './common/application';
import { setNotifyOutlet } from './common/notifications';
import { StaffService } from './users/staff.service';
import { setDefaultCreator } from './events/event.class';
import { BaseClass } from './common/base.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './styles/app.component.scss',
        './styles/custom-element.styles.scss',
        './styles/native-element.styles.scss',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent extends BaseClass implements OnInit {
    private _loading = new BehaviorSubject<boolean>(false);
    /** Observable for whether the application is initialising */
    public readonly loading = this._loading.asObservable();

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _spaces: SpacesService, // For init
        private _users: StaffService,
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar
    ) {
        super();
    }

    public async ngOnInit() {
        setNotifyOutlet(this._snackbar);
        this._loading.next(true);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first(_ => _)).toPromise();
        const settings = this._settings.get('composer') || {};
        settings.mock = !!this._settings.get('mock');
        /** Wait for authentication details to load */
        await setupPlace(settings).catch(() => this.onInitError());
        this._loading.next(false);
        setupCache(this._cache);
        this.timeout('wait_for_user', () => this.onInitError(), 5 * 1000);
        await this._users.initialised.pipe(first(_ => _)).toPromise();
        this.clearTimeout('wait_for_user');
        setDefaultCreator(this._users.current);
    }

    private onInitError() {
        invalidateToken();
        location.reload();
    }
}
