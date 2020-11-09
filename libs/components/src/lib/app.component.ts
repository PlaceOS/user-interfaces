import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { clientId, invalidateToken, token } from '@placeos/ts-client';

import { BaseClass, HotkeysService, notifySuccess, setAppName, setNotifyOutlet, SettingsService, setupCache, setupPlace } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';

import { SpacesService } from '../../../spaces/src/lib/spaces.service';
import { StaffService } from '../../../users/src/lib/staff.service';
import { setDefaultCreator } from '../../../events/src/lib/event.class';
import { addHours } from 'date-fns';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
        <div *ngIf="loading | async" class="loading-block">
            <div class="info-block center">
                <div class="icon">
                    <mat-spinner [diameter]="64"></mat-spinner>
                </div>
            </div>
        </div>
    `,
    styleUrls: [
        '../../../../shared-styles/utility.scss',
        '../../../../shared-styles/app.component.scss',
        '../../../../shared-styles/custom-element.styles.scss',
        '../../../../shared-styles/native-element.styles.scss',
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
        private _snackbar: MatSnackBar,
        private _hotkey: HotkeysService,
        private _clipboard: Clipboard
    ) {
        super();
    }

    public async ngOnInit() {
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyM'], () => {
            localStorage.setItem('mock', `${localStorage.getItem('mock') !== 'true'}`);
            location.reload();
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyC'], () => {
            this._clipboard.copy(token());
            notifySuccess('Successfully copied token.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyV'], () => {
            navigator.clipboard?.readText().then(tkn => {
                localStorage.setItem(`${clientId()}_access_token`, `${tkn}`);
                localStorage.setItem(`${clientId()}_expires_at`, `${addHours(new Date(), 6).valueOf()}`);
                notifySuccess('Successfully pasted token.');
                setTimeout(() => location.reload(), 2000);
            });
        });
        setNotifyOutlet(this._snackbar);
        this._loading.next(true);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock = !!this._settings.get('mock');
        /** Wait for authentication details to load */
        await setupPlace(settings).catch(() => this.onInitError());
        this._loading.next(false);
        setupCache(this._cache);
        this.timeout('wait_for_user', () => this.onInitError(), 5 * 1000);
        console.log('Waiting on user...')
        await this._users.initialised.pipe(first((_) => _)).toPromise();
        console.log('User loaded...')
        this.clearTimeout('wait_for_user');
        setDefaultCreator(this._users.current);
    }

    private onInitError() {
        console.log('User Invalid...');
        invalidateToken();
        location.reload();
    }
}
