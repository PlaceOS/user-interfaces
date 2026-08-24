import { DatePipe } from '@angular/common';
import {
    Component,
    inject,
    input,
    OnInit,
    signal,
    viewChildren,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    log,
    setAutoReloadGate,
    SettingsService,
    updateCheckState,
    VERSION,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { isOnline } from '@placeos/ts-client';
import {
    clearDebugOverlayLayouts,
    DebugOverlayComponent,
} from './debug-overlay.component';
import { registerSignageDiagnostics } from './diagnostics';
import { time } from './media-helpers';
import { MediaPlayerComponent } from './media-player.component';
import { MediaEvent, SignageService } from './signage.service';
import { recordHeartbeat } from './watchdog';

/** PostMessage types accepted from a parent frame (e.g. wayfinder shell) */
const REMOTE_PAUSE = 'signage:pause';
const REMOTE_RESUME = 'signage:resume';
const MUTE_STORAGE_KEY = 'SIGNAGE.muted';

function isDebugEnabled(value: string | null) {
    return value !== null && value !== 'false';
}

/**
 * Whether the global loading overlay is on top of the player. Checked from the
 * DOM rather than by re-deriving its condition, so this cannot drift out of
 * step with it; if the markup ever changes this reads as "not covered" and the
 * watchdog simply loses one signal rather than reloading a healthy player.
 */
function isCoveredByLoadingOverlay() {
    return !!document.querySelector('global-loading [loader]');
}

@Component({
    selector: 'signage-panel',
    template: `
        <media-player
            [playlist]="playlist()"
            [controls]="debug()"
            [layout_editing]="debug_layout_editing()"
            [layout_reset_count]="debug_layout_reset_count()"
            [muted]="muted()"
            [transparent]="transparent()"
            [override]="override_playlist().playlist.length > 0"
            [animation_time]="animation_time"
            (playing_id)="playing_id.set($event)"
            (event)="handlePlayerEvent($event)"
            (mutedChange)="setMuted($event)"
            [class.z-0]="!debug_layout_editing()"
            [class.z-auto]="debug_layout_editing()"
        />
        @if (override_playlist().playlist.length > 0) {
            <media-player
                [playlist]="override_playlist().playlist"
                [controls]="debug()"
                [layout_editing]="debug_layout_editing()"
                [layout_reset_count]="debug_layout_reset_count()"
                [can_close]="true"
                [muted]="muted()"
                [transparent]="transparent()"
                [animation_time]="animation_time"
                (playing_id)="playing_id.set($event)"
                (event)="handlePlayerEvent($event, true)"
                (mutedChange)="setMuted($event)"
                (closed)="clearOverridePlaylist()"
                class="absolute inset-0"
                [class.z-10]="!debug_layout_editing()"
                [class.z-auto]="debug_layout_editing()"
            />
        }
        @if (debug()) {
            @if (debug_layout_editing()) {
                <div
                    data-testid="debug-layout-grid"
                    class="debug-layout-grid pointer-events-none absolute inset-0 z-10"
                ></div>
            }
            <div
                class="border-base-300 bg-base-100 text-base-content absolute top-0 left-1/2 z-30 flex w-40 -translate-x-1/2 items-center gap-1 rounded-b-lg border-x border-b p-1 text-xs shadow-lg"
                [attr.aria-label]="
                    debug_layout_editing()
                        ? 'Finish editing debug layout'
                        : 'Edit debug layout'
                "
            >
                <div class="flex-1 px-4 text-sm">
                    {{ debug_layout_editing() ? 'Editing' : 'Edit layout' }}
                </div>
                @if (debug_layout_editing()) {
                    <button
                        icon
                        default
                        aria-label="Reset debug layout"
                        [matTooltip]="'Reset Layout'"
                        (click)="resetDebugLayout()"
                    >
                        <icon>restart_alt</icon>
                    </button>
                    <button
                        icon
                        default
                        aria-label="Finish editing debug layout"
                        [matTooltip]="'Save Layout'"
                        class="border-success bg-success-light text-success"
                        (click)="
                            debug_layout_editing.set(!debug_layout_editing())
                        "
                    >
                        <icon>{{ 'done' }}</icon>
                    </button>
                } @else {
                    <button
                        icon
                        default
                        aria-label="Edit debug layout"
                        [matTooltip]="'Edit Layout'"
                        (click)="
                            debug_layout_editing.set(!debug_layout_editing())
                        "
                    >
                        <icon>{{ 'dashboard_customize' }}</icon>
                    </button>
                }
            </div>
            <debug-overlay
                overlay_id="build-details"
                [editing]="debug_layout_editing()"
                [reset_count]="debug_layout_reset_count()"
                label="build details"
                icon="info"
                [initial_position]="{ x: 0.01, y: 0.99 }"
            >
                <div
                    stroke
                    class="text-base-100/60 bg-base-content/40 rounded px-2 py-1 font-mono text-[0.625rem]"
                >
                    {{ version_date | date: 'mediumDate' }} &ndash;
                    {{ version_date | date: 'shortTime' }}
                    <span class="opacity-50">|</span>&nbsp;<span
                        class="select-all"
                        >{{ version_hash }}</span
                    >
                </div>
            </debug-overlay>
            <debug-overlay
                overlay_id="playing-item"
                [editing]="debug_layout_editing()"
                [reset_count]="debug_layout_reset_count()"
                label="playing item"
                icon="perm_media"
                [initial_position]="{ x: 0.99, y: 0.99 }"
            >
                <div
                    stroke
                    class="text-base-100/60 bg-base-content/40 rounded px-2 py-1 font-mono text-[0.625rem]"
                >
                    {{ playing_id() }}
                    @if (!playing_id()) {
                        <span>No item playing</span>
                    }
                </div>
            </debug-overlay>
        }
    `,
    styles: `
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        .stroke {
            -webkit-text-stroke: 1px #000;
        }

        .debug-layout-grid {
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--primary) 35%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--primary) 35%, transparent) 1px,
                    transparent 1px
                );
            background-size: 5% 5%;
        }

        @media (min-width: 1024px) {
            .debug-layout-grid {
                background-size: 2.5% 2.5%;
            }
        }
    `,
    imports: [
        DatePipe,
        DebugOverlayComponent,
        IconComponent,
        MatRippleModule,
        MediaPlayerComponent,
        MatTooltipModule,
    ],
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
    public readonly muted = signal(true);
    public readonly debug_layout_editing = signal(false);
    public readonly debug_layout_reset_count = signal(0);
    public readonly transparent = input(false);
    public readonly version_hash = VERSION.hash;
    public readonly version_date = VERSION.time;

    private readonly _players = viewChildren(MediaPlayerComponent);

    public readonly clearOverridePlaylist = () =>
        this._signage.clearPlaylistOverride();

    public resetDebugLayout() {
        clearDebugOverlayLayouts();
        this.debug_layout_reset_count.update((count) => count + 1);
    }

    public setMuted(muted: boolean) {
        this.muted.set(muted);
        sessionStorage.setItem(MUTE_STORAGE_KEY, `${muted}`);
    }

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
        // Hold application reloads back while content that plays to completion
        // is on screen, so an update lands between items instead of cutting a
        // video short.
        setAutoReloadGate(
            () => !this._players().some((_) => _.isMidPlayThroughItem()),
        );
        this.subscription('reload-gate', () => setAutoReloadGate(null));
        // Content is only really on screen when the shared loading overlay is
        // not covering it. Without this a player stuck behind that overlay
        // looks healthy: the timers underneath keep running perfectly.
        this.interval(
            'visible_check',
            () => {
                if (!isCoveredByLoadingOverlay()) recordHeartbeat('visible');
            },
            1000,
        );
        this.subscription(
            'diagnostics',
            registerSignageDiagnostics({
                getState: () => this.diagnosticState(),
                poll: () => this._signage.refresh(),
            }),
        );
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
        const muted = sessionStorage.getItem(MUTE_STORAGE_KEY);
        if (muted !== null) this.muted.set(muted === 'true');
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

    /** Everything worth knowing about this player, for console diagnostics */
    public diagnosticState() {
        return {
            version: {
                hash: VERSION.hash,
                built: new Date(VERSION.time).toISOString(),
            },
            online: isOnline(),
            updates: updateCheckState(),
            ...this._signage.diagnostics(),
            players: this._players().map((player, index) => ({
                role: index === 0 ? 'background' : 'takeover',
                state: player.state(),
                item_index: player.index(),
                progress_percent: Math.round(player.progress()),
                elapsed_s: player.duration(),
                waiting_for_item: player.waiting_for_item(),
                mid_play_through: player.isMidPlayThroughItem(),
                playing: player.active_item
                    ? {
                          id: player.active_item.id,
                          name: player.active_item.name,
                          type: player.active_item.type,
                          playlist: player.active_item.playlist_name,
                      }
                    : null,
                queue: player.playlist_items.map((_) => _.id),
            })),
        };
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
