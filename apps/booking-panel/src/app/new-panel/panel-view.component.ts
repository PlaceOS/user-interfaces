import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, RemoteLoggingService, VERSION } from '@placeos/common';
import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';
import {
    PanelStateService,
    PanelTimelinePosition,
} from '../panel-state.service';
import { burnInOffset, isNightTime } from './helpers';
import { PanelViewActionsComponent } from './panel-view-actions.component';
import { PanelViewDetailsComponent } from './panel-view-details.component';
import { PanelViewStatusComponent } from './panel-view-status.component';
import { PanelViewTimelineComponent } from './panel-view-timeline.component';

@Component({
    selector: 'panel-view',
    template: `
        <button
            class="relative flex h-full w-full items-stretch overflow-hidden"
            (click)="action()"
        >
            @let position = timeline_position;
            @if (show_timeline && position === 'left') {
                <panel-view-timeline
                    timeline-left
                    class="docked h-full w-28 shrink-0"
                ></panel-view-timeline>
            }
            <div class="flex h-full min-w-0 flex-1 flex-col">
                <div class="relative flex min-h-0 flex-1 flex-col">
                    <panel-view-details
                        class="min-h-0 w-full flex-1"
                    ></panel-view-details>
                    <panel-view-status
                        class="min-h-0 w-full flex-1"
                    ></panel-view-status>
                    <div
                        version
                        class="absolute right-0 bottom-0 min-h-12 min-w-24 p-2"
                        [style.bottom.rem]="
                            show_timeline && position === 'floating-bottom'
                                ? 6.5
                                : 0
                        "
                        (pointerdown)="hide_version && pressVersion()"
                        (pointerup)="releaseVersion()"
                        (pointerleave)="releaseVersion()"
                        (click)="hide_version && $event.stopPropagation()"
                    >
                        @if (!hide_version || show_version()) {
                            <div class="w-full text-xs opacity-40">
                                <ng-container
                                    >{{
                                        'COMMON.CONTROLS_VERSION' | translate
                                    }}:
                                </ng-container>
                                {{ version.hash }}
                            </div>
                            <div class="w-full text-xs opacity-40">
                                {{ version.time | date: 'longDate' }}
                                ({{ version.time | date: 'shortTime' }})
                            </div>
                        }
                    </div>
                </div>
                @if (show_timeline && position === 'bottom') {
                    <panel-view-timeline
                        timeline-bottom
                        class="docked h-24 w-full shrink-0"
                        [horizontal]="true"
                    ></panel-view-timeline>
                }
            </div>
            @if (show_timeline && position === 'right') {
                <panel-view-timeline
                    timeline-right
                    class="docked h-full w-28 shrink-0"
                ></panel-view-timeline>
            }
            @if (show_timeline && position === 'floating-left') {
                <panel-view-timeline
                    timeline-floating-left
                    class="absolute inset-y-24 left-5 z-30 w-28"
                ></panel-view-timeline>
            }
            @if (show_timeline && position === 'floating-bottom') {
                <panel-view-timeline
                    timeline-floating-bottom
                    class="absolute inset-x-24 bottom-5 z-30 h-20"
                    [horizontal]="true"
                ></panel-view-timeline>
            }
            @if (show_offline) {
                <div
                    class="absolute inset-0 z-40 bg-contain bg-center bg-no-repeat"
                    [style.background-color]="offline_color"
                    [style.background-image]="
                        'url(' + offline_image + ')' | safe: 'resource'
                    "
                >
                    <div
                        class="bg-warning absolute top-4 left-4 flex w-1/2 items-center justify-center rounded-sm p-4 text-5xl font-medium text-white shadow-sm"
                    >
                        {{
                            name ||
                                system()?.display_name ||
                                system()?.name ||
                                '&lt;Unknown Space&gt;'
                        }}
                    </div>
                    <div
                        class="absolute right-4 bottom-4 flex max-w-[25%] flex-col items-center text-center"
                    >
                        <div class="text-8xl">{{ capacity }}</div>
                        <div class="text-3xl">
                            {{ 'APP.BOOKING_PANEL.ROOM_CAPACITY' | translate }}
                        </div>
                    </div>
                </div>
            }
        </button>
        @if (!show_offline) {
            <panel-view-actions
                class="absolute z-30"
                [style]="actions_style()"
            ></panel-view-actions>
        }
        @if (dimmed()) {
            <div
                night-overlay
                class="absolute -inset-2 z-[60] bg-black/80"
                (click)="wake($event)"
            ></div>
        }
        @if (offline_since(); as since) {
            <div
                connection-badge
                class="bg-warning text-warning-content absolute top-4 left-1/2 z-50 flex -translate-x-1/2 items-center space-x-2 rounded-full px-4 py-2 text-lg shadow"
            >
                <icon>cloud_off</icon>
                <span>
                    {{ 'APP.BOOKING_PANEL.RECONNECTING' | translate }}
                    {{
                        'APP.BOOKING_PANEL.LAST_UPDATED'
                            | translate: { time: since | date: 'shortTime' }
                    }}
                </span>
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            :host > * {
                transform: translate(
                    var(--burn-in-x, 0px),
                    var(--burn-in-y, 0px)
                );
                transition: transform 1s ease-in-out;
            }
        `,
    ],
    providers: [PanelStateService],
    host: {
        '[style.--burn-in-x]': 'burn_in()[0] + "px"',
        '[style.--burn-in-y]': 'burn_in()[1] + "px"',
        '(pointerdown)': 'stayAwake()',
    },
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        PanelViewStatusComponent,
        PanelViewDetailsComponent,
        PanelViewTimelineComponent,
        PanelViewActionsComponent,
        IconComponent,
        CommonModule,
        TranslatePipe,
        SafePipe,
    ],
})
export class PanelViewComponent extends AsyncHandler {
    private _state = inject(PanelStateService);
    private _route = inject(ActivatedRoute);
    private _logger = inject(RemoteLoggingService);

    public readonly system = this._state.space;
    public readonly version = VERSION;
    /** Whether the hidden version details are visible */
    public readonly show_version = signal(false);

    /**
     * Time the connection dropped when the `connection_badge` feature is on
     * and the panel has been offline for over 10 seconds. Otherwise `0`.
     */
    public readonly offline_since = computed(() => {
        const since = this._state.offline_since();
        const now = this._state.clock();
        if (!since || now - since < 10 * 1000) return 0;
        return this._state.hasFeature('connection_badge') ? since : 0;
    });

    /** Time the panel stays bright after a tap during night mode */
    private _awake_until = signal(0);

    /**
     * Whether the `night_mode` feature dims the panel. Dims between
     * `night_start` and `night_end` while no meeting is busy or pending.
     */
    public readonly dimmed = computed(() => {
        const now = this._state.clock();
        if (!this._state.hasFeature('night_mode')) return false;
        if (now < this._awake_until()) return false;
        if (['busy', 'pending'].includes(this._state.status())) return false;
        return isNightTime(
            now,
            this._state.appSetting<string>('night_start'),
            this._state.appSetting<string>('night_end'),
        );
    });

    /** Pixel offset of the panel when the `burn_in_protection` feature is on */
    public readonly burn_in = computed<[number, number]>(() => {
        const now = this._state.clock();
        if (!this._state.hasFeature('burn_in_protection')) return [0, 0];
        return burnInOffset(now);
    });

    /** Keep the panel bright for 2 minutes. The waking tap does nothing else. */
    public wake(event: Event) {
        event.stopPropagation();
        this._awake_until.set(Date.now() + 2 * 60 * 1000);
    }

    /** Restart the 2 minute wake time on each tap while awake */
    public stayAwake() {
        if (this._awake_until() > Date.now()) {
            this._awake_until.set(Date.now() + 2 * 60 * 1000);
        }
    }

    public get hide_version() {
        return this._state.hasFeature('hide_version');
    }

    /** Position of the action bar over the "Now" column */
    public readonly actions_style = computed(() => {
        const position = this.show_timeline ? this.timeline_position : null;
        const left = position === 'left' ? '7rem' : '0rem';
        const right = position === 'right' ? '7rem' : '0rem';
        // Keep clear of the floating timeline on the left edge
        const inset = position === 'floating-left' ? '8.5rem' : '0rem';
        const bottom =
            position === 'bottom' ? 7 : position === 'floating-bottom' ? 8 : 1;
        return {
            left: `calc(${left} + ${inset})`,
            bottom: `${bottom}rem`,
            width: `calc((100% - ${left} - ${right}) / 2 - ${inset})`,
        };
    });

    public get name() {
        return this._state.setting('room_name');
    }

    public get show_offline() {
        return (
            this._state.setting('disable_book_now') &&
            this._state.setting('offline_image')
        );
    }

    public get offline_image() {
        return (
            this._state.setting('offline_image') ||
            this._state.setting('room_image')
        );
    }

    public get offline_color() {
        return this._state.setting('offline_color') || '#FFFFFF';
    }

    public get capacity() {
        return this._state.setting('room_capacity');
    }

    public get show_timeline() {
        return this._state.setting('show_timeline') === true;
    }

    public get timeline_position(): PanelTimelinePosition {
        return this._state.setting('timeline_position') || 'floating-left';
    }

    public get can_book() {
        return this._state.setting('disable_book_now') !== true;
    }

    public readonly book = () =>
        this._state.newBooking(
            Date.now(),
            this._state.setting('disable_book_now_host') !== false,
        );
    public readonly checkin = () => this._state.checkin();
    public readonly endMeeting = () => this._state.confirmEnd();

    public action() {
        this.timeout('action', () => {
            const status = this._state.setting('status');
            if (status === 'busy') {
                if (this._state.setting('enable_end_meeting_button') === true) {
                    this.endMeeting();
                }
            } else if (this.can_book) {
                status === 'pending' ? this.checkin() : this.book();
            }
        });
    }

    /** Show the version details after a 2 second press */
    public pressVersion() {
        this.timeout(
            'version_press',
            () => {
                this.show_version.set(true);
                this.timeout(
                    'version_hide',
                    () => this.show_version.set(false),
                    10 * 1000,
                );
            },
            2000,
        );
    }

    public releaseVersion() {
        this.clearTimeout('version_press');
    }

    public ngOnInit() {
        this._state.system = '';
        const params = this._route.snapshot.paramMap;
        if (params.has('system_id')) {
            this._state.system = params.get('system_id');
            this._logger.setMetadata(params.get('system_id'));
        }
        document.body.parentElement.classList.add('showing-panel');
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        document.body.parentElement.classList.remove('showing-panel');
    }
}
