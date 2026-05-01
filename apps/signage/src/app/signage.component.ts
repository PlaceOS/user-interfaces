import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, viewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, log, SettingsService } from '@placeos/common';
import { time } from './media-helpers';
import { MediaPlayerComponent } from './media-player.component';
import { MediaEvent, SignageService } from './signage.service';

/** PostMessage types accepted from a parent frame (e.g. wayfinder shell) */
const REMOTE_PAUSE = 'signage:pause';
const REMOTE_RESUME = 'signage:resume';

function isDebugEnabled(value: string | null) {
    return value !== null && value !== 'false';
}

@Component({
    selector: 'signage-panel',
    template: `
        <media-player
            [playlist]="playlist | async"
            [controls]="debug()"
            [override]="override_playlist().playlist.length > 0"
            [animation_time]="animation_time"
            (playing_id)="playing_id.set($event)"
            (event)="handlePlayerEvent($event)"
            class="z-0"
        />
        @if (override_playlist().playlist.length > 0) {
            <media-player
                [playlist]="override_playlist().playlist"
                [controls]="debug()"
                [can_close]="true"
                [animation_time]="animation_time"
                (playing_id)="playing_id.set($event)"
                (event)="handlePlayerEvent($event, true)"
                (closed)="clearOverridePlaylist()"
                class="absolute inset-0 z-10"
            />
        }
        @if (debug()) {
            <div
                class="absolute right-2 bottom-2 text-xs text-white opacity-30"
            >
                {{ playing_id() }}
            </div>
        }
    `,
    styles: `
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }
    `,
    imports: [CommonModule, MediaPlayerComponent],
})
export class SignagePanelComponent extends AsyncHandler implements OnInit {
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _signage = inject(SignageService);
    private _settings = inject(SettingsService);

    public readonly playlist = this._signage.playlist;
    public readonly override_playlist = this._signage.override_playlist;
    public readonly debug = this._signage.debug;
    public readonly playing_id = this._signage.playing_id;

    private readonly _players = viewChildren(MediaPlayerComponent);

    public readonly clearOverridePlaylist = () =>
        this._signage.clearPlaylistOverride();

    private readonly _remote_message_handler = (event: MessageEvent) => {
        const data = event?.data;
        if (!data || typeof data !== 'object') return;
        if (data.type === REMOTE_PAUSE) this._setPlaybackState('PAUSED');
        else if (data.type === REMOTE_RESUME) this._setPlaybackState('PLAYING');
    };

    private _setPlaybackState(target: 'PAUSED' | 'PLAYING') {
        for (const player of this._players()) {
            if (player.state() !== target) player.togglePause();
        }
    }

    public get animation_time() {
        return this._settings.get('app.default_animation_time');
    }

    public ngOnInit() {
        window.addEventListener('message', this._remote_message_handler);
        this.subscription('remote-message', () =>
            window.removeEventListener('message', this._remote_message_handler),
        );
        this.timeout(
            'not-bootstrapped',
            () => {
                log(
                    'SIGNAGE',
                    'Panel not bootstrapped after 3 seconds. Redirecting...',
                );
                this._router.navigate(['/bootstrap']);
            },
            3000,
        );
        const debug = sessionStorage.getItem('SIGNAGE.debug');
        if (debug !== null) this.debug.set(isDebugEnabled(debug));
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('debug')) {
                    const enabled = isDebugEnabled(params.get('debug'));
                    this.debug.set(enabled);
                    sessionStorage.setItem('SIGNAGE.debug', `${enabled}`);
                }
            }),
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    log(
                        'SIGNAGE',
                        `Display set to "${params.get('system_id')}"`,
                    );
                    this._signage.setDisplay(params.get('system_id'));
                    this.clearTimeout('not-bootstrapped');
                }
            }),
        );
        // Check override playlists for time endings
        this.interval('check_override', () => {
            const { ends_at } = this.override_playlist();
            if (ends_at && ends_at < time()) {
                this._signage.clearPlaylistOverride();
            }
        });
    }

    public handlePlayerEvent(e: MediaEvent, overridden = false) {
        // Check override playlists for single play throughs
        if (overridden && e.type === 'playlist_through') {
            const { ends_at } = this.override_playlist();
            if (!ends_at) this._signage.clearPlaylistOverride();
        }
        this._signage.storeMetricEvent(e);
    }
}
