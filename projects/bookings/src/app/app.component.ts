import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { invalidateToken } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { startOfSecond, differenceInMilliseconds } from 'date-fns';

import { SettingsService } from 'src/app/common/settings.service';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SpacesService } from 'src/app/spaces/spaces.service';
import { setupPlace } from 'src/app/common/placeos';
import { setupCache } from 'src/app/common/application';
import { setNotifyOutlet } from 'src/app/common/notifications';
import { StaffService } from 'src/app/users/staff.service';
import { VERSION } from 'src/environments/version';
import { BaseClass } from 'src/app/common/base.class';
import { log } from 'src/app/common/general';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        '../../../../src/app/styles/app.component.scss',
        '../../../../src/app/styles/custom-element.styles.scss',
        '../../../../src/app/styles/native-element.styles.scss',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent extends BaseClass implements OnInit {
    /** ID of the active system */
    public system_id: string;
    /** Name of the active system */
    public system_name: string;
    /** List of informational messages to display while connecting to the active system */
    public info_messages: string[] = [
        'If this message persists, check you network connection and then try reloading this page.',
        'It seems to be taking a while. Make sure the selected system is valid.',
        'Still nothing, huh. Are you authenticated? Do you have have a network connection?',
        'Try reloading the page. If this persists contact your administrator.'
    ];
    /** Index of the info message being displayed */
    public message_index: number = 0;
    /** Whether the application is loading */
    private _loading = new BehaviorSubject<boolean>(false);
    /** Observable for whether the application is initialising */
    public readonly loading = this._loading.asObservable();
    /** Current version hash of the application */
    public readonly version = `${VERSION.hash}`;
    /** Current build time for the application */
    public readonly build = VERSION.time;
    /** Whether the version information should be shown */
    public get show_version(): boolean {
        return true //this._settings.get('app.show_version');
    }

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
        setupCache(this._cache);
        this.timeout('wait_for_user', () => this.onInitError(), 5 * 1000);
        await this._users.initialised.pipe(first(_ => _)).toPromise();
        this._loading.next(false);
        this.clearTimeout('wait_for_user');
        this.subscription('system_id', this._settings.listen('system_id').subscribe((id) => this.system_id = id));
    }

    /**
     * Check if the system data has loaded
     * @param delay Delay before first loading message update
     */
    public checkLoading(delay: number = 3000) {
        if (!this.system_name) {
            this.message_index = 0;
            this.timeout('update_msg', () => this.updateMessage(), delay);
        }
    }

    private onInitError() {
        log('Init', 'Failed to initialise user. Restarting application...');
        invalidateToken();
        location.reload();
    }

    /**
     * Update the index of the info message displayed
     */
    private updateMessage(): void {
        if (!this.system_id) { return; }
        this.message_index++;
        if (this.message_index === this.info_messages.length) {
            this.message_index--;
            return;
        }
        this.timeout('update_msg', () => this.updateMessage(), 3000);
    }

    /**
     * Schedule a reload the UI for a future time
     * @param time Time to reload the UI
     */
    public reloadAt(time: number): void {
        if (time && typeof time === 'number') {
            this.clearTimeout('reload_ui');
            const now = startOfSecond(new Date());
            const reload_at_time = startOfSecond(new Date((time || 0) * 1000));
            const diff = differenceInMilliseconds(reload_at_time, now);
            if (diff > 100) {
                this.timeout('reload_ui', () => location.reload(true), diff);
            }
        }
    }
}
